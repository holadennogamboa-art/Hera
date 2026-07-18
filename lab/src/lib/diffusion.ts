export interface DiffusionResponse {
  resultUrl: string
}

/** Parámetros estilo Magnific ("Sharpy"). Todos opcionales — el server tiene defaults. */
export interface DiffusionParams {
  creativity?: number // 0–1  · bajo = fiel, alto = inventa detalle
  resemblance?: number // 0–3 · alto = pega al original
  dynamic?: number // 1–50 · HDR
  scaleFactor?: 2 | 4
  prompt?: string
  negativePrompt?: string
}

/** Presets tipo Magnific listos para usar. */
export const MAGNIFIC_PRESETS: Record<string, DiffusionParams & { label: string; hint: string }> = {
  subtle: { label: 'SUTIL', hint: 'Máxima fidelidad, textura ligera', creativity: 0.2, resemblance: 1.5, dynamic: 4, scaleFactor: 2 },
  balanced: { label: 'EQUILIBRADO', hint: 'Poros y piel real (recomendado)', creativity: 0.3, resemblance: 1.2, dynamic: 6, scaleFactor: 2 },
  strong: { label: 'FUERTE', hint: 'Reconstrucción intensa de detalle', creativity: 0.45, resemblance: 0.9, dynamic: 8, scaleFactor: 2 },
}

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms))

/**
 * Procesa la imagen con el modelo de difusión.
 * Arranca la predicción y hace polling al estado hasta terminar.
 * Endpoints relativos → funciona igual en Vercel (producción) que en
 * `vercel dev` / proxy local. Devuelve la URL pública del resultado.
 */
export async function callDiffusionAPI(imageDataUrl: string, params: DiffusionParams = {}): Promise<string> {
  // 1) Arrancar la predicción
  const startRes = await fetch('/api/diffuse-start', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ imageDataUrl, ...params }),
  })
  if (!startRes.ok) {
    const error = await startRes.json().catch(() => ({}))
    throw new Error(error.error || `API error: ${startRes.status}`)
  }
  const { id } = await startRes.json()
  if (!id) throw new Error('No prediction id returned by server')

  // 2) Polling del estado (hasta ~3 min)
  for (let i = 0; i < 90; i++) {
    await sleep(2000)
    const statusRes = await fetch(`/api/diffuse-status?id=${encodeURIComponent(id)}`)
    if (!statusRes.ok) continue
    const data = await statusRes.json()
    if (data.status === 'succeeded' && data.resultUrl) return data.resultUrl as string
    if (data.status === 'failed') throw new Error(data.error || 'Diffusion processing failed')
    if (data.status === 'canceled') throw new Error('Prediction was canceled')
  }
  throw new Error('Processing timeout (exceeded 3 minutes)')
}

/**
 * Descargar la imagen resultante (convertir URL remota a blob local)
 */
export async function downloadDiffusionResult(resultUrl: string, filename: string): Promise<void> {
  try {
    const response = await fetch(resultUrl)
    if (!response.ok) throw new Error('Failed to fetch result image')

    const blob = await response.blob()
    const url = URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.download = filename
    link.click()
    URL.revokeObjectURL(url)
  } catch (err) {
    console.error('[diffusion] Download failed:', err)
    throw new Error(`Failed to download result: ${err instanceof Error ? err.message : 'unknown'}`)
  }
}
