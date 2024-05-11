// PROBLEM
// Print balanced brace combinations
// Print all braces combinations for a given value n so that they 
// are balanced. For this solution, we will be using recursion

// SOLUTION
// To print all balanced brace combinations for a given value 'n' using 
// recursion, we can implement a backtracking approach.
function generateBraceCombinations(n) {
    const result = [];

    // Helper function to generate balanced brace combinations recursively
    function backtrack(str, open, close) {
        if (str.length === 2 * n) {
            result.push(str); // Add the generated combination to the result array
            return;
        }

        if (open < n) {
            backtrack(str + "(", open + 1, close); // Add an open brace
        }

        if (close < open) {
            backtrack(str + ")", open, close + 1); // Add a close brace
        }
    }

    backtrack("", 0, 0); // Start backtracking with an empty string and both open and close counts as 0
    return result;
}

// Test the function with a given value of 'n'
const n = 3;
console.log("Balanced brace combinations for n =", n);
console.log(generateBraceCombinations(n));

// In this implementation:
// We define a function generateBraceCombinations to generate all balanced brace 
// combinations for a given value 'n'.
// Within the function, we define a helper function backtrack to generate combinations 
// recursively.
// We start with an empty string str and both open and close counts as 0.
// In each recursive call, we either add an open brace if the count of open braces is 
// less than 'n', or add a close brace if the count of close braces is less than the 
// count of open braces.
// We terminate the recursion when the length of the string str becomes equal to 2 * 'n'.
// Finally, we return the array containing all generated combinations.