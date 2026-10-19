# Arquitectura de Software: monolito y microservicios

Sitio web educativo y responsivo para aprender sobre arquitectura monolítica y microservicios. Incluye diagramas, tabla comparativa, video y un cuestionario interactivo de diez preguntas. También presenta la información del creador y a Gema, su mascota.

## Tecnologías

- HTML5, CSS3 y JavaScript ES6+
- Bootstrap 5.3.3 y Bootstrap Icons 1.11.3 (CDN)

Bootstrap y sus iconos requieren conexión a internet. El contenido y los estilos propios están en los archivos locales; si se necesita trabajar sin conexión, descarga las hojas de estilo y el bundle de Bootstrap y actualiza sus referencias en `index.html`.

## Estructura

```text
index.html
css/styles.css
js/main.js
js/quiz.js
img/Gema.jpeg
video/Video.mp4
```

## Ejecutar en Codespaces

Abre `index.html` con la extensión Live Server o inicia un servidor estático desde la raíz del proyecto, por ejemplo:

```sh
python3 -m http.server 8000
```

Después abre el puerto 8000 en el navegador. No se necesita un servidor de aplicación ni un proceso de compilación.

## Personalización

- **Video:** el video actual se carga desde `video/Video.mp4`. Para cambiarlo, reemplaza ese archivo por un MP4 propio o modifica la ruta del elemento `<source>` en `index.html`. El reproductor carga metadatos y no descarga automáticamente el video completo.
- **Foto de Gema:** reemplaza `img/Gema.jpeg` por otra imagen y actualiza la ruta y el texto alternativo de la imagen en `index.html`.
- **Preguntas:** edita el arreglo `questions` en `js/quiz.js`. Cada entrada contiene `id`, `question`, `options`, `correctAnswer` (índice desde cero) y `explanation`.
- **Colores:** cambia las variables CSS de `:root` al inicio de `css/styles.css`.
- **Perfil:** modifica la sección “Sobre el creador” en `index.html`.

## Limitaciones

El reproductor utiliza un archivo MP4 local; no incluye subtítulos porque no se proporcionó un archivo WebVTT. El cuestionario funciona en el navegador y no guarda resultados después de recargar la página.
