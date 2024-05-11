// PROBLEM
// Determine if the sum of two integers is equal to the given value
// Given an array of integers and a value, determine if there are any two 
// integers in the array whose sum is equal to the given value. Return true if 
// the sum exists and return false if it does not. Consider this array and the target sums:
// [ 5, 7, 1, 2, 8, 4, 3]
// Target Sum 10 (7+3 = 10, 2+8=10)
// Target Sum 19
// No 2 values sum up to 19

function hasSum(arr, targetSum) {
    const seenNumbers = new Set(); // Store seen numbers to check for their complements

    for (let num of arr) {
        const complement = targetSum - num; // Calculate the complement needed for the current number to reach the target sum

        if (seenNumbers.has(complement)) {
            // If the complement is found in the set of seen numbers, return true
            return true;
        }

        seenNumbers.add(num); // Add the current number to the set of seen numbers
    }

    // If no pair of numbers sums up to the target sum, return false
    return false;
}

// Test the function with an example array and target sums
const array = [5, 7, 1, 2, 8, 4, 3];
console.log("Target Sum 10:", hasSum(array, 10)); // Output: true (7+3=10, 2+8=10)
console.log("Target Sum 19:", hasSum(array, 19)); // Output: false (No 2 values sum up to 19)

// This function iterates through the array and maintains a set of seen numbers. For each number 
// encountered, it calculates its complement (the difference between the target sum and the 
// current number). If this complement is found in the set of seen numbers, it means that 
// there exists a pair of numbers whose sum is equal to the target sum, so the function 
// returns true. If no such pair is found after iterating through the entire array, the 
// function returns false.