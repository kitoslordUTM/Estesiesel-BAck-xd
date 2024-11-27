"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const db_1 = __importDefault(require("../db"));
const router = (0, express_1.Router)();
router.get('/Get', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const query = 'SELECT * FROM alarm';
        const response = yield db_1.default.query(query);
        res.status(200).json(response.rows);
    }
    catch (err) {
        res.status(500).send('No se obtuvieron todas las alarmas');
    }
}));
router.post('/Post', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { hour, minute, description } = req.body;
        // Consulta SQL sin `alarm_date` porque ahora tiene un valor predeterminado
        const query = 'INSERT INTO alarm (hour, minute, description) VALUES ($1, $2, $3)';
        const values = [hour, minute, description];
        yield db_1.default.query(query, values);
        res.status(201).send('Alarma creada correctamente');
    }
    catch (err) {
        console.error('Error al crear la alarma:', err);
        res.status(500).send('Error al crear la alarma');
    }
}));
exports.default = router;
