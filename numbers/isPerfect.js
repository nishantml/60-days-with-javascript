/*

Examples:

Input: n = 15
Output: false
Divisors of 15 are 1, 3 and 5. Sum of
divisors is 9 which is not equal to 15.

Input: n = 6
Output: true
Divisors of 6 are 1, 2 and 3. Sum of
divisors is 6.


 */
function isPerfect(num){
    let number = num
    let pSum = 0
    for (let i = 1; i <= parseInt(num/2)+1; i++) {
        if (number % i == 0){
            pSum += i
        }
    }

    if (number === pSum){
        return true
    }else{
        return false
    }
    
}


console.log(isPerfect(6))
