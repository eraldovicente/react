import React from 'react';

function Header() {

     const edad = 18;

     let mensaje;
     if (edad >= 18) {
          mensaje = 'Eres mayor de edad';
     } else {
          mensaje = 'Eres menor de edad';
     }

     return(
          <>
               <h1>{mensaje}</h1>
               <h1 id="encabezado" className="encabezado">Tienda Virtual</h1>
          </>
     )
}

export default Header;