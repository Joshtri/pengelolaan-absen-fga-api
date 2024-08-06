import express from 'express';
import { createPresensiController, getPresensiController, updatePresensiController } from '../controllers/presensi.controller.js';

const presensiRoute = express.Router();

presensiRoute.post('/presensi', createPresensiController);
presensiRoute.get('/presensi', getPresensiController)

presensiRoute.put('/presensi/:pesertaId', updatePresensiController);


export default presensiRoute;
