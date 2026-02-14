// for practice coding mediam level questions:
// 1. Write a program to check if a number is even or odd.

let n = 20;

if (n % 2 == 0) {
  console.log("Number is Even");
} else {
  console.log("Number is Odd");
}

// 2. Write a program to find the largest of two numbers.
let a = 10;
let b = 30;

if (a < b) {
  console.log(" b is greater than a", b);
} else {
  console.log(" a is Smaller than b", a);
}
// 3. Write a program to check if a number is positive, negative, or zero.

let c = -45;
if (c > 0) {
  console.log("Number is Positive");
} else if (c < 0) {
  console.log("Number is Negative");
} else {
  console.log("Number is Zero");
}

// 4. Write a program to check if a character is a vowel or consonant.

let char = "j";
if (char == "a" || char == "e" || char == "o" || char == "i" || char == "u") {
  console.log("Given Character is vowel");
} else {
  console.log("Given Character is Consonant");
}

// for practice coding questions :
// 1. Write a program to find the largest of three numbers.

let x = 20;
let y = 30;
let z = 60;

if (x >= y && x >= z) {
  console.log("X is largest :", x);
} else if (y >= x && y >= z) {
  console.log("Y is largest :", y);
} else {
  console.log("Z is largest :", z);
}
// 2. Write a program to check if a number is prime or not.

function isPrime(num1) {
  if (num1 <= 1) {
    return false;
  }
  for (let i = 2; i < num1; i++) {
    if (num1 % i === 0) {
      return false;
    }
  }
  return true;
}
console.log(isPrime(45));

// 3. Write a program to calculate the factorial of a number.

let fact = 1;
let p = 6;

for (let i = 1; i <= p; i++) {
  fact = fact * i;
}
console.log(fact);

// 4. Write a program to check if a string is a palindrome or not.

let s = "157";

let rev = " ";

for (let i = s.length - 1; i >= 0; i--) {
  rev = rev + s[i];
}

console.log(s === rev ? "Palindrome" : "Not Palindrome");

// 5. Write a program to find the sum of all even numbers from 1 to n.
let sum = 0;
let n1 = 30;
for (let i = 1; i <= n1; i++) {
  if (i % 2 == 0) {
    sum = sum + i;
  }
}

console.log("sum of even numbers:", sum);

//6. Write a program to find the Fibonacci series up to n terms.

// const number = parseInt(prompt('Enter the number of terms:'));
// let  f = 0 , g = 1;
// console.log('Fibonaccci series');

// for (let index = 1; index <= number ; index++) {
//     console.log(f);
//     next = f + g;
//     f = g;
//     g = next;

// }

// 7. Write a program to check if a number is an Armstrong number or not.

var num = 153; // put your number here
var temp = num;
var add = 0;

var power = num.toString().length;

while (temp > 0) {
  var digit = temp % 10;
  add += digit ** power;
  temp = Math.floor(temp / 10);
}

if (add === num) {
  console.log(`${num} is an Armstrong number`);
} else {
  console.log(`${num} is not an Armstrong number`);
}

// 8. Write a program to find the GCD (Greatest Common Divisor) of two numbers.

let m = 12;
let l = 16;
let gcd = 1;

for (let i = 1; i <= Math.min(m, l); i++) {
  if (m % i == 0 && l % i == 0) {
    gcd = i;
  }
}
console.log("GCD :", gcd);

// 9. Write a program to find the LCM (Least Common Multiple) of two numbers.
let m1 = 12;
let l1 = 16;
let LCM;
let max = Math.max(m1, l1);

for (let i = max; i <= m1 * l1; i++) {
  if (i % m1 === 0 && i % l1 === 0) {
    LCM = i;
    break;
  }
}
console.log("lcm :", LCM);

//10. Write a program to check if a year is a leap year or not.
const year = parseInt(prompt(" Enter the year"))
if(year % 4 === 0){
    console.log("Leap Year");
}
else
    {
    console.log("Not Leap Year");

}
