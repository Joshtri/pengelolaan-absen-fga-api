import Peserta from "../models/peserta.model.js";


export const createPeserta = async(pesertaData)=>{
    try {
        const newPeserta = await Peserta.create(pesertaData);
        return newPeserta;
    } catch (error) {
        console.log(error);
    }
}


export const getPeserta = async()=>{
    try {
        const peserta = await Peserta.find();
        return peserta;
    } catch (error) {
        console.log(error);
    }
}