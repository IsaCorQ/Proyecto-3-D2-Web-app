require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const connection = require("./db");
const userRoutes = require("./routes/users");
const authRoutes = require("./routes/auth");
const path = require('path');
const fileRoute = require('./routes/file');
require('./db');

/*Instituto Tecnlogico Costarricense
 * Proyecto 3 para la clase de algortmos y estructuras de datos 2
 * Profesor Isaac Ramirez
 * Autor: Isa Córdoba Quesada, Ian Hu Pacheco, Ludwin Ramos Briceño
 * Carné: 2021067015, 2021062270, 2021032537
 * Version:1 del proyecto*/

// conexion a base da datos
connection();

// middlewares
app.use(express.json());
app.use(cors());

// rutas
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);

app.use(express.static(path.join(__dirname, '..', 'build')));
app.use(fileRoute);
// respuesta de la aplicación
app.get('*', (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.sendFile(path.join(__dirname, '..', 'build', 'index.html'));
});

const port = process.env.PORT || 8080;
app.listen(port, console.log(`Listening on port ${port}...`));