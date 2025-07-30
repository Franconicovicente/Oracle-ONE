function calcularIMC(altura, peso) {
  return Math.round(peso / Math.pow(altura, 2));
}

function calcularFactorial(numero) {
  let resultado = 1;
  if (numero < 0) {
    resultado = undefined;
  }
  for (let i = 2; i <= numero; i++) {
    resultado *= i;
  }
  return resultado;
}

function convertirADolar(valor) {
  return Math.round(valor / 4.8);
}

console.log(calcularIMC(1.75, 80));
console.log(calcularFactorial(4));
console.log(calcularFactorial(-1));
console.log(convertirADolar(8));
