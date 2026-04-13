# Prompt Engineering

La construcción de TaskFlow se ha basado en instrucciones precisas para obtener código limpio. Se han utilizado los siguientes 10 prompts estratégicos:

1. **Prompt de Refactorización:** "Optimiza la función de guardado en LocalStorage para que sea más eficiente, manteniendo la estructura de nombres actual".
   * *Por qué funciona:* Proporciona restricciones claras para no romper la compatibilidad.
2. **Prompt de Depuración (Debug):** "Revisa el archivo app.js y detecta por qué no se actualiza el contador de tareas al marcar el checkbox".
   * *Por qué funciona:* Enfoca la capacidad de análisis de la IA en un error lógico específico.
3. **Prompt de Estilo:** "Genera reglas CSS para que la lista de tareas sea responsive en móviles sin usar librerías externas".
   * *Por qué funciona:* Evita la dependencia de frameworks innecesarios.
4. **Prompt de Documentación:** "Explica línea por línea qué hace la función de filtrado de prioridades para entender la lógica".
   * *Por qué funciona:* Obliga a la IA a desglosar el razonamiento técnico.
5. **Prompt de Seguridad:** "Valida que los inputs de texto limpien los datos antes de guardarlos para evitar scripts maliciosos".
   * *Por qué funciona:* Asegura la integridad de los datos introducidos por el usuario.
6. **Prompt de Rol (Senior):** "Actúa como un desarrollador senior y revisa este código buscando posibles fugas de memoria".
   * *Por qué funciona:* Eleva el estándar de calidad y las buenas prácticas en la respuesta.
7. **Prompt Few-Shot (con ejemplos):** "Crea una función de borrado similar a esta (ejemplo) pero para la funcionalidad de edición".
   * *Por qué funciona:* Proporciona un patrón visual que la IA debe imitar.
8. **Prompt Paso a Paso:** "Describe primero el algoritmo de ordenación y luego escribe el código en JavaScript".
   * *Por qué funciona:* Reduce errores al forzar a la IA a razonar antes de generar sintaxis.
9. **Prompt de Restricción Clara:** "Genera una función de búsqueda que no supere las 10 líneas de código".
   * *Por qué funciona:* Obliga a la síntesis y a la creación de código más legible.
10. **Prompt de Testing:** "Genera tres casos de prueba para validar que el buscador no sea sensible a mayúsculas".
    * *Por qué funciona:* Ayuda a prever errores de usuario en entornos reales.