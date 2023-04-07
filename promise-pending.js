
// const count = true;
// countValue = new Promise (cb)
// function cb(resolve, reject){
//     resolve("sahil")
// }
// console.log(countValue)




// //pending state
// const count = true;
// countValue = new Promise(Function())

// console.log(countValue)


// fullfill state
// const count = true;
// countValue = new Promise(function(resolve, reject){
//     resolve("there is a countValue" )
//     reject("there is no countValue")
// })
// console.log(countValue)




// // get result without print promise object
// const count = true;

// countValue = new Promise(function(resolve, reject) {
//     resolve("there is a countValue")
//     reject("there is no countValue")
// })
// countValue.then((m)=>{console.log(m)})






// function getUsers(){
//     return[{userName: 'john', email:'john@g.com'},
//            { userName: 'jane', email: 'jane@g.com'}
//     ]
// }

// function findUser(userName){
//     const users = getUsers();
//     const user = users.find((user)=>
//     user.userName === userName);
//     return user;
// }
// console.log(findUser('john'))
// console.log(findUser('deep'))
// console.log(findUser('jane'))



// function getUser(){
//     return new Promise ((resolve,reject)=>{
//         User=[]
//         setTimeout(()=>{
//             Users = [{userName: 'john', email:'john@g.com'},
//             { userName: 'jane', email: 'jane@g.com'}]
//             resolve(Users);
//         },2000);
//     });
// }
// const Promise=getUser();
// Promise.then((Users)=>{
//     console.log(Users);
// });
// getUsers().then((Users,username='jhon')=>{
//     const User=Users.find((users)=>Users.username===username);
//     console.log(User)
// })



function getUser() {
    return new Promise((resolve, reject) => {
      Users = []; // fix the name of the array
      setTimeout(() => {
        Users = [
          { userName: 'john', email: 'john@g.com' },
          { userName: 'jane', email: 'jane@g.com' }
        ];
        resolve(Users);
      }, 2000);
    });
  }


 

  
  getUser().then((Users) => {
    console.log(Users);
  });
  
  getUser().then((Users, username = 'john') => {  
    const User = Users.find((user) => user.userName === username);  
    console.log(User);
  });
  


// function getUsers(cb){
//     let Users =[]
         
//             Users = [{userName: 'john', email:'john@g.com'},
//                   { userName: 'jane', email: 'jane@g.com'}]
//                   cb(Users);
             
          
//         return Users;
       
// }

// function findUser(userName){
//      getUsers((users)=>{
//         const user = users.find((user)=>
//         user.userName===userName)
//         console.log(user)
//     });
// }

// console.log(findUser('john'))







// const count = false;
// const countValue = new Promise(function(resolve, reject) {
 
//     resolve("there is a countValue");
  
//     reject("there is no countValue");
  
// });

// countValue.then((result) => {
//   console.log(result); 
// }, (error) => {
//   console.log(error); 
// });





//   count= 0
// countValue= new Promise(function(resolve,reject){
//     resolve(`the count will increase ${count++}`)
//     reject(`count veriable will not change`)
// });
// countValue.then((value)=>console.log(value))





 