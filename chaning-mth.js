// function thismean(){
//     y= 23;
//     return this
// }
// console.log(thismean())




// function thismean(){
//     y= 23;

//     function inner(){
//     this.y=65 
//         return this.y
//     }
  
//     inner()
// }
// console.log(thismean())
// // console.log(this)






// class staringmethod{
    
//     first='deep singh'
  
//     log(){
//            this.first.replace("deep", "W3Schools")
//           this.log()
//     }
     
     
// }

// str=new staringmethod()
// console.log(str.log())






// class dog{
//     is=null
    
//     log(){
//         console.log(this);
//     }
//     bark(){
//          this.is='woffing';
//          this.log();
//         return this;
//     }
//     walk(){
//         this.is='walking';
//         this.log();
//         return this;
//     }
// }

// dog1=new dog()
// console.log(dog1.bark())
// // console.log(dog1.bark().)



// class arry{
//     skill=[2,4,5,6,7,8,4,8,9,3]
    
//     log(){
//         console.log(this)
//     }
//     push1(){
//         console.log(this.skill.push(2,3))
//         this.log();
//         return this
        
//     }

// }
// deep=new arry()

// deep.push1()





// class arraymethod{
//     constructor(arr1) {

//    this.arr=arr1
   
// //    return this

//     }

// mapp()
// {
// this.arr.map(function(element){
//     console.log(element)
//   })
//   return this
// }
// push(x,y,z){
//     this.arr.push(x,y,z)
    
//     return this
    
// }
// splice(i,li,dee,deee){
//     this.arr.splice(i,li,dee,deee)
    
//     return this
    
// }

    

// }
// d=new arraymethod([1,2,3,6,5,4,3,2])
// console.log(  d.push(2,3,'deep').splice(2, 0, "Lemon", "Kiwi").mapp())






// class ArrayMethod {
//     constructor(arr) {
//       this.arr = arr;
//     }
  
//     mapp() {
//       this.arr = this.arr.map(function(element) {
//         console.log(element);
//         return element * 2;
//       });
//       return this;
//     }
  
//     push22(...values) {
//       this.arr.push(...values);
//       console.log(this.arr);
//       return this;
//     }
//   }
  
//   const myArray = new ArrayMethod([3, 4, 5, 6, 78, 9]);
  
//   console.log(myArray.mapp().push22(2, 3));










class ArrayMethod {
    constructor(arr) {
      this.arr = arr;
    }
  
    reduceMethod(deep, deep3) {
        return this.arr.reduceMethod(deep, deep3);
        }
 
    }
  
  
  const myArray = new ArrayMethod([3, 4, 5, 6, 78, 9]);
  
      
  
  console.log(myArray.reduceMethod()); 