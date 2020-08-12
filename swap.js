function swap_1(num1, num2) {
    num1 = num1 - num2;
    num2 += num1;
    num1 = num2 - num1;
    console.log(num1, num2);
}

function swap_2(num1, num2) {
    [num1, num2] = [num2, num1];
    console.log(num1, num2);
}

swap_1(5, 7);
swap_2(10, 14);