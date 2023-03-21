// arr1=[1,4.6,5,6,7,83,5,7,8,3443,,7,86,7,34,22,,86,9,]

// str=''

// for(i=0;i<arr1.length;i++){
//     for(j=0;j<i;j++){
//         if(arr1[i]<arr1[j]){
//             str+=arr1[j]
//         }
//         // str+= `\n`
//     }
// }
// console.log(str)






arr = [ 55,23,27,65]

for(i=0; i<arr.length; i++){
    for(j=0; j<i; j++)

    if(arr[i] < arr[j]){
       x = arr[i]
       arr[i] = arr[j]
       arr[j] = x    
    }
}
console.log(arr)


