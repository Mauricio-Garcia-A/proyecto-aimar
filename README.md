# Proyecto: Sitio Web Gimnasio Aimar

Proyecto de Sitio Web para el centro de entrenamiento Aimar.
Basado en un diseño OnePage con Infinite Scrolling.

    Tecnologias usadas en el proyecto:
        - ReactJS (JS)
        - Sass (CSS)

## Instalacion

Para realizar modificacion u actualizaciones del proyecto debe descargar este repositorio ['proyecto-aimar'](https://github.com/Mauricio-Garcia-A/proyecto-aimar) y ejecutar el siguiente comando en consola:

```bash
npm install
```

Comando para Iniciar el Proyecto en el servidor local `localhost:3000` 
```bash
npm run dev
```
         
Comando par Deploya a produccion, en la carpeta`./dist/`  
```bash
npm run build
```

## 🚀 Estructura del proyecto

Estructura bacica de Carpetas y Archivos que contiene el proyecto:

```
/
├── public/
│   ├── favicon.ico
│   ├── videos/
│   │    └── Homepage-Desktop.webm
│   └── images/
│       └── Model-S-Desktop.avif
│       └── Model-3-Desktop.avif
│       └── Model-X-Desktop.avif
│       └── ( ... )
├── src/
│   ├── components/
│   │   └── logos/
│   │   │    └── Logo.jsx
│   │   │    └── Logo.jsx
│   │   └── sections
│   │   └── LandingFooter.astro
│   │   └── LandingHeader.astro
│   │   └── Logo.astro
│   │   └── LogoTitle.astro
│   │   └── Section.astro
│   ├── hooks/
│   │   └── xxx.js
│   └── pages/
│       └── Home/
│           └── Home.jsx
└── package.json
```