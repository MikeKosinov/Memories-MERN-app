import  express  from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from 'dotenv'

import postsRoutes from './routes/posts.js';

const app = express();
dotenv.config();
const PORT=process.env.PORT||3000;

app.use(bodyParser.json({limit:'30mb',extended: true}));
app.use(bodyParser.urlencoded({limit:'30mb',extended: true}));
app.use(cors()); 
app.use('/posts',postsRoutes);

//connect to db
const DBconnect = async()=>{
    try{
        await mongoose.connect(process.env.CONNECTION_URL);
        console.log("Connected!");
        app.listen(PORT,()=>console.log(`Server running on port: ${PORT}`));
    }catch(error){
        console.log(error.message)
    }
    };
    DBconnect();

 


