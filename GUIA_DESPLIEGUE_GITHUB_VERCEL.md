# 🚀 Guía Completa: GitHub + Vercel

## ✅ Requisitos Previos

- [x] Node.js instalado (https://nodejs.org/)
- [ ] Cuenta en GitHub (https://github.com/)
- [ ] Cuenta en Vercel (https://vercel.com/)

## 📋 Paso a Paso

### 1. Verificar Node.js (HAZLO PRIMERO)

```powershell
node --version
npm --version
```

Si no aparecen las versiones, instala Node.js desde https://nodejs.org/

### 2. Instalar dependencias

```powershell
cd veterinary-first-aid-app
npm install
```

### 3. Probar que compila

```powershell
npm run build
```

### 4. Crear cuenta en GitHub

1. Ve a https://github.com/
2. Crea una cuenta gratuita
3. Verifica tu email

### 5. Crear repositorio en GitHub

1. Haz clic en "New repository"
2. Nombre: `veterinary-first-aid-app`
3. Descripción: `Aplicación PWA para botiquín veterinario`
4. Público o Privado (tu eliges)
5. **NO marques** "Add a README file"
6. Haz clic en "Create repository"

### 6. Subir código a GitHub

```powershell
# Inicializar git (si no está inicializado)
git init

# Agregar todos los archivos
git add .

# Hacer commit
git commit -m "Aplicación de botiquín veterinario lista para despliegue"

# Conectar con GitHub (reemplaza TU-USUARIO)
git remote add origin https://github.com/TU-USUARIO/veterinary-first-aid-app.git

# Subir código
git branch -M main
git push -u origin main
```

### 7. Crear cuenta en Vercel

1. Ve a https://vercel.com/
2. Haz clic en "Sign Up"
3. Selecciona "Continue with GitHub"
4. Autoriza Vercel para acceder a tus repositorios

### 8. Desplegar en Vercel

1. En Vercel, haz clic en "Add New..." → "Project"
2. Busca tu repositorio `veterinary-first-aid-app`
3. Haz clic en "Import"
4. Configuración automática:
   - Framework Preset: Vite ✅
   - Build Command: `npm run build` ✅
   - Output Directory: `dist` ✅
   - Install Command: `npm install` ✅
5. Haz clic en "Deploy"
6. Espera 2-3 minutos

### 9. ¡Listo! 🎉

Vercel te dará una URL como:
```
https://veterinary-first-aid-app.vercel.app
```

## 🔄 Actualizaciones Futuras

Para actualizar la aplicación:

```powershell
# Hacer cambios en el código
git add .
git commit -m "Descripción de los cambios"
git push
```

Vercel detectará automáticamente los cambios y desplegará la nueva versión.

## 🌐 URLs de tu aplicación

Después del despliegue tendrás:

- **Página principal**: https://tu-app.vercel.app/
- **Escanear QR**: https://tu-app.vercel.app/scan
- **Panel Admin**: https://tu-app.vercel.app/admin
- **Generar QR**: https://tu-app.vercel.app/qr-generator

## 🔒 Contraseñas

- **Panel Admin**: `admin123`
- **Generar QR**: `botiquin2024`

## 📱 Compartir la App

Simplemente comparte la URL de Vercel. La aplicación:

- ✅ Funciona en cualquier dispositivo
- ✅ Se puede instalar como app móvil
- ✅ Funciona sin internet (después de la primera carga)
- ✅ Es completamente segura (HTTPS)

## 🆘 Solución de Problemas

### Error: "git not found"
```powershell
# Instalar Git
winget install Git.Git
# O descargar desde: https://git-scm.com/
```

### Error: "npm not found"
- Reinstala Node.js desde https://nodejs.org/
- Reinicia PowerShell

### Error en el build
```powershell
# Limpiar e instalar de nuevo
rm -rf node_modules
rm package-lock.json
npm install
npm run build
```

## 💰 Costos

- **GitHub**: Gratis (repositorios públicos ilimitados)
- **Vercel**: Gratis (100GB ancho de banda/mes)
- **Total**: $0 al mes

## 📞 Soporte

Si necesitas ayuda, proporciona:
1. El error exacto que aparece
2. En qué paso te quedaste
3. Captura de pantalla si es posible

---

**¡Tu aplicación estará disponible para todo el mundo en menos de 30 minutos!** 🌍