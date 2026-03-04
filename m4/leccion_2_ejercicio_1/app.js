let diametro = prompt("Introduce el diametro de la circunferencia");
let radio = diametro / 2;
let area = Math.PI * Math.pow(radio, 2);

window.alert("El valor del área de la circunferencia de diametro " + diametro + " es igual a " + area.toFixed(2))

// Otra forma de mostrar el resultado, en el HTML
resultado = document.getElementById("resultado")
resultado.innerHTML = "El valor del área de la circunferencia de diametro " + diametro + " es igual a " + area.toFixed(2)

