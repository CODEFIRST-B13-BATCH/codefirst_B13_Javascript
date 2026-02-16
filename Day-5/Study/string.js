let str = "India is my country";

// String Methods

// 1. length
console.log(str.length);

// 2. toUpperCase()
console.log(str.toUpperCase());

// 3. toLowerCase()
console.log(str.toLowerCase());

// 4. indexOf()
console.log(str.indexOf("my")); // if not found it will return -1

// 5. includes()
console.log(str.includes("my")); // returns boolean value (true or false)

// 6. slice()
console.log(str.slice(0, 6)); // returns a substring from index 0 to 4 (5 is not included)

// 7. split()
console.log(str.split(" ")); // splits the string into an array of substrings based on the specified separator (in this case, a space)

// 8. replace()
console.log(str.replace("India", "USA")); // replaces the first occurrence of the specified value with another value

// 9. trim()
let str2 = "   Hello World!   ";
console.log(str2.trim()); // removes whitespace from both ends of the string

// 10. charAt()
console.log(str.charAt(0)); // returns the character at the specified index (in this case, index 0 which is 'I')

// 11. search()
console.log(str.search("country")); // returns the index of the first occurrence of the specified value (in this case, "country" starts at index 14)

// 12. concat()
let str3 = "I love programming.";
console.log(str.concat(" ", str3)); // concatenates two or more strings and returns a new string (in this case, it will concatenate str and str3 with a space in between)


// questions for practice :
// 1. Create a string variable and use the length property to find out how many characters it contains.
// 2. Create a string variable and convert it to uppercase using the toUpperCase() method.
// 3. Create a string variable and convert it to lowercase using the toLowerCase() method.  
// 4. Create a string variable and use the indexOf() method to find the position of a specific word in the string.
// 5. Create a string variable and use the includes() method to check if a specific word is present in the string.
// 6. Create a string variable and use the slice() method to extract a portion of the string.
// 7. Create a string variable and use the split() method to split the string into an array of words.
// 8. Create a string variable and use the replace() method to replace a specific word with another word.
// 9. Create a string variable with leading and trailing whitespace and use the trim() method to remove the whitespace.
// 10. Create a string variable and use the charAt() method to find the character at a specific index.
// 11. Create a string variable and use the search() method to find the position of a specific word in the string.
// 12. Create two string variables and use the concat() method to combine them into a single string.
