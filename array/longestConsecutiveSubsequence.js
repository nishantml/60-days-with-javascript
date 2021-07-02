function longestConsecutiveSubsequence(arr){
    arr.sort((a,b)=>a-b);
    console.log(arr)
    let count  = 0
    let maxVal = 0
    for (let i = 0; i <arr.length-1 ; i++) {
        console.log(arr[i]+1,arr[i+1])
        if (arr[i]+1 == arr[i+1]){
            count++;
        }else{
            maxVal = Math.max(maxVal,count)
            count = 0
        }
    }

    return maxVal
}

console.log(longestConsecutiveSubsequence([1,9,3,10,4,20,2]))
