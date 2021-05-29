import { getStepNtoGoal } from "../getStepNtoGoal.js";

function getWaysToSolveLastN(nextGoal, i, twoLine) {
  const getStepNtoGoalBind = getStepNtoGoal.bind(this);
  const forDOM = [];
  let copyBlock;
  
  nextGoal = [3, 0];
  forDOM.push(...getStepNtoGoalBind(i, nextGoal, { n1: i, n2: i }));

  nextGoal = [3, 1];
  forDOM.push(...getStepNtoGoalBind(i, nextGoal, { n1: twoLine[twoLine.length - 2], n2: twoLine[twoLine.length - 2] }));


  nextGoal = [3, 2];
  forDOM.push(...getStepNtoGoalBind(i, nextGoal, { n1: twoLine[twoLine.length - 1], n2: twoLine[twoLine.length - 1] }));

  nextGoal = [2, 0];
  copyBlock = this._block.slice(4);
  this._block = [...this._block.slice(0, -3), copyBlock[1], copyBlock[2]];
  forDOM.push(...getStepNtoGoalBind(i, nextGoal, { n1: i, n2: i }));

  nextGoal = [3, 0];
  copyBlock = this._block.slice(4);
  this._block = [...this._block.slice(0, -3), copyBlock[1], copyBlock[2]];
  forDOM.push(...getStepNtoGoalBind(i, nextGoal, { n1: twoLine[twoLine.length - 2], n2: twoLine[twoLine.length - 2] }));

  nextGoal = [3, 1];
  copyBlock = this._block.slice(4);
  this._block = [...this._block.slice(0, -3), copyBlock[1], copyBlock[2]];
  forDOM.push(...getStepNtoGoalBind(i, nextGoal, { n1: twoLine[twoLine.length - 1], n2: twoLine[twoLine.length - 1] }));


  nextGoal = [1, 0];
  copyBlock = this._block.slice(4);
  this._block = [...this._block.slice(0, -3), copyBlock[1], copyBlock[2]];
  forDOM.push(...getStepNtoGoalBind(i, nextGoal, { n1: i, n2: i }));

  nextGoal = [2, 0];
  copyBlock = this._block.slice(4);
  this._block = [...this._block.slice(0, -3), copyBlock[1], copyBlock[2]];
  forDOM.push(...getStepNtoGoalBind(i, nextGoal, { n1: twoLine[twoLine.length - 2], n2: twoLine[twoLine.length - 2] }));

  nextGoal = [3, 0];
  copyBlock = this._block.slice(4);
  this._block = [...this._block.slice(0, -3), copyBlock[1], copyBlock[2]];
  forDOM.push(...getStepNtoGoalBind(i, nextGoal, { n1: twoLine[twoLine.length - 1], n2: twoLine[twoLine.length - 1] }));
  return forDOM;
}

export { getWaysToSolveLastN };