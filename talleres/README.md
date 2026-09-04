# COLUMNA VERTEBRAL — Sistema de Talleres

Estructura de trabajo que reparte **6 horas al día, de lunes a viernes** entre todos los
proyectos activos, imitando la disciplina de un puesto laboral real: horario fijo,
entregables medibles, revisión semanal y un archivo de lo hecho.

## Filosofía

1. **El taller es el lugar, no el humor.** Se entra al taller a la hora, se haya o no
   inspiración. La inspiración es un efecto secundario de aparecer.
2. **Un taller = un proyecto = una definición de terminado.** Nada entra en un taller si
   no se puede decir cuándo estará acabado.
3. **Atención distribuida, no dispersa.** Cada proyecto tiene bloques asignados en la
   semana; fuera de su bloque, no se toca (se anota en su backlog y se sigue).
4. **Todo bloque termina con un artefacto.** Páginas corregidas, escena escrita, post
   publicado, cliente contactado, commit hecho. Si no hay artefacto, el bloque no cuenta.

## Los talleres

**La fuente única es [`ESTADO.md`](ESTADO.md).** Se regenera los viernes y contiene los diez
frentes con su siguiente paso. Si algo no está ahí, no existe para el sistema.

| # | Taller | Estado | h/sem | Taller vivo |
|---|--------|--------|-------|-------------|
| [T1](T1-golpe-de-estado.md) | **Golpe de estado** | Corrigiendo, 11 de 132 párrafos | 4,5 | [abrir](t1-golpe-de-estado/EL_TALLER.html) |
| [T2](T2-verde-agua.md) | **Verde agua** | Biblia cerrada, 0 de 15 pasos | 6 | [abrir](t2-verde-agua/UMBRAL.html) |
| [T3](T3-hera.md) | **HERA · marca e Instagram** | Cadencia | 3 | [abrir](t3-hera/TALLER.html) |
| [T4](T4-verder.md) | **Auditor GEO** | 3.789 líneas, 0 clientes | 3 | [abrir](t4-verder/TALLER.html) |
| [T5](T5-skin-lab.md) | **HERA Skin Lab** | 3 personas ajenas | 1,5 | [abrir](t5-skin-lab/TALLER.html) |
| [T6](T6-kierck.md) | **Kierck** | Biblia en construcción | 1,5 | — |
| [T7](T7-encargos.md) | **Encargos y campaña** | 4 encargos vivos | 1,5 | — |
| [T8](T8-direccion.md) | **Dirección** | Viernes | 1,5 | — |
| [T9](T9-envios-revistas.md) | **Envíos a revistas** | Ventana de 26 días | 1,5 | — |
| [T10](T10-bus-beasts.md) | **The Bus Beasts** | **En pausa a propósito** | 0 | — |
| [La ronda](LA-RONDA.md) | **El bloque B4, cada día** | Reparte T3, T4 y T5 | 6 | — |

Total: **30 h/semana = 6 h/día × 5 días**, en 20 bloques de 90 minutos.

### Lo que dicen los números de este reparto

Tres proyectos —Skin Lab, el Auditor GEO y el Instagram de HERA— **ya están construidos y
funcionando, y ninguno tiene un usuario, un cliente o una audiencia**. Ninguno se arregla
escribiendo más código. Por eso los tres tienen pocas horas de bloque y viven sobre todo
en la ronda diaria: su cuello de botella no es el teclado, es que nadie los conoce.

Y por eso el bloque de las 15:00 no es el bloque de sobra: es el único que hoy mueve la
aguja de verdad.

## Los talleres vivos

Cada taller tiene, además de su documento, una **aplicación de taller**: la misma que ya
funcionaba en *Golpe de estado*, con su motor extraído para poder reutilizarla.

- [`index.html`](index.html) — la portada: los cinco talleres, se abre desde ahí.
- Funciona igual en todos: unidades arriba, paso a paso abajo, la consigna o el borrador
  a la izquierda, lo tuyo a la derecha, progreso guardado solo.
- **Conectar carpeta** (Chrome o Edge en el escritorio) escribe un `.md` por unidad en una
  carpeta real de tu disco cada vez que dejas de teclear. **Exportar unidad** la descarga suelta.
- Cada taller guarda en su propia clave: no se pisan entre ellos.
- El motor y cómo crear un taller nuevo: [`motor/README.md`](motor/README.md).

## Documentos del sistema

- [`PANEL-UNA-COSA.html`](PANEL-UNA-COSA.html) — **el panel de decisión.** Una sola acción a la vez, el bloque en curso y el siguiente paso de cada proyecto. Publicado también en la web para el móvil.
- [`HOY.html`](HOY.html) — **se abre cada mañana.** Pulsas «Arranco ahora» y calcula los bloques desde esa hora.
- [`HORARIO.md`](HORARIO.md) — la rotación semanal y las reglas de reposición.
- [`PROTOCOLO.md`](PROTOCOLO.md) — rituales de apertura y cierre, reglas de foco, qué hacer los días malos.
- [`HITOS.md`](HITOS.md) — **cosas que se pueden tocar pronto.** Cinco esta semana, hora y cuarto en total.
- [`LA-RONDA.md`](LA-RONDA.md) — el bloque B4, minuto a minuto. El más importante y el que primero se cae.
- [`fuentes/`](fuentes/) — los dossieres de origen: universo Golpe de estado / Verde agua, Skin Lab e índice maestro.
- [`REVISION-SEMANAL.md`](REVISION-SEMANAL.md) — la reunión del viernes conmigo mismo (plantilla).
- [`registro/`](registro/) — bitácora diaria y semanal. Una línea por bloque.
- [`registro/BITACORA.csv`](registro/BITACORA.csv) — registro cuantitativo para ver la tendencia.
- [`PANEL.html`](PANEL.html) — panel visual del horario y del estado de cada taller (abrir en el navegador).

## Cómo se empieza

**Si es hoy: [`ARRANQUE.md`](ARRANQUE.md).** El primer día no empieza por el principio,
empieza por la hora que es.

1. Leer [`PROTOCOLO.md`](PROTOCOLO.md) una vez, entero.
2. Poner el horario de [`HORARIO.md`](HORARIO.md) en el calendario como eventos fijos y repetitivos.
3. Rellenar la sección **Estado actual** de cada taller con dónde está hoy el proyecto.
4. Empezar el lunes. No el lunes ideal: el lunes siguiente.
