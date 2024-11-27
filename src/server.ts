import express, { Application, Request, Response } from 'express';
import alarmRoute from './routes/alarmRoute';
import cors from 'cors';

const app: Application = express();
const PORT = 3001;

// Middleware para habilitar CORS
app.use(cors());

// Middleware para parsear JSON
app.use(express.json());

// Rutas
app.use('/api', alarmRoute);

// Ruta de prueba
app.get('/', (req: Request, res: Response) => {
  res.send('¡Hola, mundo desde TypeScript!');
});

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
