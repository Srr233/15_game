import createArr from './createArr.js';
import sortOfGameArr from './sortOfGameArr.js';
import putArrInWrapper from './putArrInWrapper.js';

export default function initMapOfGame(wrapper) {
  const arr = createArr();
  const sortedArr = sortOfGameArr(arr);
  putArrInWrapper(wrapper, sortedArr);
}