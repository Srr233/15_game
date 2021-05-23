import MAIN_CLASS from "../../constants/mainClass.js";

const removeTargetClasses = () => {
  const targets = document.querySelectorAll('.target');
  targets[0].classList.remove('target');
  targets[1].classList.remove('target');
}

const go = (target, { getArr, deletePos }) => {
  target.classList.toggle('target');

  if (target.classList.contains('target')) {
    const arr = getArr();
    arr.push(+target.dataset.index);

    if (arr.length === 2) {
      window.transfer(arr[0], arr[1]);
      deletePos();
      removeTargetClasses();
    }
  } else {
    deletePos();
  }
}

function tieTransferAndGame () {
  let positions = [];
  const getArr = () => positions;
  const deletePos = () => positions = [];
  const options = { getArr, deletePos }

  const gameDOM = document.querySelector(MAIN_CLASS);
  gameDOM.addEventListener('click', ({ target }) => {
    if (target.classList.contains('card')) {
      go(target, options);
    }
  });
}

export { tieTransferAndGame };