// array should be sorted
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

let arr = [1, 2, 3, 4, 5, 6, 7, 10]
// console.log(binarySearchRecursion(arr, 0, arr.length - 1, 4))
