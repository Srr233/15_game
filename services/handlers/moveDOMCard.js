import STEP from '../constants/step.js';
import MAIN_CLASS from '../constants/mainClass.js';

const gameDOM = document.querySelector(MAIN_CLASS);

function changePosUp (currentElem, currentPos, n, direction) {
  if (direction === 'up') {
    if (currentPos > n - 3) {
      requestAnimationFrame(() => {
        currentElem.style.top = `${currentPos}px`;
        changePosUp(currentElem, currentPos - 3, n, direction);
      });
    }
  } else {
    if (currentPos < n + 3) {
      requestAnimationFrame(() => {
        currentElem.style.top = `${currentPos}px`;
        changePosUp(currentElem, currentPos + 3, n, direction);
      });
    }
  }
}

function changePosLeft (currentElem, currentPos, n, direction) {
  if (direction === 'left') {
    if (currentPos > n - 3) {
      requestAnimationFrame(() => {
        currentElem.style.left = `${currentPos}px`;
        changePosLeft(currentElem, currentPos - 3, n, direction);
      });
    }
  } else {
    if (currentPos < n + 3) {
      requestAnimationFrame(() => {
        currentElem.style.left = `${currentPos}px`;
        changePosLeft(currentElem, currentPos + 3, n, direction);
      });
    }
  }
}
function moveDOMCard (from, direction) {
  const getNormalNum = (string) => {
    return +string.slice(0, -2);
  }
  const currentCard = gameDOM.querySelector(`div[data-index="${from}"]`);
  const {top, left} = window.getComputedStyle(currentCard);
  let normNum;
  switch (direction) {
    case 'up':
      normNum = getNormalNum(top) - STEP;
      changePosUp(currentCard, getNormalNum(top), normNum, 'up');
      break;
    case 'left':
      normNum = getNormalNum(left) - STEP;
      changePosLeft(currentCard, getNormalNum(left), normNum, 'left');
      break;
    case 'down':
      normNum = getNormalNum(top) + STEP;
      changePosUp(currentCard, getNormalNum(top), normNum, 'down');
      break;
    case 'right':
      normNum = getNormalNum(left) + STEP;
      changePosLeft(currentCard, getNormalNum(left), normNum, 'right');
      break;
    default:
      throw new Error('direction didn\'t find');
  }
}

export { moveDOMCard };