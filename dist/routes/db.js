"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
// Configura la conexión a tu base de datos
const postgresProfile = new pg_1.Pool({
    user: 'admin', // Usuario configurado en el contenedor
    host: 'localhost', // Dirección de tu base de datos
    database: 'pastilleroDb', // Nombre de la base de datos
    password: ' p123456789', // Contraseña del usuario
    port: 5435, // Puerto por defecto de PostgreSQL
});
// Probar la conexión
postgresProfile.connect((err, client, release) => {
    if (err) {
        return console.error('Error al conectar a la base de datos:', err.stack);
    }
    console.log('Conexión exitosa a la base de datos');
    release();
});
exports.default = postgresProfile;
