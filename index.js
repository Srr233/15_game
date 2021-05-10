import autoSolving from './services/functionsFoUsing/auto-solving.js';
import solving from './services/functionsFoUsing/solving.js';
import transfer from './services/functionsFoUsing/transfer.js';
import init from './services/init.js';

window.autoSolving = autoSolving;
window.solving = solving;
window.transfer = transfer;

const wrapper = document.querySelector('.wrapper');

init(wrapper);

