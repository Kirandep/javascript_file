name1='deep'
// function callname(name){
//     console.log(`name call in fun ${name}`)
// }
// callname(name1)



// arr1=['DEEP','SINGH',1223,567678]
// arr2="---------------------------"
// for(i=1;i<100;i++){

//      setTimeout(() => {
//                console.log(`this is my name ${name1}`)},1000)
     
//      // console.log(arr2)
//      for(j=1;j<i;j++){
               
//           setTimeout(() => {
//                console.log(arr1)},1000)
//           // arr2+="\n"
//      }
     
// }








arr1=['DEEP','SINGH',1223,567678]

function deep() {
     console.log("Delayed message");
   }
   setTimeout(()=>{
     deep()},3000)

//    var count = 0;

 
function printMessage() {
  console.log(arr1);
//   count++;
}


setInterval(printMessage, 100);



