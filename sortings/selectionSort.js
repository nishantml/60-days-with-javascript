function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let curr = i
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[curr] > arr[j]) {
                curr = j
            }
        }
        let temp = arr[curr]
        arr[curr] = arr[i]
        arr[i] = temp
    }
    return arr
}


let arr = [3, 2, 3, 5, 6, 1, 0]

console.log(selectionSort(arr))
