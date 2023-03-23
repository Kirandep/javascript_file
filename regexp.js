


// // word find 
// let str = 'The quick brown fox jumps over the lazy dog.';
// let regex = /over/;
// let result = str.match(regex);
// console.log(result); 





// // latter find 
// let str1= 'The quick brown 1442fox jumps142 over the lazy dog.';
// let regex1 = /[124562]/g;
// let result1 = str1.match(regex1);
// console.log(result1);  




// // digt find 

// let str2 = 'The price of the book is $3345656.99.';
// let regex2 = /\d+/;
// let result2 = str2.match(regex2);
// console.log(result2);  



// // find and replace 

// let str3 = 'The quick brown fox jumps over the lazy dog.';
// let regex3 = /lazy/;
// let replacement = 'active';
// let result3 = str3.replace(regex3, replacement);
// console.log(result3);  






// complex pettern

let str4 = 'My email is john.doe@example.com and my phone number is (123) 456-7890.';
let regex4 = /(\w+\.?\w+)@(\w+\.\w{2,})|(\(\d{3}\)\s*\d{3}-\d{4})/g;
let result4 = str4.match(regex4);
console.log(result4); // output: ["john.doe@example.com", "(123) 456-7890"]
