// crear variables

// Variables con var
// var aprendiendo = true;

// aprendiendo = 'JavaScript';

// console.log(aprendiendo);

// variables con const

// const aprendiendo = 'JavaScript';
// aprendiendo = true;

// console.log(aprendiendo);

// Variables con let

// let aprendiendo = 'JavaScript';
// aprendiendo = true;

// console.log(aprendiendo);

// Scope

// var musica = 'Rock';

// if (musica) {
//      var musica = 'Grunge';
//      console.log('dentro del if: ', musica);
// }
// console.log('Fuera del IF', musica);

// Scope con let

// let musica = 'Rock';

// if (musica) {
//      let musica = 'Grunge';
//      console.log('dentro del if: ', musica);
// }
// console.log('Fuera del IF', musica);

// const musica = 'Rock';

// if (musica) {
//      const musica = 'Grunge';
//      console.log('dentro del if: ', musica);
// }
// console.log('Fuera del IF', musica);

// Template String

// const nombre = 'Eraldo';
// const trabajo = 'Desarrollador Web';

// // concatenar javascript
// console.log('Nombre: ' + nombre + ', trabajo: ' + trabajo);
// console.log(`Nombre: ${nombre}, trabajo: ${trabajo}`);

// // concatenar con multiples lineas
// const contenedorApp = document.querySelector('#app');
// let html = '<ul>' +
//                '<li> Nombre: ' + nombre + '</li>' +
//                '<li> Trabajo: ' + trabajo + '</li>' +
//            '</ul>';

// let html = `
//                <ul>
//                     <li>Nombre: ${nombre} </li>
//                     <li>Trabajo: ${trabajo} </li>
//                </ul>
//           `;
// contenedorApp.innerHTML = html;

// creando una funcion

// Function Declaration

// function saludar(nombre) {
//      console.log('Bienvenido ' + nombre);
// }

// saludar('Eraldo');

// Function expression

// const cliente = function(nombreCliente) {
//      console.log('Mostrando datos del cliente: ' + nombreCliente);
// }

// cliente('Eraldo');

// Parametros por default en las funciones
// function actividad(nombre = 'Walter White', actividad = 'Ensenãr Quimica') {
//      console.log(`La persona ${nombre}, esta realizando la actividad ${actividad}`);
// }

// const actividad = function(nombre = 'Walter White', actividad = 'Enseñar Quimica') {
//      console.log(`La persona ${nombre}, esta realizando la actividad ${actividad}`);
// };

// actividad('Eraldo', 'Aprender JavaScript');
// actividad('Gabriel cabecao', 'Creando un sito web');
// actividad();

// Arrow Functions

// let viajando = function(destino) {
//      return `Viajando a la ciudad de: ${destino}`;
// }

// let viajando = (destino, duracion) => {
//      return `Viajando a la ciudad de: ${destino} por ${duracion}`;
// }

// let viaje 
// viaje = viajando('Paris');
// viaje = viajando('Barcelona');
// viaje = viajando('Lisboa', '9 dias');

// console.log(viaje);

// Objetos

// Object Literal

// const persona = {
//      nombre: 'Eraldo',
//      profesion: 'Desarrollador Web',
//      edad: 500
// } 

// console.log(persona);
// console.log(persona.nombre);
// console.log(persona.profesion);
// console.log(persona.edad);
// console.log(persona['edad']);

// Object Constructor
function Tarea(nombre, urgencia) {
     this.nombre = nombre;
     this.urgencia = urgencia;
}

// Crear una nueva tareas
// const tarea1 = new Tarea('Apreder JavaScript y React', 'Urgente');
// console.log(tarea1);
// console.log(tarea1.nombre);

// crear multiples tareas
const tarea1 = new Tarea('Apreder JavaScript y React', 'Urgente');
const tarea2 = new Tarea('Preparar café', 'Urgente');
const tarea3 = new Tarea('Comer', 'Urgente');
const tarea4 = new Tarea('estudiar', 'Urgente');

console.log(tarea1);
console.log(tarea2);
console.log(tarea3);
console.log(tarea4);