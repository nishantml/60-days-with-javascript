function nprime(n) {
    let num = 0
    let i = 1
    while (num < n) {
        let flag = true
        for (let j = 2; j < i-1; j++) {
            if (i % j == 0){
                flag = false
                break
            }
        }
        if (flag){
            num ++
            console.log(i)
        }
        i++
    }
}


nprime(15)
// 14 minutes
