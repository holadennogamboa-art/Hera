const D = {
meta:{titulo:'El taller', sub:'Verde agua · el umbral', K:'taller-va-umbral',
 reflabel:'Lo que grabaste corriendo — solo referencia'},
reglas:[
 'Esto no se inventa: se reescribe. A la izquierda está lo que dijiste corriendo el 4 de septiembre.',
 'Nadie toca a Darío. Ni la cámara ni un personaje.',
 'La muerte, sin método y sin objeto. No se ve cómo pasa.',
 'La respiración es la portadora. Silencio fabricado partido por un solo sonido.',
 'Empieza en blanco y negro. El COLOR entra cuando Darío deja de mirar a los turistas: el color es la vida de otros. Al morir, drena y vuelve al BYN en la aérea.',
 'Suena «Like a Prayer» en el cover de Miley Cyrus. Un cover, porque esta serie va de contar la versión de otro. La canción vive en la CARRERA y se corta con la última inhalación: la muerte no tiene música, la pierde.',
 'Prohibido corregir mientras se escribe. Si algo falla, [revisar: …] y adelante.'
],
ampliable:true,
caps:[
{n:1,t:'EL UMBRAL',
 song:'«Like a Prayer» — Miley Cyrus, cover de Madonna (1989)',
 c:'Episodio 1 · secuencia de apertura',
 fn:'Darío entra en el Retiro y empieza a correr. Todavía no pasa nada, y esa es la idea: el espectador tiene que creer que está viendo una mañana cualquiera.',
 reglas:['Aquí no hay ni un indicio de lo que va a pasar. Ni música que avise, ni plano que se detenga de más.','Todo lo que se cruza es de otros: la alegría es ajena y se ve desde fuera.','Es la última vez que el mundo está entero.'],
 items:[
  {t:"Logro entrar al retiro. Siento de inmediato que algo cambia completamente. Dejas de estar de donde venías.",
   d:["el umbral es físico"], s:["Dejas de estar de donde venías"], w:20},
  {t:"Me recibe un grupo de turistas típicos con su mochila y su vestuario, esos que están preparados para cualquier cambio, o como te sorprenda el día.",
   d:["gente preparada para todo, salvo para esto"], s:[], w:26},
  {t:"Me detiene de tirón una pelota que se atraviesa en mi camino. Un niño y su padre jugando; por segundo pude oler la alegría ajena. Le pasó la pelota por su par.",
   d:["un padre y un hijo, en una serie sobre padres"], s:["oler la alegría ajena"], w:31},
  {t:"Y enseguida, un grupo de amigos en césped y su manta de picnic con tantos patrones y texturas.",
   d:["patrones y texturas — es lo que se disfigura después"], s:[], w:19},
  {t:"Son segundos, porque desde el tirón arranque y cada escena alrededor se va disfigurando.",
   d:["la gramática visual del arranque"], s:["se va disfigurando"], w:15}
 ]},

{n:2,t:'LA MONTAÑA',
 song:'—',
 c:'La pausa antes de que se rompa',
 fn:'Darío se detiene delante de la Montaña de los Gatos. Es la única vez que para, y sin saberlo está mirando la serie entera: una cosa viva que pierde la forma, sostenida por una estructura de hormigón detrás.',
 reglas:['No se explica el símbolo. Se enseña y se sigue corriendo.','La montaña y el edificio están en el mismo plano, o no vale.','Si en la escena aparece la palabra «metáfora», está mal escrita.'],
 items:[
  {t:"Hago una pausa, ya que en cuanto veo esa figura imponente. Necesito detenerme para observar su atuendo actual: un montículo de piedra con grutas, vegetación frondosa, flores de temporada y pequeñas figuras de animales en su base.",
   d:["la única parada de toda la secuencia"], s:["su atuendo actual"], w:36},
  {t:"Tan duro. Tan fuerte, tan bruto. Mientras que ella a veces tan salvaje, pero nunca pierde la pose.",
   d:["el edificio contra la montaña"], s:["tan bruto","nunca pierde la pose"], w:18},
  {t:"En agosto sueña estar. No están cuidadas. Pero hoy están salvajes. Verdes, pero salvajes. Perdía un poco la forma. Pero siento que todo está pensado para que ya pierda las formas. Que el edificio de atrás las mantenga.",
   d:["la tesis: la contención","Carlos y Darío"], s:["Verdes, pero salvajes","Que el edificio de atrás las mantenga"], w:38}
 ]},

{n:3,t:'EL DESPLOME',
 song:'«Like a Prayer» — se corta aquí, con la última inhalación',
 c:'Sin método. Sin objeto.',
 fn:'Lo que se siente desde dentro cuando el cuerpo deja de responder. Lo grabaste tú, sin saber que estabas grabando la muerte de Darío.',
 reglas:['Sin método y sin objeto: no se ve qué pasa, se ve lo que él percibe.','La respiración es la portadora hasta que se corta.','El giro de 360 va antes de la aérea. No es la cámara: es él.','Ni una palabra de Carlos todavía.'],
 items:[
  {t:"Este es el momento. La canción es un cover con respecto a la original. Completamente.",
   d:["aquí la canción todavía suena","se cortará con la inhalación"], s:[], w:15},
  {t:"Estoy en un momento… casi 100… con los pulmones… someterse a sangre completamente.",
   d:["el cuerpo llevado al límite"], s:["someterse a sangre"], w:13},
  {t:"Tal vez tarde mucho, tal vez también se corta la cuerda… el ruido, el giro.",
   d:["el corte de sonido"], s:["se corta la cuerda","el ruido, el giro"], w:15},
  {t:"Creo que ya voy arriba. Y estas imágenes en 360 es lo último que percibo.",
   d:["el relevo a la aérea empieza dentro de él"], s:["ya voy arriba","es lo último que percibo"], w:16}
 ]},

{n:4,t:'EL RELEVO',
 song:'—',
 c:'Nadie toca a Darío',
 fn:'La cámara sube. Cuando ya no hay cuerpo en cuadro, entra la voz de Carlos hablándole a Crónica. El relevo es del relato, no del cuerpo.',
 reglas:['Nadie se acerca. Nadie lo toca. Ni un transeúnte, ni una ambulancia en cuadro.','La voz entra cuando el cuerpo ya no se ve. Ni un segundo antes.','Carlos le habla a Crónica, no al espectador.','De cómo suenen sus primeras frases sale el tono de los seis episodios.'],
 items:[
  {b:"La subida: cuántos segundos aguanta el plano alto, y qué se sigue oyendo del parque mientras sube."},
  {b:"Las primeras frases de Carlos a Crónica. Escribe cinco versiones antes de quedarte con una."},
  {b:"Lo primero que Carlos decide NO contar. Aquí empieza su versión, y una versión se define por lo que omite."}
 ]}
]};
