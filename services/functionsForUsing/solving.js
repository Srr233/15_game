import { AutoSolve } from "../handlers/auto-solver/autoSolve.js";
import { isDone } from "../handlers/isDone.js";

export default function solving (realArr) {
  const message = (n, way) => {
    console.log(`${n} -> ${way}`);
  }
  const arr = (() => {
    const result = [];
    for (const n of realArr) {
      result.push(n.slice());
    }
    return result;
  })();

  return () => {
    const autoSolve = new AutoSolve(arr);
    const ways = autoSolve.getWaysToSolveGame();

    alert('Look at the console.');
    if (!isDone(realArr)) {
      console.log('\n');
      let countOfWays = 0;
      for (const way of ways) {
        countOfWays += 1;
        if (way[0].n !== 0) {
          message(way[0].n, way[0].to);
        } else {
          message(way[1].n, way[1].to);
        }
      }
      console.log(`Amount of ways to solve: ${countOfWays}`);
    } else {
      console.log('Game is solved!');
    }
  }
}