import { createPeserta, getPeserta } from '../repositories/peserta.repository.js';

// Controller untuk membuat peserta baru
export const createPesertaController = async (req, res) => {
    try {
        const pesertaData = req.body;
        const newPeserta = await createPeserta(pesertaData);
        if (newPeserta) {
            return res.status(201).json({
                success: true,
                message: 'Peserta created successfully',
                data: newPeserta,
            });
        } else {
            return res.status(400).json({
                success: false,
                message: 'Failed to create peserta',
            });
        }
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            success: false,
            message: 'Server error',
        });
    }
};

// Controller untuk mendapatkan daftar peserta
export const getPesertaController = async (req, res) => {
    try {
        const peserta = await getPeserta();
        res.status(200).json(peserta)
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            success: false,
            message: 'Server error',
        });
    }
};
