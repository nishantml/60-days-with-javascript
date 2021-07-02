function mergeTwoSortedArrayWithoutExtraSpace(arr1, arr2) {
    let m = arr1.length
    let n = arr2.length

    // Consider each element `arr1[i]` of list `arr1[]` and ignore the element if it is
    // already in the correct order; otherwise, swap it with the next smaller
    // element, which happens to be the first element of `arr2[]`.
    for (let i = 0; i < m; i++) {
        // compare the current element of `arr1[]` with the first element of `arr2[]`
        if (arr1[i] > arr2[0]) {
            let temp = arr1[i]
            arr1[i] = arr2[0]
            arr2[0] = temp

            let first = arr2[0]
            // move `arr2[0]` to its correct position to maintain the sorted
            // order of `arr2[]`. Note: `arr2[1…n-1]` is already sorted
            let k = 1
            while (k < n && arr2[k] < first) {
                arr2[k - 1] = arr2[k]
                k += 1
            }
            arr2[k - 1] = first
        }
    }
    console.log(arr1)
    console.log(arr2)
}


let arr1 = [1, 3, 5, 7]
let arr2 = [0, 2, 6, 8, 9]
mergeTwoSortedArrayWithoutExtraSpace(arr1, arr2)
