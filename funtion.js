// function myfun(x,y){
// sum= x+y;
// console.log(sum)
// }
// myfun(25,3)



// function myfun(x,y){
// sum= x*y;
// console.log(sum)
// }

// myfun(25,3)


// function myfun(x,y){
// sum= x%y;
// console.log(sum)
// }

// myfun(25,3)



// function myfun(x,y){
//  arr1= x
//  arr2= y

 
// console.log(arr1*arr2)

//  myfun([25],[3])
// }





// function print_element(arr){

//     for(i=0;i<5;i++)
//     {
//         console.log(arr)
        
//     }
   
// }
// print_element({name1:'deep',last:'rajpoot'})






// function myfun(x){
//      string=x
//     for(i=0;i<6;i++){
//         string+='\n'
//         for(j=0;j<6;j++){
//             if( (i == 0 || i == 5 || j==0) &&  j<5)
//             string+= "*"
//             // else
//             string+=" " 
//         }
//     }
//     console.log(string)
// }
// myfun('')


// function my_fun(obj1){
//     console.log(obj1.class)
// }
// my_fun({Name:" deep",class:"b.com",clg:"sggswu"})



// nestrt function


function fstfun(){
    string= ''
    for(i=0;i<10;i++){
        if(i==0||i==9){
            string+='*'
        }
        else{
        string+=" "
       }
    }
    string+=`\n`
    function secfun(){
        string= ""
     
    for (i = 0; i < 5; i++) {
       
        for (j = 0; j < 5; j++) {
            if ((i == 0 || i == 4 || j==0) && j < 4)
                string+="*";
            else if (j == 4 && i != 0 && i != 4)
                string +="*";
            else if (j == 4 && i != 0 && i != 4)
                string +="*";
            else
                string +=" ";
        }
        string +="\n";
    }
        
    }
    secfun()
    
    return string
}
y=fstfun()
console.log(y)