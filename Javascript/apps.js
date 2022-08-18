const Productos =[
  {id: 1,
   foto: "./img/tablas.jpg",
   titulo: "Acantilados",
   precio40x30: 3500,
   precio20x30: 1600,
   precioPapelPremium: 500,
   precioPapelEstandar: 250,
   papelPremium: "Premium",
   papelEstandar: "Estandar",
   medidaGrande: "40x30",
   medidaChicha: "20x30",
  descripcion: "Los acantilados marinos de Chapadmalal, que se extienden a lo largo de más de 30 kilómetros entre Mar del Plata y Miramar." },
  /*
  {id: 2,
   foto:"./img/hornocal.jpg",
   titulo: "Hornocal",
   precio40x30: 3500,
   precio20x30: 1600,
   precioPapelPremium: 500,
   precioPapelEstandar: 250,
   papelPremium: "Premium",
   papelEstandar: "Estandar",
   medidaGrande: "40x30",
   medidaChicha: "20x30",
   descripcion: "HORNOCAL, EL CERRO DE LOS 14 COLORES."},
   {id: 3,
    foto:"./img/iguana.jpg",
    titulo: "Iguana Patagonica",
    precio40x30: 3500,
    precio20x30: 1600,
    precioPapelPremium: 500,
    precioPapelEstandar: 250,
    papelPremium: "Premium",
    papelEstandar: "Estandar",
    medidaGrande: "40x30",
    medidaChicha: "20x30",
    descripcion: "Las Iguanas, junto con los lagartos y las serpientes, comprenden dentro de los Reptiles al Orden Squamata (cuerpo con escamas).", },
    {id: 4,
    foto:"./img/lunaroja.jpg",
    titulo: "Luna Roja",
    precio40x30: 3500,
    precio20x30: 1600,
    precioPapelPremium: 500,
    precioPapelEstandar: 250,
    papelPremium: "Premium",
    papelEstandar: "Estandar",
    medidaGrande: "40x30",
    medidaChicha: "20x30",
    descripcion: "Playa Luna Roja esta ubicada a 13 km de Mar Del Plata, en la localidad de Chapadmalal. Playa, Surf, Restaurant y alojamiento." },
    {id:5,
    foto: "./img/llaollao.jpg",
    titulo: "Panoramica LLao LLao" ,
    precio40x30: 3500,
    precio20x30: 1600,
    precioPapelPremium: 500,
    precioPapelEstandar: 250,
    papelPremium: "Premium",
    papelEstandar: "Estandar",
    medidaGrande: "40x30",
    medidaChicha: "20x30",
    descripcion: "Es el punto máximo del Circuito Chico, una hermosa vista del lago y el hotel Llao Llao a lo lejos."}*/]

    const card1 = (fotos) => {
      const col = document.createElement("div");
      col.className = "row";  
    
    const contenido = ` 
    <div class="card" style="width: 18rem">
    <img src="${fotos.foto}" class="card-img-top tabla">
      <div class="card-body text-center ">
        <h1 class="card-title">${fotos.titulo}</h1>
        <p class="card-text">${fotos.descripcion}</p>
      </div>
      <div  class="d-grid gap-4 ">
      <button id= "medidaGrande" class="btn btn-secondary" type="button" value="">Medida: ${fotos.medidaGrande}    $${fotos.precio40x30}</button>
      <button id= "medidaChica" class="btn btn-secondary" type="button">Medida: ${fotos.medidaChicha}    $${fotos.precio20x30}</button>
      <button id="btnPapelPremium" class="btn btn-secondary" type="button">Papel:  ${fotos.papelPremium}     $${fotos.precioPapelPremium}c/u</button>
       <p id="mensajePremium"></p>
      <button id="btnPapelEstandar" class="btn btn-secondary" type="button">Papel:  ${fotos.papelEstandar}    $${fotos.precioPapelEstandar}c/u</button>
      <p id="mensajeEstandar"></p>
    </div>
    
    </div> `;
    
    col.innerHTML = contenido;
    document.querySelector ("#fotos").append (col);
    
    };
    
    for (const fotos of Productos) {
      card1(fotos);
    }
  
    let btnMedidaGrande = document.getElementById ("medidaGrande");
    btnMedidaGrande.onclick = ()=>(alert("La medida elegida es 40x30"));
    
    let btnMedidaChica = document.getElementById ("medidaChica");
    btnMedidaChica.onclick = () => (alert("La medida elegida es de 20x30 y su precio es de $1600"));

    
    
    
    
    let btnPapelPremium = document.getElementById ("btnPapelPremium");
    btnPapelPremium.addEventListener ("click", papelP);
   
  function papelP (){
    let mensaje = document.getElementById ("mensajePremium")
    mensaje = alert("Haz Elegido el Papel Premium");
  }

  let btnPapelEstandar = document.getElementById ("btnPapelEstandar");
  btnPapelEstandar.addEventListener("click", papelE);

  function papelE (){
    let mensaje = document.getElementById ("mensajeEstandar");
    mensaje = alert("Haz Elegido Papel Estandar");
   }
   
