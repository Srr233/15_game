import { getOneWay } from './getOneWay.js';

function moreWays(chosenPos, direction, positionOfSpace) {
  const arr = chosenPos[0];
  const point = chosenPos[1];
  let oneStep;
  if (direction === 'right bottom' && positionOfSpace === 'down') {
    oneStep = getOneWay(arr, point, { side: 'right', up: 'down' });
    return [
      oneStep.su1(), oneStep.su2(), oneStep.u3(), oneStep.sd2(), oneStep.u2(),
      oneStep.su1(), oneStep.u1(), oneStep.su1(), oneStep.u2(), oneStep.su1(), oneStep.u1(),
      oneStep.sd1(), oneStep.sd2(), oneStep.u3(), oneStep.su2(), oneStep.su1(), oneStep.u1(),
      oneStep.sd1()
    ];
  } else if (direction === 'right bottom' && positionOfSpace === 'up') {
    oneStep = getOneWay(arr, point, { side: 'right', up: 'down' });
    return [
      oneStep.u1(), oneStep.su1(), oneStep.su2(), oneStep.u3(), oneStep.sd2(),
      oneStep.u2(), oneStep.su1(), oneStep.u1(), oneStep.sd1(), oneStep.u2(),
      oneStep.su1(), oneStep.u1(), oneStep.sd1(), oneStep.sd2(), oneStep.u3(),
      oneStep.su2(), oneStep.su1(), oneStep.u1(), oneStep.sd1()
    ];
  } else if (direction === 'left bottom' && positionOfSpace === 'down') {
    oneStep = getOneWay(arr, point, { side: 'left', up: 'down' });
    return [
      oneStep.su2(), oneStep.su1(), oneStep.u1(), oneStep.sd1(), oneStep.sd2(),
      oneStep.u3(), oneStep.su2(), oneStep.u2(), oneStep.sd1(), oneStep.u1(),
      oneStep.su1(), oneStep.u2(), oneStep.sd2(), oneStep.u3(), oneStep.su2(),
      oneStep.u2(), oneStep.sd2(), oneStep.u3(), oneStep.su2(), oneStep.u2()
    ];
  } else if (direction === 'left bottom' && positionOfSpace === 'up') {
    oneStep = getOneWay(arr, point, { side: 'left', up: 'down' });
    return [
      oneStep.u3(), oneStep.su2(), oneStep.su1(), oneStep.u1(), oneStep.sd1(),
      oneStep.sd2(), oneStep.u3(), oneStep.su2(), oneStep.u2(), oneStep.sd1(),
      oneStep.u1(), oneStep.su1(), oneStep.u2(), oneStep.sd2(), oneStep.u3(),
      oneStep.su2(), oneStep.u2(), oneStep.sd2(), oneStep.u3(), oneStep.su2(),
      oneStep.u2()
    ];
  } else if (direction === 'left up' && positionOfSpace === 'down') {
    oneStep = getOneWay(arr, point, { side: 'left', up: 'up' });
    return [
      oneStep.u3(), oneStep.su2(), oneStep.su1(), oneStep.u1(), oneStep.sd1(),
      oneStep.sd2(), oneStep.u3(), oneStep.su2(), oneStep.u2(), oneStep.sd1(),
      oneStep.u1(), oneStep.su1(), oneStep.u2(), oneStep.sd2(), oneStep.u3(),
      oneStep.su2(), oneStep.u2(), oneStep.sd2(), oneStep.u3(), oneStep.su2(),
      oneStep.u2()
    ];
  } else if (direction === 'left up' && positionOfSpace === 'up') {
    oneStep = getOneWay(arr, point, { side: 'left', up: 'up' });
    return [
      oneStep.u3(), oneStep.sd2(), oneStep.sd1(), oneStep.u1(), oneStep.su1(),
      oneStep.su2(), oneStep.u3(), oneStep.sd2(), oneStep.u2(), oneStep.su1(),
      oneStep.u1(), oneStep.sd1(), oneStep.u2(), oneStep.su2(), oneStep.u3(),
      oneStep.sd2(), oneStep.u2(), oneStep.su2(), oneStep.u3(), oneStep.sd2(),
      oneStep.u2()
    ];
  } else if (direction === 'right up' && positionOfSpace === 'up') {
    oneStep = getOneWay(arr, point, { side: 'right', up: 'up' });
    return [
      oneStep.u1(), oneStep.sd1(), oneStep.sd2(), oneStep.u3(), oneStep.su2(),
      oneStep.su1(), oneStep.u1(), oneStep.sd1(), oneStep.u2(), oneStep.su2(),
      oneStep.u3(), oneStep.sd2(), oneStep.u2(), oneStep.su1(), oneStep.u1(),
      oneStep.sd1(), oneStep.u2(), oneStep.su1(), oneStep.u1(), oneStep.sd1(),
      oneStep.u2()
    ];
  } else if (direction === 'right up' && positionOfSpace === 'down') {
    oneStep = getOneWay(arr, point, { side: 'right', up: 'up' });
    return [
      oneStep.u1(), oneStep.su1(), oneStep.su2(), oneStep.u3(), oneStep.sd2(),
      oneStep.u2(), oneStep.su1(), oneStep.u1(), oneStep.sd1(), oneStep.u2(),
      oneStep.su1(), oneStep.u1(), oneStep.sd1(), oneStep.sd2(), oneStep.u3(),
      oneStep.su2(), oneStep.su1(), oneStep.u1(), oneStep.sd1()
    ];
  }
}

export { moreWays };