import { Pool } from "pg";

// Configura la conexión a tu base de datos
const postgresProfile = new Pool({
  user: 'admin',
  host: 'localhost',
  database: 'healtydb',
  password: 'p123456789',
  port: 5433,
});

// Probar la conexión
postgresProfile.connect((err, client, release) => {
  if (err) {
    return console.error('Error al conectar a la base de datos:', err.stack);
  }
  console.log('Conexión exitosa a la base de datos');
  release();
});

export default postgresProfile;
