// paymentService.js
function processPayment(order) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(`Payment processed for order ${order.id}`);
            resolve();
        }, 1000);
    });
}

// shippingService.js
function prepareShipping(order) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(`Shipping prepared for order ${order.id}`);
            resolve();
        }, 1000);
    });
}

// orderService.js
// const { processPayment } = require('./paymentService');
// const { prepareShipping } = require('./shippingService');

async function createOrder(order) {
    await processPayment(order);
    await prepareShipping(order);
    console.log(`Order ${order.id} created`);
}

const order = { id: '12345', amount: 100.0 };
createOrder(order);
