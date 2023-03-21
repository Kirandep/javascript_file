// oct1={name:"deep",
//  class:"web delvper", 
//  getitem:()=>{
//     console.log('i am in funtion')
// }

// }

//  console.log(oct1["getitem"]())



// //  dot notation
// console.log(oct1.name)
// console.log(oct1.getitem())










function get1(){

    return {name:"deep",
            class:"web",
            get2item:(x,y)=>{
                sum= x+y
                return sum
            }
            }

}
 
 ff=get1()

console.log(ff.get2item(23,27))

