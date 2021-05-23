import { solveAnotherLine } from "../handlers/auto-solver/anotherLine.js";
import { solveFirstLine } from "../handlers/auto-solver/firstLine.js";
import { solveLastLine } from "../handlers/auto-solver/lastLine.js";
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
    let block = [];
    const forDOM = [];
    let goal = [0, 0];
    const firstLine = solveFirstLine(arr, goal, block);
    block = firstLine[1];
    forDOM.push(...firstLine[0]);

    goal = [1, 1];
    const anotherLine = solveAnotherLine(arr, goal, block);
    forDOM.push(...anotherLine[0]);
    block = anotherLine[1];
    block[7] = { nArr: 1, nIndex: 3 }; //fix block index

    goal = [3, 1];
    const lastLine = solveLastLine(arr, goal, block);
    forDOM.push(...lastLine[0]);

    alert('Look at the console.');
    if (!isDone(realArr)) {
      if (!lastLine[1]) console.log('Game can\'t be solved. But here are ways to be closer to finish!');
      console.log('\n');
      let countOfWays = 0;
      for (const way of forDOM) {
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