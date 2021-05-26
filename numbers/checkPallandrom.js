function checkPallandrom(num){
    const n = num
    let s = 0
    while(num > 0 ){
        rem = num%10
        num = parseInt(num / 10)
        s = s * 10 + rem
    }
    if (s === n){
        return true
    }else{
        return false
    }
}

// 10 minutes

console.log(checkPallandrom(121))
