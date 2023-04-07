import express from 'express';
import axios from 'axios';
import { eventServiceUrl } from '../../constants/services';

const app = express();
const port = 4007;

app.use(express.json());

app.get('/', (req, res) => {
    res.send("Moderation Service");
});

app.post("/", async (req, res) => {
    if(req.body.type === 'ReviewCreated') {
        const status = req.body.data.comment.includes('a bad word') ? 'rejected' : 'approved';

        try {
            await axios.post(eventServiceUrl, {
                type: 'ReviewModerated',
                data: {
                    id: req.body.data.id,
                    status,
                    product_id: req.body.data.product_id,
                    user_id: req.body.data.user_id,
                    rating: req.body.data.rating,
                    comment: req.body.data.comment
                }
            });     

        } catch (error) {
            console.error(error);
        }

        res.send({});
    }
});



app.post('/events', (req, res) => {
    console.log('Received Event', req.body.type); 
    res.send({});
});

app.listen(port, () => {
    console.log(`Moderation Service listening on port ${port}`);
});