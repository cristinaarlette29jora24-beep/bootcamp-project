# Herramientas del ecosistema backend

## Axios
Axios es una librería JavaScript para hacer peticiones HTTP desde el navegador o desde Node.js. Es una alternativa a `fetch` con ventajas como la transformación automática de JSON, mejor manejo de errores (lanza errores en respuestas 4xx y 5xx automáticamente) e interceptores para añadir headers a todas las peticiones. Se usa mucho en frontends React y Vue para consumir APIs REST.

## Postman
Postman es una herramienta visual para probar APIs REST sin necesidad de escribir código. Permite enviar peticiones GET, POST, PATCH, DELETE con headers y body personalizados, guardar colecciones de peticiones organizadas por proyecto y documentar automáticamente los endpoints de una API. Es el estándar de la industria para el desarrollo y prueba de backends.

## Sentry
Sentry es una plataforma de monitorización de errores en tiempo real. Cuando una aplicación en producción lanza un error, Sentry lo captura automáticamente y envía una alerta con el stack trace completo, el usuario afectado y el contexto del error. Es especialmente útil en producción porque los errores que no se reproducen en desarrollo sí aparecen cuando miles de usuarios usan la app. Se integra con Node.js añadiendo unas pocas líneas de configuración.

## Swagger
Swagger (ahora llamado OpenAPI) es un estándar para documentar APIs REST. Permite describir todos los endpoints de una API (rutas, métodos, parámetros, respuestas) en un archivo JSON o YAML que se convierte automáticamente en una página web interactiva donde cualquier desarrollador puede explorar y probar la API sin leer el código fuente. En Node.js se integra con la librería `swagger-ui-express`.

## ¿Por qué se usan estas herramientas juntas?

En un proyecto real el flujo típico es:
1. Desarrollar el backend con Express
2. Probar los endpoints con **Postman** durante el desarrollo
3. Documentar la API con **Swagger** para que otros equipos la consuman
4. Usar **Axios** en el frontend para consumir la API
5. Monitorizar errores en producción con **Sentry**