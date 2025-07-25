let miNombre = "Franco";
let respuestaUsuario = prompt("¿Cuál es el lenguaje de programación que más te gusta?");
let edadUsuario = parseInt(prompt("Cual es tu edad?"));
let valor1 = 5;
let valor2 = 8;
let resultadoSuma = 0;
let resultadoResta = 0;
let i = 1;
let nota = parseInt(Math.random()*10)+1;

resultadoSuma = valor1+valor2;
resultadoResta = valor1-valor2;

console.log("Bienvenido!");
console.log(`Bienvenido ${miNombre} al juego de adivinanza!`);
console.log(`La programacion que mas te gusta es ${respuestaUsuario}`);
console.log(`El resultado de sumar ${valor1} + ${valor2} es ${resultadoSuma}`);
console.log(`El resultado de restar ${valor1} - ${valor2} es ${resultadoResta}`);
console.log(`Tu edad es ${edadUsuario} ${edadUsuario >= 18 ? 'sos mayor de edad!' : 'sos menor de edad!'}`);
console.log(`La nota es ${nota}. ${nota >= 7 ? 'Aprobado!!' : 'Desaprobado :('}`);
// alert(`Hola ${miNombre}!`);


// while (i < 11){
//     console.log(i);
//     i++;
// }
