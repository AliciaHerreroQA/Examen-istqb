//Aquí va tu codigo javascript
function inscripcion() {
    let nombre =document.getElementById("nombre").value.trim();
    let apellidos =document.getElementById("apellidos").value.trim();
    let mensaje = "Por favor, completa todos los campos de forma correcta"

//Para que no se quede el formulario vacío
//Cambia la validación. Puedes usar document.getElementById("formsingup").checkValidity() y te comprueba de forma automatica el formulario sin tener que ver si nombre o apellidos es vacio.
//Aqui si no es valido, muestra el mensaje. No uses formsingup para mostrar el mensaje porque te va a desaparecer el formulario. Mejor crea un elemento nuevo para poner el mensaje.
if (!document.getElementById("formsingup").checkValidity() ) {
    document.getElementById("formMessage").textContent =mensaje
}else {
    //Aqui tambien usa el elemento formMessage para mostrar el mensaje en este caso de bienvenida
    document.getElementById("formsingup").textContent = "¡BIENVENIDO " + nombre.toUpperCase() + " " +
    apellidos.toUpperCase() + "!";
   //Aqui ocultas el formulario
   document.getElementById("formsingup").style.display = "none";
   //Aqui muestras la seccion de examen
   document.getElementById("exam").style.display = "block";

}
}
   









}
   




