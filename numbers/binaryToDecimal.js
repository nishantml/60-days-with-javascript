function binaryToDecimal(num) {
    const binary = num;
    let sum = 0
    let power = 0
    while (num > 0) {
        let rem = num % 10
        num = parseInt(num / 10)
        sum =  sum+ rem * Math.pow(2,power)
        power ++
    }
    return sum
}

console.log(binaryToDecimal(101100))
console.log(binaryToDecimal(10001000))

// 8 minutes

