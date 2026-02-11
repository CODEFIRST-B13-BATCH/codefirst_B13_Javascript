
// Arithmatic oprators 

let x = 10;
let y = 5 ;


console.log("add:",x+y);
console.log("sub:",x-y);
console.log("mult:",x*y);
console.log("div:",x/y);
console.log("modul:",x%y);

let inc = x++;
let dec = y--;
console.log(inc);
console.log(dec);

let inc1= ++x;
let dec1= --y;
console.log(inc1);
console.log(dec1);


// comparison oprator

let a = 5 ;
let b = 10;

console.log("Equal to:",a = b);
console.log("not equal to:", a != b);
console.log("double equa to:", a == b);
console.log("tripal equal to:",a === b);
console.log("less than :",a<b);
console.log("greter than :",a>b);
console.log("less than equal to:",a<=b);
console.log("greter then equal to",a>=b);

// Logical oprator

let a = true;
let b = true;

console.log(a && b);
console.log(a || b);
console.log(!a);

let a  = 3;
let b = 2;

console.log(a > b && a < b );
console.log(a > b || a < b);

// Assingment oprator

let a =10 ;
let b = 20 ;
//console.log("equal to :",a = b);
 console.log("add",b += a);
 console.log("sub:",b -= a);
console.log("mult:",b *= a);
console.log("div:",b /= a);
console.log("mod:",b %= a);
 
//misc oprators 

let a = 5;
let b = 10;

console.log(typeof(a));
console.log(typeof(b));

 const result = (a > b && a > b)? ' a less than b ':' b gretare than a'
const _result = (a > b || a < b)? ' a less than b ':' b gretare than a'
console.log(result);




