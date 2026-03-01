let array=[1,2,3,4,5,6,7,8,9]

//use of push(ele1,ele2,ele3,.....) metode --- adds an element at the last 
array.push(10,11)
console.log(array)  //out put---[1,2,3,4,5,6,7,8,9,10,11]

//use of pop() methode -- it does not take any arguments and delete the last element of an array
array=[1,2,3,4,5,6,7,8,9,10,11]
array.pop()
console.log(array)   // output-----[1,2,3,4,5,6,7,8,9,10]

//use of unshift(ele1,ele2,.....) methode ---  adds an elements at the start of an array 
array=[1,2,3,4,5,6,7,8,9,10]
array.unshift(-2,-1,0)
console.log(array)    // output------[-2,-1,0,1,2,3,4,5,6,7,8,9,10]

//use of shift() methode --- delete the first element of an array
array=[1,2,3,4,5,6,7,8,9,10]
array.shift()
console.log(array)      //----- output----[2,3,4,5,6,...]

// use of join("separator?") methode ----- returns the joined part
array=[1,2,3,4,5,6,7,8,9,10]
console.log(array.join("/"))  //output-----1/2/3/4/5/6/7/8/9/10

// use of toString() methode ---- it does not take any separator
array=[1,2,3,4,5,6,7,8,9,10]
console.log(array.toString())      //output-----1,2,3,4,5,6,7,8,9,10

//use of splice(startIndex,deketeCount?,ele1,ele2,.......)
array=[1,2,3,4,5,6,7,8,9,10]
array.splice(3,2,10,50)
console.log(array)      //output-----[1,2,3,10,50,6,7,8,9,10]
function sum()
