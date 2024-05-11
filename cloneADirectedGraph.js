// PROBLEM
// Clone a Directed Graph
// Given the root node of a directed graph, clone this graph by creating 
// its deep copy so that the cloned graph has the same vertices and edges 
// as the original graph.

// Let’s look at the below graphs as an example. If the input graph is 
// G=(V,E) where V is set of vertices and E is set of edges, then the 
// output graph (cloned graph) G’ = (V’, E’) such that V = V’ and E = E’. 
// We are assuming that all vertices are reachable from the root vertex, 
// i.e. we have a connected graph.

// SOLUTION
// To clone a directed graph, we can use depth-first search (DFS) or 
// breadth-first search (BFS) to traverse the original graph while creating 
// the corresponding nodes in the cloned graph. Here, I'll provide an 
// implementation using breadth-first search (BFS) along with a queue data structure.

class Node {
    constructor(val) {
        this.val = val;
        this.neighbors = [];
    }
}

function cloneGraph(node) {
    if (!node) return null;

    const clonedNodeMap = new Map(); // Map to store original nodes as keys and cloned nodes as values
    const queue = [node]; // Queue for BFS traversal

    // Create a clone of the root node and add it to the map
    const clonedRoot = new Node(node.val);
    clonedNodeMap.set(node, clonedRoot);

    // Perform BFS traversal to clone the graph
    while (queue.length > 0) {
        const current = queue.shift();

        for (let neighbor of current.neighbors) {
            if (!clonedNodeMap.has(neighbor)) {
                // If neighbor node is not cloned yet, clone it and add it to the map
                const clonedNeighbor = new Node(neighbor.val);
                clonedNodeMap.set(neighbor, clonedNeighbor);
                queue.push(neighbor);
            }

            // Add the cloned neighbor to the cloned node's neighbors list
            clonedNodeMap.get(current).neighbors.push(clonedNodeMap.get(neighbor));
        }
    }

    return clonedRoot;
}

// Test the function with an example graph
const node1 = new Node(1);
const node2 = new Node(2);
const node3 = new Node(3);
const node4 = new Node(4);

node1.neighbors.push(node2, node4);
node2.neighbors.push(node3, node4);
node3.neighbors.push(node4);
node4.neighbors.push(node1); // Create a cycle

console.log("Original Graph:");
console.log(node1); // Output: The original graph
console.log("Cloned Graph:");
console.log(cloneGraph(node1)); // Output: The cloned graph

// In this implementation:
// We use a breadth-first search (BFS) approach to traverse the original graph.
// We maintain a map (clonedNodeMap) to keep track of original nodes and their 
// corresponding clones.
// We start by cloning the root node and add it to the map.
// During BFS traversal, for each neighbor of the current node, we check if it's 
// already cloned. If not, we create a clone and add it to the map and the queue for further processing.
// We then add the cloned neighbor to the cloned node's list of neighbors.
// Finally, we return the cloned root node of the graph.