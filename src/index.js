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


app.use(cors({
    origin: '*',
    methods: ["POST", "GET", "PUT"],
    credentials: true
}));

app.use(express.json());


app.get('/',(req,res)=>{
    res.json("hello");
})

//routes
app.use('/api', pesertaRoute, presensiRoute)

app.listen(PORT,()=>{
    console.log(`run on port : `, PORT);
})