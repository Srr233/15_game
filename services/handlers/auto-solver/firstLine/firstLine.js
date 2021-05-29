import { move } from "../move.js";
import { getWaysToSolve3and4 } from "./solve3and4.js";
import { getWaysToSolveLastN } from "./solveLastN.js";

function getFirstLine() {
  const sequenceNumbers = [1, 2, 3, 4, 5, 9, 13];
  const forDOM = [];
  ih: for (const i of sequenceNumbers) {
    if (i % 4 === 0) {
      forDOM.push(...getWaysToSolve3and4.call(this, [1, 2], i));
      continue;
    }
    if (i % 4 === 1 && i !== 1) {
      forDOM.push(...getWaysToSolveLastN.call(this, [3, 0], i, sequenceNumbers));
      break ih;
    }
    forDOM.push(...move(this._arr, i, this._goal, this._block, true));
    this._goal[1] += 1;
  }
  return forDOM;
}

export { getFirstLine };