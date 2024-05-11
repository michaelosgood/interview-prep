// PROBLEM
// You need to change a string from \'abcdef\' to fedcba\' How would you do this?

// SOLUTION
// You can define the string in a variable (e.g. string). From here you take 
// the string, split it into an array of characters with with the split() method, 
// reverse the array with the reverse() method, and then join it back together with 
// the join() method as shown below.\// Original string

let str = 'abcdef';

// Split the string into an array of characters, reverse the array, and join the characters back into a string
str = str.split('').reverse().join('');

console.log(str); // Output: fedcba

// In this implementation:
// We use the split('') method to split the string into an array of individual characters.
// Then, we use the reverse() method to reverse the order of the elements in the array.
// Finally, we use the join('') method to join the characters back into a string, with 
// an empty string as the separator.