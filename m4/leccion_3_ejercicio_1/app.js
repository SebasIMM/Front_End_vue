window.alert("A continuación deberá ingresar 3 notas por alumno para calcular el promedio final del curso. Las ponderaciones para la Nota 1, Nota 2 y Nota 3 son respectivamente 25%, 35% y 40%.");

let cantidadAlumnos = parseFloat(prompt("Ingrese la cantidad de alumnos:"));

let notasCurso = 0;
for (let i = 0; i < cantidadAlumnos; i++) {
  let nota1 = parseFloat(prompt("Ingrese la Nota 1 del alumno " + i + ":"));
  let nota2 = parseFloat(prompt("Ingrese la Nota 2 del alumno " + i + ":"));
  let nota3 = parseFloat(prompt("Ingrese la Nota 3 del alumno " + i + ":"));
  
  let promedioAlumno = (nota1 * 0.25) + (nota2 * 0.35) + (nota3 * 0.4);
  notasCurso += promedioAlumno;
}

let promedioCurso = notasCurso / cantidadAlumnos;

document.write("El promedio final del curso es: " + promedioCurso.toFixed(2));