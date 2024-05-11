// PROBLEM
// Reverse Words in a Sentence
// Reverse the order of words in a given sentence (an array of characters).
// "Hello World" --> "World Hello"

// SOLUTION
// To reverse the order of words in a given sentence, we can follow these steps:
// Reverse the entire sentence.
// Reverse each individual word within the sentence.
// Let's implement this in JavaScript:


function reverseWords(sentence) {
    // Step 1: Reverse the entire sentence
    reverseArray(sentence, 0, sentence.length - 1);

    // Step 2: Reverse each individual word
    let start = 0;
    for (let end = 0; end < sentence.length; end++) {
        if (sentence[end] === " ") {
            reverseArray(sentence, start, end - 1);
            start = end + 1;
        }
    }

    // Reverse the last word (or the only word if there's only one)
    reverseArray(sentence, start, sentence.length - 1);

    return sentence.join("");
}

// Helper function to reverse an array within a given range
function reverseArray(arr, start, end) {
    while (start < end) {
        const temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        start++;
        end--;
    }
}

// Test the function with an example
const sentence = "Hello World".split("");
console.log(reverseWords(sentence)); // Output: "World Hello"

// In this implementation:
// We first reverse the entire sentence.
// Then, we iterate through the sentence and when we encounter a space, 
// we reverse the word preceding that space.
// Finally, we reverse the last word (or the only word if there's only one).
// After reversing each word and the entire sentence, we join the characters 
// back into a single string and return it.