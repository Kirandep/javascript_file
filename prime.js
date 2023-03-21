for(i=2;i<10000;i++){
    d=0
    for(j=2;j<i;j++){
        if(i%j==0){
            d=1;
            break;
        }
        
    }
    if(i>1 & d==0){
        console.log(i)
    }
}
