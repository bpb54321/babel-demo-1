import {bp_tablet, bp_desktop} from './globalConstants';
export class LogMessage {
  constructor() {

  }

  log() {
    if (window.innerWidth > bp_tablet) {
      window.console.log('Window is bigger than bp_tablet');
    } else if (window.innerWidth > bp_desktop) {
      window.console.log('Window is bigger than bp_desktop');
    } else {
      window.console.log('Window is smaller than bp_tablet');
    }
  }
}
