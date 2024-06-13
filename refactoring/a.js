function calculateArea(shape, options) {
    if (shape === 'rectangle') {
        return options.width * options.height;
    } else if (shape === 'circle') {
        return Math.PI * Math.pow(options.radius, 2);
    } else if (shape === 'triangle') {
        return 0.5 * options.base * options.height;
    } else {
        return 0;
    }
}

let rectangle = calculateArea('rectangle', { width: 10, height: 20 });
let circle = calculateArea('circle', { radius: 10 });
let triangle = calculateArea('triangle', { base: 10, height: 5 });

console.log(rectangle); // 200
console.log(circle); // 314.1592653589793
console.log(triangle); // 25


class Shape {
    static calculateArea(shape) {
        return shape.getArea();
    }
}

class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    getArea() {
        return this.width * this.height;
    }
}

class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    getArea() {
        return Math.PI * Math.pow(this.radius, 2);
    }
}

class Triangle {
    constructor(base, height) {
        this.base = base;
        this.height = height;
    }

    getArea() {
        return 0.5 * this.base * this.height;
    }
}

const rectangle = Shape.calculateArea(new Rectangle(10, 20));
const circle = Shape.calculateArea(new Circle(10));
const triangle = Shape.calculateArea(new Triangle(10, 5));

console.log(rectangle); // 200
console.log(circle); // 314.1592653589793
console.log(triangle); // 25

class Pentagon {
    constructor(sideLength, apothem) {
        this.sideLength = sideLength;
        this.apothem = apothem; 
    }

    getArea() {
        return 0.5 * this.sideLength * 5 * this.apothem;
    }
}

// 새 도형 사용 예시
const pentagon = Shape.calculateArea(new Pentagon(10, 7));
console.log(pentagon); // 해당 오각형의 면적 출력 

/*
개방 - 폐쇄 원칙을 적용한 리팩토링 

1. 확장에 대해서 열려 있음.
리팩토링된 코드에서는 새로운 도형을 추가하고자 할 때 기존 코드를 수정할 필요 없이 새로운 클래스를 추가할 수 있습니다. 
예를 들어, 새로운 Pentagon 클래스를 추가하고 싶다면, 다음과 같이 새로운 클래스를 작성하기만 하면 됩니다:

class Pentagon {
    constructor(sideLength, apothem) {
        this.sideLength = sideLength;
        this.apothem = apothem;
    }

    getArea() {
        return 0.5 * this.sideLength * 5 * this.apothem;
    }
}

// 새 도형 사용 예시
const pentagon = Shape.calculateArea(new Pentagon(10, 7));
console.log(pentagon); // 해당 오각형의 면적 출력 

2. 수정에 대해서 닫혀 있음.
새로운 도형을 추가하기 위해 이들을 수정할 필요가 없습니다. 이는 코드가 수정에 대해 닫혀 있음을 의미합니다. 
따라서 기존 코드의 안정성을 유지하면서 새로운 기능을 추가할 수 있습니다.

이를 통해 확장성과 유지보수성을 크게 향상시킬 수 있습니다.  
*/