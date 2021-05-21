import { getWay } from './auto-solver/getWay.js';
import { moveDOMCard } from './moveDOMCard.js';
import { transformWayFromArrToDOM } from './transformToDOM.js';

function walk (listOfWays, arr, auto) {
  const forDOM = [];
  let time = 0;
  if (!auto) {
    for (const wayArr of listOfWays) {
      const template = arr[wayArr.n[0]][wayArr.n[1]];
      arr[wayArr.n[0]][wayArr.n[1]] = arr[wayArr.to[0]][wayArr.to[1]];
      arr[wayArr.to[0]][wayArr.to[1]] = template;
      forDOM.push(transformWayFromArrToDOM([wayArr], arr));
    }
    for (const way of forDOM) {
      time += 1;
      setTimeout(() => {
        moveDOMCard(way[0].n, way[0].to);
        moveDOMCard(way[1].n, way[1].to);
      }, time * 200);
    }
  } else {
    for (const wayArrMain of listOfWays) {
      const way = getWay(arr, 0, arr[wayArrMain.n[0]][wayArrMain.n[1]], auto);
      for (const wayArr of way) {
        const template = arr[wayArr.n[0]][wayArr.n[1]];
        arr[wayArr.n[0]][wayArr.n[1]] = arr[wayArr.to[0]][wayArr.to[1]];
        arr[wayArr.to[0]][wayArr.to[1]] = template;
        forDOM.push(transformWayFromArrToDOM([wayArr], arr));
      }
    
      const template2 = arr[wayArrMain.n[0]][wayArrMain.n[1]];
      arr[wayArrMain.n[0]][wayArrMain.n[1]] = arr[wayArrMain.to[0]][wayArrMain.to[1]];
      arr[wayArrMain.to[0]][wayArrMain.to[1]] = template2;
      auto[auto.length - 1] = { nArr: wayArrMain.n[0], nIndex: wayArrMain.n[1] };
      forDOM.push(transformWayFromArrToDOM([wayArrMain], arr));
    }
    return forDOM;
  }
}

export { walk };