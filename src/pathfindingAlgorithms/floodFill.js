export function floodFill(grid, startNode, finishNode) {
  if (!startNode || startNode.row == null || startNode.col == null) {
    throw new Error("Invalid start node passed to floodFill");
  }

  const visitedNodesInOrder = [];
  const numRows = grid.length;
  const numCols = grid[0].length;
  let foundTarget = false;

  const dfs = (row, col, parent = null) => {
    if (
      foundTarget ||
      row < 0 || col < 0 ||
      row >= numRows || col >= numCols ||
      grid[row][col].isWall ||
      grid[row][col].isVisited
    ) return;

    const node = grid[row][col];
    node.isVisited = true;
    node.previousNode = parent; // Track the parent
    visitedNodesInOrder.push(node);

    if (node === finishNode) {
      foundTarget = true;
      return;
    }

    dfs(row + 1, col, node);
    dfs(row - 1, col, node);
    dfs(row, col + 1, node);
    dfs(row, col - 1, node);
  };

  dfs(startNode.row, startNode.col);
  return visitedNodesInOrder;
}
export function getNodesInShortestPathOrderFloodFill(finishNode) {
  const nodesInShortestPathOrder = [];
  let current = finishNode;

  while (current !== null) {
    nodesInShortestPathOrder.unshift(current);
    current = current.previousNode || null;
  }

  return nodesInShortestPathOrder;
}
