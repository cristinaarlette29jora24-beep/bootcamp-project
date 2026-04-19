# Prompt Engineering aplicado al desarrollo

## ¿Qué es el prompt engineering?
Es la técnica de redactar instrucciones precisas para obtener respuestas más útiles de una IA. La calidad del prompt determina directamente la calidad de la respuesta.

---

## Prompts útiles recopilados

1. **Rol Senior:** "Actúa como desarrollador senior y optimiza este código".
   - **Por qué funciona:** Al asignar un rol experto, la IA ajusta el nivel técnico y prioriza buenas prácticas en lugar de simplemente hacer que el código funcione.

2. **Restricción:** "Hazlo sin usar librerías externas, solo JavaScript nativo".
   - **Por qué funciona:** Sin esta restricción la IA puede sugerir librerías que no están instaladas. La restricción obliga a soluciones más portables.

3. **Paso a paso:** "Explica la lógica antes de escribir el código".
   - **Por qué funciona:** Fuerza a la IA a planificar antes de generar. El razonamiento queda expuesto y es fácil de corregir antes de ver el código.

4. **Validación:** "Añade seguridad contra ataques básicos en este input".
   - **Por qué funciona:** Sin pedirlo explícitamente la IA asume que los datos son correctos. Esta instrucción activa el modo de programación defensiva.

5. **Formato:** "Devuelve solo el código, sin explicaciones ni comentarios adicionales".
   - **Por qué funciona:** Cuando solo necesitas el código para copiarlo directamente, las explicaciones son ruido. Este prompt elimina el texto innecesario.

6. **Debug:** "Encuentra todos los errores en este código. Para cada uno indica la línea, el tipo de error y cómo corregirlo".
   - **Por qué funciona:** Pedir una estructura concreta hace la respuesta más accionable que un párrafo genérico.

7. **Estilo:** "Renombra las variables siguiendo camelCase en inglés con nombres descriptivos".
   - **Por qué funciona:** Los nombres de variables son críticos para la legibilidad. Este prompt mejora el código sin cambiar su lógica.

8. **Simplificación:** "Simplifica esta función para que sea más corta sin perder legibilidad ni funcionalidad".
   - **Por qué funciona:** Distingue entre simplificar y ofuscar. Sin esa aclaración la IA puede generar código de una línea que nadie puede leer.

9. **Documentación:** "Genera comentarios JSDoc completos para esta función incluyendo @param, @returns y un ejemplo de uso".
   - **Por qué funciona:** Pedir el formato específico garantiza compatibilidad con herramientas como VS Code IntelliSense.

10. **Traducción:** "Explica qué hace este código línea a línea como si se lo explicaras a alguien que está aprendiendo a programar".
    - **Por qué funciona:** Adaptar el nivel al destinatario hace la respuesta mucho más útil que una explicación técnica genérica.

---

## Conclusión
Un buen prompt tiene tres elementos: **contexto** (qué rol debe tomar la IA), **tarea concreta** (qué quieres exactamente) y **restricciones** (qué no debe hacer o qué formato debe seguir). Cuanto más específico es el prompt, más útil es la respuesta.