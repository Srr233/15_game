function rotateLeftUpWays (chosenPos) {
  const arr = chosenPos[0];
  const point = chosenPos[1];
  return [
    { n: [arr - 1, point], to: [arr - 1, point - 1] },

    { n: [arr, point], to: [arr - 1, point] },

    { n: [arr, point - 1], to: [arr, point] },

    { n: [arr - 1, point - 1], to: [arr, point - 1] },

    { n: [arr - 1, point], to: [arr - 1, point - 1] },

    { n: [arr, point], to: [arr - 1, point] }
  ];
}

function rotateLeftBottomWays (chosenPos) {
  const arr = chosenPos[0];
  const point = chosenPos[1];
  return [
    { n: [arr, point - 1], to: [arr + 1, point - 1] },

    { n: [arr, point], to: [arr, point - 1] },

    { n: [arr + 1, point], to: [arr, point] },

    { n: [arr + 1, point - 1], to: [arr + 1, point] },

    { n: [arr, point - 1], to: [arr + 1, point - 1] },

    { n: [arr, point], to: [arr, point - 1] }
  ];
}

function rotateRightUpWays(chosenPos) {
  const arr = chosenPos[0];
  const point = chosenPos[1];
  return [
    { n: [arr, point + 1], to: [arr - 1, point + 1] },

    { n: [arr, point], to: [arr, point + 1] },

    { n: [arr - 1, point], to: [arr, point] },

    { n: [arr - 1, point + 1], to: [arr - 1, point] },

    { n: [arr, point + 1], to: [arr - 1, point + 1] },

    { n: [arr, point], to: [arr, point + 1] }
  ];
}

function rotateRightBottomWays(chosenPos) {
  const arr = chosenPos[0];
  const point = chosenPos[1];
  return [
    { n: [arr, point + 1], to: [arr + 1, point + 1] },

    { n: [arr, point], to: [arr, point + 1] },

    { n: [arr + 1, point], to: [arr, point] },

    { n: [arr + 1, point + 1], to: [arr + 1, point] },

    { n: [arr, point + 1], to: [arr + 1, point + 1] },

    { n: [arr, point], to: [arr, point + 1] }
  ];
}
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
export { rotateFromDown, rotateFromUp, rotateFromMiddle }