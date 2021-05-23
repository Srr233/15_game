import { getCurrentPos } from "../checkMove.js";
import { walk } from "../walk.js";
import { getWay } from "./getWay.js";

function getLastLine(arr, goal, block, twoLine) {
  console.dir(arr);
  const forDOM = [];
  let copyGoal;
  let copyBlock;
  const i = twoLine[0];

  let wayForN;
  let curr;
  copyGoal = goal.slice();

  curr = getCurrentPos(i, arr);
  wayForN = getWay(arr, i, arr[copyGoal[0]][copyGoal[1]], block);
  block.push({ nArr: curr[0], nIndex: curr[1] });
  forDOM.push(...walk(wayForN, arr, block));

  curr = getCurrentPos(twoLine[twoLine.length - 2], arr);
  let myNull = getCurrentPos(0, arr);
  if (curr[0] === 2) {
    if (curr[1] === 1) {
      copyGoal = [2, 3];
      wayForN = getWay(arr, twoLine[twoLine.length - 2], arr[copyGoal[0]][copyGoal[1]], block);
      forDOM.push(...walk(wayForN, arr, block));
      
      copyGoal = [3, 1];
      curr = getCurrentPos(i, arr);
      wayForN = getWay(arr, i, arr[copyGoal[0]][copyGoal[1]], block);
      block.push({ nArr: curr[0], nIndex: curr[1] });
      forDOM.push(...walk(wayForN, arr, block));
      block[10] = block.pop();

      copyGoal = [3, 2];
      curr = getCurrentPos(twoLine[twoLine.length - 2], arr);
      wayForN = getWay(arr, twoLine[twoLine.length - 2], arr[copyGoal[0]][copyGoal[1]], block);
      block.push({ nArr: curr[0], nIndex: curr[1] });
      forDOM.push(...walk(wayForN, arr, block));
      block[10] = block.pop();

      copyGoal = [2, 1];
      curr = getCurrentPos(i, arr);
      wayForN = getWay(arr, i, arr[copyGoal[0]][copyGoal[1]], block);
      block[10] = block.pop();
      forDOM.push(...walk(wayForN, arr, block));
      block[10] = block.pop();

      copyGoal = [3, 1];
      curr = getCurrentPos(twoLine[twoLine.length - 2], arr);
      wayForN = getWay(arr, twoLine[twoLine.length - 2], arr[copyGoal[0]][copyGoal[1]], block);
      block.push({ nArr: curr[0], nIndex: curr[1] });
      forDOM.push(...walk(wayForN, arr, block));

      copyGoal = [3, 2];
      curr = getCurrentPos(twoLine[twoLine.length - 1], arr);
      wayForN = getWay(arr, twoLine[twoLine.length - 1], arr[copyGoal[0]][copyGoal[1]], block);
      block.push({ nArr: curr[0], nIndex: curr[1] });
      forDOM.push(...walk(wayForN, arr, block));
      block.pop();
      block[10] = { nArr: 2, nIndex: 1 };
      block[11] = { nArr: 3, nIndex: 2 };
    } else if (curr[1] === 2) {
      if (myNull[0] === 2) {
        if (myNull[1] === 1) {
          copyGoal = [2, 1];
          wayForN = getWay(arr, i, arr[copyGoal[0]][copyGoal[1]], block);
          block.push({ nArr: curr[0], nIndex: curr[1] });
          forDOM.push(...walk(wayForN, arr, block));

          copyGoal = [3, 2];
          curr = getCurrentPos(twoLine[twoLine.length - 2], arr);
          wayForN = getWay(arr, twoLine[twoLine.length - 2], arr[copyGoal[0]][copyGoal[1]], block);
          block.push({ nArr: curr[0], nIndex: curr[1] });
          forDOM.push(...walk(wayForN, arr, block));

          copyGoal = [3, 3];
          curr = getCurrentPos(twoLine[twoLine.length - 2], arr);
          wayForN = getWay(arr, twoLine[twoLine.length - 2], arr[copyGoal[0]][copyGoal[1]], block);
          block.push({ nArr: curr[0], nIndex: curr[1] });
          forDOM.push(...walk(wayForN, arr, block));

          copyGoal = [2, 2];
          curr = getCurrentPos(i, arr);
          wayForN = getWay(arr, i, arr[copyGoal[0]][copyGoal[1]], block);
          block.push({ nArr: curr[0], nIndex: curr[1] });
          forDOM.push(...walk(wayForN, arr, block));

          copyGoal = [3, 2];
          curr = getCurrentPos(i, arr);
          block[12] = block.pop();
          block[12] = block.pop();
          block[10] = block.pop();
          wayForN = getWay(arr, i, arr[copyGoal[0]][copyGoal[1]], block);
          forDOM.push(...walk(wayForN, arr, block));

          copyGoal = [3, 1];
          curr = getCurrentPos(i, arr);
          wayForN = getWay(arr, i, arr[copyGoal[0]][copyGoal[1]], block);
          block.push({ nArr: curr[0], nIndex: curr[1] });
          forDOM.push(...walk(wayForN, arr, block));

          copyGoal = [3, 2];
          block[11] = block.pop();
          wayForN = getWay(arr, twoLine[twoLine.length - 2], arr[copyGoal[0]][copyGoal[1]], block);
          forDOM.push(...walk(wayForN, arr, block));

          copyGoal = [2, 1];
          wayForN = getWay(arr, i, arr[copyGoal[0]][copyGoal[1]], block);
          forDOM.push(...walk(wayForN, arr, block));

          copyGoal = [3, 1];
          wayForN = getWay(arr, twoLine[twoLine.length - 2], arr[copyGoal[0]][copyGoal[1]], block);
          forDOM.push(...walk(wayForN, arr, block));

          copyGoal = [3, 2];
          block[10] = {nArr: 2, nIndex: 1};
          wayForN = getWay(arr, twoLine[twoLine.length - 1], arr[copyGoal[0]][copyGoal[1]], block);
          forDOM.push(...walk(wayForN, arr, block));
        } else {
          
        }
      } else {
        curr = getCurrentPos(i, arr);
        wayForN = getWay(arr, i, arr[copyGoal[0]][copyGoal[1]], block);
        block.push({ nArr: curr[0], nIndex: curr[1] });
        forDOM.push(...walk(wayForN, arr, block));

        copyGoal = [3, 2];
        block[10] = block.pop();
        curr = getCurrentPos(twoLine[twoLine.length - 2], arr);
        wayForN = getWay(arr, twoLine[twoLine.length - 2], arr[copyGoal[0]][copyGoal[1]], block);
        forDOM.push(...walk(wayForN, arr, block));

        copyGoal = [2, 1];
        curr = getCurrentPos(i, arr);
        wayForN = getWay(arr, i, arr[copyGoal[0]][copyGoal[1]], block);
        block.push({ nArr: curr[0], nIndex: curr[1] });
        forDOM.push(...walk(wayForN, arr, block));

        copyGoal = [3, 1];
        curr = getCurrentPos(twoLine[twoLine.length - 2], arr);
        wayForN = getWay(arr, twoLine[twoLine.length - 2], arr[copyGoal[0]][copyGoal[1]], block);
        block.push({ nArr: curr[0], nIndex: curr[1] });
        forDOM.push(...walk(wayForN, arr, block));
        block[10] = block.pop();

        copyGoal = [3, 2];
        curr = getCurrentPos(twoLine[twoLine.length - 1], arr);
        wayForN = getWay(arr, twoLine[twoLine.length - 1], arr[copyGoal[0]][copyGoal[1]], block);
        block.push({ nArr: curr[0], nIndex: curr[1] });
        forDOM.push(...walk(wayForN, arr, block));
        block.pop();
        block[10] = { nArr: 2, nIndex: 1 };
        block[11] = { nArr: 3, nIndex: 2 };
      }
    } else {
      curr = getCurrentPos(i, arr);
      wayForN = getWay(arr, i, arr[copyGoal[0]][copyGoal[1]], block);
      block.push({ nArr: curr[0], nIndex: curr[1] });
      forDOM.push(...walk(wayForN, arr, block));

      copyGoal = [3, 2];
      block[10] = block.pop();
      curr = getCurrentPos(twoLine[twoLine.length - 2], arr);
      wayForN = getWay(arr, twoLine[twoLine.length - 2], arr[copyGoal[0]][copyGoal[1]], block);
      forDOM.push(...walk(wayForN, arr, block));

      copyGoal = [2, 1];
      curr = getCurrentPos(i, arr);
      wayForN = getWay(arr, i, arr[copyGoal[0]][copyGoal[1]], block);
      block.push({ nArr: curr[0], nIndex: curr[1] });
      forDOM.push(...walk(wayForN, arr, block));

      copyGoal = [3, 1];
      curr = getCurrentPos(twoLine[twoLine.length - 2], arr);
      wayForN = getWay(arr, twoLine[twoLine.length - 2], arr[copyGoal[0]][copyGoal[1]], block);
      block.push({ nArr: curr[0], nIndex: curr[1] });
      forDOM.push(...walk(wayForN, arr, block));
      block[10] = block.pop();

      copyGoal = [3, 2];
      curr = getCurrentPos(twoLine[twoLine.length - 1], arr);
      wayForN = getWay(arr, twoLine[twoLine.length - 1], arr[copyGoal[0]][copyGoal[1]], block);
      block.push({ nArr: curr[0], nIndex: curr[1] });
      forDOM.push(...walk(wayForN, arr, block));
      block.pop();
      block[10] = { nArr: 2, nIndex: 1 };
      block[11] = { nArr: 3, nIndex: 2 };
    }
  } else {
    copyGoal = [3, 2];
    curr = getCurrentPos(twoLine[twoLine.length - 2], arr);
    wayForN = getWay(arr, twoLine[twoLine.length - 2], arr[copyGoal[0]][copyGoal[1]], block);
    block.push({ nArr: curr[0], nIndex: curr[1] });
    forDOM.push(...walk(wayForN, arr, block));
    block[10] = block.pop();

    copyGoal = [2, 1];
    curr = getCurrentPos(i, arr);
    wayForN = getWay(arr, i, arr[copyGoal[0]][copyGoal[1]], block);
    block.push({ nArr: curr[0], nIndex: curr[1] });
    forDOM.push(...walk(wayForN, arr, block));

    copyGoal = [3, 1];
    curr = getCurrentPos(twoLine[twoLine.length - 2], arr);
    wayForN = getWay(arr, twoLine[twoLine.length - 2], arr[copyGoal[0]][copyGoal[1]], block);
    block.push({ nArr: curr[0], nIndex: curr[1] });
    forDOM.push(...walk(wayForN, arr, block));
    block[10] = block.pop();

    copyGoal = [3, 2];
    curr = getCurrentPos(twoLine[twoLine.length - 1], arr);
    wayForN = getWay(arr, twoLine[twoLine.length - 1], arr[copyGoal[0]][copyGoal[1]], block);
    block.push({ nArr: curr[0], nIndex: curr[1] });
    forDOM.push(...walk(wayForN, arr, block));
    block.pop();
    block[10] = { nArr: 2, nIndex: 1 };
    block[11] = { nArr: 3, nIndex: 2 };
  }
  copyGoal = [2, 2];
  block[10] = block.pop();
  curr = getCurrentPos(i, arr);
  wayForN = getWay(arr, i, arr[copyGoal[0]][copyGoal[1]], block);
  block.push({ nArr: curr[0], nIndex: curr[1] });
  forDOM.push(...walk(wayForN, arr, block));

  copyGoal = [2, 1];
  curr = getCurrentPos(twoLine[twoLine.length - 2], arr);
  wayForN = getWay(arr, twoLine[twoLine.length - 2], arr[copyGoal[0]][copyGoal[1]], block);
  block.push({ nArr: curr[0], nIndex: curr[1] });
  forDOM.push(...walk(wayForN, arr, block));

  copyGoal = [3, 1];
  block[10] = block.pop();
  curr = getCurrentPos(twoLine[twoLine.length - 1], arr);
  wayForN = getWay(arr, twoLine[twoLine.length - 1], arr[copyGoal[0]][copyGoal[1]], block);
  block.push({ nArr: curr[0], nIndex: curr[1] });
  forDOM.push(...walk(wayForN, arr, block));

  copyGoal = [2, 3];
  block[10] = block.pop();
  curr = getCurrentPos(i, arr);
  wayForN = getWay(arr, i, arr[copyGoal[0]][copyGoal[1]], block);
  block.push({ nArr: curr[0], nIndex: curr[1] });
  forDOM.push(...walk(wayForN, arr, block));

  copyGoal = [2, 2];
  block[11] = block.pop();
  curr = getCurrentPos(twoLine[twoLine.length - 2], arr);
  wayForN = getWay(arr, twoLine[twoLine.length - 2], arr[copyGoal[0]][copyGoal[1]], block);
  block.push({ nArr: curr[0], nIndex: curr[1] });
  forDOM.push(...walk(wayForN, arr, block));

  copyGoal = [2, 1];
  block[10] = block.pop();
  curr = getCurrentPos(twoLine[twoLine.length - 1], arr);
  wayForN = getWay(arr, twoLine[twoLine.length - 1], arr[copyGoal[0]][copyGoal[1]], block);
  block.push({ nArr: curr[0], nIndex: curr[1] });
  forDOM.push(...walk(wayForN, arr, block));

  curr = getCurrentPos(15, arr);
  let res;
  if (curr[1] === 3) {
    copyGoal = [3, 1];
    wayForN = getWay(arr, 14, arr[copyGoal[0]][copyGoal[1]], block);
    forDOM.push(...walk(wayForN, arr, block));

    copyGoal = [3, 2];
    wayForN = getWay(arr, 15, arr[copyGoal[0]][copyGoal[1]], block);
    forDOM.push(...walk(wayForN, arr, block));
    res = true;
  } else {
    res = false;
  }

  return [forDOM, res];
}

function solveLastLine(arr, goal, block) {
  return getLastLine(arr, goal, block, [12, 11, 10]);
}
export { solveLastLine };