import { getCurrentPos } from "../checkMove.js";
import { walk } from "../walk.js";
import { getWay } from "./getWay.js";
function getLastLine() {
  const forDOM = [];
  let copyGoal;
  const twoLine = [12, 11, 10];
  const i = twoLine[0];

  let wayForN;
  let curr;
  copyGoal = this._goal.slice();

  curr = getCurrentPos(i, this._arr);
  wayForN = getWay(this._arr, i, this._arr[copyGoal[0]][copyGoal[1]], this._block);
  this._block.push({ nArr: curr[0], nIndex: curr[1] });
  forDOM.push(...walk(wayForN, this._arr, this._block));

  curr = getCurrentPos(twoLine[twoLine.length - 2], this._arr);
  let myNull = getCurrentPos(0, this._arr);
  if (curr[0] === 2) {
    if (curr[1] === 1) {
      copyGoal = [2, 3];
      wayForN = getWay(this._arr, twoLine[twoLine.length - 2], this._arr[copyGoal[0]][copyGoal[1]], this._block);
      forDOM.push(...walk(wayForN, this._arr, this._block));

      copyGoal = [3, 1];
      curr = getCurrentPos(i, this._arr);
      wayForN = getWay(this._arr, i, this._arr[copyGoal[0]][copyGoal[1]], this._block);
      this._block.push({ nArr: curr[0], nIndex: curr[1] });
      forDOM.push(...walk(wayForN, this._arr, this._block));
      this._block[10] = this._block.pop();

      copyGoal = [3, 2];
      curr = getCurrentPos(twoLine[twoLine.length - 2], this._arr);
      wayForN = getWay(this._arr, twoLine[twoLine.length - 2], this._arr[copyGoal[0]][copyGoal[1]], this._block);
      this._block.push({ nArr: curr[0], nIndex: curr[1] });
      forDOM.push(...walk(wayForN, this._arr, this._block));
      this._block[10] = this._block.pop();

      copyGoal = [2, 1];
      curr = getCurrentPos(i, this._arr);
      wayForN = getWay(this._arr, i, this._arr[copyGoal[0]][copyGoal[1]], this._block);
      this._block[10] = this._block.pop();
      forDOM.push(...walk(wayForN, this._arr, this._block));
      this._block[10] = this._block.pop();

      copyGoal = [3, 1];
      curr = getCurrentPos(twoLine[twoLine.length - 2], this._arr);
      wayForN = getWay(this._arr, twoLine[twoLine.length - 2], this._arr[copyGoal[0]][copyGoal[1]], this._block);
      this._block.push({ nArr: curr[0], nIndex: curr[1] });
      forDOM.push(...walk(wayForN, this._arr, this._block));

      copyGoal = [3, 2];
      curr = getCurrentPos(twoLine[twoLine.length - 1], this._arr);
      wayForN = getWay(this._arr, twoLine[twoLine.length - 1], this._arr[copyGoal[0]][copyGoal[1]], this._block);
      this._block.push({ nArr: curr[0], nIndex: curr[1] });
      forDOM.push(...walk(wayForN, this._arr, this._block));
      this._block.pop();
      this._block[10] = { nArr: 2, nIndex: 1 };
      this._block[11] = { nArr: 3, nIndex: 2 };
    } else if (curr[1] === 2) {
      if (myNull[0] === 2) {
        if (myNull[1] === 1) {
          copyGoal = [2, 1];
          wayForN = getWay(this._arr, i, this._arr[copyGoal[0]][copyGoal[1]], this._block);
          this._block.push({ nArr: curr[0], nIndex: curr[1] });
          forDOM.push(...walk(wayForN, this._arr, this._block));

          copyGoal = [3, 2];
          curr = getCurrentPos(twoLine[twoLine.length - 2], this._arr);
          wayForN = getWay(this._arr, twoLine[twoLine.length - 2], this._arr[copyGoal[0]][copyGoal[1]], this._block);
          this._block.push({ nArr: curr[0], nIndex: curr[1] });
          forDOM.push(...walk(wayForN, this._arr, this._block));

          copyGoal = [3, 3];
          curr = getCurrentPos(twoLine[twoLine.length - 2], this._arr);
          wayForN = getWay(this._arr, twoLine[twoLine.length - 2], this._arr[copyGoal[0]][copyGoal[1]], this._block);
          this._block.push({ nArr: curr[0], nIndex: curr[1] });
          forDOM.push(...walk(wayForN, this._arr, this._block));

          copyGoal = [2, 2];
          curr = getCurrentPos(i, this._arr);
          wayForN = getWay(this._arr, i, this._arr[copyGoal[0]][copyGoal[1]], this._block);
          this._block.push({ nArr: curr[0], nIndex: curr[1] });
          forDOM.push(...walk(wayForN, this._arr, this._block));

          copyGoal = [3, 2];
          curr = getCurrentPos(i, this._arr);
          this._block[12] = this._block.pop();
          this._block[12] = this._block.pop();
          this._block[10] = this._block.pop();
          wayForN = getWay(this._arr, i, this._arr[copyGoal[0]][copyGoal[1]], this._block);
          forDOM.push(...walk(wayForN, this._arr, this._block));

          copyGoal = [3, 1];
          curr = getCurrentPos(i, this._arr);
          wayForN = getWay(this._arr, i, this._arr[copyGoal[0]][copyGoal[1]], this._block);
          this._block.push({ nArr: curr[0], nIndex: curr[1] });
          forDOM.push(...walk(wayForN, this._arr, this._block));

          copyGoal = [3, 2];
          this._block[11] = this._block.pop();
          wayForN = getWay(this._arr, twoLine[twoLine.length - 2], this._arr[copyGoal[0]][copyGoal[1]], this._block);
          forDOM.push(...walk(wayForN, this._arr, this._block));

          copyGoal = [2, 1];
          wayForN = getWay(this._arr, i, this._arr[copyGoal[0]][copyGoal[1]], this._block);
          forDOM.push(...walk(wayForN, this._arr, this._block));

          copyGoal = [3, 1];
          wayForN = getWay(this._arr, twoLine[twoLine.length - 2], this._arr[copyGoal[0]][copyGoal[1]], this._block);
          forDOM.push(...walk(wayForN, this._arr, this._block));

          copyGoal = [3, 2];
          this._block[10] = { nArr: 2, nIndex: 1 };
          wayForN = getWay(this._arr, twoLine[twoLine.length - 1], this._arr[copyGoal[0]][copyGoal[1]], this._block);
          forDOM.push(...walk(wayForN, this._arr, this._block));
        } else {

        }
      } else {
        curr = getCurrentPos(i, this._arr);
        wayForN = getWay(this._arr, i, this._arr[copyGoal[0]][copyGoal[1]], this._block);
        this._block.push({ nArr: curr[0], nIndex: curr[1] });
        forDOM.push(...walk(wayForN, this._arr, this._block));

        copyGoal = [3, 2];
        this._block[10] = this._block.pop();
        curr = getCurrentPos(twoLine[twoLine.length - 2], this._arr);
        wayForN = getWay(this._arr, twoLine[twoLine.length - 2], this._arr[copyGoal[0]][copyGoal[1]], this._block);
        forDOM.push(...walk(wayForN, this._arr, this._block));

        copyGoal = [2, 1];
        curr = getCurrentPos(i, this._arr);
        wayForN = getWay(this._arr, i, this._arr[copyGoal[0]][copyGoal[1]], this._block);
        this._block.push({ nArr: curr[0], nIndex: curr[1] });
        forDOM.push(...walk(wayForN, this._arr, this._block));

        copyGoal = [3, 1];
        curr = getCurrentPos(twoLine[twoLine.length - 2], this._arr);
        wayForN = getWay(this._arr, twoLine[twoLine.length - 2], this._arr[copyGoal[0]][copyGoal[1]], this._block);
        this._block.push({ nArr: curr[0], nIndex: curr[1] });
        forDOM.push(...walk(wayForN, this._arr, this._block));
        this._block[10] = this._block.pop();

        copyGoal = [3, 2];
        curr = getCurrentPos(twoLine[twoLine.length - 1], this._arr);
        wayForN = getWay(this._arr, twoLine[twoLine.length - 1], this._arr[copyGoal[0]][copyGoal[1]], this._block);
        this._block.push({ nArr: curr[0], nIndex: curr[1] });
        forDOM.push(...walk(wayForN, this._arr, this._block));
        this._block.pop();
        this._block[10] = { nArr: 2, nIndex: 1 };
        this._block[11] = { nArr: 3, nIndex: 2 };
      }
    } else {
      curr = getCurrentPos(i, this._arr);
      wayForN = getWay(this._arr, i, this._arr[copyGoal[0]][copyGoal[1]], this._block);
      this._block.push({ nArr: curr[0], nIndex: curr[1] });
      forDOM.push(...walk(wayForN, this._arr, this._block));

      copyGoal = [3, 2];
      this._block[10] = this._block.pop();
      curr = getCurrentPos(twoLine[twoLine.length - 2], this._arr);
      wayForN = getWay(this._arr, twoLine[twoLine.length - 2], this._arr[copyGoal[0]][copyGoal[1]], this._block);
      forDOM.push(...walk(wayForN, this._arr, this._block));

      copyGoal = [2, 1];
      curr = getCurrentPos(i, this._arr);
      wayForN = getWay(this._arr, i, this._arr[copyGoal[0]][copyGoal[1]], this._block);
      this._block.push({ nArr: curr[0], nIndex: curr[1] });
      forDOM.push(...walk(wayForN, this._arr, this._block));

      copyGoal = [3, 1];
      curr = getCurrentPos(twoLine[twoLine.length - 2], this._arr);
      wayForN = getWay(this._arr, twoLine[twoLine.length - 2], this._arr[copyGoal[0]][copyGoal[1]], this._block);
      this._block.push({ nArr: curr[0], nIndex: curr[1] });
      forDOM.push(...walk(wayForN, this._arr, this._block));
      this._block[10] = this._block.pop();

      copyGoal = [3, 2];
      curr = getCurrentPos(twoLine[twoLine.length - 1], this._arr);
      wayForN = getWay(this._arr, twoLine[twoLine.length - 1], this._arr[copyGoal[0]][copyGoal[1]], this._block);
      this._block.push({ nArr: curr[0], nIndex: curr[1] });
      forDOM.push(...walk(wayForN, this._arr, this._block));
      this._block.pop();
      this._block[10] = { nArr: 2, nIndex: 1 };
      this._block[11] = { nArr: 3, nIndex: 2 };
    }
  } else {
    copyGoal = [3, 2];
    curr = getCurrentPos(twoLine[twoLine.length - 2], this._arr);
    wayForN = getWay(this._arr, twoLine[twoLine.length - 2], this._arr[copyGoal[0]][copyGoal[1]], this._block);
    this._block.push({ nArr: curr[0], nIndex: curr[1] });
    forDOM.push(...walk(wayForN, this._arr, this._block));
    this._block[10] = this._block.pop();

    copyGoal = [2, 1];
    curr = getCurrentPos(i, this._arr);
    wayForN = getWay(this._arr, i, this._arr[copyGoal[0]][copyGoal[1]], this._block);
    this._block.push({ nArr: curr[0], nIndex: curr[1] });
    forDOM.push(...walk(wayForN, this._arr, this._block));

    copyGoal = [3, 1];
    curr = getCurrentPos(twoLine[twoLine.length - 2], this._arr);
    wayForN = getWay(this._arr, twoLine[twoLine.length - 2], this._arr[copyGoal[0]][copyGoal[1]], this._block);
    this._block.push({ nArr: curr[0], nIndex: curr[1] });
    forDOM.push(...walk(wayForN, this._arr, this._block));
    this._block[10] = this._block.pop();

    copyGoal = [3, 2];
    curr = getCurrentPos(twoLine[twoLine.length - 1], this._arr);
    wayForN = getWay(this._arr, twoLine[twoLine.length - 1], this._arr[copyGoal[0]][copyGoal[1]], this._block);
    this._block.push({ nArr: curr[0], nIndex: curr[1] });
    forDOM.push(...walk(wayForN, this._arr, this._block));
    this._block.pop();
    this._block[10] = { nArr: 2, nIndex: 1 };
    this._block[11] = { nArr: 3, nIndex: 2 };
  }
  copyGoal = [2, 2];
  this._block[10] = this._block.pop();
  curr = getCurrentPos(i, this._arr);
  wayForN = getWay(this._arr, i, this._arr[copyGoal[0]][copyGoal[1]], this._block);
  this._block.push({ nArr: curr[0], nIndex: curr[1] });
  forDOM.push(...walk(wayForN, this._arr, this._block));

  copyGoal = [2, 1];
  curr = getCurrentPos(twoLine[twoLine.length - 2], this._arr);
  wayForN = getWay(this._arr, twoLine[twoLine.length - 2], this._arr[copyGoal[0]][copyGoal[1]], this._block);
  this._block.push({ nArr: curr[0], nIndex: curr[1] });
  forDOM.push(...walk(wayForN, this._arr, this._block));

  copyGoal = [3, 1];
  this._block[10] = this._block.pop();
  curr = getCurrentPos(twoLine[twoLine.length - 1], this._arr);
  wayForN = getWay(this._arr, twoLine[twoLine.length - 1], this._arr[copyGoal[0]][copyGoal[1]], this._block);
  this._block.push({ nArr: curr[0], nIndex: curr[1] });
  forDOM.push(...walk(wayForN, this._arr, this._block));

  copyGoal = [2, 3];
  this._block[10] = this._block.pop();
  curr = getCurrentPos(i, this._arr);
  wayForN = getWay(this._arr, i, this._arr[copyGoal[0]][copyGoal[1]], this._block);
  this._block.push({ nArr: curr[0], nIndex: curr[1] });
  forDOM.push(...walk(wayForN, this._arr, this._block));

  copyGoal = [2, 2];
  this._block[11] = this._block.pop();
  curr = getCurrentPos(twoLine[twoLine.length - 2], this._arr);
  wayForN = getWay(this._arr, twoLine[twoLine.length - 2], this._arr[copyGoal[0]][copyGoal[1]], this._block);
  this._block.push({ nArr: curr[0], nIndex: curr[1] });
  forDOM.push(...walk(wayForN, this._arr, this._block));

  copyGoal = [2, 1];
  this._block[10] = this._block.pop();
  curr = getCurrentPos(twoLine[twoLine.length - 1], this._arr);
  wayForN = getWay(this._arr, twoLine[twoLine.length - 1], this._arr[copyGoal[0]][copyGoal[1]], this._block);
  this._block.push({ nArr: curr[0], nIndex: curr[1] });
  forDOM.push(...walk(wayForN, this._arr, this._block));

  curr = getCurrentPos(15, this._arr);
  let res;
  if (curr[1] === 3) {
    copyGoal = [3, 1];
    wayForN = getWay(this._arr, 14, this._arr[copyGoal[0]][copyGoal[1]], this._block);
    forDOM.push(...walk(wayForN, this._arr, this._block));

    copyGoal = [3, 2];
    wayForN = getWay(this._arr, 15, this._arr[copyGoal[0]][copyGoal[1]], this._block);
    forDOM.push(...walk(wayForN, this._arr, this._block));
  } else {
    this._res = false;
  }

  return forDOM;
}

export { getLastLine };