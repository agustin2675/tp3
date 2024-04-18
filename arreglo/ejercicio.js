var arreglo = [];
var suma = 0;

const listado = document.getElementById("imprimirArreglo");

/* GENERAR ARREGLO*/

for(var i=0; i<10; i++){   
    arreglo[i] = generarValor();
}

function generarValor(){
    var min = 0;
    var max = 100;

    return parseInt(Math.random() * ((1 + max - min) + min));

}

/*tomo las clases de las etiquetas de html*/
const listadoArreglo = document.querySelector(".listadoArreglo");
const listadoEliminado = document.querySelector(".listadoEliminado");
const listadoAgregar = document.querySelector(".listadoAgregar");
const listadoOrdenadoMenor = document.querySelector(".listadoOrdenadoMenor");
const listadoOrdenadoMayor = document.querySelector(".listadoOrdenadoMayor");
const resultadoSuma = document.querySelector(".resultadoSuma");
const resultadoPromedio = document.querySelector(".resultadoPromedio");
const resultadoMenor = document.querySelector(".resultadoMenor");
const resultadoMayor = document.querySelector(".resultadoMayor");

var elementoArreglo;

/* IMPRIMIR ARREGLO*/
function imprimirArreglo(etiqueta){
    for(var i=0; i<arreglo.length; i++){
    
        var fila = document.createElement('li');
        fila.innerText = arreglo[i];
        console.log(arreglo[i]);
        etiqueta.appendChild(fila);
    }
}




imprimirArreglo(listadoArreglo);

/*SUMA DEL ARREGLO*/
for(var i=0; i<arreglo.length; i++){
    suma = suma  + arreglo[i];
}

console.log("La suma del arreglo es = " + suma);

/* IMPRESION DE LA SUMA DEL ARREGLO EN HTML*/
resultadoSuma.innerHTML = "LA SUMA DEL ARREGLO ES: " + suma;

/*PROMEDIO DEL ARREGLO*/
var promedio;

promedio = suma / arreglo.length;

console.log("El promedio es = " + promedio);

resultadoPromedio.innerHTML = "EL PROMEDIO DEL ARREGLO ES: " + promedio;

/*ENCONTRAR NUMERO MINIMO Y MAXIMO DEL ARREGLO*/
var max = 0;
var min = 100;

for(var i=0; i<arreglo.length;i++){
    if(arreglo[i] > max){
        max = arreglo[i];
    }
    if(arreglo[i]<min){
        min = arreglo[i]
    }
}

console.log("El menor numero del arreglo es: " + min + " y el mayor numero del arreglo es: " + max);

resultadoMenor.innerHTML = "EL MENOR NUMERO DEL ARREGLO ES: " + min;
resultadoMayor.innerHTML = "EL MAYOR NUMERO DEL ARREGLO ES: " + max;

/*ELIMINAR EL PRIMER Y ULTIMO ELEMENTO DEL ARREGLO*/
arreglo.shift();
arreglo.pop();

console.log("ELIMINAR EL PRIMER Y ULTIMO ELEMENTO DEL ARREGLO");
imprimirArreglo(listadoEliminado);

/*AGREGAR UN ELEMENTO AL FINAL DEL ARREGLO*/

var valorRandom = generarValor();
arreglo.push(valorRandom);
console.log("Agregar un valor al final del arreglo: ")
imprimirArreglo(listadoAgregar);


/*ORDENO DE MENOR A MAYOR*/

var mayor = 0;


for(var i=0; i<arreglo.length; i++){
    for(var j=0; j<arreglo.length; j++){
        if(arreglo[j] > arreglo[i]){
            mayor = arreglo[i];
            arreglo[i] = arreglo [j];
            arreglo[j] = mayor;
        }
    }
    
}

console.log("Ordenado de menor a mayor ");
imprimirArreglo(listadoOrdenadoMenor);

mayor = 0

/*ORDENO DE MEYOR A MENOR*/

for(var i=0; i<arreglo.length; i++){
    for(var j=0; j<arreglo.length; j++){
        if(arreglo[i] > arreglo[j]){
            mayor = arreglo[i];
            arreglo[i] = arreglo [j];
            arreglo[j] = mayor;
        }
    }
    
}

console.log("Ordenado de mayor a menor ");
imprimirArreglo(listadoOrdenadoMayor);









