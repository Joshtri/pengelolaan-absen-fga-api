import SetSesiActive from "../models/setSesi.model.js";



export const getSetSesi = async () => {
    try {
        // Mengurutkan berdasarkan _id secara descending (terbaru di atas) dan mengambil satu data pertama
        const SetSesi = await SetSesiActive.find().sort({ _id: -1 }).limit(1);
        return SetSesi;
    } catch (error) {
        throw error;
    }
};