let cart = [
  { name: "Laptop", price: 50 },
  { name: "Mouse", price: 5 },
  { name: "Keyboard", price: 5000 }
];

let sum = cart.reduce((acc,currentValue) => {
    return acc+ currentValue.price;

},0);
console.log(sum);

// Remove Mouse
const arr = cart.filter((element)=> element.price > 5);
console.log(arr);

//Increase all prices by 10% (GST)
let upadated = cart.map(item =>{
    return {
        name:item.name,
           price :item.price * 1.10
    };
});
console.log(upadated);


let students = [
  { name: "A", marks: 35 },
  { name: "B", marks: 80 },
  { name: "C", marks: 60 },
  { name: "D", marks: 20 }
];
//Get only passed students (>= 40)
const arr2 = students.filter((item) => item.marks > 40);
console.log(arr2);

// Add grade property based on marks
// Rules:
// =75 → Distinction

// =60 → First

// =40 → Pass

// else → Fail

let grade = students.map(item =>{
    return{ marks : item.marks=75

    }
    console.log(grade);
    
})