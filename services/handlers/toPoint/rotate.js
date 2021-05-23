function rotateLeftUpWays(chosenPos) {
  const arr = chosenPos[0];
  const point = chosenPos[1];
  const result = [
    { n: [arr - 1, point], to: [arr - 1, point - 1] },

    { n: [arr, point], to: [arr - 1, point] },

    { n: [arr, point - 1], to: [arr, point] },

    { n: [arr - 1, point - 1], to: [arr, point - 1] },

    { n: [arr - 1, point], to: [arr - 1, point - 1] },

    { n: [arr, point], to: [arr - 1, point] }
  ];
  return result;
}

function rotateLeftBottomWays(chosenPos) {
  const arr = chosenPos[0];
  const point = chosenPos[1];
  const result = [
    { n: [arr, point - 1], to: [arr + 1, point - 1] },

    { n: [arr, point], to: [arr, point - 1] },

    { n: [arr + 1, point], to: [arr, point] },

    { n: [arr + 1, point - 1], to: [arr + 1, point] },

    { n: [arr, point - 1], to: [arr + 1, point - 1] },

    { n: [arr, point], to: [arr, point - 1] }
  ];
  return result;
}

function rotateRightUpWays(chosenPos) {
  const arr = chosenPos[0];
  const point = chosenPos[1];
  const result = [
    { n: [arr, point + 1], to: [arr - 1, point + 1] },

    { n: [arr, point], to: [arr, point + 1] },

    { n: [arr - 1, point], to: [arr, point] },

    { n: [arr - 1, point + 1], to: [arr - 1, point] },

    { n: [arr, point + 1], to: [arr - 1, point + 1] },

    { n: [arr, point], to: [arr, point + 1] }
  ];
  return result;
}

function rotateRightBottomWays(chosenPos) {
  const arr = chosenPos[0];
  const point = chosenPos[1];
  const result = [
    { n: [arr, point + 1], to: [arr + 1, point + 1] },

    { n: [arr, point], to: [arr, point + 1] },

    { n: [arr + 1, point], to: [arr, point] },

    { n: [arr + 1, point + 1], to: [arr + 1, point] },

    { n: [arr, point + 1], to: [arr + 1, point + 1] },

    { n: [arr, point], to: [arr, point + 1] }
  ];
  return result;
}

export { rotateLeftBottomWays, rotateLeftUpWays, rotateRightUpWays, rotateRightBottomWays };