function reverseArrayInPlace(arr) {
    for (var i = 0; i <= (arr.length / 2); i++) {
        let el = arr[i];
        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = el;
    }
    return arr;
}


console.log(reverseArrayInPlace([1, 3, 6, 9, 5, 2, 8, 5]))
