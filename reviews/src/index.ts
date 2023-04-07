import express from 'express';
import cors from 'cors';

const app = express();
const port = 4006;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send("Reviews Service");
});

app.post('/events', (req, res) => {
    console.log('Received Event', req.body.type);
    res.send({});
});

app.listen(port, () => {
    console.log(`Reviews Service listening on port ${port}`);
});
