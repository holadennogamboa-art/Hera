import express from 'express'
import cors from 'cors'
import fetch from 'node-fetch'
import dotenv from 'dotenv'

dotenv.config({ path: '.env.local' })

const app = express()
const PORT = process.env.PORT || 5000

app.use(cors())
app.use(express.json({ limit: '50mb' }))

// ─────────────────────────────────────────────────────────────
// Modelo estilo Magnific: philz1337x/clarity-upscaler
// (clon open-source de Magnific "Sharpy"). Usamos el endpoint de
// modelo para correr siempre la última versión sin fijar un hash.
// ─────────────────────────────────────────────────────────────
const MODEL_ENDPOINT =
  'https://api.replicate.com/v1/models/philz1337x/clarity-upscaler/predictions'

// Receta "Sharpy / Portrait" — realismo de piel tipo Magnific.
const MAGNIFIC_STYLE = {
  prompt:
    'masterpiece, best quality, highres, raw photo, realistic skin texture, visible pores, fine facial hair, natural skin imperfections, sharp focus, 8k, professional photography',
  negative_prompt:
    '(worst quality, low quality, normal quality:2), plastic skin, smooth skin, airbrushed, waxy, blurry, 3d render, cgi, illustration, painting, cartoon, oversaturated',
  scale_factor: 2, // 2x conserva mejor la identidad (Magnific Portrait)
  dynamic: 6, // HDR moderado
  creativity: 0.3, // bajo → no inventa, solo reconstruye textura
  resemblance: 1.2, // alto → fiel al original
  sharpen: 1,
  num_inference_steps: 18,
}

app.get('/health', (req, res) => {
  res.json({ status: 'ok', model: 'clarity-upscaler (Magnific-style)', timestamp: new Date().toISOString() })
})

/**
 * POST /api/diffuse
 * Body: {
 *   imageDataUrl: string,          // requerido
 *   creativity?: number,           // 0–1  (default 0.3)
 *   resemblance?: number,          // 0–3  (default 1.2)
 *   dynamic?: number,              // 1–50 HDR (default 6)
 *   scaleFactor?: 2 | 4,           // (default 2)
 *   prompt?: string,
 *   negativePrompt?: string
 * }
 * Response: { resultUrl: string } | { error: string }
 */
app.post('/api/diffuse', async (req, res) => {
  try {
    const { imageDataUrl, creativity, resemblance, dynamic, scaleFactor, prompt, negativePrompt } = req.body
    if (!imageDataUrl) return res.status(400).json({ error: 'Missing imageDataUrl' })

    if (imageDataUrl.length > 10 * 1024 * 1024) {
      return res.status(413).json({ error: 'Image too large (max 10MB)' })
    }
    if (!process.env.REPLICATE_API_KEY) {
      console.error('[diffuse] REPLICATE_API_KEY not found in .env.local')
      return res.status(500).json({ error: 'Server misconfigured: missing REPLICATE_API_KEY' })
    }

    // Fusionar receta Magnific con overrides opcionales del cliente
    const input = {
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

    console.log('[diffuse] Received image:', Math.round(imageDataUrl.length / 1024), 'KB')
    console.log('[diffuse] Params → creativity:', input.creativity, 'resemblance:', input.resemblance, 'dynamic:', input.dynamic, 'scale:', input.scale_factor)

    const prediction = await fetch(MODEL_ENDPOINT, {
      method: 'POST',
      headers: {
        Authorization: `Token ${process.env.REPLICATE_API_KEY}`,
        'Content-Type': 'application/json',
        Prefer: 'wait=5', // deja que Replicate espere hasta 5s antes de responder
      },
      body: JSON.stringify({ input }),
    })

    if (!prediction.ok) {
      const err = await prediction.json().catch(() => ({}))
      console.error('[diffuse] Replicate error:', prediction.status, err)
      return res.status(prediction.status).json({ error: 'Replicate API error', details: err })
    }

    const result = await prediction.json()
    console.log('[diffuse] Prediction created:', result.id, '· status:', result.status)

    // Polling hasta terminar (Clarity tarda ~30–60s con difusión)
    let finalResult = result
    let attempts = 0
    const maxAttempts = 180 // hasta 3 min

    while (
      (finalResult.status === 'processing' || finalResult.status === 'starting') &&
      attempts < maxAttempts
    ) {
      await new Promise((r) => setTimeout(r, 1000))
      const check = await fetch(`https://api.replicate.com/v1/predictions/${result.id}`, {
        headers: { Authorization: `Token ${process.env.REPLICATE_API_KEY}` },
      })
      if (!check.ok) {
        console.error('[diffuse] Check failed:', check.status)
        return res.status(check.status).json({ error: 'Failed to check prediction status' })
      }
      finalResult = await check.json()
      attempts++
      if (attempts % 5 === 0) console.log(`[diffuse] ${finalResult.status} (${attempts}s)`)
    }

    if (finalResult.status === 'succeeded') {
      const outputUrl = Array.isArray(finalResult.output) ? finalResult.output[0] : finalResult.output
      console.log('[diffuse] ✅ Success:', String(outputUrl).slice(0, 60) + '...')
      return res.json({ resultUrl: outputUrl })
    } else if (finalResult.status === 'failed') {
      console.error('[diffuse] ❌ Failed:', finalResult.error)
      return res.status(500).json({ error: 'Diffusion processing failed', details: finalResult.error })
    } else {
      console.error('[diffuse] ⏱ Timeout after 3 min')
      return res.status(504).json({ error: 'Processing timeout (exceeded 3 minutes)' })
    }
  } catch (err) {
    console.error('[diffuse] Server error:', err)
    res.status(500).json({ error: 'Internal server error', message: err.message })
  }
})

app.listen(PORT, () => {
  console.log(`[server] ✨ HERA diffusion server (Magnific-style) on http://localhost:${PORT}`)
  console.log(`[server] Model: philz1337x/clarity-upscaler`)
  console.log(`[server] API key: ${process.env.REPLICATE_API_KEY ? '✅ configured' : '❌ MISSING'}`)
})
