function maximumSumSubarray(array) {
    let maxSum = Number.MIN_SAFE_INTEGER;
    let currentSum = 0;

    for(let i = 0; i < array.length; ++i) {
        currentSum += array[i];
        if(currentSum > maxSum) maxSum = currentSum;
        if(currentSum < 0) currentSum = 0;
    }
    return maxSum;
}


let array = [-1, -2, 1, 2, 3, -5, 4, 5];
let result = maximumSumSubarray(array);

console.log(result);