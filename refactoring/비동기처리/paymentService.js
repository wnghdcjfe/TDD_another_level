const { connect } = require('./queue');

function processPayment(order) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(`Payment processed for order ${order.id}`);
            resolve();
        }, 50); // 이게 늘어난다면? 이를 전부 다 실행하는 방법은? 
    });
}

connect('orderQueue', (channel) => { 
    channel.consume('orderQueue', async (msg) => {   
        const order = JSON.parse(msg.content.toString());
        await processPayment(order);
        channel.ack(msg);
        // Send to next queue
        connect('shippingQueue', (nextChannel) => {
            nextChannel.sendToQueue('shippingQueue', Buffer.from(JSON.stringify(order)), {
                persistent: true,
            });
        });
    }, { noAck: false });
});
