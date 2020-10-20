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
/******/ 	return __webpack_require__(__webpack_require__.s = 790);
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
/* 23 */,
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
/* 28 */,
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
/* 38 */,
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
/* 40 */,
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
/* 66 */,
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
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
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
/* 91 */,
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
/* 105 */,
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
/* 118 */,
/* 119 */,
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
/* 122 */,
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
/* 128 */,
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
/* 134 */,
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
/* 138 */,
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
/* 140 */,
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
/* 150 */,
/* 151 */,
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
/* 179 */,
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
/* 191 */,
/* 192 */,
/* 193 */,
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
/* 197 */,
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
/* 199 */,
/* 200 */,
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
/* 203 */,
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
/* 206 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(316);

/***/ }),
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
/* 211 */,
/* 212 */,
/* 213 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(282);

/***/ }),
/* 214 */,
/* 215 */,
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
/* 219 */,
/* 220 */,
/* 221 */,
/* 222 */,
/* 223 */,
/* 224 */,
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
/* 228 */,
/* 229 */,
/* 230 */,
/* 231 */,
/* 232 */,
/* 233 */,
/* 234 */,
/* 235 */,
/* 236 */,
/* 237 */
/***/ (function(module, exports) {

module.exports = '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003' +
  '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';


/***/ }),
/* 238 */,
/* 239 */,
/* 240 */,
/* 241 */,
/* 242 */,
/* 243 */,
/* 244 */,
/* 245 */,
/* 246 */,
/* 247 */,
/* 248 */,
/* 249 */,
/* 250 */,
/* 251 */,
/* 252 */,
/* 253 */,
/* 254 */,
/* 255 */,
/* 256 */,
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
/* 263 */,
/* 264 */,
/* 265 */,
/* 266 */,
/* 267 */,
/* 268 */,
/* 269 */,
/* 270 */,
/* 271 */,
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
/* 273 */,
/* 274 */,
/* 275 */,
/* 276 */,
/* 277 */,
/* 278 */,
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
/* 286 */,
/* 287 */,
/* 288 */,
/* 289 */,
/* 290 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(291);

/***/ }),
/* 291 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(292);
var $Object = __webpack_require__(6).Object;
module.exports = function defineProperties(T, D) {
  return $Object.defineProperties(T, D);
};


/***/ }),
/* 292 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(7);
// 19.1.2.3 / 15.2.3.7 Object.defineProperties(O, Properties)
$export($export.S + $export.F * !__webpack_require__(14), 'Object', { defineProperties: __webpack_require__(132) });


/***/ }),
/* 293 */,
/* 294 */,
/* 295 */,
/* 296 */,
/* 297 */,
/* 298 */,
/* 299 */,
/* 300 */,
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
/* 309 */,
/* 310 */,
/* 311 */,
/* 312 */,
/* 313 */,
/* 314 */,
/* 315 */,
/* 316 */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(6);
var $JSON = core.JSON || (core.JSON = { stringify: JSON.stringify });
module.exports = function stringify(it) { // eslint-disable-line no-unused-vars
  return $JSON.stringify.apply($JSON, arguments);
};


/***/ }),
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
/* 330 */,
/* 331 */,
/* 332 */,
/* 333 */,
/* 334 */,
/* 335 */,
/* 336 */,
/* 337 */,
/* 338 */,
/* 339 */,
/* 340 */,
/* 341 */,
/* 342 */,
/* 343 */,
/* 344 */,
/* 345 */,
/* 346 */,
/* 347 */,
/* 348 */,
/* 349 */,
/* 350 */,
/* 351 */,
/* 352 */,
/* 353 */,
/* 354 */,
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
/* 370 */,
/* 371 */,
/* 372 */,
/* 373 */,
/* 374 */,
/* 375 */,
/* 376 */,
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
/* 388 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/**
 * Handles managing all events for whatever you plug it into. Priorities for hooks are based on lowest to highest in
 * that, lowest priority hooks are fired first.
 */

var _interopRequireDefault = __webpack_require__(0);

var _parseInt2 = _interopRequireDefault(__webpack_require__(213));

var EventManager = function EventManager() {
  var slice = Array.prototype.slice,
      MethodsAvailable;
  /**
   * Contains the hooks that get registered with this EventManager. The array for storage utilizes a "flat"
   * object literal such that looking up the hook utilizes the native object literal hash.
   */

  var STORAGE = {
    actions: {},
    filters: {}
  };
  /**
   * Removes the specified hook by resetting the value of it.
   *
   * @param type Type of hook, either 'actions' or 'filters'
   * @param hook The hook (namespace.identifier) to remove
   *
   * @private
   */

  function _removeHook(type, hook, callback, context) {
    var handlers, handler, i;

    if (!STORAGE[type][hook]) {
      return;
    }

    if (!callback) {
      STORAGE[type][hook] = [];
    } else {
      handlers = STORAGE[type][hook];

      if (!context) {
        for (i = handlers.length; i--;) {
          if (handlers[i].callback === callback) {
            handlers.splice(i, 1);
          }
        }
      } else {
        for (i = handlers.length; i--;) {
          handler = handlers[i];

          if (handler.callback === callback && handler.context === context) {
            handlers.splice(i, 1);
          }
        }
      }
    }
  }
  /**
   * Use an insert sort for keeping our hooks organized based on priority. This function is ridiculously faster
   * than bubble sort, etc: http://jsperf.com/javascript-sort
   *
   * @param hooks The custom array containing all of the appropriate hooks to perform an insert sort on.
   * @private
   */


  function _hookInsertSort(hooks) {
    var tmpHook, j, prevHook;

    for (var i = 1, len = hooks.length; i < len; i++) {
      tmpHook = hooks[i];
      j = i;

      while ((prevHook = hooks[j - 1]) && prevHook.priority > tmpHook.priority) {
        hooks[j] = hooks[j - 1];
        --j;
      }

      hooks[j] = tmpHook;
    }

    return hooks;
  }
  /**
   * Adds the hook to the appropriate storage container
   *
   * @param type 'actions' or 'filters'
   * @param hook The hook (namespace.identifier) to add to our event manager
   * @param callback The function that will be called when the hook is executed.
   * @param priority The priority of this hook. Must be an integer.
   * @param [context] A value to be used for this
   * @private
   */


  function _addHook(type, hook, callback, priority, context) {
    var hookObject = {
      callback: callback,
      priority: priority,
      context: context
    }; // Utilize 'prop itself' : http://jsperf.com/hasownproperty-vs-in-vs-undefined/19

    var hooks = STORAGE[type][hook];

    if (hooks) {
      // TEMP FIX BUG
      var hasSameCallback = false;
      jQuery.each(hooks, function () {
        if (this.callback === callback) {
          hasSameCallback = true;
          return false;
        }
      });

      if (hasSameCallback) {
        return;
      } // END TEMP FIX BUG


      hooks.push(hookObject);
      hooks = _hookInsertSort(hooks);
    } else {
      hooks = [hookObject];
    }

    STORAGE[type][hook] = hooks;
  }
  /**
   * Runs the specified hook. If it is an action, the value is not modified but if it is a filter, it is.
   *
   * @param type 'actions' or 'filters'
   * @param hook The hook ( namespace.identifier ) to be ran.
   * @param args Arguments to pass to the action/filter. If it's a filter, args is actually a single parameter.
   * @private
   */


  function _runHook(type, hook, args) {
    var handlers = STORAGE[type][hook],
        i,
        len;

    if (!handlers) {
      return 'filters' === type ? args[0] : false;
    }

    len = handlers.length;

    if ('filters' === type) {
      for (i = 0; i < len; i++) {
        args[0] = handlers[i].callback.apply(handlers[i].context, args);
      }
    } else {
      for (i = 0; i < len; i++) {
        handlers[i].callback.apply(handlers[i].context, args);
      }
    }

    return 'filters' === type ? args[0] : true;
  }
  /**
   * Adds an action to the event manager.
   *
   * @param action Must contain namespace.identifier
   * @param callback Must be a valid callback function before this action is added
   * @param [priority=10] Used to control when the function is executed in relation to other callbacks bound to the same hook
   * @param [context] Supply a value to be used for this
   */


  function addAction(action, callback, priority, context) {
    if ('string' === typeof action && 'function' === typeof callback) {
      priority = (0, _parseInt2.default)(priority || 10, 10);

      _addHook('actions', action, callback, priority, context);
    }

    return MethodsAvailable;
  }
  /**
   * Performs an action if it exists. You can pass as many arguments as you want to this function; the only rule is
   * that the first argument must always be the action.
   */


  function doAction()
  /* action, arg1, arg2, ... */
  {
    var args = slice.call(arguments);
    var action = args.shift();

    if ('string' === typeof action) {
      _runHook('actions', action, args);
    }

    return MethodsAvailable;
  }
  /**
   * Removes the specified action if it contains a namespace.identifier & exists.
   *
   * @param action The action to remove
   * @param [callback] Callback function to remove
   */


  function removeAction(action, callback) {
    if ('string' === typeof action) {
      _removeHook('actions', action, callback);
    }

    return MethodsAvailable;
  }
  /**
   * Adds a filter to the event manager.
   *
   * @param filter Must contain namespace.identifier
   * @param callback Must be a valid callback function before this action is added
   * @param [priority=10] Used to control when the function is executed in relation to other callbacks bound to the same hook
   * @param [context] Supply a value to be used for this
   */


  function addFilter(filter, callback, priority, context) {
    if ('string' === typeof filter && 'function' === typeof callback) {
      priority = (0, _parseInt2.default)(priority || 10, 10);

      _addHook('filters', filter, callback, priority, context);
    }

    return MethodsAvailable;
  }
  /**
   * Performs a filter if it exists. You should only ever pass 1 argument to be filtered. The only rule is that
   * the first argument must always be the filter.
   */


  function applyFilters()
  /* filter, filtered arg, arg2, ... */
  {
    var args = slice.call(arguments);
    var filter = args.shift();

    if ('string' === typeof filter) {
      return _runHook('filters', filter, args);
    }

    return MethodsAvailable;
  }
  /**
   * Removes the specified filter if it contains a namespace.identifier & exists.
   *
   * @param filter The action to remove
   * @param [callback] Callback function to remove
   */


  function removeFilter(filter, callback) {
    if ('string' === typeof filter) {
      _removeHook('filters', filter, callback);
    }

    return MethodsAvailable;
  }
  /**
   * Maintain a reference to the object scope so our public methods never get confusing.
   */


  MethodsAvailable = {
    removeFilter: removeFilter,
    applyFilters: applyFilters,
    addFilter: addFilter,
    removeAction: removeAction,
    doAction: doAction,
    addAction: addAction
  }; // return all of the publicly available methods

  return MethodsAvailable;
};

module.exports = EventManager;

/***/ }),
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
/* 408 */,
/* 409 */,
/* 410 */,
/* 411 */,
/* 412 */,
/* 413 */,
/* 414 */,
/* 415 */,
/* 416 */,
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
/* 630 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

var _stringify = _interopRequireDefault(__webpack_require__(206));

var _keys = _interopRequireDefault(__webpack_require__(25));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(3));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var _createSuper2 = _interopRequireDefault(__webpack_require__(5));

var _default = /*#__PURE__*/function (_elementorModules$Mod) {
  (0, _inherits2.default)(_default, _elementorModules$Mod);

  var _super = (0, _createSuper2.default)(_default);

  function _default() {
    (0, _classCallCheck2.default)(this, _default);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(_default, [{
    key: "get",
    value: function get(key, options) {
      options = options || {};
      var storage;

      try {
        storage = options.session ? sessionStorage : localStorage;
      } catch (e) {
        return key ? undefined : {};
      }

      var elementorStorage = storage.getItem('elementor');

      if (elementorStorage) {
        elementorStorage = JSON.parse(elementorStorage);
      } else {
        elementorStorage = {};
      }

      if (!elementorStorage.__expiration) {
        elementorStorage.__expiration = {};
      }

      var expiration = elementorStorage.__expiration;
      var expirationToCheck = [];

      if (key) {
        if (expiration[key]) {
          expirationToCheck = [key];
        }
      } else {
        expirationToCheck = (0, _keys.default)(expiration);
      }

      var entryExpired = false;
      expirationToCheck.forEach(function (expirationKey) {
        if (new Date(expiration[expirationKey]) < new Date()) {
          delete elementorStorage[expirationKey];
          delete expiration[expirationKey];
          entryExpired = true;
        }
      });

      if (entryExpired) {
        this.save(elementorStorage, options.session);
      }

      if (key) {
        return elementorStorage[key];
      }

      return elementorStorage;
    }
  }, {
    key: "set",
    value: function set(key, value, options) {
      options = options || {};
      var elementorStorage = this.get(null, options);
      elementorStorage[key] = value;

      if (options.lifetimeInSeconds) {
        var date = new Date();
        date.setTime(date.getTime() + options.lifetimeInSeconds * 1000);
        elementorStorage.__expiration[key] = date.getTime();
      }

      this.save(elementorStorage, options.session);
    }
  }, {
    key: "save",
    value: function save(object, session) {
      var storage;

      try {
        storage = session ? sessionStorage : localStorage;
      } catch (e) {
        return;
      }

      storage.setItem('elementor', (0, _stringify.default)(object));
    }
  }]);
  return _default;
}(elementorModules.Module);

exports.default = _default;

/***/ }),
/* 631 */,
/* 632 */,
/* 633 */,
/* 634 */,
/* 635 */,
/* 636 */,
/* 637 */,
/* 638 */,
/* 639 */,
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
/* 661 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

__webpack_require__(26);

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(3));

var _get2 = _interopRequireDefault(__webpack_require__(24));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(16));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var _createSuper2 = _interopRequireDefault(__webpack_require__(5));

var _default = /*#__PURE__*/function (_elementorModules$Vie) {
  (0, _inherits2.default)(_default, _elementorModules$Vie);

  var _super = (0, _createSuper2.default)(_default);

  function _default() {
    (0, _classCallCheck2.default)(this, _default);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(_default, [{
    key: "getDefaultSettings",
    value: function getDefaultSettings() {
      return {
        selectors: {
          elements: '.elementor-element',
          nestedDocumentElements: '.elementor .elementor-element'
        },
        classes: {
          editMode: 'elementor-edit-mode'
        }
      };
    }
  }, {
    key: "getDefaultElements",
    value: function getDefaultElements() {
      var selectors = this.getSettings('selectors');
      return {
        $elements: this.$element.find(selectors.elements).not(this.$element.find(selectors.nestedDocumentElements))
      };
    }
  }, {
    key: "getDocumentSettings",
    value: function getDocumentSettings(setting) {
      var elementSettings;

      if (this.isEdit) {
        elementSettings = {};
        var settings = elementor.settings.page.model;
        jQuery.each(settings.getActiveControls(), function (controlKey) {
          elementSettings[controlKey] = settings.attributes[controlKey];
        });
      } else {
        elementSettings = this.$element.data('elementor-settings') || {};
      }

      return this.getItems(elementSettings, setting);
    }
  }, {
    key: "runElementsHandlers",
    value: function runElementsHandlers() {
      this.elements.$elements.each(function (index, element) {
        return elementorFrontend.elementsHandler.runReadyTrigger(element);
      });
    }
  }, {
    key: "onInit",
    value: function onInit() {
      var _this = this;

      this.$element = this.getSettings('$element');
      (0, _get2.default)((0, _getPrototypeOf2.default)(_default.prototype), "onInit", this).call(this);
      this.isEdit = this.$element.hasClass(this.getSettings('classes.editMode'));

      if (this.isEdit) {
        elementor.on('document:loaded', function () {
          elementor.settings.page.model.on('change', _this.onSettingsChange.bind(_this));
        });
      } else {
        this.runElementsHandlers();
      }
    }
  }, {
    key: "onSettingsChange",
    value: function onSettingsChange() {}
  }]);
  return _default;
}(elementorModules.ViewModule);

exports.default = _default;

/***/ }),
/* 662 */
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

var _get3 = _interopRequireDefault(__webpack_require__(24));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(16));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var _createSuper2 = _interopRequireDefault(__webpack_require__(5));

var baseTabs = /*#__PURE__*/function (_elementorModules$fro) {
  (0, _inherits2.default)(baseTabs, _elementorModules$fro);

  var _super = (0, _createSuper2.default)(baseTabs);

  function baseTabs() {
    (0, _classCallCheck2.default)(this, baseTabs);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(baseTabs, [{
    key: "getDefaultSettings",
    value: function getDefaultSettings() {
      return {
        selectors: {
          tabTitle: '.elementor-tab-title',
          tabContent: '.elementor-tab-content'
        },
        classes: {
          active: 'elementor-active'
        },
        showTabFn: 'show',
        hideTabFn: 'hide',
        toggleSelf: true,
        hidePrevious: true,
        autoExpand: true
      };
    }
  }, {
    key: "getDefaultElements",
    value: function getDefaultElements() {
      var selectors = this.getSettings('selectors');
      return {
        $tabTitles: this.findElement(selectors.tabTitle),
        $tabContents: this.findElement(selectors.tabContent)
      };
    }
  }, {
    key: "activateDefaultTab",
    value: function activateDefaultTab() {
      var settings = this.getSettings();

      if (!settings.autoExpand || 'editor' === settings.autoExpand && !this.isEdit) {
        return;
      }

      var defaultActiveTab = this.getEditSettings('activeItemIndex') || 1,
          originalToggleMethods = {
        showTabFn: settings.showTabFn,
        hideTabFn: settings.hideTabFn
      }; // Toggle tabs without animation to avoid jumping

      this.setSettings({
        showTabFn: 'show',
        hideTabFn: 'hide'
      });
      this.changeActiveTab(defaultActiveTab); // Return back original toggle effects

      this.setSettings(originalToggleMethods);
    }
  }, {
    key: "deactivateActiveTab",
    value: function deactivateActiveTab(tabIndex) {
      var settings = this.getSettings(),
          activeClass = settings.classes.active,
          activeFilter = tabIndex ? '[data-tab="' + tabIndex + '"]' : '.' + activeClass,
          $activeTitle = this.elements.$tabTitles.filter(activeFilter),
          $activeContent = this.elements.$tabContents.filter(activeFilter);
      $activeTitle.add($activeContent).removeClass(activeClass);
      $activeContent[settings.hideTabFn]();
    }
  }, {
    key: "activateTab",
    value: function activateTab(tabIndex) {
      var settings = this.getSettings(),
          activeClass = settings.classes.active,
          $requestedTitle = this.elements.$tabTitles.filter('[data-tab="' + tabIndex + '"]'),
          $requestedContent = this.elements.$tabContents.filter('[data-tab="' + tabIndex + '"]');
      $requestedTitle.add($requestedContent).addClass(activeClass);
      $requestedContent[settings.showTabFn](function () {
        return elementorFrontend.elements.$window.trigger('resize');
      });
    }
  }, {
    key: "isActiveTab",
    value: function isActiveTab(tabIndex) {
      return this.elements.$tabTitles.filter('[data-tab="' + tabIndex + '"]').hasClass(this.getSettings('classes.active'));
    }
  }, {
    key: "bindEvents",
    value: function bindEvents() {
      var _this = this;

      this.elements.$tabTitles.on({
        keydown: function keydown(event) {
          if ('Enter' === event.key) {
            event.preventDefault();

            _this.changeActiveTab(event.currentTarget.getAttribute('data-tab'));
          }
        },
        click: function click(event) {
          event.preventDefault();

          _this.changeActiveTab(event.currentTarget.getAttribute('data-tab'));
        }
      });
    }
  }, {
    key: "onInit",
    value: function onInit() {
      var _get2;

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      (_get2 = (0, _get3.default)((0, _getPrototypeOf2.default)(baseTabs.prototype), "onInit", this)).call.apply(_get2, [this].concat(args));

      this.activateDefaultTab();
    }
  }, {
    key: "onEditSettingsChange",
    value: function onEditSettingsChange(propertyName) {
      if ('activeItemIndex' === propertyName) {
        this.activateDefaultTab();
      }
    }
  }, {
    key: "changeActiveTab",
    value: function changeActiveTab(tabIndex) {
      var isActiveTab = this.isActiveTab(tabIndex),
          settings = this.getSettings();

      if ((settings.toggleSelf || !isActiveTab) && settings.hidePrevious) {
        this.deactivateActiveTab();
      }

      if (!settings.hidePrevious && isActiveTab) {
        this.deactivateActiveTab(tabIndex);
      }

      if (!isActiveTab) {
        this.activateTab(tabIndex);
      }
    }
  }]);
  return baseTabs;
}(elementorModules.frontend.handlers.Base);

exports.default = baseTabs;

/***/ }),
/* 663 */,
/* 664 */,
/* 665 */,
/* 666 */,
/* 667 */,
/* 668 */,
/* 669 */,
/* 670 */,
/* 671 */,
/* 672 */,
/* 673 */,
/* 674 */,
/* 675 */,
/* 676 */,
/* 677 */,
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
/* 700 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

__webpack_require__(120);

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(3));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var _createSuper2 = _interopRequireDefault(__webpack_require__(5));

var BaseLoader = /*#__PURE__*/function (_elementorModules$Vie) {
  (0, _inherits2.default)(BaseLoader, _elementorModules$Vie);

  var _super = (0, _createSuper2.default)(BaseLoader);

  function BaseLoader() {
    (0, _classCallCheck2.default)(this, BaseLoader);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(BaseLoader, [{
    key: "getDefaultSettings",
    value: function getDefaultSettings() {
      return {
        isInserted: false,
        selectors: {
          firstScript: 'script:first'
        }
      };
    }
  }, {
    key: "getDefaultElements",
    value: function getDefaultElements() {
      return {
        $firstScript: jQuery(this.getSettings('selectors.firstScript'))
      };
    }
  }, {
    key: "insertAPI",
    value: function insertAPI() {
      this.elements.$firstScript.before(jQuery('<script>', {
        src: this.getApiURL()
      }));
      this.setSettings('isInserted', true);
    }
  }, {
    key: "getVideoIDFromURL",
    value: function getVideoIDFromURL(url) {
      var videoIDParts = url.match(this.getURLRegex());
      return videoIDParts && videoIDParts[1];
    }
  }, {
    key: "onApiReady",
    value: function onApiReady(callback) {
      var _this = this;

      if (!this.getSettings('isInserted')) {
        this.insertAPI();
      }

      if (this.isApiLoaded()) {
        callback(this.getApiObject());
      } else {
        // If not ready check again by timeout..
        setTimeout(function () {
          _this.onApiReady(callback);
        }, 350);
      }
    }
  }]);
  return BaseLoader;
}(elementorModules.ViewModule);

exports.default = BaseLoader;

/***/ }),
/* 701 */
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

var BackgroundSlideshow = /*#__PURE__*/function (_elementorModules$fro) {
  (0, _inherits2.default)(BackgroundSlideshow, _elementorModules$fro);

  var _super = (0, _createSuper2.default)(BackgroundSlideshow);

  function BackgroundSlideshow() {
    (0, _classCallCheck2.default)(this, BackgroundSlideshow);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(BackgroundSlideshow, [{
    key: "getDefaultSettings",
    value: function getDefaultSettings() {
      return {
        classes: {
          swiperContainer: 'elementor-background-slideshow swiper-container',
          swiperWrapper: 'swiper-wrapper',
          swiperSlide: 'elementor-background-slideshow__slide swiper-slide',
          slideBackground: 'elementor-background-slideshow__slide__image',
          kenBurns: 'elementor-ken-burns',
          kenBurnsActive: 'elementor-ken-burns--active',
          kenBurnsIn: 'elementor-ken-burns--in',
          kenBurnsOut: 'elementor-ken-burns--out'
        }
      };
    }
  }, {
    key: "getSwiperOptions",
    value: function getSwiperOptions() {
      var _this = this;

      var elementSettings = this.getElementSettings();
      var swiperOptions = {
        grabCursor: false,
        slidesPerView: 1,
        slidesPerGroup: 1,
        loop: 'yes' === elementSettings.background_slideshow_loop,
        speed: elementSettings.background_slideshow_transition_duration,
        autoplay: {
          delay: elementSettings.background_slideshow_slide_duration,
          stopOnLastSlide: !elementSettings.background_slideshow_loop
        },
        handleElementorBreakpoints: true,
        on: {
          slideChange: function slideChange() {
            if (elementSettings.background_slideshow_ken_burns) {
              _this.handleKenBurns();
            }
          }
        }
      };

      if ('yes' === elementSettings.background_slideshow_loop) {
        swiperOptions.loopedSlides = this.getSlidesCount();
      }

      switch (elementSettings.background_slideshow_slide_transition) {
        case 'fade':
          swiperOptions.effect = 'fade';
          swiperOptions.fadeEffect = {
            crossFade: true
          };
          break;

        case 'slide_down':
          swiperOptions.autoplay.reverseDirection = true;

        case 'slide_up':
          swiperOptions.direction = 'vertical';
          break;
      }

      return swiperOptions;
    }
  }, {
    key: "buildSwiperElements",
    value: function buildSwiperElements() {
      var _this2 = this;

      var classes = this.getSettings('classes'),
          elementSettings = this.getElementSettings(),
          direction = 'slide_left' === elementSettings.background_slideshow_slide_transition ? 'ltr' : 'rtl',
          $container = jQuery('<div>', {
        class: classes.swiperContainer,
        dir: direction
      }),
          $wrapper = jQuery('<div>', {
        class: classes.swiperWrapper
      }),
          kenBurnsActive = elementSettings.background_slideshow_ken_burns;
      var slideInnerClass = classes.slideBackground;

      if (kenBurnsActive) {
        slideInnerClass += ' ' + classes.kenBurns;
        var kenBurnsDirection = 'in' === elementSettings.background_slideshow_ken_burns_zoom_direction ? 'kenBurnsIn' : 'kenBurnsOut';
        slideInnerClass += ' ' + classes[kenBurnsDirection];
      }

      this.elements.$slides = jQuery();
      elementSettings.background_slideshow_gallery.forEach(function (slide) {
        var $slide = jQuery('<div>', {
          class: classes.swiperSlide
        }),
            $slidebg = jQuery('<div>', {
          class: slideInnerClass,
          style: 'background-image: url("' + slide.url + '");'
        });
        $slide.append($slidebg);
        $wrapper.append($slide);
        _this2.elements.$slides = _this2.elements.$slides.add($slide);
      });
      $container.append($wrapper);
      this.$element.prepend($container);
      this.elements.$backgroundSlideShowContainer = $container;
    }
  }, {
    key: "initSlider",
    value: function initSlider() {
      if (1 >= this.getSlidesCount()) {
        return;
      }

      var elementSettings = this.getElementSettings();
      this.swiper = new Swiper(this.elements.$backgroundSlideShowContainer, this.getSwiperOptions()); // Expose the swiper instance in the frontend

      this.elements.$backgroundSlideShowContainer.data('swiper', this.swiper);

      if (elementSettings.background_slideshow_ken_burns) {
        this.handleKenBurns();
      }
    }
  }, {
    key: "activate",
    value: function activate() {
      this.buildSwiperElements();
      this.initSlider();
    }
  }, {
    key: "deactivate",
    value: function deactivate() {
      if (this.swiper) {
        this.swiper.destroy();
        this.elements.$backgroundSlideShowContainer.remove();
      }
    }
  }, {
    key: "run",
    value: function run() {
      if ('slideshow' === this.getElementSettings('background_background')) {
        this.activate();
      } else {
        this.deactivate();
      }
    }
  }, {
    key: "onInit",
    value: function onInit() {
      (0, _get2.default)((0, _getPrototypeOf2.default)(BackgroundSlideshow.prototype), "onInit", this).call(this);

      if (this.getElementSettings('background_slideshow_gallery')) {
        this.run();
      }
    }
  }, {
    key: "onDestroy",
    value: function onDestroy() {
      (0, _get2.default)((0, _getPrototypeOf2.default)(BackgroundSlideshow.prototype), "onDestroy", this).call(this);
      this.deactivate();
    }
  }, {
    key: "onElementChange",
    value: function onElementChange(propertyName) {
      if ('background_background' === propertyName) {
        this.run();
      }
    }
  }]);
  return BackgroundSlideshow;
}(elementorModules.frontend.handlers.SwiperBase);

exports.default = BackgroundSlideshow;

/***/ }),
/* 702 */,
/* 703 */,
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
/* 790 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

__webpack_require__(26);

__webpack_require__(60);

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(3));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var _createSuper2 = _interopRequireDefault(__webpack_require__(5));

var _documentsManager = _interopRequireDefault(__webpack_require__(791));

var _storage = _interopRequireDefault(__webpack_require__(630));

var _environment = _interopRequireDefault(__webpack_require__(272));

var _youtubeLoader = _interopRequireDefault(__webpack_require__(792));

var _vimeoLoader = _interopRequireDefault(__webpack_require__(793));

var _urlActions = _interopRequireDefault(__webpack_require__(794));

var _swiper = _interopRequireDefault(__webpack_require__(795));

/* global elementorFrontendConfig */
var EventManager = __webpack_require__(388),
    ElementsHandler = __webpack_require__(796),
    AnchorsModule = __webpack_require__(813),
    LightboxModule = __webpack_require__(814);

var Frontend = /*#__PURE__*/function (_elementorModules$Vie) {
  (0, _inherits2.default)(Frontend, _elementorModules$Vie);

  var _super = (0, _createSuper2.default)(Frontend);

  function Frontend() {
    var _this;

    (0, _classCallCheck2.default)(this, Frontend);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    _this.config = elementorFrontendConfig;
    return _this;
  } // TODO: BC since 2.5.0


  (0, _createClass2.default)(Frontend, [{
    key: "getDefaultSettings",
    value: function getDefaultSettings() {
      return {
        selectors: {
          elementor: '.elementor',
          adminBar: '#wpadminbar'
        },
        classes: {
          ie: 'elementor-msie'
        }
      };
    }
  }, {
    key: "getDefaultElements",
    value: function getDefaultElements() {
      var defaultElements = {
        window: window,
        $window: jQuery(window),
        $document: jQuery(document),
        $head: jQuery(document.head),
        $body: jQuery(document.body),
        $deviceMode: jQuery('<span>', {
          id: 'elementor-device-mode',
          class: 'elementor-screen-only'
        })
      };
      defaultElements.$body.append(defaultElements.$deviceMode);
      return defaultElements;
    }
  }, {
    key: "bindEvents",
    value: function bindEvents() {
      var _this2 = this;

      this.elements.$window.on('resize', function () {
        return _this2.setDeviceModeData();
      });
    }
    /**
     * @deprecated 2.4.0 Use just `this.elements` instead
     */

  }, {
    key: "getElements",
    value: function getElements(elementName) {
      return this.getItems(this.elements, elementName);
    }
    /**
     * @deprecated 2.4.0 This method was never in use
     */

  }, {
    key: "getPageSettings",
    value: function getPageSettings(settingName) {
      var settingsObject = this.isEditMode() ? elementor.settings.page.model.attributes : this.config.settings.page;
      return this.getItems(settingsObject, settingName);
    }
  }, {
    key: "getGeneralSettings",
    value: function getGeneralSettings(settingName) {
      if (this.isEditMode()) {
        parent.elementorCommon.helpers.softDeprecated('getGeneralSettings', '3.0.0', 'getKitSettings and remove the `elementor_` prefix');
      }

      return this.getKitSettings("elementor_".concat(settingName));
    }
  }, {
    key: "getKitSettings",
    value: function getKitSettings(settingName) {
      // TODO: use Data API.
      return this.getItems(this.config.kit, settingName);
    }
  }, {
    key: "getCurrentDeviceMode",
    value: function getCurrentDeviceMode() {
      return getComputedStyle(this.elements.$deviceMode[0], ':after').content.replace(/"/g, '');
    }
  }, {
    key: "getDeviceSetting",
    value: function getDeviceSetting(deviceMode, settings, settingKey) {
      var devices = ['desktop', 'tablet', 'mobile'];
      var deviceIndex = devices.indexOf(deviceMode);

      while (deviceIndex > 0) {
        var currentDevice = devices[deviceIndex],
            fullSettingKey = settingKey + '_' + currentDevice,
            deviceValue = settings[fullSettingKey];

        if (deviceValue) {
          return deviceValue;
        }

        deviceIndex--;
      }

      return settings[settingKey];
    }
  }, {
    key: "getCurrentDeviceSetting",
    value: function getCurrentDeviceSetting(settings, settingKey) {
      return this.getDeviceSetting(elementorFrontend.getCurrentDeviceMode(), settings, settingKey);
    }
  }, {
    key: "isEditMode",
    value: function isEditMode() {
      return this.config.environmentMode.edit;
    }
  }, {
    key: "isWPPreviewMode",
    value: function isWPPreviewMode() {
      return this.config.environmentMode.wpPreview;
    }
  }, {
    key: "initDialogsManager",
    value: function initDialogsManager() {
      var dialogsManager;

      this.getDialogsManager = function () {
        if (!dialogsManager) {
          dialogsManager = new DialogsManager.Instance();
        }

        return dialogsManager;
      };
    }
  }, {
    key: "initOnReadyComponents",
    value: function initOnReadyComponents() {
      var _this3 = this;

      this.utils = {
        youtube: new _youtubeLoader.default(),
        vimeo: new _vimeoLoader.default(),
        anchors: new AnchorsModule(),
        lightbox: new LightboxModule(),
        urlActions: new _urlActions.default(),
        swiper: _swiper.default
      }; // TODO: BC since 2.4.0

      this.modules = {
        StretchElement: elementorModules.frontend.tools.StretchElement,
        Masonry: elementorModules.utils.Masonry
      };
      this.elementsHandler = new ElementsHandler(jQuery);

      if (this.isEditMode()) {
        elementor.once('document:loaded', function () {
          return _this3.onDocumentLoaded();
        });
      } else {
        this.onDocumentLoaded();
      }
    }
  }, {
    key: "initOnReadyElements",
    value: function initOnReadyElements() {
      this.elements.$wpAdminBar = this.elements.$document.find(this.getSettings('selectors.adminBar'));
    }
  }, {
    key: "addIeCompatibility",
    value: function addIeCompatibility() {
      var el = document.createElement('div'),
          supportsGrid = 'string' === typeof el.style.grid;

      if (!_environment.default.ie && supportsGrid) {
        return;
      }

      this.elements.$body.addClass(this.getSettings('classes.ie'));
      var msieCss = '<link rel="stylesheet" id="elementor-frontend-css-msie" href="' + this.config.urls.assets + 'css/frontend-msie.min.css?' + this.config.version + '" type="text/css" />';
      this.elements.$body.append(msieCss);
    }
  }, {
    key: "setDeviceModeData",
    value: function setDeviceModeData() {
      this.elements.$body.attr('data-elementor-device-mode', this.getCurrentDeviceMode());
    }
  }, {
    key: "addListenerOnce",
    value: function addListenerOnce(listenerID, event, callback, to) {
      if (!to) {
        to = this.elements.$window;
      }

      if (!this.isEditMode()) {
        to.on(event, callback);
        return;
      }

      this.removeListeners(listenerID, event, to);

      if (to instanceof jQuery) {
        var eventNS = event + '.' + listenerID;
        to.on(eventNS, callback);
      } else {
        to.on(event, callback, listenerID);
      }
    }
  }, {
    key: "removeListeners",
    value: function removeListeners(listenerID, event, callback, from) {
      if (!from) {
        from = this.elements.$window;
      }

      if (from instanceof jQuery) {
        var eventNS = event + '.' + listenerID;
        from.off(eventNS, callback);
      } else {
        from.off(event, callback, listenerID);
      }
    } // Based on underscore function

  }, {
    key: "debounce",
    value: function debounce(func, wait) {
      var timeout;
      return function () {
        var context = this,
            args = arguments;

        var later = function later() {
          timeout = null;
          func.apply(context, args);
        };

        var callNow = !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);

        if (callNow) {
          func.apply(context, args);
        }
      };
    }
  }, {
    key: "waypoint",
    value: function waypoint($element, callback, options) {
      var defaultOptions = {
        offset: '100%',
        triggerOnce: true
      };
      options = jQuery.extend(defaultOptions, options);

      var correctCallback = function correctCallback() {
        var element = this.element || this,
            result = callback.apply(element, arguments); // If is Waypoint new API and is frontend

        if (options.triggerOnce && this.destroy) {
          this.destroy();
        }

        return result;
      };

      return $element.elementorWaypoint(correctCallback, options);
    }
  }, {
    key: "muteMigrationTraces",
    value: function muteMigrationTraces() {
      jQuery.migrateMute = true;
      jQuery.migrateTrace = false;
    }
  }, {
    key: "init",
    value: function init() {
      this.hooks = new EventManager();
      this.storage = new _storage.default();
      this.addIeCompatibility();
      this.setDeviceModeData();
      this.initDialogsManager();

      if (this.isEditMode()) {
        this.muteMigrationTraces();
      } // Keep this line before `initOnReadyComponents` call


      this.elements.$window.trigger('elementor/frontend/init');
      this.initOnReadyElements();
      this.initOnReadyComponents();
    }
  }, {
    key: "onDocumentLoaded",
    value: function onDocumentLoaded() {
      this.documentsManager = new _documentsManager.default();
      this.trigger('components:init');
    }
  }, {
    key: "Module",
    get: function get() {
      if (this.isEditMode()) {
        parent.elementorCommon.helpers.hardDeprecated('elementorFrontend.Module', '2.5.0', 'elementorModules.frontend.handlers.Base');
      }

      return elementorModules.frontend.handlers.Base;
    }
  }]);
  return Frontend;
}(elementorModules.ViewModule);

window.elementorFrontend = new Frontend();

if (!elementorFrontend.isEditMode()) {
  jQuery(function () {
    return elementorFrontend.init();
  });
}

/***/ }),
/* 791 */
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

var _document = _interopRequireDefault(__webpack_require__(661));

var _default = /*#__PURE__*/function (_elementorModules$Vie) {
  (0, _inherits2.default)(_default, _elementorModules$Vie);

  var _super = (0, _createSuper2.default)(_default);

  function _default() {
    var _this;

    (0, _classCallCheck2.default)(this, _default);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    _this.documents = {};

    _this.initDocumentClasses();

    _this.attachDocumentsClasses();

    return _this;
  }

  (0, _createClass2.default)(_default, [{
    key: "getDefaultSettings",
    value: function getDefaultSettings() {
      return {
        selectors: {
          document: '.elementor'
        }
      };
    }
  }, {
    key: "getDefaultElements",
    value: function getDefaultElements() {
      var selectors = this.getSettings('selectors');
      return {
        $documents: jQuery(selectors.document)
      };
    }
  }, {
    key: "initDocumentClasses",
    value: function initDocumentClasses() {
      this.documentClasses = {
        base: _document.default
      };
      elementorFrontend.hooks.doAction('elementor/frontend/documents-manager/init-classes', this);
    }
  }, {
    key: "addDocumentClass",
    value: function addDocumentClass(documentType, documentClass) {
      this.documentClasses[documentType] = documentClass;
    }
  }, {
    key: "attachDocumentsClasses",
    value: function attachDocumentsClasses() {
      var _this2 = this;

      this.elements.$documents.each(function (index, document) {
        return _this2.attachDocumentClass(jQuery(document));
      });
    }
  }, {
    key: "attachDocumentClass",
    value: function attachDocumentClass($document) {
      var documentData = $document.data(),
          documentID = documentData.elementorId,
          documentType = documentData.elementorType,
          DocumentClass = this.documentClasses[documentType] || this.documentClasses.base;
      this.documents[documentID] = new DocumentClass({
        $element: $document,
        id: documentID
      });
    }
  }]);
  return _default;
}(elementorModules.ViewModule);

exports.default = _default;

/***/ }),
/* 792 */
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

var _baseLoader = _interopRequireDefault(__webpack_require__(700));

var YoutubeLoader = /*#__PURE__*/function (_BaseLoader) {
  (0, _inherits2.default)(YoutubeLoader, _BaseLoader);

  var _super = (0, _createSuper2.default)(YoutubeLoader);

  function YoutubeLoader() {
    (0, _classCallCheck2.default)(this, YoutubeLoader);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(YoutubeLoader, [{
    key: "getApiURL",
    value: function getApiURL() {
      return 'https://www.youtube.com/iframe_api';
    }
  }, {
    key: "getURLRegex",
    value: function getURLRegex() {
      return /^(?:https?:\/\/)?(?:www\.)?(?:m\.)?(?:youtu\.be\/|youtube\.com\/(?:(?:watch)?\?(?:.*&)?vi?=|(?:embed|v|vi|user)\/))([^?&"'>]+)/;
    }
  }, {
    key: "isApiLoaded",
    value: function isApiLoaded() {
      return window.YT && YT.loaded;
    }
  }, {
    key: "getApiObject",
    value: function getApiObject() {
      return YT;
    }
  }]);
  return YoutubeLoader;
}(_baseLoader.default);

exports.default = YoutubeLoader;

/***/ }),
/* 793 */
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

var _baseLoader = _interopRequireDefault(__webpack_require__(700));

var VimeoLoader = /*#__PURE__*/function (_BaseLoader) {
  (0, _inherits2.default)(VimeoLoader, _BaseLoader);

  var _super = (0, _createSuper2.default)(VimeoLoader);

  function VimeoLoader() {
    (0, _classCallCheck2.default)(this, VimeoLoader);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(VimeoLoader, [{
    key: "getApiURL",
    value: function getApiURL() {
      return 'https://player.vimeo.com/api/player.js';
    }
  }, {
    key: "getURLRegex",
    value: function getURLRegex() {
      return /^(?:https?:\/\/)?(?:www|player\.)?(?:vimeo\.com\/)?(?:video\/|external\/)?(\d+)([^.?&#"'>]?)/;
    }
  }, {
    key: "isApiLoaded",
    value: function isApiLoaded() {
      return window.Vimeo;
    }
  }, {
    key: "getApiObject",
    value: function getApiObject() {
      return Vimeo;
    }
  }]);
  return VimeoLoader;
}(_baseLoader.default);

exports.default = VimeoLoader;

/***/ }),
/* 794 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

var _stringify = _interopRequireDefault(__webpack_require__(206));

__webpack_require__(120);

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(3));

var _get2 = _interopRequireDefault(__webpack_require__(24));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(16));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var _createSuper2 = _interopRequireDefault(__webpack_require__(5));

var _default = /*#__PURE__*/function (_elementorModules$Vie) {
  (0, _inherits2.default)(_default, _elementorModules$Vie);

  var _super = (0, _createSuper2.default)(_default);

  function _default() {
    (0, _classCallCheck2.default)(this, _default);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(_default, [{
    key: "getDefaultSettings",
    value: function getDefaultSettings() {
      return {
        selectors: {
          links: 'a[href^="%23elementor-action"], a[href^="#elementor-action"]'
        }
      };
    }
  }, {
    key: "bindEvents",
    value: function bindEvents() {
      elementorFrontend.elements.$document.on('click', this.getSettings('selectors.links'), this.runLinkAction.bind(this));
    }
  }, {
    key: "initActions",
    value: function initActions() {
      this.actions = {
        lightbox: function lightbox(settings) {
          if (settings.id) {
            elementorFrontend.utils.lightbox.openSlideshow(settings.id, settings.url);
          } else {
            elementorFrontend.utils.lightbox.showModal(settings);
          }
        }
      };
    }
  }, {
    key: "addAction",
    value: function addAction(name, callback) {
      this.actions[name] = callback;
    }
  }, {
    key: "runAction",
    value: function runAction(url) {
      url = decodeURIComponent(url);
      var actionMatch = url.match(/action=(.+?)&/),
          settingsMatch = url.match(/settings=(.+)/);

      if (!actionMatch) {
        return;
      }

      var action = this.actions[actionMatch[1]];

      if (!action) {
        return;
      }

      var settings = {};

      if (settingsMatch) {
        settings = JSON.parse(atob(settingsMatch[1]));
      }

      for (var _len = arguments.length, restArgs = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        restArgs[_key - 1] = arguments[_key];
      }

      action.apply(void 0, [settings].concat(restArgs));
    }
  }, {
    key: "runLinkAction",
    value: function runLinkAction(event) {
      event.preventDefault();
      this.runAction(jQuery(event.currentTarget).attr('href'), event);
    }
  }, {
    key: "runHashAction",
    value: function runHashAction() {
      if (location.hash) {
        this.runAction(location.hash);
      }
    }
  }, {
    key: "createActionHash",
    value: function createActionHash(action, settings) {
      // We need to encode the hash tag (#) here, in order to support share links for a variety of providers
      return encodeURIComponent("#elementor-action:action=".concat(action, "&settings=").concat(btoa((0, _stringify.default)(settings))));
    }
  }, {
    key: "onInit",
    value: function onInit() {
      (0, _get2.default)((0, _getPrototypeOf2.default)(_default.prototype), "onInit", this).call(this);
      this.initActions();
      elementorFrontend.on('components:init', this.runHashAction.bind(this));
    }
  }]);
  return _default;
}(elementorModules.ViewModule);

exports.default = _default;

/***/ }),
/* 795 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

__webpack_require__(302);

var _parseInt2 = _interopRequireDefault(__webpack_require__(213));

var _keys = _interopRequireDefault(__webpack_require__(25));

var _values = _interopRequireDefault(__webpack_require__(56));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(3));

var originalSwiper = window.Swiper;

var Swiper = /*#__PURE__*/function () {
  function Swiper(container, config) {
    (0, _classCallCheck2.default)(this, Swiper);
    this.config = config;

    if (this.config.breakpoints) {
      // The config is passed as a param to allow adjustConfig to be called outside of this wrapper
      this.config = this.adjustConfig(config);
    }

    originalSwiper.prototype.adjustConfig = this.adjustConfig;
    return new originalSwiper(container, this.config);
  } // Backwards compatibility for Elementor Pro <2.9.0 (old Swiper version - <5.0.0)
  // In Swiper 5.0.0 and up, breakpoints changed from acting as max-width to acting as min-width


  (0, _createClass2.default)(Swiper, [{
    key: "adjustConfig",
    value: function adjustConfig(config) {
      // Only reverse the breakpoints if the handle param has been defined
      if (!config.handleElementorBreakpoints) {
        return config;
      }

      var elementorBreakpoints = elementorFrontend.config.breakpoints,
          elementorBreakpointValues = (0, _values.default)(elementorBreakpoints);
      (0, _keys.default)(config.breakpoints).forEach(function (configBPKey) {
        var configBPKeyInt = (0, _parseInt2.default)(configBPKey);
        var breakpointToUpdate; // The `configBPKeyInt + 1` is a BC Fix for Elementor Pro Carousels from 2.8.0-2.8.3 used with Elementor >= 2.9.0

        if (configBPKeyInt === elementorBreakpoints.md || configBPKeyInt + 1 === elementorBreakpoints.md) {
          // This handles the mobile breakpoint. Elementor's default sm breakpoint is never actually used,
          // so the mobile breakpoint (md) needs to be handled separately and set to the 0 breakpoint (xs)
          breakpointToUpdate = elementorBreakpoints.xs;
        } else {
          // Find the index of the current config breakpoint in the Elementor Breakpoints array
          var currentBPIndexInElementorBPs = elementorBreakpointValues.findIndex(function (elementorBP) {
            // BC Fix for Elementor Pro Carousels from 2.8.0-2.8.3 used with Elementor >= 2.9.0
            return configBPKeyInt === elementorBP || configBPKeyInt + 1 === elementorBP;
          }); // For all other Swiper config breakpoints, move them one breakpoint down on the breakpoint list,
          // according to the array of Elementor's global breakpoints

          breakpointToUpdate = elementorBreakpointValues[currentBPIndexInElementorBPs - 1];
        }

        config.breakpoints[breakpointToUpdate] = config.breakpoints[configBPKey]; // Then reset the settings in the original breakpoint key to the default values

        config.breakpoints[configBPKey] = {
          slidesPerView: config.slidesPerView,
          slidesPerGroup: config.slidesPerGroup ? config.slidesPerGroup : 1
        };
      });
      return config;
    }
  }]);
  return Swiper;
}();

exports.default = Swiper;
window.Swiper = Swiper;

/***/ }),
/* 796 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _accordion = _interopRequireDefault(__webpack_require__(797));

var _alert = _interopRequireDefault(__webpack_require__(798));

var _counter = _interopRequireDefault(__webpack_require__(799));

var _progress = _interopRequireDefault(__webpack_require__(800));

var _tabs = _interopRequireDefault(__webpack_require__(801));

var _toggle = _interopRequireDefault(__webpack_require__(802));

var _video = _interopRequireDefault(__webpack_require__(803));

var _imageCarousel = _interopRequireDefault(__webpack_require__(804));

var _textEditor = _interopRequireDefault(__webpack_require__(805));

var _section = _interopRequireDefault(__webpack_require__(806));

var _column = _interopRequireDefault(__webpack_require__(811));

var _global = _interopRequireDefault(__webpack_require__(812));

module.exports = function ($) {
  var self = this; // element-type.skin-type

  var handlers = {
    // Elements
    section: _section.default,
    column: _column.default,
    // Widgets
    'accordion.default': _accordion.default,
    'alert.default': _alert.default,
    'counter.default': _counter.default,
    'progress.default': _progress.default,
    'tabs.default': _tabs.default,
    'toggle.default': _toggle.default,
    'video.default': _video.default,
    'image-carousel.default': _imageCarousel.default,
    'text-editor.default': _textEditor.default
  };
  var handlersInstances = {};

  var addGlobalHandlers = function addGlobalHandlers() {
    elementorFrontend.hooks.addAction('frontend/element_ready/global', _global.default);
  };

  var addElementsHandlers = function addElementsHandlers() {
    $.each(handlers, function (elementName, funcCallback) {
      elementorFrontend.hooks.addAction('frontend/element_ready/' + elementName, funcCallback);
    });
  };

  var init = function init() {
    self.initHandlers();
  };

  this.initHandlers = function () {
    addGlobalHandlers();
    addElementsHandlers();
  };

  this.addHandler = function (HandlerClass, options) {
    var elementID = options.$element.data('model-cid');
    var handlerID; // If element is in edit mode

    if (elementID) {
      handlerID = HandlerClass.prototype.getConstructorID();

      if (!handlersInstances[elementID]) {
        handlersInstances[elementID] = {};
      }

      var oldHandler = handlersInstances[elementID][handlerID];

      if (oldHandler) {
        oldHandler.onDestroy();
      }
    }

    var newHandler = new HandlerClass(options);

    if (elementID) {
      handlersInstances[elementID][handlerID] = newHandler;
    }
  };

  this.getHandlers = function (handlerName) {
    if (handlerName) {
      return handlers[handlerName];
    }

    return handlers;
  };

  this.runReadyTrigger = function (scope) {
    if (elementorFrontend.config.is_static) {
      return;
    } // Initializing the `$scope` as frontend jQuery instance


    var $scope = jQuery(scope),
        elementType = $scope.attr('data-element_type');

    if (!elementType) {
      return;
    }

    elementorFrontend.hooks.doAction('frontend/element_ready/global', $scope, $);
    elementorFrontend.hooks.doAction('frontend/element_ready/' + elementType, $scope, $);

    if ('widget' === elementType) {
      elementorFrontend.hooks.doAction('frontend/element_ready/' + $scope.attr('data-widget_type'), $scope, $);
    }
  };

  init();
};

/***/ }),
/* 797 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

var _baseTabs = _interopRequireDefault(__webpack_require__(662));

var _default = function _default($scope) {
  elementorFrontend.elementsHandler.addHandler(_baseTabs.default, {
    $element: $scope,
    showTabFn: 'slideDown',
    hideTabFn: 'slideUp'
  });
};

exports.default = _default;

/***/ }),
/* 798 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

__webpack_require__(26);

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(3));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var _createSuper2 = _interopRequireDefault(__webpack_require__(5));

var Alert = /*#__PURE__*/function (_elementorModules$fro) {
  (0, _inherits2.default)(Alert, _elementorModules$fro);

  var _super = (0, _createSuper2.default)(Alert);

  function Alert() {
    (0, _classCallCheck2.default)(this, Alert);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(Alert, [{
    key: "getDefaultSettings",
    value: function getDefaultSettings() {
      return {
        selectors: {
          dismissButton: '.elementor-alert-dismiss'
        }
      };
    }
  }, {
    key: "getDefaultElements",
    value: function getDefaultElements() {
      var selectors = this.getSettings('selectors');
      return {
        $dismissButton: this.$element.find(selectors.dismissButton)
      };
    }
  }, {
    key: "bindEvents",
    value: function bindEvents() {
      this.elements.$dismissButton.on('click', this.onDismissButtonClick.bind(this));
    }
  }, {
    key: "onDismissButtonClick",
    value: function onDismissButtonClick() {
      this.$element.fadeOut();
    }
  }]);
  return Alert;
}(elementorModules.frontend.handlers.Base);

var _default = function _default($scope) {
  elementorFrontend.elementsHandler.addHandler(Alert, {
    $element: $scope
  });
};

exports.default = _default;

/***/ }),
/* 799 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

__webpack_require__(190);

__webpack_require__(79);

__webpack_require__(120);

__webpack_require__(26);

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(3));

var _get2 = _interopRequireDefault(__webpack_require__(24));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(16));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var _createSuper2 = _interopRequireDefault(__webpack_require__(5));

var Counter = /*#__PURE__*/function (_elementorModules$fro) {
  (0, _inherits2.default)(Counter, _elementorModules$fro);

  var _super = (0, _createSuper2.default)(Counter);

  function Counter() {
    (0, _classCallCheck2.default)(this, Counter);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(Counter, [{
    key: "getDefaultSettings",
    value: function getDefaultSettings() {
      return {
        selectors: {
          counterNumber: '.elementor-counter-number'
        }
      };
    }
  }, {
    key: "getDefaultElements",
    value: function getDefaultElements() {
      var selectors = this.getSettings('selectors');
      return {
        $counterNumber: this.$element.find(selectors.counterNumber)
      };
    }
  }, {
    key: "onInit",
    value: function onInit() {
      var _this = this;

      (0, _get2.default)((0, _getPrototypeOf2.default)(Counter.prototype), "onInit", this).call(this);
      elementorFrontend.waypoint(this.elements.$counterNumber, function () {
        var data = _this.elements.$counterNumber.data(),
            decimalDigits = data.toValue.toString().match(/\.(.*)/);

        if (decimalDigits) {
          data.rounding = decimalDigits[1].length;
        }

        _this.elements.$counterNumber.numerator(data);
      });
    }
  }]);
  return Counter;
}(elementorModules.frontend.handlers.Base);

var _default = function _default($scope) {
  elementorFrontend.elementsHandler.addHandler(Counter, {
    $element: $scope
  });
};

exports.default = _default;

/***/ }),
/* 800 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

__webpack_require__(26);

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(3));

var _get2 = _interopRequireDefault(__webpack_require__(24));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(16));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var _createSuper2 = _interopRequireDefault(__webpack_require__(5));

var Progress = /*#__PURE__*/function (_elementorModules$fro) {
  (0, _inherits2.default)(Progress, _elementorModules$fro);

  var _super = (0, _createSuper2.default)(Progress);

  function Progress() {
    (0, _classCallCheck2.default)(this, Progress);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(Progress, [{
    key: "getDefaultSettings",
    value: function getDefaultSettings() {
      return {
        selectors: {
          progressNumber: '.elementor-progress-bar'
        }
      };
    }
  }, {
    key: "getDefaultElements",
    value: function getDefaultElements() {
      var selectors = this.getSettings('selectors');
      return {
        $progressNumber: this.$element.find(selectors.progressNumber)
      };
    }
  }, {
    key: "onInit",
    value: function onInit() {
      var _this = this;

      (0, _get2.default)((0, _getPrototypeOf2.default)(Progress.prototype), "onInit", this).call(this);
      elementorFrontend.waypoint(this.elements.$progressNumber, function () {
        var $progressbar = _this.elements.$progressNumber;
        $progressbar.css('width', $progressbar.data('max') + '%');
      });
    }
  }]);
  return Progress;
}(elementorModules.frontend.handlers.Base);

var _default = function _default($scope) {
  elementorFrontend.elementsHandler.addHandler(Progress, {
    $element: $scope
  });
};

exports.default = _default;

/***/ }),
/* 801 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

var _baseTabs = _interopRequireDefault(__webpack_require__(662));

var _default = function _default($scope) {
  elementorFrontend.elementsHandler.addHandler(_baseTabs.default, {
    $element: $scope,
    toggleSelf: false
  });
};

exports.default = _default;

/***/ }),
/* 802 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

var _baseTabs = _interopRequireDefault(__webpack_require__(662));

var _default = function _default($scope) {
  elementorFrontend.elementsHandler.addHandler(_baseTabs.default, {
    $element: $scope,
    showTabFn: 'slideDown',
    hideTabFn: 'slideUp',
    hidePrevious: false,
    autoExpand: 'editor'
  });
};

exports.default = _default;

/***/ }),
/* 803 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

__webpack_require__(139);

__webpack_require__(182);

__webpack_require__(60);

__webpack_require__(26);

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(3));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var _createSuper2 = _interopRequireDefault(__webpack_require__(5));

var VideoModule = /*#__PURE__*/function (_elementorModules$fro) {
  (0, _inherits2.default)(VideoModule, _elementorModules$fro);

  var _super = (0, _createSuper2.default)(VideoModule);

  function VideoModule() {
    (0, _classCallCheck2.default)(this, VideoModule);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(VideoModule, [{
    key: "getDefaultSettings",
    value: function getDefaultSettings() {
      return {
        selectors: {
          imageOverlay: '.elementor-custom-embed-image-overlay',
          video: '.elementor-video',
          videoIframe: '.elementor-video-iframe'
        }
      };
    }
  }, {
    key: "getDefaultElements",
    value: function getDefaultElements() {
      var selectors = this.getSettings('selectors');
      return {
        $imageOverlay: this.$element.find(selectors.imageOverlay),
        $video: this.$element.find(selectors.video),
        $videoIframe: this.$element.find(selectors.videoIframe)
      };
    }
  }, {
    key: "getLightBox",
    value: function getLightBox() {
      return elementorFrontend.utils.lightbox;
    }
  }, {
    key: "handleVideo",
    value: function handleVideo() {
      if (!this.getElementSettings('lightbox')) {
        this.elements.$imageOverlay.remove();
        this.playVideo();
      }
    }
  }, {
    key: "playVideo",
    value: function playVideo() {
      if (this.elements.$video.length) {
        this.elements.$video[0].play();
        return;
      }

      var $videoIframe = this.elements.$videoIframe,
          lazyLoad = $videoIframe.data('lazy-load');

      if (lazyLoad) {
        $videoIframe.attr('src', lazyLoad);
      }

      var newSourceUrl = $videoIframe[0].src.replace('&autoplay=0', '');
      $videoIframe[0].src = newSourceUrl + '&autoplay=1';

      if ($videoIframe[0].src.includes('vimeo.com')) {
        var videoSrc = $videoIframe[0].src,
            timeMatch = /#t=[^&]*/.exec(videoSrc); // Param '#t=' must be last in the URL

        $videoIframe[0].src = videoSrc.slice(0, timeMatch.index) + videoSrc.slice(timeMatch.index + timeMatch[0].length) + timeMatch[0];
      }
    }
  }, {
    key: "animateVideo",
    value: function animateVideo() {
      this.getLightBox().setEntranceAnimation(this.getCurrentDeviceSetting('lightbox_content_animation'));
    }
  }, {
    key: "handleAspectRatio",
    value: function handleAspectRatio() {
      this.getLightBox().setVideoAspectRatio(this.getElementSettings('aspect_ratio'));
    }
  }, {
    key: "bindEvents",
    value: function bindEvents() {
      this.elements.$imageOverlay.on('click', this.handleVideo.bind(this));
    }
  }, {
    key: "onElementChange",
    value: function onElementChange(propertyName) {
      if (0 === propertyName.indexOf('lightbox_content_animation')) {
        this.animateVideo();
        return;
      }

      var isLightBoxEnabled = this.getElementSettings('lightbox');

      if ('lightbox' === propertyName && !isLightBoxEnabled) {
        this.getLightBox().getModal().hide();
        return;
      }

      if ('aspect_ratio' === propertyName && isLightBoxEnabled) {
        this.handleAspectRatio();
      }
    }
  }]);
  return VideoModule;
}(elementorModules.frontend.handlers.Base);

var _default = function _default($scope) {
  elementorFrontend.elementsHandler.addHandler(VideoModule, {
    $element: $scope
  });
};

exports.default = _default;

/***/ }),
/* 804 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

__webpack_require__(26);

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(3));

var _get3 = _interopRequireDefault(__webpack_require__(24));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(16));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var _createSuper2 = _interopRequireDefault(__webpack_require__(5));

var ImageCarouselHandler = /*#__PURE__*/function (_elementorModules$fro) {
  (0, _inherits2.default)(ImageCarouselHandler, _elementorModules$fro);

  var _super = (0, _createSuper2.default)(ImageCarouselHandler);

  function ImageCarouselHandler() {
    (0, _classCallCheck2.default)(this, ImageCarouselHandler);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(ImageCarouselHandler, [{
    key: "getDefaultSettings",
    value: function getDefaultSettings() {
      return {
        selectors: {
          carousel: '.elementor-image-carousel-wrapper',
          slideContent: '.swiper-slide'
        }
      };
    }
  }, {
    key: "getDefaultElements",
    value: function getDefaultElements() {
      var selectors = this.getSettings('selectors');
      var elements = {
        $swiperContainer: this.$element.find(selectors.carousel)
      };
      elements.$slides = elements.$swiperContainer.find(selectors.slideContent);
      return elements;
    }
  }, {
    key: "getSwiperSettings",
    value: function getSwiperSettings() {
      var elementSettings = this.getElementSettings(),
          slidesToShow = +elementSettings.slides_to_show || 3,
          isSingleSlide = 1 === slidesToShow,
          defaultLGDevicesSlidesCount = isSingleSlide ? 1 : 2,
          elementorBreakpoints = elementorFrontend.config.breakpoints;
      var swiperOptions = {
        slidesPerView: slidesToShow,
        loop: 'yes' === elementSettings.infinite,
        speed: elementSettings.speed,
        handleElementorBreakpoints: true
      };
      swiperOptions.breakpoints = {};
      swiperOptions.breakpoints[elementorBreakpoints.md] = {
        slidesPerView: +elementSettings.slides_to_show_mobile || 1,
        slidesPerGroup: +elementSettings.slides_to_scroll_mobile || 1
      };
      swiperOptions.breakpoints[elementorBreakpoints.lg] = {
        slidesPerView: +elementSettings.slides_to_show_tablet || defaultLGDevicesSlidesCount,
        slidesPerGroup: +elementSettings.slides_to_scroll_tablet || 1
      };

      if (!this.isEdit && 'yes' === elementSettings.autoplay) {
        swiperOptions.autoplay = {
          delay: elementSettings.autoplay_speed,
          disableOnInteraction: 'yes' === elementSettings.pause_on_interaction
        };
      }

      if (isSingleSlide) {
        swiperOptions.effect = elementSettings.effect;

        if ('fade' === elementSettings.effect) {
          swiperOptions.fadeEffect = {
            crossFade: true
          };
        }
      } else {
        swiperOptions.slidesPerGroup = +elementSettings.slides_to_scroll || 1;
      }

      if (elementSettings.image_spacing_custom) {
        swiperOptions.spaceBetween = elementSettings.image_spacing_custom.size;
      }

      var showArrows = 'arrows' === elementSettings.navigation || 'both' === elementSettings.navigation,
          showDots = 'dots' === elementSettings.navigation || 'both' === elementSettings.navigation;

      if (showArrows) {
        swiperOptions.navigation = {
          prevEl: '.elementor-swiper-button-prev',
          nextEl: '.elementor-swiper-button-next'
        };
      }

      if (showDots) {
        swiperOptions.pagination = {
          el: '.swiper-pagination',
          type: 'bullets',
          clickable: true
        };
      }

      return swiperOptions;
    }
  }, {
    key: "onInit",
    value: function onInit() {
      var _get2;

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      (_get2 = (0, _get3.default)((0, _getPrototypeOf2.default)(ImageCarouselHandler.prototype), "onInit", this)).call.apply(_get2, [this].concat(args));

      var elementSettings = this.getElementSettings();

      if (!this.elements.$swiperContainer.length || 2 > this.elements.$slides.length) {
        return;
      }

      this.swiper = new Swiper(this.elements.$swiperContainer, this.getSwiperSettings()); // Expose the swiper instance in the frontend

      this.elements.$swiperContainer.data('swiper', this.swiper);

      if ('yes' === elementSettings.pause_on_hover) {
        this.togglePauseOnHover(true);
      }
    }
  }, {
    key: "updateSwiperOption",
    value: function updateSwiperOption(propertyName) {
      var elementSettings = this.getElementSettings(),
          newSettingValue = elementSettings[propertyName],
          changeableProperties = this.getChangeableProperties();
      var propertyToUpdate = changeableProperties[propertyName],
          valueToUpdate = newSettingValue; // Handle special cases where the value to update is not the value that the Swiper library accepts

      switch (propertyName) {
        case 'image_spacing_custom':
          valueToUpdate = newSettingValue.size || 0;
          break;

        case 'autoplay':
          if (newSettingValue) {
            valueToUpdate = {
              delay: elementSettings.autoplay_speed,
              disableOnInteraction: 'yes' === elementSettings.pause_on_interaction
            };
          } else {
            valueToUpdate = false;
          }

          break;

        case 'autoplay_speed':
          propertyToUpdate = 'autoplay';
          valueToUpdate = {
            delay: newSettingValue,
            disableOnInteraction: 'yes' === elementSettings.pause_on_interaction
          };
          break;

        case 'pause_on_hover':
          this.togglePauseOnHover('yes' === newSettingValue);
          break;

        case 'pause_on_interaction':
          valueToUpdate = 'yes' === newSettingValue;
          break;
      } // 'pause_on_hover' is implemented by the handler with event listeners, not the Swiper library


      if ('pause_on_hover' !== propertyName) {
        this.swiper.params[propertyToUpdate] = valueToUpdate;
      }

      this.swiper.update();
    }
  }, {
    key: "getChangeableProperties",
    value: function getChangeableProperties() {
      return {
        autoplay: 'autoplay',
        pause_on_hover: 'pauseOnHover',
        pause_on_interaction: 'disableOnInteraction',
        autoplay_speed: 'delay',
        speed: 'speed',
        image_spacing_custom: 'spaceBetween'
      };
    }
  }, {
    key: "onElementChange",
    value: function onElementChange(propertyName) {
      var changeableProperties = this.getChangeableProperties();

      if (changeableProperties.propertyName) {
        this.updateSwiperOption(propertyName);
      }
    }
  }, {
    key: "onEditSettingsChange",
    value: function onEditSettingsChange(propertyName) {
      if ('activeItemIndex' === propertyName) {
        this.swiper.slideToLoop(this.getEditSettings('activeItemIndex') - 1);
      }
    }
  }]);
  return ImageCarouselHandler;
}(elementorModules.frontend.handlers.SwiperBase);

var _default = function _default($scope) {
  elementorFrontend.elementsHandler.addHandler(ImageCarouselHandler, {
    $element: $scope
  });
};

exports.default = _default;

/***/ }),
/* 805 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

__webpack_require__(120);

__webpack_require__(60);

__webpack_require__(26);

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(3));

var _get3 = _interopRequireDefault(__webpack_require__(24));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(16));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var _createSuper2 = _interopRequireDefault(__webpack_require__(5));

var TextEditor = /*#__PURE__*/function (_elementorModules$fro) {
  (0, _inherits2.default)(TextEditor, _elementorModules$fro);

  var _super = (0, _createSuper2.default)(TextEditor);

  function TextEditor() {
    (0, _classCallCheck2.default)(this, TextEditor);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(TextEditor, [{
    key: "getDefaultSettings",
    value: function getDefaultSettings() {
      return {
        selectors: {
          paragraph: 'p:first'
        },
        classes: {
          dropCap: 'elementor-drop-cap',
          dropCapLetter: 'elementor-drop-cap-letter'
        }
      };
    }
  }, {
    key: "getDefaultElements",
    value: function getDefaultElements() {
      var selectors = this.getSettings('selectors'),
          classes = this.getSettings('classes'),
          $dropCap = jQuery('<span>', {
        class: classes.dropCap
      }),
          $dropCapLetter = jQuery('<span>', {
        class: classes.dropCapLetter
      });
      $dropCap.append($dropCapLetter);
      return {
        $paragraph: this.$element.find(selectors.paragraph),
        $dropCap: $dropCap,
        $dropCapLetter: $dropCapLetter
      };
    }
  }, {
    key: "wrapDropCap",
    value: function wrapDropCap() {
      var isDropCapEnabled = this.getElementSettings('drop_cap');

      if (!isDropCapEnabled) {
        // If there is an old drop cap inside the paragraph
        if (this.dropCapLetter) {
          this.elements.$dropCap.remove();
          this.elements.$paragraph.prepend(this.dropCapLetter);
          this.dropCapLetter = '';
        }

        return;
      }

      var $paragraph = this.elements.$paragraph;

      if (!$paragraph.length) {
        return;
      }

      var paragraphContent = $paragraph.html().replace(/&nbsp;/g, ' '),
          firstLetterMatch = paragraphContent.match(/^ *([^ ] ?)/);

      if (!firstLetterMatch) {
        return;
      }

      var firstLetter = firstLetterMatch[1],
          trimmedFirstLetter = firstLetter.trim(); // Don't apply drop cap when the content starting with an HTML tag

      if ('<' === trimmedFirstLetter) {
        return;
      }

      this.dropCapLetter = firstLetter;
      this.elements.$dropCapLetter.text(trimmedFirstLetter);
      var restoredParagraphContent = paragraphContent.slice(firstLetter.length).replace(/^ */, function (match) {
        return new Array(match.length + 1).join('&nbsp;');
      });
      $paragraph.html(restoredParagraphContent).prepend(this.elements.$dropCap);
    }
  }, {
    key: "onInit",
    value: function onInit() {
      var _get2;

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      (_get2 = (0, _get3.default)((0, _getPrototypeOf2.default)(TextEditor.prototype), "onInit", this)).call.apply(_get2, [this].concat(args));

      this.wrapDropCap();
    }
  }, {
    key: "onElementChange",
    value: function onElementChange(propertyName) {
      if ('drop_cap' === propertyName) {
        this.wrapDropCap();
      }
    }
  }]);
  return TextEditor;
}(elementorModules.frontend.handlers.Base);

var _default = function _default($scope) {
  elementorFrontend.elementsHandler.addHandler(TextEditor, {
    $element: $scope
  });
};

exports.default = _default;

/***/ }),
/* 806 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

var _backgroundSlideshow = _interopRequireDefault(__webpack_require__(701));

var _backgroundVideo = _interopRequireDefault(__webpack_require__(807));

var _handlesPosition = _interopRequireDefault(__webpack_require__(808));

var _stretchedSection = _interopRequireDefault(__webpack_require__(809));

var _shapes = _interopRequireDefault(__webpack_require__(810));

var _default = function _default($scope) {
  if (elementorFrontend.isEditMode() || $scope.hasClass('elementor-section-stretched')) {
    elementorFrontend.elementsHandler.addHandler(_stretchedSection.default, {
      $element: $scope
    });
  }

  if (elementorFrontend.isEditMode()) {
    elementorFrontend.elementsHandler.addHandler(_shapes.default, {
      $element: $scope
    });
    elementorFrontend.elementsHandler.addHandler(_handlesPosition.default, {
      $element: $scope
    });
  }

  elementorFrontend.elementsHandler.addHandler(_backgroundVideo.default, {
    $element: $scope
  });
  elementorFrontend.elementsHandler.addHandler(_backgroundSlideshow.default, {
    $element: $scope
  });
};

exports.default = _default;

/***/ }),
/* 807 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

__webpack_require__(120);

__webpack_require__(81);

__webpack_require__(26);

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(3));

var _get3 = _interopRequireDefault(__webpack_require__(24));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(16));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var _createSuper2 = _interopRequireDefault(__webpack_require__(5));

var BackgroundVideo = /*#__PURE__*/function (_elementorModules$fro) {
  (0, _inherits2.default)(BackgroundVideo, _elementorModules$fro);

  var _super = (0, _createSuper2.default)(BackgroundVideo);

  function BackgroundVideo() {
    (0, _classCallCheck2.default)(this, BackgroundVideo);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(BackgroundVideo, [{
    key: "getDefaultSettings",
    value: function getDefaultSettings() {
      return {
        selectors: {
          backgroundVideoContainer: '.elementor-background-video-container',
          backgroundVideoEmbed: '.elementor-background-video-embed',
          backgroundVideoHosted: '.elementor-background-video-hosted'
        }
      };
    }
  }, {
    key: "getDefaultElements",
    value: function getDefaultElements() {
      var selectors = this.getSettings('selectors'),
          elements = {
        $backgroundVideoContainer: this.$element.find(selectors.backgroundVideoContainer)
      };
      elements.$backgroundVideoEmbed = elements.$backgroundVideoContainer.children(selectors.backgroundVideoEmbed);
      elements.$backgroundVideoHosted = elements.$backgroundVideoContainer.children(selectors.backgroundVideoHosted);
      return elements;
    }
  }, {
    key: "calcVideosSize",
    value: function calcVideosSize($video) {
      var aspectRatioSetting = '16:9';

      if ('vimeo' === this.videoType) {
        aspectRatioSetting = $video[0].width + ':' + $video[0].height;
      }

      var containerWidth = this.elements.$backgroundVideoContainer.outerWidth(),
          containerHeight = this.elements.$backgroundVideoContainer.outerHeight(),
          aspectRatioArray = aspectRatioSetting.split(':'),
          aspectRatio = aspectRatioArray[0] / aspectRatioArray[1],
          ratioWidth = containerWidth / aspectRatio,
          ratioHeight = containerHeight * aspectRatio,
          isWidthFixed = containerWidth / containerHeight > aspectRatio;
      return {
        width: isWidthFixed ? containerWidth : ratioHeight,
        height: isWidthFixed ? ratioWidth : containerHeight
      };
    }
  }, {
    key: "changeVideoSize",
    value: function changeVideoSize() {
      if (!('hosted' === this.videoType) && !this.player) {
        return;
      }

      var $video;

      if ('youtube' === this.videoType) {
        $video = jQuery(this.player.getIframe());
      } else if ('vimeo' === this.videoType) {
        $video = jQuery(this.player.element);
      } else if ('hosted' === this.videoType) {
        $video = this.elements.$backgroundVideoHosted;
      }

      if (!$video) {
        return;
      }

      var size = this.calcVideosSize($video);
      $video.width(size.width).height(size.height);
    }
  }, {
    key: "startVideoLoop",
    value: function startVideoLoop(firstTime) {
      var _this = this;

      // If the section has been removed
      if (!this.player.getIframe().contentWindow) {
        return;
      }

      var elementSettings = this.getElementSettings(),
          startPoint = elementSettings.background_video_start || 0,
          endPoint = elementSettings.background_video_end;

      if (elementSettings.background_play_once && !firstTime) {
        this.player.stopVideo();
        return;
      }

      this.player.seekTo(startPoint);

      if (endPoint) {
        var durationToEnd = endPoint - startPoint + 1;
        setTimeout(function () {
          _this.startVideoLoop(false);
        }, durationToEnd * 1000);
      }
    }
  }, {
    key: "prepareVimeoVideo",
    value: function prepareVimeoVideo(Vimeo, videoId) {
      var _this2 = this;

      var elementSettings = this.getElementSettings(),
          startTime = elementSettings.background_video_start ? elementSettings.background_video_start : 0,
          videoSize = this.elements.$backgroundVideoContainer.outerWidth(),
          vimeoOptions = {
        id: videoId,
        width: videoSize.width,
        autoplay: true,
        loop: !elementSettings.background_play_once,
        transparent: false,
        background: true,
        muted: true
      };
      this.player = new Vimeo.Player(this.elements.$backgroundVideoContainer, vimeoOptions); // Handle user-defined start/end times

      this.handleVimeoStartEndTimes(elementSettings);
      this.player.ready().then(function () {
        jQuery(_this2.player.element).addClass('elementor-background-video-embed');

        _this2.changeVideoSize();
      });
    }
  }, {
    key: "handleVimeoStartEndTimes",
    value: function handleVimeoStartEndTimes(elementSettings) {
      var _this3 = this;

      // If a start time is defined, set the start time
      if (elementSettings.background_video_start) {
        this.player.on('play', function (data) {
          if (0 === data.seconds) {
            _this3.player.setCurrentTime(elementSettings.background_video_start);
          }
        });
      }

      this.player.on('timeupdate', function (data) {
        // If an end time is defined, handle ending the video
        if (elementSettings.background_video_end && elementSettings.background_video_end < data.seconds) {
          if (elementSettings.background_play_once) {
            // Stop at user-defined end time if not loop
            _this3.player.pause();
          } else {
            // Go to start time if loop
            _this3.player.setCurrentTime(elementSettings.background_video_start);
          }
        } // If start time is defined but an end time is not, go to user-defined start time at video end.
        // Vimeo JS API has an 'ended' event, but it never fires when infinite loop is defined, so we
        // get the video duration (returns a promise) then use duration-0.5s as end time


        _this3.player.getDuration().then(function (duration) {
          if (elementSettings.background_video_start && !elementSettings.background_video_end && data.seconds > duration - 0.5) {
            _this3.player.setCurrentTime(elementSettings.background_video_start);
          }
        });
      });
    }
  }, {
    key: "prepareYTVideo",
    value: function prepareYTVideo(YT, videoID) {
      var _this4 = this;

      var $backgroundVideoContainer = this.elements.$backgroundVideoContainer,
          elementSettings = this.getElementSettings();
      var startStateCode = YT.PlayerState.PLAYING; // Since version 67, Chrome doesn't fire the `PLAYING` state at start time

      if (window.chrome) {
        startStateCode = YT.PlayerState.UNSTARTED;
      }

      $backgroundVideoContainer.addClass('elementor-loading elementor-invisible');
      this.player = new YT.Player(this.elements.$backgroundVideoEmbed[0], {
        videoId: videoID,
        events: {
          onReady: function onReady() {
            _this4.player.mute();

            _this4.changeVideoSize();

            _this4.startVideoLoop(true);

            _this4.player.playVideo();
          },
          onStateChange: function onStateChange(event) {
            switch (event.data) {
              case startStateCode:
                $backgroundVideoContainer.removeClass('elementor-invisible elementor-loading');
                break;

              case YT.PlayerState.ENDED:
                _this4.player.seekTo(elementSettings.background_video_start || 0);

                if (elementSettings.background_play_once) {
                  _this4.player.destroy();
                }

            }
          }
        },
        playerVars: {
          controls: 0,
          rel: 0,
          playsinline: 1
        }
      });
    }
  }, {
    key: "activate",
    value: function activate() {
      var _this5 = this;

      var videoLink = this.getElementSettings('background_video_link'),
          videoID;
      var playOnce = this.getElementSettings('background_play_once');

      if (-1 !== videoLink.indexOf('vimeo.com')) {
        this.videoType = 'vimeo';
        this.apiProvider = elementorFrontend.utils.vimeo;
      } else if (videoLink.match(/^(?:https?:\/\/)?(?:www\.)?(?:m\.)?(?:youtu\.be\/|youtube\.com)/)) {
        this.videoType = 'youtube';
        this.apiProvider = elementorFrontend.utils.youtube;
      }

      if (this.apiProvider) {
        videoID = this.apiProvider.getVideoIDFromURL(videoLink);
        this.apiProvider.onApiReady(function (apiObject) {
          if ('youtube' === _this5.videoType) {
            _this5.prepareYTVideo(apiObject, videoID);
          }

          if ('vimeo' === _this5.videoType) {
            _this5.prepareVimeoVideo(apiObject, videoID);
          }
        });
      } else {
        this.videoType = 'hosted';
        var startTime = this.getElementSettings('background_video_start'),
            endTime = this.getElementSettings('background_video_end');

        if (startTime || endTime) {
          videoLink += '#t=' + (startTime || 0) + (endTime ? ',' + endTime : '');
        }

        this.elements.$backgroundVideoHosted.attr('src', videoLink).one('canplay', this.changeVideoSize.bind(this));

        if (playOnce) {
          this.elements.$backgroundVideoHosted.on('ended', function () {
            _this5.elements.$backgroundVideoHosted.hide();
          });
        }
      }

      elementorFrontend.elements.$window.on('resize', this.changeVideoSize);
    }
  }, {
    key: "deactivate",
    value: function deactivate() {
      if ('youtube' === this.videoType && this.player.getIframe() || 'vimeo' === this.videoType) {
        this.player.destroy();
      } else {
        this.elements.$backgroundVideoHosted.removeAttr('src').off('ended');
      }

      elementorFrontend.elements.$window.off('resize', this.changeVideoSize);
    }
  }, {
    key: "run",
    value: function run() {
      var elementSettings = this.getElementSettings();

      if (!elementSettings.background_play_on_mobile && 'mobile' === elementorFrontend.getCurrentDeviceMode()) {
        return;
      }

      if ('video' === elementSettings.background_background && elementSettings.background_video_link) {
        this.activate();
      } else {
        this.deactivate();
      }
    }
  }, {
    key: "onInit",
    value: function onInit() {
      var _get2;

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      (_get2 = (0, _get3.default)((0, _getPrototypeOf2.default)(BackgroundVideo.prototype), "onInit", this)).call.apply(_get2, [this].concat(args));

      this.changeVideoSize = this.changeVideoSize.bind(this);
      this.run();
    }
  }, {
    key: "onElementChange",
    value: function onElementChange(propertyName) {
      if ('background_background' === propertyName) {
        this.run();
      }
    }
  }]);
  return BackgroundVideo;
}(elementorModules.frontend.handlers.Base);

exports.default = BackgroundVideo;

/***/ }),
/* 808 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

__webpack_require__(26);

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(3));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var _createSuper2 = _interopRequireDefault(__webpack_require__(5));

var HandlesPosition = /*#__PURE__*/function (_elementorModules$fro) {
  (0, _inherits2.default)(HandlesPosition, _elementorModules$fro);

  var _super = (0, _createSuper2.default)(HandlesPosition);

  function HandlesPosition() {
    (0, _classCallCheck2.default)(this, HandlesPosition);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(HandlesPosition, [{
    key: "isFirstSection",
    value: function isFirstSection() {
      return this.$element.is('.elementor-edit-mode .elementor-top-section:first');
    }
  }, {
    key: "isOverflowHidden",
    value: function isOverflowHidden() {
      return 'hidden' === this.$element.css('overflow');
    }
  }, {
    key: "getOffset",
    value: function getOffset() {
      if ('body' === elementor.config.document.container) {
        return this.$element.offset().top;
      }

      var $container = jQuery(elementor.config.document.container);
      return this.$element.offset().top - $container.offset().top;
    }
  }, {
    key: "setHandlesPosition",
    value: function setHandlesPosition() {
      var document = elementor.documents.getCurrent();

      if (!document || !document.container.isEditable()) {
        return;
      }

      var isOverflowHidden = this.isOverflowHidden();

      if (!isOverflowHidden && !this.isFirstSection()) {
        return;
      }

      var offset = isOverflowHidden ? 0 : this.getOffset(),
          $handlesElement = this.$element.find('> .elementor-element-overlay > .elementor-editor-section-settings'),
          insideHandleClass = 'elementor-section--handles-inside';

      if (offset < 25) {
        this.$element.addClass(insideHandleClass);

        if (offset < -5) {
          $handlesElement.css('top', -offset);
        } else {
          $handlesElement.css('top', '');
        }
      } else {
        this.$element.removeClass(insideHandleClass);
      }
    }
  }, {
    key: "onInit",
    value: function onInit() {
      this.setHandlesPosition();
      this.$element.on('mouseenter', this.setHandlesPosition.bind(this));
    }
  }]);
  return HandlesPosition;
}(elementorModules.frontend.handlers.Base);

exports.default = HandlesPosition;

/***/ }),
/* 809 */
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

var _get3 = _interopRequireDefault(__webpack_require__(24));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(16));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var _createSuper2 = _interopRequireDefault(__webpack_require__(5));

var StretchedSection = /*#__PURE__*/function (_elementorModules$fro) {
  (0, _inherits2.default)(StretchedSection, _elementorModules$fro);

  var _super = (0, _createSuper2.default)(StretchedSection);

  function StretchedSection() {
    (0, _classCallCheck2.default)(this, StretchedSection);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(StretchedSection, [{
    key: "bindEvents",
    value: function bindEvents() {
      var handlerID = this.getUniqueHandlerID();
      elementorFrontend.addListenerOnce(handlerID, 'resize', this.stretch);
      elementorFrontend.addListenerOnce(handlerID, 'sticky:stick', this.stretch, this.$element);
      elementorFrontend.addListenerOnce(handlerID, 'sticky:unstick', this.stretch, this.$element);

      if (elementorFrontend.isEditMode()) {
        this.onKitChangeStretchContainerChange = this.onKitChangeStretchContainerChange.bind(this);
        elementor.channels.editor.on('kit:change:stretchContainer', this.onKitChangeStretchContainerChange);
      }
    }
  }, {
    key: "unbindEvents",
    value: function unbindEvents() {
      elementorFrontend.removeListeners(this.getUniqueHandlerID(), 'resize', this.stretch);

      if (elementorFrontend.isEditMode()) {
        elementor.channels.editor.off('kit:change:stretchContainer', this.onKitChangeStretchContainerChange);
      }
    }
  }, {
    key: "initStretch",
    value: function initStretch() {
      this.stretch = this.stretch.bind(this);
      this.stretchElement = new elementorModules.frontend.tools.StretchElement({
        element: this.$element,
        selectors: {
          container: this.getStretchContainer()
        }
      });
    }
  }, {
    key: "getStretchContainer",
    value: function getStretchContainer() {
      return elementorFrontend.getKitSettings('stretched_section_container') || window;
    }
  }, {
    key: "stretch",
    value: function stretch() {
      if (!this.getElementSettings('stretch_section')) {
        return;
      }

      this.stretchElement.stretch();
    }
  }, {
    key: "onInit",
    value: function onInit() {
      var _get2;

      this.initStretch();

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      (_get2 = (0, _get3.default)((0, _getPrototypeOf2.default)(StretchedSection.prototype), "onInit", this)).call.apply(_get2, [this].concat(args));

      this.stretch();
    }
  }, {
    key: "onElementChange",
    value: function onElementChange(propertyName) {
      if ('stretch_section' === propertyName) {
        if (this.getElementSettings('stretch_section')) {
          this.stretch();
        } else {
          this.stretchElement.reset();
        }
      }
    }
  }, {
    key: "onKitChangeStretchContainerChange",
    value: function onKitChangeStretchContainerChange() {
      this.stretchElement.setSettings('selectors.container', this.getStretchContainer());
      this.stretch();
    }
  }]);
  return StretchedSection;
}(elementorModules.frontend.handlers.Base);

exports.default = StretchedSection;

/***/ }),
/* 810 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

__webpack_require__(120);

__webpack_require__(60);

__webpack_require__(26);

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(2));

var _createClass2 = _interopRequireDefault(__webpack_require__(3));

var _get3 = _interopRequireDefault(__webpack_require__(24));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(16));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var _createSuper2 = _interopRequireDefault(__webpack_require__(5));

var Shapes = /*#__PURE__*/function (_elementorModules$fro) {
  (0, _inherits2.default)(Shapes, _elementorModules$fro);

  var _super = (0, _createSuper2.default)(Shapes);

  function Shapes() {
    (0, _classCallCheck2.default)(this, Shapes);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(Shapes, [{
    key: "getDefaultSettings",
    value: function getDefaultSettings() {
      return {
        selectors: {
          container: '> .elementor-shape-%s'
        },
        svgURL: elementorFrontend.config.urls.assets + 'shapes/'
      };
    }
  }, {
    key: "getDefaultElements",
    value: function getDefaultElements() {
      var elements = {},
          selectors = this.getSettings('selectors');
      elements.$topContainer = this.$element.find(selectors.container.replace('%s', 'top'));
      elements.$bottomContainer = this.$element.find(selectors.container.replace('%s', 'bottom'));
      return elements;
    }
  }, {
    key: "getSvgURL",
    value: function getSvgURL(shapeType, fileName) {
      var svgURL = this.getSettings('svgURL') + fileName + '.svg';

      if (elementor.config.additional_shapes && shapeType in elementor.config.additional_shapes) {
        svgURL = elementor.config.additional_shapes[shapeType];

        if (-1 < fileName.indexOf('-negative')) {
          svgURL = svgURL.replace('.svg', '-negative.svg');
        }
      }

      return svgURL;
    }
  }, {
    key: "buildSVG",
    value: function buildSVG(side) {
      var baseSettingKey = 'shape_divider_' + side,
          shapeType = this.getElementSettings(baseSettingKey),
          $svgContainer = this.elements['$' + side + 'Container'];
      $svgContainer.attr('data-shape', shapeType);

      if (!shapeType) {
        $svgContainer.empty(); // Shape-divider set to 'none'

        return;
      }

      var fileName = shapeType;

      if (this.getElementSettings(baseSettingKey + '_negative')) {
        fileName += '-negative';
      }

      var svgURL = this.getSvgURL(shapeType, fileName);
      jQuery.get(svgURL, function (data) {
        $svgContainer.empty().append(data.childNodes[0]);
      });
      this.setNegative(side);
    }
  }, {
    key: "setNegative",
    value: function setNegative(side) {
      this.elements['$' + side + 'Container'].attr('data-negative', !!this.getElementSettings('shape_divider_' + side + '_negative'));
    }
  }, {
    key: "onInit",
    value: function onInit() {
      var _get2,
          _this = this;

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      (_get2 = (0, _get3.default)((0, _getPrototypeOf2.default)(Shapes.prototype), "onInit", this)).call.apply(_get2, [this].concat(args));

      ['top', 'bottom'].forEach(function (side) {
        if (_this.getElementSettings('shape_divider_' + side)) {
          _this.buildSVG(side);
        }
      });
    }
  }, {
    key: "onElementChange",
    value: function onElementChange(propertyName) {
      var shapeChange = propertyName.match(/^shape_divider_(top|bottom)$/);

      if (shapeChange) {
        this.buildSVG(shapeChange[1]);
        return;
      }

      var negativeChange = propertyName.match(/^shape_divider_(top|bottom)_negative$/);

      if (negativeChange) {
        this.buildSVG(negativeChange[1]);
        this.setNegative(negativeChange[1]);
      }
    }
  }]);
  return Shapes;
}(elementorModules.frontend.handlers.Base);

exports.default = Shapes;

/***/ }),
/* 811 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _Object$defineProperty = __webpack_require__(1);

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

var _backgroundSlideshow = _interopRequireDefault(__webpack_require__(701));

var _default = function _default($scope) {
  elementorFrontend.elementsHandler.addHandler(_backgroundSlideshow.default, {
    $element: $scope
  });
};

exports.default = _default;

/***/ }),
/* 812 */
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

var _get3 = _interopRequireDefault(__webpack_require__(24));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(16));

var _inherits2 = _interopRequireDefault(__webpack_require__(4));

var _createSuper2 = _interopRequireDefault(__webpack_require__(5));

var GlobalHandler = /*#__PURE__*/function (_elementorModules$fro) {
  (0, _inherits2.default)(GlobalHandler, _elementorModules$fro);

  var _super = (0, _createSuper2.default)(GlobalHandler);

  function GlobalHandler() {
    (0, _classCallCheck2.default)(this, GlobalHandler);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(GlobalHandler, [{
    key: "getWidgetType",
    value: function getWidgetType() {
      return 'global';
    }
  }, {
    key: "animate",
    value: function animate() {
      var $element = this.$element,
          animation = this.getAnimation();

      if ('none' === animation) {
        $element.removeClass('elementor-invisible');
        return;
      }

      var elementSettings = this.getElementSettings(),
          animationDelay = elementSettings._animation_delay || elementSettings.animation_delay || 0;
      $element.removeClass(animation);

      if (this.currentAnimation) {
        $element.removeClass(this.currentAnimation);
      }

      this.currentAnimation = animation;
      setTimeout(function () {
        $element.removeClass('elementor-invisible').addClass('animated ' + animation);
      }, animationDelay);
    }
  }, {
    key: "getAnimation",
    value: function getAnimation() {
      return this.getCurrentDeviceSetting('animation') || this.getCurrentDeviceSetting('_animation');
    }
  }, {
    key: "onInit",
    value: function onInit() {
      var _get2,
          _this = this;

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      (_get2 = (0, _get3.default)((0, _getPrototypeOf2.default)(GlobalHandler.prototype), "onInit", this)).call.apply(_get2, [this].concat(args));

      if (this.getAnimation()) {
        elementorFrontend.waypoint(this.$element, function () {
          return _this.animate();
        });
      }
    }
  }, {
    key: "onElementChange",
    value: function onElementChange(propertyName) {
      if (/^_?animation/.test(propertyName)) {
        this.animate();
      }
    }
  }]);
  return GlobalHandler;
}(elementorModules.frontend.handlers.Base);

var _default = function _default($scope) {
  elementorFrontend.elementsHandler.addHandler(GlobalHandler, {
    $element: $scope
  });
};

exports.default = _default;

/***/ }),
/* 813 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = elementorModules.ViewModule.extend({
  getDefaultSettings: function getDefaultSettings() {
    return {
      scrollDuration: 500,
      selectors: {
        links: 'a[href*="#"]',
        targets: '.elementor-element, .elementor-menu-anchor',
        scrollable: 'html, body'
      }
    };
  },
  getDefaultElements: function getDefaultElements() {
    var $ = jQuery,
        selectors = this.getSettings('selectors');
    return {
      $scrollable: $(selectors.scrollable)
    };
  },
  bindEvents: function bindEvents() {
    elementorFrontend.elements.$document.on('click', this.getSettings('selectors.links'), this.handleAnchorLinks);
  },
  handleAnchorLinks: function handleAnchorLinks(event) {
    var clickedLink = event.currentTarget,
        isSamePathname = location.pathname === clickedLink.pathname,
        isSameHostname = location.hostname === clickedLink.hostname,
        $anchor;

    if (!isSameHostname || !isSamePathname || clickedLink.hash.length < 2) {
      return;
    }

    try {
      $anchor = jQuery(clickedLink.hash).filter(this.getSettings('selectors.targets'));
    } catch (e) {
      return;
    }

    if (!$anchor.length) {
      return;
    }

    var scrollTop = $anchor.offset().top,
        $wpAdminBar = elementorFrontend.elements.$wpAdminBar,
        $activeStickies = jQuery('.elementor-section.elementor-sticky--active:visible'),
        maxStickyHeight = 0;

    if ($wpAdminBar.length > 0) {
      scrollTop -= $wpAdminBar.height();
    } // Offset height of tallest sticky


    if ($activeStickies.length > 0) {
      maxStickyHeight = Math.max.apply(null, $activeStickies.map(function () {
        return jQuery(this).outerHeight();
      }).get());
      scrollTop -= maxStickyHeight;
    }

    event.preventDefault();
    scrollTop = elementorFrontend.hooks.applyFilters('frontend/handlers/menu_anchor/scroll_top_distance', scrollTop);
    this.elements.$scrollable.animate({
      scrollTop: scrollTop
    }, this.getSettings('scrollDuration'), 'linear');
  },
  onInit: function onInit() {
    elementorModules.ViewModule.prototype.onInit.apply(this, arguments);
    this.bindEvents();
  }
});

/***/ }),
/* 814 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

__webpack_require__(120);

__webpack_require__(26);

__webpack_require__(60);

var _screenfull = _interopRequireDefault(__webpack_require__(815));

module.exports = elementorModules.ViewModule.extend({
  oldAspectRatio: null,
  oldAnimation: null,
  swiper: null,
  player: null,
  getDefaultSettings: function getDefaultSettings() {
    return {
      classes: {
        aspectRatio: 'elementor-aspect-ratio-%s',
        item: 'elementor-lightbox-item',
        image: 'elementor-lightbox-image',
        videoContainer: 'elementor-video-container',
        videoWrapper: 'elementor-fit-aspect-ratio',
        playButton: 'elementor-custom-embed-play',
        playButtonIcon: 'fa',
        playing: 'elementor-playing',
        hidden: 'elementor-hidden',
        invisible: 'elementor-invisible',
        preventClose: 'elementor-lightbox-prevent-close',
        slideshow: {
          container: 'swiper-container',
          slidesWrapper: 'swiper-wrapper',
          prevButton: 'elementor-swiper-button elementor-swiper-button-prev',
          nextButton: 'elementor-swiper-button elementor-swiper-button-next',
          prevButtonIcon: 'eicon-chevron-left',
          nextButtonIcon: 'eicon-chevron-right',
          slide: 'swiper-slide',
          header: 'elementor-slideshow__header',
          footer: 'elementor-slideshow__footer',
          title: 'elementor-slideshow__title',
          description: 'elementor-slideshow__description',
          counter: 'elementor-slideshow__counter',
          iconExpand: 'eicon-frame-expand',
          iconShrink: 'eicon-frame-minimize',
          iconZoomIn: 'eicon-zoom-in-bold',
          iconZoomOut: 'eicon-zoom-out-bold',
          iconShare: 'eicon-share-arrow',
          shareMenu: 'elementor-slideshow__share-menu',
          shareLinks: 'elementor-slideshow__share-links',
          hideUiVisibility: 'elementor-slideshow--ui-hidden',
          shareMode: 'elementor-slideshow--share-mode',
          fullscreenMode: 'elementor-slideshow--fullscreen-mode',
          zoomMode: 'elementor-slideshow--zoom-mode'
        }
      },
      selectors: {
        image: '.elementor-lightbox-image',
        links: 'a, [data-elementor-lightbox]',
        slideshow: {
          activeSlide: '.swiper-slide-active',
          prevSlide: '.swiper-slide-prev',
          nextSlide: '.swiper-slide-next'
        }
      },
      modalOptions: {
        id: 'elementor-lightbox',
        entranceAnimation: 'zoomIn',
        videoAspectRatio: 169,
        position: {
          enable: false
        }
      }
    };
  },
  getModal: function getModal() {
    if (!module.exports.modal) {
      this.initModal();
    }

    return module.exports.modal;
  },
  initModal: function initModal() {
    var modal = module.exports.modal = elementorFrontend.getDialogsManager().createWidget('lightbox', {
      className: 'elementor-lightbox',
      closeButton: true,
      closeButtonOptions: {
        iconClass: 'eicon-close',
        attributes: {
          tabindex: 0,
          role: 'button',
          'aria-label': elementorFrontend.config.i18n.close + ' (Esc)'
        }
      },
      selectors: {
        preventClose: '.' + this.getSettings('classes.preventClose')
      },
      hide: {
        onClick: true
      }
    });
    modal.on('hide', function () {
      modal.setMessage('');
    });
  },
  showModal: function showModal(options) {
    this.elements.$closeButton = this.getModal().getElements('closeButton');
    this.$buttons = this.elements.$closeButton;
    this.focusedButton = null;
    var self = this,
        defaultOptions = self.getDefaultSettings().modalOptions;
    self.id = options.id;
    self.setSettings('modalOptions', jQuery.extend(defaultOptions, options.modalOptions));
    var modal = self.getModal();
    modal.setID(self.getSettings('modalOptions.id'));

    modal.onShow = function () {
      DialogsManager.getWidgetType('lightbox').prototype.onShow.apply(modal, arguments);
      self.setEntranceAnimation();
    };

    modal.onHide = function () {
      DialogsManager.getWidgetType('lightbox').prototype.onHide.apply(modal, arguments);
      modal.getElements('message').removeClass('animated');

      if (_screenfull.default.isFullscreen) {
        self.deactivateFullscreen();
      }

      self.unbindHotKeys();
    };

    switch (options.type) {
      case 'video':
        self.setVideoContent(options);
        break;

      case 'image':
        var slides = [{
          image: options.url,
          index: 0,
          title: options.title,
          description: options.description
        }];
        options.slideshow = {
          slides: slides,
          swiper: {
            loop: false,
            pagination: false
          }
        };

      case 'slideshow':
        self.setSlideshowContent(options.slideshow);
        break;

      default:
        self.setHTMLContent(options.html);
    }

    modal.show();
  },
  setHTMLContent: function setHTMLContent(html) {
    this.getModal().setMessage(html);
  },
  setVideoContent: function setVideoContent(options) {
    var $ = jQuery,
        classes = this.getSettings('classes'),
        $videoContainer = $('<div>', {
      class: "".concat(classes.videoContainer, " ").concat(classes.preventClose)
    }),
        $videoWrapper = $('<div>', {
      class: classes.videoWrapper
    }),
        modal = this.getModal();
    var $videoElement;

    if ('hosted' === options.videoType) {
      var videoParams = $.extend({
        src: options.url,
        autoplay: ''
      }, options.videoParams);
      $videoElement = $('<video>', videoParams);
    } else {
      var videoURL = options.url.replace('&autoplay=0', '') + '&autoplay=1';
      $videoElement = $('<iframe>', {
        src: videoURL,
        allowfullscreen: 1
      });
    }

    $videoContainer.append($videoWrapper);
    $videoWrapper.append($videoElement);
    modal.setMessage($videoContainer);
    this.setVideoAspectRatio();
    var onHideMethod = modal.onHide;

    modal.onHide = function () {
      onHideMethod();
      this.$buttons = jQuery();
      this.focusedButton = null;
      modal.getElements('message').removeClass('elementor-fit-aspect-ratio');
    };
  },
  getShareLinks: function getShareLinks() {
    var _this = this;

    var i18n = elementorFrontend.config.i18n,
        socialNetworks = {
      facebook: i18n.shareOnFacebook,
      twitter: i18n.shareOnTwitter,
      pinterest: i18n.pinIt
    },
        $ = jQuery,
        classes = this.getSettings('classes'),
        selectors = this.getSettings('selectors'),
        $linkList = $('<div>', {
      class: classes.slideshow.shareLinks
    }),
        $activeSlide = this.getSlide('active'),
        $image = $activeSlide.find(selectors.image),
        videoUrl = $activeSlide.data('elementor-slideshow-video');
    var itemUrl;

    if (videoUrl) {
      itemUrl = videoUrl;
    } else {
      itemUrl = $image.attr('src');
    }

    $.each(socialNetworks, function (key, networkLabel) {
      var $link = $('<a>', {
        href: _this.createShareLink(key, itemUrl),
        target: '_blank'
      }).text(networkLabel);
      $link.prepend($('<i>', {
        class: 'eicon-' + key
      }));
      $linkList.append($link);
    });

    if (!videoUrl) {
      $linkList.append($('<a>', {
        href: itemUrl,
        download: ''
      }).text(i18n.downloadImage).prepend($('<i>', {
        class: 'eicon-download-bold',
        'aria-label': i18n.download
      })));
    }

    return $linkList;
  },
  createShareLink: function createShareLink(networkName, itemUrl) {
    var options = {};

    if ('pinterest' === networkName) {
      options.image = encodeURIComponent(itemUrl);
    } else {
      var hash = elementorFrontend.utils.urlActions.createActionHash('lightbox', {
        id: this.id,
        url: itemUrl
      });
      options.url = encodeURIComponent(location.href.replace(/#.*/, '')) + hash;
    }

    return ShareLink.getNetworkLink(networkName, options);
  },
  getSlideshowHeader: function getSlideshowHeader() {
    var i18n = elementorFrontend.config.i18n,
        $ = jQuery,
        showCounter = 'yes' === elementorFrontend.getKitSettings('lightbox_enable_counter'),
        showFullscreen = 'yes' === elementorFrontend.getKitSettings('lightbox_enable_fullscreen'),
        showZoom = 'yes' === elementorFrontend.getKitSettings('lightbox_enable_zoom'),
        showShare = 'yes' === elementorFrontend.getKitSettings('lightbox_enable_share'),
        classes = this.getSettings('classes'),
        slideshowClasses = classes.slideshow,
        elements = this.elements;

    if (!(showCounter || showFullscreen || showZoom || showShare)) {
      return;
    }

    elements.$header = $('<header>', {
      class: slideshowClasses.header + ' ' + classes.preventClose
    });

    if (showShare) {
      elements.$iconShare = $('<i>', {
        class: slideshowClasses.iconShare,
        role: 'button',
        'aria-label': i18n.share,
        'aria-expanded': false
      }).append($('<span>'));
      var $shareLinks = $('<div>');
      $shareLinks.on('click', function (e) {
        e.stopPropagation();
      });
      elements.$shareMenu = $('<div>', {
        class: slideshowClasses.shareMenu
      }).append($shareLinks);
      elements.$iconShare.add(elements.$shareMenu).on('click', this.toggleShareMenu);
      elements.$header.append(elements.$iconShare, elements.$shareMenu);
      this.$buttons = this.$buttons.add(elements.$iconShare);
    }

    if (showZoom) {
      elements.$iconZoom = $('<i>', {
        class: slideshowClasses.iconZoomIn,
        role: 'switch',
        'aria-checked': false,
        'aria-label': i18n.zoom
      });
      elements.$iconZoom.on('click', this.toggleZoomMode);
      elements.$header.append(elements.$iconZoom);
      this.$buttons = this.$buttons.add(elements.$iconZoom);
    }

    if (showFullscreen) {
      elements.$iconExpand = $('<i>', {
        class: slideshowClasses.iconExpand,
        role: 'switch',
        'aria-checked': false,
        'aria-label': i18n.fullscreen
      }).append($('<span>'), $('<span>'));
      elements.$iconExpand.on('click', this.toggleFullscreen);
      elements.$header.append(elements.$iconExpand);
      this.$buttons = this.$buttons.add(elements.$iconExpand);
    }

    if (showCounter) {
      elements.$counter = $('<span>', {
        class: slideshowClasses.counter
      });
      elements.$header.append(elements.$counter);
    }

    return elements.$header;
  },
  toggleFullscreen: function toggleFullscreen() {
    if (_screenfull.default.isFullscreen) {
      this.deactivateFullscreen();
    } else if (_screenfull.default.isEnabled) {
      this.activateFullscreen();
    }
  },
  toggleZoomMode: function toggleZoomMode() {
    if (1 !== this.swiper.zoom.scale) {
      this.deactivateZoom();
    } else {
      this.activateZoom();
    }
  },
  toggleShareMenu: function toggleShareMenu() {
    if (this.shareMode) {
      this.deactivateShareMode();
    } else {
      this.elements.$shareMenu.html(this.getShareLinks());
      this.activateShareMode();
    }
  },
  activateShareMode: function activateShareMode() {
    var classes = this.getSettings('classes');
    this.elements.$container.addClass(classes.slideshow.shareMode);
    this.elements.$iconShare.attr('aria-expanded', true); // Prevent swiper interactions while in share mode

    this.swiper.detachEvents(); // Temporarily replace tabbable buttons with share-menu items

    this.$originalButtons = this.$buttons;
    this.$buttons = this.elements.$iconShare.add(this.elements.$shareMenu.find('a'));
    this.shareMode = true;
  },
  deactivateShareMode: function deactivateShareMode() {
    var classes = this.getSettings('classes');
    this.elements.$container.removeClass(classes.slideshow.shareMode);
    this.elements.$iconShare.attr('aria-expanded', false);
    this.swiper.attachEvents();
    this.$buttons = this.$originalButtons;
    this.shareMode = false;
  },
  activateFullscreen: function activateFullscreen() {
    var classes = this.getSettings('classes');

    _screenfull.default.request(this.elements.$container.parents('.dialog-widget')[0]);

    this.elements.$iconExpand.removeClass(classes.slideshow.iconExpand).addClass(classes.slideshow.iconShrink).attr('aria-checked', 'true');
    this.elements.$container.addClass(classes.slideshow.fullscreenMode);
  },
  deactivateFullscreen: function deactivateFullscreen() {
    var classes = this.getSettings('classes');

    _screenfull.default.exit();

    this.elements.$iconExpand.removeClass(classes.slideshow.iconShrink).addClass(classes.slideshow.iconExpand).attr('aria-checked', 'false');
    this.elements.$container.removeClass(classes.slideshow.fullscreenMode);
  },
  activateZoom: function activateZoom() {
    var swiper = this.swiper,
        elements = this.elements,
        classes = this.getSettings('classes');
    swiper.zoom.in();
    swiper.allowSlideNext = false;
    swiper.allowSlidePrev = false;
    swiper.allowTouchMove = false;
    elements.$container.addClass(classes.slideshow.zoomMode);
    elements.$iconZoom.removeClass(classes.slideshow.iconZoomIn).addClass(classes.slideshow.iconZoomOut);
  },
  deactivateZoom: function deactivateZoom() {
    var swiper = this.swiper,
        elements = this.elements,
        classes = this.getSettings('classes');
    swiper.zoom.out();
    swiper.allowSlideNext = true;
    swiper.allowSlidePrev = true;
    swiper.allowTouchMove = true;
    elements.$container.removeClass(classes.slideshow.zoomMode);
    elements.$iconZoom.removeClass(classes.slideshow.iconZoomOut).addClass(classes.slideshow.iconZoomIn);
  },
  getSlideshowFooter: function getSlideshowFooter() {
    var $ = jQuery,
        classes = this.getSettings('classes'),
        $footer = $('<footer>', {
      class: classes.slideshow.footer + ' ' + classes.preventClose
    }),
        $title = $('<div>', {
      class: classes.slideshow.title
    }),
        $description = $('<div>', {
      class: classes.slideshow.description
    });
    $footer.append($title, $description);
    return $footer;
  },
  setSlideshowContent: function setSlideshowContent(options) {
    var _this2 = this;

    var i18n = elementorFrontend.config.i18n,
        $ = jQuery,
        isSingleSlide = 1 === options.slides.length,
        hasTitle = '' !== elementorFrontend.getKitSettings('lightbox_title_src'),
        hasDescription = '' !== elementorFrontend.getKitSettings('lightbox_description_src'),
        showFooter = hasTitle || hasDescription,
        classes = this.getSettings('classes'),
        slideshowClasses = classes.slideshow,
        $container = $('<div>', {
      class: slideshowClasses.container
    }),
        $slidesWrapper = $('<div>', {
      class: slideshowClasses.slidesWrapper
    });
    var $prevButton, $nextButton;
    options.slides.forEach(function (slide) {
      var slideClass = slideshowClasses.slide + ' ' + classes.item;

      if (slide.video) {
        slideClass += ' ' + classes.video;
      }

      var $slide = $('<div>', {
        class: slideClass
      });

      if (slide.video) {
        $slide.attr('data-elementor-slideshow-video', slide.video);
        var $playIcon = $('<div>', {
          class: classes.playButton
        }).html($('<i>', {
          class: classes.playButtonIcon,
          'aria-label': i18n.playVideo
        }));
        $slide.append($playIcon);
      } else {
        var $zoomContainer = $('<div>', {
          class: 'swiper-zoom-container'
        }),
            $slidePlaceholder = $('<div class="swiper-lazy-preloader"></div>'),
            imageAttributes = {
          'data-src': slide.image,
          class: classes.image + ' ' + classes.preventClose + ' swiper-lazy'
        };

        if (slide.title) {
          imageAttributes['data-title'] = slide.title;
          imageAttributes.alt = slide.title;
        }

        if (slide.description) {
          imageAttributes['data-description'] = slide.description;
          imageAttributes.alt += ' - ' + slide.description;
        }

        var $slideImage = $('<img>', imageAttributes);
        $zoomContainer.append([$slideImage, $slidePlaceholder]);
        $slide.append($zoomContainer);
      }

      $slidesWrapper.append($slide);
    });
    this.elements.$container = $container;
    this.elements.$header = this.getSlideshowHeader();
    $container.prepend(this.elements.$header).append($slidesWrapper);

    if (!isSingleSlide) {
      $prevButton = $('<div>', {
        class: slideshowClasses.prevButton + ' ' + classes.preventClose,
        'aria-label': i18n.previous
      }).html($('<i>', {
        class: slideshowClasses.prevButtonIcon
      }));
      $nextButton = $('<div>', {
        class: slideshowClasses.nextButton + ' ' + classes.preventClose,
        'aria-label': i18n.next
      }).html($('<i>', {
        class: slideshowClasses.nextButtonIcon
      }));
      $container.append($nextButton, $prevButton);
      this.$buttons = this.$buttons.add($nextButton).add($prevButton);
    }

    if (showFooter) {
      this.elements.$footer = this.getSlideshowFooter();
      $container.append(this.elements.$footer);
    }

    this.setSettings('hideUiTimeout', '');
    $container.on('click mousemove keypress', this.showLightboxUi);
    var modal = this.getModal();
    modal.setMessage($container);
    var onShowMethod = modal.onShow;

    modal.onShow = function () {
      onShowMethod();
      var swiperOptions = {
        pagination: {
          el: '.' + slideshowClasses.counter,
          type: 'fraction'
        },
        on: {
          slideChangeTransitionEnd: _this2.onSlideChange
        },
        lazy: {
          loadPrevNext: true
        },
        zoom: true,
        spaceBetween: 100,
        grabCursor: true,
        runCallbacksOnInit: false,
        loop: true,
        keyboard: true,
        handleElementorBreakpoints: true
      };

      if (!isSingleSlide) {
        swiperOptions.navigation = {
          prevEl: $prevButton,
          nextEl: $nextButton
        };
      }

      if (options.swiper) {
        $.extend(swiperOptions, options.swiper);
      }

      _this2.swiper = new Swiper($container, swiperOptions); // Expose the swiper instance in the frontend

      $container.data('swiper', _this2.swiper);

      _this2.setVideoAspectRatio();

      _this2.playSlideVideo();

      if (showFooter) {
        _this2.updateFooterText();
      }

      _this2.bindHotKeys();

      _this2.makeButtonsAccessible();
    };
  },
  makeButtonsAccessible: function makeButtonsAccessible() {
    this.$buttons.attr('tabindex', 0).on('keypress', function (event) {
      var ENTER_KEY = 13,
          SPACE_KEY = 32;

      if (ENTER_KEY === event.which || SPACE_KEY === event.which) {
        jQuery(event.currentTarget).trigger('click');
      }
    });
  },
  showLightboxUi: function showLightboxUi() {
    var _this3 = this;

    var slideshowClasses = this.getSettings('classes').slideshow;
    this.elements.$container.removeClass(slideshowClasses.hideUiVisibility);
    clearTimeout(this.getSettings('hideUiTimeout'));
    this.setSettings('hideUiTimeout', setTimeout(function () {
      if (!_this3.shareMode) {
        _this3.elements.$container.addClass(slideshowClasses.hideUiVisibility);
      }
    }, 3500));
  },
  bindHotKeys: function bindHotKeys() {
    this.getModal().getElements('window').on('keydown', this.activeKeyDown);
  },
  unbindHotKeys: function unbindHotKeys() {
    this.getModal().getElements('window').off('keydown', this.activeKeyDown);
  },
  activeKeyDown: function activeKeyDown(event) {
    this.showLightboxUi();
    var TAB_KEY = 9;

    if (event.which === TAB_KEY) {
      var $buttons = this.$buttons;
      var focusedButton,
          isFirst = false,
          isLast = false;
      $buttons.each(function (index) {
        var item = $buttons[index];

        if (jQuery(item).is(':focus')) {
          focusedButton = item;
          isFirst = 0 === index;
          isLast = $buttons.length - 1 === index;
          return false;
        }
      });

      if (event.shiftKey) {
        if (isFirst) {
          event.preventDefault();
          $buttons.last().focus();
        }
      } else if (isLast || !focusedButton) {
        event.preventDefault();
        $buttons.first().focus();
      }
    }
  },
  setVideoAspectRatio: function setVideoAspectRatio(aspectRatio) {
    aspectRatio = aspectRatio || this.getSettings('modalOptions.videoAspectRatio');
    var $widgetContent = this.getModal().getElements('widgetContent'),
        oldAspectRatio = this.oldAspectRatio,
        aspectRatioClass = this.getSettings('classes.aspectRatio');
    this.oldAspectRatio = aspectRatio;

    if (oldAspectRatio) {
      $widgetContent.removeClass(aspectRatioClass.replace('%s', oldAspectRatio));
    }

    if (aspectRatio) {
      $widgetContent.addClass(aspectRatioClass.replace('%s', aspectRatio));
    }
  },
  getSlide: function getSlide(slideState) {
    return jQuery(this.swiper.slides).filter(this.getSettings('selectors.slideshow.' + slideState + 'Slide'));
  },
  updateFooterText: function updateFooterText() {
    if (!this.elements.$footer) {
      return;
    }

    var classes = this.getSettings('classes'),
        $activeSlide = this.getSlide('active'),
        $image = $activeSlide.find('.elementor-lightbox-image'),
        titleText = $image.data('title'),
        descriptionText = $image.data('description'),
        $title = this.elements.$footer.find('.' + classes.slideshow.title),
        $description = this.elements.$footer.find('.' + classes.slideshow.description);
    $title.text(titleText || '');
    $description.text(descriptionText || '');
  },
  playSlideVideo: function playSlideVideo() {
    var _this4 = this;

    var $activeSlide = this.getSlide('active'),
        videoURL = $activeSlide.data('elementor-slideshow-video');

    if (!videoURL) {
      return;
    }

    var classes = this.getSettings('classes'),
        $videoContainer = jQuery('<div>', {
      class: classes.videoContainer + ' ' + classes.invisible
    }),
        $videoWrapper = jQuery('<div>', {
      class: classes.videoWrapper
    }),
        $playIcon = $activeSlide.children('.' + classes.playButton);
    var videoType, apiProvider;
    $videoContainer.append($videoWrapper);
    $activeSlide.append($videoContainer);

    if (-1 !== videoURL.indexOf('vimeo.com')) {
      videoType = 'vimeo';
      apiProvider = elementorFrontend.utils.vimeo;
    } else if (videoURL.match(/^(?:https?:\/\/)?(?:www\.)?(?:m\.)?(?:youtu\.be\/|youtube\.com)/)) {
      videoType = 'youtube';
      apiProvider = elementorFrontend.utils.youtube;
    }

    var videoID = apiProvider.getVideoIDFromURL(videoURL);
    apiProvider.onApiReady(function (apiObject) {
      if ('youtube' === videoType) {
        _this4.prepareYTVideo(apiObject, videoID, $videoContainer, $videoWrapper, $playIcon);
      } else if ('vimeo' === videoType) {
        _this4.prepareVimeoVideo(apiObject, videoID, $videoContainer, $videoWrapper, $playIcon);
      }
    });
    $playIcon.addClass(classes.playing).removeClass(classes.hidden);
  },
  prepareYTVideo: function prepareYTVideo(YT, videoID, $videoContainer, $videoWrapper, $playIcon) {
    var _this5 = this;

    var classes = this.getSettings('classes'),
        $videoPlaceholderElement = jQuery('<div>');
    var startStateCode = YT.PlayerState.PLAYING;
    $videoWrapper.append($videoPlaceholderElement); // Since version 67, Chrome doesn't fire the `PLAYING` state at start time

    if (window.chrome) {
      startStateCode = YT.PlayerState.UNSTARTED;
    }

    $videoContainer.addClass('elementor-loading' + ' ' + classes.invisible);
    this.player = new YT.Player($videoPlaceholderElement[0], {
      videoId: videoID,
      events: {
        onReady: function onReady() {
          $playIcon.addClass(classes.hidden);
          $videoContainer.removeClass(classes.invisible);

          _this5.player.playVideo();
        },
        onStateChange: function onStateChange(event) {
          if (event.data === startStateCode) {
            $videoContainer.removeClass('elementor-loading' + ' ' + classes.invisible);
          }
        }
      },
      playerVars: {
        controls: 0,
        rel: 0
      }
    });
  },
  prepareVimeoVideo: function prepareVimeoVideo(Vimeo, videoId, $videoContainer, $videoWrapper, $playIcon) {
    var classes = this.getSettings('classes'),
        vimeoOptions = {
      id: videoId,
      autoplay: true,
      transparent: false,
      playsinline: false
    };
    this.player = new Vimeo.Player($videoWrapper, vimeoOptions);
    this.player.ready().then(function () {
      $playIcon.addClass(classes.hidden);
      $videoContainer.removeClass(classes.invisible);
    });
  },
  setEntranceAnimation: function setEntranceAnimation(animation) {
    animation = animation || elementorFrontend.getCurrentDeviceSetting(this.getSettings('modalOptions'), 'entranceAnimation');
    var $widgetMessage = this.getModal().getElements('message');

    if (this.oldAnimation) {
      $widgetMessage.removeClass(this.oldAnimation);
    }

    this.oldAnimation = animation;

    if (animation) {
      $widgetMessage.addClass('animated ' + animation);
    }
  },
  isLightboxLink: function isLightboxLink(element) {
    if ('A' === element.tagName && (element.hasAttribute('download') || !/^[^?]+\.(png|jpe?g|gif|svg|webp)(\?.*)?$/i.test(element.href))) {
      return false;
    }

    var generalOpenInLightbox = elementorFrontend.getKitSettings('global_image_lightbox'),
        currentLinkOpenInLightbox = element.dataset.elementorOpenLightbox;
    return 'yes' === currentLinkOpenInLightbox || generalOpenInLightbox && 'no' !== currentLinkOpenInLightbox;
  },
  openSlideshow: function openSlideshow(slideshowID, initialSlideURL) {
    var $allSlideshowLinks = jQuery(this.getSettings('selectors.links')).filter(function (index, element) {
      var $element = jQuery(element);
      return slideshowID === element.dataset.elementorLightboxSlideshow && !$element.parent('.swiper-slide-duplicate').length && !$element.parents('.slick-cloned').length;
    });
    var slides = [];
    var initialSlideIndex = 0;
    $allSlideshowLinks.each(function () {
      var slideVideo = this.dataset.elementorLightboxVideo;
      var slideIndex = this.dataset.elementorLightboxIndex;

      if (undefined === slideIndex) {
        slideIndex = $allSlideshowLinks.index(this);
      }

      if (initialSlideURL === this.href || slideVideo && initialSlideURL === slideVideo) {
        initialSlideIndex = slideIndex;
      }

      var slideData = {
        image: this.href,
        index: slideIndex,
        title: this.dataset.elementorLightboxTitle,
        description: this.dataset.elementorLightboxDescription
      };

      if (slideVideo) {
        slideData.video = slideVideo;
      }

      slides.push(slideData);
    });
    slides.sort(function (a, b) {
      return a.index - b.index;
    });
    this.showModal({
      type: 'slideshow',
      id: slideshowID,
      modalOptions: {
        id: 'elementor-lightbox-slideshow-' + slideshowID
      },
      slideshow: {
        slides: slides,
        swiper: {
          initialSlide: +initialSlideIndex
        }
      }
    });
  },
  openLink: function openLink(event) {
    var element = event.currentTarget,
        $target = jQuery(event.target),
        editMode = elementorFrontend.isEditMode(),
        isClickInsideElementor = !!$target.closest('.elementor-edit-area').length;

    if (!this.isLightboxLink(element)) {
      if (editMode && isClickInsideElementor) {
        event.preventDefault();
      }

      return;
    }

    event.preventDefault();

    if (editMode && !elementor.getPreferences('lightbox_in_editor')) {
      return;
    }

    var lightboxData = {};

    if (element.dataset.elementorLightbox) {
      lightboxData = JSON.parse(element.dataset.elementorLightbox);
    }

    if (lightboxData.type && 'slideshow' !== lightboxData.type) {
      this.showModal(lightboxData);
      return;
    }

    if (!element.dataset.elementorLightboxSlideshow) {
      var slideshowID = 'single-img';
      this.showModal({
        type: 'image',
        id: slideshowID,
        url: element.href,
        title: element.dataset.elementorLightboxTitle,
        description: element.dataset.elementorLightboxDescription,
        modalOptions: {
          id: 'elementor-lightbox-slideshow-' + slideshowID
        }
      });
      return;
    }

    var initialSlideURL = element.dataset.elementorLightboxVideo ? element.dataset.elementorLightboxVideo : element.href;
    this.openSlideshow(element.dataset.elementorLightboxSlideshow, initialSlideURL);
  },
  bindEvents: function bindEvents() {
    elementorFrontend.elements.$document.on('click', this.getSettings('selectors.links'), this.openLink);
  },
  onSlideChange: function onSlideChange() {
    this.getSlide('prev').add(this.getSlide('next')).add(this.getSlide('active')).find('.' + this.getSettings('classes.videoWrapper')).remove();
    this.playSlideVideo();
    this.updateFooterText();
  }
});

/***/ }),
/* 815 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

var _defineProperties = _interopRequireDefault(__webpack_require__(290));

var _promise = _interopRequireDefault(__webpack_require__(137));

(function () {
  'use strict';

  var document = typeof window !== 'undefined' && typeof window.document !== 'undefined' ? window.document : {};
  var isCommonjs =  true && module.exports;

  var fn = function () {
    var val;
    var fnMap = [['requestFullscreen', 'exitFullscreen', 'fullscreenElement', 'fullscreenEnabled', 'fullscreenchange', 'fullscreenerror'], // New WebKit
    ['webkitRequestFullscreen', 'webkitExitFullscreen', 'webkitFullscreenElement', 'webkitFullscreenEnabled', 'webkitfullscreenchange', 'webkitfullscreenerror'], // Old WebKit
    ['webkitRequestFullScreen', 'webkitCancelFullScreen', 'webkitCurrentFullScreenElement', 'webkitCancelFullScreen', 'webkitfullscreenchange', 'webkitfullscreenerror'], ['mozRequestFullScreen', 'mozCancelFullScreen', 'mozFullScreenElement', 'mozFullScreenEnabled', 'mozfullscreenchange', 'mozfullscreenerror'], ['msRequestFullscreen', 'msExitFullscreen', 'msFullscreenElement', 'msFullscreenEnabled', 'MSFullscreenChange', 'MSFullscreenError']];
    var i = 0;
    var l = fnMap.length;
    var ret = {};

    for (; i < l; i++) {
      val = fnMap[i];

      if (val && val[1] in document) {
        var valLength = val.length;

        for (i = 0; i < valLength; i++) {
          ret[fnMap[0][i]] = val[i];
        }

        return ret;
      }
    }

    return false;
  }();

  var eventNameMap = {
    change: fn.fullscreenchange,
    error: fn.fullscreenerror
  };
  var screenfull = {
    request: function request(element) {
      return new _promise.default(function (resolve, reject) {
        var onFullScreenEntered = function () {
          this.off('change', onFullScreenEntered);
          resolve();
        }.bind(this);

        this.on('change', onFullScreenEntered);
        element = element || document.documentElement;

        _promise.default.resolve(element[fn.requestFullscreen]()).catch(reject);
      }.bind(this));
    },
    exit: function exit() {
      return new _promise.default(function (resolve, reject) {
        if (!this.isFullscreen) {
          resolve();
          return;
        }

        var onFullScreenExit = function () {
          this.off('change', onFullScreenExit);
          resolve();
        }.bind(this);

        this.on('change', onFullScreenExit);

        _promise.default.resolve(document[fn.exitFullscreen]()).catch(reject);
      }.bind(this));
    },
    toggle: function toggle(element) {
      return this.isFullscreen ? this.exit() : this.request(element);
    },
    onchange: function onchange(callback) {
      this.on('change', callback);
    },
    onerror: function onerror(callback) {
      this.on('error', callback);
    },
    on: function on(event, callback) {
      var eventName = eventNameMap[event];

      if (eventName) {
        document.addEventListener(eventName, callback, false);
      }
    },
    off: function off(event, callback) {
      var eventName = eventNameMap[event];

      if (eventName) {
        document.removeEventListener(eventName, callback, false);
      }
    },
    raw: fn
  };

  if (!fn) {
    if (isCommonjs) {
      module.exports = {
        isEnabled: false
      };
    } else {
      window.screenfull = {
        isEnabled: false
      };
    }

    return;
  }

  (0, _defineProperties.default)(screenfull, {
    isFullscreen: {
      get: function get() {
        return Boolean(document[fn.fullscreenElement]);
      }
    },
    element: {
      enumerable: true,
      get: function get() {
        return document[fn.fullscreenElement];
      }
    },
    isEnabled: {
      enumerable: true,
      get: function get() {
        // Coerce to boolean in case of old WebKit
        return Boolean(document[fn.fullscreenEnabled]);
      }
    }
  });

  if (isCommonjs) {
    module.exports = screenfull;
  } else {
    window.screenfull = screenfull;
  }
})();

/***/ })
/******/ ]);
//# sourceMappingURL=frontend.js.map