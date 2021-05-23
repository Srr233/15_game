import { solveAnotherLine } from "../handlers/auto-solver/anotherLine.js";
import { solveFirstLine } from "../handlers/auto-solver/firstLine.js";
import { solveLastLine } from "../handlers/auto-solver/lastLine.js";
import { moveDOMCard } from "../handlers/moveDOMCard.js";

export default function autoSolving (arr) {
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

    if (!lastLine[1]) alert('Game can\'t be solved. Look!');

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