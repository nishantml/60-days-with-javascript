function checkAnagram(num1, num2) {
    nu1 = getNumberArray(num1).sort((a, b) => a - b).join("")
    nu2 = getNumberArray(num2).sort((a, b) => a - b).join("")
    if (nu1 == nu2) {
        return true
    } else {
        return false
    }
    console.log(nu1)
}

function getNumberArray(num) {
    let arr = []
    while (num > 0) {
        rem = num % 10
        num = parseInt(num / 10)
        arr.push(rem)
    }
    return arr
}


console.log(checkAnagram(123, 312))
// Using sorting
