const express = require('express');
const { sendMessage } = require('./orderProducer');

const app = express();
app.use(express.json());

app.post('/orders', async (req, res) => {
    const order = req.body;
    await sendMessage(order);
    res.status(201).send('Order received');
});

module.exports = app;
