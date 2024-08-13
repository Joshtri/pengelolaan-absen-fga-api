import mongoose from "mongoose";


const setSesiSchema = new mongoose.Schema({
    sesiActive:{
        type:Number,
        required:true
    }
});

const SetSesiActive = mongoose.model("SesiSetActive", setSesiSchema);
export default SetSesiActive;