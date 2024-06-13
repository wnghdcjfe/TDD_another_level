const amqp = require('amqplib/callback_api');

function connect(queue, callback) {
    amqp.connect('amqp://localhost', (error0, connection) => {
        if (error0) {
            throw error0;
        }
        connection.createChannel((error1, channel) => {
            if (error1) {
                throw error1;
            }
            channel.assertQueue(queue, { durable: true });
            callback(channel);
        });
    });
}

module.exports = { connect };
