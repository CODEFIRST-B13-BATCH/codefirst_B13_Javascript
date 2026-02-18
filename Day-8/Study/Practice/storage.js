// storage


// object 
const user={
    id: 1,
    name:"Avadhut",
    DOB:13-12-2003
}

// Local Storage
localStorage.setItem("name","raj");
const getValue = localStorage.getItem("name");
console.log(getValue);
// localStorage.removeItem("name");

// object to string
localStorage.setItem("user",JSON.stringify(user));
const getUserInfo = localStorage.getItem("user");
 //  string to object
console.log(JSON.parse(getUserInfo));

// session storage
sessionStorage.setItem("name","Avadhut");

document.cookie = "username=CTS Pune; expires:Thur, 19 Feb  2026 09:45:39 UTC";


// Local Storage (Browser Permanent Storage)
// What is Local Storage?
// Local Storage is a browser storage that saves data permanently in the user’s browser.



// Session Storage (Temporary Storage)
// What is Session Storage?
// Session Storage stores data only for one browser tab session.
// Data is deleted when the tab is closed.


// Cookies (Small Data Storage with Expiry)
// What are Cookies?
// Cookies are small data stored in the browser and sent to the server with every request.
// Mainly used for authentication and tracking.