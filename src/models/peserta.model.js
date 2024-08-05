import mongoose from "mongoose";

const pesertaSchema = new mongoose.Schema({

    nama_peserta:{
        type:String,
        required: true,
        trim: true
    },

    nomor_registrasi:{
        type:String,
        required: true,
        
    },

    nomor_handphone:{
        type:String,
        required: true,
        
    },

    provider:{
        type:String,
        required: true,
        
    },

    email_peserta:{
        type:String,
        required:true
    },

    
})


const Peserta = mongoose.model("Peserta",  pesertaSchema);

export default Peserta