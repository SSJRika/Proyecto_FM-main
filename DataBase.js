const mysql = require('mysql');
const util = require('util');

const pool = mysql.createPool({
  connectionLimit: 10,
  host: 'localhost',
  user: 'root',
  password: 'junior29',
  database: 'newschema',
  charset: 'utf8mb4' // Para soportar emojis si es necesario
});

// Promisify para usar async/await
pool.query = util.promisify(pool.query);

// Manejo de errores de conexión
pool.getConnection((err, connection) => {
  if (err) {
    console.error('Error al conectar a la base de datos:', err);
    return;
  }
  console.log('Conexión a MySQL establecida');
  connection.release();
});

module.exports = pool;