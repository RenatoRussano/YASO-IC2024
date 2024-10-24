const express = require('express');
const cors = require('cors');
const pacienteRoutes = require('./routes/paciente.routes');

const app = express();

// Habilitar CORS para todas as rotas
app.use(cors());

// Habilitar JSON
app.use(express.json());

// Rotas
app.use('/paciente', pacienteRoutes);

module.exports = app;
