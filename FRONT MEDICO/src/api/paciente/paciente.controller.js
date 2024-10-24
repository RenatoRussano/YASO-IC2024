const db = require('./config/db');

// Função para buscar o perfil completo do paciente
exports.getPerfilCompleto = async (req, res) => {
  // Captura o número YASO da URL
  const numeroYaso = req.params.numero_yaso;

  // Adiciona um log para verificar o valor de numeroYaso recebido
  console.log(`Número YASO recebido: ${numeroYaso}`);

  try {
    // Executa a consulta no banco de dados
    const [rows] = await db.query('SELECT * FROM 00_YASO_PERFIL_COMPLETO_VIEW WHERE NUMERO_YASO = ?', [numeroYaso]);

    // Se encontrar resultados, retorna o perfil completo
    if (rows.length > 0) {
      console.log(`Perfil encontrado para o número YASO: ${numeroYaso}`);
      res.json(rows[0]);
    } else {
      console.log(`Nenhum perfil encontrado para o número YASO: ${numeroYaso}`);
      res.status(404).json({ error: 'Perfil não encontrado.' });
    }
  } catch (err) {
    // Em caso de erro na consulta, retorna um erro 500
    console.error('Erro ao buscar o perfil do paciente:', err.message);
    res.status(500).json({ error: 'Erro ao buscar o perfil do paciente.' });
  }
};