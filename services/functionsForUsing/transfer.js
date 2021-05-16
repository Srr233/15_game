import { getListOfWays } from '../handlers/getListOfWays.js';
import { checkMove, getCurrentPos } from '../handlers/checkMove.js';
import { walk } from '../handlers/walk.js';
import { isCorrectWay } from '../handlers/isCorrectData.js';

export default function transfer (arr) {
  return (from, to) => {
    const way = checkMove(from, to, arr);
    if (isCorrectWay(way)) {
      const listOfWays = getListOfWays(way, getCurrentPos(from, arr), arr);
      walk(listOfWays, arr);
    } else {
      console.log('You can go only around the space');
    }
  }
}