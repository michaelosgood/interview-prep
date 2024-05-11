// PROBLEM
// Find all subsets of a given set of integers
// We are given a set of integers and we have to find all the possible subsets of this set of integers. 
// The following example elaborates on this further.

// Given set of integers:
// 2; 3; 4

// All possile subsets for the given set of integers:
// 2; 3; 2, 3; 4; 2, 4; 3, 4; 2, 3, 4

// SOLUTION
// To find all possible subsets of a given set of integers, we can use a backtracking approach. 

function findSubsets(nums) {
    const subsets = [];

    function backtrack(startIndex, currentSubset) {
        subsets.push([...currentSubset]); // Add the current subset to the list of subsets

        // Iterate over the remaining elements starting from startIndex
        for (let i = startIndex; i < nums.length; i++) {
            currentSubset.push(nums[i]); // Include the current element in the subset
            backtrack(i + 1, currentSubset); // Recursively generate subsets starting from the next index
            currentSubset.pop(); // Backtrack: Remove the current element from the subset
        }
    }

    backtrack(0, []); // Start backtracking from index 0 with an empty subset
    return subsets;
}

// Test the function with the given set of integers
const nums = [2, 3, 4];
console.log("All possible subsets:", findSubsets(nums));

// In this implementation:
// We define a function backtrack to generate subsets recursively.
// We start by adding an empty subset to the list of subsets.
// Within the backtrack function, we iterate over the remaining elements 
// of the input array starting from the startIndex.
// For each element, we include it in the current subset, recursively generate 
// subsets starting from the next index (i + 1), and then remove the current element 
// (backtrack) to explore other possibilities.
// We call the backtrack function initially with startIndex as 0 and an empty subset.
// Finally, we return the list of all subsets generated during the process.