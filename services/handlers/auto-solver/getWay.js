import { searchWay } from "./searchWay.js";

function getWay (arr, start, goal, block) {
  let result = searchWay(arr, start, goal, block);
  let ways = [];
  while (result.previous) {
    
    ways.push({
      n: [result.n.nArr, result.n.nIndex],
      to: [result.previous.n.nArr, result.previous.n.nIndex]
    });
    result = result.previous;
  }
  return ways.reverse();
}

export { getWay };