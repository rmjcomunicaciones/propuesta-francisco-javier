# Francisco Javier García 2028 🇩🇴
### Campaña Digital Presidencial — PLD

> *"El turismo fue el inicio. El país entero es el destino."*

---

## 📁 Estructura del proyecto

```
fjg2028/
├── index.html          ← Página principal
├── vercel.json         ← Configuración Vercel
├── css/
│   └── styles.css      ← Todos los estilos
├── js/
│   └── main.js         ← Animaciones e interactividad
└── images/
    ├── candidato.svg   ← Retrato del candidato
    ├── logo-pld.svg    ← Logo del partido
    ├── bandera-rd.svg  ← Bandera dominicana
    └── og-image.svg    ← Imagen para redes sociales
```

---

## 🚀 Cómo publicar en Vercel via GitHub

### Paso 1 — Subir a GitHub
1. Ve a [github.com](https://github.com) e inicia sesión
2. Haz clic en **"New repository"** (botón verde)
3. Nombre: `fjg2028` → **Create repository**
4. Sube todos los archivos arrastrándolos al repositorio, o usa Git:

```bash
git init
git add .
git commit -m "Campaña FJG 2028 - lanzamiento"
git branch -M main
git remote add origin https://github.com/TU_USUARIO/fjg2028.git
git push -u origin main
```

### Paso 2 — Conectar con Vercel
1. Ve a [vercel.com](https://vercel.com) e inicia sesión con tu cuenta GitHub
2. Haz clic en **"Add New Project"**
3. Selecciona el repositorio `fjg2028`
4. En configuración: Framework Preset → **Other**
5. Haz clic en **"Deploy"** ✅

### Paso 3 — Tu sitio estará en línea
Vercel te dará una URL como:
```
https://fjg2028.vercel.app
```

Puedes agregar tu dominio personalizado (`franciscojaviergarcia2028.do`) desde el panel de Vercel → Settings → Domains.

---

## 🖼️ Para agregar foto real del candidato

Reemplaza `images/candidato.svg` con una foto JPG/PNG del candidato:
1. Nombra el archivo `candidato.jpg`
2. Colócalo en la carpeta `images/`
3. En `index.html` busca la línea:
   ```html
   <img src="images/candidato.svg" alt="...">
   ```
   y cámbiala a:
   ```html
   <img src="images/candidato.jpg" alt="...">
   ```

---

## 📱 Secciones del sitio

| Sección | Descripción |
|---------|------------|
| Hero | Presentación con nombre, año y slogan |
| Narrativa | Los 3 pilares de la campaña |
| Propuestas | 5 ejes de gobierno |
| Trayectoria | Línea de tiempo biográfica |
| Estrategia Digital | Canales y KPIs |
| Gestión de Crisis | Protocolo 3 niveles |
| Únete | Captación WhatsApp |

---

*Diploma en Marketing Político Digital · Goberna & CCL · 2025*
