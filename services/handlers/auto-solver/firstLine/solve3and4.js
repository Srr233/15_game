import { getStepNtoGoal } from "../getStepNtoGoal.js";

function getWaysToSolve3and4(nextGoal, i) {
  const getStepNtoGoalBind = getStepNtoGoal.bind(this);
  const forDOM = [];

  nextGoal = [1, 2]
  forDOM.push(...getStepNtoGoalBind(i - 1, nextGoal));

  nextGoal = [0, 2];
  forDOM.push(...getStepNtoGoalBind(i, nextGoal));
  forDOM.push(...getStepNtoGoalBind(i, nextGoal, { n1: i, n2: i - 1 }));

  nextGoal = [1, 2];
  this._block[2] = this._block.pop();
  forDOM.push(...getStepNtoGoalBind(i, nextGoal, { n1: i - 1, n2: i - 1 }));

  nextGoal = [0, 3];
  this._block[2] = this._block.pop();
  forDOM.push(...getStepNtoGoalBind(i, nextGoal, { n1: i, n2: i }));

  nextGoal = [0, 2];
  this._block[2] = this._block.pop();
  forDOM.push(...getStepNtoGoalBind(i, nextGoal, { n1: i - 1, n2: i - 1 }));

  this._goal = [1, 0];
  return forDOM;
}

export { getWaysToSolve3and4 };