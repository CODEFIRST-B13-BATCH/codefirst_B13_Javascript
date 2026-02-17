let _string =  " my favorate place is pune ";

const arr = _string.split("");
// console.log(arr);

const arr2 = arr.reverse();
// console.log(arr2);

const arr3 = arr2.join(" ");
// console.log(arr3);

const num = [10,20,30,40,50,60,70];

// 1.push()
// num.push(80);
// console.log(num);
// num.push(90,100);
// console.log(num);

//2.pop()
// num.pop();
// console.log(num);

// 3.shift()

// num.shift(20);
// console.log(num);

//4.unshift()

// num.unshift(0);
// console.log(num);

// 5.reverse()
// num.reverse();
// console.log(num);


// 6.join()

// const arr6=num.join("");
// console.log(arr6);

// 7.indexof()
// console.log(num.indexOf(30));
// console.log(num[2]);

// 8.slice()

// const arr5 = num.slice(3,6);
// const arr6 = num.slice(1,5);
// console.log(arr5,"\n",arr6);

// 9.map()
// const arr8 = num.map((Element)=>Element * 4);
// console.log(arr8);

const books = [
    {name : '1984', author :'George Orwell', year : 1989},
    { name : 'Pride and Prejudice', author :'Jane Austen',year: 1883},
    { name :'The Hobbit', author : 'J. R. R. Tolkien',year:1937}

]

// 10.filter()

const arr10 = books.filter((element)=>element.year > 1983);
// console.log(arr10);

const arr11 = books.filter((element)=> element.name)
// console.log(arr11);

const arr12 = num.filter((element)=>element < 15);
// console.log(arr12);

const arr13 = books.find((element)=>element.name);
// console.log(arr13);

const arr14 = books.find((element)=> element.name);
// console.log(arr14);

// 11.splice()

// num.splice(1,6);
// console.log(num);

// 12.reduce()
const num1 = [ 10,20,30,40,50,]
const sum = num1.reduce((acc,currentvalue)=>{return  acc + currentvalue},0)
// console.log(sum);

const mult = num1.reduce((acc,currentvalue)=>{return acc * currentvalue},2);
// console.log(mult);

const substract  =num1.reduce((acc,currentvalue)=>{return acc - currentvalue},0);
console.log(substract);


