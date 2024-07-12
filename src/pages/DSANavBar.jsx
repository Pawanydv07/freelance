import React from 'react';

const dsaCategories = [
  'Arrays', 'Linked Lists', 'Stacks', 'Queues', 'Hash Tables', 'Binary Trees', 'Binary Search Trees', 
  'Graphs', 'Heaps', 'Trie', 'Dynamic Programming', 'Greedy Algorithms', 'Divide and Conquer', 
  'Backtracking', 'Bit Manipulation', 'Sorting', 'Searching', 'Recursion', 'Strings', 
  'Matrix', 'Graph Theory', 'Graph Traversal', 'Shortest Path', 'Topological Sort', 'Minimum Spanning Tree',
  'Disjoint Sets', 'Segment Tree', 'Fenwick Tree', 'KMP Algorithm', 'Rabin-Karp Algorithm', 'Z Algorithm', 
  'Manacher’s Algorithm', 'Sieve of Eratosthenes', 'Union-Find', 'Tarjan’s Algorithm', 'Kosaraju’s Algorithm'
];

const DSANavBar = () => {
  return (
    <div className="mt-8">
      <h2 className="text-2xl font-extrabold text-gray-900 mb-4">DATA STRUCTURE & ALGORITHM</h2>
      <div className="flex overflow-x-auto space-x-4 py-2">
        {dsaCategories.map((category) => (
          <button
            key={category}
            className="flex-shrink-0 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
};

export default DSANavBar;
