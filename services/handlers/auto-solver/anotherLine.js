import { getCurrentPos } from "../checkMove.js";
import { walk } from "../walk.js";
import { getWay } from "./getWay.js";

function getAnotherLine() {
  const forDOM = [];
  let copyGoal;
  const twoLine = [8, 7, 6];
  const i = twoLine[0];

  let wayForN;
  let curr;
  copyGoal = this._goal.slice();
  copyGoal[1] = 3;

  curr = getCurrentPos(i, this._arr);
  wayForN = getWay(this._arr, i, this._arr[copyGoal[0]][copyGoal[1]], this._block);
  this._block.push({ nArr: curr[0], nIndex: curr[1] });
  forDOM.push(...walk(wayForN, this._arr, this._block));

  copyGoal[1] = 1;
  curr = getCurrentPos(twoLine[twoLine.length - 2], this._arr);
  wayForN = getWay(this._arr, twoLine[twoLine.length - 2], this._arr[copyGoal[0]][copyGoal[1]], this._block);
  this._block.push({ nArr: curr[0], nIndex: curr[1] });
  forDOM.push(...walk(wayForN, this._arr, this._block));

  try {
    copyGoal[0] += 1;
    curr = getCurrentPos(twoLine[twoLine.length - 1], this._arr);
    wayForN = getWay(this._arr, twoLine[twoLine.length - 1], this._arr[copyGoal[0]][copyGoal[1]], this._block);
    this._block.push({ nArr: curr[0], nIndex: curr[1] });
    forDOM.push(...walk(wayForN, this._arr, this._block));
  } catch (e) {
    this._block.pop();
    this._block.pop();
    copyGoal = [3, 1];
    curr = getCurrentPos(twoLine[twoLine.length - 2], this._arr);
    wayForN = getWay(this._arr, twoLine[twoLine.length - 2], this._arr[copyGoal[0]][copyGoal[1]], this._block);
    this._block.push({ nArr: curr[0], nIndex: curr[1] });
    forDOM.push(...walk(wayForN, this._arr, this._block));

    copyGoal = [2, 2];
    curr = getCurrentPos(twoLine[twoLine.length - 1], this._arr);
    this._block[8] = this._block.pop();
    wayForN = getWay(this._arr, twoLine[twoLine.length - 1], this._arr[copyGoal[0]][copyGoal[1]], this._block);
    this._block.push({ nArr: curr[0], nIndex: curr[1] });
    forDOM.push(...walk(wayForN, this._arr, this._block));

    copyGoal = [2, 1];
    curr = getCurrentPos(twoLine[twoLine.length - 2], this._arr);
    this._block[8] = this._block.pop();
    wayForN = getWay(this._arr, twoLine[twoLine.length - 2], this._arr[copyGoal[0]][copyGoal[1]], this._block);
    this._block.push({ nArr: curr[0], nIndex: curr[1] });
    forDOM.push(...walk(wayForN, this._arr, this._block));

    copyGoal = [3, 2];
    curr = getCurrentPos(twoLine[twoLine.length - 1], this._arr);
    this._block[8] = this._block.pop();
    wayForN = getWay(this._arr, twoLine[twoLine.length - 1], this._arr[copyGoal[0]][copyGoal[1]], this._block);
    this._block.push({ nArr: curr[0], nIndex: curr[1] });
    forDOM.push(...walk(wayForN, this._arr, this._block));

    copyGoal = [1, 1];
    curr = getCurrentPos(twoLine[twoLine.length - 2], this._arr);
    this._block[8] = this._block.pop();
    wayForN = getWay(this._arr, twoLine[twoLine.length - 2], this._arr[copyGoal[0]][copyGoal[1]], this._block);
    this._block.push({ nArr: curr[0], nIndex: curr[1] });
    forDOM.push(...walk(wayForN, this._arr, this._block));

    copyGoal = [2, 1];
    curr = getCurrentPos(twoLine[twoLine.length - 1], this._arr);
    this._block[8] = this._block.pop();
    wayForN = getWay(this._arr, twoLine[twoLine.length - 1], this._arr[copyGoal[0]][copyGoal[1]], this._block);
    this._block.push({ nArr: curr[0], nIndex: curr[1] });
    forDOM.push(...walk(wayForN, this._arr, this._block));
  }

  copyGoal[1] += 1;
  copyGoal[0] -= 1;
  curr = getCurrentPos(twoLine[twoLine.length - 2], this._arr);
  this._block[7] = this._block.pop();
  wayForN = getWay(this._arr, twoLine[twoLine.length - 2], this._arr[copyGoal[0]][copyGoal[1]], this._block);
  this._block.push({ nArr: curr[0], nIndex: curr[1] });
  forDOM.push(...walk(wayForN, this._arr, this._block));

  copyGoal[0] = 1;
  copyGoal[1] = 1;
  curr = getCurrentPos(twoLine[twoLine.length - 1], this._arr);
  this._block[8] = this._block.pop();
  wayForN = getWay(this._arr, twoLine[twoLine.length - 1], this._arr[copyGoal[0]][copyGoal[1]], this._block);
  this._block.push({ nArr: curr[0], nIndex: curr[1] });
  forDOM.push(...walk(wayForN, this._arr, this._block));

  return forDOM;
}

export { getAnotherLine };