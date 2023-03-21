// // class user{
// //     constructor(x,y,z){
// //     this.firstname=x
// //     this.lastname=y
// //     this.age=z
    
// // }
// // fullname(){
// //     console.log(`full-name = ${this.firstname} ${this.lastname}`)
// //     console.log(`age= ${this.age}`)
// // return this.fullname
// // }

// // }

// // deep=new user('kirandeep','singh',25);
// // console.log(deep.fullname())



// class car{
//     constructor(x,y,z){
    
//     this.brand=x
//     this.color=y
//     this.type=z
//     this.wheels=4
    
// }
// fulldetile(){
//     console.log(`brand= ${this.brand} `)
//     console.log(`color= ${this.color} `)
//     console.log(`type= ${this.type}`)
//     console.log(`wheels= ${this.wheels}`)
// return car
// }

// }

// deep=new car('BMW','Red', 'luxury');
// console.log(deep.fulldetile())


// class student{
//     constructor(c)
//     {
//         // this.first_name=a,
//         // this.last_name=b,
        
        
//         this.getdeatil=()=>
//         {
//             console.log(c)
//         }
//         this.getdeatil1=()=>
//         {
//             console.log( this.last_name)
//         }
//     }
// }
// stude= [2,1,4,53,25,3]
// console.log(stude.sort() );




// arr1= ['deep','singh','raj']

// name1=[]

// console.log(name1.push(arr1))
// console.log(name1)




//... spread operter   



// arr1= ['deep','singh','raj']

 

//  name2=[...arr1]
// console.log(name2)
  




const food=[
    {name:'apple',type:'fruit'},
    {name:'banana',type:'fruit'},
    {name:'chocolate',type:'candy'},
    {name:'orange',type:'fruit'},
]

// food.map(x=>console.log(x))
y=food.map(item=>item.type).
reduce((result,fruit)=>{
    result.push(fruit)

    return [...new Set(result)];

}
,[]
)
 console.log(y)




