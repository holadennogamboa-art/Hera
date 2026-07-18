import express from 'express'
import cors from 'cors'
import fetch from 'node-fetch'
import dotenv from 'dotenv'

dotenv.config({ path: '.env.local' })

const app = express()
const PORT = process.env.PORT || 5000

app.use(cors())
app.use(express.json({ limit: '50mb' }))

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() })
})

/**
 * POST /api/diffuse
 * Body: { imageDataUrl: string }
 * Response: { resultUrl: string } o { error: string }
 */
app.post('/api/diffuse', async (req, res) => {
  try {
    const { imageDataUrl } = req.body
    if (!imageDataUrl) return res.status(400).json({ error: 'Missing imageDataUrl' })

    // Validar tamaño (max 10MB)
    if (imageDataUrl.length > 10 * 1024 * 1024) {
      return res.status(413).json({ error: 'Image too large (max 10MB)' })
    }

    console.log('[diffuse] Received image, size:', Math.round(imageDataUrl.length / 1024), 'KB')

    // Verificar API key
    if (!process.env.REPLICATE_API_KEY) {
      console.error('[diffuse] REPLICATE_API_KEY not found in .env.local')
      return res.status(500).json({ error: 'Server misconfigured: missing REPLICATE_API_KEY' })
    }

    // Llamar a Replicate API
    console.log('[diffuse] Calling Replicate API...')
    const prediction = await fetch('https://api.replicate.com/v1/predictions', {
      method: 'POST',
      headers: {
        Authorization: `Token ${process.env.REPLICATE_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        version: '8de7b1b6c7c16e87b9c4beb34d891f8623eae250c4f1090ec85e99df272e5b70', // Upscale 4x
        input: {
          image: imageDataUrl,
          scale: 4,
        },
      }),
    })

    if (!prediction.ok) {
      const err = await prediction.json()
      console.error('[diffuse] Replicate error:', prediction.status, err)
      return res.status(prediction.status).json({ error: 'Replicate API error', details: err })
    }

    const result = await prediction.json()
    console.log('[diffuse] Prediction created:', result.id)

    // Polling: esperar hasta que la predicción termine
    let finalResult = result
    let attempts = 0
    const maxAttempts = 120 // 2 min máximo

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
      console.log(`[diffuse] Status: ${finalResult.status} (attempt ${attempts}/${maxAttempts})`)
    }

    if (finalResult.status === 'succeeded') {
      const outputUrl = Array.isArray(finalResult.output) ? finalResult.output[0] : finalResult.output
      console.log('[diffuse] Success! Output URL:', outputUrl?.slice(0, 50) + '...')
      return res.json({ resultUrl: outputUrl })
    } else if (finalResult.status === 'failed') {
      console.error('[diffuse] Prediction failed:', finalResult.error)
      return res.status(500).json({ error: 'Diffusion processing failed', details: finalResult.error })
    } else {
      console.error('[diffuse] Timeout after 2 minutes')
      return res.status(504).json({ error: 'Processing timeout (exceeded 2 minutes)' })
    }
  } catch (err) {
    console.error('[diffuse] Server error:', err)
    res.status(500).json({ error: 'Internal server error', message: err.message })
  }
})

app.listen(PORT, () => {
  console.log(`[server] ✨ HERA diffusion server running on http://localhost:${PORT}`)
  console.log(`[server] API key configured: ${process.env.REPLICATE_API_KEY ? '✅ yes' : '❌ NO'}`)
})
