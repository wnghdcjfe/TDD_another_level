const express = require('express');
const app = express();
app.use(express.json());

const orders = [];

app.post('/orders', (req, res) => {
    const order = req.body;
    orders.push(order);

    // 동기식으로 주문 처리
    processOrder(order);

    res.status(201).send(order);
});

function processOrder(order) {
    console.log(`Processing order ${order.id}`);
    // 결제 처리 로직
    console.log(`Payment processed for order ${order.id}`);
    // 주문 상태 업데이트
    console.log(`Order ${order.id} completed`);
}

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
