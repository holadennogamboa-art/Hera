# 📱 Guía: Publicar Filtro HERA en Instagram

## Paso 1: Descargar Spark AR Studio

1. Ve a https://www.sparkar.com/ar-studio/
2. Descarga **Spark AR Studio** para tu sistema operativo (Windows/Mac)
3. Crea una cuenta o inicia sesión con tu cuenta de Meta/Facebook

---

## Paso 2: Crear el Proyecto Spark AR

### Opción A: Usando Spark AR Template (Recomendado para principiantes)

1. Abre Spark AR Studio
2. Selecciona **"New Project"** → **"Use Template"**
3. Elige un template que incluya **"Portrait Segmentation"** o **"Face Tracker"**
4. Haz clic en **"Create Project"**

### Opción B: Proyecto desde cero (Avanzado)

1. **New Project** → **Blank Project**
2. En el panel izquierdo, añade:
   - **Face Tracker** (para detectar rostros)
   - **Camera** (captura de video)
   - **Plane** (elemento 3D para efectos)

---

## Paso 3: Configurar el Fondo HERA (Gris-Celeste)

### Crear el fondo fotomatón

1. **En el Inspector del Proyecto:**
   - Haz clic en **Assets** → **+ New Asset** → **Material**
   - Nombre: `HERABackground`

2. **En las propiedades del Material:**
   - **Color Mode**: Solid Color
   - **Color**: RGB `#8191A3` (gris-celeste)
   - **Opacity**: 1.0

3. **Aplicar al fondo:**
   - Selecciona **Scene** → **Camera**
   - En el Inspector, en **Background**, selecciona tu material `HERABackground`

---

## Paso 4: Añadir Efectos de Fotomatón

### 4.1 Detección Facial (Face Beautification)

1. En Assets, busca **"Face Beauty"** (viene preinstalado)
2. Arrastra a la **Scene**
3. Ajusta en el Inspector:
   - **Skin Smoothing**: 0.3
   - **Brightening**: 0.4
   - **Teeth Whitening**: 0.2

### 4.2 Viñeta Fotomatón (Vignette)

1. **Assets** → **Effect** → **Vignette**
2. Configura:
   - **Color**: Negro con transparencia baja
   - **Intensity**: 0.2
   - **Smooth**: 0.8

### 4.3 Esquinas de Fotomatón (Corner Marks)

1. Crea 4 **Plane** (uno por esquina)
2. Asigna una textura de línea dorada (ver sección "Crear Assets")
3. Posiciona en las 4 esquinas de la pantalla

---

## Paso 5: Crear Assets (Logo y Elementos)

### Crear Logo HERA

**Opción 1: Usar texto**
- **Scene** → **Text** 
- Escribe: "EYE OF HERA"
- Font: Sans-serif Bold
- Color: RGB `#C9A96A` (dorado)
- Tamaño: ~0.1

**Opción 2: Importar imagen PNG del logo**
1. Diseña en Figma/Adobe XD un PNG de 512x512px
2. **Assets** → **+ Add** → Sube tu PNG
3. Arrastra a la Scene

### Watermark

1. **Scene** → **Text**
2. Contenido: `© EYE OF HERA`
3. Posición: Esquina inferior derecha
4. Opacidad: 0.7
5. Color: RGB `#C9A96A`

---

## Paso 6: Configurar Interactividad (JavaScript Script)

Para efectos más avanzados, añade un script:

1. **Assets** → **+ New** → **Script**
2. Nombre: `HeraFilter.js`

```javascript
// Ajustar contraste dinámicamente
const device = require('Device');

const world = require('WorldTracking');
const scene = require('Scene');

// Referencias
const faceTracker = scene.root.child('FaceTracker0');
const portraitSegmentation = require('SegmentationTexture');

// Aplicar efecto cuando el usuario sonríe
faceTracker.face.mouth.openness.onEachFrame()
    .subscribe((openness) => {
        if (openness > 0.5) {
            // Aumentar brillo
            scene.root.child('Camera').exposure = 0.8;
        }
    });

// Log para verificar
Diagnostics.log('HERA Filter Initialized');
```

3. Conecta el script al proyecto

---

## Paso 7: Probar el Filtro

### Test en la app de Instagram

1. **En Spark AR Studio:**
   - Click en **▶ Play** (esquina inferior izquierda)
   - Tu cámara web se activará
   - Prueba el filtro en tiempo real

2. **Prueba con tu teléfono:**
   - En Spark AR Studio: **Devices** → **Connect on Phone**
   - Escanea el QR con tu móvil
   - Abre Instagram y ve a "Crear"
   - Busca el filtro en tus efectos

### Puntos a verificar:
- ✅ El fondo es gris-celeste uniforme
- ✅ La detección facial funciona correctamente
- ✅ El logo HERA es visible (esquina o centro)
- ✅ La viñeta fotomatón está presente
- ✅ Las esquinas de fotomatón aparecen
- ✅ Funciona en ambos lados (selfie y cámara trasera)

---

## Paso 8: Exportar y Publicar en Instagram

### Antes de publicar:

1. **Validar el filtro:**
   - Click en **File** → **Validate**
   - Asegúrate de que no hay errores

2. **Exportar:**
   - **File** → **Export Project**
   - Elige ubicación: **Instagram**
   - Formato: **.arexport**

### Publicar en Instagram:

1. Ve a **Instagram Creator Account** → **Professional Dashboard**
2. **Creative Tools** → **Filters**
3. **Upload New Filter**
4. Selecciona el archivo `.arexport` que exportaste
5. **Detalles del filtro:**
   - Nombre: `EYE OF HERA`
   - Categoría: `Portrait Effects`
   - Descripción: `Efecto fotomatón profesional. Transforma tus fotos en retratos carnet estilo HERA.`
   - Tags: `fotomaton`, `carnet`, `profesional`, `hera`
   - Thumbnail: Captura de pantalla del filtro en acción

6. **Términos y condiciones:**
   - ✅ Acepta los términos de Meta
   - ✅ Confirma que no infringes derechos de autor

7. Click en **Submit for Review**

---

## Paso 9: Esperar Aprobación

Meta revisará tu filtro en 1-3 días hábiles.

**Criterios de aprobación:**
- ✅ No contiene contenido ofensivo
- ✅ Funciona correctamente en iOS y Android
- ✅ No infringie derechos de autor
- ✅ El rendimiento es bueno (FPS estable)

---

## Troubleshooting

| Problema | Solución |
|----------|----------|
| El fondo no es uniforme | Aumenta el brillo, reduce el contraste |
| La cara se ve pixelada | Reduce la intensidad del face tracker |
| El filtro es lento | Reduce polígonos 3D, simplifica scripts |
| Instagram no lo reconoce | Válida nuevamente el archivo .arexport |
| El logo no se ve | Aumenta opacidad a 0.9-1.0 |

---

## Recursos Útiles

- **Spark AR Studio Docs**: https://sparkar.facebook.com/ar-studio/learn/
- **Tutorial Video**: https://www.youtube.com/watch?v=KgZ1H0_xLYo
- **Comunidad Spark AR**: https://www.facebook.com/groups/SparkARdevelopers/
- **Face Effects Templates**: https://sparkar.facebook.com/ar-studio/learn/portfolio/face-based-effects/

---

## Próximas mejoras

Una vez publicado, puedes:
- 🎯 Añadir variaciones (Ojo de pez, Blanco y Negro, Vintage)
- 📊 Ver estadísticas de uso en Instagram Creator Studio
- 🔄 Actualizar el filtro con nuevas características
- 🎬 Promoverlo en TikTok también (con Spark AR)

---

**¡Tu filtro HERA estará disponible para millones de usuarios de Instagram!** 🚀
