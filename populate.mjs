import dot from 'dotenv'
dot.config()

import { connectDB } from './db/connect.js'
import { productSchema } from './models/product.js'

// import { readFile } from 'fs/promises';

// const productsData = await readFile(new URL('./products.json', import.meta.url));
// const jsonProducts = JSON.parse(productsData);
import jsonProducts from './products.json' assert { type: "json" };




const start = async () =>{
    try {
        
        await connectDB(process.env.MONGO_URI)
        await productSchema.create(jsonProducts)
        console.log(`success`);
        
    } catch (error) {
        console.log(error);
        
        
    }
}
start();