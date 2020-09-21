//undirected graph
class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    this.adjacencyList[vertex] = this.adjacencyList[vertex] || [];
  }

  addEdge(v1, v2) {
    this.adjacencyList[v1].push(v2);
    this.adjacencyList[v2].push(v1);
  }

  removeEdge(v1, v2) {
    if (!this.adjacencyList[v1] || !this.adjacencyList[v2]) return undefined;
    this.adjacencyList[v1] = this.adjacencyList[v1].filter((v) => v !== v2);
    this.adjacencyList[v2] = this.adjacencyList[v2].filter((v) => v !== v1);
  }

  removeVertex(vertex) {
    while (this.adjacencyList[vertex].length) {
      const adjacentVertex = this.adjacencyList[vertex].pop();
      this.removeEdge(vertex, adjacentVertex);
    }
    delete this.adjacencyList[vertex];
  }

  DFS_Recursive(start) {
    const traversed = [],
      visited = {};
    const adjacencyList = this.adjacencyList;

    (function traverse(vertex) {
      if (!vertex) return;
      traversed.push(vertex);
      visited[vertex] = true;
      adjacencyList[vertex].forEach((neighbor) => {
        if (!visited[neighbor]) {
          return traverse(neighbor);
        }
      });
    })(start);
    return traversed;
  }

  DFS_Iterative(start) {
    const traversed = [],
      visited = {};
    const stack = [start];
    while (stack.length > 0) {
      let vertex = stack.pop();
      if (!visited[vertex]) {
        traversed.push(vertex);
        visited[vertex] = true;
        this.adjacencyList[vertex].forEach((neighbor) => {
          stack.push(neighbor);
        });
      }
    }
    return traversed;
  }

  BFS(start) {
    const traversed = [],
      visited = {};
    const queue = [start];
    while (queue.length > 0) {
      let vertex = queue.shift();
      if (!visited[vertex]) {
        traversed.push(vertex);
        visited[vertex] = true;
        this.adjacencyList[vertex].forEach((neighbor) => {
          queue.push(neighbor);
        });
      }
    }
    return traversed;
  }
}
