// 2. else if

let marks = 60;
if(marks >= 80){
    console.log("Grade A");
} else if(marks >= 70 && marks < 80){
    console.log("Grade B");
} else if(marks >= 60 && marks < 70){
    console.log("Grade C");
} else {
    console.log("Grade D");
}

// while loop
let a = 0;
while(a < 7){
    console.log(a);
    a++;
}

// do while
let num = 0;
do{
    console.log(num);
    num++
}while(num < 5)


// for loop
 let str = [1,2,3,4,5];
 for(let i=0; i < str.length; i++){
    console.log(str[i]*10);
 }


 // switch case

 let day = 4;
 switch(day){
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
     case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day")
        break;
 }