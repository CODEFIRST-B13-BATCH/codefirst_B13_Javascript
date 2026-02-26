let str ="hello world"
let str2="welcome to codefirst"
console.log(str)
console.log(str.toUpperCase())
console.log(str.toLowerCase())
let dex=str.indexOf("w")
console.log(dex)
let depart=str.split(" ")
console.log(depart)
let valueAt=str.charAt(15)
console.log(valueAt)
let add=str.concat(" ",str2)
console.log(add)
let find=str2.search("to")
console.log(find)
//**********************************************************************

//exercise
//01 length method
console.log("******************************************************")
let str3="hello world welcome to javascript"
console.log(str3.length) //givs the length of an string

// 02 to upperrcase
let str4="welcome to javascript"
let str5=str4.toUpperCase()
console.log(str5)  //converts to upper case
console.log(str4)  //keep the original string same

//03 toLowerCase
let str6="WELCOME"
let reTurn=str6.toLowerCase()
console.log(reTurn)   //changes to lower case and keeps the original srting same

//04 indexOf methode
let place=str6.indexOf("L")   //returns 1 if found at first occurence
console.log(place)
console.log(str6.indexOf("l"))  //returns -1 if the charecter/string is not found

//05 includes() methode
let present=str3.includes("world")
console.log(str3.includes("biresh"))   //return true if the stirng is found and false if not found
console.log(present)

//06 use slice methode 
let stri="onedrive desktop codefirst"
let portion = stri.slice(1,5)      //gives the portion from 1 to 4 and excludes 5 
console.log(portion)
console.log(stri.slice(3,8))

//07 use split methode  - converts string to array
stri="onedrive desktop codefirst javascript study"
let parts =stri.split(" ")
console.log(parts)
console.log(stri.split(" "))
console.log(stri)

//08 use replace methode--- replaces the one string with other at the first occurence 
stri="onedrive desktop codefirst javascript study codefirst"
console.log(stri.replace("codefirst","firstcode"))
console.log(stri.replace("codefirst","firstcode"))
console.log(stri)

//09 use trim methode -- trims at both the ends
stri="    hello    "
console.log(stri.trim())
console.log(stri)

//10 charAt---dives the charecter at given index if mot found it return black space
stri="hello"
console.log(stri.charAt(3))


//11 search methode -- search the string and returns the index at the first occurence and if not found returns -1
stri ="use the search methode and find the string"
console.log(stri.search("search"))
console.log(stri.search("hello"))

// 12 use concat methode -- joins two strings
let str7="hello"
let str8="world!"
console.log(str7.concat(" ",str8))