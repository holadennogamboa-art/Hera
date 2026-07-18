import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { Loader2, X, Eye } from 'lucide-react'
import { Button } from './ui/button'
import { callDiffusionAPI } from '../lib/diffusion'

interface DiffusionProcessorProps {
  sourceImage: string
  onSuccess: (resultUrl: string) => void
  onClose: () => void
}

export function DiffusionProcessor({ sourceImage, onSuccess, onClose }: DiffusionProcessorProps) {
  const [processing, setProcessing] = useState(false)
  const [result, setResult] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [compare, setCompare] = useState(false)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const startProcessing = async () => {
      setProcessing(true)
      setError(null)
      setProgress(0)

      const progressInterval = setInterval(() => {
        setProgress((p) => {
          if (p >= 90) clearInterval(progressInterval)
          return Math.min(p + Math.random() * 15, 90)
        })
      }, 2000)

      try {
        const resultUrl = await callDiffusionAPI(sourceImage)
        clearInterval(progressInterval)
        setProgress(100)
        setResult(resultUrl)
      } catch (err) {
        clearInterval(progressInterval)
        setError(err instanceof Error ? err.message : 'Unknown error')
        setProgress(0)
      } finally {
        setProcessing(false)
      }
    }

    startProcessing()
  }, [sourceImage])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[140] bg-black/95 backdrop-blur-xl overflow-y-auto"
    >
      <div className="max-w-2xl mx-auto p-4 md:p-8 pb-24">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg md:text-xl font-bold tracking-[0.2em] uppercase">
            Realismo de Piel · Difusión 4x
          </h2>
          <button
            onClick={onClose}
            className="p-3 bg-white/10 hover:bg-white/20 rounded-full transition-all cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="space-y-6">
          {/* Imagen de entrada */}
          <div>
            <p className="text-[11px] font-bold tracking-widest uppercase text-gray-400 mb-3">
              Imagen base (FINAL stage)
            </p>
            <div className="relative aspect-video bg-white/5 rounded-2xl border border-white/10 overflow-hidden flex items-center justify-center">
              <img src={sourceImage} alt="Source" className="w-full h-full object-contain" />
            </div>
          </div>

          {/* Procesamiento */}
          {processing && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-6 bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20 rounded-2xl text-center space-y-4"
            >
              <div className="flex items-center justify-center gap-3 mb-2">
                <Loader2 className="w-6 h-6 animate-spin text-purple-400" />
                <p className="text-sm font-mono tracking-widest uppercase text-purple-300">
                  Procesando...
                </p>
              </div>

              <p className="text-[11px] text-gray-300 leading-relaxed">
                El modelo de difusión está reconstruyendo <span className="font-bold">poros</span>,{' '}
                <span className="font-bold">micro-texturas</span> e{' '}
                <span className="font-bold">imperfecciones naturales</span> con 4x upscaling
              </p>

              {/* Progress bar */}
              <div className="pt-2">
                <div className="w-full h-2.5 bg-white/5 rounded-full overflow-hidden border border-white/10">
                  <motion.div
                    className="h-full bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500"
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.8 }}
                  />
                </div>
                <p className="text-[10px] text-gray-500 mt-2 font-mono">{Math.round(progress)}%</p>
              </div>

              <p className="text-[10px] text-gray-600 pt-1">Tiempo estimado: 25-40 segundos</p>
            </motion.div>
          )}

          {/* Error */}
          {error && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-5 bg-red-500/10 border border-red-500/30 rounded-2xl space-y-3"
            >
              <p className="text-[12px] font-bold text-red-300">⚠️ Error en procesamiento</p>
              <p className="text-[11px] text-red-200 font-mono">{error}</p>
              <div className="text-[10px] text-gray-400 space-y-1">
                <p>
                  <span className="font-bold">Verifica:</span>
                </p>
                <ul className="list-disc list-inside space-y-0.5 ml-1">
                  <li>Backend corriendo: localhost:5000 ✓</li>
                  <li>REPLICATE_API_KEY en server/.env.local ✓</li>
                  <li>Conexión a internet activa ✓</li>
                </ul>
              </div>
              <div className="flex gap-2 pt-2">
                <Button size="sm" onClick={() => window.location.reload()} className="text-[10px]">
                  Reintentar
                </Button>
                <Button size="sm" variant="secondary" onClick={onClose} className="text-[10px]">
                  Cancelar
                </Button>
              </div>
            </motion.div>
          )}

          {/* Resultado */}
          {result && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-4"
            >
              <div className="text-[11px] font-bold tracking-widest uppercase text-green-400 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                Procesamiento completado
              </div>

              {/* Imagen resultado con comparador */}
              <div>
                <div className="relative aspect-video bg-white/5 rounded-2xl border border-white/10 overflow-hidden flex items-center justify-center">
                  <motion.img
                    key={compare ? 'source' : 'result'}
                    src={compare ? sourceImage : result}
                    alt={compare ? 'Original' : 'Result'}
                    className="w-full h-full object-contain"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  />
                  <div className="absolute bottom-3 right-3 z-20 flex items-center gap-1.5 bg-black/60 backdrop-blur px-3 py-1.5 rounded-full text-[10px] font-mono tracking-widest uppercase text-white/80 border border-white/20">
                    {compare ? '👁 ORIGINAL' : '✨ MEJORADO'}
                  </div>
                </div>
                <button
                  onPointerDown={() => setCompare(true)}
                  onPointerUp={() => setCompare(false)}
                  onPointerLeave={() => setCompare(false)}
                  className="w-full mt-3 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl text-[11px] font-mono tracking-wider uppercase text-gray-400 cursor-pointer transition-all"
                >
                  <Eye className="w-3.5 h-3.5 inline mr-1" />
                  Mantén pulsado para comparar
                </button>
              </div>

              {/* Acciones */}
              <div className="flex flex-col gap-2 pt-2">
                <Button
                  onClick={() => onSuccess(result)}
                  className="w-full h-12 bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:opacity-90 font-bold rounded-xl"
                >
                  Usar este resultado
                </Button>
                <Button
                  onClick={onClose}
                  variant="secondary"
                  className="w-full h-10 bg-white/10 text-white hover:bg-white/20 rounded-xl"
                >
                  Cancelar
                </Button>
              </div>

              <p className="text-[10px] text-gray-500 text-center pt-2">
                La imagen se añadirá al feed como nuevo post
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </motion.div>
  )
}
