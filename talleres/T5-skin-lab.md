# T5 — Taller de Tracción · HERA SKIN LAB

**Naturaleza:** un producto terminado que nadie usa todavía.
**Horas:** 3 h/semana — Miércoles B3 (grabar/montar vídeo), Viernes B2 (lo que pidan los
datos) — más 5 minutos diarios de métricas en [la ronda](LA-RONDA.md).

App en producción: `https://hera-skin-lab-atelier-245938011979.europe-west2.run.app`
Código en `~/Downloads/hera-skin-lab`. Dossier completo: [`fuentes/dossier-hera-skin-lab.md`](fuentes/dossier-hera-skin-lab.md).

## Estado real · 5 de septiembre

**Primera conversión completa de una persona ajena.**

| | 31-ago | Hoy |
|---|---|---|
| Renders | 24 | **35** |
| Han renderizado | 2 | **4** |
| Han descargado | 2 | **3** |

**Mikel** (`mikelsanchez1992@gmail.com`) entró el 1 de septiembre a las 22:19 y **completó
el recorrido entero desde un iPhone**: subió su foto, renderizó dos veces y se descargó el
resultado.

Eso no es solo una conversión. **Es la verificación del arreglo de guardado en iOS**, que
era lo único que no se podía comprobar sin un iPhone real. El bug de `<a download>` que
iOS Safari ignoraba en silencio está resuelto en el mundo, no solo en el código.

**vicky volvió.** Estaba en cero desde el 23 de agosto. El 1 de septiembre subió su propia
foto y renderizó — después de arreglar móvil y guardado. Volver es más difícil que entrar.

### Lo que no se sabe, y es una laguna de medición

**vicky renderizó y no descargó, y no hay forma de saber por qué.** La métrica no separaba
«pulsó Guardar y se echó atrás» de «nunca pulsó Guardar», y son conclusiones opuestas: una
dice que el resultado no la convenció, la otra que el guardado la perdió.

Ya está arreglado y desplegado. El informe ahora distingue:

```
Pulsaron Guardar     X
  completaron        X
  cancelaron         X
  SE PERDIERON       X   <- ni una cosa ni la otra: revisar
```

Ese último número, si aparece, **es un fallo real**. Los datos de hoy salen raros —0
pulsaciones, 30 completados— porque la métrica empieza a contar ahora y los históricos no
la tienen.

**Pero el dato de vicky no vuelve.** Eso solo lo puede contestar ella.

### Lo demás está sano

- **34 de 35 renders con IA.** El único local es el del 30 de agosto, anterior al arreglo.
- **Cero errores** en todos los usuarios.
- **Los valores por defecto están clavados.** La gente se queda en 104/52/27 y tus defaults
  son 100/50/26. La recalibración del 26 de agosto fue correcta.
- **Piel Editorial sigue subiendo**: 13 usos, sólidamente el segundo preset.

## Lo que dijo Mikel

> «Denno! Lo he estado probando, y el tratamiento que hace está muy guay, encima es súper
> intuitivo y no canta a laaaa! ¿Piensas sacarlo pronto?»

Tres cosas que valen más que el mensaje:

1. **«No canta a IA» es exactamente lo que vende el producto**, dicho por alguien de fuera
   sin que se lo sugirieras. Es el titular del vídeo 1 confirmado antes de grabarlo.
2. **«Súper intuitivo»** valida haber quitado el muro del email de la primera pantalla.
3. **«¿Piensas sacarlo pronto?»** es una pregunta de producto, no un cumplido.

Y ahora se sabe que **no solo lo dijo: lo hizo entero**. El elogio y la conversión son de
la misma persona.

**Pídele permiso para citarlo.** Un testimonio real con nombre vale más que cualquier copy.

## La regla del taller

**No se vuelve al código hasta que los datos lo pidan.** Es la regla que impide que este
proyecto se coma horas de escritura arreglando cosas que nadie está usando todavía.

## Definición de terminado (fase actual)

- [ ] Vídeo 1, «El poro», grabado y publicado. Guion en la sección 6 del dossier.
- [ ] 24 h después: mirar el informe y anotar qué pasó.
- [x] Reescribir a Mikel, Vicky y Stephania. **Los tres lo probaron.** Mikel respondió el 2-sep.
- [x] **Contestado a Mikel** el 5-sep. Esperando respuesta.
- [ ] Pedirle permiso para citar su frase.
- [ ] **Preguntarle a vicky por qué no se guardó el resultado.** Es la única que puede
      responderlo y el dato nuevo no lo dirá retroactivamente. Sin juicio: «¿no te convenció
      o no te dejó?».
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
