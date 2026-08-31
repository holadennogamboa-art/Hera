const D = {
meta:{titulo:'El taller', sub:'VERDER — GEO para negocios', K:'taller-verder'},
ampliable:true,
reglas:[
 'Aquí el resultado lo mide otra persona: el cliente que paga. Todo se escribe como para enseñárselo.',
 'Nada se vende sin haberlo hecho antes gratis al menos tres veces.',
 'Todo diagnóstico se guarda con fecha. Sin el antes, no hay después que enseñar.',
 'Se promete visibilidad y medición, nunca posiciones ni garantías. Los sistemas cambian solos.',
 'Si no lo entiende el dueño de un bar en treinta segundos, está mal explicado.'
],
caps:[
{n:1,t:'LA OFERTA',fn:'Qué se vende exactamente. Sin esto no hay servicio, hay una idea.',
 reglas:['Una frase, sin la palabra «soluciones» y sin siglas sin explicar.','Precios escritos y con alcance cerrado. Lo que no está en el alcance, no está.'],
 items:[
  {b:'Qué es VERDER en una frase que entienda el dueño de un bar. Escribe cinco versiones y quédate con una.'},
  {b:'El problema del cliente, en sus palabras, no en las tuyas. ¿Qué le pasa hoy que no sabe que le pasa?'},
  {b:'Los tres paquetes: diagnóstico, implantación y seguimiento. Qué incluye cada uno, cuánto dura y cuánto cuesta.'},
  {b:'Lo que NO incluye el servicio. Escribirlo ahorra la mitad de los problemas.'},
  {b:'El PDF de una página: titular, problema, qué haces, qué recibe, precio, cómo se empieza.'}
 ]},
{n:2,t:'EL DIAGNÓSTICO',fn:'El método repetible: qué se le pregunta a cada asistente de IA sobre el negocio y cómo se anota la respuesta. Esto es el corazón del servicio.',
 reglas:['Las mismas preguntas para todos los clientes, siempre. Si cambian, cambian para todos y se anota la fecha.','Se guarda la respuesta literal, con fecha y sistema. Captura o texto, pero literal.','Ojo con lo que el sistema dice mal: un horario equivocado vale más como argumento de venta que un elogio.'],
 items:[
  {b:'La lista de preguntas del diagnóstico. Del tipo: «¿dónde puedo comer X en Y?», «¿está abierto ahora Z?», «¿qué opinan de Z?». Escríbelas todas.'},
  {b:'Sobre qué asistentes se mide y por qué esos. Decidirlo y no cambiarlo cada semana.'},
  {b:'La ficha de registro: qué se anota de cada respuesta (aparece / no aparece / aparece mal, cómo lo describe, qué fuente cita).'},
  {b:'Hacer el diagnóstico de un negocio real de prueba, de principio a fin, y anotar cuánto se tarda. Ese tiempo es tu coste.',check:true}
 ]},
{n:3,t:'LA INTERVENCIÓN',fn:'Lo que se hace después del diagnóstico para que el negocio aparezca mejor. El checklist que se repite en cada cliente.',
 reglas:['Cada punto del checklist tiene que poder marcarse hecho o no hecho. Nada ambiguo.','Solo se toca lo que el cliente autoriza por escrito.'],
 items:[
  {b:'Datos básicos coherentes en todas partes: nombre, dirección, teléfono, horario. ¿Dónde hay que revisarlos?'},
  {b:'La ficha del negocio: qué campos hay que rellenar y con qué texto. Cómo se describe a sí mismo importa más de lo que parece.'},
  {b:'Las fuentes que estos sistemas leen: directorios, mapas, prensa local, reseñas. Hacer la lista de dónde tiene que estar el negocio.'},
  {b:'Reseñas: qué se puede hacer de forma limpia y qué no se hace nunca. Escribir la línea roja.'},
  {b:'Contenido propio del negocio que responda a las preguntas del diagnóstico. Qué escribir y dónde ponerlo.'},
  {b:'Montar el checklist final de intervención, ordenado, para aplicarlo igual a cualquier cliente.'}
 ]},
{n:4,t:'LA VISUALIZACIÓN',fn:'Lo que hace que el cliente entienda por qué paga: ver dónde aparece, dónde no y cómo lo describen. Antes y después.',
 reglas:['Una sola pantalla. Si el cliente tiene que hacer scroll para entenderlo, está mal.','Siempre con fechas. El valor está en la comparación, no en la foto fija.','La plantilla tiene que servir para cualquier cliente sin rehacerla.'],
 items:[
  {b:'Qué muestra el informe exactamente. Escribe la lista de bloques de la página.'},
  {b:'Cómo se representa «aparece / no aparece / aparece mal» de un vistazo.'},
  {b:'El antes y el después: cómo se enseña el cambio sin trampas.'},
  {b:'Montar la plantilla HTML del informe reutilizable. Puede vivir en lab/ y aprovechar lo que ya hay.',check:true},
  {b:'Generar el informe del negocio de prueba y enseñárselo a alguien que no sepa de esto. Anotar qué no entendió.',check:true}
 ]},
{n:5,t:'MERCADO',fn:'El bloque B4 de martes y jueves: hablar con negocios de verdad. Sin esto, lo demás es un pasatiempo.',
 reglas:['Diez contactos por semana. Se cuentan, se anotan y se hace seguimiento.','Primero se enseña el diagnóstico, después se habla de dinero. Nunca al revés.','Un «no» se anota con la fecha y el motivo. Es información, no una derrota.'],
 items:[
  {b:'Lista de 30 negocios objetivo del entorno cercano: nombre, tipo, por qué encaja, contacto.'},
  {b:'El guion del primer contacto. Corto. Que se pueda decir en voz alta sin sonar a folleto.'},
  {b:'Los tres diagnósticos gratuitos: a quién, cuándo, y qué salió. Son tus casos de estudio.'},
  {b:'La propuesta enviada: a quién, qué paquete, qué precio, qué contestaron.'},
  {b:'Primer cliente de pago. Anotar aquí el día que ocurra, y qué fue lo que lo convenció.'}
 ]}
]};
