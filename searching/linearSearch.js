function linearSearch(nums, key) {
    for (let i = 0; i < nums.length; i++) {
        if (key == nums[i]) {
            return i
        }
    }
    return -1
}

let arr = [1, 2, 3, 4, 5, 6, 7, 10]

console.log(linearSearch(arr, 12))
