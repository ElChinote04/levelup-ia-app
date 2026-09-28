// Recoleta (títulos principales) es una fuente comercial que no está en Google Fonts,
// así que usamos Fraunces como sustituto gratuito de carácter similar (serif cálida).
// El resto sigue la tabla tal cual: Nunito Sans en distintos pesos según el uso.
export const fonts = {
  displayBold: 'Fraunces_700Bold', // títulos principales
  displaySemiBold: 'Fraunces_600SemiBold', // títulos principales
  cardTitle: 'NunitoSans_700Bold', // subtítulos y títulos de tarjetas
  emphasis: 'NunitoSans_600SemiBold', // botones, navegación, datos importantes
  body: 'NunitoSans_400Regular', // texto general e información
  caption: 'NunitoSans_300Light', // información secundaria
  captionRegular: 'NunitoSans_400Regular', // información secundaria (alt)
};

export const APP_NAME = 'Sellyn';

export const colors = {
  // App background (indigo, "space" screens use the deeper tone)
  bg: '#1D2596',
  bgDeep: '#0B1043',
  bgPath: '#0E1666',

  // Neutral card surfaces (white/cream) that sit on the dark background
  card: '#F2F1EA',
  cardAlt: '#E8E5DA',
  cardMuted: '#EDEAE0',
  cardSoft: '#F7F8FC',

  // Text
  textDark: '#14142B',
  textMuted: '#6B6F86',
  textBody: '#4B4F66',
  textDimmed: '#9296A6',
  textOnDark: '#FFFFFF',
  textOnDarkMuted: '#9AA3E8',
  textOnDarkSoft: '#C3C9F5',
  textOnDarkFaint: '#AEB6EE',

  // Accent (kept-dark) cards & brand accents
  accent: '#4338CA',
  accentSoft: '#27319E',
  accentDeep: '#182182',
  border: '#3A45BA',
  borderSoft: '#C6C9E6',
  borderDashed: '#C9C6BC',

  // Selection / highlight
  cyan: '#A7E6F2',
  cyanDeep: '#2B3050',
  violet: '#7C6CF5',
  checkFill: '#4F4FE8',

  // CTA gradient
  ctaStart: '#6C63F0',
  ctaMid: '#4F46E5',
  ctaEnd: '#3A32C9',

  // Nova / amber
  novaStart: '#FFC42E',
  novaEnd: '#FF7A1E',

  // Progress / streak
  orange: '#FF5A1E',
  gold: '#FFC42E',
  trackDim: '#38429F',
};

export const radii = {
  sm: 9,
  md: 14,
  lg: 18,
  xl: 22,
  pill: 999,
};

export const spacing = {
  xs: 6,
  sm: 10,
  md: 16,
  lg: 20,
  xl: 24,
};

// "Tierra" es el planeta de introducción: todos los usuarios pasan por aquí primero,
// sin importar el rubro de negocio que hayan elegido. Los demás (temáticos por rubro)
// quedan bloqueados hasta más adelante — por eso la galaxia solo muestra Tierra por ahora.
export const PLANETS = [
  { name: 'Tierra', done: 2, total: 6, from: '#8FE3C8', to: '#2E6BD6' },
  { name: 'Mentalidad', done: 3, total: 8, from: '#A597FF', to: '#4338CA' },
  { name: 'Marketing', done: 1, total: 8, from: '#8CC7FF', to: '#3854C4' },
  { name: 'Ventas', done: 0, total: 8, from: '#FF9E8C', to: '#C43854' },
  { name: 'E-Commerce', done: 5, total: 8, from: '#8CFFE0', to: '#38C4A0' },
  { name: 'IA', done: 0, total: 8, from: '#C9A7FF', to: '#6C3DC4' },
  { name: 'Escalamiento', done: 0, total: 8, from: '#FFD98C', to: '#C48838' },
  { name: 'Branding Express', done: 0, total: 8, from: '#FF8CC9', to: '#C43897' },
  { name: 'Finanzas', done: 0, total: 8, from: '#8CA7FF', to: '#3846C4' },
];

// Las 5 casillas reales del grid numerado (orden = número de la casilla, 1-5).
export const BUSINESS_OPTIONS = [
  ['skincare', 'Skincare'],
  ['maquillaje', 'Maquillaje'],
  ['ropa', 'Ropa'],
  ['accesorios', 'Accesorios'],
  ['comida', 'Comida y bebida'],
];

// Casilla 6: aún no tiene rubro asignado, solo muestra "Próximamente" y no es seleccionable.
export const BUSINESS_PLACEHOLDER_LABEL = 'Próximamente';

// Botón aparte debajo del grid (no es una casilla numerada).
export const BUSINESS_UNDEFINED = ['sindefinir', 'Aún no lo defino'];

export const QUIZ_OPTIONS = [
  ['a', 'Que el producto sea tecnológico'],
  ['b', 'Que el pedido se realice mediante una red digital'],
  ['c', 'Que el producto sea entregado a domicilio'],
];
