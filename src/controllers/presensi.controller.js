import { createPresensi, getPresensi, updatePresensiByLiveSesiAndPesertaId } from '../repositories/presensi.repository.js';

// Controller untuk membuat presensi baru
// tidak dipakai.pakai fungsi dibawah.
export const createPresensiController = async (req, res) => {
    try {
        const { pesertaId, jam_masuk, jam_keluar } = req.body;

        // Get current date in YYYY-MM-DD format
        const fixedDate = new Date().toISOString().split('T')[0]; 

        // Parse the times as local time
        const jamMasukParts = jam_masuk.split(':');
        const jamKeluarParts = jam_keluar.split(':');


        const presensiData = {
            pesertaId,
            jam_masuk,
            jam_keluar,
            live_sesi: 2, // or any other value needed
            status_kehadiran: 'hadir'
        };

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


// Controller to update presensi by pesertaId with a fixed live_sesi value
export const updatePresensiController = async (req, res) => {
    try {
        const { pesertaId } = req.params; // Assuming pesertaId is passed as a URL parameter
        const updateData = req.body;
        const liveSesi = 5; // Fixed value for live_sesi

        updateData.status_kehadiran = "hadir";
        const updatedPresensi = await updatePresensiByLiveSesiAndPesertaId(liveSesi, pesertaId, updateData);

        if (!updatedPresensi) {
            return res.status(404).json({
                success: false,
                message: 'Presensi not found for the given live_sesi and pesertaId',
            });
        }

        return res.json({
            success: true,
            message: 'Presensi updated successfully',
            data: updatedPresensi,
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            success: false,
            message: 'Server error',
        });
    }
};