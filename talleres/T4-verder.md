# T4 — Taller de Servicio · VERDER / AUDITOR GEO

**Naturaleza:** una herramienta terminada sin clientes. Fase comercial, no de código.
**Horas:** 3 h/semana — Martes B3, Viernes B3 (medición) — más 35 minutos diarios de
prospección y correo en [la ronda](LA-RONDA.md).

Todo vive en `~/geo-auditor`, con control de versiones. La nota de continuación está en
`SIGUIENTE.md` y los registros de cada medición, con respuestas literales y fuentes, en
`informes/consultas/`.

## Qué es

Analiza la web de un negocio y mide si los asistentes de IA lo recomiendan. **3.789 líneas**
tras la reestructuración del 2-sep, 11 sectores, 21 reglas, 120 tipos de schema.org, 4 asistentes.

Dos comandos nuevos que cambian el trabajo diario:

- `node cliente.mjs sisibagels.com` — deja el **paquete entero** de un cliente: auditoría,
  marcado listo para pegar, informe que abre él y el correo con sus comprobaciones. Es el
  comando de cada día; sustituye a encadenar `audit.mjs` a mano.
- `node publicar.mjs` — prepara `publico/` para subir a un alojamiento. Cada informe en una
  ruta aleatoria y sin indexar, porque son datos de un negocio dirigidos a una persona.

## La norma innegociable

**El programa no estima, no puntúa a ojo y no rellena huecos.** Todo lo que informa se
puede comprobar abriendo el código de la web. Cada hallazgo se etiqueta:

- **Hecho verificado** — comprobado contra la respuesta del servidor. El cliente puede
  abrir su código y encontrarlo literal.
- **Señal · confirmar** — un patrón detectado. Exige que un humano lo confirme antes de
  usarlo con un cliente.

Nació de un error real: una herramienta hecha con otra IA generó datos falsos sobre el
Gran Hotel Inglés. El contacto se salvó rehaciendo la auditoría a mano. De ahí sale la
norma, y de la norma salen los once defectos que se encontraron y corrigieron.

## Los comandos

```bash
cd ~/geo-auditor && node servidor.mjs          # panel en localhost:4321
cd ~/geo-auditor && node audit.mjs sisibagels.com --html --parche
cd ~/geo-auditor && node lote.mjs mi-lista.txt # prospección, un dominio por línea
cd ~/geo-auditor && ANTHROPIC_API_KEY="…" node consultar.mjs "SI SI BAGELS" \
  --sector=gastronomia --ciudad=Madrid --repeticiones=3   # consume crédito
```

Auditar y prospectar es **gratis**. Solo medir en los asistentes gasta: unos 47.000 tokens
y 5 búsquedas web por consulta.

## Estado al 5-sep

La herramienta cambió de sitio: ya no dice qué está mal, **prepara el cliente entero con un
comando**. Auditoría, código corregido, informe que abre el cliente y correo con su lista.

Lo que más pesa de lo nuevo:

- **El informe del cliente.** Una página con su nombre y su logo que enseña qué sabe hoy un
  asistente de él y qué sabría después. SI SI BAGELS pasa de **0 de 9 a 7 de 9**. No es una
  promesa: se calcula con las mismas reglas en los dos lados.
- **El correo:** de 67 caracteres de asunto a 26, y de describir problemas a entregar un enlace.
- **El registro de contactos:** cada día te dice a quién responder, a quién seguir y a quién
  dejar estar.
- **Publicación con comprobación:** antes de dar un correo por bueno, abre el enlace como lo
  abriría un desconocido y se niega si pide contraseña o no está subido.

**Nueve fallos propios corregidos**, todos encontrados mirando datos reales. Los tres que
más habrían dolido:

1. El marcado **empeoraba** a Hotel Orfila —de 69 % a 57 %— porque tiraba lo que ya tenía
   declarado. Ahora hereda y sube a 80 %.
2. A ocho negocios les asignaba «falta la dirección» cuando en realidad no tenían ningún
   dato: les vendía el síntoma menor.
3. El correo de Txirimiri iba a llamar «una fotografía» a un icono de WordPress. Un dato
   falso y adiós credibilidad.

**Comercial:** 2 correos fuera (SI SI BAGELS el 3, No Classica el 5), 2 paquetes listos,
**27 negocios auditados** en Chueca, La Latina y Lavapiés con contacto verificado.

### Qué toca

- [ ] **Peñalver** — se puede enviar ya.
- [ ] Subir el ZIP y mandar **Txirimiri**.
- [ ] **Día 8:** seguimiento de SI SI BAGELS si no han contestado. El registro avisa.
- [ ] Cuando quieras: **11 negocios** con correo verificado sin tocar.

## Estado real

**Funciona · sin cliente todavía.**

- Auditoría de webs: probada contra hoteles, restaurantes, museos, clínicas, despachos y
  tiendas. Reconoce lo que está bien hecho: el Hotel Orfila sale con 69 % y cero críticos.
- Panel web y modo lote: funcionando.
- Medición en Claude: verificada con dos negocios reales y 21 consultas.
- ChatGPT, Perplexity y Gemini: código escrito y endpoints verificados, pero **ninguno ha
  devuelto todavía una respuesta correcta**. Cada uno necesita su clave de pago.
- **Ningún cliente ha pagado todavía.** Cuatro correos fuera y ninguna respuesta aún.
- Sin crédito de API: se agotaron los 5 dólares a mitad de la última medición.

## Definición de terminado (fase actual)

- [ ] **Enviar el correo de SI SI BAGELS.** Está escrito, en `informes/sisibagels-correo.md`.
- [ ] Si contestan: mandarles `informes/sisibagels-marcado.html` y pedir los tres datos que
      no están en su web (teléfono de cada local, rango de precio, si aceptan reservas).
- [ ] Diez negocios contactados por semana, contados en la bitácora.
- [ ] Los tres diagnósticos gratuitos como casos de estudio.
- [ ] Primer cliente de pago.
- [ ] Los tres paquetes con precio y alcance escritos.

## El cliente que quieres

**Pez Tortilla.** Anotado el 1-sep como objetivo deseado, no como uno más de la lista.

Regla para los clientes que te importan: **no entran en el lote.** Se auditan a solas,
se lee el informe entero, y se escribe cuando tengas el mejor dato del informe claro en
una frase. Un correo mediocre a un negocio que te da igual cuesta un contacto; a uno que
quieres, cuesta el único que tenías.

Práctica primero con los que te dan igual. Cuando lleves cinco correos escritos y sepas
cuál engancha, escribe el de Pez Tortilla.

## Fuera del trabajo diario, pero pendiente

- **Cambiar la clave de Anthropic.** La actual se pegó en un chat. Se crea otra en
  console.anthropic.com y se borra la vieja.
- **Recargar crédito.** Solo hace falta para medir en los asistentes.
- **Dominio propio, 10 € al año.** Hoy sale de Gmail y entrega bien, pero con dominio el
  remitente y el enlace del informe coincidirían, y podrías configurar SPF, DKIM y DMARC.

## Hallazgo del 1-sep: el marcado no basta

Primera tanda de siete auditorías. **Toma Café y HanSo, que salen 4 de 4 en los
asistentes, tienen el código peor que SI SI BAGELS. Masamune, con el marcado correcto, no
sale en ninguna consulta.**

El marcado no explica por sí solo quién sale recomendado. Cambia lo que se puede prometer.
Detalle y consecuencias: [`t4-verder/hallazgo-01-el-marcado-no-basta.md`](t4-verder/hallazgo-01-el-marcado-no-basta.md).

## El dato que vende

Mismo negocio, misma web, misma semana:

| Pregunta | Aparece | Puestos |
|---|---|---|
| ¿Dónde comer buenos bagels en Madrid? | **4 de 4** | 5.º 2.º 4.º 2.º |
| Brunch o desayuno en Malasaña | **0 de 4** | — |
| Mejores cafeterías de especialidad | 0 de 1 | — |

Quien busca «bagels» los encuentra porque el nombre lleva la palabra. En la de Malasaña
salen Toma Café y HanSo las cuatro veces.

**El contraste es la venta. La causa, no**: ver el hallazgo del 1-sep. Se enseña el dato y
se ofrece el diagnóstico; no se promete que arreglar el código cambie el resultado.

## Métricas

| Métrica | Objetivo semanal |
|---|---|
| Negocios auditados | 10 (gratis) |
| Correos enviados | 5 (uno al día en la ronda) |
| Diagnósticos completos | 2 |
| Clientes activos | — (acumulado) |

## Taller vivo

[`t4-verder/TALLER.html`](t4-verder/TALLER.html)
