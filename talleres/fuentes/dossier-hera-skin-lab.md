# HERA SKIN LAB — Dossier completo

> Archivo único del proyecto, del inicio (20-ago-2026) a hoy (31-ago-2026).
> Pensado para el sistema de talleres: leer la sección 1 y 2 y ya sabes dónde estás.

---

# 1 · ENTRAR Y PROBAR (30 segundos)

**La app, en vivo:**

## https://hera-skin-lab-atelier-245938011979.europe-west2.run.app

Se abre en el navegador, en móvil y en ordenador. No hay que instalar nada ni
registrarse para probarla.

**Cómo se usa:**

1. Entras y ya estás dentro, con un retrato de demo cargado.
2. Eliges un preset (Aspirational Lux, Piel Editorial, Macro RAW…).
3. Pulsas **Renderizar Master Final**. Tarda entre 17 y 30 segundos: está
   llamando a la IA de verdad.
4. Arrastras la cortina del centro para ver antes / después.
5. **Cargar RAW** para usar tu propia foto · **Descargar Master** para llevártela.
   En esos dos momentos, y solo ahí, pide nombre y correo.

**Ver quién la usa:**

```bash
cd ~/Downloads/hera-skin-lab && ./hera-stats.sh
```

---

# 2 · ESTADO HOY (31-ago-2026)

| | |
|---|---|
| **Estado** | En producción, funcionando |
| **Motor IA** | Gemini `gemini-3-pro-image`, activo |
| **Renders totales** | 24 (23 con IA, 1 en local) |
| **Errores** | 0 |
| **Registrados** | 5 |
| **Han renderizado** | 2 |
| **Han descargado** | 2 |

**La frase honesta:** la herramienta funciona. **Lo que falta no es código, es
gente entrando.** Los 24 renders son todos de Denno. Ninguna persona ajena ha
completado nunca un render.

**Lo siguiente es de cámara, no de teclado:** grabar y publicar el vídeo 1
(guion en la sección 6), esperar 24 h, y mirar el informe.

---

# 3 · QUÉ ES

Un laboratorio de retoque de piel que hace **lo contrario** que el resto de
herramientas de IA: en vez de borrar la piel, la devuelve. Poro, pecas,
textura. Sin efecto plástico.

El diferenciador es real y es la propuesta entera: toda IA alisa la cara. Esta
conserva lo que hace que una piel parezca piel.

Detrás hay quince años de Denno retocando para marcas de lujo (Carolina
Herrera, Inditex/Zara, Hogarth/WPP). La herramienta es la que le faltaba.

---

# 4 · DÓNDE ESTÁ TODO

| Cosa | Dónde |
|---|---|
| App en vivo | https://hera-skin-lab-atelier-245938011979.europe-west2.run.app |
| Código | `~/Downloads/hera-skin-lab` (git, todo commiteado) |
| Informe de uso | `./hera-stats.sh` desde esa carpeta |
| Plan de lanzamiento | `MARKETING.md` en esa carpeta |
| Este dossier | `DOSSIER-HERA-SKIN-LAB.md` |
| Servicio Cloud Run | `hera-skin-lab-atelier` · región `europe-west2` |
| Proyecto Google | `gen-lang-client-0061062746` |
| Base de datos | Firestore — colecciones `trial_signups` y `events` |

**Probar en local:**

```bash
cd ~/Downloads/hera-skin-lab && npm run dev
```

**Desplegar cambios** (requiere `gcloud auth login` si la sesión caducó):

```bash
cd ~/Downloads/hera-skin-lab
gcloud run deploy hera-skin-lab-atelier --source . --region europe-west2 \
  --project gen-lang-client-0061062746 --allow-unauthenticated
```

⚠️ Al desplegar hay que **conservar las variables de entorno** `GEMINI_API_KEY`
y `STATS_KEY`. Si se pierden, la IA se apaga en silencio (ya pasó una vez).

---

# 5 · LA HISTORIA, DE PRINCIPIO A FIN

## 20 de agosto — el punto de partida

Denno había construido la app con Google AI Studio. Dos problemas: no
desplegaba, y visualmente "gritaba app de IA" — plantilla genérica oscura con
halos de neón, diales de mezclador de audio para retocar piel, y jerga
inventada tipo `NEURAL_GRAFT_ENGINE`.

**Rediseño "Paper Atelier".** Se tiró la plantilla y se partió de la identidad
que Denno ya tenía: su wordmark real HERA STUDIO, marfil `#EDEBE6` + tinta
`#0A0A0A` + champagne `#B89A5E`, tipografías Bodoni Moda y Marcellus. Los diales
se sustituyeron por sliders tipo ficha de sastrería. Después, a petición suya,
se añadió lenguaje *liquid glass* (vidrio esmerilado, brillo, marcas de
calibración) para que dijera "laboratorio tecnológico" sin volver al neón.

**Bug de despliegue arreglado.** `server.ts` usaba `fileURLToPath(import.meta.url)`
para calcular `__dirname`, pero el build empaqueta como CommonJS, donde
`import.meta.url` no existe. Cloud Run crasheaba al arrancar. Se eliminó: no se
usaba en ningún otro sitio.

## 21 de agosto — publicar de verdad

El servicio original de AI Studio está gestionado internamente por Google
(`managed-by: google-ai-studio`) y no acepta despliegues normales. Se creó un
servicio propio, **`hera-skin-lab-atelier`**, bajo control total.

Arreglado también: el servidor escuchaba en el puerto 3000 fijo, cuando Cloud
Run asigna el suyo. Y el wordmark salía cortado como "HERA STU" — el `viewBox`
del SVG era más estrecho que las letras.

**Sistema de acceso.** Formulario de nombre + email que guarda el registro en
Firestore. En ese momento era pantalla de entrada obligatoria.

## 22 de agosto — la app nunca había usado IA

Denno comparó los resultados con una herramienta equivalente que él mismo hizo
en AI Studio. La diferencia era brutal: la nuestra devolvía imágenes blandas.
Y notó algo clave: *"al procesar es casi inmediato... parece que es rápido
porque no mejora mucho"*.

**Tenía razón al 100%.** Al desplegar nunca quedó puesta la clave `GEMINI_API_KEY`
— el primer intento con la clave fue bloqueado por seguridad y al relanzarlo sin
ella no se volvió a añadir ni se verificó. El código, al no encontrar la clave,
**caía en silencio** al motor local del navegador (desenfoque + enfoque). De ahí
los 358 ms y la ausencia de mejora.

Se arregló la clave, y además:
- Se subió el modelo de `gemini-3.1-flash-lite-image` a **`gemini-3-pro-image`**.
  El *lite* alisa las pecas y el poro — justo lo que el producto vende. Probados
  los tres modelos con una foto real: el *pro* los conserva.
- **El fallo dejó de ser silencioso.** Ahora el servidor lo grita en los logs al
  arrancar, y la app muestra en rojo *"Motor IA inactivo · modo local"* en vez de
  fingir que terminó.

**Y tres fallos visuales que eran uno solo.** Las clases de vidrio en el CSS
estaban *fuera de capas*, y en CSS eso gana a las utilidades de Tailwind: los
elementos marcados como `absolute` se calculaban como `relative`. Consecuencia:
la barra flotante dejó de flotar y ocupó espacio (empujando la foto a media
pantalla) y las etiquetas dentro de la foto se estiraron a barras de ancho
completo. Un solo bug, tres síntomas.

## 24 de agosto — medir

Se montó analítica de uso: qué presets se eligen, si corre la IA o el motor
local, cuánto tarda, dónde deja la gente los mandos, y si descargan.

**Regla de privacidad, deliberada:** no se guarda ninguna imagen, miniatura ni
derivado. Son las caras de su gente y esa responsabilidad no hace falta tenerla.
Solo metadatos.

Bug encontrado en el proceso: el endpoint respondía y guardaba después, pero
**Cloud Run congela el contenedor en cuanto respondes**, así que la escritura se
perdía. Se invirtió el orden.

## 26 de agosto — móvil, iPad y los tatuajes fantasma

Tres fallos reportados desde dispositivos reales:

**Guardar era imposible en iPhone y iPad.** El código usaba `<a download>`, que
iOS Safari ignora directamente: tocabas y no pasaba nada, en silencio. Ahora usa
el menú nativo de compartir, que es donde iOS pone "Guardar en Fotos".

**En móvil no se veía la foto.** El diseño estaba fijado a dos columnas con el
panel de 380 px clavado, lo que empujaba el lienzo fuera de pantalla. Ahora se
apila en vertical. También se descubrió que la cortina de antes/después no se
podía arrastrar con el dedo: el navegador se lo tragaba como scroll.

**Los tatuajes fantasma.** Al renderizar un sujeto tatuado, los tatuajes
aparecían grabados en la pared del fondo. La causa fue seria: **`confidenceGrid()`
era una función falsa** — devolvía un 0,96 plano sin calcular nada. Así que el
detalle de la IA se estampaba sobre toda la imagen, coincidiera o no el
contenido. Y Gemini **regenera, no edita**: los bordes caen en sitios distintos.

Se reescribió para comparar de verdad ambas imágenes y **solo injertar donde
coinciden**. La "fidelidad" del informe pasó de un 96% escrito a mano a un 77%
medido de verdad.

> **Lección que vale para todo este código:** AI Studio generó funciones que
> *parecen* sofisticadas (nombres tipo *optical flow*, *confidence grid*) pero
> calculan variables y las tiran, devolviendo constantes. Ante cualquier métrica
> sospechosamente estable, leer la función antes de creerla.

**Y se recalibraron los valores por defecto** a lo que el uso real mostraba:
menos brillo y más definición de poro. De 95/58/18 a **100/50/26**, aplicando el
mismo desplazamiento a cada preset para que conserven su carácter.

## 29 de agosto — quitar el muro

Denno ya había enviado la campaña a su círculo y quería empujar a desconocidos.

**El diagnóstico antes de recomendar canales:** el formulario de email era la
primera pantalla. Con conocidos funciona (confían, les escribió él). Con tráfico
frío de Instagram mata la mayoría de visitas antes de ver nada.

Se movió al **momento de valor**: ahora cualquiera entra, juega y renderiza. El
email se pide solo al subir su propia foto o al descargar. Es descartable, se ve
el resultado detrás del formulario, y la acción que quería hacer se ejecuta sola
al enviarlo.

## 31 de agosto — diagnóstico incompleto

Apareció el primer render en modo local (la alarma que se había construido para
esto). Pero el informe decía *"(sin dato)"* como motivo: **el evento nunca
enviaba el `degradedReason`**, aunque el campo existía de punta a punta. La alarma
sonaba sin decir por qué. Arreglado.

---

# 6 · VÍDEO 1 — "El poro"

15-18 s · vertical · Reels + TikTok

**La idea:** no vender mejora, vender **restitución**. Todo el mundo ya odia la
piel de plástico de la IA. El vídeo no dice "mira qué bien queda", dice *"a ti
también te molesta esto, ¿verdad?"*. El poro es el protagonista, no la
herramienta.

| Tiempo | Imagen | Texto en pantalla |
|---|---|---|
| 0:00–0:02 | Macro extremo de piel. Ya en movimiento al empezar. Sin interfaz. | **Toda IA te borra la cara.** |
| 0:02–0:06 | La lupa 4× deslizándose despacio sobre el rostro. Poros, pecas, vello. | Esto es un poro. / Esto son pecas. |
| 0:06–0:11 | La cortina. **Lenta.** Izquierda original, derecha HERA. | Un retoque no debería quitarlas. |
| 0:11–0:15 | Se abre al retrato completo. Respira. | Quince años retocando para marcas de lujo. / Me hice la herramienta que me faltaba. |
| 0:15–0:18 | Logo HERA sobre marfil. | **HERA Skin Lab** — gratis |

**Las cinco reglas:**

1. **Nada de música con subidón.** Silencio o tono de sala. Todos usan el audio
   de moda; el silencio sobre una cara para el scroll.
2. **La cortina lenta, 3 segundos mínimo.** Rápida se lee como filtro. Lenta se
   lee como oficio.
3. **Piel antes que interfaz.** La app no aparece hasta el segundo 11.
4. **El primer fotograma es la portada.** El macro más texturizado que haya.
5. **La lupa 4× es el mejor plano y está sin usar.**

**Pie de publicación:**

> Llevo quince años quitando y poniendo piel en imágenes que acababan colgadas
> de una campaña.
>
> Lo primero que se pierde siempre es el poro. Y con él se va la persona.
>
> Hice HERA Skin Lab para hacer lo contrario: devolver textura en vez de borrarla.
>
> Está abierto y es gratis. Link en bio.

Máximo tres hashtags: `#retoque #fotografiadeautor #pieldeverdad`

**Antes de publicar:** si los retratos son de personas reales, hace falta su OK
para usarlos en promoción (distinto a usarlos de demo dentro de la app).

---

# 7 · CANALES

**Un solo canal, no cinco.** Dispersarse es la forma más rápida de que no
funcione ninguno.

1. **Instagram / TikTok — ahora.** El producto se demuestra solo, es el oficio de
   Denno, no pide permiso a nadie, y cada vídeo queda como activo.
2. **Reddit — después.** r/photography, r/postprocessing, r/retouching. Ahí está
   justo la gente que se queja de que la IA le borra el poro. Terreno hostil a la
   autopromoción: hay que participar de verdad, no soltar links. Solo cuando el
   vídeo indique que engancha.

**App Store, no** (por ahora): 99 $/año de cuenta de desarrollador, revisión de
Apple que puede rechazarla por ser "solo una web", y si algún día se cobra
suscripción dentro de iOS, Apple obliga a su sistema de pago y se queda un
15-30 %. La web funciona en cualquier móvil sin instalar nada.

**Cobros:** con Stripe, cuando haya retención que lo justifique. Requiere que
Denno cree la cuenta con sus datos fiscales — eso no lo puede hacer nadie más.

---

# 8 · PENDIENTES

- [ ] **Grabar y publicar el vídeo 1.** Luego esperar 24 h y mirar el informe.
- [ ] **Reescribir a Estefani y vicky.** Cuando lo probaron estaba roto en móvil y
      no dejaba guardar. Ya está arreglado; merecen otra oportunidad y la excusa
      es verdad.
- [ ] Vídeo 2 (ángulo alternativo: silencioso, ASMR de piel sin texto) para
      comparar. Cuando el 1 tenga datos.
- [ ] **Rotar la clave de Gemini** — quedó visible en la config del servicio.
- [ ] Stripe, cuando haya retención.

---

# 9 · RIESGOS Y DEUDA TÉCNICA

**Dos funciones siguen siendo falsas.** En `src/services/processor.ts`,
`estimateAlign()` y `estimateFlow()` son stubs del mismo lote generado por AI
Studio: devuelven identidad y flujo cero. El control de confianza (ya real) tapa
el problema evitando injertar donde no coincide — es seguro, pero deja la
fidelidad más baja de lo posible. **Si alguna foto mejora poco, esta es la razón.**
Implementar alineación real es el siguiente trabajo técnico.

**Un render tardó 4,4 minutos** (31-ago, 00:19). El límite de Cloud Run está en
5 minutos: ese render estuvo cerca de fallar. Probablemente una imagen muy
grande. Si se repite, hay que reducir la imagen antes de mandarla a la IA.

**El embudo con desconocidos sigue sin probarse.** Nadie ajeno ha completado un
render. No sabemos aún si convierte.

**Dependencia de un solo proveedor.** Todo el motor es Gemini. Si Google cambia
precios, cuotas o retira el modelo, la app se queda sin motor.

---

# 10 · RITMO SUGERIDO PARA EL TALLER

Este proyecto **ya no necesita código a diario**. Está en fase de tracción.

| Cuándo | Qué | Cuánto |
|---|---|---|
| **Diario** | Mirar `./hera-stats.sh`. Solo dos líneas: *han procesado* y *han descargado*. | 5 min |
| **2 veces/semana** | Grabar o publicar un vídeo. | 45 min |
| **Semanal** | Escribir a quien haya entrado y no haya renderizado. | 20 min |
| **Solo si hay señal** | Volver al código: alineación real, Stripe, lo que pidan los datos. | por bloques |

**La regla:** no volver a tocar el código hasta que los datos lo pidan. El
cuello de botella hoy no es la app, es que nadie la conoce.
