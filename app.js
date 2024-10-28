import dot from 'dotenv';
dot.config()
import  mongoose from 'mongoose';
import 'express-async-errors'
import express from 'express';
const  app = express();

import { connectDB } from './db/connect.js';
import productRouter from './routes/products.js'
import {notFound} from './middleware/not-found.js';
import {errorHandlerMiddleware} from './middleware/error-handler.js';



app.use(express.json())

//routes
app.get('/',(req,res)=>{
    res.send("<h1>Store API </h1><a href='/api/v1/products'>products route</a>")
})

app.use('/api/v1/products',productRouter)
app.use(notFound);
app.use(errorHandlerMiddleware)
const port = process.env.PORT || 3000
const start = async () =>{
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, console.log(`listening to the port ${port}`));
        
    } catch (error) {
        
    }
}
start()