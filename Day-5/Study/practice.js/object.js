/*
//creation
//01 - obect literal
let car = {
    carNumber:2376,
    car_model:2012,
    carColor:"red"
}
console.log(car)
console.log(car.carNumber)



//using new object()
let student =new Object()
student.name="biresh"
student.id="19GACVL023"
student.email="123f"
console.log(student)

//using object.creat()
let person= Object.create({})
person.name="hello"
person.age=34
person.gender="male"
console.log(person)


//using object.assign({})
let name1="hello"
let age=34
let gender="male"
let person1 = Object.assign({name1,age,gender})
console.log(person1)

*/

//create for car
//using object literal
/*
let car={
    brand:"TATA",
    model:2023,
    purchaseYear:2023,
    color:"red"
}
console.log(car)


//using new object()
let car1=new Object()
car1.brand="MAHINDRA"
car1.model=2025
car1.purchaseYear=2026
car1.color="orange"
console.log(car1)
*/


/*
let car1=Object.create({})
car1.brand="MAHINDRA"
car1.model=2025
car1.purchaseYear=2026
car1.color="orange"
console.log(car1)
*/



//using object.assign({})
/*
let brand="MAHINDRA"
let model=2025
let purchaseYear=2026
let color="orange"
let car1=Object.assign({brand,model,purchaseYear,color})
console.log(car1)
*/

/* 5
let person={
    name1:"harshit",
    age:34,
    hobbies:["listenTomusic","playing","swimming","reading"]
}
console.log(person.name1,person.hobbies[0])
console.log(person.hobbies[0])
*/  

/* 6
let array=[1,2,3,4,5]
let sum=0
for(let i=0;i<array.length;i++)
{
    sum=sum+array[i]
}
console.log(sum)
*/

/*
let name1="TCS"
let industry="INFORMATION TECHNOLOGY"
let employees=[{name1:"ram",age:30},
    {name2:"harr",age:21},
    {name3:"harry",age:23}
]
let company=Object.assign({name1,industry,employees})
console.log(company.name1)
let firstName=console.log(company.employees[0])
console.log(employees[0].name1)
*/


/*
let person=new Object();
person.name1="om"
person.age=23
person.hobbies=["play","swim","read"]
console.log(person.name1,person.hobbies[0])
*/

let array=[{name1:"china",population:1.41,capital:"beijing"},
    {name1:"USA",population:0.38,capital:"newyork"},
    {name1:"India",population:1.45,capital:"Delhi"}
]
let largeValue=array[0]
for(let i=0;i<array.length;i++)
{
    if(array[i].population>=largeValue.population)
    {
        largeValue=array[i]
    }
}
console.log(largeValue.name1)


  