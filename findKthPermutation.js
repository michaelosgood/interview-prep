// PROBLEM
// Find Kth permutation
// Given a set of ‘n’ elements, find their Kth permutation. Consider the following set of elements:
// 1, 2, 3
// All permutations of the above elements are (with ordering):
// 1st: 123
// 2nd: 132
// 3rd: 213
// 4th: 231
// 5th; 312
// 6th: 321

// Here we need to find the Kth permutation.

// SOLUTION
// To find the Kth permutation of a set of 'n' elements, we can use a 
// backtracking approach combined with some mathematical insights. 
function findKthPermutation(n, k) {
    const factorial = []; // Store factorials from 0! to (n-1)!
    factorial[0] = 1;

    // Calculate factorials up to (n-1)!
    for (let i = 1; i < n; i++) {
        factorial[i] = factorial[i - 1] * i;
    }

    const elements = Array.from({ length: n }, (_, index) => index + 1); // Create array of elements from 1 to n
    let result = '';

    k--; // Convert k to 0-based index for easier calculation

    for (let i = n - 1; i >= 0; i--) {
        const index = Math.floor(k / factorial[i]); // Calculate index of the current element
        result += elements.splice(index, 1)[0]; // Append the element at the calculated index to the result
        k %= factorial[i]; // Update k for the next iteration
    }

    return result;
}

// Test the function with the given set of elements and Kth permutation
const n = 3;
const k = 5;
console.log(`The ${k}th permutation is: ${findKthPermutation(n, k)}`); // Output: The 5th permutation is: 312

// In this implementation:
// We first calculate factorials from 0! to (n-1)! and store them in the factorial array.
// We create an array elements containing the numbers from 1 to n.
// We iterate from the largest element to the smallest element. For each element, we calculate 
// the index of the element to append to the result based on the value of 'k' and the factorials.
// We append the selected element to the result and remove it from the elements array.
// We update 'k' for the next iteration by taking the remainder after dividing by the factorial 
// of the current index.
// Finally, we return the resulting permutation.