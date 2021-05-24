function duplicateChars(st){
    let stArr = st.split("")
    let Hash = []
    let duplicate = []
    for (let i = 0; i <stArr.length ; i++) {
        if (Hash.includes(stArr[i])){
            duplicate.push(stArr[i])
        }else{
            Hash.push(stArr[i])
        }
    }

    return duplicate
}


console.log(duplicateChars('Heelloo'))
