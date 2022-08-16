const Productos = [
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
    descripcion: "Es el punto máximo del Circuito Chico, una hermosa vista del lago y el hotel Llao Llao a lo lejos."}];

    const card1 = (fotos) => {
      const col = document.createElement("div");
      col.className = "row";
    
    const contenido = ` 
    <div class="card" style="width: 18rem">
    <img src="${fotos.foto}" class="card-img-top">
      <div class="card-body">
      <h1 class="card-title">${fotos.titulo}</h1>
        <h1 class="card-title">${fotos.titulo}</h1>
        <p class="card-text">${fotos.descripcion}</p>
      </div>
      <div class="d-grid gap-2">
      <button class="btn btn-secondary" type="button">Medida: ${fotos.medidaGrande}    $${fotos.precio40x30}</button>
      <button class="btn btn-secondary" type="button">Medida: ${fotos.medidaChicha}    $${fotos.precio20x30}</button>
      <button class="btn btn-secondary" type="button">Papel:  ${fotos.papelPremium}     $${fotos.precioPapelPremium}c/u</button>
      <button class="btn btn-secondary" type="button">Papel:  ${fotos.papelEstandar}    $${fotos.precioPapelEstandar}c/u</button>
    </div>
    </div> `;
    
    col.innerHTML = contenido;
    document.querySelector ("#fotos").append (col);
    
    };
    
    for (const fotos of Productos) {
      card1(fotos);
      
    }

        
