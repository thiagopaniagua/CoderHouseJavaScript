const verCarrito = document.getElementById("mostrarCarrito")
const modalContainer = document.getElementById("modal-container")
let carrito = JSON.parse(localStorage.getItem("carrito"))  || [];
let objTienda = [
  { id: 1,
    img: "https://imag.bonviveur.com/sorrentinos-rellenos-de-jamon-y-queso-con-salsa-marinara.jpg",
    nombre: "sorrentinos",
    precio: 3000,
  },
  { id: 2,
    img:"https://img-global.cpcdn.com/recipes/fbbfd255c5df504d/680x482cq70/raviolones-de-carne-foto-principal.jpg",
    nombre: "raviolones",
    precio: 3500,
  },
  { id: 3,
     img: "https://s1.eestatic.com/2023/06/23/cocinillas/recetas/pasta-y-arroz/773683200_234196403_1706x960.jpg",
    nombre: "canelones",
    precio: 4000,
  },
];

const tienda = document.getElementById("tienda");

objTienda.forEach((object) => {
  let divCard = document.createElement("div");
  let buttonId = `btn-${object.id}`; // Genera un ID único para cada botón
  divCard.innerHTML = `
    <div class="card" style="width: 18rem;">
      <img src="${object.img}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${object.nombre}</h5>
        <p class="card-text">${object.precio}</p>
        <a href="#" class="btn btn-primary" id="${buttonId}">comprar</a>
      </div>
    </div>
  `;
  tienda.append(divCard);

  const btn = document.getElementById(buttonId); // Obtén el botón actual por su ID único
  btn.addEventListener("click", () => {
    carrito.push({
      id: object.id,
      img: object.img,
      nombre: object.nombre,
      precio: object.precio
    });
    console.log(carrito);
    guardadoLocal()
  });
});

verCarrito.addEventListener("click", () =>{
  modalContainer.innerHTML = "";
  modalContainer.style.display = "grid"
  const modalHeader = document.createElement("div")
  modalHeader.className = "modal-header"
  modalHeader.innerHTML = `
  <h1 class="modal-tittle">Mi Carrito</h1>
  <button type="button" class="btn-close" aria-label="Close" id="closeButton"></button>
  `;
  modalContainer.append(modalHeader);
  closeButton = document.getElementById("closeButton");
  closeButton.addEventListener("click", ()=>{
    modalContainer.style.display = "none";
  });


  carrito.forEach((object)=>{
  let carritoContent = document.createElement("div")
  carritoContent.className = "container"; // Agrega una clase "container" al contenedor principal

  // Crea una fila y columnas Bootstrap para organizar el contenido
  carritoContent.innerHTML = `
    <div class="row text-center">
      <div class="col-4">
        <img src="${object.img}" alt="${object.nombre}">
      </div>
      <div class="col-4">
        <h3>${object.nombre}</h3>
      </div>
      <div class="col-4">
        <p>Precio: $${object.precio}</p>
      </div>
    </div>
  `;
  modalContainer.append(carritoContent)
  });
  
  const total = carrito.reduce((acum, pro)=> acum + pro.precio, 0);
  const totalm = document.createElement("div")
  totalm.className = "total-content"
  totalm.innerHTML = `<h3>El total de su compra: ${total}</h3>`;
  modalContainer.append(totalm)
});

const eliminateObjt=() =>{
  const encontrarId = carrito.find((object)=> object.id);
  carrito = carrito.filter((carritoId)=>{
    return carritoId !== encontrarId;
  })
};

const guardadoLocal = ()=>{
 localStorage.setItem("carrito", JSON.stringify(carrito));
 
};

JSON.parse(localStorage.getItem("carrito"))




