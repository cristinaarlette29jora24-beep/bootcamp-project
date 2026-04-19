# Experimentos con IA en Programación

## Metodología

Cada experimento se resolvió primero sin IA (solo con documentación y razonamiento propio) y después con ayuda de IA. Se midió el tiempo invertido, la calidad del código resultante y el nivel de comprensión del problema.

---

## Experimentos externos

### Experimento 1 — Invertir un string
**Sin IA:** 5 minutos. Solución con bucle `for` manual, funcionó correctamente.
**Con IA:** 30 segundos. La IA mostró tres formas distintas: bucle, `.split().reverse().join()` y recursión.
**Comparación:** Con IA aprendí más variantes pero entendí menos el proceso. Sin IA el código fue más lento pero lo comprendí mejor.

### Experimento 2 — Sumar todos los elementos de un array
**Sin IA:** 3 minutos. Usé un bucle `for` básico.
**Con IA:** 10 segundos. La IA usó `.reduce()` directamente.
**Comparación:** La solución de la IA es más profesional pero `.reduce()` es un método que no dominaba. Tuve que pedirle a la IA que lo explicara por separado para entenderlo.

### Experimento 3 — Validar formato de email con expresión regular
**Sin IA:** 10 minutos con errores. La regex que escribí manualmente tenía fallos con dominios de dos niveles como `.co.uk`.
**Con IA:** 1 minuto. La IA generó una regex completa y la explicó parte por parte.
**Comparación:** Las expresiones regulares son un caso donde la IA aporta mucho valor porque la sintaxis es densa y propensa a errores sutiles.

---

## Experimentos en el proyecto TaskFlow

### Experimento 4 — Implementar el buscador de tareas
**Sin IA:** 20 minutos. Implementé un filtro básico que comparaba strings directamente, sin ignorar mayúsculas.
**Con IA:** 5 minutos. La IA añadió `.toLowerCase()` en ambos lados y sugirió usar `.includes()` en lugar de `===`.
**Comparación:** La versión con IA fue más robusta. Aprendí la importancia de normalizar strings antes de comparar.

### Experimento 5 — Configurar CORS en el servidor Express
**Sin IA:** 15 minutos buscando en documentación. Configuré CORS pero sin entender bien las opciones.
**Con IA:** 3 minutos. La IA explicó qué hace cada opción de configuración y cuándo usar `origin: '*'` vs una lista de dominios específicos.
**Comparación:** Para configuración de librerías la IA es muy eficiente. Ahorra tiempo de lectura de documentación.

### Experimento 6 — Arquitectura de capas del backend
**Sin IA:** Intenté durante 30 minutos estructurar el backend y acabé con toda la lógica en `index.js`.
**Con IA:** 10 minutos. La IA explicó la separación en rutas, controladores y servicios con un ejemplo aplicado directamente a TaskFlow.
**Comparación:** Para conceptos de arquitectura la IA es excelente como profesor. Sin embargo, implementé el código yo misma después de entender el concepto para asegurarme de comprenderlo.

---

## Conclusión general

La IA reduce drásticamente el tiempo en tareas repetitivas, de configuración y de sintaxis compleja. Sin embargo, para aprender conceptos nuevos es mejor intentarlo primero sin asistencia y usar la IA solo para verificar o mejorar la solución propia.