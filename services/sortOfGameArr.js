export function checkCorrectGem (arr) {
  let resultSequence = 0;
  const gameCopy = [...arr[0], ...arr[1], ...arr[2], ...arr[3]];
  for (let i = 0; i <= gameCopy.length - 1; i += 1) {
    for (let j = i + 1; j <= gameCopy.length - 1; j += 1) {
      if (gameCopy[i] > gameCopy[j]) {
        resultSequence += 1;
      }
    }
  }
  return resultSequence % 2 === 0;
}
export default function sortGem (arr) {

  checkCorrectGem(sortedArr);
}