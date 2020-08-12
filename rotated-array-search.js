function rotatedArrayIndex(array, key) {
    let left = 0, right = array.length-1;
    while(left<=right) {
        let mid = Math.floor((left+right)/2);
        if(array[mid]===key) return mid;
        else if(array[left]<array[mid] && key>=array[left] && key<array[mid]) right = mid-1;
        else if(array[mid]<array[right] && key>array[mid] && key<=array[right]) left = mid+1;
        else if(array[left]>array[mid]) right = mid-1;
        else left = mid+1;
    }
}

let array = [5, 6, 7, 8, 9, 10, 11, 12, 1, 2, 3, 4];
let index = rotatedArrayIndex(array, 2);
console.log(index);