# CHULETA — el ritmo de la ronda

> Una pantalla. Si algún día no te acuerdas de nada más, con esto basta.

## El bucle, en cuatro líneas

```
1. AUDITAR      node lote.mjs lista-malasana.txt --csv      (gratis)
2. ELEGIR       el que salga peor de la tabla
3. PROFUNDIZAR  node audit.mjs sudominio.com --html --parche  (gratis)
4. ESCRIBIR     un correo con el peor dato del informe        (15 min)
```

Un negocio al día. Nada más. Se repite mañana.

## Los comandos, con lo que hace cada uno

| Comando | Qué hace | ¿Cuesta? |
|---|---|---|
| `node servidor.mjs` | Panel en `localhost:4321`. Escribes una web, pulsas Analizar. | No |
| `node lote.mjs lista.txt` | Tabla de toda la lista, ordenada por quién está peor. `--csv` para hoja. | No |
| `node audit.mjs web.com --html --parche` | Informe HTML + JSON + el marcado corregido, en `informes/`. | No |
| `node consultar.mjs "NOMBRE" --sector=… --ciudad=Madrid --repeticiones=3` | Pregunta a los asistentes y cuenta si sale. | **Sí** |

Todo se lanza desde `~/geo-auditor`. Solo el último gasta crédito: unos 47.000 tokens y
5 búsquedas por consulta. Hoy no hay crédito, así que hoy no se usa.

## Cómo se construye la lista (10 minutos, una vez por semana)

1. Google Maps, buscar «cafetería Malasaña» o «restaurante Chueca».
2. De cada ficha, copiar el dominio de la web. Ese es el único dato que necesitas.
3. Pegarlo en `lista-malasana.txt`, uno por línea, sin `https://`.
4. Diez o quince por lista sobran para una semana entera de correos.

## A quién merece la pena auditar

El hallazgo de SI SI BAGELS te da el criterio: ganan la pregunta de «bagels» porque la
palabra está en su nombre, y pierden la de «desayuno en Malasaña» porque el barrio no
consta en su código.

Así que **el mejor cliente es el negocio cuyo nombre no dice ni lo que es ni dónde está.**
Un sitio que se llama «La Bicicleta» no gana ninguna pregunta sola. Ese es el que más
tiene que ganar arreglando el código, y el que mejor entiende el dato cuando se lo enseñas.

Descarta: cadenas grandes (tienen agencia), negocios sin web (no hay nada que auditar) y
los que salgan bien en todo (no tienes nada que venderles, y decírselo así te hace ganar
un contacto honesto para más adelante).

## Qué se anota, siempre

En `talleres/registro/BITACORA.csv`, una línea por bloque: fecha, negocio, qué se hizo,
qué contestaron. Un «no» se anota igual que un «sí». El viernes solo se puede decidir
con lo que esté escrito.

## Lo único que no se negocia

**Todo lo que se le dice a un cliente se puede comprobar abriendo el código de su web.**
Si un dato no se puede señalar con el dedo en su HTML, no se manda. Esa norma es la razón
por la que la herramienta se puede poner delante de alguien.
