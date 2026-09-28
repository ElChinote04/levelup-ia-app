# Sellyn

App educativa (React Native / Expo) enfocada en enseñar e-commerce y negocios digitales a través de un formato tipo videojuego: un mapa del mundo por el que se avanza lección a lección, con quizzes, casos reales y un mentor virtual (Nova).

## Demo en vivo (Vercel)

Este repo incluye una build estática ya generada en [`deploy/`](./deploy), lista para desplegar en Vercel sin pasos adicionales:

1. Entra a [vercel.com/new](https://vercel.com/new) e importa este repositorio.
2. En **Root Directory**, selecciona `deploy`.
3. Framework preset: **Other** (sitio estático, no necesita build).
4. Deploy.

La página sirve la app dentro de un marco de celular cuando se abre desde una computadora, y a pantalla completa cuando se abre desde un celular real.

## Probar la app real en tu celular (Expo Go)

```bash
cd app
npm install
npx expo start
```

Escanea el código QR con la app **Expo Go** (Android/iOS). Ver [`app/README.md`](./app/README.md) para más detalle (modo túnel, generar un `.apk`/`.ipa` instalable con EAS, etc).

## Estructura del repo

```
app/        código fuente de la app (Expo Router, componentes, estado, tema)
deploy/     build estática ya generada (app/ exportado a web) + marco de celular para Vercel
project/    prototipo original en HTML/CSS/JS (fase de diseño, previa a la app real)
chats/      transcripciones de las conversaciones de diseño que originaron el proyecto
```

## Regenerar la build de `deploy/`

Si haces cambios en `app/` y quieres actualizar la demo de Vercel:

```bash
cd app
npx expo export --platform web --output-dir ../deploy
```

Esto sobreescribe `deploy/index.html` con una versión sin el marco de celular — hay que volver a agregar el bloque CSS `@media (min-width: 501px)` que envuelve `#root` en un marco de teléfono (buscar `phone-caption` en el `index.html` anterior como referencia).
