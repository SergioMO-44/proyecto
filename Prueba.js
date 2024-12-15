const rl = require("readline-sync");
console.log("Bienvenido a nuestra AGENDA personal ");
let lista = ["Marta", "Pepe"];
let telefono = [626677764, 666572765];
let value1 = true;
while (value1) {
  let accion = rl.question(
    "¿Que quieres hacer, anadir, listar y eliminar personas, o salir? "
  );
  if (accion == "listar") {
    //for (let i = 0; i < lista.length; i++) {
    //console.log(lista);
    //console.log("Tu agenda de contactos es: " + lista[i] + ".");
    console.log(lista, telefono);
  }
  if (accion == "anadir") {
    let anadir = rl.question("Anadir contacto ");
    console.log(anadir);
    lista.unshift(anadir);
    lista = lista.sort();
    console.log(lista);
    //lista = lista.sort(i);
  }
  if (accion == "eliminar") {
    let eliminar = rl.question("¿Que contacto quieres eliminar? ");
    console.log(lista);
    let value = lista.indexOf(eliminar);
    lista.splice(value, 1);
    console.log(lista);
  }
}
if (accion == "salir") {
  console.log("Gracias por su visita, nos vemos pronto ");
  value1 = false;
}
