function getPairsCount(arr,target){
    let count =0
    for (let i = 0; i < arr.length-1; i++) {
        for (let j = i+1; j < arr.length; j++) {
            if (arr[i]+arr[j] === target){
                count ++
            }
        }
    }
    return count
}


console.log(getPairsCount([1, 5, 7, 1],6))
console.log(getPairsCount([1, 1,1,1],2))
