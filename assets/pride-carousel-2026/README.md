# 🌈 Carrusel Pride 2026 - Hera Campaign

## 📦 ¿Qué incluye este paquete?

```
pride-carousel-2026/
├── carousel.html              # Previsualización interactiva del carrusel
├── carousel-data.json         # Datos estructurados de todas las slides
├── slide-1-hero.jpg           # Imagen hero (tu foto)
├── generate-images.js         # Script para generar PNG de cada slide
├── INSTAGRAM-GUIDE.md         # Guía completa de publicación en Instagram
├── QUICK-START.md             # Guía rápida (inicio en 5 minutos)
└── README.md                  # Este archivo
```

---

## 🚀 Quick Start (5 minutos)

### Opción 1: Ver el carrusel en el navegador
```bash
cd /home/user/Hera/assets/pride-carousel-2026/
open carousel.html
# O si usas Linux:
firefox carousel.html
```

Esto te muestra exactamente cómo se verá en Instagram. Navega con flechas o los puntitos de abajo.

### Opción 2: Generar imágenes automáticamente
```bash
cd /home/user/Hera/assets/pride-carousel-2026/
npm install puppeteer
node generate-images.js
```

Esto genera 6 imágenes PNG listas para Instagram.

### Opción 3: Crear las imágenes manualmente (Canva)
Ver sección **"Manual: Crear slides en Canva"** más abajo.

---

## 📱 Para Publicar en Instagram

### Método A: Directo desde el navegador (Recomendado)
1. Ve a instagram.com
2. Crea nuevo post
3. Selecciona "Múltiples fotos o videos"
4. Sube las 6 imágenes en este orden:
   - slide-1-hero.jpg
   - slide-2-flow.mp4 (el video que compartiste)
   - slide-3-data.png
   - slide-4-cta.png
   - slide-5-manifesto.png
   - slide-6-closing.png
5. Ordena en Instagram si es necesario
6. Copia-pega el caption de INSTAGRAM-GUIDE.md
7. Publica

### Método B: Desde la app (Mobile)
1. Abre Instagram en tu teléfono
2. Toca el "+" para crear post
3. Selecciona "Múltiples"
4. Escoge todas las fotos/video en orden
5. Desliza para reordenar si es necesario
6. Agrega descripción
7. Publica

---

## 🎨 Personalización

### Cambiar textos
Edita `carousel.html` con cualquier editor de texto:
- Busca el texto que quieres cambiar
- Reemplazalo
- Guarda
- Abre en navegador para ver cambios

### Cambiar colores
En `carousel.html`, cada slide tiene un `gradient`:
```css
/* Slide 1 */
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);

/* Cambiar a colores de tu marca */
background: linear-gradient(135deg, #TU_COLOR_1 0%, #TU_COLOR_2 100%);
```

### Agregar más slides
1. Duplica el código HTML de una slide existente
2. Cambia el ID, textos y colores
3. Agrega un nuevo dot en los controles
4. Actualiza `totalSlides` en JavaScript

---

## 📊 Métricas a Monitorear

Después de publicar, Instagram te muestra:
- **Alcance (Reach):** Cuántas personas únicas vieron el post
- **Impresiones:** Cuántas veces se mostró (incluyendo personas que ven varias veces)
- **Guardados (Saves):** Indicador fuerte de valor
- **Compartidos:** Qué tan viral es
- **Comentarios:** Engagement real
- **Clicks a Link Bio:** Tráfico a tu sitio

**Objetivo realista para Pride:**
- Alcance: 5,000-10,000
- Engagement: 5-8%
- Nuevos seguidores: 200-500

---

## 🎬 Sobre el Video (Slide 2)

El video que compartiste se ve perfecto para la Slide 2. Necesita:

✅ **Sí** duración 3-15 segundos
✅ **Sí** tema: movimiento y libertad
✅ **Sí** energía inspiradora
✅ **Opcional** agregar sonido (ver INSTAGRAM-GUIDE.md)

❌ **No** copyrighted music (a menos que tengas licencia)
❌ **No** videos más de 60 segundos

---

## 💬 Copy & Hashtags

### Caption que incluimos:
```
🌈 La libertad no tiene un solo camino.

Durante el Pride, celebramos a quienes han tenido 
el valor de ser ellos mismos. A quienes eligieron 
correr sin miedo. A quienes dicen: "Así soy, y está bien."

En Hera, creemos que el orgullo no es un mes. 
Es cada día eligiendo autenticidad, eligiendo libertad, 
eligiendo ser verdaderamente tú.

¿Cuál es tu historia? Comparte en los comentarios. 👇

Tu voz importa. Tu identidad es válida. 
Tu comunidad te espera.

#OrguloLGBTQ+ #HeraPride2026 #LibertadEnMovimiento
```

### Hashtags recomendados:
- #OrguloLGBTQ+ (más específico)
- #Pride2026 (tendencia)
- #HeraPride2026 (marca propia)
- #LibertadEnMovimiento (campaña)
- #TransRights #Inclusión #Diversidad (valores)

**Tip:** Usa máximo 30 hashtags. Agrupa en 3-4 líneas para legibilidad.

---

## 🔧 Manual: Crear Slides en Canva

Si no quieres usar el script, puedes crear las imágenes en Canva:

### Slide 1: Hero
1. Canva.com → Nuevo diseño
2. Dimensiones: 1080x1920
3. Sube tu foto
4. Agrega overlay semi-transparente
5. Texto blanco grande: "Libertad en Movimiento"
6. Descarga como JPEG

### Slides 2-6: Fondos degradados
1. Canva.com → Nuevo diseño (1080x1920)
2. Elige color de fondo o usa el editor de gradientes
3. Agrega textos según el diseño
4. Para slide 2, carga el video de Flow
5. Descarga cada una como PNG

**Colores exactos para Canva:**
- Slide 2: Azul #667eea → Púrpura #764ba2
- Slide 3: Rosa #f093fb → Rojo #f5576c
- Slide 4: Cian #4facfe → Turquesa #00f2fe
- Slide 5: Rosa #fa709a → Amarillo #fee140
- Slide 6: Azul #667eea → Púrpura #764ba2

---

## ✅ Checklist Final antes de Publicar

### Preparación
- [ ] Todas las 6 imágenes/video descargados
- [ ] Dimensiones correctas (1080x1920)
- [ ] Nombres ordenados (slide-1, slide-2, etc.)
- [ ] Caption copiado y listo
- [ ] Primer comentario estratégico preparado
- [ ] Hashtags revisados

### En Instagram
- [ ] Crea nuevo post tipo "Carrusel"
- [ ] Sube archivos en orden correcto
- [ ] El video está en Slide 2 (segundo)
- [ ] Preview se ve bien en mobile
- [ ] Caption completo sin errores
- [ ] Link Bio actualizado con CTA

### Post-publicación (Primeras 2 horas)
- [ ] Publica el primer comentario estratégico
- [ ] Comparte en tus Stories
- [ ] Notifica a seguidores cercanos
- [ ] Monitorea comentarios y responde

### Durante el mes
- [ ] Revisa métricas diarias
- [ ] Responde comentarios personalmente
- [ ] Guarda el post con mejor engagement
- [ ] Replica contenido en TikTok/Reels

---

## 📝 Archivos Incluidos - Explicación

| Archivo | Propósito | Cuándo usarlo |
|---------|-----------|---------------|
| carousel.html | Previsualización | Para ver cómo se verá |
| carousel-data.json | Datos estructurados | Para reutilizar contenido |
| generate-images.js | Script automático | Para generar PNGs |
| INSTAGRAM-GUIDE.md | Guía completa | Lectura profunda antes de publicar |
| QUICK-START.md | Guía rápida | Si quieres empezar ya |

---

## 🐛 Solución de Problemas

### "No veo las imágenes generadas"
→ Instala Node.js y ejecuta: `npm install puppeteer`

### "El HTML se ve diferente al video"
→ Normal, es una previsualización. Instagram renderiza igual que el navegador.

### "¿Puedo cambiar el video?"
→ Sí, simplemente reemplaza el archivo en Slide 2 con tu video.

### "¿Cuánto tiempo tarda en generar?"
→ 5-10 segundos por imagen. Total ~1 minuto.

### "¿Expira este carrusel?"
→ No, es evergreen. Funciona bien todo el año, especialmente junio.

---

## 📞 Más Información

- **Estrategia completa:** Abre `INSTAGRAM-GUIDE.md`
- **Inicio rápido:** Abre `QUICK-START.md`
- **Datos técnicos:** Abre `carousel-data.json`
- **Demo visual:** Abre `carousel.html` en navegador

---

## 🎁 Bonus: Reutilizar en Otras Plataformas

### TikTok
Crea versión vertical con los mejores 3 slides. TikTok ama carruseles que no son carruseles 😄

### Facebook
Sube el carrusel igual que en Instagram. Facebook y Instagram comparten el mismo sistema.

### LinkedIn
Adapta el copy a tono profesional/inspirador y sube como video.

### Pinterest
Crea pins con cada slide. Perfectos para tráfico largo plazo.

---

## 🌈 ¡Listo para Ir!

Elegiste un contenido precioso que habla de libertad, autenticidad y comunidad. El diseño es vibrante, el mensaje es claro, y la estructura mantiene atención.

**Próximo paso:** 
1. Abre `carousel.html` en tu navegador
2. Navega las 6 slides
3. Cuando estés listo, sigue los pasos de "Para Publicar en Instagram"
4. Publica con confianza

---

**Última actualización:** 22 de Junio, 2026
**Creado para:** Hera Community
**Tema:** Pride 2026 Campaign

🌈 **Que sea un Pride especial.** 🌈
