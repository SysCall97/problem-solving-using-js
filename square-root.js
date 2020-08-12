function sqrt (val) {
    let low = 0, high = val/2;
    while(true) {
        let mid = (low + high) / 2;
        let psudoVal = mid * mid;
        if (Math.abs(psudoVal - val) <= 0.000001) return mid;
        else if (mid * mid < val) low = mid;
        else high = mid;
    }
}

console.log("Sqrt of 10:",sqrt(10).toFixed(3));
console.log("Sqrt of 36:",sqrt(36).toFixed(3));
console.log("Sqrt of 90:",sqrt(90).toFixed(3));