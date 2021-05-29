import { getCurrentPos } from "../checkMove.js";
import { walk } from "../walk.js";
import { getWay } from "./getWay.js";
import { move } from "./move.js";

function getFirstLine() {
  let mySwitch = true;
  let copyGoal;
  let copyBlock;
  const twoLine = [1, 2, 3, 4, 5, 9, 13];
  const forDOM = [];
  for (const i of twoLine) {
    let wayForN;
    let curr;
    if (i % 4 === 0) {
      copyGoal = this._goal.slice();
      copyGoal[1] -= 1;
      copyGoal[0] += 1;
      wayForN = getWay(this._arr, i - 1, this._arr[copyGoal[0] + 1][copyGoal[1]], this._block);
      forDOM.push(...walk(wayForN, this._arr, this._block));

      copyGoal[0] -= 1;
      wayForN = getWay(this._arr, i, this._arr[copyGoal[0] + 1][copyGoal[1]], this._block);
      forDOM.push(...walk(wayForN, this._arr, this._block));

      wayForN = getWay(this._arr, i, this._arr[copyGoal[0]][copyGoal[1]], this._block);
      curr = getCurrentPos(i - 1, this._arr);
      this._block.push({ nArr: curr[0], nIndex: curr[1] });
      forDOM.push(...walk(wayForN, this._arr, this._block));

      copyGoal[0] += 1;
      this._block[2] = this._block.pop();
      wayForN = getWay(this._arr, i - 1, this._arr[copyGoal[0]][copyGoal[1]], this._block);
      curr = getCurrentPos(i - 1, this._arr);
      this._block.push({ nArr: curr[0], nIndex: curr[1] });
      forDOM.push(...walk(wayForN, this._arr, this._block));
      copyGoal[0] -= 1;
      copyGoal[1] += 1;

      this._block[2] = this._block.pop();
      wayForN = getWay(this._arr, i, this._arr[copyGoal[0]][copyGoal[1]], this._block);
      curr = getCurrentPos(i, this._arr);
      this._block.push({ nArr: curr[0], nIndex: curr[1] });
      forDOM.push(...walk(wayForN, this._arr, this._block));

      this._block[2] = this._block.pop();
      wayForN = getWay(this._arr, i - 1, this._arr[copyGoal[0]][copyGoal[1] - 1], this._block);
      curr = getCurrentPos(i - 1, this._arr);
      this._block.push({ nArr: curr[0], nIndex: curr[1] });
      forDOM.push(...walk(wayForN, this._arr, this._block));
      this._goal[0] += 1;
      this._goal[1] = 0;
    } else if (i % 4 === 1 && i !== 1) {
      if (mySwitch) {
        mySwitch = false;
        copyGoal = this._goal.slice();

        copyGoal[0] += 2;
        curr = getCurrentPos(i, this._arr);
        wayForN = getWay(this._arr, i, this._arr[copyGoal[0]][copyGoal[1]], this._block);
        this._block.push({ nArr: curr[0], nIndex: curr[1] });
        forDOM.push(...walk(wayForN, this._arr, this._block));

        copyGoal[1] += 1;
        curr = getCurrentPos(twoLine[twoLine.length - 2], this._arr);
        wayForN = getWay(this._arr, twoLine[twoLine.length - 2], this._arr[copyGoal[0]][copyGoal[1]], this._block);
        this._block.push({ nArr: curr[0], nIndex: curr[1] });
        forDOM.push(...walk(wayForN, this._arr, this._block));

        copyGoal[1] += 1;
        curr = getCurrentPos(twoLine[twoLine.length - 1], this._arr);
        wayForN = getWay(this._arr, twoLine[twoLine.length - 1], this._arr[copyGoal[0]][copyGoal[1]], this._block);
        this._block.push({ nArr: curr[0], nIndex: curr[1] });
        forDOM.push(...walk(wayForN, this._arr, this._block));



        copyGoal[1] -= 2;
        copyGoal[0] -= 1;
        copyBlock = this._block.slice(4);
        this._block = [...this._block.slice(0, -3), copyBlock[1], copyBlock[2]];
        curr = getCurrentPos(i, this._arr);
        wayForN = getWay(this._arr, i, this._arr[copyGoal[0]][copyGoal[1]], this._block);
        this._block.push({ nArr: curr[0], nIndex: curr[1] });
        forDOM.push(...walk(wayForN, this._arr, this._block));

        copyGoal[0] += 1;
        copyBlock = this._block.slice(4);
        this._block = [...this._block.slice(0, -3), copyBlock[1], copyBlock[2]];
        curr = getCurrentPos(twoLine[twoLine.length - 2], this._arr);
        wayForN = getWay(this._arr, twoLine[twoLine.length - 2], this._arr[copyGoal[0]][copyGoal[1]], this._block);
        this._block.push({ nArr: curr[0], nIndex: curr[1] });
        forDOM.push(...walk(wayForN, this._arr, this._block));

        copyGoal[1] += 1;
        copyBlock = this._block.slice(4);
        this._block = [...this._block.slice(0, -3), copyBlock[1], copyBlock[2]];
        curr = getCurrentPos(twoLine[twoLine.length - 1], this._arr);
        wayForN = getWay(this._arr, twoLine[twoLine.length - 1], this._arr[copyGoal[0]][copyGoal[1]], this._block);
        this._block.push({ nArr: curr[0], nIndex: curr[1] });
        forDOM.push(...walk(wayForN, this._arr, this._block));



        copyGoal[1] -= 1;
        copyGoal[0] -= 2;
        copyBlock = this._block.slice(4);
        this._block = [...this._block.slice(0, -3), copyBlock[1], copyBlock[2]];
        curr = getCurrentPos(i, this._arr);
        wayForN = getWay(this._arr, i, this._arr[copyGoal[0]][copyGoal[1]], this._block);
        this._block.push({ nArr: curr[0], nIndex: curr[1] });
        forDOM.push(...walk(wayForN, this._arr, this._block));

        copyGoal[0] += 1;
        copyBlock = this._block.slice(4);
        this._block = [...this._block.slice(0, -3), copyBlock[1], copyBlock[2]];
        curr = getCurrentPos(twoLine[twoLine.length - 2], this._arr);
        wayForN = getWay(this._arr, twoLine[twoLine.length - 2], this._arr[copyGoal[0]][copyGoal[1]], this._block);
        this._block.push({ nArr: curr[0], nIndex: curr[1] });
        forDOM.push(...walk(wayForN, this._arr, this._block));

        copyGoal[0] += 1;
        copyBlock = this._block.slice(4);
        this._block = [...this._block.slice(0, -3), copyBlock[1], copyBlock[2]];
        curr = getCurrentPos(twoLine[twoLine.length - 1], this._arr);
        wayForN = getWay(this._arr, twoLine[twoLine.length - 1], this._arr[copyGoal[0]][copyGoal[1]], this._block);
        this._block.push({ nArr: curr[0], nIndex: curr[1] });
        forDOM.push(...walk(wayForN, this._arr, this._block));
      }
    } else {
      forDOM.push(...move(this._arr, i, this._goal, this._block, true));
      this._goal[1] += 1;
    }
  }
  return forDOM;
}

export { getFirstLine };