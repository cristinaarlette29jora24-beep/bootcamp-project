## mi primer Backend
Para completar el ejercicio de TaskFlow, he tenido que dejar de pensar solo en lo que se ve en la pantalla y empezar a entender cómo viaja la información por la red. Estos son los conceptos clave que he aplicado:

1. ¿Por qué usaría Axios en vez de Fetch?
Aunque ahora mismo me apaño con fetch, sé que en las empresas se usa mucho Axios. Básicamente, me ahorraría trabajo porque convierte los datos a JSON automáticamente y me permite usar "interceptores" (que es como programar reglas automáticas para todas mis peticiones). Además, gestiona los errores de conexión de una forma mucho más limpia.

2. Postman y Thunder Client: Mis probadores de "puertas"
He aprendido que no hace falta abrir el navegador para saber si mi servidor funciona. Con estas herramientas puedo llamar a mis rutas (endpoints) directamente. Me han servido para "hacerle perrerías" al servidor: enviar datos mal o borrar cosas que no existen, solo para comprobar que mi código me responde con los errores correctos (como el 400 o el 500) y no se queda colgado.

3. Swagger: El mapa para otros programadores
Si mañana otra persona tuviera que trabajar en mi proyecto, Swagger le daría una web con el "menú" de mi API. Ahí vería qué rutas tengo, qué datos necesito enviarle y podría probarlo todo sin tener que leerse todo mi código fuente.

4. Sentry: El vigilante 24/7
Como estudiante de ASIR, entiendo que los servidores pueden fallar en cualquier momento. Sentry es como tener una alarma: si mi código da un error mientras un usuario lo está usando, me avisa al instante diciéndome exactamente en qué línea ha fallado. Así puedo arreglarlo antes de que me lleguen las quejas.
