import {
  rotateLeftBottomWays,
  rotateLeftUpWays,
  rotateRightUpWays,
  rotateRightBottomWays
} from '../../rotate.js'
import { moreWays } from '../../moreWays.js';

function ifChosenPos1Is0 (chosenPos, way) {
  let ways;
  ways = rotateRightUpWays(chosenPos);
  if (way.spacePos[0] === 3) {
    ways.push(...moreWays(chosenPos, 'right up', 'down'));
  } else {
    ways.push(...moreWays(chosenPos, 'right up', 'up'));
  }
  return ways;
}

function ifChosenPos1Is3 (chosenPos, way) {
  let ways;
  ways = rotateLeftUpWays(chosenPos);
  if (way.spacePos[0] === 3) {
    ways.push(...moreWays(chosenPos, 'left up', 'down'));
  } else {
    ways.push(...moreWays(chosenPos, 'left up', 'up'));
  }
  return ways;
}

function isChosenPos1Is1or2 (chosenPos, way) {
  let ways;
  const ifChosenPos0EqualSpace0 = () => {
    if (way.spacePos[1] < chosenPos[1] && way.spacePos[1] !== 0) {
      ways = rotateLeftUpWays(chosenPos);
      ways.push(...moreWays(chosenPos, 'left up', 'down'));
      return ways;
    } else if (way.spacePos[1] !== 0) {
      const newPos = chosenPos.slice();
      newPos[0] = chosenPos[0] - 1;
      ways = rotateLeftBottomWays(newPos);
      newPos[0] = chosenPos[0];
      newPos[1] = chosenPos[1] - 1;
      ways.push(...rotateRightUpWays(newPos));
      ways.push(...moreWays(newPos, 'right up', 'up'));
      newPos[0] = chosenPos[0] - 1;
      ways.push(...rotateRightBottomWays(newPos));
      return ways;
    } else {
      const newPos = chosenPos.slice();
      newPos[0] = chosenPos[0] - 1;
      ways = rotateLeftBottomWays(newPos);
      newPos[0] = chosenPos[0];
      newPos[1] = chosenPos[1] - 1;
      ways.push(...rotateRightUpWays(newPos));
      ways.push(...moreWays(newPos, 'right up', 'up'));
      newPos[0] = chosenPos[0] - 1;
      ways.push(...rotateRightBottomWays(newPos));
      return ways;
    }
  }
  const ifChosenPos0BiggerSpace0andNot0 = () => {
    if (chosenPos[1] < way.spacePos[1]) {
      ways = rotateRightUpWays(chosenPos);
      ways.push(...moreWays(chosenPos, 'right up', 'up'));
      return ways;
    } else if (way.spacePos[1] !== 0) {
      ways = rotateLeftUpWays(chosenPos);
      ways.push(...moreWays(chosenPos, 'left up', 'up'));
      return ways;
    }
  }
  const ifChosenPos0LessSpace0not0 = () => {
    const newPos = chosenPos.slice();
    ways = rotateLeftUpWays(newPos);
    newPos[0] = chosenPos[0];
    newPos[1] = chosenPos[1] - 1;
    ways.push(...rotateRightUpWays(newPos));
    ways.push(...moreWays(newPos, 'right up', 'up'));
    newPos[0] = chosenPos[0] - 1;
    ways.push(...rotateRightBottomWays(newPos));
    return ways;
  }
  const ifChosenPos1LessSpace1not0 = () => {
    ways = rotateRightUpWays(chosenPos);
    ways.push(...moreWays(chosenPos, 'right up', 'down'));
  }



  if (chosenPos[0] === way.spacePos[0]) {
    return ifChosenPos0EqualSpace0();
  } else {
    if (chosenPos[0] > way.spacePos[0] && way.spacePos[1] !== 0) {
      return ifChosenPos0BiggerSpace0andNot0();
    } else {
      if (chosenPos[1] < way.spacePos[1] && way.spacePos[1] !== 0) {
        return ifChosenPos1LessSpace1not0();
      } else if (way.spacePos[1] !== 0) {
        ways = rotateLeftUpWays(chosenPos);
        ways.push(...moreWays(chosenPos, 'left up', 'down'));
        return ways;
      } else {
        const newPos = chosenPos.slice();
        newPos[0] = chosenPos[0] - 1;
        ways = rotateLeftBottomWays(newPos);
        newPos[0] = chosenPos[0];
        newPos[1] = chosenPos[1] - 1;
        ways.push(...rotateRightUpWays(newPos));
        ways.push(...moreWays(newPos, 'right up', 'up'));
        newPos[0] = chosenPos[0] - 1;
        ways.push(...rotateRightBottomWays(newPos));
        return ways;
      }
      return ifChosenPos0LessSpace0not0();
    } 
  }
}
function ifPointUpBottomArr(chosenPos, way) {
  let ways;

  switch (chosenPos[1]) {
    case 0:
      return ifChosenPos1Is0(chosenPos, way);
    case 3:
      return ifChosenPos1Is3(chosenPos, way);
    default:
      return isChosenPos1Is1or2(chosenPos, way);
  }
}

export { ifPointUpBottomArr }