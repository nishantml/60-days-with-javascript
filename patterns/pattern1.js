/*

1
2 3 4
5 6 7 8 9
 */
function pattern1(rows, countStart, step) {
    row = 0
    initial = 1
    while (row < rows) {
        let pt = ''
        for (let i = 0; i < initial; i++) {
            pt = pt + ' ' + countStart
            countStart++
        }
        console.log(pt)
        initial = initial + step
        row++
    }
}

pattern1(3, 1, 2)
