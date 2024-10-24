const express = require('express');
const router = express.Router();
const pacienteController = require('../paciente.controller');

// Rota para buscar o perfil completo do paciente
router.get('/:numero_yaso', pacienteController.getPerfilCompleto);

module.exports = router;
