/*
1
2 1
3 2 1
4 3 2 1
5 4 3 2 1
6 5 4 3 2 1
 */
function patter2(N) {
    for (let i = 1; i < N + 1; i++) {
        let pt = '';
        for (let j = i; j > 0; j--) {
            pt = pt + ' ' + j
        }
        console.log(pt)
    }

}

patter2(6)
