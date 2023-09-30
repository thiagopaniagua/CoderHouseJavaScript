let usuarioRegistrado = "ThiagoPani";
let contraseñaRegistrada = "thiago123";
let accesoConcedido = false

while (accesoConcedido != true) {
  let intentoUsuario = prompt("Hola, por favor pon tu usuario")
  let intentoContraseña = prompt("Pon la contraseña para ingresar")

  if (usuarioRegistrado === intentoUsuario && contraseñaRegistrada === intentoContraseña) {
    alert(`Bienvenido ${usuarioRegistrado}!`);
    let accesoConcedido = true;
    console.log("Estas logueado!") 
    break
  } else {
    alert("Usuario o contraseña incorrecta, por favor intenta nuevamente");
  }
}





