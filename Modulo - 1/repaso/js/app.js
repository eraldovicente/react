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

// const mostrarCliente = mostrarInformacionTarea(persona.nombre, persona.profesion);
// console.log(mostrarCliente);

// console.log(persona);
// console.log(persona.nombre);
// console.log(persona.profesion);
// console.log(persona.edad);
// console.log(persona['edad']);

// Prototype

// function mostrarInformacionTarea(tarea, prioridad) {
//      return `La tarea ${tarea} tiene una prioridad de ${prioridad}`;
// }

// Object Constructor
// function Tarea(nombre, urgencia) {
//      this.nombre = nombre;
//      this.urgencia = urgencia;
// }

// // Agregar un prototype
// Tarea.prototype.mostrarInformacionTarea = function() {
//      return `La tarea ${this.nombre} tiene una prioridad de ${this.urgencia}`;
// }

// Crear una nueva tareas
// const tarea1 = new Tarea('Apreder JavaScript y React', 'Urgente');
// console.log(tarea1);
// console.log(tarea1.nombre);

// crear multiples tareas
// const tarea1 = new Tarea('Apreder JavaScript y React', 'Urgente');
// console.log(tarea1.mostrarInformacionTarea() );
// const tarea2 = new Tarea('Preparar café', 'Urgente');
// const tarea3 = new Tarea('Comer', 'Urgente');
// const tarea4 = new Tarea('estudiar', 'Urgente');

// const mostrarInfo = mostrarInformacionTarea(tarea1.nombre, tarea1.urgencia);
// console.log(mostrarInfo);

// Destructuring de objetos

// const aprendiendoJS = {
//      version: {
//           nueva: 'ES6',
//           anterior: 'ES5'
//      },
//      frameworks: ['React', 'VueJS', 'AngularJS']
// }

// Destructuring es extraer valores de un objeto

// console.log(aprendiendoJS);

// version anterior
// let version = aprendiendoJS.version;

// console.log(version);

// version anterior
// let version = aprendiendoJS.version.nueva;
// let framework = aprendiendoJS.frameworks[1];

// Destructuring forma nueva
// let {nueva} = aprendiendoJS.version;
// console.log(nueva);
// console.log(frameworks);

// Object literal enhancement

// const banda = 'Metallica';
// const genero = 'Heavy Metal';
// const canciones = ['Master Of Puppets', 'Seek & Destroy', 'Enter Sandman'];

// forma anterior
// const metallica = {
//      banda : banda,
//      genero:  genero,
//      canciones: canciones
// }

// forma nueva
// const metallica = {banda, genero, canciones};

// console.log(metallica);

// métodos o funciones en un objeto

const persona = {
     nombre: 'Eraldo',
     trabajo: 'Desarrollador Web',
     edad: 500,
     musicaRock: true,
     mostrarInformacion() {
          console.log(`${this.nombre} es ${this.trabajo} y su edad es ${this.edad}`);
     }
}

persona.mostrarInformacion();