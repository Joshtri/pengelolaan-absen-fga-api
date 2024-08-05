import mongoose from "mongoose";

const presensiSchema = new mongoose.Schema({

    pesertaId:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Peserta',
        required: true
    },

    jam_masuk:{
        type:Date,
        required:true
    },

    jam_keluar:{
        type:Date,
        required:true
    }
},{
    timestamps:true
});

const Presensi = mongoose.model("Presensi", presensiSchema);
export default Presensi;