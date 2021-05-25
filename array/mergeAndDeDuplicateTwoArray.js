function getDeDuplicateArr(arr) {
    let deDup  = []

    for (let index = 0; index < arr.length; index++) {
        if(!deDup.includes(arr[index])){
            deDup.push(arr[index])
        }
    }
    // if you want to sort it
    // return deDup.sort((a,b)=>a-b)
    // else
    return deDup
}
let arr1 = [1,3,4,3]
let arr2 = [2,3,4,5]
let newArr = [...arr1,...arr2]
console.log(getDeDuplicateArr(newArr))
