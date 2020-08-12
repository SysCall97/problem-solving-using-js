function findFirstIndex(array, key) {
    let left = 0, right = array.length - 1;
    while(left<=right) {
        if(array[left]===key) return left;
        let mid = Math.floor((left + right)/2);
        if(array[mid]===key) {
            if(mid>left && array[mid-1]<key) return mid;
            right = mid-1;
        } else if(array[mid]<key) left = mid+1;
        else right = mid-1;
    }
    return -1;
}

function findLastIndex(array, key) {
    let left = 0, right = array.length - 1;
    while(left<=right) {
        if(array[right]===key) return right;
        let mid = Math.floor((left + right)/2);
        if(array[mid]===key) {
            if(mid<right && array[mid+1]>key) return mid;
            left = mid+1;
        } else if(array[mid]<key) left = mid+1;
        else right = mid-1;
    }
    return -1;
}

function solve(array, key) {
    return [findFirstIndex(array, key), findLastIndex(array, key)];
}


let array = [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 3, 4, 5, 6];
let range = solve(array, 2);
console.log(range);