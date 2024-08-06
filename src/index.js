import express from 'express';
import cors from 'cors';
import { config } from 'dotenv';
import connectDB from './config/dbConfig.js';
import pesertaRoute from './routes/peserta.route.js';
import presensiRoute from './routes/presensi.route.js';
// import bodyParser from 'body-parser';


config();
connectDB();


const app = express();
const PORT = process.env.APP_PORT;



// app.use(bodyParser.json());
// app.use(express.urlencoded(true));

if(process.env.APP_ENABLE_CORS === 'true'){
    app.use(cors({
        origin: process.env.APP_CORS_ORIGINS.split(','),
        // methods: [POST, GET],
        credentials:true
    }));
}
app.use(express.json());



//routes
app.use('/api', pesertaRoute, presensiRoute)

app.listen(PORT,()=>{
    console.log(`run on port : `, PORT);
})