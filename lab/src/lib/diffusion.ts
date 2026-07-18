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

/**
 * Llamar al backend de diffusion para procesar imagen.
 * Devuelve la URL del resultado (URL pública de Replicate).
 */
export async function callDiffusionAPI(imageDataUrl: string, params: DiffusionParams = {}): Promise<string> {
  try {
    const response = await fetch('http://localhost:5000/api/diffuse', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ imageDataUrl, ...params }),
    })

    if (!response.ok) {
      const error = await response.json()
      throw new Error(error.error || `API error: ${response.status}`)
    }

    const data: DiffusionResponse = await response.json()
    return data.resultUrl
  } catch (err) {
    console.error('[diffusion] API call failed:', err)
    throw new Error(
      `Diffusion processing failed: ${err instanceof Error ? err.message : 'unknown error'}`
    )
  }
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
