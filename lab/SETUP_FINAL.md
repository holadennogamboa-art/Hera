# ⚡ SETUP FINAL — Últimos 3 pasos

## ✅ PASO 1: Agregar tu API Key de Replicate (1 min)

### 1.1 Ir a https://replicate.com/account/api-tokens

### 1.2 Copiar tu token (empieza con `r8_...`)

### 1.3 Editar `/home/user/Hera/lab/server/.env.local`

Reemplazar:
```
REPLICATE_API_KEY=REPLACE_ME_WITH_YOUR_ACTUAL_API_KEY
```

Con:
```
REPLICATE_API_KEY=r8_XXXXXXXXXXXXXXXXXXXXXXXXXXXXX
```

### 1.4 Reiniciar el servidor backend

```bash
pkill -f "node server.js"
cd /home/user/Hera/lab/server
npm run dev &
```

**Verificar:**
```bash
grep "API key configured" /tmp/server.log
# Debe mostrar: API key configured: ✅ yes
```

---

## ✅ PASO 2: Abrir la app en el navegador (30 seg)

Ir a: **http://localhost:5173**

---

## ✅ PASO 3: Probar el flujo (2 minutos)

### Test Workflow:

1. **Moodboard** → Sube una foto (o usa la que está)
2. **Click icono Layers** (izquierda) → ENGINES view
3. **Click "SIGUIENTE FASE"** 4 veces → hasta llegar a **FINAL stage**
4. **Verás 3 botones:**
   - ✅ GUARDAR PIEZA
   - ✅ AÑADIR AL FEED
   - ✨ **REALISMO DE PIEL** ← NUEVO

5. **Click "REALISMO DE PIEL"**
   - Se abre modal
   - Barra de progreso (0-100%)
   - Espera 25-40 segundos
   - ✅ "Procesamiento completado"
   - Click "Comparar" para ver antes/después
   - Click "Usar este resultado" → se añade al feed

---

## 🐛 Si algo falla:

### Error: "Cannot reach localhost:5000"
```bash
curl http://localhost:5000/health
# Debe mostrar: {"status":"ok",...}
```

### Error: "REPLICATE_API_KEY missing"
- Verifica que `.env.local` tiene tu API key
- Reinicia backend

### Error en compilación de App.tsx
- Verifica que no hay typos en los imports/estados
- Recarga http://localhost:5173

---

## ✅ VERIFICACIÓN RÁPIDA

Terminal:
```bash
# Backend health
curl http://localhost:5000/health

# Frontend running
ps aux | grep "vite\|node server"
```

---

## 🎯 ¿Funciona?

Si ves el botón **"REALISMO DE PIEL"** en el FINAL stage, todo está conectado.

Prueba con una foto pequeña primero (< 2KB) para test rápido.

---

**¡Listo para generar estilo Magnific! 🚀**
