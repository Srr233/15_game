import { getAnotherLine } from "./anotherLine.js";
import { getFirstLine } from "./firstLine.js";
import { getLastLine } from "./lastLine.js";

class AutoSolve {
  constructor(arr) {
    this._arr = arr;
    this._goal = [0, 0];
    this._block = [];
    this._forDOM = [];
    this._res = true;
    this._getFirstLine = getFirstLine;
    this._getAnotherLine = getAnotherLine;
    this._getLastLine = getLastLine;
  }
  getWaysToSolveGame() {
    this._forDOM.push(...this._getFirstLine());
    this._goal = [1, 1];
    this._forDOM.push(...this._getAnotherLine());
    this._block[7] = { nArr: 1, nIndex: 3 };
    this._goal = [3, 1];
    this._forDOM.push(...this._getLastLine());
    if (!this._res) alert('Game can\'t be solved. Look!');
    return this._forDOM;
  };
}

export { AutoSolve };