# HERA SKIN LAB — Dossier completo

> Archivo único del proyecto, del inicio (20-ago-2026) a hoy (26-sep-2026).
> Pensado para el sistema de talleres: leer las secciones 1, 2 y 8 y ya sabes dónde estás.

---

# 1 · ENTRAR Y PROBAR (30 segundos)

**La app, en vivo:**

## https://heraskinlab.com

Se abre en el navegador, en móvil y en ordenador. No hay que instalar nada ni
registrarse para probarla.

**Cómo se usa:**

1. Entras y ya estás dentro, con un retrato de demo cargado.
2. **¿Para qué es la foto?** Eliges modo:
   - **Editorial** — piel de campaña, poro y textura devueltos.
   - **Glow · "Tu mejor día"** — para redes: se va lo pasajero (rojeces,
     ojeras, brillos, un grano), se queda lo tuyo (pecas, lunares, poro). Tiene
     tres mandos: Tono, Glow y Calidez.
3. Pulsas **Renderizar Master Final**. Tarda unos 25 segundos: está llamando a
   la IA de verdad. La foto se ve debajo mientras tanto, con los segundos reales.
4. Arrastras la cortina del centro para ver antes / después.
5. Aparece **Poro conservado** (y en Glow, también **Tono**). Son números
   medidos en los píxeles, solo sobre la piel. Tócalos y explican qué significan.
6. **Descargar Master** para llevártela · **Antes / después · Instagram** para
   una imagen vertical lista para Stories. Al subir tu foto o al guardar, y solo
   ahí, pide nombre y correo. Cada descarga sale marcada como IA (firma +
   marca de agua invisible).
7. En iPhone: Compartir → «Añadir a pantalla de inicio» y queda como una app,
   con el icono HERA.

**Ver quién la usa:**

```bash
cd ~/Downloads/hera-skin-lab && ./hera-stats.sh
```

**El material para redes:** Escritorio → **HERA PARA PUBLICAR** (vídeos +
`TEXTOS PARA COPIAR.txt`).

---

# 2 · ESTADO HOY (26-sep-2026, 02:30)

| | |
|---|---|
| **Estado** | En producción, funcionando · revisión `00028-gif` · 2 GB de memoria |
| **Dirección** | https://heraskinlab.com (responde en 0,2 s) |
| **Motor IA** | Gemini `gemini-3-pro-image`, activo · saldo prepago (5 € del 25-sep) |
| **Modos** | Editorial y **Glow** (nuevo, en vivo desde el 25-sep) |
| **Renders totales** | 62 (61 con IA, 1 en local) |
| **Errores** | 0 |
| **Duración media** | 25,3 s |
| **Poro conservado** | 126 % de media, mínimo 97 % (22 renders medidos) |
| **Registrados** | 9 |
| **Han renderizado** | 7 |
| **Han descargado** | 5 |
| **Antes/después para redes** | abierto 4 veces, guardado 3 |
| **Descargas firmadas** | 12 firmadas · 6 sin firmar (ver sección 9) |

**Personas ajenas:**

| Quién | Cuándo | Qué hizo |
|---|---|---|
| vicky | 1-sep | subió y renderizó; no descargó. Dijo "demasiado real" → nació Glow |
| Mikel | 1-sep | renderizó 2, descargó 1 |
| Rose | 23-sep | renderizó 1, guardó un antes/después |
| **Lucía** | **25-sep** | subió, renderizó y **descargó** |
| **karla** | **25-sep** | subió, renderizó y **descargó** |
| Estefani | — | se registró, no ha probado nada |

**La frase honesta:** el 25-sep entraron **dos personas nuevas y las dos
llegaron hasta el final** (subir → renderizar → descargar). Es la primera vez
desde el 1-sep que pasa. Son pocas y no sabemos de dónde vinieron, así que
todavía no es una tendencia: es la primera señal.

**Lo que no sabemos todavía:** cuántos de esos renders fueron en **Glow**. El
informe no lo separa (ver pendiente 2).

---

# 3 · QUÉ ES

Un laboratorio de retoque de piel que hace **lo contrario** que el resto de
herramientas de IA: en vez de borrar la piel, la devuelve. Poro, pecas,
textura. Sin efecto plástico.

El diferenciador es real y es la propuesta entera: toda IA alisa la cara. Esta
conserva lo que hace que una piel parezca piel.

Detrás está el oficio de Denno retocando para Carolina Herrera, Zara (Inditex)
y Hogarth (WPP). La herramienta es la que le faltaba.

Desde el 25-sep tiene **dos modos**, porque hay dos tipos de persona:

- **Editorial** — para quien quiere piel de campaña que parezca piel.
- **Glow** — para quien quiere verse guapa en redes sin parecer otra. Quita lo
  pasajero y deja lo que es suyo. Nunca remodela la cara. Pensado para el
  público tipo @vickydelportico / @caroladelportico.

La regla común: **mejorar sin mentir**, y enseñar el número que lo demuestra.

---

# 4 · DÓNDE ESTÁ TODO

| Cosa | Dónde |
|---|---|
| App en vivo | https://heraskinlab.com (dominio en Cloudflare; un Worker lo pasa a Cloud Run, código en `cloudflare/worker.js`) |
| Código | `~/Downloads/hera-skin-lab` (git, todo commiteado · último: 238c3c4) |
| Material para redes | Escritorio → `HERA PARA PUBLICAR` (vídeos + textos) |
| Fuentes de los vídeos | `~/Downloads/DOCUMENTOS/HERA_STORY_fuente/` |
| Facturación Gemini | cuenta `010CB4-1FB23E-E2B14D`, **prepago** |
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

**Desplegar cambios** (requiere `gcloud auth login` si la sesión caducó).
Siempre en dos pasos: primero una versión privada, se prueba, y luego se pasa a
todos.

```bash
cd ~/Downloads/hera-skin-lab
gcloud run deploy hera-skin-lab-atelier --source . --region europe-west2 \
  --project gen-lang-client-0061062746 --no-traffic --tag beta --memory=2Gi
```

Se abre en `https://beta---hera-skin-lab-atelier-pjqk236acq-nw.a.run.app`.
Para pasarla a todos, con el nombre de revisión que dé el comando (este paso lo
ejecuta Denno):

```bash
gcloud run services update-traffic hera-skin-lab-atelier \
  --to-revisions NOMBRE-DE-REVISION=100 --region europe-west2 \
  --project gen-lang-client-0061062746
```

⚠️ Al desplegar hay que **conservar las variables de entorno** `GEMINI_API_KEY`
y `STATS_KEY`. Si se pierden, la IA se apaga en silencio (ya pasó una vez).

⚠️ **Siempre `--memory=2Gi`.** La firma y la marca de agua necesitan memoria:
con 512 MB se caía, con 1 GB también se cayó (errores 503 tras la remodelación del 23-sep).

⚠️ heraskinlab.com no apunta a Cloud Run directamente: pasa por un Worker de
Cloudflare (`cloudflare/worker.js`). Si algún día cambia la dirección del
servicio, hay que cambiarla también ahí.

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

## 6 de septiembre — no se podía guardar en Mac

Denno lo encontró usándola: en Mac, "Descargar" abría el menú de compartir
(AirDrop, Mensajes, Notas…) sin opción de guardar. Venía del arreglo del iPhone
del 26-ago, que llevaba diez días roto en ordenador sin que nadie lo viera.
Ahora el menú de compartir solo se usa en iPhone y iPad. Se añadió la métrica
*Pulsaron Guardar / completaron*, que habría cazado esto sola.

## 23 de septiembre — la remodelación

Objetivo: competir con los mejores (Evoto, Retouch4me, Aftershoot) en el terreno
donde HERA sí puede ganar: **piel de lujo que parece real, en la web, sin
instalar nada y sin guardar caras.** Cinco pasos, uno cada vez, cada uno
probado antes de publicar:

1. **Máscara de piel automática.** El retoque ya solo toca piel: ojos, cejas,
   pelo, ropa y fondo quedan intactos; labios, suave. Se calcula en el propio
   móvil u ordenador, la foto no sale para esto. Evoto lanzó lo mismo en su 8.0.
2. **Medidor de poro.** Número real de cuánta textura conserva el resultado
   frente al original, medido solo sobre la piel. Validado: la foto contra sí
   misma da 100%; desenfocada baja 97 → 87 → 66 → 36%. En renders reales con IA:
   126–131%. **Nadie más lo enseña.**
3. **Espera honesta.** La foto se ve mientras la IA trabaja, con segundos reales
   y un tiempo estimado aprendido del propio dispositivo. La foto viaja a la IA
   reducida a 2048 px (el master se sigue haciendo con el original completo).
4. **Instalable.** Icono HERA en la pantalla del iPhone, aviso discreto de cómo
   añadirla, y tarjeta de vista previa cuando se pega el enlace en WhatsApp.
5. **Antes / después para Instagram.** Imagen 9:16 con la marca, la foto partida
   y el poro medido, más el texto del post listo para copiar. El vídeo de 6 s
   está hecho pero oculto hasta poder marcarlo (ver riesgos).

Además se quitaron **todos los números inventados** que venían de AI Studio:
"14-bit" en un JPG de 8 bits, "12.8 kHz", "Fidelity 14-bit RAW" y una
"telemetría" que eran números aleatorios. Y en una segunda pasada: las fotos de demo llevaban nombres de **revistas reales** (Vanity Fair,
GQ, Dazed, Vogue) y cámaras inventadas; ahora se llaman "Retrato de demo". El
botón "Cargar RAW" pasa a "Cargar foto" (el navegador no abre RAW de cámara).

En paralelo, otra sesión añadió **marca de agua invisible y credenciales de
contenido** a cada descarga (ley europea de IA, art. 50). Desde las 15:38 funcionan
las dos: cada descarga sale firmada (certificado de prueba) y con marca de agua.

---

## 24–25 de septiembre — los vídeos

Ocho piezas para Instagram, hechas con las fotos reales de Denno pasadas por la
app. Cada porcentaje que sale en pantalla está **medido** con el medidor de la
app sobre esa foto, no escrito a mano. Técnica: animaciones WebGL (efectos
tipo shader) renderizadas fotograma a fotograma y montadas con ffmpeg.

- **Stories SKIN LAB:** el chico tatuado (ES y EN, poro 103 %) y la chica de
  las pecas (EN, poro 132 %).
- **Montaje estilo anuncio**, con las fotos del chico de las pecas que Denno
  hizo a propósito: Story y Reel en inglés, más portada.
- **Glow:** Story ES y EN para anunciar el modo nuevo.

Corrección de guion: decía "quince años retocando para marcas de lujo". El CV
de Denno empieza hacia 2014 y los puestos en lujo llegan después: la cifra no
aguantaba que alguien la comprobara. Se cambió por los nombres (Carolina
Herrera, Zara, Hogarth), que además pesan más.

## 24 de septiembre — la IA se paró (y se arregló)

**Saldo de Gemini agotado** (error 402): la IA dejó de responder. Los créditos
promocionales de Google solo se gastan si hay saldo **prepago** positivo, y el
proyecto estaba en otra cuenta de facturación. Se movió el proyecto a la
cuenta `010CB4-1FB23E-E2B14D` y Denno cargó 5 € prepago.

**Caídas por memoria:** con 1 GB, la firma de las descargas tumbaba el
servidor. Se subió a 2 GB (revisión `00021-n7n`).

## 25 de septiembre — nace Glow

Vicky probó la app y se vio "demasiado real": ella quería verse guapa para
redes. La pregunta de Denno: ¿se puede favorecer **sin mentir**?

Sí, separando lo que es **pasajero** de lo que es **tuyo**:

- **Se va:** rojeces, ojeras, brillos, el grano de ese día. Tono más igualado,
  un brillo suave en los puntos altos, luz de ventana cálida.
- **Se queda:** pecas, lunares, cicatrices, el poro. **Nunca remodela** la
  cara: ni nariz, ni mandíbula, ni ojos.
- **Cómo se garantiza:** la IA solo aporta el color y la luz de fondo; la
  textura fina sale **siempre de la foto original**. Por eso el poro no se
  puede perder aunque la IA quiera alisar.
- **Se mide:** además del poro, un medidor de **tono** dice cuánto se han
  igualado las rojeces y manchas. Si la piel ya era uniforme, dice "ya
  uniforme" en vez de inventarse un número.

Nombre: Denno propuso algo tipo "be fabulous"; quedó **HERA Glow · "Tu mejor
día. Tu piel."** Primera prueba: poro 101 %, tono "ya uniforme" (la foto de
prueba ya tenía la piel limpia, así que aún falta probarlo con una que tenga
rojeces de verdad). En vivo desde la revisión `00028-gif`.

## 25 de septiembre — heraskinlab.com

La dirección anterior (`hera-skin-lab-atelier-2459…run.app`) era imposible de
recordar y parecía sospechosa. Denno compró **heraskinlab.com** en Cloudflare.

Cloud Run en Londres no permite conectar un dominio propio, y Firebase Hosting
corta las peticiones a los 60 s (un render puede tardar más). Solución: un
**Worker de Cloudflare** que recibe las visitas en heraskinlab.com y las pasa
al servidor. `www.` redirige a la dirección sin www. Probado de punta a punta:
render completo con IA por el dominio en 15,6 s.

## 26 de septiembre — el material, a mano

Todos los vídeos estaban repartidos entre Descargas y el Escritorio. Ahora hay
**una sola carpeta**: Escritorio → `HERA PARA PUBLICAR`, con tres subcarpetas
numeradas y un `TEXTOS PARA COPIAR.txt` con el enlace, los pies en español e
inglés y la lista de comprobación. Todo material nuevo va directo ahí.

---

# 6 · MATERIAL LISTO PARA PUBLICAR

Todo en Escritorio → **HERA PARA PUBLICAR**.

| Carpeta | Archivo | Qué es |
|---|---|---|
| 1 GLOW (nuevo) | `HERA_GLOW_STORY_ES.mp4` / `_EN` | Story anunciando Glow |
| 2 SKIN LAB - Stories | `HERA_STORY_TATUADO_ES.mp4` / `_EN` | Chico tatuado · poro 103 % |
| 2 SKIN LAB - Stories | `HERA_STORY_PECAS_EN.mp4` | Chica de las pecas · poro 132 % |
| 3 MONTAJE - Story y Reel | `HERA_MONTAJE_STORY_EN.mp4` | Montaje estilo anuncio, Story |
| 3 MONTAJE - Story y Reel | `HERA_MONTAJE_REEL_EN.mp4` + `_PORTADA.jpg` | El mismo, como Reel, con portada "Kept." |
| — | `TEXTOS PARA COPIAR.txt` | Enlace, pies ES/EN, checklist, notas honestas |

**Antes de publicar cada uno:** permiso de la persona que sale · música elegida
dentro de Instagram (así tiene licencia) · enlace heraskinlab.com · no tapar
el aviso "Retoque con IA · HERA".

**Guion original del vídeo "El poro"** (sin grabar, sigue valiendo como idea):
macro de piel → lupa 4× → cortina lenta de 3 s → retrato completo con
"Carolina Herrera. Zara. Hogarth." → logo. Sin música con subidón.

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

# 8 · QUÉ ESTÁ Y QUÉ FALTA

## ✅ Está hecho y funcionando

- [x] App en vivo en **heraskinlab.com** (Worker de Cloudflare → Cloud Run).
- [x] Motor IA de verdad (`gemini-3-pro-image`), con saldo prepago.
- [x] Máscara de piel automática: solo retoca piel.
- [x] Medidor de poro (y de tono en Glow), medidos en los píxeles.
- [x] Modo **Editorial** y modo **Glow**.
- [x] Espera honesta con segundos reales.
- [x] Instalable en iPhone con icono HERA.
- [x] Antes/después 9:16 para Instagram, con texto para copiar.
- [x] Descargas marcadas como IA: firma C2PA + marca de agua (certificado de prueba).
- [x] Sin números inventados ni revistas reales en la app.
- [x] 8 vídeos listos en `HERA PARA PUBLICAR`, con sus textos.
- [x] Todo el código commiteado (último: 238c3c4).

## ⏳ Falta — por orden

**Tuyo (cámara y personas, no teclado):**

1. [ ] **Publicar** los vídeos que falten (Glow primero: es lo nuevo). Marca
       aquí cuáles ya están subidos: Glow ES ☐ · Glow EN ☐ · Tatuado ☐ ·
       Pecas ☐ · Montaje Story ☐ · Montaje Reel ☐
2. [ ] **Que Vicky pruebe Glow.** Ella es la razón de que exista: su opinión
       vale más que cualquier prueba nuestra.
3. [ ] **Escribir a Lucía y a karla** (25-sep, llegaron hasta el final):
       preguntarles cómo la encontraron y qué les pareció.
4. [ ] **Escribir a Estefani** (se registró y no probó nada) **y a Rose/Mikel**
       (la app ha cambiado mucho).
5. [ ] **Vigilar el saldo de Gemini.** Son 5 € prepago; si llega a cero, la IA
       se para (error 402). Valorar activar la recarga automática.

**Mío (código), cuando lo digas:**

6. [ ] **Pasar a producción el commit c976ff8** — la tarjeta de vista previa
       de WhatsApp/Instagram todavía apunta a la dirección vieja. Necesita:
       versión beta + tu comando de promoción.
7. [ ] **Que el informe cuente Glow aparte.** Hoy no sabemos cuántos renders
       son de cada modo, y es la pregunta clave para saber si Glow funciona.
       (Va en el mismo despliegue que el punto 6.)
8. [ ] **Probar Glow con una foto con rojeces o granos de verdad.** La prueba
       del 25-sep tenía la piel ya limpia (tono "ya uniforme").

**Más adelante (cuando haya usuarios que lo justifiquen):**

9. [ ] **Rotar la clave de Gemini** — quedó visible en la config del servicio.
10. [ ] Vídeo antes/después dentro de la app (hecho, oculto hasta que la firma
        acepte vídeo).
11. [ ] Certificado de firma **reconocido** (hoy es de prueba). Opciones:
        escribir a conformance@c2pa.org o darse de alta como autónomo.
12. [ ] Alineación real de imágenes (ver sección 9).
13. [ ] Stripe, cuando haya retención.

---

# 9 · RIESGOS Y DEUDA TÉCNICA

**Saldo prepago de Gemini.** Es el riesgo más inmediato: si se agota, la IA
se para para todos. Ya pasó el 24-sep.

**6 descargas salieron sin firmar.** Motivos: 3 por errores 503 (las caídas
de memoria, ya arregladas con 2 GB), 2 renders en modo local (correcto: no
eran IA), 1 antes de que existiera el certificado. En cada informe, mirar que
*sinFirmar* **no suba de 6**; si sube, algo ha vuelto a fallar.

**Dos funciones siguen siendo falsas.** En `src/services/processor.ts`,
`estimateAlign()` y `estimateFlow()` son stubs del lote generado por AI
Studio: devuelven identidad y flujo cero. El control de confianza (ya real)
tapa el problema evitando injertar donde no coincide — es seguro, pero deja la
fidelidad más baja de lo posible. **Si alguna foto mejora poco, esta es la
razón.**

**El certificado de firma es de prueba.** Las descargas salen marcadas como
IA, pero un verificador externo dirá "firmante no reconocido".

**El medidor de poro y el grano.** El grano de película suma 2–6 puntos al
número. Con el ajuste actual no puede hacer pasar una piel plastificada por
real; si algún día se sube el grano, hay que medir antes del grano.

**Dependencia de un solo proveedor.** Todo el motor es Gemini. Si Google cambia
precios, cuotas o retira el modelo, la app se queda sin motor.

**El dominio depende de Cloudflare.** Si el Worker falla, heraskinlab.com cae
aunque la app siga viva en la dirección larga de Cloud Run.

---

# 10 · RITMO SUGERIDO PARA EL TALLER

Este proyecto **ya no necesita código a diario**. Está en fase de tracción.

| Cuándo | Qué | Cuánto |
|---|---|---|
| **Diario** | Mirar `./hera-stats.sh`. Tres líneas: *han procesado*, *han descargado* y *sinFirmar*. | 5 min |
| **2 veces/semana** | Publicar un vídeo de `HERA PARA PUBLICAR`. | 20 min |
| **Semanal** | Escribir a quien haya entrado y no haya renderizado. Mirar el saldo de Gemini. | 20 min |
| **Solo si hay señal** | Volver al código: lo que pidan los datos. | por bloques |

**La regla:** no volver a tocar el código hasta que los datos lo pidan. La
única excepción son los puntos 6 y 7 de la sección 8, que son pequeños y
hacen falta para saber si Glow funciona.
