# Marta

La vista previa de GitHub no enseña bien este proyecto. Para verlo como toca, abre `index.html` en el navegador o usa Live Server desde VS Code.

Lo importante aquí es cómo subir las fotos para que la galería funcione sin tocar código.

## Estructura del proyecto

```text
Marta/
|- index.html
|- css/
|  \- styles.css
|- js/
|  \- main.js
|- photos/
|  |- arquitectura/
|  \- naturaleza/
\- docs/
   |- logo.jpeg
   \- mockup.jpeg
```

## Como subir las fotos

Las imágenes de la galería de arquitectura se cargan por ruta fija. Eso significa que tienen que estar dentro de `photos/arquitectura/` y con estos nombres exactos:

```text
photos/arquitectura/ext-01.jpg
photos/arquitectura/ext-02.jpg
photos/arquitectura/ext-03.jpg
photos/arquitectura/int-01.jpg
photos/arquitectura/int-02.jpg
photos/arquitectura/det-01.jpg
photos/arquitectura/det-02.jpg
photos/arquitectura/urb-01.jpg
```

Relacion de cada archivo:

- `ext-*` = exterior
- `int-*` = interior
- `det-*` = detalles
- `urb-*` = urbano

## Pasos

1. Mete tus fotos en `photos/arquitectura/`.
2. Renombralas para que coincidan con los nombres de arriba.
3. Si una foto no usa `.jpg`, conviertela o cambia la ruta correspondiente en `index.html`.
4. Recarga la pagina.

## Que pasa si no has subido una foto

Mientras falte una imagen, esa tarjeta muestra una foto de demostración mediante `onerror`. En cuanto pongas tu archivo real con el nombre correcto, la demo desaparece sola.

## Carpeta naturaleza

La carpeta `photos/naturaleza/` queda preparada para una futura seccion. Si luego quieres activarla, puedes seguir el mismo criterio de nombres que ya aparece indicado en `index.html`.