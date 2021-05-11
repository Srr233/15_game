import STEP from '../constants/step.js';

function changePosPlus(currentElem, currentPos, n, direction) {
  if (direction === 'up') {
    if (currentPos !== n) {
      requestAnimationFrame(() => {
        currentElem.style.top = `${currentPos}px`;
        changePosPlus(currentElem, currentPos - 1, n, direction);
      });
    }
  } else {
    if (currentPos !== n) {
      requestAnimationFrame(() => {
        currentElem.style.top = `${currentPos}px`;
        changePosPlus(currentElem, currentPos + 1, n, direction);
      });
    }
  }
}
function moveDOMCard (from, direction) {
  const getNormalNum = (string) => {
    return +string.slice(0, -2);
  }
  const currentCard = document.querySelector(`div[data-index="${from}"]`);
  const {top, left} = window.getComputedStyle(currentCard);
  let normNum;
  switch (direction) {
    case 'up':
      normNum = getNormalNum(top) - STEP;
      changePosPlus(currentCard, getNormalNum(top), normNum, 'up');
      break;
    case 'left':
      normNum = getNormalNum(left) - STEP;
      currentCard.style.left = `${getNormalNum(left) - STEP}px`;
      break;
    case 'down':
      normNum = getNormalNum(top) + STEP;
      currentCard.style.top = `${getNormalNum(top) + STEP}px`;
      break;
    case 'right':
      normNum = getNormalNum(left) + STEP;
      currentCard.style.left = `${getNormalNum(left) + STEP}px`;
      break;
    default:
      throw new Error('direction didn\'t find');
  }
}

export { moveDOMCard };