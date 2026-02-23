/*!
 * TOAST UI Date
 * @version 0.0.3 | Mon Feb 23 2026
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 * @license MIT
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["toastui"] = factory();
	else
		root["toastui"] = root["toastui"] || {}, root["toastui"]["Date"] = factory();
})(this, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 450
(module) {

/**
 * @fileoverview Check whether the given variable is a string or not.
 * @author NHN FE Development Lab <dl_javascript@nhn.com>
 */



/**
 * Check whether the given variable is a string or not.
 * If the given variable is a string, return true.
 * @param {*} obj - Target for checking
 * @returns {boolean} Is string?
 * @memberof module:type
 */
function isString(obj) {
  return typeof obj === 'string' || obj instanceof String;
}

module.exports = isString;


/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ src)
});

// UNUSED EXPORTS: LocalDate, MomentDate, UTCDate

// EXTERNAL MODULE: ../../node_modules/tui-code-snippet/type/isString.js
var isString = __webpack_require__(450);
var isString_default = /*#__PURE__*/__webpack_require__.n(isString);
;// ./src/localDate.js
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _construct(t, e, r) { if (_isNativeReflectConstruct()) return Reflect.construct.apply(null, arguments); var o = [null]; o.push.apply(o, e); var p = new (t.bind.apply(t, o))(); return r && _setPrototypeOf(p, r.prototype), p; }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }

/**
 * datetime regex from https://www.regexpal.com/94925
 * timezone regex from moment
 */
var rISO8601 = /^(-?(?:[1-9][0-9]*)?[0-9]{4})-(1[0-2]|0[1-9])-(3[01]|0[1-9]|[12][0-9])T(2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9])(\.)?([0-9]+)?([+-]\d\d(?::?\d\d)?|\s*Z)?$/;
function throwNotSupported() {
  throw new Error('This operation is not supported.');
}
function getDateTime(dateString) {
  var match = rISO8601.exec(dateString);
  if (match) {
    var _match = _slicedToArray(match, 10),
      y = _match[1],
      M = _match[2],
      d = _match[3],
      h = _match[4],
      m = _match[5],
      s = _match[6],
      ms = _match[8],
      zoneInfo = _match[9];
    return {
      y: Number(y),
      M: Number(M) - 1,
      d: Number(d),
      h: Number(h),
      m: Number(m),
      s: Number(s),
      ms: Number(ms) || 0,
      zoneInfo: zoneInfo
    };
  }
  return null;
}
function createFromDateString(dateString) {
  var info = getDateTime(dateString);
  if (info && !info.zoneInfo) {
    var y = info.y,
      M = info.M,
      d = info.d,
      h = info.h,
      m = info.m,
      s = info.s,
      ms = info.ms;
    return new Date(y, M, d, h, m, s, ms);
  }
  return null;
}
var LocalDate = /*#__PURE__*/function () {
  function LocalDate() {
    _classCallCheck(this, LocalDate);
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    var firstArg = args[0];
    if (firstArg instanceof Date) {
      this.d = new Date(firstArg.getTime());
    } else if (isString_default()(firstArg) && args.length === 1) {
      this.d = createFromDateString(firstArg);
    }
    if (!this.d) {
      this.d = _construct(Date, args);
    }
  }
  return _createClass(LocalDate, [{
    key: "setTimezoneOffset",
    value: function setTimezoneOffset() {
      throwNotSupported();
    }
  }, {
    key: "setTimezoneName",
    value: function setTimezoneName() {
      throwNotSupported();
    }
  }, {
    key: "clone",
    value: function clone() {
      return new LocalDate(this.d);
    }
  }, {
    key: "toDate",
    value: function toDate() {
      return new Date(this.d.getTime());
    }
  }, {
    key: "toString",
    value: function toString() {
      return this.d.toString();
    }
  }]);
}();

var getterMethods = ['getTime', 'getTimezoneOffset', 'getFullYear', 'getMonth', 'getDate', 'getHours', 'getMinutes', 'getSeconds', 'getMilliseconds', 'getDay'];
var setterMethods = ['setTime', 'setFullYear', 'setMonth', 'setDate', 'setHours', 'setMinutes', 'setSeconds', 'setMilliseconds'];
getterMethods.forEach(function (methodName) {
  LocalDate.prototype[methodName] = function () {
    var _this$d;
    return (_this$d = this.d)[methodName].apply(_this$d, arguments);
  };
});
setterMethods.forEach(function (methodName) {
  LocalDate.prototype[methodName] = function () {
    var _this$d2;
    return (_this$d2 = this.d)[methodName].apply(_this$d2, arguments);
  };
});
;// ./src/utcDate.js
function utcDate_typeof(o) { "@babel/helpers - typeof"; return utcDate_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, utcDate_typeof(o); }
function utcDate_classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function utcDate_defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, utcDate_toPropertyKey(o.key), o); } }
function utcDate_createClass(e, r, t) { return r && utcDate_defineProperties(e.prototype, r), t && utcDate_defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function utcDate_toPropertyKey(t) { var i = utcDate_toPrimitive(t, "string"); return "symbol" == utcDate_typeof(i) ? i : i + ""; }
function utcDate_toPrimitive(t, r) { if ("object" != utcDate_typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != utcDate_typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, utcDate_isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == utcDate_typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function utcDate_isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (utcDate_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && utcDate_setPrototypeOf(t, e); }
function utcDate_setPrototypeOf(t, e) { return utcDate_setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, utcDate_setPrototypeOf(t, e); }

var UTCDate = /*#__PURE__*/function (_LocalDate) {
  function UTCDate() {
    utcDate_classCallCheck(this, UTCDate);
    return _callSuper(this, UTCDate, arguments);
  }
  _inherits(UTCDate, _LocalDate);
  return utcDate_createClass(UTCDate, [{
    key: "clone",
    value: function clone() {
      return new UTCDate(this.d);
    }
  }, {
    key: "getTimezoneOffset",
    value: function getTimezoneOffset() {
      return 0;
    }
  }]);
}(LocalDate);

var getterProperties = ['FullYear', 'Month', 'Date', 'Hours', 'Minutes', 'Seconds', 'Milliseconds', 'Day'];
var setterProperties = ['FullYear', 'Month', 'Date', 'Hours', 'Minutes', 'Seconds', 'Milliseconds'];
getterProperties.forEach(function (prop) {
  var methodName = "get".concat(prop);
  UTCDate.prototype[methodName] = function () {
    var _this$d;
    return (_this$d = this.d)["getUTC".concat(prop)].apply(_this$d, arguments);
  };
});
setterProperties.forEach(function (prop) {
  var methodName = "set".concat(prop);
  UTCDate.prototype[methodName] = function () {
    var _this$d2;
    return (_this$d2 = this.d)["setUTC".concat(prop)].apply(_this$d2, arguments);
  };
});
;// ./src/momentDate.js
function momentDate_typeof(o) { "@babel/helpers - typeof"; return momentDate_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, momentDate_typeof(o); }
function momentDate_classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function momentDate_defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, momentDate_toPropertyKey(o.key), o); } }
function momentDate_createClass(e, r, t) { return r && momentDate_defineProperties(e.prototype, r), t && momentDate_defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function momentDate_toPropertyKey(t) { var i = momentDate_toPrimitive(t, "string"); return "symbol" == momentDate_typeof(i) ? i : i + ""; }
function momentDate_toPrimitive(t, r) { if ("object" != momentDate_typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != momentDate_typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var moment;
var MomentDate = /*#__PURE__*/function () {
  function MomentDate() {
    momentDate_classCallCheck(this, MomentDate);
    if (!moment) {
      throw new Error('MomentDate requires Moment constructor. Use "MomentDate.setMoment(moment);".');
    }
    this.m = moment.apply(void 0, arguments);
  }
  return momentDate_createClass(MomentDate, [{
    key: "setTimezoneOffset",
    value: function setTimezoneOffset(offset) {
      this.m.utcOffset(-offset);
      return this;
    }
  }, {
    key: "setTimezoneName",
    value: function setTimezoneName(zoneName) {
      if (this.m.tz) {
        this.m.tz(zoneName);
      } else {
        throw new Error('It requires moment-timezone. Use "MomentDate.setMoment()" with moment-timezone');
      }
      return this;
    }
  }, {
    key: "clone",
    value: function clone() {
      return new MomentDate(this.m);
    }
  }, {
    key: "toDate",
    value: function toDate() {
      return this.m.toDate();
    }
  }, {
    key: "toString",
    value: function toString() {
      return this.m.format();
    }
  }, {
    key: "getTime",
    value: function getTime() {
      return this.m.valueOf();
    }
  }, {
    key: "getTimezoneOffset",
    value: function getTimezoneOffset() {
      var offset = -this.m.utcOffset();
      return Math.abs(offset) ? offset : 0;
    }
  }, {
    key: "getFullYear",
    value: function getFullYear() {
      return this.m.year();
    }
  }, {
    key: "getMonth",
    value: function getMonth() {
      return this.m.month();
    }
  }, {
    key: "getDate",
    value: function getDate() {
      return this.m.date();
    }
  }, {
    key: "getHours",
    value: function getHours() {
      return this.m.hours();
    }
  }, {
    key: "getMinutes",
    value: function getMinutes() {
      return this.m.minutes();
    }
  }, {
    key: "getSeconds",
    value: function getSeconds() {
      return this.m.seconds();
    }
  }, {
    key: "getMilliseconds",
    value: function getMilliseconds() {
      return this.m.milliseconds();
    }
  }, {
    key: "getDay",
    value: function getDay() {
      return this.m.day();
    }
  }, {
    key: "setTime",
    value: function setTime(t) {
      this.m = moment(t);
      return this.getTime();
    }
  }, {
    key: "setFullYear",
    value: function setFullYear(y) {
      var m = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.getMonth();
      var d = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this.getDate();
      this.m.year(y).month(m).date(d);
      return this.getTime();
    }
  }, {
    key: "setMonth",
    value: function setMonth(m) {
      var d = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.m.date();
      this.m.month(m).date(d);
      return this.getTime();
    }
  }, {
    key: "setDate",
    value: function setDate(d) {
      this.m.date(d);
      return this.getTime();
    }
  }, {
    key: "setHours",
    value: function setHours(h) {
      var m = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.getMinutes();
      var s = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this.getSeconds();
      var ms = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : this.getMilliseconds();
      this.m.hours(h).minutes(m).seconds(s).milliseconds(ms);
      return this.getTime();
    }
  }, {
    key: "setMinutes",
    value: function setMinutes(m) {
      var s = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.getSeconds();
      var ms = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this.getMilliseconds();
      this.m.minutes(m).seconds(s).milliseconds(ms);
      return this.getTime();
    }
  }, {
    key: "setSeconds",
    value: function setSeconds(s) {
      var ms = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.getMilliseconds();
      this.m.seconds(s).milliseconds(ms);
      return this.getTime();
    }
  }, {
    key: "setMilliseconds",
    value: function setMilliseconds(ms) {
      this.m.milliseconds(ms);
      return this.getTime();
    }
  }], [{
    key: "setMoment",
    value: function setMoment(m) {
      moment = m;
      return MomentDate;
    }
  }]);
}();

;// ./src/index.js



/* harmony default export */ const src = ({
  LocalDate: LocalDate,
  UTCDate: UTCDate,
  MomentDate: MomentDate
});

__webpack_exports__ = __webpack_exports__["default"];
/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=toastui-date.js.map