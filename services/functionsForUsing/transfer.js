import { getListOfWays } from '../handlers/getListOfWays.js';
import { checkMove, getCurrentPos } from '../handlers/checkMove.js';
import { walk } from '../handlers/walk.js';
import { isCorrectWay } from '../handlers/isCorrectData.js';
import { isDone } from '../handlers/isDone.js';
import { getWay } from '../handlers/auto-solver/getWay.js';

export default function transfer (arr) {
  const message = () => console.log('You can go only around the space');

  return (from, to) => {
    //walk(getWay(arr, from, to), arr);
    const way = checkMove(from, to, arr);
    const currentPos = getCurrentPos(from, arr);
    if (isCorrectWay(way, currentPos)) {
      const listOfWays = getListOfWays(way, currentPos, arr);
      if (listOfWays) {
        walk(listOfWays, arr);
        if (isDone(arr)) console.log('The game is solved');
      } else {
        message();
      }
    } else {
      message();
    }
  }
}