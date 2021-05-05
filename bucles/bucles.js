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

console.log(todosLosNumeros);

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

for(let indice = 0; indice < largoDelArray; indice++ ){

    console.log(dias[indice])

}



