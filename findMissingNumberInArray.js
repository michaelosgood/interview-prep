// PROBLEMN
// Find the missing number in the array with javascript
// You are given an array of positive numbers from 1 to n, such that all numbers 
// from 1 to n are present except one number x. You have to find x. The input array 
// is not sorted. Look at the below array and give it a try before checking the solution. 

// SOLUTION
// To find the missing number in the array, we can utilize the fact that the sum 
// of the first n positive integers is given by the formula: sum = (n * (n + 1)) / 2.

function findMissingNumber(arr) {
    const n = arr.length + 1; // n is the length of the array plus 1 (since one number is missing)
    const totalSum = (n * (n + 1)) / 2; // Calculate the sum of first n positive integers
    const arrSum = arr.reduce((acc, num) => acc + num, 0); // Calculate the sum of numbers in the array
    const missingNumber = totalSum - arrSum; // Subtract array sum from total sum to find the missing number
    return missingNumber;
}

// Test the function with an example array
const exampleArray = [1, 2, 4, 6, 3, 7, 8];
console.log("Missing number:", findMissingNumber(exampleArray)); // Output: 5

// In this implementation, we first calculate the total sum of the first n 
// positive integers using the formula mentioned above. Then, we calculate 
// the sum of numbers in the given array. Finally, we find the missing number 
// by subtracting the array sum from the total sum.