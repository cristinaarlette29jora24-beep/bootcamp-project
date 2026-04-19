# Workflow con Cursor IDE

## Atajos de teclado más usados

| Atajo | Función |
|-------|---------|
| Ctrl + L | Abrir el chat lateral para consultas de contexto |
| Ctrl + K | Edición inline de un bloque de código seleccionado |
| Ctrl + Enter | Aceptar la sugerencia completa de la IA |
| Ctrl + Z | Deshacer un cambio sugerido por la IA |
| Tab | Aceptar autocompletado línea a línea |

---

## Ejemplos concretos donde Cursor mejoró el código

**Ejemplo 1 — Refactorización de filtros:**
El código original tenía tres bloques `if` separados para filtrar tareas por estado. Cursor sugirió unificarlo en una sola función usando `.filter()` encadenado con `.toLowerCase()`, reduciendo de 15 líneas a 4 y haciéndolo más legible.

**Ejemplo 2 — Corrección de IDs:**
Al abrir `index.html` y `app.js` al mismo tiempo con MCP activo, Cursor detectó que el `id="task-priority"` del HTML no coincidía con `priority-select` en el JavaScript. Sin MCP, ese error es invisible porque los dos archivos están separados.

---

## Instalación y configuración de MCP (filesystem)

1. Abrir Cursor y ir a `Settings → Features → MCP`
2. Hacer clic en `Add new MCP server`
3. Seleccionar tipo `filesystem`
4. Configurar la ruta raíz del proyecto: `/ruta/a/bootcamp-project`
5. Reiniciar Cursor para que el servidor MCP se active
6. Verificar en el chat que la IA puede leer archivos escribiendo: "lee el archivo index.html"

---

## Consultas realizadas con MCP activo

1. "Lee index.html y app.js y dime si los IDs coinciden" → Detectó la inconsistencia de `priority-select`
2. "Analiza task.routes.js y dime qué rutas faltan comparando con las llamadas fetch de app.js" → Detectó que faltaban DELETE y PATCH
3. "Lee task.service.js y genera los métodos que faltan" → Generó el método `toggle` correctamente
4. "Compara task.controller.js con task.routes.js y verifica que todos los métodos están exportados" → Detectó que `toggleTask` no estaba exportado
5. "Lee style.css y dime si hay clases definidas que no se usan en el HTML" → Detectó `.sort-container` sin usar en el HTML original

---

## Casos de uso de MCP en proyectos reales

MCP es especialmente útil cuando el proyecto tiene muchos archivos relacionados entre sí. En un proyecto real con 20 o 30 archivos, la IA sin MCP solo ve el código que le pegas manualmente. Con MCP puede leer toda la estructura y detectar inconsistencias entre archivos que de otra forma serían invisibles. Es como darle a la IA acceso al mismo contexto que tiene el desarrollador cuando trabaja.