
function even(num) {
  if (num % 2 === 0) {
    return "even";
  } else {
    return "odd";
  }
}
console.log(even(4));

function getResult(marks) {
  if (marks >= 75) {
    return "Distinction";
  } else if (marks >= 60) {
    return "First Class";
  } else if (marks >= 40) {
    return "Pass";
  } else {
    return "Fail";
  }
}
console.log(getResult(80));
console.log(getResult(65));
console.log(getResult(35));

let points = 10;

function updateScore() {
  let points = 20;
  points += 5;
  console.log("Inside:", points);
}

updateScore();
console.log("Outside:", points);

// let points1 = 10;

// function updateScore() {
//   points1 = 25; // Notice something missing here?
// }

// updateScore();
// console.log(points1);

function message() {
  console.log("Welcome to JavaScript Practice");
}
message();

function areaOfRectamnglr(length, breath) {
  console.log(length * breath);
}
areaOfRectamnglr(3, 4);

function number(num) {
  if (num % 2 == 0) {
    return "true";
  } else {
    return "false";
  }
}
console.log(number(22));
console.log(number(100));

function greetUser(name = "Guest") {
    return name;
    }
    const n = greetUser('shree');
    console.log(n);
    
function findMax(...number) {

    let max = number[0];
    for(let num of number){
        if (num > max) {
            max = num ;
        }
         
    }
    return max;
}console.log(findMax(3,4,97,89));

function test(...a) {
    console.log(a[0]);
    console.log(a.length);
}

test(8, 9, 10);

function test(a, ...b) {
    console.log(b[0]);
    console.log(b.length);
}

test(1);

function demo(a, ...b) {
    console.log(a + b);
}

function demo(a, ...b) {
    console.log(a + b);
}

demo(5, 10);

console.log(5 + []);
console.log({} + []);
console.log(Boolean(" "));
console.log(12 - "");
// console.log([] === ![]);
console.log(null == undefined);