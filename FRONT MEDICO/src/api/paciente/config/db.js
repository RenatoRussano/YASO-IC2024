require('dotenv').config();  // Carrega o arquivo .env

const mysql = require('mysql2');

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

pool.getConnection((err, connection) => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados:', err.message);
  } else {
    console.log('Conexão com o banco de dados bem-sucedida!');
    connection.release();  // Libera a conexão após o teste
  }
});

module.exports = pool.promise();
