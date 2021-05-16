import { getOneWay } from './getOneWay.js';
function moreWaysForNotEnoughSpaces(chosenPos, direction, positionOfSpace) {
  const arr = chosenPos[0];
  const point = chosenPos[1];
  let oneStep;
  if (direction === 'right bottom' && positionOfSpace === 'down') {
    oneStep = getOneWay(arr, point - 1, { side: 'right', up: 'down' });
    return [
      oneStep.sd2(), oneStep.u2(), oneStep.su2(), oneStep.u3(),
      oneStep.sd2(),
      oneStep.sd2(), oneStep.u3(), oneStep.su2(), oneStep.u2(), oneStep.sd1(),
      oneStep.u1(), oneStep.su1(), oneStep.su2(), oneStep.u3(), oneStep.sd2(),
      oneStep.u2(), oneStep.su1(), oneStep.u1(), oneStep.sd1(), oneStep.sd2(),
      oneStep.u3(), oneStep.su2(), oneStep.u2(), oneStep.sd2(), oneStep.u3(),
      oneStep.su2(), oneStep.u2(), oneStep.sd2()
    ];
  } else if (direction === 'right bottom' && positionOfSpace === 'up') {
    oneStep = getOneWay(arr, point - 1, { side: 'right', up: 'down' });
    return [
      oneStep.u3(), oneStep.sd2(), oneStep.u2(), oneStep.su2(), oneStep.u3(),
      oneStep.sd2(),
      oneStep.sd2(), oneStep.u3(), oneStep.su2(), oneStep.u2(), oneStep.sd1(),
      oneStep.u1(), oneStep.su1(), oneStep.su2(), oneStep.u3(), oneStep.sd2(),
      oneStep.u2(), oneStep.su1(), oneStep.u1(), oneStep.sd1(), oneStep.sd2(),
      oneStep.u3(), oneStep.su2(), oneStep.u2(), oneStep.sd2(), oneStep.u3(),
      oneStep.su2(), oneStep.u2(), oneStep.sd2()
    ];
  } else if (direction === 'left bottom' && positionOfSpace === 'down') {
    oneStep = getOneWay(arr, point + 1, { side: 'left', up: 'down' });
    return [
      oneStep.sd1(), oneStep.u2(), oneStep.su1(), oneStep.u1(), oneStep.sd1(),
      oneStep.u2(),
      oneStep.su1(), oneStep.u1(), oneStep.sd1(), oneStep.u2(), oneStep.su1(),
      oneStep.su1(), oneStep.u2(), oneStep.sd1(), oneStep.u1(), oneStep.su1(),
      oneStep.u2(), oneStep.sd1(), oneStep.u1(), oneStep.su1(), oneStep.su2(),
      oneStep.u3(), oneStep.sd2(), oneStep.u2(), oneStep.su1(), oneStep.u1(),
      oneStep.sd1(), oneStep.sd2(), oneStep.u3(), oneStep.su2(), oneStep.su1(),
      oneStep.u1(), oneStep.sd1(), oneStep.u2(), oneStep.su1(), oneStep.u1(),
      oneStep.sd1(), oneStep.u2(), oneStep.su1(), oneStep.u1(), oneStep.sd1(),
      oneStep.u2(), oneStep.su1()
    ];
  } else if (direction === 'left bottom' && positionOfSpace === 'up') {
    oneStep = getOneWay(arr, point + 1, { side: 'left', up: 'down' });
    return [
      oneStep.u1(),
      oneStep.sd1(), oneStep.u2(), oneStep.su1(), oneStep.u1(), oneStep.sd1(),
      oneStep.u2(),
      oneStep.su1(), oneStep.u1(), oneStep.sd1(), oneStep.u2(), oneStep.su1(),
      oneStep.su1(), oneStep.u2(), oneStep.sd1(), oneStep.u1(), oneStep.su1(),
      oneStep.u2(), oneStep.sd1(), oneStep.u1(), oneStep.su1(), oneStep.su2(),
      oneStep.u3(), oneStep.sd2(), oneStep.u2(), oneStep.su1(), oneStep.u1(),
      oneStep.sd1(), oneStep.sd2(), oneStep.u3(), oneStep.su2(), oneStep.su1(),
      oneStep.u1(), oneStep.sd1(), oneStep.u2(), oneStep.su1(), oneStep.u1(),
      oneStep.sd1(), oneStep.u2(), oneStep.su1(), oneStep.u1(), oneStep.sd1(),
      oneStep.u2(), oneStep.su1()
    ];
  } else if (direction === 'left up' && positionOfSpace === 'down') {
    oneStep = getOneWay(arr, point + 1, { side: 'left', up: 'up' });
    return [
      oneStep.u1(), 
      oneStep.su1(), oneStep.u2(), oneStep.sd1(), oneStep.u1(), oneStep.su1(),
      oneStep.u2(), oneStep.sd1(), oneStep.u1(), oneStep.su1(), oneStep.su2(),
      oneStep.u3(), oneStep.sd2(), oneStep.u2(), oneStep.su1(), oneStep.u1(),
      oneStep.sd1(), oneStep.sd2(), oneStep.u3(), oneStep.su2(), oneStep.su1(),
      oneStep.u1(), oneStep.sd1(), oneStep.u2(), oneStep.su1(), oneStep.u1(),
      oneStep.sd1(), oneStep.u2(), oneStep.su1(), oneStep.u1(), oneStep.sd1(),
      oneStep.u2(), oneStep.su1()
    ];
  } else if (direction === 'left up' && positionOfSpace === 'up') {
    oneStep = getOneWay(arr, point + 1, { side: 'left', up: 'up' });
    return [
      oneStep.su1(), oneStep.u2(), oneStep.sd1(), oneStep.u1(), oneStep.su1(),
      oneStep.u2(), oneStep.sd1(), oneStep.u1(), oneStep.su1(), oneStep.su2(),
      oneStep.u3(), oneStep.sd2(), oneStep.u2(), oneStep.su1(), oneStep.u1(),
      oneStep.sd1(), oneStep.sd2(), oneStep.u3(), oneStep.su2(), oneStep.su1(),
      oneStep.u1(), oneStep.sd1(), oneStep.u2(), oneStep.su1(), oneStep.u1(),
      oneStep.sd1(), oneStep.u2(), oneStep.su1(), oneStep.u1(), oneStep.sd1(),
      oneStep.u2(), oneStep.su1()
    ];
  } else if (direction === 'right up' && positionOfSpace === 'up') {
    oneStep = getOneWay(arr, point - 1, { side: 'right', up: 'up' });
    return [
      oneStep.su2(), oneStep.u2(), oneStep.sd2(), oneStep.u3(),
      oneStep.su2(), oneStep.u2(),
      oneStep.sd2(), oneStep.u3(), oneStep.su2(), oneStep.su1(),
      oneStep.u1(), oneStep.sd1(), oneStep.sd2(), oneStep.u3(), oneStep.su2(),
      oneStep.u2(), oneStep.sd2(), oneStep.u3(), oneStep.su2(), oneStep.u2(),
      oneStep.sd1(), oneStep.u1(), oneStep.su1(), oneStep.u2(), oneStep.sd2(),
      oneStep.u3(), oneStep.su2(), oneStep.u2(), oneStep.u2(), oneStep.su2(),
      oneStep.u3(), oneStep.sd2(), oneStep.u2(), oneStep.su2(), oneStep.u3()
    ];
  } else if (direction === 'right up' && positionOfSpace === 'down') {
    oneStep = getOneWay(arr, point - 1, { side: 'right', up: 'up' });
    return [
      oneStep.sd2(), oneStep.u2(), oneStep.su2(), oneStep.u3(),
      oneStep.sd2(),
      oneStep.sd2(), oneStep.u3(), oneStep.su2(), oneStep.su1(),
      oneStep.u1(), oneStep.sd1(), oneStep.sd2(), oneStep.u3(), oneStep.su2(),
      oneStep.u2(), oneStep.sd2(), oneStep.u3(), oneStep.su2(), oneStep.u2(),
      oneStep.sd1(), oneStep.u1(), oneStep.su1(), oneStep.u2(), oneStep.sd2(),
      oneStep.u3(), oneStep.su2(), oneStep.u2(), oneStep.u2(), oneStep.su2(),
      oneStep.u3(), oneStep.sd2(), oneStep.u2(), oneStep.su2(), oneStep.u3()
    ];
  }
}





function moreWaysForSidesNotEnoughSpace(chosenPos, direction, positionOfSpace) {
  const arr = chosenPos[0];
  const point = chosenPos[1] - 1;
  let oneStep;

  if (direction === 'right up') {
    oneStep = getOneWay(arr, point, { side: 'right', up: 'up' });
    if (positionOfSpace === 'same') {
      return [
        oneStep.su1(),
        oneStep.u1(), oneStep.sd1(), oneStep.sd2(), oneStep.u3(), oneStep.su2(),
        oneStep.u2(), oneStep.sd2(), oneStep.u3(), oneStep.su2(), oneStep.u2(),
        oneStep.sd1(), oneStep.u1(), oneStep.su1(), oneStep.u2(), oneStep.sd2(),
        oneStep.u3(), oneStep.su2(), oneStep.u2(), oneStep.sd2(), oneStep.u3()
      ];
    }
    return [
      oneStep.su2(), oneStep.su1(),
      oneStep.u1(), oneStep.sd1(), oneStep.sd2(), oneStep.u3(), oneStep.su2(),
      oneStep.u2(), oneStep.sd2(), oneStep.u3(), oneStep.su2(), oneStep.u2(),
      oneStep.sd1(), oneStep.u1(), oneStep.su1(), oneStep.u2(), oneStep.sd2(),
      oneStep.u3(), oneStep.su2(), oneStep.u2(), oneStep.sd2(), oneStep.u3()
    ];
  }


  if (direction === 'right down') {
    oneStep = getOneWay(arr, point, { side: 'right', up: 'down' });
    if (positionOfSpace === 'same') {
      return [
        oneStep.sd2(), oneStep.u3(), oneStep.su2(),
        oneStep.u2(), oneStep.sd2(), oneStep.u3(), oneStep.su2(), oneStep.su1(),
        oneStep.u1(), oneStep.sd1(), oneStep.sd2(), oneStep.u3(), oneStep.su2(),
        oneStep.u2(), oneStep.sd2(), oneStep.u3(), oneStep.su2(), oneStep.u2(),
        oneStep.sd1(), oneStep.u1(), oneStep.su1(), oneStep.u2()
      ];
    }
    return [
      oneStep.u3(), oneStep.su2(),
      oneStep.u2(), oneStep.sd2(), oneStep.u3(), oneStep.su2(), oneStep.su1(),
      oneStep.u1(), oneStep.sd1(), oneStep.sd2(), oneStep.u3(), oneStep.su2(),
      oneStep.u2(), oneStep.sd2(), oneStep.u3(), oneStep.su2(), oneStep.u2(),
      oneStep.sd1(), oneStep.u1(), oneStep.su1(), oneStep.u2()
    ];
  }


  if (direction === 'left up') {
    oneStep = getOneWay(arr, point, { side: 'left', up: 'up' });
    if (positionOfSpace === 'same') {
      return [

      ];
    }
    return [

    ];
  }


  if (direction === 'left down') {
    oneStep = getOneWay(arr, point, { side: 'left', up: 'down' });
    if (positionOfSpace === 'same') {
      return [

      ];
    }
    return [

    ];
  }
}




function moreWaysForSides(chosenPos, direction, positionOfSpace, isEnoughSpaces = true) {
  const arr = chosenPos[0];
  const point = chosenPos[1];
  let oneStep;

  if (direction === 'right up' && isEnoughSpaces) {
    oneStep = getOneWay(arr, point, { side: 'right', up: 'up' });
    if (positionOfSpace === 'same') {
      return [
        oneStep.su1(), oneStep.u2(), oneStep.sd1(),
        oneStep.u1(),
        oneStep.su1(), oneStep.u2(), oneStep.sd1(), oneStep.u1(), oneStep.su1(),
        oneStep.u2(), oneStep.sd1(), oneStep.u1(), oneStep.su1(), oneStep.su2(),
        oneStep.u3(), oneStep.sd2(), oneStep.u2(), oneStep.su1(), oneStep.u1(),
        oneStep.sd1(), oneStep.sd2(), oneStep.u3(), oneStep.su2(), oneStep.su1(),
        oneStep.u1(), oneStep.sd1(), oneStep.u2()
      ];
    }
    return [
      oneStep.u2(), oneStep.sd1(),
      oneStep.u1(),
      oneStep.su1(), oneStep.u2(), oneStep.sd1(), oneStep.u1(), oneStep.su1(),
      oneStep.u2(), oneStep.sd1(), oneStep.u1(), oneStep.su1(), oneStep.su2(),
      oneStep.u3(), oneStep.sd2(), oneStep.u2(), oneStep.su1(), oneStep.u1(),
      oneStep.sd1(), oneStep.sd2(), oneStep.u3(), oneStep.su2(), oneStep.su1(),
      oneStep.u1(), oneStep.sd1(), oneStep.u2()
    ];
  }


  if (direction === 'right down' && isEnoughSpaces) {
    oneStep = getOneWay(arr, point, { side: 'right', up: 'down' });
    if (positionOfSpace === 'same') {
      return [
        oneStep.sd1(),
        oneStep.u2(), oneStep.su1(),
        oneStep.u1(), oneStep.sd1(), oneStep.sd2(), oneStep.u3(), oneStep.su2(),
        oneStep.u2(), oneStep.sd2(), oneStep.u3(), oneStep.su2(), oneStep.u2(),
        oneStep.sd1(), oneStep.u1(), oneStep.su1(), oneStep.u2(), oneStep.sd2(),
        oneStep.u3(), oneStep.su2(), oneStep.u2(), oneStep.sd1(), oneStep.u1(),
        oneStep.su1(), oneStep.su2()
      ];
    }
    return [
      oneStep.u2(), oneStep.su1(),
      oneStep.u1(), oneStep.sd1(), oneStep.sd2(), oneStep.u3(), oneStep.su2(),
      oneStep.u2(), oneStep.sd2(), oneStep.u3(), oneStep.su2(), oneStep.u2(),
      oneStep.sd1(), oneStep.u1(), oneStep.su1(), oneStep.u2(), oneStep.sd2(),
      oneStep.u3(), oneStep.su2(), oneStep.u2(), oneStep.sd1(), oneStep.u1(),
      oneStep.su1(), oneStep.su2()
    ];
  }


  if (direction === 'left up' && isEnoughSpaces) {
    oneStep = getOneWay(arr, point, { side: 'left', up: 'up' });
    if (positionOfSpace === 'same') {
      return [

      ];
    }
    return [

    ];
  }


  if (direction === 'left down' && isEnoughSpaces) {
    oneStep = getOneWay(arr, point, { side: 'left', up: 'down' });
    if (positionOfSpace === 'same') {
      return [

      ];
    }
    return [

    ];
  }

  return moreWaysForSidesNotEnoughSpace(chosenPos, direction, positionOfSpace);
}






function moreWays(chosenPos, direction, positionOfSpace, isEnoughSpaces = true) {
  const arr = chosenPos[0];
  const point = chosenPos[1];
  let oneStep;
  if (direction === 'right bottom' && positionOfSpace === 'down' && isEnoughSpaces) {
    oneStep = getOneWay(arr, point, { side: 'right', up: 'down' });
    return [
      oneStep.u2(),
      oneStep.su1(), oneStep.u1(), oneStep.sd1(), oneStep.u2(), oneStep.su1(),
      oneStep.su1(), oneStep.u2(), oneStep.sd1(), oneStep.u1(), oneStep.su1(),
      oneStep.u2(), oneStep.sd1(), oneStep.u1(), oneStep.su1(), oneStep.su2(),
      oneStep.u3(), oneStep.sd2(), oneStep.u2(), oneStep.su1(), oneStep.u1(),
      oneStep.sd1(), oneStep.sd2(), oneStep.u3(), oneStep.su2(), oneStep.su1(),
      oneStep.u1(), oneStep.sd1(), oneStep.u2(), oneStep.su1(), oneStep.u1(),
      oneStep.sd1()
    ];
  } else if (direction === 'right bottom' && positionOfSpace === 'up' && isEnoughSpaces) {
    oneStep = getOneWay(arr, point, { side: 'right', up: 'down' });
    return [
      oneStep.su1(), oneStep.u1(), oneStep.sd1(), oneStep.u2(), oneStep.su1(),
      oneStep.su1(), oneStep.u2(), oneStep.sd1(), oneStep.u1(), oneStep.su1(),
      oneStep.u2(), oneStep.sd1(), oneStep.u1(), oneStep.su1(), oneStep.su2(),
      oneStep.u3(), oneStep.sd2(), oneStep.u2(), oneStep.su1(), oneStep.u1(),
      oneStep.sd1(), oneStep.sd2(), oneStep.u3(), oneStep.su2(), oneStep.su1(),
      oneStep.u1(), oneStep.sd1(), oneStep.u2(), oneStep.su1(), oneStep.u1(),
      oneStep.sd1()
    ];
  } else if (direction === 'left bottom' && positionOfSpace === 'down' && isEnoughSpaces) {
    oneStep = getOneWay(arr, point, { side: 'left', up: 'down' });
    return [
      oneStep.sd2(), oneStep.u3(), oneStep.su2(), oneStep.u2(), oneStep.sd1(),
      oneStep.u1(), oneStep.su1(), oneStep.su2(), oneStep.u3(), oneStep.sd2(),
      oneStep.u2(), oneStep.su1(), oneStep.u1(), oneStep.sd1(), oneStep.sd2(),
      oneStep.u3(), oneStep.su2(), oneStep.u2()
    ];
  } else if (direction === 'left bottom' && positionOfSpace === 'up' && isEnoughSpaces) {
    oneStep = getOneWay(arr, point, { side: 'left', up: 'down' });
    return [
      oneStep.u2(),
      oneStep.sd2(), oneStep.u3(), oneStep.su2(), oneStep.u2(), oneStep.sd1(),
      oneStep.u1(), oneStep.su1(), oneStep.su2(), oneStep.u3(), oneStep.sd2(),
      oneStep.u2(), oneStep.su1(), oneStep.u1(), oneStep.sd1(), oneStep.sd2(),
      oneStep.u3(), oneStep.su2(), oneStep.u2()
    ];
  } else if (direction === 'left up' && positionOfSpace === 'down' && isEnoughSpaces) {
    oneStep = getOneWay(arr, point, { side: 'left', up: 'up' });
    return [
      oneStep.sd2(), oneStep.u3(), oneStep.su2(), oneStep.su1(),
      oneStep.u1(), oneStep.sd1(), oneStep.sd2(), oneStep.u3(), oneStep.su2(),
      oneStep.u2(), oneStep.sd2(), oneStep.u3(), oneStep.su2(), oneStep.u2(),
      oneStep.sd1(), oneStep.u1(), oneStep.su1(), oneStep.u2(), oneStep.sd2(),
      oneStep.u3(), oneStep.su2(), oneStep.u2()
    ];
  } else if (direction === 'left up' && positionOfSpace === 'up' && isEnoughSpaces) {
    oneStep = getOneWay(arr, point, { side: 'left', up: 'up' });
    return [
      oneStep.u2(), oneStep.sd2(), oneStep.u3(), oneStep.su2(), oneStep.su1(),
      oneStep.u1(), oneStep.sd1(), oneStep.sd2(), oneStep.u3(), oneStep.su2(),
      oneStep.u2(), oneStep.sd2(), oneStep.u3(), oneStep.su2(), oneStep.u2(),
      oneStep.sd1(), oneStep.u1(), oneStep.su1(), oneStep.u2(), oneStep.sd2(),
      oneStep.u3(), oneStep.su2(), oneStep.u2()
    ];
  } else if (direction === 'right up' && positionOfSpace === 'up' && isEnoughSpaces) {
    oneStep = getOneWay(arr, point, { side: 'right', up: 'up' });
    return [
      oneStep.u2(), oneStep.sd1(), oneStep.u1(), oneStep.su1(), oneStep.su2(),
      oneStep.u3(), oneStep.sd2(), oneStep.u2(), oneStep.su1(), oneStep.u1(),
      oneStep.sd1(), oneStep.sd2(), oneStep.u3(), oneStep.su2(), oneStep.su1(),
      oneStep.u1(), oneStep.sd1(), oneStep.u2(), oneStep.su1(), oneStep.u1(),
      oneStep.sd1()
    ];
  } else if (direction === 'right up' && positionOfSpace === 'down' && isEnoughSpaces) {
    oneStep = getOneWay(arr, point, { side: 'right', up: 'up' });
    return [
      oneStep.sd1(), oneStep.u1(), oneStep.su1(), oneStep.su2(),
      oneStep.u3(), oneStep.sd2(), oneStep.u2(), oneStep.su1(), oneStep.u1(),
      oneStep.sd1(), oneStep.sd2(), oneStep.u3(), oneStep.su2(), oneStep.su1(),
      oneStep.u1(), oneStep.sd1(), oneStep.u2(), oneStep.su1(), oneStep.u1(),
      oneStep.sd1()
    ];
  } else if (!isEnoughSpaces && positionOfSpace !== 'same' && positionOfSpace !== 'another') {
    return moreWaysForNotEnoughSpaces(chosenPos, direction, positionOfSpace);
  } else {
    return moreWaysForSides(chosenPos, direction, positionOfSpace, isEnoughSpaces);
  }
}

export { moreWays };