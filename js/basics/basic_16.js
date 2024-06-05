function computeSum(num1, num2) {
    let sum = num1 + num2;
    if (num1 === num2) {
        return sum * 3;
    } else {
        return sum;
    }
}

console.log(computeSum(3, 4));
console.log(computeSum(5, 5));
