// storage;


const userInfo = {
    id:10,
    name:'Alex',
    DOB: "13/07/2000"
}
// local storage.
localStorage.setItem("name","Codefirst");
const getValue = localStorage.getItem("name");
console.log(getValue);
localStorage.removeItem("name");

localStorage.setItem("userInfo", JSON.stringify(userInfo)); // object to string
const getUserInfo = localStorage.getItem("userInfo");
console.log(JSON.parse(getUserInfo)); //  string to object

// session storage
sessionStorage.setItem("name","Codefirst123");

document.cookie = "username=CTS Pune; expires:Thur, 19 Feb  2026 09:45:39 UTC";


