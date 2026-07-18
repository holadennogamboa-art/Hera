// Vercel serverless (raíz del repo): inicia una predicción en Replicate.
// Estilo Magnific "Sharpy" — reconstrucción de poros y micro-textura.
// Autocontenido para no depender de imports entre carpetas.
const MODEL_ENDPOINT =
  'https://api.replicate.com/v1/models/philz1337x/clarity-upscaler/predictions'

const MAGNIFIC_STYLE = {
  prompt:
    'masterpiece, best quality, highres, raw photo, realistic skin texture, visible pores, fine facial hair, natural skin imperfections, sharp focus, 8k, professional photography',
  negative_prompt:
    '(worst quality, low quality, normal quality:2), plastic skin, smooth skin, airbrushed, waxy, blurry, 3d render, cgi, illustration, painting, cartoon, oversaturated',
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
