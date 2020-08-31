import React, { useContext, useState } from 'react';
import { CategoriasContext } from '../context/CategoriasContext';

const Formulario = () => {

     const [ busqueda, guardarBusqueda ] = useState({
          nombre: '',
          categoria: ''
     });

     const { categorias } = useContext(CategoriasContext);

     // funcion para leer los contenidos
     const obtenerDatosReceta = e => {
          guardarBusqueda({
               ...busqueda,
               [e.target.name] : e.target.value
          })
     }

     return ( 
          <form
               className="col-12"
          >
               <fieldset className="text-center">
                    <legend>Buscar bebidas por Categoria o Ingrediente</legend>
               </fieldset>

               <div className="row">
                    <div className="col-md-4">
                         <input
                              name="nombre"
                              className="form-control"
                              type="text"
                              placeholder="Buscar por Ingrediente"
                              onChange={obtenerDatosReceta}
                         />
                    </div>
                    <div className="col-md-4">
                         <select
                              className="form-control"
                              name="categoria"
                              onChange={obtenerDatosReceta}
                         >
                              <option value="">-- Selecciona Categoria --</option>
                              {categorias.map(categoria => (
                                   <option 
                                        key={categoria.strCategory}
                                        value={categoria.strCategory}
                                   >{categoria.strCategory}</option>
                              ))}
                         </select>
                    </div>

                    <div className="col-md-4">
                         <input
                              type="submit"
                              className="btn btn-block btn-primary"
                              value="Buscar Bebidas"
                         >
                         </input>
                    </div>
               </div>

          </form>
     );
}
 
export default Formulario;