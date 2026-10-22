# Arquitectura de Software: monolito y microservicios

Sitio web educativo y responsivo para aprender sobre arquitectura monolítica y microservicios. Incluye diagramas, tabla comparativa, un reproductor de TikTok y un cuestionario interactivo de diez preguntas. También presenta la información del creador y a Gema, su mascota.

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
```

## Ejecutar en Codespaces

Abre `index.html` con la extensión Live Server o inicia un servidor estático desde la raíz del proyecto, por ejemplo:

```sh
python3 -m http.server 8000
```

Después abre el puerto 8000 en el navegador. No se necesita un servidor de aplicación ni un proceso de compilación.

## Personalización

- **Video:** se reproduce con el reproductor oficial de TikTok en `index.html`. Para cambiarlo, actualiza el identificador en la URL del iframe.
- **Foto de Gema:** reemplaza `img/Gema.jpeg` por otra imagen y actualiza la ruta y el texto alternativo de la imagen en `index.html`.
- **Preguntas:** edita el arreglo `questions` en `js/quiz.js`. Cada entrada contiene `id`, `question`, `options`, `correctAnswer` (índice desde cero) y `explanation`.
- **Colores:** cambia las variables CSS de `:root` al inicio de `css/styles.css`.
- **Perfil:** modifica la sección “Sobre el creador” en `index.html`.

## Limitaciones

El video embebido está sujeto a la disponibilidad y las políticas de TikTok. El cuestionario funciona en el navegador y no guarda resultados después de recargar la página.
