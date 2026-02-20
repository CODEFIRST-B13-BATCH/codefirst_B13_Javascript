// Clouser : In clouser we can access outer function variable into inner function.

function outer() {
  let counter = 0;
  // console.log(count);
  function inner() {
    let result = ++counter;
    // const count = 0;
    console.log(result);
  }
  // inner();
}
// outer();

// what is hoisting : we can use variable before its initialization (value update).
// console.log(test);
// var test = 10;

// Promises:
// Resolve --> output given
// inProgress --> inprogrees
// Reject --> request reject

// let getProduct = new Promise((resolve, reject)=>{
//     let value =  true;
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

  console.log("order placed");

  const orderRec = await orderReceived();
  console.log(orderRec);
}
ecomProduct();

function paymentDone() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("payment done");
      reject("payment failed");
    }, 600);
  });
}

function orderReceived() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Order received");
      reject("Order cancelled");
    }, 300);
  });
}