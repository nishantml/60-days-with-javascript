function find2ndMinMax(arr){

    let maxVal = arr[0]
    let maxVal2 = arr[0]
    let minVal = arr[0]
    let minVal2 = arr[0]
    for(let i=0;i<arr.length;i++){
        if(arr[i]> maxVal){
            maxVal2 = maxVal
            maxVal = arr[i]
        }

        if(arr[i]<minVal){
            minVal2 = minVal
            minVal = arr[i]
        }
    }

    console.log(`largest no -> ${maxVal}`)
    console.log(`second largest no -> ${maxVal2}`)
    console.log(`smallest no -> ${minVal}`)
    console.log(`second smallest no -> ${minVal2}`)
}

const arr = [2,3,1,4,11,0,12,11]

find2ndMinMax(arr)
