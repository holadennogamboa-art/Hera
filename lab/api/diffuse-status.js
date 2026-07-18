// Vercel serverless: consulta el estado de una predicción de Replicate.
// El cliente hace polling a este endpoint cada ~2s hasta 'succeeded'/'failed'.
export default async function handler(req, res) {
  try {
    const id = req.query?.id
    if (!id) return res.status(400).json({ error: 'Missing id' })
    if (!process.env.REPLICATE_API_KEY) {
      return res.status(500).json({ error: 'Server misconfigured: missing REPLICATE_API_KEY' })
    }

    const r = await fetch(`https://api.replicate.com/v1/predictions/${id}`, {
      headers: { Authorization: `Token ${process.env.REPLICATE_API_KEY}` },
    })
    if (!r.ok) return res.status(r.status).json({ error: 'Failed to check prediction status' })

    const data = await r.json()
    const resultUrl =
      data.status === 'succeeded'
        ? Array.isArray(data.output)
          ? data.output[0]
          : data.output
        : null
    return res.status(200).json({ status: data.status, resultUrl, error: data.error || null })
  } catch (err) {
    return res.status(500).json({ error: 'Internal server error', message: err.message })
  }
}
