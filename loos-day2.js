// arr=['deep','rajpoot', 410,567,['deeep',52234,010101]]
// console.log(arr.length)



// arr1=[1,3,2,4,4,5,6,7,8,9,3456,34,87654,67,345,93,54,654,8765,8765,43,83,]
// console.log(arr1.length)



// for(i=0;i<=21;i++){
//     console.log(arr1[i]%2==0)

// }

// num= 2
// num2= 3
// for(i=1;i<=10;i++){
//     result= num*i;
    
//     console.log(num,'*',i, '=',   result);
     
    
    
// }
 

//   res = "  1\t 2\t 3\t 4\t 5\t 6\t 7\t 8\t 9\t10"
// for (  i = 2; i <= 10; i++) {
//     res += `\n${i < 10 ? ' ' + i : i}`
//     for (  j = 2; j <= 10; j++) {
//         res += `\t${i * j >= 10 ? i*j : ' ' + i*j}`
//     }
// }
// console.log(res)



  string="";
for(  i=1; i<11; i++){
    string +=`\n`;
    for(j=1; j<11; j++){
  
        string += i*j ;
        string += '\t'
        }

}
console.log(string)



// var result = ' x   ';

// function buff(val){
//   var buff = '';
//   var pad = 4 - val;
//     while( pad-- > 0 )
//             buff += ' ';            
//   return buff;
// }

// for (var i = 1; i < 11; i++) {

//     for (var j = 1; j < 11; j++) {

//         if(i == 0 && j > 0){
//           result +=  j ;
//         } 
//         else if(j == 0 && i>0){
//           result +=  i ;
//         } 
//         else if(i>0 && j>0){
//         result += buff((i*j ).length ) + i*j;
//         }
//     }
//     result += '\n'
//     console.log(result)
// }