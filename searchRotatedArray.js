// PROBLEM
// Search Rotated Array
// Search for a given number in a sorted array, with unique elements, 
// that has been rotated by some arbitrary number. Return -1 if the 
// number does not exist. Assume that the array does not contain duplicates.

// Below is an original array before rotation
// 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19
// 1, 10, 20, 47, 59, 63, 75, 88, 99, 107, 120, 133, 155, 162, 176, 188, 199, 200, 210, 222

// After performing rotation on this array 6 times it changes to:
// 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19
// 176, 188, 199, 200, 210, 222, 1, 10, 20, 47, 59, 63, 75, 88, 99, 107, 120, 133, 155, 162
// The task is to find a given number in this array.


// SOLUTION
// To search for a given number in a rotated sorted array, we can modify the binary search algorithm.
function searchRotatedArray(arr, target) {
    let low = 0;
    let high = arr.length - 1;

    while (low <= high) {
        const mid = Math.floor((low + high) / 2);

        if (arr[mid] === target) {
            return mid; // Found the target
        }

        // Check if the left half is sorted
        if (arr[low] <= arr[mid]) {
            if (target >= arr[low] && target < arr[mid]) {
                high = mid - 1; // Target is in the left half
            } else {
                low = mid + 1; // Target is in the right half
            }
        }
        // Check if the right half is sorted
        else {
            if (target > arr[mid] && target <= arr[high]) {
                low = mid + 1; // Target is in the right half
            } else {
                high = mid - 1; // Target is in the left half
            }
        }
    }

    return -1; // Target not found
}

// Test the function with the given rotated array and target
const rotatedArray = [176, 188, 199, 200, 210, 222, 1, 10, 20, 47, 59, 63, 75, 88, 99, 107, 120, 133, 155, 162];
const target = 10;
console.log("Index of", target, "in the rotated array:", searchRotatedArray(rotatedArray, target));

// In this implementation:
// We use a modified binary search algorithm to search for the target.
// We divide the array into two halves at each step and check if the target is within the sorted half.
// If the left half is sorted and the target is within the range of the left half, we continue searching 
// in the left half. Otherwise, we search in the right half.
// If the right half is sorted and the target is within the range of the right half, we continue searching 
// in the right half. Otherwise, we search in the left half.
// We repeat this process until we find the target or the low index exceeds the high index, indicating that 
// the target is not found in the array.