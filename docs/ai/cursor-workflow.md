# Workflow con Cursor

## Atajos de teclado frecuentes
* **Ctrl + L:** Abrir el chat lateral para consultas.
* **Ctrl + K:** Edición rápida de bloques de código.
* **Ctrl + Enter:** Aceptar las sugerencias de la IA.

## Ejemplos de mejora
1. **Refactorización de filtros:** Cursor sugirió usar `.filter()` y `.toLowerCase()` de forma combinada, limpiando 10 líneas de código.
2. **Corrección de LocalStorage:** Detectó un error en la clave de guardado que impedía cargar las tareas al reiniciar.

## Configuración de MCP
Se instaló el servidor de `filesystem` en la configuración de Cursor para que la IA pudiera leer `index.html` y `app.js` al mismo tiempo, garantizando que las funciones de JavaScript coincidan siempre con los IDs del HTML.