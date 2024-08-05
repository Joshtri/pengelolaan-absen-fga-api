import express from 'express';
import cors from 'cors';
import { config } from 'dotenv';
import connectDB from './config/dbConfig.js';

config();
connectDB();


const app = express();
const PORT = process.env.APP_PORT;




// app.use(express.urlencoded(true));
app.use(cors({
    origin: '*',
    // methods: [POST, GET],
    credentials:true
}));
app.use(express.json());




app.listen(PORT,()=>{
    console.log(`run on port : `, PORT);
})