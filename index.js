// variable = 'curso de js ibec 2021'; // INCORRECTA

// no puedo iniciar con numeros, no puedo incluir el guion medio

// maneras de definir nombres de archivos y de variables
// camelCase // en JS para nombres de variables, nombres de archivos
// PascalCase // en JS para nombres de classes y componentes
// SNAKE_CASE // en JS para nombrar constantes
// snake_case // no se usa en js
// kebab-case // no se usa en js

// var nombreDeLaVariable = 'curso de js ibec 2021'; // SCOPE O ENTORNO
// let nombreDeLaVariableConLet = 'curso de js ibec 2021'; // SCOPE O DEL ENTORNO

//nombreDeLaVariableConLet = 'nuevo valor'; // mutando el valor de variable VAR YL ET let

//alert(nombreDeLaVariableConLet);

//const NOMBRE_DE_LA_VARIABLE =  'curso de js ibec 2021';

// NOMBRE_DE_LA_VARIABLE = 'NUEVO VALOR'; ERROR NO SE PUEDE

//document.write('curso de js ibec 2021'); // lo muestra en el documento

//alert('alerta de curso de js ibec 2021'); // genera una alerta en el navegador

//console.log('curso de js ibec 2021 desde la consola'); // muestra en consola
//console.error('curso de js ibec 2021 desde la consola');

// TYPESCRIPT

// tipo de datos
let int = 1000; // entero
let float = 1.4; // flotante

// tipo de dato string o cadena de texto comillas
let string = "buen dia";
let string2 = " I'm Diego ";
let string4 = 'televisor 32" ';

let string3 = `hola ${string} `; // hola buen dia incoroporo un variable

let string5 = `japdoajksfj jafpjasdpofjaspdofja 
pasdfjapsdjfpo jpj dsajfpaspasdfjapsdjfpo jpj dsajfpas`; // string multilineas

// tipo de dato array o arreglo (bucles o ciclos)

let array = ["valor1", 2, "valor3", 4.4, ["valor5", "valor 5/2"]];

// tipo de dato objeto

let persona = {
  nombre: "Diego",
  apellido: "Apellido",
};

// concatenacion

let hola = "hola";
let buenDia = "buen dia";

let variableConcatenada = hola + buenDia;
variableConcatenada = hola + " " + buenDia;
variableConcatenada = `${hola} ${buenDia}`;
variableConcatenada = "hola" + " " + "buen dia";

let year = 2021;
let unoString = "1";
let unoEntero = 1;

// metodo parseInt() parseFloat() transforma una cadena de texto en numero

let suma = year + parseInt(unoString);

// metodo toString()
let toString = year.toString(); // 2021 devolveria "2021";

alert(suma);

//alert(variableConcatenada);
