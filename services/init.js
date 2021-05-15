import createArr from './createArr.js';
import { sortGem } from './sortOfGameArr.js';
import putArrInWrapper from './putArrInWrapper.js';
import solving from './functionsForUsing/solving.js';
import transfer from './functionsForUsing/transfer.js';
import autoSolving from './functionsForUsing/auto-solving.js';


export default function initMapOfGame() {
  //const sortedArr = sortGem(createArr());
  const sortedArr = [
    [10, 2, 3, 8],
    [16, 6, 4, 14],
    [15, 11, 13, 12],
    [1, 9, 15, 7]
  ];
  window.autoSolving = autoSolving(sortedArr);
  window.solving = solving(sortedArr);
  window.transfer = transfer(sortedArr);
  putArrInWrapper(sortedArr);
}