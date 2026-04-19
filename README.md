# TaskFlow

Aplicación de gestión de tareas construida como proyecto del Bootcamp de programación, siendo de ASIR con Corner Estudios. Empecé con HTML, CSS y JavaScript puro, integré herramientas de IA en mi flujo de trabajo y finalmente construí un backend propio con Node.js y Express con una API REST completa.

## Descripción

TaskFlow es una aplicación web de productividad personal que permite crear, completar, eliminar y filtrar tareas. Incluye un sistema de prioridades, búsqueda por texto, ordenación, estadísticas en tiempo real y modo oscuro. El frontend se comunica con un servidor propio a través de una API REST, sin usar LocalStorage.

## Diseño de la aplicación

La interfaz se divide en cuatro secciones principales:

- **Cabecera**: Nombre de la app y descripción
- **Formulario de entrada**: Input de texto, buscador, selector de prioridad y botón añadir
- **Lista de tareas**: Tarjetas con prioridad visual, checkbox y botón eliminar
- **Panel de estadísticas**: Barra de progreso y contadores de tareas

El diseño sigue una paleta de colores índigo/violeta con soporte completo de modo oscuro. Las prioridades se distinguen por colores en el borde izquierdo de cada tarjeta (rojo = urgente, amarillo = media, verde = baja).

## Tecnologías utilizadas

Frontend:
- HTML5 semántico
- CSS3 con variables y Flexbox/Grid
- JavaScript ES6+
- Tailwind CSS (CDN)

Backend:
- Node.js
- Express
- CORS
- dotenv

Despliegue:
- Vercel

Otras herramientas:
- Git y GitHub
- Postman para probar la API
- Claude y ChatGPT como asistentes de desarrollo

## URL de la aplicación

https://bootcamp-project-phi.vercel.app

## Estructura del proyecto
bootcamp-project/
├── public/
│   ├── index.html
│   ├── style.css
│   └── app.js
├── server/
│   ├── src/
│   │   ├── config/
│   │   │   └── env.js
│   │   ├── controllers/
│   │   │   └── task.controller.js
│   │   ├── routes/
│   │   │   └── task.routes.js
│   │   ├── services/
│   │   │   └── task.service.js
│   │   └── index.js
│   └── package.json
├── docs/
│   ├── design/
│   ├── ai/
│   └── backend-api.md
├── .gitignore
├── vercel.json
└── README.md

## API REST

El servidor expone los siguientes endpoints bajo /api/v1/tasks:

- **GET** /api/v1/tasks — obtiene todas las tareas
- **POST** /api/v1/tasks — crea una nueva tarea (requiere title en el body)
- **PATCH** /api/v1/tasks/:id — marca una tarea como completada o pendiente
- **DELETE** /api/v1/tasks/:id — elimina una tarea por su id

## Cómo ejecutarlo en local

Clona el repositorio:

git clone https://github.com/cristinaarlette29jora24-beep/bootcamp-project.git

Entra en la carpeta del servidor e instala las dependencias:

cd bootcamp-project/server
npm install

Crea un archivo .env dentro de la carpeta server con este contenido:

PORT=3000

Arranca el servidor:

npm run dev

Abre el archivo public/index.html en el navegador o usa Live Server desde VS Code.

## Pruebas manuales realizadas

- Añadir tarea con texto normal → Funciona
- Añadir tarea sin título → Bloqueado correctamente, el servidor devuelve error 400
- Marcar tarea como completada → Funciona, se tacha el texto
- Eliminar una tarea → Funciona
- Filtrar por pendientes / completadas → Funciona
- Ordenar por fecha, alfabético y prioridad → Funciona
- Buscar por texto → Funciona
- Modo oscuro → Funciona, preferencia guardada en localStorage
- Responsive en móvil → Layout cambia correctamente

## Accesibilidad

- Todos los inputs tienen label asociado con sr-only para no alterar el diseño
- Botones con aria-label descriptivo
- Barra de progreso con role="progressbar"
- Lista de tareas con aria-label
- Navegación completa con teclado (Tab, Enter, Space)
- Contraste de colores suficiente en modo claro y oscuro
- Un único h1 con jerarquía de encabezados lógica

## Flujo de trabajo Git

- Rama principal: main
- Commits descriptivos en cada cambio siguiendo la convención feat, fix, docs, chore

## Colaboradores

- [@corner-estudios](https://github.com/corner-estudios)
- [@elbaronjack](https://github.com/elbaronjack)
