/* PROYECTO DE TOMAS CAPPELLI COMISION N° 33990 DESAFIO SIMULADOR INTERACTIVO + ARRAYS  */
// CREACION DE PRESUPUESTO POR SERVICIOS FOTOGRAFICOS //
// Utilice arrays de objetos para crear los servicios a ofrecer
const Presupuestos = [
  {id: 1, servicio: "Fotos de Productos para Redes Sociales", precio: 1500, incluye: "Un pack de 20 fotos"},
  {id: 2, servicio:"Evento Musical", precio: 2500, incluye: "Viaticos y edicion de 20 fotos"},
  {id: 3, servicio: "Evento Deportivo", precio: 3000, incluye: "Viaticos y edicion de 20 fotos"},
  {id: 4, servicio: "Fotografia de Paisaje", precio: 1000, incluye: "Un Pack de 10 fotos editadas"}]

// Sume un nuevo servicio  utilizando el metodo push // 

Presupuestos.push ({id:5, servicio: "Fotografia de Retrato" , precio: 1500, incluye: "Viaticos y 10 fotos editadas" });

//Utilizo Map para mostrar lista de Servicios //

const todosLosServicios = Presupuestos.map ((servi) => servi.servicio + " " + servi.precio + " " + "x hora" )
  
//Funcion Saludo Bienvenida //

function saludar (){
    alert ("Hola! Bienvenido a Odc-Fotografia");  
    datosUsurario = prompt ("Escribe tu nombre").toLocaleUpperCase();
    saludoBienvenida = "Hola" + " " + datosUsurario + ", a continuacion les detallaremos la lista de servicios" ;
    return saludoBienvenida 
}

//Ejecuto la funcion de Bienvenida + Listado de Servicios //

alert (saludar())
alert (todosLosServicios.join (" - \n"))

// Mediante prompt pregunto al usuario  cuantas horas y que tipo de Servicio desea contratar //
const opcionElegida = parseInt (prompt ("Eliga que tipo de servicio fotografico desea presupuestar \n 1: Fotos de Productos para Redes Sociales \n 2: Evento Musical \n 3 : Evento Deportivo \n 4: Fotografia de Paisaje \n 5: Fotografia de Retraro "));

const cantidadHorasElegidas = parseInt ( prompt ("Eliga cuantas horas desea el servicio"));

 // Utilizo la sentencia "For of" para reccorrer el Arrays de objetos traer los datos //

 for (const servicio of Presupuestos) {

// Funcion para sacar presupuesto dependiendo del serivicio y las horas elegidas  // 
  const presu = (a,b) => servicio.precio*cantidadHorasElegidas;

//Dependiendo de las opciones elegidas por el usuario imprimo por alert el presupuesto total //
  if (servicio.id == opcionElegida){
     alert (datosUsurario +"," + " te detallamos a continuacion el presupuesto : \n Servicio a contratar:" + " " + servicio.servicio + "\n Cantidad de horas:" + " " + cantidadHorasElegidas + "\n" +
     " Precio Final :" + " " +  (presu())+ "\n Incluye :"+ " " + servicio.incluye );
     alert ("Gracias por contactarnos")
}
}









/*
let servicioMasCaro = "";
let precioMasCaro  = 0;

let servicioMasBarato = "";
let precioMasBarato = 999999999999999999;

for (const producto of Presupuestos) {
  if (producto.precio > precioMasCaro)
    precioMasCaro = producto.precio;
    servicioMasCaro = producto.servicio;
  
    if (producto.precio < precioMasBarato)
    precioMasBarato = producto.precio;
    servicioMasBarato = producto.servicio;
}
console.log ("El servicio mas caro es:", servicioMasCaro, "cuesta", precioMasCaro)
console.log ("El Servicio mas barato es",servicioMasBarato, "cuesta", precioMasBarato)






  

  /*
  if (opcionElegida == 1){
    function (){
      resultado1 = horaElegidas * servicio.precio
      alert ("total de"+ resultado1)
    }
  
   }

  }














/* PROYECTO DE TOMAS CAPPELLI COMISION N° 33990 DESAFIO SIMULADOR INTERACTIVO + ARRAYS  */

// CREACION DE PRESUPUESTO POR SERVICIOS FOTOGRAFICOS //

/*
const precios = [{precioXHora: 1500, precioXEdicion: 150}]
const tipoDeServicio = ["Casamiento","Sesion de Fotos","Bautismo","Cumpleaños de 15","Evento Deportivo"]
tipoDeServicio.unshift("Arquitectura")




alert ("Elija que tipo de evento desea presupuestar");
let tipoEventos = prompt (" A: Arquitectura \n B: Casamiento \n C: Sesion de Fotos Artistica \n D: Bautismo \n F: Cumpleaños de 15 \n G: Evento deportivo").toLowerCase();

while ((tipoEventos != "a") && (tipoEventos != "b") && (tipoEventos != "c") && (tipoEventos !="d")&& (tipoEventos !="f")&& (tipoEventos !="g")){
  alert ("ingrese una opcion validad");
  tipoEventos = prompt (" A: Arquitectura \n B: Casamiento \n C: Sesion de Fotos Artistica \n D: Bautismo \n F: Cumpleaños de 15 \n G: Evento deportivo").toLowerCase();
}
let horaselegidas
while(true) {
  horaselegidas = parseInt(prompt ("Ingrese la cantidad de horas desea el servicio"));
if(!isNaN(horaselegidas) && horaselegidas != null && horaselegidas != "") {
break;}
else{
  alert ("Ingrese un numero por favor!")
} 
}
function presupuesto (){
      resultado1 = precios[0] *horaselegidas;
      return resultado1;
}
function packEdicion (){
    resultado2 = precios[1] * cantidadDeFotos;
    return resultado2;
}

if (tipoEventos == "a"){
  alert ("El costo total por el servicio de" + " " + tipoDeServicio[0] + " " + "$"+ presupuesto ()+" " +"total")
}
else if (tipoEventos == "b"){
  alert ("El costo total por el servicio de " +" "+ tipoDeServicio[1] +" "+ " " +"$"+ presupuesto ()+" " + "total")
}
else if (tipoEventos == "c"){
  alert ("El costo total por el servicio de " +" "+ tipoDeServicio[2] + " "+ " " + "$"+presupuesto ()+" " + "total")
}
else if (tipoEventos == "d"){
  alert ("El costo total por el servicio de " +" "+ tipoDeServicio[3] +" "+ " " +"$"+ presupuesto ()+" " + "total")
}
else if (tipoEventos == "f"){
  alert ("El costo total por el servicio de " +" "+ tipoDeServicio[4] +" "+ " " +"$"+ presupuesto ()+" " + "total")
} 
else if (tipoEventos == "g"){
  alert ("El costo total por el servicio de " +" "+ tipoDeServicio[5] +" "+ " " +"$"+ presupuesto ()+" " + "total")
}  
else{
  alert ("ingrese una respusta valida");
}


let pack = prompt ("Desea presupuestar el Pack Edicion de las mejores fotos? S/N").toLowerCase ()
  while(pack != "s" && pack != "n"){
    alert ("Error: Ingrese S/N para continuar")
      pack = prompt ("Desea presupuestar el Pack Edicion de las mejores fotos? S/N").toLowerCase()
  }
let cantidadDeFotos



while (pack == "s") {
cantidadDeFotos = parseInt (prompt ("ingrese la canditad de fotos que desea"));
if(!isNaN(cantidadDeFotos) && cantidadDeFotos != null && cantidadDeFotos != "") {
  break;}
  else{
    alert ("Ingrese un numero por favor!")
  } 
}


if (pack == "s"){
  alert ("Por"+ " "+ cantidadDeFotos +" " + "fotos editadas: Es un total" +" " +"$"+ packEdicion());
}
else if (pack == "n"){
  alert ("Se perdera la edicion de las mejores fotos")
}
else {
  alert ("Ingrese un numero por favor!")
}

function totalPresupuestadoCompleto (resultado1,resultado2) {
   resultado3 = resultado1+resultado2;
   return resultado3;
}

function totalPresupuestado (resultado1){
  resultado4 = resultado1;
  return resultado4
}

if (pack == "s"){
alert ("El presupuesto total  es de:" + "\n$"+totalPresupuestadoCompleto (resultado1,resultado2)+ "\nINCLUYE FOTOGRAFIA EN EL EVENTO +" +" " + cantidadDeFotos +" "+ "FOTOS EDITADAS");
alert ("Gracias por presupuestar con ODC - Fotografia")
}
else if( pack == "n"){
  alert ("El presupuesto total es de:" + "\n$"+ presupuesto() + "\nINCLUYE UNICAMENTE FOTOGRAFIA EN EL EVENTO");
  alert ("Gracias por presupuestar con ODC - Fotografia")
}
else {
  alert ("Gracias por su presupuesto con ODC - Fotografia")
}










/*

class Tienda{
  constructor(nombre, direccion, propietario, rubro){
      this.nombre = nombre;
      this.direccion = direccion;
      this.propietario = propietario;
      this.rubro = rubro;
  }
    esPropietario(nombre){
      return this.propietario == nombre;
  }
}
const tienda1 = new Tienda("Kwik-E-Mart", "Park 123", "Apu", "Almacen");
const tienda2 = new Tienda("Edna's Edibles", "PEREZ 323", "Edna Krabappel", "Panaderia");
const tienda3 = new Tienda("Springfield Mall", "Hall 231", "Mr. Burns", "Shopping");
for (let index = 0; index < 5; index++) {
  let entrada = prompt("INGRESAR NOMBRE DE PROPITARIO");
  if (tienda1.esPropietario(entrada)){
      alert(entrada + " ES PROPIETARIO DE LA TIENDA " + tienda1.nombre);
  }
  if (tienda2.esPropietario(entrada)){
      alert(entrada + " ES PROPIETARIO DE LA TIENDA " + tienda2.nombre);
  }
  if (tienda3.esPropietario(entrada)){
      alert(entrada + " ES PROPIETARIO DE LA TIENDA " + tienda3.nombre);
  }
}

*/



 






/*
class Tienda{
  constructor(nombre, direccion, propietario, rubro){
      this.nombre = nombre;
      this.direccion = direccion;
      this.propietario = propietario;
      this.rubro = rubro;
  }
  estaAbierto(hora){
      if (((hora  >= 8) && (hora  <= 12))||((hora  >= 15) && (hora  <= 19))) {
          return true;
      }
      return false;
  }
}
const tienda4 = new Tienda("33 cents Store", "Cheap 231", "Barato SRL","Ropa");


for (let index = 0; index < 3 ; index++) {

  let entrada = parseInt(prompt("INGRESAR HORA EN PUNTO"));
  if(tienda4.estaAbierto(entrada)){
      alert("LA TIENDA ESTA ABIERTA A LAS "+entrada)
  }else{
      alert("LA TIENDA ESTA CERRADA A LAS "+entrada)
  }
}


*/



/*

class tienda {
  constructor (nombre,direccion,propietario,rubo){
    this.nombre = nombre;
    this.direccion = direccion;
    this.propietario = propietario;
    this.rubro = rubo;
  }
}

let ingresados = ``

 for (let index = 0; index <= 3; index++) {
    let tienda1 =  new tienda (prompt("NOMBRE"), prompt("DIRECCION"), prompt("PROPIETARIO"),prompt("RUBRO"));
ingresados  = "Tienda: "+ tienda.nombre+ " " ,"Direccion: "+tienda.direccion+" " , "Propitario: "+tienda.propietario+" " , "rubro: "+tienda.rubro+"\n"; 
}
alert(ingresados);


*/




//obejtos



 
 








/* PROYECTO DE TOMAS CAPPELLI COMISION N° 33990 DESAFIO INCORPORANDO ARRAYS Y OBJETOS  */


/*
const ComadrejaMusicos = ["Dreja Rockera", "Dreja Punk", "Dreja Reggae", "Dreja Trapera", "Dreja dj"]; 
const ComadrejaSurferas = ["Dreja Hippie Surf", "Dreja Nerd Surf", "Dreja Facha Surf", "Dreja Mistyc Surf", "Dreja Local Surf"];
const ComadrejaPaises = ["Dreja Argentina" , "Dreja Brazilera", "Dreja Uruguaya", "Dreja Peruana", "Dreja Boliviana" ];

const horaDeTrabajo = 1500;
const horaEdicionFotos = 150;
const a = "Casamiento";
const b = "Sesion de Fotos";
const c = "Bautizmo";
const d = "Evento Deportivo";



alert ("Bienvenidos a la coleccion de NFT de las Comadrejas o tambien le podes decir Drejas")
alert ("Tenemos varios estilos, elegi cual te gustaria tener")
let tipoComadreja = prompt ("A: Comadrejas de Musicos\n B: Comadrejas Surferas\n C: Comadrejas de Paises")
*/



/*
// Obejtos//
class ComadrejaMusicos {
    constructor (nombre,edad,estilo,color,precio){
      this.nombre = nombre;
      this.edad = edad;
      this.estilo = estilo;
      this.color = color;
      this.precio = precio;
      this.info = `Me llamo ${this.nombre} tengo ${this.edad} años, me gusta el ${this.estilo} , soy de color ${this.color} y mi precio es de  ${this.precio} DRJ`;
    }
    verInfo(){
     console.log(this.info)
    }
}

//Creacion de Personajes DrejaMusicos //
let drejaRockera = new ComadrejaMusicos ("Jimmy",30, "Rock", "Negro",1);
let drejaPunk = new ComadrejaMusicos ("Ricky",22, "Punk", "Rojo",2);
let drejaReggae = new ComadrejaMusicos ("Bob",27, "Reggae", "Amarillo",3);
let drejaTrapera = new ComadrejaMusicos ("Lemmy",20, "Trap", "Azul",4);
let drejadj = new ComadrejaMusicos ("Peluca",50, "House", "Verde",5);



// Obejetos//
class ComadrejaSurferas {
  constructor (nombre,edad,estilo,color,precio){
    this.nombre = nombre;
    this.edad = edad;
    this.estilo = estilo;
    this.color = color;
    this.precio = precio;
    this.info = `Me llamo ${this.nombre} tengo ${this.edad} años, me gusta el ${this.estilo} , soy de color ${this.color} y mi precio es de  ${this.precio} DRJ`;
  }
  verInfo(){
    console.log(this.info)
   }
}
//Creacion de Personajes Drejas Surferas//
let drejaHippieSurf  = new ComadrejaMusicos ("Otto",30, "Rock", "Amarillo",1);
let drejaNerdSurf = new ComadrejaMusicos ("Siri",30, "Punk", "Rojo",2);
let drejaFachaSurf = new ComadrejaMusicos ("Ken",25, "Pop", "Azul",3);
let drejaMistycSurf = new ComadrejaMusicos ("Nicky",60, "Blues", "Negro",4);
let drejaLocalSurf = new ComadrejaMusicos ("Kelly",40, "Indie", "Celeste",5);




//Objetos//
class ComadrejaPaises {
  constructor (nombre,edad,estilo,color,precio){
    this.nombre = nombre;
    this.edad = edad;
    this.estilo = estilo;
    this.color = color;
    this.precio = precio;
    this.info = `Me llamo ${this.nombre} tengo ${this.edad} años, me gusta la ${this.estilo} , soy de color ${this.color} y mi precio es de  ${this.precio} DRJ`;
  }
  verInfo(){
    console.log(this.info)
   }
}

//Creacion de Personajes Drejas Paises//
let drejaArgentina   = new ComadrejaMusicos ("Diego",40, "Cumbia", "Amarillo",1);
let drejaBrazilera = new ComadrejaMusicos ("Ney",20, "Zamba", "Verde",2);
let drejaUruguaya  = new ComadrejaMusicos ("Wilson",50, "Candombe", "Azul",3);
let drejaPeruana  = new ComadrejaMusicos ("Ceviche", 30, "Cumbia", "Rojo",4);
let drejaBoliviana  = new ComadrejaMusicos ("Kelly",40, "Cumbia", "Verde",5);
*/










/* PROYECTO DE TOMAS CAPPELLI COMISION N° 33990 DESAFIO SIMULADOR INTERACTIVO  */

// CREACION DE PRESUPUESTO POR SERVICIOS FOTOGRAFICOS //
/*
const horaDeTrabajo = 1500;
const horaEdicionFotos = 150;
const a = "Casamiento";
const b = "Sesion de Fotos";
const c = "Bautizmo";
const d = "Evento Deportivo";

alert ("Elija que tipo de evento desea presupuestar");
let tipoEventos = prompt (" A: Casamiento \n B: Sesion de Fotos Artistica \n C: Bautizmo \n D: Cumpleaños de 15 \n D: Evento deportivo").toLowerCase();

while ((tipoEventos != "a") && (tipoEventos != "b") && (tipoEventos != "c") && (tipoEventos !="d")){
  alert ("ingrese una opcion validad");
  tipoEventos = prompt (" A: Casamiento \n B: Sesion de Fotos Artistica \n C: Bautizmo \n D: Cumpleaños de 15 \n D: Evento deportivo").toLowerCase();
}
let horaselegidas
while(true) {
  horaselegidas = parseInt(prompt ("Ingrese la cantidad de horas desea el servicio"));
if(!isNaN(horaselegidas) && horaselegidas != null && horaselegidas != "") {
break;}
else{
  alert ("Ingrese un numero por favor!")
} 
}
function presupuesto (horaDeTrabajo,horaselegidas){
      resultado1 = horaDeTrabajo*horaselegidas;
      return resultado1;
}
function packEdicion (horaEdicionFotos,cantidadDeFotos){
    resultado2 = horaEdicionFotos * cantidadDeFotos;
    return resultado2;
}

if (tipoEventos == "a"){
  alert ("El costo total por el servicio de" + " " + a + " " + "$"+ presupuesto(horaDeTrabajo,horaselegidas)+" " +"total")
}
else if (tipoEventos == "b"){
  alert ("El costo total por el servicio de " +" "+ b +" "+ " " +"$"+ presupuesto (horaDeTrabajo,horaselegidas)+" " + "total")
}
else if (tipoEventos == "c"){
  alert ("El costo total por el servicio de " +" "+ c + " "+ " " + +"$"+presupuesto (horaDeTrabajo,horaselegidas)+" " + "total")
}
else if (tipoEventos == "d"){
  alert ("El costo total por el servicio de " +" "+ d +" "+ " " +"$"+ presupuesto (horaDeTrabajo,horaselegidas)+" " + "total")
} 
else{
  alert ("ingrese una respusta valida");
}


let pack = prompt ("Desea presupuestar el Pack Edicion de las mejores fotos? S/N").toLowerCase ()
  while(pack != "s" && pack != "n"){
    alert ("Error: Ingrese S/N para continuar")
      pack = prompt ("Desea presupuestar el Pack Edicion de las mejores fotos? S/N").toLowerCase()
  }
let cantidadDeFotos



while (pack == "s") {
cantidadDeFotos = parseInt (prompt ("ingrese la canditad de fotos que desea"));
if(!isNaN(cantidadDeFotos) && cantidadDeFotos != null && cantidadDeFotos != "") {
  break;}
  else{
    alert ("Ingrese un numero por favor!")
  } 
}


if (pack == "s"){
  alert ("Por"+ " "+ cantidadDeFotos +" " + "fotos editadas: Es un total" +" " +"$"+(packEdicion(horaEdicionFotos,cantidadDeFotos)));
}
else if (pack == "n"){
  alert ("Se perdera la edicion de las mejores fotos")
}
else {
  alert ("Ingrese un numero por favor!")
}

function totalPresupuestadoCompleto (resultado1,resultado2) {
   resultado3 = resultado1+resultado2;
   return resultado3;
}

function totalPresupuestado (resultado1){
  resultado4 = resultado1;
  return resultado4
}

if (pack == "s"){
alert ("El presupuesto total es de:" + "\n$"+totalPresupuestadoCompleto (resultado1,resultado2)+ "\nINCLUYE FOTOGRAFIA EN EL EVENTO +" +" " + cantidadDeFotos +" "+ "FOTOS EDITADAS");
alert ("Gracias por presupuestar con ODC - Fotografia")
}
else if( pack == "n"){
  alert ("El presupuesto total es de:" + "\n$"+ presupuesto(horaDeTrabajo,horaselegidas) + "\nINCLUYE UNICAMENTE FOTOGRAFIA EN EL EVENTO");
  alert ("Gracias por presupuestar con ODC - Fotografia")
}
else {
  alert ("Gracias por su presupuesto con ODC - Fotografia")
}

*/





/*
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
*/

// FUNCIONES //
/*
function saludar (){
  alert ("hola toto");

}
saludar ()

function solicitarIngresado (){
  let nombreIngresado = prompt ("ingresar nombre")
  alert ("El nombre ingresado es" + nombreIngresado)
}

solicitarIngresado()

function saludo (mensaje,){
  alert (mensaje);
}

saludo ("hola toto");
*/
/*
  function decodificador (palabra1, palabra2,palabra3){
    return palabra3+ " " + palabra2 +" " + palabra1;

  }

  let l1= "hola" 
  let l2 = "toto"
  let l3 = "como estas"

  console.log (decodificador(l3,l2,l2)) 

  // scope //
*//*
  const suma = (a,b) =>  a + b ;
  console.log (suma ("toto", "toto"))
  */



//Saludar usando funciones //
/*
let entradaNombre = prompt ("Hola como te llamas?"); 

function saludar (){
  let saludo = ("hola " + " " + entradaNombre);
  return saludo;
   
}
function respuesta (){
  let respuesta = ("como estas" + " " + entradaNombre + "?");
  return respuesta; 
}
function respuesta2 (){
  let respuesta2 = (entradaNombre + "queres jugar?");
  return respuesta2;
}

  alert (saludar ()); 
  alert (respuesta());
  alert (respuesta2());
*/
// funcion suma //
/*
function suma (n1,n2,n3,n4,n5){
   let resultado = n1 + n2 + n3 + n4 + n5 ;
   document.write (resultado)
}

 suma (7,1,1,1,1);
*/
/*
alert ("vamos a sumar")
let pregunta1 = parseInt (prompt ("ingrese un numero"));
let pregunta2 = parseInt (prompt ("ingrese un numero"));

function sumar (a,b){
  resultado = a +b;
  return resultado
}


document.write (sumar (pregunta1,pregunta2));
*/

/* // Funciones con entradas y salidas // 
function entrada (){
  return prompt ("Ingrese dato");
}

function procesamiento (valor){
  return "la entrada es" + valor; 
}

function salida (valor){
  alert (valor);
}

salida (procesamiento(entrada()));
*/






// CLASE OBJETOS //
//guarda varios objetos en una sola variable
//const persona1 = { nombre: "Homero", edad: 39, calle: "Av. Siempreviva 742" }

//const persona1 = { 
 // nombre: "Homero", 
  //edad: 39, 
 // calle: "Av. Siempreviva 742" 
//}
//const persona1 = { nombre: "Homero",
  //                 edad: 39,
    //               calle: "Av. Siempreviva 742"}
// como llamarlos                   
//console.log(persona1.nombre)
//console.log(persona1.edad)
//console.log(persona1.calle)

//function Persona(nombre, edad, calle) {
  //this.nombre = nombre;
  //this.edad 	 = edad;
  //this.calle  = calle;
//}
//const persona1 = new Persona("Homero", 39, "Av. Siempreviva 742");
//const persona2 = new Persona("Marge", 36, "Av. Siempreviva 742");

//metodos//
/*
function Persona(nombre, edad, calle) {
  this.nombre = nombre;
  this.edad   = edad;
  this.calle  = calle;
  this.hablar = function(){ console.log("HOLA SOY "+ this.nombre)}
}
const persona1 = new Persona("Homero", 39, "Av. Siempreviva 742");
const persona2 = new Persona("Marge", 36, "Av. Siempreviva 742");
persona1.hablar();
persona2.hablar();
*/
/*
class Producto {
  constructor(nombre, precio) {
      this.nombre  = nombre.toUpperCase();
      this.precio  = parseFloat(precio);
      this.vendido = false;
  }
  sumaIva() {
      this.precio = this.precio * 1.21;
  }
  vender() {
      this.vendido = true;
  }
}
const producto1 = new Producto("arroz", "125");
const producto2 = new Producto("fideo", "50");
producto1.sumaIva();
producto2.sumaIva();
producto1.vender();
*/

// Arrays //








/*
// Objetos//
class Producto {
  constructor(nombre, precio) {
      this.nombre  = nombre.toUpperCase();
      this.precio  = parseFloat(precio);
      this.vendido = false;
  }
  sumaIva() {
      this.precio = this.precio * 1.21;
  }
}
//Declaramos un array de productos para almacenar objetos
const productos = [];
productos.push(new Producto("arroz", "125"));
productos.push(new Producto("fideo", "70"));
productos.push(new Producto("pan", "50"));
//Iteramos el array con for...of para modificarlos a todos
for (const producto of productos)
  producto.sumaIva();

  console.log (productos[0]);
  console.log (productos[1]);
  console.log (productos[0]);

/*
const productos = [{ id: 1, producto: "Arroz" },
                  { id: 2,  producto: "Fideo" },
                  { id: 3,  producto: "Pan" }];

for (const producto of productos) {
    console.log(producto.id);
    console.log(producto.producto);
}
*/

/*
 class animal {
     constructor(nombre,edad,color){
     this.nombre = nombre;
     this.edad = edad;
     this.color = color;
 }
 }


let perro = new animal("labrador",4,"rojo")

console.log (perro)
*/


