import createArr from './createArr.js';
import { sortGem } from './sortOfGameArr.js';
import putArrInWrapper from './putArrInWrapper.js';
import solving from './functionsForUsing/solving.js';
import transfer from './functionsForUsing/transfer.js';
import autoSolving from './functionsForUsing/auto-solving.js';

function tieFunctionsToWindow (sortedArr) {
  window.autoSolving = autoSolving(sortedArr);
  window.solving = solving(sortedArr);
  window.transfer = transfer(sortedArr);
}
export default function initMapOfGame() {
  let sortedArr = sortGem(createArr());
  tieFunctionsToWindow(sortedArr);
  putArrInWrapper(sortedArr);
}