# 📱 Cómo Generar el Código QR de Acceso

## 🎯 Opción 1: Usar el archivo HTML local (MÁS RÁPIDO)

1. **Abre el archivo** `generar-qr-principal.html` en tu navegador
   - Haz doble clic en el archivo
   - O arrastra el archivo a tu navegador

2. **Verás el código QR generado automáticamente**

3. **Opciones disponibles:**
   - 📥 **Descargar QR**: Guarda la imagen PNG en tu computadora
   - 🖨️ **Imprimir QR**: Imprime directamente el código QR
   - 📋 **Copiar URL**: Copia el enlace de la aplicación

## 🌐 Opción 2: Usar la aplicación web

1. Ve a tu aplicación: `https://veterinary-first-aid-apps.vercel.app`
2. Haz clic en el menú (☰)
3. Selecciona "Generar QR"
4. Ingresa la contraseña: `botiquin2024`
5. Descarga los códigos QR que necesites

## 📋 ¿Para qué sirve el QR principal?

El código QR principal lleva directamente a:
```
https://veterinary-first-aid-apps.vercel.app
```

### Usos recomendados:

✅ **Pegar en el botiquín físico**
- Imprime el QR y pégalo en la tapa del botiquín
- Cualquiera puede escanearlo y acceder a la información

✅ **Compartir con familiares**
- Envía el QR por WhatsApp, email, etc.
- Ellos pueden escanearlo y tener acceso inmediato

✅ **Usar en clínicas veterinarias**
- Comparte con tu veterinario
- Pueden ver qué medicamentos tienes disponibles

✅ **Emergencias**
- Acceso rápido sin necesidad de buscar la URL
- Funciona desde cualquier celular con cámara

## 🎨 Personalización

Si quieres cambiar el color o tamaño del QR, edita el archivo `generar-qr-principal.html`:

```javascript
// Busca esta sección y modifica los valores:
QRCode.toCanvas(
    document.getElementById('qrcode'),
    APP_URL,
    {
        width: 300,        // Cambia el tamaño (en píxeles)
        margin: 2,         // Cambia el margen
        color: {
            dark: '#667eea',   // Cambia el color del QR
            light: '#ffffff'   // Cambia el color de fondo
        }
    }
);
```

## 📱 Cómo escanear el QR

### En iPhone:
1. Abre la app de Cámara
2. Apunta al código QR
3. Toca la notificación que aparece arriba

### En Android:
1. Abre la app de Cámara
2. Apunta al código QR
3. Toca el enlace que aparece

### Alternativa:
- Usa Google Lens
- Usa cualquier app de escaneo de QR

## 💡 Tips

- **Imprime en buena calidad**: Usa papel blanco y tinta oscura
- **Tamaño recomendado**: Mínimo 5x5 cm para fácil escaneo
- **Protege el QR**: Plastifica o usa cinta transparente
- **Prueba antes**: Escanea el QR antes de pegarlo para verificar

## 🔄 Actualizar la URL del QR

Si cambias el dominio de tu aplicación, edita el archivo `generar-qr-principal.html`:

```javascript
// Busca esta línea y cambia la URL:
const APP_URL = 'https://tu-nueva-url.vercel.app';
```

Luego vuelve a abrir el archivo en el navegador para generar el nuevo QR.

## 🆘 Solución de Problemas

### El QR no se genera
- Verifica que tengas conexión a internet (necesaria para cargar la librería QR)
- Prueba con otro navegador (Chrome, Firefox, Edge)

### El QR no escanea
- Asegúrate de que la imagen esté clara y sin reflejos
- Aumenta el tamaño del QR al imprimir
- Verifica que la URL sea correcta

### No puedo descargar el QR
- Haz clic derecho en el QR → "Guardar imagen como..."
- O usa la opción de captura de pantalla

---

**¿Necesitas ayuda?** Abre el archivo `generar-qr-principal.html` y todo funcionará automáticamente.
