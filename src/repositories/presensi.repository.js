import Presensi from "../models/presensi.model.js";

export const createPresensi = async(presensiData)=>{
    try {
        const newPresensi = await Presensi.create(presensiData);
        return newPresensi;

    } catch (error) {
        throw error;
    }
}


export const getPresensi = async()=>{
    try {
        const presensi = await Presensi.find();
        return presensi;
        
    } catch (error) {
        throw error;
    }
}

// Function to update presensi by live_sesi and pesertaId
export const updatePresensiByLiveSesiAndPesertaId = async (liveSesi, pesertaId, updateData) => {
    try {
        const updatedPresensi = await Presensi.findOneAndUpdate(
            { live_sesi: liveSesi, pesertaId: pesertaId },
            updateData,
            { new: true }
        );
        return updatedPresensi;
    } catch (error) {
        throw error;
    }
};