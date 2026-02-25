 let a = [10, 20, 30];
 a.push(40);
  console.log(a);

  let b = ["apple", "banana", "mango"];
  b.pop();
  console.log(b);
  
  let c = ["middle", "end"]
  c.unshift("start");
  console.log(c);
  
  let d =[100, 200, 300];
  d.shift(0);
  console.log(d);

  let e = ["html", "css", "js", "react"];
   console.log(e.indexOf( "react"));

   let f = [10, 20, 30, 40, 50];
   let g = f.includes(60);
   console.log(g);
   
  let h = [1,2,3,4,5];
 console.log(h.splice(3,99));

 let  i = [10,20,30,40,50];
 const j =  i.slice(1,3)
 console.log(j);
 
 let l =["2026", "02", "24"];
 const arr = l.join(" - ");
 console.log(arr);
 
let k = [2,4,6,8];
let m = k.map((Element)=> Element*5);
console.log(m);

let n = [50,120,300,80,200];
let o = n.filter((Element) => Element > 100);
console.log(o);

let p = [
 {name:"A", age:25},
 {name:"B", age:40},
 {name:"C", age:35}
];

const q = p.find((Element) => Element.age > 30);
console.log(q);


students = [
  { name: "Amit", marks: 45 },
  { name: "Riya", marks: 80 },
  { name: "Sam", marks: 30 },
  { name: "John", marks: 70 }
]
let s = students.filter((Element) => Element.marks > 50);
console.log(s);

na = [
  { id: 1, name: "Gayatri" },
  { id: 2, name: "Rahul" },
  { id: 3, name: "Sneha" }
]
const t = na.find((elemnt)=> elemnt.id == 2);
console.log(t);

let u = [5000, 3000, 2000, 4000];
const r = u.reduce((acc,current) =>{
    return acc + current;
});
console.log(r);

let sc = [
  { name: "A", score: 88 },
  { name: "B", score: 95 },
  { name: "C", score: 90 }
]
const v =sc.reduce((acc,current)=>{
    return acc.score < current.score ? current : acc;
});
console.log(v);


num = [1,2,3,4,5,6];
const result = num.reduce((acc,current)=>{
    if(current % 2 === 0){
acc.even.push(current);
    }
    else{
        acc.odd.push(current);
    }
    return acc;
},{even:[], odd:[]});
console.log(result);
