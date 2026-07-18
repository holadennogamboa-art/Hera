// Receta compartida "Sharpy / Portrait" — realismo de piel estilo Magnific.
// Usada por diffuse-start (serverless) y por el server Express local.
export const MODEL_ENDPOINT =
  'https://api.replicate.com/v1/models/philz1337x/clarity-upscaler/predictions'

export const MAGNIFIC_STYLE = {
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

/** Construye el objeto `input` de Replicate fusionando la receta con overrides del cliente. */
export function buildInput(body) {
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
