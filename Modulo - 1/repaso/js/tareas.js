
// export const nombreTarea = 'Pasear al perro';

// const nombreTarea = 'Pasear al perro';
// const tarea = 'tarea';

// export default {
//      nombre: nombreTarea,
//      tarea: tarea
// }

// Exportar una funcion

// export const crearTarea = (tarea, urgencia) => {
//      return `La tarea ${tarea} tiene una urgencia de ${urgencia}`;
// }





export default class Tarea {
     constructor(nombre, prioridad) {
          this.nombre = nombre;
          this.prioridad = prioridad;
     }
     mostrar() {
          return `${this.nombre} tiene una prioridad de ${this.prioridad}`;
     }

}

// class EstudosPendientes extends Tarea {
//      constructor(nombre, prioridad, cantidadEstudo) {
//           super(nombre, prioridad);
//           this.cantidad = cantidadEstudo;
//      }
//      mostrar() {
//           return 'Hola como estás?'
//      }
// }

// crear los objetos
// let tarea1 = new Tarea('Aprender JavaScript', 'Alta');
// let tarea2 = new Tarea('Aprender OO', 'Alta');
// let tarea3 = new Tarea('Aprender Desing Patterns', 'Alta');
// let tarea4 = new Tarea('Aprender Estrutura de datos y algoritmos', 'Alta');


// console.log(tarea1.mostrar());
// console.log(tarea2.mostrar());
// console.log(tarea3.mostrar());
// console.log(tarea4.mostrar());


// // Estudos
// let compra1 = new EstudosPendientes('Aprender a aprender', 'Urgente', 3);
// console.log(compra1);