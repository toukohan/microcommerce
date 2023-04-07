import express from 'express';
import axios from 'axios';
import cors from 'cors';

const app = express();
const port = 4005;

app.use(express.json());
app.use(cors());

app.post('/events', (req, res) => {
    const event = req.body;

    axios.post("http://localhost:4000/events", event);
    axios.post("http://localhost:4001/events", event);
    axios.post("http://localhost:4002/events", event);

    res.send({ status: 'OK' });
});

app.listen(port, () => {
    console.log(`Event Bus listening on port ${port}`);
});