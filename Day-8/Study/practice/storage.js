

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


//const userInfo = {
  //  id:10,
    //name:'Alex',
    //DOB: "13/07/2000"
//}
// local storage.
