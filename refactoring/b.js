function filterNumbers(arr, type) {
    let result = [];
    if (type === 'even') {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] % 2 === 0) {
                result.push(arr[i]);
            }
        }
    } else if (type === 'odd') {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] % 2 !== 0) {
                result.push(arr[i]);
            }
        }
    } else if (type === 'greaterThanFive') {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] > 5) {
                result.push(arr[i]);
            }
        }
    }
    return result;
}

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(filterNumbers(numbers, 'even')); // [2, 4, 6, 8, 10]
console.log(filterNumbers(numbers, 'odd')); // [1, 3, 5, 7, 9]
console.log(filterNumbers(numbers, 'greaterThanFive')); // [6, 7, 8, 9, 10]


function isEven(number) {
    return number % 2 === 0;
}

function isOdd(number) {
    return number % 2 !== 0;
}

function isGreaterThanFive(number) {
    return number > 5;
}

function filterNumbers(arr, criteria) {
    return arr.filter(criteria);
}

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(filterNumbers(numbers, isEven)); // [2, 4, 6, 8, 10]
console.log(filterNumbers(numbers, isOdd)); // [1, 3, 5, 7, 9]
console.log(filterNumbers(numbers, isGreaterThanFive)); // [6, 7, 8, 9, 10]

/*
조건 -> 함수화를 통해 
새로운 조건을 추가하기 쉽게 만들었다. 
function isMultipleOfThree(number) {
    return number % 3 === 0;
}

console.log(filterNumbers(numbers, isMultipleOfThree)); // [3, 6, 9]

*/