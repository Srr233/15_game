import createArr from './createArr.js';
import { sortGem } from './sortOfGameArr.js';
import putArrInWrapper from './putArrInWrapper.js';
import solving from './functionsForUsing/solving.js';
import transfer from './functionsForUsing/transfer.js';
import autoSolving from './functionsForUsing/auto-solving.js';


export default function initMapOfGame(wrapper) {
  const sortedArr = sortGem(createArr());

  window.autoSolving = autoSolving(sortedArr, wrapper);
  window.solving = solving(sortedArr, wrapper);
  window.transfer = transfer(sortedArr, wrapper);
  
  putArrInWrapper(sortedArr, wrapper);
}