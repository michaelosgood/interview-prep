// PROBLEM
// Merge two sorted linked lists
// Given two sorted linked lists, merge them so that the resulting linked list is also sorted. 
// Consider two sorted linked lists and the merged list below them as an example.
// head1 -> 4 -> 8 -> 15 -> 19 -> NULL
// head2 -> 7 -> 9 ->10 -> 16 -> NULL
// head1 4 -> 7 -> 8 -> 9 -> 10 -> 15 -> 16 -> 19 -> NULL
class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

function mergeTwoLists(l1, l2) {
    let dummy = new ListNode(-1); // Dummy node to start the merged list
    let current = dummy;

    // Traverse both lists simultaneously
    while (l1 !== null && l2 !== null) {
        if (l1.val < l2.val) {
            current.next = l1;
            l1 = l1.next;
        } else {
            current.next = l2;
            l2 = l2.next;
        }
        current = current.next;
    }

    // Append the remaining nodes of either list
    if (l1 !== null) {
        current.next = l1;
    } else {
        current.next = l2;
    }

    return dummy.next; // Return the merged list starting from the next node of the dummy
}

// Helper function to create linked lists
function createLinkedList(arr) {
    let head = new ListNode(arr[0]);
    let current = head;

    for (let i = 1; i < arr.length; i++) {
        current.next = new ListNode(arr[i]);
        current = current.next;
    }

    return head;
}

// Helper function to print linked lists
function printLinkedList(head) {
    let result = "";
    while (head !== null) {
        result += head.val + " -> ";
        head = head.next;
    }
    result += "NULL";
    console.log(result);
}

// Test the function with example lists
const list1 = createLinkedList([4, 8, 15, 19]);
const list2 = createLinkedList([7, 9, 10, 16]);
console.log("Original List 1:");
printLinkedList(list1);
console.log("Original List 2:");
printLinkedList(list2);
const mergedList = mergeTwoLists(list1, list2);
console.log("Merged List:");
printLinkedList(mergedList);

// This code defines a ListNode class to represent each 
// node in the linked list, and a mergeTwoLists function 
// to merge two sorted linked lists. It iterates through 
// both lists, comparing values, and merging them into a 
// single sorted list. Finally, it provides helper functions 
// to create and print linked lists, and demonstrates the 
// merging process with example lists.