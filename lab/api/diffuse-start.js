// Vercel serverless: inicia una predicción en Replicate y devuelve su id.
// Se separa de la consulta de estado para nunca exceder el límite de tiempo
// de las funciones serverless (la difusión tarda 30–60s).
import { MODEL_ENDPOINT, buildInput } from './_config.js'

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' })
  try {
    const body = req.body || {}
    if (!body.imageDataUrl) return res.status(400).json({ error: 'Missing imageDataUrl' })
    if (String(body.imageDataUrl).length > 10 * 1024 * 1024) {
      return res.status(413).json({ error: 'Image too large (max 10MB)' })
    }
    if (!process.env.REPLICATE_API_KEY) {
      return res.status(500).json({ error: 'Server misconfigured: missing REPLICATE_API_KEY' })
    }

    const r = await fetch(MODEL_ENDPOINT, {
      method: 'POST',
      headers: {
        Authorization: `Token ${process.env.REPLICATE_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ input: buildInput(body) }),
    })

    if (!r.ok) {
      const err = await r.json().catch(() => ({}))
      return res.status(r.status).json({ error: 'Replicate API error', details: err })
    }
    const data = await r.json()
    return res.status(200).json({ id: data.id, status: data.status })
  } catch (err) {
    return res.status(500).json({ error: 'Internal server error', message: err.message })
  }
}
