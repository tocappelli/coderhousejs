/* PROYECTO DE TOMAS CAPPELLI COMISION N° 33990 */
// Este código consiste en que el usuario tendrá que resolver una serie de Preguntas indicando si son Verdaderas o Falsas. Al final del código se mostraran cuantas preguntas fueron verdaderas y cuantas falas. La Temática será sobre la historia de los Mundiales. Esperemos que salga !! //


//le solicito al usuario si quiere participar //
let entrada1 = prompt ("Estas preparado para jugar con la Historia de los Mundiales? S/N").toLowerCase()
// Aqui genero un bucle por si el usuario no responde con una "S" o "N".  
while(entrada1 != "s" && entrada1 != "n"){
  alert ("Error: Ingrese S/N para continuar")
  entrada1 = prompt ("Estas preparado para jugar con la Historia de los Mundiales? S/N").toLowerCase()
}
// Genero constantes para el juego //
const pregunta1 =  "1-Ronaldo (el gordo) es el maximo goleador de los mundiales V/F ";
const correcta1 = "Bien es falso, el maximo goleador es Miroslav Klose con 16 tantos 👍";
const incorrecta1 = "No es verdadero, es falso. Es Miroslav Klose con 16 tantos 😢 ";
const pregunta2 =   "2-Uruguay fue sede de la primera copa del mundo V/F ";
const correcta2 = "Correcto, Uruguay en 1930 👍 ";
const incorrecta2 = "No es falso, es Verdadero. Uruguay fue sede de la primer copa del mundo en 1930 😢 "
const pregunta3 = "3-Maradona debuto con Argentina en el mundial de 1986 (mexico) V/F ";
const correcta3 = "Genial es falso, Maradona debuto en el mundial 1982 España 👍  ";
const incorrecta3 = "No es Verdadero, el diegote debuto en el Mundial de España de 1982 😢 ";
const pregunta4 = "4-Messi tiene 10 goles en los mundiales V/F";
const correcta4 = "Correcto es Falso, Messi tiene 6 goles 👍";
const incorrecta4 = "No es Verdadero, Messi anoto 6 goles en todos los mundiales que juego 😢"

// Si es el usario ingreso "s" o "S" al principio en entrada1 se ejecuta el juego //
if ( entrada1 == "s" ){
  alert (" Buena suerte ⚽ No olvides completar con una -V- para verdadero y una -F- para falso")
  let preguntas;    
  //Genere variables sin indicar valor ya que lo indico dentro del bucle a continuacion //
  let totalPreguntasCorrectas, totalPreguntasEquivocadas;

  do  {
      //Variables para despues mostrar la cantidad de preguntas Verdaderas y Falsas//
      totalPreguntasCorrectas = 0;
      totalPreguntasEquivocadas = 0;

      // A partir de este codigo hago lo siguiente. 
      //1ro: Hago la pregunta y si el usuario no contesta con V o F aparece un alert con error para que indique correctamente//
      //2do: Independientemente si es correcta o incorrecta la respuesta, saltara un alert con el resultado de su respuesta. //
      
      ////////////////Pregunta 1 ///////////////////////
       preguntas = prompt (pregunta1).toLowerCase ();
      while (preguntas != "v" && preguntas != "f" ){
        alert ( "Error: Debe ingresar V/F")
        preguntas = prompt (pregunta1);
      }
      if (preguntas === "f"){
        totalPreguntasCorrectas = totalPreguntasCorrectas + 1;
        alert (correcta1);
      }
      else if (preguntas === "v"){
        totalPreguntasEquivocadas = totalPreguntasEquivocadas + 1;
        alert (incorrecta1)
      }
      
      //////////////////Pregunta 2/////////////////////////
      preguntas = prompt (pregunta2).toLowerCase();
      while (preguntas != "v" && preguntas != "f" ){
        alert ( "Error: Debe ingresar V/F")
        preguntas = prompt (pregunta2);
      }
      if (preguntas ==="v"){
        totalPreguntasCorrectas = totalPreguntasCorrectas + 1;
        alert (correcta2)
      }
      else if (preguntas === "f") {
        totalPreguntasEquivocadas = totalPreguntasEquivocadas + 1;
        alert (incorrecta2)
      }
      
      //////////////////////Pregunta 3 ///////////////////////////
      preguntas = prompt (pregunta3) .toLowerCase();
      while (preguntas != "v" && preguntas != "f" ){
        alert ( "Error: Debe ingresar V/F")
        preguntas = prompt (pregunta3);
      }
      if (preguntas === "v"){
        totalPreguntasEquivocadas = totalPreguntasEquivocadas + 1;
        alert (incorrecta3);
      }
      else if (preguntas === "f"){
        totalPreguntasCorrectas = totalPreguntasCorrectas + 1;
        alert (correcta3);
      }
      
      ///////////////////// Pregunta 4 ///////////////////////////////////
      preguntas = prompt (pregunta4).toLowerCase();
      while (preguntas != "v" && preguntas != "f" ){
        alert ( "Error: Debe ingresar V/F")
        preguntas = prompt (pregunta4);
      }
      if (preguntas === "f"){
        totalPreguntasCorrectas = totalPreguntasCorrectas + 1;
        alert (correcta4)
      } 
      else if (preguntas === "v"){
        totalPreguntasEquivocadas = totalPreguntasEquivocadas + 1;
        alert (incorrecta4)
      }
      
    }
    while(false)
    // Aca se suman el resultado final + alert de agradecimiento por jugar //
      alert ("Respuestas correctas 👍 :" + " " + totalPreguntasCorrectas + " " 
      + "Respuestas incorrectas 👎 :" + " " + totalPreguntasEquivocadas);
     alert ("Gracias por participar!!")
  
}
// si entrada1 al principio el participante indico No con un N//
else if (entrada1 == "n"){
  alert ("Una pena, me hubiese encantado jugar")
}

