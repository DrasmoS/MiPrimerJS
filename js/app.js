/* Variable de texto! */
let nombre = "Nahuel";
let nombre2 = "Francisco";
console.log(nombre);
console.log(nombre2);
/* alert("Hola Mundo!"); */
document.write("<h1>Hola Mundo!</h1>");
/* Pedir nombre al usuario */
/* let nombreUsuario = prompt("Como es tu nombre?");
console.log(nombreUsuario);
let nombreUsuario2 = prompt("Como es tu nombre?"); */
/* console.log(nombreUsuario2);
document.write("Hola " + nombreUsuario + " y " + nombre); */

/* Variables numericas */

let edad = prompt("Cual es tu edad?");
let edad2 = prompt("Cual es la edad de tu hermano?");
console.log(edad);
console.log(edad2);
document.write("Tu edad es "+edad+" años<br>");
document.write("La edad de tu hermano es "+edad2+" años<br>");
if(edad>edad2){
    diferencia = edad - edad2;
}
else{
    diferencia = edad2 - edad;
}
document.write("La diferencia de edades es "+diferencia+" años<br>");