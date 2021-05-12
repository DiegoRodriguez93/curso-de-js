// con los bucles llamados for
// el bucle for recibe 3 parametros divididos por ;
// el primer paramentro es un valor inicial
// el segundo paramentro es una condicion para detenerse
// el tercer parametros es una condicion creciente o decreciente

let todosLosNumeros = 0;

for (let i = 0; i <= 10; i = i + 1) {
  //0 + 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10;
  /* console.log(i) */
  todosLosNumeros += i; //`${i}, `;
}

/* console.log(todosLosNumeros); */

// UTILIZANDO FOR PARA ARREGLOS DE DATOS

// los valores estan identificados con indices

const dias = [
  "Lunes" /* indice 0 */,
  "Martes" /* indice 1 */,
  "Miercoles" /* indice 2  */,
  "Jueves"/* indice 3 */,
  "Viernes"/* indice 4 */,
  "Sabado"/* indice 5 */,
  "Domingo"/* indice 6 */,
];

 let largoDelArray = dias.length // 7
/* 
 for(let indice = 0; indice < largoDelArray; indice++ ){

    console.log(dias[indice])

}   */

// foreach

const alumnos = [
  ['Jorge', 'JS1', 'Montevideo', 7], // indice o index 0
  ['Julian', 'JS1', 'Salto', 8], // index 1
  ['Ana', 'JS2', 'Canelones', 9], // index 2
  ['Pedro', 'JS2', 'Maldonado', 4] // index 3
];

// como crear un alumno mas
alumnos.push(['Luis', 25, 'San Jose', 10]);


// La funcion dentro del foreach va a recibir 3 argumentos
// el primer parametro es el elemento individual dentro del array
// el segundo es el valor del indice o el index
// el tercero es el array original

var alumnosAprobados = [];
var alumnosDesaprobados = [];

/* alumnos.forEach(function(alumno){ // function(alumno, index, array)

  // array[2][0] == 'Ana' //ejecutar algo

  let nombre = alumno[0];
  let nota = alumno[3];

  if(nota >= 7){

    alumnosAprobados.push(nombre);

  }else{

    alumnosDesaprobados.push(nombre);

  }

}); */

/*   console.log('Alumno:', alumno);
  console.log('Indice:', index);
  console.log('Array Original:', array); */

/* console.log('Alumnos aprobados', alumnosAprobados);
console.log('Alumnos desaprobados', alumnosDesaprobados); */

/* alumnos.forEach(() => {

}) */



// while

/* let i = 0;

while(i < 10){ // true

  console.log(i);
  i++;

} */
