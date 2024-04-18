var nombre = document.getElementById("nombre");
var apellido = document.getElementById("apellido");
var legajo = document.getElementById("legajo");
var mail = document.getElementById("mail");
var error = document.getElementById("error");
var valido = document.getElementById("valido");


var form = document.getElementById('formularioDatos');
var formularioMaterias = document.getElementById('formularioMaterias');

var materia = document.querySelector('.materia');
var nota = document.querySelector('.nota');
var errorMaterias = document.getElementById("errorMaterias");
var validoMaterias = document.getElementById("validoMaterias");
var promedio = document.getElementById("promedio");



emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

function calcularPromedio(){
    promedio.innerHTML = "";
    var notas = [];
    var suma = 0;
    var j = 0
    for(var i=0; i<5; i++){
        j++;
        notas[i] = parseInt(document.getElementById('nota'+ j).value);
        console.log(notas[i]);
        suma  = suma + notas[i];
    }

    promedio.innerHTML = "El promedio de notas es: " + suma/5; 
}

form.addEventListener('submit', function (evt) {

    evt.preventDefault();

    var mensajeError = [];
    var mensajeValido = '';
    valido.innerHTML = "";

    if (nombre.value === null || nombre.value === '') {
        mensajeError.push("Nombre no valido");
    }

    if (apellido.value === null || apellido.value === '') {
        mensajeError.push("Apellido no valido");
    }

    if (legajo.value == null || legajo.value === '') {
        mensajeError.push("Legajo no valido");
    }

    /*if (mail.value == null || mail.value === '') {*/
    if(!emailRegex.test(mail.value)){
        mensajeError.push("Mail no valido");
    }

    if (mensajeError.length == 0) {
        form.reset();
        mensajeValido = 'Formulario valido';

        valido.innerHTML = mensajeValido;
    }
    
    error.innerHTML = mensajeError.join(', ');
});

formularioMaterias.addEventListener('submit', function (evt) {

    evt.preventDefault();

    var mensajeError = [];
    var mensajeValido = '';
    validoMaterias.innerHTML = "";

    if (materia.value === null || materia.value === '') {
        mensajeError.push("No ingreso materias en todos los campos");
        console.log("error");
    }

    if (nota.value === null || nota.value === '') {
        mensajeError.push("No ingreso notas en todos los campos");
        console.log("error");
    }

    if(mensajeError.length == 0){
        calcularPromedio();
        formularioMaterias.reset();
        mensajeValido = 'Formulario Valido';
        validoMaterias.innerHTML = mensajeValido;
        
    }

    errorMaterias.innerHTML = mensajeError.join(', ');
});