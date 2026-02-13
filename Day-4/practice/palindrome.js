let String1="DAD";
let Reverse="";
for(let i=String1.length-1;i>=0;i--){
    Reverse=Reverse + String1[i];

}if(Reverse==String1){
    console.log(String1+" is a palindrome");

}else{
    console.log(String1+" is not a palindrome");
}   