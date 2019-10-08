import * as d3 from "d3";

var nodes = [{ id: "Alice" }, { id: "Bob" }, { id: "Carol" }];

var links = [
  { source: 0, target: 1 }, // Alice → Bob
  { source: 1, target: 2 } // Bob → Carol
];

const simulation = d3.forceSimulation(nodes);
