import { getListOfWays } from '../handlers/getListOfWays.js';
import { getPositionOfSpaceAndGoal, getCurrentPos } from '../handlers/checkMove.js';
import { walk } from '../handlers/walk.js';
import { isCorrectWay } from '../handlers/isCorrectData/isCorrectData.js';
import { isDone } from '../handlers/isDone.js';

export default function transfer (arr) {
  const message = () => console.log('You can go only around the space');

  return (from, to) => {
    const positions = getPositionOfSpaceAndGoal(from, to, arr);
    const currentPos = getCurrentPos(from, arr);
    const isCorrect = isCorrectWay(positions, currentPos);
    if (isCorrect) {
      const listOfWays = getListOfWays(positions, currentPos, arr);
      //return the foo of message uses to stop continue the code
      if (!listOfWays) return message();
      if (listOfWays) walk(listOfWays, arr);
      if (isDone(arr)) console.log('The game is solved');
    } 
    if (!isCorrect) message();
  }
}