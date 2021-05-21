import { getCurrentPos } from "../checkMove.js";
import { walk } from "../walk.js";
import { getWay } from "./getWay.js";
import { move } from "./move.js";

function getFirstLine (arr, goal, block, twoLine) {
  const forDOM = [];
  let mySwitch = true;
  let copyGoal;
  let copyBlock;

  for (const i of twoLine) {
    let wayForN;
    let curr;
    if (i % 4 === 0) {
      copyGoal = goal.slice();
      copyGoal[1] -= 1;
      copyGoal[0] += 1;
      wayForN = getWay(arr, i - 1, arr[copyGoal[0] + 1][copyGoal[1]], block);
      forDOM.push(...walk(wayForN, arr, block));

      copyGoal[0] -= 1;
      wayForN = getWay(arr, i, arr[copyGoal[0] + 1][copyGoal[1]], block);
      forDOM.push(...walk(wayForN, arr, block));

      wayForN = getWay(arr, i, arr[copyGoal[0]][copyGoal[1]], block);
      curr = getCurrentPos(i - 1, arr);
      block.push({ nArr: curr[0], nIndex: curr[1] });
      forDOM.push(...walk(wayForN, arr, block));

      copyGoal[0] += 1;
      block[2] = block.pop();
      wayForN = getWay(arr, i - 1, arr[copyGoal[0]][copyGoal[1]], block);
      curr = getCurrentPos(i - 1, arr);
      block.push({ nArr: curr[0], nIndex: curr[1] });
      forDOM.push(...walk(wayForN, arr, block));
      copyGoal[0] -= 1;
      copyGoal[1] += 1;

      block[2] = block.pop();
      wayForN = getWay(arr, i, arr[copyGoal[0]][copyGoal[1]], block);
      curr = getCurrentPos(i, arr);
      block.push({ nArr: curr[0], nIndex: curr[1] });
      forDOM.push(...walk(wayForN, arr, block));

      block[2] = block.pop();
      wayForN = getWay(arr, i - 1, arr[copyGoal[0]][copyGoal[1] - 1], block);
      curr = getCurrentPos(i - 1, arr);
      block.push({ nArr: curr[0], nIndex: curr[1] });
      forDOM.push(...walk(wayForN, arr, block));
      goal[0] += 1;
      goal[1] = 0;
    } else if (i % 4 === 1 && i !== 1) {
      if (mySwitch) {
        mySwitch = false;
        copyGoal = goal.slice();

        copyGoal[0] += 2;
        curr = getCurrentPos(i, arr);
        wayForN = getWay(arr, i, arr[copyGoal[0]][copyGoal[1]], block);
        block.push({ nArr: curr[0], nIndex: curr[1] });
        forDOM.push(...walk(wayForN, arr, block));

        copyGoal[1] += 1;
        curr = getCurrentPos(twoLine[twoLine.length - 2], arr);
        wayForN = getWay(arr, twoLine[twoLine.length - 2], arr[copyGoal[0]][copyGoal[1]], block);
        block.push({ nArr: curr[0], nIndex: curr[1] });
        forDOM.push(...walk(wayForN, arr, block));

        copyGoal[1] += 1;
        curr = getCurrentPos(twoLine[twoLine.length - 1], arr);
        wayForN = getWay(arr, twoLine[twoLine.length - 1], arr[copyGoal[0]][copyGoal[1]], block);
        block.push({ nArr: curr[0], nIndex: curr[1] });
        forDOM.push(...walk(wayForN, arr, block));



        copyGoal[1] -= 2;
        copyGoal[0] -= 1;
        copyBlock = block.slice(4);
        block = [...block.slice(0, -3), copyBlock[1], copyBlock[2]];
        curr = getCurrentPos(i, arr);
        wayForN = getWay(arr, i, arr[copyGoal[0]][copyGoal[1]], block);
        block.push({ nArr: curr[0], nIndex: curr[1] });
        forDOM.push(...walk(wayForN, arr, block));

        copyGoal[0] += 1;
        copyBlock = block.slice(4);
        block = [...block.slice(0, -3), copyBlock[1], copyBlock[2]];
        curr = getCurrentPos(twoLine[twoLine.length - 2], arr);
        wayForN = getWay(arr, twoLine[twoLine.length - 2], arr[copyGoal[0]][copyGoal[1]], block);
        block.push({ nArr: curr[0], nIndex: curr[1] });
        forDOM.push(...walk(wayForN, arr, block));

        copyGoal[1] += 1;
        copyBlock = block.slice(4);
        block = [...block.slice(0, -3), copyBlock[1], copyBlock[2]];
        curr = getCurrentPos(twoLine[twoLine.length - 1], arr);
        wayForN = getWay(arr, twoLine[twoLine.length - 1], arr[copyGoal[0]][copyGoal[1]], block);
        block.push({ nArr: curr[0], nIndex: curr[1] });
        forDOM.push(...walk(wayForN, arr, block));



        copyGoal[1] -= 1;
        copyGoal[0] -= 2;
        copyBlock = block.slice(4);
        block = [...block.slice(0, -3), copyBlock[1], copyBlock[2]];
        curr = getCurrentPos(i, arr);
        wayForN = getWay(arr, i, arr[copyGoal[0]][copyGoal[1]], block);
        block.push({ nArr: curr[0], nIndex: curr[1] });
        forDOM.push(...walk(wayForN, arr, block));

        copyGoal[0] += 1;
        copyBlock = block.slice(4);
        block = [...block.slice(0, -3), copyBlock[1], copyBlock[2]];
        curr = getCurrentPos(twoLine[twoLine.length - 2], arr);
        wayForN = getWay(arr, twoLine[twoLine.length - 2], arr[copyGoal[0]][copyGoal[1]], block);
        block.push({ nArr: curr[0], nIndex: curr[1] });
        forDOM.push(...walk(wayForN, arr, block));

        copyGoal[0] += 1;
        copyBlock = block.slice(4);
        block = [...block.slice(0, -3), copyBlock[1], copyBlock[2]];
        curr = getCurrentPos(twoLine[twoLine.length - 1], arr);
        wayForN = getWay(arr, twoLine[twoLine.length - 1], arr[copyGoal[0]][copyGoal[1]], block);
        block.push({ nArr: curr[0], nIndex: curr[1] });
        forDOM.push(...walk(wayForN, arr, block));
      }
    } else {
      forDOM.push(...move(arr, i, goal, block, true));
      goal[1] += 1;
    }
  }
  return [forDOM, block];
}

function solveFirstLine (arr, goal, block) {
  return getFirstLine(arr, goal, block, [1, 2, 3, 4, 5, 9, 13]);
}
export { solveFirstLine };