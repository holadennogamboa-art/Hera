# T5 — Taller de Tracción · HERA SKIN LAB

**Naturaleza:** un producto terminado que nadie usa todavía.
**Horas:** 3 h/semana — Miércoles B3 (grabar/montar vídeo), Viernes B2 (lo que pidan los
datos) — más 5 minutos diarios de métricas en [la ronda](LA-RONDA.md).

App en producción: `https://hera-skin-lab-atelier-245938011979.europe-west2.run.app`
Código en `~/Downloads/hera-skin-lab`. Dossier completo: [`fuentes/dossier-hera-skin-lab.md`](fuentes/dossier-hera-skin-lab.md).

## La frase honesta

La herramienta funciona. **Lo que falta no es código, es gente entrando.** Los 24 renders
son todos tuyos. Ninguna persona ajena ha completado nunca un render.

## La regla del taller

**No se vuelve al código hasta que los datos lo pidan.** Es la regla que impide que este
proyecto se coma horas de escritura arreglando cosas que nadie está usando todavía.

## Definición de terminado (fase actual)

- [ ] Vídeo 1, «El poro», grabado y publicado. Guion en la sección 6 del dossier.
- [ ] 24 h después: mirar el informe y anotar qué pasó.
- [x] Reescribir a Estefani y a vicky. Hecho el 1-sep. Pendiente ver si renderizan.
- [ ] Escribir a los registrados que entraron y no renderizaron.
- [ ] Vídeo 2 (silencioso, ASMR de piel, sin texto) solo cuando el 1 tenga datos.
- [ ] **Rotar la clave de Gemini.** Quedó visible en la configuración del servicio.

## Las cinco reglas del vídeo

1. Nada de música con subidón. Silencio o tono de sala.
2. La cortina lenta, tres segundos mínimo. Rápida se lee como filtro; lenta, como oficio.
3. Piel antes que interfaz: la app no aparece hasta el segundo 11.
4. El primer fotograma es la portada. El macro más texturizado que haya.
5. La lupa 4× es el mejor plano y sigue sin usar.

Antes de publicar: si los retratos son de personas reales, hace falta su permiso para
promoción (distinto de usarlos como demo dentro de la app).

## Deuda técnica conocida (no se toca sin señal)

- `estimateAlign()` y `estimateFlow()` en `src/services/processor.ts` siguen siendo stubs
  del lote generado por AI Studio: devuelven identidad y flujo cero. El control de
  confianza tapa el problema, pero deja la fidelidad más baja de lo posible. **Si alguna
  foto mejora poco, es esto.** Alineación real = el siguiente trabajo técnico, cuando haya
  usuarios que lo justifiquen.
- Un render tardó 4,4 min; el límite de Cloud Run son 5. Si se repite, reducir la imagen
  antes de mandarla a la IA.
- Todo el motor es Gemini. Un solo proveedor.
- Al desplegar hay que conservar `GEMINI_API_KEY` y `STATS_KEY`. Si se pierden, la IA se
  apaga en silencio. Ya pasó una vez.

## Métricas

| Métrica | Objetivo semanal |
|---|---|
| Vídeos publicados | 1 (2 si el primero engancha) |
| Personas ajenas que renderizan | > 0. Ese es el número que importa. |
| Descargas | — |

## Estado actual (31-ago-2026)

Renders 24 · errores 0 · registrados 5 · han renderizado 2 · han descargado 2. Todos tuyos.
