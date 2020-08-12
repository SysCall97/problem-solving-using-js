function maximumUnsortedSubarray(array) {
    let start = -1, end = -1;
    let min = Number.MAX_SAFE_INTEGER, max = Number.MIN_SAFE_INTEGER;

    // Start point finding
    for(let i=0; array.length-1; ++i) {
        if(array[i]>array[i+1]) {
            start = i;
            end = i+1;
            break;
        }
    }

    // End point finding
    for(let i=array.length-1; i>=0; --i) {
        if(array[i]<array[i-1]) {
            end = i;
            break;
        }
    }

    // Finding maximum and minimum of array[start:end]
    for(let i=start; i<=end; ++i) {
        if(array[i]<min) min = array[i];
        if(array[i]>max) max = array[i];
    }

    // Finding if any value of array[0:start-1] is greater than the max value of array[start:end]
    for(let i=0; i<start; ++i) {
        if(array[i]>min) {
            start = i;
            break;
        }
    }

    // Finding if any value of array[length:end+1] is less than the min value of array[start:end]
    for(let i=array.length-1; i>end; --i) {
        if(array[i]<max) {
            end = i;
            break;
        }
    }

    return[start, end];

}

let array = [1, 2, 3 ,6, 4, 5, 3, 5, 7];
let indices = maximumUnsortedSubarray(array);

console.log("Start:",indices[0]);
console.log("End:",indices[1]);