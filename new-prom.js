// let stocks={
//     fruits:["strawberry","grapes","banana","apple"],
//     liquid:["water","ice"],
//      holder:["cone","cup","stick"],
//      topping:["chocolate","peanuts" ],
// }
// let order= (fruit_name,call_production)=>{
//     setTimeout(function(){
//         console.log(`${stocks.fruits[fruit_name]} was selected`)
//        call_production()
//     },2000)
// }










// let stocks={
//     fruits:["strawberry","grapes","banana","apple"],
//     liquid:["water","ice"],
//     holder:["cone","cup","stick"],
//     topping:["chocolate","peanuts" ],
// }

// function order(fruit_name,liquid_name,holder_name, topping_name, call_production) {
//     console.log(`Place an order`)
//     setTimeout(function() {
//         console.log(`${stocks.fruits[fruit_name]} was selected`)

//         setTimeout(function() {
//             console.log(`${stocks.liquid[liquid_name]} was selected`)

//             setTimeout(function() {
//                 console.log(`Start the Machine`)

//             setTimeout(function() {
//                 console.log(`${stocks.holder[holder_name]} was selected`)

//                 setTimeout(function() {
//                     console.log(`${stocks.topping[topping_name]} was selected`)

//                     call_production()

//                 }, 3000)

//             }, 1000)

//         }, 1000)

//         }, 1000)

//     }, 2000)
  

// }

// function production() {
     
//         setTimeout(function() {
//             console.log("The ice cream has been produced and is ready for pickup.")
//         }, 3000)
     
// }
 
// order(1,1,2,0, production)















// let stocks={
//     fruits:["strawberry","grapes","banana","apple"],
//     liquid:["water","ice"],
//     holder:["cone","cup","stick"],
//     topping:["chocolate","peanuts" ],
// }

// function order(fruit_name, call_production) {
//     console.log(`Place an order`)
//     setTimeout(function() {
//         console.log(`${stocks.fruits[fruit_name]} was selected`)

//         setTimeout(function() {
//             console.log(`${stocks.liquid[1]} was selected`)

//             setTimeout(function() {
//                 console.log(`Start the Machine`)

//             setTimeout(function() {
//                 console.log(`${stocks.holder[1]} was selected`)

//                 setTimeout(function() {
//                     console.log(`${stocks.topping[1]} was selected`)

//                     call_production()
//                 }, 3000)

//             }, 1000)

//         }, 1000)

//         }, 1000)

//     }, 2000)
  

// }

// function production() {
//      console.log("production has started")
//         setTimeout(()=> {
//             console.log(`the fruits has been chopped`)
//             setTimeout(()=> {
//                 console.log(`${stocks.fruits[0]} and ${stocks.liquid[1]} added`)
//                 setTimeout(()=> {
//                     console.log(`Start the Machine`)
//                     setTimeout(()=> {
//                         console.log(`ice Cream placed on ${stocks.holder[1]}`)
                        
//                         setTimeout(()=> {
//                             console.log(`topping on ice Cream ${stocks.topping[1]}`)
                            
//                             setTimeout(()=> {
//                                 console.log( `Serve Ice Cream`)
                                
//                             }, 2000)
//                         }, 3000)
//                     }, 2000)

//                 }, 1000)
//             }, 1000)
//         }, 2000)
     
// }
 
// order(0, production)




let stocks={
    fruits:["strawberry","grapes","banana","apple"],
    liquid:["water","ice"],
    holder:["cone","cup","stick"],
    topping:["chocolate","peanuts" ],
}


let order=(time,work)=>{
    return new Promise ((resolve,reject) => {
        setTimeout(()=>{
            resolve(work())
        },2000)
    })
}
order(2000,()=>console.log(`${stocks.fruits[0]} was selected`))
.then(()=>{
    return order(2000,()=>console.log(`prodution has started`))
})
.then(()=>{
    return order(2000,()=>console.log(`fruits has been chopped`))
})
.then(()=>{
    return order(2000,()=>console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} added`))
})
.then(()=>{
    return order(2000,()=>console.log(`Start the Machine`))
})
.then(()=>{
    return order(2000,()=>console.log(`ice Cream placed on ${stocks.holder[1]}`))
})
.then(()=>{
    return order(2000,()=>console.log(`topping on ice Cream ${stocks.topping[1]}`))
})
.then(()=>{
    return order(2000,()=>console.log(`Serve Ice Cream`))
})






.catch((error)=>{
    console.log('customer left')
})
.finally(()=>{
    console.log(' end of day')

})

