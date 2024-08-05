import express from 'express';
import { createPresensiController, getPresensiController } from '../controllers/presensi.controller.js';

const presensiRoute = express.Router();

presensiRoute.post('/presensi', createPresensiController);
presensiRoute.get('/presensi', getPresensiController)

export default presensiRoute;
