load("Graph.js");
g = new Graph(9);
g.addEdge(0,1);
g.addEdge(0,3);
g.addEdge(1,2);
g.addEdge(1,3);
g.addEdge(2,4);
g.addEdge(3,4);
g.addEdge(4,6);
g.addEdge(4,7);
g.addEdge(5,7);
g.addEdge(7,8);
var vertex = 4;
var paths = g.pathTo(vertex);
while (paths.length > 0) {
   if (paths.length > 1) {
      putstr(paths.pop() + '-');
   }
   else {
      putstr(paths.pop());
   }
}
