import React from 'react';

const Producto = ({producto, carrito, agregarProducto, productos}) => {

     // Agregar producto al carrito
     const seleccionarProducto = id => {
          // console.log('Comprando... ', id);
          const producto = productos.filter(producto => producto.id === id );
          // const producto = productos.filter(producto => producto.id === id )[0];
          agregarProducto([
               ...carrito,
               ...producto
          ]);
     }

     // Elimina un producto del carrito
     const eliminarProducto = id => {
          const productos = carrito.filter(producto => producto.id !== id);

          // Colocar los productos en el state
          agregarProducto(productos)
     }

     const { nombre, precio, id } = producto;
     return ( 
          <div>
               <h2>{nombre}</h2>
               <p>${precio}</p>
               
               { productos
               ?    
                    (
                         <button 
                              type="button"
                              onClick={ () => seleccionarProducto(id) }
                         >Comprar</button>
                    )    
               :
                    (          
                         <button 
                              type="button"
                              onClick={ () => eliminarProducto(id) }
                         >Eliminar</button>
                    )
               }
          </div>
     );
}
 
export default Producto;