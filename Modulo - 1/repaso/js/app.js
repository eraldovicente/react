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

// const persona = {
//      nombre: 'Eraldo',
     // trabajo: 'Desarrollador Web',
     // edad: 500,
     // musicaRock: true,
     // mostrarInformacion() {
     //      console.log(`${this.nombre} es ${this.trabajo} y su edad es ${this.edad}`);
//      }
// }

// persona.mostrarInformacion();

// Arreglos y .map

// carrito = ['Producto 1', 'Producto 2', 'Producto 3'];

// console.log(carrito);

// const appContenedor = document.querySelector('#app');
// appContenedor.innerHTML = carrito;

// let html = '';
// carrito.forEach(producto => {
//      html += `<li>${producto}</li>`;
// });

// appContenedor.innerHTML = html;

// carrito.map(producto => 'El producto es ' + producto );


// const persona = {
//      nombre: 'Eraldo',
//      profesion: 'Desarrollador web',
//      edad: 500
// }

// console.log(persona);
// const {nombre} = persona;
// console.log(nombre);

// console.log(Object.keys(persona));


// Sprear operator

// let lenguajes = ['JavaScript', 'PHP', 'Python'];
// let frameworks = ['ReactJS', 'Laravel', 'Django'];

// unir los arreglosen 1 solo

// let combinacion = lenguajes.concat(frameworks);
// let combinacion = [...lenguajes,...frameworks];
// let nuevoArreglo = [...lenguajes];

// console.log(nuevoArreglo);

// let [ultimo] = [...lenguajes].reverse();

// console.log(lenguajes);
// console.log(ultimo);


// function suma(a, b, c) {
//      console.log(a+b+c);
// }

// const numeros = [1,2,3];

// suma(...numeros);

// const personas = [
//      {nombre: 'Eraldo', edad: 230, aprendiendo: 'JavaScript'},
//      {nombre: 'Cabecao', edad: 212, aprendiendo: 'PHP'},
//      {nombre: 'Mainha', edad: 233, aprendiendo: 'HTML'},
//      {nombre: 'Babi', edad: 234, aprendiendo: 'CSS'},
//      {nombre: 'Duca', edad: 236, aprendiendo: 'React'},
// ];


// console.log(personas);

// // maior de 230

// personas.filter(persona => {
//      console.log(persona);
// });

// const mayores = personas.filter(persona => {
//      return persona.edad > 230;
// });

// console.log(mayores);

// // que aprende cabeção y su edad
// const cabecao = personas.find(persona => {
//      return persona.nombre === 'Cabecao';
// }); 

// console.log(cabecao);

// // Total das idades

// let total = personas.reduce((edadTotal, persona) => {
//      return edadTotal + persona.edad; 
// }, 0);

// console.log(total);

// console.log(total / personas.length );

// Promises

// const aplicarDescuento = new Promise((resolve, reject) => {
//      setTimeout( () => {
//           let descuento = false;

//           if (descuento) {
//                resolve('Descuento aplicado!');
//           } else {
//                reject('No se pudo aplicar el descuento');
//           }
//      }, 3000);
// });

// // console.log(aplicarDescuento);

// aplicarDescuento.then(resultado => {
//      console.log(resultado);
// }).catch(error => {
//      console.log(error);
// })

// Promise con Ajax

const descargarUsuarios = cantidad => new Promise((resolve, reject) => {
     // pasar la cantidad a la api
     const api =  `https://randomuser.me/api/?results=${cantidad}&nat=us`;

     // llamado a ajax
     const xhr = new XMLHttpRequest();

     // abrir la conexion
     xhr.open('GET', api, true);

     // on load
     xhr.onload = () => {
          if (xhr.status === 200) {
               resolve(JSON.parse(xhr.responseText).results);
          } else {
               reject(Error(xhr.statusText));
          }
     }

     // opcional (on error)
     xhr.oneror = (error) => reject(error);

     // send
     xhr.send();

});

descargarUsuarios(10)
     .then(
          miembros => imprimirHTML(miembros),
          error => console.error(
               new Error('Hubo un error' + error)
          )
     );

function imprimirHTML(usuarios) {
     let html = '';
     usuarios.forEach(usuario => {
          html += `
               <li>
                    Nombre: ${usuario.name.first} ${usuario.name.last}
                    País: ${usuario.nat}
                    Imagen:
                         <img src="${usuario.picture.medium}">
               </li>          
          `;
     });

     const contenedorApp = document.querySelector('#app');
     contenedorApp.innerHTML = html;
}