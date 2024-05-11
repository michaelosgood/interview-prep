// PROBLEM
// How many ways can you make change with coins and a total amount
// Suppose we have coin denominations of [1, 2, 5] and the total amount is 7. 
// We can make changes in the following 6 ways:

// SOLUTION
// To solve this problem, we can use dynamic programming. 
// We'll create an array to store the number of ways to make 
// change for each amount from 0 to the total amount.

function coinChangeWays(coins, amount) {
    const dp = new Array(amount + 1).fill(0); // Array to store number of ways for each amount
    dp[0] = 1; // Base case: one way to make change for amount 0

    for (let coin of coins) {
        for (let i = coin; i <= amount; i++) {
            dp[i] += dp[i - coin]; // Add ways to make change using current coin
        }
    }

    return dp[amount]; // Return the number of ways to make change for the total amount
}

// Test the function with the given coin denominations and total amount
const coins = [1, 2, 5];
const amount = 7;
console.log("Number of ways to make change:", coinChangeWays(coins, amount)); // Output: 6

// In this implementation:
// We create an array dp where dp[i] represents the number of ways to make change for amount i.
// We initialize dp[0] to 1 since there's only one way to make change for amount 0.
// We iterate through each coin denomination and for each coin, and for each amount from coin to 
// amount, we add the number of ways to make change using the current coin (dp[i - coin]) to the 
// current number of ways (dp[i]).
// Finally, we return dp[amount], which represents the number of ways to make change for the total 
// amount using the given coin denominations.