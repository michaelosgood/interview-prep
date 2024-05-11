// PROBLEM
// Copy linked list with arbitrary pointer
// You are given a linked list where the node has two pointers. 
// The first is the regular next pointer. The second pointer is 
// called arbitrary and it can point to any node in the linked list. 
// Your job is to write code to make a deep copy of the given linked list. 
// Here, deep copy means that any operations on the original list should 
// not affect the copied list.


// SOLUTION
// To create a deep copy of a linked list with arbitrary pointers, 
// we need to perform two main steps:
// 1. Create a copy of each node in the original linked list, maintaining the next pointers.
// 2. For each node in the original list, update the arbitrary pointers in the copied list to point 
// to the corresponding nodes.

class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.arbitrary = null;
    }
}

function copyRandomList(head) {
    if (!head) return null;

    const cloneMap = new Map(); // Map to store original nodes as keys and cloned nodes as values

    // Step 1: Create a copy of each node and maintain a mapping between original and cloned nodes
    let current = head;
    while (current) {
        cloneMap.set(current, new Node(current.val));
        current = current.next;
    }

    // Step 2: Update next and arbitrary pointers of cloned nodes based on the mapping
    current = head;
    while (current) {
        const cloneNode = cloneMap.get(current);
        cloneNode.next = cloneMap.get(current.next);
        cloneNode.arbitrary = cloneMap.get(current.arbitrary);
        current = current.next;
    }

    return cloneMap.get(head); // Return the head of the cloned list
}

// Helper function to print linked list with arbitrary pointers
function printRandomList(head) {
    let result = "";
    while (head) {
        const nextVal = head.next ? head.next.val : "NULL";
        const arbitraryVal = head.arbitrary ? head.arbitrary.val : "NULL";
        result += `[val: ${head.val}, next: ${nextVal}, arbitrary: ${arbitraryVal}] -> `;
        head = head.next;
    }
    result += "NULL";
    console.log(result);
}

// Test the function with an example linked list
const node1 = new Node(1);
const node2 = new Node(2);
const node3 = new Node(3);

node1.next = node2;
node1.arbitrary = node3;
node2.next = node3;
node2.arbitrary = node1;
node3.arbitrary = node2;

console.log("Original List:");
printRandomList(node1);

const clonedList = copyRandomList(node1);
console.log("Cloned List:");
printRandomList(clonedList);

// In this implementation, the copyRandomList function creates a deep 
// copy of the given linked list with arbitrary pointers. It uses a Map 
// to maintain a mapping between original nodes and their cloned counterparts.
//  It iterates through the original list twice: first to create cloned nodes 
//  and map them, and then to update the next and arbitrary pointers of the 
//  cloned nodes based on the mapping. Finally, it returns the head of the cloned list