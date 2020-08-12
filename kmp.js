function patternSearch (str, pattern) {
    const lps = buildLps(pattern);
    const strLength = str.length, patternLength = pattern.length;
    let  i = 0, j = 0, index = -1;;

    while(i < strLength) {
        if(pattern[j] === str[i]) {
            ++i, ++j;
        }
        if(j === patternLength) return i-j;
        else if(pattern[j] !== str[i] && i<strLength) {
            if(j !== 0) j = lps[j-1];
            else ++i;
        }
    }

    return -1;
}

function buildLps (str) {
    const lps = [0];
    let i = 1, length = str.length;
    let len = 0;

    while(i<length) {
        if(str[i] === str[len]) {
            ++i;
            lps.push(++len);
        } else {
            if(len !== 0) {
                len = lps[len-1]
            } else {
                lps.push(0);
                ++i;
            }
        }
    }

    return lps;
}

let str = "aaaaaaaaaaaaba";
let pattern = "aaaaaaba";
console.log("Pattern found at index:", patternSearch(str, pattern));