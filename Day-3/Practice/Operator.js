//Arithmetic Operators
let a=10;
let b=20;
console.log("Addition::",a+b);
console.log("Subtraction::",a-b);
console.log("Multiplication::",a*b);
console.log("Exponentiation",a**b);
console.log("Division",a/b);
console.log("Modulus",a%b);

// Increment
console.log("Increment::",a++);
console.log("Post Increment::",++a);
//Decrement
console.log("Decrement::",b--);

//Assigment Operator
let c=10;
let d=20;
console.log(c+=d);
console.log(c-=d);
console.log(c*=d);
console.log(c**=d);
console.log(c/=d);
console.log(c%=d);

// && Operator
let e=true;
let f=false;
console.log("&& Operatore::",e && f);

// || Operator
console.log("|| Operator::",e || f);

// coalescing assignment operator
console.log("coalescing assignment operator::",e??f);


//Comparison Operators
let test1=10;
let test2=20;

let result=test1==test2;
console.log("equal to::",result);

console.log("not equal to::",test1 != test2);
console.log("equal value and equal type::",test1===test2);
console.log("not equal value or not equal type::",test1!==test2);
console.log("greater than::",test1>test2);
console.log("Less than::",test1<test2);
console.log("greater than equal to::",test1>=test2);
console.log("Less than equal to::",test1<=test2);