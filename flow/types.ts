/**
 * HERA SKIN LAB — types v4.0
 * Se han ELIMINADO: LIGHTING_PRESETS, sharpness, recommendation.
 * Eran las tres fuentes del "look falso" que arruinaba las fotos.
 */

export type { PresetId, TexturePreset } from './prompts'
export { PRESETS, NEGATIVE_PROMPT, buildPrompt, aspectRatioOf } from './prompts'

export type BananaModel = '🍌 Nano Banana Pro' | '🍌 Nano Banana 2'

export const MODELS: BananaModel[] = ['🍌 Nano Banana Pro', '🍌 Nano Banana 2']

export type ProcessingStep =
  | 'Generando textura'
  | 'Cargando imágenes'
  | 'Alineando estructura'
  | 'Extrayendo micro-textura'
  | 'Verificando fidelidad por zonas'
  | 'Injertando en la foto real'
  | 'Reconstruyendo anatomía'

export interface SourceImage {
  base64: string
  mimeType: string
  mediaId: string
}

export interface ComparisonState {
  active: boolean
  imageA: string | null
  imageB: string | null
  labelA: string
  labelB: string
}

export interface AppState {
  original: SourceImage | null
  processed: string | null
  mask: string | null
  maskHistory: string[]
  memorySlots: (string | null)[]
  comparison: ComparisonState
  isProcessing: boolean
  structureRepair: boolean
  error: string | null
  selectedModel: BananaModel
}
