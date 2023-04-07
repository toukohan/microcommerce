import express from 'express';

const app = express();
const port = 4007;

app.use(express.json());

app.get('/', (req, res) => {
    res.send("Moderation Service");
});

app.post('/events', (req, res) => {
    console.log('Received Event', req.body.type);
    res.send({});
});

app.listen(port, () => {
    console.log(`Moderation Service listening on port ${port}`);
});