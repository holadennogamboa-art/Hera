// Lógica pura del enlace: sin $, para que los tests la cubran entera.

export type Proyecto = {
  id?: string
  n: string
  el?: string
  paso?: string
  cifra?: string
  donde?: string
}
export type Hilo = { a: string; b: string; q: string }
export type Progreso = Record<string, { h?: Record<string, unknown> }>
export type Doc<T> = { data: T; version: number; updatedAt?: string }
export type Aviso = { corto: string; texto: string }

const DIA = 86_400_000

// ArtifactData «get» devuelve el documento como una línea JSON entre marcas.
export const docDeTexto = <T>(texto: string): Doc<T> | undefined => {
  const linea = texto.split('\n').find(l => l.startsWith('{"id":'))
  try {
    const d = JSON.parse(linea ?? '') as Doc<T>
    return d && typeof d === 'object' && d.data ? d : undefined
  } catch {
    return undefined
  }
}

const limpio = (s = '') => s.replace(/\*\*/g, '').trim()

// El último día con algún bloque cerrado (h === true) en plan/progreso.
export const ultimoBloque = (dias: Progreso): string | undefined =>
  Object.keys(dias)
    .filter(f => Object.values(dias[f]?.h ?? {}).some(v => v === true))
    .sort()
    .at(-1)

export const diasDesde = (fecha: string, hoy: Date): number =>
  Math.floor(
    (Date.UTC(hoy.getUTCFullYear(), hoy.getUTCMonth(), hoy.getUTCDate()) -
      Date.parse(`${fecha}T00:00:00Z`)) /
      DIA,
  )

// De viernes a lunes son 3 días sin culpa.
export const avisos = (ultimo: string | undefined, hoy: Date): Aviso[] => {
  if (!ultimo) return []
  const d = diasDesde(ultimo, hoy)
  return d > 3
    ? [
        {
          corto: `${d} d sin cerrar bloque`,
          texto: `El último bloque cerrado en el panel es del ${ultimo}: hace ${d} días.`,
        },
      ]
    : []
}

export const conexiones = (nombre: string, hilos: Hilo[]): string[] =>
  hilos.flatMap(h =>
    h.a === nombre ? [`→ ${h.b}: ${h.q}`] : h.b === nombre ? [`← ${h.a}: ${h.q}`] : [],
  )

export const lineaProyecto = (p: Proyecto): string =>
  [`${p.n}${p.id ? ` (${p.id})` : ''}`, p.el, limpio(p.paso), limpio(p.cifra)]
    .filter(Boolean)
    .join(' · ')

// Lo que lee el Claude de cada hilo al empezar.
export const contexto = (o: {
  panel: string
  proyectos: Proyecto[]
  hilos: Hilo[]
  avisos: Aviso[]
}): string =>
  [
    '# Los proyectos de Denno, en vivo',
    `Fuente: el panel «Una cosa a la vez» (${o.panel}), leído al abrir este hilo. Es la fuente viva y manda sobre ESTADO.md y la bitácora del repo.`,
    'Regla: el hilo es donde se piensa; lo que se decide aquí tiene que quedar en el panel.',
    ...(o.avisos.length ? ['Avisos:', ...o.avisos.map(a => `- ${a.texto}`)] : []),
    '',
    '## Proyectos (nombre · estado · siguiente paso · cifra)',
    ...o.proyectos.map(p => `- ${lineaProyecto(p)}`),
    '',
    '## Hilos (lo que un proyecto le da a otro)',
    ...o.hilos.map(h => `- ${h.a} → ${h.b}: ${h.q}`),
    '',
    'Si el trabajo de este hilo toca uno de estos proyectos, nómbralo al empezar y mira sus hilos: lo que cambie aquí puede llegar a los proyectos que alimenta, y hay que decirlo. Al cerrar, propón cómo queda su paso y qué les llega a los conectados; Denno lo pide con /cierre.',
  ].join('\n')

// Si el mod no pudo leer el panel, Claude sabe dónde está y cómo leerlo.
export const contextoSinLectura = (panel: string): string =>
  [
    '# Los proyectos de Denno',
    `El estado vivo está en el panel «Una cosa a la vez» (${panel}). Si este hilo toca uno de sus proyectos, léelo con ArtifactData (panel/info: proyectos con su paso; panel/hilos: lo que un proyecto le da a otro) antes de proponer nada.`,
  ].join('\n')

export const cierre = (panel: string): string =>
  [
    `Cierre de este hilo. Lo que se decidió aquí tiene que quedar en el panel «Una cosa a la vez» (${panel}).`,
    '1. En tres líneas como máximo: qué se hizo y qué se decidió.',
    '2. Qué proyecto o proyectos del panel toca. Lee panel/info y, para cada uno, enséñame cómo quedan paso, cifra y donde (antes → después).',
    '3. Si se terminó algo de verdad, el logro para panel/info.logros, con el mismo formato que los que ya hay.',
    '4. Lee panel/hilos. Para cada hilo que sale de ese proyecto, qué le llega al otro y si cambia su paso. Si aparece una conexión nueva entre dos proyectos, propón el hilo {a, b, q}.',
    '5. Cuando te dé el OK, escríbelo con ArtifactData sobre la versión que leíste (if_version). Sin mi OK no escribas nada.',
  ].join('\n')
