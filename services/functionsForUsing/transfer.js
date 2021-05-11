import { checkMove, getCurrentPos } from '../checkMove.js';
import { getListOfWays } from '../handlers/getListOfWays.js';

export default function transfer (arr, gameDOM) {
  return (from, to) => {
    const way = checkMove(from, to, arr);
    if (way.toPos && way.spacePos) {
      const listOfWays = getListOfWays(way, getCurrentPos(from, arr));
    }
  }
}