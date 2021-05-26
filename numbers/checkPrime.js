function checkPrime(num) {
    let number = num
    for (let i = 2; i < parseInt(num / 2); i++) {
        if (number % i == 0) {
            return false
        }
    }
    return true
}


console.log(checkPrime(6))
