// 모듈과 재사용성

// utils.js

function calculateDiscount(customer) {
    let discount;
    if (customer.type === 'regular') {
        discount = 0.1;
    } else if (customer.type === 'premium') {
        discount = 0.2;
    } else if (customer.type === 'vip') {
        discount = 0.3;
    } else {
        discount = 0;
    }
    return customer.amount - (customer.amount * discount);
}

function removeDuplicates(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (result.indexOf(arr[i]) === -1) {
            result.push(arr[i]);
        }
    }
    return result;
}

const numbers = [1, 2, 2, 3, 4, 4, 5, 6, 6];
console.log(removeDuplicates(numbers)); // [1, 2, 3, 4, 5, 6]

const regularCustomer = { type: 'regular', amount: 100 };
console.log(calculateDiscount(regularCustomer)); // 90


// discount.js

const discountRates = {
    regular: 0.1,
    premium: 0.2,
    vip: 0.3
};

export function calculateDiscount(customer) {
    const discount = discountRates[customer.type] || 0;
    return customer.amount - (customer.amount * discount);
}

// arrayUtils.js

export function removeDuplicates(arr) {
    return [...new Set(arr)];
}

// main.js

import { calculateDiscount } from './discount.js';
import { removeDuplicates } from './arrayUtils.js';

const numbers = [1, 2, 2, 3, 4, 4, 5, 6, 6];
console.log(removeDuplicates(numbers)); // [1, 2, 3, 4, 5, 6]

const regularCustomer = { type: 'regular', amount: 100 };
console.log(calculateDiscount(regularCustomer)); // 90
