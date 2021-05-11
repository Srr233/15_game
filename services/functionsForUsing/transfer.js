import { checkMove } from '../checkMove.js';

export default function transfer (arr, gameDOM) {
  return (from, to) => {
    console.log(checkMove(from, to, arr));
  }
}