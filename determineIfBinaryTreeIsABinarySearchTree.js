// PROBLEM
// Determine if a binary tree is a binary search tree
// Given a Binary Tree, figure out whether it’s a Binary Search 
// Tree. In a binary search tree, each node’s key value is smaller 
// than the key value of all nodes in the right subtree, and is 
// greater than the key values of all nodes in the left subtree. 
// Below is an example of a binary tree that is a valid BST.
// 100; 50, 200; 25, 75, 125, 350
// Below is an example of a binary tree that is not a BST.
// 100; 50, 200; 25, 75, 90, 350

// SOLUTION
// To determine whether a binary tree is a binary search tree (BST), we need to perform an 
// inorder traversal of the tree and check if the elements are in sorted order.
// Here's how we can implement this in JavaScript:

class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

function isValidBST(root) {
    let prev = null;

    function inorderTraversal(node) {
        if (!node) return true;

        if (!inorderTraversal(node.left)) return false;

        if (prev !== null && node.val <= prev) return false;
        prev = node.val;

        return inorderTraversal(node.right);
    }

    return inorderTraversal(root);
}

// Test the function with the given binary trees
const validBST = new TreeNode(100);
validBST.left = new TreeNode(50);
validBST.right = new TreeNode(200);
validBST.left.left = new TreeNode(25);
validBST.left.right = new TreeNode(75);
validBST.right.left = new TreeNode(125);
validBST.right.right = new TreeNode(350);

console.log("Is the first tree a valid BST?", isValidBST(validBST)); // Output: true

const invalidBST = new TreeNode(100);
invalidBST.left = new TreeNode(50);
invalidBST.right = new TreeNode(200);
invalidBST.left.left = new TreeNode(25);
invalidBST.left.right = new TreeNode(75);
invalidBST.right.left = new TreeNode(90); // This violates BST property

console.log("Is the second tree a valid BST?", isValidBST(invalidBST)); // Output: false

// In this implementation:
// We perform an inorder traversal of the binary tree.
// At each node, we compare its value with the previously visited node's 
// value (stored in prev). If the current node's value is less than or equal 
// to the previous node's value, it violates the BST property, and we return false.
// If the inorder traversal completes without any violation, we return true, 
// indicating that the tree is a valid BST.
