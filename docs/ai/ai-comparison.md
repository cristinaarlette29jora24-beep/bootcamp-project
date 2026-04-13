## 1. Comparativa de respuestas: Closures en JavaScript
Tras analizar las explicaciones de ambos asistentes, he podido observar que ChatGPT prioriza una estructura académica, desglosando el concepto en "encapsulación" y "control de lógica". Su código es útil para entender la seguridad de los datos, ya que utiliza una variable privada que no puede ser manipulada desde el exterior, cumpliendo con el objetivo de proteger el estado de la aplicación.

Por otra parte, Claude ofrece un enfoque orientado a la escalabilidad. Su ejemplo permite visualizar la creación de múltiples instancias (una lista para "Trabajo" y otra "Personal") que mantienen sus datos de forma independiente en la memoria. Para el desarrollo de TaskFlow, esta perspectiva es superior, ya que facilita la comprensión de cómo gestionar diferentes contextos de datos dentro de un mismo sistema sin interferencias.


## 2. Detección de Bugs (Errores intencionales)

Para esta prueba, presenté tres errores: uno de sintaxis (paréntesis), uno de lógica (bucle infinito) y uno de referencia (typo).

**ChatGPT:** Identificó los errores rápidamente, pero se limitó a corregir el código de forma literal. Su explicación fue muy directa, centrada en solucionar el problema inmediato sin profundizar en la estructura del código.
**Claude:** Fue más exhaustivo. No solo corrigió los errores, sino que sugirió **mejores prácticas**, como evitar variables globales y usar funciones puras. Su capacidad de análisis es más profunda, actuando casi como un revisor de código senior.

**Conclusión:** Para corrección rápida prefiero ChatGPT, pero para aprender a escribir mejor código, Claude es superior.

## 3. Generación de Implementación (TaskFlow)

Al pedir las funciones de LocalStorage, prioridades y filtros, las diferencias fueron claras. ChatGPT entregó soluciones básicas usando condicionales if/else. Es un código que funciona, pero que se vuelve difícil de mantener si la aplicación crece.

Claude, en cambio, estructuró el código de forma más limpia. En lugar de acumular condicionales, utilizó objetos para mapear las prioridades, lo que facilita añadir cambios en el futuro sin tocar la lógica principal. Además, sus explicaciones sobre por qué no se debe modificar el array original al filtrar son útiles para entender cómo escribir un código más robusto.
