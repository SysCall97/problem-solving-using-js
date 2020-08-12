function arrayCompression (str) {
    let charMap = { };
    let result = "";
    for(let char of str) {
        if(!charMap[char]) {
            charMap[char] = 1;
        } else {
            charMap[char] += 1;
        }
    }

    for(let char in charMap) {
        result = result + char + charMap[char];
    }

    return result;
}

let str = "aaaaabbbbcccdde";
let ans = arrayCompression(str);
console.log(ans);