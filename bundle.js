(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _flashMessage = require('./modules/flashMessage');

var _logMessage = require('./modules/logMessage');

var flash = new _flashMessage.FlashMessage("Hello from ES2015");
flash.display();

var logger = new _logMessage.LogMessage();
logger.log();

},{"./modules/flashMessage":2,"./modules/logMessage":4}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var FlashMessage = exports.FlashMessage = function () {
  function FlashMessage(message) {
    _classCallCheck(this, FlashMessage);

    this.message = message;
  }

  _createClass(FlashMessage, [{
    key: "display",
    value: function display() {
      alert(this.message);
    }
  }]);

  return FlashMessage;
}();

},{}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var bp_tablet = exports.bp_tablet = 768;
var bp_desktop = exports.bp_desktop = 960;

},{}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LogMessage = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _globalConstants = require('./globalConstants');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var LogMessage = exports.LogMessage = function () {
  function LogMessage() {
    _classCallCheck(this, LogMessage);
  }

  _createClass(LogMessage, [{
    key: 'log',
    value: function log() {
      if (window.innerWidth > _globalConstants.bp_tablet) {
        window.console.log('Window is bigger than bp_tablet');
      } else if (window.innerWidth > _globalConstants.bp_desktop) {
        window.console.log('Window is bigger than bp_desktop');
      } else {
        window.console.log('Window is smaller than bp_tablet');
      }
    }
  }]);

  return LogMessage;
}();

},{"./globalConstants":3}]},{},[1]);
