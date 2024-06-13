function removeDuplicates(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (result.indexOf(arr[i]) === -1) {
            result.push(arr[i]);
        }
    }
    return result;
}

let numbers = [1, 2, 2, 3, 4, 4, 5, 6, 6];
console.log(removeDuplicates(numbers)); // [1, 2, 3, 4, 5, 6]


function removeDuplicates(arr) {
    return [...new Set(arr)];
}

let numbers = [1, 2, 2, 3, 4, 4, 5, 6, 6];
console.log(removeDuplicates(numbers)); // [1, 2, 3, 4, 5, 6]

// 성능향상을 위한 리팩토링

function measurePerformance(fn, label, arr) {
    const start = performance.now();
    fn(arr);
    const end = performance.now();
    console.log(`${label}: ${end - start}ms`);
}

let largeArray = Array.from({ length: 100000 }, (_, i) => i % 100); // 100,000개의 요소가 있는 배열, 중복 포함

measurePerformance(removeDuplicatesUsingLoops, "Using Loops", largeArray);
measurePerformance(removeDuplicatesUsingSet, "Using Set", largeArray);

function removeDuplicatesUsingLoops(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (result.indexOf(arr[i]) === -1) {
            result.push(arr[i]);
        }
    }
    return result;
}

function removeDuplicatesUsingSet(arr) {
    return [...new Set(arr)];
}
