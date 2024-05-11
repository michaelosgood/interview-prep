// PROBLEM
// Level Order Traversal of Binary Tree
// Given the root of a binary tree, display the node values 
// at each level. Node values for all levels should be displayed 
// on separate lines. Let’s take a look at the below binary tree.
// Level order traversal for this tree should look like: 100; 50, 200; 25, 75, 350

// SOLUTION
// To perform a level order traversal of a binary tree, we can use 
// a breadth-first search (BFS) algorithm. We'll traverse the tree 
// level by level, starting from the root, and for each level, we'll 
// visit all nodes at that level before moving to the next level.

class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

function levelOrderTraversal(root) {
    if (!root) return [];

    const result = [];
    const queue = [root];

    while (queue.length > 0) {
        const levelSize = queue.length;
        const levelValues = [];

        for (let i = 0; i < levelSize; i++) {
            const node = queue.shift();
            levelValues.push(node.val);

            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }

        result.push(levelValues.join(", "));
    }

    return result.join("; ");
}

// Test the function with the given binary tree
const root = new TreeNode(100);
root.left = new TreeNode(50);
root.right = new TreeNode(200);
root.left.left = new TreeNode(25);
root.left.right = new TreeNode(75);
root.right.right = new TreeNode(350);

console.log("Level order traversal:");
console.log(levelOrderTraversal(root));

// In this implementation:
// We use a queue data structure to perform the breadth-first traversal.
// At each level, we process all nodes present in the queue (which initially contains only the root).
// For each node processed, we add its value to the current level values array.
// After processing all nodes at the current level, we add the level values to the result array.
// Finally, we join the result array to format the level order traversal output as specified.