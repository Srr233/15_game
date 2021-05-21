import { solveFirstLine } from "../handlers/auto-solver/firstLine.js";
import { getWay } from "../handlers/auto-solver/getWay.js";
import { move } from "../handlers/auto-solver/move.js";
import { getCurrentPos } from "../handlers/checkMove.js";
import { moveDOMCard } from "../handlers/moveDOMCard.js";
import { walk } from "../handlers/walk.js";

export default function autoSolving (arr) {
  return () => {
    let block = [];
    const forDOM = [];
    let goal = [0, 0];
    forDOM.push(...solveFirstLine(arr, goal, block));
    
    let time = 0;
    for (const way of forDOM) {
      time += 1;
      setTimeout(() => {
        moveDOMCard(way[0].n, way[0].to);
        moveDOMCard(way[1].n, way[1].to);
      }, time * 200);
    }
  }
}