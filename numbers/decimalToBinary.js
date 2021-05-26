function decimalToBinary(num) {
    const decimal = num;
    let binary = []
    let bin = 0
    let i = 1
    while (num > 0) {
        rem = num % 2
        num = parseInt(num / 2)
        binary.push(rem)
        bin = bin + rem * i
        i = i * 10
    }
    // return binary.reverse().join("")
    return bin
}

console.log(decimalToBinary(112))
// console.log(decimalToBinary(44))

// 4 minutes
// https://www.tutorialspoint.com/how-to-convert-decimal-to-binary
