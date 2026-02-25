// 1. Create a string variable and use the length property to find out how many characters it contains.

const str = "Practice quetions on string.";
console.log(`In this string ${str.length} characters contained.`);


// 2. Create a string variable and convert it to uppercase using the toUpperCase() method.

console.log(str.toUpperCase());


// 3. Create a string variable and convert it to lowercase using the toLowerCase() method.

console.log(str.toLowerCase());


// 4. Create a string variable and use the indexOf() method to find the position of a specific word in the string.

console.log(`the index of specific word is ${str.indexOf("on")}.`);


// 5. Create a string variable and use the includes() method to check if a specific word is present in the string.

// const word = "off";
const word = "on"
console.log(`Is the word '${word}' present in the string? ans: ${str.includes(word)}`);


// 6. Create a string variable and use the slice() method to extract a portion of the string.

console.log(str.slice(2,12));


// 7. Create a string variable and use the split() method to split the string into an array of words.

console.log(str.split(" "));

// 8. Create a string variable and use the replace() method to replace a specific word with another word.

console.log(str.replace("string", "Array"))
console.log(str.replaceAll("on", "ON"))

// 12. Create two string variables and use the concat() method to combine them into a single string.

const str1 = "JavaScript";
const str2 ="& React";
console.log(str1.concat(" ",str2));

