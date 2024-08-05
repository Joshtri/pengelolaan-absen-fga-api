import mongoose from "mongoose";
import { STRING } from "sequelize";

const pesertaSchema = new mongoose.Schema({

    nama_peserta:{
        type:STRING,
        required: true,
        trim: true
    },

    nomor_registrasi:{
        type:STRING,
        required: true,
        
    },

    nomor_handphone:{
        type:STRING,
        required: true,
        
    },

    provider:{
        type:STRING,
        required: true,
        
    },

    email_peserta:{
        type:STRING,
        required:true
    },
    
})


const Peserta = mongoose.model("Peserta",  pesertaSchema);

export default Peserta