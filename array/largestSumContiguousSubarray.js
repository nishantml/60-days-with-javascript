function largestSumContiguousSubarray(arr){
    let len = arr.length
    let max = -100
    for (let i = len; i > 0; i--) {
        for (let j = 0; j < len; j++) {
            if (i !== j && j<i){
                let temp = arr.slice(j,i).reduce((a, b) => a + b, 0)
                if (temp > max){
                    max = temp
                }
            }

        }
    }

    return max

}


function kadane(arr){
    let meh = 0
    let mcf = -100
    for (const arrElement of arr) {
        meh = meh + arrElement
        meh = Math.max(meh,arrElement)
        mcf = Math.max(meh,mcf)
    }

    return mcf
}


let arr = [1,2,3,-2,5]
// console.log(largestSumContiguousSubarray(arr))
console.log(kadane([-1,-2,-3,-4]))
console.log(kadane(arr))
