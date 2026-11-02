# README — Plataforma de Gestión de Solicitudes Académicas

> **Curso:** PROGRAMACION WEB - II  
> **Código:** 30690  
> **Evaluación:** PA3 — Proceso de Aprendizaje 3  
> **Periodo / corte:** 202620 · Sesión 10
> **Equipo:** Grupo 7  


## 1. Integrantes

| Integrante | Rol | Aporte principal |
|---|---|---|
| Leonardo Alonso Guillén Zúñiga | Actividades 1 y 2 — Interfaz, componentes, Hooks y React Router | Proyecto base con Vite y React, navegación con React Router, barra de navegación, página de solicitudes con `useState` y `useEffect`, y datos locales de prueba |
| Mariano Guerrero Barrueto | Actividad 4 — Redux y comparación técnica | Reducer, store y `Provider` de Redux, botón y contador de seguimiento, página de Seguimiento y comparación Context API vs Redux |
| {pendiente: tercer integrante} | {pendiente} | {pendiente} |

## 2. Descripción y objetivo

**Problema:**  
La "Plataforma de Gestión de Solicitudes Académicas" necesita una interfaz de una sola página (SPA) para consultar y organizar solicitudes (constancias, reprogramación de exámenes, retiros de curso, etc.), que reaccione a los cambios de datos y permita navegar entre vistas sin recargar la página.

**Objetivo:**  
Construir una SPA con React.js que use JSX, componentes y Hooks (`useState`, `useEffect`), navegue con React Router, gestione estado global con Context API y aplique una introducción básica a Redux, comparando ambas alternativas sobre lo implementado.

**Alcance:**  
En esta etapa se trabaja con **datos locales y simulados**. No se consume ninguna API con Axios ni se usa autenticación: son contenidos previstos para la sesión 11.

**Solución desarrollada:**
- Proyecto creado con **Vite + React** (JavaScript).
- **React Router** con `BrowserRouter`, `Routes`, `Route` y `Link`: rutas `/` (Inicio) y `/solicitudes`.
- Barra de navegación (`Navbar`) con enlaces a las vistas.
- **Datos locales** en `src/data/mockData.js`: `ESTADOS`, `TIPOS` y `solicitudesIniciales` (6 solicitudes con `id`, `tipo`, `descripcion`, `estado` y `fecha`).
- Página **Solicitudes**: `useState` para el indicador de carga y `useEffect` con `[]` que simula una carga de 0,8 s y limpia el temporizador al desmontar; muestra la lista en una tabla.
- Rutas, componentes (funcionales y de clase), filtros, formulario y detalle de solicitud: {pendiente}
- Estado global con **Context API** (providers y consumers): {pendiente}
- Introducción básica a **Redux** (estilo clásico, como en la sesión 10): `seguimientoReducer` (acciones `SEGUIR` y `DEJAR_DE_SEGUIR`), `store` con `createStore`, `Provider` de react-redux, `useSelector` y `useDispatch`. Gestiona el **seguimiento de solicitudes**: botón "Seguir / Dejar de seguir" (`BotonSeguimiento`), contador en la barra (`ContadorSeguimiento`) y página `/seguimiento`.
- Comparación técnica **Context API vs Redux**: ver la sección [Comparación técnica Context API vs Redux](#comparación-técnica-context-api-vs-redux).

### Rutas

| Ruta | Vista |
|---|---|
| `/` | Inicio |
| `/solicitudes` | Lista de solicitudes |
| `/seguimiento` | Solicitudes en seguimiento (Redux) |

> Las demás rutas se agregan aquí a medida que se implementen: {pendiente}

### Actividades del documento y contenidos evaluados

| # | Actividad | Contenido del sílabo | Dónde verlo |
|---|---|---|---|
| 1 | SPA con JSX, componentes y Hooks | Sesión 9: JSX, componentes funcionales y de clase, `useState` y `useEffect` | `src/pages/Solicitudes.jsx` · {pendiente} |
| 2 | Navegación con React Router | Sesión 9: React Router | `src/App.jsx`, `src/components/Navbar.jsx` · {pendiente} |
| 3 | Estado global con Context API | Sesión 10: Context API, providers y consumers | {pendiente} |
| 4 | Introducción a Redux y comparación | Sesión 10: introducción básica a Redux | `src/store/`, `src/components/BotonSeguimiento.jsx`, `src/pages/Seguimiento.jsx` y la sección de comparación de este README |

### Decisiones técnicas de Redux

- **Necesidad acotada:** el seguimiento de solicitudes. Solo se guardan los ids; es una necesidad pequeña, independiente de los datos de dominio, y permite ver el flujo completo acción → reducer → store → pantalla.
- **Redux clásico:** se usó el enfoque visto en la sesión 10 ("sin configuraciones complejas"). En Redux 5, `createStore` aparece marcado como obsoleto (es solo un aviso visual) pero funciona; hoy se recomienda Redux Toolkit.
- **Reducer puro e inmutable:** siempre devuelve un estado nuevo, no modifica el anterior y no duplica ids.

### Comparación técnica Context API vs Redux

**Comparación general**

| Aspecto | Context API | Redux |
|---|---|---|
| Complejidad | Baja | Media/Alta |
| Escalabilidad | Media | Alta |
| Depuración | Limitada | Herramientas avanzadas |
| Librerías externas | No | Sí |

**Según lo implementado**

| Aspecto | Context API (solicitudes) | Redux (seguimiento) |
|---|---|---|
| Qué guarda | Las solicitudes y sus estados | Los ids de las solicitudes en seguimiento |
| Cómo se modifica | Funciones del provider (`agregarSolicitud`, `cambiarEstado`) | Acciones `SEGUIR` y `DEJAR_DE_SEGUIR` procesadas por el reducer |
| Código necesario | Contexto y provider | Reducer, store, `Provider` de react-redux y una dependencia externa |
| Cómo se lee | `useContext` | `useSelector` (y `useDispatch` para modificar) |

> La columna de Context API describe el contrato acordado por el equipo. {pendiente}: confirmar que coincide con la implementación final del Context.

**Conclusión técnica:** para los datos del caso, Context API fue suficiente: es simple y no requiere librerías. Redux dio un flujo explícito (acción, reducer, store) y más trazabilidad, pero para una necesidad tan pequeña exige más código. Redux se justificaría si el estado creciera y varios módulos lo modificaran.

### Herramientas

Vite, React, React Router, Git y GitHub.

## 3. Cómo ejecutar o revisar

```bash
git clone https://github.com/Marscience-74/proceso_aprendizaje_3.git
cd proceso_aprendizaje_3
npm install
npm run dev
```

Requisitos: Node.js 20.19 o superior (o 22.12+), por la versión de Vite usada. No se necesita archivo `.env`.

La aplicación queda disponible en la dirección que muestra la terminal (por defecto `http://localhost:5173`).

**Pasos de revisión:**
1. Abrir la dirección indicada y verificar la página de Inicio.
2. Entrar a **Solicitudes**: se muestra "Cargando información..." unos 0,8 s y luego la tabla con las 6 solicitudes.
3. Cambiar entre Inicio y Solicitudes con la barra de navegación: la página no se recarga.
4. Ejecutar `npm run build` y `npm run lint`: ambos deben terminar sin errores.
5. En **Solicitudes**, pulsar "Seguir" en una o dos solicitudes: el contador "Seguimiento (n)" de la barra sube y el botón cambia a "Dejar de seguir".
6. Entrar a **Seguimiento** desde la barra: se listan las solicitudes seguidas; al pulsar "Dejar de seguir" salen de la lista y el contador baja. El estado se conserva al navegar entre vistas.
7. Pasos de las demás actividades: {pendiente}

> No publicar contraseñas, tokens, credenciales ni datos sensibles.

## 4. Evidencias

Las capturas estarán en la carpeta `evidencias/`. {pendiente}

- Navegación entre vistas sin recargar la página (GIF o capturas).
- Página de solicitudes con la tabla ya cargada y el estado "Cargando información..." previo.
- `npm run build` y `npm run lint` sin errores.
- Estado global con Context API actualizándose en más de una vista (antes y después): {pendiente}
- Flujo de Redux (acción, cambio de estado y lectura en pantalla): {pendiente}
- Comparación técnica Context API vs Redux: documentada en este README (sección *Comparación técnica*).

## 5. Matriz de participación

| Integrante | Desarrollo | Pruebas | Documentación | Exposición | Evidencia de participación |
|---|---|---|---|---|---|
| Leonardo Alonso Guillén Zúñiga | Proyecto base, React Router, `Navbar`, página de solicitudes y datos de prueba | {pendiente} | {pendiente} | {pendiente} | Commits "react template", "creacion de componentes y estructura", "routing y solicitudes" y "datos de prueba y estilos" |
| Mariano Guerrero Barrueto | Redux (reducer, store, `Provider`, `BotonSeguimiento`, `ContadorSeguimiento`) y página de Seguimiento | {pendiente} | Comparación Context API vs Redux | {pendiente} | Commit "Redux: reducer, store, seguimiento y comparacion" |
| {pendiente: tercer integrante} | {pendiente} | {pendiente} | {pendiente} | {pendiente} | {pendiente} |

> Esta matriz se completa al cierre con lo que cada integrante realmente aportó, de acuerdo con el historial de commits.

## 6. Video de exposición

**Video público de YouTube:** [PEGAR AQUÍ EL ENLACE]

Todos los integrantes deben participar en la exposición con sus cámaras prendidas y explicar el problema, el procedimiento, la solución desarrollada, las decisiones tomadas y su justificación, relacionándolas con los contenidos de las sesiones 9 y 10.

## 7. Conclusiones

- **React, Hooks y datos locales:** la página de Solicitudes (`src/pages/Solicitudes.jsx`) mostró cómo `useState` guarda el estado de la interfaz (el indicador de carga) y cómo `useEffect` con `[]` ejecuta un efecto una sola vez al montar el componente y lo limpia al desmontarlo (`clearTimeout`), lo que evita temporizadores que sigan activos sin necesidad. Trabajar con datos locales y simulados (`src/data/mockData.js`) respetó el alcance de esta etapa: el consumo de APIs con Axios corresponde a la sesión 11. Esto se relaciona con los contenidos de la sesión 9 sobre React, JSX y Hooks. {pendiente}: completar con los componentes funcionales y de clase, los filtros y el formulario cuando se integren.
- **React Router:** `BrowserRouter`, `Routes`, `Route` y `Link` permiten moverse entre Inicio, Solicitudes y Seguimiento sin recargar la página, que es lo que define a una SPA. Declarar las rutas en `App.jsx` y los enlaces en `Navbar.jsx` separó la navegación de las vistas (ver la tabla de rutas de la sección 2). Se relaciona con la sesión 9, sobre navegación con React Router.
- **Redux:** el flujo acción → reducer → store → pantalla se comprobó con el seguimiento de solicitudes: al pulsar "Seguir" se despacha `SEGUIR`, el reducer devuelve un estado nuevo y se actualizan a la vez el contador de la barra y la página Seguimiento; además el estado se conserva al cambiar de ruta. El reducer es puro e inmutable (no modifica el estado anterior ni duplica ids). Se usó el estilo clásico visto en la sesión 10 (`createStore`, marcado como obsoleto en Redux 5 pero funcional); Redux Toolkit es la alternativa recomendada hoy (ver "Decisiones técnicas de Redux").
- **Context API frente a Redux:** según la comparación de la sección 2, Redux aporta un flujo explícito y más trazabilidad, pero exige más código (reducer, store, `Provider` y una dependencia externa) que Context API; para una necesidad tan pequeña como el seguimiento de solicitudes, esa diferencia pesa, y Redux se justificaría si el estado creciera y varios módulos lo modificaran. Se relaciona con los contenidos de la sesión 10 sobre Context API, introducción básica a Redux y aplicación práctica con Context API antes de Redux. {pendiente}: completar con la experiencia real de implementar el Context (providers y consumers) y confirmar la comparación con ese resultado.
- **Conclusión grupal:** {pendiente}: se redacta al cierre, cuando estén integradas todas las actividades. Debe relacionar la solución con los contenidos evaluados de las sesiones 9 y 10.

---

**Última actualización:** 02/11/2026
