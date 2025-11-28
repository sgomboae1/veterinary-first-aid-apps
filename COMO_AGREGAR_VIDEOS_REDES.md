# 📹 Cómo Agregar Videos de Diferentes Plataformas

La aplicación ahora soporta videos de múltiples plataformas. Simplemente copia el enlace del video y agrégalo en los datos del medicamento.

## 🎬 Plataformas Soportadas

### 1. YouTube (Videos normales)
```
https://www.youtube.com/watch?v=VIDEO_ID
https://youtu.be/VIDEO_ID
```

**Ejemplo:**
```typescript
videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ"
```

### 2. YouTube Shorts
```
https://www.youtube.com/shorts/VIDEO_ID
```

**Ejemplo:**
```typescript
videoUrl: "https://www.youtube.com/shorts/abc123xyz"
```

### 3. TikTok
```
https://www.tiktok.com/@usuario/video/1234567890
```

**Cómo obtener el enlace:**
1. Abre el TikTok en la app o web
2. Toca el botón "Compartir"
3. Selecciona "Copiar enlace"
4. Pega el enlace completo

**Ejemplo:**
```typescript
videoUrl: "https://www.tiktok.com/@veterinaria/video/7123456789012345678"
```

### 4. Facebook Reels
```
https://www.facebook.com/reel/1234567890
https://www.facebook.com/watch?v=1234567890
https://fb.watch/abc123
```

**Cómo obtener el enlace:**
1. Abre el Reel en Facebook
2. Haz clic en los tres puntos (...)
3. Selecciona "Copiar enlace"
4. Pega el enlace completo

**Ejemplo:**
```typescript
videoUrl: "https://www.facebook.com/reel/123456789012345"
```

### 5. Instagram Reels
```
https://www.instagram.com/reel/ABC123xyz/
https://www.instagram.com/p/ABC123xyz/
```

**Cómo obtener el enlace:**
1. Abre el Reel en Instagram
2. Toca los tres puntos (...)
3. Selecciona "Copiar enlace"
4. Pega el enlace completo

**Ejemplo:**
```typescript
videoUrl: "https://www.instagram.com/reel/CxYz123ABC/"
```

## 📝 Cómo Agregar Videos a los Medicamentos

### Opción 1: Editar directamente en el código

Abre el archivo `src/data/initialData.ts` y modifica el campo `videoUrl`:

```typescript
{
  id: '1',
  name: 'Peróxido de Hidrógeno',
  // ... otros campos
  videoUrl: 'https://www.tiktok.com/@veterinaria/video/7123456789012345678',
}
```

### Opción 2: Usar el Panel de Administración

1. Ve a `/admin` en tu aplicación
2. Ingresa la contraseña: `admin123`
3. Selecciona el medicamento
4. Pega el nuevo enlace del video
5. Guarda los cambios

## 🎯 Ejemplos Completos

### Ejemplo con YouTube:
```typescript
{
  id: '1',
  name: 'Peróxido de Hidrógeno',
  videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
}
```

### Ejemplo con TikTok:
```typescript
{
  id: '2',
  name: 'Carbón Activado',
  videoUrl: 'https://www.tiktok.com/@veterinaria/video/7123456789012345678',
}
```

### Ejemplo con Facebook Reel:
```typescript
{
  id: '3',
  name: 'Clorhexidina',
  videoUrl: 'https://www.facebook.com/reel/123456789012345',
}
```

### Ejemplo con Instagram Reel:
```typescript
{
  id: '4',
  name: 'Suero Oral',
  videoUrl: 'https://www.instagram.com/reel/CxYz123ABC/',
}
```

### Ejemplo con YouTube Short:
```typescript
{
  id: '5',
  name: 'Antihistamínico',
  videoUrl: 'https://www.youtube.com/shorts/abc123xyz',
}
```

## 🔄 Actualizar la Aplicación

Después de hacer cambios:

```bash
# 1. Guardar los archivos
# 2. Hacer commit
git add .
git commit -m "Actualizar videos de medicamentos"

# 3. Subir a GitHub
git push

# Vercel desplegará automáticamente en 2-3 minutos
```

## ⚠️ Notas Importantes

### TikTok
- ✅ Funciona con enlaces públicos
- 🔗 **Se abre en nueva pestaña** (TikTok no permite embed confiable)
- ❌ No funciona con videos privados
- ℹ️ Al hacer clic, se abrirá la app de TikTok o el sitio web

### Facebook
- ✅ Funciona con videos públicos
- 🔗 **Se abre en nueva pestaña** (Facebook tiene restricciones de embed)
- ❌ No funciona con videos privados o de grupos cerrados
- ℹ️ Al hacer clic, se abrirá Facebook

### Instagram
- ✅ Funciona con posts y reels públicos
- 🔗 **Se abre en nueva pestaña** (Instagram tiene restricciones de embed)
- ❌ No funciona con cuentas privadas
- ℹ️ Al hacer clic, se abrirá Instagram

### YouTube
- ✅ Funciona con todos los videos públicos
- ✅ Funciona con Shorts
- ✅ **Se reproduce en la aplicación** (embed completo)
- ❌ No funciona con videos privados o no listados

## 🎨 Características

- ✅ Detección automática de la plataforma
- ✅ Badge que muestra el tipo de video (YouTube, TikTok, etc.)
- ✅ Thumbnail automático para YouTube
- ✅ Reproducción en iframe optimizado
- ✅ Responsive en todos los dispositivos

## 🆘 Solución de Problemas

### El video no se reproduce
1. Verifica que el enlace sea correcto
2. Asegúrate de que el video sea público
3. Prueba el enlace en un navegador
4. Verifica que el video permita ser embebido

### El video se ve cortado
- Esto es normal en algunos dispositivos móviles
- Los usuarios pueden hacer clic en "Ver en [plataforma]" para ver el video completo

### Error de permisos
- Algunos videos tienen restricciones de embed
- Intenta con otro video de la misma plataforma

---

**¿Necesitas ayuda?** Revisa los ejemplos o contacta al desarrollador.
