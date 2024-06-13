const { connect } = require('./queue');

function prepareShipping(order) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(`Shipping prepared for order ${order.id}`);
            resolve();
        }, 50);
    });
}

connect('shippingQueue', (channel) => { 
    channel.consume('shippingQueue', async (msg) => { 
        const order = JSON.parse(msg.content.toString());
        await prepareShipping(order);
        channel.ack(msg);

        // Send to final queue
        connect('confirmationQueue', (nextChannel) => {
            nextChannel.sendToQueue('confirmationQueue', Buffer.from(JSON.stringify(order)), {
                persistent: true,
            });
        });
    }, { noAck: false });
});
