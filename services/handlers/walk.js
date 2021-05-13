import { moveDOMCard } from './moveDOMCard.js';

function walk (listOfWays, arr) {
  for (const wayArr of listOfWays.listForArr) {
    const template = arr[wayArr.n[0]][wayArr.n[1]];
    arr[wayArr.n[0]][wayArr.n[1]] = arr[wayArr.to[0]][wayArr.to[1]];
    arr[wayArr.to[0]][wayArr.to[1]] = template;
  }
  console.log(arr.slice());
  for (const way of listOfWays.listForDOM) {
    setTimeout(() => moveDOMCard(way.n, way.to), 1000);
  }
}

export { walk };