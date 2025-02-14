//Aquí va tu codigo javascript

function bienvenida() {

    //para validar, se hace al final, pero lo colocamos al inicio
    let formulario = document.getElementById("formsingup")

    if(formulario.checkValidity()) {                                          //.checkValidity valida el formulario. Si el formulario es válido, hace todo lo siguiente, sino-else

    let nombre = document.getElementById("nombre").value    //.trim();   ponemos el id que hayamos puesto en el input del html
    let apellido = document.getElementById("apellidos").value    //.trim();


    let mensajeBienvenida = "Bienvenido " + nombre + " " + apellido  //mensaje de bienvenida

    document.getElementById("mensaje").textContent = mensajeBienvenida.toUpperCase()  //mensaje de bienvenida en mayúscula

    document.getElementById("formsingup").style.display = "none";   //para ocultar el formulario. 

    document.getElementById("exam").style.display = "block";  //para mostrar, seccion exam

    }                         
    else {
        document.getElementById("mensaje").textContent = "Error en formulario. Los campos son obligatorios y deben tener entre 3 y 30 caracteres."
    }
    
}

function correccionPregunta() {   //nombre que le he dado a la función del button

    let respuesta = "Sin Responder";

    if (document.getElementById("respuestaA").checked)   {                             //el ckecked indica si el botón está seleccionado
        respuesta ="A"; 
    }
    else if (document.getElementById("respuestaB").checked) {
        respuesta ="B";
    }
    else if (document.getElementById("respuestaC").checked) {
        respuesta ="C";
    
    }

    let puntuacion = 0 ;

    if (respuesta === "C") {
        puntuacion = 2;
    } else if (respuesta === "Sin Responder") {
        puntuacion = 0;
    } else {
        puntuacion = -1;
    }
    document.getElementById("resultado").textContent = "Tu puntuación es: " + puntuacion;
    








}














   




