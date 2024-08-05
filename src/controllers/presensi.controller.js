import { createPresensi, getPresensi } from '../repositories/presensi.repository.js';

// Controller untuk membuat presensi baru
export const createPresensiController = async (req, res) => {
    try {
        const presensiData = req.body;
        const newPresensi = await createPresensi(presensiData);
        if (newPresensi) {
            return res.status(201).json({
                success: true,
                message: 'Presensi created successfully',
                data: newPresensi,
            });
        } else {
            return res.status(400).json({
                success: false,
                message: 'Failed to create presensi',
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



// Controller untuk mendapatkan daftar presensi
export const getPresensiController = async (req, res) => {
    try {
        const presensi = await getPresensi();
        if (presensi) {
            return res.status(200).json({
                success: true,
                data: presensi,
            });
        } else {
            return res.status(404).json({
                success: false,
                message: 'presensi not found',
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
