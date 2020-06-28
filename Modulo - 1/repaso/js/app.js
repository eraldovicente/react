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

const cliente = function(nombreCliente) {
     console.log('Mostrando datos del cliente: ' + nombreCliente);
}

cliente('Eraldo');
