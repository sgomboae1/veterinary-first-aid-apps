# 📹 Guía para Agregar Videos Instructivos

## 🎯 Objetivo

Los videos instructivos ayudan a los usuarios a entender mejor cómo usar cada medicamento correctamente, especialmente en situaciones de emergencia.

## 📝 Tipos de Videos Soportados

La aplicación soporta dos tipos de videos:

### 1. Video Principal del Medicamento
Muestra cómo usar el medicamento en general (aparece en la página de detalle y en la guía de emergencia).

### 2. Videos por Paso
Videos específicos para cada paso de la guía de emergencia.

## 🔗 Fuentes de Video Soportadas

- **YouTube** (Recomendado): URLs de YouTube se convierten automáticamente en embeds
- **Vimeo**: URLs de Vimeo
- **Videos directos**: URLs de archivos .mp4, .webm, etc.

## 📋 Cómo Agregar Videos

### Paso 1: Preparar el Video

#### Opción A: Subir a YouTube (Recomendado)

1. **Crear el video**:
   - Duración recomendada: 1-3 minutos
   - Calidad mínima: 720p (HD)
   - Formato: MP4, MOV, AVI

2. **Subir a YouTube**:
   - Ve a https://studio.youtube.com
   - Click en "Crear" → "Subir video"
   - Sube tu video
   - Título sugerido: "Cómo usar [Nombre del Medicamento] en mascotas"
   - Descripción: Incluye advertencias y precauciones
   - Visibilidad: Público o No listado

3. **Obtener la URL**:
   - Copia la URL del video (ej: `https://www.youtube.com/watch?v=ABC123`)

#### Opción B: Usar Videos Existentes

Busca videos educativos veterinarios en YouTube sobre el medicamento específico.

### Paso 2: Agregar el Video al Código

Edita el archivo `src/data/initialData.ts`:

```typescript
{
  id: 'nombre-medicamento',
  name: 'Nombre del Medicamento',
  // ... otros campos ...
  
  // Agregar video principal
  instructionalVideo: 'https://www.youtube.com/watch?v=ABC123',
  videoThumbnail: 'https://url-de-miniatura.jpg', // Opcional
  
  emergencyGuide: [
    {
      stepNumber: 1,
      title: 'Título del paso',
      description: 'Descripción...',
      // Agregar video al paso (opcional)
      video: 'https://www.youtube.com/watch?v=XYZ789',
      videoThumbnail: 'https://url-miniatura-paso.jpg' // Opcional
    },
    // ... más pasos
  ]
}
```

### Paso 3: Miniaturas (Opcional)

Las miniaturas se generan automáticamente para videos de YouTube. Para otros videos:

1. Captura un frame representativo del video
2. Sube la imagen a un servicio como:
   - Imgur: https://imgur.com
   - Unsplash: https://unsplash.com
   - Cloudinary: https://cloudinary.com
3. Copia la URL de la imagen

## 📚 Ejemplos de Implementación

### Ejemplo 1: Video Principal

```typescript
{
  id: 'peroxide-hydrogen',
  name: 'Peróxido de Hidrógeno',
  instructionalVideo: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
  videoThumbnail: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d',
  // ... resto de campos
}
```

### Ejemplo 2: Video en Paso Específico

```typescript
emergencyGuide: [
  {
    stepNumber: 1,
    title: 'Administrar correctamente',
    description: 'Usa una jeringa sin aguja...',
    video: 'https://www.youtube.com/watch?v=ABC123',
    warning: 'No administrar si el animal está inconsciente'
  }
]
```

### Ejemplo 3: Video de Vimeo

```typescript
instructionalVideo: 'https://vimeo.com/123456789'
```

### Ejemplo 4: Video Directo (MP4)

```typescript
instructionalVideo: 'https://tu-servidor.com/videos/medicamento.mp4'
```

## 🎬 Recomendaciones para Crear Videos

### Contenido del Video

1. **Introducción (10 segundos)**:
   - Nombre del medicamento
   - Para qué se usa

2. **Preparación (20-30 segundos)**:
   - Qué necesitas
   - Cómo preparar la dosis

3. **Administración (30-60 segundos)**:
   - Paso a paso visual
   - Técnica correcta
   - Qué hacer y qué NO hacer

4. **Advertencias (20 segundos)**:
   - Precauciones importantes
   - Cuándo NO usar

5. **Cierre (10 segundos)**:
   - Recordatorio de consultar veterinario
   - Información de contacto

### Aspectos Técnicos

- **Resolución**: Mínimo 720p (1280x720)
- **Orientación**: Horizontal (16:9)
- **Duración**: 1-3 minutos ideal
- **Audio**: Claro y sin ruido de fondo
- **Iluminación**: Buena iluminación natural o artificial
- **Subtítulos**: Agregar subtítulos para accesibilidad

### Aspectos de Contenido

- ✅ Mostrar claramente cada paso
- ✅ Usar un animal de demostración (o muñeco)
- ✅ Hablar despacio y claro
- ✅ Repetir información importante
- ✅ Mostrar advertencias en pantalla
- ❌ No usar jerga técnica compleja
- ❌ No asumir conocimientos previos

## 🔍 Búsqueda de Videos Existentes

### Palabras Clave para Buscar

En YouTube, busca:
- "how to give [medication] to dogs"
- "administrar [medicamento] perros"
- "veterinary [medication] administration"
- "[medicamento] uso veterinario"

### Canales Veterinarios Recomendados

- VetVid (videos educativos veterinarios)
- ASPCA (American Society for the Prevention of Cruelty to Animals)
- Canales de universidades veterinarias
- Clínicas veterinarias profesionales

## 📊 Lista de Videos Necesarios

### Medicamentos que Necesitan Videos

| Medicamento | Prioridad | Video Sugerido |
|-------------|-----------|----------------|
| Peróxido de Hidrógeno | Alta | Cómo inducir vómito correctamente |
| Carbón Activado | Alta | Administración oral en gatos |
| Clorhexidina | Media | Limpieza de heridas |
| Suero Oral | Media | Rehidratación oral |
| Antihistamínico | Baja | Administración de pastillas |
| Suero Fisiológico | Media | Limpieza ocular |
| Blastoestimulina | Media | Aplicación de pomada |
| Compresas Frías | Alta | Uso correcto de compresas |
| Bravecto | Baja | Administración de tableta |

## 🔄 Actualizar Videos

Para actualizar un video existente:

1. Localiza el medicamento en `src/data/initialData.ts`
2. Cambia la URL del campo `instructionalVideo` o `video`
3. Actualiza la miniatura si es necesario
4. Guarda y recompila la aplicación

## ⚠️ Consideraciones Legales

### Derechos de Autor

- ✅ Usa videos propios
- ✅ Usa videos con licencia Creative Commons
- ✅ Pide permiso al creador del video
- ❌ No uses videos con copyright sin permiso

### Privacidad

- No muestres información personal
- No muestres rostros de personas sin consentimiento
- Usa animales de demostración con permiso del dueño

## 🧪 Probar los Videos

Después de agregar videos:

1. **Compilar la aplicación**:
   ```bash
   npm run build
   ```

2. **Probar en desarrollo**:
   ```bash
   npm run dev
   ```

3. **Verificar**:
   - El video se carga correctamente
   - La miniatura se muestra
   - El botón de play funciona
   - El video se reproduce en pantalla completa
   - Funciona en móviles

## 📱 Compatibilidad

Los videos funcionan en:
- ✅ Chrome (Desktop y móvil)
- ✅ Safari (iOS y macOS)
- ✅ Firefox
- ✅ Edge
- ✅ Navegadores móviles modernos

## 🆘 Solución de Problemas

### El video no se carga

- Verifica que la URL sea correcta
- Asegúrate de que el video sea público
- Prueba la URL en un navegador

### La miniatura no aparece

- Verifica la URL de la miniatura
- Para YouTube, se genera automáticamente
- Usa una imagen de respaldo

### El video no se reproduce en móvil

- Verifica que el video permita reproducción en móviles
- Algunos videos de YouTube tienen restricciones
- Prueba con otro video

## 📞 Recursos Adicionales

- **YouTube Creator Studio**: https://studio.youtube.com
- **Vimeo**: https://vimeo.com
- **Unsplash (imágenes gratis)**: https://unsplash.com
- **Canva (crear miniaturas)**: https://canva.com

---

**Nota**: Los videos son opcionales. La aplicación funciona perfectamente sin ellos, pero mejoran significativamente la experiencia del usuario.
