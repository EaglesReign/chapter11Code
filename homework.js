//Phil Hofer
//CMP344
//3/18/2015
//problem to illustrate the shortest path problem

load("Graph.js");

g = new Graph(12);
g.addEdge(0,4);
g.addEdge(0,5);
g.addEdge(1,2);
g.addEdge(1,4);
g.addEdge(1,5);
g.addEdge(2,7);
g.addEdge(3,6);
g.addEdge(3,7);
g.addEdge(4,8);
g.addEdge(5,9);
g.addEdge(5,10);
g.addEdge(6,7);
g.addEdge(6,9);
g.addEdge(6,10);
g.addEdge(7,11);
g.addEdge(8,9);
g.addEdge(10,11);

g.vertexList = ["ver0", "ver1", "ver2", "ver3", "ver4",
	"ver5", "ver6", "ver7", "ver8", "ver9", "ver10", "ver11"];

g.bfs(0);
var vertex = 11;
var source = 0;
var paths = g.pathTo(source,vertex);
g.showPath(paths);
