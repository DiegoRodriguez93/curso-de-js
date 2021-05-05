/* var global = undefined; // si se puede acceder
let global = undefined; // no se puede acceder */

// ENTORNO DE LAS VARIABLES (SCOPE)
// JS BUSCA LAS VARIABLES Y LAS FUNCIONES EN EL ENTORNO DE EJECUCION MAS CERCANO
/* var global = 'prueba de variable global';

function prueba() {
  var adentroDePrueba = "global";
  
  var global = 'variable global definida adentro del prueba2';

  function prueba2() {
    return global;
  }

} */

// HOISTING ESTA RELACIONADO CON EL VAR
// CUANDO SE EJECUTA POR PRIMERA VEZ JS HACE UNA ELEVACION DE TODAS LAS 
// VARIABLES DEFINIDAS CON VAR, CON LET

/* 
console.log(global) // undefined
var global = 1;

console.log(global2) // es un error
let global2 = 1;

function prueba(){
    console.log(global)
    var global = 1;
    var global = 2; */

/*     if(global == 2){
        console.log('no se va a cumplir');
    } */
/* 
} */
