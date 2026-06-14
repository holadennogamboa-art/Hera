# 👁️ EYE OF HERA - Filtro Instagram

Filtro profesional que transforma fotos simples en retratos estilo fotomatón HERA.

## 🚀 Inicio Rápido

### Opción 1: Prueba Web (Ahora)

1. Abre el archivo `app/hera-filter.html` en tu navegador
2. O sube a tu servidor y accede por URL

**Features:**
- ✅ Carga de imágenes (arrastra o selecciona)
- ✅ Ajustes en tiempo real (contraste, saturación, brillo)
- ✅ Efecto fotomatón con fondo gris-celeste
- ✅ Marca de agua "EYE OF HERA"
- ✅ Esquinas de fotomatón estilo profesional
- ✅ Descarga de imagen procesada

### Opción 2: Filtro Oficial Instagram (Próximo paso)

Sigue la guía en `SPARK_AR_GUIDE.md` para publicar en Instagram usando Spark AR Studio.

---

## 📋 Características del Filtro

### Efecto Fotomatón
- Fondo uniforme gris-celeste (#8191A3)
- Detección automática de rostro
- Centering perfecto para foto carnet

### Ajustes Visuales
- **Contraste**: Mejora definición facial (1.2x por defecto)
- **Saturación**: Colores más vivos (1.1x por defecto)
- **Brillo**: Iluminación profesional (1.1x por defecto)

### Elementos de Marca
- Logo "👁️ EYE OF HERA" discreto en la esquina
- Esquinas de fotomatón (líneas doradas)
- Viñeta sutil para profundidad

---

## 🎯 Casos de Uso

| Caso | Configuración |
|------|--------------|
| Foto carnet profesional | Contraste 1.2, Saturación 1.1, Brillo 1.1 |
| Retrato artístico | Contraste 1.5, Saturación 1.3, Brillo 1.2 |
| Foto de perfil | Contraste 1.0, Saturación 1.0, Brillo 1.0 |
| Efecto dramático | Contraste 1.8, Saturación 0.9, Brillo 0.9 |

---

## 🔧 Instalación en Servidor

```bash
# Copiar archivo al servidor
cp app/hera-filter.html /tu-servidor/filtros/

# Servir con HTTPS (requerido para acceso a cámara)
# Usar Vercel, Netlify o servidor propio con SSL
```

---

## 📱 Testing en Mobile

### iOS
1. Safari → Dirección del filtro
2. Permite acceso a cámara/fotos
3. Funciona offline después de primera carga

### Android
1. Chrome o navegador compatible
2. Permite permisos de almacenamiento/cámara
3. Mejor rendimiento en Android 10+

---

## 🎨 Personalización

### Cambiar Color de Fondo

En el código, busca:
```javascript
const HERA_BG_COLOR = { r: 129, g: 145, b: 163 }; // RGB para gris-celeste
```

Ejemplos:
- **Blanco**: { r: 255, g: 255, b: 255 }
- **Negro**: { r: 0, g: 0, b: 0 }
- **Azul**: { r: 100, g: 150, b: 200 }

### Cambiar Color del Logo

Busca:
```javascript
ctx.fillStyle = 'rgba(201, 169, 106, 0.8)'; // Dorado
```

Formato: `rgba(R, G, B, Opacidad)`

---

## 📊 Estadísticas & Monitoreo

Después de publicar en Instagram, podrás ver:
- Número de usos del filtro
- Edad y género de usuarios
- Geografía
- Tendencias de uso

En: **Instagram Creator Studio** → **Filtros** → Tu filtro

---

## 🐛 Troubleshooting

### "La imagen se ve pixelada"
→ Aumenta la resolución de entrada o reduce el zoom

### "El filtro no detecta mi rostro"
→ Asegúrate de estar bien iluminado, mira a la cámara

### "El archivo no sube a Instagram"
→ Usa Spark AR Studio para exportar un `.arexport` válido

### "El contraste es demasiado alto"
→ Baja el slider de contraste a 1.0-1.1

---

## 📝 Hoja de Ruta

- [x] Crear filtro web básico
- [x] Ajustes de contraste/saturación/brillo
- [x] Marca de agua HERA
- [ ] Integración con TensorFlow.js para detección facial mejorada
- [ ] Variantes del filtro (B&N, Vintage, etc.)
- [ ] Publicar en Instagram
- [ ] Promover en redes sociales
- [ ] Analytics en tiempo real

---

## 📄 Licencia

© 2026 EYE OF HERA - Todos los derechos reservados

---

## 🤝 Contribuciones

Para mejorar el filtro:
1. Fork el repositorio
2. Crea una rama: `git checkout -b feature/nueva-caracteristica`
3. Commit: `git commit -am 'Añadir nueva característica'`
4. Push: `git push origin feature/nueva-caracteristica`
5. Abre un Pull Request

---

## 📞 Contacto

- Email: private.hera@proton.me
- Instagram: @eyeofhera (cuando se publique)

---

**Última actualización**: 14/06/2026
