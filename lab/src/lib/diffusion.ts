export interface DiffusionResponse {
  resultUrl: string
}

/**
 * Llamar al backend de diffusion para procesar imagen
 * Devuelve la URL del resultado (que es una URL pública de Replicate)
 */
export async function callDiffusionAPI(imageDataUrl: string): Promise<string> {
  try {
    const response = await fetch('http://localhost:5000/api/diffuse', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ imageDataUrl }),
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
