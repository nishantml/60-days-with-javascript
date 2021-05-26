function isAnagram(str1, str2) {
    st1 = str1.toLowerCase().split("").sort().join("")
    st2 = str2.toLowerCase().split("").sort().join("")
    console.log(st1)
    console.log(st2)
    if (st1 === st2) {
        return true
    } else {
        return false
    }
}


console.log(isAnagram("Mary", "Army"))
