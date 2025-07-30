function saludar() {
  console.log("Hola mundo");
}

function saludarUsuario(nombre) {
  console.log(`Hola ${nombre}`);
}

function recibirNumero(numero) {
  return numero * 2;
}

function devolverPromedio(num1, num2, num3) {
  return Math.round((num1 + num2 + num3) / 3);
}

function devolverMayor(num1, num2) {
  if (num1 > num2) {
    return num1;
  }
  return num2;
}

function devolverNumeroMultiplicado(num1) {
  return num1 * num1;
}

saludar();
saludarUsuario("Carlos");
console.log(recibirNumero(4));
console.log(devolverPromedio(10, 10, 8));
console.log(devolverMayor(13, 10));
console.log(devolverNumeroMultiplicado(4));
