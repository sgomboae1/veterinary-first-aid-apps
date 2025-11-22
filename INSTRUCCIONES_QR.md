# 📋 Instrucciones para Imprimir y Colocar Códigos QR

## 🎯 Objetivo

Los códigos QR permiten acceder rápidamente a la información de cada medicamento del botiquín escaneándolos con un dispositivo móvil.

## 📥 Paso 1: Generar los Códigos QR

1. Abre la aplicación en tu navegador
2. Navega a `/qr-generator` o agrega `/qr-generator` a la URL
3. Ingresa la contraseña de acceso: `botiquin2024`
4. Haz clic en "📥 Descargar Todos los QR" para descargar todos los códigos
   - O descarga códigos individuales haciendo clic en cada uno

## 🖨️ Paso 2: Imprimir los Códigos

### Recomendaciones de Impresión

- **Papel**: Usa papel adhesivo o papel normal con cinta adhesiva transparente
- **Tamaño**: Los códigos se generan a 300x300px (aproximadamente 8x8 cm)
- **Calidad**: Imprime en alta calidad para mejor escaneo
- **Color**: Blanco y negro es suficiente (ahorra tinta)

### Opciones de Impresión

**Opción A: Papel Adhesivo**
- Compra papel adhesivo para impresora
- Imprime directamente los códigos QR
- Recorta y pega en los contenedores

**Opción B: Papel Normal + Protección**
- Imprime en papel normal
- Recorta los códigos
- Plastifica o cubre con cinta adhesiva transparente
- Pega con cinta de doble cara

## 📦 Paso 3: Colocar los Códigos en los Contenedores

### Ubicación Recomendada

1. **Frente del contenedor**: Coloca el QR en un lugar visible
2. **Superficie plana**: Asegúrate de que esté en una superficie lisa
3. **Altura accesible**: A la altura de los ojos para fácil escaneo
4. **Evita esquinas**: No coloques en bordes o esquinas dobladas

### Lista de Medicamentos y sus Códigos

| Medicamento | Código QR |
|-------------|-----------|
| Peróxido de Hidrógeno | VET-AID-peroxide-hydrogen |
| Carbón Activado | VET-AID-activated-charcoal |
| Clorhexidina | VET-AID-chlorhexidine |
| Suero Oral | VET-AID-oral-rehydration |
| Antihistamínico | VET-AID-antihistamine |
| Suero Fisiológico FISIOVET | VET-AID-fisiovet-saline |
| Blastoestimulina | VET-AID-blastoestimulina |
| Compresas Frías | VET-AID-cold-compress |
| Bravecto | VET-AID-bravecto |

## 🔍 Paso 4: Probar los Códigos

1. Abre la aplicación en tu móvil
2. Presiona "📷 Escanear QR"
3. Apunta la cámara a cada código QR
4. Verifica que te lleve a la información correcta

## 💡 Consejos Adicionales

### Para Mejor Escaneo

- ✅ Mantén el código limpio y sin arrugas
- ✅ Asegúrate de tener buena iluminación
- ✅ Evita reflejos o brillos en el código
- ✅ Mantén el código a 10-30 cm de la cámara

### Mantenimiento

- 🔄 Reemplaza códigos dañados o ilegibles
- 🧼 Limpia los códigos regularmente con un paño seco
- 🔒 Protege con plástico transparente en ambientes húmedos

### Organización del Botiquín

1. **Por Categorías**: Agrupa medicamentos similares
2. **Etiquetas Adicionales**: Agrega etiquetas de texto junto al QR
3. **Fecha de Caducidad**: Marca la fecha de vencimiento visible
4. **Instrucciones Rápidas**: Pega una nota con indicaciones básicas

## 📱 Uso en Emergencias

### Cómo Escanear en una Emergencia

1. Abre la app (funciona sin internet)
2. Toca "📷 Escanear QR"
3. Apunta al código del medicamento
4. Lee la información y guía de emergencia
5. Sigue las instrucciones paso a paso

### Acceso Rápido sin QR

Si no puedes escanear el código:
1. Abre la app
2. Usa los filtros de categoría
3. Busca el medicamento en la lista
4. Toca para ver la información

## ⚠️ Importante

- **Siempre consulta a un veterinario** antes de administrar medicamentos
- Los códigos QR son una herramienta de referencia rápida
- Mantén el botiquín fuera del alcance de niños y mascotas
- Revisa regularmente las fechas de caducidad

## 🔐 Seguridad de la Contraseña

La contraseña por defecto es `botiquin2024`. Para cambiarla:

1. Abre `src/pages/QRGeneratorScreen.tsx`
2. Busca la línea:
   ```tsx
   <PasswordProtected correctPassword="botiquin2024">
   ```
3. Cambia `"botiquin2024"` por tu nueva contraseña
4. Guarda y recompila la aplicación

---

**¿Necesitas ayuda?** Consulta el README.md principal para más información.
