import init from './services/init.js';
import mainClassGame from './services/constants/mainClass.js'
import solving from './services/functionsFoUsing/solving.js';
import transfer from './services/functionsFoUsing/transfer.js';
import autoSolving from './services/functionsFoUsing/auto-solving.js';

window.autoSolving = autoSolving;
window.solving = solving;
window.transfer = transfer;

const wrapper = document.querySelector(mainClassGame);

init(wrapper);

