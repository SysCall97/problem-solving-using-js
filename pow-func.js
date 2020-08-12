function pow (key, power) {
    if (power === 1) return key;
    if (power % 2 ===0) {
        let halfPower = Math.round(power / 2);
        let ans = pow(key, halfPower);
        return ans * ans;
    } else {
        let ans = pow(key, power-1);
        return key * ans;
    }
}


console.log("3^7: ", pow(3, 7));
console.log("10^20: ", pow(10, 20));
console.log("7^36: ", pow(7, 36));