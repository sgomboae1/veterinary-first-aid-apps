# 🏥 Botiquín Veterinario - Aplicación Móvil

Aplicación web progresiva (PWA) multiplataforma para gestionar un botiquín de primeros auxilios veterinario con acceso mediante códigos QR.

## ✨ Características

- 📱 **Multiplataforma**: Funciona en móviles, tablets y ordenadores
- 🔍 **Escaneo QR**: Acceso rápido mediante códigos QR
- 📴 **Offline First**: Funcionalidad completa sin conexión a internet
- 🏥 **Información Detallada**: Datos completos de cada medicamento
- 📋 **Guías de Emergencia**: Instrucciones paso a paso para situaciones críticas
- 📹 **Videos Instructivos**: Aprende visualmente cómo usar cada medicamento
- 🎯 **Filtrado Inteligente**: Organización por categorías
- 🔒 **Generador de QR**: Herramienta protegida para generar códigos QR
- ♿ **Accesible**: Diseño inclusivo con soporte para lectores de pantalla

## 🚀 Inicio Rápido

### Requisitos Previos

- Node.js 18+ instalado
- npm o yarn

### Instalación

```bash
# Clonar el repositorio
git clone <url-del-repositorio>
cd veterinary-first-aid-app

# Instalar dependencias
npm install

# Iniciar servidor de desarrollo
npm run dev
```

La aplicación estará disponible en `http://localhost:5173`

### Compilar para Producción

```bash
# Crear build optimizado
npm run build

# Vista previa del build
npm run preview
```

## 📁 Estructura del Proyecto

```
veterinary-first-aid-app/
├── public/                 # Archivos estáticos
│   ├── manifest.json      # Configuración PWA
│   ├── icon-192.png       # Icono 192x192
│   └── icon-512.png       # Icono 512x512
├── src/
│   ├── components/        # Componentes reutilizables
│   │   ├── Button.tsx
│   │   ├── Card.tsx
│   │   ├── Badge.tsx
│   │   ├── Alert.tsx
│   │   ├── Modal.tsx
│   │   ├── ItemCard.tsx
│   │   ├── ItemList.tsx
│   │   ├── CategoryFilter.tsx
│   │   ├── QRScanner.tsx
│   │   └── PasswordProtected.tsx
│   ├── contexts/          # Context API
│   │   ├── AppContext.tsx
│   │   └── QRContext.tsx
│   ├── data/              # Datos iniciales
│   │   └── initialData.ts
│   ├── models/            # Tipos TypeScript
│   │   ├── types.ts
│   │   └── constants.ts
│   ├── pages/             # Páginas
│   │   ├── HomeScreen.tsx
│   │   ├── QRScanScreen.tsx
│   │   ├── ItemDetailScreen.tsx
│   │   ├── EmergencyGuideScreen.tsx
│   │   └── QRGeneratorScreen.tsx
│   ├── services/          # Servicios
│   │   ├── database.ts
│   │   ├── repository.ts
│   │   └── seedData.ts
│   ├── utils/             # Utilidades
│   │   ├── generateQRCodes.ts
│   │   ├── accessibility.ts
│   │   └── lazyImage.ts
│   ├── App.tsx            # Componente principal
│   ├── main.tsx           # Punto de entrada
│   └── index.css          # Estilos globales
├── package.json
├── vite.config.ts         # Configuración Vite + PWA
└── README.md
```

## 💊 Medicamentos Incluidos

La aplicación incluye información detallada de 9 medicamentos esenciales:

1. **Peróxido de Hidrógeno** (Agua Oxigenada 3%) - Emético
2. **Carbón Activado** - Antídoto
3. **Clorhexidina** - Antiséptico
4. **Suero Oral** - Rehidratación
5. **Antihistamínico** (Difenhidramina/Clorfenamina)
6. **Suero Fisiológico FISIOVET** (250 ml)
7. **Pomada Cicatrizante** (Blastoestimulina)
8. **Compresas Frías** - Antiinflamatorio
9. **Bravecto** (4.5-10 Kg) - Antiparasitario

## 📖 Guía de Uso

### Para Usuarios

1. **Inicio**: Abre la aplicación en tu navegador
2. **Explorar**: Navega por la lista de medicamentos o usa los filtros
3. **Escanear QR**: Presiona el botón "Escanear QR" y apunta a un código
4. **Ver Detalles**: Haz clic en cualquier medicamento para ver información completa
5. **Emergencias**: Accede a guías paso a paso desde cada medicamento

### Para Administradores

#### Generar Códigos QR

1. Navega a `/qr-generator`
2. Ingresa la contraseña: `botiquin2024`
3. Descarga los códigos QR individuales o todos a la vez
4. Imprime los códigos y pégalos en los contenedores físicos

#### Cambiar Contraseña

Edita el archivo `src/pages/QRGeneratorScreen.tsx`:

```tsx
<PasswordProtected correctPassword="tu-nueva-contraseña">
```

## 🔧 Tecnologías Utilizadas

- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite
- **Routing**: React Router v6
- **Estado**: Context API
- **Base de Datos**: IndexedDB (idb)
- **QR Scanner**: html5-qrcode
- **QR Generator**: qrcode
- **PWA**: vite-plugin-pwa
- **Estilos**: CSS Modules

## 🌐 Despliegue

### Vercel (Recomendado)

```bash
# Instalar Vercel CLI
npm i -g vercel

# Desplegar
vercel
```

### Netlify

```bash
# Instalar Netlify CLI
npm i -g netlify-cli

# Desplegar
netlify deploy --prod
```

### GitHub Pages

1. Actualiza `vite.config.ts` con la base correcta:
```ts
export default defineConfig({
  base: '/nombre-repositorio/',
  // ...
})
```

2. Compila y despliega:
```bash
npm run build
# Sube la carpeta dist/ a GitHub Pages
```

## 📱 Instalación como PWA

### En Android/Chrome

1. Abre la aplicación en Chrome
2. Toca el menú (⋮) → "Agregar a pantalla de inicio"
3. La app se instalará como aplicación nativa

### En iOS/Safari

1. Abre la aplicación en Safari
2. Toca el botón de compartir
3. Selecciona "Agregar a pantalla de inicio"

## ♿ Accesibilidad

La aplicación cumple con las pautas WCAG 2.1 nivel AA:

- ✅ Navegación por teclado completa
- ✅ Etiquetas ARIA apropiadas
- ✅ Contraste de colores adecuado
- ✅ Soporte para lectores de pantalla
- ✅ Textos alternativos en imágenes
- ✅ Reducción de movimiento respetada

## 🔒 Seguridad

- No se recopilan datos personales
- Toda la información se almacena localmente
- No hay transmisión de datos a servidores externos
- Acceso protegido al generador de QR

## 🐛 Solución de Problemas

### La cámara no funciona

- Verifica que hayas dado permisos de cámara al navegador
- Asegúrate de usar HTTPS (requerido para acceso a cámara)
- En desarrollo local, usa `localhost` (permitido sin HTTPS)

### Los datos no se guardan

- Verifica que IndexedDB esté habilitado en tu navegador
- Limpia la caché y recarga la aplicación
- Asegúrate de no estar en modo incógnito

### La app no funciona offline

- Abre la app al menos una vez con conexión
- Verifica que el Service Worker esté registrado (DevTools → Application)
- Recarga la página para activar el Service Worker

## 📄 Licencia

Este proyecto es de código abierto y está disponible para uso educativo y personal.

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Por favor:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📞 Soporte

Para reportar problemas o sugerencias, abre un issue en el repositorio.

---

**⚠️ Nota Importante**: Esta aplicación es una herramienta de referencia. Siempre consulta con un veterinario profesional antes de administrar cualquier medicamento a tu mascota.
