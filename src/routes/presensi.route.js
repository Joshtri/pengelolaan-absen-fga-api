import express from 'express';
import { createPresensiController, getPresensiController, sesiActiveGet, updatePresensiController } from '../controllers/presensi.controller.js';

const presensiRoute = express.Router();

presensiRoute.post('/presensi', createPresensiController);
presensiRoute.get('/presensi', getPresensiController)

presensiRoute.put('/presensi/:pesertaId', updatePresensiController);

presensiRoute.get("/set-sesi/latest", sesiActiveGet)
export default presensiRoute;
