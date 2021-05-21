import { getWay } from "../handlers/auto-solver/getWay.js";
import { move } from "../handlers/auto-solver/move.js";
import { getCurrentPos } from "../handlers/checkMove.js";
import { moveDOMCard } from "../handlers/moveDOMCard.js";
import { walk } from "../handlers/walk.js";

export default function autoSolving (arr) {
  return () => {
    const block = [];
    const forDOM = [];
    let goal = [0, 0];
    for (let i = 1; i < 5; i++) {
      let wayForN;
      let curr;
      if (i % 4 === 0) {
        goal[1] -= 1;
        goal[0] += 1;
        wayForN = getWay(arr, i - 1, arr[goal[0] + 1][goal[1]], block);
        forDOM.push(...walk(wayForN, arr, block));

        goal[0] -= 1;
        wayForN = getWay(arr, i, arr[goal[0] + 1][goal[1]], block);
        forDOM.push(...walk(wayForN, arr, block));

        wayForN = getWay(arr, i, arr[goal[0]][goal[1]], block);
        curr = getCurrentPos(i - 1, arr);
        block.push({ nArr: curr[0], nIndex: curr[1] });
        forDOM.push(...walk(wayForN, arr, block));

        goal[0] += 1;
        block[2] = block.pop();
        wayForN = getWay(arr, i - 1, arr[goal[0]][goal[1]], block);
        curr = getCurrentPos(i - 1, arr);
        block.push({ nArr: curr[0], nIndex: curr[1] });
        forDOM.push(...walk(wayForN, arr, block));
        goal[0] -= 1;
        goal[1] += 1;

        block[2] = block.pop();
        wayForN = getWay(arr, i, arr[goal[0]][goal[1]], block);
        curr = getCurrentPos(i, arr);
        block.push({ nArr: curr[0], nIndex: curr[1] });
        forDOM.push(...walk(wayForN, arr, block));

        block[2] = block.pop();
        wayForN = getWay(arr, i - 1, arr[goal[0]][goal[1] - 1], block);
        curr = getCurrentPos(i - 1, arr);
        block.push({ nArr: curr[0], nIndex: curr[1] });
        forDOM.push(...walk(wayForN, arr, block));
      } else {
        forDOM.push(...move(arr, i, goal, block, true));
        goal[1] += 1;
      }
    }
    let time = 0;
    for (const way of forDOM) {
      time += 1;
      setTimeout(() => {
        moveDOMCard(way[0].n, way[0].to);
        moveDOMCard(way[1].n, way[1].to);
      }, time * 200);
    }
  }
}