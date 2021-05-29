import { AutoSolve } from "../handlers/auto-solver/autoSolve.js";
import { moveDOMCard } from "../handlers/moveDOMCard.js";

export default function autoSolving (arr) {
  return () => {
    const autoSolve = new AutoSolve(arr);
    const ways = autoSolve.getWaysToSolveGame();

    let time = 0;
    for (const way of ways) {
      time += 1;
      setTimeout(() => {
        moveDOMCard(way[0].n, way[0].to);
        moveDOMCard(way[1].n, way[1].to);
      }, time * 200);
    }
  }
}