import { Router } from "express";
import postgresProfile from "../db";
import { Request, Response } from "express";
import { alarm } from "../models/alarm";


const router = Router();

router.get('/Get', async (req: Request, res: Response) => {
    try {
        const query = 'SELECT * FROM alarm';
        const response = await postgresProfile.query<alarm>(query);
        res.status(200).json(response.rows);
    } catch (err: any) {
        res.status(500).send('No se obtuvieron todas las alarmas');
    }
});




router.post('/Post', async (req: Request, res: Response) => {
    try {
        const { hour, minute, description }: alarm = req.body;

        // Consulta SQL sin `alarm_date` porque ahora tiene un valor predeterminado
        const query = 'INSERT INTO alarm (hour, minute, description) VALUES ($1, $2, $3)';
        const values = [hour, minute, description];

        await postgresProfile.query(query, values);

        res.status(201).send('Alarma creada correctamente');
    } catch (err) {
        console.error('Error al crear la alarma:', err);
        res.status(500).send('Error al crear la alarma');
    }
});


export default router