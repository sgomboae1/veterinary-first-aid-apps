# 📸 Cómo Ver las Imágenes y Videos

## 🔄 Recargar la Aplicación

Después de actualizar las imágenes y videos, necesitas recargar la página:

### Recarga Forzada (Recomendado)
- **Windows/Linux**: `Ctrl + Shift + R`
- **Mac**: `Cmd + Shift + R`

Esto limpia la caché y carga los cambios más recientes.

### Recarga Normal
- **Windows/Linux**: `Ctrl + R` o `F5`
- **Mac**: `Cmd + R`

## 🖼️ Dónde Ver las Imágenes

### En la Página Principal
1. Abre `http://localhost:5174/`
2. Verás las 9 tarjetas de medicamentos
3. Cada tarjeta tiene una imagen del medicamento

### En la Página de Detalle
1. Haz clic en cualquier medicamento
2. Verás una imagen grande del medicamento en la parte superior

## 📹 Dónde Ver los Videos

### Video Principal del Medicamento

1. **Ir al detalle del medicamento**:
   - Haz clic en "Peróxido de Hidrógeno" en la página principal
   - O ve directamente a: `http://localhost:5174/item/peroxide-hydrogen`

2. **Buscar la sección de video**:
   - Desplázate hacia abajo
   - Verás una sección "📹 Video Instructivo"
   - Haz clic en el botón de play rojo de YouTube

3. **Reproducir el video**:
   - El video se cargará en un reproductor embebido
   - Puedes verlo en pantalla completa

### Video en la Guía de Emergencia

1. **Ir a la guía de emergencia**:
   - Desde el detalle del medicamento, haz clic en "🚨 Ver Guía de Emergencia"
   - O ve directamente a: `http://localhost:5174/emergency/peroxide-hydrogen`

2. **Ver el video**:
   - En la parte superior verás el video instructivo
   - También puede haber videos en pasos específicos

## 🔍 Verificar que Todo Funciona

### Checklist de Imágenes

- [ ] Veo 9 tarjetas en la página principal
- [ ] Cada tarjeta tiene una imagen
- [ ] Las imágenes se cargan correctamente (no veo el placeholder "Sin Imagen")
- [ ] Al hacer clic en un medicamento, veo una imagen grande

### Checklist de Videos

- [ ] En el detalle del Peróxido de Hidrógeno veo la sección "📹 Video Instructivo"
- [ ] Veo una miniatura del video con un botón de play
- [ ] Al hacer clic, el video se reproduce
- [ ] El video es de YouTube y se ve correctamente

## ❌ Si No Ves las Imágenes

### Problema: Imágenes no cargan

**Solución 1: Verificar conexión a internet**
- Las imágenes se cargan desde Unsplash (servicio externo)
- Necesitas conexión a internet

**Solución 2: Limpiar caché del navegador**
```
1. Abre DevTools (F12)
2. Click derecho en el botón de recargar
3. Selecciona "Vaciar caché y recargar de forma forzada"
```

**Solución 3: Verificar consola de errores**
```
1. Presiona F12
2. Ve a la pestaña "Console"
3. Busca errores en rojo
4. Si ves errores de CORS o red, es un problema de conexión
```

### Problema: Veo placeholder "Sin Imagen"

Esto significa que la URL de la imagen no es válida o no se puede cargar.

**Solución**:
- Verifica tu conexión a internet
- Espera unos segundos y recarga
- Las imágenes de Unsplash a veces tardan en cargar

## ❌ Si No Ves los Videos

### Problema: No veo la sección de video

**Causa**: Solo el Peróxido de Hidrógeno tiene video configurado actualmente.

**Solución**:
1. Ve específicamente a: `http://localhost:5174/item/peroxide-hydrogen`
2. Desplázate hacia abajo
3. Deberías ver "📹 Video Instructivo"

### Problema: Veo la sección pero no el video

**Solución 1: Verificar que el servidor esté corriendo**
```bash
# Verifica que veas esto en la terminal:
➜  Local:   http://localhost:5174/
```

**Solución 2: Recargar con caché limpia**
- `Ctrl + Shift + R` (Windows/Linux)
- `Cmd + Shift + R` (Mac)

**Solución 3: Verificar consola**
```
1. F12 → Console
2. Busca errores relacionados con "VideoPlayer" o "YouTube"
```

### Problema: El video no se reproduce

**Causa posible**: Bloqueador de anuncios o restricciones de YouTube

**Solución**:
1. Desactiva bloqueadores de anuncios temporalmente
2. Verifica que YouTube funcione en tu navegador
3. Prueba en modo incógnito

## 🎬 Videos Disponibles Actualmente

| Medicamento | Video | Ubicación |
|-------------|-------|-----------|
| Peróxido de Hidrógeno | ✅ Sí | Detalle + Guía de Emergencia |
| Carbón Activado | ❌ No | - |
| Clorhexidina | ❌ No | - |
| Suero Oral | ❌ No | - |
| Antihistamínico | ❌ No | - |
| Suero Fisiológico | ❌ No | - |
| Blastoestimulina | ❌ No | - |
| Compresas Frías | ❌ No | - |
| Bravecto | ❌ No | - |

## 📝 Agregar Más Videos

Para agregar videos a otros medicamentos, consulta el archivo `AGREGAR_VIDEOS.md`.

## 🆘 Ayuda Adicional

### Ver el estado del servidor

```bash
# En la terminal donde corre npm run dev, deberías ver:
VITE v7.2.2  ready in XXX ms
➜  Local:   http://localhost:5174/
```

### Reiniciar el servidor

Si algo no funciona:
1. En la terminal, presiona `Ctrl + C`
2. Ejecuta nuevamente: `npm run dev`
3. Recarga el navegador

### Verificar que los cambios se guardaron

```bash
# Los cambios en src/data/initialData.ts deberían recargar automáticamente
# Verás en la terminal:
X:XX:XX XX [vite] page reload src/data/initialData.ts
```

## ✅ Todo Funciona Si...

- ✅ Ves 9 medicamentos con imágenes en la página principal
- ✅ Al hacer clic en "Peróxido de Hidrógeno" ves su imagen grande
- ✅ En la misma página ves la sección "📹 Video Instructivo"
- ✅ Al hacer clic en el video, se reproduce correctamente
- ✅ En la guía de emergencia también ves el video

---

**¿Sigues teniendo problemas?** Abre la consola del navegador (F12) y busca mensajes de error.
