import { walk } from "../walk.js";
import { getWay } from "./getWay.js";
import { getCurrentPos } from "../checkMove.js";

function getStepNtoGoal(knuckle, nextGoal, pushBlock) {
  let wayForN;
  if (pushBlock) {
    wayForN = getWay(this._arr, pushBlock.n1, this._arr[nextGoal[0]][nextGoal[1]], this._block);
    const curr = getCurrentPos(pushBlock.n2, this._arr);
    this._block.push({ nArr: curr[0], nIndex: curr[1] });
    return walk(wayForN, this._arr, this._block);
  }
  wayForN = getWay(this._arr, knuckle, this._arr[nextGoal[0] + 1][nextGoal[1]], this._block);
  return walk(wayForN, this._arr, this._block);
}

export { getStepNtoGoal };