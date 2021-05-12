
/* function calcularArea(lado1, lado2){


    alert('lado1----'+lado1)
    alert('lado2---'+lado2)

    var area = lado1 * lado2;

    return area;
}

var lado1 = 100;
var lado2 = 200;

calcularArea(lado2, lado1);


function equipoDeFutbol(nombre1, nombre2, nombre3){

    alert('El nombre1 es ' + nombre1 );
    alert('El nombre2 es ' + nombre2 );
    alert('El nombre3 es ' + nombre3 );

} */

/* equipoDeFutbol('alvaro', 'pedro', 'juan') */

function lavarseLosDientes(seLavo){ // definicion

    if(seLavo){
        return 'Se lavo los dientes';
    }else{
        return 'No se lavo los dientes';
    }
}

function desayunar(comida){

    return 'La persona desayuno: '+comida;
}

function banarme(seBano){

    if(seBano){
        return 'Se bano';
    }else{
        return 'No se bano';
    }
}

function ejecutarRutina(){
    lavarseLosDientes(true); 
    desayunar('Cereales');
    banarme(false);
}

/* const ejecutarRutina = () => {
    lavarseLosDientes(true); 
    desayunar('Cereales');
    banarme(false);
}  */

var nombre;
console.log(nombre) // undefined
nombre = 'nombre mutado o nombre cambiado';
console.log(nombre) // 'nombre mutado o nombre cambiado'

const valorDefinitivo = "valor";
// const valorDefinitivo; // no se puede

