import React, { Fragment, useState } from 'react';

const Formulario = () => {

     // Crear State de Citas
     const [cita, actualizarCita] = useState({
          mascota: '',
          propietario: '',
          fecha: '',
          hora: '',
          sintomas: ''
     });
     const [ error, actualizarError ] = useState(false);

     // Funcion que se ejecuta cada que el usuario escribe en un input
     const actualizarState = e => {
          actualizarCita({
               ...cita,
               [e.target.name]: e.target.value
          })
     }

     // Extraer los valores
     const { mascota, propietario, fecha, hora, sintomas } = cita;

     // Cuando el usuario presiona agregar cita
     const submitCita = e => {
          e.preventDefault();

          // Validar
          if ( mascota.trim() === '' || propietario.trim() === '' || fecha.trim() === '' || hora.trim() === '' || sintomas.trim() === '') {
               actualizarError(true);
               return;
          }

          // Asignar un ID

          // Crear la cita

          // Reiniciar el form

     }

     return ( 
          <Fragment>
               <h2>Crear Cita</h2>

               { error ? <p className="alerta-error">Todos los campos son obligatorios</p> : null }

               <form
                    onSubmit={submitCita}
               >
                    <label>Nombre Mascote</label>
                    <input
                         type="text"
                         name="mascota"
                         className="u-full-width"
                         placeholder="Nombre Mascota"
                         onChange={actualizarState}
                         value={mascota}
                    />
                    <label>Nombre Dueño</label>
                    <input
                         type="text"
                         name="propietario"
                         className="u-full-width"
                         placeholder="Nombre Dueño de la mascota"
                         onChange={actualizarState}
                         value={propietario}
                    />
                    <label>Fecha</label>
                    <input
                         type="date"
                         name="fecha"
                         className="u-full-width"
                         onChange={actualizarState}
                         value={fecha}
                    />
                    <label>Hora</label>
                    <input
                         type="time"
                         name="hora"
                         className="u-full-width"
                         onChange={actualizarState}
                         value={hora}
                    />
                    <label>Síntomas</label>
                    <textarea
                         className="u-full-width"
                         name="sintomas"
                         onChange={actualizarState}
                         value={sintomas}
                    ></textarea>
                    <button
                         type="submit"
                         className="u-full-width button-primary"
                    >Agregar Cita</button>
               </form>
          </Fragment>
      );
}
 
export default Formulario;