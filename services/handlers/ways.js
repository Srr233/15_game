import { goToPointUp } from './toPoint/toUpPoint/goToPointUp.js';
import { goToPointBottom } from './toPoint/toBottomPoint/goToPointBottom.js';
import { 
  rotateLeftBottomWays, 
  rotateLeftUpWays, 
  rotateRightUpWays, 
  rotateRightBottomWays 
} from './toPoint/rotate.js'

function rotateFromDown(chosenPos, spacePos) {
  switch (chosenPos[1]) {
    case 0:
      return rotateRightUpWays(chosenPos);
    case 3:
      return rotateLeftUpWays(chosenPos);
    default:
      switch(chosenPos[1]) {
        case 1:
          if (spacePos[1] > chosenPos[1]) {
            return rotateRightUpWays(chosenPos);
          } else {
            return rotateLeftUpWays(chosenPos);
          }
        case 2:
          if (spacePos[1] > chosenPos[1]) {
            return rotateRightUpWays(chosenPos);
          } else {
            return rotateLeftUpWays(chosenPos);
          }
      }
  }
}

function rotateFromUp (chosenPos, spacePos) {
  switch (chosenPos[1]) {
    case 0:
      return rotateRightBottomWays(chosenPos);
    case 3:
      return rotateLeftBottomWays(chosenPos);
    default:
      switch (chosenPos[1]) {
        case 1:
          if (chosenPos[1] > spacePos[1]) {
            return rotateLeftBottomWays(chosenPos);
          } else {
            return rotateRightBottomWays(chosenPos);
          }
        case 2:
          if (chosenPos[1] > spacePos[1]) {
            return rotateLeftBottomWays(chosenPos);
          } else {
            return rotateRightBottomWays(chosenPos);
          }
      }
  }
}

function rotateFromMiddle (chosenPos, spacePos) {
  const rotateFromCenter = () => {
    if (chosenPos[0] > spacePos[0]) {
      if (chosenPos[1] > spacePos[1]) {
        return rotateLeftUpWays(chosenPos);
      } else {
        return rotateRightUpWays(chosenPos);
      }
    } else {
      if (chosenPos[1] > spacePos[1]) {
        return rotateLeftBottomWays(chosenPos);
      } else {
        return rotateRightBottomWays(chosenPos);
      }
    }
  }
  const rotateFromSides = () => {
    switch(chosenPos[0]) {
      case 1:
        switch(chosenPos[1]) {
          case 0:
            if (chosenPos[0] > spacePos[0]) {
              return rotateRightUpWays(chosenPos);
            } else {
              return rotateRightBottomWays(chosenPos);
            }
          case 3:
            if (chosenPos[0] > spacePos[0]) {
              return rotateLeftUpWays(chosenPos);
            } else {
              return rotateLeftBottomWays(chosenPos);
            }
          default:
            return rotateFromCenter()
        }
      case 2:
        switch (chosenPos[1]) {
          case 0:
            if (chosenPos[0] > spacePos[0]) {
              return rotateRightUpWays(chosenPos);
            } else {
              return rotateRightBottomWays(chosenPos);
            }
          case 3:
            if (chosenPos[0] > spacePos[0]) {
              return rotateLeftUpWays(chosenPos);
            } else {
              return rotateLeftBottomWays(chosenPos);
            }
          default:
            return rotateFromCenter()
        }
    }
  }
  if (chosenPos[1] === 0 || chosenPos[1] === 3) {
    return rotateFromSides();
  } else {
    return rotateFromCenter();
  }
}



function goToPointLeft(chosenPos, way) {

}

function goToPointRight(chosenPos, way) {

}




export { 
  rotateFromDown, 
  rotateFromUp, 
  rotateFromMiddle, 
  goToPointUp, 
  goToPointBottom, 
  goToPointLeft, 
  goToPointRight 
}