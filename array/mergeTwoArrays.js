function sortedMerge(a, b, res, n, m) {
    // Sorting a[] and b[]
    a.sort((a, b) => a - b);
    b.sort((a, b) => a - b);

    // Merge two sorted arrays into res[]
    let i = 0, j = 0, k = 0;
    while (i < n && j < m) {
        if (a[i] <= b[j]) {
            res[k] = a[i];
            i += 1;
            k += 1;
        } else {
            res[k] = b[j];
            j += 1;
            k += 1;
        }
    }
    while (i < n) { // Merging remaining
        // elements of a[] (if any)
        res[k] = a[i];
        i += 1;
        k += 1;
    }
    while (j < m) { // Merging remaining
        // elements of b[] (if any)
        res[k] = b[j];
        j += 1;
        k += 1;
    }

    return res
}

// Driver code

let a = [10, 5, 15];
let b = [20, 3, 2, 12];
let n = a.length;
let m = b.length;

// Final merge list
let res = new Array(n + m);

console.log(sortedMerge(a, b, res, n, m))


