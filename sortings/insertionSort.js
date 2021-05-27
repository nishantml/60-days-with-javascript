function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let hole = i
        while (hole > 0) {
            if (arr[hole - 1] < arr[hole]) {
                let temp = arr[hole]
                arr[hole] = arr[hole - 1]
                arr[hole-1] = temp
            }
            hole--
        }
    }
    return arr
}

let arr = [3,2,3,5,6,1,0]

console.log(insertionSort(arr))
