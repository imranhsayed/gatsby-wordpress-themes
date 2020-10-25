/*! elementor - v3.0.11 - 30-09-2020 */
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 823);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(152);

/***/ }),
/* 2 */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var _Object$defineProperty = __webpack_require__(1);

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    _Object$defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var _Object$create = __webpack_require__(135);

var setPrototypeOf = __webpack_require__(133);

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = _Object$create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var _Reflect$construct = __webpack_require__(101);

var getPrototypeOf = __webpack_require__(16);

var isNativeReflectConstruct = __webpack_require__(141);

var possibleConstructorReturn = __webpack_require__(167);

function _createSuper(Derived) {
  var hasNativeReflectConstruct = isNativeReflectConstruct();
  return function _createSuperInternal() {
    var Super = getPrototypeOf(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = getPrototypeOf(this).constructor;
      result = _Reflect$construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return possibleConstructorReturn(this, result);
  };
}

module.exports = _createSuper;

/***/ }),
/* 6 */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.6.11' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(8);
var core = __webpack_require__(6);
var ctx = __webpack_require__(31);
var hide = __webpack_require__(22);
var has = __webpack_require__(17);
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && has(exports, key)) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),
/* 8 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(69)('wks');
var uid = __webpack_require__(54);
var Symbol = __webpack_require__(8).Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(9);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),
/* 12 */,
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(76)('wks');
var uid = __webpack_require__(77);
var Symbol = __webpack_require__(18).Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(21)(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(11);
var IE8_DOM_DEFINE = __webpack_require__(110);
var toPrimitive = __webpack_require__(67);
var dP = Object.defineProperty;

exports.f = __webpack_require__(14) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

var _Object$getPrototypeOf = __webpack_require__(154);

var _Object$setPrototypeOf = __webpack_require__(111);

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = _Object$setPrototypeOf ? _Object$getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || _Object$getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),
/* 17 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),
/* 18 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(100);
var defined = __webpack_require__(65);
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(30);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(15);
var createDesc = __webpack_require__(42);
module.exports = __webpack_require__(14) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

var _typeof2 = _interopRequireDefault(__webpack_require__(47));

var _regenerator = _interopRequireDefault(__webpack_require__(83));

__webpack_require__(150);

__webpack_require__(118);

__webpack_require__(79);

__webpack_require__(271);

var _promise = _interopRequireDefault(__webpack_require__(137));

var _isArray = _interopRequireDefault(__webpack_require__(85));

__webpack_require__(66);

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(84));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(48));

var _createClass2 = _interopRequireDefault(__webpack_require__(3));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var _createSuper2 = _interopRequireDefault(__webpack_require__(5));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(28));

var _argsObject = _interopRequireDefault(__webpack_require__(223));

var CommandBase = /*#__PURE__*/function (_ArgsObject) {
  (0, _inherits2.default)(CommandBase, _ArgsObject);

  var _super = (0, _createSuper2.default)(CommandBase);

  (0, _createClass2.default)(CommandBase, null, [{
    key: "getInstanceType",
    value: function getInstanceType() {
      return 'CommandBase';
    }
    /**
     * Current component.
     *
     * @type {Component}
     */

  }]);

  /**
   * Function constructor().
   *
   * Create Commands Base.
   *
   * @param [args={}]
   * @param [commandsAPI={}]
   */
  function CommandBase(args) {
    var _this;

    var commandsAPI = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : $e.commands;
    (0, _classCallCheck2.default)(this, CommandBase);
    _this = _super.call(this, args); // Acknowledge self about which command it run.

    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "component", void 0);
    _this.currentCommand = commandsAPI.getCurrentLast(); // Assign instance of current component.

    _this.component = commandsAPI.getComponent(_this.currentCommand); // Who ever need do something before without `super` the constructor can use `initialize` method.

    _this.initialize(args); // Refresh args, maybe the changed via `initialize`.


    args = _this.args; // Validate args before run.

    _this.validateArgs(args);

    return _this;
  }
  /**
   * Function requireContainer().
   *
   * Validate `arg.container` & `arg.containers`.
   *
   * @param {{}} args
   *
   * @throws {Error}
   */


  (0, _createClass2.default)(CommandBase, [{
    key: "requireContainer",
    value: function requireContainer() {
      var _this2 = this;

      var args = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.args;

      if (!args.container && !args.containers) {
        throw Error('container or containers are required.');
      }

      if (args.container && args.containers) {
        throw Error('container and containers cannot go together please select one of them.');
      }

      var containers = args.containers || [args.container];
      containers.forEach(function (container) {
        _this2.requireArgumentInstance('container', elementorModules.editor.Container, {
          container: container
        });
      });
    }
    /**
     * Function initialize().
     *
     * Initialize command, called after construction.
     *
     * @param [args={}]
     */

  }, {
    key: "initialize",
    value: function initialize() {
      var args = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    } // eslint-disable-line no-unused-vars

    /**
     * Function validateArgs().
     *
     * Validate command arguments.
     *
     * @param [args={}]
     */

  }, {
    key: "validateArgs",
    value: function validateArgs() {
      var args = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    } // eslint-disable-line no-unused-vars

    /**
     * Function isDataChanged().
     *
     * Whether the editor needs to set change flag on/off.
     *
     * @returns {boolean}
     */

  }, {
    key: "isDataChanged",
    value: function isDataChanged() {
      return false;
    }
    /**
     * Function apply().
     *
     * Do the actual command.
     *
     * @param [args={}]
     *
     * @returns {*}
     */

  }, {
    key: "apply",
    value: function apply() {
      var args = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      // eslint-disable-line no-unused-vars
      elementorModules.ForceMethodImplementation();
    }
    /**
     * Function run().
     *
     * Run command with history & hooks.
     *
     * @returns {*}
     */

  }, {
    key: "run",
    value: function run() {
      var result; // For UI Hooks.

      this.onBeforeRun(this.args);

      try {
        // For Data hooks.
        this.onBeforeApply(this.args);
        result = this.apply(this.args);
      } catch (e) {
        this.onCatchApply(e); // Catch 'Hook-Break' that comes from hooks base.

        if (e instanceof $e.modules.HookBreak) {
          // Bypass.
          return false;
        }
      }

      return this.runAfter(result);
    }
  }, {
    key: "runAfter",
    value: function runAfter(result) {
      var _this3 = this;

      var onAfter = function onAfter(_result) {
        // Run Data hooks.
        _this3.onAfterApply(_this3.args, _result); // TODO: Create Command-Base for Command-Document and apply it on after.


        if (_this3.isDataChanged()) {
          $e.internal('document/save/set-is-modified', {
            status: true
          });
        } // For UI hooks.


        _this3.onAfterRun(_this3.args, _result);
      },
          asyncOnAfter = /*#__PURE__*/function () {
        var _ref = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee(_result) {
          var results, promises;
          return _regenerator.default.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  // Run Data hooks.
                  results = _this3.onAfterApply(_this3.args, _result), promises = (0, _isArray.default)(results) ? results.flat().filter(function (filtered) {
                    return filtered instanceof _promise.default;
                  }) : [];

                  if (!promises.length) {
                    _context.next = 4;
                    break;
                  }

                  _context.next = 4;
                  return _promise.default.all(promises);

                case 4:
                  if (_this3.isDataChanged()) {
                    // TODO: Create Command-Base for Command-Document and apply it on after.
                    $e.internal('document/save/set-is-modified', {
                      status: true
                    });
                  } // For UI hooks.


                  _this3.onAfterRun(_this3.args, _result);

                case 6:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee);
        }));

        return function asyncOnAfter(_x) {
          return _ref.apply(this, arguments);
        };
      }(); // TODO: Temp code determine if it's a jQuery deferred object.


      if (result && 'object' === (0, _typeof2.default)(result) && result.promise && result.then && result.fail) {
        result.fail(this.onCatchApply.bind(this));
        result.done(onAfter);
      } else if (result instanceof _promise.default) {
        // Override initial result ( promise ) to await onAfter promises, first!.
        return (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2() {
          return _regenerator.default.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  _context2.next = 2;
                  return result.catch(_this3.onCatchApply.bind(_this3));

                case 2:
                  _context2.next = 4;
                  return result.then(function (_result) {
                    return asyncOnAfter(_result);
                  });

                case 4:
                  return _context2.abrupt("return", result);

                case 5:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2);
        }))();
      } else {
        onAfter(result);
      }

      return result;
    }
    /**
     * Function onBeforeRun.
     *
     * Called before run().
     *
     * @param [args={}]
     */

  }, {
    key: "onBeforeRun",
    value: function onBeforeRun() {
      var args = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      $e.hooks.runUIBefore(this.currentCommand, args);
    }
    /**
     * Function onAfterRun.
     *
     * Called after run().
     *
     * @param [args={}]
     * @param [result={*}]
     */

  }, {
    key: "onAfterRun",
    value: function onAfterRun() {
      var args = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var result = arguments.length > 1 ? arguments[1] : undefined;
      $e.hooks.runUIAfter(this.currentCommand, args, result);
    }
    /**
     * Function onBeforeApply.
     *
     * Called before apply().
     *
     * @param [args={}]
     */

  }, {
    key: "onBeforeApply",
    value: function onBeforeApply() {
      var args = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      $e.hooks.runDataDependency(this.currentCommand, args);
    }
    /**
     * Function onAfterApply.
     *
     * Called after apply().
     *
     * @param [args={}]
     * @param [result={*}]
     */

  }, {
    key: "onAfterApply",
    value: function onAfterApply() {
      var args = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var result = arguments.length > 1 ? arguments[1] : undefined;
      return $e.hooks.runDataAfter(this.currentCommand, args, result);
    }
    /**
     * Function onCatchApply.
     *
     * Called after apply() failed.
     *
     * @param {Error} e
     */

  }, {
    key: "onCatchApply",
    value: function onCatchApply(e) {
      $e.hooks.runDataCatch(this.currentCommand, this.args, e);
      elementorCommon.helpers.consoleError(e);
      $e.hooks.runUICatch(this.currentCommand, this.args, e);
    }
  }]);
  return CommandBase;
}(_argsObject.default);

exports.default = CommandBase;

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

var _Object$getOwnPropertyDescriptor = __webpack_require__(117);

var _Reflect$get = __webpack_require__(185);

var superPropBase = __webpack_require__(188);

function _get(target, property, receiver) {
  if (typeof Reflect !== "undefined" && _Reflect$get) {
    module.exports = _get = _Reflect$get;
  } else {
    module.exports = _get = function _get(target, property, receiver) {
      var base = superPropBase(target, property);
      if (!base) return;

      var desc = _Object$getOwnPropertyDescriptor(base, property);

      if (desc.get) {
        return desc.get.call(receiver);
      }

      return desc.value;
    };
  }

  return _get(target, property, receiver || target);
}

module.exports = _get;

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(201);

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 22.1.3.8 Array.prototype.find(predicate, thisArg = undefined)
var $export = __webpack_require__(37);
var $find = __webpack_require__(189)(5);
var KEY = 'find';
var forced = true;
// Shouldn't skip holes
if (KEY in []) Array(1)[KEY](function () { forced = false; });
$export($export.P + $export.F * forced, 'Array', {
  find: function find(callbackfn /* , that = undefined */) {
    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});
__webpack_require__(89)(KEY);


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(35)(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

var _Object$defineProperty = __webpack_require__(1);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _Object$defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(49);
var createDesc = __webpack_require__(106);
module.exports = __webpack_require__(27) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(34);
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(65);
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),
/* 35 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(112);
var enumBugKeys = __webpack_require__(72);

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(18);
var core = __webpack_require__(57);
var hide = __webpack_require__(29);
var redefine = __webpack_require__(39);
var ctx = __webpack_require__(80);
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
  var key, own, out, exp;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    // export native or passed
    out = (own ? target : source)[key];
    // bind timers to global for call from export context
    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // extend global
    if (target) redefine(target, key, out, type & $export.U);
    // export
    if (exports[key] != out) hide(exports, key, exp);
    if (IS_PROTO && expProto[key] != out) expProto[key] = out;
  }
};
global.core = core;
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

var _Object$getOwnPropertyDescriptor = __webpack_require__(117);

var _Object$defineProperty = __webpack_require__(1);

var _typeof = __webpack_require__(47);

var _WeakMap = __webpack_require__(263);

function _getRequireWildcardCache() {
  if (typeof _WeakMap !== "function") return null;
  var cache = new _WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = _Object$defineProperty && _Object$getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? _Object$getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        _Object$defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(18);
var hide = __webpack_require__(29);
var has = __webpack_require__(64);
var SRC = __webpack_require__(77)('src');
var $toString = __webpack_require__(147);
var TO_STRING = 'toString';
var TPL = ('' + $toString).split(TO_STRING);

__webpack_require__(57).inspectSource = function (it) {
  return $toString.call(it);
};

(module.exports = function (O, key, val, safe) {
  var isFunction = typeof val == 'function';
  if (isFunction) has(val, 'name') || hide(val, 'name', key);
  if (O[key] === val) return;
  if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
  if (O === global) {
    O[key] = val;
  } else if (!safe) {
    delete O[key];
    hide(O, key, val);
  } else if (O[key]) {
    O[key] = val;
  } else {
    hide(O, key, val);
  }
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, TO_STRING, function toString() {
  return typeof this == 'function' && this[SRC] || $toString.call(this);
});


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(49).f;
var FProto = Function.prototype;
var nameRE = /^\s*function ([^ (]*)/;
var NAME = 'name';

// 19.2.4.2 name
NAME in FProto || __webpack_require__(27) && dP(FProto, NAME, {
  configurable: true,
  get: function () {
    try {
      return ('' + this).match(nameRE)[1];
    } catch (e) {
      return '';
    }
  }
});


/***/ }),
/* 41 */,
/* 42 */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),
/* 43 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),
/* 44 */
/***/ (function(module, exports) {

module.exports = true;


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(59);
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),
/* 46 */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

var _Symbol$iterator = __webpack_require__(148);

var _Symbol = __webpack_require__(107);

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof _Symbol === "function" && typeof _Symbol$iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),
/* 48 */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(20);
var IE8_DOM_DEFINE = __webpack_require__(131);
var toPrimitive = __webpack_require__(124);
var dP = Object.defineProperty;

exports.f = __webpack_require__(27) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),
/* 50 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__(46);
var createDesc = __webpack_require__(42);
var toIObject = __webpack_require__(19);
var toPrimitive = __webpack_require__(67);
var has = __webpack_require__(17);
var IE8_DOM_DEFINE = __webpack_require__(110);
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(14) ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(11);
var dPs = __webpack_require__(132);
var enumBugKeys = __webpack_require__(72);
var IE_PROTO = __webpack_require__(68)('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(87)('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(129).appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(15).f;
var has = __webpack_require__(17);
var TAG = __webpack_require__(10)('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),
/* 54 */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),
/* 55 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(226);

/***/ }),
/* 57 */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.6.11' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__(169)(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(102)(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),
/* 59 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var anObject = __webpack_require__(20);
var toObject = __webpack_require__(99);
var toLength = __webpack_require__(45);
var toInteger = __webpack_require__(59);
var advanceStringIndex = __webpack_require__(108);
var regExpExec = __webpack_require__(97);
var max = Math.max;
var min = Math.min;
var floor = Math.floor;
var SUBSTITUTION_SYMBOLS = /\$([$&`']|\d\d?|<[^>]*>)/g;
var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&`']|\d\d?)/g;

var maybeToString = function (it) {
  return it === undefined ? it : String(it);
};

// @@replace logic
__webpack_require__(98)('replace', 2, function (defined, REPLACE, $replace, maybeCallNative) {
  return [
    // `String.prototype.replace` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.replace
    function replace(searchValue, replaceValue) {
      var O = defined(this);
      var fn = searchValue == undefined ? undefined : searchValue[REPLACE];
      return fn !== undefined
        ? fn.call(searchValue, O, replaceValue)
        : $replace.call(String(O), searchValue, replaceValue);
    },
    // `RegExp.prototype[@@replace]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@replace
    function (regexp, replaceValue) {
      var res = maybeCallNative($replace, regexp, this, replaceValue);
      if (res.done) return res.value;

      var rx = anObject(regexp);
      var S = String(this);
      var functionalReplace = typeof replaceValue === 'function';
      if (!functionalReplace) replaceValue = String(replaceValue);
      var global = rx.global;
      if (global) {
        var fullUnicode = rx.unicode;
        rx.lastIndex = 0;
      }
      var results = [];
      while (true) {
        var result = regExpExec(rx, S);
        if (result === null) break;
        results.push(result);
        if (!global) break;
        var matchStr = String(result[0]);
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
      }
      var accumulatedResult = '';
      var nextSourcePosition = 0;
      for (var i = 0; i < results.length; i++) {
        result = results[i];
        var matched = String(result[0]);
        var position = max(min(toInteger(result.index), S.length), 0);
        var captures = [];
        // NOTE: This is equivalent to
        //   captures = result.slice(1).map(maybeToString)
        // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
        // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
        // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.
        for (var j = 1; j < result.length; j++) captures.push(maybeToString(result[j]));
        var namedCaptures = result.groups;
        if (functionalReplace) {
          var replacerArgs = [matched].concat(captures, position, S);
          if (namedCaptures !== undefined) replacerArgs.push(namedCaptures);
          var replacement = String(replaceValue.apply(undefined, replacerArgs));
        } else {
          replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
        }
        if (position >= nextSourcePosition) {
          accumulatedResult += S.slice(nextSourcePosition, position) + replacement;
          nextSourcePosition = position + matched.length;
        }
      }
      return accumulatedResult + S.slice(nextSourcePosition);
    }
  ];

    // https://tc39.github.io/ecma262/#sec-getsubstitution
  function getSubstitution(matched, str, position, captures, namedCaptures, replacement) {
    var tailPos = position + matched.length;
    var m = captures.length;
    var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;
    if (namedCaptures !== undefined) {
      namedCaptures = toObject(namedCaptures);
      symbols = SUBSTITUTION_SYMBOLS;
    }
    return $replace.call(replacement, symbols, function (match, ch) {
      var capture;
      switch (ch.charAt(0)) {
        case '$': return '$';
        case '&': return matched;
        case '`': return str.slice(0, position);
        case "'": return str.slice(tailPos);
        case '<':
          capture = namedCaptures[ch.slice(1, -1)];
          break;
        default: // \d\d?
          var n = +ch;
          if (n === 0) return match;
          if (n > m) {
            var f = floor(n / 10);
            if (f === 0) return match;
            if (f <= m) return captures[f - 1] === undefined ? ch.charAt(1) : captures[f - 1] + ch.charAt(1);
            return match;
          }
          capture = captures[n - 1];
      }
      return capture === undefined ? '' : capture;
    });
  }
});


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(171);
var global = __webpack_require__(8);
var hide = __webpack_require__(22);
var Iterators = __webpack_require__(33);
var TO_STRING_TAG = __webpack_require__(10)('toStringTag');

var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
  'TextTrackList,TouchList').split(',');

for (var i = 0; i < DOMIterables.length; i++) {
  var NAME = DOMIterables[i];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(10);


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(17);
var toObject = __webpack_require__(32);
var IE_PROTO = __webpack_require__(68)('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),
/* 64 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),
/* 65 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }
  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunction.displayName = define(
    GeneratorFunctionPrototype,
    toStringTagSymbol,
    "GeneratorFunction"
  );

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      define(prototype, method, function(arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  define(Gp, toStringTagSymbol, "Generator");

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : undefined
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(9);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(69)('keys');
var uid = __webpack_require__(54);
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(6);
var global = __webpack_require__(8);
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__(44) ? 'pure' : 'global',
  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
});


/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(71);
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),
/* 71 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),
/* 72 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(8);
var core = __webpack_require__(6);
var LIBRARY = __webpack_require__(44);
var wksExt = __webpack_require__(62);
var defineProperty = __webpack_require__(15).f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};


/***/ }),
/* 74 */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__(54)('meta');
var isObject = __webpack_require__(9);
var has = __webpack_require__(17);
var setDesc = __webpack_require__(15).f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__(21)(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};


/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(57);
var global = __webpack_require__(18);
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__(114) ? 'pure' : 'global',
  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
});


/***/ }),
/* 77 */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__(7);
var core = __webpack_require__(6);
var fails = __webpack_require__(21);
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};


/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.3.6 Object.prototype.toString()
var classof = __webpack_require__(116);
var test = {};
test[__webpack_require__(13)('toStringTag')] = 'z';
if (test + '' != '[object z]') {
  __webpack_require__(39)(Object.prototype, 'toString', function toString() {
    return '[object ' + classof(this) + ']';
  }, true);
}


/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(95);
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isRegExp = __webpack_require__(123);
var anObject = __webpack_require__(20);
var speciesConstructor = __webpack_require__(180);
var advanceStringIndex = __webpack_require__(108);
var toLength = __webpack_require__(45);
var callRegExpExec = __webpack_require__(97);
var regexpExec = __webpack_require__(92);
var fails = __webpack_require__(35);
var $min = Math.min;
var $push = [].push;
var $SPLIT = 'split';
var LENGTH = 'length';
var LAST_INDEX = 'lastIndex';
var MAX_UINT32 = 0xffffffff;

// babel-minify transpiles RegExp('x', 'y') -> /x/y and it causes SyntaxError
var SUPPORTS_Y = !fails(function () { RegExp(MAX_UINT32, 'y'); });

// @@split logic
__webpack_require__(98)('split', 2, function (defined, SPLIT, $split, maybeCallNative) {
  var internalSplit;
  if (
    'abbc'[$SPLIT](/(b)*/)[1] == 'c' ||
    'test'[$SPLIT](/(?:)/, -1)[LENGTH] != 4 ||
    'ab'[$SPLIT](/(?:ab)*/)[LENGTH] != 2 ||
    '.'[$SPLIT](/(.?)(.?)/)[LENGTH] != 4 ||
    '.'[$SPLIT](/()()/)[LENGTH] > 1 ||
    ''[$SPLIT](/.?/)[LENGTH]
  ) {
    // based on es5-shim implementation, need to rework it
    internalSplit = function (separator, limit) {
      var string = String(this);
      if (separator === undefined && limit === 0) return [];
      // If `separator` is not a regex, use native split
      if (!isRegExp(separator)) return $split.call(string, separator, limit);
      var output = [];
      var flags = (separator.ignoreCase ? 'i' : '') +
                  (separator.multiline ? 'm' : '') +
                  (separator.unicode ? 'u' : '') +
                  (separator.sticky ? 'y' : '');
      var lastLastIndex = 0;
      var splitLimit = limit === undefined ? MAX_UINT32 : limit >>> 0;
      // Make `global` and avoid `lastIndex` issues by working with a copy
      var separatorCopy = new RegExp(separator.source, flags + 'g');
      var match, lastIndex, lastLength;
      while (match = regexpExec.call(separatorCopy, string)) {
        lastIndex = separatorCopy[LAST_INDEX];
        if (lastIndex > lastLastIndex) {
          output.push(string.slice(lastLastIndex, match.index));
          if (match[LENGTH] > 1 && match.index < string[LENGTH]) $push.apply(output, match.slice(1));
          lastLength = match[0][LENGTH];
          lastLastIndex = lastIndex;
          if (output[LENGTH] >= splitLimit) break;
        }
        if (separatorCopy[LAST_INDEX] === match.index) separatorCopy[LAST_INDEX]++; // Avoid an infinite loop
      }
      if (lastLastIndex === string[LENGTH]) {
        if (lastLength || !separatorCopy.test('')) output.push('');
      } else output.push(string.slice(lastLastIndex));
      return output[LENGTH] > splitLimit ? output.slice(0, splitLimit) : output;
    };
  // Chakra, V8
  } else if ('0'[$SPLIT](undefined, 0)[LENGTH]) {
    internalSplit = function (separator, limit) {
      return separator === undefined && limit === 0 ? [] : $split.call(this, separator, limit);
    };
  } else {
    internalSplit = $split;
  }

  return [
    // `String.prototype.split` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.split
    function split(separator, limit) {
      var O = defined(this);
      var splitter = separator == undefined ? undefined : separator[SPLIT];
      return splitter !== undefined
        ? splitter.call(separator, O, limit)
        : internalSplit.call(String(O), separator, limit);
    },
    // `RegExp.prototype[@@split]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@split
    //
    // NOTE: This cannot be properly polyfilled in engines that don't support
    // the 'y' flag.
    function (regexp, limit) {
      var res = maybeCallNative(internalSplit, regexp, this, limit, internalSplit !== $split);
      if (res.done) return res.value;

      var rx = anObject(regexp);
      var S = String(this);
      var C = speciesConstructor(rx, RegExp);

      var unicodeMatching = rx.unicode;
      var flags = (rx.ignoreCase ? 'i' : '') +
                  (rx.multiline ? 'm' : '') +
                  (rx.unicode ? 'u' : '') +
                  (SUPPORTS_Y ? 'y' : 'g');

      // ^(? + rx + ) is needed, in combination with some S slicing, to
      // simulate the 'y' flag.
      var splitter = new C(SUPPORTS_Y ? rx : '^(?:' + rx.source + ')', flags);
      var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
      if (lim === 0) return [];
      if (S.length === 0) return callRegExpExec(splitter, S) === null ? [S] : [];
      var p = 0;
      var q = 0;
      var A = [];
      while (q < S.length) {
        splitter.lastIndex = SUPPORTS_Y ? q : 0;
        var z = callRegExpExec(splitter, SUPPORTS_Y ? S : S.slice(q));
        var e;
        if (
          z === null ||
          (e = $min(toLength(splitter.lastIndex + (SUPPORTS_Y ? 0 : q)), S.length)) === p
        ) {
          q = advanceStringIndex(S, q, unicodeMatching);
        } else {
          A.push(S.slice(p, q));
          if (A.length === lim) return A;
          for (var i = 1; i <= z.length - 1; i++) {
            A.push(z[i]);
            if (A.length === lim) return A;
          }
          q = p = e;
        }
      }
      A.push(S.slice(p));
      return A;
    }
  ];
});


/***/ }),
/* 82 */,
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(66);


/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

var _Promise = __webpack_require__(137);

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    _Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new _Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

module.exports = _asyncToGenerator;

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(220);

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

__webpack_require__(60);

var _keys = _interopRequireDefault(__webpack_require__(25));

__webpack_require__(81);

var _values = _interopRequireDefault(__webpack_require__(56));

var _slicedToArray2 = _interopRequireDefault(__webpack_require__(105));

var _entries = _interopRequireDefault(__webpack_require__(91));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(3));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var _createSuper2 = _interopRequireDefault(__webpack_require__(5));

var ComponentBase = /*#__PURE__*/function (_elementorModules$Mod) {
  (0, _inherits2.default)(ComponentBase, _elementorModules$Mod);

  var _super = (0, _createSuper2.default)(ComponentBase);

  function ComponentBase() {
    (0, _classCallCheck2.default)(this, ComponentBase);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(ComponentBase, [{
    key: "__construct",
    value: function __construct() {
      var args = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      if (args.manager) {
        this.manager = args.manager;
      }

      this.commands = this.defaultCommands();
      this.commandsInternal = this.defaultCommandsInternal();
      this.hooks = this.defaultHooks();
      this.routes = this.defaultRoutes();
      this.tabs = this.defaultTabs();
      this.shortcuts = this.defaultShortcuts();
      this.utils = this.defaultUtils();
      this.data = this.defaultData();
      this.defaultRoute = '';
      this.currentTab = '';
    }
  }, {
    key: "registerAPI",
    value: function registerAPI() {
      var _this = this;

      (0, _entries.default)(this.getTabs()).forEach(function (tab) {
        return _this.registerTabRoute(tab[0]);
      });
      (0, _entries.default)(this.getRoutes()).forEach(function (_ref) {
        var _ref2 = (0, _slicedToArray2.default)(_ref, 2),
            route = _ref2[0],
            callback = _ref2[1];

        return _this.registerRoute(route, callback);
      });
      (0, _entries.default)(this.getCommands()).forEach(function (_ref3) {
        var _ref4 = (0, _slicedToArray2.default)(_ref3, 2),
            command = _ref4[0],
            callback = _ref4[1];

        return _this.registerCommand(command, callback);
      });
      (0, _entries.default)(this.getCommandsInternal()).forEach(function (_ref5) {
        var _ref6 = (0, _slicedToArray2.default)(_ref5, 2),
            command = _ref6[0],
            callback = _ref6[1];

        return _this.registerCommandInternal(command, callback);
      });
      (0, _values.default)(this.getHooks()).forEach(function (instance) {
        return _this.registerHook(instance);
      });
      (0, _entries.default)(this.getData()).forEach(function (_ref7) {
        var _ref8 = (0, _slicedToArray2.default)(_ref7, 2),
            command = _ref8[0],
            callback = _ref8[1];

        return _this.registerData(command, callback);
      });
    }
    /**
     * @returns {string}
     */

  }, {
    key: "getNamespace",
    value: function getNamespace() {
      elementorModules.ForceMethodImplementation();
    }
  }, {
    key: "getRootContainer",
    value: function getRootContainer() {
      var parts = this.getNamespace().split('/');
      return parts[0];
    }
  }, {
    key: "defaultTabs",
    value: function defaultTabs() {
      return {};
    }
  }, {
    key: "defaultRoutes",
    value: function defaultRoutes() {
      return {};
    }
  }, {
    key: "defaultCommands",
    value: function defaultCommands() {
      return {};
    }
  }, {
    key: "defaultCommandsInternal",
    value: function defaultCommandsInternal() {
      return {};
    }
  }, {
    key: "defaultHooks",
    value: function defaultHooks() {
      return {};
    }
  }, {
    key: "defaultShortcuts",
    value: function defaultShortcuts() {
      return {};
    }
  }, {
    key: "defaultUtils",
    value: function defaultUtils() {
      return {};
    }
  }, {
    key: "defaultData",
    value: function defaultData() {
      return {};
    }
  }, {
    key: "getCommands",
    value: function getCommands() {
      return this.commands;
    }
  }, {
    key: "getCommandsInternal",
    value: function getCommandsInternal() {
      return this.commandsInternal;
    }
  }, {
    key: "getHooks",
    value: function getHooks() {
      return this.hooks;
    }
  }, {
    key: "getRoutes",
    value: function getRoutes() {
      return this.routes;
    }
  }, {
    key: "getTabs",
    value: function getTabs() {
      return this.tabs;
    }
  }, {
    key: "getShortcuts",
    value: function getShortcuts() {
      return this.shortcuts;
    }
  }, {
    key: "getData",
    value: function getData() {
      return this.data;
    }
  }, {
    key: "registerCommand",
    value: function registerCommand(command, callback) {
      $e.commands.register(this, command, callback);
    }
    /**
     * @param {HookBase} instance
     */

  }, {
    key: "registerHook",
    value: function registerHook(instance) {
      return instance.register();
    }
  }, {
    key: "registerCommandInternal",
    value: function registerCommandInternal(command, callback) {
      $e.commandsInternal.register(this, command, callback);
    }
  }, {
    key: "registerRoute",
    value: function registerRoute(route, callback) {
      $e.routes.register(this, route, callback);
    }
  }, {
    key: "registerData",
    value: function registerData(command, callback) {
      $e.data.register(this, command, callback);
    }
  }, {
    key: "unregisterRoute",
    value: function unregisterRoute(route) {
      $e.routes.unregister(this, route);
    }
  }, {
    key: "registerTabRoute",
    value: function registerTabRoute(tab) {
      var _this2 = this;

      this.registerRoute(tab, function (args) {
        return _this2.activateTab(tab, args);
      });
    }
  }, {
    key: "dependency",
    value: function dependency() {
      return true;
    }
  }, {
    key: "open",
    value: function open() {
      return true;
    }
  }, {
    key: "close",
    value: function close() {
      if (!this.isOpen) {
        return false;
      }

      this.isOpen = false;
      this.inactivate();
      $e.routes.clearCurrent(this.getNamespace());
      $e.routes.clearHistory(this.getRootContainer());
      return true;
    }
  }, {
    key: "activate",
    value: function activate() {
      $e.components.activate(this.getNamespace());
    }
  }, {
    key: "inactivate",
    value: function inactivate() {
      $e.components.inactivate(this.getNamespace());
    }
  }, {
    key: "isActive",
    value: function isActive() {
      return $e.components.isActive(this.getNamespace());
    }
  }, {
    key: "onRoute",
    value: function onRoute(route) {
      this.toggleRouteClass(route, true);
      this.toggleHistoryClass();
      this.activate();
      this.trigger('route/open', route);
    }
  }, {
    key: "onCloseRoute",
    value: function onCloseRoute(route) {
      this.toggleRouteClass(route, false);
      this.inactivate();
      this.trigger('route/close', route);
    }
  }, {
    key: "setDefaultRoute",
    value: function setDefaultRoute(route) {
      this.defaultRoute = this.getNamespace() + '/' + route;
    }
  }, {
    key: "getDefaultRoute",
    value: function getDefaultRoute() {
      return this.defaultRoute;
    }
  }, {
    key: "removeTab",
    value: function removeTab(tab) {
      delete this.tabs[tab];
      this.unregisterRoute(tab);
    }
  }, {
    key: "hasTab",
    value: function hasTab(tab) {
      return !!this.tabs[tab];
    }
  }, {
    key: "addTab",
    value: function addTab(tab, args, position) {
      var _this3 = this;

      this.tabs[tab] = args; // It can be 0.

      if ('undefined' !== typeof position) {
        var newTabs = {};
        var ids = (0, _keys.default)(this.tabs); // Remove new tab

        ids.pop(); // Add it to position.

        ids.splice(position, 0, tab);
        ids.forEach(function (id) {
          newTabs[id] = _this3.tabs[id];
        });
        this.tabs = newTabs;
      }

      this.registerTabRoute(tab);
    }
  }, {
    key: "getTabsWrapperSelector",
    value: function getTabsWrapperSelector() {
      return '';
    }
  }, {
    key: "getTabRoute",
    value: function getTabRoute(tab) {
      return this.getNamespace() + '/' + tab;
    }
  }, {
    key: "renderTab",
    value: function renderTab(tab) {} // eslint-disable-line

  }, {
    key: "activateTab",
    value: function activateTab(tab, args) {
      var _this4 = this;

      this.currentTab = tab;
      this.renderTab(tab, args);
      jQuery(this.getTabsWrapperSelector() + ' .elementor-component-tab').off('click').on('click', function (event) {
        $e.route(_this4.getTabRoute(event.currentTarget.dataset.tab), args);
      }).removeClass('elementor-active').filter('[data-tab="' + tab + '"]').addClass('elementor-active');
    }
  }, {
    key: "getActiveTabConfig",
    value: function getActiveTabConfig() {
      return this.tabs[this.currentTab] || {};
    }
  }, {
    key: "getBodyClass",
    value: function getBodyClass(route) {
      return 'e-route-' + route.replace(/\//g, '-');
    }
    /**
     * If command includes uppercase character convert it to lowercase and add `-`.
     * e.g: `CopyAll` is converted to `copy-all`.
     */

  }, {
    key: "normalizeCommandName",
    value: function normalizeCommandName(commandName) {
      return commandName.replace(/[A-Z]/g, function (match, offset) {
        return (offset > 0 ? '-' : '') + match.toLowerCase();
      });
    }
  }, {
    key: "importCommands",
    value: function importCommands(commandsFromImport) {
      var _this5 = this;

      var commands = {}; // Convert `Commands` to `ComponentBase` workable format.

      (0, _entries.default)(commandsFromImport).forEach(function (_ref9) {
        var _ref10 = (0, _slicedToArray2.default)(_ref9, 2),
            className = _ref10[0],
            Class = _ref10[1];

        var command = _this5.normalizeCommandName(className);

        commands[command] = function (args) {
          return new Class(args).run();
        }; // TODO: Temporary code, remove after merge with 'require-commands-base' branch.
        // should not return callback, but Class or Instance without run ( gain performance ).


        $e.commands.classes[_this5.getNamespace() + '/' + command] = Class;
      });
      return commands;
    }
  }, {
    key: "importHooks",
    value: function importHooks(hooksFromImport) {
      var hooks = {};

      for (var key in hooksFromImport) {
        var hook = new hooksFromImport[key]();
        hooks[hook.getId()] = hook;
      }

      return hooks;
    }
  }, {
    key: "toggleRouteClass",
    value: function toggleRouteClass(route, state) {
      elementorCommon.elements.$body.toggleClass(this.getBodyClass(route), state);
    }
  }, {
    key: "toggleHistoryClass",
    value: function toggleHistoryClass() {
      elementorCommon.elements.$body.toggleClass('e-routes-has-history', !!$e.routes.getHistory(this.getRootContainer()).length);
    }
  }]);
  return ComponentBase;
}(elementorModules.Module);

exports.default = ComponentBase;

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(9);
var document = __webpack_require__(8).document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(22);


/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

// 22.1.3.31 Array.prototype[@@unscopables]
var UNSCOPABLES = __webpack_require__(13)('unscopables');
var ArrayProto = Array.prototype;
if (ArrayProto[UNSCOPABLES] == undefined) __webpack_require__(29)(ArrayProto, UNSCOPABLES, {});
module.exports = function (key) {
  ArrayProto[UNSCOPABLES][key] = true;
};


/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(31);
var call = __webpack_require__(143);
var isArrayIter = __webpack_require__(144);
var anObject = __webpack_require__(11);
var toLength = __webpack_require__(70);
var getIterFn = __webpack_require__(115);
var BREAK = {};
var RETURN = {};
var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
  var iterFn = ITERATOR ? function () { return iterable; } : getIterFn(iterable);
  var f = ctx(fn, that, entries ? 2 : 1);
  var index = 0;
  var length, step, iterator, result;
  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
  // fast case for arrays with default iterator
  if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {
    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if (result === BREAK || result === RETURN) return result;
  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
    result = call(iterator, f, step.value, entries);
    if (result === BREAK || result === RETURN) return result;
  }
};
exports.BREAK = BREAK;
exports.RETURN = RETURN;


/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(269);

/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var regexpFlags = __webpack_require__(109);

var nativeExec = RegExp.prototype.exec;
// This always refers to the native implementation, because the
// String#replace polyfill uses ./fix-regexp-well-known-symbol-logic.js,
// which loads this file before patching the method.
var nativeReplace = String.prototype.replace;

var patchedExec = nativeExec;

var LAST_INDEX = 'lastIndex';

var UPDATES_LAST_INDEX_WRONG = (function () {
  var re1 = /a/,
      re2 = /b*/g;
  nativeExec.call(re1, 'a');
  nativeExec.call(re2, 'a');
  return re1[LAST_INDEX] !== 0 || re2[LAST_INDEX] !== 0;
})();

// nonparticipating capturing group, copied from es5-shim's String#split patch.
var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;

var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED;

if (PATCH) {
  patchedExec = function exec(str) {
    var re = this;
    var lastIndex, reCopy, match, i;

    if (NPCG_INCLUDED) {
      reCopy = new RegExp('^' + re.source + '$(?!\\s)', regexpFlags.call(re));
    }
    if (UPDATES_LAST_INDEX_WRONG) lastIndex = re[LAST_INDEX];

    match = nativeExec.call(re, str);

    if (UPDATES_LAST_INDEX_WRONG && match) {
      re[LAST_INDEX] = re.global ? match.index + match[0].length : lastIndex;
    }
    if (NPCG_INCLUDED && match && match.length > 1) {
      // Fix browsers whose `exec` methods don't consistently return `undefined`
      // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
      // eslint-disable-next-line no-loop-func
      nativeReplace.call(match[0], reCopy, function () {
        for (i = 1; i < arguments.length - 2; i++) {
          if (arguments[i] === undefined) match[i] = undefined;
        }
      });
    }

    return match;
  };
}

module.exports = patchedExec;


/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(55);
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__(112);
var hiddenKeys = __webpack_require__(72).concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),
/* 95 */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),
/* 96 */
/***/ (function(module, exports) {



/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var classof = __webpack_require__(116);
var builtinExec = RegExp.prototype.exec;

 // `RegExpExec` abstract operation
// https://tc39.github.io/ecma262/#sec-regexpexec
module.exports = function (R, S) {
  var exec = R.exec;
  if (typeof exec === 'function') {
    var result = exec.call(R, S);
    if (typeof result !== 'object') {
      throw new TypeError('RegExp exec method returned something other than an Object or null');
    }
    return result;
  }
  if (classof(R) !== 'RegExp') {
    throw new TypeError('RegExp#exec called on incompatible receiver');
  }
  return builtinExec.call(R, S);
};


/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

__webpack_require__(196);
var redefine = __webpack_require__(39);
var hide = __webpack_require__(29);
var fails = __webpack_require__(35);
var defined = __webpack_require__(43);
var wks = __webpack_require__(13);
var regexpExec = __webpack_require__(92);

var SPECIES = wks('species');

var REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function () {
  // #replace needs built-in support for named groups.
  // #match works fine because it just return the exec results, even if it has
  // a "grops" property.
  var re = /./;
  re.exec = function () {
    var result = [];
    result.groups = { a: '7' };
    return result;
  };
  return ''.replace(re, '$<a>') !== '7';
});

var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = (function () {
  // Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
  var re = /(?:)/;
  var originalExec = re.exec;
  re.exec = function () { return originalExec.apply(this, arguments); };
  var result = 'ab'.split(re);
  return result.length === 2 && result[0] === 'a' && result[1] === 'b';
})();

module.exports = function (KEY, length, exec) {
  var SYMBOL = wks(KEY);

  var DELEGATES_TO_SYMBOL = !fails(function () {
    // String methods call symbol-named RegEp methods
    var O = {};
    O[SYMBOL] = function () { return 7; };
    return ''[KEY](O) != 7;
  });

  var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL ? !fails(function () {
    // Symbol-named RegExp methods call .exec
    var execCalled = false;
    var re = /a/;
    re.exec = function () { execCalled = true; return null; };
    if (KEY === 'split') {
      // RegExp[@@split] doesn't call the regex's exec method, but first creates
      // a new one. We need to return the patched regex when creating the new one.
      re.constructor = {};
      re.constructor[SPECIES] = function () { return re; };
    }
    re[SYMBOL]('');
    return !execCalled;
  }) : undefined;

  if (
    !DELEGATES_TO_SYMBOL ||
    !DELEGATES_TO_EXEC ||
    (KEY === 'replace' && !REPLACE_SUPPORTS_NAMED_GROUPS) ||
    (KEY === 'split' && !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC)
  ) {
    var nativeRegExpMethod = /./[SYMBOL];
    var fns = exec(
      defined,
      SYMBOL,
      ''[KEY],
      function maybeCallNative(nativeMethod, regexp, str, arg2, forceStringMethod) {
        if (regexp.exec === regexpExec) {
          if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
            // The native String method already delegates to @@method (this
            // polyfilled function), leasing to infinite recursion.
            // We avoid it by directly calling the native @@method method.
            return { done: true, value: nativeRegExpMethod.call(regexp, str, arg2) };
          }
          return { done: true, value: nativeMethod.call(str, regexp, arg2) };
        }
        return { done: false };
      }
    );
    var strfn = fns[0];
    var rxfn = fns[1];

    redefine(String.prototype, KEY, strfn);
    hide(RegExp.prototype, SYMBOL, length == 2
      // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
      // 21.2.5.11 RegExp.prototype[@@split](string, limit)
      ? function (string, arg) { return rxfn.call(string, this, arg); }
      // 21.2.5.6 RegExp.prototype[@@match](string)
      // 21.2.5.9 RegExp.prototype[@@search](string)
      : function (string) { return rxfn.call(string, this); }
    );
  }
};


/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(43);
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(55);
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(164);

/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(44);
var $export = __webpack_require__(7);
var redefine = __webpack_require__(88);
var hide = __webpack_require__(22);
var Iterators = __webpack_require__(33);
var $iterCreate = __webpack_require__(170);
var setToStringTag = __webpack_require__(53);
var getPrototypeOf = __webpack_require__(63);
var ITERATOR = __webpack_require__(10)('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(121);
var defined = __webpack_require__(43);
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(55);
var TAG = __webpack_require__(10)('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__(247);

var iterableToArrayLimit = __webpack_require__(248);

var unsupportedIterableToArray = __webpack_require__(193);

var nonIterableRest = __webpack_require__(251);

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || unsupportedIterableToArray(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray;

/***/ }),
/* 106 */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(173);

/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var at = __webpack_require__(146)(true);

 // `AdvanceStringIndex` abstract operation
// https://tc39.github.io/ecma262/#sec-advancestringindex
module.exports = function (S, index, unicode) {
  return index + (unicode ? at(S, index).length : 1);
};


/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 21.2.5.3 get RegExp.prototype.flags
var anObject = __webpack_require__(20);
module.exports = function () {
  var that = anObject(this);
  var result = '';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.unicode) result += 'u';
  if (that.sticky) result += 'y';
  return result;
};


/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(14) && !__webpack_require__(21)(function () {
  return Object.defineProperty(__webpack_require__(87)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(157);

/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(17);
var toIObject = __webpack_require__(19);
var arrayIndexOf = __webpack_require__(162)(false);
var IE_PROTO = __webpack_require__(68)('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(30);
var document = __webpack_require__(18).document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),
/* 114 */
/***/ (function(module, exports) {

module.exports = false;


/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(104);
var ITERATOR = __webpack_require__(10)('iterator');
var Iterators = __webpack_require__(33);
module.exports = __webpack_require__(6).getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(50);
var TAG = __webpack_require__(13)('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(183);

/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(89);
var step = __webpack_require__(241);
var Iterators = __webpack_require__(119);
var toIObject = __webpack_require__(103);

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(197)(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),
/* 119 */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var anObject = __webpack_require__(20);
var toLength = __webpack_require__(45);
var advanceStringIndex = __webpack_require__(108);
var regExpExec = __webpack_require__(97);

// @@match logic
__webpack_require__(98)('match', 1, function (defined, MATCH, $match, maybeCallNative) {
  return [
    // `String.prototype.match` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.match
    function match(regexp) {
      var O = defined(this);
      var fn = regexp == undefined ? undefined : regexp[MATCH];
      return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[MATCH](String(O));
    },
    // `RegExp.prototype[@@match]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@match
    function (regexp) {
      var res = maybeCallNative($match, regexp, this);
      if (res.done) return res.value;
      var rx = anObject(regexp);
      var S = String(this);
      if (!rx.global) return regExpExec(rx, S);
      var fullUnicode = rx.unicode;
      rx.lastIndex = 0;
      var A = [];
      var n = 0;
      var result;
      while ((result = regExpExec(rx, S)) !== null) {
        var matchStr = String(result[0]);
        A[n] = matchStr;
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
        n++;
      }
      return n === 0 ? null : A;
    }
  ];
});


/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(50);
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(9);
module.exports = function (it, TYPE) {
  if (!isObject(it) || it._t !== TYPE) throw TypeError('Incompatible receiver, ' + TYPE + ' required!');
  return it;
};


/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.8 IsRegExp(argument)
var isObject = __webpack_require__(30);
var cof = __webpack_require__(50);
var MATCH = __webpack_require__(13)('match');
module.exports = function (it) {
  var isRegExp;
  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : cof(it) == 'RegExp');
};


/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(30);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),
/* 125 */
/***/ (function(module, exports) {

module.exports = function (it, Constructor, name, forbiddenField) {
  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};


/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

var hide = __webpack_require__(22);
module.exports = function (target, src, safe) {
  for (var key in src) {
    if (safe && target[key]) target[key] = src[key];
    else hide(target, key, src[key]);
  } return target;
};


/***/ }),
/* 127 */,
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _get2 = _interopRequireDefault(__webpack_require__(24));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(16));

var _createClass2 = _interopRequireDefault(__webpack_require__(3));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var _createSuper2 = _interopRequireDefault(__webpack_require__(5));

var _commandBase = _interopRequireDefault(__webpack_require__(23));

var CommandHistory = /*#__PURE__*/function (_CommandBase) {
  (0, _inherits2.default)(CommandHistory, _CommandBase);

  var _super = (0, _createSuper2.default)(CommandHistory);

  (0, _createClass2.default)(CommandHistory, null, [{
    key: "getInstanceType",
    value: function getInstanceType() {
      return 'CommandHistory';
    }
  }]);

  function CommandHistory(args) {
    var _this;

    (0, _classCallCheck2.default)(this, CommandHistory);
    _this = _super.call(this, args);
    /**
     * Get History from child command.
     *
     * @type {{}|boolean}
     */

    _this.history = _this.getHistory(args);
    /**
     * @type {number|boolean}
     */

    _this.historyId = false;
    return _this;
  }
  /**
   * Function getHistory().
   *
   * Get history object from child, do nothing if it false.
   *
   * @param [args={}]
   *
   * @returns {({}|boolean)}
   */


  (0, _createClass2.default)(CommandHistory, [{
    key: "getHistory",
    value: function getHistory() {
      var args = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      // eslint-disable-line no-unused-vars
      elementorModules.ForceMethodImplementation();
    }
    /**
     * Function isHistoryActive().
     *
     * Return `elementor.documents.getCurrent().history.getActive()`.
     *
     * @returns {boolean}
     */

  }, {
    key: "isHistoryActive",
    value: function isHistoryActive() {
      return elementor.documents.getCurrent().history.getActive();
    }
  }, {
    key: "onBeforeRun",
    value: function onBeforeRun(args) {
      (0, _get2.default)((0, _getPrototypeOf2.default)(CommandHistory.prototype), "onBeforeRun", this).call(this, args);

      if (this.history && this.isHistoryActive()) {
        this.historyId = $e.internal('document/history/start-log', this.history);
      }
    }
  }, {
    key: "onAfterRun",
    value: function onAfterRun(args, result) {
      (0, _get2.default)((0, _getPrototypeOf2.default)(CommandHistory.prototype), "onAfterRun", this).call(this, args, result);

      if (this.history && this.isHistoryActive()) {
        $e.internal('document/history/end-log', {
          id: this.historyId
        });
      }
    }
  }, {
    key: "onCatchApply",
    value: function onCatchApply(e) {
      (0, _get2.default)((0, _getPrototypeOf2.default)(CommandHistory.prototype), "onCatchApply", this).call(this, e); // Rollback history on failure.

      if (e instanceof $e.modules.HookBreak && this.historyId) {
        $e.internal('document/history/delete-log', {
          id: this.historyId
        });
      }
    }
  }]);
  return CommandHistory;
}(_commandBase.default);

exports.default = CommandHistory;

/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(8).document;
module.exports = document && document.documentElement;


/***/ }),
/* 130 */
/***/ (function(module, exports) {

// fast apply, http://jsperf.lnkit.com/fast-apply/5
module.exports = function (fn, args, that) {
  var un = that === undefined;
  switch (args.length) {
    case 0: return un ? fn()
                      : fn.call(that);
    case 1: return un ? fn(args[0])
                      : fn.call(that, args[0]);
    case 2: return un ? fn(args[0], args[1])
                      : fn.call(that, args[0], args[1]);
    case 3: return un ? fn(args[0], args[1], args[2])
                      : fn.call(that, args[0], args[1], args[2]);
    case 4: return un ? fn(args[0], args[1], args[2], args[3])
                      : fn.call(that, args[0], args[1], args[2], args[3]);
  } return fn.apply(that, args);
};


/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(27) && !__webpack_require__(35)(function () {
  return Object.defineProperty(__webpack_require__(113)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(15);
var anObject = __webpack_require__(11);
var getKeys = __webpack_require__(36);

module.exports = __webpack_require__(14) ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

var _Object$setPrototypeOf = __webpack_require__(111);

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = _Object$setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(76)('keys');
var uid = __webpack_require__(77);
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(160);

/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global = __webpack_require__(8);
var has = __webpack_require__(17);
var DESCRIPTORS = __webpack_require__(14);
var $export = __webpack_require__(7);
var redefine = __webpack_require__(88);
var META = __webpack_require__(75).KEY;
var $fails = __webpack_require__(21);
var shared = __webpack_require__(69);
var setToStringTag = __webpack_require__(53);
var uid = __webpack_require__(54);
var wks = __webpack_require__(10);
var wksExt = __webpack_require__(62);
var wksDefine = __webpack_require__(73);
var enumKeys = __webpack_require__(174);
var isArray = __webpack_require__(93);
var anObject = __webpack_require__(11);
var isObject = __webpack_require__(9);
var toObject = __webpack_require__(32);
var toIObject = __webpack_require__(19);
var toPrimitive = __webpack_require__(67);
var createDesc = __webpack_require__(42);
var _create = __webpack_require__(52);
var gOPNExt = __webpack_require__(175);
var $GOPD = __webpack_require__(51);
var $GOPS = __webpack_require__(74);
var $DP = __webpack_require__(15);
var $keys = __webpack_require__(36);
var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function' && !!$GOPS.f;
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function () { return dP(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function (tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, { enumerable: createDesc(0, false) });
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  __webpack_require__(94).f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(46).f = $propertyIsEnumerable;
  $GOPS.f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__(44)) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);

for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function (key) {
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function () { setter = true; },
  useSimple: function () { setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
// https://bugs.chromium.org/p/v8/issues/detail?id=3443
var FAILS_ON_PRIMITIVES = $fails(function () { $GOPS.f(1); });

$export($export.S + $export.F * FAILS_ON_PRIMITIVES, 'Object', {
  getOwnPropertySymbols: function getOwnPropertySymbols(it) {
    return $GOPS.f(toObject(it));
  }
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    $replacer = replacer = args[1];
    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    if (!isArray(replacer)) replacer = function (key, value) {
      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(22)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);


/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(257);

/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(288);

/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/tc39/Array.prototype.includes
var $export = __webpack_require__(37);
var $includes = __webpack_require__(145)(true);

$export($export.P, 'Array', {
  includes: function includes(el /* , fromIndex = 0 */) {
    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
  }
});

__webpack_require__(89)('includes');


/***/ }),
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

// 0 -> Array#forEach
// 1 -> Array#map
// 2 -> Array#filter
// 3 -> Array#some
// 4 -> Array#every
// 5 -> Array#find
// 6 -> Array#findIndex
var ctx = __webpack_require__(31);
var IObject = __webpack_require__(100);
var toObject = __webpack_require__(32);
var toLength = __webpack_require__(70);
var asc = __webpack_require__(245);
module.exports = function (TYPE, $create) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  var create = $create || asc;
  return function ($this, callbackfn, that) {
    var O = toObject($this);
    var self = IObject(O);
    var f = ctx(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
    var val, res;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      val = self[index];
      res = f(val, index, O);
      if (TYPE) {
        if (IS_MAP) result[index] = res;   // map
        else if (res) switch (TYPE) {
          case 3: return true;             // some
          case 5: return val;              // find
          case 6: return index;            // findIndex
          case 2: result.push(val);        // filter
        } else if (IS_EVERY) return false; // every
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
  };
};


/***/ }),
/* 141 */
/***/ (function(module, exports, __webpack_require__) {

var _Reflect$construct = __webpack_require__(101);

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !_Reflect$construct) return false;
  if (_Reflect$construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(_Reflect$construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

module.exports = _isNativeReflectConstruct;

/***/ }),
/* 142 */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__(11);
module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};


/***/ }),
/* 144 */
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__(33);
var ITERATOR = __webpack_require__(10)('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),
/* 145 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(103);
var toLength = __webpack_require__(45);
var toAbsoluteIndex = __webpack_require__(198);
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(59);
var defined = __webpack_require__(43);
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),
/* 147 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(76)('native-function-to-string', Function.toString);


/***/ }),
/* 148 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(168);

/***/ }),
/* 149 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 25.4.1.5 NewPromiseCapability(C)
var aFunction = __webpack_require__(34);

function PromiseCapability(C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = aFunction(resolve);
  this.reject = aFunction(reject);
}

module.exports.f = function (C) {
  return new PromiseCapability(C);
};


/***/ }),
/* 150 */
/***/ (function(module, exports, __webpack_require__) {

var $iterators = __webpack_require__(118);
var getKeys = __webpack_require__(191);
var redefine = __webpack_require__(39);
var global = __webpack_require__(18);
var hide = __webpack_require__(29);
var Iterators = __webpack_require__(119);
var wks = __webpack_require__(13);
var ITERATOR = wks('iterator');
var TO_STRING_TAG = wks('toStringTag');
var ArrayValues = Iterators.Array;

var DOMIterables = {
  CSSRuleList: true, // TODO: Not spec compliant, should be false.
  CSSStyleDeclaration: false,
  CSSValueList: false,
  ClientRectList: false,
  DOMRectList: false,
  DOMStringList: false,
  DOMTokenList: true,
  DataTransferItemList: false,
  FileList: false,
  HTMLAllCollection: false,
  HTMLCollection: false,
  HTMLFormElement: false,
  HTMLSelectElement: false,
  MediaList: true, // TODO: Not spec compliant, should be false.
  MimeTypeArray: false,
  NamedNodeMap: false,
  NodeList: true,
  PaintRequestList: false,
  Plugin: false,
  PluginArray: false,
  SVGLengthList: false,
  SVGNumberList: false,
  SVGPathSegList: false,
  SVGPointList: false,
  SVGStringList: false,
  SVGTransformList: false,
  SourceBufferList: false,
  StyleSheetList: true, // TODO: Not spec compliant, should be false.
  TextTrackCueList: false,
  TextTrackList: false,
  TouchList: false
};

for (var collections = getKeys(DOMIterables), i = 0; i < collections.length; i++) {
  var NAME = collections[i];
  var explicit = DOMIterables[NAME];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  var key;
  if (proto) {
    if (!proto[ITERATOR]) hide(proto, ITERATOR, ArrayValues);
    if (!proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
    Iterators[NAME] = ArrayValues;
    if (explicit) for (key in $iterators) if (!proto[key]) redefine(proto, key, $iterators[key], true);
  }
}


/***/ }),
/* 151 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),
/* 152 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(153);
var $Object = __webpack_require__(6).Object;
module.exports = function defineProperty(it, key, desc) {
  return $Object.defineProperty(it, key, desc);
};


/***/ }),
/* 153 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(7);
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__(14), 'Object', { defineProperty: __webpack_require__(15).f });


/***/ }),
/* 154 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(155);

/***/ }),
/* 155 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(156);
module.exports = __webpack_require__(6).Object.getPrototypeOf;


/***/ }),
/* 156 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 Object.getPrototypeOf(O)
var toObject = __webpack_require__(32);
var $getPrototypeOf = __webpack_require__(63);

__webpack_require__(78)('getPrototypeOf', function () {
  return function getPrototypeOf(it) {
    return $getPrototypeOf(toObject(it));
  };
});


/***/ }),
/* 157 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(158);
module.exports = __webpack_require__(6).Object.setPrototypeOf;


/***/ }),
/* 158 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.19 Object.setPrototypeOf(O, proto)
var $export = __webpack_require__(7);
$export($export.S, 'Object', { setPrototypeOf: __webpack_require__(159).set });


/***/ }),
/* 159 */
/***/ (function(module, exports, __webpack_require__) {

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = __webpack_require__(9);
var anObject = __webpack_require__(11);
var check = function (O, proto) {
  anObject(O);
  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function (test, buggy, set) {
      try {
        set = __webpack_require__(31)(Function.call, __webpack_require__(51).f(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch (e) { buggy = true; }
      return function setPrototypeOf(O, proto) {
        check(O, proto);
        if (buggy) O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};


/***/ }),
/* 160 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(161);
var $Object = __webpack_require__(6).Object;
module.exports = function create(P, D) {
  return $Object.create(P, D);
};


/***/ }),
/* 161 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(7);
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
$export($export.S, 'Object', { create: __webpack_require__(52) });


/***/ }),
/* 162 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(19);
var toLength = __webpack_require__(70);
var toAbsoluteIndex = __webpack_require__(163);
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),
/* 163 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(71);
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),
/* 164 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(165);
module.exports = __webpack_require__(6).Reflect.construct;


/***/ }),
/* 165 */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.2 Reflect.construct(target, argumentsList [, newTarget])
var $export = __webpack_require__(7);
var create = __webpack_require__(52);
var aFunction = __webpack_require__(34);
var anObject = __webpack_require__(11);
var isObject = __webpack_require__(9);
var fails = __webpack_require__(21);
var bind = __webpack_require__(166);
var rConstruct = (__webpack_require__(8).Reflect || {}).construct;

// MS Edge supports only 2 arguments and argumentsList argument is optional
// FF Nightly sets third argument as `new.target`, but does not create `this` from it
var NEW_TARGET_BUG = fails(function () {
  function F() { /* empty */ }
  return !(rConstruct(function () { /* empty */ }, [], F) instanceof F);
});
var ARGS_BUG = !fails(function () {
  rConstruct(function () { /* empty */ });
});

$export($export.S + $export.F * (NEW_TARGET_BUG || ARGS_BUG), 'Reflect', {
  construct: function construct(Target, args /* , newTarget */) {
    aFunction(Target);
    anObject(args);
    var newTarget = arguments.length < 3 ? Target : aFunction(arguments[2]);
    if (ARGS_BUG && !NEW_TARGET_BUG) return rConstruct(Target, args, newTarget);
    if (Target == newTarget) {
      // w/o altered newTarget, optimization for 0-4 arguments
      switch (args.length) {
        case 0: return new Target();
        case 1: return new Target(args[0]);
        case 2: return new Target(args[0], args[1]);
        case 3: return new Target(args[0], args[1], args[2]);
        case 4: return new Target(args[0], args[1], args[2], args[3]);
      }
      // w/o altered newTarget, lot of arguments case
      var $args = [null];
      $args.push.apply($args, args);
      return new (bind.apply(Target, $args))();
    }
    // with altered newTarget, not support built-in constructors
    var proto = newTarget.prototype;
    var instance = create(isObject(proto) ? proto : Object.prototype);
    var result = Function.apply.call(Target, instance, args);
    return isObject(result) ? result : instance;
  }
});


/***/ }),
/* 166 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var aFunction = __webpack_require__(34);
var isObject = __webpack_require__(9);
var invoke = __webpack_require__(130);
var arraySlice = [].slice;
var factories = {};

var construct = function (F, len, args) {
  if (!(len in factories)) {
    for (var n = [], i = 0; i < len; i++) n[i] = 'a[' + i + ']';
    // eslint-disable-next-line no-new-func
    factories[len] = Function('F,a', 'return new F(' + n.join(',') + ')');
  } return factories[len](F, args);
};

module.exports = Function.bind || function bind(that /* , ...args */) {
  var fn = aFunction(this);
  var partArgs = arraySlice.call(arguments, 1);
  var bound = function (/* args... */) {
    var args = partArgs.concat(arraySlice.call(arguments));
    return this instanceof bound ? construct(fn, args.length, args) : invoke(fn, args, that);
  };
  if (isObject(fn.prototype)) bound.prototype = fn.prototype;
  return bound;
};


/***/ }),
/* 167 */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(47);

var assertThisInitialized = __webpack_require__(48);

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),
/* 168 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(58);
__webpack_require__(61);
module.exports = __webpack_require__(62).f('iterator');


/***/ }),
/* 169 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(71);
var defined = __webpack_require__(65);
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),
/* 170 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(52);
var descriptor = __webpack_require__(42);
var setToStringTag = __webpack_require__(53);
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(22)(IteratorPrototype, __webpack_require__(10)('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),
/* 171 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(172);
var step = __webpack_require__(142);
var Iterators = __webpack_require__(33);
var toIObject = __webpack_require__(19);

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(102)(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),
/* 172 */
/***/ (function(module, exports) {

module.exports = function () { /* empty */ };


/***/ }),
/* 173 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(136);
__webpack_require__(96);
__webpack_require__(176);
__webpack_require__(177);
module.exports = __webpack_require__(6).Symbol;


/***/ }),
/* 174 */
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(36);
var gOPS = __webpack_require__(74);
var pIE = __webpack_require__(46);
module.exports = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  } return result;
};


/***/ }),
/* 175 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(19);
var gOPN = __webpack_require__(94).f;
var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ }),
/* 176 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(73)('asyncIterator');


/***/ }),
/* 177 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(73)('observable');


/***/ }),
/* 178 */
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR = __webpack_require__(10)('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function () { SAFE_CLOSING = true; };
  // eslint-disable-next-line no-throw-literal
  Array.from(riter, function () { throw 2; });
} catch (e) { /* empty */ }

module.exports = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR]();
    iter.next = function () { return { done: safe = true }; };
    arr[ITERATOR] = function () { return iter; };
    exec(arr);
  } catch (e) { /* empty */ }
  return safe;
};


/***/ }),
/* 179 */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(49).f;
var has = __webpack_require__(64);
var TAG = __webpack_require__(13)('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),
/* 180 */
/***/ (function(module, exports, __webpack_require__) {

// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject = __webpack_require__(20);
var aFunction = __webpack_require__(95);
var SPECIES = __webpack_require__(13)('species');
module.exports = function (O, D) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};


/***/ }),
/* 181 */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(14);
var getKeys = __webpack_require__(36);
var toIObject = __webpack_require__(19);
var isEnum = __webpack_require__(46).f;
module.exports = function (isEntries) {
  return function (it) {
    var O = toIObject(it);
    var keys = getKeys(O);
    var length = keys.length;
    var i = 0;
    var result = [];
    var key;
    while (length > i) {
      key = keys[i++];
      if (!DESCRIPTORS || isEnum.call(O, key)) {
        result.push(isEntries ? [key, O[key]] : O[key]);
      }
    }
    return result;
  };
};


/***/ }),
/* 182 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 21.1.3.7 String.prototype.includes(searchString, position = 0)

var $export = __webpack_require__(37);
var context = __webpack_require__(204);
var INCLUDES = 'includes';

$export($export.P + $export.F * __webpack_require__(205)(INCLUDES), 'String', {
  includes: function includes(searchString /* , position = 0 */) {
    return !!~context(this, searchString, INCLUDES)
      .indexOf(searchString, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),
/* 183 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(184);
var $Object = __webpack_require__(6).Object;
module.exports = function getOwnPropertyDescriptor(it, key) {
  return $Object.getOwnPropertyDescriptor(it, key);
};


/***/ }),
/* 184 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
var toIObject = __webpack_require__(19);
var $getOwnPropertyDescriptor = __webpack_require__(51).f;

__webpack_require__(78)('getOwnPropertyDescriptor', function () {
  return function getOwnPropertyDescriptor(it, key) {
    return $getOwnPropertyDescriptor(toIObject(it), key);
  };
});


/***/ }),
/* 185 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(186);

/***/ }),
/* 186 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(187);
module.exports = __webpack_require__(6).Reflect.get;


/***/ }),
/* 187 */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.6 Reflect.get(target, propertyKey [, receiver])
var gOPD = __webpack_require__(51);
var getPrototypeOf = __webpack_require__(63);
var has = __webpack_require__(17);
var $export = __webpack_require__(7);
var isObject = __webpack_require__(9);
var anObject = __webpack_require__(11);

function get(target, propertyKey /* , receiver */) {
  var receiver = arguments.length < 3 ? target : arguments[2];
  var desc, proto;
  if (anObject(target) === receiver) return target[propertyKey];
  if (desc = gOPD.f(target, propertyKey)) return has(desc, 'value')
    ? desc.value
    : desc.get !== undefined
      ? desc.get.call(receiver)
      : undefined;
  if (isObject(proto = getPrototypeOf(target))) return get(proto, propertyKey, receiver);
}

$export($export.S, 'Reflect', { get: get });


/***/ }),
/* 188 */
/***/ (function(module, exports, __webpack_require__) {

var getPrototypeOf = __webpack_require__(16);

function _superPropBase(object, property) {
  while (!Object.prototype.hasOwnProperty.call(object, property)) {
    object = getPrototypeOf(object);
    if (object === null) break;
  }

  return object;
}

module.exports = _superPropBase;

/***/ }),
/* 189 */
/***/ (function(module, exports, __webpack_require__) {

// 0 -> Array#forEach
// 1 -> Array#map
// 2 -> Array#filter
// 3 -> Array#some
// 4 -> Array#every
// 5 -> Array#find
// 6 -> Array#findIndex
var ctx = __webpack_require__(80);
var IObject = __webpack_require__(121);
var toObject = __webpack_require__(99);
var toLength = __webpack_require__(45);
var asc = __webpack_require__(216);
module.exports = function (TYPE, $create) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  var create = $create || asc;
  return function ($this, callbackfn, that) {
    var O = toObject($this);
    var self = IObject(O);
    var f = ctx(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
    var val, res;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      val = self[index];
      res = f(val, index, O);
      if (TYPE) {
        if (IS_MAP) result[index] = res;   // map
        else if (res) switch (TYPE) {
          case 3: return true;             // some
          case 5: return val;              // find
          case 6: return index;            // findIndex
          case 2: result.push(val);        // filter
        } else if (IS_EVERY) return false; // every
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
  };
};


/***/ }),
/* 190 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

__webpack_require__(280);
var anObject = __webpack_require__(20);
var $flags = __webpack_require__(109);
var DESCRIPTORS = __webpack_require__(27);
var TO_STRING = 'toString';
var $toString = /./[TO_STRING];

var define = function (fn) {
  __webpack_require__(39)(RegExp.prototype, TO_STRING, fn, true);
};

// 21.2.5.14 RegExp.prototype.toString()
if (__webpack_require__(35)(function () { return $toString.call({ source: 'a', flags: 'b' }) != '/a/b'; })) {
  define(function toString() {
    var R = anObject(this);
    return '/'.concat(R.source, '/',
      'flags' in R ? R.flags : !DESCRIPTORS && R instanceof RegExp ? $flags.call(R) : undefined);
  });
// FF44- RegExp#toString has a wrong name
} else if ($toString.name != TO_STRING) {
  define(function toString() {
    return $toString.call(this);
  });
}


/***/ }),
/* 191 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(219);
var enumBugKeys = __webpack_require__(151);

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),
/* 192 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $defineProperty = __webpack_require__(15);
var createDesc = __webpack_require__(42);

module.exports = function (object, index, value) {
  if (index in object) $defineProperty.f(object, index, createDesc(0, value));
  else object[index] = value;
};


/***/ }),
/* 193 */
/***/ (function(module, exports, __webpack_require__) {

var _Array$from = __webpack_require__(200);

var arrayLikeToArray = __webpack_require__(199);

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return _Array$from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}

module.exports = _unsupportedIterableToArray;

/***/ }),
/* 194 */,
/* 195 */,
/* 196 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var regexpExec = __webpack_require__(92);
__webpack_require__(37)({
  target: 'RegExp',
  proto: true,
  forced: regexpExec !== /./.exec
}, {
  exec: regexpExec
});


/***/ }),
/* 197 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(114);
var $export = __webpack_require__(37);
var redefine = __webpack_require__(39);
var hide = __webpack_require__(29);
var Iterators = __webpack_require__(119);
var $iterCreate = __webpack_require__(242);
var setToStringTag = __webpack_require__(179);
var getPrototypeOf = __webpack_require__(244);
var ITERATOR = __webpack_require__(13)('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),
/* 198 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(59);
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),
/* 199 */
/***/ (function(module, exports) {

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

module.exports = _arrayLikeToArray;

/***/ }),
/* 200 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(230);

/***/ }),
/* 201 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(202);
module.exports = __webpack_require__(6).Object.keys;


/***/ }),
/* 202 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__(32);
var $keys = __webpack_require__(36);

__webpack_require__(78)('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});


/***/ }),
/* 203 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(3));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var _createSuper2 = _interopRequireDefault(__webpack_require__(5));

var _commandBase = _interopRequireDefault(__webpack_require__(23));

var CommandInternalBase = /*#__PURE__*/function (_CommandBase) {
  (0, _inherits2.default)(CommandInternalBase, _CommandBase);

  var _super = (0, _createSuper2.default)(CommandInternalBase);

  (0, _createClass2.default)(CommandInternalBase, null, [{
    key: "getInstanceType",
    value: function getInstanceType() {
      return 'CommandInternalBase';
    }
  }]);

  function CommandInternalBase(args) {
    var commandsAPI = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : $e.commandsInternal;
    (0, _classCallCheck2.default)(this, CommandInternalBase);
    return _super.call(this, args, commandsAPI);
  }

  return CommandInternalBase;
}(_commandBase.default);

exports.default = CommandInternalBase;

/***/ }),
/* 204 */
/***/ (function(module, exports, __webpack_require__) {

// helper for String#{startsWith, endsWith, includes}
var isRegExp = __webpack_require__(123);
var defined = __webpack_require__(43);

module.exports = function (that, searchString, NAME) {
  if (isRegExp(searchString)) throw TypeError('String#' + NAME + " doesn't accept regex!");
  return String(defined(that));
};


/***/ }),
/* 205 */
/***/ (function(module, exports, __webpack_require__) {

var MATCH = __webpack_require__(13)('match');
module.exports = function (KEY) {
  var re = /./;
  try {
    '/./'[KEY](re);
  } catch (e) {
    try {
      re[MATCH] = false;
      return !'/./'[KEY](re);
    } catch (f) { /* empty */ }
  } return true;
};


/***/ }),
/* 206 */,
/* 207 */
/***/ (function(module, exports, __webpack_require__) {

// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject = __webpack_require__(11);
var aFunction = __webpack_require__(34);
var SPECIES = __webpack_require__(10)('species');
module.exports = function (O, D) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};


/***/ }),
/* 208 */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(31);
var invoke = __webpack_require__(130);
var html = __webpack_require__(129);
var cel = __webpack_require__(87);
var global = __webpack_require__(8);
var process = global.process;
var setTask = global.setImmediate;
var clearTask = global.clearImmediate;
var MessageChannel = global.MessageChannel;
var Dispatch = global.Dispatch;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var defer, channel, port;
var run = function () {
  var id = +this;
  // eslint-disable-next-line no-prototype-builtins
  if (queue.hasOwnProperty(id)) {
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};
var listener = function (event) {
  run.call(event.data);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!setTask || !clearTask) {
  setTask = function setImmediate(fn) {
    var args = [];
    var i = 1;
    while (arguments.length > i) args.push(arguments[i++]);
    queue[++counter] = function () {
      // eslint-disable-next-line no-new-func
      invoke(typeof fn == 'function' ? fn : Function(fn), args);
    };
    defer(counter);
    return counter;
  };
  clearTask = function clearImmediate(id) {
    delete queue[id];
  };
  // Node.js 0.8-
  if (__webpack_require__(55)(process) == 'process') {
    defer = function (id) {
      process.nextTick(ctx(run, id, 1));
    };
  // Sphere (JS game engine) Dispatch API
  } else if (Dispatch && Dispatch.now) {
    defer = function (id) {
      Dispatch.now(ctx(run, id, 1));
    };
  // Browsers with MessageChannel, includes WebWorkers
  } else if (MessageChannel) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = listener;
    defer = ctx(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts) {
    defer = function (id) {
      global.postMessage(id + '', '*');
    };
    global.addEventListener('message', listener, false);
  // IE8-
  } else if (ONREADYSTATECHANGE in cel('script')) {
    defer = function (id) {
      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function () {
        html.removeChild(this);
        run.call(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function (id) {
      setTimeout(ctx(run, id, 1), 0);
    };
  }
}
module.exports = {
  set: setTask,
  clear: clearTask
};


/***/ }),
/* 209 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return { e: false, v: exec() };
  } catch (e) {
    return { e: true, v: e };
  }
};


/***/ }),
/* 210 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(11);
var isObject = __webpack_require__(9);
var newPromiseCapability = __webpack_require__(149);

module.exports = function (C, x) {
  anObject(C);
  if (isObject(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};


/***/ }),
/* 211 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(232);

/***/ }),
/* 212 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var DESCRIPTORS = __webpack_require__(14);
var getKeys = __webpack_require__(36);
var gOPS = __webpack_require__(74);
var pIE = __webpack_require__(46);
var toObject = __webpack_require__(32);
var IObject = __webpack_require__(100);
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(21)(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) {
      key = keys[j++];
      if (!DESCRIPTORS || isEnum.call(S, key)) T[key] = S[key];
    }
  } return T;
} : $assign;


/***/ }),
/* 213 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(282);

/***/ }),
/* 214 */,
/* 215 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

var _values = _interopRequireDefault(__webpack_require__(56));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(3));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var _createSuper2 = _interopRequireDefault(__webpack_require__(5));

var _helperBc = _interopRequireDefault(__webpack_require__(370));

// TODO: this file should be deleted.
var Helper = /*#__PURE__*/function (_BackwardsCompatibili) {
  (0, _inherits2.default)(Helper, _BackwardsCompatibili);

  var _super = (0, _createSuper2.default)(Helper);

  function Helper() {
    (0, _classCallCheck2.default)(this, Helper);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(Helper, null, [{
    key: "isValidChild",
    // TODO: This is not the right place for this function
    value: function isValidChild(childModel, parentModel) {
      var parentElType = parentModel.get('elType'),
          draggedElType = childModel.get('elType'),
          parentIsInner = parentModel.get('isInner'),
          draggedIsInner = childModel.get('isInner'); // Block's inner-section at inner-section column.

      if (draggedIsInner && 'section' === draggedElType && parentIsInner && 'column' === parentElType) {
        return false;
      }

      if (draggedElType === parentElType) {
        return false;
      }

      if ('section' === draggedElType && !draggedIsInner && 'column' === parentElType) {
        return false;
      }

      var childTypes = elementor.helpers.getElementChildType(parentElType);
      return childTypes && -1 !== childTypes.indexOf(childModel.get('elType'));
    } // TODO: This is not the right place for this function

  }, {
    key: "isValidGrandChild",
    value: function isValidGrandChild(childModel, targetContainer) {
      var result;
      var childElType = childModel.get('elType');

      switch (targetContainer.model.get('elType')) {
        case 'document':
          result = true;
          break;

        case 'section':
          result = 'widget' === childElType;
          break;

        default:
          result = false;
      }

      return result;
    } // TODO: This is not the right place for this function

  }, {
    key: "isSameElement",
    value: function isSameElement(sourceModel, targetContainer) {
      var targetElType = targetContainer.model.get('elType'),
          sourceElType = sourceModel.get('elType');

      if (targetElType !== sourceElType) {
        return false;
      }

      if ('column' === targetElType && 'column' === sourceElType) {
        return true;
      }

      return targetContainer.model.get('isInner') === sourceModel.get('isInner');
    } // TODO: This is not the right place for this function

  }, {
    key: "getPasteOptions",
    value: function getPasteOptions(sourceModel, targetContainer) {
      var result = {};
      result.isValidChild = this.isValidChild(sourceModel, targetContainer.model);
      result.isSameElement = this.isSameElement(sourceModel, targetContainer);
      result.isValidGrandChild = this.isValidGrandChild(sourceModel, targetContainer);
      return result;
    } // TODO: This is not the right place for this function

  }, {
    key: "isPasteEnabled",
    value: function isPasteEnabled(targetContainer) {
      var storage = elementorCommon.storage.get('clipboard'); // No storage? no paste.

      if (!storage || !storage[0]) {
        return false;
      }

      if (!(storage[0] instanceof Backbone.Model)) {
        storage[0] = new Backbone.Model(storage[0]);
      }

      var pasteOptions = this.getPasteOptions(storage[0], targetContainer);
      return (0, _values.default)(pasteOptions).some(function (opt) {
        return !!opt;
      });
    }
  }]);
  return Helper;
}(_helperBc.default);

exports.default = Helper;

/***/ }),
/* 216 */
/***/ (function(module, exports, __webpack_require__) {

// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
var speciesConstructor = __webpack_require__(217);

module.exports = function (original, length) {
  return new (speciesConstructor(original))(length);
};


/***/ }),
/* 217 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(30);
var isArray = __webpack_require__(218);
var SPECIES = __webpack_require__(13)('species');

module.exports = function (original) {
  var C;
  if (isArray(original)) {
    C = original.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return C === undefined ? Array : C;
};


/***/ }),
/* 218 */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(50);
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),
/* 219 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(64);
var toIObject = __webpack_require__(103);
var arrayIndexOf = __webpack_require__(145)(false);
var IE_PROTO = __webpack_require__(134)('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),
/* 220 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(221);
module.exports = __webpack_require__(6).Array.isArray;


/***/ }),
/* 221 */
/***/ (function(module, exports, __webpack_require__) {

// 22.1.2.2 / 15.4.3.2 Array.isArray(arg)
var $export = __webpack_require__(7);

$export($export.S, 'Array', { isArray: __webpack_require__(93) });


/***/ }),
/* 222 */,
/* 223 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

var _typeof2 = _interopRequireDefault(__webpack_require__(47));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(3));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var _createSuper2 = _interopRequireDefault(__webpack_require__(5));

var _instanceType = _interopRequireDefault(__webpack_require__(252));

var ArgsObject = /*#__PURE__*/function (_InstanceType) {
  (0, _inherits2.default)(ArgsObject, _InstanceType);

  var _super = (0, _createSuper2.default)(ArgsObject);

  (0, _createClass2.default)(ArgsObject, null, [{
    key: "getInstanceType",
    value: function getInstanceType() {
      return 'ArgsObject';
    }
    /**
     * Function constructor().
     *
     * Create ArgsObject.
     *
     * @param {{}} args
     */

  }]);

  function ArgsObject(args) {
    var _this;

    (0, _classCallCheck2.default)(this, ArgsObject);
    _this = _super.call(this);
    _this.args = args;
    return _this;
  }
  /**
   * Function requireArgument().
   *
   * Validate property in args.
   *
   * @param {string} property
   * @param {{}} args
   *
   * @throws {Error}
   *
   */


  (0, _createClass2.default)(ArgsObject, [{
    key: "requireArgument",
    value: function requireArgument(property) {
      var args = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.args;

      if (!args.hasOwnProperty(property)) {
        throw Error("".concat(property, " is required."));
      }
    }
    /**
     * Function requireArgumentType().
     *
     * Validate property in args using `type === typeof(args.whatever)`.
     *
     * @param {string} property
     * @param {string} type
     * @param {{}} args
     *
     * @throws {Error}
     *
     */

  }, {
    key: "requireArgumentType",
    value: function requireArgumentType(property, type) {
      var args = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this.args;
      this.requireArgument(property, args);

      if ((0, _typeof2.default)(args[property]) !== type) {
        throw Error("".concat(property, " invalid type: ").concat(type, "."));
      }
    }
    /**
     * Function requireArgumentInstance().
     *
     * Validate property in args using `args.whatever instanceof instance`.
     *
     * @param {string} property
     * @param {instanceof} instance
     * @param {{}} args
     *
     * @throws {Error}
     *
     */

  }, {
    key: "requireArgumentInstance",
    value: function requireArgumentInstance(property, instance) {
      var args = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this.args;
      this.requireArgument(property, args);

      if (!(args[property] instanceof instance)) {
        throw Error("".concat(property, " invalid instance."));
      }
    }
    /**
     * Function requireArgumentConstructor().
     *
     * Validate property in args using `type === args.whatever.constructor`.
     *
     * @param {string} property
     * @param {*} type
     * @param {{}} args
     *
     * @throws {Error}
     *
     */

  }, {
    key: "requireArgumentConstructor",
    value: function requireArgumentConstructor(property, type) {
      var args = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this.args;
      this.requireArgument(property, args);

      if (args[property].constructor !== type) {
        throw Error("".concat(property, " invalid constructor type."));
      }
    }
  }]);
  return ArgsObject;
}(_instanceType.default);

exports.default = ArgsObject;

/***/ }),
/* 224 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = exports.After = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(3));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var _createSuper2 = _interopRequireDefault(__webpack_require__(5));

var _base = _interopRequireDefault(__webpack_require__(286));

var After = /*#__PURE__*/function (_Base) {
  (0, _inherits2.default)(After, _Base);

  var _super = (0, _createSuper2.default)(After);

  function After() {
    (0, _classCallCheck2.default)(this, After);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(After, [{
    key: "register",
    value: function register() {
      $e.hooks.registerDataAfter(this);
    }
  }]);
  return After;
}(_base.default);

exports.After = After;
var _default = After;
exports.default = _default;

/***/ }),
/* 225 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(8);
var core = __webpack_require__(6);
var dP = __webpack_require__(15);
var DESCRIPTORS = __webpack_require__(14);
var SPECIES = __webpack_require__(10)('species');

module.exports = function (KEY) {
  var C = typeof core[KEY] == 'function' ? core[KEY] : global[KEY];
  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
    configurable: true,
    get: function () { return this; }
  });
};


/***/ }),
/* 226 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(227);
module.exports = __webpack_require__(6).Object.values;


/***/ }),
/* 227 */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/tc39/proposal-object-values-entries
var $export = __webpack_require__(7);
var $values = __webpack_require__(181)(false);

$export($export.S, 'Object', {
  values: function values(it) {
    return $values(it);
  }
});


/***/ }),
/* 228 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(20);
var dPs = __webpack_require__(243);
var enumBugKeys = __webpack_require__(151);
var IE_PROTO = __webpack_require__(134)('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(113)('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(229).appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),
/* 229 */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(18).document;
module.exports = document && document.documentElement;


/***/ }),
/* 230 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(58);
__webpack_require__(231);
module.exports = __webpack_require__(6).Array.from;


/***/ }),
/* 231 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ctx = __webpack_require__(31);
var $export = __webpack_require__(7);
var toObject = __webpack_require__(32);
var call = __webpack_require__(143);
var isArrayIter = __webpack_require__(144);
var toLength = __webpack_require__(70);
var createProperty = __webpack_require__(192);
var getIterFn = __webpack_require__(115);

$export($export.S + $export.F * !__webpack_require__(178)(function (iter) { Array.from(iter); }), 'Array', {
  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
  from: function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
    var O = toObject(arrayLike);
    var C = typeof this == 'function' ? this : Array;
    var aLen = arguments.length;
    var mapfn = aLen > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    var index = 0;
    var iterFn = getIterFn(O);
    var length, result, step, iterator;
    if (mapping) mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
    // if object isn't iterable or it's array with default iterator - use simple case
    if (iterFn != undefined && !(C == Array && isArrayIter(iterFn))) {
      for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
      }
    } else {
      length = toLength(O.length);
      for (result = new C(length); length > index; index++) {
        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
      }
    }
    result.length = index;
    return result;
  }
});


/***/ }),
/* 232 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(61);
__webpack_require__(58);
module.exports = __webpack_require__(233);


/***/ }),
/* 233 */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(104);
var ITERATOR = __webpack_require__(10)('iterator');
var Iterators = __webpack_require__(33);
module.exports = __webpack_require__(6).isIterable = function (it) {
  var O = Object(it);
  return O[ITERATOR] !== undefined
    || '@@iterator' in O
    // eslint-disable-next-line no-prototype-builtins
    || Iterators.hasOwnProperty(classof(O));
};


/***/ }),
/* 234 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(8);
var $export = __webpack_require__(7);
var meta = __webpack_require__(75);
var fails = __webpack_require__(21);
var hide = __webpack_require__(22);
var redefineAll = __webpack_require__(126);
var forOf = __webpack_require__(90);
var anInstance = __webpack_require__(125);
var isObject = __webpack_require__(9);
var setToStringTag = __webpack_require__(53);
var dP = __webpack_require__(15).f;
var each = __webpack_require__(140)(0);
var DESCRIPTORS = __webpack_require__(14);

module.exports = function (NAME, wrapper, methods, common, IS_MAP, IS_WEAK) {
  var Base = global[NAME];
  var C = Base;
  var ADDER = IS_MAP ? 'set' : 'add';
  var proto = C && C.prototype;
  var O = {};
  if (!DESCRIPTORS || typeof C != 'function' || !(IS_WEAK || proto.forEach && !fails(function () {
    new C().entries().next();
  }))) {
    // create collection constructor
    C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
    redefineAll(C.prototype, methods);
    meta.NEED = true;
  } else {
    C = wrapper(function (target, iterable) {
      anInstance(target, C, NAME, '_c');
      target._c = new Base();
      if (iterable != undefined) forOf(iterable, IS_MAP, target[ADDER], target);
    });
    each('add,clear,delete,forEach,get,has,set,keys,values,entries,toJSON'.split(','), function (KEY) {
      var IS_ADDER = KEY == 'add' || KEY == 'set';
      if (KEY in proto && !(IS_WEAK && KEY == 'clear')) hide(C.prototype, KEY, function (a, b) {
        anInstance(this, C, KEY);
        if (!IS_ADDER && IS_WEAK && !isObject(a)) return KEY == 'get' ? undefined : false;
        var result = this._c[KEY](a === 0 ? 0 : a, b);
        return IS_ADDER ? this : result;
      });
    });
    IS_WEAK || dP(C.prototype, 'size', {
      get: function () {
        return this._c.size;
      }
    });
  }

  setToStringTag(C, NAME);

  O[NAME] = C;
  $export($export.G + $export.W + $export.F, O);

  if (!IS_WEAK) common.setStrong(C, NAME, IS_MAP);

  return C;
};


/***/ }),
/* 235 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://tc39.github.io/proposal-setmap-offrom/
var $export = __webpack_require__(7);

module.exports = function (COLLECTION) {
  $export($export.S, COLLECTION, { of: function of() {
    var length = arguments.length;
    var A = new Array(length);
    while (length--) A[length] = arguments[length];
    return new this(A);
  } });
};


/***/ }),
/* 236 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://tc39.github.io/proposal-setmap-offrom/
var $export = __webpack_require__(7);
var aFunction = __webpack_require__(34);
var ctx = __webpack_require__(31);
var forOf = __webpack_require__(90);

module.exports = function (COLLECTION) {
  $export($export.S, COLLECTION, { from: function from(source /* , mapFn, thisArg */) {
    var mapFn = arguments[1];
    var mapping, A, n, cb;
    aFunction(this);
    mapping = mapFn !== undefined;
    if (mapping) aFunction(mapFn);
    if (source == undefined) return new this();
    A = [];
    if (mapping) {
      n = 0;
      cb = ctx(mapFn, arguments[2], 2);
      forOf(source, false, function (nextItem) {
        A.push(cb(nextItem, n++));
      });
    } else {
      forOf(source, false, A.push, A);
    }
    return new this(A);
  } });
};


/***/ }),
/* 237 */
/***/ (function(module, exports) {

module.exports = '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003' +
  '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';


/***/ }),
/* 238 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(249);

/***/ }),
/* 239 */,
/* 240 */,
/* 241 */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),
/* 242 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(228);
var descriptor = __webpack_require__(106);
var setToStringTag = __webpack_require__(179);
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(29)(IteratorPrototype, __webpack_require__(13)('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),
/* 243 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(49);
var anObject = __webpack_require__(20);
var getKeys = __webpack_require__(191);

module.exports = __webpack_require__(27) ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),
/* 244 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(64);
var toObject = __webpack_require__(99);
var IE_PROTO = __webpack_require__(134)('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),
/* 245 */
/***/ (function(module, exports, __webpack_require__) {

// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
var speciesConstructor = __webpack_require__(246);

module.exports = function (original, length) {
  return new (speciesConstructor(original))(length);
};


/***/ }),
/* 246 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(9);
var isArray = __webpack_require__(93);
var SPECIES = __webpack_require__(10)('species');

module.exports = function (original) {
  var C;
  if (isArray(original)) {
    C = original.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return C === undefined ? Array : C;
};


/***/ }),
/* 247 */
/***/ (function(module, exports, __webpack_require__) {

var _Array$isArray = __webpack_require__(85);

function _arrayWithHoles(arr) {
  if (_Array$isArray(arr)) return arr;
}

module.exports = _arrayWithHoles;

/***/ }),
/* 248 */
/***/ (function(module, exports, __webpack_require__) {

var _getIterator = __webpack_require__(238);

var _isIterable = __webpack_require__(211);

var _Symbol = __webpack_require__(107);

function _iterableToArrayLimit(arr, i) {
  if (typeof _Symbol === "undefined" || !_isIterable(Object(arr))) return;
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = _getIterator(arr), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

module.exports = _iterableToArrayLimit;

/***/ }),
/* 249 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(61);
__webpack_require__(58);
module.exports = __webpack_require__(250);


/***/ }),
/* 250 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(11);
var get = __webpack_require__(115);
module.exports = __webpack_require__(6).getIterator = function (it) {
  var iterFn = get(it);
  if (typeof iterFn != 'function') throw TypeError(it + ' is not iterable!');
  return anObject(iterFn.call(it));
};


/***/ }),
/* 251 */
/***/ (function(module, exports) {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableRest;

/***/ }),
/* 252 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

__webpack_require__(40);

var _isArray = _interopRequireDefault(__webpack_require__(85));

var _hasInstance = _interopRequireDefault(__webpack_require__(253));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(3));

var _get2 = _interopRequireDefault(__webpack_require__(24));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(16));

var InstanceType = /*#__PURE__*/function () {
  (0, _createClass2.default)(InstanceType, null, [{
    key: _hasInstance.default,
    value: function value(target) {
      /**
       * This is function extending being called each time JS uses instanceOf, since babel use it each time it create new class
       * its give's opportunity to mange capabilities of instanceOf operator.
       * saving current class each time will give option later to handle instanceOf manually.
       */
      var result = (0, _get2.default)((0, _getPrototypeOf2.default)(InstanceType), _hasInstance.default, this).call(this, target); // Act normal when validate a class, which does not have instance type.

      if (target && !target.constructor.getInstanceType) {
        return result;
      }

      if (target) {
        if (!target.instanceTypes) {
          target.instanceTypes = [];
        }

        if (!result) {
          if (this.getInstanceType() === target.constructor.getInstanceType()) {
            result = true;
          }
        }

        if (result) {
          var name = this.getInstanceType === InstanceType.getInstanceType ? 'BaseInstanceType' : this.getInstanceType();

          if (-1 === target.instanceTypes.indexOf(name)) {
            target.instanceTypes.push(name);
          }
        }
      }

      if (!result && target) {
        // Check if the given 'target', is instance of known types.
        result = target.instanceTypes && (0, _isArray.default)(target.instanceTypes) && -1 !== target.instanceTypes.indexOf(this.getInstanceType());
      }

      return result;
    }
  }]);

  function InstanceType() {
    var _this = this;

    (0, _classCallCheck2.default)(this, InstanceType);
    // Since anonymous classes sometimes do not get validated by babel, do it manually.
    var target = this instanceof InstanceType ? this.constructor : void 0;
    var prototypes = [];

    while (target.__proto__ && target.__proto__.name) {
      prototypes.push(target.__proto__);
      target = target.__proto__;
    }

    prototypes.reverse().forEach(function (proto) {
      return _this instanceof proto;
    });
  }

  (0, _createClass2.default)(InstanceType, null, [{
    key: "getInstanceType",
    value: function getInstanceType() {
      elementorModules.ForceMethodImplementation();
    }
  }]);
  return InstanceType;
}();

exports.default = InstanceType;

/***/ }),
/* 253 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(254);

/***/ }),
/* 254 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(255);
module.exports = __webpack_require__(62).f('hasInstance');


/***/ }),
/* 255 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var isObject = __webpack_require__(9);
var getPrototypeOf = __webpack_require__(63);
var HAS_INSTANCE = __webpack_require__(10)('hasInstance');
var FunctionProto = Function.prototype;
// 19.2.3.6 Function.prototype[@@hasInstance](V)
if (!(HAS_INSTANCE in FunctionProto)) __webpack_require__(15).f(FunctionProto, HAS_INSTANCE, { value: function (O) {
  if (typeof this != 'function' || !isObject(O)) return false;
  if (!isObject(this.prototype)) return O instanceof this;
  // for environment w/o native `@@hasInstance` logic enough `instanceof`, but add this:
  while (O = getPrototypeOf(O)) if (this.prototype === O) return true;
  return false;
} });


/***/ }),
/* 256 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

__webpack_require__(26);

var _inline = _interopRequireDefault(__webpack_require__(373));

var BaseElementView = __webpack_require__(297);

var DEFAULT_INNER_SECTION_COLUMNS = 2,
    DEFAULT_MIN_COLUMN_SIZE = 2,
    DEFAULT_MAX_COLUMNS = 10;
var SectionView = BaseElementView.extend({
  childViewContainer: function childViewContainer() {
    return elementor.config.legacyMode.elementWrappers ? '> .elementor-container > .elementor-row' : '> .elementor-container';
  },
  template: Marionette.TemplateCache.get('#tmpl-elementor-section-content'),
  addSectionView: null,
  _checkIsFull: function _checkIsFull() {
    this.toggleSectionIsFull();
    elementorCommon.helpers.softDeprecated('_checkIsFull', '2.9.0', 'toggleSectionIsFull()');
  },
  toggleSectionIsFull: function toggleSectionIsFull() {
    this.$el.toggleClass('elementor-section-filled', this.isCollectionFilled());
  },
  addChildModel: function addChildModel(model) {
    /// TODO: maybe should be part of $e.hooks.
    var isModelInstance = model instanceof Backbone.Model,
        isInner = this.isInner();

    if (isModelInstance) {
      // TODO: change to command.
      model.set('isInner', isInner);
    } else {
      model.isInner = isInner;
    }

    return BaseElementView.prototype.addChildModel.apply(this, arguments);
  },
  className: function className() {
    var classes = BaseElementView.prototype.className.apply(this, arguments),
        type = this.isInner() ? 'inner' : 'top';
    return classes + ' elementor-section elementor-' + type + '-section';
  },
  tagName: function tagName() {
    return this.model.getSetting('html_tag') || 'section';
  },
  behaviors: function behaviors() {
    var behaviors = BaseElementView.prototype.behaviors.apply(this, arguments);

    _.extend(behaviors, {
      Sortable: {
        behaviorClass: __webpack_require__(298),
        elChildType: 'column'
      }
    });

    return elementor.hooks.applyFilters('elements/section/behaviors', behaviors, this);
  },
  initialize: function initialize() {
    BaseElementView.prototype.initialize.apply(this, arguments);
    this.model.get('editSettings').set('defaultEditRoute', 'layout');
  },
  getEditButtons: function getEditButtons() {
    var elementData = elementor.getElementData(this.model),
        editTools = {};

    if (!this.isInner()) {
      editTools.add = {
        title: elementor.translate('add_element', [elementData.title]),
        icon: 'plus'
      };
    }

    editTools.edit = {
      title: elementor.translate('edit_element', [elementData.title]),
      icon: 'handle'
    };

    if (elementor.getPreferences('edit_buttons')) {
      editTools.duplicate = {
        title: elementor.translate('duplicate_element', [elementData.title]),
        icon: 'clone'
      };
    }

    editTools.remove = {
      title: elementor.translate('delete_element', [elementData.title]),
      icon: 'close'
    };
    return editTools;
  },
  getContextMenuGroups: function getContextMenuGroups() {
    var groups = BaseElementView.prototype.getContextMenuGroups.apply(this, arguments),
        transferGroupIndex = groups.indexOf(_.findWhere(groups, {
      name: 'clipboard'
    }));
    groups.splice(transferGroupIndex + 1, 0, {
      name: 'save',
      actions: [{
        name: 'save',
        title: elementor.translate('save_as_block'),
        callback: this.save.bind(this)
      }]
    });
    return groups;
  },
  getSortableOptions: function getSortableOptions() {
    var sectionConnectClass = this.isInner() ? '.elementor-inner-section' : '.elementor-top-section';
    return {
      connectWith: sectionConnectClass + this.childViewContainer(),
      handle: '> .elementor-element-overlay .elementor-editor-element-edit',
      items: '> .elementor-column',
      forcePlaceholderSize: true,
      tolerance: 'pointer'
    };
  },
  getColumnPercentSize: function getColumnPercentSize(element, size) {
    return +(size / element.parent().width() * 100).toFixed(3);
  },
  getDefaultStructure: function getDefaultStructure() {
    return this.collection.length + '0';
  },
  getStructure: function getStructure() {
    return this.model.getSetting('structure');
  },
  getColumnAt: function getColumnAt(index) {
    var model = this.collection.at(index);
    return model ? this.children.findByModelCid(model.cid) : null;
  },
  getNextColumn: function getNextColumn(columnView) {
    return this.getColumnAt(this.collection.indexOf(columnView.model) + 1);
  },
  getPreviousColumn: function getPreviousColumn(columnView) {
    return this.getColumnAt(this.collection.indexOf(columnView.model) - 1);
  },
  getNeighborContainer: function getNeighborContainer(container) {
    var parentView = container.parent.view,
        nextView = parentView.getNextColumn(container.view) || parentView.getPreviousColumn(container.view);

    if (!nextView) {
      return false;
    }

    return nextView.getContainer();
  },
  setStructure: function setStructure(structure) {
    var shouldAdjustColumns = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
    var parsedStructure = elementor.presetsFactory.getParsedStructure(structure);

    if (+parsedStructure.columnsCount !== this.collection.length) {
      throw new TypeError('The provided structure doesn\'t match the columns count.');
    }

    $e.run('document/elements/settings', {
      container: this.getContainer(),
      settings: {
        structure: structure
      },
      options: {
        external: true
      }
    });

    if (shouldAdjustColumns) {
      this.adjustColumns();
    }
  },
  adjustColumns: function adjustColumns() {
    var preset = elementor.presetsFactory.getPresetByStructure(this.getStructure());
    this.children.each(function (columnView, index) {
      var container = columnView.getContainer();
      $e.run('document/elements/settings', {
        container: container,
        settings: {
          _column_size: preset.preset[index],
          _inline_size: null
        }
      });
    });
  },
  resetLayout: function resetLayout() {
    var shouldAdjustColumns = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
    this.setStructure(this.getDefaultStructure(), shouldAdjustColumns);
  },
  resetColumnsCustomSize: function resetColumnsCustomSize() {
    this.children.each(function (columnView) {
      $e.run('document/elements/settings', {
        container: columnView.getContainer(),
        settings: {
          _inline_size: null
        },
        options: {
          external: true
        }
      });
    });
  },
  isCollectionFilled: function isCollectionFilled() {
    return DEFAULT_MAX_COLUMNS <= this.collection.length;
  },
  showChildrenPercentsTooltip: function showChildrenPercentsTooltip(columnView, nextColumnView) {
    columnView.ui.percentsTooltip.show();
    columnView.ui.percentsTooltip.attr('data-side', elementorCommon.config.isRTL ? 'right' : 'left');
    nextColumnView.ui.percentsTooltip.show();
    nextColumnView.ui.percentsTooltip.attr('data-side', elementorCommon.config.isRTL ? 'left' : 'right');
  },
  hideChildrenPercentsTooltip: function hideChildrenPercentsTooltip(columnView, nextColumnView) {
    columnView.ui.percentsTooltip.hide();
    nextColumnView.ui.percentsTooltip.hide();
  },
  destroyAddSectionView: function destroyAddSectionView() {
    if (this.addSectionView && !this.addSectionView.isDestroyed) {
      this.addSectionView.destroy();
    }
  },
  onRender: function onRender() {
    BaseElementView.prototype.onRender.apply(this, arguments);
    this.toggleSectionIsFull();
  },
  onAddButtonClick: function onAddButtonClick() {
    if (this.addSectionView && !this.addSectionView.isDestroyed) {
      this.addSectionView.fadeToDeath();
      return;
    }

    var addSectionView = new _inline.default({
      at: this.model.collection.indexOf(this.model)
    });
    addSectionView.render();
    this.$el.before(addSectionView.$el);
    addSectionView.$el.hide(); // Delaying the slide down for slow-render browsers (such as FF)

    setTimeout(function () {
      addSectionView.$el.slideDown(null, function () {
        // Remove inline style, for preview mode.
        jQuery(this).css('display', '');
      });
    });
    this.addSectionView = addSectionView;
  },
  onChildviewRequestResizeStart: function onChildviewRequestResizeStart(columnView) {
    var nextColumnView = this.getNextColumn(columnView);

    if (!nextColumnView) {
      return;
    }

    this.showChildrenPercentsTooltip(columnView, nextColumnView);
    var $iframes = columnView.$el.find('iframe').add(nextColumnView.$el.find('iframe'));
    elementor.helpers.disableElementEvents($iframes);
  },
  onChildviewRequestResizeStop: function onChildviewRequestResizeStop(columnView) {
    var nextColumnView = this.getNextColumn(columnView);

    if (!nextColumnView) {
      return;
    }

    this.hideChildrenPercentsTooltip(columnView, nextColumnView);
    var $iframes = columnView.$el.find('iframe').add(nextColumnView.$el.find('iframe'));
    elementor.helpers.enableElementEvents($iframes);
  },
  onChildviewRequestResize: function onChildviewRequestResize(columnView, ui) {
    ui.element.css({
      width: '',
      left: 'initial' // Fix for RTL resizing

    });
    $e.run('document/elements/settings', {
      container: columnView.getContainer(),
      settings: {
        _inline_size: this.getColumnPercentSize(ui.element, ui.size.width)
      }
    });
  },
  onDestroy: function onDestroy() {
    BaseElementView.prototype.onDestroy.apply(this, arguments);
    this.destroyAddSectionView();
  }
});
module.exports = SectionView;
module.exports.DEFAULT_INNER_SECTION_COLUMNS = DEFAULT_INNER_SECTION_COLUMNS;
module.exports.DEFAULT_MIN_COLUMN_SIZE = DEFAULT_MIN_COLUMN_SIZE;
module.exports.DEFAULT_MAX_COLUMNS = DEFAULT_MAX_COLUMNS;

/***/ }),
/* 257 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(96);
__webpack_require__(58);
__webpack_require__(61);
__webpack_require__(258);
__webpack_require__(261);
__webpack_require__(262);
module.exports = __webpack_require__(6).Promise;


/***/ }),
/* 258 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(44);
var global = __webpack_require__(8);
var ctx = __webpack_require__(31);
var classof = __webpack_require__(104);
var $export = __webpack_require__(7);
var isObject = __webpack_require__(9);
var aFunction = __webpack_require__(34);
var anInstance = __webpack_require__(125);
var forOf = __webpack_require__(90);
var speciesConstructor = __webpack_require__(207);
var task = __webpack_require__(208).set;
var microtask = __webpack_require__(259)();
var newPromiseCapabilityModule = __webpack_require__(149);
var perform = __webpack_require__(209);
var userAgent = __webpack_require__(260);
var promiseResolve = __webpack_require__(210);
var PROMISE = 'Promise';
var TypeError = global.TypeError;
var process = global.process;
var versions = process && process.versions;
var v8 = versions && versions.v8 || '';
var $Promise = global[PROMISE];
var isNode = classof(process) == 'process';
var empty = function () { /* empty */ };
var Internal, newGenericPromiseCapability, OwnPromiseCapability, Wrapper;
var newPromiseCapability = newGenericPromiseCapability = newPromiseCapabilityModule.f;

var USE_NATIVE = !!function () {
  try {
    // correct subclassing with @@species support
    var promise = $Promise.resolve(1);
    var FakePromise = (promise.constructor = {})[__webpack_require__(10)('species')] = function (exec) {
      exec(empty, empty);
    };
    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    return (isNode || typeof PromiseRejectionEvent == 'function')
      && promise.then(empty) instanceof FakePromise
      // v8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
      // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
      // we can't detect it synchronously, so just check versions
      && v8.indexOf('6.6') !== 0
      && userAgent.indexOf('Chrome/66') === -1;
  } catch (e) { /* empty */ }
}();

// helpers
var isThenable = function (it) {
  var then;
  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};
var notify = function (promise, isReject) {
  if (promise._n) return;
  promise._n = true;
  var chain = promise._c;
  microtask(function () {
    var value = promise._v;
    var ok = promise._s == 1;
    var i = 0;
    var run = function (reaction) {
      var handler = ok ? reaction.ok : reaction.fail;
      var resolve = reaction.resolve;
      var reject = reaction.reject;
      var domain = reaction.domain;
      var result, then, exited;
      try {
        if (handler) {
          if (!ok) {
            if (promise._h == 2) onHandleUnhandled(promise);
            promise._h = 1;
          }
          if (handler === true) result = value;
          else {
            if (domain) domain.enter();
            result = handler(value); // may throw
            if (domain) {
              domain.exit();
              exited = true;
            }
          }
          if (result === reaction.promise) {
            reject(TypeError('Promise-chain cycle'));
          } else if (then = isThenable(result)) {
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch (e) {
        if (domain && !exited) domain.exit();
        reject(e);
      }
    };
    while (chain.length > i) run(chain[i++]); // variable length - can't use forEach
    promise._c = [];
    promise._n = false;
    if (isReject && !promise._h) onUnhandled(promise);
  });
};
var onUnhandled = function (promise) {
  task.call(global, function () {
    var value = promise._v;
    var unhandled = isUnhandled(promise);
    var result, handler, console;
    if (unhandled) {
      result = perform(function () {
        if (isNode) {
          process.emit('unhandledRejection', value, promise);
        } else if (handler = global.onunhandledrejection) {
          handler({ promise: promise, reason: value });
        } else if ((console = global.console) && console.error) {
          console.error('Unhandled promise rejection', value);
        }
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
    } promise._a = undefined;
    if (unhandled && result.e) throw result.v;
  });
};
var isUnhandled = function (promise) {
  return promise._h !== 1 && (promise._a || promise._c).length === 0;
};
var onHandleUnhandled = function (promise) {
  task.call(global, function () {
    var handler;
    if (isNode) {
      process.emit('rejectionHandled', promise);
    } else if (handler = global.onrejectionhandled) {
      handler({ promise: promise, reason: promise._v });
    }
  });
};
var $reject = function (value) {
  var promise = this;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  promise._v = value;
  promise._s = 2;
  if (!promise._a) promise._a = promise._c.slice();
  notify(promise, true);
};
var $resolve = function (value) {
  var promise = this;
  var then;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  try {
    if (promise === value) throw TypeError("Promise can't be resolved itself");
    if (then = isThenable(value)) {
      microtask(function () {
        var wrapper = { _w: promise, _d: false }; // wrap
        try {
          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
        } catch (e) {
          $reject.call(wrapper, e);
        }
      });
    } else {
      promise._v = value;
      promise._s = 1;
      notify(promise, false);
    }
  } catch (e) {
    $reject.call({ _w: promise, _d: false }, e); // wrap
  }
};

// constructor polyfill
if (!USE_NATIVE) {
  // 25.4.3.1 Promise(executor)
  $Promise = function Promise(executor) {
    anInstance(this, $Promise, PROMISE, '_h');
    aFunction(executor);
    Internal.call(this);
    try {
      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
    } catch (err) {
      $reject.call(this, err);
    }
  };
  // eslint-disable-next-line no-unused-vars
  Internal = function Promise(executor) {
    this._c = [];             // <- awaiting reactions
    this._a = undefined;      // <- checked in isUnhandled reactions
    this._s = 0;              // <- state
    this._d = false;          // <- done
    this._v = undefined;      // <- value
    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
    this._n = false;          // <- notify
  };
  Internal.prototype = __webpack_require__(126)($Promise.prototype, {
    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
    then: function then(onFulfilled, onRejected) {
      var reaction = newPromiseCapability(speciesConstructor(this, $Promise));
      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail = typeof onRejected == 'function' && onRejected;
      reaction.domain = isNode ? process.domain : undefined;
      this._c.push(reaction);
      if (this._a) this._a.push(reaction);
      if (this._s) notify(this, false);
      return reaction.promise;
    },
    // 25.4.5.1 Promise.prototype.catch(onRejected)
    'catch': function (onRejected) {
      return this.then(undefined, onRejected);
    }
  });
  OwnPromiseCapability = function () {
    var promise = new Internal();
    this.promise = promise;
    this.resolve = ctx($resolve, promise, 1);
    this.reject = ctx($reject, promise, 1);
  };
  newPromiseCapabilityModule.f = newPromiseCapability = function (C) {
    return C === $Promise || C === Wrapper
      ? new OwnPromiseCapability(C)
      : newGenericPromiseCapability(C);
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Promise: $Promise });
__webpack_require__(53)($Promise, PROMISE);
__webpack_require__(225)(PROMISE);
Wrapper = __webpack_require__(6)[PROMISE];

// statics
$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
  // 25.4.4.5 Promise.reject(r)
  reject: function reject(r) {
    var capability = newPromiseCapability(this);
    var $$reject = capability.reject;
    $$reject(r);
    return capability.promise;
  }
});
$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
  // 25.4.4.6 Promise.resolve(x)
  resolve: function resolve(x) {
    return promiseResolve(LIBRARY && this === Wrapper ? $Promise : this, x);
  }
});
$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(178)(function (iter) {
  $Promise.all(iter)['catch'](empty);
})), PROMISE, {
  // 25.4.4.1 Promise.all(iterable)
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var values = [];
      var index = 0;
      var remaining = 1;
      forOf(iterable, false, function (promise) {
        var $index = index++;
        var alreadyCalled = false;
        values.push(undefined);
        remaining++;
        C.resolve(promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[$index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if (result.e) reject(result.v);
    return capability.promise;
  },
  // 25.4.4.4 Promise.race(iterable)
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var reject = capability.reject;
    var result = perform(function () {
      forOf(iterable, false, function (promise) {
        C.resolve(promise).then(capability.resolve, reject);
      });
    });
    if (result.e) reject(result.v);
    return capability.promise;
  }
});


/***/ }),
/* 259 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(8);
var macrotask = __webpack_require__(208).set;
var Observer = global.MutationObserver || global.WebKitMutationObserver;
var process = global.process;
var Promise = global.Promise;
var isNode = __webpack_require__(55)(process) == 'process';

module.exports = function () {
  var head, last, notify;

  var flush = function () {
    var parent, fn;
    if (isNode && (parent = process.domain)) parent.exit();
    while (head) {
      fn = head.fn;
      head = head.next;
      try {
        fn();
      } catch (e) {
        if (head) notify();
        else last = undefined;
        throw e;
      }
    } last = undefined;
    if (parent) parent.enter();
  };

  // Node.js
  if (isNode) {
    notify = function () {
      process.nextTick(flush);
    };
  // browsers with MutationObserver, except iOS Safari - https://github.com/zloirock/core-js/issues/339
  } else if (Observer && !(global.navigator && global.navigator.standalone)) {
    var toggle = true;
    var node = document.createTextNode('');
    new Observer(flush).observe(node, { characterData: true }); // eslint-disable-line no-new
    notify = function () {
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if (Promise && Promise.resolve) {
    // Promise.resolve without an argument throws an error in LG WebOS 2
    var promise = Promise.resolve(undefined);
    notify = function () {
      promise.then(flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessag
  // - onreadystatechange
  // - setTimeout
  } else {
    notify = function () {
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(global, flush);
    };
  }

  return function (fn) {
    var task = { fn: fn, next: undefined };
    if (last) last.next = task;
    if (!head) {
      head = task;
      notify();
    } last = task;
  };
};


/***/ }),
/* 260 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(8);
var navigator = global.navigator;

module.exports = navigator && navigator.userAgent || '';


/***/ }),
/* 261 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// https://github.com/tc39/proposal-promise-finally

var $export = __webpack_require__(7);
var core = __webpack_require__(6);
var global = __webpack_require__(8);
var speciesConstructor = __webpack_require__(207);
var promiseResolve = __webpack_require__(210);

$export($export.P + $export.R, 'Promise', { 'finally': function (onFinally) {
  var C = speciesConstructor(this, core.Promise || global.Promise);
  var isFunction = typeof onFinally == 'function';
  return this.then(
    isFunction ? function (x) {
      return promiseResolve(C, onFinally()).then(function () { return x; });
    } : onFinally,
    isFunction ? function (e) {
      return promiseResolve(C, onFinally()).then(function () { throw e; });
    } : onFinally
  );
} });


/***/ }),
/* 262 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/tc39/proposal-promise-try
var $export = __webpack_require__(7);
var newPromiseCapability = __webpack_require__(149);
var perform = __webpack_require__(209);

$export($export.S, 'Promise', { 'try': function (callbackfn) {
  var promiseCapability = newPromiseCapability.f(this);
  var result = perform(callbackfn);
  (result.e ? promiseCapability.reject : promiseCapability.resolve)(result.v);
  return promiseCapability.promise;
} });


/***/ }),
/* 263 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(264);

/***/ }),
/* 264 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(96);
__webpack_require__(61);
__webpack_require__(265);
__webpack_require__(267);
__webpack_require__(268);
module.exports = __webpack_require__(6).WeakMap;


/***/ }),
/* 265 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(8);
var each = __webpack_require__(140)(0);
var redefine = __webpack_require__(88);
var meta = __webpack_require__(75);
var assign = __webpack_require__(212);
var weak = __webpack_require__(266);
var isObject = __webpack_require__(9);
var validate = __webpack_require__(122);
var NATIVE_WEAK_MAP = __webpack_require__(122);
var IS_IE11 = !global.ActiveXObject && 'ActiveXObject' in global;
var WEAK_MAP = 'WeakMap';
var getWeak = meta.getWeak;
var isExtensible = Object.isExtensible;
var uncaughtFrozenStore = weak.ufstore;
var InternalMap;

var wrapper = function (get) {
  return function WeakMap() {
    return get(this, arguments.length > 0 ? arguments[0] : undefined);
  };
};

var methods = {
  // 23.3.3.3 WeakMap.prototype.get(key)
  get: function get(key) {
    if (isObject(key)) {
      var data = getWeak(key);
      if (data === true) return uncaughtFrozenStore(validate(this, WEAK_MAP)).get(key);
      return data ? data[this._i] : undefined;
    }
  },
  // 23.3.3.5 WeakMap.prototype.set(key, value)
  set: function set(key, value) {
    return weak.def(validate(this, WEAK_MAP), key, value);
  }
};

// 23.3 WeakMap Objects
var $WeakMap = module.exports = __webpack_require__(234)(WEAK_MAP, wrapper, methods, weak, true, true);

// IE11 WeakMap frozen keys fix
if (NATIVE_WEAK_MAP && IS_IE11) {
  InternalMap = weak.getConstructor(wrapper, WEAK_MAP);
  assign(InternalMap.prototype, methods);
  meta.NEED = true;
  each(['delete', 'has', 'get', 'set'], function (key) {
    var proto = $WeakMap.prototype;
    var method = proto[key];
    redefine(proto, key, function (a, b) {
      // store frozen objects on internal weakmap shim
      if (isObject(a) && !isExtensible(a)) {
        if (!this._f) this._f = new InternalMap();
        var result = this._f[key](a, b);
        return key == 'set' ? this : result;
      // store all the rest on native weakmap
      } return method.call(this, a, b);
    });
  });
}


/***/ }),
/* 266 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var redefineAll = __webpack_require__(126);
var getWeak = __webpack_require__(75).getWeak;
var anObject = __webpack_require__(11);
var isObject = __webpack_require__(9);
var anInstance = __webpack_require__(125);
var forOf = __webpack_require__(90);
var createArrayMethod = __webpack_require__(140);
var $has = __webpack_require__(17);
var validate = __webpack_require__(122);
var arrayFind = createArrayMethod(5);
var arrayFindIndex = createArrayMethod(6);
var id = 0;

// fallback for uncaught frozen keys
var uncaughtFrozenStore = function (that) {
  return that._l || (that._l = new UncaughtFrozenStore());
};
var UncaughtFrozenStore = function () {
  this.a = [];
};
var findUncaughtFrozen = function (store, key) {
  return arrayFind(store.a, function (it) {
    return it[0] === key;
  });
};
UncaughtFrozenStore.prototype = {
  get: function (key) {
    var entry = findUncaughtFrozen(this, key);
    if (entry) return entry[1];
  },
  has: function (key) {
    return !!findUncaughtFrozen(this, key);
  },
  set: function (key, value) {
    var entry = findUncaughtFrozen(this, key);
    if (entry) entry[1] = value;
    else this.a.push([key, value]);
  },
  'delete': function (key) {
    var index = arrayFindIndex(this.a, function (it) {
      return it[0] === key;
    });
    if (~index) this.a.splice(index, 1);
    return !!~index;
  }
};

module.exports = {
  getConstructor: function (wrapper, NAME, IS_MAP, ADDER) {
    var C = wrapper(function (that, iterable) {
      anInstance(that, C, NAME, '_i');
      that._t = NAME;      // collection type
      that._i = id++;      // collection id
      that._l = undefined; // leak store for uncaught frozen objects
      if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
    });
    redefineAll(C.prototype, {
      // 23.3.3.2 WeakMap.prototype.delete(key)
      // 23.4.3.3 WeakSet.prototype.delete(value)
      'delete': function (key) {
        if (!isObject(key)) return false;
        var data = getWeak(key);
        if (data === true) return uncaughtFrozenStore(validate(this, NAME))['delete'](key);
        return data && $has(data, this._i) && delete data[this._i];
      },
      // 23.3.3.4 WeakMap.prototype.has(key)
      // 23.4.3.4 WeakSet.prototype.has(value)
      has: function has(key) {
        if (!isObject(key)) return false;
        var data = getWeak(key);
        if (data === true) return uncaughtFrozenStore(validate(this, NAME)).has(key);
        return data && $has(data, this._i);
      }
    });
    return C;
  },
  def: function (that, key, value) {
    var data = getWeak(anObject(key), true);
    if (data === true) uncaughtFrozenStore(that).set(key, value);
    else data[that._i] = value;
    return that;
  },
  ufstore: uncaughtFrozenStore
};


/***/ }),
/* 267 */
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/proposal-setmap-offrom/#sec-weakmap.of
__webpack_require__(235)('WeakMap');


/***/ }),
/* 268 */
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/proposal-setmap-offrom/#sec-weakmap.from
__webpack_require__(236)('WeakMap');


/***/ }),
/* 269 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(270);
module.exports = __webpack_require__(6).Object.entries;


/***/ }),
/* 270 */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/tc39/proposal-object-values-entries
var $export = __webpack_require__(7);
var $entries = __webpack_require__(181)(true);

$export($export.S, 'Object', {
  entries: function entries(it) {
    return $entries(it);
  }
});


/***/ }),
/* 271 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__(146)(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(197)(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),
/* 272 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;
var userAgent = navigator.userAgent;
var _default = {
  webkit: -1 !== userAgent.indexOf('AppleWebKit'),
  firefox: -1 !== userAgent.indexOf('Firefox'),
  ie: /Trident|MSIE/.test(userAgent),
  edge: -1 !== userAgent.indexOf('Edge'),
  mac: -1 !== userAgent.indexOf('Macintosh'),
  safari: /^((?!chrome|android).)*safari/i.test(userAgent)
};
exports.default = _default;

/***/ }),
/* 273 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _base = _interopRequireDefault(__webpack_require__(296));

var ContextMenu = __webpack_require__(372);

module.exports = Marionette.Behavior.extend({
  defaults: {
    groups: [],
    eventTargets: ['el']
  },
  events: function events() {
    var events = {};
    this.getOption('eventTargets').forEach(function (eventTarget) {
      var eventName = 'contextmenu';

      if ('el' !== eventTarget) {
        eventName += ' ' + eventTarget;
      }

      events[eventName] = 'onContextMenu';
    });
    return events;
  },
  initialize: function initialize() {
    this.listenTo(this.view.options.model, 'request:contextmenu', this.onRequestContextMenu);
  },
  initContextMenu: function initContextMenu() {
    var _this = this;

    var contextMenuGroups = this.getOption('groups'),
        deleteGroup = _.findWhere(contextMenuGroups, {
      name: 'delete'
    }),
        afterGroupIndex = contextMenuGroups.indexOf(deleteGroup);

    if (-1 === afterGroupIndex) {
      afterGroupIndex = contextMenuGroups.length;
    }

    contextMenuGroups.splice(afterGroupIndex, 0, {
      name: 'tools',
      actions: [{
        name: 'navigator',
        title: elementor.translate('navigator'),
        callback: function callback() {
          return $e.route('navigator', {
            reOpen: true,
            model: _this.view.model
          });
        }
      }]
    });
    this.contextMenu = new ContextMenu({
      groups: contextMenuGroups
    });
    this.contextMenu.getModal().on('hide', this.onContextMenuHide);
  },
  getContextMenu: function getContextMenu() {
    if (!this.contextMenu) {
      this.initContextMenu();
    }

    return this.contextMenu;
  },
  onContextMenu: function onContextMenu(event) {
    if ($e.shortcuts.isControlEvent(event)) {
      return;
    }

    var isAddSectionView = this.view instanceof _base.default;

    if (!isAddSectionView && (!this.view.container || !this.view.container.isDesignable())) {
      return;
    }

    event.preventDefault();
    event.stopPropagation();
    this.getContextMenu().show(event);
    elementor.channels.editor.reply('contextMenu:targetView', this.view);
  },
  onRequestContextMenu: function onRequestContextMenu(event) {
    var modal = this.getContextMenu().getModal(),
        iframe = modal.getSettings('iframe'),
        toolsGroup = _.findWhere(this.contextMenu.getSettings('groups'), {
      name: 'tools'
    });

    toolsGroup.isVisible = false;
    modal.setSettings('iframe', null);
    this.onContextMenu(event);
    toolsGroup.isVisible = true;
    modal.setSettings('iframe', iframe);
  },
  onContextMenuHide: function onContextMenuHide() {
    elementor.channels.editor.reply('contextMenu:targetView', null);
  },
  onDestroy: function onDestroy() {
    if (this.contextMenu) {
      this.contextMenu.destroy();
    }
  }
});

/***/ }),
/* 274 */,
/* 275 */,
/* 276 */,
/* 277 */,
/* 278 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = exports.After = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(3));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var _createSuper2 = _interopRequireDefault(__webpack_require__(5));

var _base = _interopRequireDefault(__webpack_require__(314));

var After = /*#__PURE__*/function (_Base) {
  (0, _inherits2.default)(After, _Base);

  var _super = (0, _createSuper2.default)(After);

  function After() {
    (0, _classCallCheck2.default)(this, After);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(After, [{
    key: "register",
    value: function register() {
      $e.hooks.registerUIAfter(this);
    }
  }]);
  return After;
}(_base.default);

exports.After = After;
var _default = After;
exports.default = _default;

/***/ }),
/* 279 */,
/* 280 */
/***/ (function(module, exports, __webpack_require__) {

// 21.2.5.3 get RegExp.prototype.flags()
if (__webpack_require__(27) && /./g.flags != 'g') __webpack_require__(49).f(RegExp.prototype, 'flags', {
  configurable: true,
  get: __webpack_require__(109)
});


/***/ }),
/* 281 */,
/* 282 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(283);
module.exports = __webpack_require__(6).parseInt;


/***/ }),
/* 283 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(7);
var $parseInt = __webpack_require__(284);
// 18.2.5 parseInt(string, radix)
$export($export.G + $export.F * (parseInt != $parseInt), { parseInt: $parseInt });


/***/ }),
/* 284 */
/***/ (function(module, exports, __webpack_require__) {

var $parseInt = __webpack_require__(8).parseInt;
var $trim = __webpack_require__(285).trim;
var ws = __webpack_require__(237);
var hex = /^[-+]?0[xX]/;

module.exports = $parseInt(ws + '08') !== 8 || $parseInt(ws + '0x16') !== 22 ? function parseInt(str, radix) {
  var string = $trim(String(str), 3);
  return $parseInt(string, (radix >>> 0) || (hex.test(string) ? 16 : 10));
} : $parseInt;


/***/ }),
/* 285 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(7);
var defined = __webpack_require__(65);
var fails = __webpack_require__(21);
var spaces = __webpack_require__(237);
var space = '[' + spaces + ']';
var non = '\u200b\u0085';
var ltrim = RegExp('^' + space + space + '*');
var rtrim = RegExp(space + space + '*$');

var exporter = function (KEY, exec, ALIAS) {
  var exp = {};
  var FORCE = fails(function () {
    return !!spaces[KEY]() || non[KEY]() != non;
  });
  var fn = exp[KEY] = FORCE ? exec(trim) : spaces[KEY];
  if (ALIAS) exp[ALIAS] = fn;
  $export($export.P + $export.F * FORCE, 'String', exp);
};

// 1 -> String#trimLeft
// 2 -> String#trimRight
// 3 -> String#trim
var trim = exporter.trim = function (string, TYPE) {
  string = String(defined(string));
  if (TYPE & 1) string = string.replace(ltrim, '');
  if (TYPE & 2) string = string.replace(rtrim, '');
  return string;
};

module.exports = exporter;


/***/ }),
/* 286 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = exports.Base = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(3));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var _createSuper2 = _interopRequireDefault(__webpack_require__(5));

var _hookBase = _interopRequireDefault(__webpack_require__(294));

var Base = /*#__PURE__*/function (_HookBase) {
  (0, _inherits2.default)(Base, _HookBase);

  var _super = (0, _createSuper2.default)(Base);

  function Base() {
    (0, _classCallCheck2.default)(this, Base);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(Base, [{
    key: "getType",
    value: function getType() {
      return 'data';
    }
  }]);
  return Base;
}(_hookBase.default);

exports.Base = Base;
var _default = Base;
exports.default = _default;

/***/ }),
/* 287 */,
/* 288 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(289);
module.exports = __webpack_require__(6).Object.assign;


/***/ }),
/* 289 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(7);

$export($export.S + $export.F, 'Object', { assign: __webpack_require__(212) });


/***/ }),
/* 290 */,
/* 291 */,
/* 292 */,
/* 293 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _keys = _interopRequireDefault(__webpack_require__(25));

__webpack_require__(295);

__webpack_require__(120);

__webpack_require__(60);

__webpack_require__(40);

__webpack_require__(26);

var Stylesheet = __webpack_require__(332),
    ControlsCSSParser;

ControlsCSSParser = elementorModules.ViewModule.extend({
  stylesheet: null,
  getDefaultSettings: function getDefaultSettings() {
    return {
      id: 0,
      context: null,
      settingsModel: null,
      dynamicParsing: {}
    };
  },
  getDefaultElements: function getDefaultElements() {
    var id = "elementor-style-".concat(this.getSettings('id'));
    var $stylesheet = elementor.$previewContents.find("#".concat(id));

    if (!$stylesheet.length) {
      $stylesheet = jQuery('<style>', {
        id: id
      });
    }

    return {
      $stylesheetElement: $stylesheet
    };
  },
  initStylesheet: function initStylesheet() {
    var breakpoints = elementorFrontend.config.breakpoints;
    this.stylesheet = new Stylesheet();
    this.stylesheet.addDevice('mobile', 0).addDevice('tablet', breakpoints.md).addDevice('desktop', breakpoints.lg);
  },
  addStyleRules: function addStyleRules(styleControls, values, controls, placeholders, replacements) {
    var _this = this;

    // If the current element contains dynamic values, parse these values
    var dynamicParsedValues = this.getSettings('settingsModel').parseDynamicSettings(values, this.getSettings('dynamicParsing'), styleControls);

    _.each(styleControls, function (control) {
      var _control$dynamic, _values$__dynamic__;

      if (control.styleFields && control.styleFields.length) {
        _this.addRepeaterControlsStyleRules(values[control.name], control.styleFields, control.fields, placeholders, replacements);
      } // If a dynamic tag includes controls with CSS implementations, Take their CSS and apply it.


      if (((_control$dynamic = control.dynamic) === null || _control$dynamic === void 0 ? void 0 : _control$dynamic.active) && ((_values$__dynamic__ = values.__dynamic__) === null || _values$__dynamic__ === void 0 ? void 0 : _values$__dynamic__[control.name])) {
        _this.addDynamicControlStyleRules(values.__dynamic__[control.name], control);
      }

      if (!control.selectors) {
        return;
      }

      var context = _this.getSettings('context');

      var globalKeys;

      if (context) {
        globalKeys = context.model.get('settings').get('__globals__');
      }

      _this.addControlStyleRules(control, dynamicParsedValues, controls, placeholders, replacements, globalKeys);
    });
  },
  addControlStyleRules: function addControlStyleRules(control, values, controls, placeholders, replacements, globalKeys) {
    var _this2 = this;

    var globalKey;

    if (globalKeys) {
      var controlGlobalKey = control.name;

      if (control.groupType) {
        controlGlobalKey = control.groupPrefix + control.groupType;
      }

      globalKey = globalKeys[controlGlobalKey];
    }

    var value;

    if (!globalKey) {
      value = this.getStyleControlValue(control, values);

      if (undefined === value) {
        return;
      }
    }

    _.each(control.selectors, function (cssProperty, selector) {
      var outputCssProperty;

      if (globalKey) {
        var selectorGlobalValue = _this2.getSelectorGlobalValue(control, globalKey);

        if (selectorGlobalValue) {
          if ('font' === control.type) {
            $e.data.get(globalKey).then(function (response) {
              elementor.helpers.enqueueFont(response.data.value.typography_font_family);
            });
          } // This regex handles a case where a control's selector property value includes more than one CSS selector.
          // Example: 'selector' => 'background: {{VALUE}}; background-color: {{VALUE}};'.


          outputCssProperty = cssProperty.replace(/(:)[^;]+(;?)/g, '$1' + selectorGlobalValue + '$2');
        }
      } else {
        try {
          outputCssProperty = cssProperty.replace(/{{(?:([^.}]+)\.)?([^}| ]*)(?: *\|\| *(?:([^.}]+)\.)?([^}| ]*) *)*}}/g, function (originalPhrase, controlName, placeholder, fallbackControlName, fallbackValue) {
            var externalControlMissing = controlName && !controls[controlName];
            var parsedValue = '';

            if (!externalControlMissing) {
              parsedValue = _this2.parsePropertyPlaceholder(control, value, controls, values, placeholder, controlName);
            }

            if (!parsedValue && 0 !== parsedValue) {
              if (fallbackValue) {
                parsedValue = fallbackValue;
                var stringValueMatches = parsedValue.match(/^(['"])(.*)\1$/);

                if (stringValueMatches) {
                  parsedValue = stringValueMatches[2];
                } else if (!isFinite(parsedValue)) {
                  if (fallbackControlName && !controls[fallbackControlName]) {
                    return '';
                  }

                  parsedValue = _this2.parsePropertyPlaceholder(control, value, controls, values, fallbackValue, fallbackControlName);
                }
              }

              if (!parsedValue && 0 !== parsedValue) {
                if (externalControlMissing) {
                  return '';
                }

                throw '';
              }
            }

            if ('font' === control.type) {
              elementor.helpers.enqueueFont(parsedValue);
            }

            return parsedValue;
          });
        } catch (e) {
          return;
        }
      }

      if (_.isEmpty(outputCssProperty)) {
        return;
      }

      var devicePattern = /^(?:\([^)]+\)){1,2}/,
          deviceRules = selector.match(devicePattern),
          query = {};

      if (deviceRules) {
        deviceRules = deviceRules[0];
        selector = selector.replace(devicePattern, '');
        var pureDevicePattern = /\(([^)]+)\)/g,
            pureDeviceRules = [],
            matches;
        matches = pureDevicePattern.exec(deviceRules);

        while (matches) {
          pureDeviceRules.push(matches[1]);
          matches = pureDevicePattern.exec(deviceRules);
        }

        _.each(pureDeviceRules, function (deviceRule) {
          if ('desktop' === deviceRule) {
            return;
          }

          var device = deviceRule.replace(/\+$/, ''),
              endPoint = device === deviceRule ? 'max' : 'min';
          query[endPoint] = device;
        });
      }

      _.each(placeholders, function (placeholder, index) {
        // Check if it's a RegExp
        var regexp = placeholder.source ? placeholder.source : placeholder,
            placeholderPattern = new RegExp(regexp, 'g');
        selector = selector.replace(placeholderPattern, replacements[index]);
      });

      if (!(0, _keys.default)(query).length && control.responsive) {
        query = _.pick(elementorCommon.helpers.cloneObject(control.responsive), ['min', 'max']);

        if ('desktop' === query.max) {
          delete query.max;
        }
      }

      _this2.stylesheet.addRules(selector, outputCssProperty, query);
    });
  },
  parsePropertyPlaceholder: function parsePropertyPlaceholder(control, value, controls, values, placeholder, parserControlName) {
    if (parserControlName) {
      control = _.findWhere(controls, {
        name: parserControlName
      });
      value = this.getStyleControlValue(control, values);
    }

    return elementor.getControlView(control.type).getStyleValue(placeholder, value, control);
  },
  getStyleControlValue: function getStyleControlValue(control, values) {
    var _values$__globals__;

    if ((_values$__globals__ = values.__globals__) === null || _values$__globals__ === void 0 ? void 0 : _values$__globals__[control.name]) {
      // When the control itself has no global value, but it refers to another control global value
      return this.getSelectorGlobalValue(control, values.__globals__[control.name]);
    }

    var value = values[control.name];

    if (control.selectors_dictionary) {
      value = control.selectors_dictionary[value] || value;
    }

    if (!_.isNumber(value) && _.isEmpty(value)) {
      return;
    }

    return value;
  },
  getSelectorGlobalValue: function getSelectorGlobalValue(control, globalKey) {
    var globalArgs = $e.data.commandExtractArgs(globalKey),
        data = $e.data.getCache($e.components.get('globals'), globalArgs.command, globalArgs.args.query);

    if (!(data === null || data === void 0 ? void 0 : data.value)) {
      return;
    }

    var id = data.id;
    var value; // it's a global settings with additional controls in group.

    if (control.groupType) {
      var propertyName = control.name.replace(control.groupPrefix, '').replace(/(_tablet|_mobile)$/, '');

      if (!data.value[elementor.config.kit_config.typography_prefix + propertyName]) {
        return;
      }

      propertyName = propertyName.replace('_', '-');
      value = "var( --e-global-".concat(control.groupType, "-").concat(id, "-").concat(propertyName, " )");
    } else {
      value = "var( --e-global-".concat(control.type, "-").concat(id, " )");
    }

    return value;
  },
  addRepeaterControlsStyleRules: function addRepeaterControlsStyleRules(repeaterValues, repeaterControlsItems, controls, placeholders, replacements) {
    var _this3 = this;

    repeaterControlsItems.forEach(function (item, index) {
      var itemModel = repeaterValues.models[index];

      _this3.addStyleRules(item, itemModel.attributes, controls, placeholders.concat(['{{CURRENT_ITEM}}']), replacements.concat(['.elementor-repeater-item-' + itemModel.get('_id')]));
    });
  },
  addDynamicControlStyleRules: function addDynamicControlStyleRules(value, control) {
    var self = this;
    elementor.dynamicTags.parseTagsText(value, control.dynamic, function (id, name, settings) {
      var tag = elementor.dynamicTags.createTag(id, name, settings);

      if (!tag) {
        return;
      }

      var tagSettingsModel = tag.model,
          styleControls = tagSettingsModel.getStyleControls();

      if (!styleControls.length) {
        return;
      }

      self.addStyleRules(tagSettingsModel.getStyleControls(), tagSettingsModel.attributes, tagSettingsModel.controls, ['{{WRAPPER}}'], ['#elementor-tag-' + id]);
    });
  },
  addStyleToDocument: function addStyleToDocument(position) {
    var $head = elementor.$previewContents.find('head');
    var insertMethod = 'append',
        $insertBy = $head;

    if (position) {
      var $targetElement = $head.children(position.of);

      if ($targetElement.length) {
        insertMethod = position.at;
        $insertBy = $targetElement;
      }
    }

    $insertBy[insertMethod](this.elements.$stylesheetElement);
    var extraCSS = elementor.hooks.applyFilters('editor/style/styleText', '', this.getSettings('context'));
    this.elements.$stylesheetElement.text(this.stylesheet + extraCSS);
  },
  removeStyleFromDocument: function removeStyleFromDocument() {
    this.elements.$stylesheetElement.remove();
  },
  onInit: function onInit() {
    elementorModules.ViewModule.prototype.onInit.apply(this, arguments);
    this.initStylesheet();
  }
});
module.exports = ControlsCSSParser;

/***/ }),
/* 294 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(3));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(28));

var HookBase = /*#__PURE__*/function () {
  /**
   * Callback type, eg ( hook, event ).
   *
   * @type {string}
   */

  /**
   * Full command address, that will hook the callback.
   *
   * @type (string)
   */

  /**
   * Unique id of the callback.
   *
   * @type {string}
   */

  /**
   * Function constructor().
   *
   * Create callback base.
   */
  function HookBase() {
    (0, _classCallCheck2.default)(this, HookBase);
    (0, _defineProperty2.default)(this, "type", void 0);
    (0, _defineProperty2.default)(this, "command", void 0);
    (0, _defineProperty2.default)(this, "id", void 0);
    this.initialize();
    this.type = this.getType();
    this.command = this.getCommand();
    this.id = this.getId();
  }
  /**
   * Function initialize().
   *
   * Called after creation of the base, used for initialize extras.
   * Without expending constructor.
   */


  (0, _createClass2.default)(HookBase, [{
    key: "initialize",
    value: function initialize() {}
    /**
     * Function register().
     *
     * Used to register the callback.
     *
     * @throws {Error}
     */

  }, {
    key: "register",
    value: function register() {
      elementorModules.ForceMethodImplementation();
    }
    /**
     * Function getType().
     *
     * Get type eg: ( hook, event, etc ... ).
     *
     * @returns {string}
     *
     * @throws {Error}
     */

  }, {
    key: "getType",
    value: function getType() {
      elementorModules.ForceMethodImplementation();
    }
    /**
     * Function getCommand().
     *
     * Returns the full command path for callback binding.
     *
     * Supports array of strings ( commands ).
     *
     * @returns {string}
     *
     * @throws {Error}
     */

  }, {
    key: "getCommand",
    value: function getCommand() {
      elementorModules.ForceMethodImplementation();
    }
    /**
     * Function getId().
     *
     * Returns command id for the hook (should be unique).
     *
     * @returns {string}
     *
     * @throws {Error}
     */

  }, {
    key: "getId",
    value: function getId() {
      elementorModules.ForceMethodImplementation();
    }
    /**
     * Function getContainerType().
     *
     * Bind eContainer type to callback.
     *
     * Used to gain performance.
     *
     * @return {string} type
     */

  }, {
    key: "getContainerType",
    value: function getContainerType() {}
    /**
     * Function getConditions().
     *
     * Condition for running the callback, if true, call to apply().
     *
     * @param [args={}]
     * @param [result=*]
     *
     * @returns {boolean}
     */

  }, {
    key: "getConditions",
    value: function getConditions() {
      var args = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var result = arguments.length > 1 ? arguments[1] : undefined;
      // eslint-disable-line no-unused-vars
      return true;
    }
    /**
     * Function apply().
     *
     * Apply the callback, ( The actual affect of the callback ).
     *
     * @param [args={}]
     *
     * @returns {*}
     */

  }, {
    key: "apply",
    value: function apply(args) {
      // eslint-disable-line no-unused-vars
      elementorModules.ForceMethodImplementation();
    }
    /**
     * Function run().
     *
     * Run the callback.
     *
     * @param {*} args
     *
     * @returns {*}
     */

  }, {
    key: "run",
    value: function run() {
      var _ref = arguments.length <= 0 ? undefined : arguments[0],
          _ref$options = _ref.options,
          options = _ref$options === void 0 ? {} : _ref$options; // Disable callback if requested by args.options.


      if (options.callbacks && false === options.callbacks[this.id]) {
        return true;
      }

      if (this.getConditions.apply(this, arguments)) {
        if ($e.devTools) {
          $e.devTools.log.callbacks().active(this.type, this.command, this.id);
        }

        return this.apply.apply(this, arguments);
      }

      return true;
    }
  }]);
  return HookBase;
}();

exports.default = HookBase;

/***/ }),
/* 295 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(18);
var inheritIfRequired = __webpack_require__(310);
var dP = __webpack_require__(49).f;
var gOPN = __webpack_require__(312).f;
var isRegExp = __webpack_require__(123);
var $flags = __webpack_require__(109);
var $RegExp = global.RegExp;
var Base = $RegExp;
var proto = $RegExp.prototype;
var re1 = /a/g;
var re2 = /a/g;
// "new" creates a new object, old webkit buggy here
var CORRECT_NEW = new $RegExp(re1) !== re1;

if (__webpack_require__(27) && (!CORRECT_NEW || __webpack_require__(35)(function () {
  re2[__webpack_require__(13)('match')] = false;
  // RegExp constructor can alter flags and IsRegExp works correct with @@match
  return $RegExp(re1) != re1 || $RegExp(re2) == re2 || $RegExp(re1, 'i') != '/a/i';
}))) {
  $RegExp = function RegExp(p, f) {
    var tiRE = this instanceof $RegExp;
    var piRE = isRegExp(p);
    var fiU = f === undefined;
    return !tiRE && piRE && p.constructor === $RegExp && fiU ? p
      : inheritIfRequired(CORRECT_NEW
        ? new Base(piRE && !fiU ? p.source : p, f)
        : Base((piRE = p instanceof $RegExp) ? p.source : p, piRE && fiU ? $flags.call(p) : f)
      , tiRE ? this : proto, $RegExp);
  };
  var proxy = function (key) {
    key in $RegExp || dP($RegExp, key, {
      configurable: true,
      get: function () { return Base[key]; },
      set: function (it) { Base[key] = it; }
    });
  };
  for (var keys = gOPN(Base), i = 0; keys.length > i;) proxy(keys[i++]);
  proto.constructor = $RegExp;
  $RegExp.prototype = proto;
  __webpack_require__(39)(global, 'RegExp', $RegExp);
}

__webpack_require__(309)('RegExp');


/***/ }),
/* 296 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

var _assign = _interopRequireDefault(__webpack_require__(138));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(3));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var _createSuper2 = _interopRequireDefault(__webpack_require__(5));

var _helper = _interopRequireDefault(__webpack_require__(215));

var AddSectionBase = /*#__PURE__*/function (_Marionette$ItemView) {
  (0, _inherits2.default)(AddSectionBase, _Marionette$ItemView);

  var _super = (0, _createSuper2.default)(AddSectionBase);

  function AddSectionBase() {
    (0, _classCallCheck2.default)(this, AddSectionBase);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(AddSectionBase, [{
    key: "template",
    value: function template() {
      return Marionette.TemplateCache.get('#tmpl-elementor-add-section');
    }
  }, {
    key: "attributes",
    value: function attributes() {
      return {
        'data-view': 'choose-action'
      };
    }
  }, {
    key: "ui",
    value: function ui() {
      return {
        addNewSection: '.elementor-add-new-section',
        closeButton: '.elementor-add-section-close',
        addSectionButton: '.elementor-add-section-button',
        addTemplateButton: '.elementor-add-template-button',
        selectPreset: '.elementor-select-preset',
        presets: '.elementor-preset'
      };
    }
  }, {
    key: "events",
    value: function events() {
      return {
        'click @ui.addSectionButton': 'onAddSectionButtonClick',
        'click @ui.addTemplateButton': 'onAddTemplateButtonClick',
        'click @ui.closeButton': 'onCloseButtonClick',
        'click @ui.presets': 'onPresetSelected'
      };
    }
  }, {
    key: "behaviors",
    value: function behaviors() {
      return {
        contextMenu: {
          behaviorClass: __webpack_require__(273),
          groups: this.getContextMenuGroups()
        }
      };
    }
  }, {
    key: "className",
    value: function className() {
      return 'elementor-add-section elementor-visible-desktop';
    }
  }, {
    key: "setView",
    value: function setView(view) {
      this.$el.attr('data-view', view);
    }
  }, {
    key: "showSelectPresets",
    value: function showSelectPresets() {
      this.setView('select-preset');
    }
  }, {
    key: "closeSelectPresets",
    value: function closeSelectPresets() {
      this.setView('choose-action');
    }
  }, {
    key: "getTemplatesModalOptions",
    value: function getTemplatesModalOptions() {
      return {
        importOptions: {
          at: this.getOption('at')
        }
      };
    }
  }, {
    key: "getContextMenuGroups",
    value: function getContextMenuGroups() {
      var _this = this;

      var hasContent = function hasContent() {
        return elementor.elements.length > 0;
      };

      return [{
        name: 'paste',
        actions: [{
          name: 'paste',
          title: elementor.translate('paste'),
          isEnabled: function isEnabled() {
            return _helper.default.isPasteEnabled(elementor.getPreviewContainer());
          },
          callback: function callback() {
            return $e.run('document/ui/paste', {
              container: elementor.getPreviewContainer(),
              options: {
                at: _this.getOption('at'),
                rebuild: true
              },
              onAfter: function onAfter() {
                return _this.onAfterPaste();
              }
            });
          }
        }]
      }, {
        name: 'content',
        actions: [{
          name: 'copy_all_content',
          title: elementor.translate('copy_all_content'),
          isEnabled: hasContent,
          callback: function callback() {
            return $e.run('document/elements/copy-all');
          }
        }, {
          name: 'delete_all_content',
          title: elementor.translate('delete_all_content'),
          isEnabled: hasContent,
          callback: function callback() {
            return $e.run('document/elements/empty');
          }
        }]
      }];
    }
  }, {
    key: "onAddSectionButtonClick",
    value: function onAddSectionButtonClick() {
      this.showSelectPresets();
    }
  }, {
    key: "onAddTemplateButtonClick",
    value: function onAddTemplateButtonClick() {
      $e.run('library/open', this.getTemplatesModalOptions());
    }
  }, {
    key: "onRender",
    value: function onRender() {
      this.$el.html5Droppable({
        axis: ['vertical'],
        groups: ['elementor-element'],
        placeholder: false,
        currentElementClass: 'elementor-html5dnd-current-element',
        hasDraggingOnChildClass: 'elementor-dragging-on-child',
        onDropping: this.onDropping.bind(this)
      });
    }
  }, {
    key: "onPresetSelected",
    value: function onPresetSelected(event) {
      this.closeSelectPresets();
      var selectedStructure = event.currentTarget.dataset.structure,
          parsedStructure = elementor.presetsFactory.getParsedStructure(selectedStructure);
      $e.run('document/elements/create', {
        model: {
          elType: 'section'
        },
        container: elementor.getPreviewContainer(),
        columns: parsedStructure.columnsCount,
        structure: selectedStructure,
        options: (0, _assign.default)({}, this.options)
      });
    }
  }, {
    key: "onDropping",
    value: function onDropping() {
      if (elementor.helpers.maybeDisableWidget()) {
        return;
      }

      var selectedElement = elementor.channels.panelElements.request('element:selected'),
          historyId = $e.internal('document/history/start-log', {
        type: 'add',
        title: elementor.helpers.getModelLabel(selectedElement.model)
      }),
          eSection = $e.run('document/elements/create', {
        model: {
          elType: 'section'
        },
        container: elementor.getPreviewContainer(),
        columns: 1,
        options: {
          at: this.getOption('at'),
          // BC: Deprecated since 2.8.0 - use `$e.hooks`.
          trigger: {
            beforeAdd: 'section:before:drop',
            afterAdd: 'section:after:drop'
          }
        }
      }); // Create the element in column.

      eSection.view.children.findByIndex(0).addElementFromPanel();
      $e.internal('document/history/end-log', {
        id: historyId
      });
    }
  }, {
    key: "onAfterPaste",
    value: function onAfterPaste() {}
  }]);
  return AddSectionBase;
}(Marionette.ItemView);

var _default = AddSectionBase;
exports.default = _default;

/***/ }),
/* 297 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

__webpack_require__(26);

__webpack_require__(40);

var _isArray = _interopRequireDefault(__webpack_require__(85));

var _typeof2 = _interopRequireDefault(__webpack_require__(47));

var _parseInt2 = _interopRequireDefault(__webpack_require__(213));

var _keys = _interopRequireDefault(__webpack_require__(25));

var _environment = _interopRequireDefault(__webpack_require__(272));

var _helper = _interopRequireDefault(__webpack_require__(215));

var ControlsCSSParser = __webpack_require__(293),
    Validator = __webpack_require__(300),
    BaseContainer = __webpack_require__(333),
    BaseElementView;

BaseElementView = BaseContainer.extend({
  tagName: 'div',
  controlsCSSParser: null,
  allowRender: true,
  toggleEditTools: false,
  renderAttributes: {},
  className: function className() {
    var classes = 'elementor-element elementor-element-edit-mode ' + this.getElementUniqueID();

    if (this.toggleEditTools) {
      classes += ' elementor-element--toggle-edit-tools';
    }

    return classes;
  },
  attributes: function attributes() {
    return {
      'data-id': this.getID(),
      'data-element_type': this.model.get('elType')
    };
  },
  ui: function ui() {
    return {
      tools: '> .elementor-element-overlay > .elementor-editor-element-settings',
      editButton: '> .elementor-element-overlay .elementor-editor-element-edit',
      duplicateButton: '> .elementor-element-overlay .elementor-editor-element-duplicate',
      addButton: '> .elementor-element-overlay .elementor-editor-element-add',
      removeButton: '> .elementor-element-overlay .elementor-editor-element-remove'
    };
  },
  behaviors: function behaviors() {
    var groups = elementor.hooks.applyFilters('elements/' + this.options.model.get('elType') + '/contextMenuGroups', this.getContextMenuGroups(), this);
    var behaviors = {
      contextMenu: {
        behaviorClass: __webpack_require__(273),
        groups: groups
      }
    };
    return elementor.hooks.applyFilters('elements/base/behaviors', behaviors, this);
  },
  getBehavior: function getBehavior(name) {
    return this._behaviors[(0, _keys.default)(this.behaviors()).indexOf(name)];
  },
  events: function events() {
    return {
      mousedown: 'onMouseDown',
      'click @ui.editButton': 'onEditButtonClick',
      'click @ui.duplicateButton': 'onDuplicateButtonClick',
      'click @ui.addButton': 'onAddButtonClick',
      'click @ui.removeButton': 'onRemoveButtonClick'
    };
  },
  getElementType: function getElementType() {
    return this.model.get('elType');
  },
  getIDInt: function getIDInt() {
    return (0, _parseInt2.default)(this.getID(), 16);
  },
  getChildType: function getChildType() {
    return elementor.helpers.getElementChildType(this.getElementType());
  },
  getChildView: function getChildView(model) {
    var ChildView;
    var elType = model.get('elType');

    if ('section' === elType) {
      ChildView = __webpack_require__(256);
    } else if ('column' === elType) {
      ChildView = __webpack_require__(374);
    } else {
      ChildView = elementor.modules.elements.views.Widget;
    }

    return elementor.hooks.applyFilters('element/view', ChildView, model, this);
  },
  getTemplateType: function getTemplateType() {
    return 'js';
  },
  getEditModel: function getEditModel() {
    return this.model;
  },
  getContainer: function getContainer() {
    var _this = this;

    if (!this.container) {
      var settingsModel = this.model.get('settings');
      this.container = new elementorModules.editor.Container({
        type: this.model.get('elType'),
        id: this.model.id,
        model: this.model,
        settings: settingsModel,
        view: this,
        parent: this._parent ? this._parent.getContainer() : {},
        children: [],
        label: elementor.helpers.getModelLabel(this.model),
        controls: settingsModel.options.controls
      });

      if ((0, _keys.default)(this.container.parent).length) {
        this.container.parent.children[this._index] = this.container;
        this.on('destroy', function () {
          delete _this.container.parent.children[_this._index];
          _this.container.parent.children = _this.container.parent.children.filter(function (child) {
            return null !== child;
          });
        });
      }
    }

    return this.container;
  },
  getContextMenuGroups: function getContextMenuGroups() {
    var _this2 = this;

    var controlSign = _environment.default.mac ? '⌘' : '^';
    return [{
      name: 'general',
      actions: [{
        name: 'edit',
        icon: 'eicon-edit',
        title: elementor.translate('edit_element', [this.options.model.getTitle()]),
        callback: function callback() {
          return $e.run('panel/editor/open', {
            model: _this2.options.model,
            // Todo: remove on merge router
            view: _this2,
            // Todo: remove on merge router
            container: _this2.getContainer()
          });
        }
      }, {
        name: 'duplicate',
        icon: 'eicon-clone',
        title: elementor.translate('duplicate'),
        shortcut: controlSign + '+D',
        callback: function callback() {
          return $e.run('document/elements/duplicate', {
            container: _this2.getContainer()
          });
        }
      }]
    }, {
      name: 'clipboard',
      actions: [{
        name: 'copy',
        title: elementor.translate('copy'),
        shortcut: controlSign + '+C',
        callback: function callback() {
          return $e.run('document/elements/copy', {
            container: _this2.getContainer()
          });
        }
      }, {
        name: 'paste',
        title: elementor.translate('paste'),
        shortcut: controlSign + '+V',
        isEnabled: function isEnabled() {
          return _helper.default.isPasteEnabled(_this2.getContainer());
        },
        callback: function callback() {
          return $e.run('document/ui/paste', {
            container: _this2.getContainer()
          });
        }
      }, {
        name: 'pasteStyle',
        title: elementor.translate('paste_style'),
        shortcut: controlSign + '+⇧+V',
        isEnabled: function isEnabled() {
          return !!elementorCommon.storage.get('clipboard');
        },
        callback: function callback() {
          return $e.run('document/elements/paste-style', {
            container: _this2.getContainer()
          });
        }
      }, {
        name: 'resetStyle',
        title: elementor.translate('reset_style'),
        callback: function callback() {
          return $e.run('document/elements/reset-style', {
            container: _this2.getContainer()
          });
        }
      }]
    }, {
      name: 'delete',
      actions: [{
        name: 'delete',
        icon: 'eicon-trash',
        title: elementor.translate('delete'),
        shortcut: '⌦',
        callback: function callback() {
          return $e.run('document/elements/delete', {
            container: _this2.getContainer()
          });
        }
      }]
    }];
  },
  getEditButtons: function getEditButtons() {
    return {};
  },
  initialize: function initialize() {
    var _this3 = this;

    BaseContainer.prototype.initialize.apply(this, arguments);
    var editModel = this.getEditModel();

    if (this.collection && this.onCollectionChanged) {
      elementorCommon.helpers.softDeprecated('onCollectionChanged', '2.8.0', '$e.hooks');
      this.listenTo(this.collection, 'add remove reset', this.onCollectionChanged, this);
    }

    if (this.onSettingsChanged) {
      elementorCommon.helpers.softDeprecated('onSettingsChanged', '2.8.0', '$e.hooks');
      this.listenTo(editModel.get('settings'), 'change', this.onSettingsChanged);
    }

    this.listenTo(editModel.get('editSettings'), 'change', this.onEditSettingsChanged).listenTo(this.model, 'request:edit', this.onEditRequest).listenTo(this.model, 'request:toggleVisibility', this.toggleVisibility);
    this.initControlsCSSParser();

    _.defer(function () {
      // Init container. Defer - in order to init the container after the element is fully initialized, and properties like `_parent` are available.
      _this3.getContainer();
    });
  },
  getHandlesOverlay: function getHandlesOverlay() {
    var $handlesOverlay = jQuery('<div>', {
      class: 'elementor-element-overlay'
    }),
        $overlayList = jQuery('<ul>', {
      class: "elementor-editor-element-settings elementor-editor-".concat(this.getElementType(), "-settings")
    });
    jQuery.each(this.getEditButtons(), function (toolName, tool) {
      var $item = jQuery('<li>', {
        class: "elementor-editor-element-setting elementor-editor-element-".concat(toolName),
        title: tool.title
      }),
          $icon = jQuery('<i>', {
        class: "eicon-".concat(tool.icon),
        'aria-hidden': true
      }),
          $a11y = jQuery('<span>', {
        class: 'elementor-screen-only'
      });
      $a11y.text(tool.title);
      $item.append($icon, $a11y);
      $overlayList.append($item);
    });
    $handlesOverlay.append($overlayList);
    return $handlesOverlay;
  },
  attachElContent: function attachElContent(html) {
    this.$el.empty().append(this.getHandlesOverlay(), html);
  },
  startTransport: function startTransport() {
    elementorCommon.helpers.softDeprecated('element.startTransport', '2.8.0', "$e.run( 'document/elements/copy' )");
    $e.run('document/elements/copy', {
      container: this.getContainer()
    });
  },
  copy: function copy() {
    elementorCommon.helpers.softDeprecated('element.copy', '2.8.0', "$e.run( 'document/elements/copy' )");
    $e.run('document/elements/copy', {
      container: this.getContainer()
    });
  },
  cut: function cut() {
    elementorCommon.helpers.softDeprecated('element.cut', '2.8.0');
  },
  paste: function paste() {
    elementorCommon.helpers.softDeprecated('element.paste', '2.8.0', "$e.run( 'document/elements/paste' )");
    $e.run('document/elements/paste', {
      container: this.getContainer(),
      at: this._parent.collection.indexOf(this.model)
    });
  },
  duplicate: function duplicate() {
    elementorCommon.helpers.softDeprecated('element.duplicate', '2.8.0', "$e.run( 'document/elements/duplicate' )");
    $e.run('document/elements/duplicate', {
      container: this.getContainer()
    });
  },
  pasteStyle: function pasteStyle() {
    elementorCommon.helpers.softDeprecated('element.pasteStyle', '2.8.0', "$e.run( 'document/elements/paste-style' )");
    $e.run('document/elements/paste-style', {
      container: this.getContainer()
    });
  },
  resetStyle: function resetStyle() {
    elementorCommon.helpers.softDeprecated('element.resetStyle', '2.8.0', "$e.run( 'document/elements/reset-style' )");
    $e.run('document/elements/reset-style', {
      container: this.getContainer()
    });
  },
  isStyleTransferControl: function isStyleTransferControl(control) {
    if (undefined !== control.style_transfer) {
      return control.style_transfer;
    }

    return 'content' !== control.tab || control.selectors || control.prefix_class;
  },
  toggleVisibility: function toggleVisibility() {
    this.model.set('hidden', !this.model.get('hidden'));
    this.toggleVisibilityClass();
  },
  toggleVisibilityClass: function toggleVisibilityClass() {
    this.$el.toggleClass('elementor-edit-hidden', !!this.model.get('hidden'));
  },
  addElementFromPanel: function addElementFromPanel(options) {
    options = options || {};
    var elementView = elementor.channels.panelElements.request('element:selected'),
        model = {
      elType: elementView.model.get('elType')
    };

    if (elementor.helpers.maybeDisableWidget()) {
      return;
    }

    if ('widget' === model.elType) {
      model.widgetType = elementView.model.get('widgetType');
    } else if ('section' === model.elType) {
      model.isInner = true;
    } else {
      return;
    }

    var customData = elementView.model.get('custom');

    if (customData) {
      jQuery.extend(model, customData);
    }

    return $e.run('document/elements/create', {
      container: this.getContainer(),
      model: model,
      options: options
    });
  },
  // TODO: Unused function.
  addControlValidator: function addControlValidator(controlName, validationCallback) {
    validationCallback = validationCallback.bind(this);
    var validator = new Validator({
      customValidationMethod: validationCallback
    }),
        validators = this.getEditModel().get('settings').validators;

    if (!validators[controlName]) {
      validators[controlName] = [];
    }

    validators[controlName].push(validator);
  },
  addRenderAttribute: function addRenderAttribute(element, key, value, overwrite) {
    var self = this;

    if ('object' === (0, _typeof2.default)(element)) {
      jQuery.each(element, function (elementKey, elementValue) {
        self.addRenderAttribute(elementKey, elementValue, null, overwrite);
      });
      return self;
    }

    if ('object' === (0, _typeof2.default)(key)) {
      jQuery.each(key, function (attributeKey, attributeValue) {
        self.addRenderAttribute(element, attributeKey, attributeValue, overwrite);
      });
      return self;
    }

    if (!self.renderAttributes[element]) {
      self.renderAttributes[element] = {};
    }

    if (!self.renderAttributes[element][key]) {
      self.renderAttributes[element][key] = [];
    }

    if (!(0, _isArray.default)(value)) {
      value = [value];
    }

    if (overwrite) {
      self.renderAttributes[element][key] = value;
    } else {
      self.renderAttributes[element][key] = self.renderAttributes[element][key].concat(value);
    }
  },
  getRenderAttributeString: function getRenderAttributeString(element) {
    if (!this.renderAttributes[element]) {
      return '';
    }

    var renderAttributes = this.renderAttributes[element],
        attributes = [];
    jQuery.each(renderAttributes, function (attributeKey, attributeValue) {
      attributes.push(attributeKey + '="' + _.escape(attributeValue.join(' ')) + '"');
    });
    return attributes.join(' ');
  },
  isInner: function isInner() {
    return !!this.model.get('isInner');
  },
  initControlsCSSParser: function initControlsCSSParser() {
    this.controlsCSSParser = new ControlsCSSParser({
      id: this.model.get('id'),
      context: this,
      settingsModel: this.getEditModel().get('settings'),
      dynamicParsing: this.getDynamicParsingSettings()
    });
  },
  enqueueFonts: function enqueueFonts() {
    var editModel = this.getEditModel(),
        settings = editModel.get('settings'); // Enqueue Icon Fonts

    jQuery.each(settings.getIconsControls(), function (index, control) {
      var iconType = editModel.getSetting(control.name);

      if (!iconType || !iconType.library) {
        return;
      }

      elementor.helpers.enqueueIconFonts(iconType.library);
    });
  },
  renderStyles: function renderStyles(settings) {
    if (!settings) {
      settings = this.getEditModel().get('settings');
    }

    this.controlsCSSParser.stylesheet.empty();
    this.controlsCSSParser.addStyleRules(settings.getStyleControls(), settings.attributes, this.getEditModel().get('settings').controls, [/{{ID}}/g, /{{WRAPPER}}/g], [this.getID(), '.elementor-' + elementor.config.document.id + ' .elementor-element.' + this.getElementUniqueID()]);
    this.controlsCSSParser.addStyleToDocument();
  },
  renderCustomClasses: function renderCustomClasses() {
    var self = this;
    var settings = self.getEditModel().get('settings'),
        classControls = settings.getClassControls(); // Remove all previous classes

    _.each(classControls, function (control) {
      var previousClassValue = settings.previous(control.name);

      if (control.classes_dictionary) {
        if (undefined !== control.classes_dictionary[previousClassValue]) {
          previousClassValue = control.classes_dictionary[previousClassValue];
        }
      }

      self.$el.removeClass(control.prefix_class + previousClassValue);
    }); // Add new classes


    _.each(classControls, function (control) {
      var value = settings.attributes[control.name];
      var classValue = value;

      if (control.classes_dictionary) {
        if (undefined !== control.classes_dictionary[value]) {
          classValue = control.classes_dictionary[value];
        }
      }

      var isVisible = elementor.helpers.isActiveControl(control, settings.attributes);

      if (isVisible && (classValue || 0 === classValue)) {
        self.$el.addClass(control.prefix_class + classValue);
      }
    });

    self.$el.addClass(_.result(self, 'className'));
    self.toggleVisibilityClass();
  },
  renderCustomElementID: function renderCustomElementID() {
    var customElementID = this.getEditModel().get('settings').get('_element_id');
    this.$el.attr('id', customElementID);
  },
  renderUI: function renderUI() {
    this.renderStyles();
    this.renderCustomClasses();
    this.renderCustomElementID();
    this.enqueueFonts();
  },
  runReadyTrigger: function runReadyTrigger() {
    var self = this;

    _.defer(function () {
      elementorFrontend.elementsHandler.runReadyTrigger(self.el);

      if (!elementorFrontend.isEditMode()) {
        return;
      } // In edit mode - handle an external elements that loaded by another elements like shortcode etc.


      self.$el.find('.elementor-element.elementor-' + self.model.get('elType') + ':not(.elementor-element-edit-mode)').each(function () {
        elementorFrontend.elementsHandler.runReadyTrigger(this);
      });
    });
  },
  getID: function getID() {
    return this.model.get('id');
  },
  getElementUniqueID: function getElementUniqueID() {
    return 'elementor-element-' + this.getID();
  },
  renderHTML: function renderHTML() {
    var templateType = this.getTemplateType(),
        editModel = this.getEditModel();

    if ('js' === templateType) {
      this.getEditModel().setHtmlCache();
      this.render();
      editModel.renderOnLeave = true;
    } else {
      editModel.renderRemoteServer();
    }
  },
  renderOnChange: function renderOnChange(settings) {
    if (!this.allowRender) {
      return;
    } // Make sure is correct model


    if (settings instanceof elementorModules.editor.elements.models.BaseSettings) {
      var hasChanged = settings.hasChanged();
      var isContentChanged = !hasChanged,
          isRenderRequired = !hasChanged;

      _.each(settings.changedAttributes(), function (settingValue, settingKey) {
        var control = settings.getControl(settingKey);

        if ('_column_size' === settingKey) {
          isRenderRequired = true;
          return;
        }

        if (!control) {
          isRenderRequired = true;
          isContentChanged = true;
          return;
        }

        if ('none' !== control.render_type) {
          isRenderRequired = true;
        }

        if (-1 !== ['none', 'ui'].indexOf(control.render_type)) {
          return;
        }

        if ('template' === control.render_type || !settings.isStyleControl(settingKey) && !settings.isClassControl(settingKey) && '_element_id' !== settingKey) {
          isContentChanged = true;
        }
      });

      if (!isRenderRequired) {
        return;
      }

      if (!isContentChanged) {
        this.renderUI();
        return;
      }
    } // Re-render the template


    this.renderHTML();
  },
  getDynamicParsingSettings: function getDynamicParsingSettings() {
    var self = this;
    return {
      onServerRequestStart: function onServerRequestStart() {
        self.$el.addClass('elementor-loading');
      },
      onServerRequestEnd: function onServerRequestEnd() {
        self.render();
        self.$el.removeClass('elementor-loading');
      }
    };
  },
  serializeData: function serializeData() {
    var data = BaseContainer.prototype.serializeData.apply(this, arguments);
    data.settings = this.getEditModel().get('settings').parseDynamicSettings(data.settings, this.getDynamicParsingSettings());
    return data;
  },
  save: function save() {
    $e.route('library/save-template', {
      model: this.model
    });
  },
  onBeforeRender: function onBeforeRender() {
    this.renderAttributes = {};
  },
  onRender: function onRender() {
    this.renderUI();
    this.runReadyTrigger();

    if (this.toggleEditTools) {
      var editButton = this.ui.editButton; // Since this.ui.tools does not exist while testing.

      if (this.ui.tools) {
        this.ui.tools.hoverIntent(function () {
          editButton.addClass('elementor-active');
        }, function () {
          editButton.removeClass('elementor-active');
        }, {
          timeout: 500
        });
      }
    }
  },
  onEditSettingsChanged: function onEditSettingsChanged(changedModel) {
    elementor.channels.editor.trigger('change:editSettings', changedModel, this);
  },
  onEditButtonClick: function onEditButtonClick() {
    this.model.trigger('request:edit');
  },
  onEditRequest: function onEditRequest() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    if (!this.container.isEditable()) {
      return;
    }

    var model = this.getEditModel(),
        panel = elementor.getPanelView();

    if ($e.routes.isPartOf('panel/editor') && panel.getCurrentPageView().model === model) {
      return;
    }

    if (options.scrollIntoView) {
      elementor.helpers.scrollToView(this.$el, 200);
    }

    $e.run('panel/editor/open', {
      model: model,
      view: this
    });
  },
  onDuplicateButtonClick: function onDuplicateButtonClick(event) {
    event.stopPropagation();
    $e.run('document/elements/duplicate', {
      container: this.getContainer()
    });
  },
  onRemoveButtonClick: function onRemoveButtonClick(event) {
    event.stopPropagation();
    $e.run('document/elements/delete', {
      container: this.getContainer()
    });
  },

  /* jQuery ui sortable preventing any `mousedown` event above any element, and as a result is preventing the `blur`
   * event on the currently active element. Therefor, we need to blur the active element manually.
   */
  onMouseDown: function onMouseDown(event) {
    if (jQuery(event.target).closest('.elementor-inline-editing').length) {
      return;
    }

    elementorFrontend.elements.window.document.activeElement.blur();
  },
  onDestroy: function onDestroy() {
    this.controlsCSSParser.removeStyleFromDocument();
    this.getEditModel().get('settings').validators = {};
    elementor.channels.data.trigger('element:destroy', this.model);
  }
});
module.exports = BaseElementView;

/***/ }),
/* 298 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var SortableBehavior;
SortableBehavior = Marionette.Behavior.extend({
  defaults: {
    elChildType: 'widget'
  },
  events: {
    sortstart: 'onSortStart',
    sortreceive: 'onSortReceive',
    sortupdate: 'onSortUpdate',
    sortover: 'onSortOver',
    sortout: 'onSortOut'
  },
  initialize: function initialize() {
    this.listenTo(elementor.channels.dataEditMode, 'switch', this.onEditModeSwitched).listenTo(this.view.options.model, 'request:sort:start', this.startSort).listenTo(this.view.options.model, 'request:sort:update', this.updateSort).listenTo(this.view.options.model, 'request:sort:receive', this.receiveSort);
  },
  onEditModeSwitched: function onEditModeSwitched(activeMode) {
    if ('edit' === activeMode) {
      this.activate();
    } else {
      this.deactivate();
    }
  },
  onRender: function onRender() {
    var self = this;

    _.defer(function () {
      self.onEditModeSwitched(elementor.channels.dataEditMode.request('activeMode'));
    });
  },
  onDestroy: function onDestroy() {
    this.deactivate();
  },
  activate: function activate() {
    if (!elementor.userCan('design')) {
      return;
    }

    if (this.getChildViewContainer().sortable('instance')) {
      return;
    }

    var $childViewContainer = this.getChildViewContainer(),
        defaultSortableOptions = {
      connectWith: $childViewContainer.selector,
      placeholder: 'elementor-sortable-placeholder elementor-' + this.getOption('elChildType') + '-placeholder',
      cursorAt: {
        top: 20,
        left: 25
      },
      helper: this._getSortableHelper.bind(this),
      cancel: 'input, textarea, button, select, option, .elementor-inline-editing, .elementor-tab-title'
    },
        sortableOptions = _.extend(defaultSortableOptions, this.view.getSortableOptions());

    $childViewContainer.sortable(sortableOptions);
  },
  _getSortableHelper: function _getSortableHelper(event, $item) {
    var model = this.view.collection.get({
      cid: $item.data('model-cid')
    });
    return '<div style="height: 84px; width: 125px;" class="elementor-sortable-helper elementor-sortable-helper-' + model.get('elType') + '"><div class="icon"><i class="' + model.getIcon() + '"></i></div><div class="elementor-element-title-wrapper"><div class="title">' + model.getTitle() + '</div></div></div>';
  },
  getChildViewContainer: function getChildViewContainer() {
    return this.view.getChildViewContainer(this.view);
  },
  getSortedElementNewIndex: function getSortedElementNewIndex($element) {
    var draggedModel = elementor.channels.data.request('dragging:model'),
        draggedElType = draggedModel.get('elType');
    var newIndex = $element.index();

    if ('widget' === draggedElType && !elementor.config.legacyMode.elementWrappers) {
      newIndex--;
    }

    return newIndex;
  },
  deactivate: function deactivate() {
    var childViewContainer = this.getChildViewContainer();

    if (childViewContainer.sortable('instance')) {
      childViewContainer.sortable('destroy');
    }
  },
  startSort: function startSort(event, ui) {
    event.stopPropagation();
    var container = elementor.getContainer(ui.item.attr('data-id'));
    elementor.channels.data.reply('dragging:model', container.model).reply('dragging:view', container.view).reply('dragging:parent:view', this.view).trigger('drag:start', container.model).trigger(container.model.get('elType') + ':drag:start');
  },
  // On sorting element
  updateSort: function updateSort(ui) {
    $e.run('document/elements/move', {
      container: elementor.channels.data.request('dragging:view').getContainer(),
      target: this.view.getContainer(),
      options: {
        at: this.getSortedElementNewIndex(ui.item)
      }
    });
  },
  // On receiving element from another container
  receiveSort: function receiveSort(event, ui) {
    event.stopPropagation();

    if (this.view.isCollectionFilled()) {
      jQuery(ui.sender).sortable('cancel');
      return;
    }

    var model = elementor.channels.data.request('dragging:model'),
        draggedElType = model.get('elType'),
        draggedIsInnerSection = 'section' === draggedElType && model.get('isInner'),
        targetIsInnerColumn = 'column' === this.view.getElementType() && this.view.isInner();

    if (draggedIsInnerSection && targetIsInnerColumn) {
      jQuery(ui.sender).sortable('cancel');
      return;
    }

    $e.run('document/elements/move', {
      container: elementor.channels.data.request('dragging:view').getContainer(),
      target: this.view.getContainer(),
      options: {
        at: this.getSortedElementNewIndex(ui.item)
      }
    });
  },
  onSortStart: function onSortStart(event, ui) {
    if ('column' === this.options.elChildType) {
      var uiData = ui.item.data('sortableItem'),
          uiItems = uiData.items,
          itemHeight = 0;
      uiItems.forEach(function (item) {
        if (item.item[0] === ui.item[0]) {
          itemHeight = item.height;
          return false;
        }
      });
      ui.placeholder.height(itemHeight);
    }

    this.startSort(event, ui);
  },
  onSortOver: function onSortOver(event) {
    event.stopPropagation();
    var model = elementor.channels.data.request('dragging:model');
    jQuery(event.target).addClass('elementor-draggable-over').attr({
      'data-dragged-element': model.get('elType'),
      'data-dragged-is-inner': model.get('isInner')
    });
    this.$el.addClass('elementor-dragging-on-child');
  },
  onSortOut: function onSortOut(event) {
    event.stopPropagation();
    jQuery(event.target).removeClass('elementor-draggable-over').removeAttr('data-dragged-element data-dragged-is-inner');
    this.$el.removeClass('elementor-dragging-on-child');
  },
  onSortReceive: function onSortReceive(event, ui) {
    this.receiveSort(event, ui);
  },
  onSortUpdate: function onSortUpdate(event, ui) {
    event.stopPropagation();

    if (this.getChildViewContainer()[0] !== ui.item.parent()[0]) {
      return;
    }

    this.updateSort(ui);
  },
  onAddChild: function onAddChild(view) {
    view.$el.attr('data-model-cid', view.model.cid);
  }
});
module.exports = SortableBehavior;

/***/ }),
/* 299 */,
/* 300 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = elementorModules.Module.extend({
  errors: [],
  __construct: function __construct(settings) {
    var customValidationMethod = settings.customValidationMethod;

    if (customValidationMethod) {
      this.validationMethod = customValidationMethod;
    }
  },
  getDefaultSettings: function getDefaultSettings() {
    return {
      validationTerms: {}
    };
  },
  isValid: function isValid() {
    var validationErrors = this.validationMethod.apply(this, arguments);

    if (validationErrors.length) {
      this.errors = validationErrors;
      return false;
    }

    return true;
  },
  validationMethod: function validationMethod(newValue) {
    var validationTerms = this.getSettings('validationTerms'),
        errors = [];

    if (validationTerms.required) {
      if (!('' + newValue).length) {
        errors.push('Required value is empty');
      }
    }

    return errors;
  }
});

/***/ }),
/* 301 */,
/* 302 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 22.1.3.9 Array.prototype.findIndex(predicate, thisArg = undefined)
var $export = __webpack_require__(37);
var $find = __webpack_require__(189)(6);
var KEY = 'findIndex';
var forced = true;
// Shouldn't skip holes
if (KEY in []) Array(1)[KEY](function () { forced = false; });
$export($export.P + $export.F * forced, 'Array', {
  findIndex: function findIndex(callbackfn /* , that = undefined */) {
    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});
__webpack_require__(89)(KEY);


/***/ }),
/* 303 */,
/* 304 */,
/* 305 */,
/* 306 */,
/* 307 */,
/* 308 */,
/* 309 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(18);
var dP = __webpack_require__(49);
var DESCRIPTORS = __webpack_require__(27);
var SPECIES = __webpack_require__(13)('species');

module.exports = function (KEY) {
  var C = global[KEY];
  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
    configurable: true,
    get: function () { return this; }
  });
};


/***/ }),
/* 310 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(30);
var setPrototypeOf = __webpack_require__(330).set;
module.exports = function (that, target, C) {
  var S = target.constructor;
  var P;
  if (S !== C && typeof S == 'function' && (P = S.prototype) !== C.prototype && isObject(P) && setPrototypeOf) {
    setPrototypeOf(that, P);
  } return that;
};


/***/ }),
/* 311 */
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__(331);
var createDesc = __webpack_require__(106);
var toIObject = __webpack_require__(103);
var toPrimitive = __webpack_require__(124);
var has = __webpack_require__(64);
var IE8_DOM_DEFINE = __webpack_require__(131);
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(27) ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),
/* 312 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__(219);
var hiddenKeys = __webpack_require__(151).concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),
/* 313 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

var _assign = _interopRequireDefault(__webpack_require__(138));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(48));

var _createClass2 = _interopRequireDefault(__webpack_require__(3));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var _createSuper2 = _interopRequireDefault(__webpack_require__(5));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(28));

var _commandBase = _interopRequireDefault(__webpack_require__(23));

var CommandData = /*#__PURE__*/function (_CommandBase) {
  (0, _inherits2.default)(CommandData, _CommandBase);

  var _super = (0, _createSuper2.default)(CommandData);

  (0, _createClass2.default)(CommandData, null, [{
    key: "getInstanceType",

    /**
     * Data returned from remote.
     *
     * @type {*}
     */

    /**
     * Fetch type.
     *
     * @type {DataTypes}
     */
    value: function getInstanceType() {
      return 'CommandData';
    }
  }]);

  function CommandData(args) {
    var _this$args$options;

    var _this;

    var commandsAPI = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : $e.data;
    (0, _classCallCheck2.default)(this, CommandData);
    _this = _super.call(this, args, commandsAPI);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "data", void 0);
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "type", void 0);

    if ((_this$args$options = _this.args.options) === null || _this$args$options === void 0 ? void 0 : _this$args$options.type) {
      _this.type = _this.args.options.type;
    }

    return _this;
  }
  /**
   * Function getEndpointFormat().
   *
   * @returns {(null|string)}
   */


  (0, _createClass2.default)(CommandData, [{
    key: "getApplyMethods",

    /**
     * @param {DataTypes} type
     *
     * @returns {boolean|{before: (function(*=): {}), after: (function({}, *=): {})}}
     */
    value: function getApplyMethods() {
      var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.type;
      var before, after;

      switch (type) {
        case 'create':
          before = this.applyBeforeCreate;
          after = this.applyAfterCreate;
          break;

        case 'delete':
          before = this.applyBeforeDelete;
          after = this.applyAfterDelete;
          break;

        case 'get':
          before = this.applyBeforeGet;
          after = this.applyAfterGet;
          break;

        case 'update':
          before = this.applyBeforeUpdate;
          after = this.applyAfterUpdate;
          break;

        default:
          return false;
      }

      return {
        before: before,
        after: after
      };
    }
    /**
     * Function getRequestData().
     *
     * @returns {RequestData}
     */

  }, {
    key: "getRequestData",
    value: function getRequestData() {
      return {
        type: this.type,
        args: this.args,
        timestamp: new Date().getTime(),
        component: this.component,
        command: this.currentCommand,
        endpoint: $e.data.commandToEndpoint(this.currentCommand, elementorCommon.helpers.cloneObject(this.args), this.constructor.getEndpointFormat())
      };
    }
  }, {
    key: "apply",
    value: function apply() {
      var _this2 = this;

      var applyMethods = this.getApplyMethods(); // Run 'before' method.

      this.args = applyMethods.before(this.args);
      var requestData = this.getRequestData();
      return $e.data.fetch(requestData).then(function (data) {
        _this2.data = data; // Run 'after' method.

        _this2.data = applyMethods.after(data, _this2.args);
        _this2.data = {
          data: _this2.data
        }; // Append requestData.

        _this2.data = (0, _assign.default)({
          __requestData__: requestData
        }, _this2.data);
        return _this2.data;
      });
    }
    /**
     * @param [args={}]
     * @returns {{}} filtered args
     */

  }, {
    key: "applyBeforeCreate",
    value: function applyBeforeCreate() {
      var args = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return args;
    }
    /**
     * @param {{}} data
     * @param [args={}]
     * @returns {{}} filtered result
     */

  }, {
    key: "applyAfterCreate",
    value: function applyAfterCreate(data) {
      var args = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      // eslint-disable-line no-unused-vars
      return data;
    }
    /**
     * @param [args={}]
     * @returns {{}} filtered args
     */

  }, {
    key: "applyBeforeDelete",
    value: function applyBeforeDelete() {
      var args = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return args;
    }
    /**
     * @param {{}} data
     * @param [args={}]
     * @returns {{}} filtered result
     */

  }, {
    key: "applyAfterDelete",
    value: function applyAfterDelete(data) {
      var args = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      // eslint-disable-line no-unused-vars
      return data;
    }
    /**
     * @param [args={}]
     * @returns {{}} filtered args
     */

  }, {
    key: "applyBeforeGet",
    value: function applyBeforeGet() {
      var args = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return args;
    }
    /**
     * @param {{}} data
     * @param [args={}]
     * @returns {{}} filtered result
     */

  }, {
    key: "applyAfterGet",
    value: function applyAfterGet(data) {
      var args = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      // eslint-disable-line no-unused-vars
      return data;
    }
    /**
     * @param [args={}]
     * @returns {{}} filtered args
     */

  }, {
    key: "applyBeforeUpdate",
    value: function applyBeforeUpdate() {
      var args = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return args;
    }
    /**
     * @param {{}} data
     * @param [args={}]
     * @returns {{}} filtered result
     */

  }, {
    key: "applyAfterUpdate",
    value: function applyAfterUpdate(data) {
      var args = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      // eslint-disable-line no-unused-vars
      return data;
    }
  }], [{
    key: "getEndpointFormat",
    value: function getEndpointFormat() {
      return null;
    }
  }]);
  return CommandData;
}(_commandBase.default);

exports.default = CommandData;

/***/ }),
/* 314 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = exports.Base = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(3));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var _createSuper2 = _interopRequireDefault(__webpack_require__(5));

var _hookBase = _interopRequireDefault(__webpack_require__(294));

var Base = /*#__PURE__*/function (_HookBase) {
  (0, _inherits2.default)(Base, _HookBase);

  var _super = (0, _createSuper2.default)(Base);

  function Base() {
    (0, _classCallCheck2.default)(this, Base);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(Base, [{
    key: "getType",
    value: function getType() {
      return 'ui';
    }
  }]);
  return Base;
}(_hookBase.default);

exports.Base = Base;
var _default = Base;
exports.default = _default;

/***/ }),
/* 315 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = exports.getDefaultDebounceDelay = exports.DEFAULT_DEBOUNCE_DELAY = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(3));

var _get2 = _interopRequireDefault(__webpack_require__(24));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(16));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var _createSuper2 = _interopRequireDefault(__webpack_require__(5));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(28));

var _commandBase = _interopRequireDefault(__webpack_require__(23));

var _commandHistory = _interopRequireDefault(__webpack_require__(128));

var DEFAULT_DEBOUNCE_DELAY = 800;
/**
 * Function getDefaultDebounceDelay().
 *
 * Returns default debounce delay time, if exists in config override.
 *
 * @returns {number}
 */

exports.DEFAULT_DEBOUNCE_DELAY = DEFAULT_DEBOUNCE_DELAY;

var getDefaultDebounceDelay = function getDefaultDebounceDelay() {
  var result = DEFAULT_DEBOUNCE_DELAY;

  if (elementor.config.document && undefined !== elementor.config.document.debounceDelay) {
    result = elementor.config.document.debounceDelay;
  }

  return result;
};

exports.getDefaultDebounceDelay = getDefaultDebounceDelay;

var CommandHistoryDebounce = /*#__PURE__*/function (_CommandHistory) {
  (0, _inherits2.default)(CommandHistoryDebounce, _CommandHistory);

  var _super = (0, _createSuper2.default)(CommandHistoryDebounce);

  function CommandHistoryDebounce() {
    (0, _classCallCheck2.default)(this, CommandHistoryDebounce);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(CommandHistoryDebounce, [{
    key: "initialize",
    value: function initialize(args) {
      var _args$options = args.options,
          options = _args$options === void 0 ? {} : _args$options;
      (0, _get2.default)((0, _getPrototypeOf2.default)(CommandHistoryDebounce.prototype), "initialize", this).call(this, args);

      if (!this.constructor.debounce) {
        this.constructor.debounce = _.debounce(function (fn) {
          return fn();
        }, getDefaultDebounceDelay());
      } // If its head command, and not called within another command.


      if (1 === $e.commands.currentTrace.length || options.debounce) {
        this.isDebounceRequired = true;
      }
    }
  }, {
    key: "onBeforeRun",
    value: function onBeforeRun(args) {
      _commandBase.default.prototype.onBeforeRun.call(this, args);

      if (this.history && this.isHistoryActive()) {
        $e.internal('document/history/add-transaction', this.history);
      }
    }
  }, {
    key: "onAfterRun",
    value: function onAfterRun(args, result) {
      _commandBase.default.prototype.onAfterRun.call(this, args, result);

      if (this.isHistoryActive()) {
        if (this.isDebounceRequired) {
          this.constructor.debounce(function () {
            return $e.internal('document/history/end-transaction');
          });
        } else {
          $e.internal('document/history/end-transaction');
        }
      }
    }
  }, {
    key: "onCatchApply",
    value: function onCatchApply(e) {
      _commandBase.default.prototype.onCatchApply.call(this, e); // Rollback history on failure.


      if (e instanceof $e.modules.HookBreak && this.history) {
        if (this.isDebounceRequired) {
          // `clear-transaction` is under debounce, because it should `clear-transaction` after `end-transaction`.
          this.constructor.debounce(function () {
            return $e.internal('document/history/clear-transaction');
          });
        } else {
          $e.internal('document/history/clear-transaction');
        }
      }
    }
  }], [{
    key: "getInstanceType",

    /**
     * Function debounce().
     *
     * Will debounce every function you pass in, at the same debounce flow.
     *
     * @param {(function())}
     */
    value: function getInstanceType() {
      return 'CommandHistoryDebounce';
    }
  }]);
  return CommandHistoryDebounce;
}(_commandHistory.default);

exports.default = CommandHistoryDebounce;
(0, _defineProperty2.default)(CommandHistoryDebounce, "debounce", undefined);

/***/ }),
/* 316 */,
/* 317 */,
/* 318 */,
/* 319 */,
/* 320 */,
/* 321 */,
/* 322 */,
/* 323 */,
/* 324 */,
/* 325 */,
/* 326 */,
/* 327 */,
/* 328 */,
/* 329 */,
/* 330 */
/***/ (function(module, exports, __webpack_require__) {

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = __webpack_require__(30);
var anObject = __webpack_require__(20);
var check = function (O, proto) {
  anObject(O);
  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function (test, buggy, set) {
      try {
        set = __webpack_require__(80)(Function.call, __webpack_require__(311).f(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch (e) { buggy = true; }
      return function setPrototypeOf(O, proto) {
        check(O, proto);
        if (buggy) O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};


/***/ }),
/* 331 */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),
/* 332 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

__webpack_require__(190);

__webpack_require__(79);

__webpack_require__(60);

__webpack_require__(120);

__webpack_require__(81);

var _keys = _interopRequireDefault(__webpack_require__(25));

(function ($) {
  var Stylesheet = function Stylesheet() {
    var self = this,
        rules = {},
        rawCSS = {},
        devices = {};

    var getDeviceMaxValue = function getDeviceMaxValue(deviceName) {
      var deviceNames = (0, _keys.default)(devices),
          deviceNameIndex = deviceNames.indexOf(deviceName),
          nextIndex = deviceNameIndex + 1;

      if (nextIndex >= deviceNames.length) {
        throw new RangeError('Max value for this device is out of range.');
      }

      return devices[deviceNames[nextIndex]] - 1;
    };

    var queryToHash = function queryToHash(query) {
      var hash = [];
      $.each(query, function (endPoint) {
        hash.push(endPoint + '_' + this);
      });
      return hash.join('-');
    };

    var hashToQuery = function hashToQuery(hash) {
      var query = {};
      hash = hash.split('-').filter(String);
      hash.forEach(function (singleQuery) {
        var queryParts = singleQuery.split('_'),
            endPoint = queryParts[0],
            deviceName = queryParts[1];
        query[endPoint] = 'max' === endPoint ? getDeviceMaxValue(deviceName) : devices[deviceName];
      });
      return query;
    };

    var addQueryHash = function addQueryHash(queryHash) {
      rules[queryHash] = {};
      var hashes = (0, _keys.default)(rules);

      if (hashes.length < 2) {
        return;
      } // Sort the devices from narrowest to widest


      hashes.sort(function (a, b) {
        if ('all' === a) {
          return -1;
        }

        if ('all' === b) {
          return 1;
        }

        var aQuery = hashToQuery(a),
            bQuery = hashToQuery(b);
        return bQuery.max - aQuery.max;
      });
      var sortedRules = {};
      hashes.forEach(function (deviceName) {
        sortedRules[deviceName] = rules[deviceName];
      });
      rules = sortedRules;
    };

    var getQueryHashStyleFormat = function getQueryHashStyleFormat(queryHash) {
      var query = hashToQuery(queryHash),
          styleFormat = [];
      $.each(query, function (endPoint) {
        styleFormat.push('(' + endPoint + '-width:' + this + 'px)');
      });
      return '@media' + styleFormat.join(' and ');
    };

    this.addDevice = function (newDeviceName, deviceValue) {
      devices[newDeviceName] = deviceValue;
      var deviceNames = (0, _keys.default)(devices);

      if (deviceNames.length < 2) {
        return self;
      } // Sort the devices from narrowest to widest


      deviceNames.sort(function (a, b) {
        return devices[a] - devices[b];
      });
      var sortedDevices = {};
      deviceNames.forEach(function (deviceName) {
        sortedDevices[deviceName] = devices[deviceName];
      });
      devices = sortedDevices;
      return self;
    };

    this.addRawCSS = function (key, css) {
      rawCSS[key] = css;
    };

    this.addRules = function (selector, styleRules, query) {
      var queryHash = 'all';

      if (!_.isEmpty(query)) {
        queryHash = queryToHash(query);
      }

      if (!rules[queryHash]) {
        addQueryHash(queryHash);
      }

      if (!styleRules) {
        var parsedRules = selector.match(/[^{]+\{[^}]+}/g);
        $.each(parsedRules, function () {
          var parsedRule = this.match(/([^{]+)\{([^}]+)}/);

          if (parsedRule) {
            self.addRules(parsedRule[1].trim(), parsedRule[2].trim(), query);
          }
        });
        return;
      }

      if (!rules[queryHash][selector]) {
        rules[queryHash][selector] = {};
      }

      if ('string' === typeof styleRules) {
        styleRules = styleRules.split(';').filter(String);
        var orderedRules = {};

        try {
          $.each(styleRules, function () {
            var property = this.split(/:(.*)?/);
            orderedRules[property[0].trim()] = property[1].trim().replace(';', '');
          });
        } catch (error) {
          // At least one of the properties is incorrect
          return;
        }

        styleRules = orderedRules;
      }

      $.extend(rules[queryHash][selector], styleRules);
      return self;
    };

    this.getRules = function () {
      return rules;
    };

    this.empty = function () {
      rules = {};
      rawCSS = {};
    };

    this.toString = function () {
      var styleText = '';
      $.each(rules, function (queryHash) {
        var deviceText = Stylesheet.parseRules(this);

        if ('all' !== queryHash) {
          deviceText = getQueryHashStyleFormat(queryHash) + '{' + deviceText + '}';
        }

        styleText += deviceText;
      });
      $.each(rawCSS, function () {
        styleText += this;
      });
      return styleText;
    };
  };

  Stylesheet.parseRules = function (rules) {
    var parsedRules = '';
    $.each(rules, function (selector) {
      var selectorContent = Stylesheet.parseProperties(this);

      if (selectorContent) {
        parsedRules += selector + '{' + selectorContent + '}';
      }
    });
    return parsedRules;
  };

  Stylesheet.parseProperties = function (properties) {
    var parsedProperties = '';
    $.each(properties, function (propertyKey) {
      if (this) {
        parsedProperties += propertyKey + ':' + this + ';';
      }
    });
    return parsedProperties;
  };

  module.exports = Stylesheet;
})(jQuery);

/***/ }),
/* 333 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _keys = _interopRequireDefault(__webpack_require__(25));

module.exports = Marionette.CompositeView.extend({
  templateHelpers: function templateHelpers() {
    return {
      view: this
    };
  },
  getBehavior: function getBehavior(name) {
    return this._behaviors[(0, _keys.default)(this.behaviors()).indexOf(name)];
  },
  initialize: function initialize() {
    this.collection = this.model.get('elements');
  },
  addChildModel: function addChildModel(model, options) {
    return this.collection.add(model, options, true);
  },
  addElement: function addElement(data, options) {
    if (this.isCollectionFilled()) {
      return;
    }

    options = jQuery.extend({
      trigger: false,
      edit: true,
      onBeforeAdd: null,
      onAfterAdd: null
    }, options);
    var childTypes = this.getChildType();
    var newItem, elType;

    if (data instanceof Backbone.Model) {
      newItem = data;
      elType = newItem.get('elType');
    } else {
      newItem = {
        id: elementorCommon.helpers.getUniqueId(),
        elType: childTypes[0],
        settings: {},
        elements: []
      };

      if (data) {
        jQuery.extend(newItem, data);
      }

      elType = newItem.elType;
    }

    if (-1 === childTypes.indexOf(elType)) {
      return this.children.last().addElement(newItem, options);
    }

    if (options.clone) {
      newItem = this.cloneItem(newItem);
    }

    if (options.trigger) {
      elementor.channels.data.trigger(options.trigger.beforeAdd, newItem);
    }

    if (options.onBeforeAdd) {
      options.onBeforeAdd();
    }

    var newModel = this.addChildModel(newItem, {
      at: options.at
    }),
        newView = this.children.findByModel(newModel);

    if (options.onAfterAdd) {
      options.onAfterAdd(newModel, newView);
    }

    if (options.trigger) {
      elementor.channels.data.trigger(options.trigger.afterAdd, newItem);
    }

    if (options.edit && elementor.documents.getCurrent().history.getActive()) {
      // Ensure container is created. TODO: Open editor via UI hook after `document/elements/create`.
      newView.getContainer();
      newModel.trigger('request:edit');
    }

    return newView;
  },
  addChildElement: function addChildElement(data, options) {
    elementorCommon.helpers.softDeprecated('addChildElement', '2.8.0', "$e.run( 'document/elements/create' )");

    if (Object !== data.constructor) {
      data = jQuery.extend({}, data);
    }

    $e.run('document/elements/create', {
      container: this.getContainer(),
      model: data,
      options: options
    });
  },
  cloneItem: function cloneItem(item) {
    var self = this;

    if (item instanceof Backbone.Model) {
      return item.clone();
    }

    item.id = elementorCommon.helpers.getUniqueId();
    item.settings._element_id = '';
    item.elements.forEach(function (childItem, index) {
      item.elements[index] = self.cloneItem(childItem);
    });
    return item;
  },
  lookup: function lookup() {
    var element = this;

    if (element.isDisconnected()) {
      element = $e.components.get('document').utils.findViewById(element.model.id);
    }

    return element;
  },
  isDisconnected: function isDisconnected() {
    return this.isDestroyed || !this.el.isConnected;
  },
  isCollectionFilled: function isCollectionFilled() {
    return false;
  }
});

/***/ }),
/* 334 */,
/* 335 */,
/* 336 */,
/* 337 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = exports.Settings = void 0;

var _keys = _interopRequireDefault(__webpack_require__(25));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(28));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(3));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var _createSuper2 = _interopRequireDefault(__webpack_require__(5));

var _commandHistoryDebounce = _interopRequireDefault(__webpack_require__(315));

var Settings = /*#__PURE__*/function (_CommandHistoryDeboun) {
  (0, _inherits2.default)(Settings, _CommandHistoryDeboun);

  var _super = (0, _createSuper2.default)(Settings);

  function Settings() {
    (0, _classCallCheck2.default)(this, Settings);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(Settings, [{
    key: "addToHistory",

    /**
     * Function addToHistory().
     *
     * @param {Container} container
     * @param {{}} newSettings
     * @param {{}} oldSettings
     */
    value: function addToHistory(container, newSettings, oldSettings) {
      var changes = (0, _defineProperty2.default)({}, container.id, {
        old: oldSettings,
        new: newSettings
      }),
          historyItem = {
        containers: [container],
        data: {
          changes: changes
        },
        type: 'change',
        restore: Settings.restore
      };
      $e.internal('document/history/add-transaction', historyItem);
    }
  }, {
    key: "validateArgs",
    value: function validateArgs(args) {
      this.requireContainer(args);
      this.requireArgumentConstructor('settings', Object, args);
    }
  }, {
    key: "getHistory",
    value: function getHistory(args) {
      var _args$containers = args.containers,
          containers = _args$containers === void 0 ? [args.container] : _args$containers,
          subTitle = this.constructor.getSubTitle(args);
      return {
        containers: containers,
        subTitle: subTitle,
        type: 'change'
      };
    }
  }, {
    key: "apply",
    value: function apply(args) {
      var _this = this;

      var _args$containers2 = args.containers,
          containers = _args$containers2 === void 0 ? [args.container] : _args$containers2,
          _args$settings = args.settings,
          settings = _args$settings === void 0 ? {} : _args$settings,
          _args$isMultiSettings = args.isMultiSettings,
          isMultiSettings = _args$isMultiSettings === void 0 ? false : _args$isMultiSettings,
          _args$options = args.options,
          options = _args$options === void 0 ? {} : _args$options;
      containers.forEach(function (container) {
        container = container.lookup();
        /**
         * Settings support multi settings for each container, eg use:
         * settings: { '{ container-id }': { someSettingKey: someSettingValue } } etc.
         */

        var newSettings = isMultiSettings ? settings[container.id] : settings,
            oldSettings = container.settings.toJSON(); // Clear old oldValues.

        container.oldValues = {}; // Set oldValues, For each setting is about to change save setting value.

        (0, _keys.default)(newSettings).forEach(function (key) {
          container.oldValues[key] = oldSettings[key];
        }); // If history active, add history transaction with old and new settings.

        if (_this.isHistoryActive()) {
          _this.addToHistory(container, newSettings, container.oldValues);
        }

        if (options.external) {
          container.settings.setExternalChange(newSettings);
        } else {
          container.settings.set(newSettings);
        }

        container.render();
      });
    }
  }, {
    key: "isDataChanged",
    value: function isDataChanged() {
      return true;
    }
  }], [{
    key: "getSubTitle",

    /**
     * Function getSubTitle().
     *
     * Get sub title by container.
     *
     * @param {{}} args
     *
     * @returns {string}
     */
    value: function getSubTitle(args) {
      var _args$containers3 = args.containers,
          containers = _args$containers3 === void 0 ? [args.container] : _args$containers3,
          _args$settings2 = args.settings,
          settings = _args$settings2 === void 0 ? {} : _args$settings2,
          isMultiSettings = args.isMultiSettings,
          settingsKeys = (0, _keys.default)(settings),
          controls = containers[0].controls,
          firstSettingKey = settingsKeys[0];
      var result = '';

      if (!isMultiSettings && 1 === settingsKeys.length && controls && controls[firstSettingKey]) {
        result = controls[firstSettingKey].label;
      }

      return result;
    }
    /**
     * Function restore().
     *
     * Redo/Restore.
     *
     * @param {{}} historyItem
     * @param {boolean} isRedo
     */

  }, {
    key: "restore",
    value: function restore(historyItem, isRedo) {
      var data = historyItem.get('data');
      historyItem.get('containers').forEach(function (
      /* Container */
      container) {
        var changes = data.changes[container.id];
        $e.run('document/elements/settings', {
          container: container,
          settings: isRedo ? changes.new : changes.old,
          options: {
            external: true
          }
        });
      });
    }
  }]);
  return Settings;
}(_commandHistoryDebounce.default);

exports.Settings = Settings;
var _default = Settings;
exports.default = _default;

/***/ }),
/* 338 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(3));

var _get2 = _interopRequireDefault(__webpack_require__(24));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(16));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var _createSuper2 = _interopRequireDefault(__webpack_require__(5));

var _commandInternalBase = _interopRequireDefault(__webpack_require__(203));

var Base = /*#__PURE__*/function (_CommandInternalBase) {
  (0, _inherits2.default)(Base, _CommandInternalBase);

  var _super = (0, _createSuper2.default)(Base);

  function Base() {
    (0, _classCallCheck2.default)(this, Base);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(Base, [{
    key: "initialize",
    value: function initialize(args) {
      (0, _get2.default)((0, _getPrototypeOf2.default)(Base.prototype), "initialize", this).call(this, args);
      /**
       * @type {HistoryManager}
       */

      this.history = elementor.documents.getCurrent().history;
    }
  }]);
  return Base;
}(_commandInternalBase.default);

exports.default = Base;

/***/ }),
/* 339 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(3));

var _get2 = _interopRequireDefault(__webpack_require__(24));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(16));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var _createSuper2 = _interopRequireDefault(__webpack_require__(5));

var _commandBase = _interopRequireDefault(__webpack_require__(23));

var Base = /*#__PURE__*/function (_CommandBase) {
  (0, _inherits2.default)(Base, _CommandBase);

  var _super = (0, _createSuper2.default)(Base);

  function Base() {
    (0, _classCallCheck2.default)(this, Base);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(Base, [{
    key: "initialize",
    value: function initialize(args) {
      (0, _get2.default)((0, _getPrototypeOf2.default)(Base.prototype), "initialize", this).call(this, args);
      var _args$document = args.document,
          document = _args$document === void 0 ? elementor.documents.getCurrent() : _args$document;
      this.document = document;
    }
  }]);
  return Base;
}(_commandBase.default);

exports.default = Base;

/***/ }),
/* 340 */,
/* 341 */,
/* 342 */,
/* 343 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = exports.Dependency = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(3));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var _createSuper2 = _interopRequireDefault(__webpack_require__(5));

var _base = _interopRequireDefault(__webpack_require__(286));

var Dependency = /*#__PURE__*/function (_Base) {
  (0, _inherits2.default)(Dependency, _Base);

  var _super = (0, _createSuper2.default)(Dependency);

  function Dependency() {
    (0, _classCallCheck2.default)(this, Dependency);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(Dependency, [{
    key: "register",
    value: function register() {
      $e.hooks.registerDataDependency(this);
    }
  }]);
  return Dependency;
}(_base.default);

exports.Dependency = Dependency;
var _default = Dependency;
exports.default = _default;

/***/ }),
/* 344 */,
/* 345 */,
/* 346 */,
/* 347 */,
/* 348 */,
/* 349 */,
/* 350 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

_Object$defineProperty(exports, "Do", {
  enumerable: true,
  get: function get() {
    return _do.Do;
  }
});

_Object$defineProperty(exports, "Redo", {
  enumerable: true,
  get: function get() {
    return _redo.Redo;
  }
});

_Object$defineProperty(exports, "Undo", {
  enumerable: true,
  get: function get() {
    return _undo.Undo;
  }
});

_Object$defineProperty(exports, "UndoAll", {
  enumerable: true,
  get: function get() {
    return _undoAll.UndoAll;
  }
});

var _do = __webpack_require__(351);

var _redo = __webpack_require__(352);

var _undo = __webpack_require__(353);

var _undoAll = __webpack_require__(354);

/***/ }),
/* 351 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = exports.Do = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(3));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var _createSuper2 = _interopRequireDefault(__webpack_require__(5));

var _commandBase = _interopRequireDefault(__webpack_require__(23));

var Do = /*#__PURE__*/function (_CommandBase) {
  (0, _inherits2.default)(Do, _CommandBase);

  var _super = (0, _createSuper2.default)(Do);

  function Do() {
    (0, _classCallCheck2.default)(this, Do);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(Do, [{
    key: "apply",
    value: function apply(args) {
      var index = args.index;
      return elementor.documents.getCurrent().history.doItem(index);
    }
  }]);
  return Do;
}(_commandBase.default);

exports.Do = Do;
var _default = Do;
exports.default = _default;

/***/ }),
/* 352 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = exports.Redo = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(3));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var _createSuper2 = _interopRequireDefault(__webpack_require__(5));

var _commandBase = _interopRequireDefault(__webpack_require__(23));

var Redo = /*#__PURE__*/function (_CommandBase) {
  (0, _inherits2.default)(Redo, _CommandBase);

  var _super = (0, _createSuper2.default)(Redo);

  function Redo() {
    (0, _classCallCheck2.default)(this, Redo);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(Redo, [{
    key: "apply",
    value: function apply() {
      elementor.documents.getCurrent().history.navigate(true);
    }
  }]);
  return Redo;
}(_commandBase.default);

exports.Redo = Redo;
var _default = Redo;
exports.default = _default;

/***/ }),
/* 353 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = exports.Undo = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(3));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var _createSuper2 = _interopRequireDefault(__webpack_require__(5));

var _commandBase = _interopRequireDefault(__webpack_require__(23));

var Undo = /*#__PURE__*/function (_CommandBase) {
  (0, _inherits2.default)(Undo, _CommandBase);

  var _super = (0, _createSuper2.default)(Undo);

  function Undo() {
    (0, _classCallCheck2.default)(this, Undo);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(Undo, [{
    key: "apply",
    value: function apply() {
      elementor.documents.getCurrent().history.navigate();
    }
  }]);
  return Undo;
}(_commandBase.default);

exports.Undo = Undo;
var _default = Undo;
exports.default = _default;

/***/ }),
/* 354 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = exports.UndoAll = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(3));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var _createSuper2 = _interopRequireDefault(__webpack_require__(5));

var _commandBase = _interopRequireDefault(__webpack_require__(23));

var UndoAll = /*#__PURE__*/function (_CommandBase) {
  (0, _inherits2.default)(UndoAll, _CommandBase);

  var _super = (0, _createSuper2.default)(UndoAll);

  function UndoAll() {
    (0, _classCallCheck2.default)(this, UndoAll);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(UndoAll, [{
    key: "apply",
    value: function apply(args) {
      var document = args.document;
      document.history.doItem(document.history.getItems().length - 1);
    }
  }]);
  return UndoAll;
}(_commandBase.default);

exports.UndoAll = UndoAll;
var _default = UndoAll;
exports.default = _default;

/***/ }),
/* 355 */,
/* 356 */,
/* 357 */,
/* 358 */,
/* 359 */,
/* 360 */,
/* 361 */,
/* 362 */,
/* 363 */,
/* 364 */,
/* 365 */,
/* 366 */,
/* 367 */,
/* 368 */,
/* 369 */,
/* 370 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(3));

var BackwardsCompatibility = /*#__PURE__*/function () {
  function BackwardsCompatibility() {
    (0, _classCallCheck2.default)(this, BackwardsCompatibility);
  }

  (0, _createClass2.default)(BackwardsCompatibility, null, [{
    key: "findViewRecursive",
    value: function findViewRecursive(parent, key, value) {
      var multiple = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
      elementorCommon.helpers.softDeprecated('findViewRecursive', '2.9.0', "$e.components.get( 'document' ).utils.findViewRecursive( parent, key, value, multiple )");
      return $e.components.get('document').utils.findViewRecursive(parent, key, value, multiple);
    }
  }, {
    key: "findViewById",
    value: function findViewById(id) {
      elementorCommon.helpers.softDeprecated('findViewById', '2.9.0', "$e.components.get( 'document' ).utils.findViewById( id )");
      return $e.components.get('document').utils.findViewById(id);
    }
  }, {
    key: "findContainerById",
    value: function findContainerById(id) {
      elementorCommon.helpers.softDeprecated('findContainerById', '2.9.0', "$e.components.get( 'document' ).utils.findContainerById( id )");
      return $e.components.get('document').utils.findContainerById(id);
    }
  }]);
  return BackwardsCompatibility;
}();

exports.default = BackwardsCompatibility;

/***/ }),
/* 371 */,
/* 372 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(40);

module.exports = elementorModules.Module.extend({
  getDefaultSettings: function getDefaultSettings() {
    return {
      actions: {},
      classes: {
        list: 'elementor-context-menu-list',
        group: 'elementor-context-menu-list__group',
        groupPrefix: 'elementor-context-menu-list__group-',
        item: 'elementor-context-menu-list__item',
        itemTypePrefix: 'elementor-context-menu-list__item-',
        itemTitle: 'elementor-context-menu-list__item__title',
        itemShortcut: 'elementor-context-menu-list__item__shortcut',
        iconShortcut: 'elementor-context-menu-list__item__icon',
        itemDisabled: 'elementor-context-menu-list__item--disabled',
        divider: 'elementor-context-menu-list__divider',
        hidden: 'elementor-hidden'
      }
    };
  },
  buildActionItem: function buildActionItem(action) {
    var self = this,
        classes = self.getSettings('classes'),
        $item = jQuery('<div>', {
      class: classes.item + ' ' + classes.itemTypePrefix + action.name
    }),
        $itemTitle = jQuery('<div>', {
      class: classes.itemTitle
    }).text(action.title),
        $itemIcon = jQuery('<div>', {
      class: classes.iconShortcut
    });

    if (action.icon) {
      $itemIcon.html(jQuery('<i>', {
        class: action.icon
      }));
    }

    $item.append($itemIcon, $itemTitle);

    if (action.shortcut) {
      var $itemShortcut = jQuery('<div>', {
        class: classes.itemShortcut
      }).html(action.shortcut);
      $item.append($itemShortcut);
    }

    if (action.callback) {
      $item.on('click', function () {
        self.runAction(action);
      });
    }

    action.$item = $item;
    return $item;
  },
  buildActionsList: function buildActionsList() {
    var self = this,
        classes = self.getSettings('classes'),
        groups = self.getSettings('groups'),
        $list = jQuery('<div>', {
      class: classes.list
    });
    groups.forEach(function (group) {
      var $group = jQuery('<div>', {
        class: classes.group + ' ' + classes.groupPrefix + group.name
      });
      group.actions.forEach(function (action) {
        $group.append(self.buildActionItem(action));
      });
      $list.append($group);
      group.$item = $group;
    });
    return $list;
  },
  toggleGroupVisibility: function toggleGroupVisibility(group, state) {
    group.$item.toggleClass(this.getSettings('classes.hidden'), !state);
  },
  toggleActionVisibility: function toggleActionVisibility(action, state) {
    action.$item.toggleClass(this.getSettings('classes.hidden'), !state);
  },
  toggleActionUsability: function toggleActionUsability(action, state) {
    action.$item.toggleClass(this.getSettings('classes.itemDisabled'), !state);
  },
  isActionEnabled: function isActionEnabled(action) {
    if (!action.callback && !action.groups) {
      return false;
    }

    return action.isEnabled ? action.isEnabled() : true;
  },
  runAction: function runAction(action) {
    if (!this.isActionEnabled(action)) {
      return;
    }

    action.callback();
    this.getModal().hide();
  },
  initModal: function initModal() {
    var modal;

    this.getModal = function () {
      if (!modal) {
        modal = elementorCommon.dialogsManager.createWidget('simple', {
          className: 'elementor-context-menu',
          message: this.buildActionsList(),
          iframe: elementor.$preview,
          effects: {
            hide: 'hide',
            show: 'show'
          },
          hide: {
            onOutsideContextMenu: true
          },
          position: {
            my: (elementorCommon.config.isRTL ? 'right' : 'left') + ' top',
            collision: 'fit'
          }
        });
      }

      return modal;
    };
  },
  show: function show(event) {
    var self = this,
        modal = self.getModal();
    modal.setSettings('position', {
      of: event
    });
    self.getSettings('groups').forEach(function (group) {
      var isGroupVisible = false !== group.isVisible;
      self.toggleGroupVisibility(group, isGroupVisible);

      if (isGroupVisible) {
        group.actions.forEach(function (action) {
          var isActionVisible = false !== action.isVisible;
          self.toggleActionVisibility(action, isActionVisible);

          if (isActionVisible) {
            self.toggleActionUsability(action, self.isActionEnabled(action));
          }
        });
      }
    });
    modal.show();
  },
  destroy: function destroy() {
    this.getModal().destroy();
  },
  onInit: function onInit() {
    this.initModal();
  }
});

/***/ }),
/* 373 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(3));

var _get2 = _interopRequireDefault(__webpack_require__(24));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(16));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var _createSuper2 = _interopRequireDefault(__webpack_require__(5));

var _base = _interopRequireDefault(__webpack_require__(296));

var AddSectionView = /*#__PURE__*/function (_BaseAddSectionView) {
  (0, _inherits2.default)(AddSectionView, _BaseAddSectionView);

  var _super = (0, _createSuper2.default)(AddSectionView);

  function AddSectionView() {
    (0, _classCallCheck2.default)(this, AddSectionView);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(AddSectionView, [{
    key: "className",
    value: function className() {
      return (0, _get2.default)((0, _getPrototypeOf2.default)(AddSectionView.prototype), "className", this).call(this) + ' elementor-add-section-inline';
    }
  }, {
    key: "fadeToDeath",
    value: function fadeToDeath() {
      var self = this;
      self.$el.slideUp(function () {
        self.destroy();
      });
    }
  }, {
    key: "onAfterPaste",
    value: function onAfterPaste() {
      (0, _get2.default)((0, _getPrototypeOf2.default)(AddSectionView.prototype), "onAfterPaste", this).call(this);
      this.destroy();
    }
  }, {
    key: "onCloseButtonClick",
    value: function onCloseButtonClick() {
      this.fadeToDeath();
    }
  }, {
    key: "onPresetSelected",
    value: function onPresetSelected(event) {
      (0, _get2.default)((0, _getPrototypeOf2.default)(AddSectionView.prototype), "onPresetSelected", this).call(this, event);
      this.destroy();
    }
  }, {
    key: "onAddTemplateButtonClick",
    value: function onAddTemplateButtonClick() {
      (0, _get2.default)((0, _getPrototypeOf2.default)(AddSectionView.prototype), "onAddTemplateButtonClick", this).call(this);
      this.destroy();
    }
  }, {
    key: "onDropping",
    value: function onDropping() {
      (0, _get2.default)((0, _getPrototypeOf2.default)(AddSectionView.prototype), "onDropping", this).call(this);
      this.destroy();
    }
  }]);
  return AddSectionView;
}(_base.default);

var _default = AddSectionView;
exports.default = _default;

/***/ }),
/* 374 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _section = __webpack_require__(256);

var BaseElementView = __webpack_require__(297),
    ColumnEmptyView = __webpack_require__(375),
    ColumnView;

ColumnView = BaseElementView.extend({
  template: Marionette.TemplateCache.get('#tmpl-elementor-column-content'),
  emptyView: ColumnEmptyView,
  childViewContainer: elementor.config.legacyMode.elementWrappers ? '> .elementor-column-wrap > .elementor-widget-wrap' : '> .elementor-widget-wrap',
  toggleEditTools: true,
  behaviors: function behaviors() {
    var behaviors = BaseElementView.prototype.behaviors.apply(this, arguments);

    _.extend(behaviors, {
      Sortable: {
        behaviorClass: __webpack_require__(298),
        elChildType: 'widget'
      },
      Resizable: {
        behaviorClass: __webpack_require__(376)
      }
    });

    return elementor.hooks.applyFilters('elements/column/behaviors', behaviors, this);
  },
  className: function className() {
    var classes = BaseElementView.prototype.className.apply(this, arguments),
        type = this.isInner() ? 'inner' : 'top';
    return classes + ' elementor-column elementor-' + type + '-column';
  },
  tagName: function tagName() {
    return this.model.getSetting('html_tag') || 'div';
  },
  ui: function ui() {
    var ui = BaseElementView.prototype.ui.apply(this, arguments);
    ui.columnInner = elementor.config.legacyMode.elementWrappers ? '> .elementor-column-wrap' : '> .elementor-widget-wrap';
    ui.percentsTooltip = '> .elementor-element-overlay .elementor-column-percents-tooltip';
    return ui;
  },
  getEditButtons: function getEditButtons() {
    var elementData = elementor.getElementData(this.model),
        editTools = {};
    editTools.edit = {
      title: elementor.translate('edit_element', [elementData.title]),
      icon: 'column'
    };

    if (elementor.getPreferences('edit_buttons')) {
      editTools.duplicate = {
        title: elementor.translate('duplicate_element', [elementData.title]),
        icon: 'clone'
      };
      editTools.add = {
        title: elementor.translate('add_element', [elementData.title]),
        icon: 'plus'
      };
      editTools.remove = {
        title: elementor.translate('delete_element', [elementData.title]),
        icon: 'close'
      };
    }

    return editTools;
  },
  initialize: function initialize() {
    BaseElementView.prototype.initialize.apply(this, arguments);
    this.model.get('editSettings').set('defaultEditRoute', 'layout');
  },
  attachElContent: function attachElContent() {
    BaseElementView.prototype.attachElContent.apply(this, arguments);
    var $tooltip = jQuery('<div>', {
      class: 'elementor-column-percents-tooltip'
    });
    this.$el.children('.elementor-element-overlay').append($tooltip);
  },
  getContextMenuGroups: function getContextMenuGroups() {
    var self = this,
        groups = BaseElementView.prototype.getContextMenuGroups.apply(this, arguments),
        generalGroupIndex = groups.indexOf(_.findWhere(groups, {
      name: 'general'
    }));
    groups.splice(generalGroupIndex + 1, 0, {
      name: 'addNew',
      actions: [{
        name: 'addNew',
        icon: 'eicon-plus',
        title: elementor.translate('new_column'),
        callback: this.addNewColumn.bind(this),
        isEnabled: function isEnabled() {
          return self.model.collection.length < _section.DEFAULT_MAX_COLUMNS;
        }
      }]
    });
    return groups;
  },
  isDroppingAllowed: function isDroppingAllowed() {
    // Don't allow dragging items to document which is not editable.
    if (!this.getContainer().isEditable()) {
      return false;
    }

    var elementView = elementor.channels.panelElements.request('element:selected');

    if (!elementView) {
      return false;
    }

    var elType = elementView.model.get('elType');

    if ('section' === elType) {
      return !this.isInner();
    }

    return 'widget' === elType;
  },
  getPercentsForDisplay: function getPercentsForDisplay() {
    var inlineSize = +this.model.getSetting('_inline_size') || this.getPercentSize();
    return inlineSize.toFixed(1) + '%';
  },
  changeSizeUI: function changeSizeUI() {
    var self = this,
        columnSize = self.model.getSetting('_column_size');
    self.$el.attr('data-col', columnSize);

    _.defer(function () {
      // Wait for the column size to be applied
      if (self.ui.percentsTooltip) {
        self.ui.percentsTooltip.text(self.getPercentsForDisplay());
      }
    });
  },
  getPercentSize: function getPercentSize(size) {
    if (!size) {
      size = this.el.getBoundingClientRect().width;
    }

    return +(size / this.$el.parent().width() * 100).toFixed(3);
  },
  getSortableOptions: function getSortableOptions() {
    return {
      connectWith: '.elementor-widget-wrap',
      items: '> .elementor-element'
    };
  },
  changeChildContainerClasses: function changeChildContainerClasses() {
    var emptyClass = 'elementor-element-empty',
        populatedClass = 'elementor-element-populated';

    if (this.ui.columnInner) {
      if (this.collection.isEmpty()) {
        this.ui.columnInner.removeClass(populatedClass).addClass(emptyClass);
      } else {
        this.ui.columnInner.removeClass(emptyClass).addClass(populatedClass);
      }
    }
  },
  addNewColumn: function addNewColumn() {
    $e.run('document/elements/create', {
      model: {
        elType: 'column'
      },
      container: this.getContainer().parent,
      options: {
        at: this.$el.index() + 1
      }
    });
  },
  onRender: function onRender() {
    var _this = this;

    var isLegacyMode = elementor.config.legacyMode.elementWrappers;
    var itemsClasses = '';

    if (isLegacyMode) {
      itemsClasses = ' > .elementor-column-wrap > .elementor-widget-wrap > .elementor-element, >.elementor-column-wrap > .elementor-widget-wrap > .elementor-empty-view > .elementor-first-add';
    } else {
      itemsClasses = ' > .elementor-widget-wrap > .elementor-element, >.elementor-widget-wrap > .elementor-empty-view > .elementor-first-add';
    }

    BaseElementView.prototype.onRender.apply(this, arguments);
    this.changeChildContainerClasses();
    this.changeSizeUI();
    this.$el.html5Droppable({
      items: itemsClasses,
      axis: ['vertical'],
      groups: ['elementor-element'],
      isDroppingAllowed: this.isDroppingAllowed.bind(this),
      currentElementClass: 'elementor-html5dnd-current-element',
      placeholderClass: 'elementor-sortable-placeholder elementor-widget-placeholder',
      hasDraggingOnChildClass: 'elementor-dragging-on-child',
      onDropping: function onDropping(side, event) {
        event.stopPropagation(); // Triggering drag end manually, since it won't fired above iframe

        elementor.getPreviewView().onPanelElementDragEnd();
        var newIndex = jQuery(event.currentTarget).index(); // Since 3.0.0, the `.elementor-background-overlay` element sit at the same level as widgets

        if ('bottom' === side && isLegacyMode) {
          newIndex++;
        } else if ('top' === side && !isLegacyMode) {
          newIndex--;
        }

        _this.addElementFromPanel({
          at: newIndex
        });
      }
    });
  },
  onAddButtonClick: function onAddButtonClick(event) {
    event.stopPropagation();
    this.addNewColumn();
  }
});
module.exports = ColumnView;

/***/ }),
/* 375 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _helper = _interopRequireDefault(__webpack_require__(215));

module.exports = Marionette.ItemView.extend({
  template: '#tmpl-elementor-empty-preview',
  className: 'elementor-empty-view',
  events: {
    click: 'onClickAdd'
  },
  behaviors: function behaviors() {
    return {
      contextMenu: {
        behaviorClass: __webpack_require__(273),
        groups: this.getContextMenuGroups()
      }
    };
  },
  getContextMenuGroups: function getContextMenuGroups() {
    var _this = this;

    return [{
      name: 'general',
      actions: [{
        name: 'paste',
        title: elementor.translate('paste'),
        isEnabled: function isEnabled() {
          return _helper.default.isPasteEnabled(_this._parent.getContainer());
        },
        callback: function callback() {
          return $e.run('document/ui/paste', {
            container: _this._parent.getContainer()
          });
        }
      }]
    }];
  },
  onClickAdd: function onClickAdd() {
    $e.route('panel/elements/categories');
  }
});

/***/ }),
/* 376 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var ResizableBehavior;
ResizableBehavior = Marionette.Behavior.extend({
  defaults: {
    handles: elementorCommon.config.isRTL ? 'w' : 'e'
  },
  events: {
    resizestart: 'onResizeStart',
    resizestop: 'onResizeStop',
    resize: 'onResize'
  },
  initialize: function initialize() {
    Marionette.Behavior.prototype.initialize.apply(this, arguments);
    this.listenTo(elementor.channels.dataEditMode, 'switch', this.onEditModeSwitched);
  },
  active: function active() {
    if (!elementor.userCan('design')) {
      return;
    }

    this.deactivate();

    var options = _.clone(this.options);

    delete options.behaviorClass;

    var $childViewContainer = this.getChildViewContainer(),
        defaultResizableOptions = {},
        resizableOptions = _.extend(defaultResizableOptions, options);

    $childViewContainer.resizable(resizableOptions);
  },
  deactivate: function deactivate() {
    if (this.getChildViewContainer().resizable('instance')) {
      this.getChildViewContainer().resizable('destroy');
    }
  },
  onEditModeSwitched: function onEditModeSwitched(activeMode) {
    if ('edit' === activeMode) {
      this.active();
    } else {
      this.deactivate();
    }
  },
  onRender: function onRender() {
    var self = this;

    _.defer(function () {
      self.onEditModeSwitched(elementor.channels.dataEditMode.request('activeMode'));
    });
  },
  onDestroy: function onDestroy() {
    this.deactivate();
  },
  onResizeStart: function onResizeStart(event) {
    event.stopPropagation();
    this.view.$el.data('originalWidth', this.view.el.getBoundingClientRect().width);
    this.view.triggerMethod('request:resize:start', event);
  },
  onResizeStop: function onResizeStop(event) {
    event.stopPropagation();
    this.view.triggerMethod('request:resize:stop');
  },
  onResize: function onResize(event, ui) {
    event.stopPropagation();
    this.view.triggerMethod('request:resize', ui, event);
  },
  getChildViewContainer: function getChildViewContainer() {
    return this.$el;
  }
});
module.exports = ResizableBehavior;

/***/ }),
/* 377 */,
/* 378 */,
/* 379 */,
/* 380 */,
/* 381 */,
/* 382 */,
/* 383 */,
/* 384 */,
/* 385 */,
/* 386 */,
/* 387 */,
/* 388 */,
/* 389 */,
/* 390 */,
/* 391 */,
/* 392 */,
/* 393 */,
/* 394 */,
/* 395 */,
/* 396 */,
/* 397 */,
/* 398 */,
/* 399 */,
/* 400 */,
/* 401 */,
/* 402 */,
/* 403 */,
/* 404 */,
/* 405 */,
/* 406 */,
/* 407 */,
/* 408 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(3));

var _get2 = _interopRequireDefault(__webpack_require__(24));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(16));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var _createSuper2 = _interopRequireDefault(__webpack_require__(5));

var _commandHistory = _interopRequireDefault(__webpack_require__(128));

var _settings = _interopRequireDefault(__webpack_require__(337));

var CommandDisableEnable = /*#__PURE__*/function (_CommandHistory) {
  (0, _inherits2.default)(CommandDisableEnable, _CommandHistory);

  var _super = (0, _createSuper2.default)(CommandDisableEnable);

  function CommandDisableEnable() {
    (0, _classCallCheck2.default)(this, CommandDisableEnable);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(CommandDisableEnable, [{
    key: "initialize",
    value: function initialize(args) {
      (0, _get2.default)((0, _getPrototypeOf2.default)(CommandDisableEnable.prototype), "initialize", this).call(this, args);
      /**
       * Which command is running.
       *
       * @type {string}
       */

      this.type = this.currentCommand === this.constructor.getEnableCommand() ? 'enable' : 'disable';
    }
  }, {
    key: "validateArgs",
    value: function validateArgs(args) {
      this.requireContainer(args);
      this.requireArgumentConstructor('settings', Object, args);
    }
  }, {
    key: "getHistory",
    value: function getHistory(args) {
      var settings = args.settings,
          _args$containers = args.containers,
          containers = _args$containers === void 0 ? [args.container] : _args$containers,
          changes = {};
      containers.forEach(function (container) {
        var id = container.id;

        if (!changes[id]) {
          changes[id] = {};
        }

        changes[id] = settings;
      });

      var subTitle = elementor.translate(this.constructor.getName()) + ' ' + _settings.default.getSubTitle(args),
          type = this.type;

      return {
        containers: containers,
        subTitle: subTitle,
        data: {
          changes: changes,
          command: this.currentCommand
        },
        type: type,
        restore: this.constructor.restore
      };
    }
  }, {
    key: "isDataChanged",
    value: function isDataChanged() {
      return true;
    }
  }], [{
    key: "getName",
    value: function getName() {
      elementorModules.ForceMethodImplementation();
    }
    /**
     * @returns {string}
     */

  }, {
    key: "getEnableCommand",
    value: function getEnableCommand() {
      elementorModules.ForceMethodImplementation();
    }
    /**
     * @returns {string}
     */

  }, {
    key: "getDisableCommand",
    value: function getDisableCommand() {
      elementorModules.ForceMethodImplementation();
    }
  }, {
    key: "restore",
    value: function restore(historyItem, isRedo) {
      var data = historyItem.get('data'),
          CommandClass = $e.commands.getCommandClass(data.command); // Upon `disable` command toggle `isRedo`.

      if (CommandClass.getDisableCommand() === data.command) {
        isRedo = !isRedo;
      }

      historyItem.get('containers').forEach(function (container) {
        var settings = data.changes[container.id],
            toggle = isRedo ? CommandClass.getEnableCommand() : CommandClass.getDisableCommand();
        $e.run(toggle, {
          container: container,
          settings: settings
        });
        container.panel.refresh();
      });
    }
  }]);
  return CommandDisableEnable;
}(_commandHistory.default);

exports.default = CommandDisableEnable;

/***/ }),
/* 409 */,
/* 410 */,
/* 411 */,
/* 412 */,
/* 413 */,
/* 414 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(3));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var _createSuper2 = _interopRequireDefault(__webpack_require__(5));

var _commandDisableEnable = _interopRequireDefault(__webpack_require__(408));

var DisableEnable = /*#__PURE__*/function (_CommandDisableEnable) {
  (0, _inherits2.default)(DisableEnable, _CommandDisableEnable);

  var _super = (0, _createSuper2.default)(DisableEnable);

  function DisableEnable() {
    (0, _classCallCheck2.default)(this, DisableEnable);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(DisableEnable, null, [{
    key: "getName",
    value: function getName() {
      return 'dynamic';
    }
  }, {
    key: "getEnableCommand",
    value: function getEnableCommand() {
      return 'document/dynamic/enable';
    }
  }, {
    key: "getDisableCommand",
    value: function getDisableCommand() {
      return 'document/dynamic/disable';
    }
  }]);
  return DisableEnable;
}(_commandDisableEnable.default);

exports.default = DisableEnable;

/***/ }),
/* 415 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

_Object$defineProperty(exports, "Copy", {
  enumerable: true,
  get: function get() {
    return _copy.Copy;
  }
});

_Object$defineProperty(exports, "CopyAll", {
  enumerable: true,
  get: function get() {
    return _copyAll.CopyAll;
  }
});

_Object$defineProperty(exports, "Create", {
  enumerable: true,
  get: function get() {
    return _create.Create;
  }
});

_Object$defineProperty(exports, "Delete", {
  enumerable: true,
  get: function get() {
    return _delete.Delete;
  }
});

_Object$defineProperty(exports, "Duplicate", {
  enumerable: true,
  get: function get() {
    return _duplicate.Duplicate;
  }
});

_Object$defineProperty(exports, "Empty", {
  enumerable: true,
  get: function get() {
    return _empty.Empty;
  }
});

_Object$defineProperty(exports, "Import", {
  enumerable: true,
  get: function get() {
    return _import.Import;
  }
});

_Object$defineProperty(exports, "Paste", {
  enumerable: true,
  get: function get() {
    return _paste.Paste;
  }
});

_Object$defineProperty(exports, "Move", {
  enumerable: true,
  get: function get() {
    return _move.Move;
  }
});

_Object$defineProperty(exports, "PasteStyle", {
  enumerable: true,
  get: function get() {
    return _pasteStyle.PasteStyle;
  }
});

_Object$defineProperty(exports, "ResetSettings", {
  enumerable: true,
  get: function get() {
    return _resetSettings.ResetSettings;
  }
});

_Object$defineProperty(exports, "ResetStyle", {
  enumerable: true,
  get: function get() {
    return _resetStyle.ResetStyle;
  }
});

_Object$defineProperty(exports, "Settings", {
  enumerable: true,
  get: function get() {
    return _settings.Settings;
  }
});

var _copy = __webpack_require__(666);

var _copyAll = __webpack_require__(667);

var _create = __webpack_require__(668);

var _delete = __webpack_require__(669);

var _duplicate = __webpack_require__(670);

var _empty = __webpack_require__(671);

var _import = __webpack_require__(672);

var _paste = __webpack_require__(673);

var _move = __webpack_require__(674);

var _pasteStyle = __webpack_require__(675);

var _resetSettings = __webpack_require__(676);

var _resetStyle = __webpack_require__(677);

var _settings = __webpack_require__(337);

/***/ }),
/* 416 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(3));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var _createSuper2 = _interopRequireDefault(__webpack_require__(5));

var _commandDisableEnable = _interopRequireDefault(__webpack_require__(408));

var DisableEnable = /*#__PURE__*/function (_CommandDisableEnable) {
  (0, _inherits2.default)(DisableEnable, _CommandDisableEnable);

  var _super = (0, _createSuper2.default)(DisableEnable);

  function DisableEnable() {
    (0, _classCallCheck2.default)(this, DisableEnable);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(DisableEnable, null, [{
    key: "getName",
    value: function getName() {
      return 'Global';
    }
  }, {
    key: "getEnableCommand",
    value: function getEnableCommand() {
      return 'document/globals/enable';
    }
  }, {
    key: "getDisableCommand",
    value: function getDisableCommand() {
      return 'document/globals/disable';
    }
  }]);
  return DisableEnable;
}(_commandDisableEnable.default);

exports.default = DisableEnable;

/***/ }),
/* 417 */,
/* 418 */,
/* 419 */,
/* 420 */,
/* 421 */,
/* 422 */,
/* 423 */,
/* 424 */,
/* 425 */,
/* 426 */,
/* 427 */,
/* 428 */,
/* 429 */,
/* 430 */,
/* 431 */,
/* 432 */,
/* 433 */,
/* 434 */,
/* 435 */,
/* 436 */,
/* 437 */,
/* 438 */,
/* 439 */,
/* 440 */,
/* 441 */,
/* 442 */,
/* 443 */,
/* 444 */,
/* 445 */,
/* 446 */,
/* 447 */,
/* 448 */,
/* 449 */,
/* 450 */,
/* 451 */,
/* 452 */,
/* 453 */,
/* 454 */,
/* 455 */,
/* 456 */,
/* 457 */,
/* 458 */,
/* 459 */,
/* 460 */,
/* 461 */,
/* 462 */,
/* 463 */,
/* 464 */,
/* 465 */,
/* 466 */,
/* 467 */,
/* 468 */,
/* 469 */,
/* 470 */,
/* 471 */,
/* 472 */,
/* 473 */,
/* 474 */,
/* 475 */,
/* 476 */,
/* 477 */,
/* 478 */,
/* 479 */,
/* 480 */,
/* 481 */,
/* 482 */,
/* 483 */,
/* 484 */,
/* 485 */,
/* 486 */,
/* 487 */,
/* 488 */,
/* 489 */,
/* 490 */,
/* 491 */,
/* 492 */,
/* 493 */,
/* 494 */,
/* 495 */,
/* 496 */,
/* 497 */,
/* 498 */,
/* 499 */,
/* 500 */,
/* 501 */,
/* 502 */,
/* 503 */,
/* 504 */,
/* 505 */,
/* 506 */,
/* 507 */,
/* 508 */,
/* 509 */,
/* 510 */,
/* 511 */,
/* 512 */,
/* 513 */,
/* 514 */,
/* 515 */,
/* 516 */,
/* 517 */,
/* 518 */,
/* 519 */,
/* 520 */,
/* 521 */,
/* 522 */,
/* 523 */,
/* 524 */,
/* 525 */,
/* 526 */,
/* 527 */,
/* 528 */,
/* 529 */,
/* 530 */,
/* 531 */,
/* 532 */,
/* 533 */,
/* 534 */,
/* 535 */,
/* 536 */,
/* 537 */,
/* 538 */,
/* 539 */,
/* 540 */,
/* 541 */,
/* 542 */,
/* 543 */,
/* 544 */,
/* 545 */,
/* 546 */,
/* 547 */,
/* 548 */,
/* 549 */,
/* 550 */,
/* 551 */,
/* 552 */,
/* 553 */,
/* 554 */,
/* 555 */,
/* 556 */,
/* 557 */,
/* 558 */,
/* 559 */,
/* 560 */,
/* 561 */,
/* 562 */,
/* 563 */,
/* 564 */,
/* 565 */,
/* 566 */,
/* 567 */,
/* 568 */,
/* 569 */,
/* 570 */,
/* 571 */,
/* 572 */,
/* 573 */,
/* 574 */,
/* 575 */,
/* 576 */,
/* 577 */,
/* 578 */,
/* 579 */,
/* 580 */,
/* 581 */,
/* 582 */,
/* 583 */,
/* 584 */,
/* 585 */,
/* 586 */,
/* 587 */,
/* 588 */,
/* 589 */,
/* 590 */,
/* 591 */,
/* 592 */,
/* 593 */,
/* 594 */,
/* 595 */,
/* 596 */,
/* 597 */,
/* 598 */,
/* 599 */,
/* 600 */,
/* 601 */,
/* 602 */,
/* 603 */,
/* 604 */,
/* 605 */,
/* 606 */,
/* 607 */,
/* 608 */,
/* 609 */,
/* 610 */,
/* 611 */,
/* 612 */,
/* 613 */,
/* 614 */,
/* 615 */,
/* 616 */,
/* 617 */,
/* 618 */,
/* 619 */,
/* 620 */,
/* 621 */,
/* 622 */,
/* 623 */,
/* 624 */,
/* 625 */,
/* 626 */,
/* 627 */,
/* 628 */,
/* 629 */,
/* 630 */,
/* 631 */,
/* 632 */,
/* 633 */,
/* 634 */,
/* 635 */,
/* 636 */,
/* 637 */,
/* 638 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = exports.Before = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(3));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var _createSuper2 = _interopRequireDefault(__webpack_require__(5));

var _base = _interopRequireDefault(__webpack_require__(314));

var Before = /*#__PURE__*/function (_Base) {
  (0, _inherits2.default)(Before, _Base);

  var _super = (0, _createSuper2.default)(Before);

  function Before() {
    (0, _classCallCheck2.default)(this, Before);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(Before, [{
    key: "register",
    value: function register() {
      $e.hooks.registerUIBefore(this);
    }
  }]);
  return Before;
}(_base.default);

exports.Before = Before;
var _default = Before;
exports.default = _default;

/***/ }),
/* 639 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = exports.Catch = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(3));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var _createSuper2 = _interopRequireDefault(__webpack_require__(5));

var _base = _interopRequireDefault(__webpack_require__(314));

var Catch = /*#__PURE__*/function (_Base) {
  (0, _inherits2.default)(Catch, _Base);

  var _super = (0, _createSuper2.default)(Catch);

  function Catch() {
    (0, _classCallCheck2.default)(this, Catch);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(Catch, [{
    key: "register",
    value: function register() {
      $e.hooks.registerUICatch(this);
    }
  }]);
  return Catch;
}(_base.default);

exports.Catch = Catch;
var _default = Catch;
exports.default = _default;

/***/ }),
/* 640 */,
/* 641 */,
/* 642 */,
/* 643 */,
/* 644 */,
/* 645 */,
/* 646 */,
/* 647 */,
/* 648 */,
/* 649 */,
/* 650 */,
/* 651 */,
/* 652 */,
/* 653 */,
/* 654 */,
/* 655 */,
/* 656 */,
/* 657 */,
/* 658 */,
/* 659 */,
/* 660 */,
/* 661 */,
/* 662 */,
/* 663 */,
/* 664 */,
/* 665 */,
/* 666 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = exports.Copy = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(3));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var _createSuper2 = _interopRequireDefault(__webpack_require__(5));

var _commandBase = _interopRequireDefault(__webpack_require__(23));

var Copy = /*#__PURE__*/function (_CommandBase) {
  (0, _inherits2.default)(Copy, _CommandBase);

  var _super = (0, _createSuper2.default)(Copy);

  function Copy() {
    (0, _classCallCheck2.default)(this, Copy);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(Copy, [{
    key: "validateArgs",
    value: function validateArgs(args) {
      this.requireContainer(args);
    }
  }, {
    key: "apply",
    value: function apply(args) {
      var _args$storageKey = args.storageKey,
          storageKey = _args$storageKey === void 0 ? 'clipboard' : _args$storageKey,
          _args$containers = args.containers,
          containers = _args$containers === void 0 ? [args.container] : _args$containers;
      elementorCommon.storage.set(storageKey, containers.map(function (container) {
        return container.model.toJSON({
          copyHtmlCache: true
        });
      }));
    }
  }]);
  return Copy;
}(_commandBase.default);

exports.Copy = Copy;
var _default = Copy;
exports.default = _default;

/***/ }),
/* 667 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = exports.CopyAll = void 0;

var _values = _interopRequireDefault(__webpack_require__(56));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(3));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var _createSuper2 = _interopRequireDefault(__webpack_require__(5));

var _commandBase = _interopRequireDefault(__webpack_require__(23));

var CopyAll = /*#__PURE__*/function (_CommandBase) {
  (0, _inherits2.default)(CopyAll, _CommandBase);

  var _super = (0, _createSuper2.default)(CopyAll);

  function CopyAll() {
    (0, _classCallCheck2.default)(this, CopyAll);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(CopyAll, [{
    key: "apply",
    value: function apply() {
      $e.run('document/elements/copy', {
        containers: (0, _values.default)(elementor.getPreviewView().children._views).map(function (view) {
          return view.getContainer();
        })
      });
    }
  }]);
  return CopyAll;
}(_commandBase.default);

exports.CopyAll = CopyAll;
var _default = CopyAll;
exports.default = _default;

/***/ }),
/* 668 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = exports.Create = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(3));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var _createSuper2 = _interopRequireDefault(__webpack_require__(5));

var _commandHistory = _interopRequireDefault(__webpack_require__(128));

var Create = /*#__PURE__*/function (_CommandHistory) {
  (0, _inherits2.default)(Create, _CommandHistory);

  var _super = (0, _createSuper2.default)(Create);

  function Create() {
    (0, _classCallCheck2.default)(this, Create);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(Create, [{
    key: "validateArgs",
    value: function validateArgs(args) {
      this.requireContainer(args); // Avoid Backbone model & etc.

      this.requireArgumentConstructor('model', Object, args);
    }
  }, {
    key: "getHistory",
    value: function getHistory(args) {
      var model = args.model,
          _args$containers = args.containers,
          containers = _args$containers === void 0 ? [args.container] : _args$containers;
      return {
        containers: containers,
        model: model,
        type: 'add',
        title: elementor.helpers.getModelLabel(model)
      };
    }
  }, {
    key: "apply",
    value: function apply(args) {
      var _this = this;

      var model = args.model,
          _args$options = args.options,
          options = _args$options === void 0 ? {} : _args$options,
          _args$containers2 = args.containers,
          containers = _args$containers2 === void 0 ? [args.container] : _args$containers2;
      var result = []; // BC: Deprecated since 2.8.0 - use `$e.hooks`.

      if (!options.trigger) {
        options.trigger = {
          beforeAdd: 'element:before:add',
          afterAdd: 'element:after:add'
        };
      }

      containers.forEach(function (container) {
        container = container.lookup();
        var createdContainer = container.view.addElement(model, options).getContainer();
        result.push(createdContainer);
        /**
         * Acknowledge history of each created item, because we cannot pass the elements when they do not exist
         * in getHistory().
         */

        if (_this.isHistoryActive()) {
          $e.internal('document/history/log-sub-item', {
            container: container,
            type: 'sub-add',
            restore: _this.constructor.restore,
            options: options,
            data: {
              containerToRestore: createdContainer,
              modelToRestore: createdContainer.model.toJSON()
            }
          });
        }
      });

      if (1 === result.length) {
        result = result[0];
      }

      return result;
    }
  }, {
    key: "isDataChanged",
    value: function isDataChanged() {
      return true;
    }
  }], [{
    key: "restore",
    value: function restore(historyItem, isRedo) {
      var data = historyItem.get('data'),
          container = historyItem.get('container'),
          options = historyItem.get('options') || {}; // No clone when restoring. e.g: duplicate will generate unique ids while restoring.

      if (options.clone) {
        options.clone = false;
      }

      if (isRedo) {
        $e.run('document/elements/create', {
          container: container,
          model: data.modelToRestore,
          options: options
        });
      } else {
        $e.run('document/elements/delete', {
          container: data.containerToRestore
        });
      }
    }
  }]);
  return Create;
}(_commandHistory.default);

exports.Create = Create;
var _default = Create;
exports.default = _default;

/***/ }),
/* 669 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = exports.Delete = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(3));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var _createSuper2 = _interopRequireDefault(__webpack_require__(5));

var _commandHistory = _interopRequireDefault(__webpack_require__(128));

var Delete = /*#__PURE__*/function (_CommandHistory) {
  (0, _inherits2.default)(Delete, _CommandHistory);

  var _super = (0, _createSuper2.default)(Delete);

  function Delete() {
    (0, _classCallCheck2.default)(this, Delete);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(Delete, [{
    key: "validateArgs",
    value: function validateArgs(args) {
      this.requireContainer(args);
    }
  }, {
    key: "getHistory",
    value: function getHistory(args) {
      var _args$containers = args.containers,
          containers = _args$containers === void 0 ? [args.container] : _args$containers;
      return {
        containers: containers,
        type: 'remove'
      };
    }
  }, {
    key: "apply",
    value: function apply(args) {
      var _this = this;

      var _args$containers2 = args.containers,
          containers = _args$containers2 === void 0 ? [args.container] : _args$containers2;
      containers.forEach(function (container) {
        container = container.lookup();

        if (_this.isHistoryActive()) {
          $e.internal('document/history/log-sub-item', {
            container: container,
            type: 'sub-remove',
            restore: _this.constructor.restore,
            data: {
              model: container.model.toJSON(),
              parent: container.parent,
              at: container.view._index
            }
          });
        } // BC: Deprecated since 2.8.0 - use `$e.hooks`.


        elementor.channels.data.trigger('element:before:remove', container.model);
        container.model.destroy(); // BC: Deprecated since 2.8.0 - use `$e.hooks`.

        elementor.channels.data.trigger('element:after:remove', container.model);
        container.panel.refresh();
      });

      if (1 === containers.length) {
        return containers[0];
      }

      return containers;
    }
  }, {
    key: "isDataChanged",
    value: function isDataChanged() {
      return true;
    }
  }], [{
    key: "restore",
    value: function restore(historyItem, isRedo) {
      var container = historyItem.get('container'),
          data = historyItem.get('data');

      if (isRedo) {
        $e.run('document/elements/delete', {
          container: container
        });
      } else {
        $e.run('document/elements/create', {
          container: data.parent,
          model: data.model,
          options: {
            at: data.at
          }
        });
      }
    }
  }]);
  return Delete;
}(_commandHistory.default);

exports.Delete = Delete;
var _default = Delete;
exports.default = _default;

/***/ }),
/* 670 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = exports.Duplicate = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(3));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var _createSuper2 = _interopRequireDefault(__webpack_require__(5));

var _commandHistory = _interopRequireDefault(__webpack_require__(128));

var Duplicate = /*#__PURE__*/function (_CommandHistory) {
  (0, _inherits2.default)(Duplicate, _CommandHistory);

  var _super = (0, _createSuper2.default)(Duplicate);

  function Duplicate() {
    (0, _classCallCheck2.default)(this, Duplicate);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(Duplicate, [{
    key: "validateArgs",
    value: function validateArgs(args) {
      this.requireContainer(args);
    }
  }, {
    key: "getHistory",
    value: function getHistory(args) {
      var _args$containers = args.containers,
          containers = _args$containers === void 0 ? [args.container] : _args$containers;
      return {
        containers: containers,
        type: 'duplicate'
      };
    }
  }, {
    key: "apply",
    value: function apply(args) {
      var _args$containers2 = args.containers,
          containers = _args$containers2 === void 0 ? [args.container] : _args$containers2,
          result = [];
      containers.forEach(function (container) {
        var parent = container.parent,
            at = container.view._index + 1;
        result.push($e.run('document/elements/create', {
          container: parent,
          model: container.model.toJSON(),
          options: {
            at: at,
            clone: true
          }
        }));
      });

      if (1 === result.length) {
        return result[0];
      }

      return result;
    }
  }]);
  return Duplicate;
}(_commandHistory.default);

exports.Duplicate = Duplicate;
var _default = Duplicate;
exports.default = _default;

/***/ }),
/* 671 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = exports.Empty = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(3));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var _createSuper2 = _interopRequireDefault(__webpack_require__(5));

var _commandHistory = _interopRequireDefault(__webpack_require__(128));

var Empty = /*#__PURE__*/function (_CommandHistory) {
  (0, _inherits2.default)(Empty, _CommandHistory);

  var _super = (0, _createSuper2.default)(Empty);

  function Empty() {
    (0, _classCallCheck2.default)(this, Empty);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(Empty, [{
    key: "getHistory",
    value: function getHistory(args) {
      if (args.force) {
        return {
          type: 'remove',
          title: elementor.translate('all_content'),
          data: elementor.elements ? elementor.elements.toJSON() : null,
          restore: this.constructor.restore
        };
      }

      return false;
    }
  }, {
    key: "apply",
    value: function apply(args) {
      if (args.force && elementor.elements) {
        elementor.elements.reset();
        elementor.getPreviewContainer().panel.closeEditor();
        return;
      }

      elementor.getClearPageDialog().show();
    }
  }, {
    key: "isDataChanged",
    value: function isDataChanged() {
      if (this.args.force) {
        return true;
      }
    }
  }], [{
    key: "restore",
    value: function restore(historyItem, isRedo) {
      if (isRedo) {
        $e.run('document/elements/empty', {
          force: true
        });
      } else {
        var data = historyItem.get('data');

        if (data) {
          elementor.getPreviewView().addChildModel(data);
        }

        $e.internal('document/save/set-is-modified', {
          status: true
        });
      }
    }
  }]);
  return Empty;
}(_commandHistory.default);

exports.Empty = Empty;
var _default = Empty;
exports.default = _default;

/***/ }),
/* 672 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = exports.Import = void 0;

var _assign = _interopRequireDefault(__webpack_require__(138));

var _values = _interopRequireDefault(__webpack_require__(56));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(3));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var _createSuper2 = _interopRequireDefault(__webpack_require__(5));

var _commandHistory = _interopRequireDefault(__webpack_require__(128));

var Import = /*#__PURE__*/function (_CommandHistory) {
  (0, _inherits2.default)(Import, _CommandHistory);

  var _super = (0, _createSuper2.default)(Import);

  function Import() {
    (0, _classCallCheck2.default)(this, Import);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(Import, [{
    key: "validateArgs",
    value: function validateArgs(args) {
      this.requireArgumentInstance('model', Backbone.Model, args);
      this.requireArgumentConstructor('data', Object, args);
    }
  }, {
    key: "getHistory",
    value: function getHistory(args) {
      var model = args.model;
      return {
        type: 'add',
        title: elementor.translate('template'),
        subTitle: model.get('title')
      };
    }
  }, {
    key: "apply",
    value: function apply(args) {
      var data = args.data,
          _args$options = args.options,
          options = _args$options === void 0 ? args.options || {} : _args$options,
          previewContainer = elementor.getPreviewContainer(),
          result = [];
      var at = isNaN(options.at) ? previewContainer.view.collection.length : options.at; // Each `data.content`.

      (0, _values.default)(data.content).forEach(function (model) {
        result.push($e.run('document/elements/create', {
          container: elementor.getPreviewContainer(),
          model: model,
          options: (0, _assign.default)(options, {
            at: at
          })
        }));
        at++;
      });

      if (options.withPageSettings) {
        $e.run('document/elements/settings', {
          container: elementor.settings.page.getEditedView().getContainer(),
          settings: data.page_settings,
          options: {
            external: true
          }
        });
      }

      return result;
    }
  }]);
  return Import;
}(_commandHistory.default);

exports.Import = Import;
var _default = Import;
exports.default = _default;

/***/ }),
/* 673 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = exports.Paste = void 0;

var _assign = _interopRequireDefault(__webpack_require__(138));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(3));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var _createSuper2 = _interopRequireDefault(__webpack_require__(5));

var _commandHistory = _interopRequireDefault(__webpack_require__(128));

var Paste = /*#__PURE__*/function (_CommandHistory) {
  (0, _inherits2.default)(Paste, _CommandHistory);

  var _super = (0, _createSuper2.default)(Paste);

  function Paste() {
    (0, _classCallCheck2.default)(this, Paste);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(Paste, [{
    key: "validateArgs",
    value: function validateArgs(args) {
      this.requireContainer(args); // Validate if storage have data.

      var _args$storageKey = args.storageKey,
          storageKey = _args$storageKey === void 0 ? 'clipboard' : _args$storageKey,
          storageData = elementorCommon.storage.get(storageKey);
      this.requireArgumentType('storageData', 'object', {
        storageData: storageData
      });
    }
  }, {
    key: "getHistory",
    value: function getHistory() {
      return {
        type: 'paste',
        title: elementor.translate('elements')
      };
    }
  }, {
    key: "apply",
    value: function apply(args) {
      var _this = this;

      var at = args.at,
          _args$rebuild = args.rebuild,
          rebuild = _args$rebuild === void 0 ? false : _args$rebuild,
          _args$storageKey2 = args.storageKey,
          storageKey = _args$storageKey2 === void 0 ? 'clipboard' : _args$storageKey2,
          _args$containers = args.containers,
          containers = _args$containers === void 0 ? [args.container] : _args$containers,
          _args$options = args.options,
          options = _args$options === void 0 ? {} : _args$options,
          storageData = elementorCommon.storage.get(storageKey),
          result = []; // Paste on "Add Section" area.

      if (rebuild) {
        // Paste at each target.
        containers.forEach(function (targetContainer) {
          var index = 'undefined' === typeof at ? targetContainer.view.collection.length : at;
          storageData.forEach(function (model) {
            switch (model.elType) {
              case 'section':
                {
                  // If is inner create section for `inner-section`.
                  if (model.isInner) {
                    var section = $e.run('document/elements/create', {
                      container: targetContainer,
                      model: {
                        elType: 'section'
                      },
                      columns: 1,
                      options: {
                        at: index,
                        edit: false
                      }
                    }); // `targetContainer` = first column at `section`.

                    targetContainer = section.view.children.findByIndex(0).getContainer();
                  } // Will be not affected by hook since it always have `model.elements`.


                  result.push(_this.pasteTo([targetContainer], [model], {
                    at: index,
                    edit: false
                  }));
                  index++;
                }
                break;

              case 'column':
                {
                  // Next code changed from original since `_checkIsEmpty()` was removed.
                  var _section = $e.run('document/elements/create', {
                    container: targetContainer,
                    model: {
                      elType: 'section'
                    },
                    columns: 0,
                    // section with no columns.
                    options: {
                      at: index,
                      edit: false
                    }
                  });

                  result.push(_this.pasteTo([_section], [model]));
                }
                break;

              default:
                // In case it widget:
                var target; // If you trying to paste widget on section, then paste should be at the first column.

                if ('section' === targetContainer.model.get('elType')) {
                  target = [targetContainer.view.children.findByIndex(0).getContainer()];
                } else {
                  // Else, create section with one column for element.
                  var _section2 = $e.run('document/elements/create', {
                    container: targetContainer,
                    model: {
                      elType: 'section'
                    },
                    columns: 1,
                    options: {
                      at: index
                    }
                  }); // Create the element in the column that just was created.


                  target = [_section2.view.children.first().getContainer()];
                }

                result.push(_this.pasteTo(target, [model]));
            }
          });
        });
      } else {
        if (undefined !== at) {
          options.at = at;
        }

        result.push(this.pasteTo(containers, storageData, options));
      }

      if (1 === result.length) {
        return result[0];
      }

      return result;
    }
  }, {
    key: "pasteTo",
    value: function pasteTo(targetContainers, models) {
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      options = (0, _assign.default)({
        at: null,
        clone: true
      }, options);
      var result = [];
      models.forEach(function (model) {
        result.push($e.run('document/elements/create', {
          containers: targetContainers,
          model: model,
          options: options
        })); // On paste sections, increase the `at` for every section.

        if (null !== options.at) {
          options.at++;
        }
      });

      if (1 === result.length) {
        return result[0];
      }

      return result;
    }
  }]);
  return Paste;
}(_commandHistory.default);

exports.Paste = Paste;
var _default = Paste;
exports.default = _default;

/***/ }),
/* 674 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = exports.Move = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(3));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var _createSuper2 = _interopRequireDefault(__webpack_require__(5));

var _commandHistory = _interopRequireDefault(__webpack_require__(128));

var Move = /*#__PURE__*/function (_CommandHistory) {
  (0, _inherits2.default)(Move, _CommandHistory);

  var _super = (0, _createSuper2.default)(Move);

  function Move() {
    (0, _classCallCheck2.default)(this, Move);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(Move, [{
    key: "validateArgs",
    value: function validateArgs(args) {
      this.requireContainer(args);
      this.requireArgumentInstance('target', elementorModules.editor.Container, args);
    }
  }, {
    key: "getHistory",
    value: function getHistory(args) {
      var _args$containers = args.containers,
          containers = _args$containers === void 0 ? [args.container] : _args$containers;
      return {
        containers: containers,
        type: 'move'
      };
    }
  }, {
    key: "apply",
    value: function apply(args) {
      var target = args.target,
          _args$options = args.options,
          options = _args$options === void 0 ? {} : _args$options,
          _args$containers2 = args.containers,
          containers = _args$containers2 === void 0 ? [args.container] : _args$containers2,
          reCreate = [];
      containers.forEach(function (container) {
        reCreate.push(container.model.toJSON());
        $e.run('document/elements/delete', {
          container: container
        });
      });
      var count = 0;
      reCreate.forEach(function (model) {
        // If multiple fix position.
        if (options.hasOwnProperty('at') && reCreate.length > 1) {
          if (0 !== count) {
            options.at += count;
          }
        } // BC: Deprecated since 2.8.0 - use `$e.hooks`.


        options.trigger = {
          beforeAdd: 'drag:before:update',
          afterAdd: 'drag:after:update'
        };
        $e.run('document/elements/create', {
          container: target,
          model: model,
          options: options
        });
        count++;
      });
    }
  }]);
  return Move;
}(_commandHistory.default);

exports.Move = Move;
var _default = Move;
exports.default = _default;

/***/ }),
/* 675 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = exports.PasteStyle = void 0;

var _keys = _interopRequireDefault(__webpack_require__(25));

var _slicedToArray2 = _interopRequireDefault(__webpack_require__(105));

var _entries = _interopRequireDefault(__webpack_require__(91));

var _typeof2 = _interopRequireDefault(__webpack_require__(47));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(3));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var _createSuper2 = _interopRequireDefault(__webpack_require__(5));

var _commandHistory = _interopRequireDefault(__webpack_require__(128));

var PasteStyle = /*#__PURE__*/function (_CommandHistory) {
  (0, _inherits2.default)(PasteStyle, _CommandHistory);

  var _super = (0, _createSuper2.default)(PasteStyle);

  function PasteStyle() {
    (0, _classCallCheck2.default)(this, PasteStyle);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(PasteStyle, [{
    key: "validateArgs",
    value: function validateArgs(args) {
      this.requireContainer(args); // Validate if storage have data.

      var _args$storageKey = args.storageKey,
          storageKey = _args$storageKey === void 0 ? 'clipboard' : _args$storageKey,
          storageData = elementorCommon.storage.get(storageKey);
      this.requireArgumentType('storageData', 'object', {
        storageData: storageData
      });
    }
  }, {
    key: "validateControls",
    value: function validateControls(source, target) {
      var result = true; // Cannot use `_.isEmpty()` does not pass paste style test.

      if (null === source || null === target || undefined === source || undefined === target || 'object' === (0, _typeof2.default)(source) ^ 'object' === (0, _typeof2.default)(target)) {
        result = false;
      }

      return result;
    }
  }, {
    key: "getHistory",
    value: function getHistory(args) {
      var _args$containers = args.containers,
          containers = _args$containers === void 0 ? [args.container] : _args$containers;
      return {
        containers: containers,
        type: 'paste_style'
      };
    }
  }, {
    key: "apply",
    value: function apply(args) {
      var _this = this;

      var _args$containers2 = args.containers,
          containers = _args$containers2 === void 0 ? [args.container] : _args$containers2,
          _args$storageKey2 = args.storageKey,
          storageKey = _args$storageKey2 === void 0 ? 'clipboard' : _args$storageKey2,
          storageData = elementorCommon.storage.get(storageKey);
      containers.forEach(function (targetContainer) {
        var targetSettings = targetContainer.settings,
            targetSettingsAttributes = targetSettings.attributes,
            targetControls = targetSettings.controls,
            diffSettings = {},
            addExtraControls = function addExtraControls(sourceSettings, extraType) {
          if (sourceSettings[extraType]) {
            (0, _entries.default)(sourceSettings[extraType]).forEach(function (_ref) {
              var _ref2 = (0, _slicedToArray2.default)(_ref, 2),
                  controlName = _ref2[0],
                  value = _ref2[1];

              var control = targetControls[controlName];

              if (targetContainer.view.isStyleTransferControl(control)) {
                diffSettings[extraType] = diffSettings[extraType] || {};
                diffSettings[extraType][controlName] = value;
              }
            });
          }
        };

        storageData.forEach(function (sourceModel) {
          var sourceSettings = sourceModel.settings;
          addExtraControls(sourceSettings, '__globals__');
          addExtraControls(sourceSettings, '__dynamic__');
          (0, _entries.default)(targetControls).forEach(function (_ref3) {
            var _ref4 = (0, _slicedToArray2.default)(_ref3, 2),
                controlName = _ref4[0],
                control = _ref4[1];

            if (!targetContainer.view.isStyleTransferControl(control)) {
              return;
            }

            var controlSourceValue = sourceSettings[controlName],
                controlTargetValue = targetSettingsAttributes[controlName];

            if (!_this.validateControls(controlSourceValue, controlTargetValue)) {
              return;
            }

            if ('object' === (0, _typeof2.default)(controlSourceValue)) {
              var isEqual = (0, _keys.default)(controlSourceValue).some(function (propertyKey) {
                if (controlSourceValue[propertyKey] !== controlTargetValue[propertyKey]) {
                  return false;
                }
              });

              if (isEqual) {
                return;
              }
            }

            if (controlSourceValue === controlTargetValue || !elementor.getControlView(control.type).onPasteStyle(control, controlSourceValue)) {
              return;
            }

            diffSettings[controlName] = controlSourceValue;
          }); // Moved from `editor/elements/views/base.js` `pasteStyle` function.

          targetContainer.view.allowRender = false; // BC: Deprecated since 2.8.0 - use `$e.hooks`.

          elementor.channels.data.trigger('element:before:paste:style', targetContainer.model);
          $e.run('document/elements/settings', {
            container: targetContainer,
            settings: diffSettings,
            options: {
              external: true
            }
          }); // BC: Deprecated since 2.8.0 - use `$e.hooks`.

          elementor.channels.data.trigger('element:after:paste:style', targetContainer.model);
          targetContainer.view.allowRender = true;
          targetContainer.render();
        });
      });
    }
  }]);
  return PasteStyle;
}(_commandHistory.default);

exports.PasteStyle = PasteStyle;
var _default = PasteStyle;
exports.default = _default;

/***/ }),
/* 676 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = exports.ResetSettings = void 0;

__webpack_require__(26);

var _slicedToArray2 = _interopRequireDefault(__webpack_require__(105));

var _entries = _interopRequireDefault(__webpack_require__(91));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(3));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var _createSuper2 = _interopRequireDefault(__webpack_require__(5));

var _commandHistory = _interopRequireDefault(__webpack_require__(128));

var ResetSettings = /*#__PURE__*/function (_CommandHistory) {
  (0, _inherits2.default)(ResetSettings, _CommandHistory);

  var _super = (0, _createSuper2.default)(ResetSettings);

  function ResetSettings() {
    (0, _classCallCheck2.default)(this, ResetSettings);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(ResetSettings, [{
    key: "validateArgs",
    value: function validateArgs(args) {
      this.requireContainer(args);
    }
  }, {
    key: "getHistory",
    value: function getHistory(args) {
      var _args$containers = args.containers,
          containers = _args$containers === void 0 ? [args.container] : _args$containers;
      return {
        containers: containers,
        type: 'reset_settings'
      };
    }
  }, {
    key: "apply",
    value: function apply(args) {
      var _args$containers2 = args.containers,
          containers = _args$containers2 === void 0 ? [args.container] : _args$containers2,
          _args$settings = args.settings,
          settings = _args$settings === void 0 ? [] : _args$settings;
      containers.forEach(function (container) {
        var controls = (0, _entries.default)(container.settings.controls),
            defaultValues = {};
        controls.forEach(function (_ref) {
          var _ref2 = (0, _slicedToArray2.default)(_ref, 2),
              controlName = _ref2[0],
              control = _ref2[1];

          // If settings were specific, restore only them.
          if (settings && settings.length) {
            if (!settings.find(function (key) {
              return key === controlName;
            })) {
              return;
            }
          }

          defaultValues[controlName] = control.default;
        });
        $e.run('document/elements/settings', {
          container: container,
          settings: defaultValues
        });
        container.render();
      });
    }
  }]);
  return ResetSettings;
}(_commandHistory.default);

exports.ResetSettings = ResetSettings;
var _default = ResetSettings;
exports.default = _default;

/***/ }),
/* 677 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = exports.ResetStyle = void 0;

var _slicedToArray2 = _interopRequireDefault(__webpack_require__(105));

var _entries = _interopRequireDefault(__webpack_require__(91));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(3));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var _createSuper2 = _interopRequireDefault(__webpack_require__(5));

var _commandHistory = _interopRequireDefault(__webpack_require__(128));

var ResetStyle = /*#__PURE__*/function (_CommandHistory) {
  (0, _inherits2.default)(ResetStyle, _CommandHistory);

  var _super = (0, _createSuper2.default)(ResetStyle);

  function ResetStyle() {
    (0, _classCallCheck2.default)(this, ResetStyle);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(ResetStyle, [{
    key: "validateArgs",
    value: function validateArgs(args) {
      this.requireContainer(args);
    }
  }, {
    key: "getHistory",
    value: function getHistory(args) {
      var _args$containers = args.containers,
          containers = _args$containers === void 0 ? [args.container] : _args$containers;
      return {
        containers: containers,
        type: 'reset_style'
      };
    }
  }, {
    key: "apply",
    value: function apply(args) {
      var _args$containers2 = args.containers,
          containers = _args$containers2 === void 0 ? [args.container] : _args$containers2;
      containers.forEach(function (container) {
        var controls = container.settings.controls,
            settingsKeys = [];
        container.view.allowRender = false;
        (0, _entries.default)(controls).forEach(function (_ref) {
          var _ref2 = (0, _slicedToArray2.default)(_ref, 2),
              controlName = _ref2[0],
              control = _ref2[1];

          if (!container.view.isStyleTransferControl(control)) {
            return;
          }

          settingsKeys.push(controlName);
        }); // BC: Deprecated since 2.8.0 - use `$e.hooks`.

        elementor.channels.data.trigger('element:before:reset:style', container.model);
        $e.run('document/elements/reset-settings', {
          container: container,
          settings: settingsKeys,
          options: {
            external: true
          }
        }); // BC: Deprecated since 2.8.0 - use `$e.hooks`.

        elementor.channels.data.trigger('element:after:reset:style', container.model);
        container.view.allowRender = true;
        container.render();
      });
    }
  }]);
  return ResetStyle;
}(_commandHistory.default);

exports.ResetStyle = ResetStyle;
var _default = ResetStyle;
exports.default = _default;

/***/ }),
/* 678 */,
/* 679 */,
/* 680 */,
/* 681 */,
/* 682 */,
/* 683 */,
/* 684 */,
/* 685 */,
/* 686 */,
/* 687 */,
/* 688 */,
/* 689 */,
/* 690 */,
/* 691 */,
/* 692 */,
/* 693 */,
/* 694 */,
/* 695 */,
/* 696 */,
/* 697 */,
/* 698 */,
/* 699 */,
/* 700 */,
/* 701 */,
/* 702 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(3));

var _commands = __webpack_require__(415);

var Helper = /*#__PURE__*/function () {
  function Helper() {
    (0, _classCallCheck2.default)(this, Helper);
  }

  (0, _createClass2.default)(Helper, null, [{
    key: "createSectionColumns",
    value: function createSectionColumns(containers, columns, options) {
      var structure = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
      containers.forEach(function (
      /**Container*/
      container) {
        for (var loopIndex = 0; loopIndex < columns; loopIndex++) {
          var model = {
            id: elementorCommon.helpers.getUniqueId(),
            elType: 'column',
            settings: {},
            elements: []
          };
          /**
           * TODO: Try improve performance of using 'document/elements/create` instead of manual create.
           */

          container.view.addChildModel(model, options);
          /**
           * Manual history & not using of `$e.run('document/elements/create')`
           * For performance reasons.
           */

          $e.internal('document/history/log-sub-item', {
            container: container,
            type: 'sub-add',
            restore: _commands.Create.restore,
            options: options,
            data: {
              containerToRestore: container,
              modelToRestore: model
            }
          });
        }
      });

      if (structure) {
        containers.forEach(function (
        /* Container */
        container) {
          container.view.setStructure(structure, false);
        });
      } else if (columns) {
        containers.forEach(function (
        /* Container */
        container) {
          return container.view.resetLayout();
        }); // Focus on last container.

        containers[containers.length - 1].model.trigger('request:edit');
      }
    }
  }]);
  return Helper;
}();

exports.default = Helper;

/***/ }),
/* 703 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(3));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var _createSuper2 = _interopRequireDefault(__webpack_require__(5));

var _commandBase = _interopRequireDefault(__webpack_require__(23));

var CreateBase = /*#__PURE__*/function (_CommandBase) {
  (0, _inherits2.default)(CreateBase, _CommandBase);

  var _super = (0, _createSuper2.default)(CreateBase);

  function CreateBase() {
    (0, _classCallCheck2.default)(this, CreateBase);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(CreateBase, [{
    key: "validateArgs",
    value: function validateArgs() {
      var args = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      this.requireContainer(args);
      this.requireArgumentType('setting', 'string', args);
      this.requireArgumentType('title', 'string', args);
    }
  }]);
  return CreateBase;
}(_commandBase.default);

exports.default = CreateBase;

/***/ }),
/* 704 */,
/* 705 */,
/* 706 */,
/* 707 */,
/* 708 */,
/* 709 */,
/* 710 */,
/* 711 */,
/* 712 */,
/* 713 */,
/* 714 */,
/* 715 */,
/* 716 */,
/* 717 */,
/* 718 */,
/* 719 */,
/* 720 */,
/* 721 */,
/* 722 */,
/* 723 */,
/* 724 */,
/* 725 */,
/* 726 */,
/* 727 */,
/* 728 */,
/* 729 */,
/* 730 */,
/* 731 */,
/* 732 */,
/* 733 */,
/* 734 */,
/* 735 */,
/* 736 */,
/* 737 */,
/* 738 */,
/* 739 */,
/* 740 */,
/* 741 */,
/* 742 */,
/* 743 */,
/* 744 */,
/* 745 */,
/* 746 */,
/* 747 */,
/* 748 */,
/* 749 */,
/* 750 */,
/* 751 */,
/* 752 */,
/* 753 */,
/* 754 */,
/* 755 */,
/* 756 */,
/* 757 */,
/* 758 */,
/* 759 */,
/* 760 */,
/* 761 */,
/* 762 */,
/* 763 */,
/* 764 */,
/* 765 */,
/* 766 */,
/* 767 */,
/* 768 */,
/* 769 */,
/* 770 */,
/* 771 */,
/* 772 */,
/* 773 */,
/* 774 */,
/* 775 */,
/* 776 */,
/* 777 */,
/* 778 */,
/* 779 */,
/* 780 */,
/* 781 */,
/* 782 */,
/* 783 */,
/* 784 */,
/* 785 */,
/* 786 */,
/* 787 */,
/* 788 */,
/* 789 */,
/* 790 */,
/* 791 */,
/* 792 */,
/* 793 */,
/* 794 */,
/* 795 */,
/* 796 */,
/* 797 */,
/* 798 */,
/* 799 */,
/* 800 */,
/* 801 */,
/* 802 */,
/* 803 */,
/* 804 */,
/* 805 */,
/* 806 */,
/* 807 */,
/* 808 */,
/* 809 */,
/* 810 */,
/* 811 */,
/* 812 */,
/* 813 */,
/* 814 */,
/* 815 */,
/* 816 */,
/* 817 */,
/* 818 */,
/* 819 */,
/* 820 */,
/* 821 */,
/* 822 */,
/* 823 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _component = _interopRequireDefault(__webpack_require__(824));

var _component2 = _interopRequireDefault(__webpack_require__(913));

elementorCommon.elements.$window.on('elementor:init-components', function () {
  // TODO: Move to elementor:init-data-components
  $e.components.register(new _component2.default());
  $e.components.register(new _component.default()); // TODO: Remove, BC Since 2.9.0.

  elementor.saver = $e.components.get('document/save');
});
$e.modules.document = _component.default.getModules();

/***/ }),
/* 824 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(38);

var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

var _values = _interopRequireDefault(__webpack_require__(56));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(3));

var _get2 = _interopRequireDefault(__webpack_require__(24));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(16));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var _createSuper2 = _interopRequireDefault(__webpack_require__(5));

var _componentBase = _interopRequireDefault(__webpack_require__(86));

var _backwardsCompatibility = _interopRequireDefault(__webpack_require__(825));

var _commandHistory = _interopRequireDefault(__webpack_require__(128));

var _commandHistoryDebounce = _interopRequireDefault(__webpack_require__(315));

var components = _interopRequireWildcard(__webpack_require__(826));

var hooks = _interopRequireWildcard(__webpack_require__(883));

var Component = /*#__PURE__*/function (_ComponentBase) {
  (0, _inherits2.default)(Component, _ComponentBase);

  var _super = (0, _createSuper2.default)(Component);

  function Component() {
    (0, _classCallCheck2.default)(this, Component);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(Component, [{
    key: "getNamespace",
    value: function getNamespace() {
      return 'document';
    }
  }, {
    key: "registerAPI",
    value: function registerAPI() {
      new _backwardsCompatibility.default();
      (0, _values.default)(components).forEach(function (ComponentClass) {
        return $e.components.register(new ComponentClass());
      });
      (0, _get2.default)((0, _getPrototypeOf2.default)(Component.prototype), "registerAPI", this).call(this);
    }
  }, {
    key: "defaultCommands",
    value: function defaultCommands() {
      return {//example: ( args ) => ( new Commands.Example( args ).run() ),
      };
    }
  }, {
    key: "defaultHooks",
    value: function defaultHooks() {
      return this.importHooks(hooks);
    }
  }, {
    key: "defaultUtils",
    value: function defaultUtils() {
      var _this = this;

      return {
        findViewRecursive: function findViewRecursive(parent, key, value) {
          var multiple = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
          var found = [];

          for (var x in parent._views) {
            var view = parent._views[x];

            if (value === view.model.get(key)) {
              found.push(view);

              if (!multiple) {
                return found;
              }
            }

            if (view.children) {
              var views = _this.utils.findViewRecursive(view.children, key, value, multiple);

              if (views.length) {
                found = found.concat(views);

                if (!multiple) {
                  return found;
                }
              }
            }
          }

          return found;
        },
        findViewById: function findViewById(id) {
          var elements = _this.utils.findViewRecursive(elementor.getPreviewView().children, 'id', id, false);

          return elements ? elements[0] : false;
        },
        findContainerById: function findContainerById(id) {
          var result = _this.utils.findViewById(id);

          if (result) {
            result = result.getContainer();
          }

          return result;
        }
      };
    }
  }], [{
    key: "getModules",
    value: function getModules() {
      var modules = {
        get CommandHistoryBase() {
          elementorCommon.helpers.hardDeprecated('$e.modules.document.CommandHistoryBase', '3.0.0', '$e.modules.document.CommandHistory');
          return this.CommandHistory;
        },

        get CommandHistoryDebounceBase() {
          elementorCommon.helpers.hardDeprecated('$e.modules.document.CommandHistoryDebounceBase', '3.0.0', '$e.modules.document.CommandHistoryDebounce');
          return this.CommandHistoryDebounce;
        },

        CommandHistory: _commandHistory.default,
        CommandHistoryDebounce: _commandHistoryDebounce.default
      };
      return modules;
    }
  }]);
  return Component;
}(_componentBase.default);

exports.default = Component;

/***/ }),
/* 825 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(3));

var BackwardsCompatibility = /*#__PURE__*/function () {
  function BackwardsCompatibility() {
    (0, _classCallCheck2.default)(this, BackwardsCompatibility);
    elementorCommon.elements.$window.on('elementor:init', this.deprecatedEvents);
    elementor.channels.data.on('template:before:insert', this.startInsertTemplate).on('template:after:insert', this.endItem);
  }

  (0, _createClass2.default)(BackwardsCompatibility, [{
    key: "deprecatedEvents",
    value: function deprecatedEvents() {
      var elementorDataEvents = elementor.channels.data._events,
          deprecatedEvents = ['drag:before:update', 'drag:after:update', 'element:before:add', 'element:after:add', 'element:before:remove', 'element:after:remove', 'element:before:paste:style', 'element:after:paste:style', 'element:before:reset:style', 'element:after:reset:style', 'section:before:drop', 'section:after:drop'];
      deprecatedEvents.forEach(function (event) {
        if (elementorDataEvents[event] && elementorDataEvents[event].length) {
          elementorCommon.helpers.softDeprecated("event: ".concat(event), '2.8.0', '$e.hooks');
        }
      });
    }
  }, {
    key: "startInsertTemplate",
    value: function startInsertTemplate(model) {
      elementorCommon.helpers.softDeprecated('event: template:before:insert', '2.8.0', "$e.run( 'document/import' )");
      elementor.documents.getCurrent().history.startItem({
        type: 'add',
        title: elementor.translate('template'),
        subTitle: model.get('title'),
        elementType: 'template'
      });
    }
  }, {
    key: "endItem",
    value: function endItem() {
      elementor.documents.getCurrent().history.endItem();
    }
  }]);
  return BackwardsCompatibility;
}();

exports.default = BackwardsCompatibility;

/***/ }),
/* 826 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

_Object$defineProperty(exports, "DynamicComponent", {
  enumerable: true,
  get: function get() {
    return _component.default;
  }
});

_Object$defineProperty(exports, "ElementsComponent", {
  enumerable: true,
  get: function get() {
    return _component2.default;
  }
});

_Object$defineProperty(exports, "GlobalsComponent", {
  enumerable: true,
  get: function get() {
    return _component3.default;
  }
});

_Object$defineProperty(exports, "HistoryComponent", {
  enumerable: true,
  get: function get() {
    return _component4.default;
  }
});

_Object$defineProperty(exports, "RepeaterComponent", {
  enumerable: true,
  get: function get() {
    return _component5.default;
  }
});

_Object$defineProperty(exports, "SaveComponent", {
  enumerable: true,
  get: function get() {
    return _component6.default;
  }
});

_Object$defineProperty(exports, "UIComponent", {
  enumerable: true,
  get: function get() {
    return _component7.default;
  }
});

var _component = _interopRequireDefault(__webpack_require__(827));

var _component2 = _interopRequireDefault(__webpack_require__(832));

var _component3 = _interopRequireDefault(__webpack_require__(833));

var _component4 = _interopRequireDefault(__webpack_require__(839));

var _component5 = _interopRequireDefault(__webpack_require__(848));

var _component6 = _interopRequireDefault(__webpack_require__(854));

var _component7 = _interopRequireDefault(__webpack_require__(876));

/***/ }),
/* 827 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(38);

var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(3));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var _createSuper2 = _interopRequireDefault(__webpack_require__(5));

var _componentBase = _interopRequireDefault(__webpack_require__(86));

var commands = _interopRequireWildcard(__webpack_require__(828));

var Component = /*#__PURE__*/function (_ComponentBase) {
  (0, _inherits2.default)(Component, _ComponentBase);

  var _super = (0, _createSuper2.default)(Component);

  function Component() {
    (0, _classCallCheck2.default)(this, Component);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(Component, [{
    key: "getNamespace",
    value: function getNamespace() {
      return 'document/dynamic';
    }
  }, {
    key: "defaultCommands",
    value: function defaultCommands() {
      return this.importCommands(commands);
    }
  }]);
  return Component;
}(_componentBase.default);

exports.default = Component;

/***/ }),
/* 828 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

_Object$defineProperty(exports, "Disable", {
  enumerable: true,
  get: function get() {
    return _disable.Disable;
  }
});

_Object$defineProperty(exports, "Enable", {
  enumerable: true,
  get: function get() {
    return _enable.Enable;
  }
});

_Object$defineProperty(exports, "Settings", {
  enumerable: true,
  get: function get() {
    return _settings.Settings;
  }
});

var _disable = __webpack_require__(829);

var _enable = __webpack_require__(830);

var _settings = __webpack_require__(831);

/***/ }),
/* 829 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = exports.Disable = void 0;

var _keys = _interopRequireDefault(__webpack_require__(25));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(3));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var _createSuper2 = _interopRequireDefault(__webpack_require__(5));

var _disableEnable = _interopRequireDefault(__webpack_require__(414));

var Disable = /*#__PURE__*/function (_DisableEnable) {
  (0, _inherits2.default)(Disable, _DisableEnable);

  var _super = (0, _createSuper2.default)(Disable);

  function Disable() {
    (0, _classCallCheck2.default)(this, Disable);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(Disable, [{
    key: "apply",
    value: function apply(args) {
      var settings = args.settings,
          _args$containers = args.containers,
          containers = _args$containers === void 0 ? [args.container] : _args$containers;
      containers.forEach(function (container) {
        container = container.lookup();
        (0, _keys.default)(settings).forEach(function (setting) {
          container.dynamic.unset(setting);
        });
        container.settings.set('__dynamic__', container.dynamic.toJSON());
        container.render();
      });
    }
  }]);
  return Disable;
}(_disableEnable.default);

exports.Disable = Disable;
var _default = Disable;
exports.default = _default;

/***/ }),
/* 830 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = exports.Enable = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(3));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var _createSuper2 = _interopRequireDefault(__webpack_require__(5));

var _disableEnable = _interopRequireDefault(__webpack_require__(414));

var Enable = /*#__PURE__*/function (_DisableEnable) {
  (0, _inherits2.default)(Enable, _DisableEnable);

  var _super = (0, _createSuper2.default)(Enable);

  function Enable() {
    (0, _classCallCheck2.default)(this, Enable);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(Enable, [{
    key: "apply",
    value: function apply(args) {
      var settings = args.settings,
          _args$containers = args.containers,
          containers = _args$containers === void 0 ? [args.container] : _args$containers;
      containers.forEach(function (container) {
        container = container.lookup();
        container.dynamic.set(settings);
        container.settings.set('__dynamic__', container.dynamic.toJSON());
        container.render();
      });
    }
  }]);
  return Enable;
}(_disableEnable.default);

exports.Enable = Enable;
var _default = Enable;
exports.default = _default;

/***/ }),
/* 831 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = exports.Settings = void 0;

var _keys = _interopRequireDefault(__webpack_require__(25));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(3));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var _createSuper2 = _interopRequireDefault(__webpack_require__(5));

var _commandHistoryDebounce = _interopRequireDefault(__webpack_require__(315));

var _settings = _interopRequireDefault(__webpack_require__(337));

/**
 * The difference between 'document/elements/settings` and `document/dynamic/settings` is:
 * that `document/elements/settings` apply settings to `container.settings` and `document/dynamic/settings` affect
 * `container.settings.__dynamic__`, also clearing the dynamic if `args.settings` is empty.
 */
var Settings = /*#__PURE__*/function (_CommandHistoryDeboun) {
  (0, _inherits2.default)(Settings, _CommandHistoryDeboun);

  var _super = (0, _createSuper2.default)(Settings);

  function Settings() {
    (0, _classCallCheck2.default)(this, Settings);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(Settings, [{
    key: "validateArgs",
    value: function validateArgs(args) {
      this.requireContainer(args);
      this.requireArgumentConstructor('settings', Object, args);
    }
  }, {
    key: "getHistory",
    value: function getHistory(args) {
      var settings = args.settings,
          _args$containers = args.containers,
          containers = _args$containers === void 0 ? [args.container] : _args$containers,
          changes = {};
      containers.forEach(function (container) {
        var id = container.id;

        if (!changes[id]) {
          changes[id] = {};
        }

        changes[id] = {
          old: container.dynamic.toJSON(),
          new: settings
        };
      });

      var subTitle = _settings.default.getSubTitle(args);

      return {
        containers: containers,
        subTitle: subTitle,
        data: {
          changes: changes
        },
        type: 'change',
        restore: this.constructor.restore
      };
    }
  }, {
    key: "apply",
    value: function apply(args) {
      var settings = args.settings,
          _args$containers2 = args.containers,
          containers = _args$containers2 === void 0 ? [args.container] : _args$containers2;
      containers.forEach(function (container) {
        container = container.lookup();

        if (!(0, _keys.default)(settings).length) {
          container.dynamic.clear();
        } else {
          container.dynamic.set(settings);
        }

        container.settings.set('__dynamic__', container.dynamic.toJSON());
        container.render();
      });
    }
  }], [{
    key: "restore",
    value: function restore(historyItem, isRedo) {
      var data = historyItem.get('data');
      historyItem.get('containers').forEach(function (container) {
        var changes = data.changes[container.id];
        $e.run('document/dynamic/settings', {
          container: container,
          settings: isRedo ? changes.new : changes.old
        });
        container.panel.refresh();
      });
    }
  }]);
  return Settings;
}(_commandHistoryDebounce.default);

exports.Settings = Settings;
var _default = Settings;
exports.default = _default;

/***/ }),
/* 832 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(38);

var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(3));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var _createSuper2 = _interopRequireDefault(__webpack_require__(5));

var _componentBase = _interopRequireDefault(__webpack_require__(86));

var commands = _interopRequireWildcard(__webpack_require__(415));

var Component = /*#__PURE__*/function (_ComponentBase) {
  (0, _inherits2.default)(Component, _ComponentBase);

  var _super = (0, _createSuper2.default)(Component);

  function Component() {
    (0, _classCallCheck2.default)(this, Component);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(Component, [{
    key: "getNamespace",
    value: function getNamespace() {
      return 'document/elements';
    }
  }, {
    key: "defaultCommands",
    value: function defaultCommands() {
      return this.importCommands(commands);
    }
  }]);
  return Component;
}(_componentBase.default);

exports.default = Component;

/***/ }),
/* 833 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(38);

var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(3));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var _createSuper2 = _interopRequireDefault(__webpack_require__(5));

var _componentBase = _interopRequireDefault(__webpack_require__(86));

var commands = _interopRequireWildcard(__webpack_require__(834));

var Component = /*#__PURE__*/function (_ComponentBase) {
  (0, _inherits2.default)(Component, _ComponentBase);

  var _super = (0, _createSuper2.default)(Component);

  function Component() {
    (0, _classCallCheck2.default)(this, Component);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(Component, [{
    key: "getNamespace",
    value: function getNamespace() {
      return 'document/globals';
    }
  }, {
    key: "defaultCommands",
    value: function defaultCommands() {
      return this.importCommands(commands);
    }
  }]);
  return Component;
}(_componentBase.default);

exports.default = Component;

/***/ }),
/* 834 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

_Object$defineProperty(exports, "Disable", {
  enumerable: true,
  get: function get() {
    return _disable.Disable;
  }
});

_Object$defineProperty(exports, "Enable", {
  enumerable: true,
  get: function get() {
    return _enable.Enable;
  }
});

_Object$defineProperty(exports, "Settings", {
  enumerable: true,
  get: function get() {
    return _settings.Settings;
  }
});

_Object$defineProperty(exports, "Unlink", {
  enumerable: true,
  get: function get() {
    return _unlink.Unlink;
  }
});

var _disable = __webpack_require__(835);

var _enable = __webpack_require__(836);

var _settings = __webpack_require__(837);

var _unlink = __webpack_require__(838);

/***/ }),
/* 835 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = exports.Disable = void 0;

var _keys = _interopRequireDefault(__webpack_require__(25));

var _promise = _interopRequireDefault(__webpack_require__(137));

__webpack_require__(150);

__webpack_require__(118);

__webpack_require__(79);

__webpack_require__(271);

var _regenerator = _interopRequireDefault(__webpack_require__(83));

var _slicedToArray2 = _interopRequireDefault(__webpack_require__(105));

var _entries = _interopRequireDefault(__webpack_require__(91));

__webpack_require__(66);

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(84));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(3));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var _createSuper2 = _interopRequireDefault(__webpack_require__(5));

var _disableEnable = _interopRequireDefault(__webpack_require__(416));

// TODO: Disable is the only command that extends DisableEnable which is async.
var Disable = /*#__PURE__*/function (_DisableEnable) {
  (0, _inherits2.default)(Disable, _DisableEnable);

  var _super = (0, _createSuper2.default)(Disable);

  function Disable() {
    (0, _classCallCheck2.default)(this, Disable);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(Disable, [{
    key: "apply",
    value: function () {
      var _apply = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee3(args) {
        var settings, _args$containers, containers, _args$options, options, all;

        return _regenerator.default.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                settings = args.settings, _args$containers = args.containers, containers = _args$containers === void 0 ? [args.container] : _args$containers, _args$options = args.options, options = _args$options === void 0 ? {} : _args$options;
                all = containers.map( /*#__PURE__*/function () {
                  var _ref = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2(
                  /* Container */
                  container) {
                    var promises;
                    return _regenerator.default.wrap(function _callee2$(_context2) {
                      while (1) {
                        switch (_context2.prev = _context2.next) {
                          case 0:
                            container = container.lookup();
                            promises = []; // TODO rename `options.restore` => `options.unlink`.

                            if (!options.restore) {
                              _context2.next = 6;
                              break;
                            }

                            promises = (0, _entries.default)(container.globals.attributes).map( /*#__PURE__*/function () {
                              var _ref3 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee(_ref2) {
                                var _ref4, globalKey, globalValue;

                                return _regenerator.default.wrap(function _callee$(_context) {
                                  while (1) {
                                    switch (_context.prev = _context.next) {
                                      case 0:
                                        _ref4 = (0, _slicedToArray2.default)(_ref2, 2), globalKey = _ref4[0], globalValue = _ref4[1];

                                        if (globalValue) {
                                          _context.next = 3;
                                          break;
                                        }

                                        return _context.abrupt("return");

                                      case 3:
                                        return _context.abrupt("return", $e.run('document/globals/unlink', {
                                          container: container,
                                          options: {
                                            external: true
                                          },
                                          globalValue: globalValue,
                                          setting: globalKey
                                        }));

                                      case 4:
                                      case "end":
                                        return _context.stop();
                                    }
                                  }
                                }, _callee);
                              }));

                              return function (_x3) {
                                return _ref3.apply(this, arguments);
                              };
                            }());
                            _context2.next = 6;
                            return _promise.default.all(promises);

                          case 6:
                            // Clear globals.
                            (0, _keys.default)(settings).forEach(function (setting) {
                              return container.globals.set(setting, '');
                            });
                            container.settings.set('__globals__', container.globals.toJSON());
                            container.renderUI();

                          case 9:
                          case "end":
                            return _context2.stop();
                        }
                      }
                    }, _callee2);
                  }));

                  return function (_x2) {
                    return _ref.apply(this, arguments);
                  };
                }());
                _context3.next = 4;
                return _promise.default.all(all);

              case 4:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }));

      function apply(_x) {
        return _apply.apply(this, arguments);
      }

      return apply;
    }()
  }]);
  return Disable;
}(_disableEnable.default);

exports.Disable = Disable;
var _default = Disable;
exports.default = _default;

/***/ }),
/* 836 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = exports.Enable = void 0;

__webpack_require__(40);

var _values = _interopRequireDefault(__webpack_require__(56));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(3));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var _createSuper2 = _interopRequireDefault(__webpack_require__(5));

var _disableEnable = _interopRequireDefault(__webpack_require__(416));

// Run when a global control value is chosen while the active value is custom.
var Enable = /*#__PURE__*/function (_DisableEnable) {
  (0, _inherits2.default)(Enable, _DisableEnable);

  var _super = (0, _createSuper2.default)(Enable);

  function Enable() {
    (0, _classCallCheck2.default)(this, Enable);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(Enable, [{
    key: "apply",
    value: function apply(args) {
      var settings = args.settings,
          _args$containers = args.containers,
          containers = _args$containers === void 0 ? [args.container] : _args$containers;
      containers.forEach(function (container) {
        container = container.lookup();
        container.globals.set(settings);
        container.settings.set('__globals__', container.globals.toJSON());
        container.renderUI(); // Clear custom local settings.

        (0, _values.default)(container.getGroupRelatedControls(settings)).forEach(function (control) {
          container.settings.set(control.name, control.default);
        });
      });
    }
  }]);
  return Enable;
}(_disableEnable.default);

exports.Enable = Enable;
var _default = Enable;
exports.default = _default;

/***/ }),
/* 837 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = exports.Settings = void 0;

var _keys = _interopRequireDefault(__webpack_require__(25));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(3));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var _createSuper2 = _interopRequireDefault(__webpack_require__(5));

var _commandHistoryDebounce = _interopRequireDefault(__webpack_require__(315));

var _settings = _interopRequireDefault(__webpack_require__(337));

var Settings = /*#__PURE__*/function (_CommandHistoryDeboun) {
  (0, _inherits2.default)(Settings, _CommandHistoryDeboun);

  var _super = (0, _createSuper2.default)(Settings);

  function Settings() {
    (0, _classCallCheck2.default)(this, Settings);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(Settings, [{
    key: "validateArgs",
    value: function validateArgs(args) {
      this.requireContainer(args);
      this.requireArgumentConstructor('settings', Object, args);
    }
  }, {
    key: "getHistory",
    value: function getHistory(args) {
      var settings = args.settings,
          _args$containers = args.containers,
          containers = _args$containers === void 0 ? [args.container] : _args$containers,
          changes = {};
      containers.forEach(function (container) {
        var id = container.id;

        if (!changes[id]) {
          changes[id] = {};
        }

        changes[id] = {
          old: container.globals.toJSON(),
          new: settings
        };
      });

      var subTitle = _settings.default.getSubTitle(args);

      return {
        containers: containers,
        subTitle: subTitle,
        data: {
          changes: changes
        },
        type: 'change',
        restore: this.constructor.restore
      };
    }
  }, {
    key: "apply",
    value: function apply(args) {
      var settings = args.settings,
          _args$containers2 = args.containers,
          containers = _args$containers2 === void 0 ? [args.container] : _args$containers2;
      containers.forEach(function (container) {
        container = container.lookup();

        if (!(0, _keys.default)(settings).length) {
          container.globals.clear();
        } else {
          container.globals.set(settings);
        }

        container.settings.set('__globals__', container.globals.toJSON());
        container.render();
      });
    }
  }, {
    key: "isDataChanged",
    value: function isDataChanged() {
      return true;
    }
  }], [{
    key: "restore",
    value: function restore(historyItem, isRedo) {
      var data = historyItem.get('data');
      historyItem.get('containers').forEach(function (container) {
        var changes = data.changes[container.id];
        $e.run('document/globals/settings', {
          container: container,
          settings: isRedo ? changes.new : changes.old
        });
        container.panel.refresh();
      });
    }
  }]);
  return Settings;
}(_commandHistoryDebounce.default);

exports.Settings = Settings;
var _default = Settings;
exports.default = _default;

/***/ }),
/* 838 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = exports.Unlink = void 0;

var _keys = _interopRequireDefault(__webpack_require__(25));

var _regenerator = _interopRequireDefault(__webpack_require__(83));

__webpack_require__(60);

var _slicedToArray2 = _interopRequireDefault(__webpack_require__(105));

var _entries = _interopRequireDefault(__webpack_require__(91));

var _promise = _interopRequireDefault(__webpack_require__(137));

__webpack_require__(150);

__webpack_require__(118);

__webpack_require__(79);

__webpack_require__(271);

__webpack_require__(66);

var _asyncToGenerator2 = _interopRequireDefault(__webpack_require__(84));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(3));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var _createSuper2 = _interopRequireDefault(__webpack_require__(5));

var _commandBase = _interopRequireDefault(__webpack_require__(23));

// TODO: Add dev-tools CSS to see if widget have globals.
var Unlink = /*#__PURE__*/function (_CommandBase) {
  (0, _inherits2.default)(Unlink, _CommandBase);

  var _super = (0, _createSuper2.default)(Unlink);

  function Unlink() {
    (0, _classCallCheck2.default)(this, Unlink);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(Unlink, [{
    key: "validateArgs",
    value: function validateArgs() {
      var args = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      this.requireContainer(args);
      this.requireArgumentType('setting', 'string', args);
      this.requireArgumentType('globalValue', 'string', args); // TODO: validate global value is command format.
    }
  }, {
    key: "apply",
    value: function () {
      var _apply = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2(args) {
        var _args$containers, containers, setting, globalValue, _args$options, options, localSettings;

        return _regenerator.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _args$containers = args.containers, containers = _args$containers === void 0 ? [args.container] : _args$containers, setting = args.setting, globalValue = args.globalValue, _args$options = args.options, options = _args$options === void 0 ? {} : _args$options, localSettings = {};
                _context2.next = 3;
                return _promise.default.all(containers.map( /*#__PURE__*/function () {
                  var _ref = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee(
                  /* Container */
                  container) {
                    var result, _container$controls$s, value, groupPrefix;

                    return _regenerator.default.wrap(function _callee$(_context) {
                      while (1) {
                        switch (_context.prev = _context.next) {
                          case 0:
                            _context.next = 2;
                            return $e.data.get(globalValue);

                          case 2:
                            result = _context.sent;

                            if (result) {
                              // Prepare global value to mapping.
                              value = result.data.value, groupPrefix = (_container$controls$s = container.controls[setting]) === null || _container$controls$s === void 0 ? void 0 : _container$controls$s.groupPrefix;

                              if (groupPrefix) {
                                (0, _entries.default)(value).forEach(function (_ref2) {
                                  var _ref3 = (0, _slicedToArray2.default)(_ref2, 2),
                                      dataKey = _ref3[0],
                                      dataValue = _ref3[1];

                                  dataKey = dataKey.replace(elementor.config.kit_config.typography_prefix, groupPrefix);
                                  localSettings[dataKey] = dataValue;
                                });
                              } else {
                                localSettings[setting] = value;
                              }
                            }

                            return _context.abrupt("return", _promise.default.resolve());

                          case 5:
                          case "end":
                            return _context.stop();
                        }
                      }
                    }, _callee);
                  }));

                  return function (_x2) {
                    return _ref.apply(this, arguments);
                  };
                }()));

              case 3:
                // Restore globals settings as custom local settings.
                if ((0, _keys.default)(localSettings).length) {
                  $e.run('document/elements/settings', {
                    containers: containers,
                    options: options,
                    settings: localSettings
                  });
                }

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function apply(_x) {
        return _apply.apply(this, arguments);
      }

      return apply;
    }()
  }, {
    key: "isDataChanged",
    value: function isDataChanged() {
      return true;
    }
  }]);
  return Unlink;
}(_commandBase.default);

exports.Unlink = Unlink;
var _default = Unlink;
exports.default = _default;

/***/ }),
/* 839 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(38);

var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(3));

var _get2 = _interopRequireDefault(__webpack_require__(24));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(16));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var _createSuper2 = _interopRequireDefault(__webpack_require__(5));

var _componentBase = _interopRequireDefault(__webpack_require__(86));

var commands = _interopRequireWildcard(__webpack_require__(350));

var commandsInternal = _interopRequireWildcard(__webpack_require__(840));

var Component = /*#__PURE__*/function (_ComponentBase) {
  (0, _inherits2.default)(Component, _ComponentBase);

  var _super = (0, _createSuper2.default)(Component);

  function Component() {
    (0, _classCallCheck2.default)(this, Component);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(Component, [{
    key: "__construct",
    value: function __construct(args) {
      (0, _get2.default)((0, _getPrototypeOf2.default)(Component.prototype), "__construct", this).call(this, args);
      /**
       * Transactions holder.
       *
       * @type {Array}
       */

      this.transactions = [];
    }
  }, {
    key: "getNamespace",
    value: function getNamespace() {
      return 'document/history';
    }
  }, {
    key: "defaultCommands",
    value: function defaultCommands() {
      return this.importCommands(commands);
    }
  }, {
    key: "defaultCommandsInternal",
    value: function defaultCommandsInternal() {
      return this.importCommands(commandsInternal);
    }
  }, {
    key: "normalizeLogTitle",
    value: function normalizeLogTitle(args) {
      var _args$containers = args.containers,
          containers = _args$containers === void 0 ? [args.container] : _args$containers;

      if (!args.title && containers[0]) {
        if (1 === containers.length) {
          args.title = containers[0].label;
        } else {
          args.title = elementor.translate('elements');
        }
      }

      return args;
    }
  }, {
    key: "mergeTransactions",
    value: function mergeTransactions(transactions) {
      var result = {};
      transactions.forEach(function (itemArgs) {
        // If no containers at the current transaction.
        if (!itemArgs.container && !itemArgs.containers) {
          return;
        }

        var _itemArgs$containers = itemArgs.containers,
            containers = _itemArgs$containers === void 0 ? [itemArgs.container] : _itemArgs$containers;

        if (containers) {
          containers.forEach(function (container) {
            if (!itemArgs.data) {
              return;
            } // Replace new changes by current itemArgs.


            if (result[container.id]) {
              result[container.id].data.changes[container.id].new = itemArgs.data.changes[container.id].new;
              return;
            }

            result[container.id] = itemArgs;
          });
        }
      });
      return result;
    }
  }, {
    key: "isTransactionStarted",
    value: function isTransactionStarted() {
      return Boolean(this.transactions.length);
    }
  }]);
  return Component;
}(_componentBase.default);

exports.default = Component;

/***/ }),
/* 840 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

_Object$defineProperty(exports, "AddTransaction", {
  enumerable: true,
  get: function get() {
    return _addTransaction.AddTransaction;
  }
});

_Object$defineProperty(exports, "ClearTransaction", {
  enumerable: true,
  get: function get() {
    return _clearTransaction.ClearTransaction;
  }
});

_Object$defineProperty(exports, "DeleteLog", {
  enumerable: true,
  get: function get() {
    return _deleteLog.DeleteLog;
  }
});

_Object$defineProperty(exports, "EndLog", {
  enumerable: true,
  get: function get() {
    return _endLog.EndLog;
  }
});

_Object$defineProperty(exports, "EndTransaction", {
  enumerable: true,
  get: function get() {
    return _endTransaction.EndTransaction;
  }
});

_Object$defineProperty(exports, "LogSubItem", {
  enumerable: true,
  get: function get() {
    return _logSubItem.LogSubItem;
  }
});

_Object$defineProperty(exports, "StartLog", {
  enumerable: true,
  get: function get() {
    return _startLog.StartLog;
  }
});

var _addTransaction = __webpack_require__(841);

var _clearTransaction = __webpack_require__(842);

var _deleteLog = __webpack_require__(843);

var _endLog = __webpack_require__(844);

var _endTransaction = __webpack_require__(845);

var _logSubItem = __webpack_require__(846);

var _startLog = __webpack_require__(847);

/***/ }),
/* 841 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = exports.AddTransaction = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(3));

var _get2 = _interopRequireDefault(__webpack_require__(24));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(16));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var _createSuper2 = _interopRequireDefault(__webpack_require__(5));

var _base = _interopRequireDefault(__webpack_require__(338));

var AddTransaction = /*#__PURE__*/function (_Base) {
  (0, _inherits2.default)(AddTransaction, _Base);

  var _super = (0, _createSuper2.default)(AddTransaction);

  function AddTransaction() {
    (0, _classCallCheck2.default)(this, AddTransaction);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(AddTransaction, [{
    key: "initialize",
    value: function initialize(args) {
      (0, _get2.default)((0, _getPrototypeOf2.default)(AddTransaction.prototype), "initialize", this).call(this, args);
      /**
       * Debounce always send 'add-transaction' with title & subTitle, when the transaction
       * already started, there is no need to save those args they are useless.
       */

      if (this.component.isTransactionStarted()) {
        delete args.title;
        delete args.subTitle;
      }
    }
  }, {
    key: "validateArgs",
    value: function validateArgs(args) {
      this.requireContainer();
      this.requireArgumentType('type', 'string', args);
    }
  }, {
    key: "apply",
    value: function apply(args) {
      var currentId = this.history.getCurrentId();

      if (currentId) {
        // If log already started chain his historyId.
        args.id = currentId;
      }

      args = this.component.normalizeLogTitle(args);
      this.component.transactions.push(args);
    }
  }]);
  return AddTransaction;
}(_base.default);

exports.AddTransaction = AddTransaction;
var _default = AddTransaction;
exports.default = _default;

/***/ }),
/* 842 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = exports.ClearTransaction = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(3));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var _createSuper2 = _interopRequireDefault(__webpack_require__(5));

var _base = _interopRequireDefault(__webpack_require__(338));

var ClearTransaction = /*#__PURE__*/function (_Base) {
  (0, _inherits2.default)(ClearTransaction, _Base);

  var _super = (0, _createSuper2.default)(ClearTransaction);

  function ClearTransaction() {
    (0, _classCallCheck2.default)(this, ClearTransaction);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(ClearTransaction, [{
    key: "apply",
    value: function apply() {
      this.component.transactions = [];
    }
  }]);
  return ClearTransaction;
}(_base.default);

exports.ClearTransaction = ClearTransaction;
var _default = ClearTransaction;
exports.default = _default;

/***/ }),
/* 843 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = exports.DeleteLog = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(3));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var _createSuper2 = _interopRequireDefault(__webpack_require__(5));

var _base = _interopRequireDefault(__webpack_require__(338));

var DeleteLog = /*#__PURE__*/function (_Base) {
  (0, _inherits2.default)(DeleteLog, _Base);

  var _super = (0, _createSuper2.default)(DeleteLog);

  function DeleteLog() {
    (0, _classCallCheck2.default)(this, DeleteLog);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(DeleteLog, [{
    key: "apply",
    value: function apply(args) {
      if (args.id) {
        this.history.deleteItem(args.id);
      }
    }
  }]);
  return DeleteLog;
}(_base.default);

exports.DeleteLog = DeleteLog;
var _default = DeleteLog;
exports.default = _default;

/***/ }),
/* 844 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = exports.EndLog = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(3));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var _createSuper2 = _interopRequireDefault(__webpack_require__(5));

var _base = _interopRequireDefault(__webpack_require__(338));

var EndLog = /*#__PURE__*/function (_Base) {
  (0, _inherits2.default)(EndLog, _Base);

  var _super = (0, _createSuper2.default)(EndLog);

  function EndLog() {
    (0, _classCallCheck2.default)(this, EndLog);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(EndLog, [{
    key: "apply",
    value: function apply(args) {
      if (args.id) {
        this.history.endItem(args.id);
      }
    }
  }]);
  return EndLog;
}(_base.default);

exports.EndLog = EndLog;
var _default = EndLog;
exports.default = _default;

/***/ }),
/* 845 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = exports.EndTransaction = void 0;

var _values = _interopRequireDefault(__webpack_require__(56));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(3));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var _createSuper2 = _interopRequireDefault(__webpack_require__(5));

var _base = _interopRequireDefault(__webpack_require__(338));

var EndTransaction = /*#__PURE__*/function (_Base) {
  (0, _inherits2.default)(EndTransaction, _Base);

  var _super = (0, _createSuper2.default)(EndTransaction);

  function EndTransaction() {
    (0, _classCallCheck2.default)(this, EndTransaction);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(EndTransaction, [{
    key: "apply",
    value: function apply() {
      if (!this.component.isTransactionStarted()) {
        return;
      }

      var firstItem = this.component.transactions[0],
          type = firstItem.type,
          transactions = this.component.mergeTransactions(this.component.transactions);
      var _firstItem$title = firstItem.title,
          title = _firstItem$title === void 0 ? '' : _firstItem$title,
          _firstItem$subTitle = firstItem.subTitle,
          subTitle = _firstItem$subTitle === void 0 ? '' : _firstItem$subTitle; // 'elements' title for multiple containers.

      if (transactions.length > 1) {
        title = elementor.translate('elements');
        subTitle = '';
      }

      var history = {
        title: title,
        subTitle: subTitle,
        type: type
      }; // If firstItem have id already it means that log already started for that transaction.

      if (firstItem.id) {
        history.id = firstItem.id;
      }

      var historyId = $e.internal('document/history/start-log', history);
      (0, _values.default)(transactions).forEach(function (item) {
        var itemArgs = item; // If log already started chain his historyId.

        if (firstItem.id) {
          itemArgs.id = firstItem.id;
        }

        $e.internal('document/history/log-sub-item', itemArgs);
      });
      $e.internal('document/history/end-log', {
        id: historyId
      }); // Clear transactions before leave.

      $e.internal('document/history/clear-transaction');
    }
  }]);
  return EndTransaction;
}(_base.default);

exports.EndTransaction = EndTransaction;
var _default = EndTransaction;
exports.default = _default;

/***/ }),
/* 846 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = exports.LogSubItem = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(3));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var _createSuper2 = _interopRequireDefault(__webpack_require__(5));

var _base = _interopRequireDefault(__webpack_require__(338));

var LogSubItem = /*#__PURE__*/function (_Base) {
  (0, _inherits2.default)(LogSubItem, _Base);

  var _super = (0, _createSuper2.default)(LogSubItem);

  function LogSubItem() {
    (0, _classCallCheck2.default)(this, LogSubItem);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(LogSubItem, [{
    key: "apply",
    value: function apply(args) {
      if (!this.history.getActive()) {
        return;
      }

      var id = args.id || this.history.getCurrentId();
      args = this.component.normalizeLogTitle(args);
      var items = this.history.getItems(),
          item = items.findWhere({
        id: id
      });

      if (!item) {
        throw new Error('History item not found.');
      }
      /**
       * Sometimes `args.id` passed to `LogSubItem`, to add sub item for specific id.
       * this `id` should not be passed as sub-item.
       */


      if (args.id) {
        delete args.id;
      }

      item.get('items').unshift(args);
    }
  }]);
  return LogSubItem;
}(_base.default);

exports.LogSubItem = LogSubItem;
var _default = LogSubItem;
exports.default = _default;

/***/ }),
/* 847 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = exports.StartLog = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(3));

var _get2 = _interopRequireDefault(__webpack_require__(24));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(16));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var _createSuper2 = _interopRequireDefault(__webpack_require__(5));

var _base = _interopRequireDefault(__webpack_require__(338));

var StartLog = /*#__PURE__*/function (_Base) {
  (0, _inherits2.default)(StartLog, _Base);

  var _super = (0, _createSuper2.default)(StartLog);

  function StartLog() {
    (0, _classCallCheck2.default)(this, StartLog);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(StartLog, [{
    key: "initialize",
    value: function initialize(args) {
      (0, _get2.default)((0, _getPrototypeOf2.default)(StartLog.prototype), "initialize", this).call(this, args);

      if (this.history.isItemStarted() || args.id) {
        this.isSubItem = true;
        return;
      }

      this.args = this.component.normalizeLogTitle(args);
    }
  }, {
    key: "validateArgs",
    value: function validateArgs(args) {
      if (!this.isSubItem) {
        this.requireArgumentType('type', 'string', args);
        this.requireArgumentType('title', 'string', args);
      }
    }
  }, {
    key: "apply",
    value: function apply(args) {
      if (this.isSubItem) {
        $e.internal('document/history/log-sub-item', args);
        return null;
      }

      return this.history.startItem(args);
    }
  }]);
  return StartLog;
}(_base.default);

exports.StartLog = StartLog;
var _default = StartLog;
exports.default = _default;

/***/ }),
/* 848 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(38);

var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(3));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var _createSuper2 = _interopRequireDefault(__webpack_require__(5));

var _componentBase = _interopRequireDefault(__webpack_require__(86));

var commands = _interopRequireWildcard(__webpack_require__(849));

var Component = /*#__PURE__*/function (_ComponentBase) {
  (0, _inherits2.default)(Component, _ComponentBase);

  var _super = (0, _createSuper2.default)(Component);

  function Component() {
    (0, _classCallCheck2.default)(this, Component);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(Component, [{
    key: "getNamespace",
    value: function getNamespace() {
      return 'document/repeater';
    }
  }, {
    key: "defaultCommands",
    value: function defaultCommands() {
      return this.importCommands(commands);
    }
  }]);
  return Component;
}(_componentBase.default);

exports.default = Component;

/***/ }),
/* 849 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

_Object$defineProperty(exports, "Duplicate", {
  enumerable: true,
  get: function get() {
    return _duplicate.Duplicate;
  }
});

_Object$defineProperty(exports, "Insert", {
  enumerable: true,
  get: function get() {
    return _insert.Insert;
  }
});

_Object$defineProperty(exports, "Move", {
  enumerable: true,
  get: function get() {
    return _move.Move;
  }
});

_Object$defineProperty(exports, "Remove", {
  enumerable: true,
  get: function get() {
    return _remove.Remove;
  }
});

var _duplicate = __webpack_require__(850);

var _insert = __webpack_require__(851);

var _move = __webpack_require__(852);

var _remove = __webpack_require__(853);

/***/ }),
/* 850 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = exports.Duplicate = void 0;

var _assign = _interopRequireDefault(__webpack_require__(138));

__webpack_require__(40);

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(3));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var _createSuper2 = _interopRequireDefault(__webpack_require__(5));

var _commandHistory = _interopRequireDefault(__webpack_require__(128));

var Duplicate = /*#__PURE__*/function (_CommandHistory) {
  (0, _inherits2.default)(Duplicate, _CommandHistory);

  var _super = (0, _createSuper2.default)(Duplicate);

  function Duplicate() {
    (0, _classCallCheck2.default)(this, Duplicate);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(Duplicate, [{
    key: "validateArgs",
    value: function validateArgs(args) {
      this.requireContainer(args);
      this.requireArgumentType('name', 'string', args);
      this.requireArgumentType('index', 'number', args);
    }
  }, {
    key: "getHistory",
    value: function getHistory(args) {
      var _args$containers = args.containers,
          containers = _args$containers === void 0 ? [args.container] : _args$containers;
      return {
        containers: containers,
        type: 'duplicate',
        subTitle: elementor.translate('Item')
      };
    }
  }, {
    key: "apply",
    value: function apply(args) {
      var index = args.index,
          name = args.name,
          _args$options = args.options,
          options = _args$options === void 0 ? {} : _args$options,
          _args$containers2 = args.containers,
          containers = _args$containers2 === void 0 ? [args.container] : _args$containers2,
          result = [];
      containers.forEach(function (container) {
        var settingsModel = container.settings,
            collection = settingsModel.get(name),
            model = collection.at(index).toJSON(); // Let the insert handle it, do not use the duplicated id.

        if (model._id) {
          delete model._id;
        }

        result.push($e.run('document/repeater/insert', {
          container: container,
          name: name,
          model: model,
          options: (0, _assign.default)({
            at: index + 1
          }, options)
        }));
      });

      if (1 === result.length) {
        return result[0];
      }

      return result;
    }
  }]);
  return Duplicate;
}(_commandHistory.default);

exports.Duplicate = Duplicate;
var _default = Duplicate;
exports.default = _default;

/***/ }),
/* 851 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = exports.Insert = void 0;

__webpack_require__(40);

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(3));

var _get2 = _interopRequireDefault(__webpack_require__(24));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(16));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var _createSuper2 = _interopRequireDefault(__webpack_require__(5));

var _commandHistory = _interopRequireDefault(__webpack_require__(128));

var Insert = /*#__PURE__*/function (_CommandHistory) {
  (0, _inherits2.default)(Insert, _CommandHistory);

  var _super = (0, _createSuper2.default)(Insert);

  function Insert() {
    (0, _classCallCheck2.default)(this, Insert);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(Insert, [{
    key: "initialize",
    value: function initialize(args) {
      (0, _get2.default)((0, _getPrototypeOf2.default)(Insert.prototype), "initialize", this).call(this, args);

      if (!args.model._id) {
        args.model._id = elementorCommon.helpers.getUniqueId();
      }
    }
  }, {
    key: "validateArgs",
    value: function validateArgs(args) {
      this.requireContainer(args);
      this.requireArgumentType('model', 'object', args);
      this.requireArgumentConstructor('name', String, args);
    }
  }, {
    key: "getHistory",
    value: function getHistory(args) {
      var model = args.model,
          name = args.name,
          _args$options = args.options,
          options = _args$options === void 0 ? {
        at: null
      } : _args$options,
          _args$containers = args.containers,
          containers = _args$containers === void 0 ? [args.container] : _args$containers;
      return {
        containers: containers,
        type: 'add',
        subTitle: elementor.translate('Item'),
        data: {
          model: model,
          name: name,
          index: options.at
        },
        restore: this.constructor.restore
      };
    }
  }, {
    key: "isDataChanged",
    value: function isDataChanged() {
      return true;
    }
  }, {
    key: "apply",
    value: function apply(args) {
      var model = args.model,
          name = args.name,
          _args$options2 = args.options,
          options = _args$options2 === void 0 ? {
        at: null
      } : _args$options2,
          _args$containers2 = args.containers,
          containers = _args$containers2 === void 0 ? [args.container] : _args$containers2,
          result = [];
      containers.forEach(function (container) {
        container = container.lookup();
        var collection = container.settings.get(name);
        options.at = null === options.at ? collection.length : options.at; // On `collection.push` the renderer needs a container, the container needs a settingsModel.

        var rowSettingsModel = collection._prepareModel(model);

        container.addRepeaterItem(name, rowSettingsModel, options.at);
        result.push(collection.push(rowSettingsModel, options));
        container.render();
      });

      if (1 === result.length) {
        return result[0];
      }

      return result;
    }
  }], [{
    key: "restore",
    value: function restore(historyItem, isRedo) {
      var containers = historyItem.get('containers'),
          data = historyItem.get('data');

      if (isRedo) {
        $e.run('document/repeater/insert', {
          containers: containers,
          model: data.model,
          name: data.name,
          options: {
            at: data.index
          }
        });
      } else {
        $e.run('document/repeater/remove', {
          containers: containers,
          name: data.name,
          index: data.index
        });
      }
    }
  }]);
  return Insert;
}(_commandHistory.default);

exports.Insert = Insert;
var _default = Insert;
exports.default = _default;

/***/ }),
/* 852 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = exports.Move = void 0;

__webpack_require__(40);

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(3));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var _createSuper2 = _interopRequireDefault(__webpack_require__(5));

var _commandHistory = _interopRequireDefault(__webpack_require__(128));

var Move = /*#__PURE__*/function (_CommandHistory) {
  (0, _inherits2.default)(Move, _CommandHistory);

  var _super = (0, _createSuper2.default)(Move);

  function Move() {
    (0, _classCallCheck2.default)(this, Move);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(Move, [{
    key: "validateArgs",
    value: function validateArgs(args) {
      this.requireContainer(args);
      this.requireArgumentType('name', 'string', args);
      this.requireArgumentType('sourceIndex', 'number', args);
      this.requireArgumentType('targetIndex', 'number', args);
    }
  }, {
    key: "getHistory",
    value: function getHistory(args) {
      var _args$containers = args.containers,
          containers = _args$containers === void 0 ? [args.container] : _args$containers;
      return {
        containers: containers,
        type: 'move',
        subTitle: elementor.translate('Item')
      };
    }
  }, {
    key: "apply",
    value: function apply(args) {
      var sourceIndex = args.sourceIndex,
          targetIndex = args.targetIndex,
          name = args.name,
          _args$containers2 = args.containers,
          containers = _args$containers2 === void 0 ? [args.container] : _args$containers2,
          result = [];
      containers.forEach(function (container) {
        var collection = container.settings.get(name),
            model = elementorCommon.helpers.cloneObject(collection.at(sourceIndex));
        $e.run('document/repeater/remove', {
          container: container,
          name: name,
          index: sourceIndex
        });
        result.push($e.run('document/repeater/insert', {
          container: container,
          name: name,
          model: model,
          options: {
            at: targetIndex
          }
        }));
      });

      if (1 === result.length) {
        return result[0];
      }

      return result;
    }
  }]);
  return Move;
}(_commandHistory.default);

exports.Move = Move;
var _default = Move;
exports.default = _default;

/***/ }),
/* 853 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = exports.Remove = void 0;

__webpack_require__(40);

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(3));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var _createSuper2 = _interopRequireDefault(__webpack_require__(5));

var _commandHistory = _interopRequireDefault(__webpack_require__(128));

var Remove = /*#__PURE__*/function (_CommandHistory) {
  (0, _inherits2.default)(Remove, _CommandHistory);

  var _super = (0, _createSuper2.default)(Remove);

  function Remove() {
    (0, _classCallCheck2.default)(this, Remove);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(Remove, [{
    key: "validateArgs",
    value: function validateArgs(args) {
      this.requireContainer(args);
      this.requireArgumentType('name', 'string', args);
      this.requireArgument('index', args); // sometimes null.
    }
  }, {
    key: "getHistory",
    value: function getHistory(args) {
      var _args$containers = args.containers,
          containers = _args$containers === void 0 ? [args.container] : _args$containers;
      return {
        containers: containers,
        type: 'remove',
        subTitle: elementor.translate('Item')
      };
    }
  }, {
    key: "isDataChanged",
    value: function isDataChanged() {
      return true;
    }
  }, {
    key: "apply",
    value: function apply(args) {
      var _this = this;

      var name = args.name,
          _args$containers2 = args.containers,
          containers = _args$containers2 === void 0 ? [args.container] : _args$containers2,
          index = null === args.index ? -1 : args.index,
          result = [];
      containers.forEach(function (container) {
        container = container.lookup();
        var collection = container.settings.get(name),
            model = collection.at(index);

        if (_this.isHistoryActive()) {
          $e.internal('document/history/log-sub-item', {
            container: container,
            data: {
              name: name,
              model: model,
              index: index
            },
            restore: _this.constructor.restore
          });
        } // Remove from container and add to result.


        result.push(container.repeaters[name].children.splice(index, 1));
        collection.remove(model);
        container.render();
      });

      if (1 === result.length) {
        return result[0];
      }

      return result;
    }
  }], [{
    key: "restore",
    value: function restore(historyItem, isRedo) {
      var data = historyItem.get('data'),
          container = historyItem.get('container');

      if (isRedo) {
        $e.run('document/repeater/remove', {
          container: container,
          name: data.name,
          index: data.index
        });
      } else {
        $e.run('document/repeater/insert', {
          container: container,
          model: data.model,
          name: data.name,
          options: {
            at: data.index
          }
        });
      }
    }
  }]);
  return Remove;
}(_commandHistory.default);

exports.Remove = Remove;
var _default = Remove;
exports.default = _default;

/***/ }),
/* 854 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(38);

var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(3));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(48));

var _get2 = _interopRequireDefault(__webpack_require__(24));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(16));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var _createSuper2 = _interopRequireDefault(__webpack_require__(5));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(28));

var _backwardsCompatibility = _interopRequireDefault(__webpack_require__(855));

var commands = _interopRequireWildcard(__webpack_require__(856));

var commandsInternal = _interopRequireWildcard(__webpack_require__(864));

var hooks = _interopRequireWildcard(__webpack_require__(867));

var Component = /*#__PURE__*/function (_BackwardsCompatibili) {
  (0, _inherits2.default)(Component, _BackwardsCompatibili);

  var _super = (0, _createSuper2.default)(Component);

  function Component() {
    var _this;

    (0, _classCallCheck2.default)(this, Component);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    (0, _defineProperty2.default)((0, _assertThisInitialized2.default)(_this), "footerSaver", void 0);
    return _this;
  }

  (0, _createClass2.default)(Component, [{
    key: "__construct",
    value: function __construct() {
      var _this2 = this;

      var args = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      (0, _get2.default)((0, _getPrototypeOf2.default)(Component.prototype), "__construct", this).call(this, args);
      /**
       * Auto save timer handlers.
       *
       * @type {Object}
       */

      this.autoSaveTimers = {};
      /**
       * Auto save interval.
       *
       * @type {number}
       */

      this.autoSaveInterval = elementor.config.autosave_interval * 1000;
      elementorCommon.elements.$window.on('beforeunload', function () {
        if (_this2.isEditorChanged()) {
          // Returns a message to confirm dialog.
          return elementor.translate('before_unload_alert');
        }
      });
    }
  }, {
    key: "getNamespace",
    value: function getNamespace() {
      return 'document/save';
    }
    /**
     * TODO: test
     * @param {Document} document
     */

  }, {
    key: "startAutoSave",
    value: function startAutoSave(document) {
      var _this3 = this;

      this.stopAutoSave(document);
      this.autoSaveTimers[document.id] = setTimeout(function () {
        $e.run('document/save/auto', {
          document: document
        });
        delete _this3.autoSaveTimers[document.id];
      }, this.autoSaveInterval);
    }
    /**
     * TODO: test
     * @param {Document} document
     */

  }, {
    key: "stopAutoSave",
    value: function stopAutoSave(document) {
      if (this.autoSaveTimers[document.id]) {
        clearTimeout(this.autoSaveTimers[document.id]);
        delete this.autoSaveTimers[document.id];
      }
    }
  }, {
    key: "defaultCommands",
    value: function defaultCommands() {
      return this.importCommands(commands);
    }
  }, {
    key: "defaultCommandsInternal",
    value: function defaultCommandsInternal() {
      return this.importCommands(commandsInternal);
    }
  }, {
    key: "defaultHooks",
    value: function defaultHooks() {
      return this.importHooks(hooks);
    }
  }, {
    key: "isEditorChanged",
    value: function isEditorChanged() {
      return true === elementor.channels.editor.request('status');
    }
  }]);
  return Component;
}(_backwardsCompatibility.default);

exports.default = Component;

/***/ }),
/* 855 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty2 = __webpack_require__(1);

_Object$defineProperty2(exports, "__esModule", {
  value: true
});

exports.default = void 0;

var _defineProperty = _interopRequireDefault(__webpack_require__(1));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(3));

var _get2 = _interopRequireDefault(__webpack_require__(24));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(16));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var _createSuper2 = _interopRequireDefault(__webpack_require__(5));

var _componentBase = _interopRequireDefault(__webpack_require__(86));

var BackwardsCompatibility = /*#__PURE__*/function (_ComponentBase) {
  (0, _inherits2.default)(BackwardsCompatibility, _ComponentBase);

  var _super = (0, _createSuper2.default)(BackwardsCompatibility);

  function BackwardsCompatibility() {
    (0, _classCallCheck2.default)(this, BackwardsCompatibility);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(BackwardsCompatibility, [{
    key: "__construct",
    value: function __construct() {
      var args = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      (0, _get2.default)((0, _getPrototypeOf2.default)(BackwardsCompatibility.prototype), "__construct", this).call(this, args);
      (0, _defineProperty.default)(this, 'autoSaveTimer', {
        get: function get() {
          elementorCommon.helpers.softDeprecated('elementor.saver.autoSaveTimer', '2.9.0', "$e.components.get( 'editor/documents' ).autoSaveTimers");
          return $e.components.get('editor/documents').autoSaveTimers;
        },
        set: function set(value) {
          elementorCommon.helpers.softDeprecated('elementor.saver.autoSaveTimer', '2.9.0', "$e.components.get( 'editor/documents' ).autoSaveTimers[ documentId ]");
          var documentId = elementor.documents.getCurrent();
          $e.components.get('editor/documents').autoSaveTimers[documentId] = value;
        }
      });
      var onOrig = this.on;

      this.on = function (eventName, callback, context) {
        elementorCommon.helpers.softDeprecated('elementor.saver.on', '2.9.0', '$e.hooks');
        onOrig(eventName, callback, context);
      };

      elementor.on('document:loaded', function () {
        if (elementor.channels.editor._events && elementor.channels.editor._events.saved) {
          elementorCommon.helpers.softDeprecated("elementor.channels.editor.on( 'saved', ... )", '2.9.0', '$e.hooks');
        }
      });
    }
  }, {
    key: "defaultSave",
    value: function defaultSave() {
      elementorCommon.helpers.softDeprecated('defaultSave', '2.9.0', "$e.run( 'document/save/default' )");
      return $e.run('document/save/default');
    }
  }, {
    key: "discard",
    value: function discard() {
      elementorCommon.helpers.softDeprecated('discard', '2.9.0', "$e.run( 'document/save/discard' )");
      return $e.run('document/save/discard');
    }
  }, {
    key: "doAutoSave",
    value: function doAutoSave() {
      elementorCommon.helpers.softDeprecated('doAutoSave', '2.9.0', "$e.run( 'document/save/auto' )");
      return $e.run('document/save/auto');
    }
  }, {
    key: "publish",
    value: function publish(options) {
      elementorCommon.helpers.softDeprecated('publish', '2.9.0', "$e.run( 'document/save/publish' )");
      return $e.run('document/save/auto', {
        options: options
      });
    }
  }, {
    key: "saveAutoSave",
    value: function saveAutoSave(options) {
      elementorCommon.helpers.softDeprecated('saveAutoSave', '2.9.0', "$e.run( 'document/save/auto', { force: true } )");
      options.force = true;
      return $e.run('document/save/auto', options);
    }
  }, {
    key: "saveDraft",
    value: function saveDraft() {
      elementorCommon.helpers.softDeprecated('saveDraft', '2.9.0', "$e.run( 'document/save/draft' )");
      return $e.run('document/save/draft');
    }
  }, {
    key: "savePending",
    value: function savePending() {
      elementorCommon.helpers.softDeprecated('savePending', '2.9.0', "$e.run( 'document/save/pending' )");
      return $e.run('document/save/pending');
    }
  }, {
    key: "update",
    value: function update(options) {
      elementorCommon.helpers.softDeprecated('update', '2.9.0', "$e.run( 'document/save/update' )");
      return $e.run('document/save/update', options);
    }
  }, {
    key: "startTimer",
    value: function startTimer() {
      elementorCommon.helpers.softDeprecated('startTimer', '2.9.0', "$e.components.get( 'document/save' ).startAutoSave");
      throw Error('Deprecated');
    }
  }, {
    key: "saveEditor",
    value: function saveEditor(options) {
      elementorCommon.helpers.softDeprecated('saveEditor', '2.9.0', "$e.internal( 'document/save/save' )");
      $e.internal('document/save/save', options);
    }
  }, {
    key: "setFlagEditorChange",
    value: function setFlagEditorChange(status) {
      elementorCommon.helpers.softDeprecated('setFlagEditorChange', '2.9.0', "$e.internal( 'document/save/set-is-modified' )");
      $e.internal('document/save/set-is-modified', {
        status: status
      });
    }
  }]);
  return BackwardsCompatibility;
}(_componentBase.default);

exports.default = BackwardsCompatibility;

/***/ }),
/* 856 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

_Object$defineProperty(exports, "Auto", {
  enumerable: true,
  get: function get() {
    return _auto.Auto;
  }
});

_Object$defineProperty(exports, "Default", {
  enumerable: true,
  get: function get() {
    return _default.Default;
  }
});

_Object$defineProperty(exports, "Discard", {
  enumerable: true,
  get: function get() {
    return _discard.Discard;
  }
});

_Object$defineProperty(exports, "Draft", {
  enumerable: true,
  get: function get() {
    return _draft.Draft;
  }
});

_Object$defineProperty(exports, "Pending", {
  enumerable: true,
  get: function get() {
    return _pending.Pending;
  }
});

_Object$defineProperty(exports, "Publish", {
  enumerable: true,
  get: function get() {
    return _publish.Publish;
  }
});

_Object$defineProperty(exports, "Update", {
  enumerable: true,
  get: function get() {
    return _update.Update;
  }
});

var _auto = __webpack_require__(857);

var _default = __webpack_require__(858);

var _discard = __webpack_require__(859);

var _draft = __webpack_require__(860);

var _pending = __webpack_require__(861);

var _publish = __webpack_require__(862);

var _update = __webpack_require__(863);

/***/ }),
/* 857 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = exports.Auto = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(3));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var _createSuper2 = _interopRequireDefault(__webpack_require__(5));

var _base = _interopRequireDefault(__webpack_require__(339));

var Auto = /*#__PURE__*/function (_Base) {
  (0, _inherits2.default)(Auto, _Base);

  var _super = (0, _createSuper2.default)(Auto);

  function Auto() {
    (0, _classCallCheck2.default)(this, Auto);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(Auto, [{
    key: "apply",
    value: function apply(args) {
      var _args$force = args.force,
          force = _args$force === void 0 ? false : _args$force,
          _args$document = args.document,
          document = _args$document === void 0 ? this.document : _args$document;

      if (!force && !document.container.isEditable()) {
        return jQuery.Deferred().reject('Document is not editable');
      }

      if (!document.editor.isChanged) {
        return jQuery.Deferred().resolve('Document is not changed');
      }

      args.status = 'autosave';
      args.document = document;
      return $e.internal('document/save/save', args);
    }
  }]);
  return Auto;
}(_base.default);

exports.Auto = Auto;
var _default = Auto;
exports.default = _default;

/***/ }),
/* 858 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = exports.Default = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(3));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var _createSuper2 = _interopRequireDefault(__webpack_require__(5));

var _base = _interopRequireDefault(__webpack_require__(339));

var Default = /*#__PURE__*/function (_Base) {
  (0, _inherits2.default)(Default, _Base);

  var _super = (0, _createSuper2.default)(Default);

  function Default() {
    (0, _classCallCheck2.default)(this, Default);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(Default, [{
    key: "apply",
    value: function apply() {
      var document = this.document,
          postStatus = document.container.settings.get('post_status');
      var deferred;

      switch (postStatus) {
        case 'publish':
        case 'future':
        case 'private':
          deferred = $e.run('document/save/update', {
            document: document
          });
          break;

        case 'draft':
          if (document.config.user.can_publish) {
            deferred = $e.run('document/save/publish', {
              document: document
            });
          } else {
            deferred = $e.run('document/save/pending', {
              document: document
            });
          }

          break;

        case 'pending': // User cannot change post status

        case undefined:
          // TODO: as a contributor it's undefined instead of 'pending'.
          if (document.config.user.can_publish) {
            deferred = $e.run('document/save/publish', {
              document: document
            });
          } else {
            deferred = $e.run('document/save/update', {
              document: document
            });
          }

      }

      return deferred;
    }
  }]);
  return Default;
}(_base.default);

exports.Default = Default;
var _default = Default;
exports.default = _default;

/***/ }),
/* 859 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = exports.Discard = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(3));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var _createSuper2 = _interopRequireDefault(__webpack_require__(5));

var _base = _interopRequireDefault(__webpack_require__(339));

var Discard = /*#__PURE__*/function (_Base) {
  (0, _inherits2.default)(Discard, _Base);

  var _super = (0, _createSuper2.default)(Discard);

  function Discard() {
    (0, _classCallCheck2.default)(this, Discard);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(Discard, [{
    key: "apply",
    value: function apply(args) {
      var _args$document = args.document,
          document = _args$document === void 0 ? elementor.documents.getCurrent() : _args$document; // Start server request before undo, because the undo can take time.

      var deferred = elementorCommon.ajax.addRequest('discard_changes');
      $e.run('document/history/undo-all', {
        document: document
      }); // Discard autosave revision if exist.

      return deferred;
    }
  }]);
  return Discard;
}(_base.default);

exports.Discard = Discard;
var _default = Discard;
exports.default = _default;

/***/ }),
/* 860 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = exports.Draft = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(3));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var _createSuper2 = _interopRequireDefault(__webpack_require__(5));

var _base = _interopRequireDefault(__webpack_require__(339));

var Draft = /*#__PURE__*/function (_Base) {
  (0, _inherits2.default)(Draft, _Base);

  var _super = (0, _createSuper2.default)(Draft);

  function Draft() {
    (0, _classCallCheck2.default)(this, Draft);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(Draft, [{
    key: "apply",
    value: function apply() {
      var document = this.document,
          postStatus = document.container.settings.get('post_status'); // If no changes - don't save but allow un-publish.

      if (!document.editor.isChanged && 'draft' !== postStatus) {
        return jQuery.Deferred().reject('Document is not editable');
      }

      var deferred;

      switch (postStatus) {
        case 'publish':
        case 'private':
          deferred = $e.run('document/save/auto', {
            document: document
          });
          break;

        default:
          // Update and create a revision
          deferred = $e.run('document/save/update', {
            document: document
          });
      }

      return deferred;
    }
  }]);
  return Draft;
}(_base.default);

exports.Draft = Draft;
var _default = Draft;
exports.default = _default;

/***/ }),
/* 861 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.Pending = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(3));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var _createSuper2 = _interopRequireDefault(__webpack_require__(5));

var _base = _interopRequireDefault(__webpack_require__(339));

var Pending = /*#__PURE__*/function (_Base) {
  (0, _inherits2.default)(Pending, _Base);

  var _super = (0, _createSuper2.default)(Pending);

  function Pending() {
    (0, _classCallCheck2.default)(this, Pending);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(Pending, [{
    key: "apply",
    value: function apply(args) {
      var _args$status = args.status,
          status = _args$status === void 0 ? 'pending' : _args$status,
          _args$document = args.document,
          document = _args$document === void 0 ? this.document : _args$document;
      return $e.internal('document/save/save', {
        status: status,
        document: document
      });
    }
  }]);
  return Pending;
}(_base.default);

exports.Pending = Pending;

/***/ }),
/* 862 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.Publish = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(3));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var _createSuper2 = _interopRequireDefault(__webpack_require__(5));

var _base = _interopRequireDefault(__webpack_require__(339));

var Publish = /*#__PURE__*/function (_Base) {
  (0, _inherits2.default)(Publish, _Base);

  var _super = (0, _createSuper2.default)(Publish);

  function Publish() {
    (0, _classCallCheck2.default)(this, Publish);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(Publish, [{
    key: "apply",
    value: function apply(args) {
      var _args$status = args.status,
          status = _args$status === void 0 ? 'publish' : _args$status,
          _args$document = args.document,
          document = _args$document === void 0 ? this.document : _args$document;
      return $e.internal('document/save/save', {
        status: status,
        document: document
      });
    }
  }]);
  return Publish;
}(_base.default);

exports.Publish = Publish;

/***/ }),
/* 863 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.Update = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(3));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var _createSuper2 = _interopRequireDefault(__webpack_require__(5));

var _base = _interopRequireDefault(__webpack_require__(339));

var Update = /*#__PURE__*/function (_Base) {
  (0, _inherits2.default)(Update, _Base);

  var _super = (0, _createSuper2.default)(Update);

  function Update() {
    (0, _classCallCheck2.default)(this, Update);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(Update, [{
    key: "apply",
    value: function apply(args) {
      var _args$document = args.document,
          document = _args$document === void 0 ? this.document : _args$document,
          _args$status = args.status,
          status = _args$status === void 0 ? document.container.settings.get('post_status') : _args$status;
      return $e.internal('document/save/save', {
        status: status,
        document: document
      });
    }
  }]);
  return Update;
}(_base.default);

exports.Update = Update;

/***/ }),
/* 864 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

_Object$defineProperty(exports, "Save", {
  enumerable: true,
  get: function get() {
    return _save.Save;
  }
});

_Object$defineProperty(exports, "SetIsModified", {
  enumerable: true,
  get: function get() {
    return _setIsModified.SetIsModified;
  }
});

var _save = __webpack_require__(865);

var _setIsModified = __webpack_require__(866);

/***/ }),
/* 865 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = exports.Save = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(3));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var _createSuper2 = _interopRequireDefault(__webpack_require__(5));

var _commandInternalBase = _interopRequireDefault(__webpack_require__(203));

var Save = /*#__PURE__*/function (_CommandInternalBase) {
  (0, _inherits2.default)(Save, _CommandInternalBase);

  var _super = (0, _createSuper2.default)(Save);

  function Save() {
    (0, _classCallCheck2.default)(this, Save);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(Save, [{
    key: "apply",
    value: function apply(args) {
      var _this = this;

      var _args$status = args.status,
          status = _args$status === void 0 ? 'draft' : _args$status,
          _args$force = args.force,
          force = _args$force === void 0 ? false : _args$force,
          _args$onSuccess = args.onSuccess,
          onSuccess = _args$onSuccess === void 0 ? null : _args$onSuccess,
          _args$document = args.document,
          document = _args$document === void 0 ? elementor.documents.getCurrent() : _args$document;

      if (!force && document.editor.isSaving) {
        return jQuery.Deferred().reject('Document already in save progress');
      }

      var container = document.container,
          settings = container.settings.toJSON({
        remove: ['default']
      }),
          oldStatus = container.settings.get('post_status'); // TODO: Remove - Backwards compatibility.

      elementor.saver.trigger('before:save', args).trigger('before:save:' + status, args);
      document.editor.isSaving = true;
      document.editor.isChangedDuringSave = false;
      settings.post_status = status;
      var elements = [];

      if (elementor.config.document.panel.has_elements) {
        elements = container.model.get('elements').toJSON({
          remove: ['default', 'editSettings', 'defaultEditSettings']
        });
      }

      var successArgs = {
        status: status,
        oldStatus: oldStatus,
        elements: elements,
        document: document,
        currentHistoryId: document.history.currentItem.get('id')
      };
      var deferred = elementorCommon.ajax.addRequest('save_builder', {
        data: {
          status: status,
          elements: elements,
          settings: settings
        },
        error: function error(data) {
          return _this.onSaveError(data, status, document);
        }
      }).then(function (data) {
        return _this.onSaveSuccess(data, successArgs, onSuccess);
      }); // TODO: Remove - Backwards compatibility

      elementor.saver.trigger('save', args);
      return deferred;
    }
  }, {
    key: "onSaveSuccess",
    value: function onSaveSuccess(data, args) {
      var callback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      var status = args.status,
          oldStatus = args.oldStatus,
          elements = args.elements,
          document = args.document,
          currentHistoryId = args.currentHistoryId;
      this.onAfterAjax(document);
      document.editor.lastSaveHistoryId = currentHistoryId; // Remove document cache.

      elementor.documents.invalidateCache(document.id);
      var statusChanged = status !== oldStatus,
          result = {
        data: data,
        statusChanged: statusChanged
      }; // Document is switched during the save, do nothing.

      if (document !== elementor.documents.getCurrent()) {
        return result;
      }

      if (!document.editor.isChangedDuringSave) {
        document.editor.isSaved = true;
      } // TODO: Move to hook.


      if ('autosave' !== status) {
        if (statusChanged) {
          $e.run('document/elements/settings', {
            container: elementor.settings.page.getEditedView().getContainer(),
            settings: {
              post_status: status
            },
            options: {
              external: true
            }
          });
        } // Notice: Must be after update page.model.post_status to the new status.


        if (!document.editor.isChangedDuringSave) {
          $e.internal('document/save/set-is-modified', {
            status: false
          });
        }
      }

      if (data.config) {
        // TODO: Move to es6.
        jQuery.extend(true, document.config, data.config.document);
      }

      if (document.config.elements) {
        document.config.elements = elements;
      } // TODO: Remove - Backwards compatibility


      elementor.channels.editor.trigger('saved', data); // TODO: Remove - Backwards compatibility

      elementor.saver.trigger('after:save', data).trigger('after:save:' + status, data); // TODO: Remove - Backwards compatibility

      if (statusChanged) {
        elementor.saver.trigger('page:status:change', status, oldStatus);
      }

      if (_.isFunction(callback)) {
        callback.call(this, result);
      }

      return result;
    }
  }, {
    key: "onSaveError",
    value: function onSaveError(data, status, document) {
      this.onAfterAjax(document); // TODO: Remove - Backwards compatibility

      elementor.saver.trigger('after:saveError', data).trigger('after:saveError:' + status, data);
      var message;

      if (_.isString(data)) {
        message = data;
      } else if (data.statusText) {
        message = elementor.createAjaxErrorMessage(data);

        if (0 === data.readyState) {
          message += ' ' + elementor.translate('saving_disabled');
        }
      } else if (data[0] && data[0].code) {
        message = elementor.translate('server_error') + ' ' + data[0].code;
      }

      elementor.notifications.showToast({
        message: message
      });
    }
  }, {
    key: "onAfterAjax",
    value: function onAfterAjax(document) {
      document.editor.isSaving = false;
    }
  }]);
  return Save;
}(_commandInternalBase.default);

exports.Save = Save;
var _default = Save;
exports.default = _default;

/***/ }),
/* 866 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = exports.SetIsModified = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(3));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var _createSuper2 = _interopRequireDefault(__webpack_require__(5));

var _commandInternalBase = _interopRequireDefault(__webpack_require__(203));

var SetIsModified = /*#__PURE__*/function (_CommandInternalBase) {
  (0, _inherits2.default)(SetIsModified, _CommandInternalBase);

  var _super = (0, _createSuper2.default)(SetIsModified);

  function SetIsModified() {
    (0, _classCallCheck2.default)(this, SetIsModified);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(SetIsModified, [{
    key: "validateArgs",
    value: function validateArgs(args) {
      this.requireArgumentType('status', 'boolean', args);
    }
  }, {
    key: "apply",
    value: function apply(args) {
      var status = args.status,
          _args$document = args.document,
          document = _args$document === void 0 ? elementor.documents.getCurrent() : _args$document; // Save document for hooks.

      args.document = document;
      document.editor.isChanged = status;

      if (status && document.editor.isSaving) {
        document.editor.isChangedDuringSave = true;
      }

      if (status) {
        document.editor.isSaved = false;
      } // TODO: BC.


      elementor.channels.editor.reply('status', status).trigger('status:change', status);

      if (document.editor.isChanged) {
        this.component.startAutoSave(document);
      }
    }
  }]);
  return SetIsModified;
}(_commandInternalBase.default);

exports.SetIsModified = SetIsModified;
var _default = SetIsModified;
exports.default = _default;

/***/ }),
/* 867 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$keys = __webpack_require__(25);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

var _ui = __webpack_require__(868);

_Object$keys(_ui).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;

  _Object$defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _ui[key];
    }
  });
});

/***/ }),
/* 868 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$keys = __webpack_require__(25);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

var _save = __webpack_require__(869);

_Object$keys(_save).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;

  _Object$defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _save[key];
    }
  });
});

var _setIsModified = __webpack_require__(873);

_Object$keys(_setIsModified).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;

  _Object$defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _setIsModified[key];
    }
  });
});

var _settings = __webpack_require__(875);

_Object$keys(_settings).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;

  _Object$defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _settings[key];
    }
  });
});

/***/ }),
/* 869 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

_Object$defineProperty(exports, "FooterSaverAfterSave", {
  enumerable: true,
  get: function get() {
    return _after.FooterSaverAfterSave;
  }
});

_Object$defineProperty(exports, "FooterSaverBeforeSave", {
  enumerable: true,
  get: function get() {
    return _before.FooterSaverBeforeSave;
  }
});

_Object$defineProperty(exports, "FooterSaverCatchSave", {
  enumerable: true,
  get: function get() {
    return _catch.FooterSaverCatchSave;
  }
});

var _after = __webpack_require__(870);

var _before = __webpack_require__(871);

var _catch = __webpack_require__(872);

/***/ }),
/* 870 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = exports.FooterSaverAfterSave = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(3));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var _createSuper2 = _interopRequireDefault(__webpack_require__(5));

var _after = _interopRequireDefault(__webpack_require__(278));

var FooterSaverAfterSave = /*#__PURE__*/function (_HookUIAfter) {
  (0, _inherits2.default)(FooterSaverAfterSave, _HookUIAfter);

  var _super = (0, _createSuper2.default)(FooterSaverAfterSave);

  function FooterSaverAfterSave() {
    (0, _classCallCheck2.default)(this, FooterSaverAfterSave);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(FooterSaverAfterSave, [{
    key: "getCommand",
    value: function getCommand() {
      return 'document/save/save';
    }
  }, {
    key: "getId",
    value: function getId() {
      return 'footer-saver-after-save';
    }
  }, {
    key: "apply",
    value: function apply(args, result) {
      var status = args.status,
          data = result.data,
          _$e$components$get = $e.components.get('document/save'),
          footerSaver = _$e$components$get.footerSaver;

      NProgress.done();
      footerSaver.ui.buttonPublish.removeClass('elementor-button-state');
      footerSaver.ui.lastEditedWrapper.removeClass('elementor-state-active');
      footerSaver.refreshWpPreview();
      footerSaver.setLastEdited(data.config.document.last_edited);

      if (result.statusChanged && 'publish' === status && elementor.config.document.urls.have_a_look) {
        this.onPageStatusChange();
      }
    }
  }, {
    key: "onPageStatusChange",
    value: function onPageStatusChange() {
      var buttons = [];
      buttons.push({
        name: 'view_page',
        text: elementor.translate('have_a_look'),
        callback: function callback() {
          open(elementor.config.document.urls.have_a_look);
        }
      });
      elementor.notifications.showToast({
        message: elementor.config.document.panel.messages.publish_notification,
        buttons: buttons
      });
    }
  }]);
  return FooterSaverAfterSave;
}(_after.default);

exports.FooterSaverAfterSave = FooterSaverAfterSave;
var _default = FooterSaverAfterSave;
exports.default = _default;

/***/ }),
/* 871 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = exports.FooterSaverBeforeSave = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(3));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var _createSuper2 = _interopRequireDefault(__webpack_require__(5));

var _before = _interopRequireDefault(__webpack_require__(638));

var FooterSaverBeforeSave = /*#__PURE__*/function (_HookUIBefore) {
  (0, _inherits2.default)(FooterSaverBeforeSave, _HookUIBefore);

  var _super = (0, _createSuper2.default)(FooterSaverBeforeSave);

  function FooterSaverBeforeSave() {
    (0, _classCallCheck2.default)(this, FooterSaverBeforeSave);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(FooterSaverBeforeSave, [{
    key: "getCommand",
    value: function getCommand() {
      return 'document/save/save';
    }
  }, {
    key: "getId",
    value: function getId() {
      return 'footer-saver-before-save';
    }
  }, {
    key: "apply",
    value: function apply(args) {
      var status = args.status,
          _$e$components$get = $e.components.get('document/save'),
          footerSaver = _$e$components$get.footerSaver;

      NProgress.start();

      if ('autosave' === status) {
        footerSaver.ui.lastEditedWrapper.addClass('elementor-state-active');
      } else {
        footerSaver.ui.buttonPublish.addClass('elementor-button-state');
      }
    }
  }]);
  return FooterSaverBeforeSave;
}(_before.default);

exports.FooterSaverBeforeSave = FooterSaverBeforeSave;
var _default = FooterSaverBeforeSave;
exports.default = _default;

/***/ }),
/* 872 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = exports.FooterSaverCatchSave = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(3));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var _createSuper2 = _interopRequireDefault(__webpack_require__(5));

var _catch = _interopRequireDefault(__webpack_require__(639));

var FooterSaverCatchSave = /*#__PURE__*/function (_HookUICatch) {
  (0, _inherits2.default)(FooterSaverCatchSave, _HookUICatch);

  var _super = (0, _createSuper2.default)(FooterSaverCatchSave);

  function FooterSaverCatchSave() {
    (0, _classCallCheck2.default)(this, FooterSaverCatchSave);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(FooterSaverCatchSave, [{
    key: "getCommand",
    value: function getCommand() {
      return 'document/save/save';
    }
  }, {
    key: "getId",
    value: function getId() {
      return 'footer-saver-catch-save';
    }
  }, {
    key: "apply",
    value: function apply() {
      NProgress.done();
      $e.components.get('document/save').footerSaver.ui.buttonPublish.removeClass('elementor-button-state');
    }
  }]);
  return FooterSaverCatchSave;
}(_catch.default);

exports.FooterSaverCatchSave = FooterSaverCatchSave;
var _default = FooterSaverCatchSave;
exports.default = _default;

/***/ }),
/* 873 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

_Object$defineProperty(exports, "FooterSaverActiveSaveButtons", {
  enumerable: true,
  get: function get() {
    return _after.FooterSaverActiveSaveButtons;
  }
});

var _after = __webpack_require__(874);

/***/ }),
/* 874 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = exports.FooterSaverActiveSaveButtons = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(3));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var _createSuper2 = _interopRequireDefault(__webpack_require__(5));

var _after = _interopRequireDefault(__webpack_require__(278));

var FooterSaverActiveSaveButtons = /*#__PURE__*/function (_HookUIAfter) {
  (0, _inherits2.default)(FooterSaverActiveSaveButtons, _HookUIAfter);

  var _super = (0, _createSuper2.default)(FooterSaverActiveSaveButtons);

  function FooterSaverActiveSaveButtons() {
    (0, _classCallCheck2.default)(this, FooterSaverActiveSaveButtons);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(FooterSaverActiveSaveButtons, [{
    key: "getCommand",
    value: function getCommand() {
      return 'document/save/set-is-modified';
    }
  }, {
    key: "getId",
    value: function getId() {
      return 'footer-saver-activate-save-buttons';
    }
  }, {
    key: "apply",
    value: function apply(args) {
      var status = args.status,
          document = args.document;
      $e.components.get('document/save').footerSaver.activateSaveButtons(document, status);
    }
  }]);
  return FooterSaverActiveSaveButtons;
}(_after.default);

exports.FooterSaverActiveSaveButtons = FooterSaverActiveSaveButtons;
var _default = FooterSaverActiveSaveButtons;
exports.default = _default;

/***/ }),
/* 875 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = exports.FooterSeverRefreshMenu = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(3));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var _createSuper2 = _interopRequireDefault(__webpack_require__(5));

var _after = _interopRequireDefault(__webpack_require__(278));

var FooterSeverRefreshMenu = /*#__PURE__*/function (_HookUIAfter) {
  (0, _inherits2.default)(FooterSeverRefreshMenu, _HookUIAfter);

  var _super = (0, _createSuper2.default)(FooterSeverRefreshMenu);

  function FooterSeverRefreshMenu() {
    (0, _classCallCheck2.default)(this, FooterSeverRefreshMenu);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(FooterSeverRefreshMenu, [{
    key: "getCommand",
    value: function getCommand() {
      return 'document/elements/settings';
    }
  }, {
    key: "getId",
    value: function getId() {
      return 'footer-saver-refresh-menu';
    }
  }, {
    key: "getContainerType",
    value: function getContainerType() {
      return 'document';
    }
  }, {
    key: "getConditions",
    value: function getConditions(args) {
      return args.settings && 'undefined' !== typeof args.settings.post_status;
    }
  }, {
    key: "apply",
    value: function apply(args) {
      var _$e$components$get = $e.components.get('document/save'),
          footerSaver = _$e$components$get.footerSaver;

      footerSaver.setMenuItems(args.container.document);
      footerSaver.refreshWpPreview();
    }
  }]);
  return FooterSeverRefreshMenu;
}(_after.default);

exports.FooterSeverRefreshMenu = FooterSeverRefreshMenu;
var _default = FooterSeverRefreshMenu;
exports.default = _default;

/***/ }),
/* 876 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(38);

var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(3));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var _createSuper2 = _interopRequireDefault(__webpack_require__(5));

var _componentBase = _interopRequireDefault(__webpack_require__(86));

var commands = _interopRequireWildcard(__webpack_require__(877));

var Component = /*#__PURE__*/function (_ComponentBase) {
  (0, _inherits2.default)(Component, _ComponentBase);

  var _super = (0, _createSuper2.default)(Component);

  function Component() {
    (0, _classCallCheck2.default)(this, Component);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(Component, [{
    key: "getNamespace",
    value: function getNamespace() {
      return 'document/ui';
    }
  }, {
    key: "defaultCommands",
    value: function defaultCommands() {
      return this.importCommands(commands);
    }
  }, {
    key: "defaultShortcuts",
    value: function defaultShortcuts() {
      return {
        copy: {
          keys: 'ctrl+c',
          exclude: ['input']
        },
        delete: {
          keys: 'del',
          exclude: ['input']
        },
        duplicate: {
          keys: 'ctrl+d'
        },
        paste: {
          keys: 'ctrl+v',
          exclude: ['input']
        },
        'paste-style': {
          keys: 'ctrl+shift+v',
          exclude: ['input']
        }
      };
    }
  }]);
  return Component;
}(_componentBase.default);

exports.default = Component;

/***/ }),
/* 877 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

_Object$defineProperty(exports, "Copy", {
  enumerable: true,
  get: function get() {
    return _copy.Copy;
  }
});

_Object$defineProperty(exports, "Delete", {
  enumerable: true,
  get: function get() {
    return _delete.Delete;
  }
});

_Object$defineProperty(exports, "Duplicate", {
  enumerable: true,
  get: function get() {
    return _duplicate.Duplicate;
  }
});

_Object$defineProperty(exports, "Paste", {
  enumerable: true,
  get: function get() {
    return _paste.Paste;
  }
});

_Object$defineProperty(exports, "PasteStyle", {
  enumerable: true,
  get: function get() {
    return _pasteStyle.PasteStyle;
  }
});

var _copy = __webpack_require__(878);

var _delete = __webpack_require__(879);

var _duplicate = __webpack_require__(880);

var _paste = __webpack_require__(881);

var _pasteStyle = __webpack_require__(882);

/***/ }),
/* 878 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = exports.Copy = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(3));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var _createSuper2 = _interopRequireDefault(__webpack_require__(5));

var _commandBase = _interopRequireDefault(__webpack_require__(23));

var Copy = /*#__PURE__*/function (_CommandBase) {
  (0, _inherits2.default)(Copy, _CommandBase);

  var _super = (0, _createSuper2.default)(Copy);

  function Copy() {
    (0, _classCallCheck2.default)(this, Copy);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(Copy, [{
    key: "apply",
    value: function apply() {
      var selectedElement = elementor.getCurrentElement();

      if (selectedElement) {
        return $e.run('document/elements/copy', {
          container: selectedElement.getContainer()
        });
      }

      return false;
    }
  }]);
  return Copy;
}(_commandBase.default);

exports.Copy = Copy;
var _default = Copy;
exports.default = _default;

/***/ }),
/* 879 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = exports.Delete = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(3));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var _createSuper2 = _interopRequireDefault(__webpack_require__(5));

var _commandBase = _interopRequireDefault(__webpack_require__(23));

var Delete = /*#__PURE__*/function (_CommandBase) {
  (0, _inherits2.default)(Delete, _CommandBase);

  var _super = (0, _createSuper2.default)(Delete);

  function Delete() {
    (0, _classCallCheck2.default)(this, Delete);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(Delete, [{
    key: "apply",
    value: function apply() {
      var selectedElement = elementor.getCurrentElement();

      if (selectedElement) {
        return $e.run('document/elements/delete', {
          container: selectedElement.getContainer()
        });
      }

      return false;
    }
  }]);
  return Delete;
}(_commandBase.default);

exports.Delete = Delete;
var _default = Delete;
exports.default = _default;

/***/ }),
/* 880 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = exports.Duplicate = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(3));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var _createSuper2 = _interopRequireDefault(__webpack_require__(5));

var _commandBase = _interopRequireDefault(__webpack_require__(23));

var Duplicate = /*#__PURE__*/function (_CommandBase) {
  (0, _inherits2.default)(Duplicate, _CommandBase);

  var _super = (0, _createSuper2.default)(Duplicate);

  function Duplicate() {
    (0, _classCallCheck2.default)(this, Duplicate);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(Duplicate, [{
    key: "apply",
    value: function apply() {
      var selectedElement = elementor.getCurrentElement();

      if (selectedElement) {
        return $e.run('document/elements/duplicate', {
          container: selectedElement.getContainer()
        });
      }

      return false;
    }
  }]);
  return Duplicate;
}(_commandBase.default);

exports.Duplicate = Duplicate;
var _default = Duplicate;
exports.default = _default;

/***/ }),
/* 881 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = exports.Paste = void 0;

var _values = _interopRequireDefault(__webpack_require__(56));

__webpack_require__(302);

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(3));

var _get2 = _interopRequireDefault(__webpack_require__(24));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(16));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var _createSuper2 = _interopRequireDefault(__webpack_require__(5));

var _commandBase = _interopRequireDefault(__webpack_require__(23));

var _helper = _interopRequireDefault(__webpack_require__(215));

var Paste = /*#__PURE__*/function (_CommandBase) {
  (0, _inherits2.default)(Paste, _CommandBase);

  var _super = (0, _createSuper2.default)(Paste);

  function Paste() {
    (0, _classCallCheck2.default)(this, Paste);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(Paste, [{
    key: "initialize",
    value: function initialize(args) {
      var _args$containers = args.containers,
          containers = _args$containers === void 0 ? [args.container] : _args$containers;
      (0, _get2.default)((0, _getPrototypeOf2.default)(Paste.prototype), "initialize", this).call(this, args);
      this.storage = elementorCommon.storage.get('clipboard');
      this.storage = this.storage.map(function (model) {
        return new Backbone.Model(model);
      });

      if (!containers[0]) {
        this.target = elementor.getCurrentElement();
        this.target = this.target ? [this.target.getContainer()] : null;
      } else {
        this.target = containers;
      }
    }
  }, {
    key: "apply",
    value: function apply(args) {
      var _this = this;

      if (!this.target) {
        return false;
      }

      var result = [];
      this.target.forEach(function (
      /* Container */
      container) {
        var _args$options = args.options,
            options = _args$options === void 0 ? {} : _args$options,
            pasteOptions = _helper.default.getPasteOptions(_this.storage[0], container);

        if (!pasteOptions.isValidChild) {
          if (pasteOptions.isSameElement) {
            options.at = container.parent.model.get('elements').findIndex(container.model) + 1; // For same element always paste on his parent.

            container = container.parent;
          } else if (pasteOptions.isValidGrandChild) {
            options.rebuild = true;
          }
        }

        if ((0, _values.default)(pasteOptions).some(function (opt) {
          return !!opt;
        })) {
          var commandArgs = {
            container: container
          };

          if (undefined !== options.rebuild) {
            commandArgs.rebuild = options.rebuild;
          }

          if (undefined !== options.at) {
            commandArgs.at = options.at;
          }

          result.push($e.run('document/elements/paste', commandArgs));
        }
      });

      if (0 === result.length) {
        return false;
      } else if (1 === result.length) {
        return result[0];
      }

      return result;
    }
  }]);
  return Paste;
}(_commandBase.default);

exports.Paste = Paste;
var _default = Paste;
exports.default = _default;

/***/ }),
/* 882 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = exports.PasteStyle = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(3));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var _createSuper2 = _interopRequireDefault(__webpack_require__(5));

var _commandBase = _interopRequireDefault(__webpack_require__(23));

var PasteStyle = /*#__PURE__*/function (_CommandBase) {
  (0, _inherits2.default)(PasteStyle, _CommandBase);

  var _super = (0, _createSuper2.default)(PasteStyle);

  function PasteStyle() {
    (0, _classCallCheck2.default)(this, PasteStyle);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(PasteStyle, [{
    key: "apply",
    value: function apply() {
      var selectedElement = elementor.getCurrentElement();

      if (selectedElement) {
        return $e.run('document/elements/paste-style', {
          container: selectedElement.getContainer()
        });
      }

      return false;
    }
  }]);
  return PasteStyle;
}(_commandBase.default);

exports.PasteStyle = PasteStyle;
var _default = PasteStyle;
exports.default = _default;

/***/ }),
/* 883 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$keys = __webpack_require__(25);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

var _data = __webpack_require__(884);

_Object$keys(_data).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;

  _Object$defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _data[key];
    }
  });
});

var _ui = __webpack_require__(902);

_Object$keys(_ui).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;

  _Object$defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _ui[key];
    }
  });
});

/***/ }),
/* 884 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$keys = __webpack_require__(25);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

var _create = __webpack_require__(885);

_Object$keys(_create).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;

  _Object$defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _create[key];
    }
  });
});

var _delete = __webpack_require__(891);

_Object$keys(_delete).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;

  _Object$defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _delete[key];
    }
  });
});

var _move = __webpack_require__(893);

_Object$keys(_move).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;

  _Object$defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _move[key];
    }
  });
});

var _paste = __webpack_require__(895);

_Object$keys(_paste).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;

  _Object$defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _paste[key];
    }
  });
});

var _settings = __webpack_require__(897);

_Object$keys(_settings).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;

  _Object$defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _settings[key];
    }
  });
});

/***/ }),
/* 885 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

_Object$defineProperty(exports, "InnerSectionColumns", {
  enumerable: true,
  get: function get() {
    return _innerSectionColumns.InnerSectionColumns;
  }
});

_Object$defineProperty(exports, "IsValidChild", {
  enumerable: true,
  get: function get() {
    return _isValidChild.IsValidChild;
  }
});

_Object$defineProperty(exports, "SectionColumns", {
  enumerable: true,
  get: function get() {
    return _sectionColumns.SectionColumns;
  }
});

_Object$defineProperty(exports, "SectionColumnsLimit", {
  enumerable: true,
  get: function get() {
    return _sectionColumnsLimit.SectionColumnsLimit;
  }
});

_Object$defineProperty(exports, "SectionColumnsResetLayout", {
  enumerable: true,
  get: function get() {
    return _sectionColumnsResetLayout.SectionColumnsResetLayout;
  }
});

var _innerSectionColumns = __webpack_require__(886);

var _isValidChild = __webpack_require__(887);

var _sectionColumns = __webpack_require__(888);

var _sectionColumnsLimit = __webpack_require__(889);

var _sectionColumnsResetLayout = __webpack_require__(890);

/***/ }),
/* 886 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = exports.InnerSectionColumns = void 0;

var _isArray = _interopRequireDefault(__webpack_require__(85));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(3));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var _createSuper2 = _interopRequireDefault(__webpack_require__(5));

var _after = _interopRequireDefault(__webpack_require__(224));

var _helper = _interopRequireDefault(__webpack_require__(702));

var _section = __webpack_require__(256);

var InnerSectionColumns = /*#__PURE__*/function (_After) {
  (0, _inherits2.default)(InnerSectionColumns, _After);

  var _super = (0, _createSuper2.default)(InnerSectionColumns);

  function InnerSectionColumns() {
    (0, _classCallCheck2.default)(this, InnerSectionColumns);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(InnerSectionColumns, [{
    key: "getCommand",
    value: function getCommand() {
      return 'document/elements/create';
    }
  }, {
    key: "getId",
    value: function getId() {
      return 'create-inner-section-columns';
    }
  }, {
    key: "getContainerType",
    value: function getContainerType() {
      return 'column';
    }
  }, {
    key: "getConditions",
    value: function getConditions(args) {
      return args.model.isInner && !args.model.elements;
    }
    /**
     * @inheritDoc
     *
     * @param {{}} args
     * @param {Container||Container[]} containers
     *
     * @returns {boolean}
     */

  }, {
    key: "apply",
    value: function apply(args, containers) {
      var _args$structure = args.structure,
          structure = _args$structure === void 0 ? '20' : _args$structure,
          _args$options = args.options,
          options = _args$options === void 0 ? {} : _args$options;

      if (!(0, _isArray.default)(containers)) {
        containers = [containers];
      }

      _helper.default.createSectionColumns(containers, _section.DEFAULT_INNER_SECTION_COLUMNS, options, structure);
    }
  }]);
  return InnerSectionColumns;
}(_after.default);

exports.InnerSectionColumns = InnerSectionColumns;
var _default = InnerSectionColumns;
exports.default = _default;

/***/ }),
/* 887 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = exports.IsValidChild = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(3));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var _createSuper2 = _interopRequireDefault(__webpack_require__(5));

var _dependency = _interopRequireDefault(__webpack_require__(343));

var _helper = _interopRequireDefault(__webpack_require__(215));

var IsValidChild = /*#__PURE__*/function (_Dependency) {
  (0, _inherits2.default)(IsValidChild, _Dependency);

  var _super = (0, _createSuper2.default)(IsValidChild);

  function IsValidChild() {
    (0, _classCallCheck2.default)(this, IsValidChild);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(IsValidChild, [{
    key: "getCommand",
    value: function getCommand() {
      return 'document/elements/create';
    }
  }, {
    key: "getId",
    value: function getId() {
      return 'is-valid-child';
    }
  }, {
    key: "apply",
    value: function apply(args) {
      var _args$containers = args.containers,
          containers = _args$containers === void 0 ? [args.container] : _args$containers,
          _args$model = args.model,
          model = _args$model === void 0 ? {} : _args$model,
          modelToCreate = new Backbone.Model(model);
      return containers.some(function (
      /* Container */
      container) {
        return _helper.default.isValidChild(modelToCreate, container.model);
      });
    }
  }]);
  return IsValidChild;
}(_dependency.default);

exports.IsValidChild = IsValidChild;
var _default = IsValidChild;
exports.default = _default;

/***/ }),
/* 888 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = exports.SectionColumns = void 0;

var _isArray = _interopRequireDefault(__webpack_require__(85));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(3));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var _createSuper2 = _interopRequireDefault(__webpack_require__(5));

var _after = _interopRequireDefault(__webpack_require__(224));

var _helper = _interopRequireDefault(__webpack_require__(702));

var _section = __webpack_require__(256);

var SectionColumns = /*#__PURE__*/function (_After) {
  (0, _inherits2.default)(SectionColumns, _After);

  var _super = (0, _createSuper2.default)(SectionColumns);

  function SectionColumns() {
    (0, _classCallCheck2.default)(this, SectionColumns);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(SectionColumns, [{
    key: "getCommand",
    value: function getCommand() {
      return 'document/elements/create';
    }
  }, {
    key: "getId",
    value: function getId() {
      return 'create-section-columns';
    }
  }, {
    key: "getContainerType",
    value: function getContainerType() {
      return 'document';
    }
  }, {
    key: "getConditions",
    value: function getConditions(args) {
      return !args.model.elements;
    }
    /**
     * @inheritDoc
     *
     * @param {{}} args
     * @param {Container||Container[]} containers
     *
     * @returns {boolean}
     */

  }, {
    key: "apply",
    value: function apply(args, containers) {
      var _args$structure = args.structure,
          structure = _args$structure === void 0 ? false : _args$structure,
          _args$options = args.options,
          options = _args$options === void 0 ? {} : _args$options;

      if (!(0, _isArray.default)(containers)) {
        containers = [containers];
      }

      var _args$columns = args.columns,
          columns = _args$columns === void 0 ? 1 : _args$columns;

      if (args.model.isInner && 1 === columns) {
        columns = _section.DEFAULT_INNER_SECTION_COLUMNS;
      }

      _helper.default.createSectionColumns(containers, columns, options, structure);
    }
  }]);
  return SectionColumns;
}(_after.default);

exports.SectionColumns = SectionColumns;
var _default = SectionColumns;
exports.default = _default;

/***/ }),
/* 889 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = exports.SectionColumnsLimit = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(3));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var _createSuper2 = _interopRequireDefault(__webpack_require__(5));

var _dependency = _interopRequireDefault(__webpack_require__(343));

var SectionColumnsLimit = /*#__PURE__*/function (_Dependency) {
  (0, _inherits2.default)(SectionColumnsLimit, _Dependency);

  var _super = (0, _createSuper2.default)(SectionColumnsLimit);

  function SectionColumnsLimit() {
    (0, _classCallCheck2.default)(this, SectionColumnsLimit);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(SectionColumnsLimit, [{
    key: "getCommand",
    value: function getCommand() {
      return 'document/elements/create';
    }
  }, {
    key: "getId",
    value: function getId() {
      return 'section-columns-limit';
    }
  }, {
    key: "getContainerType",
    value: function getContainerType() {
      return 'section';
    }
  }, {
    key: "apply",
    value: function apply(args) {
      var _args$containers = args.containers,
          containers = _args$containers === void 0 ? [args.container] : _args$containers; // If one of the targets have maximum columns reached break the command.

      return !containers.some(function (
      /**Container*/
      container) {
        return container.view.isCollectionFilled();
      });
    }
  }]);
  return SectionColumnsLimit;
}(_dependency.default);

exports.SectionColumnsLimit = SectionColumnsLimit;
var _default = SectionColumnsLimit;
exports.default = _default;

/***/ }),
/* 890 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = exports.SectionColumnsResetLayout = void 0;

var _isArray = _interopRequireDefault(__webpack_require__(85));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(3));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var _createSuper2 = _interopRequireDefault(__webpack_require__(5));

var _after = _interopRequireDefault(__webpack_require__(224));

var SectionColumnsResetLayout = /*#__PURE__*/function (_After) {
  (0, _inherits2.default)(SectionColumnsResetLayout, _After);

  var _super = (0, _createSuper2.default)(SectionColumnsResetLayout);

  function SectionColumnsResetLayout() {
    (0, _classCallCheck2.default)(this, SectionColumnsResetLayout);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(SectionColumnsResetLayout, [{
    key: "getCommand",
    value: function getCommand() {
      return 'document/elements/create';
    }
  }, {
    key: "getId",
    value: function getId() {
      return 'section-columns-reset-layout';
    }
  }, {
    key: "getContainerType",
    value: function getContainerType() {
      return 'section';
    }
  }, {
    key: "getConditions",
    value: function getConditions() {
      // On `document/elements/move` do not fire the hook!.
      return !$e.commands.isCurrentFirstTrace('document/elements/move');
    }
    /**
     * @inheritDoc
     *
     * @param {{}} args
     * @param {Container||Container[]} containers
     *
     * @returns {boolean}
     */

  }, {
    key: "apply",
    value: function apply(args, containers) {
      if (!(0, _isArray.default)(containers)) {
        containers = [containers];
      }

      containers.forEach(function (
      /**Container*/
      container) {
        return container.parent.view.resetLayout(false);
      });
    }
  }]);
  return SectionColumnsResetLayout;
}(_after.default);

exports.SectionColumnsResetLayout = SectionColumnsResetLayout;
var _default = SectionColumnsResetLayout;
exports.default = _default;

/***/ }),
/* 891 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

_Object$defineProperty(exports, "SectionsColumns", {
  enumerable: true,
  get: function get() {
    return _sectionColumns.SectionsColumns;
  }
});

var _sectionColumns = __webpack_require__(892);

/***/ }),
/* 892 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = exports.SectionsColumns = void 0;

var _isArray = _interopRequireDefault(__webpack_require__(85));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(3));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var _createSuper2 = _interopRequireDefault(__webpack_require__(5));

var _after = _interopRequireDefault(__webpack_require__(224));

var SectionsColumns = /*#__PURE__*/function (_After) {
  (0, _inherits2.default)(SectionsColumns, _After);

  var _super = (0, _createSuper2.default)(SectionsColumns);

  function SectionsColumns() {
    (0, _classCallCheck2.default)(this, SectionsColumns);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(SectionsColumns, [{
    key: "getCommand",
    value: function getCommand() {
      return 'document/elements/delete';
    }
  }, {
    key: "getId",
    value: function getId() {
      return 'delete-section-columns';
    }
  }, {
    key: "getContainerType",
    value: function getContainerType() {
      return 'column';
    }
  }, {
    key: "getConditions",
    value: function getConditions(args) {
      var _args$containers = args.containers,
          containers = _args$containers === void 0 ? [args.container] : _args$containers; // On `document/elements/move` do not fire the hook!.

      return !$e.commands.isCurrentFirstTrace('document/elements/move') && containers.some(function (container) {
        return (// If one of the targets is column.
          'column' === container.model.get('elType')
        );
      });
    }
    /**
     * @inheritDoc
     *
     * @param {{}} args
     * @param {Container||Container[]} containers
     *
     * @returns {boolean}
     */

  }, {
    key: "apply",
    value: function apply(args, containers) {
      if (!(0, _isArray.default)(containers)) {
        containers = [containers];
      }

      containers.forEach(function (
      /**Container*/
      container) {
        var parent = container.parent; // If its not column, continue.

        if ('section' !== parent.model.get('elType')) {
          return;
        } // If deleted the last column, should recreate it.


        if (0 === parent.view.collection.length) {
          $e.run('document/elements/create', {
            container: parent,
            model: {
              elType: 'column'
            }
          });
        } else {
          // Else, just reset section layout.
          parent.view.resetLayout();
        }
      });
    }
  }]);
  return SectionsColumns;
}(_after.default);

exports.SectionsColumns = SectionsColumns;
var _default = SectionsColumns;
exports.default = _default;

/***/ }),
/* 893 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

_Object$defineProperty(exports, "SectionColumnsSetStructure", {
  enumerable: true,
  get: function get() {
    return _sectionColumnsSetStructure.SectionColumnsSetStructure;
  }
});

var _sectionColumnsSetStructure = __webpack_require__(894);

/***/ }),
/* 894 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = exports.SectionColumnsSetStructure = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(3));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var _createSuper2 = _interopRequireDefault(__webpack_require__(5));

var _after = _interopRequireDefault(__webpack_require__(224));

var SectionColumnsSetStructure = /*#__PURE__*/function (_After) {
  (0, _inherits2.default)(SectionColumnsSetStructure, _After);

  var _super = (0, _createSuper2.default)(SectionColumnsSetStructure);

  function SectionColumnsSetStructure() {
    (0, _classCallCheck2.default)(this, SectionColumnsSetStructure);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(SectionColumnsSetStructure, [{
    key: "getCommand",
    value: function getCommand() {
      return 'document/elements/move';
    }
  }, {
    key: "getId",
    value: function getId() {
      return 'section-columns-set-structure';
    }
  }, {
    key: "getContainerType",
    value: function getContainerType() {
      return 'column';
    }
  }, {
    key: "getConditions",
    value: function getConditions(args) {
      var _args$containers = args.containers,
          containers = _args$containers === void 0 ? [args.container] : _args$containers,
          target = args.target; // Fire the hook only when target is not equals to moved container parent.

      return containers.some(function (
      /* Container */
      container) {
        return container.parent !== target;
      });
    }
  }, {
    key: "apply",
    value: function apply(args) {
      var _args$containers2 = args.containers,
          containers = _args$containers2 === void 0 ? [args.container] : _args$containers2,
          target = args.target;
      containers.forEach(function (
      /* Container */
      container) {
        return container.parent.view.resetLayout();
      });
      target.view.resetLayout();
      return true;
    }
  }]);
  return SectionColumnsSetStructure;
}(_after.default);

exports.SectionColumnsSetStructure = SectionColumnsSetStructure;
var _default = SectionColumnsSetStructure;
exports.default = _default;

/***/ }),
/* 895 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

_Object$defineProperty(exports, "IsPasteEnabled", {
  enumerable: true,
  get: function get() {
    return _isPasteEnabled.IsPasteEnabled;
  }
});

var _isPasteEnabled = __webpack_require__(896);

/***/ }),
/* 896 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = exports.IsPasteEnabled = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(3));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var _createSuper2 = _interopRequireDefault(__webpack_require__(5));

var _dependency = _interopRequireDefault(__webpack_require__(343));

var _helper = _interopRequireDefault(__webpack_require__(215));

var IsPasteEnabled = /*#__PURE__*/function (_Dependency) {
  (0, _inherits2.default)(IsPasteEnabled, _Dependency);

  var _super = (0, _createSuper2.default)(IsPasteEnabled);

  function IsPasteEnabled() {
    (0, _classCallCheck2.default)(this, IsPasteEnabled);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(IsPasteEnabled, [{
    key: "getCommand",
    value: function getCommand() {
      return 'document/elements/paste';
    }
  }, {
    key: "getId",
    value: function getId() {
      return 'is-paste-enabled';
    }
  }, {
    key: "getConditions",
    value: function getConditions(args) {
      return !args.rebuild;
    }
  }, {
    key: "apply",
    value: function apply(args) {
      var _args$containers = args.containers,
          containers = _args$containers === void 0 ? [args.container] : _args$containers;
      return containers.some(function (container) {
        return _helper.default.isPasteEnabled(container);
      });
    }
  }]);
  return IsPasteEnabled;
}(_dependency.default);

exports.IsPasteEnabled = IsPasteEnabled;
var _default = IsPasteEnabled;
exports.default = _default;

/***/ }),
/* 897 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

_Object$defineProperty(exports, "HandleDynamic", {
  enumerable: true,
  get: function get() {
    return _handleDynamic.HandleDynamic;
  }
});

_Object$defineProperty(exports, "ResizeColumn", {
  enumerable: true,
  get: function get() {
    return _resizeColumn.ResizeColumn;
  }
});

_Object$defineProperty(exports, "ResizeColumnLimit", {
  enumerable: true,
  get: function get() {
    return _resizeColumnLimit.ResizeColumnLimit;
  }
});

_Object$defineProperty(exports, "SetStructure", {
  enumerable: true,
  get: function get() {
    return _setStructure.SetStructure;
  }
});

var _handleDynamic = __webpack_require__(898);

var _resizeColumn = __webpack_require__(899);

var _resizeColumnLimit = __webpack_require__(900);

var _setStructure = __webpack_require__(901);

/***/ }),
/* 898 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = exports.HandleDynamic = void 0;

var _defineProperty2 = _interopRequireDefault(__webpack_require__(28));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(3));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var _createSuper2 = _interopRequireDefault(__webpack_require__(5));

var _after = _interopRequireDefault(__webpack_require__(224));

var HandleDynamic = /*#__PURE__*/function (_After) {
  (0, _inherits2.default)(HandleDynamic, _After);

  var _super = (0, _createSuper2.default)(HandleDynamic);

  function HandleDynamic() {
    (0, _classCallCheck2.default)(this, HandleDynamic);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(HandleDynamic, [{
    key: "getCommand",
    value: function getCommand() {
      return 'document/elements/settings';
    }
  }, {
    key: "getId",
    value: function getId() {
      return 'handle-dynamic';
    }
  }, {
    key: "getContainerType",
    value: function getContainerType() {
      return 'dynamic';
    }
  }, {
    key: "getConditions",
    value: function getConditions(args) {
      var _args$containers = args.containers,
          containers = _args$containers === void 0 ? [args.container] : _args$containers;
      return containers.some(function (
      /**Container*/
      container) {
        return 'dynamic' === container.type;
      });
    }
  }, {
    key: "apply",
    value: function apply(args) {
      var _args$containers2 = args.containers,
          containers = _args$containers2 === void 0 ? [args.container] : _args$containers2;
      containers.forEach(function (
      /**Container*/
      container) {
        if ('dynamic' === container.type) {
          var tagText = elementor.dynamicTags.tagContainerToTagText(container),
              commandArgs = {
            container: container.parent,
            settings: (0, _defineProperty2.default)({}, container.view.options.controlName, tagText)
          };
          $e.run('document/dynamic/settings', commandArgs);
        }
      });
      return true;
    }
  }]);
  return HandleDynamic;
}(_after.default);

exports.HandleDynamic = HandleDynamic;
var _default = HandleDynamic;
exports.default = _default;

/***/ }),
/* 899 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = exports.ResizeColumn = void 0;

__webpack_require__(26);

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(3));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var _createSuper2 = _interopRequireDefault(__webpack_require__(5));

var _after = _interopRequireDefault(__webpack_require__(224));

var ResizeColumn = /*#__PURE__*/function (_After) {
  (0, _inherits2.default)(ResizeColumn, _After);

  var _super = (0, _createSuper2.default)(ResizeColumn);

  function ResizeColumn() {
    (0, _classCallCheck2.default)(this, ResizeColumn);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(ResizeColumn, [{
    key: "getCommand",
    value: function getCommand() {
      return 'document/elements/settings';
    }
  }, {
    key: "getId",
    value: function getId() {
      return 'resize-column';
    }
  }, {
    key: "getContainerType",
    value: function getContainerType() {
      return 'column';
    }
  }, {
    key: "getConditions",
    value: function getConditions(args) {
      return args.settings._inline_size;
    }
  }, {
    key: "apply",
    value: function apply(args) {
      var _this = this;

      var _args$containers = args.containers,
          containers = _args$containers === void 0 ? [args.container] : _args$containers;
      containers.forEach(function (
      /**Container*/
      container) {
        _this.resizeColumn(container, args.settings._inline_size);
      });
      return true;
    }
  }, {
    key: "resizeColumn",
    value: function resizeColumn(container, newSize) {
      var nextContainer = container.parent.view.getNeighborContainer(container);

      if (!nextContainer) {
        return false;
      }

      var parentView = container.parent.view,
          currentColumnView = container.view;
      var currentSize = null;

      if (undefined === container.oldValues || null === container.oldValues._inline_size) {
        // Mean, that it was not set before ( first time ).
        currentSize = container.settings.get('_column_size');
      } else {
        var totalWidth = parentView.$el.find(' > .elementor-container')[0].getBoundingClientRect().width;
        currentSize = +(container.oldValues._inline_size || currentColumnView.el.getBoundingClientRect().width / totalWidth * 100);
      }

      var nextChildView = nextContainer.view,
          $nextElement = nextChildView.$el,
          nextElementCurrentSize = +nextChildView.model.getSetting('_inline_size') || container.parent.view.getColumnPercentSize($nextElement, $nextElement[0].getBoundingClientRect().width),
          nextElementNewSize = +(currentSize + nextElementCurrentSize - newSize).toFixed(3);
      /**
       * TODO: Hook prevented ( next command will not call recursive hook ), but we didnt tell the hook to be prevented
       * consider: '$e.hooks.preventRecursive()'.
       */

      $e.run('document/elements/settings', {
        containers: [nextContainer],
        settings: {
          _inline_size: nextElementNewSize
        },
        options: {
          callbacks: {
            'resize-column-limit': false
          },
          history: {
            title: elementor.config.elements.column.controls._inline_size.label
          },
          external: true,
          debounce: true
        }
      });
      return true;
    }
  }]);
  return ResizeColumn;
}(_after.default);

exports.ResizeColumn = ResizeColumn;
var _default = ResizeColumn;
exports.default = _default;

/***/ }),
/* 900 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = exports.ResizeColumnLimit = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(3));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var _createSuper2 = _interopRequireDefault(__webpack_require__(5));

var _dependency = _interopRequireDefault(__webpack_require__(343));

var _section = __webpack_require__(256);

var ResizeColumnLimit = /*#__PURE__*/function (_Dependency) {
  (0, _inherits2.default)(ResizeColumnLimit, _Dependency);

  var _super = (0, _createSuper2.default)(ResizeColumnLimit);

  function ResizeColumnLimit() {
    (0, _classCallCheck2.default)(this, ResizeColumnLimit);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(ResizeColumnLimit, [{
    key: "getCommand",
    value: function getCommand() {
      return 'document/elements/settings';
    }
  }, {
    key: "getId",
    value: function getId() {
      return 'resize-column-limit';
    }
  }, {
    key: "getContainerType",
    value: function getContainerType() {
      return 'column';
    }
  }, {
    key: "getConditions",
    value: function getConditions(args) {
      return args.settings._inline_size;
    }
  }, {
    key: "apply",
    value: function apply(args) {
      var _args$containers = args.containers,
          containers = _args$containers === void 0 ? [args.container] : _args$containers;
      return containers.some(function (
      /**Container*/
      container) {
        var parentView = container.parent.view,
            columnView = container.view,
            currentSize = container.settings.get('_inline_size') || container.settings.get('_column_size'),
            newSize = args.settings._inline_size,
            nextChildView = parentView.getNextColumn(columnView) || parentView.getPreviousColumn(columnView);

        if (!nextChildView) {
          if ($e.devTools) {
            $e.devTools.log.error('There is not any next column');
          }

          return false;
        }

        var $nextElement = nextChildView.$el,
            nextElementCurrentSize = +nextChildView.model.getSetting('_inline_size') || parentView.getColumnPercentSize($nextElement, $nextElement[0].getBoundingClientRect().width),
            nextElementNewSize = +(currentSize + nextElementCurrentSize - newSize).toFixed(3);

        if (nextElementNewSize < _section.DEFAULT_INNER_SECTION_COLUMNS) {
          if ($e.devTools) {
            $e.devTools.log.error('New column width is too large');
          }

          return false;
        }

        if (newSize < _section.DEFAULT_INNER_SECTION_COLUMNS) {
          if ($e.devTools) {
            $e.devTools.log.error('New column width is too small');
          }

          return false;
        }

        return true;
      });
    }
  }]);
  return ResizeColumnLimit;
}(_dependency.default);

exports.ResizeColumnLimit = ResizeColumnLimit;
var _default = ResizeColumnLimit;
exports.default = _default;

/***/ }),
/* 901 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = exports.SetStructure = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(3));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var _createSuper2 = _interopRequireDefault(__webpack_require__(5));

var _after = _interopRequireDefault(__webpack_require__(224));

var SetStructure = /*#__PURE__*/function (_After) {
  (0, _inherits2.default)(SetStructure, _After);

  var _super = (0, _createSuper2.default)(SetStructure);

  function SetStructure() {
    (0, _classCallCheck2.default)(this, SetStructure);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(SetStructure, [{
    key: "getCommand",
    value: function getCommand() {
      return 'document/elements/settings';
    }
  }, {
    key: "getId",
    value: function getId() {
      return 'set-structure';
    }
  }, {
    key: "getContainerType",
    value: function getContainerType() {
      return 'section';
    }
  }, {
    key: "getConditions",
    value: function getConditions(args) {
      return !!args.settings.structure;
    }
  }, {
    key: "apply",
    value: function apply(args) {
      var _args$containers = args.containers,
          containers = _args$containers === void 0 ? [args.container] : _args$containers;
      containers.forEach(function (
      /**Container*/
      container) {
        container.view.adjustColumns();
      });
      return true;
    }
  }]);
  return SetStructure;
}(_after.default);

exports.SetStructure = SetStructure;
var _default = SetStructure;
exports.default = _default;

/***/ }),
/* 902 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$keys = __webpack_require__(25);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

var _create = __webpack_require__(903);

_Object$keys(_create).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;

  _Object$defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _create[key];
    }
  });
});

var _delete = __webpack_require__(906);

_Object$keys(_delete).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;

  _Object$defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _delete[key];
    }
  });
});

var _settings = __webpack_require__(909);

_Object$keys(_settings).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;

  _Object$defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _settings[key];
    }
  });
});

/***/ }),
/* 903 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

_Object$defineProperty(exports, "ColumnIsPopulated", {
  enumerable: true,
  get: function get() {
    return _columnIsPopulated.ColumnIsPopulated;
  }
});

_Object$defineProperty(exports, "CreateSectionIsFull", {
  enumerable: true,
  get: function get() {
    return _sectionIsFull.CreateSectionIsFull;
  }
});

var _columnIsPopulated = __webpack_require__(904);

var _sectionIsFull = __webpack_require__(905);

/***/ }),
/* 904 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = exports.ColumnIsPopulated = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(3));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var _createSuper2 = _interopRequireDefault(__webpack_require__(5));

var _after = _interopRequireDefault(__webpack_require__(278));

var ColumnIsPopulated = /*#__PURE__*/function (_After) {
  (0, _inherits2.default)(ColumnIsPopulated, _After);

  var _super = (0, _createSuper2.default)(ColumnIsPopulated);

  function ColumnIsPopulated() {
    (0, _classCallCheck2.default)(this, ColumnIsPopulated);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(ColumnIsPopulated, [{
    key: "getCommand",
    value: function getCommand() {
      return 'document/elements/create';
    }
  }, {
    key: "getId",
    value: function getId() {
      return 'column-is-populated';
    }
  }, {
    key: "getConditions",
    value: function getConditions(args) {
      var _args$containers = args.containers,
          containers = _args$containers === void 0 ? [args.container] : _args$containers; // If the created element, was created at column.

      return containers.some(function (
      /**Container*/
      container) {
        return 'column' === container.model.get('elType');
      });
    }
  }, {
    key: "apply",
    value: function apply(args) {
      var _args$containers2 = args.containers,
          containers = _args$containers2 === void 0 ? [args.container] : _args$containers2;
      containers.forEach(function (
      /* Container */
      container) {
        if ('column' === container.model.get('elType')) {
          container.view.changeChildContainerClasses();
        }
      });
    }
  }]);
  return ColumnIsPopulated;
}(_after.default);

exports.ColumnIsPopulated = ColumnIsPopulated;
var _default = ColumnIsPopulated;
exports.default = _default;

/***/ }),
/* 905 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = exports.CreateSectionIsFull = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(3));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var _createSuper2 = _interopRequireDefault(__webpack_require__(5));

var _after = _interopRequireDefault(__webpack_require__(278));

var CreateSectionIsFull = /*#__PURE__*/function (_After) {
  (0, _inherits2.default)(CreateSectionIsFull, _After);

  var _super = (0, _createSuper2.default)(CreateSectionIsFull);

  function CreateSectionIsFull() {
    (0, _classCallCheck2.default)(this, CreateSectionIsFull);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(CreateSectionIsFull, [{
    key: "getCommand",
    value: function getCommand() {
      return 'document/elements/create';
    }
  }, {
    key: "getId",
    value: function getId() {
      return 'create-section-is-full';
    }
  }, {
    key: "getConditions",
    value: function getConditions(args) {
      var _args$containers = args.containers,
          containers = _args$containers === void 0 ? [args.container] : _args$containers;
      return containers.some(function (
      /* Container */
      container) {
        return 'section' === container.model.get('elType');
      });
    }
  }, {
    key: "apply",
    value: function apply(args) {
      var _args$containers2 = args.containers,
          containers = _args$containers2 === void 0 ? [args.container] : _args$containers2;
      containers.forEach(function (
      /* Container */
      container) {
        if ('section' === container.model.get('elType')) {
          container.view.toggleSectionIsFull();
        }
      });
    }
  }]);
  return CreateSectionIsFull;
}(_after.default);

exports.CreateSectionIsFull = CreateSectionIsFull;
var _default = CreateSectionIsFull;
exports.default = _default;

/***/ }),
/* 906 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

_Object$defineProperty(exports, "ColumnIsEmpty", {
  enumerable: true,
  get: function get() {
    return _columnIsEmpty.ColumnIsEmpty;
  }
});

_Object$defineProperty(exports, "DeleteSectionIsFull", {
  enumerable: true,
  get: function get() {
    return _sectionIsFull.DeleteSectionIsFull;
  }
});

var _columnIsEmpty = __webpack_require__(907);

var _sectionIsFull = __webpack_require__(908);

/***/ }),
/* 907 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = exports.ColumnIsEmpty = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(3));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var _createSuper2 = _interopRequireDefault(__webpack_require__(5));

var _after = _interopRequireDefault(__webpack_require__(278));

var ColumnIsEmpty = /*#__PURE__*/function (_After) {
  (0, _inherits2.default)(ColumnIsEmpty, _After);

  var _super = (0, _createSuper2.default)(ColumnIsEmpty);

  function ColumnIsEmpty() {
    (0, _classCallCheck2.default)(this, ColumnIsEmpty);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(ColumnIsEmpty, [{
    key: "getCommand",
    value: function getCommand() {
      return 'document/elements/delete';
    }
  }, {
    key: "getId",
    value: function getId() {
      return 'column-is-empty';
    }
  }, {
    key: "getConditions",
    value: function getConditions(args) {
      var _args$containers = args.containers,
          containers = _args$containers === void 0 ? [args.container] : _args$containers; // If the deleted element, was deleted from column.

      return containers.some(function (
      /**Container*/
      container) {
        return 'column' === container.parent.model.get('elType');
      });
    }
  }, {
    key: "apply",
    value: function apply(args) {
      var _args$containers2 = args.containers,
          containers = _args$containers2 === void 0 ? [args.container] : _args$containers2;
      containers.forEach(function (
      /* Container */
      container) {
        if ('column' === container.parent.model.get('elType')) {
          container.parent.view.changeChildContainerClasses();
        }
      });
    }
  }]);
  return ColumnIsEmpty;
}(_after.default);

exports.ColumnIsEmpty = ColumnIsEmpty;
var _default = ColumnIsEmpty;
exports.default = _default;

/***/ }),
/* 908 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = exports.DeleteSectionIsFull = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(3));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var _createSuper2 = _interopRequireDefault(__webpack_require__(5));

var _after = _interopRequireDefault(__webpack_require__(278));

var DeleteSectionIsFull = /*#__PURE__*/function (_After) {
  (0, _inherits2.default)(DeleteSectionIsFull, _After);

  var _super = (0, _createSuper2.default)(DeleteSectionIsFull);

  function DeleteSectionIsFull() {
    (0, _classCallCheck2.default)(this, DeleteSectionIsFull);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(DeleteSectionIsFull, [{
    key: "getCommand",
    value: function getCommand() {
      return 'document/elements/delete';
    }
  }, {
    key: "getId",
    value: function getId() {
      return 'delete-section-is-full';
    }
  }, {
    key: "getConditions",
    value: function getConditions(args) {
      var _args$containers = args.containers,
          containers = _args$containers === void 0 ? [args.container] : _args$containers;
      return containers.some(function (
      /* Container */
      container) {
        return 'column' === container.model.get('elType');
      });
    }
  }, {
    key: "apply",
    value: function apply(args) {
      var _args$containers2 = args.containers,
          containers = _args$containers2 === void 0 ? [args.container] : _args$containers2;
      containers.forEach(function (
      /* Container */
      container) {
        if ('column' === container.model.get('elType')) {
          container.parent.view.toggleSectionIsFull();
        }
      });
    }
  }]);
  return DeleteSectionIsFull;
}(_after.default);

exports.DeleteSectionIsFull = DeleteSectionIsFull;
var _default = DeleteSectionIsFull;
exports.default = _default;

/***/ }),
/* 909 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

_Object$defineProperty(exports, "ColumnChangeSize", {
  enumerable: true,
  get: function get() {
    return _columnChangeSize.ColumnChangeSize;
  }
});

_Object$defineProperty(exports, "Draggable", {
  enumerable: true,
  get: function get() {
    return _draggable.Draggable;
  }
});

_Object$defineProperty(exports, "Resizeable", {
  enumerable: true,
  get: function get() {
    return _resizeable.Resizeable;
  }
});

var _columnChangeSize = __webpack_require__(910);

var _draggable = __webpack_require__(911);

var _resizeable = __webpack_require__(912);

/***/ }),
/* 910 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = exports.ColumnChangeSize = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(3));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var _createSuper2 = _interopRequireDefault(__webpack_require__(5));

var _after = _interopRequireDefault(__webpack_require__(278));

var ColumnChangeSize = /*#__PURE__*/function (_After) {
  (0, _inherits2.default)(ColumnChangeSize, _After);

  var _super = (0, _createSuper2.default)(ColumnChangeSize);

  function ColumnChangeSize() {
    (0, _classCallCheck2.default)(this, ColumnChangeSize);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(ColumnChangeSize, [{
    key: "getCommand",
    value: function getCommand() {
      return 'document/elements/settings';
    }
  }, {
    key: "getId",
    value: function getId() {
      return 'column-change-size';
    }
  }, {
    key: "getConditions",
    value: function getConditions(args) {
      return undefined !== args.settings._inline_size || undefined !== args.settings._column_size;
    }
  }, {
    key: "apply",
    value: function apply(args) {
      var _args$containers = args.containers,
          containers = _args$containers === void 0 ? [args.container] : _args$containers;
      containers.forEach(function (
      /* Container */
      container) {
        container.view.changeSizeUI();
      });
    }
  }]);
  return ColumnChangeSize;
}(_after.default);

exports.ColumnChangeSize = ColumnChangeSize;
var _default = ColumnChangeSize;
exports.default = _default;

/***/ }),
/* 911 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = exports.Draggable = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(3));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var _createSuper2 = _interopRequireDefault(__webpack_require__(5));

var _after = _interopRequireDefault(__webpack_require__(278));

var Draggable = /*#__PURE__*/function (_After) {
  (0, _inherits2.default)(Draggable, _After);

  var _super = (0, _createSuper2.default)(Draggable);

  function Draggable() {
    (0, _classCallCheck2.default)(this, Draggable);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(Draggable, [{
    key: "getCommand",
    value: function getCommand() {
      return 'document/elements/settings';
    }
  }, {
    key: "getId",
    value: function getId() {
      return 'draggable';
    }
  }, {
    key: "getConditions",
    value: function getConditions(args) {
      return undefined !== args.settings._position;
    }
  }, {
    key: "apply",
    value: function apply(args) {
      var _args$containers = args.containers,
          containers = _args$containers === void 0 ? [args.container] : _args$containers;
      containers.forEach(function (
      /* Container */
      container) {
        if (container.view.options.draggable) {
          container.view.options.draggable.toggle();
        }
      });
    }
  }]);
  return Draggable;
}(_after.default);

exports.Draggable = Draggable;
var _default = Draggable;
exports.default = _default;

/***/ }),
/* 912 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = exports.Resizeable = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(3));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var _createSuper2 = _interopRequireDefault(__webpack_require__(5));

var _after = _interopRequireDefault(__webpack_require__(278));

var Resizeable = /*#__PURE__*/function (_After) {
  (0, _inherits2.default)(Resizeable, _After);

  var _super = (0, _createSuper2.default)(Resizeable);

  function Resizeable() {
    (0, _classCallCheck2.default)(this, Resizeable);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(Resizeable, [{
    key: "getCommand",
    value: function getCommand() {
      return 'document/elements/settings';
    }
  }, {
    key: "getId",
    value: function getId() {
      return 'resizeable';
    }
  }, {
    key: "getConditions",
    value: function getConditions(args) {
      return undefined !== args.settings._position || undefined !== args.settings._element_width;
    }
  }, {
    key: "apply",
    value: function apply(args) {
      var _args$containers = args.containers,
          containers = _args$containers === void 0 ? [args.container] : _args$containers;
      containers.forEach(function (
      /* Container */
      container) {
        if (container.view.options.resizeable) {
          container.view.options.resizeable.toggle();
        }
      });
    }
  }]);
  return Resizeable;
}(_after.default);

exports.Resizeable = Resizeable;
var _default = Resizeable;
exports.default = _default;

/***/ }),
/* 913 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(38);

var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(3));

var _get2 = _interopRequireDefault(__webpack_require__(24));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(16));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var _createSuper2 = _interopRequireDefault(__webpack_require__(5));

var _componentBase = _interopRequireDefault(__webpack_require__(86));

var _component = _interopRequireDefault(__webpack_require__(914));

var _component2 = _interopRequireDefault(__webpack_require__(917));

var commandsData = _interopRequireWildcard(__webpack_require__(920));

var Component = /*#__PURE__*/function (_ComponentBase) {
  (0, _inherits2.default)(Component, _ComponentBase);

  var _super = (0, _createSuper2.default)(Component);

  function Component() {
    (0, _classCallCheck2.default)(this, Component);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(Component, [{
    key: "__construct",
    value: function __construct() {
      var _this = this;

      var args = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      (0, _get2.default)((0, _getPrototypeOf2.default)(Component.prototype), "__construct", this).call(this, args);
      elementorCommon.elements.$window.on('elementor:loaded', function () {
        return _this.refreshGlobalData();
      });
    }
  }, {
    key: "getNamespace",
    value: function getNamespace() {
      return 'globals';
    }
  }, {
    key: "registerAPI",
    value: function registerAPI() {
      $e.components.register(new _component.default({
        manager: this
      }));
      $e.components.register(new _component2.default({
        manager: this
      }));
      (0, _get2.default)((0, _getPrototypeOf2.default)(Component.prototype), "registerAPI", this).call(this);
    }
  }, {
    key: "defaultData",
    value: function defaultData() {
      return this.importCommands(commandsData);
    }
  }, {
    key: "refreshGlobalData",
    value: function refreshGlobalData() {
      $e.data.deleteCache($e.components.get('globals'), 'globals/index');
    }
  }]);
  return Component;
}(_componentBase.default);

exports.default = Component;

/***/ }),
/* 914 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(38);

var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(3));

var _get2 = _interopRequireDefault(__webpack_require__(24));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(16));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var _createSuper2 = _interopRequireDefault(__webpack_require__(5));

var _componentBase = _interopRequireDefault(__webpack_require__(86));

var commands = _interopRequireWildcard(__webpack_require__(915));

var Component = /*#__PURE__*/function (_ComponentBase) {
  (0, _inherits2.default)(Component, _ComponentBase);

  var _super = (0, _createSuper2.default)(Component);

  function Component() {
    (0, _classCallCheck2.default)(this, Component);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(Component, [{
    key: "__construct",
    value: function __construct() {
      var args = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      (0, _get2.default)((0, _getPrototypeOf2.default)(Component.prototype), "__construct", this).call(this, args);
    }
  }, {
    key: "getNamespace",
    value: function getNamespace() {
      return 'globals/typography';
    }
  }, {
    key: "defaultCommands",
    value: function defaultCommands() {
      return this.importCommands(commands);
    }
  }]);
  return Component;
}(_componentBase.default);

exports.default = Component;

/***/ }),
/* 915 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

_Object$defineProperty(exports, "Create", {
  enumerable: true,
  get: function get() {
    return _create.Create;
  }
});

var _create = __webpack_require__(916);

/***/ }),
/* 916 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.Create = void 0;

var _values = _interopRequireDefault(__webpack_require__(56));

__webpack_require__(60);

__webpack_require__(139);

__webpack_require__(182);

var _slicedToArray2 = _interopRequireDefault(__webpack_require__(105));

var _entries = _interopRequireDefault(__webpack_require__(91));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(3));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var _createSuper2 = _interopRequireDefault(__webpack_require__(5));

var _createBase = _interopRequireDefault(__webpack_require__(703));

var Create = /*#__PURE__*/function (_CreateBase) {
  (0, _inherits2.default)(Create, _CreateBase);

  var _super = (0, _createSuper2.default)(Create);

  function Create() {
    (0, _classCallCheck2.default)(this, Create);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(Create, [{
    key: "apply",
    value: function apply() {
      var args = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var container = args.container,
          setting = args.setting,
          title = args.title,
          controls = container.controls,
          availableControls = {};
      var result = false,
          groupPrefix = '';

      if (controls[setting] && controls[setting].groupPrefix) {
        groupPrefix = controls[setting].groupPrefix;
      } else {
        throw new Error("Invalid setting: control '".concat(setting, "', not found."));
      }

      if (groupPrefix) {
        (0, _entries.default)(controls).forEach(function (_ref) {
          var _ref2 = (0, _slicedToArray2.default)(_ref, 1),
              key = _ref2[0];

          if (key.includes(groupPrefix)) {
            // Get values but remove defaults.
            var value = container.settings.get(key),
                defaultValue = container.controls[key].default;

            if (!_.isEqual(value, defaultValue)) {
              availableControls[key.replace(groupPrefix, elementor.config.kit_config.typography_prefix)] = container.settings.get(key);
            }
          }
        });
      }

      if ((0, _values.default)(availableControls).length) {
        var id = elementorCommon.helpers.getUniqueId();
        result = $e.data.create("globals/typography?id=".concat(id), {
          title: title,
          value: availableControls
        });
      }

      return result;
    }
  }]);
  return Create;
}(_createBase.default);

exports.Create = Create;

/***/ }),
/* 917 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(38);

var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(3));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var _createSuper2 = _interopRequireDefault(__webpack_require__(5));

var _componentBase = _interopRequireDefault(__webpack_require__(86));

var commands = _interopRequireWildcard(__webpack_require__(918));

var Component = /*#__PURE__*/function (_ComponentBase) {
  (0, _inherits2.default)(Component, _ComponentBase);

  var _super = (0, _createSuper2.default)(Component);

  function Component() {
    (0, _classCallCheck2.default)(this, Component);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(Component, [{
    key: "getNamespace",
    value: function getNamespace() {
      return 'globals/colors';
    }
  }, {
    key: "defaultCommands",
    value: function defaultCommands() {
      return this.importCommands(commands);
    }
  }]);
  return Component;
}(_componentBase.default);

exports.default = Component;

/***/ }),
/* 918 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

_Object$defineProperty(exports, "Create", {
  enumerable: true,
  get: function get() {
    return _create.Create;
  }
});

var _create = __webpack_require__(919);

/***/ }),
/* 919 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.Create = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(3));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var _createSuper2 = _interopRequireDefault(__webpack_require__(5));

var _createBase = _interopRequireDefault(__webpack_require__(703));

var Create = /*#__PURE__*/function (_CreateBase) {
  (0, _inherits2.default)(Create, _CreateBase);

  var _super = (0, _createSuper2.default)(Create);

  function Create() {
    (0, _classCallCheck2.default)(this, Create);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(Create, [{
    key: "apply",
    value: function apply() {
      var args = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      var container = args.container,
          setting = args.setting,
          title = args.title,
          controls = container.controls;
      var result = false;

      if (!controls[setting]) {
        throw new Error("Invalid setting: control '".concat(setting, "', not found."));
      } // `args.id` used by tests.


      var id = args.id || elementorCommon.helpers.getUniqueId();
      result = $e.data.create("globals/colors?id=".concat(id), {
        title: title,
        value: container.settings.get(setting)
      });
      return result;
    }
  }]);
  return Create;
}(_createBase.default);

exports.Create = Create;

/***/ }),
/* 920 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

_Object$defineProperty(exports, "Colors", {
  enumerable: true,
  get: function get() {
    return _colors.Colors;
  }
});

_Object$defineProperty(exports, "Typography", {
  enumerable: true,
  get: function get() {
    return _typography.Typography;
  }
});

exports.Index = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(3));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var _createSuper2 = _interopRequireDefault(__webpack_require__(5));

var _commandData = _interopRequireDefault(__webpack_require__(313));

var _colors = __webpack_require__(921);

var _typography = __webpack_require__(922);

// Alphabetical order
// TODO: Remove - Move to into base, Possible to handle using ComponentData.
var Index = /*#__PURE__*/function (_CommandData) {
  (0, _inherits2.default)(Index, _CommandData);

  var _super = (0, _createSuper2.default)(Index);

  function Index() {
    (0, _classCallCheck2.default)(this, Index);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(Index, null, [{
    key: "getEndpointFormat",
    value: function getEndpointFormat() {
      // Format 'globals/index' to 'globals'.
      return 'globals';
    }
  }]);
  return Index;
}(_commandData.default);

exports.Index = Index;

/***/ }),
/* 921 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = exports.Colors = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(3));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var _createSuper2 = _interopRequireDefault(__webpack_require__(5));

var _commandData = _interopRequireDefault(__webpack_require__(313));

var Colors = /*#__PURE__*/function (_CommandData) {
  (0, _inherits2.default)(Colors, _CommandData);

  var _super = (0, _createSuper2.default)(Colors);

  function Colors() {
    (0, _classCallCheck2.default)(this, Colors);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(Colors, null, [{
    key: "getEndpointFormat",
    value: function getEndpointFormat() {
      return 'globals/colors/{id}';
    }
  }]);
  return Colors;
}(_commandData.default);

exports.Colors = Colors;
var _default = Colors;
exports.default = _default;

/***/ }),
/* 922 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = exports.Typography = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(3));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var _createSuper2 = _interopRequireDefault(__webpack_require__(5));

var _commandData = _interopRequireDefault(__webpack_require__(313));

var Typography = /*#__PURE__*/function (_CommandData) {
  (0, _inherits2.default)(Typography, _CommandData);

  var _super = (0, _createSuper2.default)(Typography);

  function Typography() {
    (0, _classCallCheck2.default)(this, Typography);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(Typography, null, [{
    key: "getEndpointFormat",
    value: function getEndpointFormat() {
      return 'globals/typography/{id}';
    }
  }]);
  return Typography;
}(_commandData.default);

exports.Typography = Typography;
var _default = Typography;
exports.default = _default;

/***/ })
/******/ ]);
//# sourceMappingURL=editor-document.js.map