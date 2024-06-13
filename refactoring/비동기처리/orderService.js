const { connect } = require('./queue');

function createOrder(order) {
    let cnt = 12010;
    connect('orderQueue', (channel) => {  
        setInterval(() => {
            order.id = cnt; 
            channel.sendToQueue('orderQueue', Buffer.from(JSON.stringify(order)), {
                persistent: true,
            }); 
            console.log(`Order ${order.id} sent to queue`); 
            cnt++;
        }, 2000); 
    });
}

connect('confirmationQueue', (channel) => {
    channel.consume('confirmationQueue', (msg) => {
        const order = JSON.parse(msg.content.toString());
        console.log(`Order ${order.id} created`);
        channel.ack(msg);
    }, { noAck: false });
});

const order = { id: '12345', amount: 100.0 };
createOrder(order);
