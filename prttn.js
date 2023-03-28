// hollow prttn

string="";

// for( i=0;i<10;i++){
//     for(j=0;j<10;j++){
//          if(i=0){
//             string+="*"
//             console.log(string)
//          }
//          else{
//             string+=" "
//          }
//     }
//     string +='\n'
// }
// console.log(string)




string="";

for( i=0;i<11;i++){
    for(j=0;j<10;j++){
        if(j==0 || i==0)
        string +=' *';
        
        
        else(
            string +=" "
        )
    }
    string +='\n'
}
console.log(string)


// program to check if a number is prime or not

// take input from the user



// const number =  7;
// let isPrime = true;

// // check if number is equal to 1
// if (number === 1) {
//     console.log("1 is neither prime nor composite number.");
// }

// // check if number is greater than 1
// else if (number > 1) {

//     // looping through 2 to number-1
//     for (let i = 2; i < number; i++) {
//         if (number % i == 0) {
//             isPrime = false;
//             break;
//         }
//     }

//     if (isPrime) {
//         console.log(`${number} is a prime number`);
//     } else {
//         console.log(`${number} is a not prime number`);
//     }
// }

// // check if number is less than 1
// else {
//     console.log("The number is not a prime number.");
// }


// string="";

// for(i=0;i<5;i++){
//     for(j=0;j<6;j++)
//     {
//         if(i==0 || j==0 || i==4 || j==5 ) 
//         {
//             string+="*"
             
//         }
//         else if( j==5& i==0){
//             string+=" "
//         }
//         else{
//             string+=" "
//         }
//     }
//     string+='\n'
// }
// console.log(string)

 


// alphbet D

//  string= ""
     
//     for (i = 0; i < 5; i++) {
       
//         for (j = 0; j < 5; j++) {
//             if ((i == 0 || i == 4 || j==0) && j < 4)
//                 string+="*";
//             else if (j == 4 && i != 0 && i != 4)
//                 string +="*";
//             else if (j == 4 && i != 0 && i != 4)
//                 string +="*";
//             else
//                 string +=" ";
//         }
//         string +="\n";
//     }
 
//  console.log(string)
 
 
 
//  string= ""
     
//     for (i = 0; i < 5; i++) {
       
//         for (j = 0; j < 6; j++) {
//             if ( j==3 && j <=3  )
//                 string+="*";
//             else if (j == 4 && i != 0 && i != 4)
//                 string +="*";
//             else if (j == 2 && i != 0 && i != 4)
//                 string +="*";
             
//             else if (j == 5 && i != 0 && i !=1 &&  i !=4 && i !=3)
//                 string +="*";
//             else if (j == 1 && i != 0 && i !=1 && i !=4 && i != 3)
//                 string +="*";
             
//             else
//                 string +=" ";
//         }
//         string +="\n";
//     }
 
//  console.log(string)





// string= ""
//     for (i = 0; i < 5; i++) {
//         for (j = 0; j < 6; j++) {
//             if ((i == 0 || i == 5 - 1)
//                 && (j == 0 || j == 6 - 1))
//                 string+=("  ");
//             else if (j == 0)
//                 string+=("*");
//             else if (i == 0 && j <= 5)
//                 string+=("*");
//             else if (i == (5 / 2)
//                 && j > (5 / 2))
//                 string+=("*");
//             else if (i > (5 / 2)
//                 && j == 6 - 1)
//                 string+=("*");
//             else if (i == 5 - 1
//                 && j < 6)
//                 string+=("*");
//             else
//                 string+=("  ");
//         }
//        console.log(string)  
//     }






// string="";

// for( i=0;i<10;i++){
//     for(j=0;j<10;j++){
//         if(i==0||i==1 || i==4|| i==5 ||j==0||j==1||j==2|| j==7||j==8 ||j==9)
//         string +='*';
//         else(
//             string +=" "
//         )
//     }
//     string +='\n'
// }
// console.log(string)
