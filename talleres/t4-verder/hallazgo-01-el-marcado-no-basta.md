# Hallazgo 01 — El marcado no explica quién sale

**1 de septiembre de 2026.** Primera tanda de auditorías reales, 7 dominios de Malasaña.

## Lo que salió

| Dominio | Auditoría | ¿Sale en los asistentes? |
|---|---|---|
| tomacafe.es | **crítico** | **4 de 4** en «brunch o desayuno en Malasaña» |
| hansocafe.es | **sin JSON-LD ninguno** | **4 de 4** |
| masamunecoffee.com | correcto | no aparece en ninguna consulta |
| sisibagels.com | solo `WebSite`, descripción vacía | 0 de 4 en Malasaña · 4 de 4 en «bagels» |
| labicicletacafe.com | sin entidad + 2 hallazgos altos | sin medir |
| brunchclubcafe.com | sin entidad + 3 propiedades de peso alto | sin medir |
| brunchit.es | sin entidad | sin medir |
| camdencoffeeroasters.com | dirección en texto, no como PostalAddress | sin medir |

## Lo que significa

**Los dos negocios que ganan la pregunta tienen el código peor que el que la pierde.**
Y el único con el marcado correcto no aparece en ninguna consulta.

El marcado, por sí solo, **no explica quién sale recomendado.** Lo que Toma Café y HanSo
tienen y SI SI BAGELS no es otra cosa: prensa local, guías de cafeterías, años de reseñas
y menciones. Las fuentes que estos sistemas leen antes de contestar.

## Consecuencia para el servicio

**Lo que ya no se puede decir:** «arreglamos el código y saldrás». No está demostrado y
estos datos lo ponen en duda. Prometerlo sería repetir el error del Gran Hotel Inglés,
que es por lo que existe este proyecto.

**Lo que sí se puede sostener:**

1. **Saber dónde estás.** Qué preguntas ganas, cuáles pierdes y cómo te describen.
   Medido, con la respuesta literal y sus fuentes guardadas.
2. **Dos palancas, no una.** El código de tu web —que controlas y hoy está incompleto— y
   la presencia en las fuentes que estos sistemas citan.
3. **Medición antes y después**, con fechas. Sin prometer posiciones.

Es una oferta más honesta y, dicho así, también más difícil de copiar.

## Consecuencia para el correo de SI SI BAGELS

El correo enviado el 1-sep dice que no aparecen «porque en el código no consta que estéis
en Malasaña». **Eso es una hipótesis, no un hecho verificado.** Los datos de la web que se
les enseñaron son ciertos y comprobables; la relación causa-efecto, no.

Si contestan: **no prometer que el arreglo los hará aparecer.** Ofrecer el diagnóstico
completo y la medición antes/después. Si preguntan directamente, contarles esto — que sus
competidores salen con el código peor. Un cliente que oye eso de ti confía más, no menos.

## Para el futuro

Hace falta una tercera columna en el diagnóstico, además de código y aparición:
**dónde te citan.** Qué fuentes usó el asistente al contestar. Ese dato ya se guarda en
`informes/consultas/` — está sin explotar y probablemente sea lo más valioso que hay ahí.
