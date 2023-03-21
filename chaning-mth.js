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






class dog{
    is=null
    
    log(){
        console.log(this);
    }
    bark(){
         this.is='woffing';
         this.log();
        return this;
    }
    walk(){
        this.is='walking';
        this.log();
        return this;
    }
}

dog1=new dog()
console.log(dog1.bark())
// console.log(dog1.bark().)