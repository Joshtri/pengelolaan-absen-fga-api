import express from 'express';
import cors from 'cors';
import { config } from 'dotenv';

config();
const app = express();
const PORT = process.env.APP_PORT;




// app.use(express.urlencoded(true));
app.use(express.json());




app.listen(PORT,()=>{
    console.log(`run on port : `, PORT);
})