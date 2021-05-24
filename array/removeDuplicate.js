/**
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = function (nums) {
    let hash = []
    let curr_index = 0
    for (let i = 0; i < nums.length; i++) {
       if (!hash.includes(nums[i])){
           hash.push(nums[i])
           nums[curr_index] = nums[i]
           curr_index ++
       }
    }
    console.log(nums.slice(0,curr_index))

    return curr_index

};

let arr = [0,0,1,1,1,2,2,3,3,4,5,5,6,7]
console.log(removeDuplicates(arr))

// above logic will work for sorted and non-sorted array
