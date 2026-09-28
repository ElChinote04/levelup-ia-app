# LevelUp IA! — Rediseño "Exploración Espacial" — Prompt maestro

> Este documento reemplaza y actualiza la especificación anterior (basada en el arena.site). Combina: (a) tu explicación del nuevo concepto, (b) la pizarra con los wireframes a mano, y (c) lo ya validado antes (tokens de marca, Nova, plan Premium). Está escrito para pegarse directo en **Claude Design**. Al final hay una sección para adaptarlo a **Claude Code** si el destino final es construir la app funcional.

**Léxico de fidelidad usado abajo:**
- **[PIZARRA]** — viene literal del whiteboard
- **[TU EXPLICACIÓN]** — viene de tu mensaje de texto, con más detalle que la pizarra
- **[SUPUESTO — confirmar]** — es una interpretación mía donde la pizarra y tu explicación no cubren el detalle; el equipo debe validarlo antes de darlo por definitivo
- **[CAMBIO vs. versión anterior]** — marca explícitamente dónde este rediseño reemplaza algo que ya habíamos definido con el arena.site

---

## 0. El giro de concepto, en una frase

LevelUp IA! deja de sentirse como un dashboard de curso online y pasa a sentirse como **un videojuego de exploración espacial**: cada área de aprendizaje (Mentalidad, Marketing, Ventas, etc.) es un **planeta** dentro de una **galaxia**, cada planeta tiene su propio **camino temático** de lecciones, y el usuario gana **diamantes** al avanzar, que son la moneda para hablar con la IA.

**[SUPUESTO — confirmar]:** ¿Los "mundos" que ya existían (Mentalidad, Marketing, Redes, Ventas, E-Commerce, IA, Escalamiento, Branding Express, Finanzas para Founders) son los que ahora se representan como planetas de la galaxia, solo que con skin espacial? Asumo que sí — el documento de abajo lo trata así, pero confírmalo con el equipo antes de nombrar los planetas.

---

## 1. Sistema de diseño — qué se mantiene y qué se agrega

**Se mantiene (ya validado con el arena.site):**
- Fondo general blanco/gris muy claro
- Tarjeta de acento oscura navy-violeta para bloques destacados
- Gradiente principal azul→violeta→magenta para CTAs
- Nova (mentora IA): avatar robot 🤖 en degradado ámbar — **[SUPUESTO — confirmar]:** ¿Nova sigue siendo el personaje del chat, o el tema espacial pide un personaje nuevo (ej. una IA "copiloto de nave")? El documento asume que Nova se mantiene, solo que ahora vive "a bordo de la nave/galaxia".
- Avatar de usuario tipo animal (antes zorro 🦊) — con el pivote espacial, esto se vuelve personalizable como beneficio Premium (ver sección Premium)

**Se agrega para el concepto espacial:**
- **Diamantes 💎**: nueva moneda visual. Sugerido: cian/azul cristalino brillante, para diferenciarse claramente del ámbar de Nova y del violeta de las CTAs
- **Vista de galaxia**: fondo oscuro tipo espacio profundo (azul-negro muy oscuro, ej. #0A0E27), con planetas como esferas ilustradas, cada una con su paleta de color propia (heredada de los gradientes por mundo que ya teníamos: azul-violeta, magenta-violeta, turquesa, rosa-violeta, verde)
- **Planeta activo vs. inactivo [PIZARRA]:** el planeta actual se muestra a color ("base"), los demás en gris ("gris") hasta desbloquearse
- **Marcador "Fin" [PIZARRA]:** el último planeta del recorrido lleva una marca de meta/fin visualmente distinta

---

## 2. Modelo de navegación — CAMBIO vs. versión anterior

**[CAMBIO vs. versión anterior]:** El arena.site tenía una barra inferior de 5 íconos (Inicio, Cursos, Logros, Mentor IA, Perfil). En este rediseño **se reemplaza por una barra de solo 3 íconos**, fija en las pantallas principales:
- Izquierda: ☰ Menú
- Centro: 🪐 Mundo (galaxia/planetas)
- Derecha: 💬 Chat con IA

Amigos, Logros y Tienda **dejan de ser tabs de navegación global** y pasan a ser **3 botones dentro de la pantalla del Dashboard** (ver pantalla 4/5). Logros conserva su propio formato de pantalla (grid de insignias) al que se accede desde ese botón, no desde la barra inferior.

---

## 3. Especificación pantalla por pantalla

### Pantalla 0 — Animación de apertura **[TU EXPLICACIÓN]**
- Animación de logo al abrir la app (aún sin diseño definitivo — dejar como placeholder de logo animándose/armándose)
- Al terminar la animación, aparecen dos botones: **"Sign in"** y **"Log in"**

### Pantalla 1 — Welcome / Login **[PIZARRA]**
- Encabezado "LOGIN"
- Ícono circular tipo logo/spinner centrado
- Texto "Sign in"
- (Esta es la pantalla a la que caen quienes tocan "Log in" desde la Pantalla 0 — usuarios que ya tienen cuenta)

### Pantalla 2 — Crea tu cuenta **[PIZARRA + TU EXPLICACIÓN]**
- Botón de continuar con **Google**
- Botón de continuar con **Apple**
- Si el usuario no elige ninguno de los dos, debajo aparece la opción manual: campos **Nombre**, **Correo**, **Contraseña**
- Botón **"Continuar"**
- (Del documento de referencia anterior ya sabíamos el estilo visual exacto de esta pantalla: ícono con gradiente arriba, título con resaltador lavanda — se mantiene igual)

### Pantalla 3 — Tipo de negocio **[PIZARRA + TU EXPLICACIÓN]**
- Título tipo "Tu idea de negocio"
- Lista de opciones seleccionables con checkbox (igual que antes: E-commerce, Skincare/belleza, Ropa y accesorios, etc.)
- Burbuja **"SKIP"** arriba a la derecha — el usuario puede saltar este paso
- Botón **"Comenzar"** — al tocarlo, el sistema adapta lecciones, ejemplos y casos al rubro elegido

### Pantalla 4/5 — Dashboard principal **[PIZARRA + TU EXPLICACIÓN]**
- Ícono de **Perfil** arriba (acceso al perfil de usuario)
- **3 botones principales en la pantalla** (no en la barra inferior):
  - 👥 **Amigos**
  - 🏆 **Logros** — tiene su propio formato de pantalla, mostrado a la izquierda en la pizarra: sección "Logros" arriba + grid "Insignias" abajo (esto coincide con la pantalla de Logros que ya confirmamos en vivo en el arena.site)
  - 🛒 **Tienda**
- Fila de íconos circulares (según la pizarra, parecen accesos rápidos o indicadores — **[SUPUESTO — confirmar]** su función exacta con el equipo)
- **Scroll hacia abajo dentro de esta misma pantalla** para ver un **feed de noticias** relacionadas al rubro seleccionado por el usuario: cada noticia con **título, foto, y funciona como hipervínculo** para leer la noticia completa (fuera de la app)
- Barra inferior fija: Menú / Mundo / Chat IA

### Pantalla 6 — Intro mundo / Galaxia **[PIZARRA + TU EXPLICACIÓN]**
- Vista de la **galaxia**: planetas representados como esferas, cada uno con su color
- El planeta base/activo a color, el resto en gris hasta desbloquearse
- Marcador de "Fin" en el último planeta del recorrido
- **Ícono de menú hamburguesa (☰, 3 líneas)** para ver **todos los mundos/planetas en formato de lista**
- **La pantalla debe permitir scroll** (horizontal o vertical) para descubrir más planetas conforme el usuario avanza — pensado para crecer con más mundos en el futuro
- Nota adicional de la pizarra: **"vista panorámica / mira galaxia"** — sugiere que debe existir una vista panorámica amplia de la galaxia completa, quizás accesible desde aquí o desde el menú
- Barra inferior se mantiene visible

### Pantalla 7 — Camino (dentro de un planeta) **[PIZARRA + TU EXPLICACIÓN]**
- Al seleccionar un planeta desde la Pantalla 6, se entra a su **camino**: un recorrido tipo videojuego (nodos conectados, como un sendero) con las lecciones distribuidas a lo largo
- **Cada camino debe estar tematizado visualmente según su planeta.** Ejemplo explícito: si el planeta representa "Tierra", el camino visual debe recorrer lugares del mundo real (paisajes, ciudades, iconos geográficos) — no un camino genérico
- Existe una **"parada principal"** marcada distinto dentro del camino (posible checkpoint o lección clave)
- Estructura tipo escalones/niveles ascendentes según el boceto

### Pantallas 8–11 — Módulo de Educación (una lección completa) **[PIZARRA + TU EXPLICACIÓN]**

Al tocar una lección dentro del camino (Pantalla 7), el usuario entra a una secuencia de 4 sub-pantallas para **esa lección**:

- **8. Video** — pantalla con el video de la lección
- **9. Preguntas / Info** — formato tipo "¿Qué es...?", preguntas de apoyo para reforzar lo aprendido en el video
- **10. Casos** — un caso práctico vinculado a una empresa reconocida pero **con el nombre cambiado** (ej. el boceto muestra un ejemplo ficticio tipo "Pepito compra Kola"), con una decisión tipo **Sí/No**
- **11. Resolución** — la evaluación final de la lección: una secuencia de preguntas/respuestas en formato de burbujas de chat, con marca de correcto (✓) o incorrecto (✗) — determina si el usuario **aprueba o no** la lección

**[SUPUESTO — confirmar]:** el orden Video → Preguntas → Casos → Resolución parece ser lineal y obligatorio en ese orden; confirmar si el usuario puede saltar pasos o si es estrictamente secuencial.

### Pantalla 12 — Chat con IA **[PIZARRA + TU EXPLICACIÓN]**
- Chat con Nova, accesible desde el botón derecho de la barra inferior
- **El chat se paga con diamantes 💎**, no es ilimitado gratis
- El usuario gana diamantes completando mundos/planetas y lecciones
- Con diamantes acumulados puede usar la IA de forma gratuita hasta que se le acaben

### Pantalla 13 — (transición a Premium) **[PIZARRA]**
- La pizarra muestra una flecha "ver →" conectando el flujo del chat/diamantes hacia la pantalla de beneficios Premium — funciona como un punto de conversión: cuando al usuario se le acaban los diamantes, se le ofrece ver los beneficios de Premium

### Pantalla 14 — Beneficios Premium **[PIZARRA + TU EXPLICACIÓN]**
- Lista de beneficios Premium, según la pizarra:
  - **Personalización** del avatar/chat ("a tu ~chat~")
  - **Personalizar tu animal** (el avatar tipo animal, mencionado en la sección 1, se vuelve personalizable)
  - **2x diamantes**
- **[TU EXPLICACIÓN]** agrega: Premium otorga **N diamantes por semana** de forma recurrente (cantidad exacta por definir) + estos beneficios adicionales
- Mantiene el estilo ya validado de la pantalla Premium anterior (precio grande, lista con checks, botón CTA en gradiente) — solo se actualiza el contenido de los beneficios a lo descrito arriba

---

## 4. Economía del producto (resumen para que quede explícito)

- **Diamantes 💎** = moneda ganada completando planetas y lecciones (camino → lecciones → resolución aprobada = diamantes)
- Los diamantes se gastan para **hablar con la IA (Nova)** en el plan gratuito
- **Premium** = pago recurrente que otorga diamantes semanales fijos + personalización (avatar animal, chat) + multiplicador 2x en diamantes ganados
- Esto reemplaza/convive con el modelo freemium anterior (1 curso gratis por semana) — **[SUPUESTO — confirmar]:** si el límite freemium sigue siendo "1 curso por semana" además del límite de diamantes, o si los diamantes son ahora el único mecanismo de limitación

---

## 5. Si este documento se envía a Claude Code (en vez de Claude Design)

Todo lo de arriba sirve como base funcional, pero para construir la app de verdad conviene agregar:

1. **Modelo de datos mínimo:** usuario (nombre, correo, rubro elegido, diamantes actuales, planetas desbloqueados, progreso por lección), planeta (nombre, tema visual, lecciones, estado bloqueado/desbloqueado), lección (video, preguntas, caso, resolución, estado aprobado/no aprobado), suscripción (activa/inactiva, fecha de renovación)
2. **Stack sugerido a definir con el equipo:** frontend (React Native / Flutter si es app nativa, o Next.js si es PWA), backend (Node/Python), base de datos, y confirmar si la IA se integra vía API externa (como ya recomendamos antes: Claude/GPT + RAG sobre el contenido de LevelUp, en vez de entrenar modelo propio)
3. **Reglas de negocio a formalizar:** cuántos diamantes otorga cada lección/planeta completado, cuánto cuesta cada mensaje o sesión de chat con Nova en diamantes, cuántos diamantes semanales da Premium
4. **Máquina de estados de la lección:** Video (visto/no visto) → Preguntas (respondidas) → Caso (decisión tomada) → Resolución (aprobado/reprobado) → si reprueba, ¿puede reintentar la lección completa o solo la Resolución?

---

## 6. Preguntas abiertas para el equipo antes de construir

- ¿Nova se mantiene como personaje del chat o cambia a una IA con identidad "espacial" (copiloto, astronauta)?
- ¿Los planetas son los mismos 8-9 mundos que ya teníamos (Mentalidad, Marketing, etc.) con skin nueva, o se van a renombrar/rediseñar como planetas con nombres propios?
- ¿Qué representan exactamente los íconos circulares de la Pantalla 4/5 (Dashboard)?
- ¿El camino "Tierra" es un planeta más entre varios, o es el planeta "hub"/inicial desde el que se accede a los demás?
- Cantidad exacta de diamantes: por lección, por planeta completo, y por semana en Premium
