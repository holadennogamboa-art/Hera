const D = {
meta:{titulo:'El taller', sub:'HERA — plataforma', K:'taller-hera'},
ampliable:true,
reglas:[
 'Un frente por bloque. No se salta de la web a Instagram a mitad de sesión.',
 'Todo lo que se toca se commitea el mismo día. Sin commit, no ha pasado.',
 'El contenido se produce en lote, nunca pieza a pieza el día de publicar.',
 'Antes de añadir algo nuevo a la web, hay que haber quitado o arreglado algo viejo.',
 'Las métricas se miran los viernes. El resto de la semana, no se miran.'
],
caps:[
{n:1,t:'AUDITORÍA',fn:'Antes de actualizar nada hay que saber qué hay. El repositorio tiene hoy seis páginas de entrada distintas y tres herramientas a medio documentar.',
 reglas:['Aquí no se arregla nada: solo se mira y se escribe lo que hay.','Cada decisión se escribe: se queda, se fusiona o se muere.'],
 items:[
  {b:'Abrir una por una las páginas de app/ (index, app, eyehera, EYEHERA, growth, lab) y anotar: qué es, si funciona y si se queda o se muere.',check:true},
  {b:'Decidir cuál es LA página de entrada canónica. Una sola. Escribir cuál y por qué.'},
  {b:'lab/ — ¿qué hace, funciona hoy, y quién lo usa? Anotar cómo se arranca.'},
  {b:'flow/ — mismo examen. Está a medias: decidir si se termina, se archiva o se integra en lab/.'},
  {b:'Escribir la lista de lo que hay que borrar. Borrar también es actualizar.'}
 ]},
{n:2,t:'WEB Y PRODUCTO',fn:'Dejar la plataforma en un estado del que no haya que disculparse cuando alguien entre por primera vez.',
 reglas:['Nada se despliega sin haberlo abierto antes en el navegador.','Un README por herramienta: qué hace y cómo se arranca. Dos párrafos bastan.'],
 items:[
  {b:'Unificar las páginas de entrada: dejar la canónica y redirigir o eliminar el resto.',check:true},
  {b:'Revisar todos los textos de la web y pasarlos a una sola voz. Escribe aquí los textos nuevos.'},
  {b:'README de lab/ — qué hace y cómo se arranca.',check:true},
  {b:'README de flow/ — lo mismo, o la nota de por qué se archiva.',check:true},
  {b:'Verificar el despliegue de verdad: abrir la URL pública, en el móvil también.',check:true},
  {b:'Revisar que la web se vea bien en modo oscuro y en pantalla de móvil.',check:true}
 ]},
{n:3,t:'CONTENIDO',fn:'La parte que hay que producir en lote los miércoles. Cuatro semanas siempre por delante.',
 reglas:['Se produce el lote entero antes de publicar el primero.','Cada pieza se guarda en el repositorio, no solo en Instagram.','La pieza que no tienes clara no se publica: se guarda para el lote siguiente.'],
 items:[
  {b:'Calendario editorial de las próximas 4 semanas: fecha, formato y tema de cada pieza.'},
  {b:'Los tres o cuatro tipos de pieza que se repiten siempre. Definirlos para no reinventar cada semana.'},
  {b:'Producir el lote de esta semana. Anotar aquí qué se ha producido y dónde ha quedado guardado.'},
  {b:'Escribir los pies de foto del lote. Todos de una vez, en el mismo tono.'}
 ]},
{n:4,t:'REDES Y GENTE',fn:'El bloque B4. Publicar, responder y hablar con personas concretas. Nunca volumen.',
 reglas:['Cuentas concretas y comentarios reales. Nada automatizado, nada masivo.','Tiempo acotado: 30 minutos y se cierra, aunque queden cosas.','Toda conversación que pueda ir a algún sitio se anota con fecha de seguimiento.'],
 items:[
  {b:'Publicar lo que toque hoy según el calendario.',check:true},
  {b:'La lista de cuentas con las que merece la pena hablar de verdad. Nombres, no números.'},
  {b:'Conversaciones abiertas y su seguimiento: con quién, de qué, cuándo hay que volver a escribir.'},
  {b:'Actualizar METRICS_TRACKER.csv con los números de la semana.',check:true}
 ]}
]};
