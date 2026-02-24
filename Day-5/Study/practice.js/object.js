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
let brand="MAHINDRA"
let model=2025
let purchaseYear=2026
let color="orange"
let car1=Object.assign({brand,model,purchaseYear,color})
console.log(car1)
