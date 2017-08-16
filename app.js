import {FlashMessage} from './modules/flashMessage';
import {LogMessage} from './modules/logMessage';

let flash = new FlashMessage("Hello from ES2015");
flash.display();

let logger = new LogMessage();
logger.log();
