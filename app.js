// server.js
var http = require('http');
var fs = require('fs');
var path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes/routes'); // Suponiendo que tienes un archivo de rutas configurado
var bcrypt = require('bcryptjs');
const app = express();
const port = 3002;

// Middleware para permitir manejo de POST y PUT
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Ruta para servir el archivo HTML estático
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// app.use(session{
  // secret:"lalo";
 //  resave: false;
  // saveUninitialized:true
// });
//-----------------------------------
// Configurar las rutas
routes(app); // Importa las rutas y las configura en la aplicación Express

// Iniciar el servidor
//const server = app.listen(port, (error) => {
//  if (error) return console.log(Error: ${error});
 // console.log(El servidor escucha en el puerto ${port});
//});

// Iniciar el servidor en el puerto 3002
const server = app.listen(3002, '0.0.0.0', (error) => {
  if (error) return console.log(`Error: ${error}`);
  console.log('Server running at http://192.168.100.137:3002/');
});
