# 🚀 Guía Rápida de Despliegue

## ⚡ Opción Más Rápida: Vercel

### Requisitos Previos
- Cuenta de GitHub (gratis)
- Cuenta de Vercel (gratis)

### Pasos (10 minutos total)

#### 1️⃣ Subir a GitHub (5 minutos)

```bash
# Abre la terminal en la carpeta del proyecto
cd veterinary-first-aid-app

# Inicializa Git (si no está inicializado)
git init

# Agrega todos los archivos
git add .

# Crea el primer commit
git commit -m "Aplicación de botiquín veterinario lista para despliegue"

# Ve a github.com y crea un nuevo repositorio llamado "veterinary-first-aid-app"
# NO marques "Initialize with README"

# Conecta tu proyecto con GitHub (reemplaza TU-USUARIO con tu usuario de GitHub)
git remote add origin https://github.com/TU-USUARIO/veterinary-first-aid-app.git

# Sube el código
git branch -M main
git push -u origin main
```

#### 2️⃣ Desplegar en Vercel (2 minutos)

1. **Ve a [vercel.com](https://vercel.com)**
2. **Haz clic en "Sign Up"**
3. **Selecciona "Continue with GitHub"**
4. **Autoriza Vercel**
5. **Haz clic en "Add New..." → "Project"**
6. **Selecciona tu repositorio "veterinary-first-aid-app"**
7. **Haz clic en "Import"**
8. **Configuración automática detectada:**
   - Framework: Vite ✅
   - Build Command: `npm run build` ✅
   - Output Directory: `dist` ✅
9. **Haz clic en "Deploy"**
10. **Espera 2-3 minutos** ⏳
11. **¡Listo!** 🎉

#### 3️⃣ Obtener tu URL

Vercel te mostrará una URL como:
```
https://veterinary-first-aid-app-abc123.vercel.app
```

**¡Esa es tu URL pública!** Compártela con quien quieras.

## 📱 Probar la Aplicación

Abre la URL en cualquier dispositivo:
- ✅ Computadora
- ✅ Celular
- ✅ Tablet

Todas las funciones funcionarán:
- ✅ Ver medicamentos
- ✅ Escanear QR (con HTTPS)
- ✅ Ver videos
- ✅ Panel de administración

## 🔄 Actualizar la Aplicación

Cada vez que hagas cambios:

```bash
# Guarda los cambios
git add .
git commit -m "Descripción de los cambios"
git push
```

**Vercel automáticamente:**
1. Detecta el cambio
2. Compila la nueva versión
3. La despliega
4. Tu URL se actualiza (mismo link)

## 🎯 Personalizar el Dominio

### En Vercel (Gratis):
```
Tu URL: https://veterinary-first-aid-app-abc123.vercel.app
```

### Cambiar a algo más corto:
1. En Vercel, ve a tu proyecto
2. Settings → Domains
3. Agrega un dominio personalizado de Vercel:
   ```
   botiquin-vet.vercel.app
   ```

### Con tu propio dominio ($10-15/año):
1. Compra un dominio en Namecheap, GoDaddy, etc.
2. En Vercel: Settings → Domains
3. Agrega tu dominio
4. Configura DNS según instrucciones

## ⚠️ Problemas Comunes

### Error: "Command not found: git"
**Solución:** Instala Git desde [git-scm.com](https://git-scm.com)

### Error: "Permission denied"
**Solución:** Configura SSH o usa HTTPS con token de GitHub

### Error: "Build failed"
**Solución:** Verifica que `npm run build` funcione localmente primero

### La aplicación no carga
**Solución:** Verifica que `vercel.json` esté en la raíz del proyecto

## 📊 Monitoreo

En Vercel puedes ver:
- 📈 Número de visitas
- 🌍 De qué países acceden
- ⚡ Velocidad de carga
- 🐛 Errores (si hay)

## 💡 Tips

1. **Nombre del proyecto:** Usa un nombre descriptivo en GitHub
2. **README:** Agrega un README.md con descripción del proyecto
3. **Variables de entorno:** Si necesitas, agrégalas en Vercel Settings
4. **Dominio:** El dominio .vercel.app es gratis y profesional

## 🆘 ¿Necesitas Ayuda?

Si tienes problemas:
1. Verifica que `npm run build` funcione localmente
2. Revisa los logs en Vercel
3. Verifica que todos los archivos estén en GitHub

---

**Tiempo total: ~10 minutos**
**Costo: $0 (gratis)**
**Resultado: Aplicación accesible desde cualquier lugar del mundo** 🌍
