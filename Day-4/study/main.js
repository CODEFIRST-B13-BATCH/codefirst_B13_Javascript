// conditions : 
// 1. If else
let isValid = false;
if(isValid){
    // console.log("This is true");
} else {
    // console.log("This is false");
}

// 2. esle if

let marks = 70;
if(marks >= 90){
    console.log("Grade A");
} else if(marks >= 80 && marks < 90){
    console.log("Grade B");
} else if(marks >= 70 && marks < 80){
    console.log("Grade C");
} else {
    console.log("Grade D");
}

// 3. switch case
let day = 3;
switch(day){
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day");
        break;
}

// while loop
let count = 0;
while(count < 5){
    console.log(count);
    count++;
}

// do while loop
let num = 0;
do {
    console.log(num);
    num++;
} while(num < 5);

// for loop
let numbers = [1, 2, 3, 4, 5];
for(let i = 0; i < numbers.length; i++){
    console.log(numbers[i]*10);
}

let numbers100 = [1, 2, 3, 4, 5];
for(item of numbers100) {
    console.log(item*10);
}

// for practice coding mediam level questions:
// 1. Write a program to check if a number is even or odd.
// 2. Write a program to find the largest of two numbers.
// 3. Write a program to check if a number is positive, negative, or zero.
// 4. Write a program to check if a character is a vowel or consonant.

// for practice coding questions :
// 1. Write a program to find the largest of three numbers.
// 2. Write a program to check if a number is prime or not.
// 3. Write a program to calculate the factorial of a number.
// 4. Write a program to check if a string is a palindrome or not.
// 5. Write a program to find the sum of all even numbers from 1 to n.
// 6. Write a program to find the Fibonacci series up to n terms.
// 7. Write a program to check if a number is an Armstrong number or not.
// 8. Write a program to find the GCD (Greatest Common Divisor) of two numbers.
// 9. Write a program to find the LCM (Least Common Multiple) of two numbers.
// 10. Write a program to check if a year is a leap year or not.

