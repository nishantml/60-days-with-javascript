function findFirstNonRepetingChar(st) {
    let stArr = st.split("")
    Hash = []
    for (let i = 0; i < stArr.length; i++) {
        let flag = true
        for (let j = i + 1; j < stArr.length; j++) {
            if (Hash.includes(stArr[i]) || stArr[i] !== stArr[j]){
                Hash.push(stArr[i])
                flag = false
                break
            }
        }
        if (flag && !Hash.includes(stArr[i])){
            return stArr[i]
        }
    }

    return -1
}


console.log(findFirstNonRepetingChar("hehelo"))
