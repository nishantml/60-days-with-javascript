function binarySearch(nums, key) {
    if (key > nums[nums.length - 1]) {
        return -1
    }
    let start = 0
    let end = nums.length - 1

    while (start <= end) {
        let mid = parseInt((start + end) / 2)
        if (key == nums[mid]) {
            return mid
        }
        if (key > nums[mid]) {
            start = mid + 1
        } else {
            end = mid - 1;
        }
    }
    return -1

}


console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 10], 4))
