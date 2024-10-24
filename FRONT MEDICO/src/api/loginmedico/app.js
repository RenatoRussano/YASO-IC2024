const express = require('express');
const cors = require('cors');
const app = express();
const loginRoutes = require('./routes/loginmedico');

// Middleware
app.use(cors());  // Habilita CORS para todas as rotas
app.use(express.json());  // Habilita o parsing de JSON no corpo da requisição

// Rotas
app.use('/api/loginmedico', loginRoutes);

module.exports = app;
