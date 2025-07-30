let titulo = document.querySelector('h1');

titulo.innerHTML = 'Hora del desafio';

function consoleClickeado(){
    alert('Console fue clickeado');
}

function preguntarCiudad(){
    let respuestaCiudad = prompt('Indica una ciudad');
    alert(`Estuve en ${respuestaCiudad} y me acorde de vos!`);
}

function amorJS(){
    alert('Yo amo JS!');
}

function realizarSuma(){
    let num1 = parseFloat(prompt('Indica el primer numero'));
    let num2 = parseFloat(prompt('Indica el segundo numero'));
    let resultado = num1 + num2;

    alert(`El resultado de sumar ${num1} + ${num2} es ${resultado}`);
}