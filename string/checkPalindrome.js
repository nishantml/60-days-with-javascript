function checkPalindrome(st) {
    return st.split("").reverse().join("") === st ? 'Yes' : 'NO'
}


console.log(checkPalindrome('abaa'))
