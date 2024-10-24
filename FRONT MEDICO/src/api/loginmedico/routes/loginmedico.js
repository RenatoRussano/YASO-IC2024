const express = require('express');
const router = express.Router();
const db = require('../config/db');

// Rota para login médico
router.post('/login', async (req, res) => {
  const { usuario, senha } = req.body;
  try {
    const query = 'SELECT * FROM acesso_medico WHERE USUARIO = ? AND SENHA = ?';
    const [rows] = await db.query(query, [usuario, senha]);

    if (rows.length > 0) {
      res.json({ message: 'Login bem-sucedido!', usuario: rows[0] });
    } else {
      res.status(401).json({ message: 'Usuário ou senha incorretos' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Erro no servidor', error });
  }
});

module.exports = router;