let numeroMaximo = 100;
let numeroSecreto = parseInt(Math.random() * numeroMaximo) + 1;
let numeroUsuario = 0;
let numeroIntentos = 1;
let maximosIntentos = 3;

while (numeroUsuario != numeroSecreto) {
  numeroUsuario = parseInt(
    prompt(`Me indicas un numero entre 1 y ${numeroMaximo} por favor.`)
  );

  console.log(numeroUsuario);

  if (numeroUsuario == numeroSecreto) {
    alert(
      `Acertaste, el numero es: ${numeroUsuario}. Lo hiciste en ${numeroIntentos} ${
        numeroIntentos == 1 ? "intento" : "intentos"
      }`
    );
  } else {
    if (numeroUsuario > numeroSecreto) {
      alert("El numero secreto es menor.");
    } else {
      alert("El numero es mayor.");
    }
  }

  numeroIntentos++;

  if (numeroIntentos > maximosIntentos) {
    alert(`Llegaste al numero maximo de ${maximosIntentos} intentos. El numero era ${numeroSecreto}!`);
    break;
  }
}
