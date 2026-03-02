// Storage localStorage and sessionStorage

const userInfo = {
    id:10,
    name:'Alex', 
}
// localstorage : 
// const isValidUser = true;
// localStorage.setItem("isValidUser", isValidUser); // boolean to string
// localStorage.setItem("age", 25); // number to string
// localStorage.setItem("userInfo", JSON.stringify(userInfo)); // object to string

// const getIsValidUser = localStorage.getItem("userInfo");
// const parseIsValidUser = Array(JSON.parse(getIsValidUser));
// console.log(parseIsValidUser); // string to object


// sessionStorage :
// Same as localStorage but data will be cleared when the page session ends.


// cookies : 
// document.cookie = "token=vzcygsfsbwe7ftew8r348r6weufbsjdfg87wetrwegbvsdsd76ee3655; expires:Sat, 28 Feb  2026 09:45:39 UTC";


//Interview peespective qtns : 
// Clouser : 

// function outer() {
//     let counter = 0;
//     // console.log(result);
//     function inner() {
//         var result = ++counter;
//         console.log(result);
//     }
//     inner();
// }
// outer();

// what is hoisting : we can use variable before its initialization (value update).
// console.log(test);
// const test = 10;

// Promises:
// Resolve --> output given
// inProgress --> inprogrees
// Reject --> request reject

// let getProduct = new Promise((resolve, reject)=>{
//     let value =  false;
//     if(value) { 
//         resolve("date fetched");
//     } else {
//         reject("Error");
//     }
// }).then(res=>console.log(res))
//     .catch(error=>console.log(error));

    // eg. 2
// function fetchProduct() {
//     return new Promise((resolve,reject)=>{
//         fetch(`https://fakestoreapi.com/products/${10}`)
//         .then((res)=>{
//             console.log(res);
//             if(res.ok){
//                 return res.json();
//             } else {
//                 reject("Failed to fetch products!");
//             }
//         })
//         .then(data => resolve(data))
//         .catch(err=>console.log(err));
//     })
// }

// fetchProduct().then((result)=>console.log(result))
// .catch(error => console.log(error));


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
            getDomMunipulation();
            // console.log("Payment successful");
        }, 2000);
    });
}

ecomProduct();

// deep copy and shallow copy :

let user = {
    name: "Alex",
    age: 35,
    address: {
        city: "Pune",
        state: "Maharashtra",
    },
}

const shallowCopy = {...user};
shallowCopy.name = "John";
shallowCopy.age = 40;
shallowCopy.address.city = "Mumbai";
shallowCopy.address.state = "Goa";

console.log(user);
console.log(shallowCopy);

const deepCopy = JSON.parse(JSON.stringify(user));
deepCopy.name = "Smith";
deepCopy.address.city = "Delhi";

console.log(user);
console.log(deepCopy);

function getDomMunipulation() {
   const dom =  document.getElementById('titleId');
   if(dom) {
    dom.innerText = "Welcome to the Typescript Study Session!";
    dom.style.color = "blue";
   }
}
