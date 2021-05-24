import MAIN_CLASS from "./constants/mainClass.js";

const gameDOM = document.querySelector(MAIN_CLASS);

function createCard (num) {
  const divWrapper = document.createElement('div');
  const div = document.createElement('div');
  divWrapper.insertAdjacentElement('beforeend', div);

  div.className = 'card';
  div.textContent = num;
  div.dataset.index = num;

  return divWrapper;
}
export default function putArrInWrapper (arr) {
  const arrInLine = [...arr[0], ...arr[1], ...arr[2], ...arr[3]];
  arrInLine.forEach(item => {
    gameDOM.insertAdjacentElement('beforeend', createCard(item));
  });
}