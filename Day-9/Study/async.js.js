// simple function
function greet() {
    return "simpleFunction";
}

const response = greet();
console.log(response);

//async function
async function greet1(params) {
    return "AsyncAwaitFunction" // wrap in promise
}

const res = greet1();
console.log(res);  //return in promise 
res.then((a) => console.log(a)); //return in string

// using if_else
async function greet2(success) {
    return new Promise((resolve, reject) => {
        if (success) {
            resolve("AsyncAwaitWithPromise");
        }
        else {
            reject("Error Data")
        };
    });
}

greet2(true)
    .then((data) => console.log(data))
    .catch(error => console.log("error:", error));


// try_catch with dummy API
async function apiData() {
    try {
        const data = await fetch("https://jsonplaceholder.typicode.com/users");
        const dataFetch = await data.json();
        console.log(dataFetch);
    }
    catch (error) {
        console.error(error);
    }
}

apiData();

console.log('hello, plz wait for api response')