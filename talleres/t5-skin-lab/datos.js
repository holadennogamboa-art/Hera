const D = {
meta:{titulo:'El taller', sub:'HERA Skin Lab · tracción', K:'taller-skin-lab'},
ampliable:true,
reglas:[
 'No se vuelve al código hasta que los datos lo pidan. El cuello de botella no es la app, es que nadie la conoce.',
 'La métrica que importa es una: personas AJENAS que completan un render. Hoy son cero.',
 'Mirar las métricas no autoriza a abrir el editor. Si los datos piden un arreglo, se anota y se hace en su bloque.',
 'No se guarda ninguna imagen de nadie. Solo metadatos. Es una decisión, no un descuido.',
 'Ante cualquier métrica sospechosamente estable, leer la función antes de creerla. Ya pasó con confidenceGrid().'
],
caps:[
{n:1,t:'EL VÍDEO 1 · «EL PORO»',fn:'15-18 s, vertical, Reels y TikTok. No vende mejora: vende restitución. El poro es el protagonista, no la herramienta.',
 reglas:['Nada de música con subidón. Silencio o tono de sala.','La cortina lenta, tres segundos mínimo. Rápida se lee como filtro; lenta, como oficio.','Piel antes que interfaz: la app no aparece hasta el segundo 11.','El primer fotograma es la portada: el macro más texturizado que haya.','La lupa 4× es el mejor plano y sigue sin usar.'],
 items:[
  {b:'0:00–0:02 · Macro extremo de piel, ya en movimiento al empezar, sin interfaz. Texto: «Toda IA te borra la cara.» Grabar el plano.',check:true},
  {b:'0:02–0:06 · La lupa 4× deslizándose despacio sobre el rostro: poros, pecas, vello. Texto: «Esto es un poro / Esto son pecas.»',check:true},
  {b:'0:06–0:11 · La cortina, lenta. Izquierda original, derecha HERA. Texto: «Un retoque no debería quitarlas.»',check:true},
  {b:'0:11–0:15 · Se abre al retrato completo. Respira. Texto: «Quince años retocando para marcas de lujo / Me hice la herramienta que me faltaba.»',check:true},
  {b:'0:15–0:18 · Logo HERA sobre marfil. «HERA Skin Lab — gratis.»',check:true},
  {b:'Permiso de las personas que salen en los retratos, si son reales. Usarlos en promoción no es lo mismo que usarlos de demo dentro de la app.',check:true},
  {b:'El pie de publicación. Está escrito en el dossier: comprobar que suena a ti y ajustarlo. Máximo tres hashtags.'},
  {b:'Publicar.',check:true},
  {b:'24 horas después: mirar el informe y anotar aquí qué pasó. Visitas, registros, renders de gente ajena.'}
 ]},
{n:2,t:'LA GENTE QUE YA ENTRÓ',fn:'Cinco registrados, dos han renderizado, dos han descargado. Todos conocidos. Esto es lo más barato que se puede hacer hoy.',
 reglas:['Se escribe de uno en uno y con el nombre. Nada de mensaje en masa.','La excusa es verdad: estaba roto y ya está arreglado. No hace falta adornarla.'],
 items:[
  {b:'Escribir a Estefani. Lo probó cuando estaba roto en móvil y no dejaba guardar.',check:true},
  {b:'Escribir a vicky. Mismo caso.',check:true},
  {b:'Escribir a los registrados que entraron y no llegaron a renderizar. Preguntar qué les frenó.'},
  {b:'Anotar qué contestaron. Es la única investigación de usuario que hay.'}
 ]},
{n:3,t:'SEGURIDAD Y MANTENIMIENTO',fn:'Lo poco que hay que tocar sí o sí, sin esperar señal de los datos.',
 reglas:['Al desplegar hay que conservar GEMINI_API_KEY y STATS_KEY. Si se pierden, la IA se apaga en silencio. Ya pasó una vez.'],
 items:[
  {b:'Rotar la clave de Gemini. Quedó visible en la configuración del servicio.',check:true},
  {b:'Comprobar que tras el despliegue la app NO muestra «Motor IA inactivo · modo local».',check:true},
  {b:'Si vuelve a aparecer un render de más de 4 minutos: reducir la imagen antes de mandarla a la IA. Anotar aquí si pasa.'}
 ]},
{n:4,t:'SOLO SI HAY SEÑAL',fn:'La lista de lo que se hará cuando los datos lo pidan. Escrita aquí para no hacerla antes de tiempo.',
 reglas:['Nada de esta unidad se empieza sin un dato que lo justifique. El dato se escribe primero.'],
 items:[
  {b:'Alineación real: estimateAlign() y estimateFlow() siguen devolviendo identidad y flujo cero. Si alguna foto mejora poco, es esto. ¿Qué dato lo justificaría?'},
  {b:'Vídeo 2, silencioso, ASMR de piel sin texto, para comparar con el 1. Solo cuando el 1 tenga datos.'},
  {b:'Reddit: r/photography, r/postprocessing, r/retouching. Terreno hostil a la autopromoción: participar de verdad. Solo cuando el vídeo indique que engancha.'},
  {b:'Stripe, cuando haya retención que lo justifique. La cuenta la tienes que crear tú con tus datos fiscales.'}
 ]}
]};
