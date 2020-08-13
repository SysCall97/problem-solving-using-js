function KMP (str, pattern) {
    const strLength = str.length, pattLength = pattern.length;
    const lps = buildLps(pattern, pattLength);
    let i = 0, j = 0;

    while(i < strLength) {
        if(str[i] === pattern[j]) {
            ++i, ++j;
            if(j === pattLength) 
                return true;
        } else {
            if(j !== 0) j = lps[j-1];
            else ++i;
        }
    }

    return false;
}

function buildLps (str, strLength) {
    const lps = [0];
    let i = 1, len = 0;

    while(i < strLength) {
        if(str[i] === str[len]) {
            lps.push(++len);
            ++i;
        } else {
            if(len !== 0) len = lps[len-1];
            else {
                ++i;
                lps.push(0);
            }
        }
    }

    return lps;
}

function isRotation (str, pattern) {
    str = str + str;
    return KMP(str, pattern)
}

let str = "asjhdfjhfjhsd";
let pattern = "jhsdasjh";

console.log(isRotation(str, pattern));

str = "asjhdfjhfjhsd";
pattern = "jskdjdajsdh";

console.log(isRotation(str, pattern));