import express from 'express';
import { getAllProductsStatic , getAllProducts } from '../controllers/products.js';

const app = express();

app.route('/').get(getAllProducts)
app.route('/static').get(getAllProductsStatic)

export default app