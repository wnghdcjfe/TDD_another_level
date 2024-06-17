const amqp = require('amqplib');

async function sendMessage(order) {
    try {
        const connection = await amqp.connect('amqp://localhost');
        const channel = await connection.createChannel();
        const queue = 'orderQueue';

        await channel.assertQueue(queue, {
            durable: true
        });

        channel.sendToQueue(queue, Buffer.from(JSON.stringify(order)), {
            persistent: true
        });

        console.log(" [x] Sent '%s'", JSON.stringify(order));

        setTimeout(() => {
            connection.close();
        }, 500);
    } catch (error) {
        console.error('Error sending message:', error);
    }
}

module.exports = { sendMessage };
