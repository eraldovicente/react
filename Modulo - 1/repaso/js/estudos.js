class EstudosPendientes extends Tarea {
     constructor(nombre, prioridad, cantidadEstudo) {
          super(nombre, prioridad);
          this.cantidad = cantidadEstudo;
     }
     mostrar() {
          return 'Hola como estás?'
     }
}