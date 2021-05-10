import createArr from './createArr.js';
import { sortGem } from './sortOfGameArr.js';
import putArrInWrapper from './putArrInWrapper.js';

export default function initMapOfGame(wrapper) {
  const arr = createArr();
  const sortedArr = sortGem(arr);
  putArrInWrapper(wrapper, sortedArr);
}