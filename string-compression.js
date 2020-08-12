    function arrayCompression (str) {
    let charMap = { };
    let result = "";
    let char = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    for(let char of str) {
        if(!charMap[char]) {
            charMap[char] = 1;
        } else {
            charMap[char] += 1;
        }
    }

    for(let ch of char) {
        if(charMap[ch]) {
            result = result + ch + charMap[ch];
        }
    }
    
    return result;
}

let str = "aaaaabbbbcccdde";
let ans = arrayCompression(str);
console.log(ans);

str = "dcdacbcbbdbaaa";
ans = arrayCompression(str);
console.log(ans);