# Sellyn — app demo (Expo / React Native)

Versión funcional de las 15 pantallas, construida en React Native con Expo Router, pensada para
correr **en el celular de verdad** durante la demo (no es una página web, es la app corriendo con
Metro + Expo Go).

## Cómo correrla en tu celular

1. Instala **Expo Go** en el celular (gratis, App Store / Google Play).
2. En esta carpeta (`app/`), instala dependencias una vez:
   ```
   npm install
   ```
3. Levanta el servidor:
   ```
   npx expo start
   ```
4. Escanea el código QR que aparece en la terminal:
   - **Android**: con la cámara o desde la app Expo Go.
   - **iPhone**: con la cámara del sistema (te va a ofrecer abrir en Expo Go).
5. La app carga en el celular. Los cambios en el código se recargan solos (hot reload) — útil si
   quieren ajustar algo en vivo antes de presentar.

El celular y la laptop deben estar en la **misma red WiFi**. Si la red del lugar de la demo bloquea
conexiones entre dispositivos (común en WiFi corporativo/de eventos), corre `npx expo start --tunnel`
en vez de `npx expo start` — es más lento para cargar pero funciona a través de internet en vez de
LAN.

## Qué incluye

Las 15 pantallas del prototipo (`../project/LevelUp IA - Prototipo funcional.html`), reconstruidas
como pantallas nativas con navegación real (`expo-router`, transiciones tipo stack, gesto de
"volver" nativo):

Apertura → Login / Crear cuenta → Tipo de negocio → Dashboard → Logros → Galaxia → Camino del
planeta → Lección (video → preguntas → caso → resolución) → Chat con Nova → Paywall → Premium.

- Sin backend real: los diamantes, el progreso y las selecciones son estado local en memoria
  (se resetea al recargar la app), igual que el prototipo HTML.
- El flujo y los textos son exactamente los mismos que ya aprobaste en el HTML; lo que cambia es
  que ahora es una app instalable-en-vivo en vez de una página.

## Estructura

```
src/
  app/            pantallas (una por archivo, ruteo automático por nombre)
  components/ui.jsx   botones, tarjetas, barra inferior, íconos compartidos
  state/AppState.jsx  estado compartido (selecciones, diamantes, etc.)
  theme.js            colores y tokens de diseño
```

## Si más adelante quieren un .apk/.ipa instalable sin Expo Go

Eso se hace con **EAS Build** (`npx eas build`), el servicio de compilación en la nube de Expo.
Requiere una cuenta gratuita de Expo y (para iOS) una cuenta de Apple Developer para instalarlo en
un iPhone físico sin pasar por la App Store. Para la demo del celular alcanza con Expo Go — el build
instalable es un paso aparte para cuando lo necesiten distribuir más ampliamente.
