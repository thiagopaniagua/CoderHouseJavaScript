const tienda = document.getElementById("tienda");
const modalBody = document.getElementById("modal-body");

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
mostrarCarrito();
const getPastas = async () =>{
  const response = await fetch("data.json");
  const data =  await response.json();
  
  data.forEach((p) => {
    let contenido = document.createElement("div");
    contenido.className = "divTienda";
    let buttonId = `btn-${p.id}`;
    contenido.innerHTML = `
      <div class="card" style="width: 18rem;">
        <img src="${p.img}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${p.nombre}</h5>
          <p class="card-text">$${p.precio}</p>
          <a href="#" class="btn btn-primary comprar-btn" id="${buttonId}">comprar</a>
        </div>
      </div>
    `;
    tienda.append(contenido);
  
    const btn = document.getElementById(buttonId);
    btn.addEventListener("click", () => {
      carrito.push({
        id: p.id,
        img: p.img,
        nombre: p.nombre,
        precio: p.precio,
      });
      Swal.fire({
        title: `¡Tus ${p.nombre} se han agregado al carrito!`,
        showClass: {
          popup: `
            animate__animated
            animate__fadeInUp
            animate__faster
          `
        },
        hideClass: {
          popup: `
            animate__animated
            animate__fadeOutDown
            animate__faster
          `
        }
      });
      guardadoLocal();
      console.log(carrito);
      mostrarCarrito(); 
    });
  });
  
};
function mostrarCarrito() {
    modalBody.innerHTML = ""; 
  
    carrito.forEach((p) => {
      let contenidoCarrito = document.createElement("div");
      contenidoCarrito.className = "container";
  
      contenidoCarrito.innerHTML = `
      <div class="row text-center contcarrito">
          <div class="col-4 pastimg">
            <img src="${p.img}" alt="${p.nombre}">
          </div>
          <div class="col-4 align-self-center">
            <h3>${p.nombre}</h3>
          </div>
          <div class="col-4 align-self-center final">
            <p>Precio: $${p.precio}</p>
            <button class="btn btn-danger eliminar-btn btnElim">X</button>
  
          </div>
        </div>
        <hr>
      `;
      modalBody.append(contenidoCarrito);
    });
    
    const total = carrito.reduce((acum, pro)=> acum + pro.precio, 0);
    const totalm = document.createElement("div")
    totalm.className = "total-content"
    totalm.innerHTML = `<h3>El total de su compra: $${total}</h3>`;
    modalBody.append(totalm)
  
    const eliminarBotones = document.querySelectorAll('.eliminar-btn');
    eliminarBotones.forEach((btn) => {
      btn.addEventListener('click', (e) => {
        const index = e.target.dataset.index;
        carrito.splice(index, 1);
        mostrarCarrito(); 
        guardadoLocal();
      });
    });
   
  }
  const compraDef = document.getElementById("compraDef")
  compraDef.addEventListener("click", () =>{
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger"
      },
      buttonsStyling: false
    });
    swalWithBootstrapButtons.fire({
      title: "¿Estas seguro de hacer esta compra?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Si, hacer la compra!",
      cancelButtonText: "No, cancelar!",
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        swalWithBootstrapButtons.fire({
          title: "Compra exitosa!",
          text: "Muchas gracias.",
          icon: "success"
        });
      } else if (
        
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire({
          title: "Cancelled",
          text: "Your imaginary file is safe :)",
          icon: "error"
        });
      }
    });
  })
  
getPastas();

  




const guardadoLocal = ()=>{
  localStorage.setItem("carrito", JSON.stringify(carrito))
};

JSON.parse(localStorage.getItem("carrito"));

