# Motor de taller

`EL_TALLER.html` de *Golpe de estado* funcionaba tan bien que se ha extraído su motor
para poder abrir un taller igual para cualquier proyecto.

- `motor.css` — los estilos (papel, modo oscuro, dos columnas, progreso).
- `motor.js` — la lógica: navegación paso a paso, progreso, guardado automático en el
  navegador, guardado en una carpeta real del disco y exportación a Markdown.
- `shell.html` — la plantilla HTML. Se copia tal cual a la carpeta del taller nuevo.
- Cada taller vive en su carpeta con un `datos.js` que define el objeto `D`.

## Cómo se crea un taller nuevo

1. `mkdir talleres/t6-loquesea`
2. Copiar `motor/shell.html` a `talleres/t6-loquesea/TALLER.html`.
3. Escribir `talleres/t6-loquesea/datos.js` con el objeto `D`.
4. Abrir el HTML en el navegador.

## El objeto D

```js
const D = {
  meta: { titulo:'El taller', sub:'Nombre del proyecto', K:'taller-clave-unica' },
  reglas: ['Regla global 1', 'Regla global 2'],
  ampliable: true,          // añade un botón «+ paso» dentro de cada unidad
  caps: [{
    n: 1, t:'NOMBRE DE LA UNIDAD',
    song:'(opcional, la canción del capítulo)',
    c:'(opcional, la cuenta atrás)',
    fn:'Para qué sirve esta unidad.',
    reglas:['Regla de esta unidad'],
    items:[
      { t:'Texto del borrador que sirve de referencia.', w:57, d:['etiqueta'], s:['frase intocable'] },
      { b:'Qué hay que hacer en este paso.', check:true }
    ]
  }]
};
```

- `t` → panel izquierdo como **borrador de referencia** (modo reescritura, el de *Golpe de estado*).
- `b` → panel izquierdo como **consigna** (modo creación y modo tarea).
- `check:true` → el paso se cierra con una casilla, no escribiendo (para tareas).
- Sin `check`, un paso está hecho cuando hay más de 40 caracteres escritos.

## Guardado

Se guarda solo en `localStorage` con la clave `meta.K`, así que **cada taller tiene su
propia memoria y no se pisan**. «Conectar carpeta» (Chrome/Edge en escritorio) escribe
además un `.md` por unidad en una carpeta real del disco, cada vez que dejas de teclear.
«Exportar unidad» descarga el `.md` de la unidad abierta.
