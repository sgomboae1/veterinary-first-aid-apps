# Solución para Videos que No se Reproducen

## Problema
Los videos de YouTube no se están reproduciendo en la aplicación.

## Pasos para Solucionar

### 1. Limpiar Caché del Navegador
Presiona **Ctrl + Shift + R** (Windows/Linux) o **Cmd + Shift + R** (Mac) para hacer una recarga forzada.

### 2. Verificar la Consola del Navegador
1. Abre las herramientas de desarrollador presionando **F12**
2. Ve a la pestaña **Console**
3. Busca errores relacionados con:
   - `iframe`
   - `YouTube`
   - `X-Frame-Options`
   - `Content Security Policy`

### 3. Verificar que los Videos Aparecen
1. Abre cualquier medicamento (por ejemplo, "Peróxido de Hidrógeno")
2. Desplázate hacia abajo hasta la sección "📹 Video Instructivo"
3. Deberías ver una miniatura del video con un botón de play rojo de YouTube
4. Haz clic en la miniatura para reproducir el video

### 4. Problemas Comunes

#### A. No veo la sección de video
- **Causa**: El navegador no ha recargado los datos actualizados
- **Solución**: 
  1. Cierra completamente el navegador
  2. Vuelve a abrirlo
  3. Navega a http://localhost:5173

#### B. Veo la miniatura pero no se reproduce
- **Causa**: Algunos videos de YouTube tienen restricciones de reproducción embebida
- **Solución**: Los videos han sido actualizados con URLs que permiten reproducción embebida

#### C. Error "Video no disponible"
- **Causa**: Problema de conexión a internet o video eliminado
- **Solución**: Verifica tu conexión a internet

### 5. Verificar Base de Datos
La aplicación usa IndexedDB para almacenar los datos. Si los videos no aparecen:

1. Abre las herramientas de desarrollador (F12)
2. Ve a la pestaña **Application** (Chrome) o **Storage** (Firefox)
3. Busca **IndexedDB** → **VeterinaryFirstAidDB** → **items**
4. Elimina todos los registros
5. Recarga la página (F5)
6. La aplicación volverá a cargar los datos con los videos actualizados

### 6. Videos Actualizados
Todos los medicamentos ahora tienen videos de YouTube que permiten reproducción embebida:

- ✅ Peróxido de Hidrógeno
- ✅ Carbón Activado
- ✅ Clorhexidina
- ✅ Suero Oral
- ✅ Antihistamínico
- ✅ Suero Fisiológico FISIOVET
- ✅ Blastoestimulina
- ✅ Compresas Frías
- ✅ Bravecto

## Contacto
Si después de seguir estos pasos aún no puedes ver los videos, por favor proporciona:
1. Captura de pantalla de la consola del navegador (F12 → Console)
2. Navegador y versión que estás usando
3. Sistema operativo
