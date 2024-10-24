const winston = require('winston');

// Configuração do Winston
const logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.printf(({ timestamp, level, message }) => `${timestamp} [${level.toUpperCase()}]: ${message}`)
  ),
  transports: [
    new winston.transports.Console(),  // Exibir no console
    new winston.transports.File({ filename: 'logs/server.log' })  // Salvar logs em um arquivo
  ]
});

const app = require('./app');
const PORT = process.env.PORT || 3000;

app.listen(PORT, (err) => {
  if (err) {
    logger.error(`Erro ao iniciar o servidor: ${err.message}`);
  } else {
    logger.info(`Servidor rodando na porta ${PORT}`);
  }
});
