/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function(num) {
    let digit = Math.floor(Math.log2(num));
    for(let i=0; i<=digit; ++i) {
        num = num^(1<<i);
    }
    return num;
};

let ans = findComplement(4);
console.log(ans);