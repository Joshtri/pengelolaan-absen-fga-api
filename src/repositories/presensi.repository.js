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