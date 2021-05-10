function createCard (num) {
  const divWrapper = document.createElement('div');
  const div = document.createElement('div');
  divWrapper.insertAdjacentElement('beforeend', div);

  div.className = 'card';
  div.textContent = num;
  div.dataset.index = num;

  return divWrapper;
}
export default function putArrInWrapper (arr, wrapper) {
  const copyArr = arr.slice();

  const arrInLine = [...copyArr[0], ...copyArr[1], ...copyArr[2], ...copyArr[3]];
  arrInLine.forEach(item => {
    wrapper.insertAdjacentElement('beforeend', createCard(item));
  });
}