import { getCurrentPos } from "../checkMove.js";
import { walk } from "../walk.js";
import { getWay } from "./getWay.js";

function getAnotherLine(arr, goal, block, twoLine) {
  const forDOM = [];
  let copyGoal;
  let copyBlock;
  const i = twoLine[0];

  let wayForN;
  let curr;
  copyGoal = goal.slice();
  copyGoal[1] = 3;

  curr = getCurrentPos(i, arr);
  wayForN = getWay(arr, i, arr[copyGoal[0]][copyGoal[1]], block);
  block.push({ nArr: curr[0], nIndex: curr[1] });
  forDOM.push(...walk(wayForN, arr, block));

  copyGoal[1] = 1;
  curr = getCurrentPos(twoLine[twoLine.length - 2], arr);
  wayForN = getWay(arr, twoLine[twoLine.length - 2], arr[copyGoal[0]][copyGoal[1]], block);
  block.push({ nArr: curr[0], nIndex: curr[1] });
  forDOM.push(...walk(wayForN, arr, block));

  try {
    copyGoal[0] += 1;
    curr = getCurrentPos(twoLine[twoLine.length - 1], arr);
    wayForN = getWay(arr, twoLine[twoLine.length - 1], arr[copyGoal[0]][copyGoal[1]], block);
    block.push({ nArr: curr[0], nIndex: curr[1] });
    forDOM.push(...walk(wayForN, arr, block));
  } catch (e) {
    copyGoal = [1, 1];

    if (arr[1][1] !== 7) {
      block.pop();
      block.pop();
      curr = getCurrentPos(twoLine[twoLine.length - 2], arr);
      wayForN = getWay(arr, twoLine[twoLine.length - 2], arr[copyGoal[0]][copyGoal[1]], block);
      block.push({ nArr: curr[0], nIndex: curr[1] });
      forDOM.push(...walk(wayForN, arr, block));
    } else {
      block.pop();
      block.pop();
      copyGoal = [3, 1];
      curr = getCurrentPos(twoLine[twoLine.length - 2], arr);
      wayForN = getWay(arr, twoLine[twoLine.length - 2], arr[copyGoal[0]][copyGoal[1]], block);
      block.push({ nArr: curr[0], nIndex: curr[1] });
      forDOM.push(...walk(wayForN, arr, block));

      copyGoal = [2, 2];
      curr = getCurrentPos(twoLine[twoLine.length - 1], arr);
      block[8] = block.pop();
      wayForN = getWay(arr, twoLine[twoLine.length - 1], arr[copyGoal[0]][copyGoal[1]], block);
      block.push({ nArr: curr[0], nIndex: curr[1] });
      forDOM.push(...walk(wayForN, arr, block));

      copyGoal = [2, 1];
      curr = getCurrentPos(twoLine[twoLine.length - 2], arr);
      block[8] = block.pop();
      wayForN = getWay(arr, twoLine[twoLine.length - 2], arr[copyGoal[0]][copyGoal[1]], block);
      block.push({ nArr: curr[0], nIndex: curr[1] });
      forDOM.push(...walk(wayForN, arr, block));

      copyGoal = [3, 2];
      curr = getCurrentPos(twoLine[twoLine.length - 1], arr);
      block[8] = block.pop();
      wayForN = getWay(arr, twoLine[twoLine.length - 1], arr[copyGoal[0]][copyGoal[1]], block);
      block.push({ nArr: curr[0], nIndex: curr[1] });
      forDOM.push(...walk(wayForN, arr, block));

      copyGoal = [1, 1];
      curr = getCurrentPos(twoLine[twoLine.length - 2], arr);
      block[8] = block.pop();
      wayForN = getWay(arr, twoLine[twoLine.length - 2], arr[copyGoal[0]][copyGoal[1]], block);
      block.push({ nArr: curr[0], nIndex: curr[1] });
      forDOM.push(...walk(wayForN, arr, block));

      copyGoal = [2, 1];
      curr = getCurrentPos(twoLine[twoLine.length - 1], arr);
      block[8] = block.pop();
      wayForN = getWay(arr, twoLine[twoLine.length - 1], arr[copyGoal[0]][copyGoal[1]], block);
      block.push({ nArr: curr[0], nIndex: curr[1] });
      forDOM.push(...walk(wayForN, arr, block));
    }
  }

  copyGoal[1] += 1;
  copyGoal[0] -= 1;
  curr = getCurrentPos(twoLine[twoLine.length - 2], arr);
  block[7] = block.pop();
  wayForN = getWay(arr, twoLine[twoLine.length - 2], arr[copyGoal[0]][copyGoal[1]], block);
  block.push({ nArr: curr[0], nIndex: curr[1] });
  forDOM.push(...walk(wayForN, arr, block));

  copyGoal[0] = 1;
  copyGoal[1] = 1;
  curr = getCurrentPos(twoLine[twoLine.length - 1], arr);
  block[8] = block.pop();
  wayForN = getWay(arr, twoLine[twoLine.length - 1], arr[copyGoal[0]][copyGoal[1]], block);
  block.push({ nArr: curr[0], nIndex: curr[1] });
  forDOM.push(...walk(wayForN, arr, block));

  return forDOM;
}

function solveAnotherLine(arr, goal, block) {
  const result = [];
  result.push(...getAnotherLine(arr, goal, block, [8, 7, 6]));
  // result.push(...getAnotherLine(arr, goal, block, [6, 7, 8]));
  // result.push(...getAnotherLine(arr, goal, block, [6, 7, 8]));
  return result;
}
export { solveAnotherLine };