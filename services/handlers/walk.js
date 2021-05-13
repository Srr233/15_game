import { moveDOMCard } from './moveDOMCard.js';
import { transformWayFromArrToDOM } from './transformToDOM.js';


function walk (listOfWays, arr) {
  const forDOM = [];
  for (const wayArr of listOfWays) {
    const template = arr[wayArr.n[0]][wayArr.n[1]];
    arr[wayArr.n[0]][wayArr.n[1]] = arr[wayArr.to[0]][wayArr.to[1]];
    arr[wayArr.to[0]][wayArr.to[1]] = template;
    forDOM.push(transformWayFromArrToDOM([wayArr], arr));
  }
  for (const way of forDOM) {
    moveDOMCard(way[0].n, way[0].to);
    moveDOMCard(way[1].n, way[1].to);
  }
}

export { walk };