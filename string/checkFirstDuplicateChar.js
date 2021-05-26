function checkFirstDuplicateChar(st) {
    let stArr = st.split("");
    let Hash = [];
    for (let i = 0; i < stArr.length; i++) {
        if (Hash.includes(stArr[i])) {
            return stArr[i]
        } else {
            Hash.push(stArr[i])
        }
    }
    return -1

}
// 2 minutes

console.log(checkFirstDuplicateChar('Hello'))
