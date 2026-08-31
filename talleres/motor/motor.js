/* MOTOR DE TALLER — genérico.
   Espera un objeto global D definido antes de cargar este script:
   D = {
     meta:{ titulo, sub, K },        // K = clave de guardado en el navegador
     reglas:[ "..." ],               // reglas globales (modal «Las reglas»)
     ampliable:false,                // true => botón «Añadir paso» en cada unidad
     caps:[ {
        n, t, song?, c?, fn,
        reglas:[ "..." ],
        items:[ { t?:"texto de referencia", b?:"qué hay que hacer aquí",
                  w?:nº palabras, d?:["etiqueta"], s?:["frase intocable"], check?:true } ]
     } ]
   }
   Un paso está HECHO si: check → casilla marcada; si no → más de 40 caracteres escritos.
*/
let ci = 0, pi = 0, dir = null;
const K = D.meta.K;
let mine = JSON.parse(localStorage.getItem(K) || '{}');
let extra = JSON.parse(localStorage.getItem(K + ':extra') || '{}');

// pasos añadidos por el usuario se cuelgan de su unidad al arrancar
D.caps.forEach((c, i) => (extra[i] || []).forEach(b => c.items.push({ b, check: false, _extra: true })));

const $ = s => document.getElementById(s);
$('rls').innerHTML = D.reglas.map(r => '<li>' + r + '</li>').join('');
document.title = D.meta.titulo + ' — ' + D.meta.sub;

const id = (c, p) => 'c' + D.caps[c].n + 'p' + p;
const txt = (c, p) => (mine[id(c, p)] || '');
const marcado = (c, p) => mine[id(c, p) + ':ok'] === 1;
const done = (c, p) => D.caps[c].items[p].check ? marcado(c, p) : txt(c, p).trim().length > 40;

function pintarCaps() {
  $('caps').innerHTML = D.caps.map((c, i) => {
    const t = c.items.length, d = c.items.filter((_, j) => done(i, j)).length;
    return '<button class="cap' + (i === ci ? ' on' : '') + '" onclick="irCap(' + i + ')"><b>' +
      (c.n ? c.n + '. ' : '') + c.t + '</b><span>' + d + ' de ' + t +
      '</span><div class="mini"><i style="width:' + (t ? d / t * 100 : 0) + '%"></i></div></button>';
  }).join('');
  const T = D.caps.reduce((a, c) => a + c.items.length, 0);
  const Dn = D.caps.reduce((a, c, i) => a + c.items.filter((_, j) => done(i, j)).length, 0);
  $('gb').style.width = (T ? Dn / T * 100 : 0) + '%';
  $('gp').textContent = Dn + ' / ' + T;
}

function pintar() {
  const c = D.caps[ci], it = c.items[pi] || { b: '' };
  $('head').innerHTML = '<h2>' + (c.n ? c.n + ' — ' : '') + c.t + '</h2>' +
    (c.song ? '<p class="song">' + c.song + '</p>' : '') +
    (c.c ? '<p class="cnt">' + c.c + '</p>' : '') +
    '<p class="fn">' + c.fn + '</p>' +
    '<details open><summary>Reglas de esta unidad</summary><ul>' +
    c.reglas.map(r => '<li>' + r + '</li>').join('') + '</ul></details>';
  $('pos').textContent = 'Paso ' + (pi + 1) + ' de ' + c.items.length;
  $('dots').innerHTML = c.items.map((_, j) =>
    '<button class="dot' + (done(ci, j) ? ' done' : '') + (j === pi ? ' now' : '') +
    '" onclick="irP(' + j + ')"></button>').join('') +
    (D.ampliable ? '<button class="add" onclick="añadir()">+ paso</button>' : '');

  $('ref').innerHTML = (it.b ? '<div class="brief"><b>Qué toca aquí.</b> ' + it.b + '</div>' : '') +
    (it.t ? '<div class="reftxt"></div>' : '');
  if (it.t) $('ref').querySelector('.reftxt').textContent = it.t;
  $('rlab').textContent = it.t ? 'El borrador — solo referencia' : 'La consigna';
  $('rw').textContent = it.w ? it.w + ' palabras' : '';
  $('tags').innerHTML =
    (it.s || []).map(s => '<span class="tag s">no toques: «' + s + '»</span>').join('') +
    (it.d || []).map(d => '<span class="tag">' + d + '</span>').join('');

  $('chk').style.display = it.check ? 'flex' : 'none';
  $('chkin').checked = marcado(ci, pi);
  $('ta').value = txt(ci, pi);
  cw();
  pintarCaps();
}

function cw() {
  const n = $('ta').value.trim().split(/\s+/).filter(Boolean).length;
  $('mw').textContent = n + ' palabras';
}

function guardar(msg) {
  localStorage.setItem(K, JSON.stringify(mine));
  $('st').textContent = (msg || 'guardado ') + new Date().toLocaleTimeString('es-ES');
  clearTimeout(window._t); window._t = setTimeout(guardarFS, 1500);
}

$('ta').addEventListener('input', e => { mine[id(ci, pi)] = e.target.value; cw(); guardar(); pintarCaps(); });
$('chkin').addEventListener('change', e => { mine[id(ci, pi) + ':ok'] = e.target.checked ? 1 : 0; guardar(); pintarCaps(); });

function irCap(i) { ci = i; pi = 0; pintar(); scrollTo(0, 0); }
function irP(j) { pi = j; pintar(); }
function mov(d) {
  const c = D.caps[ci]; let p = pi + d;
  if (p < 0) { if (ci > 0) { ci--; p = D.caps[ci].items.length - 1; } else p = 0; }
  else if (p >= c.items.length) { if (ci < D.caps.length - 1) { ci++; p = 0; } else p = c.items.length - 1; }
  pi = p; pintar(); scrollTo(0, 0);
}
function hecho() {
  const it = D.caps[ci].items[pi];
  if (it.check && !marcado(ci, pi)) { mine[id(ci, pi) + ':ok'] = 1; guardar(); }
  mov(1);
}
function añadir() {
  const b = prompt('¿Qué es este paso nuevo? (una frase)');
  if (!b) return;
  (extra[ci] = extra[ci] || []).push(b);
  localStorage.setItem(K + ':extra', JSON.stringify(extra));
  D.caps[ci].items.push({ b, check: false, _extra: true });
  pi = D.caps[ci].items.length - 1; pintar();
}
addEventListener('keydown', e => {
  if (e.target.tagName === 'TEXTAREA') return;
  if (e.key === 'ArrowLeft') mov(-1);
  if (e.key === 'ArrowRight') mov(1);
});

const slug = s => s.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
function md(c, i) {
  const l = c.items.map((it, j) => {
    const t = txt(i, j).trim();
    if (!t && !(it.check && marcado(i, j))) return '';
    const cab = it.b ? '## ' + it.b + (it.check ? (marcado(i, j) ? ' — hecho' : '') : '') + '\n\n' : '';
    return cab + t;
  }).filter(Boolean);
  if (!l.length) return '';
  return '# ' + (c.n ? c.n + ' — ' : '') + c.t + '\n\n' +
    (c.song ? c.song + '\n\n' : '') + (c.c ? c.c + '\n\n' : '') + l.join('\n\n') + '\n';
}
function nombre(c) { return (c.n ? String(c.n).padStart(2, '0') + '-' : '') + slug(c.t) + '.md'; }

async function conectar() {
  if (!window.showDirectoryPicker) { alert('Tu navegador no permite esto. Usa Chrome en el Mac, o el botón «Exportar».'); return; }
  try {
    dir = await showDirectoryPicker({ mode: 'readwrite' });
    $('fsb').textContent = 'Carpeta conectada ✓';
    $('st').textContent = 'guardando en tu carpeta'; guardarFS();
  } catch (_) { }
}
async function guardarFS() {
  if (!dir) return;
  try {
    for (let i = 0; i < D.caps.length; i++) {
      const b = md(D.caps[i], i); if (!b) continue;
      const f = await dir.getFileHandle(nombre(D.caps[i]), { create: true });
      const w = await f.createWritable(); await w.write(b); await w.close();
    }
    $('st').textContent = 'guardado en tu carpeta · ' + new Date().toLocaleTimeString('es-ES');
  } catch (e) { $('st').textContent = 'no pude escribir en la carpeta'; }
}
function exportar() {
  const b = md(D.caps[ci], ci) || '(vacío)';
  const a = document.createElement('a');
  a.href = URL.createObjectURL(new Blob([b], { type: 'text/markdown' }));
  a.download = nombre(D.caps[ci]); a.click();
}
pintar();
