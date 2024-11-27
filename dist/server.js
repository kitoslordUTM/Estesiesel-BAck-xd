"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const alarmRoute_1 = __importDefault(require("./routes/alarmRoute"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
const PORT = 3001;
// Middleware para habilitar CORS
app.use((0, cors_1.default)());
// Middleware para parsear JSON
app.use(express_1.default.json());
// Rutas
app.use('/api', alarmRoute_1.default);
// Ruta de prueba
app.get('/', (req, res) => {
    res.send('¡Hola, mundo desde TypeScript!');
});
// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
