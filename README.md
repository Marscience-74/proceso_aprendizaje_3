# README — Plataforma de Gestión de Solicitudes Académicas

> **Curso:** PROGRAMACION WEB - II  
> **Código:** 30690  
> **Evaluación:** PA3 — Proceso de Aprendizaje 3  
> **Periodo / corte:** 202620 · Sesión 10
> **Equipo:** Grupo 7  
> **Docente / Sección:** {pendiente}

## 1. Integrantes

| Integrante | Rol | Aporte principal |
|---|---|---|
| Leonardo Alonso Guillén Zúñiga | Actividades 1 y 2 — Interfaz, componentes, Hooks y React Router | Proyecto base con Vite y React, navegación con React Router, barra de navegación, página de solicitudes con `useState` y `useEffect`, y datos locales de prueba |
| Mariano Guerrero Barrueto | {pendiente} | {pendiente} |
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
- Introducción básica a **Redux**: {pendiente}
- Comparación técnica **Context API vs Redux**: {pendiente}

### Rutas

| Ruta | Vista |
|---|---|
| `/` | Inicio |
| `/solicitudes` | Lista de solicitudes |

> Las demás rutas se agregan aquí a medida que se implementen: {pendiente}

### Actividades del documento y contenidos evaluados

| # | Actividad | Contenido del sílabo | Dónde verlo |
|---|---|---|---|
| 1 | SPA con JSX, componentes y Hooks | Sesión 9: JSX, componentes funcionales y de clase, `useState` y `useEffect` | `src/pages/Solicitudes.jsx` · {pendiente} |
| 2 | Navegación con React Router | Sesión 9: React Router | `src/App.jsx`, `src/components/Navbar.jsx` · {pendiente} |
| 3 | Estado global con Context API | Sesión 10: Context API, providers y consumers | {pendiente} |
| 4 | Introducción a Redux y comparación | Sesión 10: introducción básica a Redux | {pendiente} |

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
5. Pasos de las demás actividades: {pendiente}

> No publicar contraseñas, tokens, credenciales ni datos sensibles.

## 4. Evidencias

Las capturas estarán en la carpeta `evidencias/`. {pendiente}

- Navegación entre vistas sin recargar la página (GIF o capturas).
- Página de solicitudes con la tabla ya cargada y el estado "Cargando información..." previo.
- `npm run build` y `npm run lint` sin errores.
- Estado global con Context API actualizándose en más de una vista (antes y después): {pendiente}
- Flujo de Redux (acción, cambio de estado y lectura en pantalla): {pendiente}
- Comparación técnica Context API vs Redux: {pendiente}

## 5. Matriz de participación

| Integrante | Desarrollo | Pruebas | Documentación | Exposición | Evidencia de participación |
|---|---|---|---|---|---|
| Leonardo Alonso Guillén Zúñiga | Proyecto base, React Router, `Navbar`, página de solicitudes y datos de prueba | {pendiente} | {pendiente} | {pendiente} | Commits "react template", "creacion de componentes y estructura", "routing y solicitudes" y "datos de prueba y estilos" |
| Mariano Guerrero Barrueto | {pendiente} | {pendiente} | {pendiente} | {pendiente} | {pendiente} |
| {pendiente: tercer integrante} | {pendiente} | {pendiente} | {pendiente} | {pendiente} | {pendiente} |

> Esta matriz se completa al cierre con lo que cada integrante realmente aportó, de acuerdo con el historial de commits.

## 6. Video de exposición

**Video público de YouTube:** [PEGAR AQUÍ EL ENLACE]

Todos los integrantes deben participar en la exposición con sus cámaras prendidas y explicar el problema, el procedimiento, la solución desarrollada, las decisiones tomadas y su justificación, relacionándolas con los contenidos de las sesiones 9 y 10.

## 7. Conclusiones

{pendiente}: una conclusión por integrante y una conclusión grupal que relacione la solución con los contenidos evaluados de las sesiones 9 y 10 (React, JSX, componentes, Hooks, React Router, Context API y Redux).

---

**Última actualización:** 01/11/2026
