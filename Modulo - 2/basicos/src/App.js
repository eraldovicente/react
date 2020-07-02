import React, { Fragment, useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Producto from './components/Producto';

function App() {

  // Crear listado de productos
  const [ productos, setProductos] = useState([
    { id: 1, nombre: 'Camisa ReactJS', precio: 50 },
    { id: 2, nombre: 'Camisa VueJS', precio: 40 },
    { id: 3, nombre: 'Camisa Node.js', precio: 30 },
    { id: 4, nombre: 'Camisa Angular', precio: 20 },
  ]);

  // Obtener la fecha
  const fecha = new Date().getFullYear();

  return (
    <Fragment>
      <Header 
        titulo='Tienda Virtual'
      />

      <h2>Lista de Productos</h2>
      {productos.map(producto => (
        <Producto
          key={producto.id}
          producto={producto}
        />
      ))}

      <Footer
        fecha={fecha}
      />
    </Fragment>
  );
}

export default App;
