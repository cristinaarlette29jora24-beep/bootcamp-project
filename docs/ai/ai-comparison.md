# Comparativa entre Asistentes de IA — ChatGPT vs Claude

## 1. Explicación de Conceptos Técnicos

### Closures
**Prompt usado:** "Explícame qué es un closure en JavaScript con un ejemplo práctico"

**ChatGPT:** Explicó el concepto de forma directa con un ejemplo de contador. La explicación fue clara pero algo superficial, sin profundizar en por qué el ámbito léxico es importante.

**Claude:** Ofreció una explicación más técnica explicando el ámbito léxico paso a paso. Incluyó un ejemplo de contador pero además mostró un caso real de uso en un formulario, lo que hizo el concepto más aplicable.

**Conclusión:** Claude fue más útil para entender el concepto en profundidad. ChatGPT fue más rápido para una respuesta directa.

---

### Hoisting
**Prompt usado:** "Explícame el hoisting en JavaScript y por qué puede causar bugs"

**ChatGPT:** Fue muy directo, explicó que las declaraciones se mueven al inicio del ámbito. Recomendó usar `let` y `const` pero sin explicar por qué en detalle.

**Claude:** Explicó el mecanismo interno del hoisting, mostró la diferencia entre `var`, `let` y `const`, e incluyó un ejemplo de bug real causado por hoisting que es fácil de cometer.

**Conclusión:** Claude fue más completo. ChatGPT es suficiente si solo necesitas la definición rápida.

---

### DOM
**Prompt usado:** "Explícame qué es el DOM y cómo se manipula con JavaScript"

**ChatGPT:** Explicó bien la estructura de árbol y los métodos básicos como `getElementById` y `querySelector`.

**Claude:** Explicó la estructura de árbol igual de bien pero además mostró ejemplos de eventos, delegación de eventos y la diferencia entre `innerHTML` y `textContent`, que son errores comunes en principiantes.

**Conclusión:** Ambos son buenos para este tema. Claude añade más contexto de buenas prácticas.

---

## 2. Detección de Errores (Bugs)

**Prompt usado:** "Encuentra y explica el error en este código: [código con error]"

Se probaron tres funciones con errores distintos:

**Función 1 — Error de sintaxis (llave sin cerrar)**
- ChatGPT: Lo detectó inmediatamente ✅
- Claude: Lo detectó inmediatamente ✅

**Función 2 — Error lógico en array (uso de `=` en lugar de `===`)**
- ChatGPT: Lo detectó pero tardó más en explicar por qué era un problema
- Claude: Lo detectó y explicó la diferencia entre asignación y comparación estricta ✅

**Función 3 — Error de closure (variable compartida en bucle)**
- ChatGPT: Pasó por alto el error en el primer intento ❌
- Claude: Detectó el problema de ámbito y sugirió usar `let` en lugar de `var` ✅

**Conclusión:** Claude es más preciso en errores lógicos sutiles. Para errores de sintaxis ambos son igual de buenos.

---

## 3. Generación de Implementación

**Prompt usado:** "Escribe una función JavaScript que [descripción en lenguaje natural]"

Se pidieron tres implementaciones:

**Buscador de tareas por texto**
- ChatGPT: Generó una función larga con todo mezclado (lógica + DOM)
- Claude: Generó funciones separadas, una para filtrar y otra para renderizar ✅

**Filtro de prioridad**
- ChatGPT: Usó un switch con mucho código repetido
- Claude: Usó un objeto de mapeo más limpio y reutilizable ✅

**Sistema de guardado automático**
- ChatGPT: Implementó bien el localStorage
- Claude: Implementó localStorage pero además añadió manejo de errores con try/catch ✅

**Conclusión general:** El código de Claude es más modular, más limpio y sigue mejores prácticas. ChatGPT es más rápido para obtener una primera versión funcional pero requiere más revisión manual.