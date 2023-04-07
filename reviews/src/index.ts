import express from 'express';
import cors from 'cors';
import axios from 'axios';
import { eventServiceUrl } from '../../constants/services';
import { query } from './db';

const port = 4006;

const app = express();
app.use(cors());
app.use(express.json());

const handleEvent = async (type: string, data: any) => {
    if(type === 'ReviewModerated') {
        const { id, status } = data;

        const result = await query(
            "UPDATE reviews SET status = $1 WHERE id = $2 RETURNING *",
            [status, id]
        );

        const review = result.rows[0];

        await axios.post(eventServiceUrl, {
            type: 'ReviewUpdated',
            data: review
        });

    }
};   

app.get('/', (req, res) => {
    res.send("Reviews Service");
});

app.post("/", async (req, res) => {
    const { product_id, user_id, rating, comment } = req.body;

    try {
        const result = await query(
            "INSERT INTO reviews (product_id, user_id, rating, comment) VALUES ($1, $2, $3, $4) RETURNING *",
            [product_id, user_id, rating, comment]
        );
        
        const review = result.rows[0];

        await axios.post(eventServiceUrl, {
            type: 'ReviewCreated',
            data: review
        });

        res.status(201).json(review);
    } catch (err) {
        if(err instanceof Error) {
            res.status(500).json({ message: err.message });
        }
    }
});

        
app.post('/events', async (req, res) => {
    console.log('Received Event', req.body.type);

    const { type, data } = req.body;

    handleEvent(type, data);
    
    res.send({});
});

app.listen(port, async () => {
    console.log(`Reviews Service listening on port ${port}`);

    try {
        console.log('Fetching events...')
        const response = await axios.get(`${eventServiceUrl}/events`);
        for (let event of response.data) {
            console.log('Processing event:', event.type);

            handleEvent(event.type, event.data);
        }
    } catch (err) {
        if(err instanceof Error) {
        console.log(err.message);
        } else {
            console.log(err);
        }
    }
});
