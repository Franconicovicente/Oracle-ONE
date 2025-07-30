let listaGenerica = [];

let listaNumerica = [1, 2, 3, 4, 5, 6];

let lenguajesDeProgramacion = ["JS", "Python", "C", "C++", "Kotlin"];

lenguajesDeProgramacion.push("Java");
lenguajesDeProgramacion.push("Ruby");
lenguajesDeProgramacion.push("GoLang");

function mostrarLista(lista) {
  console.log(lista);
}

function mostrarListaInversa(lista) {
  console.log(lista.reverse());
}

function promedioLista(lista) {
  let suma = 0;
  for (let i = 0; i < lista.length; i++) {
    suma += lista[i];
  }
  return Math.round(suma / lista.length);
}

function sumaLista(lista) {
  let suma = 0;
  for (let i = 0; i < lista.length; i++) {
    suma += lista[i];
  }
  return suma;
}

function chequearLista(lista) {
  const numMIN = Math.min(...lista);
  const numMAX = Math.max(...lista);

  return `Num max: ${numMAX} / Num min: ${numMIN}`;
}

mostrarLista(lenguajesDeProgramacion);
mostrarListaInversa(lenguajesDeProgramacion);
let promedio = promedioLista(listaNumerica);
console.log("promedio: " + promedio);

console.log(chequearLista(listaNumerica));
