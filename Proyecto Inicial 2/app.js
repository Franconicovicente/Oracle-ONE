let numeroSecreto = 0;
let intentos = 0;
let listaNumeros = [];
let numeroMaximo = 3;

function asignarTextoElemento(elemento, texto) {
  let elementoHTML = document.querySelector(elemento);
  elementoHTML.innerHTML = texto;
}

function crearNumeroAleatorio() {
  let numeroGenerado = parseInt(Math.random() * numeroMaximo) + 1;

  if (listaNumeros.length == numeroMaximo) {
    asignarTextoElemento("p", "Ya tocaron todos los numeros posibles");
  } else {
    if (listaNumeros.includes(numeroGenerado)) {
      return crearNumeroAleatorio();
    } else {
      listaNumeros.push(numeroGenerado);
      return numeroGenerado;
    }
  }
}

function verificarIntento() {
  let numeroUsuario = parseInt(document.getElementById("valorUsuario").value);
  if (numeroUsuario === numeroSecreto) {
    asignarTextoElemento(
      "p",
      `Acertaste el numero en ${intentos} ${
        intentos > 1 ? "intentos" : "intento"
      } `
    );
    document.getElementById("reiniciar").removeAttribute("disabled");
  } else {
    if (numeroUsuario > numeroSecreto) {
      asignarTextoElemento("p", "El numero secreto es menor!");
    } else {
      asignarTextoElemento("p", "El numero secreto es mayor!");
    }
    intentos++;
  }
  limpiarCaja();
}

function limpiarCaja() {
  document.querySelector("#valorUsuario").value = " ";
}

function condicionesIniciales() {
  asignarTextoElemento("h1", "Bienvenido al juego secreto!");
  asignarTextoElemento("p", `Ingrese un numero del 1 al ${numeroMaximo} `);
  numeroSecreto = crearNumeroAleatorio();
  intentos = 1;
}
condicionesIniciales();

function reiniciarJuego() {
  limpiarCaja();
  condicionesIniciales();
  document.querySelector("#reiniciar").setAttribute("disabled", "true");
}
