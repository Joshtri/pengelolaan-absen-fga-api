import express from 'express';
const pesertaRoute = express.Router();
import { createPesertaController, getPesertaController } from '../controllers/peserta.controller.js';


pesertaRoute.post('/peserta',createPesertaController);
pesertaRoute.get('/peserta', getPesertaController);

export default pesertaRoute