import { getListOfWays } from '../handlers/getListOfWays.js';
import { checkMove, getCurrentPos } from '../handlers/checkMove.js';
import { walk } from '../handlers/walk.js';

export default function transfer (arr) {
  return (from, to) => {
    const way = checkMove(from, to, arr);
    if (way.toPos && way.spacePos) {
      const listOfWays = getListOfWays(way, getCurrentPos(from, arr), arr);
      walk(listOfWays, arr);
    }
  }
}