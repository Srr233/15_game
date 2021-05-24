import { moreWays } from "./moreWays.js";

function getMoreCorrectWays ({ direction, whereIsSpace, isEnoughSpaces, chosenPos }) {
  if (isEnoughSpaces) return moreWays(chosenPos, direction, whereIsSpace);
  return moreWays(chosenPos, direction, whereIsSpace, false);
};

export { getMoreCorrectWays }