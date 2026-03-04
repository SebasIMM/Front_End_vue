window.alert("Ingrese 3 números enteros");

let listaNumeros = [];

for (let i = 0; i < 3; i++) {
  let contador = i + 1;
  let numero = parseFloat(prompt("Ingrese el número " + contador + ":"));
  listaNumeros.push(numero);
}

do {
  n = 0;
  for (let i = 0; i < listaNumeros.length - 1; i++) {
    if (listaNumeros[i] > listaNumeros[i + 1]) {
      temp = listaNumeros[i];
      listaNumeros[i] = listaNumeros[i + 1];
      listaNumeros[i + 1] = temp;
      n = i;
    }
  }
  } while (n != 0);

if (listaNumeros[0] == listaNumeros[listaNumeros.length - 1]) {
  window.alert("Los 3 números son iguales");
} else {
  document.write("El menor de los números es " + listaNumeros[0]);
  document.write("<br>El mayor de los números es " + listaNumeros[listaNumeros.length - 1]);
}
