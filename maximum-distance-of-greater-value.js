function nSquareSolution(array) {
    let ans = 0;
    const n = array.length;
    for(let i=0; i<n-1; ++i) {
        for(let j=i+1; j<n; ++j) {
            if(array[i]<=array[j] && j-i>ans) {
                ans = j-i;
            }
        }
    }
    return ans;
}

function nLogNSolution(array) {
    let map = new Map();
    let ans = -1;
    let minIndex = Number.MAX_SAFE_INTEGER;
    for(let i=0; i<array.length; ++i) {
        map.set(i, array[i]);
    }
    let sortedMap = new Map([...map.entries()].sort((a, b)=> a[1]-b[1]));   // sorted by value

    for(let[key, value] of sortedMap) {
        let index = key;
        if(index<=minIndex) minIndex = index;
        else ans = Math.max(ans, index-minIndex);
    }

    return ans;
}

let array = [3, 5, 4, 2, 3, 2, 1];
let result = nSquareSolution(array);

console.log(result);

result = nLogNSolution(array);

console.log(result);