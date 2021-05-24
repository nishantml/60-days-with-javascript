function moveNegativeToLeft(arr){
    let negIndex = 0
    for (let i = 0; i <arr.length ; i++) {
        if (arr[i] < 0){
            let temp = arr[i]
            arr[i] = arr[negIndex]
            arr[negIndex] = temp

            negIndex++
        }
    }
    return arr
}

let arr =  [-1,2,3,-1,-4,11]
console.log(moveNegativeToLeft(arr))


// 1. Bruteforce we can do it by using sorting
// optimal way is above one
