import MAIN_CLASS from "./constants/mainClass.js";
import initMapOfGame from "./init.js";


function refreshGame() {
  const game = document.querySelector(MAIN_CLASS);
  const length = game.children.length;
  for (let i = 0; i < length; i++) {
    game.children[0].remove();
  }
  initMapOfGame();
}
export function tieButtons() {
  const refresh = document.querySelector('#refresh');
  const autoSolve = document.querySelector('#auto-solve');
  const listOfWays = document.querySelector('#get-solve');
  autoSolve.addEventListener('click', () => window.autoSolving());
  refresh.addEventListener('click', refreshGame);
  listOfWays.addEventListener('click', () => window.solving());
}