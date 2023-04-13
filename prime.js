for(i=2;i<10000;i++){
    d=0
    for(j=2;j<i;j++){
        if(i%j==0){
            d=1;
            break;
        }
        
    }
    if(i>1 & d==0){
        console.log(i)
    }
}










// // var numArray = [2, 3, 4, 5, 6, 7, 8, 9, 10]

// // numArray = numArray.filter((number) => {
// //   for (var i = 2; i <= Math.sqrt(number); i++) {
// //     if (number % i === 0) return false;
// //   }
// //   return true;
// // });

// // console.log(numArray);














// arr1=[2,3,4,5,6,7,8,91,1,2,3332,444,555,66,77,17]
// for(i=1;i<=arr1.length; i++){

// num =arr1[i]
// ; 
// }
//  primeNumber = true;

// for(i=2; i<num; i++){
//     if(num % i == 0){
//          primeNumber = false;
//     }
// }

// if( primeNumber == true){
//     console.log(`${num} is a prime number`)
// }

// else{
//     console.log(`${num} not a prime num`)
// }















// function  prime(num) {
//     if (num < 2) return false;
//     for (  i = 2; i <= Math.sqrt(num); i++) {
//       if (num % i === 0) return false;
//     }
//     return true;
//   }
  
//   function findPrimes(arr) {
//       primes = [];
//     for (  i = 0; i < arr.length; i++) {
//       if ( prime(arr[i])) {
//         primes.push(arr[i]);
//       }
//     }
//     return primes;
//   }
  
//   // Example usage:
//     myArray = [2, 3, 4, 5, 6, 7, 8, 9, 10];
//     primesArray = findPrimes(myArray);
//   console.log(primesArray); 







// function  prime(num) {
//     if (num < 2) {
//       return false;
//     }
//     for (  i = 2; i <= num / 2; i++) {
//       if (num % i === 0) {
//         return false;
//       }
//     }
//     return true;
//   }
  
//   function getPrimes(arr) {
//       primes = [];
//     for (  i = 0; i < arr.length; i++) {
//       if ( prime(arr[i])) {
//         primes.push(arr[i]);
//       }
//     }
//     return primes;
//   }
  
//     numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9,11,13,15,17,19,21,23,25,27,29,199];
//     primes = getPrimes(numbers);
//   console.log(primes); 








//     arr = [1,500,58,51,197,199,151,8,40,30];
//    arr2 = [];

// for (  num of arr) {
//       i;

//     for (i = 2; i < num; i++) {
//         if (num % i == 0) {
//             break;
//         }
//     }

//     if (i == num) {
//         console.log(i);
//          arr2.push(num);
//     }
// }

// console.log( arr2);












// arr = [5, 500, 58, 51, 197, 199, 151, 8, 40, 30];
//   arr2 = [];

// for ( i = 0; i < arr.length; i++) {
//     num = arr[i];
//      prime = true;

//   for (  j = 2; j < arr[i]; j++) {
//     if (num % j == 0) {
//        prime = false;
//       break;
//     }
//   }

//   if ( prime  ) {
//      arr2.push(num);
//   }
// }

// console.log( arr2);









let string =  "madam"
let reversedString = "";

for (let i = string.length - 1; i >= 0; i--) {
  reversedString += string[i];
}

if (string === reversedString) {
  console.log("It is a palindrome " + string);
} else {
  console.log("It is not a palindrome " + string);
}
