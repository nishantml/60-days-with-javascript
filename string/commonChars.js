/*
Given an array words of strings made only from lowercase letters, return a list of all characters that show up in all strings within the list (including duplicates).  For example, if a character occurs 3 times in all strings but not 4 times, you need to include that character three times in the final answer.

You may return the answer in any order.



Example 1:

Input: ["bella","label","roller"]
Output: ["e","l","l"]
Example 2:

Input: ["cool","lock","cook"]
Output: ["c","o"]


Note:

1 <= words.length <= 100
1 <= words[i].length <= 100
words[i] consists of lowercase English letters.


 */


function commonChars(arr) {
    let st1 = arr[0].split("");
    let st2 = arr[1].split("");
    let st3 = arr[2].split("");
    let data = []
    for (let i = 0; i < arr[0].length; i++) {
        f1 = st2.indexOf(st1[i])
        f2 = st3.indexOf(st1[i])
        if (f1 >= 0 && f2 >= 0) {
            data.push(st1[i])
            delete st2[f1]
            delete st3[f2]
        }
    }

    return data;

}

console.log(commonChars(["bella", "label", "roller"]))
console.log(commonChars(["cool", "lock", "cook"]))
