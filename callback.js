 function callback(x){

 }

function calling(x)
{
    for(i=0; i<x.length;i++){
        if(x[i]%2==0){
            console.log(`this number even ${i}` )
        }
        else
        console.log(`this number odd ${i}`)
    }
}


callback([2,3,4,5,6,7,8,9])