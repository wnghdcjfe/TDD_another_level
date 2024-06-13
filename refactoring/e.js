// 느슨한 결합
class PaymentService {
    processPayment(amount) {
        console.log(`Processing payment of ${amount}`);
        return true;
    }
}

class ShippingService {
    shipOrder(orderId) {
        console.log(`Shipping order ${orderId}`);
        return true;
    }
}

class OrderService {
    constructor() {
        this.paymentService = new PaymentService();
        this.shippingService = new ShippingService();
    }

    placeOrder(orderId, amount) {
        if (this.paymentService.processPayment(amount)) {
            this.shippingService.shipOrder(orderId);
        }
    }
}

// 의존성 주입을 통해 느슨한 결합을 구현할 수 있다. 
const orderService = new OrderService();
orderService.placeOrder('12345', 100.0);

class PaymentService {
    processPayment(amount) {
        console.log(`Processing payment of ${amount}`);
        return true;
    }
}

class ShippingService {
    shipOrder(orderId) {
        console.log(`Shipping order ${orderId}`);
        return true;
    }
}

class OrderService {
    constructor(paymentService, shippingService) {
        this.paymentService = paymentService;
        this.shippingService = shippingService;
    }

    placeOrder(orderId, amount) {
        if (this.paymentService.processPayment(amount)) {
            this.shippingService.shipOrder(orderId);
        }
    }
}

// 의존성 주입을 통해 서비스를 전달
const paymentService = new PaymentService();
const shippingService = new ShippingService();
const orderService = new OrderService(paymentService, shippingService);

orderService.placeOrder('12345', 100.0);

class MockPaymentService {
    processPayment(amount) {
        console.log(`Mock processing payment of ${amount}`);
        return true;
    }
}

class MockShippingService {
    shipOrder(orderId) {
        console.log(`Mock shipping order ${orderId}`);
        return true;
    }
}

const mockPaymentService = new MockPaymentService();
const mockShippingService = new MockShippingService();
const orderServiceForTest = new OrderService(mockPaymentService, mockShippingService);

orderServiceForTest.placeOrder('12345', 100.0);


/*
주요 변경점 및 이점
의존성 주입:

OrderService는 PaymentService와 ShippingService를 직접 생성하지 않고, 생성자에서 주입받습니다. 
이를 통해 OrderService가 특정 구현에 덜 의존적이게 됩니다. 
OrderService는 인터페이스를 통해 다른 구현체와 쉽게 교체할 수 있습니다.  
*/
