
//Arrays
let productos = ["silla1", "silla2", "silla3", "silla4", "silla 5", "silla6"];
alert( productos ); // silla1,silla2,silla3,silla4,silla5,silla6

//FUNCTION:
function calcularCostoTotal() {
  const cantidadDeProductos = parseInt(
  prompt("Ingrese la cantidad de productos:")
  );
  let costoTotal = 0;
  //FOR:
  for (let i = 1; i <= cantidadDeProductos; i++) {
  const precioProducto = parseInt(
  prompt(`Ingrese el precio del producto ${i}:`)
  );
  //IF-ELSE:
  if ((precioProducto) && precioProducto > 0) {
  costoTotal += precioProducto;
  } else {
  alert("El precio ingresado es inválido. Inténtelo nuevamente.");
  i--;
  }
  }
  alert(`El costo total de los productos es: $${costoTotal}`);
  }
  calcularCostoTotal();
  let confirmar=confirm ("Confirma su compra")
  if(confirmar==true){
  alert("En breve nos contactaremos con usted.");
  }
  else{
  alert("Gracias")
  }
  //While
  let continuar = true
  while (continuar) {
  let correo = prompt ("Ingrese su correo")
  let confirmacion = prompt("Desea cargar otro correo? (si/no)")
  if (confirmacion == "no"){
  continuar = false
  console.log("gracias")
  }
  
  }
  



