let factorial = function(a) {
    if(a==0) return 1;
    return a*factorial(a-1);
}

let numberOfPaths = function (a, b) {
    --a, --b;
    return factorial(a+b)/(factorial(a)+factorial(b));
}

let a = 20, b = 20;
let result = numberOfPaths(a, b);
console.log(result);