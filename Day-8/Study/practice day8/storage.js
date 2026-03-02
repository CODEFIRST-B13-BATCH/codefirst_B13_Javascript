// Storage localStorage and sessionStorage

const userInfo = {
    id : 5,
    name : "Amol",
    
}

// local storage

//const isValidUser = true;
//localStorage.setItem("isValidUser", isValidUser); // boolean to string
//localStorage.setItem("age", 25); // number to string
//localStorage.setItem("userInfo", JSON.stringify(userInfo)); // object to string


//const getIsValidUser = localStorage.getItem("userInfo");
//const parseIsValidUser = Array(JSON.parse(getIsValidUser));
//console.log(parseIsValidUser); // string to object

// session storage
// session storage - Same as localStorage but data will be cleared when the page session ends.

//const isValidUser = true;
//sessionStorage.setItem("isValidUser",isValidUser);
//sessionStorage.setItem("age",20);
//sessionStorage.setItem("userInfo", JSON.stringify(userInfo));

// cookies : 
 //document.cookie = "token=vzcygsfsbwe7ftew8r348r6weufbsjdfg87wetrwegbvsdsd76ee3655; expires:Mon, 2 Mar  2026 09:45:39 UTC";

// clouser interview

function outer(){
    let counter = 0;
    
    function inner(){
        var result = ++counter;
        console.log(result)
    }
    inner();

}outer();

// practice question in clouser with while loop
function test(){
    let a = 1;
    function test1(){
        while(a < 5){
            a++;
            console.log(a);
        }
    }test1();
}test();

// clouser practice question in for loop myself
function pandu(){
    let b = 11;
    function amol(){
        for(let b = 11; b <=15; b++)
        console.log(b);
    }
    amol();
}pandu();


// what is hoisting : we can use variable before its initialization (value update).
// console.log(a);
// const a = 5;


// Promises:
// Resolve --> output given
// inProgress --> inprogrees
// Reject --> request reject

let getProduct = new Promise((resolve, reject)=>{
     let value =  false;
     if(value) { 
         resolve("date fetched");
     } else {
         reject("Error");
     }
 }).then(res=>console.log(res))
   .catch(error=>console.log(error));

// eg.2

function fetchProduct(){
    new Promise((resolve, reject) => {
        fetch(`https://fakestoreapi.com/products/${10}`)
        .then((res)=>{
            console.log(res);
            if(res.ok){
                return res.json();
            }else{
                reject("feild to fetch product");
            }

        }) .then(data => resolve(data))
           .catch(err=>console.log(err));
    })
}


// Async and await.
    
async function ecomProduct() {
  console.log("Add to cart");
    const payment = await paymentDone();
    console.log(payment);
    console.log("product received");

}

paymentDone = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Payment successful");
           
             //console.log("Payment successful");
        }, 2000);
    });
}

ecomProduct();


// deep copy and shallow copy :

let user = {
    name: "Ram",
    age: 30,
    address: {
        city: "Sangola",
        state: "Maharashtra",
    },
}

//const shallowCopy = {...user};
//shallowCopy.name = "Sham";
//shallowCopy.age = 25;
//shallowCopy.address.city = "Pune";
//shallowCopy.address.state = "Goa";

//console.log(user);
//console.log(shallowCopy);

const deepCopy = JSON.parse(JSON.stringify(user));
deepCopy.name = "Smith";
deepCopy.address.city = "Delhi";
deepCopy.address.state="Goa";

console.log(user);
console.log(deepCopy);
