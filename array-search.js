let indexOfValue = function (array, key) {
    let low = 0, high = array.length-1;
    while(low<=high) {
        if(array[low]>key) return low;
        else if(array[high]<key) return high+1;
        let mid = Math.floor((low+high)/2);

        if(array[mid] === key) {
            if(mid === low || array[mid-1]!==key) return mid;
            high = mid;
        } else if(array[mid]<key) {
            if(mid<high && array[mid+1]>key) return mid+1;
            low = mid+1;
        } else {
            if(mid>low && array[mid-1]<key) return mid;
            high = mid-1;
        }
    }
    return -1;
}

let array = [1, 2, 2, 2, 2, 2, 4, 5, 5, 5, 5, 5, 5, 6, 7, 8, 9, 12, 33];
let index = indexOfValue(array, 3);
console.log(index);