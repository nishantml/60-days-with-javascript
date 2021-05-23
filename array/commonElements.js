function commonElements(arr1,arr2,arr3){
    let commonLst = []
    for (let i = 0; i < arr1.length; i++) {
        if (arr2.includes(arr1[i]) && arr3.includes(arr1[i])){
            commonLst.push(arr1[i])
        }
    }

    return commonLst;
}


console.log(commonElements([1, 5, 10, 20, 40, 80],[6, 7, 20, 80, 100],[3, 4, 15, 20, 30, 70, 80, 120]))
