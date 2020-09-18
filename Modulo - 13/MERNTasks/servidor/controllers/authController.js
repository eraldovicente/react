const Usuario = require('../models/Usuario');
const bcryptjs = require('bcryptjs');
const { validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');

exports.autenticarUsuarios = async (req, res) => {
     // revisar si hay errores
     const errores = validationResult(req);
     if ( !errores.isEmpty() ) {
          return res.status(400).json( {errores: errores.array() });
     }

     // extraer el email y password
     const { email, password } = req.body;

     try {
          // Revisar que sea un usuario registrado
          let usuario = await Usuario.findOne({ email });
          if (!usuario) {
               return res.status(400).json({msg: 'El usuario no existe'});
          }
     } catch (error) {
          console.log(error);
     }


}