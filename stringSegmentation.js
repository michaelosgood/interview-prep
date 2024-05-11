// PROBLEM
// String segmentation
// You are given a dictionary of words and a large input string. 
// You have to find out whether the input string can be completely 
// segmented into the words of a given dictionary. The following 
// two examples elaborate on the problem further.

// Given a dictionary of words.
// apple, apple, pear, pie

// Input string of “applepie” can be segmented into dictionary words.
// apple, pie

// Input string “applepeer” cannot be segmented into dictionary words.
// apple, peer

// SOLUTION
// To solve this problem, we can use dynamic programming. We'll 
// iterate through the input string and for each position i, 
// we'll check if there's a word in the dictionary that matches 
// the substring from 0 to i. If such a word exists and the remaining 
// substring from i+1 onwards can also be segmented into words from 
// the dictionary, then we mark dp[i] as true, indicating that the 
// substring up to position i can be segmented.

function wordSegmentation(dictionary, input) {
    const n = input.length;
    const dp = new Array(n + 1).fill(false);
    dp[0] = true; // Base case: empty string is always segmented

    for (let i = 1; i <= n; i++) {
        for (let j = 0; j < i; j++) {
            const word = input.substring(j, i);
            if (dp[j] && dictionary.has(word)) {
                dp[i] = true;
                break;
            }
        }
    }

    return dp[n];
}

// Test the function with examples
const dictionary1 = new Set(["apple", "pear", "pie"]);
console.log(wordSegmentation(dictionary1, "applepie")); // Output: true

const dictionary2 = new Set(["apple", "pear", "pie"]);
console.log(wordSegmentation(dictionary2, "applepeer")); // Output: false

// In this implementation:
// We use a dynamic programming approach where dp[i] indicates whether the 
// substring up to position i can be segmented into words from the dictionary.
// We iterate through the input string and for each position i, we check all 
// substrings starting from 0 up to i to see if there's a word in the dictionary. 
// If such a word exists and the substring from j+1 onwards can be segmented, 
// we mark dp[i] as true.
// Finally, we return dp[n], where n is the length of the input string, which 
// indicates whether the entire input string can be segmented into words from 
// the dictionary.