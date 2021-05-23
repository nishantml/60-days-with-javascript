/**
 * @param {number[]} arr
 * @param {number} N
 * @return {number[]}
 */
function rotateByN(arr,N){
    let to_left = arr.slice(arr.length-N,arr.length)
    let to_right = arr.slice(0,arr.length-N)
    return to_left.concat(to_right);
}


let arr = [1, 2, 3, 4, 5]
console.log(rotateByN(arr,1))
