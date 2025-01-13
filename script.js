//Aquí va tu codigo javascript
function inscripcion() {
    let nombre =document.getElementById("nombre").value.trim();
    let apellidos =document.getElementById("apellidos").value.trim();
    let mensaje = "Por favor, completa todos los campos de forma correcta"

//Para que no se quede el formulario vacío
if (nombre === "" || apellidos === "" ) {
    document.getElementById("formsingup").textContent =mensaje
}else {
    //Para mostrar un mensaje de bienvenida en mayúsculas
    document.getElementById("formsingup").textContent = "¡BIENVENIDO " + nombre.toUpperCase() + " " +
    apellidos.toUpperCase() + "!";
}













}
   




