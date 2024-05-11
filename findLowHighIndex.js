// PROBLEM
// Given a sorted array of integers, return the low and high index of 
// the given key. You must return -1 if the indexes are not found. 
// The array length can be in the millions with many duplicates.

// In the following example, according to the key, the low and high 
// indices would be:

// key: 1, low = 0 and high = 0
// key: 2, low = 1 and high = 1
// key: 5, low = 2 and high = 9
// key: 20, low = 10 and high = 10

// For the testing of your code, the input array will be:
// 1, 1, 1, 2, 2, 2, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 6, 6, 6, 6, 6, 6

// SOLUTION
// To find the low and high index of a given key in a sorted array of integers, 
// we can use a binary search algorithm with slight modifications. Instead of 
// stopping the binary search when we find the key, we continue searching towards 
// the beginning and end of the array to find the low and high indices respectively. 
function findLowIndex(arr, key) {
    let low = 0;
    let high = arr.length - 1;
    let result = -1;

    while (low <= high) {
        const mid = Math.floor((low + high) / 2);

        if (arr[mid] === key) {
            result = mid;
            high = mid - 1; // Continue searching towards the beginning
        } else if (arr[mid] < key) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }

    return result;
}

function findHighIndex(arr, key) {
    let low = 0;
    let high = arr.length - 1;
    let result = -1;

    while (low <= high) {
        const mid = Math.floor((low + high) / 2);

        if (arr[mid] === key) {
            result = mid;
            low = mid + 1; // Continue searching towards the end
        } else if (arr[mid] < key) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }

    return result;
}

// Test the functions with the given input array and keys
const arr = [1, 1, 1, 2, 2, 2, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 6, 6, 6, 6, 6, 6];
console.log("key: 1, low =", findLowIndex(arr, 1), "and high =", findHighIndex(arr, 1));
console.log("key: 2, low =", findLowIndex(arr, 2), "and high =", findHighIndex(arr, 2));
console.log("key: 5, low =", findLowIndex(arr, 5), "and high =", findHighIndex(arr, 5));
console.log("key: 20, low =", findLowIndex(arr, 20), "and high =", findHighIndex(arr, 20));

// In this implementation:
// We define two separate functions findLowIndex and findHighIndex to find the low and high indices respectively.
// Each function performs a modified binary search to find the indices.
// Both functions return -1 if the key is not found in the array.
// We test the functions with the given input array and keys to find the low and high indices for each key.