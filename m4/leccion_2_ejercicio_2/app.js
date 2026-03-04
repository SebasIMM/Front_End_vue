window.alert("Ingrese 3 notas para calcular el promedio")
let nota1 = parseFloat(prompt("Ingrese la primera nota"))
let nota2 = parseFloat(prompt("Ingrese la segunda nota"))
let nota3 = parseFloat(prompt("Ingrese la tercera nota"))

let promedio = (nota1 + nota2 + nota3) / 3

if (promedio >= 6.0) {
  document.write("Excelente! El promedio es: " + promedio)
} else if (promedio >= 5.0) {
    document.write("El promedio es: " + promedio + ". Sigue adelante, puedes mejorar!")
} else if (promedio >= 4.0) {
    document.write("El promedio es: " + promedio + ". No te rindas, puedes hacerlo mejor!")
} else {
    document.write("Has reprobado con promedio: " + promedio + ". Continúa intentándolo")
}