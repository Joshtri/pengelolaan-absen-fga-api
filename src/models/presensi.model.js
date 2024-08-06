import mongoose from "mongoose";

const presensiSchema = new mongoose.Schema({
    pesertaId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Peserta',
        required: true
    },
    jam_masuk: {
        type: String,
        required: true,
        validate: {
            validator: function(v) {
                return /^([01]\d|2[0-3]):([0-5]\d)$/.test(v); // 24-hour format HH:mm
            },
            message: props => `${props.value} is not a valid time!`
        }
    },
    jam_keluar: {
        type: String,
        required: true,
        validate: {
            validator: function(v) {
                return /^([01]\d|2[0-3]):([0-5]\d)$/.test(v); // 24-hour format HH:mm
            },
            message: props => `${props.value} is not a valid time!`
        }
    },
    live_sesi: {
        type: Number,
        required: false
    },
    status_kehadiran: {
        type: String,
        enum: [
            'hadir',
            'alpha',
            'izin',
            'sakit'
        ],
        required: true,
        default: 'alpha'
    }
}, {
    timestamps: true
});

const Presensi = mongoose.model('Presensi', presensiSchema);

export default Presensi;