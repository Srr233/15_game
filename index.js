import init from './services/init.js';
import mainClassGame from './services/constants/mainClass.js'
import solving from './services/functionsForUsing/solving.js';
import transfer from './services/functionsForUsing/transfer.js';
import autoSolving from './services/functionsForUsing/auto-solving.js';

window.autoSolving = autoSolving;
window.solving = solving;
window.transfer = transfer;

const wrapper = document.querySelector(mainClassGame);

init(wrapper);

