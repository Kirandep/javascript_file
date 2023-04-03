


// word find 
  str = 'The quick brown fox jumps Over the lazy dog.';
  regex = /over/;
  result = str.match(regex);
console.log(result); 





// // latter find 
//   str1= 'The quick brown 1442fox jumps142 over the lazy dog.';
//   regex1 = /[124562]/g;
//   result1 = str1.match(regex1);
// console.log(result1);  




// // digt find 

//   str2 = 'The price of the book is $3345656.99.';
//   regex2 = /\d+/;
//   result2 = str2.match(regex2);
// console.log(result2);  



// // find and replace 

//   str3 = 'The quick brown fox jumps over the lazy dog.';
//   regex3 = /lazy/;
//   replacement = 'active';
//   result3 = str3.replace(regex3, replacement);
// console.log(result3);  






// complex pettern

  str5 = 'My email is john.doe@example.com and my phone number is (123) 456-7890.';
  regex4 = /(\w+\.?\w+)@(\w+\.\w{2,})|(\(\d{3}\)\s*\d{3}-\d{4})/g;
  result4 = str5.match(regex4);
console.log(result4);  
 
