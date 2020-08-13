function addBinaryString (num1, num2) {
    let sum=0, carry=0, ans = "";
    let num1Len = num1.length - 1, num2Len = num2.length - 1;

    while(num1Len >= 0 || num2Len >= 0) {
        if(num1Len>=0 && num2Len>=0) {
            if(num1[num1Len] === num2[num2Len]) {
                if(num1[num1Len] === "1") {
                    if(carry === 0) ans = "0" + ans;
                    else ans = "1" + ans;
                    carry = 1;
                } else {
                    if(carry === 0) ans = "0" + ans;
                    else ans = "1" + ans;
                    carry = 0;
                }
            } else {
                if(carry === 0) {
                    ans = "1" + ans;
                    carry = 0;
                } else {
                    ans = "0" + ans;
                    carry = 1;
                }
            }
            --num1Len, --num2Len;
        } else {
            if(num1Len >= 0) {
                if(carry === 1) {
                    if(num1[num1Len] === "1") {
                        ans = "0" + ans;
                        carry = 1;
                    } else {
                        ans = "1" + ans;
                        carry = 0;
                    }
                } else {
                    ans = num1[num1Len] + ans;
                }
                --num1Len;
            } else {
                if(carry === 1) {
                    if(num2[num2Len] === "1") {
                        ans = "0" + ans;
                        carry = 1;
                    } else {
                        ans = "1" + ans;
                        carry = 0;
                    }
                } else {
                    ans = num2[num2Len] + ans;
                }
                --num2Len;
            }
        }
    }
    if(carry===1) ans = "1" + ans;
    return ans;
}

let num1 = "10100010101011";
let num2 = "11111110101011";
console.log(addBinaryString(num1, num2));  // 110100001010110

num1 = "10100010101011";
num2 = "11111110011";
console.log(addBinaryString(num1, num2));  // 11000010011110