// Vercel serverless (raíz del repo): inicia una predicción en Replicate.
// Estilo Magnific "Sharpy" — reconstrucción de poros y micro-textura.
const MODEL_ENDPOINT =
  'https://api.replicate.com/v1/models/philz1337x/clarity-upscaler/predictions'

// Acepta la llave con cualquiera de los dos nombres habituales.
const KEY = process.env.REPLICATE_API_KEY || process.env.REPLICATE_API_TOKEN

const MAGNIFIC_STYLE = {
  prompt:
    'masterpiece, best quality, highres, raw photo, realistic skin texture, visible pores, natural skin, sharp focus, 8k, professional photography',
  negative_prompt:
    '(worst quality, low quality, normal quality:2), plastic skin, smooth skin, airbrushed, waxy, blurry, 3d render, cgi, illustration, cartoon',
  scale_factor: 2,
  dynamic: 6,
  creativity: 0.3,
  resemblance: 1.2,
  sharpen: 1,
  num_inference_steps: 18,
}

function buildInput(body) {
  const { imageDataUrl, creativity, resemblance, dynamic, scaleFactor, prompt, negativePrompt } = body || {}
  return {
    image: imageDataUrl,
    prompt: prompt || MAGNIFIC_STYLE.prompt,
    negative_prompt: negativePrompt || MAGNIFIC_STYLE.negative_prompt,
    scale_factor: scaleFactor ?? MAGNIFIC_STYLE.scale_factor,
    dynamic: dynamic ?? MAGNIFIC_STYLE.dynamic,
    creativity: creativity ?? MAGNIFIC_STYLE.creativity,
    resemblance: resemblance ?? MAGNIFIC_STYLE.resemblance,
    sharpen: MAGNIFIC_STYLE.sharpen,
    num_inference_steps: MAGNIFIC_STYLE.num_inference_steps,
    output_format: 'png',
  }
}

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Método no permitido' })
  try {
    const body = req.body || {}
    if (!body.imageDataUrl) return res.status(400).json({ error: 'Falta la imagen' })
    if (String(body.imageDataUrl).length > 4 * 1024 * 1024) {
      return res.status(413).json({ error: 'Imagen demasiado grande (máx ~4MB). Usa una foto más pequeña.' })
    }
    if (!KEY) {
      return res.status(500).json({ error: 'Falta REPLICATE_API_KEY en Vercel (Environment Variables).' })
    }

    const r = await fetch(MODEL_ENDPOINT, {
      method: 'POST',
      headers: { Authorization: `Bearer ${KEY}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({ input: buildInput(body) }),
    })

    // Surface el error REAL de Replicate (código + mensaje) para poder diagnosticar.
    if (!r.ok) {
      const text = await r.text().catch(() => '')
      let msg = text
      try { msg = JSON.parse(text).detail || JSON.parse(text).title || text } catch {}
      return res.status(200).json({
        error: `Replicate ${r.status}: ${String(msg).slice(0, 240)}`,
      })
    }
    const data = await r.json()
    return res.status(200).json({ id: data.id, status: data.status })
  } catch (err) {
    return res.status(200).json({ error: `Error interno: ${err.message}` })
  }
}
