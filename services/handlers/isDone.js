import createArr from "../createArr.js";

function isDone (game) {
  const doneGame = createArr();
  return doneGame.every((arr, i) => {
    return arr.every((n, j) => game[i][j] === n);
  });
}

export { isDone }
