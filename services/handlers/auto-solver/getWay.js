import { searchWay } from "./searchWay.js";

function getWay (arr, start, goal) {
  let result = searchWay(arr, start, goal);
  let ways = [];

  while (result.previous) {
    
    ways.push({
      n: [result.n.nArr, result.n.nIndex],
      to: [result.previous.n.nArr, result.previous.n.nIndex]
    });
    result = result.previous;
  }
  return ways;
}

export { getWay };