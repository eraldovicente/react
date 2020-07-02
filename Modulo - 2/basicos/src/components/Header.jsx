import React from 'react'

function Header({titulo}) {

     // console.log(props);

     const edad = 18;

     let mensaje;
     if (edad >= 18) {
          mensaje = 'Eres mayor de edad';
     } else {
          mensaje = 'Eres menor de edad';
     }

     return (
          <>
               <h1>{mensaje}</h1>
               <h2 id="encabezado" className="encabezado">{titulo}</h2>
          </>
     );
}
 
export default Header;