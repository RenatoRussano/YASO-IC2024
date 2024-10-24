require('dotenv').config();  // Carrega as variáveis de ambiente do arquivo .env
const app = require('./app');
const port = process.env.PORT || 3001;  // Porta definida no .env ou 3001 por padrão

app.listen(port, () => {
  console.log(`API de Login Médico rodando na porta ${port}`);
});
