let numeroSecreto = 0;
let intentos= 0;
let listaNumerosGenerados = [];
let numeroMaximoDesorteo = 10;

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);
   
    if (numeroSecreto ===numeroDeUsuario){
        asignarTextoElemento("p", `acertaste el numero en ${intentos} ${(intentos===1) ?"vez" : "veces"}`);
        document.getElementById("reiniciar").removeAttribute("disabled");
    } else {
        if (numeroDeUsuario > numeroSecreto){
            asignarTextoElemento("p", "El numero es menor")
        }else{
            asignarTextoElemento("p", "El numero es mayor")
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja(){
    document.querySelector("#valorUsuario").value ="";
}
function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximoDesorteo)+1;
    //si ya se sortearon todos los numeros
    console.log(listaNumerosGenerados);
    console.log (numeroGenerado);
    if (listaNumerosGenerados.length==numeroMaximoDesorteo){
        asignarTextoElemento("p", "Ya se lanzaron todos los numeros");
    }else {
        //si el numero generado esta en la lista
        if (listaNumerosGenerados.includes(numeroGenerado)){
            return generarNumeroSecreto();
        }else{
            listaNumerosGenerados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}


function condicionesInciales(){
    asignarTextoElemento ("h1","Juego del numero secreto ");
    asignarTextoElemento ("p", `Introduce un número del 1 al ${numeroMaximoDesorteo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego() {
    //limpiar caja
    limpiarCaja();
    //indicar mensaje de intervalo de numero
    //general numero aleatorio
    condicionesInciales();
    //inicializar numero de intentos
     //deshabilitar el boton del nuevo juevo
     document.querySelector("#reiniciar").setAttribute("disabled","true");
}
condicionesInciales();