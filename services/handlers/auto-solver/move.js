import { getCurrentPos } from "../checkMove.js";
import { walk } from "../walk.js";
import { getWay } from "./getWay.js";

function move (arr, i, goal, block, canChangeBlock) {
  if (canChangeBlock) {
    const wayForN = getWay(arr, i, arr[goal[0]][goal[1]], block);
    const curr = getCurrentPos(i, arr);
    block.push({ nArr: curr[0], nIndex: curr[1] });
    return walk(wayForN, arr, block);
  } else {
    const wayForN = getWay(arr, i, arr[goal[0]][goal[1]], block);
    return walk(wayForN, arr, block);
  }
}

export { move };