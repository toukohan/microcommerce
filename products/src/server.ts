import express from 'express';
import cors from 'cors';
import products from '../data/products.json';
import categories from '../data/categories.json';

const app = express();

const port = 4001;

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.json(products);
});

app.get('/categories', (req, res) => {
    res.json(categories);
});

app.listen(port, () => {
    console.log(`Products Service listening on port ${port}`);
});
