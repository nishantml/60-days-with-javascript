

const findKthMinMax = (arr,k,order='asc')=>{
    if(k>arr.length){
        console.log('K out of index')
        return -1
    }
    if (order ==='desc'){
        return arr.sort((a,b)=>b-a)[k-1]
    }else{
        return arr.sort((a,b)=>a-b)[k-1]
    }

}



let arr = [12,2,13,44,11,45]
console.log(findKthMinMax(arr,1,'asc'))


// todo:: Helper code to check how it is working
// function sortData(arr){
//     console.log(arr.sort((a,b)=>{
//         console.log(a,b)
//         // // a<b
//         // return a-b;
//         if(a > b) return 1;
//         if(a < b) return -1;
//         return 0;
//     }))
// }
