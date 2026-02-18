// Local storage

// localStorage.setItem("name","sanket yewale");
// const getvalue = localStorage.getItem("name");
// // console.log(getvalue);

// localStorage.removeItem("name");
//  localStorage.removeItem("user");

// session storage

// sessionStorage.setItem("name","sanket");
// const getvalue = sessionStorage.getItem("name");
// console.log(getvalue);

// cookies storage

// document.cookie="username= yewale ;  expire:friday  20 feb 2026 06:00:00 UTC";
// document.cookie = "username = avdhut patil ; expire : thursday 19 feb 2026 07:06:53 UTC";

const user = {
    id : 120,
    name : "sanket",
    age : 23,
    Gender : "male"
}

localStorage.setItem("user",JSON.stringify(user));
const getvalue = localStorage.getItem("user");
// console.log(getvalue);
// console.log(JSON.parse(getvalue));

sessionStorage.setItem("user",JSON.stringify(user));
const getvaluee = sessionStorage.getItem("user");
console.log(getvaluee);
console.log(JSON.parse(getvaluee));