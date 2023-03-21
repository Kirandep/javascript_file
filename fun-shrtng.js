function printarr(arr){
     y=arr;
    return {
        lengthofarr:`${arr.length}`,
        shorting:()=>{
            for(i=0; i<arr.length; i++){
                for(j=0; j<i; j++)
            
                if(arr[i] < arr[j]){
                   x = arr[i]
                   arr[i] = arr[j]
                   arr[j] = x    
                }
        }
        return y
    }
}
}

ee=printarr([2,3,5,4,7,6,98,23,4,56,1,57,8,9])
console.log(ee)

console.log(ee.shorting(y))







// function printArray(arr)
// {
//     for(i=0;i<arr.length;i++)
//     {
//         console.log(arr)
//         return {length_array:arr.length,sorting:(arr)=>{

//             // arr1=[20,30,50,70,10]
// for(i=0;i<arr.length;i++)
// {
    
//     for(j=0;j<arr.length;j++)
//     {
//         if(arr[i]<arr[j])
//         {
//             temp=arr[i]
//             arr[i]=arr[j]
//             arr[j]=temp
            
//         }
//     }
//     return arr
// }
//         }
//     }
// }
// }
// returnArray=printArray([1,2,3,4,5,6,7,8,9])
// console.log(returnArray)
// console.log(returnArray.sorting())