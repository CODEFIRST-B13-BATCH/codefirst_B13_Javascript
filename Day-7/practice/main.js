// simple function

function arithmaticoprations(){
    let a = 10;
    let b = 20;
     console.log("addition of two numbers:",a+b);
     console.log("multiplication of two numbers:",a*b);
     console.log("substraction of two numbers:",a-b);
      console.log("division of two numbers:",a/b);
}
// arithmaticoprations();



// function with parameter


function _abc (a ,b) {
    console.log("addition of two numbers:",a+b);
     console.log("multiplication of two numbers:",a*b);
     console.log("substraction of two numbers:",a-b);
      console.log("division of two numbers:",a/b);
    }
    // _abc(5,2);

    // function with default parameter

    function _d(a,b=10){
        console.log("addition of two numbers:",a+b);
     console.log("multiplication of two numbers:",a*b);
     console.log("substraction of two numbers:",a-b);
      console.log("division of two numbers:",a/b);
    }
    // _d(5);

    // function with return(returnable function)

    function addition (a,b){
        return a+b;
    }
    const num = addition("10",20);
    // console.log(num);

      // Arrow function with paramter
const fun2 = (a,c) => {
    // console.log("I am arrow function");
}
//  fun2(5,10);


// call back function : Callback functions is the funtion which take another function as paramter is called as callback function.

    // setTimeout(() => {
    //     console.log("stop");
    //     clearInterval(interval);
    //  },10000);

    //  let interval = setInterval(()=> {
    //     console.log(" Sanket Yewale");

    //  },1000);


    
    let interval = setInterval(()=>{
        console.log(" it's very beautifull");
    },1000);

    setTimeout(()=>{
        console.log("stop statement");
        clearInterval(interval);
    },20000);

     

    

