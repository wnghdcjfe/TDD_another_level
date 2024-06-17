const amqp = require('amqplib');

async function consumeMessages() {
    try {
        const connection = await amqp.connect('amqp://localhost');
        const channel = await connection.createChannel();
        const queue = 'orderQueue';

        await channel.assertQueue(queue, {
            durable: true
        });

        console.log(" [*] Waiting for messages in %s. To exit press CTRL+C", queue);

        channel.consume(queue, async (msg) => {
            if (msg !== null) {
                const order = JSON.parse(msg.content.toString());
                console.log(" [x] Received '%s'", JSON.stringify(order));

                // 여기에 결제 처리 로직을 추가합니다.
                console.log(`Processing payment for order ${order.id}`);

                // 주문 상태 업데이트 로직을 추가합니다.
                console.log(`Order ${order.id} processed successfully`);

                channel.ack(msg);
            }
        });
    } catch (error) {
        console.error('Error consuming messages:', error);
    }
}

module.exports = { consumeMessages };
