function findDuplicate(arr){
    let hash = []
    let duplicate  = []
    for(let i=0;i<arr.length;i++){
        // if (hash.includes(arr[i])){ //ES6 support
        if (hash.indexOf(arr[i]) !== -1){
            duplicate.push(arr[i])
        }else{
            hash.push(arr[i])
        }
    }
    return duplicate
}

let arr = [12,2,2,13,44,11,45]
console.log(findDuplicate(arr))
