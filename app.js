let usuarioRegistrado = "ThiagoPani";
let contraseñaRegistrada = "thiago123";
let accesoConcedido = false

function accesoUser(){
 while (accesoConcedido != true) {
  let intentoUsuario = prompt("Hola, por favor pon tu usuario")
  let intentoContraseña = prompt("Pon la contraseña para ingresar")

  if (usuarioRegistrado === intentoUsuario && contraseñaRegistrada === intentoContraseña) {
    alert(`Bienvenido ${usuarioRegistrado}!`);
    let accesoConcedido = true;
    let bienvenida = document.querySelector("#bienvenida")
    let agregarBienvenida = document.createElement("div")
    agregarBienvenida.innerHTML = `<h2>Bienvenido!</h2>
    <h3>Su carrito contiene:</h3>`
    bienvenida.insertBefore(agregarBienvenida, bienvenida.children[1])
    break
  } else {
    alert("Usuario o contraseña incorrecta, por favor intenta nuevamente");
  }
}
}
console.log(accesoUser())


let carrito = [];
let objTienda = [
  {
    nombre: "sorrentinos",
    precio: 3000,
  },
  {
    nombre: "raviolones",
    precio: 3500,
  },
  {
    nombre: "canelones",
    precio: 4000,
  },
];

function comprarCosas() {
  while (true) {
    let mensaje = prompt(`Escriba el numero asignado para agregar al carrito las pastas que quiera:
    1: sorrentinos
    2: raviolones
    3: canelones
    0: salir`);

    if (mensaje === "0") {
      break; 
    } else if (mensaje === "1" || mensaje === "2" || mensaje === "3") {
      let producto = objTienda[parseInt(mensaje) - 1]; 
      carrito.push(producto);
      alert(`${producto.nombre} ha sido agregado al carrito.`);
      
    } else {
      alert("Opcion invalida. Por favor, elija una opcion vaalida.");
    }
  }
}
comprarCosas();

function calcularTotal(carrito) {
  const total = carrito.reduce((acumulador, producto) => acumulador + producto.precio, 0);
  return total;
}

let totalCarrito = calcularTotal(carrito);
console.log("Total del carrito: $" + totalCarrito);

console.log("Carrito de compras:", carrito);
for(c of carrito){
  let bienvenida = document.querySelector("#bienvenida")
  let contenedor = document.createElement("div")
  contenedor.innerHTML = `
  <h4>Tipo de pasta: ${c.nombre}, Precio: ${c.precio}</h4>
  `
  bienvenida.insertBefore(contenedor, bienvenida.children[2])
}
let bienvenida = document.querySelector("#bienvenida")
let mostrarTotal = document.createElement("h3")
mostrarTotal.innerHTML =`Su total es: $${totalCarrito}`
bienvenida.appendChild(mostrarTotal);


