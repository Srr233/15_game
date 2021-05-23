import init from './services/init.js';
import MAIN_CLASS from './services/constants/mainClass.js';
import { tieButtons } from './services/tieButtons.js';
import { tieTransferAndGame } from './services/handlers/tieTransfer/tieTransfer.js';

const wrapper = document.querySelector(MAIN_CLASS);

init(wrapper);
tieButtons();
tieTransferAndGame()

