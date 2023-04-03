
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
//     resolve("there is a countValue")
//     reject("there is no countValue")
// })
// console.log(countValue)




// // get result without print promise object
const count = true;
a="deep"
countValue = new Promise(function(resolve, reject) {
    resolve("there is a countValue")
    reject("there is no countValue")
})
countValue.then((a)=>{console.log(a)})






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
// console.log(findUser('jane'))





// function getUsers(cb){
//     let Users =[]
//         setTimeout(()=>{
//             Users = [{userName: 'john', email:'john@g.com'},
//                   { userName: 'jane', email: 'jane@g.com'}]
//                   cb(Users);
//             },1000)
          
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




