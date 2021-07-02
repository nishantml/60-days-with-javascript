function binarySearchRecursion(nums, start, end, key) {
    while (start <= end) {
        let mid = parseInt((start + end) / 2)
        if (key == nums[mid]) {
            return mid
        }
        if (key > nums[mid]) {
            start = mid + 1
            return binarySearchRecursion(nums, start, end, key)
        } else {
            end = mid - 1;
            return binarySearchRecursion(nums, start, end, key)
        }
    }
}


function exponentialSearch(nums, key) {
    if (nums[0] == key) {
        return 0
    }
    let size = nums.length - 1
    let i = 1;
    while (i < size, nums[i] <= key) {
        i = i * 2
    }

    return binarySearchRecursion(nums, parseInt(i / 2), Math.min(size, i), key)
}

let arr = [1, 2, 3, 4, 5, 6, 7, 10]
console.log(exponentialSearch(arr, 7))
