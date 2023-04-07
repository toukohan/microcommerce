import express from 'express';
import axios from 'axios';
import cors from 'cors';
import { query } from './db';

import { 
    usersServiceUrl,
    productsServiceUrl,
    reviewsServiceUrl,
    moderationServiceUrl
} from '../../constants/services';

const app = express();
const port = 4005;

app.use(express.json());
app.use(cors());

app.get('/events', async (req, res) => {
    try {
        const events = await query('SELECT * FROM events', []);
        res.json(events.rows);

    } catch (error) {
        if(error instanceof Error) {
            res.status(500).json({ message: error.message });
        }
    }
});


app.post('/', (req, res) => {
    const event = req.body;

    axios.post(`${usersServiceUrl}/events`, event).catch((err) => {
        console.log(err.message);
    });
    axios.post(`${productsServiceUrl}/events`, event).catch((err) => {
        console.log(err.message);
    });
    axios.post(`${reviewsServiceUrl}/events`, event).catch((err) => {
        console.log(err.message);
    });
    axios.post(`${moderationServiceUrl}/events`, event).catch((err) => {
        console.log(err.message);
    });
   
    res.send({ status: 'OK' });
});

app.listen(port, () => {
    console.log(`Event Bus listening on port ${port}`);
});