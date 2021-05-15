import createArr from './createArr.js';
import { sortGem } from './sortOfGameArr.js';
import putArrInWrapper from './putArrInWrapper.js';
import solving from './functionsForUsing/solving.js';
import transfer from './functionsForUsing/transfer.js';
import autoSolving from './functionsForUsing/auto-solving.js';


export default function initMapOfGame() {
  //const sortedArr = sortGem(createArr());
  const sortedArr = [
    [1, 2, 5, 4],
    [10, 6, 3, 8],
    [16, 14, 13, 12],
    [9, 11, 15, 7]
  ];
  window.autoSolving = autoSolving(sortedArr);
  window.solving = solving(sortedArr);
  window.transfer = transfer(sortedArr);
  putArrInWrapper(sortedArr);
}