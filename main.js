
let sistema = new Sistema();       

let usuario = prompt("Ingrese su nombre").toUpperCase();
alert(usuario + " bienvenida/o a nuestro salon de estetica integral");


while (true) {
    let opc = prompt(`ingrese opcion
    1. mostrar servicio
    2. mostrar precio mas IVA
    0. salir del sistema`)
    if (opc < 0 || opc > 2) {
        alert("numero incorrecto, ingrese de nuevo")
    } else
        if (opc == "1") {
            sistema.mostrar_servicio();
        } else if (opc == "2") {
            sistema.mostrar_precio_conIva();
        }
        else if (opc == "0") {
            alert("salir")
            break;
        }
}



