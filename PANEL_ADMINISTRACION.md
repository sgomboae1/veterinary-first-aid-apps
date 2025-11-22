# 🔧 Panel de Administración de Videos

## ✅ COMPLETADO - Panel de Administración Creado

He creado una interfaz de administración protegida con contraseña donde puedes gestionar los videos de cada medicamento fácilmente.

## 🔐 Acceso al Panel

**URL:** `http://localhost:5173/admin`

**Contraseña:** `admin123` (la misma que usas para generar códigos QR)

## 📋 Funcionalidades

### 1. Ver Todos los Medicamentos
- Lista de los 9 medicamentos
- Indicador visual de cuáles tienen video (✅) y cuáles no (⚠️)
- Muestra la URL del video actual si existe

### 2. Editar Video de un Medicamento
1. Haz clic en "✏️ Editar Video" en cualquier medicamento
2. Pega la URL del video de YouTube (completa o solo el ID)
3. Verás una vista previa del video
4. Haz clic en "💾 Guardar Video"
5. El video se actualiza inmediatamente en toda la aplicación

### 3. Eliminar Video
1. En el formulario de edición
2. Haz clic en "🗑️ Eliminar Video"
3. El video se elimina del medicamento

## 🎬 Cómo Agregar Videos

### Opción A: URL Completa
```
https://www.youtube.com/watch?v=dQw4w9WgXcQ
```

### Opción B: Solo el ID
```
dQw4w9WgXcQ
```

Ambas opciones funcionan igual.

## ⚠️ Importante: Restricciones de YouTube

Algunos videos de YouTube **NO se pueden reproducir en sitios web externos** debido a restricciones del propietario del video.

### Cómo Verificar si un Video Funciona:

1. Copia la URL del video que quieres usar
2. Ve al panel de administración
3. Pega la URL en el campo
4. **Verifica la vista previa**
5. Si ves "Video no disponible", ese video tiene restricciones
6. Busca otro video similar que sí permita reproducción

### Consejos para Encontrar Videos que Funcionen:

- Busca videos de canales educativos grandes
- Prefiere videos con licencia Creative Commons
- Evita videos de canales comerciales o con derechos restringidos
- Prueba varios videos hasta encontrar uno que funcione

## 📝 Ejemplo de Uso

### Paso 1: Acceder al Panel
```
1. Ve a http://localhost:5173/admin
2. Ingresa la contraseña: admin123
3. Verás la lista de medicamentos
```

### Paso 2: Editar un Medicamento
```
1. Haz clic en "Editar Video" en "Peróxido de Hidrógeno"
2. Busca en YouTube: "como inducir vomito perro veterinaria"
3. Copia la URL del video que encuentres
4. Pégala en el campo "URL del Video de YouTube"
5. Verifica la vista previa
6. Si funciona, haz clic en "Guardar Video"
```

### Paso 3: Verificar el Cambio
```
1. Ve a la página principal (http://localhost:5173)
2. Haz clic en "Peróxido de Hidrógeno"
3. Desplázate hasta "📹 Video Instructivo"
4. El nuevo video debería aparecer
```

## 🎯 Videos Recomendados por Medicamento

Te sugiero buscar en YouTube videos sobre:

1. **Peróxido de Hidrógeno**: "inducir vómito perro emergencia"
2. **Carbón Activado**: "carbón activado mascotas intoxicación"
3. **Clorhexidina**: "limpiar heridas perro gato"
4. **Suero Oral**: "rehidratar mascota deshidratación"
5. **Antihistamínico**: "administrar medicamento perro"
6. **Suero Fisiológico**: "limpiar ojos perro"
7. **Blastoestimulina**: "curar heridas perro"
8. **Compresas Frías**: "primeros auxilios mascotas"
9. **Bravecto**: "administrar pastilla perro"

## 🔄 Actualización Automática

Los cambios que hagas en el panel de administración se guardan en la base de datos local (IndexedDB) y se reflejan inmediatamente en toda la aplicación.

## 🛠️ Solución de Problemas

### Problema: "Video no disponible" en la vista previa
**Solución:** Ese video tiene restricciones. Busca otro video similar.

### Problema: El video no se guarda
**Solución:** Verifica que la URL sea válida y que el video exista en YouTube.

### Problema: Los cambios no se ven en la aplicación
**Solución:** Recarga la página con Ctrl + Shift + R

## 📱 Acceso Rápido

Puedes agregar un botón en la página principal para acceder al panel de administración más fácilmente. Por ahora, accede directamente con la URL:

```
http://localhost:5173/admin
```

---

**¡Listo!** Ahora puedes gestionar todos los videos de los medicamentos desde una interfaz visual sin tocar el código.
