function sumInRange(num1, num2) {
    let sum = num1 + num2;
    if (sum >= 50 && sum <= 80) {
        return 65;
    } else {
        return 80;
    }
}

console.log(sumInRange(30, 20)); 
console.log(sumInRange(10, 10));  
