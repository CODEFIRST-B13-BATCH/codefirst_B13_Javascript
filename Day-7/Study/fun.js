function even(num) {
    if (num % 2 === 0) {
        return "even";
         
    }
    else{
        return "odd";
    }
 
}
console.log (even(4));
     

function getResult(marks) {

    if (marks >=75) {
        return "Distinction";
        
    } else if (marks >= 60) {
        return "First Class";
    }
    else if(marks >=40)
    {
       return  "Pass";
    }
    else
        {
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


let points1 = 10;

function updateScore() {
  points1 = 25; // Notice something missing here?
}

updateScore();
console.log(points1);