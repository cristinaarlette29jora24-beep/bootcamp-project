# Reflexión Final sobre IA y Programación

## Tareas donde la IA me ayudó más

La IA fue especialmente útil en tres áreas concretas de este proyecto:

**CSS y diseño:** Generar el layout con Flexbox y Grid fue mucho más rápido con ayuda de la IA. En lugar de buscar en documentación, podía describir lo que quería visualmente y obtener el código base en segundos.

**Depuración de errores:** Cuando el frontend no se conectaba al backend, la IA identificó que los IDs del HTML no coincidían con los del JavaScript en cuestión de segundos. Sin asistencia, ese tipo de error puede costar horas.

**Arquitectura del backend:** La IA me ayudó a entender la separación en capas (rutas, controladores, servicios) con ejemplos concretos aplicados a mi propio proyecto, lo que aceleró mucho la comprensión.

---

## Casos donde la IA falló o generó código incorrecto

**Inventar funciones inexistentes:** En una ocasión Claude generó código que usaba un método `.findByTitle()` que no existe en JavaScript nativo ni en ninguna librería del proyecto. Al ejecutarlo, daba error inmediatamente.

**Contexto incompleto:** Cuando pedía ayuda sin pegar el código completo, la IA asumía cosas incorrectas sobre la estructura del proyecto y generaba soluciones que no encajaban con lo que ya tenía.

**Rutas del servidor:** La IA generó las rutas GET y POST correctamente pero olvidó añadir DELETE y PATCH, lo que causó que el checkbox y el botón eliminar no funcionaran en producción hasta que lo detecté manualmente.

---

## Riesgos de depender demasiado de la IA

El riesgo más grande es **no entender el código que se acepta.** Si copio y pego sin leer, puedo tener una aplicación que funciona pero que no soy capaz de mantener ni depurar cuando falla en producción.

Otro riesgo es la **falsa confianza:** la IA genera código con mucha seguridad incluso cuando está equivocada. Si no tengo conocimientos base para detectar el error, lo acepto como correcto.

Por último, la IA no conoce el contexto completo del proyecto. Puede generar soluciones que funcionan de forma aislada pero que rompen otras partes del código.

---

## Cuándo prefiero programar sin asistencia

Prefiero trabajar sin IA cuando estoy aprendiendo un concepto nuevo. Si dejo que la IA resuelva el problema, aprendo la solución pero no el proceso. Por ejemplo, al implementar el Event Loop o entender cómo funciona el middleware en Express, es más valioso intentarlo primero y equivocarse que recibir la respuesta directamente.

También prefiero no usar IA para la lógica central de la aplicación, como el flujo de datos entre el frontend y el backend, porque necesito entender exactamente qué pasa en cada paso para poder depurarlo cuando falla.