let num=1;
let boolean=true;
if(num<=1){
    console.log(num+" is not a prime number");
      
}else{
    
    for(let i=2;i<num;i++){
        if(num%i==0){
            boolean=false;
            break;
        }
    }

if(boolean=true){
    console.log(num+" is a prime number");

}else{
    console.log(num+" is a not a prime number");
}
}