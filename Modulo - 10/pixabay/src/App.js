import React, { useState, useEffect } from 'react';
import Formulario from './components/Formulario'; 
import ListadoImagenes from './components/ListadoImagenes'; 

function App() {

  // state de la app
  const [ busqueda, guardarBusqueda ] = useState('');
  const [ imagenes, guardarImagenes ] = useState([]);
  const [ paginaactual, guardarPaginaActual ] = useState(1);
  const [ totalpaginas, guardarTotalPaginas ] = useState(1);

  useEffect(() => {
    const consultarApi = async() => {
      if (busqueda === '' ) return;

      const imagenesPorPagina = 30;
      const key = '16544476-8da439cdc6ae83f9540a6d8ec';
      const url = `https://pixabay.com/api/?key=${key}&q=${busqueda}&per_page=${imagenesPorPagina}`;

      const respuesta = await fetch(url);
      const resultado = await respuesta.json();

      guardarImagenes(resultado.hits);  

      // Calcular el total de paginas
      const calcularTotalPaginas = Math.ceil(resultado.totalHits / imagenesPorPagina );
      guardarTotalPaginas(calcularTotalPaginas);
    }
    consultarApi();
  }, [busqueda])

  // Definir la página anterior
  const paginaAnterior = () => {
    const nuevaPaginaActual = paginaactual - 1;

    if (nuevaPaginaActual === 0) return;

    guardarPaginaActual(nuevaPaginaActual);
  }

  // Definir la página siguiente
  const paginaSiguiente = () => {
    const nuevaPaginaActual = paginaactual + 1;

    if (nuevaPaginaActual > totalpaginas) return;

    guardarPaginaActual(nuevaPaginaActual);
  }

  return (
    <div className="container">
      <div className="jumbotron">
        <p className="lead text-center">Buscador de Imágenes</p>
        <Formulario 
          guardarBusqueda={guardarBusqueda}
        />
      </div>

      <div className="row justify-content-center">
        <ListadoImagenes 
          imagenes={imagenes}
        />
        <button
          type="button"
          className="bbtn btn-info mr-1"
          onClick={paginaAnterior}
        >&laquo; Anterior</button>

        <button
          type="button"
          className="bbtn btn-info"
          onClick={paginaPosterior}
        >Posterior &raquo;</button>
      </div>
    </div>
  );
}

export default App;
