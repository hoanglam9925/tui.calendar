import Vue from "vue";
function getDefaultExportFromCjs$1(x2) {
  return x2 && x2.__esModule && Object.prototype.hasOwnProperty.call(x2, "default") ? x2["default"] : x2;
}
var tuiDatePicker = { exports: {} };
var tuiTimePicker = { exports: {} };
/*!
 * TOAST UI Time Picker
 * @version 2.1.6
 * @license MIT
 */
(function(module, exports) {
  (function webpackUniversalModuleDefinition(root, factory) {
    module.exports = factory();
  })(window, function() {
    return function(modules) {
      var installedModules = {};
      function __webpack_require__(moduleId) {
        if (installedModules[moduleId]) {
          return installedModules[moduleId].exports;
        }
        var module2 = installedModules[moduleId] = {
          i: moduleId,
          l: false,
          exports: {}
        };
        modules[moduleId].call(module2.exports, module2, module2.exports, __webpack_require__);
        module2.l = true;
        return module2.exports;
      }
      __webpack_require__.m = modules;
      __webpack_require__.c = installedModules;
      __webpack_require__.d = function(exports2, name, getter) {
        if (!__webpack_require__.o(exports2, name)) {
          Object.defineProperty(exports2, name, { enumerable: true, get: getter });
        }
      };
      __webpack_require__.r = function(exports2) {
        if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
          Object.defineProperty(exports2, Symbol.toStringTag, { value: "Module" });
        }
        Object.defineProperty(exports2, "__esModule", { value: true });
      };
      __webpack_require__.t = function(value, mode) {
        if (mode & 1)
          value = __webpack_require__(value);
        if (mode & 8)
          return value;
        if (mode & 4 && typeof value === "object" && value && value.__esModule)
          return value;
        var ns = /* @__PURE__ */ Object.create(null);
        __webpack_require__.r(ns);
        Object.defineProperty(ns, "default", { enumerable: true, value });
        if (mode & 2 && typeof value != "string")
          for (var key in value)
            __webpack_require__.d(ns, key, function(key2) {
              return value[key2];
            }.bind(null, key));
        return ns;
      };
      __webpack_require__.n = function(module2) {
        var getter = module2 && module2.__esModule ? function getDefault() {
          return module2["default"];
        } : function getModuleExports() {
          return module2;
        };
        __webpack_require__.d(getter, "a", getter);
        return getter;
      };
      __webpack_require__.o = function(object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
      };
      __webpack_require__.p = "dist";
      return __webpack_require__(__webpack_require__.s = 20);
    }([
      function(module2, exports2, __webpack_require__) {
        var isArray2 = __webpack_require__(3);
        function inArray(searchElement, array2, startIndex) {
          var i2;
          var length;
          startIndex = startIndex || 0;
          if (!isArray2(array2)) {
            return -1;
          }
          if (Array.prototype.indexOf) {
            return Array.prototype.indexOf.call(array2, searchElement, startIndex);
          }
          length = array2.length;
          for (i2 = startIndex; startIndex >= 0 && i2 < length; i2 += 1) {
            if (array2[i2] === searchElement) {
              return i2;
            }
          }
          return -1;
        }
        module2.exports = inArray;
      },
      function(module2, exports2, __webpack_require__) {
        function forEachArray2(arr, iteratee, context) {
          var index = 0;
          var len = arr.length;
          context = context || null;
          for (; index < len; index += 1) {
            if (iteratee.call(context, arr[index], index, arr) === false) {
              break;
            }
          }
        }
        module2.exports = forEachArray2;
      },
      function(module2, exports2, __webpack_require__) {
        function extend2(target, objects) {
          var hasOwnProp = Object.prototype.hasOwnProperty;
          var source, prop, i2, len;
          for (i2 = 1, len = arguments.length; i2 < len; i2 += 1) {
            source = arguments[i2];
            for (prop in source) {
              if (hasOwnProp.call(source, prop)) {
                target[prop] = source[prop];
              }
            }
          }
          return target;
        }
        module2.exports = extend2;
      },
      function(module2, exports2, __webpack_require__) {
        function isArray2(obj) {
          return obj instanceof Array;
        }
        module2.exports = isArray2;
      },
      function(module2, exports2, __webpack_require__) {
        var isArray2 = __webpack_require__(3);
        var forEachArray2 = __webpack_require__(1);
        var forEachOwnProperties2 = __webpack_require__(16);
        function forEach2(obj, iteratee, context) {
          if (isArray2(obj)) {
            forEachArray2(obj, iteratee, context);
          } else {
            forEachOwnProperties2(obj, iteratee, context);
          }
        }
        module2.exports = forEach2;
      },
      function(module2, exports2, __webpack_require__) {
        function isUndefined2(obj) {
          return obj === void 0;
        }
        module2.exports = isUndefined2;
      },
      function(module2, exports2, __webpack_require__) {
        function isString2(obj) {
          return typeof obj === "string" || obj instanceof String;
        }
        module2.exports = isString2;
      },
      function(module2, exports2, __webpack_require__) {
        var inArray = __webpack_require__(0);
        var forEach2 = __webpack_require__(4);
        var isArray2 = __webpack_require__(3);
        var isString2 = __webpack_require__(6);
        var extend2 = __webpack_require__(2);
        var EXPRESSION_REGEXP = /{{\s?|\s?}}/g;
        var BRACKET_NOTATION_REGEXP = /^[a-zA-Z0-9_@]+\[[a-zA-Z0-9_@"']+\]$/;
        var BRACKET_REGEXP = /\[\s?|\s?\]/;
        var DOT_NOTATION_REGEXP = /^[a-zA-Z_]+\.[a-zA-Z_]+$/;
        var DOT_REGEXP = /\./;
        var STRING_NOTATION_REGEXP = /^["']\w+["']$/;
        var STRING_REGEXP = /"|'/g;
        var NUMBER_REGEXP = /^-?\d+\.?\d*$/;
        var EXPRESSION_INTERVAL = 2;
        var BLOCK_HELPERS = {
          "if": handleIf,
          "each": handleEach,
          "with": handleWith
        };
        var isValidSplit = "a".split(/a/).length === 3;
        var splitByRegExp = function() {
          if (isValidSplit) {
            return function(text2, regexp) {
              return text2.split(regexp);
            };
          }
          return function(text2, regexp) {
            var result = [];
            var prevIndex = 0;
            var match, index;
            if (!regexp.global) {
              regexp = new RegExp(regexp, "g");
            }
            match = regexp.exec(text2);
            while (match !== null) {
              index = match.index;
              result.push(text2.slice(prevIndex, index));
              prevIndex = index + match[0].length;
              match = regexp.exec(text2);
            }
            result.push(text2.slice(prevIndex));
            return result;
          };
        }();
        function getValueFromContext(exp, context) {
          var splitedExps;
          var value = context[exp];
          if (exp === "true") {
            value = true;
          } else if (exp === "false") {
            value = false;
          } else if (STRING_NOTATION_REGEXP.test(exp)) {
            value = exp.replace(STRING_REGEXP, "");
          } else if (BRACKET_NOTATION_REGEXP.test(exp)) {
            splitedExps = exp.split(BRACKET_REGEXP);
            value = getValueFromContext(splitedExps[0], context)[getValueFromContext(splitedExps[1], context)];
          } else if (DOT_NOTATION_REGEXP.test(exp)) {
            splitedExps = exp.split(DOT_REGEXP);
            value = getValueFromContext(splitedExps[0], context)[splitedExps[1]];
          } else if (NUMBER_REGEXP.test(exp)) {
            value = parseFloat(exp);
          }
          return value;
        }
        function extractElseif(ifExps, sourcesInsideBlock) {
          var exps = [ifExps];
          var sourcesInsideIf = [];
          var otherIfCount = 0;
          var start = 0;
          forEach2(sourcesInsideBlock, function(source, index) {
            if (source.indexOf("if") === 0) {
              otherIfCount += 1;
            } else if (source === "/if") {
              otherIfCount -= 1;
            } else if (!otherIfCount && (source.indexOf("elseif") === 0 || source === "else")) {
              exps.push(source === "else" ? ["true"] : source.split(" ").slice(1));
              sourcesInsideIf.push(sourcesInsideBlock.slice(start, index));
              start = index + 1;
            }
          });
          sourcesInsideIf.push(sourcesInsideBlock.slice(start));
          return {
            exps,
            sourcesInsideIf
          };
        }
        function handleIf(exps, sourcesInsideBlock, context) {
          var analyzed = extractElseif(exps, sourcesInsideBlock);
          var result = false;
          var compiledSource = "";
          forEach2(analyzed.exps, function(exp, index) {
            result = handleExpression(exp, context);
            if (result) {
              compiledSource = compile(analyzed.sourcesInsideIf[index], context);
            }
            return !result;
          });
          return compiledSource;
        }
        function handleEach(exps, sourcesInsideBlock, context) {
          var collection = handleExpression(exps, context);
          var additionalKey = isArray2(collection) ? "@index" : "@key";
          var additionalContext = {};
          var result = "";
          forEach2(collection, function(item, key) {
            additionalContext[additionalKey] = key;
            additionalContext["@this"] = item;
            extend2(context, additionalContext);
            result += compile(sourcesInsideBlock.slice(), context);
          });
          return result;
        }
        function handleWith(exps, sourcesInsideBlock, context) {
          var asIndex = inArray("as", exps);
          var alias = exps[asIndex + 1];
          var result = handleExpression(exps.slice(0, asIndex), context);
          var additionalContext = {};
          additionalContext[alias] = result;
          return compile(sourcesInsideBlock, extend2(context, additionalContext)) || "";
        }
        function extractSourcesInsideBlock(sources, start, end) {
          var sourcesInsideBlock = sources.splice(start + 1, end - start);
          sourcesInsideBlock.pop();
          return sourcesInsideBlock;
        }
        function handleBlockHelper(helperKeyword, sourcesToEnd, context) {
          var executeBlockHelper = BLOCK_HELPERS[helperKeyword];
          var helperCount = 1;
          var startBlockIndex = 0;
          var endBlockIndex;
          var index = startBlockIndex + EXPRESSION_INTERVAL;
          var expression = sourcesToEnd[index];
          while (helperCount && isString2(expression)) {
            if (expression.indexOf(helperKeyword) === 0) {
              helperCount += 1;
            } else if (expression.indexOf("/" + helperKeyword) === 0) {
              helperCount -= 1;
              endBlockIndex = index;
            }
            index += EXPRESSION_INTERVAL;
            expression = sourcesToEnd[index];
          }
          if (helperCount) {
            throw Error(helperKeyword + " needs {{/" + helperKeyword + "}} expression.");
          }
          sourcesToEnd[startBlockIndex] = executeBlockHelper(
            sourcesToEnd[startBlockIndex].split(" ").slice(1),
            extractSourcesInsideBlock(sourcesToEnd, startBlockIndex, endBlockIndex),
            context
          );
          return sourcesToEnd;
        }
        function handleExpression(exps, context) {
          var result = getValueFromContext(exps[0], context);
          if (result instanceof Function) {
            return executeFunction(result, exps.slice(1), context);
          }
          return result;
        }
        function executeFunction(helper, argExps, context) {
          var args = [];
          forEach2(argExps, function(exp) {
            args.push(getValueFromContext(exp, context));
          });
          return helper.apply(null, args);
        }
        function compile(sources, context) {
          var index = 1;
          var expression = sources[index];
          var exps, firstExp, result;
          while (isString2(expression)) {
            exps = expression.split(" ");
            firstExp = exps[0];
            if (BLOCK_HELPERS[firstExp]) {
              result = handleBlockHelper(firstExp, sources.splice(index, sources.length - index), context);
              sources = sources.concat(result);
            } else {
              sources[index] = handleExpression(exps, context);
            }
            index += EXPRESSION_INTERVAL;
            expression = sources[index];
          }
          return sources.join("");
        }
        function template(text2, context) {
          return compile(splitByRegExp(text2, EXPRESSION_REGEXP), context);
        }
        module2.exports = template;
      },
      function(module2, exports2, __webpack_require__) {
        var extend2 = __webpack_require__(2);
        var isExisty2 = __webpack_require__(23);
        var isString2 = __webpack_require__(6);
        var isObject2 = __webpack_require__(25);
        var isArray2 = __webpack_require__(3);
        var isFunction2 = __webpack_require__(26);
        var forEach2 = __webpack_require__(4);
        var R_EVENTNAME_SPLIT2 = /\s+/g;
        function CustomEvents2() {
          this.events = null;
          this.contexts = null;
        }
        CustomEvents2.mixin = function(func) {
          extend2(func.prototype, CustomEvents2.prototype);
        };
        CustomEvents2.prototype._getHandlerItem = function(handler, context) {
          var item = { handler };
          if (context) {
            item.context = context;
          }
          return item;
        };
        CustomEvents2.prototype._safeEvent = function(eventName) {
          var events = this.events;
          var byName;
          if (!events) {
            events = this.events = {};
          }
          if (eventName) {
            byName = events[eventName];
            if (!byName) {
              byName = [];
              events[eventName] = byName;
            }
            events = byName;
          }
          return events;
        };
        CustomEvents2.prototype._safeContext = function() {
          var context = this.contexts;
          if (!context) {
            context = this.contexts = [];
          }
          return context;
        };
        CustomEvents2.prototype._indexOfContext = function(ctx) {
          var context = this._safeContext();
          var index = 0;
          while (context[index]) {
            if (ctx === context[index][0]) {
              return index;
            }
            index += 1;
          }
          return -1;
        };
        CustomEvents2.prototype._memorizeContext = function(ctx) {
          var context, index;
          if (!isExisty2(ctx)) {
            return;
          }
          context = this._safeContext();
          index = this._indexOfContext(ctx);
          if (index > -1) {
            context[index][1] += 1;
          } else {
            context.push([ctx, 1]);
          }
        };
        CustomEvents2.prototype._forgetContext = function(ctx) {
          var context, contextIndex;
          if (!isExisty2(ctx)) {
            return;
          }
          context = this._safeContext();
          contextIndex = this._indexOfContext(ctx);
          if (contextIndex > -1) {
            context[contextIndex][1] -= 1;
            if (context[contextIndex][1] <= 0) {
              context.splice(contextIndex, 1);
            }
          }
        };
        CustomEvents2.prototype._bindEvent = function(eventName, handler, context) {
          var events = this._safeEvent(eventName);
          this._memorizeContext(context);
          events.push(this._getHandlerItem(handler, context));
        };
        CustomEvents2.prototype.on = function(eventName, handler, context) {
          var self2 = this;
          if (isString2(eventName)) {
            eventName = eventName.split(R_EVENTNAME_SPLIT2);
            forEach2(eventName, function(name) {
              self2._bindEvent(name, handler, context);
            });
          } else if (isObject2(eventName)) {
            context = handler;
            forEach2(eventName, function(func, name) {
              self2.on(name, func, context);
            });
          }
        };
        CustomEvents2.prototype.once = function(eventName, handler, context) {
          var self2 = this;
          if (isObject2(eventName)) {
            context = handler;
            forEach2(eventName, function(func, name) {
              self2.once(name, func, context);
            });
            return;
          }
          function onceHandler() {
            handler.apply(context, arguments);
            self2.off(eventName, onceHandler, context);
          }
          this.on(eventName, onceHandler, context);
        };
        CustomEvents2.prototype._spliceMatches = function(arr, predicate) {
          var i2 = 0;
          var len;
          if (!isArray2(arr)) {
            return;
          }
          for (len = arr.length; i2 < len; i2 += 1) {
            if (predicate(arr[i2]) === true) {
              arr.splice(i2, 1);
              len -= 1;
              i2 -= 1;
            }
          }
        };
        CustomEvents2.prototype._matchHandler = function(handler) {
          var self2 = this;
          return function(item) {
            var needRemove = handler === item.handler;
            if (needRemove) {
              self2._forgetContext(item.context);
            }
            return needRemove;
          };
        };
        CustomEvents2.prototype._matchContext = function(context) {
          var self2 = this;
          return function(item) {
            var needRemove = context === item.context;
            if (needRemove) {
              self2._forgetContext(item.context);
            }
            return needRemove;
          };
        };
        CustomEvents2.prototype._matchHandlerAndContext = function(handler, context) {
          var self2 = this;
          return function(item) {
            var matchHandler = handler === item.handler;
            var matchContext = context === item.context;
            var needRemove = matchHandler && matchContext;
            if (needRemove) {
              self2._forgetContext(item.context);
            }
            return needRemove;
          };
        };
        CustomEvents2.prototype._offByEventName = function(eventName, handler) {
          var self2 = this;
          var andByHandler = isFunction2(handler);
          var matchHandler = self2._matchHandler(handler);
          eventName = eventName.split(R_EVENTNAME_SPLIT2);
          forEach2(eventName, function(name) {
            var handlerItems = self2._safeEvent(name);
            if (andByHandler) {
              self2._spliceMatches(handlerItems, matchHandler);
            } else {
              forEach2(handlerItems, function(item) {
                self2._forgetContext(item.context);
              });
              self2.events[name] = [];
            }
          });
        };
        CustomEvents2.prototype._offByHandler = function(handler) {
          var self2 = this;
          var matchHandler = this._matchHandler(handler);
          forEach2(this._safeEvent(), function(handlerItems) {
            self2._spliceMatches(handlerItems, matchHandler);
          });
        };
        CustomEvents2.prototype._offByObject = function(obj, handler) {
          var self2 = this;
          var matchFunc;
          if (this._indexOfContext(obj) < 0) {
            forEach2(obj, function(func, name) {
              self2.off(name, func);
            });
          } else if (isString2(handler)) {
            matchFunc = this._matchContext(obj);
            self2._spliceMatches(this._safeEvent(handler), matchFunc);
          } else if (isFunction2(handler)) {
            matchFunc = this._matchHandlerAndContext(handler, obj);
            forEach2(this._safeEvent(), function(handlerItems) {
              self2._spliceMatches(handlerItems, matchFunc);
            });
          } else {
            matchFunc = this._matchContext(obj);
            forEach2(this._safeEvent(), function(handlerItems) {
              self2._spliceMatches(handlerItems, matchFunc);
            });
          }
        };
        CustomEvents2.prototype.off = function(eventName, handler) {
          if (isString2(eventName)) {
            this._offByEventName(eventName, handler);
          } else if (!arguments.length) {
            this.events = {};
            this.contexts = [];
          } else if (isFunction2(eventName)) {
            this._offByHandler(eventName);
          } else if (isObject2(eventName)) {
            this._offByObject(eventName, handler);
          }
        };
        CustomEvents2.prototype.fire = function(eventName) {
          this.invoke.apply(this, arguments);
        };
        CustomEvents2.prototype.invoke = function(eventName) {
          var events, args, index, item;
          if (!this.hasListener(eventName)) {
            return true;
          }
          events = this._safeEvent(eventName);
          args = Array.prototype.slice.call(arguments, 1);
          index = 0;
          while (events[index]) {
            item = events[index];
            if (item.handler.apply(item.context, args) === false) {
              return false;
            }
            index += 1;
          }
          return true;
        };
        CustomEvents2.prototype.hasListener = function(eventName) {
          return this.getListenerLength(eventName) > 0;
        };
        CustomEvents2.prototype.getListenerLength = function(eventName) {
          var events = this._safeEvent(eventName);
          return events.length;
        };
        module2.exports = CustomEvents2;
      },
      function(module2, exports2, __webpack_require__) {
        var inherit = __webpack_require__(27);
        var extend2 = __webpack_require__(2);
        function defineClass(parent, props) {
          var obj;
          if (!props) {
            props = parent;
            parent = null;
          }
          obj = props.init || function() {
          };
          if (parent) {
            inherit(obj, parent);
          }
          if (props.hasOwnProperty("static")) {
            extend2(obj, props["static"]);
            delete props["static"];
          }
          extend2(obj.prototype, props);
          return obj;
        }
        module2.exports = defineClass;
      },
      function(module2, exports2, __webpack_require__) {
        var isString2 = __webpack_require__(6);
        var forEach2 = __webpack_require__(4);
        var safeEvent = __webpack_require__(17);
        function on2(element, types, handler, context) {
          if (isString2(types)) {
            forEach2(types.split(/\s+/g), function(type) {
              bindEvent(element, type, handler, context);
            });
            return;
          }
          forEach2(types, function(func, type) {
            bindEvent(element, type, func, handler);
          });
        }
        function bindEvent(element, type, handler, context) {
          function eventHandler(e2) {
            handler.call(context || element, e2 || window.event);
          }
          if ("addEventListener" in element) {
            element.addEventListener(type, eventHandler);
          } else if ("attachEvent" in element) {
            element.attachEvent("on" + type, eventHandler);
          }
          memorizeHandler(element, type, handler, eventHandler);
        }
        function memorizeHandler(element, type, handler, wrappedHandler) {
          var events = safeEvent(element, type);
          var existInEvents = false;
          forEach2(events, function(obj) {
            if (obj.handler === handler) {
              existInEvents = true;
              return false;
            }
            return true;
          });
          if (!existInEvents) {
            events.push({
              handler,
              wrappedHandler
            });
          }
        }
        module2.exports = on2;
      },
      function(module2, exports2, __webpack_require__) {
        var isString2 = __webpack_require__(6);
        var forEach2 = __webpack_require__(4);
        var safeEvent = __webpack_require__(17);
        function off(element, types, handler) {
          if (isString2(types)) {
            forEach2(types.split(/\s+/g), function(type) {
              unbindEvent(element, type, handler);
            });
            return;
          }
          forEach2(types, function(func, type) {
            unbindEvent(element, type, func);
          });
        }
        function unbindEvent(element, type, handler) {
          var events = safeEvent(element, type);
          var index;
          if (!handler) {
            forEach2(events, function(item) {
              removeHandler(element, type, item.wrappedHandler);
            });
            events.splice(0, events.length);
          } else {
            forEach2(events, function(item, idx) {
              if (handler === item.handler) {
                removeHandler(element, type, item.wrappedHandler);
                index = idx;
                return false;
              }
              return true;
            });
            events.splice(index, 1);
          }
        }
        function removeHandler(element, type, handler) {
          if ("removeEventListener" in element) {
            element.removeEventListener(type, handler);
          } else if ("detachEvent" in element) {
            element.detachEvent("on" + type, handler);
          }
        }
        module2.exports = off;
      },
      function(module2, exports2, __webpack_require__) {
        var matches = __webpack_require__(30);
        function closest(element, selector) {
          var parent = element.parentNode;
          if (matches(element, selector)) {
            return element;
          }
          while (parent && parent !== document) {
            if (matches(parent, selector)) {
              return parent;
            }
            parent = parent.parentNode;
          }
          return null;
        }
        module2.exports = closest;
      },
      function(module2, exports2, __webpack_require__) {
        function removeElement(element) {
          if (element && element.parentNode) {
            element.parentNode.removeChild(element);
          }
        }
        module2.exports = removeElement;
      },
      function(module2, exports2, __webpack_require__) {
        function isHTMLNode(html2) {
          if (typeof HTMLElement === "object") {
            return html2 && (html2 instanceof HTMLElement || !!html2.nodeType);
          }
          return !!(html2 && html2.nodeType);
        }
        module2.exports = isHTMLNode;
      },
      function(module2, exports2, __webpack_require__) {
        var inArray = __webpack_require__(0);
        var forEachArray2 = __webpack_require__(1);
        var sendHostname2 = __webpack_require__(35);
        var uniqueId = 0;
        var utils = {
          getUniqueId: function() {
            uniqueId += 1;
            return uniqueId;
          },
          formatTime: function(value, format) {
            var PADDING_ZERO_TYPES = ["hh", "mm"];
            value = String(value);
            return inArray(format, PADDING_ZERO_TYPES) >= 0 && value.length === 1 ? "0" + value : value;
          },
          getMeridiemHour: function(hour) {
            hour %= 12;
            if (hour === 0) {
              hour = 12;
            }
            return hour;
          },
          getRangeArr: function(start, end, step) {
            var arr = [];
            var i2;
            step = step || 1;
            if (start > end) {
              for (i2 = end; i2 >= start; i2 -= step) {
                arr.push(i2);
              }
            } else {
              for (i2 = start; i2 <= end; i2 += step) {
                arr.push(i2);
              }
            }
            return arr;
          },
          fill: function(start, end, value, target) {
            var arr = target || [];
            var replaceEnd = Math.min(arr.length - 1, end);
            var i2;
            for (i2 = start; i2 <= replaceEnd; i2 += 1) {
              arr[i2] = value;
            }
            for (i2 = replaceEnd; i2 <= end; i2 += 1) {
              arr.push(value);
            }
            return arr;
          },
          getTarget: function(ev) {
            return ev.target || ev.srcElement;
          },
          sendHostName: function() {
            sendHostname2("time-picker", "UA-129987462-1");
          },
          getDisabledMinuteArr: function(enableRanges, minuteStep) {
            var arr = this.fill(0, Math.floor(60 / minuteStep) - 2, false);
            function setDisabled(enableRange) {
              var beginDisabledMinute = Math.ceil(enableRange.begin / minuteStep);
              var endDisabledMinute = Math.floor(enableRange.end / minuteStep);
              arr = this.fill(beginDisabledMinute, endDisabledMinute, true, arr);
            }
            forEachArray2(enableRanges, setDisabled.bind(this));
            return arr;
          },
          setDisabled: function(el, isDisabled) {
            el.disabled = isDisabled;
          }
        };
        module2.exports = utils;
      },
      function(module2, exports2, __webpack_require__) {
        function forEachOwnProperties2(obj, iteratee, context) {
          var key;
          context = context || null;
          for (key in obj) {
            if (obj.hasOwnProperty(key)) {
              if (iteratee.call(context, obj[key], key, obj) === false) {
                break;
              }
            }
          }
        }
        module2.exports = forEachOwnProperties2;
      },
      function(module2, exports2, __webpack_require__) {
        var EVENT_KEY = "_feEventKey";
        function safeEvent(element, type) {
          var events = element[EVENT_KEY];
          var handlers;
          if (!events) {
            events = element[EVENT_KEY] = {};
          }
          handlers = events[type];
          if (!handlers) {
            handlers = events[type] = [];
          }
          return handlers;
        }
        module2.exports = safeEvent;
      },
      function(module2, exports2, __webpack_require__) {
        var isUndefined2 = __webpack_require__(5);
        function getClass(element) {
          if (!element || !element.className) {
            return "";
          }
          if (isUndefined2(element.className.baseVal)) {
            return element.className;
          }
          return element.className.baseVal;
        }
        module2.exports = getClass;
      },
      function(module2, exports2, __webpack_require__) {
        var isArray2 = __webpack_require__(3);
        var isUndefined2 = __webpack_require__(5);
        function setClassName(element, cssClass) {
          cssClass = isArray2(cssClass) ? cssClass.join(" ") : cssClass;
          cssClass = cssClass.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
          if (isUndefined2(element.className.baseVal)) {
            element.className = cssClass;
            return;
          }
          element.className.baseVal = cssClass;
        }
        module2.exports = setClassName;
      },
      function(module2, exports2, __webpack_require__) {
        __webpack_require__(21);
        module2.exports = __webpack_require__(22);
      },
      function(module2, exports2, __webpack_require__) {
      },
      function(module2, exports2, __webpack_require__) {
        var inArray = __webpack_require__(0);
        var forEachArray2 = __webpack_require__(1);
        var CustomEvents2 = __webpack_require__(8);
        var defineClass = __webpack_require__(9);
        var extend2 = __webpack_require__(2);
        var on2 = __webpack_require__(10);
        var off = __webpack_require__(11);
        var addClass = __webpack_require__(29);
        var closest = __webpack_require__(12);
        var removeElement = __webpack_require__(13);
        var removeClass = __webpack_require__(32);
        var isHTMLNode = __webpack_require__(14);
        var isNumber2 = __webpack_require__(33);
        var Spinbox = __webpack_require__(34);
        var Selectbox = __webpack_require__(38);
        var util = __webpack_require__(15);
        var localeTexts = __webpack_require__(40);
        var tmpl = __webpack_require__(41);
        var meridiemTmpl = __webpack_require__(42);
        var SELECTOR_HOUR_ELEMENT = ".tui-timepicker-hour";
        var SELECTOR_MINUTE_ELEMENT = ".tui-timepicker-minute";
        var SELECTOR_MERIDIEM_ELEMENT = ".tui-timepicker-meridiem";
        var CLASS_NAME_LEFT_MERIDIEM = "tui-has-left";
        var CLASS_NAME_HIDDEN = "tui-hidden";
        var CLASS_NAME_CHECKED = "tui-timepicker-meridiem-checked";
        var INPUT_TYPE_SPINBOX = "spinbox";
        var INPUT_TYPE_SELECTBOX = "selectbox";
        var START_NUMBER_OF_TIME = 0;
        var END_NUMBER_OF_MINUTE = 59;
        var END_NUMBER_OF_HOUR = 23;
        var END_NUMBER_OF_HOUR_WITH_MERIDIEM = 12;
        var mergeDefaultOptions = function(options) {
          return extend2(
            {
              language: "en",
              initialHour: 0,
              initialMinute: 0,
              showMeridiem: true,
              inputType: "selectbox",
              hourStep: 1,
              minuteStep: 1,
              meridiemPosition: "right",
              format: "h:m",
              disabledHours: [],
              disabledMinutes: {},
              usageStatistics: true
            },
            options
          );
        };
        var TimePicker = defineClass(
          {
            static: {
              localeTexts
            },
            init: function(container, options) {
              options = mergeDefaultOptions(options);
              this.id = util.getUniqueId();
              this.container = isHTMLNode(container) ? container : document.querySelector(container);
              this.element = null;
              this.meridiemElement = null;
              this.amEl = null;
              this.pmEl = null;
              this.showMeridiem = options.showMeridiem;
              this.meridiemPosition = options.meridiemPosition;
              this.hourInput = null;
              this.minuteInput = null;
              this.hour = options.initialHour;
              this.minute = options.initialMinute;
              this.hourStep = options.hourStep;
              this.minuteStep = options.minuteStep;
              this.disabledHours = options.disabledHours;
              this.disabledMinutes = options.disabledMinutes;
              this.inputType = options.inputType;
              this.localeText = localeTexts[options.language];
              this.format = this.getValidTimeFormat(options.format);
              this.render();
              this.setEvents();
              if (options.usageStatistics) {
                util.sendHostName();
              }
            },
            setEvents: function() {
              this.hourInput.on("change", this.onChangeTimeInput, this);
              this.minuteInput.on("change", this.onChangeTimeInput, this);
              if (this.showMeridiem) {
                if (this.inputType === INPUT_TYPE_SELECTBOX) {
                  on2(this.meridiemElement.querySelector("select"), "change", this.onChangeMeridiem, this);
                } else if (this.inputType === INPUT_TYPE_SPINBOX) {
                  on2(this.meridiemElement, "click", this.onChangeMeridiem, this);
                }
              }
            },
            removeEvents: function() {
              this.off();
              this.hourInput.destroy();
              this.minuteInput.destroy();
              if (this.showMeridiem) {
                if (this.inputType === INPUT_TYPE_SELECTBOX) {
                  off(this.meridiemElement.querySelector("select"), "change", this.onChangeMeridiem, this);
                } else if (this.inputType === INPUT_TYPE_SPINBOX) {
                  off(this.meridiemElement, "click", this.onChangeMeridiem, this);
                }
              }
            },
            render: function() {
              var context = {
                showMeridiem: this.showMeridiem,
                isSpinbox: this.inputType === "spinbox"
              };
              if (this.showMeridiem) {
                extend2(context, {
                  meridiemElement: this.makeMeridiemHTML()
                });
              }
              if (this.element) {
                removeElement(this.element);
              }
              this.container.innerHTML = tmpl(context);
              this.element = this.container.firstChild;
              this.renderTimeInputs();
              if (this.showMeridiem) {
                this.setMeridiemElement();
              }
            },
            setMeridiemElement: function() {
              if (this.meridiemPosition === "left") {
                addClass(this.element, CLASS_NAME_LEFT_MERIDIEM);
              }
              this.meridiemElement = this.element.querySelector(SELECTOR_MERIDIEM_ELEMENT);
              this.amEl = this.meridiemElement.querySelector('[value="AM"]');
              this.pmEl = this.meridiemElement.querySelector('[value="PM"]');
              this.syncToMeridiemElements();
            },
            makeMeridiemHTML: function() {
              var localeText = this.localeText;
              return meridiemTmpl({
                am: localeText.am,
                pm: localeText.pm,
                radioId: this.id,
                isSpinbox: this.inputType === "spinbox"
              });
            },
            renderTimeInputs: function() {
              var hour = this.hour;
              var showMeridiem = this.showMeridiem;
              var hourElement = this.element.querySelector(SELECTOR_HOUR_ELEMENT);
              var minuteElement = this.element.querySelector(SELECTOR_MINUTE_ELEMENT);
              var BoxComponent = this.inputType.toLowerCase() === "selectbox" ? Selectbox : Spinbox;
              var formatExplode = this.format.split(":");
              var hourItems = this.getHourItems();
              if (showMeridiem) {
                hour = util.getMeridiemHour(hour);
              }
              this.hourInput = new BoxComponent(hourElement, {
                initialValue: hour,
                items: hourItems,
                format: formatExplode[0],
                disabledItems: this.makeDisabledStatItems(hourItems)
              });
              this.minuteInput = new BoxComponent(minuteElement, {
                initialValue: this.minute,
                items: this.getMinuteItems(),
                format: formatExplode[1]
              });
            },
            makeDisabledStatItems: function(hourItems) {
              var result = [];
              var disabledHours = this.disabledHours.slice();
              if (this.showMeridiem) {
                disabledHours = this.meridiemableTime(disabledHours);
              }
              forEachArray2(hourItems, function(hour) {
                result.push(inArray(hour, disabledHours) >= 0);
              });
              return result;
            },
            meridiemableTime: function(disabledHours) {
              var diffHour = 0;
              var startHour = 0;
              var endHour = 11;
              var result = [];
              if (this.hour >= 12) {
                diffHour = 12;
                startHour = 12;
                endHour = 23;
              }
              forEachArray2(disabledHours, function(hour) {
                if (hour >= startHour && hour <= endHour) {
                  result.push(hour - diffHour === 0 ? 12 : hour - diffHour);
                }
              });
              return result;
            },
            getValidTimeFormat: function(format) {
              if (!format.match(/^[h]{1,2}:[m]{1,2}$/i)) {
                return "h:m";
              }
              return format.toLowerCase();
            },
            syncToMeridiemElements: function() {
              var selectedEl = this.hour >= 12 ? this.pmEl : this.amEl;
              var notSelectedEl = selectedEl === this.pmEl ? this.amEl : this.pmEl;
              selectedEl.setAttribute("selected", true);
              selectedEl.setAttribute("checked", true);
              addClass(selectedEl, CLASS_NAME_CHECKED);
              notSelectedEl.removeAttribute("selected");
              notSelectedEl.removeAttribute("checked");
              removeClass(notSelectedEl, CLASS_NAME_CHECKED);
            },
            syncToInputs: function() {
              var hour = this.hour;
              var minute = this.minute;
              if (this.showMeridiem) {
                hour = util.getMeridiemHour(hour);
              }
              this.hourInput.setValue(hour, true);
              this.minuteInput.setValue(minute, true);
            },
            onChangeMeridiem: function(ev) {
              var hour = this.hour;
              var target = util.getTarget(ev);
              if (target.value && closest(target, SELECTOR_MERIDIEM_ELEMENT)) {
                hour = this.to24Hour(target.value === "PM", hour);
                this.setTime(hour, this.minute);
                this.setDisabledHours();
                this.setDisabledMinutes(hour);
              }
            },
            onChangeTimeInput: function() {
              var hour = this.hourInput.getValue();
              var minute = this.minuteInput.getValue();
              var isPM = this.hour >= 12;
              if (this.showMeridiem) {
                hour = this.to24Hour(isPM, hour);
              }
              this.setTime(hour, minute);
              this.setDisabledMinutes(hour);
            },
            to24Hour: function(isPM, hour) {
              hour %= 12;
              if (isPM) {
                hour += 12;
              }
              return hour;
            },
            setDisabledHours: function() {
              var hourItems = this.getHourItems();
              var disabledItems = this.makeDisabledStatItems(hourItems);
              this.hourInput.setDisabledItems(disabledItems);
            },
            setDisabledMinutes: function(hour) {
              var disabledItems;
              disabledItems = this.disabledMinutes[hour] || [];
              this.minuteInput.setDisabledItems(disabledItems);
            },
            getHourItems: function() {
              var step = this.hourStep;
              return this.showMeridiem ? util.getRangeArr(1, 12, step) : util.getRangeArr(0, 23, step);
            },
            getMinuteItems: function() {
              return util.getRangeArr(0, 59, this.minuteStep);
            },
            validItems: function(hour, minute) {
              if (!isNumber2(hour) || !isNumber2(minute)) {
                return false;
              }
              if (this.showMeridiem) {
                hour = util.getMeridiemHour(hour);
              }
              return inArray(hour, this.getHourItems()) > -1 && inArray(minute, this.getMinuteItems()) > -1;
            },
            setHourStep: function(step) {
              this.hourStep = step;
              this.hourInput.fire("changeItems", this.getHourItems());
            },
            getHourStep: function() {
              return this.hourStep;
            },
            setMinuteStep: function(step) {
              this.minuteStep = step;
              this.minuteInput.fire("changeItems", this.getMinuteItems());
            },
            getMinuteStep: function() {
              return this.minuteStep;
            },
            show: function() {
              removeClass(this.element, CLASS_NAME_HIDDEN);
            },
            hide: function() {
              addClass(this.element, CLASS_NAME_HIDDEN);
            },
            setHour: function(hour) {
              return this.setTime(hour, this.minute);
            },
            setMinute: function(minute) {
              return this.setTime(this.hour, minute);
            },
            setTime: function(hour, minute, silent) {
              if (!this.validItems(hour, minute)) {
                return;
              }
              this.hour = hour;
              this.minute = minute;
              this.syncToInputs();
              if (this.showMeridiem) {
                this.syncToMeridiemElements();
              }
              if (!silent) {
                this.fire("change", {
                  hour: this.hour,
                  minute: this.minute
                });
              }
            },
            setRange: function(begin, end) {
              var beginHour = begin.hour;
              var beginMin = begin.minute;
              var endHour, endMin;
              if (!this.isValidRange(begin, end)) {
                return;
              }
              if (end) {
                endHour = end.hour;
                endMin = end.minute;
              }
              this.setRangeHour(beginHour, endHour);
              this.setRangeMinute(beginHour, beginMin, endHour, endMin);
              this.applyRange(beginHour, beginMin, endHour);
            },
            setRangeHour: function(beginHour, endHour) {
              var disabledHours = util.getRangeArr(START_NUMBER_OF_TIME, beginHour - 1);
              if (endHour) {
                disabledHours = disabledHours.concat(util.getRangeArr(endHour + 1, END_NUMBER_OF_HOUR));
              }
              this.disabledHours = disabledHours.slice();
            },
            setRangeMinute: function(beginHour, beginMin, endHour, endMin) {
              var disabledMinRanges = [];
              if (!beginHour && !beginMin) {
                return;
              }
              disabledMinRanges.push({
                begin: START_NUMBER_OF_TIME,
                end: beginMin
              });
              if (endHour && endMin) {
                disabledMinRanges.push({
                  begin: endMin,
                  end: END_NUMBER_OF_MINUTE
                });
                if (beginHour === endHour) {
                  this.disabledMinutes[beginHour] = util.getDisabledMinuteArr(disabledMinRanges, this.minuteStep).slice();
                  return;
                }
                this.disabledMinutes[endHour] = util.getDisabledMinuteArr([disabledMinRanges[1]], this.minuteStep).slice();
              }
              this.disabledMinutes[beginHour] = util.getDisabledMinuteArr([disabledMinRanges[0]], this.minuteStep).slice();
            },
            applyRange: function(beginHour, beginMin, endHour) {
              var targetMinuteIndex = Math.ceil(beginMin / this.minuteStep);
              var targetHour = beginHour;
              var targetMinute = targetMinuteIndex * this.minuteStep;
              var diffFromSelectableMinute;
              if (this.isLaterThanSetTime(beginHour, beginMin)) {
                if (this.disabledMinutes[targetHour][targetMinuteIndex]) {
                  diffFromSelectableMinute = this.disabledMinutes[targetHour].slice(targetMinuteIndex).findIndex(function(isMinuteDisabled) {
                    return !isMinuteDisabled;
                  }) * this.minuteStep;
                  targetMinute = diffFromSelectableMinute >= 0 ? targetMinute + diffFromSelectableMinute : 60;
                }
                if (this.hourStep !== 1 && beginHour % this.hourStep !== 1 || targetMinute >= 60) {
                  targetHour = beginHour + beginHour % this.hourStep + 1;
                  targetMinute = 0;
                }
                this.setTime(targetHour, targetMinute);
              }
              this.setDisabledHours();
              this.setDisabledMinutes(this.hour);
              if (this.showMeridiem) {
                this.syncToMeridiemElements();
                util.setDisabled(this.amEl, beginHour >= END_NUMBER_OF_HOUR_WITH_MERIDIEM);
                util.setDisabled(this.pmEl, endHour < END_NUMBER_OF_HOUR_WITH_MERIDIEM);
              }
            },
            resetMinuteRange: function() {
              var i2;
              this.disabledMinutes = {};
              for (i2 = 0; i2 <= END_NUMBER_OF_HOUR; i2 += 1) {
                this.setDisabledMinutes(this.hour);
              }
            },
            isValidRange: function(begin, end) {
              var beginHour = begin.hour;
              var beginMin = begin.minute;
              var endHour, endMin;
              if (!this.isValidTime(beginHour, beginMin)) {
                return false;
              }
              if (!end) {
                return true;
              }
              endHour = end.hour;
              endMin = end.minute;
              return this.isValidTime(endHour, endMin) && this.compareTimes(begin, end) > 0;
            },
            isValidTime: function(hour, minute) {
              return hour >= START_NUMBER_OF_TIME && hour <= END_NUMBER_OF_HOUR && minute >= START_NUMBER_OF_TIME && minute <= END_NUMBER_OF_MINUTE;
            },
            isLaterThanSetTime: function(hour, minute) {
              return hour > this.hour || hour === this.hour && minute > this.minute;
            },
            compareTimes: function(begin, end) {
              var first2 = new Date(0);
              var second = new Date(0);
              first2.setHours(begin.hour, begin.minute);
              second.setHours(end.hour, end.minute);
              return second.getTime() - first2.getTime();
            },
            getHour: function() {
              return this.hour;
            },
            getMinute: function() {
              return this.minute;
            },
            changeLanguage: function(language) {
              this.localeText = localeTexts[language];
              this.render();
            },
            destroy: function() {
              this.removeEvents();
              removeElement(this.element);
              this.container = this.showMeridiem = this.hourInput = this.minuteInput = this.hour = this.minute = this.inputType = this.element = this.meridiemElement = this.amEl = this.pmEl = null;
            }
          }
        );
        CustomEvents2.mixin(TimePicker);
        module2.exports = TimePicker;
      },
      function(module2, exports2, __webpack_require__) {
        var isUndefined2 = __webpack_require__(5);
        var isNull2 = __webpack_require__(24);
        function isExisty2(param) {
          return !isUndefined2(param) && !isNull2(param);
        }
        module2.exports = isExisty2;
      },
      function(module2, exports2, __webpack_require__) {
        function isNull2(obj) {
          return obj === null;
        }
        module2.exports = isNull2;
      },
      function(module2, exports2, __webpack_require__) {
        function isObject2(obj) {
          return obj === Object(obj);
        }
        module2.exports = isObject2;
      },
      function(module2, exports2, __webpack_require__) {
        function isFunction2(obj) {
          return obj instanceof Function;
        }
        module2.exports = isFunction2;
      },
      function(module2, exports2, __webpack_require__) {
        var createObject = __webpack_require__(28);
        function inherit(subType, superType) {
          var prototype = createObject(superType.prototype);
          prototype.constructor = subType;
          subType.prototype = prototype;
        }
        module2.exports = inherit;
      },
      function(module2, exports2, __webpack_require__) {
        function createObject(obj) {
          function F2() {
          }
          F2.prototype = obj;
          return new F2();
        }
        module2.exports = createObject;
      },
      function(module2, exports2, __webpack_require__) {
        var forEach2 = __webpack_require__(4);
        var inArray = __webpack_require__(0);
        var getClass = __webpack_require__(18);
        var setClassName = __webpack_require__(19);
        function addClass(element) {
          var cssClass = Array.prototype.slice.call(arguments, 1);
          var classList = element.classList;
          var newClass = [];
          var origin;
          if (classList) {
            forEach2(cssClass, function(name) {
              element.classList.add(name);
            });
            return;
          }
          origin = getClass(element);
          if (origin) {
            cssClass = [].concat(origin.split(/\s+/), cssClass);
          }
          forEach2(cssClass, function(cls2) {
            if (inArray(cls2, newClass) < 0) {
              newClass.push(cls2);
            }
          });
          setClassName(element, newClass);
        }
        module2.exports = addClass;
      },
      function(module2, exports2, __webpack_require__) {
        var inArray = __webpack_require__(0);
        var toArray = __webpack_require__(31);
        var elProto2 = Element.prototype;
        var matchSelector = elProto2.matches || elProto2.webkitMatchesSelector || elProto2.mozMatchesSelector || elProto2.msMatchesSelector || function(selector) {
          var doc = this.document || this.ownerDocument;
          return inArray(this, toArray(doc.querySelectorAll(selector))) > -1;
        };
        function matches(element, selector) {
          return matchSelector.call(element, selector);
        }
        module2.exports = matches;
      },
      function(module2, exports2, __webpack_require__) {
        var forEachArray2 = __webpack_require__(1);
        function toArray(arrayLike) {
          var arr;
          try {
            arr = Array.prototype.slice.call(arrayLike);
          } catch (e2) {
            arr = [];
            forEachArray2(arrayLike, function(value) {
              arr.push(value);
            });
          }
          return arr;
        }
        module2.exports = toArray;
      },
      function(module2, exports2, __webpack_require__) {
        var forEachArray2 = __webpack_require__(1);
        var inArray = __webpack_require__(0);
        var getClass = __webpack_require__(18);
        var setClassName = __webpack_require__(19);
        function removeClass(element) {
          var cssClass = Array.prototype.slice.call(arguments, 1);
          var classList = element.classList;
          var origin, newClass;
          if (classList) {
            forEachArray2(cssClass, function(name) {
              classList.remove(name);
            });
            return;
          }
          origin = getClass(element).split(/\s+/);
          newClass = [];
          forEachArray2(origin, function(name) {
            if (inArray(name, cssClass) < 0) {
              newClass.push(name);
            }
          });
          setClassName(element, newClass);
        }
        module2.exports = removeClass;
      },
      function(module2, exports2, __webpack_require__) {
        function isNumber2(obj) {
          return typeof obj === "number" || obj instanceof Number;
        }
        module2.exports = isNumber2;
      },
      function(module2, exports2, __webpack_require__) {
        var inArray = __webpack_require__(0);
        var forEachArray2 = __webpack_require__(1);
        var CustomEvents2 = __webpack_require__(8);
        var defineClass = __webpack_require__(9);
        var extend2 = __webpack_require__(2);
        var on2 = __webpack_require__(10);
        var off = __webpack_require__(11);
        var closest = __webpack_require__(12);
        var removeElement = __webpack_require__(13);
        var isHTMLNode = __webpack_require__(14);
        var util = __webpack_require__(15);
        var tmpl = __webpack_require__(37);
        var SELECTOR_UP_BUTTON = ".tui-timepicker-btn-up";
        var SELECTOR_DOWN_BUTTON = ".tui-timepicker-btn-down";
        var Spinbox = defineClass(
          {
            init: function(container, options) {
              options = extend2(
                {
                  items: []
                },
                options
              );
              this._container = isHTMLNode(container) ? container : document.querySelector(container);
              this._element = null;
              this._inputElement = null;
              this._items = options.items;
              this._disabledItems = options.disabledItems || [];
              this._selectedIndex = Math.max(0, inArray(options.initialValue, this._items));
              this._format = options.format;
              this._render();
              this._setEvents();
            },
            _render: function() {
              var index = inArray(this.getValue(), this._items);
              var context;
              if (this._disabledItems[index]) {
                this._selectedIndex = this._findEnabledIndex();
              }
              context = {
                maxLength: this._getMaxLength(),
                initialValue: this.getValue(),
                format: this._format,
                formatTime: util.formatTime
              };
              this._container.innerHTML = tmpl(context);
              this._element = this._container.firstChild;
              this._inputElement = this._element.querySelector("input");
            },
            _findEnabledIndex: function() {
              return inArray(false, this._disabledItems);
            },
            _getMaxLength: function() {
              var lengths = [];
              forEachArray2(this._items, function(item) {
                lengths.push(String(item).length);
              });
              return Math.max.apply(null, lengths);
            },
            setDisabledItems: function(disabledItems) {
              this._disabledItems = disabledItems;
              this._changeToInputValue();
            },
            _setEvents: function() {
              on2(this._container, "click", this._onClickHandler, this);
              on2(this._inputElement, "keydown", this._onKeydownInputElement, this);
              on2(this._inputElement, "change", this._onChangeHandler, this);
              this.on(
                "changeItems",
                function(items) {
                  this._items = items;
                  this._render();
                },
                this
              );
            },
            _removeEvents: function() {
              this.off();
              off(this._container, "click", this._onClickHandler, this);
              off(this._inputElement, "keydown", this._onKeydownInputElement, this);
              off(this._inputElement, "change", this._onChangeHandler, this);
            },
            _onClickHandler: function(ev) {
              var target = util.getTarget(ev);
              if (closest(target, SELECTOR_DOWN_BUTTON)) {
                this._setNextValue(true);
              } else if (closest(target, SELECTOR_UP_BUTTON)) {
                this._setNextValue(false);
              }
            },
            _setNextValue: function(isDown) {
              var index = this._selectedIndex;
              if (isDown) {
                index = index ? index - 1 : this._items.length - 1;
              } else {
                index = index < this._items.length - 1 ? index + 1 : 0;
              }
              if (this._disabledItems[index]) {
                this._selectedIndex = index;
                this._setNextValue(isDown);
              } else {
                this.setValue(this._items[index]);
              }
            },
            _onKeydownInputElement: function(ev) {
              var keyCode = ev.which || ev.keyCode;
              var isDown;
              if (closest(util.getTarget(ev), "input")) {
                switch (keyCode) {
                  case 38:
                    isDown = false;
                    break;
                  case 40:
                    isDown = true;
                    break;
                  default:
                    return;
                }
                this._setNextValue(isDown);
              }
            },
            _onChangeHandler: function(ev) {
              if (closest(util.getTarget(ev), "input")) {
                this._changeToInputValue();
              }
            },
            _changeToInputValue: function(silent) {
              var newValue = Number(this._inputElement.value);
              var newIndex = inArray(newValue, this._items);
              if (this._disabledItems[newIndex]) {
                newIndex = this._findEnabledIndex();
                newValue = this._items[newIndex];
              } else if (newIndex === this._selectedIndex) {
                return;
              }
              if (newIndex === -1) {
                this.setValue(this._items[this._selectedIndex], silent);
              } else {
                this._selectedIndex = newIndex;
                if (!silent) {
                  this.fire("change", {
                    value: newValue
                  });
                }
              }
            },
            setValue: function(value, silent) {
              this._inputElement.value = util.formatTime(value, this._format);
              this._changeToInputValue(silent);
            },
            getValue: function() {
              return this._items[this._selectedIndex];
            },
            destroy: function() {
              this._removeEvents();
              removeElement(this._element);
              this._container = this._element = this._inputElement = this._items = this._selectedIndex = null;
            }
          }
        );
        CustomEvents2.mixin(Spinbox);
        module2.exports = Spinbox;
      },
      function(module2, exports2, __webpack_require__) {
        var isUndefined2 = __webpack_require__(5);
        var imagePing2 = __webpack_require__(36);
        var ms7days2 = 7 * 24 * 60 * 60 * 1e3;
        function isExpired2(date2) {
          var now = new Date().getTime();
          return now - date2 > ms7days2;
        }
        function sendHostname2(appName, trackingId) {
          var url = "https://www.google-analytics.com/collect";
          var hostname = location.hostname;
          var hitType = "event";
          var eventCategory = "use";
          var applicationKeyForStorage = "TOAST UI " + appName + " for " + hostname + ": Statistics";
          var date2 = window.localStorage.getItem(applicationKeyForStorage);
          if (!isUndefined2(window.tui) && window.tui.usageStatistics === false) {
            return;
          }
          if (date2 && !isExpired2(date2)) {
            return;
          }
          window.localStorage.setItem(applicationKeyForStorage, new Date().getTime());
          setTimeout(function() {
            if (document.readyState === "interactive" || document.readyState === "complete") {
              imagePing2(url, {
                v: 1,
                t: hitType,
                tid: trackingId,
                cid: hostname,
                dp: hostname,
                dh: appName,
                el: appName,
                ec: eventCategory
              });
            }
          }, 1e3);
        }
        module2.exports = sendHostname2;
      },
      function(module2, exports2, __webpack_require__) {
        var forEachOwnProperties2 = __webpack_require__(16);
        function imagePing2(url, trackingInfo) {
          var trackingElement = document.createElement("img");
          var queryString = "";
          forEachOwnProperties2(trackingInfo, function(value, key) {
            queryString += "&" + key + "=" + value;
          });
          queryString = queryString.substring(1);
          trackingElement.src = url + "?" + queryString;
          trackingElement.style.display = "none";
          document.body.appendChild(trackingElement);
          document.body.removeChild(trackingElement);
          return trackingElement;
        }
        module2.exports = imagePing2;
      },
      function(module2, exports2, __webpack_require__) {
        var template = __webpack_require__(7);
        module2.exports = function(context) {
          var source = '<div class="tui-timepicker-btn-area">  <input type="text" class="tui-timepicker-spinbox-input"        maxlength="{{maxLength}}"        size="{{maxLength}}"        value="{{formatTime initialValue format}}"        aria-label="TimePicker spinbox value">  <button type="button" class="tui-timepicker-btn tui-timepicker-btn-up">    <span class="tui-ico-t-btn">Increase</span>  </button>  <button type="button" class="tui-timepicker-btn tui-timepicker-btn-down">    <span class="tui-ico-t-btn">Decrease</span>  </button></div>';
          return template(source, context);
        };
      },
      function(module2, exports2, __webpack_require__) {
        var inArray = __webpack_require__(0);
        var CustomEvents2 = __webpack_require__(8);
        var defineClass = __webpack_require__(9);
        var extend2 = __webpack_require__(2);
        var on2 = __webpack_require__(10);
        var off = __webpack_require__(11);
        var closest = __webpack_require__(12);
        var removeElement = __webpack_require__(13);
        var isHTMLNode = __webpack_require__(14);
        var util = __webpack_require__(15);
        var tmpl = __webpack_require__(39);
        var Selectbox = defineClass(
          {
            init: function(container, options) {
              options = extend2(
                {
                  items: []
                },
                options
              );
              this._container = isHTMLNode(container) ? container : document.querySelector(container);
              this._items = options.items || [];
              this._disabledItems = options.disabledItems || [];
              this._selectedIndex = Math.max(0, inArray(options.initialValue, this._items));
              this._format = options.format;
              this._element = null;
              this._render();
              this._setEvents();
            },
            _render: function() {
              var context;
              this._changeEnabledIndex();
              context = {
                items: this._items,
                format: this._format,
                initialValue: this.getValue(),
                disabledItems: this._disabledItems,
                formatTime: util.formatTime,
                equals: function(a2, b2) {
                  return a2 === b2;
                }
              };
              if (this._element) {
                this._removeElement();
              }
              this._container.innerHTML = tmpl(context);
              this._element = this._container.firstChild;
              on2(this._element, "change", this._onChangeHandler, this);
            },
            _changeEnabledIndex: function() {
              var index = inArray(this.getValue(), this._items);
              if (this._disabledItems[index]) {
                this._selectedIndex = inArray(false, this._disabledItems);
              }
            },
            setDisabledItems: function(disabledItems) {
              this._disabledItems = disabledItems;
              this._render();
            },
            _setEvents: function() {
              this.on(
                "changeItems",
                function(items) {
                  this._items = items;
                  this._render();
                },
                this
              );
            },
            _removeEvents: function() {
              this.off();
            },
            _removeElement: function() {
              off(this._element, "change", this._onChangeHandler, this);
              removeElement(this._element);
            },
            _onChangeHandler: function(ev) {
              if (closest(util.getTarget(ev), "select")) {
                this._setNewValue();
              }
            },
            _setNewValue: function(silent) {
              var newValue = Number(this._element.value);
              this._selectedIndex = inArray(newValue, this._items);
              if (!silent) {
                this.fire("change", {
                  value: newValue
                });
              }
            },
            getValue: function() {
              return this._items[this._selectedIndex];
            },
            setValue: function(value, silent) {
              var newIndex = inArray(value, this._items);
              if (newIndex > -1 && newIndex !== this._selectedIndex) {
                this._selectedIndex = newIndex;
                this._element.value = value;
                this._setNewValue(silent);
              }
            },
            destroy: function() {
              this._removeEvents();
              this._removeElement();
              this._container = this._items = this._selectedIndex = this._element = null;
            }
          }
        );
        CustomEvents2.mixin(Selectbox);
        module2.exports = Selectbox;
      },
      function(module2, exports2, __webpack_require__) {
        var template = __webpack_require__(7);
        module2.exports = function(context) {
          var source = '<select class="tui-timepicker-select" aria-label="Time">  {{each items}}    {{if equals initialValue @this}}      <option value="{{@this}}" selected {{if disabledItems[@index]}}disabled{{/if}}>{{formatTime @this format}}</option>    {{else}}      <option value="{{@this}}" {{if disabledItems[@index]}}disabled{{/if}}>{{formatTime @this format}}</option>    {{/if}}  {{/each}}</select>';
          return template(source, context);
        };
      },
      function(module2, exports2, __webpack_require__) {
        module2.exports = {
          en: {
            am: "AM",
            pm: "PM"
          },
          ko: {
            am: "\uC624\uC804",
            pm: "\uC624\uD6C4"
          }
        };
      },
      function(module2, exports2, __webpack_require__) {
        var template = __webpack_require__(7);
        module2.exports = function(context) {
          var source = '<div class="tui-timepicker">  <div class="tui-timepicker-body">    <div class="tui-timepicker-row">      {{if isSpinbox}}        <div class="tui-timepicker-column tui-timepicker-spinbox tui-timepicker-hour"></div>        <span class="tui-timepicker-column tui-timepicker-colon"><span class="tui-ico-colon">:</span></span>        <div class="tui-timepicker-column tui-timepicker-spinbox tui-timepicker-minute"></div>        {{if showMeridiem}}          {{meridiemElement}}        {{/if}}      {{else}}        <div class="tui-timepicker-column tui-timepicker-selectbox tui-timepicker-hour"></div>        <span class="tui-timepicker-column tui-timepicker-colon"><span class="tui-ico-colon">:</span></span>        <div class="tui-timepicker-column tui-timepicker-selectbox tui-timepicker-minute"></div>        {{if showMeridiem}}          {{meridiemElement}}        {{/if}}      {{/if}}    </div>  </div></div>';
          return template(source, context);
        };
      },
      function(module2, exports2, __webpack_require__) {
        var template = __webpack_require__(7);
        module2.exports = function(context) {
          var source = '{{if isSpinbox}}  <div class="tui-timepicker-column tui-timepicker-checkbox tui-timepicker-meridiem">    <div class="tui-timepicker-check-area">      <ul class="tui-timepicker-check-lst">        <li class="tui-timepicker-check">          <div class="tui-timepicker-radio">            <input type="radio"                  name="optionsRadios-{{radioId}}"                  value="AM"                  class="tui-timepicker-radio-am"                  id="tui-timepicker-radio-am-{{radioId}}">            <label for="tui-timepicker-radio-am-{{radioId}}" class="tui-timepicker-radio-label">              <span class="tui-timepicker-input-radio"></span>{{am}}            </label>          </div>        </li>        <li class="tui-timepicker-check">          <div class="tui-timepicker-radio">            <input type="radio"                  name="optionsRadios-{{radioId}}"                  value="PM"                  class="tui-timepicker-radio-pm"                  id="tui-timepicker-radio-pm-{{radioId}}">            <label for="tui-timepicker-radio-pm-{{radioId}}" class="tui-timepicker-radio-label">              <span class="tui-timepicker-input-radio"></span>{{pm}}            </label>          </div>        </li>      </ul>    </div>  </div>{{else}}  <div class="tui-timepicker-column tui-timepicker-selectbox tui-is-add-picker tui-timepicker-meridiem">    <select class="tui-timepicker-select" aria-label="AM/PM">      <option value="AM">{{am}}</option>      <option value="PM">{{pm}}</option>    </select>  </div>{{/if}}';
          return template(source, context);
        };
      }
    ]);
  });
})(tuiTimePicker);
/*!
 * TOAST UI Date Picker
 * @version 4.3.3
 * @author NHN Cloud. FE Development Lab <dl_javascript@nhn.com>
 * @license MIT
 */
(function(module, exports) {
  (function webpackUniversalModuleDefinition(root, factory) {
    module.exports = factory(tuiTimePicker.exports);
  })(window, function(__WEBPACK_EXTERNAL_MODULE__43__) {
    return function(modules) {
      var installedModules = {};
      function __webpack_require__(moduleId) {
        if (installedModules[moduleId]) {
          return installedModules[moduleId].exports;
        }
        var module2 = installedModules[moduleId] = {
          i: moduleId,
          l: false,
          exports: {}
        };
        modules[moduleId].call(module2.exports, module2, module2.exports, __webpack_require__);
        module2.l = true;
        return module2.exports;
      }
      __webpack_require__.m = modules;
      __webpack_require__.c = installedModules;
      __webpack_require__.d = function(exports2, name, getter) {
        if (!__webpack_require__.o(exports2, name)) {
          Object.defineProperty(exports2, name, { enumerable: true, get: getter });
        }
      };
      __webpack_require__.r = function(exports2) {
        if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
          Object.defineProperty(exports2, Symbol.toStringTag, { value: "Module" });
        }
        Object.defineProperty(exports2, "__esModule", { value: true });
      };
      __webpack_require__.t = function(value, mode) {
        if (mode & 1)
          value = __webpack_require__(value);
        if (mode & 8)
          return value;
        if (mode & 4 && typeof value === "object" && value && value.__esModule)
          return value;
        var ns = /* @__PURE__ */ Object.create(null);
        __webpack_require__.r(ns);
        Object.defineProperty(ns, "default", { enumerable: true, value });
        if (mode & 2 && typeof value != "string")
          for (var key in value)
            __webpack_require__.d(ns, key, function(key2) {
              return value[key2];
            }.bind(null, key));
        return ns;
      };
      __webpack_require__.n = function(module2) {
        var getter = module2 && module2.__esModule ? function getDefault() {
          return module2["default"];
        } : function getModuleExports() {
          return module2;
        };
        __webpack_require__.d(getter, "a", getter);
        return getter;
      };
      __webpack_require__.o = function(object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
      };
      __webpack_require__.p = "dist";
      return __webpack_require__(__webpack_require__.s = 34);
    }([
      function(module2, exports2, __webpack_require__) {
        var inherit = __webpack_require__(35);
        var extend2 = __webpack_require__(7);
        function defineClass(parent, props) {
          var obj;
          if (!props) {
            props = parent;
            parent = null;
          }
          obj = props.init || function() {
          };
          if (parent) {
            inherit(obj, parent);
          }
          if (props.hasOwnProperty("static")) {
            extend2(obj, props["static"]);
            delete props["static"];
          }
          extend2(obj.prototype, props);
          return obj;
        }
        module2.exports = defineClass;
      },
      function(module2, exports2, __webpack_require__) {
        module2.exports = {
          TYPE_DATE: "date",
          TYPE_MONTH: "month",
          TYPE_YEAR: "year",
          TYPE_HOUR: "hour",
          TYPE_MINUTE: "minute",
          TYPE_MERIDIEM: "meridiem",
          MIN_DATE: new Date(1900, 0, 1),
          MAX_DATE: new Date(2999, 11, 31),
          DEFAULT_LANGUAGE_TYPE: "en",
          CLASS_NAME_SELECTED: "tui-is-selected",
          CLASS_NAME_PREV_MONTH_BTN: "tui-calendar-btn-prev-month",
          CLASS_NAME_PREV_YEAR_BTN: "tui-calendar-btn-prev-year",
          CLASS_NAME_NEXT_YEAR_BTN: "tui-calendar-btn-next-year",
          CLASS_NAME_NEXT_MONTH_BTN: "tui-calendar-btn-next-month",
          CLASS_NAME_TITLE_TODAY: "tui-calendar-title-today",
          DEFAULT_WEEK_START_DAY: "Sun",
          WEEK_START_DAY_MAP: {
            sun: 0,
            mon: 1,
            tue: 2,
            wed: 3,
            thu: 4,
            fri: 5,
            sat: 6
          }
        };
      },
      function(module2, exports2, __webpack_require__) {
        function forEachArray2(arr, iteratee, context) {
          var index = 0;
          var len = arr.length;
          context = context || null;
          for (; index < len; index += 1) {
            if (iteratee.call(context, arr[index], index, arr) === false) {
              break;
            }
          }
        }
        module2.exports = forEachArray2;
      },
      function(module2, exports2, __webpack_require__) {
        var isArray2 = __webpack_require__(6);
        function inArray(searchElement, array2, startIndex) {
          var i2;
          var length;
          startIndex = startIndex || 0;
          if (!isArray2(array2)) {
            return -1;
          }
          if (Array.prototype.indexOf) {
            return Array.prototype.indexOf.call(array2, searchElement, startIndex);
          }
          length = array2.length;
          for (i2 = startIndex; startIndex >= 0 && i2 < length; i2 += 1) {
            if (array2[i2] === searchElement) {
              return i2;
            }
          }
          return -1;
        }
        module2.exports = inArray;
      },
      function(module2, exports2, __webpack_require__) {
        var forEachArray2 = __webpack_require__(2);
        var isHTMLNode = __webpack_require__(46);
        var sendHostname2 = __webpack_require__(47);
        var currentId = 0;
        var utils = {
          getTarget: function(ev) {
            return ev.target || ev.srcElement;
          },
          getElement: function(param) {
            return isHTMLNode(param) ? param : document.querySelector(param);
          },
          getSelector: function(elem) {
            var selector = "";
            if (elem.id) {
              selector = "#" + elem.id;
            } else if (elem.className) {
              selector = "." + elem.className.split(" ")[0];
            }
            return selector;
          },
          generateId: function() {
            currentId += 1;
            return currentId;
          },
          filter: function(arr, iteratee) {
            var result = [];
            forEachArray2(arr, function(item) {
              if (iteratee(item)) {
                result.push(item);
              }
            });
            return result;
          },
          sendHostName: function() {
            sendHostname2("date-picker", "UA-129987462-1");
          }
        };
        module2.exports = utils;
      },
      function(module2, exports2, __webpack_require__) {
        var isDate = __webpack_require__(28);
        var isNumber2 = __webpack_require__(15);
        var constants = __webpack_require__(1);
        var TYPE_DATE = constants.TYPE_DATE;
        var TYPE_MONTH = constants.TYPE_MONTH;
        var TYPE_YEAR = constants.TYPE_YEAR;
        var utils = {
          getWeeksCount: function(year, month) {
            var firstDay = utils.getFirstDay(year, month), lastDate = utils.getLastDayInMonth(year, month);
            return Math.ceil((firstDay + lastDate) / 7);
          },
          isValidDate: function(date2) {
            return isDate(date2) && !isNaN(date2.getTime());
          },
          getFirstDay: function(year, month) {
            return new Date(year, month - 1, 1).getDay();
          },
          getFirstDayTimestamp: function(year, month) {
            return new Date(year, month, 1).getTime();
          },
          getLastDayInMonth: function(year, month) {
            return new Date(year, month, 0).getDate();
          },
          prependLeadingZero: function(number) {
            var prefix = "";
            if (number < 10) {
              prefix = "0";
            }
            return prefix + number;
          },
          getMeridiemHour: function(hour) {
            hour %= 12;
            if (hour === 0) {
              hour = 12;
            }
            return hour;
          },
          getSafeNumber: function(any, defaultNumber) {
            if (isNaN(defaultNumber) || !isNumber2(defaultNumber)) {
              throw Error("The defaultNumber must be a valid number.");
            }
            if (isNaN(any)) {
              return defaultNumber;
            }
            return Number(any);
          },
          getDateOfWeek: function(year, month, weekNumber, dayNumber) {
            var firstDayOfMonth = new Date(year, month - 1).getDay();
            var dateOffset = firstDayOfMonth - dayNumber - 1;
            return new Date(year, month - 1, weekNumber * 7 - dateOffset);
          },
          getRangeArr: function(start, end) {
            var arr = [];
            var i2;
            if (start > end) {
              for (i2 = end; i2 >= start; i2 -= 1) {
                arr.push(i2);
              }
            } else {
              for (i2 = start; i2 <= end; i2 += 1) {
                arr.push(i2);
              }
            }
            return arr;
          },
          cloneWithStartOf: function(date2, type) {
            type = type || TYPE_DATE;
            date2 = new Date(date2);
            date2.setHours(0, 0, 0, 0);
            switch (type) {
              case TYPE_DATE:
                break;
              case TYPE_MONTH:
                date2.setDate(1);
                break;
              case TYPE_YEAR:
                date2.setMonth(0, 1);
                break;
              default:
                throw Error("Unsupported type: " + type);
            }
            return date2;
          },
          cloneWithEndOf: function(date2, type) {
            type = type || TYPE_DATE;
            date2 = new Date(date2);
            date2.setHours(23, 59, 59, 999);
            switch (type) {
              case TYPE_DATE:
                break;
              case TYPE_MONTH:
                date2.setMonth(date2.getMonth() + 1, 0);
                break;
              case TYPE_YEAR:
                date2.setMonth(11, 31);
                break;
              default:
                throw Error("Unsupported type: " + type);
            }
            return date2;
          },
          compare: function(dateA, dateB, cmpLevel) {
            var aTimestamp, bTimestamp;
            if (!(utils.isValidDate(dateA) && utils.isValidDate(dateB))) {
              return NaN;
            }
            if (!cmpLevel) {
              aTimestamp = dateA.getTime();
              bTimestamp = dateB.getTime();
            } else {
              aTimestamp = utils.cloneWithStartOf(dateA, cmpLevel).getTime();
              bTimestamp = utils.cloneWithStartOf(dateB, cmpLevel).getTime();
            }
            if (aTimestamp > bTimestamp) {
              return 1;
            }
            return aTimestamp === bTimestamp ? 0 : -1;
          },
          isSame: function(dateA, dateB, cmpLevel) {
            return utils.compare(dateA, dateB, cmpLevel) === 0;
          },
          inRange: function(start, end, target, cmpLevel) {
            return utils.compare(start, target, cmpLevel) < 1 && utils.compare(end, target, cmpLevel) > -1;
          }
        };
        module2.exports = utils;
      },
      function(module2, exports2, __webpack_require__) {
        function isArray2(obj) {
          return obj instanceof Array;
        }
        module2.exports = isArray2;
      },
      function(module2, exports2, __webpack_require__) {
        function extend2(target, objects) {
          var hasOwnProp = Object.prototype.hasOwnProperty;
          var source, prop, i2, len;
          for (i2 = 1, len = arguments.length; i2 < len; i2 += 1) {
            source = arguments[i2];
            for (prop in source) {
              if (hasOwnProp.call(source, prop)) {
                target[prop] = source[prop];
              }
            }
          }
          return target;
        }
        module2.exports = extend2;
      },
      function(module2, exports2, __webpack_require__) {
        var extend2 = __webpack_require__(7);
        var isExisty2 = __webpack_require__(37);
        var isString2 = __webpack_require__(13);
        var isObject2 = __webpack_require__(22);
        var isArray2 = __webpack_require__(6);
        var isFunction2 = __webpack_require__(39);
        var forEach2 = __webpack_require__(9);
        var R_EVENTNAME_SPLIT2 = /\s+/g;
        function CustomEvents2() {
          this.events = null;
          this.contexts = null;
        }
        CustomEvents2.mixin = function(func) {
          extend2(func.prototype, CustomEvents2.prototype);
        };
        CustomEvents2.prototype._getHandlerItem = function(handler, context) {
          var item = { handler };
          if (context) {
            item.context = context;
          }
          return item;
        };
        CustomEvents2.prototype._safeEvent = function(eventName) {
          var events = this.events;
          var byName;
          if (!events) {
            events = this.events = {};
          }
          if (eventName) {
            byName = events[eventName];
            if (!byName) {
              byName = [];
              events[eventName] = byName;
            }
            events = byName;
          }
          return events;
        };
        CustomEvents2.prototype._safeContext = function() {
          var context = this.contexts;
          if (!context) {
            context = this.contexts = [];
          }
          return context;
        };
        CustomEvents2.prototype._indexOfContext = function(ctx) {
          var context = this._safeContext();
          var index = 0;
          while (context[index]) {
            if (ctx === context[index][0]) {
              return index;
            }
            index += 1;
          }
          return -1;
        };
        CustomEvents2.prototype._memorizeContext = function(ctx) {
          var context, index;
          if (!isExisty2(ctx)) {
            return;
          }
          context = this._safeContext();
          index = this._indexOfContext(ctx);
          if (index > -1) {
            context[index][1] += 1;
          } else {
            context.push([ctx, 1]);
          }
        };
        CustomEvents2.prototype._forgetContext = function(ctx) {
          var context, contextIndex;
          if (!isExisty2(ctx)) {
            return;
          }
          context = this._safeContext();
          contextIndex = this._indexOfContext(ctx);
          if (contextIndex > -1) {
            context[contextIndex][1] -= 1;
            if (context[contextIndex][1] <= 0) {
              context.splice(contextIndex, 1);
            }
          }
        };
        CustomEvents2.prototype._bindEvent = function(eventName, handler, context) {
          var events = this._safeEvent(eventName);
          this._memorizeContext(context);
          events.push(this._getHandlerItem(handler, context));
        };
        CustomEvents2.prototype.on = function(eventName, handler, context) {
          var self2 = this;
          if (isString2(eventName)) {
            eventName = eventName.split(R_EVENTNAME_SPLIT2);
            forEach2(eventName, function(name) {
              self2._bindEvent(name, handler, context);
            });
          } else if (isObject2(eventName)) {
            context = handler;
            forEach2(eventName, function(func, name) {
              self2.on(name, func, context);
            });
          }
        };
        CustomEvents2.prototype.once = function(eventName, handler, context) {
          var self2 = this;
          if (isObject2(eventName)) {
            context = handler;
            forEach2(eventName, function(func, name) {
              self2.once(name, func, context);
            });
            return;
          }
          function onceHandler() {
            handler.apply(context, arguments);
            self2.off(eventName, onceHandler, context);
          }
          this.on(eventName, onceHandler, context);
        };
        CustomEvents2.prototype._spliceMatches = function(arr, predicate) {
          var i2 = 0;
          var len;
          if (!isArray2(arr)) {
            return;
          }
          for (len = arr.length; i2 < len; i2 += 1) {
            if (predicate(arr[i2]) === true) {
              arr.splice(i2, 1);
              len -= 1;
              i2 -= 1;
            }
          }
        };
        CustomEvents2.prototype._matchHandler = function(handler) {
          var self2 = this;
          return function(item) {
            var needRemove = handler === item.handler;
            if (needRemove) {
              self2._forgetContext(item.context);
            }
            return needRemove;
          };
        };
        CustomEvents2.prototype._matchContext = function(context) {
          var self2 = this;
          return function(item) {
            var needRemove = context === item.context;
            if (needRemove) {
              self2._forgetContext(item.context);
            }
            return needRemove;
          };
        };
        CustomEvents2.prototype._matchHandlerAndContext = function(handler, context) {
          var self2 = this;
          return function(item) {
            var matchHandler = handler === item.handler;
            var matchContext = context === item.context;
            var needRemove = matchHandler && matchContext;
            if (needRemove) {
              self2._forgetContext(item.context);
            }
            return needRemove;
          };
        };
        CustomEvents2.prototype._offByEventName = function(eventName, handler) {
          var self2 = this;
          var andByHandler = isFunction2(handler);
          var matchHandler = self2._matchHandler(handler);
          eventName = eventName.split(R_EVENTNAME_SPLIT2);
          forEach2(eventName, function(name) {
            var handlerItems = self2._safeEvent(name);
            if (andByHandler) {
              self2._spliceMatches(handlerItems, matchHandler);
            } else {
              forEach2(handlerItems, function(item) {
                self2._forgetContext(item.context);
              });
              self2.events[name] = [];
            }
          });
        };
        CustomEvents2.prototype._offByHandler = function(handler) {
          var self2 = this;
          var matchHandler = this._matchHandler(handler);
          forEach2(this._safeEvent(), function(handlerItems) {
            self2._spliceMatches(handlerItems, matchHandler);
          });
        };
        CustomEvents2.prototype._offByObject = function(obj, handler) {
          var self2 = this;
          var matchFunc;
          if (this._indexOfContext(obj) < 0) {
            forEach2(obj, function(func, name) {
              self2.off(name, func);
            });
          } else if (isString2(handler)) {
            matchFunc = this._matchContext(obj);
            self2._spliceMatches(this._safeEvent(handler), matchFunc);
          } else if (isFunction2(handler)) {
            matchFunc = this._matchHandlerAndContext(handler, obj);
            forEach2(this._safeEvent(), function(handlerItems) {
              self2._spliceMatches(handlerItems, matchFunc);
            });
          } else {
            matchFunc = this._matchContext(obj);
            forEach2(this._safeEvent(), function(handlerItems) {
              self2._spliceMatches(handlerItems, matchFunc);
            });
          }
        };
        CustomEvents2.prototype.off = function(eventName, handler) {
          if (isString2(eventName)) {
            this._offByEventName(eventName, handler);
          } else if (!arguments.length) {
            this.events = {};
            this.contexts = [];
          } else if (isFunction2(eventName)) {
            this._offByHandler(eventName);
          } else if (isObject2(eventName)) {
            this._offByObject(eventName, handler);
          }
        };
        CustomEvents2.prototype.fire = function(eventName) {
          this.invoke.apply(this, arguments);
        };
        CustomEvents2.prototype.invoke = function(eventName) {
          var events, args, index, item;
          if (!this.hasListener(eventName)) {
            return true;
          }
          events = this._safeEvent(eventName);
          args = Array.prototype.slice.call(arguments, 1);
          index = 0;
          while (events[index]) {
            item = events[index];
            if (item.handler.apply(item.context, args) === false) {
              return false;
            }
            index += 1;
          }
          return true;
        };
        CustomEvents2.prototype.hasListener = function(eventName) {
          return this.getListenerLength(eventName) > 0;
        };
        CustomEvents2.prototype.getListenerLength = function(eventName) {
          var events = this._safeEvent(eventName);
          return events.length;
        };
        module2.exports = CustomEvents2;
      },
      function(module2, exports2, __webpack_require__) {
        var isArray2 = __webpack_require__(6);
        var forEachArray2 = __webpack_require__(2);
        var forEachOwnProperties2 = __webpack_require__(23);
        function forEach2(obj, iteratee, context) {
          if (isArray2(obj)) {
            forEachArray2(obj, iteratee, context);
          } else {
            forEachOwnProperties2(obj, iteratee, context);
          }
        }
        module2.exports = forEach2;
      },
      function(module2, exports2, __webpack_require__) {
        module2.exports = {
          en: {
            titles: {
              DD: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
              D: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
              MMM: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
              MMMM: [
                "January",
                "February",
                "March",
                "April",
                "May",
                "June",
                "July",
                "August",
                "September",
                "October",
                "November",
                "December"
              ]
            },
            titleFormat: "MMMM yyyy",
            todayFormat: "To\\d\\ay: DD, MMMM d, yyyy",
            time: "Time",
            date: "Date"
          },
          ko: {
            titles: {
              DD: ["\uC77C\uC694\uC77C", "\uC6D4\uC694\uC77C", "\uD654\uC694\uC77C", "\uC218\uC694\uC77C", "\uBAA9\uC694\uC77C", "\uAE08\uC694\uC77C", "\uD1A0\uC694\uC77C"],
              D: ["\uC77C", "\uC6D4", "\uD654", "\uC218", "\uBAA9", "\uAE08", "\uD1A0"],
              MMM: ["1\uC6D4", "2\uC6D4", "3\uC6D4", "4\uC6D4", "5\uC6D4", "6\uC6D4", "7\uC6D4", "8\uC6D4", "9\uC6D4", "10\uC6D4", "11\uC6D4", "12\uC6D4"],
              MMMM: ["1\uC6D4", "2\uC6D4", "3\uC6D4", "4\uC6D4", "5\uC6D4", "6\uC6D4", "7\uC6D4", "8\uC6D4", "9\uC6D4", "10\uC6D4", "11\uC6D4", "12\uC6D4"]
            },
            titleFormat: "yyyy.MM",
            todayFormat: "\uC624\uB298: yyyy.MM.dd (D)",
            date: "\uB0A0\uC9DC",
            time: "\uC2DC\uAC04"
          }
        };
      },
      function(module2, exports2, __webpack_require__) {
        var inArray = __webpack_require__(3);
        var forEach2 = __webpack_require__(9);
        var isArray2 = __webpack_require__(6);
        var isString2 = __webpack_require__(13);
        var extend2 = __webpack_require__(7);
        var EXPRESSION_REGEXP = /{{\s?|\s?}}/g;
        var BRACKET_NOTATION_REGEXP = /^[a-zA-Z0-9_@]+\[[a-zA-Z0-9_@"']+\]$/;
        var BRACKET_REGEXP = /\[\s?|\s?\]/;
        var DOT_NOTATION_REGEXP = /^[a-zA-Z_]+\.[a-zA-Z_]+$/;
        var DOT_REGEXP = /\./;
        var STRING_NOTATION_REGEXP = /^["']\w+["']$/;
        var STRING_REGEXP = /"|'/g;
        var NUMBER_REGEXP = /^-?\d+\.?\d*$/;
        var EXPRESSION_INTERVAL = 2;
        var BLOCK_HELPERS = {
          "if": handleIf,
          "each": handleEach,
          "with": handleWith
        };
        var isValidSplit = "a".split(/a/).length === 3;
        var splitByRegExp = function() {
          if (isValidSplit) {
            return function(text2, regexp) {
              return text2.split(regexp);
            };
          }
          return function(text2, regexp) {
            var result = [];
            var prevIndex = 0;
            var match, index;
            if (!regexp.global) {
              regexp = new RegExp(regexp, "g");
            }
            match = regexp.exec(text2);
            while (match !== null) {
              index = match.index;
              result.push(text2.slice(prevIndex, index));
              prevIndex = index + match[0].length;
              match = regexp.exec(text2);
            }
            result.push(text2.slice(prevIndex));
            return result;
          };
        }();
        function getValueFromContext(exp, context) {
          var splitedExps;
          var value = context[exp];
          if (exp === "true") {
            value = true;
          } else if (exp === "false") {
            value = false;
          } else if (STRING_NOTATION_REGEXP.test(exp)) {
            value = exp.replace(STRING_REGEXP, "");
          } else if (BRACKET_NOTATION_REGEXP.test(exp)) {
            splitedExps = exp.split(BRACKET_REGEXP);
            value = getValueFromContext(splitedExps[0], context)[getValueFromContext(splitedExps[1], context)];
          } else if (DOT_NOTATION_REGEXP.test(exp)) {
            splitedExps = exp.split(DOT_REGEXP);
            value = getValueFromContext(splitedExps[0], context)[splitedExps[1]];
          } else if (NUMBER_REGEXP.test(exp)) {
            value = parseFloat(exp);
          }
          return value;
        }
        function extractElseif(ifExps, sourcesInsideBlock) {
          var exps = [ifExps];
          var sourcesInsideIf = [];
          var otherIfCount = 0;
          var start = 0;
          forEach2(sourcesInsideBlock, function(source, index) {
            if (source.indexOf("if") === 0) {
              otherIfCount += 1;
            } else if (source === "/if") {
              otherIfCount -= 1;
            } else if (!otherIfCount && (source.indexOf("elseif") === 0 || source === "else")) {
              exps.push(source === "else" ? ["true"] : source.split(" ").slice(1));
              sourcesInsideIf.push(sourcesInsideBlock.slice(start, index));
              start = index + 1;
            }
          });
          sourcesInsideIf.push(sourcesInsideBlock.slice(start));
          return {
            exps,
            sourcesInsideIf
          };
        }
        function handleIf(exps, sourcesInsideBlock, context) {
          var analyzed = extractElseif(exps, sourcesInsideBlock);
          var result = false;
          var compiledSource = "";
          forEach2(analyzed.exps, function(exp, index) {
            result = handleExpression(exp, context);
            if (result) {
              compiledSource = compile(analyzed.sourcesInsideIf[index], context);
            }
            return !result;
          });
          return compiledSource;
        }
        function handleEach(exps, sourcesInsideBlock, context) {
          var collection = handleExpression(exps, context);
          var additionalKey = isArray2(collection) ? "@index" : "@key";
          var additionalContext = {};
          var result = "";
          forEach2(collection, function(item, key) {
            additionalContext[additionalKey] = key;
            additionalContext["@this"] = item;
            extend2(context, additionalContext);
            result += compile(sourcesInsideBlock.slice(), context);
          });
          return result;
        }
        function handleWith(exps, sourcesInsideBlock, context) {
          var asIndex = inArray("as", exps);
          var alias = exps[asIndex + 1];
          var result = handleExpression(exps.slice(0, asIndex), context);
          var additionalContext = {};
          additionalContext[alias] = result;
          return compile(sourcesInsideBlock, extend2(context, additionalContext)) || "";
        }
        function extractSourcesInsideBlock(sources, start, end) {
          var sourcesInsideBlock = sources.splice(start + 1, end - start);
          sourcesInsideBlock.pop();
          return sourcesInsideBlock;
        }
        function handleBlockHelper(helperKeyword, sourcesToEnd, context) {
          var executeBlockHelper = BLOCK_HELPERS[helperKeyword];
          var helperCount = 1;
          var startBlockIndex = 0;
          var endBlockIndex;
          var index = startBlockIndex + EXPRESSION_INTERVAL;
          var expression = sourcesToEnd[index];
          while (helperCount && isString2(expression)) {
            if (expression.indexOf(helperKeyword) === 0) {
              helperCount += 1;
            } else if (expression.indexOf("/" + helperKeyword) === 0) {
              helperCount -= 1;
              endBlockIndex = index;
            }
            index += EXPRESSION_INTERVAL;
            expression = sourcesToEnd[index];
          }
          if (helperCount) {
            throw Error(helperKeyword + " needs {{/" + helperKeyword + "}} expression.");
          }
          sourcesToEnd[startBlockIndex] = executeBlockHelper(
            sourcesToEnd[startBlockIndex].split(" ").slice(1),
            extractSourcesInsideBlock(sourcesToEnd, startBlockIndex, endBlockIndex),
            context
          );
          return sourcesToEnd;
        }
        function handleExpression(exps, context) {
          var result = getValueFromContext(exps[0], context);
          if (result instanceof Function) {
            return executeFunction(result, exps.slice(1), context);
          }
          return result;
        }
        function executeFunction(helper, argExps, context) {
          var args = [];
          forEach2(argExps, function(exp) {
            args.push(getValueFromContext(exp, context));
          });
          return helper.apply(null, args);
        }
        function compile(sources, context) {
          var index = 1;
          var expression = sources[index];
          var exps, firstExp, result;
          while (isString2(expression)) {
            exps = expression.split(" ");
            firstExp = exps[0];
            if (BLOCK_HELPERS[firstExp]) {
              result = handleBlockHelper(firstExp, sources.splice(index, sources.length - index), context);
              sources = sources.concat(result);
            } else {
              sources[index] = handleExpression(exps, context);
            }
            index += EXPRESSION_INTERVAL;
            expression = sources[index];
          }
          return sources.join("");
        }
        function template(text2, context) {
          return compile(splitByRegExp(text2, EXPRESSION_REGEXP), context);
        }
        module2.exports = template;
      },
      function(module2, exports2, __webpack_require__) {
        function isUndefined2(obj) {
          return obj === void 0;
        }
        module2.exports = isUndefined2;
      },
      function(module2, exports2, __webpack_require__) {
        function isString2(obj) {
          return typeof obj === "string" || obj instanceof String;
        }
        module2.exports = isString2;
      },
      function(module2, exports2, __webpack_require__) {
        function removeElement(element) {
          if (element && element.parentNode) {
            element.parentNode.removeChild(element);
          }
        }
        module2.exports = removeElement;
      },
      function(module2, exports2, __webpack_require__) {
        function isNumber2(obj) {
          return typeof obj === "number" || obj instanceof Number;
        }
        module2.exports = isNumber2;
      },
      function(module2, exports2, __webpack_require__) {
        var forEach2 = __webpack_require__(9);
        var inArray = __webpack_require__(3);
        var getClass = __webpack_require__(17);
        var setClassName = __webpack_require__(24);
        function addClass(element) {
          var cssClass = Array.prototype.slice.call(arguments, 1);
          var classList = element.classList;
          var newClass = [];
          var origin;
          if (classList) {
            forEach2(cssClass, function(name) {
              element.classList.add(name);
            });
            return;
          }
          origin = getClass(element);
          if (origin) {
            cssClass = [].concat(origin.split(/\s+/), cssClass);
          }
          forEach2(cssClass, function(cls2) {
            if (inArray(cls2, newClass) < 0) {
              newClass.push(cls2);
            }
          });
          setClassName(element, newClass);
        }
        module2.exports = addClass;
      },
      function(module2, exports2, __webpack_require__) {
        var isUndefined2 = __webpack_require__(12);
        function getClass(element) {
          if (!element || !element.className) {
            return "";
          }
          if (isUndefined2(element.className.baseVal)) {
            return element.className;
          }
          return element.className.baseVal;
        }
        module2.exports = getClass;
      },
      function(module2, exports2, __webpack_require__) {
        var forEachArray2 = __webpack_require__(2);
        var inArray = __webpack_require__(3);
        var getClass = __webpack_require__(17);
        var setClassName = __webpack_require__(24);
        function removeClass(element) {
          var cssClass = Array.prototype.slice.call(arguments, 1);
          var classList = element.classList;
          var origin, newClass;
          if (classList) {
            forEachArray2(cssClass, function(name) {
              classList.remove(name);
            });
            return;
          }
          origin = getClass(element).split(/\s+/);
          newClass = [];
          forEachArray2(origin, function(name) {
            if (inArray(name, cssClass) < 0) {
              newClass.push(name);
            }
          });
          setClassName(element, newClass);
        }
        module2.exports = removeClass;
      },
      function(module2, exports2, __webpack_require__) {
        var on2 = __webpack_require__(31);
        var off = __webpack_require__(33);
        var mouseTouchEvent = {
          _isMobile: function() {
            return /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i.test(
              navigator.userAgent
            );
          }(),
          _getEventType: function(type) {
            if (this._isMobile) {
              if (type === "mousedown") {
                type = "touchstart";
              } else if (type === "click") {
                type = "touchend";
              }
            }
            return type;
          },
          on: function(element, type, handler, context) {
            on2(element, this._getEventType(type), handler, context);
          },
          off: function(element, type, handler) {
            off(element, this._getEventType(type), handler);
          }
        };
        module2.exports = mouseTouchEvent;
      },
      function(module2, exports2, __webpack_require__) {
        var defineClass = __webpack_require__(0);
        var removeElement = __webpack_require__(14);
        var localeText = __webpack_require__(10);
        var DEFAULT_LANGUAGE_TYPE = __webpack_require__(1).DEFAULT_LANGUAGE_TYPE;
        var LayerBase = defineClass(
          {
            init: function(language) {
              language = language || DEFAULT_LANGUAGE_TYPE;
              this._element = null;
              this._localeText = localeText[language];
              this._type = "base";
            },
            _makeContext: function() {
              throwOverrideError(this.getType(), "_makeContext");
            },
            render: function() {
              throwOverrideError(this.getType(), "render");
            },
            getDateElements: function() {
              throwOverrideError(this.getType(), "getDateElements");
            },
            getType: function() {
              return this._type;
            },
            changeLanguage: function(language) {
              this._localeText = localeText[language];
            },
            remove: function() {
              if (this._element) {
                removeElement(this._element);
              }
              this._element = null;
            }
          }
        );
        function throwOverrideError(layerType, methodName) {
          throw new Error(layerType + ' layer does not have the "' + methodName + '" method.');
        }
        module2.exports = LayerBase;
      },
      function(module2, exports2, __webpack_require__) {
        var inArray = __webpack_require__(3);
        var forEachArray2 = __webpack_require__(2);
        var defineClass = __webpack_require__(0);
        var CustomEvents2 = __webpack_require__(8);
        var addClass = __webpack_require__(16);
        var closest = __webpack_require__(25);
        var getData = __webpack_require__(26);
        var hasClass = __webpack_require__(27);
        var removeClass = __webpack_require__(18);
        var removeElement = __webpack_require__(14);
        var extend2 = __webpack_require__(7);
        var isArray2 = __webpack_require__(6);
        var isDate = __webpack_require__(28);
        var isNumber2 = __webpack_require__(15);
        var isObject2 = __webpack_require__(22);
        var TimePicker = __webpack_require__(43);
        var Calendar2 = __webpack_require__(29);
        var RangeModel = __webpack_require__(56);
        var constants = __webpack_require__(1);
        var localeTexts = __webpack_require__(10);
        var dateUtil = __webpack_require__(5);
        var util = __webpack_require__(4);
        var mouseTouchEvent = __webpack_require__(19);
        var tmpl = __webpack_require__(58);
        var DatePickerInput = __webpack_require__(59);
        var DEFAULT_WEEK_START_DAY = constants.DEFAULT_WEEK_START_DAY;
        var DEFAULT_LANGUAGE_TYPE = constants.DEFAULT_LANGUAGE_TYPE;
        var TYPE_DATE = constants.TYPE_DATE;
        var TYPE_MONTH = constants.TYPE_MONTH;
        var TYPE_YEAR = constants.TYPE_YEAR;
        var CLASS_NAME_NEXT_YEAR_BTN = constants.CLASS_NAME_NEXT_YEAR_BTN;
        var CLASS_NAME_NEXT_MONTH_BTN = constants.CLASS_NAME_NEXT_MONTH_BTN;
        var CLASS_NAME_PREV_YEAR_BTN = constants.CLASS_NAME_PREV_YEAR_BTN;
        var CLASS_NAME_PREV_MONTH_BTN = constants.CLASS_NAME_PREV_MONTH_BTN;
        var CLASS_NAME_SELECTED = constants.CLASS_NAME_SELECTED;
        var CLASS_NAME_TITLE_TODAY = constants.CLASS_NAME_TITLE_TODAY;
        var CLASS_NAME_SELECTABLE = "tui-is-selectable";
        var CLASS_NAME_BLOCKED = "tui-is-blocked";
        var CLASS_NAME_CHECKED = "tui-is-checked";
        var CLASS_NAME_SELECTOR_BUTTON = "tui-datepicker-selector-button";
        var CLASS_NAME_TODAY = "tui-calendar-today";
        var CLASS_NAME_HIDDEN = "tui-hidden";
        var SELECTOR_BODY = ".tui-datepicker-body";
        var SELECTOR_DATE_ICO = ".tui-ico-date";
        var SELECTOR_CALENDAR_TITLE = ".tui-calendar-title";
        var SELECTOR_CALENDAR_CONTAINER = ".tui-calendar-container";
        var SELECTOR_TIMEPICKER_CONTAINER = ".tui-timepicker-container";
        var mergeDefaultOption = function(option) {
          option = extend2(
            {
              language: DEFAULT_LANGUAGE_TYPE,
              calendar: {},
              input: {
                element: null,
                format: null
              },
              timePicker: null,
              date: null,
              showAlways: false,
              type: TYPE_DATE,
              selectableRanges: null,
              openers: [],
              autoClose: true,
              usageStatistics: true,
              weekStartDay: DEFAULT_WEEK_START_DAY
            },
            option
          );
          option.selectableRanges = option.selectableRanges || [[constants.MIN_DATE, constants.MAX_DATE]];
          if (!isObject2(option.calendar)) {
            throw new Error("Calendar option must be an object");
          }
          if (!isObject2(option.input)) {
            throw new Error("Input option must be an object");
          }
          if (!isArray2(option.selectableRanges)) {
            throw new Error("Selectable-ranges must be a 2d-array");
          }
          option.localeText = localeTexts[option.language];
          option.calendar.language = option.language;
          option.calendar.type = option.type;
          option.timePicker = option.timePicker || option.timepicker;
          return option;
        };
        var DatePicker2 = defineClass(
          {
            static: {
              localeTexts
            },
            init: function(container, options) {
              options = mergeDefaultOption(options);
              this._language = options.language;
              this._container = util.getElement(container);
              this._container.innerHTML = tmpl(
                extend2(options, {
                  isTab: options.timePicker && options.timePicker.layoutType === "tab"
                })
              );
              this._element = this._container.firstChild;
              this._calendar = new Calendar2(
                this._element.querySelector(SELECTOR_CALENDAR_CONTAINER),
                extend2(options.calendar, {
                  usageStatistics: options.usageStatistics,
                  weekStartDay: options.weekStartDay
                })
              );
              this._timePicker = null;
              this._datepickerInput = null;
              this._date = null;
              this._rangeModel = null;
              this._openers = [];
              this._isEnabled = true;
              this._id = "tui-datepicker-" + util.generateId();
              this._type = options.type;
              this.showAlways = options.showAlways;
              this.autoClose = options.autoClose;
              this._initializeDatePicker(options);
            },
            _initializeDatePicker: function(option) {
              this.setRanges(option.selectableRanges);
              this._setEvents();
              this._initTimePicker(option.timePicker, option.usageStatistics);
              this.setInput(option.input.element);
              this.setDateFormat(option.input.format);
              this.setDate(option.date);
              forEachArray2(option.openers, this.addOpener, this);
              if (!this.showAlways) {
                this._hide();
              }
              if (this.getType() === TYPE_DATE) {
                addClass(this._element.querySelector(SELECTOR_BODY), "tui-datepicker-type-date");
              }
            },
            _setEvents: function() {
              mouseTouchEvent.on(this._element, "click", this._onClickHandler, this);
              this._calendar.on("draw", this._onDrawCalendar, this);
            },
            _removeEvents: function() {
              mouseTouchEvent.off(this._element, "click", this._onClickHandler, this);
              this._calendar.off();
            },
            _setDocumentEvents: function() {
              mouseTouchEvent.on(document, "mousedown", this._onMousedownDocument, this);
            },
            _removeDocumentEvents: function() {
              mouseTouchEvent.off(document, "mousedown", this._onMousedownDocument);
            },
            _setOpenerEvents: function(opener) {
              mouseTouchEvent.on(opener, "click", this.toggle, this);
            },
            _removeOpenerEvents: function(opener) {
              mouseTouchEvent.off(opener, "click", this.toggle);
            },
            _initTimePicker: function(opTimePicker, usageStatistics) {
              var layoutType;
              if (!opTimePicker) {
                return;
              }
              layoutType = opTimePicker.layoutType || "";
              if (isObject2(opTimePicker)) {
                opTimePicker.usageStatistics = usageStatistics;
              } else {
                opTimePicker = {
                  usageStatistics
                };
              }
              this._timePicker = new TimePicker(
                this._element.querySelector(SELECTOR_TIMEPICKER_CONTAINER),
                opTimePicker
              );
              if (layoutType.toLowerCase() === "tab") {
                this._timePicker.hide();
              }
              this._timePicker.on(
                "change",
                function(ev) {
                  var prevDate;
                  if (this._date) {
                    prevDate = new Date(this._date);
                    this.setDate(prevDate.setHours(ev.hour, ev.minute));
                  }
                },
                this
              );
            },
            _changePicker: function(target) {
              var btnSelector = "." + CLASS_NAME_SELECTOR_BUTTON;
              var selectedBtn = closest(target, btnSelector);
              var isDateElement = !!selectedBtn.querySelector(SELECTOR_DATE_ICO);
              if (isDateElement) {
                this._calendar.show();
                this._timePicker.hide();
              } else {
                this._calendar.hide();
                this._timePicker.show();
              }
              removeClass(this._element.querySelector("." + CLASS_NAME_CHECKED), CLASS_NAME_CHECKED);
              addClass(selectedBtn, CLASS_NAME_CHECKED);
            },
            _isOpener: function(element) {
              var el = util.getElement(element);
              return inArray(el, this._openers) > -1;
            },
            _setTodayClassName: function(el) {
              var timestamp, isToday;
              if (this.getCalendarType() !== TYPE_DATE) {
                return;
              }
              timestamp = Number(getData(el, "timestamp"));
              isToday = timestamp === new Date().setHours(0, 0, 0, 0);
              if (isToday) {
                addClass(el, CLASS_NAME_TODAY);
              } else {
                removeClass(el, CLASS_NAME_TODAY);
              }
            },
            _setSelectableClassName: function(el) {
              var elDate = new Date(Number(getData(el, "timestamp")));
              if (this._isSelectableOnCalendar(elDate)) {
                addClass(el, CLASS_NAME_SELECTABLE);
                removeClass(el, CLASS_NAME_BLOCKED);
              } else {
                removeClass(el, CLASS_NAME_SELECTABLE);
                addClass(el, CLASS_NAME_BLOCKED);
              }
            },
            _setSelectedClassName: function(el) {
              var elDate = new Date(Number(getData(el, "timestamp")));
              if (this._isSelectedOnCalendar(elDate)) {
                addClass(el, CLASS_NAME_SELECTED);
              } else {
                removeClass(el, CLASS_NAME_SELECTED);
              }
            },
            _isSelectableOnCalendar: function(date2) {
              var type = this.getCalendarType();
              var start = dateUtil.cloneWithStartOf(date2, type).getTime();
              var end = dateUtil.cloneWithEndOf(date2, type).getTime();
              return this._rangeModel.hasOverlap(start, end);
            },
            _isSelectedOnCalendar: function(date2) {
              var curDate = this.getDate();
              var calendarType = this.getCalendarType();
              return curDate && dateUtil.isSame(curDate, date2, calendarType);
            },
            _show: function() {
              removeClass(this._element, CLASS_NAME_HIDDEN);
            },
            _hide: function() {
              addClass(this._element, CLASS_NAME_HIDDEN);
            },
            _syncToInput: function() {
              if (!this._date) {
                return;
              }
              this._datepickerInput.setDate(this._date);
            },
            _syncFromInput: function(shouldRollback) {
              var isFailed = false;
              var date2;
              try {
                date2 = this._datepickerInput.getDate();
                if (this.isSelectable(date2)) {
                  if (this._timePicker) {
                    this._timePicker.setTime(date2.getHours(), date2.getMinutes());
                  }
                  this.setDate(date2);
                } else {
                  isFailed = true;
                }
              } catch (err) {
                this.fire("error", {
                  type: "ParsingError",
                  message: err.message
                });
                isFailed = true;
              } finally {
                if (isFailed) {
                  if (shouldRollback) {
                    this._syncToInput();
                  } else {
                    this.setNull();
                  }
                }
              }
            },
            _onMousedownDocument: function(ev) {
              var target = util.getTarget(ev);
              var selector = util.getSelector(target);
              var isContain = selector ? this._element.querySelector(selector) : false;
              var isInput = this._datepickerInput.is(target);
              var isInOpener = inArray(target, this._openers) > -1;
              var shouldClose = !(this.showAlways || isInput || isContain || isInOpener);
              if (shouldClose) {
                this.close();
              }
            },
            _onClickHandler: function(ev) {
              var target = util.getTarget(ev);
              if (closest(target, "." + CLASS_NAME_SELECTABLE)) {
                ev.preventDefault();
                this._updateDate(target);
              } else if (closest(target, "." + CLASS_NAME_TITLE_TODAY)) {
                ev.preventDefault();
                this._updateDateToToday();
              } else if (closest(target, SELECTOR_CALENDAR_TITLE)) {
                this.drawUpperCalendar(this._date);
              } else if (closest(target, "." + CLASS_NAME_SELECTOR_BUTTON)) {
                this._changePicker(target);
              }
            },
            _updateDateToToday: function() {
              this.setDate(Date.now());
              this.close();
            },
            _updateDate: function(target) {
              var timestamp = Number(getData(target, "timestamp"));
              var newDate = new Date(timestamp);
              var timePicker = this._timePicker;
              var prevDate = this._date;
              var calendarType = this.getCalendarType();
              var pickerType = this.getType();
              if (calendarType !== pickerType) {
                this.drawLowerCalendar(newDate);
              } else {
                if (timePicker) {
                  newDate.setHours(timePicker.getHour(), timePicker.getMinute());
                } else if (prevDate) {
                  newDate.setHours(prevDate.getHours(), prevDate.getMinutes());
                }
                this.setDate(newDate);
                if (!this.showAlways && this.autoClose) {
                  this.close();
                }
              }
            },
            _onDrawCalendar: function(eventData) {
              forEachArray2(
                eventData.dateElements,
                function(el) {
                  this._setTodayClassName(el);
                  this._setSelectableClassName(el);
                  this._setSelectedClassName(el);
                },
                this
              );
              this._setDisplayHeadButtons();
              this.fire("draw", eventData);
            },
            _setDisplayHeadButtons: function() {
              var customStep = 60;
              var nextYearDate = this._calendar.getNextYearDate(
                this.getCalendarType() === TYPE_YEAR ? customStep : null
              );
              var prevYearDate = this._calendar.getPrevYearDate(
                this.getCalendarType() === TYPE_YEAR ? -customStep : null
              );
              var maxTimestamp = this._rangeModel.getMaximumValue();
              var minTimestamp = this._rangeModel.getMinimumValue();
              var nextYearBtn = this._element.querySelector("." + CLASS_NAME_NEXT_YEAR_BTN);
              var prevYearBtn = this._element.querySelector("." + CLASS_NAME_PREV_YEAR_BTN);
              var nextMonthDate, prevMonthDate, nextMonBtn, prevMonBtn;
              if (this.getCalendarType() === TYPE_DATE) {
                nextMonthDate = dateUtil.cloneWithStartOf(this._calendar.getNextDate(), TYPE_MONTH);
                prevMonthDate = dateUtil.cloneWithEndOf(this._calendar.getPrevDate(), TYPE_MONTH);
                nextMonBtn = this._element.querySelector("." + CLASS_NAME_NEXT_MONTH_BTN);
                prevMonBtn = this._element.querySelector("." + CLASS_NAME_PREV_MONTH_BTN);
                this._setDisplay(nextMonBtn, nextMonthDate.getTime() <= maxTimestamp);
                this._setDisplay(prevMonBtn, prevMonthDate.getTime() >= minTimestamp);
                prevYearDate.setDate(1);
                nextYearDate.setDate(1);
              } else {
                prevYearDate.setMonth(12, 0);
                nextYearDate.setMonth(0, 1);
              }
              this._setDisplay(nextYearBtn, nextYearDate.getTime() <= maxTimestamp);
              this._setDisplay(prevYearBtn, prevYearDate.getTime() >= minTimestamp);
            },
            _setDisplay: function(el, shouldShow) {
              if (el) {
                if (shouldShow) {
                  removeClass(el, CLASS_NAME_HIDDEN);
                } else {
                  addClass(el, CLASS_NAME_HIDDEN);
                }
              }
            },
            _onChangeInput: function() {
              this._syncFromInput(true);
            },
            _isChanged: function(date2) {
              var prevDate = this.getDate();
              return !prevDate || date2.getTime() !== prevDate.getTime();
            },
            _refreshFromRanges: function() {
              if (!this.isSelectable(this._date)) {
                this.setNull();
              } else {
                this._calendar.draw();
              }
            },
            getCalendarType: function() {
              return this._calendar.getType();
            },
            getType: function() {
              return this._type;
            },
            isSelectable: function(date2) {
              var type = this.getType();
              var start, end;
              if (!dateUtil.isValidDate(date2)) {
                return false;
              }
              start = dateUtil.cloneWithStartOf(date2, type).getTime();
              end = dateUtil.cloneWithEndOf(date2, type).getTime();
              return this._rangeModel.hasOverlap(start, end);
            },
            isSelected: function(date2) {
              return dateUtil.isValidDate(date2) && dateUtil.isSame(this._date, date2, this.getType());
            },
            setRanges: function(ranges) {
              var result = [];
              forEachArray2(ranges, function(range2) {
                var start = new Date(range2[0]).getTime();
                var end = new Date(range2[1]).getTime();
                result.push([start, end]);
              });
              this._rangeModel = new RangeModel(result);
              this._refreshFromRanges();
            },
            setType: function(type) {
              this._type = type;
            },
            addRange: function(start, end) {
              start = new Date(start).getTime();
              end = new Date(end).getTime();
              this._rangeModel.add(start, end);
              this._refreshFromRanges();
            },
            removeRange: function(start, end, type) {
              start = new Date(start);
              end = new Date(end);
              if (type) {
                start = dateUtil.cloneWithStartOf(start, type);
                end = dateUtil.cloneWithEndOf(end, type);
              }
              this._rangeModel.exclude(start.getTime(), end.getTime());
              this._refreshFromRanges();
            },
            addOpener: function(opener) {
              opener = util.getElement(opener);
              if (!this._isOpener(opener)) {
                this._openers.push(opener);
                this._setOpenerEvents(opener);
              }
            },
            removeOpener: function(opener) {
              var index;
              opener = util.getElement(opener);
              index = inArray(opener, this._openers);
              if (index > -1) {
                this._removeOpenerEvents(opener);
                this._openers.splice(index, 1);
              }
            },
            removeAllOpeners: function() {
              forEachArray2(
                this._openers,
                function(opener) {
                  this._removeOpenerEvents(opener);
                },
                this
              );
              this._openers = [];
            },
            open: function() {
              if (this.isOpened() || !this._isEnabled) {
                return;
              }
              this._calendar.draw({
                date: this._date,
                type: this._type
              });
              this._show();
              if (!this.showAlways) {
                this._setDocumentEvents();
              }
              this.fire("open");
            },
            drawUpperCalendar: function(date2) {
              var calendarType = this.getCalendarType();
              if (calendarType === TYPE_DATE) {
                this._calendar.draw({
                  date: date2,
                  type: TYPE_MONTH
                });
              } else if (calendarType === TYPE_MONTH) {
                this._calendar.draw({
                  date: date2,
                  type: TYPE_YEAR
                });
              }
            },
            drawLowerCalendar: function(date2) {
              var calendarType = this.getCalendarType();
              var pickerType = this.getType();
              var isLast = calendarType === pickerType;
              if (isLast) {
                return;
              }
              if (calendarType === TYPE_MONTH) {
                this._calendar.draw({
                  date: date2,
                  type: TYPE_DATE
                });
              } else if (calendarType === TYPE_YEAR) {
                this._calendar.draw({
                  date: date2,
                  type: TYPE_MONTH
                });
              }
            },
            close: function() {
              if (!this.isOpened()) {
                return;
              }
              this._removeDocumentEvents();
              this._hide();
              this.fire("close");
            },
            toggle: function() {
              if (this.isOpened()) {
                this.close();
              } else {
                this.open();
              }
            },
            getDate: function() {
              if (!this._date) {
                return null;
              }
              return new Date(this._date);
            },
            setDate: function(date2, silent) {
              var isValidInput, newDate, shouldUpdate;
              if (date2 === null) {
                this.setNull();
                return;
              }
              isValidInput = isNumber2(date2) || isDate(date2);
              newDate = new Date(date2);
              shouldUpdate = isValidInput && this._isChanged(newDate) && this.isSelectable(newDate);
              if (shouldUpdate) {
                newDate = new Date(date2);
                this._date = newDate;
                this._calendar.draw({ date: newDate });
                if (this._timePicker) {
                  this._timePicker.setTime(newDate.getHours(), newDate.getMinutes(), true);
                }
                this._syncToInput();
                if (!silent) {
                  this.fire("change");
                }
              }
            },
            setNull: function() {
              var calendarDate = this._calendar.getDate();
              var isChagned = this._date !== null;
              this._date = null;
              if (this._datepickerInput) {
                this._datepickerInput.clearText();
              }
              if (this._timePicker) {
                this._timePicker.setTime(0, 0);
              }
              if (!this.isSelectable(calendarDate)) {
                this._calendar.draw({
                  date: new Date(this._rangeModel.getMinimumValue())
                });
              } else {
                this._calendar.draw();
              }
              if (isChagned) {
                this.fire("change");
              }
            },
            setDateFormat: function(format) {
              this._datepickerInput.setFormat(format);
              this._syncToInput();
            },
            isOpened: function() {
              return !hasClass(this._element, CLASS_NAME_HIDDEN);
            },
            getTimePicker: function() {
              return this._timePicker;
            },
            getCalendar: function() {
              return this._calendar;
            },
            getLocaleText: function() {
              return localeTexts[this._language] || localeTexts[DEFAULT_LANGUAGE_TYPE];
            },
            setInput: function(element, options) {
              var prev = this._datepickerInput;
              var localeText = this.getLocaleText();
              var prevFormat;
              options = options || {};
              if (prev) {
                prevFormat = prev.getFormat();
                prev.destroy();
              }
              this._datepickerInput = new DatePickerInput(element, {
                format: options.format || prevFormat,
                id: this._id,
                localeText
              });
              this._datepickerInput.on(
                {
                  change: this._onChangeInput,
                  click: this.open
                },
                this
              );
              if (options.syncFromInput) {
                this._syncFromInput();
              } else {
                this._syncToInput();
              }
            },
            enable: function() {
              if (this._isEnabled) {
                return;
              }
              this._isEnabled = true;
              this._datepickerInput.enable();
              forEachArray2(
                this._openers,
                function(opener) {
                  opener.removeAttribute("disabled");
                  this._setOpenerEvents(opener);
                },
                this
              );
            },
            disable: function() {
              if (!this._isEnabled) {
                return;
              }
              this._isEnabled = false;
              this.close();
              this._datepickerInput.disable();
              forEachArray2(
                this._openers,
                function(opener) {
                  opener.setAttribute("disabled", true);
                  this._removeOpenerEvents(opener);
                },
                this
              );
            },
            isDisabled: function() {
              return !this._isEnabled;
            },
            addCssClass: function(className2) {
              addClass(this._element, className2);
            },
            removeCssClass: function(className2) {
              removeClass(this._element, className2);
            },
            getDateElements: function() {
              return this._calendar.getDateElements();
            },
            findOverlappedRange: function(startDate, endDate) {
              var startTimestamp = new Date(startDate).getTime();
              var endTimestamp = new Date(endDate).getTime();
              var overlappedRange = this._rangeModel.findOverlappedRange(startTimestamp, endTimestamp);
              return [new Date(overlappedRange[0]), new Date(overlappedRange[1])];
            },
            changeLanguage: function(language) {
              this._language = language;
              this._calendar.changeLanguage(this._language);
              this._datepickerInput.changeLocaleTitles(this.getLocaleText().titles);
              this.setDateFormat(this._datepickerInput.getFormat());
              if (this._timePicker) {
                this._timePicker.changeLanguage(this._language);
              }
            },
            destroy: function() {
              this._removeDocumentEvents();
              this._calendar.destroy();
              if (this._timePicker) {
                this._timePicker.destroy();
              }
              if (this._datepickerInput) {
                this._datepickerInput.destroy();
              }
              this._removeEvents();
              removeElement(this._element);
              this.removeAllOpeners();
              this._calendar = this._timePicker = this._datepickerInput = this._container = this._element = this._date = this._rangeModel = this._openers = this._isEnabled = this._id = null;
            }
          }
        );
        CustomEvents2.mixin(DatePicker2);
        module2.exports = DatePicker2;
      },
      function(module2, exports2, __webpack_require__) {
        function isObject2(obj) {
          return obj === Object(obj);
        }
        module2.exports = isObject2;
      },
      function(module2, exports2, __webpack_require__) {
        function forEachOwnProperties2(obj, iteratee, context) {
          var key;
          context = context || null;
          for (key in obj) {
            if (obj.hasOwnProperty(key)) {
              if (iteratee.call(context, obj[key], key, obj) === false) {
                break;
              }
            }
          }
        }
        module2.exports = forEachOwnProperties2;
      },
      function(module2, exports2, __webpack_require__) {
        var isArray2 = __webpack_require__(6);
        var isUndefined2 = __webpack_require__(12);
        function setClassName(element, cssClass) {
          cssClass = isArray2(cssClass) ? cssClass.join(" ") : cssClass;
          cssClass = cssClass.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
          if (isUndefined2(element.className.baseVal)) {
            element.className = cssClass;
            return;
          }
          element.className.baseVal = cssClass;
        }
        module2.exports = setClassName;
      },
      function(module2, exports2, __webpack_require__) {
        var matches = __webpack_require__(40);
        function closest(element, selector) {
          var parent = element.parentNode;
          if (matches(element, selector)) {
            return element;
          }
          while (parent && parent !== document) {
            if (matches(parent, selector)) {
              return parent;
            }
            parent = parent.parentNode;
          }
          return null;
        }
        module2.exports = closest;
      },
      function(module2, exports2, __webpack_require__) {
        var convertToKebabCase = __webpack_require__(42);
        function getData(element, key) {
          if (element.dataset) {
            return element.dataset[key];
          }
          return element.getAttribute("data-" + convertToKebabCase(key));
        }
        module2.exports = getData;
      },
      function(module2, exports2, __webpack_require__) {
        var inArray = __webpack_require__(3);
        var getClass = __webpack_require__(17);
        function hasClass(element, cssClass) {
          var origin;
          if (element.classList) {
            return element.classList.contains(cssClass);
          }
          origin = getClass(element).split(/\s+/);
          return inArray(cssClass, origin) > -1;
        }
        module2.exports = hasClass;
      },
      function(module2, exports2, __webpack_require__) {
        function isDate(obj) {
          return obj instanceof Date;
        }
        module2.exports = isDate;
      },
      function(module2, exports2, __webpack_require__) {
        var defineClass = __webpack_require__(0);
        var CustomEvents2 = __webpack_require__(8);
        var addClass = __webpack_require__(16);
        var hasClass = __webpack_require__(27);
        var removeClass = __webpack_require__(18);
        var removeElement = __webpack_require__(14);
        var extend2 = __webpack_require__(7);
        var Header = __webpack_require__(44);
        var Body = __webpack_require__(49);
        var localeTexts = __webpack_require__(10);
        var constants = __webpack_require__(1);
        var dateUtil = __webpack_require__(5);
        var util = __webpack_require__(4);
        var DEFAULT_WEEK_START_DAY = constants.DEFAULT_WEEK_START_DAY;
        var DEFAULT_LANGUAGE_TYPE = constants.DEFAULT_LANGUAGE_TYPE;
        var TYPE_DATE = constants.TYPE_DATE;
        var TYPE_MONTH = constants.TYPE_MONTH;
        var TYPE_YEAR = constants.TYPE_YEAR;
        var CLASS_NAME_PREV_MONTH_BTN = constants.CLASS_NAME_PREV_MONTH_BTN;
        var CLASS_NAME_PREV_YEAR_BTN = constants.CLASS_NAME_PREV_YEAR_BTN;
        var CLASS_NAME_NEXT_YEAR_BTN = constants.CLASS_NAME_NEXT_YEAR_BTN;
        var CLASS_NAME_NEXT_MONTH_BTN = constants.CLASS_NAME_NEXT_MONTH_BTN;
        var CLASS_NAME_CALENDAR_MONTH = "tui-calendar-month";
        var CLASS_NAME_CALENDAR_YEAR = "tui-calendar-year";
        var CLASS_NAME_HIDDEN = "tui-hidden";
        var HEADER_SELECTOR = ".tui-calendar-header";
        var BODY_SELECTOR = ".tui-calendar-body";
        var Calendar2 = defineClass(
          {
            static: {
              localeTexts
            },
            init: function(container, options) {
              options = extend2(
                {
                  language: DEFAULT_LANGUAGE_TYPE,
                  showToday: true,
                  showJumpButtons: false,
                  date: new Date(),
                  type: TYPE_DATE,
                  usageStatistics: true,
                  weekStartDay: DEFAULT_WEEK_START_DAY
                },
                options
              );
              this._container = util.getElement(container);
              this._container.innerHTML = '<div class="tui-calendar">    <div class="tui-calendar-header"></div>    <div class="tui-calendar-body"></div></div>';
              this._element = this._container.firstChild;
              this._date = null;
              this._type = null;
              this._header = null;
              this._body = null;
              this._initHeader(options);
              this._initBody(options);
              this.draw({
                date: options.date,
                type: options.type
              });
              if (options.usageStatistics) {
                util.sendHostName();
              }
            },
            _initHeader: function(options) {
              var headerContainer = this._element.querySelector(HEADER_SELECTOR);
              this._header = new Header(headerContainer, options);
              this._header.on(
                "click",
                function(ev) {
                  var target = util.getTarget(ev);
                  if (hasClass(target, CLASS_NAME_PREV_MONTH_BTN)) {
                    this.drawPrev();
                  } else if (hasClass(target, CLASS_NAME_PREV_YEAR_BTN)) {
                    this._onClickPrevYear();
                  } else if (hasClass(target, CLASS_NAME_NEXT_MONTH_BTN)) {
                    this.drawNext();
                  } else if (hasClass(target, CLASS_NAME_NEXT_YEAR_BTN)) {
                    this._onClickNextYear();
                  }
                },
                this
              );
            },
            _initBody: function(options) {
              var bodyContainer = this._element.querySelector(BODY_SELECTOR);
              this._body = new Body(bodyContainer, options);
            },
            _onClickPrevYear: function() {
              if (this.getType() === TYPE_DATE) {
                this.draw({
                  date: this._getRelativeDate(-12)
                });
              } else {
                this.drawPrev();
              }
            },
            _onClickNextYear: function() {
              if (this.getType() === TYPE_DATE) {
                this.draw({
                  date: this._getRelativeDate(12)
                });
              } else {
                this.drawNext();
              }
            },
            _isValidType: function(type) {
              return type === TYPE_DATE || type === TYPE_MONTH || type === TYPE_YEAR;
            },
            _shouldUpdate: function(date2, type) {
              var prevDate = this._date;
              if (!dateUtil.isValidDate(date2)) {
                throw new Error("Invalid date");
              }
              if (!this._isValidType(type)) {
                throw new Error("Invalid layer type");
              }
              return !prevDate || prevDate.getFullYear() !== date2.getFullYear() || prevDate.getMonth() !== date2.getMonth() || this.getType() !== type;
            },
            _render: function() {
              var date2 = this._date;
              var type = this.getType();
              this._header.render(date2, type);
              this._body.render(date2, type);
              removeClass(this._element, CLASS_NAME_CALENDAR_MONTH, CLASS_NAME_CALENDAR_YEAR);
              switch (type) {
                case TYPE_MONTH:
                  addClass(this._element, CLASS_NAME_CALENDAR_MONTH);
                  break;
                case TYPE_YEAR:
                  addClass(this._element, CLASS_NAME_CALENDAR_YEAR);
                  break;
              }
            },
            _getRelativeDate: function(step) {
              var prev = this._date;
              return new Date(prev.getFullYear(), prev.getMonth() + step);
            },
            draw: function(options) {
              var date2, type;
              options = options || {};
              date2 = options.date || this._date;
              type = (options.type || this.getType()).toLowerCase();
              if (this._shouldUpdate(date2, type)) {
                this._date = date2;
                this._type = type;
                this._render();
              }
              this.fire("draw", {
                date: this._date,
                type,
                dateElements: this._body.getDateElements()
              });
            },
            show: function() {
              removeClass(this._element, CLASS_NAME_HIDDEN);
            },
            hide: function() {
              addClass(this._element, CLASS_NAME_HIDDEN);
            },
            drawNext: function() {
              this.draw({
                date: this.getNextDate()
              });
            },
            drawPrev: function() {
              this.draw({
                date: this.getPrevDate()
              });
            },
            getNextDate: function() {
              if (this.getType() === TYPE_DATE) {
                return this._getRelativeDate(1);
              }
              return this.getNextYearDate();
            },
            getPrevDate: function() {
              if (this.getType() === TYPE_DATE) {
                return this._getRelativeDate(-1);
              }
              return this.getPrevYearDate();
            },
            getNextYearDate: function(customStep) {
              if (customStep) {
                return this._getRelativeDate(customStep);
              }
              switch (this.getType()) {
                case TYPE_DATE:
                case TYPE_MONTH:
                  return this._getRelativeDate(12);
                case TYPE_YEAR:
                  return this._getRelativeDate(108);
                default:
                  throw new Error("Unknown layer type");
              }
            },
            getPrevYearDate: function(customStep) {
              if (customStep) {
                return this._getRelativeDate(customStep);
              }
              switch (this.getType()) {
                case TYPE_DATE:
                case TYPE_MONTH:
                  return this._getRelativeDate(-12);
                case TYPE_YEAR:
                  return this._getRelativeDate(-108);
                default:
                  throw new Error("Unknown layer type");
              }
            },
            changeLanguage: function(language) {
              this._header.changeLanguage(language);
              this._body.changeLanguage(language);
              this._render();
            },
            getDate: function() {
              return new Date(this._date);
            },
            getType: function() {
              return this._type;
            },
            getDateElements: function() {
              return this._body.getDateElements();
            },
            addCssClass: function(className2) {
              addClass(this._element, className2);
            },
            removeCssClass: function(className2) {
              removeClass(this._element, className2);
            },
            destroy: function() {
              this._header.destroy();
              this._body.destroy();
              removeElement(this._element);
              this._type = this._date = this._container = this._element = this._header = this._body = null;
            }
          }
        );
        CustomEvents2.mixin(Calendar2);
        module2.exports = Calendar2;
      },
      function(module2, exports2, __webpack_require__) {
        var inArray = __webpack_require__(3);
        var forEachArray2 = __webpack_require__(2);
        var defineClass = __webpack_require__(0);
        var util = __webpack_require__(4);
        var dateUtil = __webpack_require__(5);
        var constants = __webpack_require__(1);
        var localeTexts = __webpack_require__(10);
        var rFormableKeys = /\\?(yyyy|yy|mmmm|mmm|mm|m|dd|d|hh|h|a)/gi;
        var mapForConverting = {
          yyyy: {
            expression: "(\\d{4}|\\d{2})",
            type: constants.TYPE_YEAR
          },
          yy: {
            expression: "(\\d{4}|\\d{2})",
            type: constants.TYPE_YEAR
          },
          y: {
            expression: "(\\d{4}|\\d{2})",
            type: constants.TYPE_YEAR
          },
          M: {
            expression: "(1[012]|0[1-9]|[1-9])",
            type: constants.TYPE_MONTH
          },
          MM: {
            expression: "(1[012]|0[1-9]|[1-9])",
            type: constants.TYPE_MONTH
          },
          MMM: {
            expression: "(1[012]|0[1-9]|[1-9])",
            type: constants.TYPE_MONTH
          },
          MMMM: {
            expression: "(1[012]|0[1-9]|[1-9])",
            type: constants.TYPE_MONTH
          },
          mmm: {
            expression: "(1[012]|0[1-9]|[1-9])",
            type: constants.TYPE_MONTH
          },
          mmmm: {
            expression: "(1[012]|0[1-9]|[1-9])",
            type: constants.TYPE_MONTH
          },
          dd: {
            expression: "([12]\\d{1}|3[01]|0[1-9]|[1-9])",
            type: constants.TYPE_DATE
          },
          d: {
            expression: "([12]\\d{1}|3[01]|0[1-9]|[1-9])",
            type: constants.TYPE_DATE
          },
          D: {
            expression: "([12]\\d{1}|3[01]|0[1-9]|[1-9])",
            type: constants.TYPE_DATE
          },
          DD: {
            expression: "([12]\\d{1}|3[01]|0[1-9]|[1-9])",
            type: constants.TYPE_DATE
          },
          h: {
            expression: "(d{1}|0\\d{1}|1\\d{1}|2[0123])",
            type: constants.TYPE_HOUR
          },
          hh: {
            expression: "(d{1}|[01]\\d{1}|2[0123])",
            type: constants.TYPE_HOUR
          },
          H: {
            expression: "(d{1}|0\\d{1}|1\\d{1}|2[0123])",
            type: constants.TYPE_HOUR
          },
          HH: {
            expression: "(d{1}|[01]\\d{1}|2[0123])",
            type: constants.TYPE_HOUR
          },
          m: {
            expression: "(d{1}|[012345]\\d{1})",
            type: constants.TYPE_MINUTE
          },
          mm: {
            expression: "(d{1}|[012345]\\d{1})",
            type: constants.TYPE_MINUTE
          },
          a: {
            expression: "([ap]m)",
            type: constants.TYPE_MERIDIEM
          },
          A: {
            expression: "([ap]m)",
            type: constants.TYPE_MERIDIEM
          }
        };
        var DateTimeFormatter = defineClass(
          {
            init: function(rawStr, titles) {
              this._rawStr = rawStr;
              this._keyOrder = null;
              this._regExp = null;
              this._titles = titles || localeTexts.en.titles;
              this._parseFormat();
            },
            _parseFormat: function() {
              var regExpStr = "^";
              var matchedKeys = this._rawStr.match(rFormableKeys);
              var keyOrder = [];
              matchedKeys = util.filter(matchedKeys, function(key) {
                return key[0] !== "\\";
              });
              forEachArray2(matchedKeys, function(key, index) {
                if (!/m/i.test(key)) {
                  key = key.toLowerCase();
                }
                regExpStr += mapForConverting[key].expression + "[\\D\\s]*";
                keyOrder[index] = mapForConverting[key].type;
              });
              regExpStr += "$";
              this._keyOrder = keyOrder;
              this._regExp = new RegExp(regExpStr, "gi");
            },
            parse: function(str) {
              var dateHash = {
                year: 0,
                month: 1,
                date: 1,
                hour: 0,
                minute: 0
              };
              var hasMeridiem = false;
              var isPM = false;
              var matched;
              this._regExp.lastIndex = 0;
              matched = this._regExp.exec(str);
              if (!matched) {
                throw Error('DateTimeFormatter: Not matched - "' + str + '"');
              }
              forEachArray2(this._keyOrder, function(name, index) {
                var value = matched[index + 1];
                if (name === constants.TYPE_MERIDIEM && /[ap]m/i.test(value)) {
                  hasMeridiem = true;
                  isPM = /pm/i.test(value);
                } else {
                  value = Number(value);
                  if (value !== 0 && !value) {
                    throw Error("DateTimeFormatter: Unknown value - " + matched[index + 1]);
                  }
                  if (name === constants.TYPE_YEAR && value < 100) {
                    value += 2e3;
                  }
                  dateHash[name] = value;
                }
              });
              if (hasMeridiem) {
                isPM = isPM || dateHash.hour > 12;
                dateHash.hour %= 12;
                if (isPM) {
                  dateHash.hour += 12;
                }
              }
              return new Date(
                dateHash.year,
                dateHash.month - 1,
                dateHash.date,
                dateHash.hour,
                dateHash.minute
              );
            },
            getRawString: function() {
              return this._rawStr;
            },
            format: function(dateObj) {
              var year = dateObj.getFullYear();
              var month = dateObj.getMonth() + 1;
              var dayInMonth = dateObj.getDate();
              var day = dateObj.getDay();
              var hour = dateObj.getHours();
              var minute = dateObj.getMinutes();
              var meridiem = "a";
              var replaceMap;
              if (inArray(constants.TYPE_MERIDIEM, this._keyOrder) > -1) {
                meridiem = hour >= 12 ? "pm" : "am";
                hour = dateUtil.getMeridiemHour(hour);
              }
              replaceMap = {
                yyyy: year,
                yy: String(year).substr(2, 2),
                M: month,
                MM: dateUtil.prependLeadingZero(month),
                MMM: this._titles.MMM[month - 1],
                MMMM: this._titles.MMMM[month - 1],
                d: dayInMonth,
                dd: dateUtil.prependLeadingZero(dayInMonth),
                D: this._titles.D[day],
                DD: this._titles.DD[day],
                hh: dateUtil.prependLeadingZero(hour),
                h: hour,
                mm: dateUtil.prependLeadingZero(minute),
                m: minute,
                A: meridiem.toUpperCase(),
                a: meridiem
              };
              return this._rawStr.replace(rFormableKeys, function(key) {
                if (key[0] === "\\") {
                  return key.substr(1);
                }
                return replaceMap[key] || replaceMap[key.toLowerCase()] || "";
              });
            }
          }
        );
        module2.exports = DateTimeFormatter;
      },
      function(module2, exports2, __webpack_require__) {
        var isString2 = __webpack_require__(13);
        var forEach2 = __webpack_require__(9);
        var safeEvent = __webpack_require__(32);
        function on2(element, types, handler, context) {
          if (isString2(types)) {
            forEach2(types.split(/\s+/g), function(type) {
              bindEvent(element, type, handler, context);
            });
            return;
          }
          forEach2(types, function(func, type) {
            bindEvent(element, type, func, handler);
          });
        }
        function bindEvent(element, type, handler, context) {
          function eventHandler(e2) {
            handler.call(context || element, e2 || window.event);
          }
          if ("addEventListener" in element) {
            element.addEventListener(type, eventHandler);
          } else if ("attachEvent" in element) {
            element.attachEvent("on" + type, eventHandler);
          }
          memorizeHandler(element, type, handler, eventHandler);
        }
        function memorizeHandler(element, type, handler, wrappedHandler) {
          var events = safeEvent(element, type);
          var existInEvents = false;
          forEach2(events, function(obj) {
            if (obj.handler === handler) {
              existInEvents = true;
              return false;
            }
            return true;
          });
          if (!existInEvents) {
            events.push({
              handler,
              wrappedHandler
            });
          }
        }
        module2.exports = on2;
      },
      function(module2, exports2, __webpack_require__) {
        var EVENT_KEY = "_feEventKey";
        function safeEvent(element, type) {
          var events = element[EVENT_KEY];
          var handlers;
          if (!events) {
            events = element[EVENT_KEY] = {};
          }
          handlers = events[type];
          if (!handlers) {
            handlers = events[type] = [];
          }
          return handlers;
        }
        module2.exports = safeEvent;
      },
      function(module2, exports2, __webpack_require__) {
        var isString2 = __webpack_require__(13);
        var forEach2 = __webpack_require__(9);
        var safeEvent = __webpack_require__(32);
        function off(element, types, handler) {
          if (isString2(types)) {
            forEach2(types.split(/\s+/g), function(type) {
              unbindEvent(element, type, handler);
            });
            return;
          }
          forEach2(types, function(func, type) {
            unbindEvent(element, type, func);
          });
        }
        function unbindEvent(element, type, handler) {
          var events = safeEvent(element, type);
          var index;
          if (!handler) {
            forEach2(events, function(item) {
              removeHandler(element, type, item.wrappedHandler);
            });
            events.splice(0, events.length);
          } else {
            forEach2(events, function(item, idx) {
              if (handler === item.handler) {
                removeHandler(element, type, item.wrappedHandler);
                index = idx;
                return false;
              }
              return true;
            });
            events.splice(index, 1);
          }
        }
        function removeHandler(element, type, handler) {
          if ("removeEventListener" in element) {
            element.removeEventListener(type, handler);
          } else if ("detachEvent" in element) {
            element.detachEvent("on" + type, handler);
          }
        }
        module2.exports = off;
      },
      function(module2, exports2, __webpack_require__) {
        var DatePicker2 = __webpack_require__(21);
        var DateRangePicker = __webpack_require__(60);
        var Calendar2 = __webpack_require__(29);
        __webpack_require__(61);
        DatePicker2.createCalendar = function(wrapperElement, options) {
          return new Calendar2(wrapperElement, options);
        };
        DatePicker2.createRangePicker = function(options) {
          return new DateRangePicker(options);
        };
        module2.exports = DatePicker2;
      },
      function(module2, exports2, __webpack_require__) {
        var createObject = __webpack_require__(36);
        function inherit(subType, superType) {
          var prototype = createObject(superType.prototype);
          prototype.constructor = subType;
          subType.prototype = prototype;
        }
        module2.exports = inherit;
      },
      function(module2, exports2, __webpack_require__) {
        function createObject(obj) {
          function F2() {
          }
          F2.prototype = obj;
          return new F2();
        }
        module2.exports = createObject;
      },
      function(module2, exports2, __webpack_require__) {
        var isUndefined2 = __webpack_require__(12);
        var isNull2 = __webpack_require__(38);
        function isExisty2(param) {
          return !isUndefined2(param) && !isNull2(param);
        }
        module2.exports = isExisty2;
      },
      function(module2, exports2, __webpack_require__) {
        function isNull2(obj) {
          return obj === null;
        }
        module2.exports = isNull2;
      },
      function(module2, exports2, __webpack_require__) {
        function isFunction2(obj) {
          return obj instanceof Function;
        }
        module2.exports = isFunction2;
      },
      function(module2, exports2, __webpack_require__) {
        var inArray = __webpack_require__(3);
        var toArray = __webpack_require__(41);
        var elProto2 = Element.prototype;
        var matchSelector = elProto2.matches || elProto2.webkitMatchesSelector || elProto2.mozMatchesSelector || elProto2.msMatchesSelector || function(selector) {
          var doc = this.document || this.ownerDocument;
          return inArray(this, toArray(doc.querySelectorAll(selector))) > -1;
        };
        function matches(element, selector) {
          return matchSelector.call(element, selector);
        }
        module2.exports = matches;
      },
      function(module2, exports2, __webpack_require__) {
        var forEachArray2 = __webpack_require__(2);
        function toArray(arrayLike) {
          var arr;
          try {
            arr = Array.prototype.slice.call(arrayLike);
          } catch (e2) {
            arr = [];
            forEachArray2(arrayLike, function(value) {
              arr.push(value);
            });
          }
          return arr;
        }
        module2.exports = toArray;
      },
      function(module2, exports2, __webpack_require__) {
        function convertToKebabCase(key) {
          return key.replace(/([A-Z])/g, function(match) {
            return "-" + match.toLowerCase();
          });
        }
        module2.exports = convertToKebabCase;
      },
      function(module2, exports2) {
        module2.exports = __WEBPACK_EXTERNAL_MODULE__43__;
      },
      function(module2, exports2, __webpack_require__) {
        var defineClass = __webpack_require__(0);
        var CustomEvents2 = __webpack_require__(8);
        var closest = __webpack_require__(25);
        var removeElement = __webpack_require__(14);
        var localeTexts = __webpack_require__(10);
        var headerTmpl = __webpack_require__(45);
        var DateTimeFormatter = __webpack_require__(30);
        var constants = __webpack_require__(1);
        var util = __webpack_require__(4);
        var mouseTouchEvent = __webpack_require__(19);
        var TYPE_DATE = constants.TYPE_DATE;
        var TYPE_MONTH = constants.TYPE_MONTH;
        var TYPE_YEAR = constants.TYPE_YEAR;
        var CLASS_NAME_TITLE_MONTH = "tui-calendar-title-month";
        var CLASS_NAME_TITLE_YEAR = "tui-calendar-title-year";
        var CLASS_NAME_TITLE_YEAR_TO_YEAR = "tui-calendar-title-year-to-year";
        var SELECTOR_INNER_ELEM = ".tui-calendar-header-inner";
        var SELECTOR_INFO_ELEM = ".tui-calendar-header-info";
        var SELECTOR_BTN = ".tui-calendar-btn";
        var YEAR_TITLE_FORMAT = "yyyy";
        var Header = defineClass(
          {
            init: function(container, option) {
              this._container = util.getElement(container);
              this._innerElement = null;
              this._infoElement = null;
              this._showToday = option.showToday;
              this._showJumpButtons = option.showJumpButtons;
              this._yearMonthTitleFormatter = null;
              this._yearTitleFormatter = null;
              this._todayFormatter = null;
              this._setFormatters(localeTexts[option.language]);
              this._setEvents(option);
            },
            _setFormatters: function(localeText) {
              this._yearMonthTitleFormatter = new DateTimeFormatter(
                localeText.titleFormat,
                localeText.titles
              );
              this._yearTitleFormatter = new DateTimeFormatter(YEAR_TITLE_FORMAT, localeText.titles);
              this._todayFormatter = new DateTimeFormatter(localeText.todayFormat, localeText.titles);
            },
            _setEvents: function() {
              mouseTouchEvent.on(this._container, "click", this._onClickHandler, this);
            },
            _removeEvents: function() {
              this.off();
              mouseTouchEvent.off(this._container, "click", this._onClickHandler);
            },
            _onClickHandler: function(ev) {
              var target = util.getTarget(ev);
              if (closest(target, SELECTOR_BTN)) {
                this.fire("click", ev);
              }
            },
            _getTitleClass: function(type) {
              switch (type) {
                case TYPE_DATE:
                  return CLASS_NAME_TITLE_MONTH;
                case TYPE_MONTH:
                  return CLASS_NAME_TITLE_YEAR;
                case TYPE_YEAR:
                  return CLASS_NAME_TITLE_YEAR_TO_YEAR;
                default:
                  return "";
              }
            },
            _getTitleText: function(date2, type) {
              var currentYear, start, end;
              switch (type) {
                case TYPE_DATE:
                  return this._yearMonthTitleFormatter.format(date2);
                case TYPE_MONTH:
                  return this._yearTitleFormatter.format(date2);
                case TYPE_YEAR:
                  currentYear = date2.getFullYear();
                  start = new Date(currentYear - 4, 0, 1);
                  end = new Date(currentYear + 4, 0, 1);
                  return this._yearTitleFormatter.format(start) + " - " + this._yearTitleFormatter.format(end);
                default:
                  return "";
              }
            },
            changeLanguage: function(language) {
              this._setFormatters(localeTexts[language]);
            },
            render: function(date2, type) {
              var context = {
                showToday: this._showToday,
                showJumpButtons: this._showJumpButtons,
                todayText: this._todayFormatter.format(new Date()),
                isDateCalendar: type === TYPE_DATE,
                titleClass: this._getTitleClass(type),
                title: this._getTitleText(date2, type)
              };
              this._container.innerHTML = headerTmpl(context).replace(/^\s+|\s+$/g, "");
              this._innerElement = this._container.querySelector(SELECTOR_INNER_ELEM);
              if (context.showToday) {
                this._infoElement = this._container.querySelector(SELECTOR_INFO_ELEM);
              }
            },
            destroy: function() {
              this._removeEvents();
              removeElement(this._innerElement);
              removeElement(this._infoElement);
              this._container = this._showToday = this._showJumpButtons = this._yearMonthTitleFormatter = this._yearTitleFormatter = this._todayFormatter = this._innerElement = this._infoElement = null;
            }
          }
        );
        CustomEvents2.mixin(Header);
        module2.exports = Header;
      },
      function(module2, exports2, __webpack_require__) {
        var template = __webpack_require__(11);
        module2.exports = function(context) {
          var source = '{{if isDateCalendar}}  {{if showJumpButtons}}    <div class="tui-calendar-header-inner tui-calendar-has-btns">      <button class="tui-calendar-btn tui-calendar-btn-prev-year">Prev year</button>      <button class="tui-calendar-btn tui-calendar-btn-prev-month">Prev month</button>      <em class="tui-calendar-title {{titleClass}}">{{title}}</em>      <button class="tui-calendar-btn tui-calendar-btn-next-month">Next month</button>      <button class="tui-calendar-btn tui-calendar-btn-next-year">Next year</button>    </div>  {{else}}    <div class="tui-calendar-header-inner">      <button class="tui-calendar-btn tui-calendar-btn-prev-month">Prev month</button>      <em class="tui-calendar-title {{titleClass}}">{{title}}</em>      <button class="tui-calendar-btn tui-calendar-btn-next-month">Next month</button>    </div>  {{/if}}{{else}}  <div class="tui-calendar-header-inner">    <button class="tui-calendar-btn tui-calendar-btn-prev-year">Prev year</button>    <em class="tui-calendar-title {{titleClass}}">{{title}}</em>    <button class="tui-calendar-btn tui-calendar-btn-next-year">Next year</button>  </div>{{/if}}{{if showToday}}  <div class="tui-calendar-header-info">    <p class="tui-calendar-title-today">{{todayText}}</p>  </div>{{/if}}';
          return template(source, context);
        };
      },
      function(module2, exports2, __webpack_require__) {
        function isHTMLNode(html2) {
          if (typeof HTMLElement === "object") {
            return html2 && (html2 instanceof HTMLElement || !!html2.nodeType);
          }
          return !!(html2 && html2.nodeType);
        }
        module2.exports = isHTMLNode;
      },
      function(module2, exports2, __webpack_require__) {
        var isUndefined2 = __webpack_require__(12);
        var imagePing2 = __webpack_require__(48);
        var ms7days2 = 7 * 24 * 60 * 60 * 1e3;
        function isExpired2(date2) {
          var now = new Date().getTime();
          return now - date2 > ms7days2;
        }
        function sendHostname2(appName, trackingId) {
          var url = "https://www.google-analytics.com/collect";
          var hostname = location.hostname;
          var hitType = "event";
          var eventCategory = "use";
          var applicationKeyForStorage = "TOAST UI " + appName + " for " + hostname + ": Statistics";
          var date2 = window.localStorage.getItem(applicationKeyForStorage);
          if (!isUndefined2(window.tui) && window.tui.usageStatistics === false) {
            return;
          }
          if (date2 && !isExpired2(date2)) {
            return;
          }
          window.localStorage.setItem(applicationKeyForStorage, new Date().getTime());
          setTimeout(function() {
            if (document.readyState === "interactive" || document.readyState === "complete") {
              imagePing2(url, {
                v: 1,
                t: hitType,
                tid: trackingId,
                cid: hostname,
                dp: hostname,
                dh: appName,
                el: appName,
                ec: eventCategory
              });
            }
          }, 1e3);
        }
        module2.exports = sendHostname2;
      },
      function(module2, exports2, __webpack_require__) {
        var forEachOwnProperties2 = __webpack_require__(23);
        function imagePing2(url, trackingInfo) {
          var trackingElement = document.createElement("img");
          var queryString = "";
          forEachOwnProperties2(trackingInfo, function(value, key) {
            queryString += "&" + key + "=" + value;
          });
          queryString = queryString.substring(1);
          trackingElement.src = url + "?" + queryString;
          trackingElement.style.display = "none";
          document.body.appendChild(trackingElement);
          document.body.removeChild(trackingElement);
          return trackingElement;
        }
        module2.exports = imagePing2;
      },
      function(module2, exports2, __webpack_require__) {
        var forEachArray2 = __webpack_require__(2);
        var defineClass = __webpack_require__(0);
        var DateLayer = __webpack_require__(50);
        var MonthLayer = __webpack_require__(52);
        var YearLayer = __webpack_require__(54);
        var constants = __webpack_require__(1);
        var TYPE_DATE = constants.TYPE_DATE;
        var TYPE_MONTH = constants.TYPE_MONTH;
        var TYPE_YEAR = constants.TYPE_YEAR;
        var Body = defineClass(
          {
            init: function(bodyContainer, options) {
              var language = options.language;
              var weekStartDay = options.weekStartDay;
              this._container = bodyContainer;
              this._dateLayer = new DateLayer(language, weekStartDay);
              this._monthLayer = new MonthLayer(language);
              this._yearLayer = new YearLayer(language);
              this._currentLayer = this._dateLayer;
            },
            _getLayer: function(type) {
              switch (type) {
                case TYPE_DATE:
                  return this._dateLayer;
                case TYPE_MONTH:
                  return this._monthLayer;
                case TYPE_YEAR:
                  return this._yearLayer;
                default:
                  return this._currentLayer;
              }
            },
            _eachLayer: function(fn2) {
              forEachArray2([this._dateLayer, this._monthLayer, this._yearLayer], fn2);
            },
            changeLanguage: function(language) {
              this._eachLayer(function(layer) {
                layer.changeLanguage(language);
              });
            },
            render: function(date2, type) {
              var nextLayer = this._getLayer(type);
              var prevLayer = this._currentLayer;
              prevLayer.remove();
              nextLayer.render(date2, this._container);
              this._currentLayer = nextLayer;
            },
            getDateElements: function() {
              return this._currentLayer.getDateElements();
            },
            destroy: function() {
              this._eachLayer(function(layer) {
                layer.remove();
              });
              this._container = this._currentLayer = this._dateLayer = this._monthLayer = this._yearLayer = null;
            }
          }
        );
        module2.exports = Body;
      },
      function(module2, exports2, __webpack_require__) {
        var defineClass = __webpack_require__(0);
        var dateUtil = __webpack_require__(5);
        var bodyTmpl = __webpack_require__(51);
        var LayerBase = __webpack_require__(20);
        var TYPE_DATE = __webpack_require__(1).TYPE_DATE;
        var WEEK_START_DAY_MAP = __webpack_require__(1).WEEK_START_DAY_MAP;
        var DATE_SELECTOR = ".tui-calendar-date";
        var DAYS_OF_WEEK = 7;
        var DateLayer = defineClass(
          LayerBase,
          {
            init: function(language, weekStartDay) {
              LayerBase.call(this, language);
              this.weekStartDay = WEEK_START_DAY_MAP[String(weekStartDay).toLowerCase()] || 0;
            },
            _type: TYPE_DATE,
            _makeContext: function(date2) {
              var daysShort = this._localeText.titles.D;
              var year, month, days, i2;
              date2 = date2 || new Date();
              year = date2.getFullYear();
              month = date2.getMonth() + 1;
              if (this.weekStartDay) {
                days = daysShort.slice();
                for (i2 = 0; i2 < this.weekStartDay; i2 += 1) {
                  days.push(days.shift());
                }
                daysShort = days;
              }
              return {
                Sun: daysShort[0],
                Mon: daysShort[1],
                Tue: daysShort[2],
                Wed: daysShort[3],
                Thu: daysShort[4],
                Fri: daysShort[5],
                Sat: daysShort[6],
                year,
                month,
                weeks: this._getWeeks(year, month)
              };
            },
            _getWeeks: function(year, month) {
              var weekNumber = 0;
              var weeksCount = 6;
              var weeks = [];
              var week, dates, i2;
              while (weekNumber < weeksCount) {
                dates = [];
                for (i2 = this.weekStartDay; i2 < DAYS_OF_WEEK + this.weekStartDay; i2 += 1) {
                  dates.push(dateUtil.getDateOfWeek(year, month, weekNumber, i2));
                }
                week = this._getWeek(year, month, dates);
                if (this.weekStartDay && !_isFirstWeek(weekNumber, week[0].dayInMonth)) {
                  weeks.push(this._getFirstWeek(year, month));
                  weeksCount -= 1;
                }
                weeks.push(week);
                weekNumber += 1;
              }
              return weeks;
            },
            _getWeek: function(currentYear, currentMonth, dates) {
              var firstDateOfCurrentMonth = new Date(currentYear, currentMonth - 1, 1);
              var lastDateOfCurrentMonth = new Date(currentYear, currentMonth, 0);
              var contexts = [];
              var i2 = 0;
              var length = dates.length;
              var date2, className2;
              for (; i2 < length; i2 += 1) {
                className2 = "tui-calendar-date";
                date2 = dates[i2];
                if (date2 < firstDateOfCurrentMonth) {
                  className2 += " tui-calendar-prev-month";
                }
                if (date2 > lastDateOfCurrentMonth) {
                  className2 += " tui-calendar-next-month";
                }
                if (date2.getDay() === 0) {
                  className2 += " tui-calendar-sun";
                } else if (date2.getDay() === 6) {
                  className2 += " tui-calendar-sat";
                }
                contexts.push({
                  dayInMonth: date2.getDate(),
                  className: className2,
                  timestamp: date2.getTime()
                });
              }
              return contexts;
            },
            render: function(date2, container) {
              var context = this._makeContext(date2);
              container.innerHTML = bodyTmpl(context);
              this._element = container.firstChild;
            },
            getDateElements: function() {
              return this._element.querySelectorAll(DATE_SELECTOR);
            },
            _getFirstWeek: function(year, month) {
              var firstWeekDates = [];
              var i2;
              for (i2 = this.weekStartDay; i2 < DAYS_OF_WEEK + this.weekStartDay; i2 += 1) {
                firstWeekDates.push(dateUtil.getDateOfWeek(year, month, -1, i2));
              }
              return this._getWeek(year, month, firstWeekDates);
            }
          }
        );
        function _isFirstWeek(weekIndex, dayInMonth) {
          return weekIndex || dayInMonth === 1 || dayInMonth > DAYS_OF_WEEK;
        }
        module2.exports = DateLayer;
      },
      function(module2, exports2, __webpack_require__) {
        var template = __webpack_require__(11);
        module2.exports = function(context) {
          var source = '<table class="tui-calendar-body-inner" cellspacing="0" cellpadding="0">  <caption><span>Dates</span></caption>  <thead class="tui-calendar-body-header">    <tr>      <th class="tui-sun" scope="col">{{Sun}}</th>      <th scope="col">{{Mon}}</th>      <th scope="col">{{Tue}}</th>      <th scope="col">{{Wed}}</th>      <th scope="col">{{Thu}}</th>      <th scope="col">{{Fri}}</th>      <th class="tui-sat" scope="col">{{Sat}}</th>    </tr>  </thead>  <tbody>    {{each weeks}}    <tr class="tui-calendar-week">      {{each @this}}      <td class="{{@this["className"]}}" data-timestamp="{{@this["timestamp"]}}">{{@this["dayInMonth"]}}</td>      {{/each}}    </tr>    {{/each}}  </tbody></table>';
          return template(source, context);
        };
      },
      function(module2, exports2, __webpack_require__) {
        var defineClass = __webpack_require__(0);
        var bodyTmpl = __webpack_require__(53);
        var LayerBase = __webpack_require__(20);
        var TYPE_MONTH = __webpack_require__(1).TYPE_MONTH;
        var dateUtil = __webpack_require__(5);
        var DATE_SELECTOR = ".tui-calendar-month";
        var MonthLayer = defineClass(
          LayerBase,
          {
            init: function(language) {
              LayerBase.call(this, language);
            },
            _type: TYPE_MONTH,
            _makeContext: function(date2) {
              var monthsShort = this._localeText.titles.MMM;
              return {
                year: date2.getFullYear(),
                Jan: monthsShort[0],
                Feb: monthsShort[1],
                Mar: monthsShort[2],
                Apr: monthsShort[3],
                May: monthsShort[4],
                Jun: monthsShort[5],
                Jul: monthsShort[6],
                Aug: monthsShort[7],
                Sep: monthsShort[8],
                Oct: monthsShort[9],
                Nov: monthsShort[10],
                Dec: monthsShort[11],
                getFirstDayTimestamp: dateUtil.getFirstDayTimestamp
              };
            },
            render: function(date2, container) {
              var context = this._makeContext(date2);
              container.innerHTML = bodyTmpl(context);
              this._element = container.firstChild;
            },
            getDateElements: function() {
              return this._element.querySelectorAll(DATE_SELECTOR);
            }
          }
        );
        module2.exports = MonthLayer;
      },
      function(module2, exports2, __webpack_require__) {
        var template = __webpack_require__(11);
        module2.exports = function(context) {
          var source = '<table class="tui-calendar-body-inner">  <caption><span>Months</span></caption>  <tbody>    <tr class="tui-calendar-month-group">      <td class="tui-calendar-month" data-timestamp={{getFirstDayTimestamp year 0}}>{{Jan}}</td>      <td class="tui-calendar-month" data-timestamp={{getFirstDayTimestamp year 1}}>{{Feb}}</td>      <td class="tui-calendar-month" data-timestamp={{getFirstDayTimestamp year 2}}>{{Mar}}</td>      <td class="tui-calendar-month" data-timestamp={{getFirstDayTimestamp year 3}}>{{Apr}}</td>    </tr>    <tr class="tui-calendar-month-group">      <td class="tui-calendar-month" data-timestamp={{getFirstDayTimestamp year 4}}>{{May}}</td>      <td class="tui-calendar-month" data-timestamp={{getFirstDayTimestamp year 5}}>{{Jun}}</td>      <td class="tui-calendar-month" data-timestamp={{getFirstDayTimestamp year 6}}>{{Jul}}</td>      <td class="tui-calendar-month" data-timestamp={{getFirstDayTimestamp year 7}}>{{Aug}}</td>    </tr>    <tr class="tui-calendar-month-group">      <td class="tui-calendar-month" data-timestamp={{getFirstDayTimestamp year 8}}>{{Sep}}</td>      <td class="tui-calendar-month" data-timestamp={{getFirstDayTimestamp year 9}}>{{Oct}}</td>      <td class="tui-calendar-month" data-timestamp={{getFirstDayTimestamp year 10}}>{{Nov}}</td>      <td class="tui-calendar-month" data-timestamp={{getFirstDayTimestamp year 11}}>{{Dec}}</td>    </tr>  </tbody></table>';
          return template(source, context);
        };
      },
      function(module2, exports2, __webpack_require__) {
        var defineClass = __webpack_require__(0);
        var bodyTmpl = __webpack_require__(55);
        var LayerBase = __webpack_require__(20);
        var TYPE_YEAR = __webpack_require__(1).TYPE_YEAR;
        var dateUtil = __webpack_require__(5);
        var DATE_SELECTOR = ".tui-calendar-year";
        var YearLayer = defineClass(
          LayerBase,
          {
            init: function(language) {
              LayerBase.call(this, language);
            },
            _type: TYPE_YEAR,
            _makeContext: function(date2) {
              var year = date2.getFullYear();
              return {
                yearGroups: [
                  dateUtil.getRangeArr(year - 4, year - 2),
                  dateUtil.getRangeArr(year - 1, year + 1),
                  dateUtil.getRangeArr(year + 2, year + 4)
                ],
                getFirstDayTimestamp: dateUtil.getFirstDayTimestamp
              };
            },
            render: function(date2, container) {
              var context = this._makeContext(date2);
              container.innerHTML = bodyTmpl(context);
              this._element = container.firstChild;
            },
            getDateElements: function() {
              return this._element.querySelectorAll(DATE_SELECTOR);
            }
          }
        );
        module2.exports = YearLayer;
      },
      function(module2, exports2, __webpack_require__) {
        var template = __webpack_require__(11);
        module2.exports = function(context) {
          var source = '<table class="tui-calendar-body-inner">  <caption><span>Years</span></caption>  <tbody>    {{each yearGroups}}    <tr class="tui-calendar-year-group">      {{each @this}}      <td class="tui-calendar-year" data-timestamp={{getFirstDayTimestamp @this 0}}>        {{@this}}      </td>      {{/each}}    </tr>    {{/each}}  </tbody></table>';
          return template(source, context);
        };
      },
      function(module2, exports2, __webpack_require__) {
        var forEachArray2 = __webpack_require__(2);
        var defineClass = __webpack_require__(0);
        var isNumber2 = __webpack_require__(15);
        var Range = __webpack_require__(57);
        var util = __webpack_require__(4);
        var RangeModel = defineClass(
          {
            init: function(ranges) {
              ranges = ranges || [];
              this._ranges = [];
              forEachArray2(
                ranges,
                function(range2) {
                  this.add(range2[0], range2[1]);
                },
                this
              );
            },
            contains: function(start, end) {
              var i2 = 0;
              var length = this._ranges.length;
              var range2;
              for (; i2 < length; i2 += 1) {
                range2 = this._ranges[i2];
                if (range2.contains(start, end)) {
                  return true;
                }
              }
              return false;
            },
            hasOverlap: function(start, end) {
              var i2 = 0;
              var length = this._ranges.length;
              var range2;
              for (; i2 < length; i2 += 1) {
                range2 = this._ranges[i2];
                if (range2.isOverlapped(start, end)) {
                  return true;
                }
              }
              return false;
            },
            add: function(start, end) {
              var overlapped = false;
              var i2 = 0;
              var len = this._ranges.length;
              var range2;
              for (; i2 < len; i2 += 1) {
                range2 = this._ranges[i2];
                overlapped = range2.isOverlapped(start, end);
                if (overlapped) {
                  range2.merge(start, end);
                  break;
                }
                if (start < range2.start) {
                  break;
                }
              }
              if (!overlapped) {
                this._ranges.splice(i2, 0, new Range(start, end));
              }
            },
            getMinimumValue: function() {
              return this._ranges[0].start;
            },
            getMaximumValue: function() {
              var length = this._ranges.length;
              return this._ranges[length - 1].end;
            },
            exclude: function(start, end) {
              if (!isNumber2(end)) {
                end = start;
              }
              forEachArray2(
                this._ranges,
                function(range2) {
                  var rangeEnd;
                  if (range2.isOverlapped(start, end)) {
                    rangeEnd = range2.end;
                    range2.exclude(start, end);
                    if (end + 1 <= rangeEnd) {
                      this.add(end + 1, rangeEnd);
                    }
                  }
                },
                this
              );
              this._ranges = util.filter(this._ranges, function(range2) {
                return !range2.isEmpty();
              });
            },
            findOverlappedRange: function(start, end) {
              var i2 = 0;
              var len = this._ranges.length;
              var range2;
              for (; i2 < len; i2 += 1) {
                range2 = this._ranges[i2];
                if (range2.isOverlapped(start, end)) {
                  return [range2.start, range2.end];
                }
              }
              return null;
            }
          }
        );
        module2.exports = RangeModel;
      },
      function(module2, exports2, __webpack_require__) {
        var defineClass = __webpack_require__(0);
        var isNumber2 = __webpack_require__(15);
        var Range = defineClass(
          {
            init: function(start, end) {
              this.setRange(start, end);
            },
            setRange: function(start, end) {
              if (!isNumber2(end)) {
                end = start;
              }
              this.start = Math.min(start, end);
              this.end = Math.max(start, end);
            },
            merge: function(start, end) {
              if (!isNumber2(start) || !isNumber2(end) || !this.isOverlapped(start, end)) {
                return;
              }
              this.start = Math.min(start, this.start);
              this.end = Math.max(end, this.end);
            },
            isEmpty: function() {
              return !isNumber2(this.start) || !isNumber2(this.end);
            },
            setEmpty: function() {
              this.start = this.end = null;
            },
            contains: function(start, end) {
              if (!isNumber2(end)) {
                end = start;
              }
              return this.start <= start && end <= this.end;
            },
            isOverlapped: function(start, end) {
              if (!isNumber2(end)) {
                end = start;
              }
              return this.start <= end && this.end >= start;
            },
            exclude: function(start, end) {
              if (start <= this.start && end >= this.end) {
                this.setEmpty();
              } else if (this.contains(start)) {
                this.setRange(this.start, start - 1);
              } else if (this.contains(end)) {
                this.setRange(end + 1, this.end);
              }
            }
          }
        );
        module2.exports = Range;
      },
      function(module2, exports2, __webpack_require__) {
        var template = __webpack_require__(11);
        module2.exports = function(context) {
          var source = '<div class="tui-datepicker">  {{if timePicker}}    {{if isTab}}      <div class="tui-datepicker-selector">        <button type="button" class="tui-datepicker-selector-button tui-is-checked" aria-label="selected">          <span class="tui-ico-date"></span>{{localeText["date"]}}        </button>        <button type="button" class="tui-datepicker-selector-button">          <span class="tui-ico-time"></span>{{localeText["time"]}}        </button>      </div>      <div class="tui-datepicker-body">        <div class="tui-calendar-container"></div>        <div class="tui-timepicker-container"></div>      </div>    {{else}}      <div class="tui-datepicker-body">        <div class="tui-calendar-container"></div>      </div>      <div class="tui-datepicker-footer">        <div class="tui-timepicker-container"></div>      </div>    {{/if}}  {{else}}    <div class="tui-datepicker-body">      <div class="tui-calendar-container"></div>    </div>  {{/if}}</div>';
          return template(source, context);
        };
      },
      function(module2, exports2, __webpack_require__) {
        var defineClass = __webpack_require__(0);
        var CustomEvents2 = __webpack_require__(8);
        var on2 = __webpack_require__(31);
        var off = __webpack_require__(33);
        var DateTimeFormatter = __webpack_require__(30);
        var mouseTouchEvent = __webpack_require__(19);
        var util = __webpack_require__(4);
        var DEFAULT_FORMAT = "yyyy-MM-dd";
        var DatePickerInput = defineClass(
          {
            init: function(inputElement, option) {
              option.format = option.format || DEFAULT_FORMAT;
              this._input = util.getElement(inputElement);
              this._id = option.id;
              this._titles = option.localeText.titles;
              this._formatter = new DateTimeFormatter(option.format, this._titles);
              this._setEvents();
            },
            changeLocaleTitles: function(titles) {
              this._titles = titles;
            },
            _setEvents: function() {
              if (this._input) {
                on2(this._input, "change", this._onChangeHandler, this);
                mouseTouchEvent.on(this._input, "click", this._onClickHandler, this);
              }
            },
            _removeEvents: function() {
              this.off();
              if (this._input) {
                off(this._input, "change", this._onChangeHandler);
                mouseTouchEvent.off(this._input, "click", this._onClickHandler);
              }
            },
            _onChangeHandler: function() {
              this.fire("change");
            },
            _onClickHandler: function() {
              this.fire("click");
            },
            is: function(el) {
              return this._input === el;
            },
            enable: function() {
              if (this._input) {
                this._input.removeAttribute("disabled");
              }
            },
            disable: function() {
              if (this._input) {
                this._input.setAttribute("disabled", true);
              }
            },
            getFormat: function() {
              return this._formatter.getRawString();
            },
            setFormat: function(format) {
              if (!format) {
                return;
              }
              this._formatter = new DateTimeFormatter(format, this._titles);
            },
            clearText: function() {
              if (this._input) {
                this._input.value = "";
              }
            },
            setDate: function(date2) {
              if (this._input) {
                this._input.value = this._formatter.format(date2);
              }
            },
            getDate: function() {
              var value = "";
              if (this._input) {
                value = this._input.value;
              }
              return this._formatter.parse(value);
            },
            destroy: function() {
              this._removeEvents();
              this._input = this._id = this._formatter = null;
            }
          }
        );
        CustomEvents2.mixin(DatePickerInput);
        module2.exports = DatePickerInput;
      },
      function(module2, exports2, __webpack_require__) {
        var forEachArray2 = __webpack_require__(2);
        var defineClass = __webpack_require__(0);
        var CustomEvents2 = __webpack_require__(8);
        var addClass = __webpack_require__(16);
        var getData = __webpack_require__(26);
        var removeClass = __webpack_require__(18);
        var extend2 = __webpack_require__(7);
        var DatePicker2 = __webpack_require__(21);
        var dateUtil = __webpack_require__(5);
        var constants = __webpack_require__(1);
        var util = __webpack_require__(4);
        var CLASS_NAME_RANGE_PICKER = "tui-rangepicker";
        var CLASS_NAME_SELECTED = constants.CLASS_NAME_SELECTED;
        var CLASS_NAME_SELECTED_RANGE = "tui-is-selected-range";
        var DateRangePicker = defineClass(
          {
            init: function(options) {
              var startpickerOpt, endpickerOpt;
              options = options || {};
              startpickerOpt = options.startpicker;
              endpickerOpt = options.endpicker;
              if (!startpickerOpt) {
                throw new Error('The "startpicker" option is required.');
              }
              if (!endpickerOpt) {
                throw new Error('The "endpicker" option is required.');
              }
              this._startpicker = null;
              this._endpicker = null;
              this._isRangeSet = false;
              this._preEndPickerDate = new Date().getDate();
              this._initializePickers(options);
              this._syncRangesToEndpicker();
            },
            _initializePickers: function(options) {
              var startpickerContainer = util.getElement(options.startpicker.container);
              var endpickerContainer = util.getElement(options.endpicker.container);
              var startInput = util.getElement(options.startpicker.input);
              var endInput = util.getElement(options.endpicker.input);
              var startpickerOpt = extend2({}, options, {
                input: {
                  element: startInput,
                  format: options.format
                },
                date: options.startpicker.date,
                weekStartDay: options.startpicker.weekStartDay
              });
              var endpickerOpt = extend2({}, options, {
                input: {
                  element: endInput,
                  format: options.format
                },
                date: options.endpicker.date,
                weekStartDay: options.endpicker.weekStartDay
              });
              this._startpicker = new DatePicker2(startpickerContainer, startpickerOpt);
              this._startpicker.addCssClass(CLASS_NAME_RANGE_PICKER);
              this._startpicker.on("change", this._onChangeStartpicker, this);
              this._startpicker.on("draw", this._onDrawPicker, this);
              this._endpicker = new DatePicker2(endpickerContainer, endpickerOpt);
              this._endpicker.addCssClass(CLASS_NAME_RANGE_PICKER);
              this._endpicker.on("change", this._onChangeEndpicker, this);
              this._endpicker.on("draw", this._onDrawPicker, this);
            },
            _onDrawPicker: function(eventData) {
              var calendarType = eventData.type;
              var startDate = this._startpicker.getDate();
              var endDate = this._endpicker.getDate();
              if (!startDate) {
                return;
              }
              if (!endDate) {
                endDate = new Date(NaN);
              }
              forEachArray2(
                eventData.dateElements,
                function(el) {
                  var elDate = new Date(Number(getData(el, "timestamp")));
                  var isInRange = dateUtil.inRange(startDate, endDate, elDate, calendarType);
                  var isSelected = dateUtil.isSame(startDate, elDate, calendarType) || dateUtil.isSame(endDate, elDate, calendarType);
                  this._setRangeClass(el, isInRange);
                  this._setSelectedClass(el, isSelected);
                },
                this
              );
            },
            _setRangeClass: function(el, isInRange) {
              if (isInRange) {
                addClass(el, CLASS_NAME_SELECTED_RANGE);
              } else {
                removeClass(el, CLASS_NAME_SELECTED_RANGE);
              }
            },
            _setSelectedClass: function(el, isSelected) {
              if (isSelected) {
                addClass(el, CLASS_NAME_SELECTED);
              } else {
                removeClass(el, CLASS_NAME_SELECTED);
              }
            },
            _syncRangesToEndpicker: function() {
              var startDate = this._startpicker.getDate();
              var overlappedRange;
              if (startDate) {
                overlappedRange = this._startpicker.findOverlappedRange(
                  dateUtil.cloneWithStartOf(startDate).getTime(),
                  dateUtil.cloneWithEndOf(startDate).getTime()
                );
                this._endpicker.enable();
                this._endpicker.setRanges([[startDate.getTime(), overlappedRange[1].getTime()]]);
                this._setTimeRangeOnEndPicker();
              } else {
                this._endpicker.setNull();
                this._endpicker.disable();
              }
            },
            _onChangeStartpicker: function() {
              this._syncRangesToEndpicker();
              this.fire("change:start");
            },
            _onChangeEndpicker: function() {
              var date2;
              var endPickerDate = this._endpicker.getDate();
              if (endPickerDate) {
                date2 = endPickerDate.getDate();
                if (this._preEndPickerDate !== date2) {
                  this._setTimeRangeOnEndPicker();
                }
                this._preEndPickerDate = date2;
              } else {
                this._preEndPickerDate = null;
              }
              this.fire("change:end");
            },
            _isStartAndEndDateSame: function() {
              return !!this._endpicker.getDate() && !!this._startpicker.getDate() && dateUtil.compare(
                this._endpicker.getDate(),
                this._startpicker.getDate(),
                constants.TYPE_DATE
              ) === 0;
            },
            _setTimeRangeOnEndPicker: function() {
              var pickerDate, timeRange, timeRangeToSet;
              var endTimePicker = this._endpicker._timePicker;
              if (!endTimePicker) {
                return;
              }
              pickerDate = this._endpicker.getDate() || this._startpicker.getDate();
              timeRange = this._getTimeRangeFromStartPicker();
              timeRangeToSet = pickerDate && timeRange[pickerDate.getDate()];
              if (this._isStartAndEndDateSame() && timeRangeToSet) {
                endTimePicker.setRange(timeRangeToSet);
                this._isRangeSet = true;
              } else if (this._isRangeSet) {
                endTimePicker.setRange({ hour: 0, minute: 0 });
                endTimePicker.resetMinuteRange();
                this._isRangeSet = false;
              }
            },
            _getTimeRangeFromStartPicker: function() {
              var startDate = this._startpicker.getDate();
              var timeRange = {};
              timeRange[startDate.getDate()] = {
                hour: startDate.getHours(),
                minute: startDate.getMinutes()
              };
              return timeRange;
            },
            getStartpicker: function() {
              return this._startpicker;
            },
            getEndpicker: function() {
              return this._endpicker;
            },
            setStartDate: function(date2) {
              this._startpicker.setDate(date2);
            },
            getStartDate: function() {
              return this._startpicker.getDate();
            },
            getEndDate: function() {
              return this._endpicker.getDate();
            },
            setEndDate: function(date2) {
              this._endpicker.setDate(date2);
            },
            setRanges: function(ranges) {
              this._startpicker.setRanges(ranges);
              this._syncRangesToEndpicker();
            },
            addRange: function(start, end) {
              this._startpicker.addRange(start, end);
              this._syncRangesToEndpicker();
            },
            removeRange: function(start, end, type) {
              this._startpicker.removeRange(start, end, type);
              this._syncRangesToEndpicker();
            },
            changeLanguage: function(language) {
              this._startpicker.changeLanguage(language);
              this._endpicker.changeLanguage(language);
            },
            destroy: function() {
              this.off();
              this._startpicker.destroy();
              this._endpicker.destroy();
              this._startpicker = this._endpicker = null;
            }
          }
        );
        CustomEvents2.mixin(DateRangePicker);
        module2.exports = DateRangePicker;
      },
      function(module2, exports2, __webpack_require__) {
      }
    ]);
  });
})(tuiDatePicker);
var DatePicker = /* @__PURE__ */ getDefaultExportFromCjs$1(tuiDatePicker.exports);
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a2, b2) => {
  for (var prop in b2 || (b2 = {}))
    if (__hasOwnProp.call(b2, prop))
      __defNormalProp(a2, prop, b2[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b2)) {
      if (__propIsEnum.call(b2, prop))
        __defNormalProp(a2, prop, b2[prop]);
    }
  return a2;
};
var __spreadProps = (a2, b2) => __defProps(a2, __getOwnPropDescs(b2));
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var n$2, l$3, u$3, t$2, r$2, o$3, f$3, e$1, c$3 = {}, s$3 = [], a$3 = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function h$3(n2, l2) {
  for (var u2 in l2)
    n2[u2] = l2[u2];
  return n2;
}
function v$3(n2) {
  var l2 = n2.parentNode;
  l2 && l2.removeChild(n2);
}
function y$3(l2, u2, i2) {
  var t2, r2, o2, f2 = {};
  for (o2 in u2)
    "key" == o2 ? t2 = u2[o2] : "ref" == o2 ? r2 = u2[o2] : f2[o2] = u2[o2];
  if (arguments.length > 2 && (f2.children = arguments.length > 3 ? n$2.call(arguments, 2) : i2), "function" == typeof l2 && null != l2.defaultProps)
    for (o2 in l2.defaultProps)
      void 0 === f2[o2] && (f2[o2] = l2.defaultProps[o2]);
  return p$3(l2, f2, t2, r2, null);
}
function p$3(n2, i2, t2, r2, o2) {
  var f2 = { type: n2, props: i2, key: t2, ref: r2, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: null == o2 ? ++u$3 : o2 };
  return null == o2 && null != l$3.vnode && l$3.vnode(f2), f2;
}
function _$3(n2) {
  return n2.children;
}
function k$4(n2, l2) {
  this.props = n2, this.context = l2;
}
function b$3(n2, l2) {
  if (null == l2)
    return n2.__ ? b$3(n2.__, n2.__.__k.indexOf(n2) + 1) : null;
  for (var u2; l2 < n2.__k.length; l2++)
    if (null != (u2 = n2.__k[l2]) && null != u2.__e)
      return u2.__e;
  return "function" == typeof n2.type ? b$3(n2) : null;
}
function g$4(n2) {
  var l2, u2;
  if (null != (n2 = n2.__) && null != n2.__c) {
    for (n2.__e = n2.__c.base = null, l2 = 0; l2 < n2.__k.length; l2++)
      if (null != (u2 = n2.__k[l2]) && null != u2.__e) {
        n2.__e = n2.__c.base = u2.__e;
        break;
      }
    return g$4(n2);
  }
}
function m$2(n2) {
  (!n2.__d && (n2.__d = true) && t$2.push(n2) && !w$4.__r++ || r$2 !== l$3.debounceRendering) && ((r$2 = l$3.debounceRendering) || o$3)(w$4);
}
function w$4() {
  var n2, l2, u2, i2, r2, o2, e2, c2;
  for (t$2.sort(f$3); n2 = t$2.shift(); )
    n2.__d && (l2 = t$2.length, i2 = void 0, r2 = void 0, e2 = (o2 = (u2 = n2).__v).__e, (c2 = u2.__P) && (i2 = [], (r2 = h$3({}, o2)).__v = o2.__v + 1, L$2(c2, o2, r2, u2.__n, void 0 !== c2.ownerSVGElement, null != o2.__h ? [e2] : null, i2, null == e2 ? b$3(o2) : e2, o2.__h), M$1(i2, o2), o2.__e != e2 && g$4(o2)), t$2.length > l2 && t$2.sort(f$3));
  w$4.__r = 0;
}
function x$3(n2, l2, u2, i2, t2, r2, o2, f2, e2, a2) {
  var h2, v2, y2, d2, k2, g2, m2, w2 = i2 && i2.__k || s$3, x2 = w2.length;
  for (u2.__k = [], h2 = 0; h2 < l2.length; h2++)
    if (null != (d2 = u2.__k[h2] = null == (d2 = l2[h2]) || "boolean" == typeof d2 || "function" == typeof d2 ? null : "string" == typeof d2 || "number" == typeof d2 || "bigint" == typeof d2 ? p$3(null, d2, null, null, d2) : Array.isArray(d2) ? p$3(_$3, { children: d2 }, null, null, null) : d2.__b > 0 ? p$3(d2.type, d2.props, d2.key, d2.ref ? d2.ref : null, d2.__v) : d2)) {
      if (d2.__ = u2, d2.__b = u2.__b + 1, null === (y2 = w2[h2]) || y2 && d2.key == y2.key && d2.type === y2.type)
        w2[h2] = void 0;
      else
        for (v2 = 0; v2 < x2; v2++) {
          if ((y2 = w2[v2]) && d2.key == y2.key && d2.type === y2.type) {
            w2[v2] = void 0;
            break;
          }
          y2 = null;
        }
      L$2(n2, d2, y2 = y2 || c$3, t2, r2, o2, f2, e2, a2), k2 = d2.__e, (v2 = d2.ref) && y2.ref != v2 && (m2 || (m2 = []), y2.ref && m2.push(y2.ref, null, d2), m2.push(v2, d2.__c || k2, d2)), null != k2 ? (null == g2 && (g2 = k2), "function" == typeof d2.type && d2.__k === y2.__k ? d2.__d = e2 = A$2(d2, e2, n2) : e2 = C$2(n2, d2, y2, w2, k2, e2), "function" == typeof u2.type && (u2.__d = e2)) : e2 && y2.__e == e2 && e2.parentNode != n2 && (e2 = b$3(y2));
    }
  for (u2.__e = g2, h2 = x2; h2--; )
    null != w2[h2] && ("function" == typeof u2.type && null != w2[h2].__e && w2[h2].__e == u2.__d && (u2.__d = $$2(i2).nextSibling), S$2(w2[h2], w2[h2]));
  if (m2)
    for (h2 = 0; h2 < m2.length; h2++)
      O$2(m2[h2], m2[++h2], m2[++h2]);
}
function A$2(n2, l2, u2) {
  for (var i2, t2 = n2.__k, r2 = 0; t2 && r2 < t2.length; r2++)
    (i2 = t2[r2]) && (i2.__ = n2, l2 = "function" == typeof i2.type ? A$2(i2, l2, u2) : C$2(u2, i2, i2, t2, i2.__e, l2));
  return l2;
}
function P$2(n2, l2) {
  return l2 = l2 || [], null == n2 || "boolean" == typeof n2 || (Array.isArray(n2) ? n2.some(function(n3) {
    P$2(n3, l2);
  }) : l2.push(n2)), l2;
}
function C$2(n2, l2, u2, i2, t2, r2) {
  var o2, f2, e2;
  if (void 0 !== l2.__d)
    o2 = l2.__d, l2.__d = void 0;
  else if (null == u2 || t2 != r2 || null == t2.parentNode)
    n:
      if (null == r2 || r2.parentNode !== n2)
        n2.appendChild(t2), o2 = null;
      else {
        for (f2 = r2, e2 = 0; (f2 = f2.nextSibling) && e2 < i2.length; e2 += 1)
          if (f2 == t2)
            break n;
        n2.insertBefore(t2, r2), o2 = r2;
      }
  return void 0 !== o2 ? o2 : t2.nextSibling;
}
function $$2(n2) {
  var l2, u2, i2;
  if (null == n2.type || "string" == typeof n2.type)
    return n2.__e;
  if (n2.__k) {
    for (l2 = n2.__k.length - 1; l2 >= 0; l2--)
      if ((u2 = n2.__k[l2]) && (i2 = $$2(u2)))
        return i2;
  }
  return null;
}
function H$2(n2, l2, u2, i2, t2) {
  var r2;
  for (r2 in u2)
    "children" === r2 || "key" === r2 || r2 in l2 || T$2(n2, r2, null, u2[r2], i2);
  for (r2 in l2)
    t2 && "function" != typeof l2[r2] || "children" === r2 || "key" === r2 || "value" === r2 || "checked" === r2 || u2[r2] === l2[r2] || T$2(n2, r2, l2[r2], u2[r2], i2);
}
function I$2(n2, l2, u2) {
  "-" === l2[0] ? n2.setProperty(l2, null == u2 ? "" : u2) : n2[l2] = null == u2 ? "" : "number" != typeof u2 || a$3.test(l2) ? u2 : u2 + "px";
}
function T$2(n2, l2, u2, i2, t2) {
  var r2;
  n:
    if ("style" === l2)
      if ("string" == typeof u2)
        n2.style.cssText = u2;
      else {
        if ("string" == typeof i2 && (n2.style.cssText = i2 = ""), i2)
          for (l2 in i2)
            u2 && l2 in u2 || I$2(n2.style, l2, "");
        if (u2)
          for (l2 in u2)
            i2 && u2[l2] === i2[l2] || I$2(n2.style, l2, u2[l2]);
      }
    else if ("o" === l2[0] && "n" === l2[1])
      r2 = l2 !== (l2 = l2.replace(/Capture$/, "")), l2 = l2.toLowerCase() in n2 ? l2.toLowerCase().slice(2) : l2.slice(2), n2.l || (n2.l = {}), n2.l[l2 + r2] = u2, u2 ? i2 || n2.addEventListener(l2, r2 ? z$3 : j$4, r2) : n2.removeEventListener(l2, r2 ? z$3 : j$4, r2);
    else if ("dangerouslySetInnerHTML" !== l2) {
      if (t2)
        l2 = l2.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
      else if ("width" !== l2 && "height" !== l2 && "href" !== l2 && "list" !== l2 && "form" !== l2 && "tabIndex" !== l2 && "download" !== l2 && l2 in n2)
        try {
          n2[l2] = null == u2 ? "" : u2;
          break n;
        } catch (n3) {
        }
      "function" == typeof u2 || (null == u2 || false === u2 && "-" !== l2[4] ? n2.removeAttribute(l2) : n2.setAttribute(l2, u2));
    }
}
function j$4(n2) {
  return this.l[n2.type + false](l$3.event ? l$3.event(n2) : n2);
}
function z$3(n2) {
  return this.l[n2.type + true](l$3.event ? l$3.event(n2) : n2);
}
function L$2(n2, u2, i2, t2, r2, o2, f2, e2, c2) {
  var s2, a2, v2, y2, p2, d2, b2, g2, m2, w2, A2, P2, C2, $2, H2, I2 = u2.type;
  if (void 0 !== u2.constructor)
    return null;
  null != i2.__h && (c2 = i2.__h, e2 = u2.__e = i2.__e, u2.__h = null, o2 = [e2]), (s2 = l$3.__b) && s2(u2);
  try {
    n:
      if ("function" == typeof I2) {
        if (g2 = u2.props, m2 = (s2 = I2.contextType) && t2[s2.__c], w2 = s2 ? m2 ? m2.props.value : s2.__ : t2, i2.__c ? b2 = (a2 = u2.__c = i2.__c).__ = a2.__E : ("prototype" in I2 && I2.prototype.render ? u2.__c = a2 = new I2(g2, w2) : (u2.__c = a2 = new k$4(g2, w2), a2.constructor = I2, a2.render = q$3), m2 && m2.sub(a2), a2.props = g2, a2.state || (a2.state = {}), a2.context = w2, a2.__n = t2, v2 = a2.__d = true, a2.__h = [], a2._sb = []), null == a2.__s && (a2.__s = a2.state), null != I2.getDerivedStateFromProps && (a2.__s == a2.state && (a2.__s = h$3({}, a2.__s)), h$3(a2.__s, I2.getDerivedStateFromProps(g2, a2.__s))), y2 = a2.props, p2 = a2.state, a2.__v = u2, v2)
          null == I2.getDerivedStateFromProps && null != a2.componentWillMount && a2.componentWillMount(), null != a2.componentDidMount && a2.__h.push(a2.componentDidMount);
        else {
          if (null == I2.getDerivedStateFromProps && g2 !== y2 && null != a2.componentWillReceiveProps && a2.componentWillReceiveProps(g2, w2), !a2.__e && null != a2.shouldComponentUpdate && false === a2.shouldComponentUpdate(g2, a2.__s, w2) || u2.__v === i2.__v) {
            for (u2.__v !== i2.__v && (a2.props = g2, a2.state = a2.__s, a2.__d = false), a2.__e = false, u2.__e = i2.__e, u2.__k = i2.__k, u2.__k.forEach(function(n3) {
              n3 && (n3.__ = u2);
            }), A2 = 0; A2 < a2._sb.length; A2++)
              a2.__h.push(a2._sb[A2]);
            a2._sb = [], a2.__h.length && f2.push(a2);
            break n;
          }
          null != a2.componentWillUpdate && a2.componentWillUpdate(g2, a2.__s, w2), null != a2.componentDidUpdate && a2.__h.push(function() {
            a2.componentDidUpdate(y2, p2, d2);
          });
        }
        if (a2.context = w2, a2.props = g2, a2.__P = n2, P2 = l$3.__r, C2 = 0, "prototype" in I2 && I2.prototype.render) {
          for (a2.state = a2.__s, a2.__d = false, P2 && P2(u2), s2 = a2.render(a2.props, a2.state, a2.context), $2 = 0; $2 < a2._sb.length; $2++)
            a2.__h.push(a2._sb[$2]);
          a2._sb = [];
        } else
          do {
            a2.__d = false, P2 && P2(u2), s2 = a2.render(a2.props, a2.state, a2.context), a2.state = a2.__s;
          } while (a2.__d && ++C2 < 25);
        a2.state = a2.__s, null != a2.getChildContext && (t2 = h$3(h$3({}, t2), a2.getChildContext())), v2 || null == a2.getSnapshotBeforeUpdate || (d2 = a2.getSnapshotBeforeUpdate(y2, p2)), H2 = null != s2 && s2.type === _$3 && null == s2.key ? s2.props.children : s2, x$3(n2, Array.isArray(H2) ? H2 : [H2], u2, i2, t2, r2, o2, f2, e2, c2), a2.base = u2.__e, u2.__h = null, a2.__h.length && f2.push(a2), b2 && (a2.__E = a2.__ = null), a2.__e = false;
      } else
        null == o2 && u2.__v === i2.__v ? (u2.__k = i2.__k, u2.__e = i2.__e) : u2.__e = N$2(i2.__e, u2, i2, t2, r2, o2, f2, c2);
    (s2 = l$3.diffed) && s2(u2);
  } catch (n3) {
    u2.__v = null, (c2 || null != o2) && (u2.__e = e2, u2.__h = !!c2, o2[o2.indexOf(e2)] = null), l$3.__e(n3, u2, i2);
  }
}
function M$1(n2, u2) {
  l$3.__c && l$3.__c(u2, n2), n2.some(function(u3) {
    try {
      n2 = u3.__h, u3.__h = [], n2.some(function(n3) {
        n3.call(u3);
      });
    } catch (n3) {
      l$3.__e(n3, u3.__v);
    }
  });
}
function N$2(l2, u2, i2, t2, r2, o2, f2, e2) {
  var s2, a2, h2, y2 = i2.props, p2 = u2.props, d2 = u2.type, _2 = 0;
  if ("svg" === d2 && (r2 = true), null != o2) {
    for (; _2 < o2.length; _2++)
      if ((s2 = o2[_2]) && "setAttribute" in s2 == !!d2 && (d2 ? s2.localName === d2 : 3 === s2.nodeType)) {
        l2 = s2, o2[_2] = null;
        break;
      }
  }
  if (null == l2) {
    if (null === d2)
      return document.createTextNode(p2);
    l2 = r2 ? document.createElementNS("http://www.w3.org/2000/svg", d2) : document.createElement(d2, p2.is && p2), o2 = null, e2 = false;
  }
  if (null === d2)
    y2 === p2 || e2 && l2.data === p2 || (l2.data = p2);
  else {
    if (o2 = o2 && n$2.call(l2.childNodes), a2 = (y2 = i2.props || c$3).dangerouslySetInnerHTML, h2 = p2.dangerouslySetInnerHTML, !e2) {
      if (null != o2)
        for (y2 = {}, _2 = 0; _2 < l2.attributes.length; _2++)
          y2[l2.attributes[_2].name] = l2.attributes[_2].value;
      (h2 || a2) && (h2 && (a2 && h2.__html == a2.__html || h2.__html === l2.innerHTML) || (l2.innerHTML = h2 && h2.__html || ""));
    }
    if (H$2(l2, p2, y2, r2, e2), h2)
      u2.__k = [];
    else if (_2 = u2.props.children, x$3(l2, Array.isArray(_2) ? _2 : [_2], u2, i2, t2, r2 && "foreignObject" !== d2, o2, f2, o2 ? o2[0] : i2.__k && b$3(i2, 0), e2), null != o2)
      for (_2 = o2.length; _2--; )
        null != o2[_2] && v$3(o2[_2]);
    e2 || ("value" in p2 && void 0 !== (_2 = p2.value) && (_2 !== l2.value || "progress" === d2 && !_2 || "option" === d2 && _2 !== y2.value) && T$2(l2, "value", _2, y2.value, false), "checked" in p2 && void 0 !== (_2 = p2.checked) && _2 !== l2.checked && T$2(l2, "checked", _2, y2.checked, false));
  }
  return l2;
}
function O$2(n2, u2, i2) {
  try {
    "function" == typeof n2 ? n2(u2) : n2.current = u2;
  } catch (n3) {
    l$3.__e(n3, i2);
  }
}
function S$2(n2, u2, i2) {
  var t2, r2;
  if (l$3.unmount && l$3.unmount(n2), (t2 = n2.ref) && (t2.current && t2.current !== n2.__e || O$2(t2, null, u2)), null != (t2 = n2.__c)) {
    if (t2.componentWillUnmount)
      try {
        t2.componentWillUnmount();
      } catch (n3) {
        l$3.__e(n3, u2);
      }
    t2.base = t2.__P = null, n2.__c = void 0;
  }
  if (t2 = n2.__k)
    for (r2 = 0; r2 < t2.length; r2++)
      t2[r2] && S$2(t2[r2], u2, i2 || "function" != typeof n2.type);
  i2 || null == n2.__e || v$3(n2.__e), n2.__ = n2.__e = n2.__d = void 0;
}
function q$3(n2, l2, u2) {
  return this.constructor(n2, u2);
}
function B$3(u2, i2, t2) {
  var r2, o2, f2;
  l$3.__ && l$3.__(u2, i2), o2 = (r2 = "function" == typeof t2) ? null : t2 && t2.__k || i2.__k, f2 = [], L$2(i2, u2 = (!r2 && t2 || i2).__k = y$3(_$3, null, [u2]), o2 || c$3, c$3, void 0 !== i2.ownerSVGElement, !r2 && t2 ? [t2] : o2 ? null : i2.firstChild ? n$2.call(i2.childNodes) : null, f2, !r2 && t2 ? t2 : o2 ? o2.__e : i2.firstChild, r2), M$1(f2, u2);
}
function E$1(l2, u2, i2) {
  var t2, r2, o2, f2 = h$3({}, l2.props);
  for (o2 in u2)
    "key" == o2 ? t2 = u2[o2] : "ref" == o2 ? r2 = u2[o2] : f2[o2] = u2[o2];
  return arguments.length > 2 && (f2.children = arguments.length > 3 ? n$2.call(arguments, 2) : i2), p$3(l2.type, f2, t2 || l2.key, r2 || l2.ref, null);
}
function F$3(n2, l2) {
  var u2 = { __c: l2 = "__cC" + e$1++, __: n2, Consumer: function(n3, l3) {
    return n3.children(l3);
  }, Provider: function(n3) {
    var u3, i2;
    return this.getChildContext || (u3 = [], (i2 = {})[l2] = this, this.getChildContext = function() {
      return i2;
    }, this.shouldComponentUpdate = function(n4) {
      this.props.value !== n4.value && u3.some(function(n5) {
        n5.__e = true, m$2(n5);
      });
    }, this.sub = function(n4) {
      u3.push(n4);
      var l3 = n4.componentWillUnmount;
      n4.componentWillUnmount = function() {
        u3.splice(u3.indexOf(n4), 1), l3 && l3.call(n4);
      };
    }), n3.children;
  } };
  return u2.Provider.__ = u2.Consumer.contextType = u2;
}
n$2 = s$3.slice, l$3 = { __e: function(n2, l2, u2, i2) {
  for (var t2, r2, o2; l2 = l2.__; )
    if ((t2 = l2.__c) && !t2.__)
      try {
        if ((r2 = t2.constructor) && null != r2.getDerivedStateFromError && (t2.setState(r2.getDerivedStateFromError(n2)), o2 = t2.__d), null != t2.componentDidCatch && (t2.componentDidCatch(n2, i2 || {}), o2 = t2.__d), o2)
          return t2.__E = t2;
      } catch (l3) {
        n2 = l3;
      }
  throw n2;
} }, u$3 = 0, k$4.prototype.setState = function(n2, l2) {
  var u2;
  u2 = null != this.__s && this.__s !== this.state ? this.__s : this.__s = h$3({}, this.state), "function" == typeof n2 && (n2 = n2(h$3({}, u2), this.props)), n2 && h$3(u2, n2), null != n2 && this.__v && (l2 && this._sb.push(l2), m$2(this));
}, k$4.prototype.forceUpdate = function(n2) {
  this.__v && (this.__e = true, n2 && this.__h.push(n2), m$2(this));
}, k$4.prototype.render = _$3, t$2 = [], o$3 = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, f$3 = function(n2, l2) {
  return n2.__v.__b - l2.__v.__b;
}, w$4.__r = 0, e$1 = 0;
var t$1, r$1, u$2, i$2, o$2 = 0, f$2 = [], c$2 = [], e = l$3.__b, a$2 = l$3.__r, v$2 = l$3.diffed, l$2 = l$3.__c, m$1 = l$3.unmount;
function d$2(t2, u2) {
  l$3.__h && l$3.__h(r$1, t2, o$2 || u2), o$2 = 0;
  var i2 = r$1.__H || (r$1.__H = { __: [], __h: [] });
  return t2 >= i2.__.length && i2.__.push({ __V: c$2 }), i2.__[t2];
}
function h$2(n2) {
  return o$2 = 1, s$2(B$2, n2);
}
function s$2(n2, u2, i2) {
  var o2 = d$2(t$1++, 2);
  if (o2.t = n2, !o2.__c && (o2.__ = [i2 ? i2(u2) : B$2(void 0, u2), function(n3) {
    var t2 = o2.__N ? o2.__N[0] : o2.__[0], r2 = o2.t(t2, n3);
    t2 !== r2 && (o2.__N = [r2, o2.__[1]], o2.__c.setState({}));
  }], o2.__c = r$1, !r$1.u)) {
    var f2 = function(n3, t2, r2) {
      if (!o2.__c.__H)
        return true;
      var u3 = o2.__c.__H.__.filter(function(n4) {
        return n4.__c;
      });
      if (u3.every(function(n4) {
        return !n4.__N;
      }))
        return !c2 || c2.call(this, n3, t2, r2);
      var i3 = false;
      return u3.forEach(function(n4) {
        if (n4.__N) {
          var t3 = n4.__[0];
          n4.__ = n4.__N, n4.__N = void 0, t3 !== n4.__[0] && (i3 = true);
        }
      }), !(!i3 && o2.__c.props === n3) && (!c2 || c2.call(this, n3, t2, r2));
    };
    r$1.u = true;
    var c2 = r$1.shouldComponentUpdate, e2 = r$1.componentWillUpdate;
    r$1.componentWillUpdate = function(n3, t2, r2) {
      if (this.__e) {
        var u3 = c2;
        c2 = void 0, f2(n3, t2, r2), c2 = u3;
      }
      e2 && e2.call(this, n3, t2, r2);
    }, r$1.shouldComponentUpdate = f2;
  }
  return o2.__N || o2.__;
}
function p$2(u2, i2) {
  var o2 = d$2(t$1++, 3);
  !l$3.__s && z$2(o2.__H, i2) && (o2.__ = u2, o2.i = i2, r$1.__H.__h.push(o2));
}
function y$2(u2, i2) {
  var o2 = d$2(t$1++, 4);
  !l$3.__s && z$2(o2.__H, i2) && (o2.__ = u2, o2.i = i2, r$1.__h.push(o2));
}
function _$2(n2) {
  return o$2 = 5, F$2(function() {
    return { current: n2 };
  }, []);
}
function F$2(n2, r2) {
  var u2 = d$2(t$1++, 7);
  return z$2(u2.__H, r2) ? (u2.__V = n2(), u2.i = r2, u2.__h = n2, u2.__V) : u2.__;
}
function T$1(n2, t2) {
  return o$2 = 8, F$2(function() {
    return n2;
  }, t2);
}
function q$2(n2) {
  var u2 = r$1.context[n2.__c], i2 = d$2(t$1++, 9);
  return i2.c = n2, u2 ? (null == i2.__ && (i2.__ = true, u2.sub(r$1)), u2.props.value) : n2.__;
}
function b$2() {
  for (var t2; t2 = f$2.shift(); )
    if (t2.__P && t2.__H)
      try {
        t2.__H.__h.forEach(k$3), t2.__H.__h.forEach(w$3), t2.__H.__h = [];
      } catch (r2) {
        t2.__H.__h = [], l$3.__e(r2, t2.__v);
      }
}
l$3.__b = function(n2) {
  r$1 = null, e && e(n2);
}, l$3.__r = function(n2) {
  a$2 && a$2(n2), t$1 = 0;
  var i2 = (r$1 = n2.__c).__H;
  i2 && (u$2 === r$1 ? (i2.__h = [], r$1.__h = [], i2.__.forEach(function(n3) {
    n3.__N && (n3.__ = n3.__N), n3.__V = c$2, n3.__N = n3.i = void 0;
  })) : (i2.__h.forEach(k$3), i2.__h.forEach(w$3), i2.__h = [])), u$2 = r$1;
}, l$3.diffed = function(t2) {
  v$2 && v$2(t2);
  var o2 = t2.__c;
  o2 && o2.__H && (o2.__H.__h.length && (1 !== f$2.push(o2) && i$2 === l$3.requestAnimationFrame || ((i$2 = l$3.requestAnimationFrame) || j$3)(b$2)), o2.__H.__.forEach(function(n2) {
    n2.i && (n2.__H = n2.i), n2.__V !== c$2 && (n2.__ = n2.__V), n2.i = void 0, n2.__V = c$2;
  })), u$2 = r$1 = null;
}, l$3.__c = function(t2, r2) {
  r2.some(function(t3) {
    try {
      t3.__h.forEach(k$3), t3.__h = t3.__h.filter(function(n2) {
        return !n2.__ || w$3(n2);
      });
    } catch (u2) {
      r2.some(function(n2) {
        n2.__h && (n2.__h = []);
      }), r2 = [], l$3.__e(u2, t3.__v);
    }
  }), l$2 && l$2(t2, r2);
}, l$3.unmount = function(t2) {
  m$1 && m$1(t2);
  var r2, u2 = t2.__c;
  u2 && u2.__H && (u2.__H.__.forEach(function(n2) {
    try {
      k$3(n2);
    } catch (n3) {
      r2 = n3;
    }
  }), u2.__H = void 0, r2 && l$3.__e(r2, u2.__v));
};
var g$3 = "function" == typeof requestAnimationFrame;
function j$3(n2) {
  var t2, r2 = function() {
    clearTimeout(u2), g$3 && cancelAnimationFrame(t2), setTimeout(n2);
  }, u2 = setTimeout(r2, 100);
  g$3 && (t2 = requestAnimationFrame(r2));
}
function k$3(n2) {
  var t2 = r$1, u2 = n2.__c;
  "function" == typeof u2 && (n2.__c = void 0, u2()), r$1 = t2;
}
function w$3(n2) {
  var t2 = r$1;
  n2.__c = n2.__(), r$1 = t2;
}
function z$2(n2, t2) {
  return !n2 || n2.length !== t2.length || t2.some(function(t3, r2) {
    return t3 !== n2[r2];
  });
}
function B$2(n2, t2) {
  return "function" == typeof t2 ? t2(n2) : t2;
}
function n$1(n2) {
  for (var r2 = arguments.length, t2 = Array(r2 > 1 ? r2 - 1 : 0), e2 = 1; e2 < r2; e2++)
    t2[e2 - 1] = arguments[e2];
  throw Error("[Immer] minified error nr: " + n2 + (t2.length ? " " + t2.map(function(n3) {
    return "'" + n3 + "'";
  }).join(",") : "") + ". Find the full error at: https://bit.ly/3cXEKWf");
}
function r(n2) {
  return !!n2 && !!n2[Q$1];
}
function t(n2) {
  var r2;
  return !!n2 && (function(n3) {
    if (!n3 || "object" != typeof n3)
      return false;
    var r3 = Object.getPrototypeOf(n3);
    if (null === r3)
      return true;
    var t2 = Object.hasOwnProperty.call(r3, "constructor") && r3.constructor;
    return t2 === Object || "function" == typeof t2 && Function.toString.call(t2) === Z$1;
  }(n2) || Array.isArray(n2) || !!n2[L$1] || !!(null === (r2 = n2.constructor) || void 0 === r2 ? void 0 : r2[L$1]) || s$1(n2) || v$1(n2));
}
function i$1(n2, r2, t2) {
  void 0 === t2 && (t2 = false), 0 === o$1(n2) ? (t2 ? Object.keys : nn$1)(n2).forEach(function(e2) {
    t2 && "symbol" == typeof e2 || r2(e2, n2[e2], n2);
  }) : n2.forEach(function(t3, e2) {
    return r2(e2, t3, n2);
  });
}
function o$1(n2) {
  var r2 = n2[Q$1];
  return r2 ? r2.i > 3 ? r2.i - 4 : r2.i : Array.isArray(n2) ? 1 : s$1(n2) ? 2 : v$1(n2) ? 3 : 0;
}
function u$1(n2, r2) {
  return 2 === o$1(n2) ? n2.has(r2) : Object.prototype.hasOwnProperty.call(n2, r2);
}
function a$1(n2, r2) {
  return 2 === o$1(n2) ? n2.get(r2) : n2[r2];
}
function f$1(n2, r2, t2) {
  var e2 = o$1(n2);
  2 === e2 ? n2.set(r2, t2) : 3 === e2 ? n2.add(t2) : n2[r2] = t2;
}
function c$1(n2, r2) {
  return n2 === r2 ? 0 !== n2 || 1 / n2 == 1 / r2 : n2 != n2 && r2 != r2;
}
function s$1(n2) {
  return X$1 && n2 instanceof Map;
}
function v$1(n2) {
  return q$1 && n2 instanceof Set;
}
function p$1(n2) {
  return n2.o || n2.t;
}
function l$1(n2) {
  if (Array.isArray(n2))
    return Array.prototype.slice.call(n2);
  var r2 = rn$1(n2);
  delete r2[Q$1];
  for (var t2 = nn$1(r2), e2 = 0; e2 < t2.length; e2++) {
    var i2 = t2[e2], o2 = r2[i2];
    false === o2.writable && (o2.writable = true, o2.configurable = true), (o2.get || o2.set) && (r2[i2] = { configurable: true, writable: true, enumerable: o2.enumerable, value: n2[i2] });
  }
  return Object.create(Object.getPrototypeOf(n2), r2);
}
function d$1(n2, e2) {
  return void 0 === e2 && (e2 = false), y$1(n2) || r(n2) || !t(n2) || (o$1(n2) > 1 && (n2.set = n2.add = n2.clear = n2.delete = h$1), Object.freeze(n2), e2 && i$1(n2, function(n3, r2) {
    return d$1(r2, true);
  }, true)), n2;
}
function h$1() {
  n$1(2);
}
function y$1(n2) {
  return null == n2 || "object" != typeof n2 || Object.isFrozen(n2);
}
function b$1(r2) {
  var t2 = tn[r2];
  return t2 || n$1(18, r2), t2;
}
function _$1() {
  return U$1;
}
function j$2(n2, r2) {
  r2 && (b$1("Patches"), n2.u = [], n2.s = [], n2.v = r2);
}
function g$2(n2) {
  O$1(n2), n2.p.forEach(S$1), n2.p = null;
}
function O$1(n2) {
  n2 === U$1 && (U$1 = n2.l);
}
function w$2(n2) {
  return U$1 = { p: [], l: U$1, h: n2, m: true, _: 0 };
}
function S$1(n2) {
  var r2 = n2[Q$1];
  0 === r2.i || 1 === r2.i ? r2.j() : r2.g = true;
}
function P$1(r2, e2) {
  e2._ = e2.p.length;
  var i2 = e2.p[0], o2 = void 0 !== r2 && r2 !== i2;
  return e2.h.O || b$1("ES5").S(e2, r2, o2), o2 ? (i2[Q$1].P && (g$2(e2), n$1(4)), t(r2) && (r2 = M(e2, r2), e2.l || x$2(e2, r2)), e2.u && b$1("Patches").M(i2[Q$1].t, r2, e2.u, e2.s)) : r2 = M(e2, i2, []), g$2(e2), e2.u && e2.v(e2.u, e2.s), r2 !== H$1 ? r2 : void 0;
}
function M(n2, r2, t2) {
  if (y$1(r2))
    return r2;
  var e2 = r2[Q$1];
  if (!e2)
    return i$1(r2, function(i2, o3) {
      return A$1(n2, e2, r2, i2, o3, t2);
    }, true), r2;
  if (e2.A !== n2)
    return r2;
  if (!e2.P)
    return x$2(n2, e2.t, true), e2.t;
  if (!e2.I) {
    e2.I = true, e2.A._--;
    var o2 = 4 === e2.i || 5 === e2.i ? e2.o = l$1(e2.k) : e2.o, u2 = o2, a2 = false;
    3 === e2.i && (u2 = new Set(o2), o2.clear(), a2 = true), i$1(u2, function(r3, i2) {
      return A$1(n2, e2, o2, r3, i2, t2, a2);
    }), x$2(n2, o2, false), t2 && n2.u && b$1("Patches").N(e2, t2, n2.u, n2.s);
  }
  return e2.o;
}
function A$1(e2, i2, o2, a2, c2, s2, v2) {
  if (r(c2)) {
    var p2 = M(e2, c2, s2 && i2 && 3 !== i2.i && !u$1(i2.R, a2) ? s2.concat(a2) : void 0);
    if (f$1(o2, a2, p2), !r(p2))
      return;
    e2.m = false;
  } else
    v2 && o2.add(c2);
  if (t(c2) && !y$1(c2)) {
    if (!e2.h.D && e2._ < 1)
      return;
    M(e2, c2), i2 && i2.A.l || x$2(e2, c2);
  }
}
function x$2(n2, r2, t2) {
  void 0 === t2 && (t2 = false), !n2.l && n2.h.D && n2.m && d$1(r2, t2);
}
function z$1(n2, r2) {
  var t2 = n2[Q$1];
  return (t2 ? p$1(t2) : n2)[r2];
}
function I$1(n2, r2) {
  if (r2 in n2)
    for (var t2 = Object.getPrototypeOf(n2); t2; ) {
      var e2 = Object.getOwnPropertyDescriptor(t2, r2);
      if (e2)
        return e2;
      t2 = Object.getPrototypeOf(t2);
    }
}
function k$2(n2) {
  n2.P || (n2.P = true, n2.l && k$2(n2.l));
}
function E(n2) {
  n2.o || (n2.o = l$1(n2.t));
}
function N$1(n2, r2, t2) {
  var e2 = s$1(r2) ? b$1("MapSet").F(r2, t2) : v$1(r2) ? b$1("MapSet").T(r2, t2) : n2.O ? function(n3, r3) {
    var t3 = Array.isArray(n3), e3 = { i: t3 ? 1 : 0, A: r3 ? r3.A : _$1(), P: false, I: false, R: {}, l: r3, t: n3, k: null, o: null, j: null, C: false }, i2 = e3, o2 = en$1;
    t3 && (i2 = [e3], o2 = on$1);
    var u2 = Proxy.revocable(i2, o2), a2 = u2.revoke, f2 = u2.proxy;
    return e3.k = f2, e3.j = a2, f2;
  }(r2, t2) : b$1("ES5").J(r2, t2);
  return (t2 ? t2.A : _$1()).p.push(e2), e2;
}
function R$1(e2) {
  return r(e2) || n$1(22, e2), function n2(r2) {
    if (!t(r2))
      return r2;
    var e3, u2 = r2[Q$1], c2 = o$1(r2);
    if (u2) {
      if (!u2.P && (u2.i < 4 || !b$1("ES5").K(u2)))
        return u2.t;
      u2.I = true, e3 = D$1(r2, c2), u2.I = false;
    } else
      e3 = D$1(r2, c2);
    return i$1(e3, function(r3, t2) {
      u2 && a$1(u2.t, r3) === t2 || f$1(e3, r3, n2(t2));
    }), 3 === c2 ? new Set(e3) : e3;
  }(e2);
}
function D$1(n2, r2) {
  switch (r2) {
    case 2:
      return new Map(n2);
    case 3:
      return Array.from(n2);
  }
  return l$1(n2);
}
var G, U$1, W$1 = "undefined" != typeof Symbol && "symbol" == typeof Symbol("x"), X$1 = "undefined" != typeof Map, q$1 = "undefined" != typeof Set, B$1 = "undefined" != typeof Proxy && void 0 !== Proxy.revocable && "undefined" != typeof Reflect, H$1 = W$1 ? Symbol.for("immer-nothing") : ((G = {})["immer-nothing"] = true, G), L$1 = W$1 ? Symbol.for("immer-draftable") : "__$immer_draftable", Q$1 = W$1 ? Symbol.for("immer-state") : "__$immer_state", Z$1 = "" + Object.prototype.constructor, nn$1 = "undefined" != typeof Reflect && Reflect.ownKeys ? Reflect.ownKeys : void 0 !== Object.getOwnPropertySymbols ? function(n2) {
  return Object.getOwnPropertyNames(n2).concat(Object.getOwnPropertySymbols(n2));
} : Object.getOwnPropertyNames, rn$1 = Object.getOwnPropertyDescriptors || function(n2) {
  var r2 = {};
  return nn$1(n2).forEach(function(t2) {
    r2[t2] = Object.getOwnPropertyDescriptor(n2, t2);
  }), r2;
}, tn = {}, en$1 = { get: function(n2, r2) {
  if (r2 === Q$1)
    return n2;
  var e2 = p$1(n2);
  if (!u$1(e2, r2))
    return function(n3, r3, t2) {
      var e3, i3 = I$1(r3, t2);
      return i3 ? "value" in i3 ? i3.value : null === (e3 = i3.get) || void 0 === e3 ? void 0 : e3.call(n3.k) : void 0;
    }(n2, e2, r2);
  var i2 = e2[r2];
  return n2.I || !t(i2) ? i2 : i2 === z$1(n2.t, r2) ? (E(n2), n2.o[r2] = N$1(n2.A.h, i2, n2)) : i2;
}, has: function(n2, r2) {
  return r2 in p$1(n2);
}, ownKeys: function(n2) {
  return Reflect.ownKeys(p$1(n2));
}, set: function(n2, r2, t2) {
  var e2 = I$1(p$1(n2), r2);
  if (null == e2 ? void 0 : e2.set)
    return e2.set.call(n2.k, t2), true;
  if (!n2.P) {
    var i2 = z$1(p$1(n2), r2), o2 = null == i2 ? void 0 : i2[Q$1];
    if (o2 && o2.t === t2)
      return n2.o[r2] = t2, n2.R[r2] = false, true;
    if (c$1(t2, i2) && (void 0 !== t2 || u$1(n2.t, r2)))
      return true;
    E(n2), k$2(n2);
  }
  return n2.o[r2] === t2 && (void 0 !== t2 || r2 in n2.o) || Number.isNaN(t2) && Number.isNaN(n2.o[r2]) || (n2.o[r2] = t2, n2.R[r2] = true), true;
}, deleteProperty: function(n2, r2) {
  return void 0 !== z$1(n2.t, r2) || r2 in n2.t ? (n2.R[r2] = false, E(n2), k$2(n2)) : delete n2.R[r2], n2.o && delete n2.o[r2], true;
}, getOwnPropertyDescriptor: function(n2, r2) {
  var t2 = p$1(n2), e2 = Reflect.getOwnPropertyDescriptor(t2, r2);
  return e2 ? { writable: true, configurable: 1 !== n2.i || "length" !== r2, enumerable: e2.enumerable, value: t2[r2] } : e2;
}, defineProperty: function() {
  n$1(11);
}, getPrototypeOf: function(n2) {
  return Object.getPrototypeOf(n2.t);
}, setPrototypeOf: function() {
  n$1(12);
} }, on$1 = {};
i$1(en$1, function(n2, r2) {
  on$1[n2] = function() {
    return arguments[0] = arguments[0][0], r2.apply(this, arguments);
  };
}), on$1.deleteProperty = function(r2, t2) {
  return on$1.set.call(this, r2, t2, void 0);
}, on$1.set = function(r2, t2, e2) {
  return en$1.set.call(this, r2[0], t2, e2, r2[0]);
};
var un$1 = function() {
  function e2(r2) {
    var e3 = this;
    this.O = B$1, this.D = true, this.produce = function(r3, i3, o2) {
      if ("function" == typeof r3 && "function" != typeof i3) {
        var u2 = i3;
        i3 = r3;
        var a2 = e3;
        return function(n2) {
          var r4 = this;
          void 0 === n2 && (n2 = u2);
          for (var t2 = arguments.length, e4 = Array(t2 > 1 ? t2 - 1 : 0), o3 = 1; o3 < t2; o3++)
            e4[o3 - 1] = arguments[o3];
          return a2.produce(n2, function(n3) {
            var t3;
            return (t3 = i3).call.apply(t3, [r4, n3].concat(e4));
          });
        };
      }
      var f2;
      if ("function" != typeof i3 && n$1(6), void 0 !== o2 && "function" != typeof o2 && n$1(7), t(r3)) {
        var c2 = w$2(e3), s2 = N$1(e3, r3, void 0), v2 = true;
        try {
          f2 = i3(s2), v2 = false;
        } finally {
          v2 ? g$2(c2) : O$1(c2);
        }
        return "undefined" != typeof Promise && f2 instanceof Promise ? f2.then(function(n2) {
          return j$2(c2, o2), P$1(n2, c2);
        }, function(n2) {
          throw g$2(c2), n2;
        }) : (j$2(c2, o2), P$1(f2, c2));
      }
      if (!r3 || "object" != typeof r3) {
        if (void 0 === (f2 = i3(r3)) && (f2 = r3), f2 === H$1 && (f2 = void 0), e3.D && d$1(f2, true), o2) {
          var p2 = [], l2 = [];
          b$1("Patches").M(r3, f2, p2, l2), o2(p2, l2);
        }
        return f2;
      }
      n$1(21, r3);
    }, this.produceWithPatches = function(n2, r3) {
      if ("function" == typeof n2)
        return function(r4) {
          for (var t3 = arguments.length, i4 = Array(t3 > 1 ? t3 - 1 : 0), o3 = 1; o3 < t3; o3++)
            i4[o3 - 1] = arguments[o3];
          return e3.produceWithPatches(r4, function(r5) {
            return n2.apply(void 0, [r5].concat(i4));
          });
        };
      var t2, i3, o2 = e3.produce(n2, r3, function(n3, r4) {
        t2 = n3, i3 = r4;
      });
      return "undefined" != typeof Promise && o2 instanceof Promise ? o2.then(function(n3) {
        return [n3, t2, i3];
      }) : [o2, t2, i3];
    }, "boolean" == typeof (null == r2 ? void 0 : r2.useProxies) && this.setUseProxies(r2.useProxies), "boolean" == typeof (null == r2 ? void 0 : r2.autoFreeze) && this.setAutoFreeze(r2.autoFreeze);
  }
  var i2 = e2.prototype;
  return i2.createDraft = function(e3) {
    t(e3) || n$1(8), r(e3) && (e3 = R$1(e3));
    var i3 = w$2(this), o2 = N$1(this, e3, void 0);
    return o2[Q$1].C = true, O$1(i3), o2;
  }, i2.finishDraft = function(r2, t2) {
    var e3 = r2 && r2[Q$1];
    var i3 = e3.A;
    return j$2(i3, t2), P$1(void 0, i3);
  }, i2.setAutoFreeze = function(n2) {
    this.D = n2;
  }, i2.setUseProxies = function(r2) {
    r2 && !B$1 && n$1(20), this.O = r2;
  }, i2.applyPatches = function(n2, t2) {
    var e3;
    for (e3 = t2.length - 1; e3 >= 0; e3--) {
      var i3 = t2[e3];
      if (0 === i3.path.length && "replace" === i3.op) {
        n2 = i3.value;
        break;
      }
    }
    e3 > -1 && (t2 = t2.slice(e3 + 1));
    var o2 = b$1("Patches").$;
    return r(n2) ? o2(n2, t2) : this.produce(n2, function(n3) {
      return o2(n3, t2);
    });
  }, e2;
}(), an = new un$1(), fn = an.produce;
an.produceWithPatches.bind(an);
an.setAutoFreeze.bind(an);
an.setUseProxies.bind(an);
an.applyPatches.bind(an);
an.createDraft.bind(an);
an.finishDraft.bind(an);
var produce = fn;
var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
function getDefaultExportFromCjs(x2) {
  return x2 && x2.__esModule && Object.prototype.hasOwnProperty.call(x2, "default") ? x2["default"] : x2;
}
function isUndefined$3(obj) {
  return obj === void 0;
}
var isUndefined_1 = isUndefined$3;
var isUndefined$2 = isUndefined_1;
function range(start, stop, step) {
  var arr = [];
  var flag;
  if (isUndefined$2(stop)) {
    stop = start || 0;
    start = 0;
  }
  step = step || 1;
  flag = step < 0 ? -1 : 1;
  stop *= flag;
  for (; start * flag < stop; start += step) {
    arr.push(start);
  }
  return arr;
}
var range_1 = range;
const DEFAULT_DAY_NAME_MARGIN_LEFT = "0";
const MONTH_EVENT_HEIGHT = 24;
const MONTH_EVENT_MARGIN_TOP = 2;
const MONTH_CELL_PADDING_TOP = 3;
const MONTH_CELL_BAR_HEIGHT = 27;
const MONTH_MORE_VIEW_PADDING = 5;
const MONTH_MORE_VIEW_MIN_WIDTH = 280;
const MONTH_MORE_VIEW_HEADER_HEIGHT = 44;
const MONTH_MORE_VIEW_HEADER_MARGIN_BOTTOM = 12;
const MONTH_MORE_VIEW_HEADER_PADDING_TOP = 12;
const MONTH_MORE_VIEW_HEADER_PADDING = "12px 17px 0";
const WEEK_DAY_NAME_HEIGHT = 42;
const WEEK_DAY_NAME_BORDER = 1;
const WEEK_EVENT_MARGIN_TOP = 2;
const DEFAULT_PANEL_HEIGHT = 72;
const DEFAULT_EVENT_COLORS = {
  color: "#000",
  backgroundColor: "#a1b56c",
  dragBackgroundColor: "#a1b56c",
  borderColor: "#000",
  shouldOpacity: "0"
};
const TIME_EVENT_CONTAINER_MARGIN_LEFT = 2;
const COLLAPSED_DUPLICATE_EVENT_WIDTH_PX = 9;
function isBoolean(obj) {
  return typeof obj === "boolean" || obj instanceof Boolean;
}
var isBoolean_1 = isBoolean;
function isNumber(obj) {
  return typeof obj === "number" || obj instanceof Number;
}
var isNumber_1 = isNumber;
function isObject$1(obj) {
  return obj === Object(obj);
}
var isObject_1 = isObject$1;
function isString$1(obj) {
  return typeof obj === "string" || obj instanceof String;
}
var isString_1 = isString$1;
function isNil(value) {
  return isUndefined_1(value) || value === null;
}
function isPresent(value) {
  return !isNil(value);
}
function isFunction$2(value) {
  return typeof value === "function";
}
const CSS_PREFIX = "toastui-calendar-";
function cls(...args) {
  const result = [];
  args.forEach((arg) => {
    if (!arg) {
      return;
    }
    if (isString_1(arg)) {
      result.push(arg);
    } else {
      Object.keys(arg).forEach((className2) => {
        if (arg[className2]) {
          result.push(className2);
        }
      });
    }
  });
  return result.map((str) => `${CSS_PREFIX}${str}`).join(" ");
}
function toPercent(value) {
  return `${value}%`;
}
function toPx(value) {
  return `${value}px`;
}
function extractPercentPx(value) {
  const percentRegexp = /(\d+)%/;
  const percentResult = value.match(percentRegexp);
  const pxRegexp = /(-?)\s?(\d+)px/;
  const pxResult = value.match(pxRegexp);
  return {
    percent: percentResult ? parseInt(percentResult[1], 10) : 0,
    px: pxResult ? parseInt(`${pxResult[1]}${pxResult[2]}`, 10) : 0
  };
}
function getEventColors(uiModel, calendarColor) {
  const eventColors = uiModel.model.getColors();
  return Object.keys(DEFAULT_EVENT_COLORS).reduce((colors, _key) => {
    var _a, _b;
    const key = _key;
    colors[key] = (_b = (_a = eventColors[key]) != null ? _a : calendarColor[key]) != null ? _b : DEFAULT_EVENT_COLORS[key];
    return colors;
  }, {});
}
const rISO8601 = /^(-?(?:[1-9][0-9]*)?[0-9]{4})-(1[0-2]|0[1-9])-(3[01]|0[1-9]|[12][0-9])T(2[0-3]|[01][0-9]):([0-5][0-9]):([0-5][0-9])(\.)?([0-9]+)?([+-]\d\d(?::?\d\d)?|\s*Z)?$/;
function throwNotSupported() {
  throw new Error("This operation is not supported.");
}
function getDateTime(dateString) {
  const match = rISO8601.exec(dateString);
  if (match) {
    const [, y2, M2, d2, h2, m2, s2, , ms, zoneInfo] = match;
    return {
      y: Number(y2),
      M: Number(M2) - 1,
      d: Number(d2),
      h: Number(h2),
      m: Number(m2),
      s: Number(s2),
      ms: Number(ms) || 0,
      zoneInfo
    };
  }
  return null;
}
function createFromDateString(dateString) {
  const info = getDateTime(dateString);
  if (info && !info.zoneInfo) {
    const { y: y2, M: M2, d: d2, h: h2, m: m2, s: s2, ms } = info;
    return new Date(y2, M2, d2, h2, m2, s2, ms);
  }
  return null;
}
class LocalDate {
  constructor(...args) {
    const [firstArg] = args;
    if (firstArg instanceof Date) {
      this.d = new Date(firstArg.getTime());
    } else if (isString_1(firstArg) && args.length === 1) {
      this.d = createFromDateString(firstArg);
    }
    if (!this.d) {
      this.d = new Date(...args);
    }
  }
  setTimezoneOffset() {
    throwNotSupported();
  }
  setTimezoneName() {
    throwNotSupported();
  }
  clone() {
    return new LocalDate(this.d);
  }
  toDate() {
    return new Date(this.d.getTime());
  }
  toString() {
    return this.d.toString();
  }
}
const getterMethods = [
  "getTime",
  "getTimezoneOffset",
  "getFullYear",
  "getMonth",
  "getDate",
  "getHours",
  "getMinutes",
  "getSeconds",
  "getMilliseconds",
  "getDay"
];
const setterMethods = [
  "setTime",
  "setFullYear",
  "setMonth",
  "setDate",
  "setHours",
  "setMinutes",
  "setSeconds",
  "setMilliseconds"
];
getterMethods.forEach((methodName) => {
  LocalDate.prototype[methodName] = function(...args) {
    return this.d[methodName](...args);
  };
});
setterMethods.forEach((methodName) => {
  LocalDate.prototype[methodName] = function(...args) {
    return this.d[methodName](...args);
  };
});
class UTCDate extends LocalDate {
  clone() {
    return new UTCDate(this.d);
  }
  getTimezoneOffset() {
    return 0;
  }
}
const getterProperties = [
  "FullYear",
  "Month",
  "Date",
  "Hours",
  "Minutes",
  "Seconds",
  "Milliseconds",
  "Day"
];
const setterProperties = [
  "FullYear",
  "Month",
  "Date",
  "Hours",
  "Minutes",
  "Seconds",
  "Milliseconds"
];
getterProperties.forEach((prop) => {
  const methodName = `get${prop}`;
  UTCDate.prototype[methodName] = function(...args) {
    return this.d[`getUTC${prop}`](...args);
  };
});
setterProperties.forEach((prop) => {
  const methodName = `set${prop}`;
  UTCDate.prototype[methodName] = function(...args) {
    return this.d[`setUTC${prop}`](...args);
  };
});
const INVALID_DATETIME_FORMAT = "Invalid DateTime Format";
const INVALID_TIMEZONE_NAME = "Invalid IANA Timezone Name";
const INVALID_VIEW_TYPE = "Invalid View Type";
const MESSAGE_PREFIX = "@toast-ui/calendar: ";
class InvalidTimezoneNameError extends Error {
  constructor(timezoneName) {
    super(`${MESSAGE_PREFIX}${INVALID_TIMEZONE_NAME} - ${timezoneName}`);
    this.name = "InvalidTimezoneNameError";
  }
}
class InvalidDateTimeFormatError extends Error {
  constructor(dateTimeString) {
    super(`${MESSAGE_PREFIX}${INVALID_DATETIME_FORMAT} - ${dateTimeString}`);
    this.name = "InvalidDateTimeFormatError";
  }
}
class InvalidViewTypeError extends Error {
  constructor(viewType) {
    super(`${MESSAGE_PREFIX}${INVALID_VIEW_TYPE} - ${viewType}`);
    this.name = "InvalidViewTypeError";
  }
}
const logger = {
  error: (firstArg, ...restArgs) => {
    console.error(`${MESSAGE_PREFIX}${firstArg}`, ...restArgs);
  },
  warn: (firstArg, ...restArgs) => {
    console.warn(`${MESSAGE_PREFIX}${firstArg}`, ...restArgs);
  }
};
let Constructor = LocalDate;
function date(...args) {
  return new Constructor(...args);
}
function getLocalTimezoneOffset() {
  return -new Date().getTimezoneOffset();
}
function calculateTimezoneOffset(timezoneName, targetDate = new TZDate()) {
  if (!isIntlDateTimeFormatSupported()) {
    logger.warn(
      "Intl.DateTimeFormat is not fully supported. So It will return the local timezone offset only.\nYou can use a polyfill to fix this issue."
    );
    return -targetDate.toDate().getTimezoneOffset();
  }
  validateIANATimezoneName(timezoneName);
  const token = tokenizeTZDate(targetDate, timezoneName);
  const utcDate = tokenToUtcDate(token);
  return Math.round((utcDate.getTime() - targetDate.getTime()) / 60 / 1e3);
}
function isUsingDST(targetDate, timezoneName) {
  if (timezoneName) {
    validateIANATimezoneName(timezoneName);
  }
  const jan = new TZDate(targetDate.getFullYear(), 0, 1);
  const jul = new TZDate(targetDate.getFullYear(), 6, 1);
  if (timezoneName) {
    return Math.max(
      -calculateTimezoneOffset(timezoneName, jan),
      -calculateTimezoneOffset(timezoneName, jul)
    ) !== -calculateTimezoneOffset(timezoneName, targetDate);
  }
  return Math.max(jan.getTimezoneOffset(), jul.getTimezoneOffset()) !== targetDate.toDate().getTimezoneOffset();
}
const dtfCache = {};
const timezoneNameValidationCache = {};
function isIntlDateTimeFormatSupported() {
  var _a, _b;
  return isFunction$2((_b = (_a = Intl == null ? void 0 : Intl.DateTimeFormat) == null ? void 0 : _a.prototype) == null ? void 0 : _b.formatToParts);
}
function validateIANATimezoneName(timezoneName) {
  if (timezoneNameValidationCache[timezoneName]) {
    return true;
  }
  try {
    Intl.DateTimeFormat("en-US", { timeZone: timezoneName });
    timezoneNameValidationCache[timezoneName] = true;
    return true;
  } catch (e2) {
    throw new InvalidTimezoneNameError(timezoneName);
  }
}
function getDateTimeFormat(timezoneName) {
  if (dtfCache[timezoneName]) {
    return dtfCache[timezoneName];
  }
  const dtf = new Intl.DateTimeFormat("en-US", {
    timeZone: timezoneName,
    hourCycle: "h23",
    hour12: false,
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric"
  });
  dtfCache[timezoneName] = dtf;
  return dtf;
}
const typeToPos = {
  year: 0,
  month: 1,
  day: 2,
  hour: 3,
  minute: 4,
  second: 5
};
function tokenizeTZDate(tzDate, timezoneName) {
  const dtf = getDateTimeFormat(timezoneName);
  const formatted = dtf.formatToParts(tzDate.toDate());
  return formatted.reduce((result, cur) => {
    const pos = typeToPos[cur.type];
    if (isPresent(pos)) {
      result[pos] = parseInt(cur.value, 10);
    }
    return result;
  }, []);
}
function tokenToUtcDate(token) {
  const [year, monthPlusOne, day, hour, minute, second] = token;
  const month = monthPlusOne - 1;
  return new Date(Date.UTC(year, month, day, hour % 24, minute, second));
}
function getTZOffsetMSDifference(offset) {
  return (getLocalTimezoneOffset() - offset) * MS_PER_MINUTES;
}
class TZDate {
  constructor(...args) {
    this.tzOffset = null;
    if (args[0] instanceof TZDate) {
      this.d = date(args[0].getTime());
    } else {
      this.d = date(...args);
    }
  }
  toString() {
    return this.d.toString();
  }
  addFullYear(y2) {
    this.setFullYear(this.getFullYear() + y2);
    return this;
  }
  addMonth(m2) {
    this.setMonth(this.getMonth() + m2);
    return this;
  }
  addDate(d2) {
    this.setDate(this.getDate() + d2);
    return this;
  }
  addHours(h2) {
    this.setHours(this.getHours() + h2);
    return this;
  }
  addMinutes(M2) {
    this.setMinutes(this.getMinutes() + M2);
    return this;
  }
  addSeconds(s2) {
    this.setSeconds(this.getSeconds() + s2);
    return this;
  }
  addMilliseconds(ms) {
    this.setMilliseconds(this.getMilliseconds() + ms);
    return this;
  }
  setWithRaw(y2, m2, d2, h2, M2, s2, ms) {
    this.setFullYear(y2, m2, d2);
    this.setHours(h2, M2, s2, ms);
    return this;
  }
  toDate() {
    return this.d.toDate();
  }
  valueOf() {
    return this.getTime();
  }
  getTimezoneOffset() {
    var _a;
    return (_a = this.tzOffset) != null ? _a : this.d.getTimezoneOffset();
  }
  getTime() {
    return this.d.getTime();
  }
  getFullYear() {
    return this.d.getFullYear();
  }
  getMonth() {
    return this.d.getMonth();
  }
  getDate() {
    return this.d.getDate();
  }
  getHours() {
    return this.d.getHours();
  }
  getMinutes() {
    return this.d.getMinutes();
  }
  getSeconds() {
    return this.d.getSeconds();
  }
  getMilliseconds() {
    return this.d.getMilliseconds();
  }
  getDay() {
    return this.d.getDay();
  }
  setTime(t2) {
    return this.d.setTime(t2);
  }
  setFullYear(y2, m2 = this.getMonth(), d2 = this.getDate()) {
    return this.d.setFullYear(y2, m2, d2);
  }
  setMonth(m2, d2 = this.getDate()) {
    return this.d.setMonth(m2, d2);
  }
  setDate(d2) {
    return this.d.setDate(d2);
  }
  setHours(h2, M2 = this.getMinutes(), s2 = this.getSeconds(), ms = this.getMilliseconds()) {
    return this.d.setHours(h2, M2, s2, ms);
  }
  setMinutes(M2, s2 = this.getSeconds(), ms = this.getMilliseconds()) {
    return this.d.setMinutes(M2, s2, ms);
  }
  setSeconds(s2, ms = this.getMilliseconds()) {
    return this.d.setSeconds(s2, ms);
  }
  setMilliseconds(ms) {
    return this.d.setMilliseconds(ms);
  }
  tz(tzValue) {
    if (tzValue === "Local") {
      return new TZDate(this.getTime());
    }
    const tzOffset = isString_1(tzValue) ? calculateTimezoneOffset(tzValue, this) : tzValue;
    const newTZDate = new TZDate(this.getTime() - getTZOffsetMSDifference(tzOffset));
    newTZDate.tzOffset = tzOffset;
    return newTZDate;
  }
  local(tzValue) {
    if (isPresent(tzValue)) {
      const tzOffset = isString_1(tzValue) ? calculateTimezoneOffset(tzValue, this) : tzValue;
      return new TZDate(this.getTime() + getTZOffsetMSDifference(tzOffset));
    }
    return new TZDate(
      this.getTime() + (isPresent(this.tzOffset) ? getTZOffsetMSDifference(this.tzOffset) : 0)
    );
  }
}
function pick(obj, ...propNames) {
  return propNames.reduce((acc, key) => {
    if (obj.hasOwnProperty(key)) {
      acc[key] = obj[key];
    }
    return acc;
  }, {});
}
function clone$2(source) {
  return Object.assign(Object.create(Object.getPrototypeOf(source)), source);
}
function mergeObject(target, source = {}) {
  if (!isObject_1(source)) {
    return target;
  }
  Object.keys(source).forEach((k2) => {
    const targetKey = k2;
    const sourceKey = k2;
    if (!Array.isArray(source[sourceKey]) && isObject_1(target[targetKey]) && isObject_1(source[sourceKey]) && !(source[sourceKey] instanceof TZDate)) {
      target[targetKey] = mergeObject(
        target[targetKey],
        source[sourceKey]
      );
    } else {
      target[targetKey] = source[sourceKey];
    }
  });
  return target;
}
const eventUIPropsKey = [
  "top",
  "left",
  "width",
  "height",
  "exceedLeft",
  "exceedRight",
  "croppedStart",
  "croppedEnd",
  "goingDurationHeight",
  "modelDurationHeight",
  "comingDurationHeight",
  "duplicateEvents",
  "duplicateEventIndex",
  "duplicateStarts",
  "duplicateEnds",
  "duplicateLeft",
  "duplicateWidth",
  "collapse",
  "isMain"
];
class EventUIModel {
  constructor(event) {
    this.top = 0;
    this.left = 0;
    this.width = 0;
    this.height = 0;
    this.exceedLeft = false;
    this.exceedRight = false;
    this.croppedStart = false;
    this.croppedEnd = false;
    this.goingDurationHeight = 0;
    this.modelDurationHeight = 100;
    this.comingDurationHeight = 0;
    this.duplicateEvents = [];
    this.duplicateEventIndex = -1;
    this.duplicateLeft = "";
    this.duplicateWidth = "";
    this.collapse = false;
    this.isMain = false;
    this.model = event;
  }
  getUIProps() {
    return pick(this, ...eventUIPropsKey);
  }
  setUIProps(props) {
    Object.assign(this, props);
  }
  getStarts() {
    if (this.renderStarts) {
      return this.renderStarts;
    }
    return this.model.getStarts();
  }
  getEnds() {
    if (this.renderEnds) {
      return this.renderEnds;
    }
    return this.model.getEnds();
  }
  cid() {
    return this.model.cid();
  }
  valueOf() {
    return this.model;
  }
  duration() {
    return this.model.duration();
  }
  collidesWith(uiModel, usingTravelTime = true) {
    const infos = [];
    [this, uiModel].forEach((event) => {
      const isDuplicateEvent = event instanceof EventUIModel && event.duplicateEvents.length > 0;
      if (isDuplicateEvent) {
        infos.push({
          start: event.duplicateStarts,
          end: event.duplicateEnds,
          goingDuration: 0,
          comingDuration: 0
        });
      } else {
        infos.push({
          start: event.getStarts(),
          end: event.getEnds(),
          goingDuration: event.valueOf().goingDuration,
          comingDuration: event.valueOf().comingDuration
        });
      }
    });
    const [thisInfo, targetInfo] = infos;
    return collidesWith({
      start: thisInfo.start.getTime(),
      end: thisInfo.end.getTime(),
      targetStart: targetInfo.start.getTime(),
      targetEnd: targetInfo.end.getTime(),
      goingDuration: thisInfo.goingDuration,
      comingDuration: thisInfo.comingDuration,
      targetGoingDuration: targetInfo.goingDuration,
      targetComingDuration: targetInfo.comingDuration,
      usingTravelTime
    });
  }
  clone() {
    const eventUIModelProps = this.getUIProps();
    const clonedEventUIModel = new EventUIModel(this.model);
    clonedEventUIModel.setUIProps(eventUIModelProps);
    if (this.renderStarts) {
      clonedEventUIModel.renderStarts = new TZDate(this.renderStarts);
    }
    if (this.renderEnds) {
      clonedEventUIModel.renderEnds = new TZDate(this.renderEnds);
    }
    return clonedEventUIModel;
  }
}
function compareBooleansASC(a2, b2) {
  if (a2 !== b2) {
    return a2 ? -1 : 1;
  }
  return 0;
}
function compareNumbersASC(a2, b2) {
  return Number(a2) - Number(b2);
}
function compareStringsASC(_a, _b) {
  const a2 = String(_a);
  const b2 = String(_b);
  if (a2 === b2) {
    return 0;
  }
  return a2 > b2 ? 1 : -1;
}
function compareEventsASC(a2, b2) {
  const modelA = a2 instanceof EventUIModel ? a2.model : a2;
  const modelB = b2 instanceof EventUIModel ? b2.model : b2;
  const alldayCompare = compareBooleansASC(
    modelA.isAllday || modelA.hasMultiDates,
    modelB.isAllday || modelB.hasMultiDates
  );
  if (alldayCompare) {
    return alldayCompare;
  }
  const startsCompare = compare(a2.getStarts(), b2.getStarts());
  if (startsCompare) {
    return startsCompare;
  }
  const durationA = a2.duration();
  const durationB = b2.duration();
  if (durationA < durationB) {
    return 1;
  }
  if (durationA > durationB) {
    return -1;
  }
  return modelA.cid() - modelB.cid();
}
function bsearch(arr, search, fn2, compareFn) {
  let minIndex = 0;
  let maxIndex = arr.length - 1;
  let currentIndex;
  let value;
  let comp;
  compareFn = compareFn || compareStringsASC;
  while (minIndex <= maxIndex) {
    currentIndex = (minIndex + maxIndex) / 2 | 0;
    value = fn2 ? fn2(arr[currentIndex]) : arr[currentIndex];
    comp = compareFn(value, search);
    if (comp < 0) {
      minIndex = currentIndex + 1;
    } else if (comp > 0) {
      maxIndex = currentIndex - 1;
    } else {
      return currentIndex;
    }
  }
  return ~maxIndex;
}
var array = {
  bsearch,
  compare: {
    event: {
      asc: compareEventsASC
    },
    num: {
      asc: compareNumbersASC
    }
  }
};
function first(array2) {
  return array2[0];
}
function last(array2) {
  return array2[array2.length - 1];
}
function findLastIndex(array2, predicate) {
  for (let i2 = array2.length - 1; i2 >= 0; i2 -= 1) {
    if (predicate(array2[i2])) {
      return i2;
    }
  }
  return -1;
}
function fill(length, value) {
  if (length > 0) {
    return Array.from({ length }, () => {
      if (Array.isArray(value)) {
        return value.slice();
      }
      return value;
    });
  }
  return [];
}
var Day$2 = /* @__PURE__ */ ((Day2) => {
  Day2[Day2["SUN"] = 0] = "SUN";
  Day2[Day2["MON"] = 1] = "MON";
  Day2[Day2["TUE"] = 2] = "TUE";
  Day2[Day2["WED"] = 3] = "WED";
  Day2[Day2["THU"] = 4] = "THU";
  Day2[Day2["FRI"] = 5] = "FRI";
  Day2[Day2["SAT"] = 6] = "SAT";
  return Day2;
})(Day$2 || {});
const WEEK_DAYS = 7;
const dateFormatRx = /^(\d{4}[-|/]*\d{2}[-|/]*\d{2})\s?(\d{2}:\d{2}:\d{2})?$/;
const memo = {
  millisecondsTo: {},
  millisecondsFrom: {}
};
const convByTimeUnit = [24, 60, 60, 1e3];
function leadingZero(number, length) {
  let zero = "";
  let i2 = 0;
  if (String(number).length > length) {
    return String(number);
  }
  for (; i2 < length - 1; i2 += 1) {
    zero += "0";
  }
  return (zero + number).slice(length * -1);
}
function getHourForMeridiem(date2) {
  let hour = date2.getHours();
  if (hour === 0) {
    hour = 12;
  }
  if (hour > 12) {
    hour = hour % 12;
  }
  return hour;
}
const tokenFunc = {
  YYYYMMDD(date2) {
    return [
      date2.getFullYear(),
      leadingZero(date2.getMonth() + 1, 2),
      leadingZero(date2.getDate(), 2)
    ].join("");
  },
  YYYY(date2) {
    return String(date2.getFullYear());
  },
  MM(date2) {
    return leadingZero(date2.getMonth() + 1, 2);
  },
  DD(date2) {
    return leadingZero(date2.getDate(), 2);
  },
  "HH:mm": function(date2) {
    const hour = date2.getHours();
    const minutes = date2.getMinutes();
    return `${leadingZero(hour, 2)}:${leadingZero(minutes, 2)}`;
  },
  "hh:mm": function(date2) {
    const hour = getHourForMeridiem(date2);
    const minutes = date2.getMinutes();
    return `${leadingZero(hour, 2)}:${leadingZero(minutes, 2)}`;
  },
  hh(date2) {
    const hour = getHourForMeridiem(date2);
    return String(hour);
  },
  tt(date2) {
    const hour = date2.getHours();
    return hour < 12 ? "am" : "pm";
  }
};
const MS_PER_DAY = 864e5;
const MS_PER_MINUTES = 6e4;
const MS_EVENT_MIN_DURATION = 20 * MS_PER_MINUTES;
const MS_PER_THIRTY_MINUTES = 30 * 60 * 1e3;
function toFormat(date2, strFormat) {
  let result = strFormat;
  Object.entries(tokenFunc).forEach(([token, converter]) => {
    result = result.replace(token, converter(date2));
  });
  return result;
}
function convMilliseconds(type, value, iteratee) {
  const index = {
    date: 0,
    hour: 1,
    minute: 2,
    second: 3
  };
  if (!(type in index) || isNaN(value)) {
    return 0;
  }
  return [value].concat(convByTimeUnit.slice(index[type])).reduce(iteratee);
}
function millisecondsFrom(type, value) {
  const cache = memo.millisecondsFrom;
  const key = type + value;
  if (cache[key]) {
    return cache[key];
  }
  const result = convMilliseconds(type, value, (m2, v2) => m2 * v2);
  if (!result) {
    return 0;
  }
  cache[key] = result;
  return cache[key];
}
function toStartOfDay(date2) {
  const d2 = date2 ? new TZDate(date2) : new TZDate();
  d2.setHours(0, 0, 0, 0);
  return d2;
}
function makeDateRange(startDate, endDate, step) {
  const startTime = startDate.getTime();
  const endTime = endDate.getTime();
  const date2 = new TZDate(startDate);
  const result = [];
  let cursor = startTime;
  while (cursor <= endTime && endTime >= date2.getTime()) {
    result.push(new TZDate(date2));
    cursor = cursor + step;
    date2.addMilliseconds(step);
  }
  return result;
}
function clone$1(date2) {
  return new TZDate(date2);
}
function compare(d1, d2) {
  const _d1 = d1.getTime();
  const _d2 = d2.getTime();
  if (_d1 < _d2) {
    return -1;
  }
  if (_d1 > _d2) {
    return 1;
  }
  return 0;
}
function isSameYear(d1, d2) {
  return d1.getFullYear() === d2.getFullYear();
}
function isSameMonth(d1, d2) {
  return isSameYear(d1, d2) && d1.getMonth() === d2.getMonth();
}
function isSameDate(d1, d2) {
  return isSameMonth(d1, d2) && d1.getDate() === d2.getDate();
}
function max(d1, d2) {
  return compare(d1, d2) === 1 ? d1 : d2;
}
function min(d1, d2) {
  return compare(d1, d2) === -1 ? d1 : d2;
}
function parse(str, fixMonth = -1) {
  const matches = str.match(dateFormatRx);
  let separator;
  let ymd;
  let hms;
  if (!matches) {
    throw new InvalidDateTimeFormatError(str);
  }
  if (str.length > 8) {
    separator = ~str.indexOf("/") ? "/" : "-";
    const result = matches.splice(1);
    ymd = result[0].split(separator);
    hms = result[1] ? result[1].split(":") : [0, 0, 0];
  } else {
    const [result] = matches;
    ymd = [result.substr(0, 4), result.substr(4, 2), result.substr(6, 2)];
    hms = [0, 0, 0];
  }
  return new TZDate().setWithRaw(
    Number(ymd[0]),
    Number(ymd[1]) + fixMonth,
    Number(ymd[2]),
    Number(hms[0]),
    Number(hms[1]),
    Number(hms[2]),
    0
  );
}
function toEndOfDay(date2) {
  const d2 = date2 ? new TZDate(date2) : new TZDate();
  d2.setHours(23, 59, 59, 999);
  return d2;
}
function isWeekend(day) {
  return day === 0 || day === 6;
}
function isSunday(day) {
  return day === 0;
}
function isSaturday(day) {
  return day === 6;
}
function toStartOfMonth(date2) {
  const startDate = new TZDate(date2);
  startDate.setDate(1);
  startDate.setHours(0, 0, 0, 0);
  return startDate;
}
function toEndOfMonth(date2) {
  const endDate = toStartOfMonth(date2);
  endDate.setMonth(endDate.getMonth() + 1);
  endDate.setDate(endDate.getDate() - 1);
  endDate.setHours(23, 59, 59, 999);
  return endDate;
}
function getRowStyleInfo(days, narrowWeekend, startDayOfWeek, workweek) {
  const limitDaysToApplyNarrowWeekend = 5;
  const uniformWidth = 100 / days;
  const wideWidth = days > limitDaysToApplyNarrowWeekend ? 100 / (days - 1) : uniformWidth;
  let accumulatedWidth = 0;
  const dates = range_1(startDayOfWeek, WEEK_DAYS).concat(range_1(days)).slice(0, WEEK_DAYS);
  narrowWeekend = workweek ? false : narrowWeekend;
  const rowStyleInfo = dates.map((day) => {
    let width = narrowWeekend ? wideWidth : uniformWidth;
    if (days > limitDaysToApplyNarrowWeekend && narrowWeekend && isWeekend(day)) {
      width = wideWidth / 2;
    }
    const model = {
      width,
      left: accumulatedWidth
    };
    accumulatedWidth += width;
    return model;
  });
  const { length } = rowStyleInfo;
  const cellWidthMap = fill(length, fill(length, 0));
  rowStyleInfo.forEach(({ width }, index) => {
    for (let i2 = 0; i2 <= index; i2 += 1) {
      for (let j2 = index; j2 < length; j2 += 1) {
        cellWidthMap[i2][j2] += width;
      }
    }
  });
  cellWidthMap[0][length - 1] = 100;
  return {
    rowStyleInfo,
    cellWidthMap: cellWidthMap.map((widthList) => widthList.map(toPercent))
  };
}
function addMilliseconds(d2, step) {
  const date2 = clone$1(d2);
  date2.setMilliseconds(d2.getMilliseconds() + step);
  return date2;
}
function addMinutes(d2, step) {
  const date2 = clone$1(d2);
  date2.setMinutes(d2.getMinutes() + step);
  return date2;
}
function setTimeStrToDate(d2, timeStr) {
  const date2 = clone$1(d2);
  date2.setHours(...timeStr.split(":").map(Number));
  return date2;
}
function addDate(d2, step) {
  const date2 = clone$1(d2);
  date2.setDate(d2.getDate() + step);
  return date2;
}
function subtractDate(d2, steps) {
  const date2 = clone$1(d2);
  date2.setDate(d2.getDate() - steps);
  return date2;
}
function addMonths(d2, step = 1) {
  const date2 = clone$1(d2);
  if (step !== 0) {
    const dayOfMonth = date2.getDate();
    const endOfDesiredMonth = new TZDate(date2.getTime());
    endOfDesiredMonth.setMonth(date2.getMonth() + step + 1, 0);
    const daysInMonth = endOfDesiredMonth.getDate();
    if (dayOfMonth >= daysInMonth) {
      return endOfDesiredMonth;
    }
    date2.setFullYear(endOfDesiredMonth.getFullYear(), endOfDesiredMonth.getMonth(), dayOfMonth);
  }
  return date2;
}
function getDateDifference(d1, d2) {
  const _d1 = new TZDate(d1.getFullYear(), d1.getMonth(), d1.getDate()).getTime();
  const _d2 = new TZDate(d2.getFullYear(), d2.getMonth(), d2.getDate()).getTime();
  return Math.round((_d1 - _d2) / MS_PER_DAY);
}
function hasCollision(start, end, targetStart, targetEnd) {
  return targetStart > start && targetStart < end || targetEnd > start && targetEnd < end || targetStart <= start && targetEnd >= end;
}
function collidesWith({
  start,
  end,
  targetStart,
  targetEnd,
  goingDuration,
  comingDuration,
  targetGoingDuration,
  targetComingDuration,
  usingTravelTime
}) {
  if (Math.abs(end - start) < MS_EVENT_MIN_DURATION) {
    end += MS_EVENT_MIN_DURATION;
  }
  if (Math.abs(end - start) < MS_EVENT_MIN_DURATION) {
    end += MS_EVENT_MIN_DURATION;
  }
  if (usingTravelTime) {
    start -= millisecondsFrom("minute", goingDuration);
    end += millisecondsFrom("minute", comingDuration);
    targetStart -= millisecondsFrom("minute", targetGoingDuration);
    targetEnd += millisecondsFrom("minute", targetComingDuration);
  }
  return hasCollision(start, end, targetStart, targetEnd);
}
function isSameEvent(event, eventId, calendarId) {
  return event.id === eventId && event.calendarId === calendarId;
}
function idGenerator() {
  let id = 0;
  return {
    next() {
      id += 1;
      return id;
    }
  };
}
const getId = function() {
  const generator = idGenerator();
  return () => generator.next();
}();
function stamp(obj) {
  if (!obj.__fe_id) {
    obj.__fe_id = getId();
  }
  return obj.__fe_id;
}
class EventModel {
  constructor(event = {}) {
    this.id = "";
    this.calendarId = "";
    this.title = "";
    this.body = "";
    this.isAllday = false;
    this.start = new TZDate();
    this.end = new TZDate();
    this.goingDuration = 0;
    this.comingDuration = 0;
    this.location = "";
    this.attendees = [];
    this.category = "time";
    this.dueDateClass = "";
    this.recurrenceRule = "";
    this.state = "Busy";
    this.isVisible = true;
    this.isPending = false;
    this.isFocused = false;
    this.isReadOnly = false;
    this.isPrivate = false;
    this.customStyle = {};
    this.raw = null;
    this.hasMultiDates = false;
    stamp(this);
    this.init(event);
  }
  init({
    id = "",
    calendarId = "",
    title = "",
    body = "",
    isAllday: isAllday2 = false,
    start = new TZDate(),
    end = new TZDate(),
    goingDuration = 0,
    comingDuration = 0,
    location: location2 = "",
    attendees = [],
    category = "time",
    dueDateClass = "",
    recurrenceRule = "",
    state = "Busy",
    isVisible = true,
    isPending = false,
    isFocused = false,
    isReadOnly = false,
    isPrivate = false,
    color,
    backgroundColor,
    dragBackgroundColor,
    borderColor,
    customStyle = {},
    raw = null
  } = {}) {
    this.id = id;
    this.calendarId = calendarId;
    this.title = title;
    this.body = body;
    this.isAllday = category === "allday" ? true : isAllday2;
    this.goingDuration = goingDuration;
    this.comingDuration = comingDuration;
    this.location = location2;
    this.attendees = attendees;
    this.category = category;
    this.dueDateClass = dueDateClass;
    this.recurrenceRule = recurrenceRule;
    this.state = state;
    this.isVisible = isVisible;
    this.isPending = isPending;
    this.isFocused = isFocused;
    this.isReadOnly = isReadOnly;
    this.isPrivate = isPrivate;
    this.color = color;
    this.backgroundColor = backgroundColor;
    this.dragBackgroundColor = dragBackgroundColor;
    this.borderColor = borderColor;
    this.customStyle = customStyle;
    this.raw = raw;
    if (this.isAllday) {
      this.setAlldayPeriod(start, end);
    } else {
      this.setTimePeriod(start, end);
    }
    if (category === "milestone" || category === "task") {
      this.start = new TZDate(this.end);
    }
  }
  setAlldayPeriod(start, end) {
    let startedAt;
    let endedAt;
    if (isString_1(start)) {
      startedAt = parse(start.substring(0, 10));
    } else {
      startedAt = new TZDate(start || Date.now());
    }
    if (isString_1(end)) {
      endedAt = parse(end.substring(0, 10));
    } else {
      endedAt = new TZDate(end || this.start);
    }
    this.start = startedAt;
    this.start.setHours(0, 0, 0);
    this.end = endedAt || new TZDate(this.start);
    this.end.setHours(23, 59, 59);
  }
  setTimePeriod(start, end) {
    this.start = new TZDate(start || Date.now());
    this.end = new TZDate(end || this.start);
    if (!end) {
      this.end.setMinutes(this.end.getMinutes() + 30);
    }
    this.hasMultiDates = this.end.getTime() - this.start.getTime() > MS_PER_DAY;
  }
  getStarts() {
    return this.start;
  }
  getEnds() {
    return this.end;
  }
  cid() {
    return stamp(this);
  }
  equals(event) {
    if (this.id !== event.id) {
      return false;
    }
    if (this.title !== event.title) {
      return false;
    }
    if (this.body !== event.body) {
      return false;
    }
    if (this.isAllday !== event.isAllday) {
      return false;
    }
    if (compare(this.getStarts(), event.getStarts()) !== 0) {
      return false;
    }
    if (compare(this.getEnds(), event.getEnds()) !== 0) {
      return false;
    }
    if (this.color !== event.color) {
      return false;
    }
    if (this.backgroundColor !== event.backgroundColor) {
      return false;
    }
    if (this.dragBackgroundColor !== event.dragBackgroundColor) {
      return false;
    }
    if (this.borderColor !== event.borderColor) {
      return false;
    }
    return true;
  }
  duration() {
    const start = Number(this.getStarts());
    const end = Number(this.getEnds());
    let duration;
    if (this.isAllday) {
      duration = Number(toEndOfDay(end)) - Number(toStartOfDay(start));
    } else {
      duration = end - start;
    }
    return duration;
  }
  valueOf() {
    return this;
  }
  collidesWith(event, usingTravelTime = true) {
    event = event instanceof EventUIModel ? event.model : event;
    return collidesWith({
      start: Number(this.getStarts()),
      end: Number(this.getEnds()),
      targetStart: Number(event.getStarts()),
      targetEnd: Number(event.getEnds()),
      goingDuration: this.goingDuration,
      comingDuration: this.comingDuration,
      targetGoingDuration: event.goingDuration,
      targetComingDuration: event.comingDuration,
      usingTravelTime
    });
  }
  toEventObject() {
    return {
      id: this.id,
      calendarId: this.calendarId,
      __cid: this.cid(),
      title: this.title,
      body: this.body,
      isAllday: this.isAllday,
      start: this.start,
      end: this.end,
      goingDuration: this.goingDuration,
      comingDuration: this.comingDuration,
      location: this.location,
      attendees: this.attendees,
      category: this.category,
      dueDateClass: this.dueDateClass,
      recurrenceRule: this.recurrenceRule,
      state: this.state,
      isVisible: this.isVisible,
      isPending: this.isPending,
      isFocused: this.isFocused,
      isReadOnly: this.isReadOnly,
      isPrivate: this.isPrivate,
      color: this.color,
      backgroundColor: this.backgroundColor,
      dragBackgroundColor: this.dragBackgroundColor,
      borderColor: this.borderColor,
      customStyle: this.customStyle,
      raw: this.raw
    };
  }
  getColors() {
    return {
      color: this.color,
      backgroundColor: this.backgroundColor,
      dragBackgroundColor: this.dragBackgroundColor,
      borderColor: this.borderColor
    };
  }
}
EventModel.schema = {
  required: ["title"],
  dateRange: ["start", "end"]
};
function isTimeEvent({ model }) {
  const { category, isAllday: isAllday2, hasMultiDates } = model;
  return category === "time" && !isAllday2 && !hasMultiDates;
}
class Collection {
  constructor(getItemIDFn) {
    this.internalMap = /* @__PURE__ */ new Map();
    if (isFunction$2(getItemIDFn)) {
      this.getItemID = getItemIDFn;
    }
  }
  static and(...filterFns) {
    const { length } = filterFns;
    return (item) => {
      for (let i2 = 0; i2 < length; i2 += 1) {
        if (!filterFns[i2].call(null, item)) {
          return false;
        }
      }
      return true;
    };
  }
  static or(...filterFns) {
    const { length } = filterFns;
    if (!length) {
      return () => false;
    }
    return (item) => {
      let result = filterFns[0].call(null, item);
      for (let i2 = 1; i2 < length; i2 += 1) {
        result = result || filterFns[i2].call(null, item);
      }
      return result;
    };
  }
  getItemID(item) {
    var _a;
    return (_a = item == null ? void 0 : item._id) != null ? _a : "";
  }
  getFirstItem() {
    const iterator = this.internalMap.values();
    return iterator.next().value;
  }
  add(...items) {
    items.forEach((item) => {
      const id = this.getItemID(item);
      this.internalMap.set(id, item);
    });
    return this;
  }
  remove(...items) {
    const removeResult = [];
    items.forEach((item) => {
      const id = isString_1(item) || isNumber_1(item) ? item : this.getItemID(item);
      if (!this.internalMap.has(id)) {
        return;
      }
      removeResult.push(this.internalMap.get(id));
      this.internalMap["delete"](id);
    });
    return removeResult.length === 1 ? removeResult[0] : removeResult;
  }
  has(item) {
    const id = isString_1(item) || isNumber_1(item) ? item : this.getItemID(item);
    return this.internalMap.has(id);
  }
  get(item) {
    var _a;
    const id = isString_1(item) || isNumber_1(item) ? item : this.getItemID(item);
    return (_a = this.internalMap.get(id)) != null ? _a : null;
  }
  doWhenHas(id, callback) {
    const item = this.internalMap.get(id);
    if (isNil(item)) {
      return;
    }
    callback(item);
  }
  filter(filterFn) {
    const result = new Collection();
    if (this.hasOwnProperty("getItemID")) {
      result.getItemID = this.getItemID;
    }
    this.internalMap.forEach((item) => {
      if (filterFn(item) === true) {
        result.add(item);
      }
    });
    return result;
  }
  groupBy(groupByFn) {
    const result = {};
    this.internalMap.forEach((item) => {
      var _a;
      let key = isFunction$2(groupByFn) ? groupByFn(item) : item[groupByFn];
      if (isFunction$2(key)) {
        key = key.call(item);
      }
      (_a = result[key]) != null ? _a : result[key] = new Collection(this.getItemID);
      result[key].add(item);
    });
    return result;
  }
  find(findFn) {
    let result = null;
    const items = this.internalMap.values();
    let next = items.next();
    while (next.done === false) {
      if (findFn(next.value)) {
        result = next.value;
        break;
      }
      next = items.next();
    }
    return result;
  }
  sort(compareFn) {
    return this.toArray().sort(compareFn);
  }
  each(iteratee) {
    const entries2 = this.internalMap.entries();
    let next = entries2.next();
    while (next.done === false) {
      const [key, value] = next.value;
      if (iteratee(value, key) === false) {
        break;
      }
      next = entries2.next();
    }
  }
  clear() {
    this.internalMap.clear();
  }
  toArray() {
    return Array.from(this.internalMap.values());
  }
  get size() {
    return this.internalMap.size;
  }
}
function createEventCollection(...initItems) {
  const collection = new Collection((event) => event.cid());
  if (initItems.length) {
    collection.add(...initItems);
  }
  return collection;
}
function getDateRange(start, end) {
  return makeDateRange(toStartOfDay(start), toEndOfDay(end), MS_PER_DAY);
}
function isAllday(event) {
  return event.isAllday || event.category === "time" && Number(event.end) - Number(event.start) > MS_PER_DAY;
}
function filterByCategory(uiModel) {
  const { model } = uiModel;
  if (isAllday(model)) {
    return "allday";
  }
  return model.category;
}
function addToMatrix(idsOfDay, event) {
  const containDates = getDateRange(event.getStarts(), event.getEnds());
  containDates.forEach((date2) => {
    const ymd = toFormat(date2, "YYYYMMDD");
    const matrix = idsOfDay[ymd] = idsOfDay[ymd] || [];
    matrix.push(event.cid());
  });
}
function removeFromMatrix(idsOfDay, event) {
  const modelID = event.cid();
  Object.values(idsOfDay).forEach((ids) => {
    const index = ids.indexOf(modelID);
    if (~index) {
      ids.splice(index, 1);
    }
  });
}
function addEvent(calendarData, event) {
  calendarData.events.add(event);
  addToMatrix(calendarData.idsOfDay, event);
  return event;
}
function createEvent(calendarData, eventData) {
  const event = new EventModel(eventData);
  return addEvent(calendarData, event);
}
function createEvents(calendarData, events = []) {
  return events.map((eventData) => createEvent(calendarData, eventData));
}
function updateEvent(calendarData, eventId, calendarId, eventData) {
  const { idsOfDay } = calendarData;
  const event = calendarData.events.find((item) => isSameEvent(item, eventId, calendarId));
  if (!event) {
    return false;
  }
  event.init(__spreadValues(__spreadValues({}, event), eventData));
  removeFromMatrix(idsOfDay, event);
  addToMatrix(idsOfDay, event);
  return true;
}
function deleteEvent(calendarData, event) {
  removeFromMatrix(calendarData.idsOfDay, event);
  calendarData.events.remove(event);
  return event;
}
function clearEvents(calendarData) {
  calendarData.idsOfDay = {};
  calendarData.events.clear();
}
function createCalendarSlice(calendars = []) {
  return {
    calendar: {
      calendars,
      events: createEventCollection(),
      idsOfDay: {}
    }
  };
}
function createCalendarDispatchers(set) {
  return {
    createEvents: (events) => set(
      produce((state) => {
        createEvents(state.calendar, events);
      })
    ),
    updateEvent: ({ event, eventData }) => set(
      produce((state) => {
        updateEvent(
          state.calendar,
          event.id,
          event.calendarId,
          eventData
        );
      })
    ),
    deleteEvent: (event) => set(
      produce((state) => {
        deleteEvent(state.calendar, event);
      })
    ),
    clearEvents: () => set(
      produce((state) => {
        clearEvents(state.calendar);
      })
    ),
    setCalendars: (calendars) => set(
      produce((state) => {
        state.calendar.calendars = calendars;
      })
    ),
    setCalendarColor: (calendarId, colorOptions) => set(
      produce((state) => {
        const calendars = state.calendar.calendars.map((calendar) => {
          if (calendar.id === calendarId) {
            return __spreadValues(__spreadValues({}, calendar), colorOptions);
          }
          return calendar;
        });
        const events = state.calendar.events.toArray().map((event) => {
          var _a, _b, _c, _d;
          if (event.calendarId === calendarId) {
            event.color = (_a = colorOptions.color) != null ? _a : event.color;
            event.backgroundColor = (_b = colorOptions.backgroundColor) != null ? _b : event.backgroundColor;
            event.borderColor = (_c = colorOptions.borderColor) != null ? _c : event.borderColor;
            event.dragBackgroundColor = (_d = colorOptions.dragBackgroundColor) != null ? _d : event.dragBackgroundColor;
          }
          return event;
        });
        const collection = createEventCollection(...events);
        state.calendar.calendars = calendars;
        state.calendar.events = collection;
      })
    ),
    setCalendarVisibility: (calendarIds, isVisible) => set(
      produce((state) => {
        const events = state.calendar.events.toArray();
        state.calendar.events = createEventCollection(
          ...events.map((event) => {
            if (calendarIds.includes(event.calendarId)) {
              event.isVisible = isVisible;
            }
            return event;
          })
        );
      })
    )
  };
}
var DraggingState = /* @__PURE__ */ ((DraggingState2) => {
  DraggingState2[DraggingState2["IDLE"] = 0] = "IDLE";
  DraggingState2[DraggingState2["INIT"] = 1] = "INIT";
  DraggingState2[DraggingState2["DRAGGING"] = 2] = "DRAGGING";
  DraggingState2[DraggingState2["CANCELED"] = 3] = "CANCELED";
  return DraggingState2;
})(DraggingState || {});
function createDndSlice() {
  return {
    dnd: {
      draggingItemType: null,
      draggingState: 0,
      initX: null,
      initY: null,
      x: null,
      y: null,
      draggingEventUIModel: null
    }
  };
}
function createDndDispatchers(set) {
  return {
    initDrag: (initState) => {
      set(
        produce((state) => {
          state.dnd = __spreadProps(__spreadValues(__spreadValues({}, state.dnd), initState), {
            draggingState: 1
          });
        })
      );
    },
    setDragging: (newState) => {
      set(
        produce((state) => {
          state.dnd = __spreadProps(__spreadValues(__spreadValues({}, state.dnd), newState), {
            draggingState: 2
          });
        })
      );
    },
    cancelDrag: () => {
      set(
        produce((state) => {
          state.dnd = createDndSlice().dnd;
          state.dnd.draggingState = 3;
        })
      );
    },
    reset: () => {
      set(
        produce((state) => {
          state.dnd = createDndSlice().dnd;
        })
      );
    },
    setDraggingEventUIModel: (eventUIModel) => {
      set(
        produce((state) => {
          var _a;
          state.dnd.draggingEventUIModel = (_a = eventUIModel == null ? void 0 : eventUIModel.clone()) != null ? _a : null;
        })
      );
    }
  };
}
function createGridSelectionSlice() {
  return {
    gridSelection: {
      dayGridMonth: null,
      dayGridWeek: null,
      timeGrid: null,
      accumulated: {
        dayGridMonth: []
      }
    }
  };
}
function createGridSelectionDispatchers(set) {
  return {
    setGridSelection: (type, gridSelection) => {
      set(
        produce((state) => {
          state.gridSelection[type] = gridSelection;
        })
      );
    },
    addGridSelection: (type, gridSelection) => {
      set(
        produce((state) => {
          if (type === "dayGridMonth" && gridSelection) {
            state.gridSelection.accumulated[type] = [
              ...state.gridSelection.accumulated[type],
              gridSelection
            ];
            state.gridSelection.dayGridMonth = null;
          }
        })
      );
    },
    clearAll: () => set(
      produce((state) => {
        state.gridSelection = createGridSelectionSlice().gridSelection;
      })
    )
  };
}
const DEFAULT_RESIZER_LENGTH = 3;
const DEFAULT_DUPLICATE_EVENT_CID = -1;
function getRestPanelHeight(dayGridRowsState, lastPanelType, initHeight) {
  return Object.keys(dayGridRowsState).reduce((acc, rowName) => {
    if (rowName === lastPanelType) {
      return acc;
    }
    return acc - dayGridRowsState[rowName].height - DEFAULT_RESIZER_LENGTH;
  }, initHeight);
}
function createWeekViewLayoutSlice() {
  return {
    layout: 500,
    weekViewLayout: {
      lastPanelType: null,
      dayGridRows: {},
      selectedDuplicateEventCid: DEFAULT_DUPLICATE_EVENT_CID
    }
  };
}
function createWeekViewLayoutDispatchers(set) {
  return {
    setLastPanelType: (type) => {
      set(
        produce((state) => {
          state.weekViewLayout.lastPanelType = type;
          if (type) {
            state.weekViewLayout.dayGridRows[type].height = getRestPanelHeight(
              state.weekViewLayout.dayGridRows,
              type,
              state.layout
            );
          }
        })
      );
    },
    updateLayoutHeight: (height) => set(
      produce((state) => {
        const { lastPanelType } = state.weekViewLayout;
        state.layout = height;
        if (lastPanelType) {
          state.weekViewLayout.dayGridRows[lastPanelType].height = getRestPanelHeight(
            state.weekViewLayout.dayGridRows,
            lastPanelType,
            height
          );
        }
      })
    ),
    updateDayGridRowHeight: ({ rowName, height }) => set(
      produce((state) => {
        const { lastPanelType } = state.weekViewLayout;
        state.weekViewLayout.dayGridRows[rowName] = { height };
        if (lastPanelType) {
          state.weekViewLayout.dayGridRows[lastPanelType].height = getRestPanelHeight(
            state.weekViewLayout.dayGridRows,
            lastPanelType,
            state.layout
          );
        }
      })
    ),
    updateDayGridRowHeightByDiff: ({ rowName, diff }) => set(
      produce((state) => {
        var _a, _b, _c;
        const { lastPanelType } = state.weekViewLayout;
        const height = (_c = (_b = (_a = state.weekViewLayout.dayGridRows) == null ? void 0 : _a[rowName]) == null ? void 0 : _b.height) != null ? _c : DEFAULT_PANEL_HEIGHT;
        state.weekViewLayout.dayGridRows[rowName] = { height: height + diff };
        if (lastPanelType) {
          state.weekViewLayout.dayGridRows[lastPanelType].height = getRestPanelHeight(
            state.weekViewLayout.dayGridRows,
            lastPanelType,
            state.layout
          );
        }
      })
    ),
    setSelectedDuplicateEventCid: (cid) => set(
      produce((state) => {
        state.weekViewLayout.selectedDuplicateEventCid = cid != null ? cid : DEFAULT_DUPLICATE_EVENT_CID;
      })
    )
  };
}
function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
const DEFAULT_DAY_NAMES = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
const getDayName = (dayIndex) => {
  return DEFAULT_DAY_NAMES[dayIndex];
};
function getDayNames(days, weekDayNamesOption) {
  return days.map((day) => {
    const dayIndex = day.getDay();
    const dayName = weekDayNamesOption.length > 0 ? weekDayNamesOption[dayIndex] : capitalize(getDayName(dayIndex));
    return {
      date: day.getDate(),
      day: day.getDay(),
      dayName,
      isToday: true,
      renderDate: "date",
      dateInstance: day
    };
  });
}
function initializeCollapseDuplicateEvents(options) {
  if (!options) {
    return false;
  }
  const initialCollapseDuplicateEvents = {
    getDuplicateEvents: (targetEvent, events) => events.filter(
      (event) => event.title === targetEvent.title && compare(event.start, targetEvent.start) === 0 && compare(event.end, targetEvent.end) === 0
    ).sort((a2, b2) => a2.calendarId > b2.calendarId ? 1 : -1),
    getMainEvent: (events) => last(events)
  };
  if (isBoolean_1(options)) {
    return initialCollapseDuplicateEvents;
  }
  return __spreadValues(__spreadValues({}, initialCollapseDuplicateEvents), options);
}
function initializeWeekOptions(weekOptions = {}) {
  const week = __spreadValues({
    startDayOfWeek: Day$2.SUN,
    dayNames: [],
    narrowWeekend: false,
    workweek: false,
    showNowIndicator: true,
    showTimezoneCollapseButton: false,
    timezonesCollapsed: false,
    hourStart: 0,
    hourEnd: 24,
    eventView: true,
    taskView: true,
    collapseDuplicateEvents: false
  }, weekOptions);
  week.collapseDuplicateEvents = initializeCollapseDuplicateEvents(week.collapseDuplicateEvents);
  return week;
}
function initializeTimezoneOptions(timezoneOptions = {}) {
  return __spreadValues({
    zones: []
  }, timezoneOptions);
}
function initializeMonthOptions(monthOptions = {}) {
  const month = __spreadValues({
    dayNames: [],
    visibleWeeksCount: 0,
    workweek: false,
    narrowWeekend: false,
    startDayOfWeek: Day$2.SUN,
    isAlways6Weeks: true,
    visibleEventCount: 6
  }, monthOptions);
  if (month.dayNames.length === 0) {
    month.dayNames = DEFAULT_DAY_NAMES.slice();
  }
  return month;
}
function initializeGridSelectionOptions(options) {
  if (isBoolean_1(options)) {
    return {
      enableDblClick: options,
      enableClick: options
    };
  }
  return __spreadValues({
    enableDblClick: true,
    enableClick: true
  }, options);
}
const initialEventFilter = (event) => !!event.isVisible;
function createOptionsSlice(options = {}) {
  var _a, _b, _c, _d, _e, _f;
  return {
    options: {
      defaultView: (_a = options.defaultView) != null ? _a : "week",
      useFormPopup: (_b = options.useFormPopup) != null ? _b : false,
      useDetailPopup: (_c = options.useDetailPopup) != null ? _c : false,
      isReadOnly: (_d = options.isReadOnly) != null ? _d : false,
      week: initializeWeekOptions(options.week),
      month: initializeMonthOptions(options.month),
      gridSelection: initializeGridSelectionOptions(options.gridSelection),
      usageStatistics: (_e = options.usageStatistics) != null ? _e : true,
      eventFilter: (_f = options.eventFilter) != null ? _f : initialEventFilter,
      timezone: initializeTimezoneOptions(options.timezone),
      allOptions: options
    }
  };
}
function createOptionsDispatchers(set) {
  return {
    setOptions: (newOptions = {}) => set(
      produce((state) => {
        var _a;
        if (newOptions.gridSelection) {
          newOptions.gridSelection = initializeGridSelectionOptions(newOptions.gridSelection);
        }
        if ((_a = newOptions.week) == null ? void 0 : _a.collapseDuplicateEvents) {
          newOptions.week.collapseDuplicateEvents = initializeCollapseDuplicateEvents(
            newOptions.week.collapseDuplicateEvents
          );
        }
        mergeObject(state.options, newOptions);
      })
    )
  };
}
var PopupType = /* @__PURE__ */ ((PopupType2) => {
  PopupType2["SeeMore"] = "seeMore";
  PopupType2["Form"] = "form";
  PopupType2["Detail"] = "detail";
  return PopupType2;
})(PopupType || {});
function createPopupSlice() {
  return {
    popup: {
      ["seeMore"]: null,
      ["form"]: null,
      ["detail"]: null
    }
  };
}
function createPopupDispatchers(set) {
  return {
    showSeeMorePopup: (param) => set(
      produce((state) => {
        state.popup["seeMore"] = param;
        state.popup["form"] = null;
        state.popup["detail"] = null;
      })
    ),
    showFormPopup: (param) => set(
      produce((state) => {
        state.popup["form"] = param;
        state.popup["seeMore"] = null;
        state.popup["detail"] = null;
      })
    ),
    showDetailPopup: (param, isOpenedInSeeMorePopup) => set(
      produce((state) => {
        state.popup["detail"] = param;
        state.popup["form"] = null;
        if (!isOpenedInSeeMorePopup) {
          state.popup["seeMore"] = null;
        }
      })
    ),
    hideSeeMorePopup: () => set(
      produce((state) => {
        state.popup["seeMore"] = null;
      })
    ),
    hideFormPopup: () => set(
      produce((state) => {
        state.popup["form"] = null;
      })
    ),
    hideDetailPopup: () => set(
      produce((state) => {
        state.popup["detail"] = null;
      })
    ),
    hideAllPopup: () => set(
      produce((state) => {
        state.popup["seeMore"] = null;
        state.popup["form"] = null;
        state.popup["detail"] = null;
      })
    )
  };
}
const noop = () => {
};
const CSS_AUTO_REGEX = /^auto$|^$|%/;
function getStyle(el, style) {
  let value = el.style[style];
  if ((!value || value === "auto") && document.defaultView) {
    const css = document.defaultView.getComputedStyle(el, null);
    value = css ? css[style] : null;
  }
  return value === "auto" ? null : value;
}
function invalidateSizeValue(value) {
  if (isString_1(value)) {
    return CSS_AUTO_REGEX.test(value);
  }
  return value === null;
}
function getSize(el) {
  const w2 = getStyle(el, "width");
  const h2 = getStyle(el, "height");
  if ((invalidateSizeValue(w2) || invalidateSizeValue(h2)) && el.getBoundingClientRect) {
    const { width, height } = el.getBoundingClientRect();
    return {
      width: width || el.offsetWidth,
      height: height || el.offsetHeight
    };
  }
  return {
    width: parseFloat(w2 != null ? w2 : "0"),
    height: parseFloat(h2 != null ? h2 : "0")
  };
}
const ElementClass = typeof Element === "undefined" ? noop : Element;
const elProto = ElementClass.prototype;
elProto.matches || elProto.webkitMatchesSelector || elProto.msMatchesSelector || function(selector) {
  return Array.from(document.querySelectorAll(selector)).includes(this);
};
function stripTags(str) {
  return str.replace(/<([^>]+)>/gi, "");
}
const SIXTY_MINUTES = 60;
const templates = {
  milestone(model) {
    const classNames2 = cls("icon", "ic-milestone");
    return /* @__PURE__ */ y$3(_$3, null, /* @__PURE__ */ y$3("span", {
      className: classNames2
    }), /* @__PURE__ */ y$3("span", {
      style: {
        background: model.backgroundColor
      }
    }, stripTags(model.title)));
  },
  milestoneTitle() {
    return /* @__PURE__ */ y$3("span", {
      className: cls("left-content")
    }, "Milestone");
  },
  task(model) {
    return `#${model.title}`;
  },
  taskTitle() {
    return /* @__PURE__ */ y$3("span", {
      className: cls("left-content")
    }, "Task");
  },
  alldayTitle() {
    return /* @__PURE__ */ y$3("span", {
      className: cls("left-content")
    }, "All Day");
  },
  allday(model) {
    return stripTags(model.title);
  },
  time(model) {
    const { start, title } = model;
    if (start) {
      return /* @__PURE__ */ y$3("span", null, /* @__PURE__ */ y$3("strong", null, toFormat(start, "HH:mm")), "\xA0", /* @__PURE__ */ y$3("span", null, stripTags(title)));
    }
    return stripTags(title);
  },
  goingDuration(model) {
    const { goingDuration } = model;
    const hour = Math.floor(goingDuration / SIXTY_MINUTES);
    const minutes = goingDuration % SIXTY_MINUTES;
    return `GoingTime ${leadingZero(hour, 2)}:${leadingZero(minutes, 2)}`;
  },
  comingDuration(model) {
    const { comingDuration } = model;
    const hour = Math.floor(comingDuration / SIXTY_MINUTES);
    const minutes = comingDuration % SIXTY_MINUTES;
    return `ComingTime ${leadingZero(hour, 2)}:${leadingZero(minutes, 2)}`;
  },
  monthMoreTitleDate(moreTitle) {
    const { date: date2, day } = moreTitle;
    const classNameDay = cls("more-title-date");
    const classNameDayLabel = cls("more-title-day");
    const dayName = capitalize(getDayName(day));
    return /* @__PURE__ */ y$3(_$3, null, /* @__PURE__ */ y$3("span", {
      className: classNameDay
    }, date2), /* @__PURE__ */ y$3("span", {
      className: classNameDayLabel
    }, dayName));
  },
  monthMoreClose() {
    return "";
  },
  monthGridHeader(model) {
    const date2 = parseInt(model.date.split("-")[2], 10);
    const classNames2 = cls("weekday-grid-date", { "weekday-grid-date-decorator": model.isToday });
    return /* @__PURE__ */ y$3("span", {
      className: classNames2
    }, date2);
  },
  monthGridHeaderExceed(hiddenEvents) {
    const className2 = cls("weekday-grid-more-events");
    return /* @__PURE__ */ y$3("span", {
      className: className2
    }, hiddenEvents, " more");
  },
  monthGridFooter(_model) {
    return "";
  },
  monthGridFooterExceed(_hiddenEvents) {
    return "";
  },
  monthDayName(model) {
    return model.label;
  },
  weekDayName(model) {
    const classDate = cls("day-name__date");
    const className2 = cls("day-name__name");
    return /* @__PURE__ */ y$3(_$3, null, /* @__PURE__ */ y$3("span", {
      className: classDate
    }, model.date), "\xA0\xA0", /* @__PURE__ */ y$3("span", {
      className: className2
    }, model.dayName));
  },
  weekGridFooterExceed(hiddenEvents) {
    return `+${hiddenEvents}`;
  },
  collapseBtnTitle() {
    const className2 = cls("collapse-btn-icon");
    return /* @__PURE__ */ y$3("span", {
      className: className2
    });
  },
  timezoneDisplayLabel({ displayLabel, timezoneOffset }) {
    if (isNil(displayLabel) && isPresent(timezoneOffset)) {
      const sign = timezoneOffset < 0 ? "-" : "+";
      const hours = Math.abs(timezoneOffset / SIXTY_MINUTES);
      const minutes = Math.abs(timezoneOffset % SIXTY_MINUTES);
      return `GMT${sign}${leadingZero(hours, 2)}:${leadingZero(minutes, 2)}`;
    }
    return displayLabel;
  },
  timegridDisplayPrimaryTime(props) {
    const { time } = props;
    return toFormat(time, "hh tt");
  },
  timegridDisplayTime(props) {
    const { time } = props;
    return toFormat(time, "HH:mm");
  },
  timegridNowIndicatorLabel(timezone) {
    const { time, format = "HH:mm" } = timezone;
    return toFormat(time, format);
  },
  popupIsAllday() {
    return "All day";
  },
  popupStateFree() {
    return "Free";
  },
  popupStateBusy() {
    return "Busy";
  },
  titlePlaceholder() {
    return "Subject";
  },
  locationPlaceholder() {
    return "Location";
  },
  startDatePlaceholder() {
    return "Start date";
  },
  endDatePlaceholder() {
    return "End date";
  },
  popupSave() {
    return "Save";
  },
  popupUpdate() {
    return "Update";
  },
  popupEdit() {
    return "Edit";
  },
  popupDelete() {
    return "Delete";
  },
  popupDetailTitle({ title }) {
    return title;
  },
  popupDetailDate({ isAllday: isAllday2, start, end }) {
    const dayFormat = "DD-MM-YYYY";
    const timeFormat = "hh:mm tt";
    const detailFormat = `${dayFormat} ${timeFormat}`;
    const startDate = toFormat(start, isAllday2 ? dayFormat : timeFormat);
    const endDateFormat = isSameDate(start, end) ? timeFormat : detailFormat;
    if (isAllday2) {
      return `${startDate}${isSameDate(start, end) ? "" : ` - ${toFormat(end, dayFormat)}`}`;
    }
    return `${toFormat(start, detailFormat)} - ${toFormat(end, endDateFormat)}`;
  },
  popupDetailLocation({ location: location2 }) {
    return location2;
  },
  popupDetailAttendees({ attendees = [] }) {
    return attendees.join(", ");
  },
  popupDetailState({ state }) {
    return state || "Busy";
  },
  popupDetailRecurrenceRule({ recurrenceRule }) {
    return recurrenceRule;
  },
  popupDetailBody({ body }) {
    return body;
  }
};
function createTemplateSlice(templateConfig = {}) {
  return {
    template: __spreadValues(__spreadValues({}, templates), templateConfig)
  };
}
function createTemplateDispatchers(set) {
  return {
    setTemplate: (template) => set(
      produce((state) => {
        state.template = __spreadValues(__spreadValues({}, state.template), template);
      })
    )
  };
}
function createViewSlice(initialView = "week") {
  const renderDate = new TZDate();
  renderDate.setHours(0, 0, 0, 0);
  return {
    view: {
      currentView: initialView,
      renderDate
    }
  };
}
function createViewDispatchers(set) {
  return {
    changeView: (nextView) => set(
      produce((state) => {
        state.view.currentView = nextView;
      })
    ),
    setRenderDate: (date2) => set(
      produce((state) => {
        state.view.renderDate = toStartOfDay(date2);
      })
    )
  };
}
const isSSR = isUndefined_1(window) || !window.navigator;
const useIsomorphicLayoutEffect = isSSR ? p$2 : y$2;
function createStoreContext() {
  const StoreContext = F$3(null);
  function StoreProvider2({
    children,
    store
  }) {
    return y$3(StoreContext.Provider, { value: store, children });
  }
  const useStore2 = (selector, equalityFn = Object.is) => {
    const storeCtx = q$2(StoreContext);
    if (isNil(storeCtx)) {
      throw new Error("StoreProvider is not found");
    }
    const [, notify] = s$2((notifyCount) => notifyCount + 1, 0);
    const state = storeCtx.getState();
    const stateRef = _$2(state);
    const selectorRef = _$2(selector);
    const equalityFnRef = _$2(equalityFn);
    const hasErrorRef = _$2(false);
    const currentSliceRef = _$2();
    if (isUndefined_1(currentSliceRef.current)) {
      currentSliceRef.current = selector(state);
    }
    let newStateSlice;
    let hasNewStateSlice = false;
    const shouldGetNewSlice = stateRef.current !== state || selectorRef.current !== selector || equalityFnRef.current !== equalityFn || hasErrorRef.current;
    if (shouldGetNewSlice) {
      newStateSlice = selector(state);
      hasNewStateSlice = !equalityFn(currentSliceRef.current, newStateSlice);
    }
    useIsomorphicLayoutEffect(() => {
      if (hasNewStateSlice) {
        currentSliceRef.current = newStateSlice;
      }
      stateRef.current = state;
      selectorRef.current = selector;
      equalityFnRef.current = equalityFn;
      hasErrorRef.current = false;
    });
    const stateBeforeSubscriptionRef = _$2(state);
    useIsomorphicLayoutEffect(() => {
      const listener = () => {
        try {
          const nextState = storeCtx.getState();
          const nextStateSlice = selectorRef.current(nextState);
          const shouldUpdateState = !equalityFnRef.current(
            currentSliceRef.current,
            nextStateSlice
          );
          if (shouldUpdateState) {
            stateRef.current = nextState;
            currentSliceRef.current = newStateSlice;
            notify();
          }
        } catch (e2) {
          console.error("[toastui-calendar] failed to update state", e2 == null ? void 0 : e2.message);
          hasErrorRef.current = true;
          notify();
        }
      };
      const unsubscribe = storeCtx.subscribe(listener);
      if (storeCtx.getState() !== stateBeforeSubscriptionRef.current) {
        listener();
      }
      return unsubscribe;
    }, []);
    return hasNewStateSlice ? newStateSlice : currentSliceRef.current;
  };
  const useInternalStore2 = () => {
    const storeCtx = q$2(StoreContext);
    if (isNil(storeCtx)) {
      throw new Error("StoreProvider is not found");
    }
    return F$2(() => storeCtx, [storeCtx]);
  };
  return {
    StoreProvider: StoreProvider2,
    useStore: useStore2,
    useInternalStore: useInternalStore2
  };
}
function createStore(storeCreator2) {
  let state;
  const listeners = /* @__PURE__ */ new Set();
  const setState = (partialStateCreator) => {
    const nextState = partialStateCreator(state);
    if (nextState !== state) {
      const previousState = state;
      state = __spreadValues(__spreadValues({}, state), nextState);
      listeners.forEach((listener) => listener(state, previousState));
    }
  };
  const getState = () => state;
  const subscribe = (listener, selector, equalityFn) => {
    let _listener = listener;
    if (selector) {
      let currentSlice = selector(state);
      const _equalityFn = equalityFn != null ? equalityFn : Object.is;
      _listener = () => {
        const nextSlice = selector(state);
        if (!_equalityFn(currentSlice, nextSlice)) {
          const previousSlice = currentSlice;
          currentSlice = nextSlice;
          listener(currentSlice, previousSlice);
        }
      };
    }
    listeners.add(_listener);
    return () => listeners.delete(_listener);
  };
  const clearListeners = () => listeners.clear();
  const internal = { setState, getState, subscribe, clearListeners };
  state = storeCreator2(setState, getState, internal);
  return internal;
}
const storeCreator = (options) => (set) => {
  return __spreadProps(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues({}, createOptionsSlice(options)), createTemplateSlice(options.template)), createPopupSlice()), createWeekViewLayoutSlice()), createCalendarSlice(options.calendars)), createViewSlice(options.defaultView)), createDndSlice()), createGridSelectionSlice()), {
    dispatch: {
      options: createOptionsDispatchers(set),
      popup: createPopupDispatchers(set),
      weekViewLayout: createWeekViewLayoutDispatchers(set),
      calendar: createCalendarDispatchers(set),
      view: createViewDispatchers(set),
      dnd: createDndDispatchers(set),
      gridSelection: createGridSelectionDispatchers(set),
      template: createTemplateDispatchers(set)
    }
  });
};
const initCalendarStore = (options = {}) => createStore(storeCreator(options));
const { StoreProvider, useStore, useInternalStore } = createStoreContext();
function useDispatch(group) {
  return useStore(
    T$1(
      (state) => {
        if (!group) {
          return state.dispatch;
        }
        return state.dispatch[group];
      },
      [group]
    )
  );
}
function topLevelStateSelector(group) {
  return (state) => state[group];
}
const calendarSelector = topLevelStateSelector("calendar");
const weekViewLayoutSelector = topLevelStateSelector(
  "weekViewLayout"
);
const templateSelector = topLevelStateSelector("template");
const viewSelector = topLevelStateSelector("view");
const optionsSelector = topLevelStateSelector("options");
const dndSelector = topLevelStateSelector("dnd");
/*! @license DOMPurify 3.2.5 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.2.5/LICENSE */
const {
  entries,
  setPrototypeOf,
  isFrozen,
  getPrototypeOf,
  getOwnPropertyDescriptor
} = Object;
let {
  freeze,
  seal,
  create
} = Object;
let {
  apply,
  construct
} = typeof Reflect !== "undefined" && Reflect;
if (!freeze) {
  freeze = function freeze2(x2) {
    return x2;
  };
}
if (!seal) {
  seal = function seal2(x2) {
    return x2;
  };
}
if (!apply) {
  apply = function apply2(fun, thisValue, args) {
    return fun.apply(thisValue, args);
  };
}
if (!construct) {
  construct = function construct2(Func, args) {
    return new Func(...args);
  };
}
const arrayForEach = unapply(Array.prototype.forEach);
const arrayLastIndexOf = unapply(Array.prototype.lastIndexOf);
const arrayPop = unapply(Array.prototype.pop);
const arrayPush = unapply(Array.prototype.push);
const arraySplice = unapply(Array.prototype.splice);
const stringToLowerCase = unapply(String.prototype.toLowerCase);
const stringToString = unapply(String.prototype.toString);
const stringMatch = unapply(String.prototype.match);
const stringReplace = unapply(String.prototype.replace);
const stringIndexOf = unapply(String.prototype.indexOf);
const stringTrim = unapply(String.prototype.trim);
const objectHasOwnProperty = unapply(Object.prototype.hasOwnProperty);
const regExpTest = unapply(RegExp.prototype.test);
const typeErrorCreate = unconstruct(TypeError);
function unapply(func) {
  return function(thisArg) {
    if (thisArg instanceof RegExp) {
      thisArg.lastIndex = 0;
    }
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }
    return apply(func, thisArg, args);
  };
}
function unconstruct(func) {
  return function() {
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }
    return construct(func, args);
  };
}
function addToSet(set, array2) {
  let transformCaseFunc = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : stringToLowerCase;
  if (setPrototypeOf) {
    setPrototypeOf(set, null);
  }
  let l2 = array2.length;
  while (l2--) {
    let element = array2[l2];
    if (typeof element === "string") {
      const lcElement = transformCaseFunc(element);
      if (lcElement !== element) {
        if (!isFrozen(array2)) {
          array2[l2] = lcElement;
        }
        element = lcElement;
      }
    }
    set[element] = true;
  }
  return set;
}
function cleanArray(array2) {
  for (let index = 0; index < array2.length; index++) {
    const isPropertyExist = objectHasOwnProperty(array2, index);
    if (!isPropertyExist) {
      array2[index] = null;
    }
  }
  return array2;
}
function clone(object) {
  const newObject = create(null);
  for (const [property, value] of entries(object)) {
    const isPropertyExist = objectHasOwnProperty(object, property);
    if (isPropertyExist) {
      if (Array.isArray(value)) {
        newObject[property] = cleanArray(value);
      } else if (value && typeof value === "object" && value.constructor === Object) {
        newObject[property] = clone(value);
      } else {
        newObject[property] = value;
      }
    }
  }
  return newObject;
}
function lookupGetter(object, prop) {
  while (object !== null) {
    const desc = getOwnPropertyDescriptor(object, prop);
    if (desc) {
      if (desc.get) {
        return unapply(desc.get);
      }
      if (typeof desc.value === "function") {
        return unapply(desc.value);
      }
    }
    object = getPrototypeOf(object);
  }
  function fallbackValue() {
    return null;
  }
  return fallbackValue;
}
const html$1 = freeze(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "section", "select", "shadow", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]);
const svg$1 = freeze(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]);
const svgFilters = freeze(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]);
const svgDisallowed = freeze(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]);
const mathMl$1 = freeze(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]);
const mathMlDisallowed = freeze(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]);
const text = freeze(["#text"]);
const html = freeze(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "pattern", "placeholder", "playsinline", "popover", "popovertarget", "popovertargetaction", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "wrap", "xmlns", "slot"]);
const svg = freeze(["accent-height", "accumulate", "additive", "alignment-baseline", "amplitude", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "exponent", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "intercept", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "slope", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "tablevalues", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]);
const mathMl = freeze(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]);
const xml = freeze(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]);
const MUSTACHE_EXPR = seal(/\{\{[\w\W]*|[\w\W]*\}\}/gm);
const ERB_EXPR = seal(/<%[\w\W]*|[\w\W]*%>/gm);
const TMPLIT_EXPR = seal(/\$\{[\w\W]*/gm);
const DATA_ATTR = seal(/^data-[\-\w.\u00B7-\uFFFF]+$/);
const ARIA_ATTR = seal(/^aria-[\-\w]+$/);
const IS_ALLOWED_URI = seal(
  /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
);
const IS_SCRIPT_OR_DATA = seal(/^(?:\w+script|data):/i);
const ATTR_WHITESPACE = seal(
  /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
);
const DOCTYPE_NAME = seal(/^html$/i);
const CUSTOM_ELEMENT = seal(/^[a-z][.\w]*(-[.\w]+)+$/i);
var EXPRESSIONS = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  ARIA_ATTR,
  ATTR_WHITESPACE,
  CUSTOM_ELEMENT,
  DATA_ATTR,
  DOCTYPE_NAME,
  ERB_EXPR,
  IS_ALLOWED_URI,
  IS_SCRIPT_OR_DATA,
  MUSTACHE_EXPR,
  TMPLIT_EXPR
});
const NODE_TYPE = {
  element: 1,
  attribute: 2,
  text: 3,
  cdataSection: 4,
  entityReference: 5,
  entityNode: 6,
  progressingInstruction: 7,
  comment: 8,
  document: 9,
  documentType: 10,
  documentFragment: 11,
  notation: 12
};
const getGlobal = function getGlobal2() {
  return typeof window === "undefined" ? null : window;
};
const _createTrustedTypesPolicy = function _createTrustedTypesPolicy2(trustedTypes, purifyHostElement) {
  if (typeof trustedTypes !== "object" || typeof trustedTypes.createPolicy !== "function") {
    return null;
  }
  let suffix = null;
  const ATTR_NAME = "data-tt-policy-suffix";
  if (purifyHostElement && purifyHostElement.hasAttribute(ATTR_NAME)) {
    suffix = purifyHostElement.getAttribute(ATTR_NAME);
  }
  const policyName = "dompurify" + (suffix ? "#" + suffix : "");
  try {
    return trustedTypes.createPolicy(policyName, {
      createHTML(html2) {
        return html2;
      },
      createScriptURL(scriptUrl) {
        return scriptUrl;
      }
    });
  } catch (_2) {
    console.warn("TrustedTypes policy " + policyName + " could not be created.");
    return null;
  }
};
const _createHooksMap = function _createHooksMap2() {
  return {
    afterSanitizeAttributes: [],
    afterSanitizeElements: [],
    afterSanitizeShadowDOM: [],
    beforeSanitizeAttributes: [],
    beforeSanitizeElements: [],
    beforeSanitizeShadowDOM: [],
    uponSanitizeAttribute: [],
    uponSanitizeElement: [],
    uponSanitizeShadowNode: []
  };
};
function createDOMPurify() {
  let window2 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : getGlobal();
  const DOMPurify = (root) => createDOMPurify(root);
  DOMPurify.version = "3.2.5";
  DOMPurify.removed = [];
  if (!window2 || !window2.document || window2.document.nodeType !== NODE_TYPE.document || !window2.Element) {
    DOMPurify.isSupported = false;
    return DOMPurify;
  }
  let {
    document: document2
  } = window2;
  const originalDocument = document2;
  const currentScript = originalDocument.currentScript;
  const {
    DocumentFragment,
    HTMLTemplateElement,
    Node,
    Element: Element2,
    NodeFilter,
    NamedNodeMap = window2.NamedNodeMap || window2.MozNamedAttrMap,
    HTMLFormElement,
    DOMParser,
    trustedTypes
  } = window2;
  const ElementPrototype = Element2.prototype;
  const cloneNode = lookupGetter(ElementPrototype, "cloneNode");
  const remove = lookupGetter(ElementPrototype, "remove");
  const getNextSibling = lookupGetter(ElementPrototype, "nextSibling");
  const getChildNodes = lookupGetter(ElementPrototype, "childNodes");
  const getParentNode = lookupGetter(ElementPrototype, "parentNode");
  if (typeof HTMLTemplateElement === "function") {
    const template = document2.createElement("template");
    if (template.content && template.content.ownerDocument) {
      document2 = template.content.ownerDocument;
    }
  }
  let trustedTypesPolicy;
  let emptyHTML = "";
  const {
    implementation,
    createNodeIterator,
    createDocumentFragment,
    getElementsByTagName
  } = document2;
  const {
    importNode
  } = originalDocument;
  let hooks = _createHooksMap();
  DOMPurify.isSupported = typeof entries === "function" && typeof getParentNode === "function" && implementation && implementation.createHTMLDocument !== void 0;
  const {
    MUSTACHE_EXPR: MUSTACHE_EXPR2,
    ERB_EXPR: ERB_EXPR2,
    TMPLIT_EXPR: TMPLIT_EXPR2,
    DATA_ATTR: DATA_ATTR2,
    ARIA_ATTR: ARIA_ATTR2,
    IS_SCRIPT_OR_DATA: IS_SCRIPT_OR_DATA2,
    ATTR_WHITESPACE: ATTR_WHITESPACE2,
    CUSTOM_ELEMENT: CUSTOM_ELEMENT2
  } = EXPRESSIONS;
  let {
    IS_ALLOWED_URI: IS_ALLOWED_URI$1
  } = EXPRESSIONS;
  let ALLOWED_TAGS = null;
  const DEFAULT_ALLOWED_TAGS = addToSet({}, [...html$1, ...svg$1, ...svgFilters, ...mathMl$1, ...text]);
  let ALLOWED_ATTR = null;
  const DEFAULT_ALLOWED_ATTR = addToSet({}, [...html, ...svg, ...mathMl, ...xml]);
  let CUSTOM_ELEMENT_HANDLING = Object.seal(create(null, {
    tagNameCheck: {
      writable: true,
      configurable: false,
      enumerable: true,
      value: null
    },
    attributeNameCheck: {
      writable: true,
      configurable: false,
      enumerable: true,
      value: null
    },
    allowCustomizedBuiltInElements: {
      writable: true,
      configurable: false,
      enumerable: true,
      value: false
    }
  }));
  let FORBID_TAGS = null;
  let FORBID_ATTR = null;
  let ALLOW_ARIA_ATTR = true;
  let ALLOW_DATA_ATTR = true;
  let ALLOW_UNKNOWN_PROTOCOLS = false;
  let ALLOW_SELF_CLOSE_IN_ATTR = true;
  let SAFE_FOR_TEMPLATES = false;
  let SAFE_FOR_XML = true;
  let WHOLE_DOCUMENT = false;
  let SET_CONFIG = false;
  let FORCE_BODY = false;
  let RETURN_DOM = false;
  let RETURN_DOM_FRAGMENT = false;
  let RETURN_TRUSTED_TYPE = false;
  let SANITIZE_DOM = true;
  let SANITIZE_NAMED_PROPS = false;
  const SANITIZE_NAMED_PROPS_PREFIX = "user-content-";
  let KEEP_CONTENT = true;
  let IN_PLACE = false;
  let USE_PROFILES = {};
  let FORBID_CONTENTS = null;
  const DEFAULT_FORBID_CONTENTS = addToSet({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]);
  let DATA_URI_TAGS = null;
  const DEFAULT_DATA_URI_TAGS = addToSet({}, ["audio", "video", "img", "source", "image", "track"]);
  let URI_SAFE_ATTRIBUTES = null;
  const DEFAULT_URI_SAFE_ATTRIBUTES = addToSet({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]);
  const MATHML_NAMESPACE = "http://www.w3.org/1998/Math/MathML";
  const SVG_NAMESPACE = "http://www.w3.org/2000/svg";
  const HTML_NAMESPACE = "http://www.w3.org/1999/xhtml";
  let NAMESPACE = HTML_NAMESPACE;
  let IS_EMPTY_INPUT = false;
  let ALLOWED_NAMESPACES = null;
  const DEFAULT_ALLOWED_NAMESPACES = addToSet({}, [MATHML_NAMESPACE, SVG_NAMESPACE, HTML_NAMESPACE], stringToString);
  let MATHML_TEXT_INTEGRATION_POINTS = addToSet({}, ["mi", "mo", "mn", "ms", "mtext"]);
  let HTML_INTEGRATION_POINTS = addToSet({}, ["annotation-xml"]);
  const COMMON_SVG_AND_HTML_ELEMENTS = addToSet({}, ["title", "style", "font", "a", "script"]);
  let PARSER_MEDIA_TYPE = null;
  const SUPPORTED_PARSER_MEDIA_TYPES = ["application/xhtml+xml", "text/html"];
  const DEFAULT_PARSER_MEDIA_TYPE = "text/html";
  let transformCaseFunc = null;
  let CONFIG = null;
  const formElement = document2.createElement("form");
  const isRegexOrFunction = function isRegexOrFunction2(testValue) {
    return testValue instanceof RegExp || testValue instanceof Function;
  };
  const _parseConfig = function _parseConfig2() {
    let cfg = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (CONFIG && CONFIG === cfg) {
      return;
    }
    if (!cfg || typeof cfg !== "object") {
      cfg = {};
    }
    cfg = clone(cfg);
    PARSER_MEDIA_TYPE = SUPPORTED_PARSER_MEDIA_TYPES.indexOf(cfg.PARSER_MEDIA_TYPE) === -1 ? DEFAULT_PARSER_MEDIA_TYPE : cfg.PARSER_MEDIA_TYPE;
    transformCaseFunc = PARSER_MEDIA_TYPE === "application/xhtml+xml" ? stringToString : stringToLowerCase;
    ALLOWED_TAGS = objectHasOwnProperty(cfg, "ALLOWED_TAGS") ? addToSet({}, cfg.ALLOWED_TAGS, transformCaseFunc) : DEFAULT_ALLOWED_TAGS;
    ALLOWED_ATTR = objectHasOwnProperty(cfg, "ALLOWED_ATTR") ? addToSet({}, cfg.ALLOWED_ATTR, transformCaseFunc) : DEFAULT_ALLOWED_ATTR;
    ALLOWED_NAMESPACES = objectHasOwnProperty(cfg, "ALLOWED_NAMESPACES") ? addToSet({}, cfg.ALLOWED_NAMESPACES, stringToString) : DEFAULT_ALLOWED_NAMESPACES;
    URI_SAFE_ATTRIBUTES = objectHasOwnProperty(cfg, "ADD_URI_SAFE_ATTR") ? addToSet(clone(DEFAULT_URI_SAFE_ATTRIBUTES), cfg.ADD_URI_SAFE_ATTR, transformCaseFunc) : DEFAULT_URI_SAFE_ATTRIBUTES;
    DATA_URI_TAGS = objectHasOwnProperty(cfg, "ADD_DATA_URI_TAGS") ? addToSet(clone(DEFAULT_DATA_URI_TAGS), cfg.ADD_DATA_URI_TAGS, transformCaseFunc) : DEFAULT_DATA_URI_TAGS;
    FORBID_CONTENTS = objectHasOwnProperty(cfg, "FORBID_CONTENTS") ? addToSet({}, cfg.FORBID_CONTENTS, transformCaseFunc) : DEFAULT_FORBID_CONTENTS;
    FORBID_TAGS = objectHasOwnProperty(cfg, "FORBID_TAGS") ? addToSet({}, cfg.FORBID_TAGS, transformCaseFunc) : {};
    FORBID_ATTR = objectHasOwnProperty(cfg, "FORBID_ATTR") ? addToSet({}, cfg.FORBID_ATTR, transformCaseFunc) : {};
    USE_PROFILES = objectHasOwnProperty(cfg, "USE_PROFILES") ? cfg.USE_PROFILES : false;
    ALLOW_ARIA_ATTR = cfg.ALLOW_ARIA_ATTR !== false;
    ALLOW_DATA_ATTR = cfg.ALLOW_DATA_ATTR !== false;
    ALLOW_UNKNOWN_PROTOCOLS = cfg.ALLOW_UNKNOWN_PROTOCOLS || false;
    ALLOW_SELF_CLOSE_IN_ATTR = cfg.ALLOW_SELF_CLOSE_IN_ATTR !== false;
    SAFE_FOR_TEMPLATES = cfg.SAFE_FOR_TEMPLATES || false;
    SAFE_FOR_XML = cfg.SAFE_FOR_XML !== false;
    WHOLE_DOCUMENT = cfg.WHOLE_DOCUMENT || false;
    RETURN_DOM = cfg.RETURN_DOM || false;
    RETURN_DOM_FRAGMENT = cfg.RETURN_DOM_FRAGMENT || false;
    RETURN_TRUSTED_TYPE = cfg.RETURN_TRUSTED_TYPE || false;
    FORCE_BODY = cfg.FORCE_BODY || false;
    SANITIZE_DOM = cfg.SANITIZE_DOM !== false;
    SANITIZE_NAMED_PROPS = cfg.SANITIZE_NAMED_PROPS || false;
    KEEP_CONTENT = cfg.KEEP_CONTENT !== false;
    IN_PLACE = cfg.IN_PLACE || false;
    IS_ALLOWED_URI$1 = cfg.ALLOWED_URI_REGEXP || IS_ALLOWED_URI;
    NAMESPACE = cfg.NAMESPACE || HTML_NAMESPACE;
    MATHML_TEXT_INTEGRATION_POINTS = cfg.MATHML_TEXT_INTEGRATION_POINTS || MATHML_TEXT_INTEGRATION_POINTS;
    HTML_INTEGRATION_POINTS = cfg.HTML_INTEGRATION_POINTS || HTML_INTEGRATION_POINTS;
    CUSTOM_ELEMENT_HANDLING = cfg.CUSTOM_ELEMENT_HANDLING || {};
    if (cfg.CUSTOM_ELEMENT_HANDLING && isRegexOrFunction(cfg.CUSTOM_ELEMENT_HANDLING.tagNameCheck)) {
      CUSTOM_ELEMENT_HANDLING.tagNameCheck = cfg.CUSTOM_ELEMENT_HANDLING.tagNameCheck;
    }
    if (cfg.CUSTOM_ELEMENT_HANDLING && isRegexOrFunction(cfg.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)) {
      CUSTOM_ELEMENT_HANDLING.attributeNameCheck = cfg.CUSTOM_ELEMENT_HANDLING.attributeNameCheck;
    }
    if (cfg.CUSTOM_ELEMENT_HANDLING && typeof cfg.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements === "boolean") {
      CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements = cfg.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements;
    }
    if (SAFE_FOR_TEMPLATES) {
      ALLOW_DATA_ATTR = false;
    }
    if (RETURN_DOM_FRAGMENT) {
      RETURN_DOM = true;
    }
    if (USE_PROFILES) {
      ALLOWED_TAGS = addToSet({}, text);
      ALLOWED_ATTR = [];
      if (USE_PROFILES.html === true) {
        addToSet(ALLOWED_TAGS, html$1);
        addToSet(ALLOWED_ATTR, html);
      }
      if (USE_PROFILES.svg === true) {
        addToSet(ALLOWED_TAGS, svg$1);
        addToSet(ALLOWED_ATTR, svg);
        addToSet(ALLOWED_ATTR, xml);
      }
      if (USE_PROFILES.svgFilters === true) {
        addToSet(ALLOWED_TAGS, svgFilters);
        addToSet(ALLOWED_ATTR, svg);
        addToSet(ALLOWED_ATTR, xml);
      }
      if (USE_PROFILES.mathMl === true) {
        addToSet(ALLOWED_TAGS, mathMl$1);
        addToSet(ALLOWED_ATTR, mathMl);
        addToSet(ALLOWED_ATTR, xml);
      }
    }
    if (cfg.ADD_TAGS) {
      if (ALLOWED_TAGS === DEFAULT_ALLOWED_TAGS) {
        ALLOWED_TAGS = clone(ALLOWED_TAGS);
      }
      addToSet(ALLOWED_TAGS, cfg.ADD_TAGS, transformCaseFunc);
    }
    if (cfg.ADD_ATTR) {
      if (ALLOWED_ATTR === DEFAULT_ALLOWED_ATTR) {
        ALLOWED_ATTR = clone(ALLOWED_ATTR);
      }
      addToSet(ALLOWED_ATTR, cfg.ADD_ATTR, transformCaseFunc);
    }
    if (cfg.ADD_URI_SAFE_ATTR) {
      addToSet(URI_SAFE_ATTRIBUTES, cfg.ADD_URI_SAFE_ATTR, transformCaseFunc);
    }
    if (cfg.FORBID_CONTENTS) {
      if (FORBID_CONTENTS === DEFAULT_FORBID_CONTENTS) {
        FORBID_CONTENTS = clone(FORBID_CONTENTS);
      }
      addToSet(FORBID_CONTENTS, cfg.FORBID_CONTENTS, transformCaseFunc);
    }
    if (KEEP_CONTENT) {
      ALLOWED_TAGS["#text"] = true;
    }
    if (WHOLE_DOCUMENT) {
      addToSet(ALLOWED_TAGS, ["html", "head", "body"]);
    }
    if (ALLOWED_TAGS.table) {
      addToSet(ALLOWED_TAGS, ["tbody"]);
      delete FORBID_TAGS.tbody;
    }
    if (cfg.TRUSTED_TYPES_POLICY) {
      if (typeof cfg.TRUSTED_TYPES_POLICY.createHTML !== "function") {
        throw typeErrorCreate('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
      }
      if (typeof cfg.TRUSTED_TYPES_POLICY.createScriptURL !== "function") {
        throw typeErrorCreate('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
      }
      trustedTypesPolicy = cfg.TRUSTED_TYPES_POLICY;
      emptyHTML = trustedTypesPolicy.createHTML("");
    } else {
      if (trustedTypesPolicy === void 0) {
        trustedTypesPolicy = _createTrustedTypesPolicy(trustedTypes, currentScript);
      }
      if (trustedTypesPolicy !== null && typeof emptyHTML === "string") {
        emptyHTML = trustedTypesPolicy.createHTML("");
      }
    }
    if (freeze) {
      freeze(cfg);
    }
    CONFIG = cfg;
  };
  const ALL_SVG_TAGS = addToSet({}, [...svg$1, ...svgFilters, ...svgDisallowed]);
  const ALL_MATHML_TAGS = addToSet({}, [...mathMl$1, ...mathMlDisallowed]);
  const _checkValidNamespace = function _checkValidNamespace2(element) {
    let parent = getParentNode(element);
    if (!parent || !parent.tagName) {
      parent = {
        namespaceURI: NAMESPACE,
        tagName: "template"
      };
    }
    const tagName = stringToLowerCase(element.tagName);
    const parentTagName = stringToLowerCase(parent.tagName);
    if (!ALLOWED_NAMESPACES[element.namespaceURI]) {
      return false;
    }
    if (element.namespaceURI === SVG_NAMESPACE) {
      if (parent.namespaceURI === HTML_NAMESPACE) {
        return tagName === "svg";
      }
      if (parent.namespaceURI === MATHML_NAMESPACE) {
        return tagName === "svg" && (parentTagName === "annotation-xml" || MATHML_TEXT_INTEGRATION_POINTS[parentTagName]);
      }
      return Boolean(ALL_SVG_TAGS[tagName]);
    }
    if (element.namespaceURI === MATHML_NAMESPACE) {
      if (parent.namespaceURI === HTML_NAMESPACE) {
        return tagName === "math";
      }
      if (parent.namespaceURI === SVG_NAMESPACE) {
        return tagName === "math" && HTML_INTEGRATION_POINTS[parentTagName];
      }
      return Boolean(ALL_MATHML_TAGS[tagName]);
    }
    if (element.namespaceURI === HTML_NAMESPACE) {
      if (parent.namespaceURI === SVG_NAMESPACE && !HTML_INTEGRATION_POINTS[parentTagName]) {
        return false;
      }
      if (parent.namespaceURI === MATHML_NAMESPACE && !MATHML_TEXT_INTEGRATION_POINTS[parentTagName]) {
        return false;
      }
      return !ALL_MATHML_TAGS[tagName] && (COMMON_SVG_AND_HTML_ELEMENTS[tagName] || !ALL_SVG_TAGS[tagName]);
    }
    if (PARSER_MEDIA_TYPE === "application/xhtml+xml" && ALLOWED_NAMESPACES[element.namespaceURI]) {
      return true;
    }
    return false;
  };
  const _forceRemove = function _forceRemove2(node) {
    arrayPush(DOMPurify.removed, {
      element: node
    });
    try {
      getParentNode(node).removeChild(node);
    } catch (_2) {
      remove(node);
    }
  };
  const _removeAttribute = function _removeAttribute2(name, element) {
    try {
      arrayPush(DOMPurify.removed, {
        attribute: element.getAttributeNode(name),
        from: element
      });
    } catch (_2) {
      arrayPush(DOMPurify.removed, {
        attribute: null,
        from: element
      });
    }
    element.removeAttribute(name);
    if (name === "is") {
      if (RETURN_DOM || RETURN_DOM_FRAGMENT) {
        try {
          _forceRemove(element);
        } catch (_2) {
        }
      } else {
        try {
          element.setAttribute(name, "");
        } catch (_2) {
        }
      }
    }
  };
  const _initDocument = function _initDocument2(dirty) {
    let doc = null;
    let leadingWhitespace = null;
    if (FORCE_BODY) {
      dirty = "<remove></remove>" + dirty;
    } else {
      const matches = stringMatch(dirty, /^[\r\n\t ]+/);
      leadingWhitespace = matches && matches[0];
    }
    if (PARSER_MEDIA_TYPE === "application/xhtml+xml" && NAMESPACE === HTML_NAMESPACE) {
      dirty = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + dirty + "</body></html>";
    }
    const dirtyPayload = trustedTypesPolicy ? trustedTypesPolicy.createHTML(dirty) : dirty;
    if (NAMESPACE === HTML_NAMESPACE) {
      try {
        doc = new DOMParser().parseFromString(dirtyPayload, PARSER_MEDIA_TYPE);
      } catch (_2) {
      }
    }
    if (!doc || !doc.documentElement) {
      doc = implementation.createDocument(NAMESPACE, "template", null);
      try {
        doc.documentElement.innerHTML = IS_EMPTY_INPUT ? emptyHTML : dirtyPayload;
      } catch (_2) {
      }
    }
    const body = doc.body || doc.documentElement;
    if (dirty && leadingWhitespace) {
      body.insertBefore(document2.createTextNode(leadingWhitespace), body.childNodes[0] || null);
    }
    if (NAMESPACE === HTML_NAMESPACE) {
      return getElementsByTagName.call(doc, WHOLE_DOCUMENT ? "html" : "body")[0];
    }
    return WHOLE_DOCUMENT ? doc.documentElement : body;
  };
  const _createNodeIterator = function _createNodeIterator2(root) {
    return createNodeIterator.call(
      root.ownerDocument || root,
      root,
      NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_COMMENT | NodeFilter.SHOW_TEXT | NodeFilter.SHOW_PROCESSING_INSTRUCTION | NodeFilter.SHOW_CDATA_SECTION,
      null
    );
  };
  const _isClobbered = function _isClobbered2(element) {
    return element instanceof HTMLFormElement && (typeof element.nodeName !== "string" || typeof element.textContent !== "string" || typeof element.removeChild !== "function" || !(element.attributes instanceof NamedNodeMap) || typeof element.removeAttribute !== "function" || typeof element.setAttribute !== "function" || typeof element.namespaceURI !== "string" || typeof element.insertBefore !== "function" || typeof element.hasChildNodes !== "function");
  };
  const _isNode = function _isNode2(value) {
    return typeof Node === "function" && value instanceof Node;
  };
  function _executeHooks(hooks2, currentNode, data) {
    arrayForEach(hooks2, (hook) => {
      hook.call(DOMPurify, currentNode, data, CONFIG);
    });
  }
  const _sanitizeElements = function _sanitizeElements2(currentNode) {
    let content = null;
    _executeHooks(hooks.beforeSanitizeElements, currentNode, null);
    if (_isClobbered(currentNode)) {
      _forceRemove(currentNode);
      return true;
    }
    const tagName = transformCaseFunc(currentNode.nodeName);
    _executeHooks(hooks.uponSanitizeElement, currentNode, {
      tagName,
      allowedTags: ALLOWED_TAGS
    });
    if (currentNode.hasChildNodes() && !_isNode(currentNode.firstElementChild) && regExpTest(/<[/\w!]/g, currentNode.innerHTML) && regExpTest(/<[/\w!]/g, currentNode.textContent)) {
      _forceRemove(currentNode);
      return true;
    }
    if (currentNode.nodeType === NODE_TYPE.progressingInstruction) {
      _forceRemove(currentNode);
      return true;
    }
    if (SAFE_FOR_XML && currentNode.nodeType === NODE_TYPE.comment && regExpTest(/<[/\w]/g, currentNode.data)) {
      _forceRemove(currentNode);
      return true;
    }
    if (!ALLOWED_TAGS[tagName] || FORBID_TAGS[tagName]) {
      if (!FORBID_TAGS[tagName] && _isBasicCustomElement(tagName)) {
        if (CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof RegExp && regExpTest(CUSTOM_ELEMENT_HANDLING.tagNameCheck, tagName)) {
          return false;
        }
        if (CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof Function && CUSTOM_ELEMENT_HANDLING.tagNameCheck(tagName)) {
          return false;
        }
      }
      if (KEEP_CONTENT && !FORBID_CONTENTS[tagName]) {
        const parentNode = getParentNode(currentNode) || currentNode.parentNode;
        const childNodes = getChildNodes(currentNode) || currentNode.childNodes;
        if (childNodes && parentNode) {
          const childCount = childNodes.length;
          for (let i2 = childCount - 1; i2 >= 0; --i2) {
            const childClone = cloneNode(childNodes[i2], true);
            childClone.__removalCount = (currentNode.__removalCount || 0) + 1;
            parentNode.insertBefore(childClone, getNextSibling(currentNode));
          }
        }
      }
      _forceRemove(currentNode);
      return true;
    }
    if (currentNode instanceof Element2 && !_checkValidNamespace(currentNode)) {
      _forceRemove(currentNode);
      return true;
    }
    if ((tagName === "noscript" || tagName === "noembed" || tagName === "noframes") && regExpTest(/<\/no(script|embed|frames)/i, currentNode.innerHTML)) {
      _forceRemove(currentNode);
      return true;
    }
    if (SAFE_FOR_TEMPLATES && currentNode.nodeType === NODE_TYPE.text) {
      content = currentNode.textContent;
      arrayForEach([MUSTACHE_EXPR2, ERB_EXPR2, TMPLIT_EXPR2], (expr) => {
        content = stringReplace(content, expr, " ");
      });
      if (currentNode.textContent !== content) {
        arrayPush(DOMPurify.removed, {
          element: currentNode.cloneNode()
        });
        currentNode.textContent = content;
      }
    }
    _executeHooks(hooks.afterSanitizeElements, currentNode, null);
    return false;
  };
  const _isValidAttribute = function _isValidAttribute2(lcTag, lcName, value) {
    if (SANITIZE_DOM && (lcName === "id" || lcName === "name") && (value in document2 || value in formElement)) {
      return false;
    }
    if (ALLOW_DATA_ATTR && !FORBID_ATTR[lcName] && regExpTest(DATA_ATTR2, lcName))
      ;
    else if (ALLOW_ARIA_ATTR && regExpTest(ARIA_ATTR2, lcName))
      ;
    else if (!ALLOWED_ATTR[lcName] || FORBID_ATTR[lcName]) {
      if (_isBasicCustomElement(lcTag) && (CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof RegExp && regExpTest(CUSTOM_ELEMENT_HANDLING.tagNameCheck, lcTag) || CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof Function && CUSTOM_ELEMENT_HANDLING.tagNameCheck(lcTag)) && (CUSTOM_ELEMENT_HANDLING.attributeNameCheck instanceof RegExp && regExpTest(CUSTOM_ELEMENT_HANDLING.attributeNameCheck, lcName) || CUSTOM_ELEMENT_HANDLING.attributeNameCheck instanceof Function && CUSTOM_ELEMENT_HANDLING.attributeNameCheck(lcName)) || lcName === "is" && CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements && (CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof RegExp && regExpTest(CUSTOM_ELEMENT_HANDLING.tagNameCheck, value) || CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof Function && CUSTOM_ELEMENT_HANDLING.tagNameCheck(value)))
        ;
      else {
        return false;
      }
    } else if (URI_SAFE_ATTRIBUTES[lcName])
      ;
    else if (regExpTest(IS_ALLOWED_URI$1, stringReplace(value, ATTR_WHITESPACE2, "")))
      ;
    else if ((lcName === "src" || lcName === "xlink:href" || lcName === "href") && lcTag !== "script" && stringIndexOf(value, "data:") === 0 && DATA_URI_TAGS[lcTag])
      ;
    else if (ALLOW_UNKNOWN_PROTOCOLS && !regExpTest(IS_SCRIPT_OR_DATA2, stringReplace(value, ATTR_WHITESPACE2, "")))
      ;
    else if (value) {
      return false;
    } else
      ;
    return true;
  };
  const _isBasicCustomElement = function _isBasicCustomElement2(tagName) {
    return tagName !== "annotation-xml" && stringMatch(tagName, CUSTOM_ELEMENT2);
  };
  const _sanitizeAttributes = function _sanitizeAttributes2(currentNode) {
    _executeHooks(hooks.beforeSanitizeAttributes, currentNode, null);
    const {
      attributes
    } = currentNode;
    if (!attributes || _isClobbered(currentNode)) {
      return;
    }
    const hookEvent = {
      attrName: "",
      attrValue: "",
      keepAttr: true,
      allowedAttributes: ALLOWED_ATTR,
      forceKeepAttr: void 0
    };
    let l2 = attributes.length;
    while (l2--) {
      const attr = attributes[l2];
      const {
        name,
        namespaceURI,
        value: attrValue
      } = attr;
      const lcName = transformCaseFunc(name);
      let value = name === "value" ? attrValue : stringTrim(attrValue);
      hookEvent.attrName = lcName;
      hookEvent.attrValue = value;
      hookEvent.keepAttr = true;
      hookEvent.forceKeepAttr = void 0;
      _executeHooks(hooks.uponSanitizeAttribute, currentNode, hookEvent);
      value = hookEvent.attrValue;
      if (SANITIZE_NAMED_PROPS && (lcName === "id" || lcName === "name")) {
        _removeAttribute(name, currentNode);
        value = SANITIZE_NAMED_PROPS_PREFIX + value;
      }
      if (SAFE_FOR_XML && regExpTest(/((--!?|])>)|<\/(style|title)/i, value)) {
        _removeAttribute(name, currentNode);
        continue;
      }
      if (hookEvent.forceKeepAttr) {
        continue;
      }
      _removeAttribute(name, currentNode);
      if (!hookEvent.keepAttr) {
        continue;
      }
      if (!ALLOW_SELF_CLOSE_IN_ATTR && regExpTest(/\/>/i, value)) {
        _removeAttribute(name, currentNode);
        continue;
      }
      if (SAFE_FOR_TEMPLATES) {
        arrayForEach([MUSTACHE_EXPR2, ERB_EXPR2, TMPLIT_EXPR2], (expr) => {
          value = stringReplace(value, expr, " ");
        });
      }
      const lcTag = transformCaseFunc(currentNode.nodeName);
      if (!_isValidAttribute(lcTag, lcName, value)) {
        continue;
      }
      if (trustedTypesPolicy && typeof trustedTypes === "object" && typeof trustedTypes.getAttributeType === "function") {
        if (namespaceURI)
          ;
        else {
          switch (trustedTypes.getAttributeType(lcTag, lcName)) {
            case "TrustedHTML": {
              value = trustedTypesPolicy.createHTML(value);
              break;
            }
            case "TrustedScriptURL": {
              value = trustedTypesPolicy.createScriptURL(value);
              break;
            }
          }
        }
      }
      try {
        if (namespaceURI) {
          currentNode.setAttributeNS(namespaceURI, name, value);
        } else {
          currentNode.setAttribute(name, value);
        }
        if (_isClobbered(currentNode)) {
          _forceRemove(currentNode);
        } else {
          arrayPop(DOMPurify.removed);
        }
      } catch (_2) {
      }
    }
    _executeHooks(hooks.afterSanitizeAttributes, currentNode, null);
  };
  const _sanitizeShadowDOM = function _sanitizeShadowDOM2(fragment) {
    let shadowNode = null;
    const shadowIterator = _createNodeIterator(fragment);
    _executeHooks(hooks.beforeSanitizeShadowDOM, fragment, null);
    while (shadowNode = shadowIterator.nextNode()) {
      _executeHooks(hooks.uponSanitizeShadowNode, shadowNode, null);
      _sanitizeElements(shadowNode);
      _sanitizeAttributes(shadowNode);
      if (shadowNode.content instanceof DocumentFragment) {
        _sanitizeShadowDOM2(shadowNode.content);
      }
    }
    _executeHooks(hooks.afterSanitizeShadowDOM, fragment, null);
  };
  DOMPurify.sanitize = function(dirty) {
    let cfg = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    let body = null;
    let importedNode = null;
    let currentNode = null;
    let returnNode = null;
    IS_EMPTY_INPUT = !dirty;
    if (IS_EMPTY_INPUT) {
      dirty = "<!-->";
    }
    if (typeof dirty !== "string" && !_isNode(dirty)) {
      if (typeof dirty.toString === "function") {
        dirty = dirty.toString();
        if (typeof dirty !== "string") {
          throw typeErrorCreate("dirty is not a string, aborting");
        }
      } else {
        throw typeErrorCreate("toString is not a function");
      }
    }
    if (!DOMPurify.isSupported) {
      return dirty;
    }
    if (!SET_CONFIG) {
      _parseConfig(cfg);
    }
    DOMPurify.removed = [];
    if (typeof dirty === "string") {
      IN_PLACE = false;
    }
    if (IN_PLACE) {
      if (dirty.nodeName) {
        const tagName = transformCaseFunc(dirty.nodeName);
        if (!ALLOWED_TAGS[tagName] || FORBID_TAGS[tagName]) {
          throw typeErrorCreate("root node is forbidden and cannot be sanitized in-place");
        }
      }
    } else if (dirty instanceof Node) {
      body = _initDocument("<!---->");
      importedNode = body.ownerDocument.importNode(dirty, true);
      if (importedNode.nodeType === NODE_TYPE.element && importedNode.nodeName === "BODY") {
        body = importedNode;
      } else if (importedNode.nodeName === "HTML") {
        body = importedNode;
      } else {
        body.appendChild(importedNode);
      }
    } else {
      if (!RETURN_DOM && !SAFE_FOR_TEMPLATES && !WHOLE_DOCUMENT && dirty.indexOf("<") === -1) {
        return trustedTypesPolicy && RETURN_TRUSTED_TYPE ? trustedTypesPolicy.createHTML(dirty) : dirty;
      }
      body = _initDocument(dirty);
      if (!body) {
        return RETURN_DOM ? null : RETURN_TRUSTED_TYPE ? emptyHTML : "";
      }
    }
    if (body && FORCE_BODY) {
      _forceRemove(body.firstChild);
    }
    const nodeIterator = _createNodeIterator(IN_PLACE ? dirty : body);
    while (currentNode = nodeIterator.nextNode()) {
      _sanitizeElements(currentNode);
      _sanitizeAttributes(currentNode);
      if (currentNode.content instanceof DocumentFragment) {
        _sanitizeShadowDOM(currentNode.content);
      }
    }
    if (IN_PLACE) {
      return dirty;
    }
    if (RETURN_DOM) {
      if (RETURN_DOM_FRAGMENT) {
        returnNode = createDocumentFragment.call(body.ownerDocument);
        while (body.firstChild) {
          returnNode.appendChild(body.firstChild);
        }
      } else {
        returnNode = body;
      }
      if (ALLOWED_ATTR.shadowroot || ALLOWED_ATTR.shadowrootmode) {
        returnNode = importNode.call(originalDocument, returnNode, true);
      }
      return returnNode;
    }
    let serializedHTML = WHOLE_DOCUMENT ? body.outerHTML : body.innerHTML;
    if (WHOLE_DOCUMENT && ALLOWED_TAGS["!doctype"] && body.ownerDocument && body.ownerDocument.doctype && body.ownerDocument.doctype.name && regExpTest(DOCTYPE_NAME, body.ownerDocument.doctype.name)) {
      serializedHTML = "<!DOCTYPE " + body.ownerDocument.doctype.name + ">\n" + serializedHTML;
    }
    if (SAFE_FOR_TEMPLATES) {
      arrayForEach([MUSTACHE_EXPR2, ERB_EXPR2, TMPLIT_EXPR2], (expr) => {
        serializedHTML = stringReplace(serializedHTML, expr, " ");
      });
    }
    return trustedTypesPolicy && RETURN_TRUSTED_TYPE ? trustedTypesPolicy.createHTML(serializedHTML) : serializedHTML;
  };
  DOMPurify.setConfig = function() {
    let cfg = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    _parseConfig(cfg);
    SET_CONFIG = true;
  };
  DOMPurify.clearConfig = function() {
    CONFIG = null;
    SET_CONFIG = false;
  };
  DOMPurify.isValidAttribute = function(tag, attr, value) {
    if (!CONFIG) {
      _parseConfig({});
    }
    const lcTag = transformCaseFunc(tag);
    const lcName = transformCaseFunc(attr);
    return _isValidAttribute(lcTag, lcName, value);
  };
  DOMPurify.addHook = function(entryPoint, hookFunction) {
    if (typeof hookFunction !== "function") {
      return;
    }
    arrayPush(hooks[entryPoint], hookFunction);
  };
  DOMPurify.removeHook = function(entryPoint, hookFunction) {
    if (hookFunction !== void 0) {
      const index = arrayLastIndexOf(hooks[entryPoint], hookFunction);
      return index === -1 ? void 0 : arraySplice(hooks[entryPoint], index, 1)[0];
    }
    return arrayPop(hooks[entryPoint]);
  };
  DOMPurify.removeHooks = function(entryPoint) {
    hooks[entryPoint] = [];
  };
  DOMPurify.removeAllHooks = function() {
    hooks = _createHooksMap();
  };
  return DOMPurify;
}
var purify = createDOMPurify();
var purify_cjs = purify;
var browser = window.DOMPurify || (window.DOMPurify = purify_cjs.default || purify_cjs);
const TEMP_TARGET_ATTRIBUTE = "data-target-temp";
function addAttributeHooks() {
  browser.addHook("beforeSanitizeAttributes", (node) => {
    if (node.tagName === "A") {
      const targetValue = node.getAttribute("target");
      if (targetValue) {
        node.setAttribute(TEMP_TARGET_ATTRIBUTE, targetValue);
      } else {
        node.setAttribute("target", "_self");
      }
    }
  });
  browser.addHook("afterSanitizeAttributes", (node) => {
    if (node.tagName === "A" && node.hasAttribute(TEMP_TARGET_ATTRIBUTE)) {
      node.setAttribute("target", node.getAttribute(TEMP_TARGET_ATTRIBUTE));
      node.removeAttribute(TEMP_TARGET_ATTRIBUTE);
      if (node.getAttribute("target") === "_blank") {
        node.setAttribute("rel", "noopener");
      }
    }
  });
}
function removeAttributeHooks() {
  browser.removeAllHooks();
}
function sanitize(str) {
  return browser.sanitize(str);
}
function Template({ template, param, as: tagName = "div" }) {
  var _a;
  const templates2 = useStore(templateSelector);
  const templateFunc = templates2[template];
  if (isNil(templateFunc)) {
    return null;
  }
  const htmlOrVnode = templateFunc(param);
  return isString_1(htmlOrVnode) ? y$3(tagName, {
    className: cls(`template-${template}`),
    dangerouslySetInnerHTML: {
      __html: sanitize(htmlOrVnode)
    }
  }) : E$1(htmlOrVnode, {
    className: `${(_a = htmlOrVnode.props.className) != null ? _a : ""} ${cls(`template-${template}`)}`
  });
}
const EventBusContext = F$3(
  null
);
const EventBusProvider = EventBusContext.Provider;
const useEventBus = () => {
  const eventBus = q$2(EventBusContext);
  if (!eventBus) {
    throw new Error("useEventBus must be used within a EventBusProvider");
  }
  return eventBus;
};
const primaryTimezoneSelector = (state) => {
  var _a, _b, _c, _d, _e;
  return (_e = (_d = (_c = (_b = (_a = state.options) == null ? void 0 : _a.timezone) == null ? void 0 : _b.zones) == null ? void 0 : _c[0]) == null ? void 0 : _d.timezoneName) != null ? _e : "Local";
};
const customOffsetCalculatorSelector = (state) => {
  var _a, _b;
  return (_b = (_a = state.options) == null ? void 0 : _a.timezone) == null ? void 0 : _b.customOffsetCalculator;
};
const timezonesSelector = (state) => {
  var _a;
  return (_a = state.options.timezone.zones) != null ? _a : [];
};
function useTZConverter() {
  const customOffsetCalculator = useStore(customOffsetCalculatorSelector);
  const hasCustomOffsetCalculator = isPresent(customOffsetCalculator);
  return T$1(
    (timezoneName, tzDate = new TZDate()) => tzDate.tz(
      hasCustomOffsetCalculator ? customOffsetCalculator(timezoneName, tzDate.getTime()) : timezoneName
    ),
    [customOffsetCalculator, hasCustomOffsetCalculator]
  );
}
function usePrimaryTimezone() {
  const primaryTimezoneName = useStore(primaryTimezoneSelector);
  const tzConverter = useTZConverter();
  const getNow = T$1(
    () => tzConverter(primaryTimezoneName),
    [primaryTimezoneName, tzConverter]
  );
  return [primaryTimezoneName, getNow];
}
function isWeekDayName(type, dayName) {
  return type === "week";
}
function getWeekDayNameColor({
  dayName,
  theme,
  today
}) {
  var _a, _b;
  const { day, dateInstance } = dayName;
  const isToday = isSameDate(today, dateInstance);
  const isPastDay = !isToday && dateInstance < today;
  if (isSunday(day)) {
    return theme.common.holiday.color;
  }
  if (isPastDay) {
    return (_a = theme.week) == null ? void 0 : _a.pastDay.color;
  }
  if (isSaturday(day)) {
    return theme.common.saturday.color;
  }
  if (isToday) {
    return (_b = theme.week) == null ? void 0 : _b.today.color;
  }
  return theme.common.dayName.color;
}
function getMonthDayNameColor({
  dayName,
  theme
}) {
  const { day } = dayName;
  if (isSunday(day)) {
    return theme.common.holiday.color;
  }
  if (isSaturday(day)) {
    return theme.common.saturday.color;
  }
  return theme.common.dayName.color;
}
function DayName({ dayName, style, type, theme }) {
  const eventBus = useEventBus();
  const [, getNow] = usePrimaryTimezone();
  const today = getNow();
  const { day } = dayName;
  const color = type === "week" ? getWeekDayNameColor({ dayName, theme, today }) : getMonthDayNameColor({ dayName, theme });
  const templateType = `${type}DayName`;
  const handleClick = () => {
    if (isWeekDayName(type)) {
      eventBus.fire("clickDayName", { date: toFormat(dayName.dateInstance, "YYYY-MM-DD") });
    }
  };
  return /* @__PURE__ */ y$3("div", {
    className: cls("day-name-item", type),
    style
  }, /* @__PURE__ */ y$3("span", {
    className: cls({ [`holiday-${getDayName(day)}`]: isWeekend(day) }),
    style: { color },
    onClick: handleClick,
    "data-testid": `dayName-${type}-${getDayName(day)}`
  }, /* @__PURE__ */ y$3(Template, {
    template: templateType,
    param: dayName
  })));
}
const commonThemeSelector = topLevelStateSelector("common");
const monthThemeSelector = topLevelStateSelector("month");
const weekDayGridLeftSelector = (theme) => theme.week.dayGridLeft;
const weekTimeGridLeftSelector = (theme) => theme.week.timeGridLeft;
const monthMoreViewSelector = (theme) => theme.month.moreView;
const monthGridCellSelector = (theme) => theme.month.gridCell;
const DEFAULT_COMMON_THEME = {
  border: "1px solid #e5e5e5",
  backgroundColor: "white",
  holiday: {
    color: "#ff4040"
  },
  saturday: {
    color: "#333"
  },
  dayName: {
    color: "#333"
  },
  today: {
    color: "#fff"
  },
  gridSelection: {
    backgroundColor: "rgba(81, 92, 230, 0.05)",
    border: "1px solid #515ce6"
  }
};
const DEFAULT_WEEK_THEME = {
  dayName: {
    borderLeft: "none",
    borderTop: "1px solid #e5e5e5",
    borderBottom: "1px solid #e5e5e5",
    backgroundColor: "inherit"
  },
  weekend: {
    backgroundColor: "inherit"
  },
  today: {
    color: "inherit",
    backgroundColor: "rgba(81, 92, 230, 0.05)"
  },
  pastDay: {
    color: "#bbb"
  },
  panelResizer: {
    border: "1px solid #e5e5e5"
  },
  dayGrid: {
    borderRight: "1px solid #e5e5e5",
    backgroundColor: "inherit"
  },
  dayGridLeft: {
    borderRight: "1px solid #e5e5e5",
    backgroundColor: "inherit",
    width: "72px"
  },
  timeGrid: {
    borderRight: "1px solid #e5e5e5"
  },
  timeGridLeft: {
    backgroundColor: "inherit",
    borderRight: "1px solid #e5e5e5",
    width: "72px"
  },
  timeGridLeftAdditionalTimezone: {
    backgroundColor: "white"
  },
  timeGridHalfHourLine: {
    borderBottom: "none"
  },
  timeGridHourLine: {
    borderBottom: "1px solid #e5e5e5"
  },
  nowIndicatorLabel: {
    color: "#515ce6"
  },
  nowIndicatorPast: {
    border: "1px dashed #515ce6"
  },
  nowIndicatorBullet: {
    backgroundColor: "#515ce6"
  },
  nowIndicatorToday: {
    border: "1px solid #515ce6"
  },
  nowIndicatorFuture: {
    border: "none"
  },
  pastTime: {
    color: "#bbb"
  },
  futureTime: {
    color: "#333"
  },
  gridSelection: {
    color: "#515ce6"
  }
};
const DEFAULT_MONTH_THEME = {
  dayName: {
    borderLeft: "none",
    backgroundColor: "inherit"
  },
  holidayExceptThisMonth: {
    color: "rgba(255, 64, 64, 0.4)"
  },
  dayExceptThisMonth: {
    color: "rgba(51, 51, 51, 0.4)"
  },
  weekend: {
    backgroundColor: "inherit"
  },
  moreView: {
    border: "1px solid #d5d5d5",
    boxShadow: "0 2px 6px 0 rgba(0, 0, 0, 0.1)",
    backgroundColor: "white",
    width: null,
    height: null
  },
  gridCell: {
    headerHeight: 31,
    footerHeight: null
  },
  moreViewTitle: {
    backgroundColor: "inherit"
  }
};
function createCommonTheme(commonTheme = {}) {
  return {
    common: mergeObject(DEFAULT_COMMON_THEME, commonTheme)
  };
}
function createThemeDispatch(set) {
  return {
    setTheme: (theme) => {
      set(
        produce((state) => {
          state.common = mergeObject(state.common, theme.common);
          state.week = mergeObject(state.week, theme.week);
          state.month = mergeObject(state.month, theme.month);
        })
      );
    },
    setCommonTheme: (commonTheme) => {
      set(
        produce((state) => {
          state.common = mergeObject(state.common, commonTheme);
        })
      );
    },
    setWeekTheme: (weekTheme) => {
      set(
        produce((state) => {
          state.week = mergeObject(state.week, weekTheme);
        })
      );
    },
    setMonthTheme: (monthTheme) => {
      set(
        produce((state) => {
          state.month = mergeObject(state.month, monthTheme);
        })
      );
    }
  };
}
function createMonthTheme(monthTheme = {}) {
  return {
    month: mergeObject(DEFAULT_MONTH_THEME, monthTheme)
  };
}
function createWeekTheme(weekTheme = {}) {
  return {
    week: mergeObject(DEFAULT_WEEK_THEME, weekTheme)
  };
}
const themeStoreCreator = (themeOptions = {}) => (set) => {
  return __spreadProps(__spreadValues(__spreadValues(__spreadValues({}, createCommonTheme(themeOptions == null ? void 0 : themeOptions.common)), createWeekTheme(themeOptions == null ? void 0 : themeOptions.week)), createMonthTheme(themeOptions == null ? void 0 : themeOptions.month)), {
    dispatch: __spreadValues({}, createThemeDispatch(set))
  });
};
const initThemeStore = (themeOptions = {}) => createStore(themeStoreCreator(themeOptions));
const {
  StoreProvider: ThemeProvider,
  useInternalStore: useInternalThemeStore,
  useStore: useTheme
} = createStoreContext();
function useCommonTheme() {
  return useTheme(commonThemeSelector);
}
function useMonthTheme() {
  return useTheme(monthThemeSelector);
}
function weekDayNameSelector(theme) {
  return {
    common: {
      saturday: theme.common.saturday,
      holiday: theme.common.holiday,
      today: theme.common.today,
      dayName: theme.common.dayName
    },
    week: {
      pastDay: theme.week.pastDay,
      today: theme.week.today,
      dayName: theme.week.dayName
    }
  };
}
function monthDayNameSelector(theme) {
  return {
    common: {
      saturday: theme.common.saturday,
      holiday: theme.common.holiday,
      today: theme.common.today,
      dayName: theme.common.dayName
    },
    month: {
      dayName: theme.month.dayName
    }
  };
}
function GridHeader({
  dayNames,
  marginLeft = DEFAULT_DAY_NAME_MARGIN_LEFT,
  rowStyleInfo,
  type = "month"
}) {
  var _a, _b;
  const theme = useTheme(type === "month" ? monthDayNameSelector : weekDayNameSelector);
  const _c = (_b = (_a = theme[type]) == null ? void 0 : _a.dayName) != null ? _b : {}, { backgroundColor = "white", borderLeft = null } = _c, rest = __objRest(_c, ["backgroundColor", "borderLeft"]);
  const { borderTop = null, borderBottom = null } = rest;
  return /* @__PURE__ */ y$3("div", {
    "data-testid": `grid-header-${type}`,
    className: cls("day-names", type),
    style: {
      backgroundColor,
      borderTop,
      borderBottom
    }
  }, /* @__PURE__ */ y$3("div", {
    className: cls("day-name-container"),
    style: { marginLeft }
  }, dayNames.map((dayName, index) => /* @__PURE__ */ y$3(DayName, {
    type,
    key: `dayNames-${dayName.day}`,
    dayName,
    style: {
      width: toPercent(rowStyleInfo[index].width),
      left: toPercent(rowStyleInfo[index].left),
      borderLeft
    },
    theme
  }))));
}
const DEFAULT_VISIBLE_WEEKS = 6;
var CellBarType = /* @__PURE__ */ ((CellBarType2) => {
  CellBarType2["header"] = "header";
  CellBarType2["footer"] = "footer";
  return CellBarType2;
})(CellBarType || {});
function getCollisionGroup(events, usingTravelTime = true) {
  const collisionGroups = [];
  let previousEventList;
  if (!events.length) {
    return collisionGroups;
  }
  collisionGroups[0] = [events[0].cid()];
  events.slice(1).forEach((event, index) => {
    previousEventList = events.slice(0, index + 1).reverse();
    const found = previousEventList.find(
      (previous) => event.collidesWith(previous, usingTravelTime)
    );
    if (!found) {
      collisionGroups.push([event.cid()]);
    } else {
      collisionGroups.slice().reverse().some((group) => {
        if (~group.indexOf(found.cid())) {
          group.push(event.cid());
          return true;
        }
        return false;
      });
    }
  });
  return collisionGroups;
}
function getLastRowInColumn(matrix, col) {
  let { length: row } = matrix;
  while (row > 0) {
    row -= 1;
    if (!isUndefined_1(matrix[row][col])) {
      return row;
    }
  }
  return -1;
}
function getMatrices(collection, collisionGroups, usingTravelTime = true) {
  const result = [];
  collisionGroups.forEach((group) => {
    const matrix = [[]];
    group.forEach((eventID) => {
      const event = collection.get(eventID);
      let col = 0;
      let found = false;
      let nextRow;
      let lastRowInColumn;
      while (!found) {
        lastRowInColumn = getLastRowInColumn(matrix, col);
        if (lastRowInColumn === -1) {
          matrix[0].push(event);
          found = true;
        } else if (!event.collidesWith(matrix[lastRowInColumn][col], usingTravelTime)) {
          nextRow = lastRowInColumn + 1;
          if (isUndefined_1(matrix[nextRow])) {
            matrix[nextRow] = [];
          }
          matrix[nextRow][col] = event;
          found = true;
        }
        col += 1;
      }
    });
    result.push(matrix);
  });
  return result;
}
function getEventInDateRangeFilter(start, end) {
  return (model) => {
    const ownStarts = model.getStarts();
    const ownEnds = model.getEnds();
    return !(ownEnds < start || ownStarts > end);
  };
}
function positionUIModels(start, end, matrices, iteratee) {
  const ymdListToRender = makeDateRange(start, end, MS_PER_DAY).map(
    (date2) => toFormat(date2, "YYYYMMDD")
  );
  matrices.forEach((matrix) => {
    matrix.forEach((column) => {
      column.forEach((uiModel, index) => {
        if (!uiModel) {
          return;
        }
        const ymd = toFormat(uiModel.getStarts(), "YYYYMMDD");
        const dateLength = makeDateRange(
          toStartOfDay(uiModel.getStarts()),
          toEndOfDay(uiModel.getEnds()),
          MS_PER_DAY
        ).length;
        uiModel.top = index;
        uiModel.left = ymdListToRender.indexOf(ymd);
        uiModel.width = dateLength;
        iteratee == null ? void 0 : iteratee(uiModel);
      });
    });
  });
}
function limit$1(start, end, uiModel) {
  if (uiModel.getStarts() < start) {
    uiModel.exceedLeft = true;
    uiModel.renderStarts = new TZDate(start);
  }
  if (uiModel.getEnds() > end) {
    uiModel.exceedRight = true;
    uiModel.renderEnds = new TZDate(end);
  }
  return uiModel;
}
function limitRenderRange(start, end, uiModelColl) {
  if (uiModelColl instanceof Collection) {
    uiModelColl.each((uiModel) => {
      limit$1(start, end, uiModel);
      return true;
    });
    return null;
  }
  return limit$1(start, end, uiModelColl);
}
function convertToUIModel(eventCollection) {
  const uiModelColl = new Collection((uiModel) => {
    return uiModel.cid();
  });
  eventCollection.each(function(event) {
    uiModelColl.add(new EventUIModel(event));
  });
  return uiModelColl;
}
function _isAllday({ model }) {
  return model.isAllday || model.hasMultiDates;
}
function _isNotAllday(uiModel) {
  return !_isAllday(uiModel);
}
function _weightTopValue(uiModel) {
  uiModel.top = uiModel.top || 0;
  uiModel.top += 1;
}
function _adjustRenderRange(start, end, uiModelColl) {
  uiModelColl.each((uiModel) => {
    if (uiModel.model.isAllday || uiModel.model.hasMultiDates) {
      limitRenderRange(toStartOfDay(start), toEndOfDay(end), uiModel);
    }
  });
}
function _getAlldayMaxTopIndexAtYMD(idsOfDay, ymd, uiModelAlldayColl) {
  const topIndexesInDate = [];
  idsOfDay[ymd].forEach((cid) => {
    uiModelAlldayColl.doWhenHas(cid, (uiModel) => {
      topIndexesInDate.push(uiModel.top);
    });
  });
  if (topIndexesInDate.length > 0) {
    return Math.max(...topIndexesInDate);
  }
  return 0;
}
function _adjustTimeTopIndex(idsOfDay, uiModelColl) {
  const vAlldayColl = uiModelColl.filter(_isAllday);
  const sortedTimeEvents = uiModelColl.filter(_isNotAllday).sort(array.compare.event.asc);
  const maxIndexInYMD = {};
  sortedTimeEvents.forEach((timeUIModel) => {
    const eventYMD = toFormat(timeUIModel.getStarts(), "YYYYMMDD");
    let alldayMaxTopInYMD = maxIndexInYMD[eventYMD];
    if (isUndefined_1(alldayMaxTopInYMD)) {
      alldayMaxTopInYMD = maxIndexInYMD[eventYMD] = _getAlldayMaxTopIndexAtYMD(
        idsOfDay,
        eventYMD,
        vAlldayColl
      );
    }
    maxIndexInYMD[eventYMD] = timeUIModel.top = alldayMaxTopInYMD + 1;
  });
}
function _stackTimeFromTop(idsOfDay, uiModelColl) {
  const uiModelAlldayColl = uiModelColl.filter(_isAllday);
  const sortedTimeEvents = uiModelColl.filter(_isNotAllday).sort(array.compare.event.asc);
  const indiceInYMD = {};
  sortedTimeEvents.forEach((timeUIModel) => {
    var _a;
    const eventYMD = toFormat(timeUIModel.getStarts(), "YYYYMMDD");
    let topArrayInYMD = indiceInYMD[eventYMD];
    if (isUndefined_1(topArrayInYMD)) {
      topArrayInYMD = indiceInYMD[eventYMD] = [];
      (_a = idsOfDay[eventYMD]) == null ? void 0 : _a.forEach((cid) => {
        uiModelAlldayColl.doWhenHas(cid, (uiModel) => {
          topArrayInYMD.push(uiModel.top);
        });
      });
    }
    if (topArrayInYMD.indexOf(timeUIModel.top) >= 0) {
      const maxTopInYMD = Math.max(...topArrayInYMD) + 1;
      for (let i2 = 1; i2 <= maxTopInYMD; i2 += 1) {
        timeUIModel.top = i2;
        if (topArrayInYMD.indexOf(timeUIModel.top) < 0) {
          break;
        }
      }
    }
    topArrayInYMD.push(timeUIModel.top);
  });
}
function _addMultiDatesInfo$1(uiModelColl) {
  uiModelColl.each((uiModel) => {
    const { model } = uiModel;
    const start = model.getStarts();
    const end = model.getEnds();
    model.hasMultiDates = !isSameDate(start, end);
    if (!model.isAllday && model.hasMultiDates) {
      uiModel.renderStarts = toStartOfDay(start);
      uiModel.renderEnds = toEndOfDay(end);
    }
  });
}
function findByDateRange$1(calendarData, condition) {
  const { start, end, andFilters = [], alldayFirstMode = false } = condition;
  const { events, idsOfDay } = calendarData;
  const filterFn = Collection.and(...[getEventInDateRangeFilter(start, end)].concat(andFilters));
  const coll = events.filter(filterFn);
  const uiModelColl = convertToUIModel(coll);
  _addMultiDatesInfo$1(uiModelColl);
  _adjustRenderRange(start, end, uiModelColl);
  const vList = uiModelColl.sort(array.compare.event.asc);
  const usingTravelTime = false;
  const collisionGroup = getCollisionGroup(vList, usingTravelTime);
  const matrices = getMatrices(uiModelColl, collisionGroup, usingTravelTime);
  positionUIModels(start, end, matrices, _weightTopValue);
  if (alldayFirstMode) {
    _adjustTimeTopIndex(idsOfDay, uiModelColl);
  } else {
    _stackTimeFromTop(idsOfDay, uiModelColl);
  }
  return matrices;
}
function _makeHourRangeFilter(hStart, hEnd) {
  return (uiModel) => {
    const ownHourStart = uiModel.getStarts();
    const ownHourEnd = uiModel.getEnds();
    const ownHourStartTime = ownHourStart.getTime();
    const ownHourEndTime = ownHourEnd.getTime();
    const yyyy = ownHourStart.getFullYear();
    const mm = ownHourStart.getMonth();
    const dd = ownHourStart.getDate();
    const hourStart = new TZDate(yyyy, mm, dd).setHours(hStart);
    const hourEnd = new TZDate(yyyy, mm, dd).setHours(hEnd);
    return ownHourStartTime >= hourStart && ownHourStartTime < hourEnd || ownHourEndTime > hourStart && ownHourEndTime <= hourEnd || ownHourStartTime < hourStart && ownHourEndTime > hourStart || ownHourEndTime > hourEnd && ownHourStartTime < hourEnd;
  };
}
function _makeGetUIModelFuncForTimeView(hourStart, hourEnd) {
  if (hourStart === 0 && hourEnd === 24) {
    return (uiModelColl) => {
      return uiModelColl.sort(array.compare.event.asc);
    };
  }
  return (uiModelColl) => {
    return uiModelColl.filter(_makeHourRangeFilter(hourStart, hourEnd)).sort(array.compare.event.asc);
  };
}
function splitEventByDateRange(idsOfDay, start, end, uiModelColl) {
  const result = {};
  const range2 = getDateRange(start, end);
  range2.forEach((date2) => {
    const ymd = toFormat(date2, "YYYYMMDD");
    const ids = idsOfDay[ymd];
    const collection = result[ymd] = new Collection((event) => {
      return event.cid();
    });
    if (ids && ids.length) {
      ids.forEach((id) => {
        uiModelColl.doWhenHas(id, (event) => {
          collection.add(event);
        });
      });
    }
  }, {});
  return result;
}
function getUIModelForTimeView(idsOfDay, condition) {
  const { start, end, uiModelTimeColl, hourStart, hourEnd } = condition;
  const ymdSplitted = splitEventByDateRange(idsOfDay, start, end, uiModelTimeColl);
  const result = {};
  const _getUIModel = _makeGetUIModelFuncForTimeView(hourStart, hourEnd);
  const usingTravelTime = true;
  Object.entries(ymdSplitted).forEach(([ymd, uiModelColl]) => {
    const uiModels = _getUIModel(uiModelColl);
    const collisionGroups = getCollisionGroup(uiModels, usingTravelTime);
    const matrices = getMatrices(uiModelColl, collisionGroups, usingTravelTime);
    result[ymd] = matrices;
  });
  return result;
}
function _addMultiDatesInfo(uiModelColl) {
  uiModelColl.each((uiModel) => {
    const { model } = uiModel;
    model.hasMultiDates = true;
    uiModel.renderStarts = toStartOfDay(model.getStarts());
    uiModel.renderEnds = toEndOfDay(model.getEnds());
  });
}
function getUIModelForAlldayView(start, end, uiModelColl) {
  if (!uiModelColl || !uiModelColl.size) {
    return [];
  }
  _addMultiDatesInfo(uiModelColl);
  limitRenderRange(start, end, uiModelColl);
  const uiModels = uiModelColl.sort(array.compare.event.asc);
  const usingTravelTime = true;
  const collisionGroups = getCollisionGroup(uiModels, usingTravelTime);
  const matrices = getMatrices(uiModelColl, collisionGroups, usingTravelTime);
  positionUIModels(start, end, matrices);
  return matrices;
}
function findByDateRange(calendarData, condition) {
  var _a, _b;
  const { start, end, panels, andFilters = [], options } = condition;
  const { events, idsOfDay } = calendarData;
  const hourStart = (_a = options == null ? void 0 : options.hourStart) != null ? _a : 0;
  const hourEnd = (_b = options == null ? void 0 : options.hourEnd) != null ? _b : 24;
  const filterFn = Collection.and(...[getEventInDateRangeFilter(start, end)].concat(andFilters));
  const uiModelColl = convertToUIModel(events.filter(filterFn));
  const group = uiModelColl.groupBy(filterByCategory);
  return panels.reduce(
    (acc, cur) => {
      const { name, type } = cur;
      if (isNil(group[name])) {
        return acc;
      }
      return __spreadProps(__spreadValues({}, acc), {
        [name]: type === "daygrid" ? getUIModelForAlldayView(start, end, group[name]) : getUIModelForTimeView(idsOfDay, {
          start,
          end,
          uiModelTimeColl: group[name],
          hourStart,
          hourEnd
        })
      });
    },
    {
      milestone: [],
      task: [],
      allday: [],
      time: {}
    }
  );
}
function limit(value, minArr, maxArr) {
  const v2 = Math.max(value, ...minArr);
  return Math.min(v2, ...maxArr);
}
function ratio(a2, b2, y2) {
  return b2 * y2 / a2;
}
function isBetween$1(value, min2, max2) {
  return min2 <= value && value <= max2;
}
const EVENT_HEIGHT = 22;
const TOTAL_WIDTH = 100;
function forEachMatrix3d(matrices, iteratee) {
  matrices.forEach((matrix) => {
    matrix.forEach((row) => {
      row.forEach((value, index) => {
        iteratee(value, index);
      });
    });
  });
}
function isWithinHeight(containerHeight, eventHeight) {
  return ({ top }) => containerHeight >= top * eventHeight;
}
function isExceededHeight(containerHeight, eventHeight) {
  return ({ top }) => containerHeight < top * eventHeight;
}
function getExceedCount(uiModel, containerHeight, eventHeight) {
  return uiModel.filter(isExceededHeight(containerHeight, eventHeight)).length;
}
const getWeekendCount = (row) => row.filter((cell) => isWeekend(cell.getDay())).length;
function getGridWidthAndLeftPercentValues(row, narrowWeekend, totalWidth) {
  const weekendCount = getWeekendCount(row);
  const gridCellCount = row.length;
  const isAllWeekend = weekendCount === gridCellCount;
  const widthPerDay = totalWidth / (narrowWeekend && !isAllWeekend ? gridCellCount * 2 - weekendCount : gridCellCount);
  const widthList = row.map((cell) => {
    const day = cell.getDay();
    if (!narrowWeekend || isAllWeekend) {
      return widthPerDay;
    }
    return isWeekend(day) ? widthPerDay : widthPerDay * 2;
  });
  const leftList = widthList.reduce(
    (acc, _2, index) => index ? [...acc, acc[index - 1] + widthList[index - 1]] : [0],
    []
  );
  return {
    widthList,
    leftList
  };
}
function getWidth(widthList, start, end) {
  return widthList.reduce((acc, width, index) => {
    if (start <= index && index <= end) {
      return acc + width;
    }
    return acc;
  }, 0);
}
const isInGrid = (gridDate) => {
  return (uiModel) => {
    const eventStart = toStartOfDay(uiModel.getStarts());
    const eventEnd = toStartOfDay(uiModel.getEnds());
    return eventStart <= gridDate && gridDate <= eventEnd;
  };
};
function getGridDateIndex(date2, row) {
  return row.findIndex((cell) => date2 >= toStartOfDay(cell) && date2 <= toEndOfDay(cell));
}
const getLeftAndWidth = (startIndex, endIndex, row, narrowWeekend) => {
  const { widthList } = getGridWidthAndLeftPercentValues(row, narrowWeekend, TOTAL_WIDTH);
  return {
    left: !startIndex ? 0 : getWidth(widthList, 0, startIndex - 1),
    width: getWidth(widthList, startIndex != null ? startIndex : 0, endIndex < 0 ? row.length - 1 : endIndex)
  };
};
const getEventLeftAndWidth = (start, end, row, narrowWeekend) => {
  const { widthList } = getGridWidthAndLeftPercentValues(row, narrowWeekend, TOTAL_WIDTH);
  let gridStartIndex = 0;
  let gridEndIndex = row.length - 1;
  row.forEach((cell, index) => {
    if (cell <= start) {
      gridStartIndex = index;
    }
    if (cell <= end) {
      gridEndIndex = index;
    }
  });
  return {
    width: getWidth(widthList, gridStartIndex, gridEndIndex),
    left: !gridStartIndex ? 0 : getWidth(widthList, 0, gridStartIndex - 1)
  };
};
function getEventUIModelWithPosition(uiModel, row, narrowWeekend = false) {
  const modelStart = uiModel.getStarts();
  const modelEnd = uiModel.getEnds();
  const { width, left } = getEventLeftAndWidth(modelStart, modelEnd, row, narrowWeekend);
  uiModel.width = width;
  uiModel.left = left;
  return uiModel;
}
function getRenderedEventUIModels(row, calendarData, narrowWeekend) {
  const { idsOfDay } = calendarData;
  const eventUIModels = findByDateRange$1(calendarData, {
    start: row[0],
    end: toEndOfDay(row[row.length - 1])
  });
  const idEventModelMap = [];
  forEachMatrix3d(eventUIModels, (uiModel) => {
    const cid = uiModel.model.cid();
    idEventModelMap[cid] = getEventUIModelWithPosition(uiModel, row, narrowWeekend);
  });
  const gridDateEventModelMap = Object.keys(idsOfDay).reduce(
    (acc, ymd) => {
      const ids = idsOfDay[ymd];
      acc[ymd] = ids.map((cid) => idEventModelMap[cid]).filter((vm) => !!vm);
      return acc;
    },
    {}
  );
  return {
    uiModels: Object.values(idEventModelMap),
    gridDateEventModelMap
  };
}
const getDayGridEventModels = (eventModels, row, narrowWeekend = false) => {
  forEachMatrix3d(eventModels, (uiModel) => {
    const modelStart = uiModel.getStarts();
    const modelEnd = uiModel.getEnds();
    const { width, left } = getEventLeftAndWidth(modelStart, modelEnd, row, narrowWeekend);
    uiModel.width = width;
    uiModel.left = left;
    uiModel.top += 1;
  });
  return flattenMatrix3d(eventModels);
};
const getModels = (models) => models.filter((model) => !!model);
function flattenMatrix3d(matrices) {
  return matrices.flatMap((matrix) => matrix.flatMap((models) => getModels(models)));
}
const getTimeGridEventModels = (eventMatrix) => Array.from(
  new Set(
    Object.values(eventMatrix).reduce(
      (result, matrix3d) => result.concat(...flattenMatrix3d(matrix3d)),
      []
    )
  )
);
const getWeekViewEvents = (row, calendarData, {
  narrowWeekend,
  hourStart,
  hourEnd,
  weekStartDate,
  weekEndDate
}) => {
  const panels = [
    {
      name: "milestone",
      type: "daygrid",
      show: true
    },
    {
      name: "task",
      type: "daygrid",
      show: true
    },
    {
      name: "allday",
      type: "daygrid",
      show: true
    },
    {
      name: "time",
      type: "timegrid",
      show: true
    }
  ];
  const eventModels = findByDateRange(calendarData, {
    start: weekStartDate,
    end: weekEndDate,
    panels,
    andFilters: [],
    options: {
      hourStart,
      hourEnd
    }
  });
  return Object.keys(eventModels).reduce(
    (acc, cur) => {
      const events = eventModels[cur];
      return __spreadProps(__spreadValues({}, acc), {
        [cur]: Array.isArray(events) ? getDayGridEventModels(events, row, narrowWeekend) : getTimeGridEventModels(events)
      });
    },
    {
      milestone: [],
      allday: [],
      task: [],
      time: []
    }
  );
};
function createDateMatrixOfMonth(renderTargetDate, {
  workweek = false,
  visibleWeeksCount = 0,
  startDayOfWeek = 0,
  isAlways6Weeks = true
}) {
  const targetDate = new TZDate(renderTargetDate);
  const shouldApplyVisibleWeeksCount = visibleWeeksCount > 0;
  const baseDate = shouldApplyVisibleWeeksCount ? targetDate : toStartOfMonth(targetDate);
  const firstDateOfMatrix = subtractDate(
    baseDate,
    baseDate.getDay() - startDayOfWeek + (baseDate.getDay() < startDayOfWeek ? WEEK_DAYS : 0)
  );
  const dayOfFirstDateOfMatrix = firstDateOfMatrix.getDay();
  const totalDatesCountOfMonth = toEndOfMonth(targetDate).getDate();
  const initialDifference = getDateDifference(firstDateOfMatrix, baseDate);
  const totalDatesOfMatrix = totalDatesCountOfMonth + Math.abs(initialDifference);
  let totalWeeksOfMatrix = DEFAULT_VISIBLE_WEEKS;
  if (shouldApplyVisibleWeeksCount) {
    totalWeeksOfMatrix = visibleWeeksCount;
  } else if (isAlways6Weeks === false) {
    totalWeeksOfMatrix = Math.ceil(totalDatesOfMatrix / WEEK_DAYS);
  }
  return range_1(0, totalWeeksOfMatrix).map(
    (weekIndex) => range_1(0, WEEK_DAYS).reduce((weekRow, dayOfWeek) => {
      const steps = weekIndex * WEEK_DAYS + dayOfWeek;
      const currentDay = (steps + dayOfFirstDateOfMatrix) % WEEK_DAYS;
      if (!workweek || workweek && !isWeekend(currentDay)) {
        const date2 = addDate(firstDateOfMatrix, steps);
        weekRow.push(date2);
      }
      return weekRow;
    }, [])
  );
}
function getWeekDates(renderDate, { startDayOfWeek = Day$2.SUN, workweek }) {
  const now = toStartOfDay(renderDate);
  const nowDay = now.getDay();
  const prevDateCount = nowDay - startDayOfWeek;
  const weekDayList = prevDateCount >= 0 ? range_1(-prevDateCount, WEEK_DAYS - prevDateCount) : range_1(-WEEK_DAYS - prevDateCount, -prevDateCount);
  return weekDayList.reduce((acc, day) => {
    const date2 = addDate(now, day);
    if (workweek && isWeekend(date2.getDay())) {
      return acc;
    }
    acc.push(date2);
    return acc;
  }, []);
}
function getColumnsData(datesOfWeek, narrowWeekend = false) {
  const datesCount = datesOfWeek.length;
  const shouldApplyNarrowWeekend = datesCount > 5 && narrowWeekend;
  const defaultWidthByColumns = shouldApplyNarrowWeekend ? 100 / (datesCount - 1) : 100 / datesCount;
  return datesOfWeek.map((date2) => {
    const width = shouldApplyNarrowWeekend && isWeekend(date2.getDay()) ? defaultWidthByColumns / 2 : defaultWidthByColumns;
    return {
      date: date2,
      width
    };
  }).reduce((result, currentDateAndWidth, index) => {
    const prev = result[index - 1];
    result.push(__spreadProps(__spreadValues({}, currentDateAndWidth), {
      left: index === 0 ? 0 : prev.left + prev.width
    }));
    return result;
  }, []);
}
function createTimeGridData(datesOfWeek, options) {
  var _a;
  const columns = getColumnsData(datesOfWeek, (_a = options.narrowWeekend) != null ? _a : false);
  const steps = (options.hourEnd - options.hourStart) * 2;
  const baseHeight = 100 / steps;
  const rows = range_1(steps).map((step, index) => {
    const isOdd = index % 2 === 1;
    const hour = options.hourStart + Math.floor(step / 2);
    const startTime = `${hour}:${isOdd ? "30" : "00"}`.padStart(5, "0");
    const endTime = (isOdd ? `${hour + 1}:00` : `${hour}:30`).padStart(
      5,
      "0"
    );
    return {
      top: baseHeight * index,
      height: baseHeight,
      startTime,
      endTime
    };
  });
  return {
    columns,
    rows
  };
}
function getRelativeMousePosition({ clientX, clientY }, { left, top, clientLeft, clientTop }) {
  return [clientX - left - clientLeft, clientY - top - clientTop];
}
function getIndexFromPosition(arrayLength, maxRange, currentPosition) {
  const calculatedIndex = Math.floor(ratio(maxRange, arrayLength, currentPosition));
  return limit(calculatedIndex, [0], [arrayLength - 1]);
}
function createGridPositionFinder({
  rowsCount,
  columnsCount,
  container,
  narrowWeekend = false,
  startDayOfWeek = Day$2.SUN
}) {
  if (isNil(container)) {
    return () => null;
  }
  const dayRange = range_1(startDayOfWeek, startDayOfWeek + columnsCount).map(
    (day) => day % WEEK_DAYS
  );
  const narrowColumnCount = narrowWeekend ? dayRange.filter((day) => isWeekend(day)).length : 0;
  return function gridPositionFinder(mousePosition) {
    const {
      left: containerLeft,
      top: containerTop,
      width: containerWidth,
      height: containerHeight
    } = container.getBoundingClientRect();
    const [left, top] = getRelativeMousePosition(mousePosition, {
      left: containerLeft,
      top: containerTop,
      clientLeft: container.clientLeft,
      clientTop: container.clientTop
    });
    if (left < 0 || top < 0 || left > containerWidth || top > containerHeight) {
      return null;
    }
    const unitWidth = narrowWeekend ? containerWidth / (columnsCount - narrowColumnCount + 1) : containerWidth / columnsCount;
    const columnWidthList = dayRange.map(
      (dayOfWeek) => narrowWeekend && isWeekend(dayOfWeek) ? unitWidth / 2 : unitWidth
    );
    const columnLeftList = [];
    columnWidthList.forEach((width, index) => {
      if (index === 0) {
        columnLeftList.push(0);
      } else {
        columnLeftList.push(columnLeftList[index - 1] + columnWidthList[index - 1]);
      }
    });
    const columnIndex = findLastIndex(columnLeftList, (columnLeft) => left >= columnLeft);
    return {
      columnIndex,
      rowIndex: getIndexFromPosition(rowsCount, containerHeight, top)
    };
  };
}
function commonGridSelectionSelector(theme) {
  return theme.common.gridSelection;
}
function GridSelection$1({ type, gridSelectionData, weekDates, narrowWeekend }) {
  const { backgroundColor, border } = useTheme(commonGridSelectionSelector);
  const { startCellIndex, endCellIndex } = gridSelectionData;
  const { left, width } = getLeftAndWidth(
    Math.min(startCellIndex, endCellIndex),
    Math.max(startCellIndex, endCellIndex),
    weekDates,
    narrowWeekend
  );
  const style = {
    left: toPercent(left),
    width: toPercent(width),
    height: toPercent(100),
    backgroundColor,
    border
  };
  return width > 0 ? /* @__PURE__ */ y$3("div", {
    className: cls(type, "grid-selection"),
    style
  }) : null;
}
function createSortedGridSelection(initPos, currentPos, isReversed) {
  return {
    startColumnIndex: isReversed ? currentPos.columnIndex : initPos.columnIndex,
    startRowIndex: isReversed ? currentPos.rowIndex : initPos.rowIndex,
    endColumnIndex: isReversed ? initPos.columnIndex : currentPos.columnIndex,
    endRowIndex: isReversed ? initPos.rowIndex : currentPos.rowIndex
  };
}
function calculateTimeGridSelectionByCurrentIndex(timeGridSelection, columnIndex, maxRowIndex) {
  if (isNil(timeGridSelection)) {
    return null;
  }
  const { startColumnIndex, endColumnIndex, endRowIndex, startRowIndex } = timeGridSelection;
  if (!isBetween$1(columnIndex, startColumnIndex, endColumnIndex)) {
    return null;
  }
  const hasMultipleColumns = startColumnIndex !== endColumnIndex;
  const isStartingColumn = columnIndex === startColumnIndex;
  const resultGridSelection = {
    startRowIndex,
    endRowIndex,
    isSelectingMultipleColumns: hasMultipleColumns,
    isStartingColumn
  };
  if (startColumnIndex < columnIndex && columnIndex < endColumnIndex) {
    resultGridSelection.startRowIndex = 0;
    resultGridSelection.endRowIndex = maxRowIndex;
  } else if (startColumnIndex !== endColumnIndex) {
    if (startColumnIndex === columnIndex) {
      resultGridSelection.endRowIndex = maxRowIndex;
    } else if (endColumnIndex === columnIndex) {
      resultGridSelection.startRowIndex = 0;
    }
  }
  return resultGridSelection;
}
const timeGridSelectionHelper = {
  sortSelection: (initPos, currentPos) => {
    const isReversed = initPos.columnIndex > currentPos.columnIndex || initPos.columnIndex === currentPos.columnIndex && initPos.rowIndex > currentPos.rowIndex;
    return createSortedGridSelection(initPos, currentPos, isReversed);
  },
  getDateFromCollection: (dateCollection, gridSelection) => {
    const timeGridData = dateCollection;
    const startDate = setTimeStrToDate(
      timeGridData.columns[gridSelection.startColumnIndex].date,
      timeGridData.rows[gridSelection.startRowIndex].startTime
    );
    const endDate = setTimeStrToDate(
      timeGridData.columns[gridSelection.endColumnIndex].date,
      timeGridData.rows[gridSelection.endRowIndex].endTime
    );
    return [startDate, endDate];
  },
  calculateSelection: calculateTimeGridSelectionByCurrentIndex
};
function calculateDayGridMonthSelectionByCurrentIndex(gridSelection, currentIndex, weekLength) {
  if (!(isPresent(gridSelection) && isPresent(currentIndex) && isPresent(weekLength))) {
    return null;
  }
  const { startRowIndex, startColumnIndex, endRowIndex, endColumnIndex } = gridSelection;
  if (!isBetween$1(
    currentIndex,
    Math.min(startRowIndex, endRowIndex),
    Math.max(startRowIndex, endRowIndex)
  )) {
    return null;
  }
  let startCellIndex = startColumnIndex;
  let endCellIndex = endColumnIndex;
  if (startRowIndex < currentIndex) {
    startCellIndex = 0;
  }
  if (endRowIndex > currentIndex) {
    endCellIndex = weekLength - 1;
  }
  return { startCellIndex, endCellIndex };
}
const dayGridMonthSelectionHelper = {
  sortSelection: (initPos, currentPos) => {
    const isReversed = initPos.rowIndex > currentPos.rowIndex || initPos.rowIndex === currentPos.rowIndex && initPos.columnIndex > currentPos.columnIndex;
    return createSortedGridSelection(initPos, currentPos, isReversed);
  },
  getDateFromCollection: (dateCollection, gridSelection) => {
    const dateMatrix = dateCollection;
    return [
      dateMatrix[gridSelection.startRowIndex][gridSelection.startColumnIndex],
      dateMatrix[gridSelection.endRowIndex][gridSelection.endColumnIndex]
    ];
  },
  calculateSelection: calculateDayGridMonthSelectionByCurrentIndex
};
function calculateAlldayGridRowSelectionByCurrentIndex(gridSelection) {
  return isPresent(gridSelection) ? {
    startCellIndex: gridSelection.startColumnIndex,
    endCellIndex: gridSelection.endColumnIndex
  } : null;
}
const alldayGridRowSelectionHelper = {
  sortSelection: (initPos, currentPos) => {
    const isReversed = initPos.columnIndex > currentPos.columnIndex;
    return createSortedGridSelection(initPos, currentPos, isReversed);
  },
  getDateFromCollection: (dateCollection, gridSelection) => {
    const weekDates = dateCollection;
    return [weekDates[gridSelection.startColumnIndex], weekDates[gridSelection.endColumnIndex]];
  },
  calculateSelection: calculateAlldayGridRowSelectionByCurrentIndex
};
function dayGridWeekSelectionSelector(state) {
  return alldayGridRowSelectionHelper.calculateSelection(state.gridSelection.dayGridWeek);
}
function AlldayGridSelection({ weekDates, narrowWeekend }) {
  const calculatedGridSelection = useStore(dayGridWeekSelectionSelector);
  if (isNil(calculatedGridSelection)) {
    return null;
  }
  return /* @__PURE__ */ y$3(GridSelection$1, {
    type: "allday",
    gridSelectionData: calculatedGridSelection,
    weekDates,
    narrowWeekend
  });
}
function g$1(n2, t2) {
  for (var e2 in t2)
    n2[e2] = t2[e2];
  return n2;
}
function C$1(n2, t2) {
  for (var e2 in n2)
    if ("__source" !== e2 && !(e2 in t2))
      return true;
  for (var r2 in t2)
    if ("__source" !== r2 && n2[r2] !== t2[r2])
      return true;
  return false;
}
function w$1(n2) {
  this.props = n2;
}
function x$1(n2, e2) {
  function r2(n3) {
    var t2 = this.props.ref, r3 = t2 == n3.ref;
    return !r3 && t2 && (t2.call ? t2(null) : t2.current = null), e2 ? !e2(this.props, n3) || !r3 : C$1(this.props, n3);
  }
  function u2(e3) {
    return this.shouldComponentUpdate = r2, y$3(n2, e3);
  }
  return u2.displayName = "Memo(" + (n2.displayName || n2.name) + ")", u2.prototype.isReactComponent = true, u2.__f = true, u2;
}
(w$1.prototype = new k$4()).isPureReactComponent = true, w$1.prototype.shouldComponentUpdate = function(n2, t2) {
  return C$1(this.props, n2) || C$1(this.state, t2);
};
var R = l$3.__b;
l$3.__b = function(n2) {
  n2.type && n2.type.__f && n2.ref && (n2.props.ref = n2.ref, n2.ref = null), R && R(n2);
};
var N = "undefined" != typeof Symbol && Symbol.for && Symbol.for("react.forward_ref") || 3911;
function k$1(n2) {
  function t2(t3) {
    var e2 = g$1({}, t3);
    return delete e2.ref, n2(e2, t3.ref || null);
  }
  return t2.$$typeof = N, t2.render = t2, t2.prototype.isReactComponent = t2.__f = true, t2.displayName = "ForwardRef(" + (n2.displayName || n2.name) + ")", t2;
}
var T = l$3.__e;
l$3.__e = function(n2, t2, e2, r2) {
  if (n2.then) {
    for (var u2, o2 = t2; o2 = o2.__; )
      if ((u2 = o2.__c) && u2.__c)
        return null == t2.__e && (t2.__e = e2.__e, t2.__k = e2.__k), u2.__c(n2, t2);
  }
  T(n2, t2, e2, r2);
};
var I = l$3.unmount;
function L(n2, t2, e2) {
  return n2 && (n2.__c && n2.__c.__H && (n2.__c.__H.__.forEach(function(n3) {
    "function" == typeof n3.__c && n3.__c();
  }), n2.__c.__H = null), null != (n2 = g$1({}, n2)).__c && (n2.__c.__P === e2 && (n2.__c.__P = t2), n2.__c = null), n2.__k = n2.__k && n2.__k.map(function(n3) {
    return L(n3, t2, e2);
  })), n2;
}
function U(n2, t2, e2) {
  return n2 && (n2.__v = null, n2.__k = n2.__k && n2.__k.map(function(n3) {
    return U(n3, t2, e2);
  }), n2.__c && n2.__c.__P === t2 && (n2.__e && e2.insertBefore(n2.__e, n2.__d), n2.__c.__e = true, n2.__c.__P = e2)), n2;
}
function D() {
  this.__u = 0, this.t = null, this.__b = null;
}
function F$1(n2) {
  var t2 = n2.__.__c;
  return t2 && t2.__a && t2.__a(n2);
}
function V() {
  this.u = null, this.o = null;
}
l$3.unmount = function(n2) {
  var t2 = n2.__c;
  t2 && t2.__R && t2.__R(), t2 && true === n2.__h && (n2.type = null), I && I(n2);
}, (D.prototype = new k$4()).__c = function(n2, t2) {
  var e2 = t2.__c, r2 = this;
  null == r2.t && (r2.t = []), r2.t.push(e2);
  var u2 = F$1(r2.__v), o2 = false, i2 = function() {
    o2 || (o2 = true, e2.__R = null, u2 ? u2(l2) : l2());
  };
  e2.__R = i2;
  var l2 = function() {
    if (!--r2.__u) {
      if (r2.state.__a) {
        var n3 = r2.state.__a;
        r2.__v.__k[0] = U(n3, n3.__c.__P, n3.__c.__O);
      }
      var t3;
      for (r2.setState({ __a: r2.__b = null }); t3 = r2.t.pop(); )
        t3.forceUpdate();
    }
  }, c2 = true === t2.__h;
  r2.__u++ || c2 || r2.setState({ __a: r2.__b = r2.__v.__k[0] }), n2.then(i2, i2);
}, D.prototype.componentWillUnmount = function() {
  this.t = [];
}, D.prototype.render = function(n2, e2) {
  if (this.__b) {
    if (this.__v.__k) {
      var r2 = document.createElement("div"), o2 = this.__v.__k[0].__c;
      this.__v.__k[0] = L(this.__b, r2, o2.__O = o2.__P);
    }
    this.__b = null;
  }
  var i2 = e2.__a && y$3(_$3, null, n2.fallback);
  return i2 && (i2.__h = null), [y$3(_$3, null, e2.__a ? null : n2.children), i2];
};
var W = function(n2, t2, e2) {
  if (++e2[1] === e2[0] && n2.o.delete(t2), n2.props.revealOrder && ("t" !== n2.props.revealOrder[0] || !n2.o.size))
    for (e2 = n2.u; e2; ) {
      for (; e2.length > 3; )
        e2.pop()();
      if (e2[1] < e2[0])
        break;
      n2.u = e2 = e2[2];
    }
};
function P(n2) {
  return this.getChildContext = function() {
    return n2.context;
  }, n2.children;
}
function j$1(n2) {
  var e2 = this, r2 = n2.i;
  e2.componentWillUnmount = function() {
    B$3(null, e2.l), e2.l = null, e2.i = null;
  }, e2.i && e2.i !== r2 && e2.componentWillUnmount(), n2.__v ? (e2.l || (e2.i = r2, e2.l = { nodeType: 1, parentNode: r2, childNodes: [], appendChild: function(n3) {
    this.childNodes.push(n3), e2.i.appendChild(n3);
  }, insertBefore: function(n3, t2) {
    this.childNodes.push(n3), e2.i.appendChild(n3);
  }, removeChild: function(n3) {
    this.childNodes.splice(this.childNodes.indexOf(n3) >>> 1, 1), e2.i.removeChild(n3);
  } }), B$3(y$3(P, { context: e2.context }, n2.__v), e2.l)) : e2.l && e2.componentWillUnmount();
}
function z(n2, e2) {
  var r2 = y$3(j$1, { __v: n2, i: e2 });
  return r2.containerInfo = e2, r2;
}
(V.prototype = new k$4()).__a = function(n2) {
  var t2 = this, e2 = F$1(t2.__v), r2 = t2.o.get(n2);
  return r2[0]++, function(u2) {
    var o2 = function() {
      t2.props.revealOrder ? (r2.push(u2), W(t2, n2, r2)) : u2();
    };
    e2 ? e2(o2) : o2();
  };
}, V.prototype.render = function(n2) {
  this.u = null, this.o = /* @__PURE__ */ new Map();
  var t2 = P$2(n2.children);
  n2.revealOrder && "b" === n2.revealOrder[0] && t2.reverse();
  for (var e2 = t2.length; e2--; )
    this.o.set(t2[e2], this.u = [1, 0, this.u]);
  return n2.children;
}, V.prototype.componentDidUpdate = V.prototype.componentDidMount = function() {
  var n2 = this;
  this.o.forEach(function(t2, e2) {
    W(n2, e2, t2);
  });
};
var B = "undefined" != typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103, H = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/, Z = /^on(Ani|Tra|Tou|BeforeInp|Compo)/, Y = /[A-Z0-9]/g, $$1 = "undefined" != typeof document, q = function(n2) {
  return ("undefined" != typeof Symbol && "symbol" == typeof Symbol() ? /fil|che|rad/ : /fil|che|ra/).test(n2);
};
k$4.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(t2) {
  Object.defineProperty(k$4.prototype, t2, { configurable: true, get: function() {
    return this["UNSAFE_" + t2];
  }, set: function(n2) {
    Object.defineProperty(this, t2, { configurable: true, writable: true, value: n2 });
  } });
});
var K = l$3.event;
function Q() {
}
function X() {
  return this.cancelBubble;
}
function nn() {
  return this.defaultPrevented;
}
l$3.event = function(n2) {
  return K && (n2 = K(n2)), n2.persist = Q, n2.isPropagationStopped = X, n2.isDefaultPrevented = nn, n2.nativeEvent = n2;
};
var en = { enumerable: false, configurable: true, get: function() {
  return this.class;
} }, rn = l$3.vnode;
l$3.vnode = function(n2) {
  "string" == typeof n2.type && function(n3) {
    var t2 = n3.props, e2 = n3.type, u2 = {};
    for (var o2 in t2) {
      var i2 = t2[o2];
      if (!("value" === o2 && "defaultValue" in t2 && null == i2 || $$1 && "children" === o2 && "noscript" === e2 || "class" === o2 || "className" === o2)) {
        var l2 = o2.toLowerCase();
        "defaultValue" === o2 && "value" in t2 && null == t2.value ? o2 = "value" : "download" === o2 && true === i2 ? i2 = "" : "ondoubleclick" === l2 ? o2 = "ondblclick" : "onchange" !== l2 || "input" !== e2 && "textarea" !== e2 || q(t2.type) ? "onfocus" === l2 ? o2 = "onfocusin" : "onblur" === l2 ? o2 = "onfocusout" : Z.test(o2) ? o2 = l2 : -1 === e2.indexOf("-") && H.test(o2) ? o2 = o2.replace(Y, "-$&").toLowerCase() : null === i2 && (i2 = void 0) : l2 = o2 = "oninput", "oninput" === l2 && u2[o2 = l2] && (o2 = "oninputCapture"), u2[o2] = i2;
      }
    }
    "select" == e2 && u2.multiple && Array.isArray(u2.value) && (u2.value = P$2(t2.children).forEach(function(n4) {
      n4.props.selected = -1 != u2.value.indexOf(n4.props.value);
    })), "select" == e2 && null != u2.defaultValue && (u2.value = P$2(t2.children).forEach(function(n4) {
      n4.props.selected = u2.multiple ? -1 != u2.defaultValue.indexOf(n4.props.value) : u2.defaultValue == n4.props.value;
    })), t2.class && !t2.className ? (u2.class = t2.class, Object.defineProperty(u2, "className", en)) : (t2.className && !t2.class || t2.class && t2.className) && (u2.class = u2.className = t2.className), n3.props = u2;
  }(n2), n2.$$typeof = B, rn && rn(n2);
};
var un = l$3.__r;
l$3.__r = function(n2) {
  un && un(n2), n2.__c;
};
var on = l$3.diffed;
l$3.diffed = function(n2) {
  on && on(n2);
  var t2 = n2.props, e2 = n2.__e;
  null != e2 && "textarea" === n2.type && "value" in t2 && t2.value !== e2.value && (e2.value = null == t2.value ? "" : t2.value);
};
function hn(n2) {
  return !!n2.__k && (B$3(null, n2), true);
}
function ExceedCount({ index, exceedCount, isClicked, onClickExceedCount }) {
  const clickExceedCount = () => onClickExceedCount(index);
  const style = { display: isClicked ? "none" : "" };
  return exceedCount && !isClicked ? /* @__PURE__ */ y$3("span", {
    className: cls("weekday-exceed-in-week"),
    onClick: clickExceedCount,
    style
  }, /* @__PURE__ */ y$3(Template, {
    template: "weekGridFooterExceed",
    param: exceedCount
  })) : null;
}
function CollapseButton({ isClicked, isClickedIndex, onClickCollapseButton }) {
  return isClicked && isClickedIndex ? /* @__PURE__ */ y$3("span", {
    className: cls("weekday-exceed-in-week"),
    onClick: onClickCollapseButton
  }, /* @__PURE__ */ y$3(Template, {
    template: "collapseBtnTitle"
  })) : null;
}
function GridCell$1({
  width,
  left,
  index,
  exceedCount,
  isClicked,
  onClickExceedCount,
  isClickedIndex,
  onClickCollapseButton,
  isLastCell
}) {
  const { borderRight, backgroundColor } = useTheme(T$1((theme) => theme.week.dayGrid, []));
  const style = {
    width,
    left,
    borderRight: isLastCell ? "none" : borderRight,
    backgroundColor
  };
  return /* @__PURE__ */ y$3("div", {
    className: cls("panel-grid"),
    style
  }, /* @__PURE__ */ y$3(ExceedCount, {
    index,
    exceedCount,
    isClicked,
    onClickExceedCount
  }), /* @__PURE__ */ y$3(CollapseButton, {
    isClickedIndex,
    isClicked,
    onClickCollapseButton
  }));
}
const GridCells = x$1(function GridCells2({
  uiModels,
  weekDates,
  narrowWeekend,
  height,
  clickedIndex,
  isClickedCount,
  onClickExceedCount,
  onClickCollapseButton
}) {
  const eventTopMargin = 2;
  const { widthList, leftList } = getGridWidthAndLeftPercentValues(
    weekDates,
    narrowWeekend,
    TOTAL_WIDTH
  );
  const lastCellIndex = weekDates.length - 1;
  return /* @__PURE__ */ y$3(_$3, null, weekDates.map((cell, index) => {
    const width = toPercent(widthList[index]);
    const left = toPercent(leftList[index]);
    const uiModelsInCell = uiModels.filter(isInGrid(cell));
    const exceedCount = getExceedCount(uiModelsInCell, height, EVENT_HEIGHT + eventTopMargin);
    const isClickedIndex = index === clickedIndex;
    const isLastCell = index === lastCellIndex;
    return /* @__PURE__ */ y$3(GridCell$1, {
      key: `panel-grid-${cell.getDate()}`,
      width,
      left,
      index,
      exceedCount,
      isClicked: isClickedCount,
      onClickExceedCount,
      isClickedIndex,
      onClickCollapseButton,
      isLastCell
    });
  }));
});
function HorizontalEventResizeIcon({ onMouseDown }) {
  return /* @__PURE__ */ y$3("span", {
    className: `${cls("weekday-resize-handle")} ${cls("handle-y")}`,
    onMouseDown,
    "data-testid": "horizontal-event-resize-icon"
  }, /* @__PURE__ */ y$3("i", {
    className: `${cls("icon")} ${cls("ic-handle-y")}`
  }));
}
const LayoutContainerContext = F$3(null);
const LayoutContainerProvider = LayoutContainerContext.Provider;
const useLayoutContainer = () => {
  const ref = q$2(LayoutContainerContext);
  if (isUndefined_1(ref)) {
    throw new Error("LayoutContainerProvider is not found");
  }
  return ref;
};
const DRAGGING_TYPE_CONSTANTS = {
  panelResizer: "panelResizer"
};
const DRAGGING_TYPE_CREATORS = {
  resizeEvent: (area, id) => `event/${area}/resize/${id}`,
  moveEvent: (area, id) => `event/${area}/move/${id}`,
  gridSelection: (type) => `gridSelection/${type}`
};
function useCalendarById(calendarId) {
  return useStore(
    T$1(
      (state) => state.calendar.calendars.find((cal) => cal.id === calendarId),
      [calendarId]
    )
  );
}
function useCalendarColor(model) {
  var _a;
  const calendar = useCalendarById((_a = model == null ? void 0 : model.calendarId) != null ? _a : null);
  return F$2(
    () => ({
      color: calendar == null ? void 0 : calendar.color,
      borderColor: calendar == null ? void 0 : calendar.borderColor,
      backgroundColor: calendar == null ? void 0 : calendar.backgroundColor,
      dragBackgroundColor: calendar == null ? void 0 : calendar.dragBackgroundColor,
      shouldOpacity: calendar == null ? void 0 : calendar.shouldOpacity
    }),
    [calendar]
  );
}
var KEY = /* @__PURE__ */ ((KEY2) => {
  KEY2["ESCAPE"] = "Escape";
  return KEY2;
})(KEY || {});
const KEYCODE = {
  ["Escape"]: 27
};
const MINIMUM_DRAG_MOUSE_DISTANCE = 3;
function useTransientUpdate(selector, subscriber) {
  const store = useInternalStore();
  const selectorRef = _$2(selector);
  const subscriberRef = _$2(subscriber);
  p$2(() => {
    selectorRef.current = selector;
    subscriberRef.current = subscriber;
  }, [selector, subscriber]);
  p$2(
    () => store.subscribe(
      (slice) => subscriberRef.current(slice),
      (state) => selectorRef.current(state)
    ),
    [selector, store]
  );
}
function isKeyPressed(e2, key) {
  return e2.key ? e2.key === key : e2.keyCode === KEYCODE[key];
}
function isLeftClick(buttonNum) {
  return buttonNum === 0;
}
function isMouseMoved(initX, initY, x2, y2) {
  return Math.abs(initX - x2) >= MINIMUM_DRAG_MOUSE_DISTANCE || Math.abs(initY - y2) >= MINIMUM_DRAG_MOUSE_DISTANCE;
}
function useDrag(draggingItemType, { onInit, onDragStart, onDrag, onMouseUp, onPressESCKey } = {}) {
  const { initDrag, setDragging, cancelDrag, reset } = useDispatch("dnd");
  const store = useInternalStore();
  const dndSliceRef = _$2(store.getState().dnd);
  useTransientUpdate(dndSelector, (dndState) => {
    dndSliceRef.current = dndState;
  });
  const [isStarted, setStarted] = h$2(false);
  const handleMouseMoveRef = _$2(null);
  const handleMouseUpRef = _$2(null);
  const handleKeyDownRef = _$2(null);
  const handleMouseDown = T$1(
    (e2) => {
      if (!isLeftClick(e2.button)) {
        return;
      }
      if (e2.currentTarget) {
        e2.currentTarget.ondragstart = function() {
          return false;
        };
      }
      e2.preventDefault();
      setStarted(true);
      initDrag({
        draggingItemType,
        initX: e2.clientX,
        initY: e2.clientY
      });
      onInit == null ? void 0 : onInit(e2, dndSliceRef.current);
    },
    [onInit, draggingItemType, initDrag]
  );
  const handleMouseMove = T$1(
    (e2) => {
      const {
        initX,
        initY,
        draggingState,
        draggingItemType: currentDraggingItemType
      } = dndSliceRef.current;
      if (currentDraggingItemType !== draggingItemType) {
        setStarted(false);
        reset();
        return;
      }
      if (isPresent(initX) && isPresent(initY) && !isMouseMoved(initX, initY, e2.clientX, e2.clientY)) {
        return;
      }
      if (draggingState <= DraggingState.INIT) {
        setDragging({ x: e2.clientX, y: e2.clientY });
        onDragStart == null ? void 0 : onDragStart(e2, dndSliceRef.current);
        return;
      }
      setDragging({ x: e2.clientX, y: e2.clientY });
      onDrag == null ? void 0 : onDrag(e2, dndSliceRef.current);
    },
    [draggingItemType, onDrag, onDragStart, setDragging, reset]
  );
  const handleMouseUp = T$1(
    (e2) => {
      e2.stopPropagation();
      if (isStarted) {
        onMouseUp == null ? void 0 : onMouseUp(e2, dndSliceRef.current);
        setStarted(false);
        reset();
      }
    },
    [isStarted, onMouseUp, reset]
  );
  const handleKeyDown = T$1(
    (e2) => {
      if (isKeyPressed(e2, KEY.ESCAPE)) {
        setStarted(false);
        cancelDrag();
        onPressESCKey == null ? void 0 : onPressESCKey(e2, dndSliceRef.current);
      }
    },
    [onPressESCKey, cancelDrag]
  );
  p$2(() => {
    handleMouseMoveRef.current = handleMouseMove;
    handleMouseUpRef.current = handleMouseUp;
    handleKeyDownRef.current = handleKeyDown;
  }, [handleKeyDown, handleMouseMove, handleMouseUp]);
  p$2(() => {
    const wrappedHandleMouseMove = (e2) => {
      var _a;
      return (_a = handleMouseMoveRef.current) == null ? void 0 : _a.call(handleMouseMoveRef, e2);
    };
    const wrappedHandleMouseUp = (e2) => {
      var _a;
      return (_a = handleMouseUpRef.current) == null ? void 0 : _a.call(handleMouseUpRef, e2);
    };
    const wrappedHandleKeyDown = (e2) => {
      var _a;
      return (_a = handleKeyDownRef.current) == null ? void 0 : _a.call(handleKeyDownRef, e2);
    };
    if (isStarted) {
      document.addEventListener("mousemove", wrappedHandleMouseMove);
      document.addEventListener("mouseup", wrappedHandleMouseUp);
      document.addEventListener("keydown", wrappedHandleKeyDown);
      return () => {
        document.removeEventListener("mousemove", wrappedHandleMouseMove);
        document.removeEventListener("mouseup", wrappedHandleMouseUp);
        document.removeEventListener("keydown", wrappedHandleKeyDown);
      };
    }
    return noop;
  }, [isStarted, reset]);
  return handleMouseDown;
}
function passConditionalProp(condition, prop) {
  return condition ? prop : void 0;
}
function getMargins(flat) {
  return {
    vertical: flat ? 5 : 2,
    horizontal: 8
  };
}
function getBorderRadius(exceedLeft, exceedRight) {
  const leftBorderRadius = exceedLeft ? 0 : "2px";
  const rightBorderRadius = exceedRight ? 0 : "2px";
  return `${leftBorderRadius} ${rightBorderRadius} ${rightBorderRadius} ${leftBorderRadius}`;
}
function getEventItemStyle({
  uiModel,
  flat,
  eventHeight,
  isDraggingTarget,
  calendarColor
}) {
  const { exceedLeft, exceedRight } = uiModel;
  const { color, backgroundColor, dragBackgroundColor, borderColor, shouldOpacity } = getEventColors(
    uiModel,
    calendarColor
  );
  const defaultItemStyle = {
    color,
    backgroundColor: isDraggingTarget ? dragBackgroundColor : backgroundColor,
    borderLeft: exceedLeft ? "none" : `3px solid ${borderColor}`,
    borderRadius: getBorderRadius(exceedLeft, exceedRight),
    overflow: "hidden",
    height: eventHeight,
    lineHeight: toPx(eventHeight),
    opacity: shouldOpacity === "1" ? 0.5 : 1
  };
  const margins = getMargins(flat);
  return flat ? __spreadValues({
    marginTop: margins.vertical
  }, defaultItemStyle) : __spreadValues({
    marginLeft: exceedLeft ? 0 : margins.horizontal,
    marginRight: exceedRight ? 0 : margins.horizontal
  }, defaultItemStyle);
}
function getContainerStyle({
  flat,
  uiModel,
  resizingWidth,
  movingLeft,
  eventHeight,
  headerHeight
}) {
  const { top, left, width, model } = uiModel;
  const margins = getMargins(flat);
  const baseStyle = flat ? {} : {
    width: resizingWidth || toPercent(width),
    left: toPercent(movingLeft != null ? movingLeft : left),
    top: (top - 1) * (eventHeight + margins.vertical) + headerHeight,
    position: "absolute"
  };
  return Object.assign(baseStyle, model.customStyle);
}
function getTestId({ model }) {
  const calendarId = model.calendarId ? `${model.calendarId}-` : "";
  const id = model.id ? `${model.id}-` : "";
  return `${calendarId}${id}${model.title}`;
}
const classNames$k = {
  eventBody: cls("weekday-event"),
  eventTitle: cls("weekday-event-title"),
  eventDot: cls("weekday-event-dot"),
  moveEvent: cls("dragging--move-event"),
  resizeEvent: cls("dragging--resize-horizontal-event")
};
function HorizontalEvent({
  flat = false,
  uiModel,
  eventHeight,
  headerHeight,
  resizingWidth = null,
  movingLeft = null
}) {
  const { currentView } = useStore(viewSelector);
  const { useDetailPopup, isReadOnly: isReadOnlyCalendar } = useStore(optionsSelector);
  const { setDraggingEventUIModel } = useDispatch("dnd");
  const { showDetailPopup } = useDispatch("popup");
  const layoutContainer = useLayoutContainer();
  const eventBus = useEventBus();
  const calendarColor = useCalendarColor(uiModel.model);
  const [isDraggingTarget, setIsDraggingTarget] = h$2(false);
  const eventContainerRef = _$2(null);
  const { isReadOnly, id, calendarId } = uiModel.model;
  const isDraggingGuideEvent = isPresent(resizingWidth) || isPresent(movingLeft);
  const isDraggableEvent2 = !isReadOnlyCalendar && !isReadOnly && !isDraggingGuideEvent;
  const startDragEvent = (className2) => {
    setDraggingEventUIModel(uiModel);
    layoutContainer == null ? void 0 : layoutContainer.classList.add(className2);
  };
  const endDragEvent = (className2) => {
    setIsDraggingTarget(false);
    layoutContainer == null ? void 0 : layoutContainer.classList.remove(className2);
  };
  useTransientUpdate(dndSelector, ({ draggingEventUIModel, draggingState }) => {
    if (draggingState === DraggingState.DRAGGING && (draggingEventUIModel == null ? void 0 : draggingEventUIModel.cid()) === uiModel.cid() && !isDraggingGuideEvent) {
      setIsDraggingTarget(true);
    } else {
      setIsDraggingTarget(false);
    }
  });
  p$2(() => {
    if (!isDraggingGuideEvent) {
      eventBus.fire("afterRenderEvent", uiModel.model.toEventObject());
    }
  }, []);
  const onResizeStart = useDrag(DRAGGING_TYPE_CREATORS.resizeEvent("dayGrid", `${uiModel.cid()}`), {
    onDragStart: () => startDragEvent(classNames$k.resizeEvent),
    onMouseUp: () => endDragEvent(classNames$k.resizeEvent),
    onPressESCKey: () => endDragEvent(classNames$k.resizeEvent)
  });
  const onMoveStart = useDrag(DRAGGING_TYPE_CREATORS.moveEvent("dayGrid", `${uiModel.cid()}`), {
    onDragStart: () => {
      if (isDraggableEvent2) {
        startDragEvent(classNames$k.moveEvent);
      }
    },
    onMouseUp: (e2, { draggingState }) => {
      endDragEvent(classNames$k.moveEvent);
      const isClick = draggingState <= DraggingState.INIT;
      if (isClick && useDetailPopup && eventContainerRef.current) {
        showDetailPopup(
          {
            event: uiModel.model,
            eventRect: eventContainerRef.current.getBoundingClientRect()
          },
          flat
        );
      }
      if (isClick) {
        eventBus.fire("clickEvent", { event: uiModel.model.toEventObject(), nativeEvent: e2 });
      }
    },
    onPressESCKey: () => endDragEvent(classNames$k.moveEvent)
  });
  const handleResizeStart = (e2) => {
    e2.stopPropagation();
    if (isDraggableEvent2) {
      onResizeStart(e2);
    }
  };
  const handleMoveStart = (e2) => {
    e2.stopPropagation();
    onMoveStart(e2);
  };
  const isDotEvent = !isDraggingTarget && currentView === "month" && uiModel.model.category === "time" && isSameDate(uiModel.model.start, uiModel.model.end);
  const shouldHideResizeHandler = !isDraggableEvent2 || flat || isDraggingTarget || uiModel.exceedRight;
  const containerStyle = getContainerStyle({
    uiModel,
    eventHeight,
    headerHeight,
    flat,
    movingLeft,
    resizingWidth
  });
  const eventItemStyle = getEventItemStyle({
    uiModel,
    flat,
    eventHeight,
    isDraggingTarget,
    calendarColor
  });
  return /* @__PURE__ */ y$3("div", {
    className: cls("weekday-event-block", {
      "weekday-exceed-left": uiModel.exceedLeft,
      "weekday-exceed-right": uiModel.exceedRight
    }),
    style: containerStyle,
    "data-testid": passConditionalProp(isDraggableEvent2, getTestId(uiModel)),
    "data-calendar-id": calendarId,
    "data-event-id": id,
    ref: eventContainerRef
  }, /* @__PURE__ */ y$3("div", {
    className: classNames$k.eventBody,
    style: __spreadProps(__spreadValues({}, eventItemStyle), {
      background: isDotEvent ? null : eventItemStyle.backgroundColor,
      borderLeft: isDotEvent ? null : eventItemStyle.borderLeft
    }),
    onMouseDown: handleMoveStart
  }, isDotEvent ? /* @__PURE__ */ y$3("span", {
    className: classNames$k.eventDot,
    style: { background: eventItemStyle.backgroundColor }
  }) : null, /* @__PURE__ */ y$3("span", {
    className: classNames$k.eventTitle
  }, /* @__PURE__ */ y$3(Template, {
    template: uiModel.model.category,
    param: uiModel.model
  })), !shouldHideResizeHandler ? /* @__PURE__ */ y$3(HorizontalEventResizeIcon, {
    onMouseDown: handleResizeStart
  }) : null));
}
function useWhen(callback, condition) {
  const callbackRef = _$2(callback);
  p$2(() => {
    callbackRef.current = callback;
  }, [callback]);
  p$2(() => {
    const invoke = () => callbackRef.current();
    if (condition) {
      invoke();
    }
  }, [condition]);
}
function useCurrentPointerPositionInGrid(gridPositionFinder) {
  const [currentGridPos, setCurrentGridPos] = h$2(null);
  useTransientUpdate(dndSelector, (dndState) => {
    if (isPresent(dndState.x) && isPresent(dndState.y)) {
      const gridPosition = gridPositionFinder({
        clientX: dndState.x,
        clientY: dndState.y
      });
      if (gridPosition) {
        setCurrentGridPos(gridPosition);
      }
    }
  });
  const clearCurrentGridPos = T$1(() => setCurrentGridPos(null), []);
  return [currentGridPos, clearCurrentGridPos];
}
const getTargetEventId = (itemType, area, behavior) => {
  function isEventDraggingType(_itemType) {
    return new RegExp(`^event/${area}/${behavior}/\\d+$`).test(_itemType);
  }
  if (isNil(itemType)) {
    return null;
  }
  return isEventDraggingType(itemType) ? last(itemType.split("/")) : null;
};
function useDraggingEvent(area, behavior) {
  const [isDraggingEnd, setIsDraggingEnd] = h$2(false);
  const [isDraggingCanceled, setIsDraggingCanceled] = h$2(false);
  const [draggingEvent, setDraggingEvent] = h$2(null);
  useTransientUpdate(dndSelector, ({ draggingItemType, draggingEventUIModel, draggingState }) => {
    const targetEventId = getTargetEventId(draggingItemType, area, behavior);
    const hasMatchingTargetEvent = Number(targetEventId) === (draggingEventUIModel == null ? void 0 : draggingEventUIModel.cid());
    const isIdle = draggingState === DraggingState.IDLE;
    const isCanceled = draggingState === DraggingState.CANCELED;
    if (isNil(draggingEvent) && hasMatchingTargetEvent) {
      setDraggingEvent(draggingEventUIModel);
    }
    if (isPresent(draggingEvent) && (isIdle || isCanceled)) {
      setIsDraggingEnd(true);
      setIsDraggingCanceled(isCanceled);
    }
  });
  const clearDraggingEvent = () => {
    setDraggingEvent(null);
    setIsDraggingEnd(false);
    setIsDraggingCanceled(false);
  };
  return {
    isDraggingEnd,
    isDraggingCanceled,
    draggingEvent,
    clearDraggingEvent
  };
}
function useAlldayGridRowEventMove({ rowStyleInfo, gridPositionFinder }) {
  const eventBus = useEventBus();
  const {
    isDraggingEnd,
    isDraggingCanceled,
    draggingEvent: movingEvent,
    clearDraggingEvent
  } = useDraggingEvent("dayGrid", "move");
  const startGridXRef = _$2(null);
  const [currentGridPos, clearCurrentGridPos] = useCurrentPointerPositionInGrid(gridPositionFinder);
  const { columnIndex } = currentGridPos != null ? currentGridPos : {};
  const targetEventStartGridX = F$2(
    () => isNil(movingEvent) ? null : rowStyleInfo.findIndex(({ left }) => left === movingEvent.left),
    [rowStyleInfo, movingEvent]
  );
  const currentMovingLeft = F$2(() => {
    if (isNil(columnIndex) || isNil(startGridXRef.current) || isNil(targetEventStartGridX)) {
      return null;
    }
    const newColumnIndex = targetEventStartGridX + columnIndex - startGridXRef.current;
    return newColumnIndex < 0 ? -rowStyleInfo[-newColumnIndex].left : rowStyleInfo[newColumnIndex].left;
  }, [columnIndex, rowStyleInfo, targetEventStartGridX]);
  p$2(() => {
    if (isNil(startGridXRef.current) && isPresent(columnIndex)) {
      startGridXRef.current = columnIndex;
    }
  }, [columnIndex]);
  useWhen(() => {
    const shouldUpdate = !isDraggingCanceled && isPresent(movingEvent) && isPresent(columnIndex) && isPresent(currentMovingLeft) && columnIndex !== startGridXRef.current;
    if (shouldUpdate && isPresent(startGridXRef.current)) {
      const dateOffset = columnIndex - startGridXRef.current;
      const newStartDate = new TZDate(movingEvent.model.getStarts());
      const newEndDate = new TZDate(movingEvent.model.getEnds());
      newStartDate.addDate(dateOffset);
      newEndDate.addDate(dateOffset);
      eventBus.fire("beforeUpdateEvent", {
        event: movingEvent.model.toEventObject(),
        changes: {
          start: newStartDate,
          end: newEndDate
        }
      });
    }
    clearDraggingEvent();
    clearCurrentGridPos();
    startGridXRef.current = null;
  }, isDraggingEnd);
  return F$2(
    () => ({
      movingEvent,
      movingLeft: currentMovingLeft
    }),
    [currentMovingLeft, movingEvent]
  );
}
function MovingEventShadow$2({
  rowStyleInfo,
  gridPositionFinder
}) {
  const { movingEvent, movingLeft } = useAlldayGridRowEventMove({
    rowStyleInfo,
    gridPositionFinder
  });
  if (isNil(movingEvent)) {
    return null;
  }
  return /* @__PURE__ */ y$3(HorizontalEvent, {
    uiModel: movingEvent,
    eventHeight: EVENT_HEIGHT,
    headerHeight: 0,
    movingLeft
  });
}
function getEventColIndex(uiModel, row) {
  const start = getGridDateIndex(uiModel.getStarts(), row);
  const end = getGridDateIndex(uiModel.getEnds(), row);
  return { start, end };
}
function useAlldayGridRowEventResize({
  weekDates,
  gridColWidthMap,
  gridPositionFinder
}) {
  const eventBus = useEventBus();
  const {
    isDraggingEnd,
    isDraggingCanceled,
    draggingEvent: resizingEvent,
    clearDraggingEvent
  } = useDraggingEvent("dayGrid", "resize");
  const [currentGridPos, clearCurrentGridPos] = useCurrentPointerPositionInGrid(gridPositionFinder);
  const { columnIndex } = currentGridPos != null ? currentGridPos : {};
  const targetEventGridIndices = F$2(() => {
    if (resizingEvent) {
      return getEventColIndex(resizingEvent, weekDates);
    }
    return { start: -1, end: -1 };
  }, [weekDates, resizingEvent]);
  const resizingWidth = F$2(() => {
    if (targetEventGridIndices.start > -1 && isPresent(columnIndex)) {
      return gridColWidthMap[targetEventGridIndices.start][columnIndex];
    }
    return null;
  }, [columnIndex, gridColWidthMap, targetEventGridIndices.start]);
  useWhen(() => {
    const shouldUpdateEvent = !isDraggingCanceled && isPresent(resizingEvent) && isPresent(columnIndex) && targetEventGridIndices.start <= columnIndex && targetEventGridIndices.end !== columnIndex;
    if (shouldUpdateEvent) {
      const targetDate = weekDates[columnIndex];
      eventBus.fire("beforeUpdateEvent", {
        event: resizingEvent.model.toEventObject(),
        changes: { end: targetDate }
      });
    }
    clearCurrentGridPos();
    clearDraggingEvent();
  }, isDraggingEnd);
  return F$2(
    () => ({
      resizingEvent,
      resizingWidth
    }),
    [resizingWidth, resizingEvent]
  );
}
function ResizingEventShadow({ weekDates, gridColWidthMap, gridPositionFinder }) {
  const { resizingEvent, resizingWidth } = useAlldayGridRowEventResize({
    weekDates,
    gridColWidthMap,
    gridPositionFinder
  });
  if (isNil(resizingEvent)) {
    return null;
  }
  return /* @__PURE__ */ y$3(HorizontalEvent, {
    uiModel: resizingEvent,
    eventHeight: EVENT_HEIGHT,
    headerHeight: 0,
    resizingWidth
  });
}
function useDOMNode() {
  const [node, setNode] = h$2(null);
  const setNodeRef = T$1((ref) => {
    if (ref) {
      setNode(ref);
    }
  }, []);
  return [node, setNodeRef];
}
function useGridRowHeightController(maxTop, category) {
  const [clickedIndex, setClickedIndex] = h$2(0);
  const [isClickedCount, setClickedCount] = h$2(false);
  const { updateDayGridRowHeight } = useDispatch("weekViewLayout");
  const onClickExceedCount = T$1(
    (index) => {
      setClickedCount(true);
      setClickedIndex(index);
      updateDayGridRowHeight({
        rowName: category,
        height: (maxTop + 1) * EVENT_HEIGHT
      });
    },
    [category, maxTop, updateDayGridRowHeight]
  );
  const onClickCollapseButton = T$1(() => {
    setClickedCount(false);
    updateDayGridRowHeight({
      rowName: category,
      height: DEFAULT_PANEL_HEIGHT
    });
  }, [category, updateDayGridRowHeight]);
  return {
    clickedIndex,
    isClickedCount,
    onClickExceedCount,
    onClickCollapseButton
  };
}
function requestTimeout(fn2, delay, registerCancel) {
  let start;
  const loop = (timestamp) => {
    if (!start) {
      start = timestamp;
    }
    const elapsed = timestamp - start;
    if (elapsed >= delay) {
      fn2();
      registerCancel(noop);
      return;
    }
    const raf2 = requestAnimationFrame(loop);
    registerCancel(() => cancelAnimationFrame(raf2));
  };
  const raf = requestAnimationFrame(loop);
  registerCancel(() => cancelAnimationFrame(raf));
}
function useClickPrevention({
  onClick,
  onDblClick,
  delay = 300
}) {
  const cancelCallback = _$2(noop);
  const registerCancel = (fn2) => {
    cancelCallback.current = fn2;
  };
  const cancelScheduledWork = () => {
    cancelCallback.current();
  };
  p$2(() => cancelScheduledWork, []);
  const handleClick = (e2) => {
    cancelScheduledWork();
    requestTimeout(onClick.bind(null, e2), delay, registerCancel);
  };
  const handleDblClick = (e2) => {
    cancelScheduledWork();
    onDblClick(e2);
  };
  return [handleClick, handleDblClick];
}
const GRID_SELECTION_TYPE_MAP = {
  dayGridMonth: "month",
  dayGridWeek: "allday",
  timeGrid: "time"
};
function sortDates(a2, b2) {
  const isIncreased = a2 < b2;
  return isIncreased ? [a2, b2] : [b2, a2];
}
function useGridSelection({
  type,
  selectionSorter,
  dateGetter,
  dateCollection,
  gridPositionFinder
}) {
  const { useFormPopup, gridSelection: gridSelectionOptions } = useStore(optionsSelector);
  const { enableDblClick, enableClick } = gridSelectionOptions;
  const { setGridSelection, addGridSelection, clearAll } = useDispatch("gridSelection");
  const { hideAllPopup, showFormPopup } = useDispatch("popup");
  const eventBus = useEventBus();
  const layoutContainer = useLayoutContainer();
  const [initMousePosition, setInitMousePosition] = h$2(null);
  const [initGridPosition, setInitGridPosition] = h$2(null);
  const isSelectingGridRef = _$2(false);
  const gridSelectionRef = _$2(null);
  useTransientUpdate(
    T$1((state) => state.gridSelection[type], [type]),
    (gridSelection) => {
      gridSelectionRef.current = gridSelection;
    }
  );
  useTransientUpdate(dndSelector, ({ draggingState, draggingItemType }) => {
    isSelectingGridRef.current = draggingItemType === currentGridSelectionType && draggingState >= DraggingState.INIT;
  });
  const currentGridSelectionType = DRAGGING_TYPE_CREATORS.gridSelection(type);
  const setGridSelectionByPosition = (e2) => {
    const gridPosition = gridPositionFinder(e2);
    if (isPresent(initGridPosition) && isPresent(gridPosition)) {
      setGridSelection(type, selectionSorter(initGridPosition, gridPosition));
    }
  };
  const [handleClickWithDebounce, handleDblClickPreventingClick] = useClickPrevention({
    onClick: (e2) => {
      if (enableClick) {
        onMouseUp(e2, true);
      }
    },
    onDblClick: (e2) => {
      if (enableDblClick) {
        onMouseUp(e2, true);
      }
    },
    delay: 250
  });
  const onMouseUpWithClick = (e2) => {
    const isClick = e2.detail <= 1;
    if (!enableClick && (!enableDblClick || isClick)) {
      return;
    }
    if (enableClick) {
      if (isClick) {
        handleClickWithDebounce(e2);
      } else {
        handleDblClickPreventingClick(e2);
      }
      return;
    }
    onMouseUp(e2, true);
  };
  const onMouseUp = (e2, isClickEvent) => {
    var _a;
    if (isClickEvent) {
      setGridSelectionByPosition(e2);
    }
    if (isPresent(gridSelectionRef.current)) {
      const [startDate, endDate] = sortDates(
        ...dateGetter(dateCollection, gridSelectionRef.current)
      );
      if (useFormPopup && isPresent(initMousePosition)) {
        const popupArrowPointPosition = {
          top: (e2.clientY + initMousePosition.y) / 2,
          left: (e2.clientX + initMousePosition.x) / 2
        };
        showFormPopup({
          isCreationPopup: true,
          title: "",
          location: "",
          start: startDate,
          end: endDate,
          isAllday: type !== "timeGrid",
          isPrivate: false,
          popupArrowPointPosition,
          close: clearAll
        });
      }
      const gridSelectionSelector = `.${cls(GRID_SELECTION_TYPE_MAP[type])}.${cls(
        "grid-selection"
      )}`;
      const gridSelectionElements = Array.from(
        (_a = layoutContainer == null ? void 0 : layoutContainer.querySelectorAll(gridSelectionSelector)) != null ? _a : []
      );
      eventBus.fire("selectDateTime", {
        start: startDate.toDate(),
        end: endDate.toDate(),
        isAllday: type !== "timeGrid",
        nativeEvent: e2,
        gridSelectionElements
      });
    }
  };
  const clearGridSelection = T$1(() => {
    setInitMousePosition(null);
    setInitGridPosition(null);
    setGridSelection(type, null);
  }, [setGridSelection, type]);
  const onMouseDown = useDrag(currentGridSelectionType, {
    onInit: (e2) => {
      if (useFormPopup) {
        setInitMousePosition({
          x: e2.clientX,
          y: e2.clientY
        });
        hideAllPopup();
      }
      const gridPosition = gridPositionFinder(e2);
      if (isPresent(gridPosition)) {
        setInitGridPosition(gridPosition);
      }
      if (!useFormPopup) {
        addGridSelection(type, gridSelectionRef.current);
      }
    },
    onDragStart: (e2) => {
      setGridSelectionByPosition(e2);
    },
    onDrag: (e2) => {
      if (isSelectingGridRef.current) {
        setGridSelectionByPosition(e2);
      }
    },
    onMouseUp: (e2, { draggingState }) => {
      e2.stopPropagation();
      const isClickEvent = draggingState <= DraggingState.INIT;
      if (isClickEvent) {
        onMouseUpWithClick(e2);
      } else {
        onMouseUp(e2, isClickEvent);
      }
    },
    onPressESCKey: clearGridSelection
  });
  p$2(() => clearGridSelection, [clearGridSelection]);
  return onMouseDown;
}
const rowTitleTemplate = `alldayTitle`;
function AlldayGridRow({
  events,
  weekDates,
  height = DEFAULT_PANEL_HEIGHT,
  options = {},
  rowStyleInfo,
  gridColWidthMap
}) {
  const { isReadOnly } = useStore(optionsSelector);
  const dayGridLeftTheme = useTheme(weekDayGridLeftSelector);
  const [panelContainer, setPanelContainerRef] = useDOMNode();
  const { narrowWeekend = false, startDayOfWeek = Day$2.SUN } = options;
  const maxTop = F$2(() => Math.max(0, ...events.map(({ top }) => top)), [events]);
  const gridPositionFinder = F$2(
    () => createGridPositionFinder({
      container: panelContainer,
      rowsCount: 1,
      columnsCount: weekDates.length,
      narrowWeekend,
      startDayOfWeek
    }),
    [panelContainer, weekDates.length, narrowWeekend, startDayOfWeek]
  );
  const { clickedIndex, isClickedCount, onClickExceedCount, onClickCollapseButton } = useGridRowHeightController(maxTop, "allday");
  const horizontalEvents = F$2(
    () => events.filter(isWithinHeight(height, EVENT_HEIGHT + WEEK_EVENT_MARGIN_TOP)).map((uiModel) => /* @__PURE__ */ y$3(HorizontalEvent, {
      key: `allday-DayEvent-${uiModel.cid()}`,
      uiModel,
      eventHeight: EVENT_HEIGHT,
      headerHeight: 0
    })),
    [events, height]
  );
  const startGridSelection = useGridSelection({
    type: "dayGridWeek",
    gridPositionFinder,
    dateCollection: weekDates,
    selectionSorter: alldayGridRowSelectionHelper.sortSelection,
    dateGetter: alldayGridRowSelectionHelper.getDateFromCollection
  });
  const onMouseDown = (e2) => {
    const target = e2.target;
    if (isReadOnly || !target.classList.contains(cls("panel-grid"))) {
      return;
    }
    startGridSelection(e2);
  };
  return /* @__PURE__ */ y$3(_$3, null, /* @__PURE__ */ y$3("div", {
    className: cls("panel-title"),
    style: dayGridLeftTheme
  }, /* @__PURE__ */ y$3(Template, {
    template: rowTitleTemplate,
    param: "alldayTitle"
  })), /* @__PURE__ */ y$3("div", {
    className: cls("allday-panel"),
    ref: setPanelContainerRef,
    onMouseDown
  }, /* @__PURE__ */ y$3("div", {
    className: cls("panel-grid-wrapper")
  }, /* @__PURE__ */ y$3(GridCells, {
    uiModels: events,
    weekDates,
    narrowWeekend,
    height,
    clickedIndex,
    isClickedCount,
    onClickExceedCount,
    onClickCollapseButton
  })), /* @__PURE__ */ y$3("div", {
    className: cls(`panel-allday-events`)
  }, horizontalEvents), /* @__PURE__ */ y$3(ResizingEventShadow, {
    weekDates,
    gridPositionFinder,
    gridColWidthMap
  }), /* @__PURE__ */ y$3(MovingEventShadow$2, {
    rowStyleInfo,
    gridPositionFinder
  }), /* @__PURE__ */ y$3(AlldayGridSelection, {
    weekDates,
    narrowWeekend
  })));
}
function OtherGridRow({
  events,
  weekDates,
  category,
  height = DEFAULT_PANEL_HEIGHT,
  options = {}
}) {
  const dayGridLeftTheme = useTheme(weekDayGridLeftSelector);
  const maxTop = F$2(() => Math.max(0, ...events.map(({ top }) => top)), [events]);
  const { narrowWeekend = false } = options;
  const rowTitleTemplate2 = `${category}Title`;
  const { clickedIndex, isClickedCount, onClickExceedCount, onClickCollapseButton } = useGridRowHeightController(maxTop, category);
  const horizontalEvents = F$2(
    () => events.filter(isWithinHeight(height, EVENT_HEIGHT + WEEK_EVENT_MARGIN_TOP)).map((uiModel) => /* @__PURE__ */ y$3(HorizontalEvent, {
      key: `${category}-DayEvent-${uiModel.cid()}`,
      uiModel,
      eventHeight: EVENT_HEIGHT,
      headerHeight: 0
    })),
    [category, events, height]
  );
  return /* @__PURE__ */ y$3(_$3, null, /* @__PURE__ */ y$3("div", {
    className: cls("panel-title"),
    style: dayGridLeftTheme
  }, /* @__PURE__ */ y$3(Template, {
    template: rowTitleTemplate2,
    param: category
  })), /* @__PURE__ */ y$3("div", {
    className: cls("allday-panel")
  }, /* @__PURE__ */ y$3("div", {
    className: cls("panel-grid-wrapper")
  }, /* @__PURE__ */ y$3(GridCells, {
    uiModels: events,
    weekDates,
    narrowWeekend,
    height,
    clickedIndex,
    isClickedCount,
    onClickExceedCount,
    onClickCollapseButton
  })), /* @__PURE__ */ y$3("div", {
    className: cls(`panel-${category}-events`)
  }, horizontalEvents)));
}
const classNames$j = {
  detailItem: cls("detail-item"),
  detailItemIndent: cls("detail-item", "detail-item-indent"),
  detailItemSeparate: cls("detail-item", "detail-item-separate"),
  sectionDetail: cls("popup-section", "section-detail"),
  content: cls("content"),
  locationIcon: cls("icon", "ic-location-b"),
  repeatIcon: cls("icon", "ic-repeat-b"),
  userIcon: cls("icon", "ic-user-b"),
  stateIcon: cls("icon", "ic-state-b"),
  calendarDotIcon: cls("icon", "ic-close")
};
function EventDetailSectionDetail({ event, userData }) {
  var _a;
  const { location: location2, recurrenceRule, attendees, state, calendarId, body } = event;
  useCalendarById(calendarId);
  const eventId = event == null ? void 0 : event.id;
  const currentUserData = userData.find((user) => {
    if ((user == null ? void 0 : user.id) == eventId)
      return true;
    return false;
  });
  return /* @__PURE__ */ y$3("div", {
    className: `${classNames$j.sectionDetail}`,
    style: { maxHeight: "1000px", overflow: "auto", "font-size": "13px" }
  }, (currentUserData == null ? void 0 : currentUserData.qr_code) && /* @__PURE__ */ y$3("div", {
    className: classNames$j.detailItem
  }, /* @__PURE__ */ y$3("span", {
    className: classNames$j.content
  }, /* @__PURE__ */ y$3("img", {
    style: { maxWidth: "50%", aspectRatio: 1, margin: "auto", display: "block", marginTop: "10px", marginBottom: "10px" },
    src: currentUserData == null ? void 0 : currentUserData.qr_code
  }))), (currentUserData == null ? void 0 : currentUserData.image_file) && /* @__PURE__ */ y$3("div", {
    className: classNames$j.detailItem
  }, /* @__PURE__ */ y$3("span", {
    className: classNames$j.content
  }, /* @__PURE__ */ y$3("img", {
    style: { maxWidth: "100%", aspectRatio: 1, margin: "auto", display: "block", marginTop: "10px", marginBottom: "10px" },
    src: currentUserData == null ? void 0 : currentUserData.image_file
  }))), /* @__PURE__ */ y$3("div", {
    className: "row"
  }, /* @__PURE__ */ y$3("div", {
    className: "col"
  }, (currentUserData == null ? void 0 : currentUserData.register_by_timestamp) && /* @__PURE__ */ y$3("div", {
    className: classNames$j.detailItem
  }, /* @__PURE__ */ y$3("span", {
    className: "fa-regular fa-calendar"
  }), /* @__PURE__ */ y$3("span", {
    className: classNames$j.content
  }, /* @__PURE__ */ y$3("b", null, " Register By:"), " ", currentUserData == null ? void 0 : currentUserData.register_by_timestamp)), (currentUserData == null ? void 0 : currentUserData.registration_count) >= 0 && /* @__PURE__ */ y$3("div", {
    className: classNames$j.detailItem
  }, /* @__PURE__ */ y$3("span", {
    className: "fa-solid fa-rotate"
  }), /* @__PURE__ */ y$3("span", {
    className: classNames$j.content
  }, /* @__PURE__ */ y$3("b", null, " Registration Count:"), " ", currentUserData == null ? void 0 : currentUserData.registration_count))), /* @__PURE__ */ y$3("div", {
    className: "col"
  }, (currentUserData == null ? void 0 : currentUserData.slots_total) && /* @__PURE__ */ y$3("div", {
    className: classNames$j.detailItem
  }, /* @__PURE__ */ y$3("span", {
    className: "fa-regular fa-square-plus"
  }), /* @__PURE__ */ y$3("span", {
    className: classNames$j.content
  }, /* @__PURE__ */ y$3("b", null, " Slots Total:"), " ", currentUserData == null ? void 0 : currentUserData.slots_total)), (currentUserData == null ? void 0 : currentUserData.slots_remain) && /* @__PURE__ */ y$3("div", {
    className: classNames$j.detailItem
  }, /* @__PURE__ */ y$3("span", {
    className: "fa-solid fa-plus-minus"
  }), /* @__PURE__ */ y$3("span", {
    className: classNames$j.content
  }, /* @__PURE__ */ y$3("b", null, " Slots Remain:"), " ", currentUserData == null ? void 0 : currentUserData.slots_remain)))), (currentUserData == null ? void 0 : currentUserData.category_relation) && /* @__PURE__ */ y$3("div", {
    className: classNames$j.detailItem
  }, /* @__PURE__ */ y$3("span", {
    className: "fa-regular fa-rectangle-list"
  }), /* @__PURE__ */ y$3("span", {
    className: classNames$j.content
  }, /* @__PURE__ */ y$3("b", null, " Category:"), " ", (_a = currentUserData == null ? void 0 : currentUserData.category_relation) == null ? void 0 : _a.title)), (currentUserData == null ? void 0 : currentUserData.attendance_type) && /* @__PURE__ */ y$3("div", {
    className: classNames$j.detailItem
  }, /* @__PURE__ */ y$3("span", {
    className: "fa-solid fa-water"
  }), /* @__PURE__ */ y$3("span", {
    className: classNames$j.content
  }, /* @__PURE__ */ y$3("b", null, " Attendance Type:"), " ", currentUserData == null ? void 0 : currentUserData.attendance_type)), (currentUserData == null ? void 0 : currentUserData.qr_content) && /* @__PURE__ */ y$3("div", {
    className: classNames$j.detailItem
  }, /* @__PURE__ */ y$3("span", {
    className: "fa-solid fa-qrcode"
  }), /* @__PURE__ */ y$3("span", {
    className: classNames$j.content
  }, /* @__PURE__ */ y$3("b", null, " QR Code: "), " ", currentUserData == null ? void 0 : currentUserData.qr_content)), eventId && /* @__PURE__ */ y$3("div", {
    className: classNames$j.detailItem
  }, /* @__PURE__ */ y$3("span", {
    className: "fa-solid fa-link"
  }), /* @__PURE__ */ y$3("span", {
    className: classNames$j.content
  }, /* @__PURE__ */ y$3("b", null, " Short url: "), " cpfv://event/", eventId)), (currentUserData == null ? void 0 : currentUserData.description) && /* @__PURE__ */ y$3("div", {
    className: classNames$j.detailItem
  }, /* @__PURE__ */ y$3("span", {
    className: classNames$j.content
  }, /* @__PURE__ */ y$3("span", {
    className: "fa-solid fa-circle-info"
  }), /* @__PURE__ */ y$3("b", null, " Description:"), /* @__PURE__ */ y$3("div", {
    dangerouslySetInnerHTML: { __html: currentUserData == null ? void 0 : currentUserData.description }
  }))));
}
const classNames$i = {
  sectionHeader: cls("popup-section", "section-header"),
  content: cls("content"),
  eventTitle: cls("event-title")
};
function EventDetailSectionHeader({ event, userData, backpackUrl, templateCsvUrl }) {
  event == null ? void 0 : event.id;
  return /* @__PURE__ */ y$3("div", {
    className: "row"
  }, /* @__PURE__ */ y$3("div", {
    className: "col-12"
  }, /* @__PURE__ */ y$3("div", {
    className: classNames$i.sectionHeader
  }, /* @__PURE__ */ y$3("div", {
    className: classNames$i.eventTitle
  }, /* @__PURE__ */ y$3(Template, {
    template: "popupDetailTitle",
    param: event,
    as: "span"
  })), /* @__PURE__ */ y$3("div", {
    className: classNames$i.content
  }, /* @__PURE__ */ y$3(Template, {
    template: "popupDetailDate",
    param: event,
    as: "span"
  })))));
}
const SEE_MORE_POPUP_SLOT_CLASS_NAME = cls("see-more-popup-slot");
const EVENT_FORM_POPUP_SLOT_CLASS_NAME = cls("event-form-popup-slot");
const EVENT_DETAIL_POPUP_SLOT_CLASS_NAME = cls("event-detail-popup-slot");
const HALF_OF_POPUP_ARROW_HEIGHT = 8;
const BOOLEAN_KEYS_OF_EVENT_MODEL_DATA = [
  "isPrivate",
  "isAllday",
  "isPending",
  "isFocused",
  "isVisible",
  "isReadOnly"
];
var DetailPopupArrowDirection = /* @__PURE__ */ ((DetailPopupArrowDirection2) => {
  DetailPopupArrowDirection2["right"] = "right";
  DetailPopupArrowDirection2["left"] = "left";
  return DetailPopupArrowDirection2;
})(DetailPopupArrowDirection || {});
var FormPopupArrowDirection = /* @__PURE__ */ ((FormPopupArrowDirection2) => {
  FormPopupArrowDirection2["top"] = "top";
  FormPopupArrowDirection2["bottom"] = "bottom";
  return FormPopupArrowDirection2;
})(FormPopupArrowDirection || {});
const FloatingLayerContext = F$3(null);
function FloatingLayerProvider({ children }) {
  const [containerRef, containerRefCallback] = useDOMNode();
  const [seeMorePopupSlotRef, seeMorePopupSlotRefCallback] = useDOMNode();
  const [formPopupSlotRef, formPopupSlotRefCallback] = useDOMNode();
  const [detailPopupSlotRef, detailPopupSlotRefCallback] = useDOMNode();
  const floatingLayer = {
    container: containerRef,
    seeMorePopupSlot: seeMorePopupSlotRef,
    formPopupSlot: formPopupSlotRef,
    detailPopupSlot: detailPopupSlotRef
  };
  return /* @__PURE__ */ y$3(FloatingLayerContext.Provider, {
    value: floatingLayer
  }, children, /* @__PURE__ */ y$3("div", {
    ref: containerRefCallback,
    className: cls("floating-layer")
  }, /* @__PURE__ */ y$3("div", {
    ref: seeMorePopupSlotRefCallback,
    className: SEE_MORE_POPUP_SLOT_CLASS_NAME
  }), /* @__PURE__ */ y$3("div", {
    ref: formPopupSlotRefCallback,
    className: EVENT_FORM_POPUP_SLOT_CLASS_NAME
  }), /* @__PURE__ */ y$3("div", {
    ref: detailPopupSlotRefCallback,
    className: EVENT_DETAIL_POPUP_SLOT_CLASS_NAME
  })));
}
const useFloatingLayer = (floatingLayerType) => {
  var _a;
  const floatingLayers = q$2(FloatingLayerContext);
  if (isUndefined_1(floatingLayers)) {
    throw new Error("FloatingLayerProvider is not found");
  }
  return (_a = floatingLayers == null ? void 0 : floatingLayers[floatingLayerType]) != null ? _a : null;
};
function isTopOutOfLayout(top, layoutRect, popupRect) {
  return top + popupRect.height > layoutRect.top + layoutRect.height;
}
function isLeftOutOfLayout(left, layoutRect, popupRect) {
  return left + popupRect.width > layoutRect.left + layoutRect.width;
}
const eventFormPopupParamSelector = (state) => {
  return state.popup[PopupType.Form];
};
const eventDetailPopupParamSelector = (state) => {
  return state.popup[PopupType.Detail];
};
const seeMorePopupParamSelector = (state) => {
  return state.popup[PopupType.SeeMore];
};
var sweetalert_min = { exports: {} };
(function(module, exports) {
  !function(t2, e2) {
    module.exports = e2();
  }(commonjsGlobal, function() {
    return function(t2) {
      function e2(o2) {
        if (n2[o2])
          return n2[o2].exports;
        var r2 = n2[o2] = { i: o2, l: false, exports: {} };
        return t2[o2].call(r2.exports, r2, r2.exports, e2), r2.l = true, r2.exports;
      }
      var n2 = {};
      return e2.m = t2, e2.c = n2, e2.d = function(t3, n3, o2) {
        e2.o(t3, n3) || Object.defineProperty(t3, n3, { configurable: false, enumerable: true, get: o2 });
      }, e2.n = function(t3) {
        var n3 = t3 && t3.__esModule ? function() {
          return t3.default;
        } : function() {
          return t3;
        };
        return e2.d(n3, "a", n3), n3;
      }, e2.o = function(t3, e3) {
        return Object.prototype.hasOwnProperty.call(t3, e3);
      }, e2.p = "", e2(e2.s = 8);
    }([function(t2, e2, n2) {
      Object.defineProperty(e2, "__esModule", { value: true });
      var o2 = "swal-button";
      e2.CLASS_NAMES = { MODAL: "swal-modal", OVERLAY: "swal-overlay", SHOW_MODAL: "swal-overlay--show-modal", MODAL_TITLE: "swal-title", MODAL_TEXT: "swal-text", ICON: "swal-icon", ICON_CUSTOM: "swal-icon--custom", CONTENT: "swal-content", FOOTER: "swal-footer", BUTTON_CONTAINER: "swal-button-container", BUTTON: o2, CONFIRM_BUTTON: o2 + "--confirm", CANCEL_BUTTON: o2 + "--cancel", DANGER_BUTTON: o2 + "--danger", BUTTON_LOADING: o2 + "--loading", BUTTON_LOADER: o2 + "__loader" }, e2.default = e2.CLASS_NAMES;
    }, function(t2, e2, n2) {
      Object.defineProperty(e2, "__esModule", { value: true }), e2.getNode = function(t3) {
        var e3 = "." + t3;
        return document.querySelector(e3);
      }, e2.stringToNode = function(t3) {
        var e3 = document.createElement("div");
        return e3.innerHTML = t3.trim(), e3.firstChild;
      }, e2.insertAfter = function(t3, e3) {
        var n3 = e3.nextSibling;
        e3.parentNode.insertBefore(t3, n3);
      }, e2.removeNode = function(t3) {
        t3.parentElement.removeChild(t3);
      }, e2.throwErr = function(t3) {
        throw t3 = t3.replace(/ +(?= )/g, ""), "SweetAlert: " + (t3 = t3.trim());
      }, e2.isPlainObject = function(t3) {
        if ("[object Object]" !== Object.prototype.toString.call(t3))
          return false;
        var e3 = Object.getPrototypeOf(t3);
        return null === e3 || e3 === Object.prototype;
      }, e2.ordinalSuffixOf = function(t3) {
        var e3 = t3 % 10, n3 = t3 % 100;
        return 1 === e3 && 11 !== n3 ? t3 + "st" : 2 === e3 && 12 !== n3 ? t3 + "nd" : 3 === e3 && 13 !== n3 ? t3 + "rd" : t3 + "th";
      };
    }, function(t2, e2, n2) {
      function o2(t3) {
        for (var n3 in t3)
          e2.hasOwnProperty(n3) || (e2[n3] = t3[n3]);
      }
      Object.defineProperty(e2, "__esModule", { value: true }), o2(n2(25));
      var r2 = n2(26);
      e2.overlayMarkup = r2.default, o2(n2(27)), o2(n2(28)), o2(n2(29));
      var i2 = n2(0), a2 = i2.default.MODAL_TITLE, s2 = i2.default.MODAL_TEXT, c2 = i2.default.ICON, l2 = i2.default.FOOTER;
      e2.iconMarkup = '\n  <div class="' + c2 + '"></div>', e2.titleMarkup = '\n  <div class="' + a2 + '"></div>\n', e2.textMarkup = '\n  <div class="' + s2 + '"></div>', e2.footerMarkup = '\n  <div class="' + l2 + '"></div>\n';
    }, function(t2, e2, n2) {
      Object.defineProperty(e2, "__esModule", { value: true });
      var o2 = n2(1);
      e2.CONFIRM_KEY = "confirm", e2.CANCEL_KEY = "cancel";
      var r2 = { visible: true, text: null, value: null, className: "", closeModal: true }, i2 = Object.assign({}, r2, { visible: false, text: "Cancel", value: null }), a2 = Object.assign({}, r2, { text: "OK", value: true });
      e2.defaultButtonList = { cancel: i2, confirm: a2 };
      var s2 = function(t3) {
        switch (t3) {
          case e2.CONFIRM_KEY:
            return a2;
          case e2.CANCEL_KEY:
            return i2;
          default:
            var n3 = t3.charAt(0).toUpperCase() + t3.slice(1);
            return Object.assign({}, r2, { text: n3, value: t3 });
        }
      }, c2 = function(t3, e3) {
        var n3 = s2(t3);
        return true === e3 ? Object.assign({}, n3, { visible: true }) : "string" == typeof e3 ? Object.assign({}, n3, { visible: true, text: e3 }) : o2.isPlainObject(e3) ? Object.assign({ visible: true }, n3, e3) : Object.assign({}, n3, { visible: false });
      }, l2 = function(t3) {
        for (var e3 = {}, n3 = 0, o3 = Object.keys(t3); n3 < o3.length; n3++) {
          var r3 = o3[n3], a3 = t3[r3], s3 = c2(r3, a3);
          e3[r3] = s3;
        }
        return e3.cancel || (e3.cancel = i2), e3;
      }, u2 = function(t3) {
        var n3 = {};
        switch (t3.length) {
          case 1:
            n3[e2.CANCEL_KEY] = Object.assign({}, i2, { visible: false });
            break;
          case 2:
            n3[e2.CANCEL_KEY] = c2(e2.CANCEL_KEY, t3[0]), n3[e2.CONFIRM_KEY] = c2(e2.CONFIRM_KEY, t3[1]);
            break;
          default:
            o2.throwErr("Invalid number of 'buttons' in array (" + t3.length + ").\n      If you want more than 2 buttons, you need to use an object!");
        }
        return n3;
      };
      e2.getButtonListOpts = function(t3) {
        var n3 = e2.defaultButtonList;
        return "string" == typeof t3 ? n3[e2.CONFIRM_KEY] = c2(e2.CONFIRM_KEY, t3) : Array.isArray(t3) ? n3 = u2(t3) : o2.isPlainObject(t3) ? n3 = l2(t3) : true === t3 ? n3 = u2([true, true]) : false === t3 ? n3 = u2([false, false]) : void 0 === t3 && (n3 = e2.defaultButtonList), n3;
      };
    }, function(t2, e2, n2) {
      Object.defineProperty(e2, "__esModule", { value: true });
      var o2 = n2(1), r2 = n2(2), i2 = n2(0), a2 = i2.default.MODAL, s2 = i2.default.OVERLAY, c2 = n2(30), l2 = n2(31), u2 = n2(32), f2 = n2(33);
      e2.injectElIntoModal = function(t3) {
        var e3 = o2.getNode(a2), n3 = o2.stringToNode(t3);
        return e3.appendChild(n3), n3;
      };
      var d2 = function(t3) {
        t3.className = a2, t3.textContent = "";
      }, p2 = function(t3, e3) {
        d2(t3);
        var n3 = e3.className;
        n3 && t3.classList.add(n3);
      };
      e2.initModalContent = function(t3) {
        var e3 = o2.getNode(a2);
        p2(e3, t3), c2.default(t3.icon), l2.initTitle(t3.title), l2.initText(t3.text), f2.default(t3.content), u2.default(t3.buttons, t3.dangerMode);
      };
      var m2 = function() {
        var t3 = o2.getNode(s2), e3 = o2.stringToNode(r2.modalMarkup);
        t3.appendChild(e3);
      };
      e2.default = m2;
    }, function(t2, e2, n2) {
      Object.defineProperty(e2, "__esModule", { value: true });
      var o2 = n2(3), r2 = { isOpen: false, promise: null, actions: {}, timer: null }, i2 = Object.assign({}, r2);
      e2.resetState = function() {
        i2 = Object.assign({}, r2);
      }, e2.setActionValue = function(t3) {
        if ("string" == typeof t3)
          return a2(o2.CONFIRM_KEY, t3);
        for (var e3 in t3)
          a2(e3, t3[e3]);
      };
      var a2 = function(t3, e3) {
        i2.actions[t3] || (i2.actions[t3] = {}), Object.assign(i2.actions[t3], { value: e3 });
      };
      e2.setActionOptionsFor = function(t3, e3) {
        var n3 = (void 0 === e3 ? {} : e3).closeModal, o3 = void 0 === n3 || n3;
        Object.assign(i2.actions[t3], { closeModal: o3 });
      }, e2.default = i2;
    }, function(t2, e2, n2) {
      Object.defineProperty(e2, "__esModule", { value: true });
      var o2 = n2(1), r2 = n2(3), i2 = n2(0), a2 = i2.default.OVERLAY, s2 = i2.default.SHOW_MODAL, c2 = i2.default.BUTTON, l2 = i2.default.BUTTON_LOADING, u2 = n2(5);
      e2.openModal = function() {
        o2.getNode(a2).classList.add(s2), u2.default.isOpen = true;
      };
      var f2 = function() {
        o2.getNode(a2).classList.remove(s2), u2.default.isOpen = false;
      };
      e2.onAction = function(t3) {
        void 0 === t3 && (t3 = r2.CANCEL_KEY);
        var e3 = u2.default.actions[t3], n3 = e3.value;
        if (false === e3.closeModal) {
          var i3 = c2 + "--" + t3;
          o2.getNode(i3).classList.add(l2);
        } else
          f2();
        u2.default.promise.resolve(n3);
      }, e2.getState = function() {
        var t3 = Object.assign({}, u2.default);
        return delete t3.promise, delete t3.timer, t3;
      }, e2.stopLoading = function() {
        for (var t3 = document.querySelectorAll("." + c2), e3 = 0; e3 < t3.length; e3++) {
          t3[e3].classList.remove(l2);
        }
      };
    }, function(t2, e2) {
      var n2;
      n2 = function() {
        return this;
      }();
      try {
        n2 = n2 || Function("return this")() || (0, eval)("this");
      } catch (t3) {
        "object" == typeof window && (n2 = window);
      }
      t2.exports = n2;
    }, function(t2, e2, n2) {
      (function(e3) {
        t2.exports = e3.sweetAlert = n2(9);
      }).call(e2, n2(7));
    }, function(t2, e2, n2) {
      (function(e3) {
        t2.exports = e3.swal = n2(10);
      }).call(e2, n2(7));
    }, function(t2, e2, n2) {
      "undefined" != typeof window && n2(11), n2(16);
      var o2 = n2(23).default;
      t2.exports = o2;
    }, function(t2, e2, n2) {
      var o2 = n2(12);
      "string" == typeof o2 && (o2 = [[t2.i, o2, ""]]);
      var r2 = { insertAt: "top" };
      r2.transform = void 0;
      n2(14)(o2, r2);
      o2.locals && (t2.exports = o2.locals);
    }, function(t2, e2, n2) {
      e2 = t2.exports = n2(13)(void 0), e2.push([t2.i, '.swal-icon--error{border-color:#f27474;-webkit-animation:animateErrorIcon .5s;animation:animateErrorIcon .5s}.swal-icon--error__x-mark{position:relative;display:block;-webkit-animation:animateXMark .5s;animation:animateXMark .5s}.swal-icon--error__line{position:absolute;height:5px;width:47px;background-color:#f27474;display:block;top:37px;border-radius:2px}.swal-icon--error__line--left{-webkit-transform:rotate(45deg);transform:rotate(45deg);left:17px}.swal-icon--error__line--right{-webkit-transform:rotate(-45deg);transform:rotate(-45deg);right:16px}@-webkit-keyframes animateErrorIcon{0%{-webkit-transform:rotateX(100deg);transform:rotateX(100deg);opacity:0}to{-webkit-transform:rotateX(0deg);transform:rotateX(0deg);opacity:1}}@keyframes animateErrorIcon{0%{-webkit-transform:rotateX(100deg);transform:rotateX(100deg);opacity:0}to{-webkit-transform:rotateX(0deg);transform:rotateX(0deg);opacity:1}}@-webkit-keyframes animateXMark{0%{-webkit-transform:scale(.4);transform:scale(.4);margin-top:26px;opacity:0}50%{-webkit-transform:scale(.4);transform:scale(.4);margin-top:26px;opacity:0}80%{-webkit-transform:scale(1.15);transform:scale(1.15);margin-top:-6px}to{-webkit-transform:scale(1);transform:scale(1);margin-top:0;opacity:1}}@keyframes animateXMark{0%{-webkit-transform:scale(.4);transform:scale(.4);margin-top:26px;opacity:0}50%{-webkit-transform:scale(.4);transform:scale(.4);margin-top:26px;opacity:0}80%{-webkit-transform:scale(1.15);transform:scale(1.15);margin-top:-6px}to{-webkit-transform:scale(1);transform:scale(1);margin-top:0;opacity:1}}.swal-icon--warning{border-color:#f8bb86;-webkit-animation:pulseWarning .75s infinite alternate;animation:pulseWarning .75s infinite alternate}.swal-icon--warning__body{width:5px;height:47px;top:10px;border-radius:2px;margin-left:-2px}.swal-icon--warning__body,.swal-icon--warning__dot{position:absolute;left:50%;background-color:#f8bb86}.swal-icon--warning__dot{width:7px;height:7px;border-radius:50%;margin-left:-4px;bottom:-11px}@-webkit-keyframes pulseWarning{0%{border-color:#f8d486}to{border-color:#f8bb86}}@keyframes pulseWarning{0%{border-color:#f8d486}to{border-color:#f8bb86}}.swal-icon--success{border-color:#a5dc86}.swal-icon--success:after,.swal-icon--success:before{content:"";border-radius:50%;position:absolute;width:60px;height:120px;background:#fff;-webkit-transform:rotate(45deg);transform:rotate(45deg)}.swal-icon--success:before{border-radius:120px 0 0 120px;top:-7px;left:-33px;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-transform-origin:60px 60px;transform-origin:60px 60px}.swal-icon--success:after{border-radius:0 120px 120px 0;top:-11px;left:30px;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-transform-origin:0 60px;transform-origin:0 60px;-webkit-animation:rotatePlaceholder 4.25s ease-in;animation:rotatePlaceholder 4.25s ease-in}.swal-icon--success__ring{width:80px;height:80px;border:4px solid hsla(98,55%,69%,.2);border-radius:50%;box-sizing:content-box;position:absolute;left:-4px;top:-4px;z-index:2}.swal-icon--success__hide-corners{width:5px;height:90px;background-color:#fff;padding:1px;position:absolute;left:28px;top:8px;z-index:1;-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}.swal-icon--success__line{height:5px;background-color:#a5dc86;display:block;border-radius:2px;position:absolute;z-index:2}.swal-icon--success__line--tip{width:25px;left:14px;top:46px;-webkit-transform:rotate(45deg);transform:rotate(45deg);-webkit-animation:animateSuccessTip .75s;animation:animateSuccessTip .75s}.swal-icon--success__line--long{width:47px;right:8px;top:38px;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-animation:animateSuccessLong .75s;animation:animateSuccessLong .75s}@-webkit-keyframes rotatePlaceholder{0%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}5%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}12%{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}to{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}}@keyframes rotatePlaceholder{0%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}5%{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}12%{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}to{-webkit-transform:rotate(-405deg);transform:rotate(-405deg)}}@-webkit-keyframes animateSuccessTip{0%{width:0;left:1px;top:19px}54%{width:0;left:1px;top:19px}70%{width:50px;left:-8px;top:37px}84%{width:17px;left:21px;top:48px}to{width:25px;left:14px;top:45px}}@keyframes animateSuccessTip{0%{width:0;left:1px;top:19px}54%{width:0;left:1px;top:19px}70%{width:50px;left:-8px;top:37px}84%{width:17px;left:21px;top:48px}to{width:25px;left:14px;top:45px}}@-webkit-keyframes animateSuccessLong{0%{width:0;right:46px;top:54px}65%{width:0;right:46px;top:54px}84%{width:55px;right:0;top:35px}to{width:47px;right:8px;top:38px}}@keyframes animateSuccessLong{0%{width:0;right:46px;top:54px}65%{width:0;right:46px;top:54px}84%{width:55px;right:0;top:35px}to{width:47px;right:8px;top:38px}}.swal-icon--info{border-color:#c9dae1}.swal-icon--info:before{width:5px;height:29px;bottom:17px;border-radius:2px;margin-left:-2px}.swal-icon--info:after,.swal-icon--info:before{content:"";position:absolute;left:50%;background-color:#c9dae1}.swal-icon--info:after{width:7px;height:7px;border-radius:50%;margin-left:-3px;top:19px}.swal-icon{width:80px;height:80px;border-width:4px;border-style:solid;border-radius:50%;padding:0;position:relative;box-sizing:content-box;margin:20px auto}.swal-icon:first-child{margin-top:32px}.swal-icon--custom{width:auto;height:auto;max-width:100%;border:none;border-radius:0}.swal-icon img{max-width:100%;max-height:100%}.swal-title{color:rgba(0,0,0,.65);font-weight:600;text-transform:none;position:relative;display:block;padding:13px 16px;font-size:27px;line-height:normal;text-align:center;margin-bottom:0}.swal-title:first-child{margin-top:26px}.swal-title:not(:first-child){padding-bottom:0}.swal-title:not(:last-child){margin-bottom:13px}.swal-text{font-size:16px;position:relative;float:none;line-height:normal;vertical-align:top;text-align:left;display:inline-block;margin:0;padding:0 10px;font-weight:400;color:rgba(0,0,0,.64);max-width:calc(100% - 20px);overflow-wrap:break-word;box-sizing:border-box}.swal-text:first-child{margin-top:45px}.swal-text:last-child{margin-bottom:45px}.swal-footer{text-align:right;padding-top:13px;margin-top:13px;padding:13px 16px;border-radius:inherit;border-top-left-radius:0;border-top-right-radius:0}.swal-button-container{margin:5px;display:inline-block;position:relative}.swal-button{background-color:#7cd1f9;color:#fff;border:none;box-shadow:none;border-radius:5px;font-weight:600;font-size:14px;padding:10px 24px;margin:0;cursor:pointer}.swal-button:not([disabled]):hover{background-color:#78cbf2}.swal-button:active{background-color:#70bce0}.swal-button:focus{outline:none;box-shadow:0 0 0 1px #fff,0 0 0 3px rgba(43,114,165,.29)}.swal-button[disabled]{opacity:.5;cursor:default}.swal-button::-moz-focus-inner{border:0}.swal-button--cancel{color:#555;background-color:#efefef}.swal-button--cancel:not([disabled]):hover{background-color:#e8e8e8}.swal-button--cancel:active{background-color:#d7d7d7}.swal-button--cancel:focus{box-shadow:0 0 0 1px #fff,0 0 0 3px rgba(116,136,150,.29)}.swal-button--danger{background-color:#e64942}.swal-button--danger:not([disabled]):hover{background-color:#df4740}.swal-button--danger:active{background-color:#cf423b}.swal-button--danger:focus{box-shadow:0 0 0 1px #fff,0 0 0 3px rgba(165,43,43,.29)}.swal-content{padding:0 20px;margin-top:20px;font-size:medium}.swal-content:last-child{margin-bottom:20px}.swal-content__input,.swal-content__textarea{-webkit-appearance:none;background-color:#fff;border:none;font-size:14px;display:block;box-sizing:border-box;width:100%;border:1px solid rgba(0,0,0,.14);padding:10px 13px;border-radius:2px;transition:border-color .2s}.swal-content__input:focus,.swal-content__textarea:focus{outline:none;border-color:#6db8ff}.swal-content__textarea{resize:vertical}.swal-button--loading{color:transparent}.swal-button--loading~.swal-button__loader{opacity:1}.swal-button__loader{position:absolute;height:auto;width:43px;z-index:2;left:50%;top:50%;-webkit-transform:translateX(-50%) translateY(-50%);transform:translateX(-50%) translateY(-50%);text-align:center;pointer-events:none;opacity:0}.swal-button__loader div{display:inline-block;float:none;vertical-align:baseline;width:9px;height:9px;padding:0;border:none;margin:2px;opacity:.4;border-radius:7px;background-color:hsla(0,0%,100%,.9);transition:background .2s;-webkit-animation:swal-loading-anim 1s infinite;animation:swal-loading-anim 1s infinite}.swal-button__loader div:nth-child(3n+2){-webkit-animation-delay:.15s;animation-delay:.15s}.swal-button__loader div:nth-child(3n+3){-webkit-animation-delay:.3s;animation-delay:.3s}@-webkit-keyframes swal-loading-anim{0%{opacity:.4}20%{opacity:.4}50%{opacity:1}to{opacity:.4}}@keyframes swal-loading-anim{0%{opacity:.4}20%{opacity:.4}50%{opacity:1}to{opacity:.4}}.swal-overlay{position:fixed;top:0;bottom:0;left:0;right:0;text-align:center;font-size:0;overflow-y:auto;background-color:rgba(0,0,0,.4);z-index:10000;pointer-events:none;opacity:0;transition:opacity .3s}.swal-overlay:before{content:" ";display:inline-block;vertical-align:middle;height:100%}.swal-overlay--show-modal{opacity:1;pointer-events:auto}.swal-overlay--show-modal .swal-modal{opacity:1;pointer-events:auto;box-sizing:border-box;-webkit-animation:showSweetAlert .3s;animation:showSweetAlert .3s;will-change:transform}.swal-modal{width:478px;opacity:0;pointer-events:none;background-color:#fff;text-align:center;border-radius:5px;position:static;margin:20px auto;display:inline-block;vertical-align:middle;-webkit-transform:scale(1);transform:scale(1);-webkit-transform-origin:50% 50%;transform-origin:50% 50%;z-index:10001;transition:opacity .2s,-webkit-transform .3s;transition:transform .3s,opacity .2s;transition:transform .3s,opacity .2s,-webkit-transform .3s}@media (max-width:500px){.swal-modal{width:calc(100% - 20px)}}@-webkit-keyframes showSweetAlert{0%{-webkit-transform:scale(1);transform:scale(1)}1%{-webkit-transform:scale(.5);transform:scale(.5)}45%{-webkit-transform:scale(1.05);transform:scale(1.05)}80%{-webkit-transform:scale(.95);transform:scale(.95)}to{-webkit-transform:scale(1);transform:scale(1)}}@keyframes showSweetAlert{0%{-webkit-transform:scale(1);transform:scale(1)}1%{-webkit-transform:scale(.5);transform:scale(.5)}45%{-webkit-transform:scale(1.05);transform:scale(1.05)}80%{-webkit-transform:scale(.95);transform:scale(.95)}to{-webkit-transform:scale(1);transform:scale(1)}}', ""]);
    }, function(t2, e2) {
      function n2(t3, e3) {
        var n3 = t3[1] || "", r2 = t3[3];
        if (!r2)
          return n3;
        if (e3 && "function" == typeof btoa) {
          var i2 = o2(r2);
          return [n3].concat(r2.sources.map(function(t4) {
            return "/*# sourceURL=" + r2.sourceRoot + t4 + " */";
          })).concat([i2]).join("\n");
        }
        return [n3].join("\n");
      }
      function o2(t3) {
        return "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(t3)))) + " */";
      }
      t2.exports = function(t3) {
        var e3 = [];
        return e3.toString = function() {
          return this.map(function(e4) {
            var o3 = n2(e4, t3);
            return e4[2] ? "@media " + e4[2] + "{" + o3 + "}" : o3;
          }).join("");
        }, e3.i = function(t4, n3) {
          "string" == typeof t4 && (t4 = [[null, t4, ""]]);
          for (var o3 = {}, r2 = 0; r2 < this.length; r2++) {
            var i2 = this[r2][0];
            "number" == typeof i2 && (o3[i2] = true);
          }
          for (r2 = 0; r2 < t4.length; r2++) {
            var a2 = t4[r2];
            "number" == typeof a2[0] && o3[a2[0]] || (n3 && !a2[2] ? a2[2] = n3 : n3 && (a2[2] = "(" + a2[2] + ") and (" + n3 + ")"), e3.push(a2));
          }
        }, e3;
      };
    }, function(t2, e2, n2) {
      function o2(t3, e3) {
        for (var n3 = 0; n3 < t3.length; n3++) {
          var o3 = t3[n3], r3 = m2[o3.id];
          if (r3) {
            r3.refs++;
            for (var i3 = 0; i3 < r3.parts.length; i3++)
              r3.parts[i3](o3.parts[i3]);
            for (; i3 < o3.parts.length; i3++)
              r3.parts.push(u2(o3.parts[i3], e3));
          } else {
            for (var a3 = [], i3 = 0; i3 < o3.parts.length; i3++)
              a3.push(u2(o3.parts[i3], e3));
            m2[o3.id] = { id: o3.id, refs: 1, parts: a3 };
          }
        }
      }
      function r2(t3, e3) {
        for (var n3 = [], o3 = {}, r3 = 0; r3 < t3.length; r3++) {
          var i3 = t3[r3], a3 = e3.base ? i3[0] + e3.base : i3[0], s3 = i3[1], c3 = i3[2], l3 = i3[3], u3 = { css: s3, media: c3, sourceMap: l3 };
          o3[a3] ? o3[a3].parts.push(u3) : n3.push(o3[a3] = { id: a3, parts: [u3] });
        }
        return n3;
      }
      function i2(t3, e3) {
        var n3 = v2(t3.insertInto);
        if (!n3)
          throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
        var o3 = w2[w2.length - 1];
        if ("top" === t3.insertAt)
          o3 ? o3.nextSibling ? n3.insertBefore(e3, o3.nextSibling) : n3.appendChild(e3) : n3.insertBefore(e3, n3.firstChild), w2.push(e3);
        else {
          if ("bottom" !== t3.insertAt)
            throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
          n3.appendChild(e3);
        }
      }
      function a2(t3) {
        if (null === t3.parentNode)
          return false;
        t3.parentNode.removeChild(t3);
        var e3 = w2.indexOf(t3);
        e3 >= 0 && w2.splice(e3, 1);
      }
      function s2(t3) {
        var e3 = document.createElement("style");
        return t3.attrs.type = "text/css", l2(e3, t3.attrs), i2(t3, e3), e3;
      }
      function c2(t3) {
        var e3 = document.createElement("link");
        return t3.attrs.type = "text/css", t3.attrs.rel = "stylesheet", l2(e3, t3.attrs), i2(t3, e3), e3;
      }
      function l2(t3, e3) {
        Object.keys(e3).forEach(function(n3) {
          t3.setAttribute(n3, e3[n3]);
        });
      }
      function u2(t3, e3) {
        var n3, o3, r3, i3;
        if (e3.transform && t3.css) {
          if (!(i3 = e3.transform(t3.css)))
            return function() {
            };
          t3.css = i3;
        }
        if (e3.singleton) {
          var l3 = h2++;
          n3 = g2 || (g2 = s2(e3)), o3 = f2.bind(null, n3, l3, false), r3 = f2.bind(null, n3, l3, true);
        } else
          t3.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa ? (n3 = c2(e3), o3 = p2.bind(null, n3, e3), r3 = function() {
            a2(n3), n3.href && URL.revokeObjectURL(n3.href);
          }) : (n3 = s2(e3), o3 = d2.bind(null, n3), r3 = function() {
            a2(n3);
          });
        return o3(t3), function(e4) {
          if (e4) {
            if (e4.css === t3.css && e4.media === t3.media && e4.sourceMap === t3.sourceMap)
              return;
            o3(t3 = e4);
          } else
            r3();
        };
      }
      function f2(t3, e3, n3, o3) {
        var r3 = n3 ? "" : o3.css;
        if (t3.styleSheet)
          t3.styleSheet.cssText = x2(e3, r3);
        else {
          var i3 = document.createTextNode(r3), a3 = t3.childNodes;
          a3[e3] && t3.removeChild(a3[e3]), a3.length ? t3.insertBefore(i3, a3[e3]) : t3.appendChild(i3);
        }
      }
      function d2(t3, e3) {
        var n3 = e3.css, o3 = e3.media;
        if (o3 && t3.setAttribute("media", o3), t3.styleSheet)
          t3.styleSheet.cssText = n3;
        else {
          for (; t3.firstChild; )
            t3.removeChild(t3.firstChild);
          t3.appendChild(document.createTextNode(n3));
        }
      }
      function p2(t3, e3, n3) {
        var o3 = n3.css, r3 = n3.sourceMap, i3 = void 0 === e3.convertToAbsoluteUrls && r3;
        (e3.convertToAbsoluteUrls || i3) && (o3 = y2(o3)), r3 && (o3 += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(r3)))) + " */");
        var a3 = new Blob([o3], { type: "text/css" }), s3 = t3.href;
        t3.href = URL.createObjectURL(a3), s3 && URL.revokeObjectURL(s3);
      }
      var m2 = {}, b2 = function(t3) {
        var e3;
        return function() {
          return void 0 === e3 && (e3 = t3.apply(this, arguments)), e3;
        };
      }(function() {
        return window && document && document.all && !window.atob;
      }), v2 = function(t3) {
        var e3 = {};
        return function(n3) {
          return void 0 === e3[n3] && (e3[n3] = t3.call(this, n3)), e3[n3];
        };
      }(function(t3) {
        return document.querySelector(t3);
      }), g2 = null, h2 = 0, w2 = [], y2 = n2(15);
      t2.exports = function(t3, e3) {
        if ("undefined" != typeof DEBUG && DEBUG && "object" != typeof document)
          throw new Error("The style-loader cannot be used in a non-browser environment");
        e3 = e3 || {}, e3.attrs = "object" == typeof e3.attrs ? e3.attrs : {}, e3.singleton || (e3.singleton = b2()), e3.insertInto || (e3.insertInto = "head"), e3.insertAt || (e3.insertAt = "bottom");
        var n3 = r2(t3, e3);
        return o2(n3, e3), function(t4) {
          for (var i3 = [], a3 = 0; a3 < n3.length; a3++) {
            var s3 = n3[a3], c3 = m2[s3.id];
            c3.refs--, i3.push(c3);
          }
          if (t4) {
            o2(r2(t4, e3), e3);
          }
          for (var a3 = 0; a3 < i3.length; a3++) {
            var c3 = i3[a3];
            if (0 === c3.refs) {
              for (var l3 = 0; l3 < c3.parts.length; l3++)
                c3.parts[l3]();
              delete m2[c3.id];
            }
          }
        };
      };
      var x2 = function() {
        var t3 = [];
        return function(e3, n3) {
          return t3[e3] = n3, t3.filter(Boolean).join("\n");
        };
      }();
    }, function(t2, e2) {
      t2.exports = function(t3) {
        var e3 = "undefined" != typeof window && window.location;
        if (!e3)
          throw new Error("fixUrls requires window.location");
        if (!t3 || "string" != typeof t3)
          return t3;
        var n2 = e3.protocol + "//" + e3.host, o2 = n2 + e3.pathname.replace(/\/[^\/]*$/, "/");
        return t3.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(t4, e4) {
          var r2 = e4.trim().replace(/^"(.*)"$/, function(t5, e5) {
            return e5;
          }).replace(/^'(.*)'$/, function(t5, e5) {
            return e5;
          });
          if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(r2))
            return t4;
          var i2;
          return i2 = 0 === r2.indexOf("//") ? r2 : 0 === r2.indexOf("/") ? n2 + r2 : o2 + r2.replace(/^\.\//, ""), "url(" + JSON.stringify(i2) + ")";
        });
      };
    }, function(t2, e2, n2) {
      var o2 = n2(17);
      "undefined" == typeof window || window.Promise || (window.Promise = o2), n2(21), String.prototype.includes || (String.prototype.includes = function(t3, e3) {
        return "number" != typeof e3 && (e3 = 0), !(e3 + t3.length > this.length) && -1 !== this.indexOf(t3, e3);
      }), Array.prototype.includes || Object.defineProperty(Array.prototype, "includes", { value: function(t3, e3) {
        if (null == this)
          throw new TypeError('"this" is null or not defined');
        var n3 = Object(this), o3 = n3.length >>> 0;
        if (0 === o3)
          return false;
        for (var r2 = 0 | e3, i2 = Math.max(r2 >= 0 ? r2 : o3 - Math.abs(r2), 0); i2 < o3; ) {
          if (function(t4, e4) {
            return t4 === e4 || "number" == typeof t4 && "number" == typeof e4 && isNaN(t4) && isNaN(e4);
          }(n3[i2], t3))
            return true;
          i2++;
        }
        return false;
      } }), "undefined" != typeof window && function(t3) {
        t3.forEach(function(t4) {
          t4.hasOwnProperty("remove") || Object.defineProperty(t4, "remove", { configurable: true, enumerable: true, writable: true, value: function() {
            this.parentNode.removeChild(this);
          } });
        });
      }([Element.prototype, CharacterData.prototype, DocumentType.prototype]);
    }, function(t2, e2, n2) {
      (function(e3) {
        !function(n3) {
          function o2() {
          }
          function r2(t3, e4) {
            return function() {
              t3.apply(e4, arguments);
            };
          }
          function i2(t3) {
            if ("object" != typeof this)
              throw new TypeError("Promises must be constructed via new");
            if ("function" != typeof t3)
              throw new TypeError("not a function");
            this._state = 0, this._handled = false, this._value = void 0, this._deferreds = [], f2(t3, this);
          }
          function a2(t3, e4) {
            for (; 3 === t3._state; )
              t3 = t3._value;
            if (0 === t3._state)
              return void t3._deferreds.push(e4);
            t3._handled = true, i2._immediateFn(function() {
              var n4 = 1 === t3._state ? e4.onFulfilled : e4.onRejected;
              if (null === n4)
                return void (1 === t3._state ? s2 : c2)(e4.promise, t3._value);
              var o3;
              try {
                o3 = n4(t3._value);
              } catch (t4) {
                return void c2(e4.promise, t4);
              }
              s2(e4.promise, o3);
            });
          }
          function s2(t3, e4) {
            try {
              if (e4 === t3)
                throw new TypeError("A promise cannot be resolved with itself.");
              if (e4 && ("object" == typeof e4 || "function" == typeof e4)) {
                var n4 = e4.then;
                if (e4 instanceof i2)
                  return t3._state = 3, t3._value = e4, void l2(t3);
                if ("function" == typeof n4)
                  return void f2(r2(n4, e4), t3);
              }
              t3._state = 1, t3._value = e4, l2(t3);
            } catch (e5) {
              c2(t3, e5);
            }
          }
          function c2(t3, e4) {
            t3._state = 2, t3._value = e4, l2(t3);
          }
          function l2(t3) {
            2 === t3._state && 0 === t3._deferreds.length && i2._immediateFn(function() {
              t3._handled || i2._unhandledRejectionFn(t3._value);
            });
            for (var e4 = 0, n4 = t3._deferreds.length; e4 < n4; e4++)
              a2(t3, t3._deferreds[e4]);
            t3._deferreds = null;
          }
          function u2(t3, e4, n4) {
            this.onFulfilled = "function" == typeof t3 ? t3 : null, this.onRejected = "function" == typeof e4 ? e4 : null, this.promise = n4;
          }
          function f2(t3, e4) {
            var n4 = false;
            try {
              t3(function(t4) {
                n4 || (n4 = true, s2(e4, t4));
              }, function(t4) {
                n4 || (n4 = true, c2(e4, t4));
              });
            } catch (t4) {
              if (n4)
                return;
              n4 = true, c2(e4, t4);
            }
          }
          var d2 = setTimeout;
          i2.prototype.catch = function(t3) {
            return this.then(null, t3);
          }, i2.prototype.then = function(t3, e4) {
            var n4 = new this.constructor(o2);
            return a2(this, new u2(t3, e4, n4)), n4;
          }, i2.all = function(t3) {
            var e4 = Array.prototype.slice.call(t3);
            return new i2(function(t4, n4) {
              function o3(i4, a3) {
                try {
                  if (a3 && ("object" == typeof a3 || "function" == typeof a3)) {
                    var s3 = a3.then;
                    if ("function" == typeof s3)
                      return void s3.call(a3, function(t5) {
                        o3(i4, t5);
                      }, n4);
                  }
                  e4[i4] = a3, 0 == --r3 && t4(e4);
                } catch (t5) {
                  n4(t5);
                }
              }
              if (0 === e4.length)
                return t4([]);
              for (var r3 = e4.length, i3 = 0; i3 < e4.length; i3++)
                o3(i3, e4[i3]);
            });
          }, i2.resolve = function(t3) {
            return t3 && "object" == typeof t3 && t3.constructor === i2 ? t3 : new i2(function(e4) {
              e4(t3);
            });
          }, i2.reject = function(t3) {
            return new i2(function(e4, n4) {
              n4(t3);
            });
          }, i2.race = function(t3) {
            return new i2(function(e4, n4) {
              for (var o3 = 0, r3 = t3.length; o3 < r3; o3++)
                t3[o3].then(e4, n4);
            });
          }, i2._immediateFn = "function" == typeof e3 && function(t3) {
            e3(t3);
          } || function(t3) {
            d2(t3, 0);
          }, i2._unhandledRejectionFn = function(t3) {
            "undefined" != typeof console && console && console.warn("Possible Unhandled Promise Rejection:", t3);
          }, i2._setImmediateFn = function(t3) {
            i2._immediateFn = t3;
          }, i2._setUnhandledRejectionFn = function(t3) {
            i2._unhandledRejectionFn = t3;
          }, void 0 !== t2 && t2.exports ? t2.exports = i2 : n3.Promise || (n3.Promise = i2);
        }(this);
      }).call(e2, n2(18).setImmediate);
    }, function(t2, e2, n2) {
      function o2(t3, e3) {
        this._id = t3, this._clearFn = e3;
      }
      var r2 = Function.prototype.apply;
      e2.setTimeout = function() {
        return new o2(r2.call(setTimeout, window, arguments), clearTimeout);
      }, e2.setInterval = function() {
        return new o2(r2.call(setInterval, window, arguments), clearInterval);
      }, e2.clearTimeout = e2.clearInterval = function(t3) {
        t3 && t3.close();
      }, o2.prototype.unref = o2.prototype.ref = function() {
      }, o2.prototype.close = function() {
        this._clearFn.call(window, this._id);
      }, e2.enroll = function(t3, e3) {
        clearTimeout(t3._idleTimeoutId), t3._idleTimeout = e3;
      }, e2.unenroll = function(t3) {
        clearTimeout(t3._idleTimeoutId), t3._idleTimeout = -1;
      }, e2._unrefActive = e2.active = function(t3) {
        clearTimeout(t3._idleTimeoutId);
        var e3 = t3._idleTimeout;
        e3 >= 0 && (t3._idleTimeoutId = setTimeout(function() {
          t3._onTimeout && t3._onTimeout();
        }, e3));
      }, n2(19), e2.setImmediate = setImmediate, e2.clearImmediate = clearImmediate;
    }, function(t2, e2, n2) {
      (function(t3, e3) {
        !function(t4, n3) {
          function o2(t5) {
            "function" != typeof t5 && (t5 = new Function("" + t5));
            for (var e4 = new Array(arguments.length - 1), n4 = 0; n4 < e4.length; n4++)
              e4[n4] = arguments[n4 + 1];
            var o3 = { callback: t5, args: e4 };
            return l2[c2] = o3, s2(c2), c2++;
          }
          function r2(t5) {
            delete l2[t5];
          }
          function i2(t5) {
            var e4 = t5.callback, o3 = t5.args;
            switch (o3.length) {
              case 0:
                e4();
                break;
              case 1:
                e4(o3[0]);
                break;
              case 2:
                e4(o3[0], o3[1]);
                break;
              case 3:
                e4(o3[0], o3[1], o3[2]);
                break;
              default:
                e4.apply(n3, o3);
            }
          }
          function a2(t5) {
            if (u2)
              setTimeout(a2, 0, t5);
            else {
              var e4 = l2[t5];
              if (e4) {
                u2 = true;
                try {
                  i2(e4);
                } finally {
                  r2(t5), u2 = false;
                }
              }
            }
          }
          if (!t4.setImmediate) {
            var s2, c2 = 1, l2 = {}, u2 = false, f2 = t4.document, d2 = Object.getPrototypeOf && Object.getPrototypeOf(t4);
            d2 = d2 && d2.setTimeout ? d2 : t4, "[object process]" === {}.toString.call(t4.process) ? function() {
              s2 = function(t5) {
                e3.nextTick(function() {
                  a2(t5);
                });
              };
            }() : function() {
              if (t4.postMessage && !t4.importScripts) {
                var e4 = true, n4 = t4.onmessage;
                return t4.onmessage = function() {
                  e4 = false;
                }, t4.postMessage("", "*"), t4.onmessage = n4, e4;
              }
            }() ? function() {
              var e4 = "setImmediate$" + Math.random() + "$", n4 = function(n5) {
                n5.source === t4 && "string" == typeof n5.data && 0 === n5.data.indexOf(e4) && a2(+n5.data.slice(e4.length));
              };
              t4.addEventListener ? t4.addEventListener("message", n4, false) : t4.attachEvent("onmessage", n4), s2 = function(n5) {
                t4.postMessage(e4 + n5, "*");
              };
            }() : t4.MessageChannel ? function() {
              var t5 = new MessageChannel();
              t5.port1.onmessage = function(t6) {
                a2(t6.data);
              }, s2 = function(e4) {
                t5.port2.postMessage(e4);
              };
            }() : f2 && "onreadystatechange" in f2.createElement("script") ? function() {
              var t5 = f2.documentElement;
              s2 = function(e4) {
                var n4 = f2.createElement("script");
                n4.onreadystatechange = function() {
                  a2(e4), n4.onreadystatechange = null, t5.removeChild(n4), n4 = null;
                }, t5.appendChild(n4);
              };
            }() : function() {
              s2 = function(t5) {
                setTimeout(a2, 0, t5);
              };
            }(), d2.setImmediate = o2, d2.clearImmediate = r2;
          }
        }("undefined" == typeof self ? void 0 === t3 ? this : t3 : self);
      }).call(e2, n2(7), n2(20));
    }, function(t2, e2) {
      function n2() {
        throw new Error("setTimeout has not been defined");
      }
      function o2() {
        throw new Error("clearTimeout has not been defined");
      }
      function r2(t3) {
        if (u2 === setTimeout)
          return setTimeout(t3, 0);
        if ((u2 === n2 || !u2) && setTimeout)
          return u2 = setTimeout, setTimeout(t3, 0);
        try {
          return u2(t3, 0);
        } catch (e3) {
          try {
            return u2.call(null, t3, 0);
          } catch (e4) {
            return u2.call(this, t3, 0);
          }
        }
      }
      function i2(t3) {
        if (f2 === clearTimeout)
          return clearTimeout(t3);
        if ((f2 === o2 || !f2) && clearTimeout)
          return f2 = clearTimeout, clearTimeout(t3);
        try {
          return f2(t3);
        } catch (e3) {
          try {
            return f2.call(null, t3);
          } catch (e4) {
            return f2.call(this, t3);
          }
        }
      }
      function a2() {
        b2 && p2 && (b2 = false, p2.length ? m2 = p2.concat(m2) : v2 = -1, m2.length && s2());
      }
      function s2() {
        if (!b2) {
          var t3 = r2(a2);
          b2 = true;
          for (var e3 = m2.length; e3; ) {
            for (p2 = m2, m2 = []; ++v2 < e3; )
              p2 && p2[v2].run();
            v2 = -1, e3 = m2.length;
          }
          p2 = null, b2 = false, i2(t3);
        }
      }
      function c2(t3, e3) {
        this.fun = t3, this.array = e3;
      }
      function l2() {
      }
      var u2, f2, d2 = t2.exports = {};
      !function() {
        try {
          u2 = "function" == typeof setTimeout ? setTimeout : n2;
        } catch (t3) {
          u2 = n2;
        }
        try {
          f2 = "function" == typeof clearTimeout ? clearTimeout : o2;
        } catch (t3) {
          f2 = o2;
        }
      }();
      var p2, m2 = [], b2 = false, v2 = -1;
      d2.nextTick = function(t3) {
        var e3 = new Array(arguments.length - 1);
        if (arguments.length > 1)
          for (var n3 = 1; n3 < arguments.length; n3++)
            e3[n3 - 1] = arguments[n3];
        m2.push(new c2(t3, e3)), 1 !== m2.length || b2 || r2(s2);
      }, c2.prototype.run = function() {
        this.fun.apply(null, this.array);
      }, d2.title = "browser", d2.browser = true, d2.env = {}, d2.argv = [], d2.version = "", d2.versions = {}, d2.on = l2, d2.addListener = l2, d2.once = l2, d2.off = l2, d2.removeListener = l2, d2.removeAllListeners = l2, d2.emit = l2, d2.prependListener = l2, d2.prependOnceListener = l2, d2.listeners = function(t3) {
        return [];
      }, d2.binding = function(t3) {
        throw new Error("process.binding is not supported");
      }, d2.cwd = function() {
        return "/";
      }, d2.chdir = function(t3) {
        throw new Error("process.chdir is not supported");
      }, d2.umask = function() {
        return 0;
      };
    }, function(t2, e2, n2) {
      n2(22).polyfill();
    }, function(t2, e2, n2) {
      function o2(t3, e3) {
        if (void 0 === t3 || null === t3)
          throw new TypeError("Cannot convert first argument to object");
        for (var n3 = Object(t3), o3 = 1; o3 < arguments.length; o3++) {
          var r3 = arguments[o3];
          if (void 0 !== r3 && null !== r3)
            for (var i2 = Object.keys(Object(r3)), a2 = 0, s2 = i2.length; a2 < s2; a2++) {
              var c2 = i2[a2], l2 = Object.getOwnPropertyDescriptor(r3, c2);
              void 0 !== l2 && l2.enumerable && (n3[c2] = r3[c2]);
            }
        }
        return n3;
      }
      function r2() {
        Object.assign || Object.defineProperty(Object, "assign", { enumerable: false, configurable: true, writable: true, value: o2 });
      }
      t2.exports = { assign: o2, polyfill: r2 };
    }, function(t2, e2, n2) {
      Object.defineProperty(e2, "__esModule", { value: true });
      var o2 = n2(24), r2 = n2(6), i2 = n2(5), a2 = n2(36), s2 = function() {
        for (var t3 = [], e3 = 0; e3 < arguments.length; e3++)
          t3[e3] = arguments[e3];
        if ("undefined" != typeof window) {
          var n3 = a2.getOpts.apply(void 0, t3);
          return new Promise(function(t4, e4) {
            i2.default.promise = { resolve: t4, reject: e4 }, o2.default(n3), setTimeout(function() {
              r2.openModal();
            });
          });
        }
      };
      s2.close = r2.onAction, s2.getState = r2.getState, s2.setActionValue = i2.setActionValue, s2.stopLoading = r2.stopLoading, s2.setDefaults = a2.setDefaults, e2.default = s2;
    }, function(t2, e2, n2) {
      Object.defineProperty(e2, "__esModule", { value: true });
      var o2 = n2(1), r2 = n2(0), i2 = r2.default.MODAL, a2 = n2(4), s2 = n2(34), c2 = n2(35), l2 = n2(1);
      e2.init = function(t3) {
        o2.getNode(i2) || (document.body || l2.throwErr("You can only use SweetAlert AFTER the DOM has loaded!"), s2.default(), a2.default()), a2.initModalContent(t3), c2.default(t3);
      }, e2.default = e2.init;
    }, function(t2, e2, n2) {
      Object.defineProperty(e2, "__esModule", { value: true });
      var o2 = n2(0), r2 = o2.default.MODAL;
      e2.modalMarkup = '\n  <div class="' + r2 + '" role="dialog" aria-modal="true"></div>', e2.default = e2.modalMarkup;
    }, function(t2, e2, n2) {
      Object.defineProperty(e2, "__esModule", { value: true });
      var o2 = n2(0), r2 = o2.default.OVERLAY, i2 = '<div \n    class="' + r2 + '"\n    tabIndex="-1">\n  </div>';
      e2.default = i2;
    }, function(t2, e2, n2) {
      Object.defineProperty(e2, "__esModule", { value: true });
      var o2 = n2(0), r2 = o2.default.ICON;
      e2.errorIconMarkup = function() {
        var t3 = r2 + "--error", e3 = t3 + "__line";
        return '\n    <div class="' + t3 + '__x-mark">\n      <span class="' + e3 + " " + e3 + '--left"></span>\n      <span class="' + e3 + " " + e3 + '--right"></span>\n    </div>\n  ';
      }, e2.warningIconMarkup = function() {
        var t3 = r2 + "--warning";
        return '\n    <span class="' + t3 + '__body">\n      <span class="' + t3 + '__dot"></span>\n    </span>\n  ';
      }, e2.successIconMarkup = function() {
        var t3 = r2 + "--success";
        return '\n    <span class="' + t3 + "__line " + t3 + '__line--long"></span>\n    <span class="' + t3 + "__line " + t3 + '__line--tip"></span>\n\n    <div class="' + t3 + '__ring"></div>\n    <div class="' + t3 + '__hide-corners"></div>\n  ';
      };
    }, function(t2, e2, n2) {
      Object.defineProperty(e2, "__esModule", { value: true });
      var o2 = n2(0), r2 = o2.default.CONTENT;
      e2.contentMarkup = '\n  <div class="' + r2 + '">\n\n  </div>\n';
    }, function(t2, e2, n2) {
      Object.defineProperty(e2, "__esModule", { value: true });
      var o2 = n2(0), r2 = o2.default.BUTTON_CONTAINER, i2 = o2.default.BUTTON, a2 = o2.default.BUTTON_LOADER;
      e2.buttonMarkup = '\n  <div class="' + r2 + '">\n\n    <button\n      class="' + i2 + '"\n    ></button>\n\n    <div class="' + a2 + '">\n      <div></div>\n      <div></div>\n      <div></div>\n    </div>\n\n  </div>\n';
    }, function(t2, e2, n2) {
      Object.defineProperty(e2, "__esModule", { value: true });
      var o2 = n2(4), r2 = n2(2), i2 = n2(0), a2 = i2.default.ICON, s2 = i2.default.ICON_CUSTOM, c2 = ["error", "warning", "success", "info"], l2 = { error: r2.errorIconMarkup(), warning: r2.warningIconMarkup(), success: r2.successIconMarkup() }, u2 = function(t3, e3) {
        var n3 = a2 + "--" + t3;
        e3.classList.add(n3);
        var o3 = l2[t3];
        o3 && (e3.innerHTML = o3);
      }, f2 = function(t3, e3) {
        e3.classList.add(s2);
        var n3 = document.createElement("img");
        n3.src = t3, e3.appendChild(n3);
      }, d2 = function(t3) {
        if (t3) {
          var e3 = o2.injectElIntoModal(r2.iconMarkup);
          c2.includes(t3) ? u2(t3, e3) : f2(t3, e3);
        }
      };
      e2.default = d2;
    }, function(t2, e2, n2) {
      Object.defineProperty(e2, "__esModule", { value: true });
      var o2 = n2(2), r2 = n2(4), i2 = function(t3) {
        navigator.userAgent.includes("AppleWebKit") && (t3.style.display = "none", t3.offsetHeight, t3.style.display = "");
      };
      e2.initTitle = function(t3) {
        if (t3) {
          var e3 = r2.injectElIntoModal(o2.titleMarkup);
          e3.textContent = t3, i2(e3);
        }
      }, e2.initText = function(t3) {
        if (t3) {
          var e3 = document.createDocumentFragment();
          t3.split("\n").forEach(function(t4, n4, o3) {
            e3.appendChild(document.createTextNode(t4)), n4 < o3.length - 1 && e3.appendChild(document.createElement("br"));
          });
          var n3 = r2.injectElIntoModal(o2.textMarkup);
          n3.appendChild(e3), i2(n3);
        }
      };
    }, function(t2, e2, n2) {
      Object.defineProperty(e2, "__esModule", { value: true });
      var o2 = n2(1), r2 = n2(4), i2 = n2(0), a2 = i2.default.BUTTON, s2 = i2.default.DANGER_BUTTON, c2 = n2(3), l2 = n2(2), u2 = n2(6), f2 = n2(5), d2 = function(t3, e3, n3) {
        var r3 = e3.text, i3 = e3.value, d3 = e3.className, p3 = e3.closeModal, m2 = o2.stringToNode(l2.buttonMarkup), b2 = m2.querySelector("." + a2), v2 = a2 + "--" + t3;
        if (b2.classList.add(v2), d3) {
          (Array.isArray(d3) ? d3 : d3.split(" ")).filter(function(t4) {
            return t4.length > 0;
          }).forEach(function(t4) {
            b2.classList.add(t4);
          });
        }
        n3 && t3 === c2.CONFIRM_KEY && b2.classList.add(s2), b2.textContent = r3;
        var g2 = {};
        return g2[t3] = i3, f2.setActionValue(g2), f2.setActionOptionsFor(t3, { closeModal: p3 }), b2.addEventListener("click", function() {
          return u2.onAction(t3);
        }), m2;
      }, p2 = function(t3, e3) {
        var n3 = r2.injectElIntoModal(l2.footerMarkup);
        for (var o3 in t3) {
          var i3 = t3[o3], a3 = d2(o3, i3, e3);
          i3.visible && n3.appendChild(a3);
        }
        0 === n3.children.length && n3.remove();
      };
      e2.default = p2;
    }, function(t2, e2, n2) {
      Object.defineProperty(e2, "__esModule", { value: true });
      var o2 = n2(3), r2 = n2(4), i2 = n2(2), a2 = n2(5), s2 = n2(6), c2 = n2(0), l2 = c2.default.CONTENT, u2 = function(t3) {
        t3.addEventListener("input", function(t4) {
          var e3 = t4.target, n3 = e3.value;
          a2.setActionValue(n3);
        }), t3.addEventListener("keyup", function(t4) {
          if ("Enter" === t4.key)
            return s2.onAction(o2.CONFIRM_KEY);
        }), setTimeout(function() {
          t3.focus(), a2.setActionValue("");
        }, 0);
      }, f2 = function(t3, e3, n3) {
        var o3 = document.createElement(e3), r3 = l2 + "__" + e3;
        o3.classList.add(r3);
        for (var i3 in n3) {
          var a3 = n3[i3];
          o3[i3] = a3;
        }
        "input" === e3 && u2(o3), t3.appendChild(o3);
      }, d2 = function(t3) {
        if (t3) {
          var e3 = r2.injectElIntoModal(i2.contentMarkup), n3 = t3.element, o3 = t3.attributes;
          "string" == typeof n3 ? f2(e3, n3, o3) : e3.appendChild(n3);
        }
      };
      e2.default = d2;
    }, function(t2, e2, n2) {
      Object.defineProperty(e2, "__esModule", { value: true });
      var o2 = n2(1), r2 = n2(2), i2 = function() {
        var t3 = o2.stringToNode(r2.overlayMarkup);
        document.body.appendChild(t3);
      };
      e2.default = i2;
    }, function(t2, e2, n2) {
      Object.defineProperty(e2, "__esModule", { value: true });
      var o2 = n2(5), r2 = n2(6), i2 = n2(1), a2 = n2(3), s2 = n2(0), c2 = s2.default.MODAL, l2 = s2.default.BUTTON, u2 = s2.default.OVERLAY, f2 = function(t3) {
        t3.preventDefault(), v2();
      }, d2 = function(t3) {
        t3.preventDefault(), g2();
      }, p2 = function(t3) {
        if (o2.default.isOpen)
          switch (t3.key) {
            case "Escape":
              return r2.onAction(a2.CANCEL_KEY);
          }
      }, m2 = function(t3) {
        if (o2.default.isOpen)
          switch (t3.key) {
            case "Tab":
              return f2(t3);
          }
      }, b2 = function(t3) {
        if (o2.default.isOpen)
          return "Tab" === t3.key && t3.shiftKey ? d2(t3) : void 0;
      }, v2 = function() {
        var t3 = i2.getNode(l2);
        t3 && (t3.tabIndex = 0, t3.focus());
      }, g2 = function() {
        var t3 = i2.getNode(c2), e3 = t3.querySelectorAll("." + l2), n3 = e3.length - 1, o3 = e3[n3];
        o3 && o3.focus();
      }, h2 = function(t3) {
        t3[t3.length - 1].addEventListener("keydown", m2);
      }, w2 = function(t3) {
        t3[0].addEventListener("keydown", b2);
      }, y2 = function() {
        var t3 = i2.getNode(c2), e3 = t3.querySelectorAll("." + l2);
        e3.length && (h2(e3), w2(e3));
      }, x2 = function(t3) {
        if (i2.getNode(u2) === t3.target)
          return r2.onAction(a2.CANCEL_KEY);
      }, _2 = function(t3) {
        var e3 = i2.getNode(u2);
        e3.removeEventListener("click", x2), t3 && e3.addEventListener("click", x2);
      }, k2 = function(t3) {
        o2.default.timer && clearTimeout(o2.default.timer), t3 && (o2.default.timer = window.setTimeout(function() {
          return r2.onAction(a2.CANCEL_KEY);
        }, t3));
      }, O2 = function(t3) {
        t3.closeOnEsc ? document.addEventListener("keyup", p2) : document.removeEventListener("keyup", p2), t3.dangerMode ? v2() : g2(), y2(), _2(t3.closeOnClickOutside), k2(t3.timer);
      };
      e2.default = O2;
    }, function(t2, e2, n2) {
      Object.defineProperty(e2, "__esModule", { value: true });
      var o2 = n2(1), r2 = n2(3), i2 = n2(37), a2 = n2(38), s2 = { title: null, text: null, icon: null, buttons: r2.defaultButtonList, content: null, className: null, closeOnClickOutside: true, closeOnEsc: true, dangerMode: false, timer: null }, c2 = Object.assign({}, s2);
      e2.setDefaults = function(t3) {
        c2 = Object.assign({}, s2, t3);
      };
      var l2 = function(t3) {
        var e3 = t3 && t3.button, n3 = t3 && t3.buttons;
        return void 0 !== e3 && void 0 !== n3 && o2.throwErr("Cannot set both 'button' and 'buttons' options!"), void 0 !== e3 ? { confirm: e3 } : n3;
      }, u2 = function(t3) {
        return o2.ordinalSuffixOf(t3 + 1);
      }, f2 = function(t3, e3) {
        o2.throwErr(u2(e3) + " argument ('" + t3 + "') is invalid");
      }, d2 = function(t3, e3) {
        var n3 = t3 + 1, r3 = e3[n3];
        o2.isPlainObject(r3) || void 0 === r3 || o2.throwErr("Expected " + u2(n3) + " argument ('" + r3 + "') to be a plain object");
      }, p2 = function(t3, e3) {
        var n3 = t3 + 1, r3 = e3[n3];
        void 0 !== r3 && o2.throwErr("Unexpected " + u2(n3) + " argument (" + r3 + ")");
      }, m2 = function(t3, e3, n3, r3) {
        var i3 = typeof e3, a3 = "string" === i3, s3 = e3 instanceof Element;
        if (a3) {
          if (0 === n3)
            return { text: e3 };
          if (1 === n3)
            return { text: e3, title: r3[0] };
          if (2 === n3)
            return d2(n3, r3), { icon: e3 };
          f2(e3, n3);
        } else {
          if (s3 && 0 === n3)
            return d2(n3, r3), { content: e3 };
          if (o2.isPlainObject(e3))
            return p2(n3, r3), e3;
          f2(e3, n3);
        }
      };
      e2.getOpts = function() {
        for (var t3 = [], e3 = 0; e3 < arguments.length; e3++)
          t3[e3] = arguments[e3];
        var n3 = {};
        t3.forEach(function(e4, o4) {
          var r3 = m2(0, e4, o4, t3);
          Object.assign(n3, r3);
        });
        var o3 = l2(n3);
        n3.buttons = r2.getButtonListOpts(o3), delete n3.button, n3.content = i2.getContentOpts(n3.content);
        var u3 = Object.assign({}, s2, c2, n3);
        return Object.keys(u3).forEach(function(t4) {
          a2.DEPRECATED_OPTS[t4] && a2.logDeprecation(t4);
        }), u3;
      };
    }, function(t2, e2, n2) {
      Object.defineProperty(e2, "__esModule", { value: true });
      var o2 = n2(1), r2 = { element: "input", attributes: { placeholder: "" } };
      e2.getContentOpts = function(t3) {
        var e3 = {};
        return o2.isPlainObject(t3) ? Object.assign(e3, t3) : t3 instanceof Element ? { element: t3 } : "input" === t3 ? r2 : null;
      };
    }, function(t2, e2, n2) {
      Object.defineProperty(e2, "__esModule", { value: true }), e2.logDeprecation = function(t3) {
        var n3 = e2.DEPRECATED_OPTS[t3], o2 = n3.onlyRename, r2 = n3.replacement, i2 = n3.subOption, a2 = n3.link, s2 = o2 ? "renamed" : "deprecated", c2 = 'SweetAlert warning: "' + t3 + '" option has been ' + s2 + ".";
        if (r2) {
          c2 += " Please use" + (i2 ? ' "' + i2 + '" in ' : " ") + '"' + r2 + '" instead.';
        }
        var l2 = "https://sweetalert.js.org";
        c2 += a2 ? " More details: " + l2 + a2 : " More details: " + l2 + "/guides/#upgrading-from-1x", console.warn(c2);
      }, e2.DEPRECATED_OPTS = { type: { replacement: "icon", link: "/docs/#icon" }, imageUrl: { replacement: "icon", link: "/docs/#icon" }, customClass: { replacement: "className", onlyRename: true, link: "/docs/#classname" }, imageSize: {}, showCancelButton: { replacement: "buttons", link: "/docs/#buttons" }, showConfirmButton: { replacement: "button", link: "/docs/#button" }, confirmButtonText: { replacement: "button", link: "/docs/#button" }, confirmButtonColor: {}, cancelButtonText: { replacement: "buttons", link: "/docs/#buttons" }, closeOnConfirm: { replacement: "button", subOption: "closeModal", link: "/docs/#button" }, closeOnCancel: { replacement: "buttons", subOption: "closeModal", link: "/docs/#buttons" }, showLoaderOnConfirm: { replacement: "buttons" }, animation: {}, inputType: { replacement: "content", link: "/docs/#content" }, inputValue: { replacement: "content", link: "/docs/#content" }, inputPlaceholder: { replacement: "content", link: "/docs/#content" }, html: { replacement: "content", link: "/docs/#content" }, allowEscapeKey: { replacement: "closeOnEsc", onlyRename: true, link: "/docs/#closeonesc" }, allowClickOutside: { replacement: "closeOnClickOutside", onlyRename: true, link: "/docs/#closeonclickoutside" } };
    }]);
  });
})(sweetalert_min);
var swal = /* @__PURE__ */ getDefaultExportFromCjs(sweetalert_min.exports);
var jquery = { exports: {} };
/*!
 * jQuery JavaScript Library v3.7.0
 * https://jquery.com/
 *
 * Copyright OpenJS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2023-05-11T18:29Z
 */
(function(module) {
  (function(global2, factory) {
    {
      module.exports = global2.document ? factory(global2, true) : function(w2) {
        if (!w2.document) {
          throw new Error("jQuery requires a window with a document");
        }
        return factory(w2);
      };
    }
  })(typeof window !== "undefined" ? window : commonjsGlobal, function(window2, noGlobal) {
    var arr = [];
    var getProto = Object.getPrototypeOf;
    var slice = arr.slice;
    var flat = arr.flat ? function(array2) {
      return arr.flat.call(array2);
    } : function(array2) {
      return arr.concat.apply([], array2);
    };
    var push = arr.push;
    var indexOf = arr.indexOf;
    var class2type = {};
    var toString = class2type.toString;
    var hasOwn = class2type.hasOwnProperty;
    var fnToString = hasOwn.toString;
    var ObjectFunctionString = fnToString.call(Object);
    var support = {};
    var isFunction2 = function isFunction3(obj) {
      return typeof obj === "function" && typeof obj.nodeType !== "number" && typeof obj.item !== "function";
    };
    var isWindow = function isWindow2(obj) {
      return obj != null && obj === obj.window;
    };
    var document2 = window2.document;
    var preservedScriptAttributes = {
      type: true,
      src: true,
      nonce: true,
      noModule: true
    };
    function DOMEval(code, node, doc) {
      doc = doc || document2;
      var i2, val, script = doc.createElement("script");
      script.text = code;
      if (node) {
        for (i2 in preservedScriptAttributes) {
          val = node[i2] || node.getAttribute && node.getAttribute(i2);
          if (val) {
            script.setAttribute(i2, val);
          }
        }
      }
      doc.head.appendChild(script).parentNode.removeChild(script);
    }
    function toType(obj) {
      if (obj == null) {
        return obj + "";
      }
      return typeof obj === "object" || typeof obj === "function" ? class2type[toString.call(obj)] || "object" : typeof obj;
    }
    var version = "3.7.0", rhtmlSuffix = /HTML$/i, jQuery = function(selector, context) {
      return new jQuery.fn.init(selector, context);
    };
    jQuery.fn = jQuery.prototype = {
      jquery: version,
      constructor: jQuery,
      length: 0,
      toArray: function() {
        return slice.call(this);
      },
      get: function(num) {
        if (num == null) {
          return slice.call(this);
        }
        return num < 0 ? this[num + this.length] : this[num];
      },
      pushStack: function(elems) {
        var ret = jQuery.merge(this.constructor(), elems);
        ret.prevObject = this;
        return ret;
      },
      each: function(callback) {
        return jQuery.each(this, callback);
      },
      map: function(callback) {
        return this.pushStack(jQuery.map(this, function(elem, i2) {
          return callback.call(elem, i2, elem);
        }));
      },
      slice: function() {
        return this.pushStack(slice.apply(this, arguments));
      },
      first: function() {
        return this.eq(0);
      },
      last: function() {
        return this.eq(-1);
      },
      even: function() {
        return this.pushStack(jQuery.grep(this, function(_elem, i2) {
          return (i2 + 1) % 2;
        }));
      },
      odd: function() {
        return this.pushStack(jQuery.grep(this, function(_elem, i2) {
          return i2 % 2;
        }));
      },
      eq: function(i2) {
        var len = this.length, j2 = +i2 + (i2 < 0 ? len : 0);
        return this.pushStack(j2 >= 0 && j2 < len ? [this[j2]] : []);
      },
      end: function() {
        return this.prevObject || this.constructor();
      },
      push,
      sort: arr.sort,
      splice: arr.splice
    };
    jQuery.extend = jQuery.fn.extend = function() {
      var options, name, src, copy, copyIsArray, clone2, target = arguments[0] || {}, i2 = 1, length = arguments.length, deep = false;
      if (typeof target === "boolean") {
        deep = target;
        target = arguments[i2] || {};
        i2++;
      }
      if (typeof target !== "object" && !isFunction2(target)) {
        target = {};
      }
      if (i2 === length) {
        target = this;
        i2--;
      }
      for (; i2 < length; i2++) {
        if ((options = arguments[i2]) != null) {
          for (name in options) {
            copy = options[name];
            if (name === "__proto__" || target === copy) {
              continue;
            }
            if (deep && copy && (jQuery.isPlainObject(copy) || (copyIsArray = Array.isArray(copy)))) {
              src = target[name];
              if (copyIsArray && !Array.isArray(src)) {
                clone2 = [];
              } else if (!copyIsArray && !jQuery.isPlainObject(src)) {
                clone2 = {};
              } else {
                clone2 = src;
              }
              copyIsArray = false;
              target[name] = jQuery.extend(deep, clone2, copy);
            } else if (copy !== void 0) {
              target[name] = copy;
            }
          }
        }
      }
      return target;
    };
    jQuery.extend({
      expando: "jQuery" + (version + Math.random()).replace(/\D/g, ""),
      isReady: true,
      error: function(msg) {
        throw new Error(msg);
      },
      noop: function() {
      },
      isPlainObject: function(obj) {
        var proto, Ctor;
        if (!obj || toString.call(obj) !== "[object Object]") {
          return false;
        }
        proto = getProto(obj);
        if (!proto) {
          return true;
        }
        Ctor = hasOwn.call(proto, "constructor") && proto.constructor;
        return typeof Ctor === "function" && fnToString.call(Ctor) === ObjectFunctionString;
      },
      isEmptyObject: function(obj) {
        var name;
        for (name in obj) {
          return false;
        }
        return true;
      },
      globalEval: function(code, options, doc) {
        DOMEval(code, { nonce: options && options.nonce }, doc);
      },
      each: function(obj, callback) {
        var length, i2 = 0;
        if (isArrayLike(obj)) {
          length = obj.length;
          for (; i2 < length; i2++) {
            if (callback.call(obj[i2], i2, obj[i2]) === false) {
              break;
            }
          }
        } else {
          for (i2 in obj) {
            if (callback.call(obj[i2], i2, obj[i2]) === false) {
              break;
            }
          }
        }
        return obj;
      },
      text: function(elem) {
        var node, ret = "", i2 = 0, nodeType = elem.nodeType;
        if (!nodeType) {
          while (node = elem[i2++]) {
            ret += jQuery.text(node);
          }
        } else if (nodeType === 1 || nodeType === 9 || nodeType === 11) {
          return elem.textContent;
        } else if (nodeType === 3 || nodeType === 4) {
          return elem.nodeValue;
        }
        return ret;
      },
      makeArray: function(arr2, results) {
        var ret = results || [];
        if (arr2 != null) {
          if (isArrayLike(Object(arr2))) {
            jQuery.merge(
              ret,
              typeof arr2 === "string" ? [arr2] : arr2
            );
          } else {
            push.call(ret, arr2);
          }
        }
        return ret;
      },
      inArray: function(elem, arr2, i2) {
        return arr2 == null ? -1 : indexOf.call(arr2, elem, i2);
      },
      isXMLDoc: function(elem) {
        var namespace = elem && elem.namespaceURI, docElem = elem && (elem.ownerDocument || elem).documentElement;
        return !rhtmlSuffix.test(namespace || docElem && docElem.nodeName || "HTML");
      },
      merge: function(first2, second) {
        var len = +second.length, j2 = 0, i2 = first2.length;
        for (; j2 < len; j2++) {
          first2[i2++] = second[j2];
        }
        first2.length = i2;
        return first2;
      },
      grep: function(elems, callback, invert) {
        var callbackInverse, matches = [], i2 = 0, length = elems.length, callbackExpect = !invert;
        for (; i2 < length; i2++) {
          callbackInverse = !callback(elems[i2], i2);
          if (callbackInverse !== callbackExpect) {
            matches.push(elems[i2]);
          }
        }
        return matches;
      },
      map: function(elems, callback, arg) {
        var length, value, i2 = 0, ret = [];
        if (isArrayLike(elems)) {
          length = elems.length;
          for (; i2 < length; i2++) {
            value = callback(elems[i2], i2, arg);
            if (value != null) {
              ret.push(value);
            }
          }
        } else {
          for (i2 in elems) {
            value = callback(elems[i2], i2, arg);
            if (value != null) {
              ret.push(value);
            }
          }
        }
        return flat(ret);
      },
      guid: 1,
      support
    });
    if (typeof Symbol === "function") {
      jQuery.fn[Symbol.iterator] = arr[Symbol.iterator];
    }
    jQuery.each(
      "Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),
      function(_i, name) {
        class2type["[object " + name + "]"] = name.toLowerCase();
      }
    );
    function isArrayLike(obj) {
      var length = !!obj && "length" in obj && obj.length, type = toType(obj);
      if (isFunction2(obj) || isWindow(obj)) {
        return false;
      }
      return type === "array" || length === 0 || typeof length === "number" && length > 0 && length - 1 in obj;
    }
    function nodeName(elem, name) {
      return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
    }
    var pop = arr.pop;
    var sort = arr.sort;
    var splice = arr.splice;
    var whitespace = "[\\x20\\t\\r\\n\\f]";
    var rtrimCSS = new RegExp(
      "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$",
      "g"
    );
    jQuery.contains = function(a2, b2) {
      var bup = b2 && b2.parentNode;
      return a2 === bup || !!(bup && bup.nodeType === 1 && (a2.contains ? a2.contains(bup) : a2.compareDocumentPosition && a2.compareDocumentPosition(bup) & 16));
    };
    var rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;
    function fcssescape(ch, asCodePoint) {
      if (asCodePoint) {
        if (ch === "\0") {
          return "\uFFFD";
        }
        return ch.slice(0, -1) + "\\" + ch.charCodeAt(ch.length - 1).toString(16) + " ";
      }
      return "\\" + ch;
    }
    jQuery.escapeSelector = function(sel) {
      return (sel + "").replace(rcssescape, fcssescape);
    };
    var preferredDoc = document2, pushNative = push;
    (function() {
      var i2, Expr, outermostContext, sortInput, hasDuplicate, push2 = pushNative, document3, documentElement2, documentIsHTML, rbuggyQSA, matches, expando = jQuery.expando, dirruns = 0, done = 0, classCache = createCache(), tokenCache = createCache(), compilerCache = createCache(), nonnativeSelectorCache = createCache(), sortOrder = function(a2, b2) {
        if (a2 === b2) {
          hasDuplicate = true;
        }
        return 0;
      }, booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", identifier = "(?:\\\\[\\da-fA-F]{1,6}" + whitespace + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+", attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace + "*([*^$|!~]?=)" + whitespace + `*(?:'((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)"|(` + identifier + "))|)" + whitespace + "*\\]", pseudos = ":(" + identifier + `)(?:\\((('((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|` + attributes + ")*)|.*)\\)|)", rwhitespace = new RegExp(whitespace + "+", "g"), rcomma = new RegExp("^" + whitespace + "*," + whitespace + "*"), rleadingCombinator = new RegExp("^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*"), rdescend = new RegExp(whitespace + "|>"), rpseudo = new RegExp(pseudos), ridentifier = new RegExp("^" + identifier + "$"), matchExpr = {
        ID: new RegExp("^#(" + identifier + ")"),
        CLASS: new RegExp("^\\.(" + identifier + ")"),
        TAG: new RegExp("^(" + identifier + "|[*])"),
        ATTR: new RegExp("^" + attributes),
        PSEUDO: new RegExp("^" + pseudos),
        CHILD: new RegExp(
          "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace + "*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace + "*(\\d+)|))" + whitespace + "*\\)|)",
          "i"
        ),
        bool: new RegExp("^(?:" + booleans + ")$", "i"),
        needsContext: new RegExp("^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i")
      }, rinputs = /^(?:input|select|textarea|button)$/i, rheader = /^h\d$/i, rquickExpr2 = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, rsibling = /[+~]/, runescape = new RegExp("\\\\[\\da-fA-F]{1,6}" + whitespace + "?|\\\\([^\\r\\n\\f])", "g"), funescape = function(escape, nonHex) {
        var high = "0x" + escape.slice(1) - 65536;
        if (nonHex) {
          return nonHex;
        }
        return high < 0 ? String.fromCharCode(high + 65536) : String.fromCharCode(high >> 10 | 55296, high & 1023 | 56320);
      }, unloadHandler = function() {
        setDocument();
      }, inDisabledFieldset = addCombinator(
        function(elem) {
          return elem.disabled === true && nodeName(elem, "fieldset");
        },
        { dir: "parentNode", next: "legend" }
      );
      function safeActiveElement() {
        try {
          return document3.activeElement;
        } catch (err) {
        }
      }
      try {
        push2.apply(
          arr = slice.call(preferredDoc.childNodes),
          preferredDoc.childNodes
        );
        arr[preferredDoc.childNodes.length].nodeType;
      } catch (e2) {
        push2 = {
          apply: function(target, els) {
            pushNative.apply(target, slice.call(els));
          },
          call: function(target) {
            pushNative.apply(target, slice.call(arguments, 1));
          }
        };
      }
      function find(selector, context, results, seed) {
        var m2, i3, elem, nid, match, groups, newSelector, newContext = context && context.ownerDocument, nodeType = context ? context.nodeType : 9;
        results = results || [];
        if (typeof selector !== "string" || !selector || nodeType !== 1 && nodeType !== 9 && nodeType !== 11) {
          return results;
        }
        if (!seed) {
          setDocument(context);
          context = context || document3;
          if (documentIsHTML) {
            if (nodeType !== 11 && (match = rquickExpr2.exec(selector))) {
              if (m2 = match[1]) {
                if (nodeType === 9) {
                  if (elem = context.getElementById(m2)) {
                    if (elem.id === m2) {
                      push2.call(results, elem);
                      return results;
                    }
                  } else {
                    return results;
                  }
                } else {
                  if (newContext && (elem = newContext.getElementById(m2)) && find.contains(context, elem) && elem.id === m2) {
                    push2.call(results, elem);
                    return results;
                  }
                }
              } else if (match[2]) {
                push2.apply(results, context.getElementsByTagName(selector));
                return results;
              } else if ((m2 = match[3]) && context.getElementsByClassName) {
                push2.apply(results, context.getElementsByClassName(m2));
                return results;
              }
            }
            if (!nonnativeSelectorCache[selector + " "] && (!rbuggyQSA || !rbuggyQSA.test(selector))) {
              newSelector = selector;
              newContext = context;
              if (nodeType === 1 && (rdescend.test(selector) || rleadingCombinator.test(selector))) {
                newContext = rsibling.test(selector) && testContext(context.parentNode) || context;
                if (newContext != context || !support.scope) {
                  if (nid = context.getAttribute("id")) {
                    nid = jQuery.escapeSelector(nid);
                  } else {
                    context.setAttribute("id", nid = expando);
                  }
                }
                groups = tokenize(selector);
                i3 = groups.length;
                while (i3--) {
                  groups[i3] = (nid ? "#" + nid : ":scope") + " " + toSelector(groups[i3]);
                }
                newSelector = groups.join(",");
              }
              try {
                push2.apply(
                  results,
                  newContext.querySelectorAll(newSelector)
                );
                return results;
              } catch (qsaError) {
                nonnativeSelectorCache(selector, true);
              } finally {
                if (nid === expando) {
                  context.removeAttribute("id");
                }
              }
            }
          }
        }
        return select(selector.replace(rtrimCSS, "$1"), context, results, seed);
      }
      function createCache() {
        var keys = [];
        function cache(key, value) {
          if (keys.push(key + " ") > Expr.cacheLength) {
            delete cache[keys.shift()];
          }
          return cache[key + " "] = value;
        }
        return cache;
      }
      function markFunction(fn2) {
        fn2[expando] = true;
        return fn2;
      }
      function assert(fn2) {
        var el = document3.createElement("fieldset");
        try {
          return !!fn2(el);
        } catch (e2) {
          return false;
        } finally {
          if (el.parentNode) {
            el.parentNode.removeChild(el);
          }
          el = null;
        }
      }
      function createInputPseudo(type) {
        return function(elem) {
          return nodeName(elem, "input") && elem.type === type;
        };
      }
      function createButtonPseudo(type) {
        return function(elem) {
          return (nodeName(elem, "input") || nodeName(elem, "button")) && elem.type === type;
        };
      }
      function createDisabledPseudo(disabled) {
        return function(elem) {
          if ("form" in elem) {
            if (elem.parentNode && elem.disabled === false) {
              if ("label" in elem) {
                if ("label" in elem.parentNode) {
                  return elem.parentNode.disabled === disabled;
                } else {
                  return elem.disabled === disabled;
                }
              }
              return elem.isDisabled === disabled || elem.isDisabled !== !disabled && inDisabledFieldset(elem) === disabled;
            }
            return elem.disabled === disabled;
          } else if ("label" in elem) {
            return elem.disabled === disabled;
          }
          return false;
        };
      }
      function createPositionalPseudo(fn2) {
        return markFunction(function(argument) {
          argument = +argument;
          return markFunction(function(seed, matches2) {
            var j2, matchIndexes = fn2([], seed.length, argument), i3 = matchIndexes.length;
            while (i3--) {
              if (seed[j2 = matchIndexes[i3]]) {
                seed[j2] = !(matches2[j2] = seed[j2]);
              }
            }
          });
        });
      }
      function testContext(context) {
        return context && typeof context.getElementsByTagName !== "undefined" && context;
      }
      function setDocument(node) {
        var subWindow, doc = node ? node.ownerDocument || node : preferredDoc;
        if (doc == document3 || doc.nodeType !== 9 || !doc.documentElement) {
          return document3;
        }
        document3 = doc;
        documentElement2 = document3.documentElement;
        documentIsHTML = !jQuery.isXMLDoc(document3);
        matches = documentElement2.matches || documentElement2.webkitMatchesSelector || documentElement2.msMatchesSelector;
        if (preferredDoc != document3 && (subWindow = document3.defaultView) && subWindow.top !== subWindow) {
          subWindow.addEventListener("unload", unloadHandler);
        }
        support.getById = assert(function(el) {
          documentElement2.appendChild(el).id = jQuery.expando;
          return !document3.getElementsByName || !document3.getElementsByName(jQuery.expando).length;
        });
        support.disconnectedMatch = assert(function(el) {
          return matches.call(el, "*");
        });
        support.scope = assert(function() {
          return document3.querySelectorAll(":scope");
        });
        support.cssHas = assert(function() {
          try {
            document3.querySelector(":has(*,:jqfake)");
            return false;
          } catch (e2) {
            return true;
          }
        });
        if (support.getById) {
          Expr.filter.ID = function(id) {
            var attrId = id.replace(runescape, funescape);
            return function(elem) {
              return elem.getAttribute("id") === attrId;
            };
          };
          Expr.find.ID = function(id, context) {
            if (typeof context.getElementById !== "undefined" && documentIsHTML) {
              var elem = context.getElementById(id);
              return elem ? [elem] : [];
            }
          };
        } else {
          Expr.filter.ID = function(id) {
            var attrId = id.replace(runescape, funescape);
            return function(elem) {
              var node2 = typeof elem.getAttributeNode !== "undefined" && elem.getAttributeNode("id");
              return node2 && node2.value === attrId;
            };
          };
          Expr.find.ID = function(id, context) {
            if (typeof context.getElementById !== "undefined" && documentIsHTML) {
              var node2, i3, elems, elem = context.getElementById(id);
              if (elem) {
                node2 = elem.getAttributeNode("id");
                if (node2 && node2.value === id) {
                  return [elem];
                }
                elems = context.getElementsByName(id);
                i3 = 0;
                while (elem = elems[i3++]) {
                  node2 = elem.getAttributeNode("id");
                  if (node2 && node2.value === id) {
                    return [elem];
                  }
                }
              }
              return [];
            }
          };
        }
        Expr.find.TAG = function(tag, context) {
          if (typeof context.getElementsByTagName !== "undefined") {
            return context.getElementsByTagName(tag);
          } else {
            return context.querySelectorAll(tag);
          }
        };
        Expr.find.CLASS = function(className2, context) {
          if (typeof context.getElementsByClassName !== "undefined" && documentIsHTML) {
            return context.getElementsByClassName(className2);
          }
        };
        rbuggyQSA = [];
        assert(function(el) {
          var input;
          documentElement2.appendChild(el).innerHTML = "<a id='" + expando + "' href='' disabled='disabled'></a><select id='" + expando + "-\r\\' disabled='disabled'><option selected=''></option></select>";
          if (!el.querySelectorAll("[selected]").length) {
            rbuggyQSA.push("\\[" + whitespace + "*(?:value|" + booleans + ")");
          }
          if (!el.querySelectorAll("[id~=" + expando + "-]").length) {
            rbuggyQSA.push("~=");
          }
          if (!el.querySelectorAll("a#" + expando + "+*").length) {
            rbuggyQSA.push(".#.+[+~]");
          }
          if (!el.querySelectorAll(":checked").length) {
            rbuggyQSA.push(":checked");
          }
          input = document3.createElement("input");
          input.setAttribute("type", "hidden");
          el.appendChild(input).setAttribute("name", "D");
          documentElement2.appendChild(el).disabled = true;
          if (el.querySelectorAll(":disabled").length !== 2) {
            rbuggyQSA.push(":enabled", ":disabled");
          }
          input = document3.createElement("input");
          input.setAttribute("name", "");
          el.appendChild(input);
          if (!el.querySelectorAll("[name='']").length) {
            rbuggyQSA.push("\\[" + whitespace + "*name" + whitespace + "*=" + whitespace + `*(?:''|"")`);
          }
        });
        if (!support.cssHas) {
          rbuggyQSA.push(":has");
        }
        rbuggyQSA = rbuggyQSA.length && new RegExp(rbuggyQSA.join("|"));
        sortOrder = function(a2, b2) {
          if (a2 === b2) {
            hasDuplicate = true;
            return 0;
          }
          var compare2 = !a2.compareDocumentPosition - !b2.compareDocumentPosition;
          if (compare2) {
            return compare2;
          }
          compare2 = (a2.ownerDocument || a2) == (b2.ownerDocument || b2) ? a2.compareDocumentPosition(b2) : 1;
          if (compare2 & 1 || !support.sortDetached && b2.compareDocumentPosition(a2) === compare2) {
            if (a2 === document3 || a2.ownerDocument == preferredDoc && find.contains(preferredDoc, a2)) {
              return -1;
            }
            if (b2 === document3 || b2.ownerDocument == preferredDoc && find.contains(preferredDoc, b2)) {
              return 1;
            }
            return sortInput ? indexOf.call(sortInput, a2) - indexOf.call(sortInput, b2) : 0;
          }
          return compare2 & 4 ? -1 : 1;
        };
        return document3;
      }
      find.matches = function(expr, elements) {
        return find(expr, null, null, elements);
      };
      find.matchesSelector = function(elem, expr) {
        setDocument(elem);
        if (documentIsHTML && !nonnativeSelectorCache[expr + " "] && (!rbuggyQSA || !rbuggyQSA.test(expr))) {
          try {
            var ret = matches.call(elem, expr);
            if (ret || support.disconnectedMatch || elem.document && elem.document.nodeType !== 11) {
              return ret;
            }
          } catch (e2) {
            nonnativeSelectorCache(expr, true);
          }
        }
        return find(expr, document3, null, [elem]).length > 0;
      };
      find.contains = function(context, elem) {
        if ((context.ownerDocument || context) != document3) {
          setDocument(context);
        }
        return jQuery.contains(context, elem);
      };
      find.attr = function(elem, name) {
        if ((elem.ownerDocument || elem) != document3) {
          setDocument(elem);
        }
        var fn2 = Expr.attrHandle[name.toLowerCase()], val = fn2 && hasOwn.call(Expr.attrHandle, name.toLowerCase()) ? fn2(elem, name, !documentIsHTML) : void 0;
        if (val !== void 0) {
          return val;
        }
        return elem.getAttribute(name);
      };
      find.error = function(msg) {
        throw new Error("Syntax error, unrecognized expression: " + msg);
      };
      jQuery.uniqueSort = function(results) {
        var elem, duplicates = [], j2 = 0, i3 = 0;
        hasDuplicate = !support.sortStable;
        sortInput = !support.sortStable && slice.call(results, 0);
        sort.call(results, sortOrder);
        if (hasDuplicate) {
          while (elem = results[i3++]) {
            if (elem === results[i3]) {
              j2 = duplicates.push(i3);
            }
          }
          while (j2--) {
            splice.call(results, duplicates[j2], 1);
          }
        }
        sortInput = null;
        return results;
      };
      jQuery.fn.uniqueSort = function() {
        return this.pushStack(jQuery.uniqueSort(slice.apply(this)));
      };
      Expr = jQuery.expr = {
        cacheLength: 50,
        createPseudo: markFunction,
        match: matchExpr,
        attrHandle: {},
        find: {},
        relative: {
          ">": { dir: "parentNode", first: true },
          " ": { dir: "parentNode" },
          "+": { dir: "previousSibling", first: true },
          "~": { dir: "previousSibling" }
        },
        preFilter: {
          ATTR: function(match) {
            match[1] = match[1].replace(runescape, funescape);
            match[3] = (match[3] || match[4] || match[5] || "").replace(runescape, funescape);
            if (match[2] === "~=") {
              match[3] = " " + match[3] + " ";
            }
            return match.slice(0, 4);
          },
          CHILD: function(match) {
            match[1] = match[1].toLowerCase();
            if (match[1].slice(0, 3) === "nth") {
              if (!match[3]) {
                find.error(match[0]);
              }
              match[4] = +(match[4] ? match[5] + (match[6] || 1) : 2 * (match[3] === "even" || match[3] === "odd"));
              match[5] = +(match[7] + match[8] || match[3] === "odd");
            } else if (match[3]) {
              find.error(match[0]);
            }
            return match;
          },
          PSEUDO: function(match) {
            var excess, unquoted = !match[6] && match[2];
            if (matchExpr.CHILD.test(match[0])) {
              return null;
            }
            if (match[3]) {
              match[2] = match[4] || match[5] || "";
            } else if (unquoted && rpseudo.test(unquoted) && (excess = tokenize(unquoted, true)) && (excess = unquoted.indexOf(")", unquoted.length - excess) - unquoted.length)) {
              match[0] = match[0].slice(0, excess);
              match[2] = unquoted.slice(0, excess);
            }
            return match.slice(0, 3);
          }
        },
        filter: {
          TAG: function(nodeNameSelector) {
            var expectedNodeName = nodeNameSelector.replace(runescape, funescape).toLowerCase();
            return nodeNameSelector === "*" ? function() {
              return true;
            } : function(elem) {
              return nodeName(elem, expectedNodeName);
            };
          },
          CLASS: function(className2) {
            var pattern = classCache[className2 + " "];
            return pattern || (pattern = new RegExp("(^|" + whitespace + ")" + className2 + "(" + whitespace + "|$)")) && classCache(className2, function(elem) {
              return pattern.test(
                typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || ""
              );
            });
          },
          ATTR: function(name, operator, check) {
            return function(elem) {
              var result = find.attr(elem, name);
              if (result == null) {
                return operator === "!=";
              }
              if (!operator) {
                return true;
              }
              result += "";
              if (operator === "=") {
                return result === check;
              }
              if (operator === "!=") {
                return result !== check;
              }
              if (operator === "^=") {
                return check && result.indexOf(check) === 0;
              }
              if (operator === "*=") {
                return check && result.indexOf(check) > -1;
              }
              if (operator === "$=") {
                return check && result.slice(-check.length) === check;
              }
              if (operator === "~=") {
                return (" " + result.replace(rwhitespace, " ") + " ").indexOf(check) > -1;
              }
              if (operator === "|=") {
                return result === check || result.slice(0, check.length + 1) === check + "-";
              }
              return false;
            };
          },
          CHILD: function(type, what, _argument, first2, last2) {
            var simple = type.slice(0, 3) !== "nth", forward = type.slice(-4) !== "last", ofType = what === "of-type";
            return first2 === 1 && last2 === 0 ? function(elem) {
              return !!elem.parentNode;
            } : function(elem, _context, xml2) {
              var cache, outerCache, node, nodeIndex, start, dir2 = simple !== forward ? "nextSibling" : "previousSibling", parent = elem.parentNode, name = ofType && elem.nodeName.toLowerCase(), useCache = !xml2 && !ofType, diff = false;
              if (parent) {
                if (simple) {
                  while (dir2) {
                    node = elem;
                    while (node = node[dir2]) {
                      if (ofType ? nodeName(node, name) : node.nodeType === 1) {
                        return false;
                      }
                    }
                    start = dir2 = type === "only" && !start && "nextSibling";
                  }
                  return true;
                }
                start = [forward ? parent.firstChild : parent.lastChild];
                if (forward && useCache) {
                  outerCache = parent[expando] || (parent[expando] = {});
                  cache = outerCache[type] || [];
                  nodeIndex = cache[0] === dirruns && cache[1];
                  diff = nodeIndex && cache[2];
                  node = nodeIndex && parent.childNodes[nodeIndex];
                  while (node = ++nodeIndex && node && node[dir2] || (diff = nodeIndex = 0) || start.pop()) {
                    if (node.nodeType === 1 && ++diff && node === elem) {
                      outerCache[type] = [dirruns, nodeIndex, diff];
                      break;
                    }
                  }
                } else {
                  if (useCache) {
                    outerCache = elem[expando] || (elem[expando] = {});
                    cache = outerCache[type] || [];
                    nodeIndex = cache[0] === dirruns && cache[1];
                    diff = nodeIndex;
                  }
                  if (diff === false) {
                    while (node = ++nodeIndex && node && node[dir2] || (diff = nodeIndex = 0) || start.pop()) {
                      if ((ofType ? nodeName(node, name) : node.nodeType === 1) && ++diff) {
                        if (useCache) {
                          outerCache = node[expando] || (node[expando] = {});
                          outerCache[type] = [dirruns, diff];
                        }
                        if (node === elem) {
                          break;
                        }
                      }
                    }
                  }
                }
                diff -= last2;
                return diff === first2 || diff % first2 === 0 && diff / first2 >= 0;
              }
            };
          },
          PSEUDO: function(pseudo, argument) {
            var args, fn2 = Expr.pseudos[pseudo] || Expr.setFilters[pseudo.toLowerCase()] || find.error("unsupported pseudo: " + pseudo);
            if (fn2[expando]) {
              return fn2(argument);
            }
            if (fn2.length > 1) {
              args = [pseudo, pseudo, "", argument];
              return Expr.setFilters.hasOwnProperty(pseudo.toLowerCase()) ? markFunction(function(seed, matches2) {
                var idx, matched = fn2(seed, argument), i3 = matched.length;
                while (i3--) {
                  idx = indexOf.call(seed, matched[i3]);
                  seed[idx] = !(matches2[idx] = matched[i3]);
                }
              }) : function(elem) {
                return fn2(elem, 0, args);
              };
            }
            return fn2;
          }
        },
        pseudos: {
          not: markFunction(function(selector) {
            var input = [], results = [], matcher = compile(selector.replace(rtrimCSS, "$1"));
            return matcher[expando] ? markFunction(function(seed, matches2, _context, xml2) {
              var elem, unmatched = matcher(seed, null, xml2, []), i3 = seed.length;
              while (i3--) {
                if (elem = unmatched[i3]) {
                  seed[i3] = !(matches2[i3] = elem);
                }
              }
            }) : function(elem, _context, xml2) {
              input[0] = elem;
              matcher(input, null, xml2, results);
              input[0] = null;
              return !results.pop();
            };
          }),
          has: markFunction(function(selector) {
            return function(elem) {
              return find(selector, elem).length > 0;
            };
          }),
          contains: markFunction(function(text2) {
            text2 = text2.replace(runescape, funescape);
            return function(elem) {
              return (elem.textContent || jQuery.text(elem)).indexOf(text2) > -1;
            };
          }),
          lang: markFunction(function(lang) {
            if (!ridentifier.test(lang || "")) {
              find.error("unsupported lang: " + lang);
            }
            lang = lang.replace(runescape, funescape).toLowerCase();
            return function(elem) {
              var elemLang;
              do {
                if (elemLang = documentIsHTML ? elem.lang : elem.getAttribute("xml:lang") || elem.getAttribute("lang")) {
                  elemLang = elemLang.toLowerCase();
                  return elemLang === lang || elemLang.indexOf(lang + "-") === 0;
                }
              } while ((elem = elem.parentNode) && elem.nodeType === 1);
              return false;
            };
          }),
          target: function(elem) {
            var hash = window2.location && window2.location.hash;
            return hash && hash.slice(1) === elem.id;
          },
          root: function(elem) {
            return elem === documentElement2;
          },
          focus: function(elem) {
            return elem === safeActiveElement() && document3.hasFocus() && !!(elem.type || elem.href || ~elem.tabIndex);
          },
          enabled: createDisabledPseudo(false),
          disabled: createDisabledPseudo(true),
          checked: function(elem) {
            return nodeName(elem, "input") && !!elem.checked || nodeName(elem, "option") && !!elem.selected;
          },
          selected: function(elem) {
            if (elem.parentNode) {
              elem.parentNode.selectedIndex;
            }
            return elem.selected === true;
          },
          empty: function(elem) {
            for (elem = elem.firstChild; elem; elem = elem.nextSibling) {
              if (elem.nodeType < 6) {
                return false;
              }
            }
            return true;
          },
          parent: function(elem) {
            return !Expr.pseudos.empty(elem);
          },
          header: function(elem) {
            return rheader.test(elem.nodeName);
          },
          input: function(elem) {
            return rinputs.test(elem.nodeName);
          },
          button: function(elem) {
            return nodeName(elem, "input") && elem.type === "button" || nodeName(elem, "button");
          },
          text: function(elem) {
            var attr;
            return nodeName(elem, "input") && elem.type === "text" && ((attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text");
          },
          first: createPositionalPseudo(function() {
            return [0];
          }),
          last: createPositionalPseudo(function(_matchIndexes, length) {
            return [length - 1];
          }),
          eq: createPositionalPseudo(function(_matchIndexes, length, argument) {
            return [argument < 0 ? argument + length : argument];
          }),
          even: createPositionalPseudo(function(matchIndexes, length) {
            var i3 = 0;
            for (; i3 < length; i3 += 2) {
              matchIndexes.push(i3);
            }
            return matchIndexes;
          }),
          odd: createPositionalPseudo(function(matchIndexes, length) {
            var i3 = 1;
            for (; i3 < length; i3 += 2) {
              matchIndexes.push(i3);
            }
            return matchIndexes;
          }),
          lt: createPositionalPseudo(function(matchIndexes, length, argument) {
            var i3;
            if (argument < 0) {
              i3 = argument + length;
            } else if (argument > length) {
              i3 = length;
            } else {
              i3 = argument;
            }
            for (; --i3 >= 0; ) {
              matchIndexes.push(i3);
            }
            return matchIndexes;
          }),
          gt: createPositionalPseudo(function(matchIndexes, length, argument) {
            var i3 = argument < 0 ? argument + length : argument;
            for (; ++i3 < length; ) {
              matchIndexes.push(i3);
            }
            return matchIndexes;
          })
        }
      };
      Expr.pseudos.nth = Expr.pseudos.eq;
      for (i2 in { radio: true, checkbox: true, file: true, password: true, image: true }) {
        Expr.pseudos[i2] = createInputPseudo(i2);
      }
      for (i2 in { submit: true, reset: true }) {
        Expr.pseudos[i2] = createButtonPseudo(i2);
      }
      function setFilters() {
      }
      setFilters.prototype = Expr.filters = Expr.pseudos;
      Expr.setFilters = new setFilters();
      function tokenize(selector, parseOnly) {
        var matched, match, tokens, type, soFar, groups, preFilters, cached = tokenCache[selector + " "];
        if (cached) {
          return parseOnly ? 0 : cached.slice(0);
        }
        soFar = selector;
        groups = [];
        preFilters = Expr.preFilter;
        while (soFar) {
          if (!matched || (match = rcomma.exec(soFar))) {
            if (match) {
              soFar = soFar.slice(match[0].length) || soFar;
            }
            groups.push(tokens = []);
          }
          matched = false;
          if (match = rleadingCombinator.exec(soFar)) {
            matched = match.shift();
            tokens.push({
              value: matched,
              type: match[0].replace(rtrimCSS, " ")
            });
            soFar = soFar.slice(matched.length);
          }
          for (type in Expr.filter) {
            if ((match = matchExpr[type].exec(soFar)) && (!preFilters[type] || (match = preFilters[type](match)))) {
              matched = match.shift();
              tokens.push({
                value: matched,
                type,
                matches: match
              });
              soFar = soFar.slice(matched.length);
            }
          }
          if (!matched) {
            break;
          }
        }
        if (parseOnly) {
          return soFar.length;
        }
        return soFar ? find.error(selector) : tokenCache(selector, groups).slice(0);
      }
      function toSelector(tokens) {
        var i3 = 0, len = tokens.length, selector = "";
        for (; i3 < len; i3++) {
          selector += tokens[i3].value;
        }
        return selector;
      }
      function addCombinator(matcher, combinator, base) {
        var dir2 = combinator.dir, skip = combinator.next, key = skip || dir2, checkNonElements = base && key === "parentNode", doneName = done++;
        return combinator.first ? function(elem, context, xml2) {
          while (elem = elem[dir2]) {
            if (elem.nodeType === 1 || checkNonElements) {
              return matcher(elem, context, xml2);
            }
          }
          return false;
        } : function(elem, context, xml2) {
          var oldCache, outerCache, newCache = [dirruns, doneName];
          if (xml2) {
            while (elem = elem[dir2]) {
              if (elem.nodeType === 1 || checkNonElements) {
                if (matcher(elem, context, xml2)) {
                  return true;
                }
              }
            }
          } else {
            while (elem = elem[dir2]) {
              if (elem.nodeType === 1 || checkNonElements) {
                outerCache = elem[expando] || (elem[expando] = {});
                if (skip && nodeName(elem, skip)) {
                  elem = elem[dir2] || elem;
                } else if ((oldCache = outerCache[key]) && oldCache[0] === dirruns && oldCache[1] === doneName) {
                  return newCache[2] = oldCache[2];
                } else {
                  outerCache[key] = newCache;
                  if (newCache[2] = matcher(elem, context, xml2)) {
                    return true;
                  }
                }
              }
            }
          }
          return false;
        };
      }
      function elementMatcher(matchers) {
        return matchers.length > 1 ? function(elem, context, xml2) {
          var i3 = matchers.length;
          while (i3--) {
            if (!matchers[i3](elem, context, xml2)) {
              return false;
            }
          }
          return true;
        } : matchers[0];
      }
      function multipleContexts(selector, contexts, results) {
        var i3 = 0, len = contexts.length;
        for (; i3 < len; i3++) {
          find(selector, contexts[i3], results);
        }
        return results;
      }
      function condense(unmatched, map, filter, context, xml2) {
        var elem, newUnmatched = [], i3 = 0, len = unmatched.length, mapped = map != null;
        for (; i3 < len; i3++) {
          if (elem = unmatched[i3]) {
            if (!filter || filter(elem, context, xml2)) {
              newUnmatched.push(elem);
              if (mapped) {
                map.push(i3);
              }
            }
          }
        }
        return newUnmatched;
      }
      function setMatcher(preFilter, selector, matcher, postFilter, postFinder, postSelector) {
        if (postFilter && !postFilter[expando]) {
          postFilter = setMatcher(postFilter);
        }
        if (postFinder && !postFinder[expando]) {
          postFinder = setMatcher(postFinder, postSelector);
        }
        return markFunction(function(seed, results, context, xml2) {
          var temp, i3, elem, matcherOut, preMap = [], postMap = [], preexisting = results.length, elems = seed || multipleContexts(
            selector || "*",
            context.nodeType ? [context] : context,
            []
          ), matcherIn = preFilter && (seed || !selector) ? condense(elems, preMap, preFilter, context, xml2) : elems;
          if (matcher) {
            matcherOut = postFinder || (seed ? preFilter : preexisting || postFilter) ? [] : results;
            matcher(matcherIn, matcherOut, context, xml2);
          } else {
            matcherOut = matcherIn;
          }
          if (postFilter) {
            temp = condense(matcherOut, postMap);
            postFilter(temp, [], context, xml2);
            i3 = temp.length;
            while (i3--) {
              if (elem = temp[i3]) {
                matcherOut[postMap[i3]] = !(matcherIn[postMap[i3]] = elem);
              }
            }
          }
          if (seed) {
            if (postFinder || preFilter) {
              if (postFinder) {
                temp = [];
                i3 = matcherOut.length;
                while (i3--) {
                  if (elem = matcherOut[i3]) {
                    temp.push(matcherIn[i3] = elem);
                  }
                }
                postFinder(null, matcherOut = [], temp, xml2);
              }
              i3 = matcherOut.length;
              while (i3--) {
                if ((elem = matcherOut[i3]) && (temp = postFinder ? indexOf.call(seed, elem) : preMap[i3]) > -1) {
                  seed[temp] = !(results[temp] = elem);
                }
              }
            }
          } else {
            matcherOut = condense(
              matcherOut === results ? matcherOut.splice(preexisting, matcherOut.length) : matcherOut
            );
            if (postFinder) {
              postFinder(null, results, matcherOut, xml2);
            } else {
              push2.apply(results, matcherOut);
            }
          }
        });
      }
      function matcherFromTokens(tokens) {
        var checkContext, matcher, j2, len = tokens.length, leadingRelative = Expr.relative[tokens[0].type], implicitRelative = leadingRelative || Expr.relative[" "], i3 = leadingRelative ? 1 : 0, matchContext = addCombinator(function(elem) {
          return elem === checkContext;
        }, implicitRelative, true), matchAnyContext = addCombinator(function(elem) {
          return indexOf.call(checkContext, elem) > -1;
        }, implicitRelative, true), matchers = [function(elem, context, xml2) {
          var ret = !leadingRelative && (xml2 || context != outermostContext) || ((checkContext = context).nodeType ? matchContext(elem, context, xml2) : matchAnyContext(elem, context, xml2));
          checkContext = null;
          return ret;
        }];
        for (; i3 < len; i3++) {
          if (matcher = Expr.relative[tokens[i3].type]) {
            matchers = [addCombinator(elementMatcher(matchers), matcher)];
          } else {
            matcher = Expr.filter[tokens[i3].type].apply(null, tokens[i3].matches);
            if (matcher[expando]) {
              j2 = ++i3;
              for (; j2 < len; j2++) {
                if (Expr.relative[tokens[j2].type]) {
                  break;
                }
              }
              return setMatcher(
                i3 > 1 && elementMatcher(matchers),
                i3 > 1 && toSelector(
                  tokens.slice(0, i3 - 1).concat({ value: tokens[i3 - 2].type === " " ? "*" : "" })
                ).replace(rtrimCSS, "$1"),
                matcher,
                i3 < j2 && matcherFromTokens(tokens.slice(i3, j2)),
                j2 < len && matcherFromTokens(tokens = tokens.slice(j2)),
                j2 < len && toSelector(tokens)
              );
            }
            matchers.push(matcher);
          }
        }
        return elementMatcher(matchers);
      }
      function matcherFromGroupMatchers(elementMatchers, setMatchers) {
        var bySet = setMatchers.length > 0, byElement = elementMatchers.length > 0, superMatcher = function(seed, context, xml2, results, outermost) {
          var elem, j2, matcher, matchedCount = 0, i3 = "0", unmatched = seed && [], setMatched = [], contextBackup = outermostContext, elems = seed || byElement && Expr.find.TAG("*", outermost), dirrunsUnique = dirruns += contextBackup == null ? 1 : Math.random() || 0.1, len = elems.length;
          if (outermost) {
            outermostContext = context == document3 || context || outermost;
          }
          for (; i3 !== len && (elem = elems[i3]) != null; i3++) {
            if (byElement && elem) {
              j2 = 0;
              if (!context && elem.ownerDocument != document3) {
                setDocument(elem);
                xml2 = !documentIsHTML;
              }
              while (matcher = elementMatchers[j2++]) {
                if (matcher(elem, context || document3, xml2)) {
                  push2.call(results, elem);
                  break;
                }
              }
              if (outermost) {
                dirruns = dirrunsUnique;
              }
            }
            if (bySet) {
              if (elem = !matcher && elem) {
                matchedCount--;
              }
              if (seed) {
                unmatched.push(elem);
              }
            }
          }
          matchedCount += i3;
          if (bySet && i3 !== matchedCount) {
            j2 = 0;
            while (matcher = setMatchers[j2++]) {
              matcher(unmatched, setMatched, context, xml2);
            }
            if (seed) {
              if (matchedCount > 0) {
                while (i3--) {
                  if (!(unmatched[i3] || setMatched[i3])) {
                    setMatched[i3] = pop.call(results);
                  }
                }
              }
              setMatched = condense(setMatched);
            }
            push2.apply(results, setMatched);
            if (outermost && !seed && setMatched.length > 0 && matchedCount + setMatchers.length > 1) {
              jQuery.uniqueSort(results);
            }
          }
          if (outermost) {
            dirruns = dirrunsUnique;
            outermostContext = contextBackup;
          }
          return unmatched;
        };
        return bySet ? markFunction(superMatcher) : superMatcher;
      }
      function compile(selector, match) {
        var i3, setMatchers = [], elementMatchers = [], cached = compilerCache[selector + " "];
        if (!cached) {
          if (!match) {
            match = tokenize(selector);
          }
          i3 = match.length;
          while (i3--) {
            cached = matcherFromTokens(match[i3]);
            if (cached[expando]) {
              setMatchers.push(cached);
            } else {
              elementMatchers.push(cached);
            }
          }
          cached = compilerCache(
            selector,
            matcherFromGroupMatchers(elementMatchers, setMatchers)
          );
          cached.selector = selector;
        }
        return cached;
      }
      function select(selector, context, results, seed) {
        var i3, tokens, token, type, find2, compiled = typeof selector === "function" && selector, match = !seed && tokenize(selector = compiled.selector || selector);
        results = results || [];
        if (match.length === 1) {
          tokens = match[0] = match[0].slice(0);
          if (tokens.length > 2 && (token = tokens[0]).type === "ID" && context.nodeType === 9 && documentIsHTML && Expr.relative[tokens[1].type]) {
            context = (Expr.find.ID(
              token.matches[0].replace(runescape, funescape),
              context
            ) || [])[0];
            if (!context) {
              return results;
            } else if (compiled) {
              context = context.parentNode;
            }
            selector = selector.slice(tokens.shift().value.length);
          }
          i3 = matchExpr.needsContext.test(selector) ? 0 : tokens.length;
          while (i3--) {
            token = tokens[i3];
            if (Expr.relative[type = token.type]) {
              break;
            }
            if (find2 = Expr.find[type]) {
              if (seed = find2(
                token.matches[0].replace(runescape, funescape),
                rsibling.test(tokens[0].type) && testContext(context.parentNode) || context
              )) {
                tokens.splice(i3, 1);
                selector = seed.length && toSelector(tokens);
                if (!selector) {
                  push2.apply(results, seed);
                  return results;
                }
                break;
              }
            }
          }
        }
        (compiled || compile(selector, match))(
          seed,
          context,
          !documentIsHTML,
          results,
          !context || rsibling.test(selector) && testContext(context.parentNode) || context
        );
        return results;
      }
      support.sortStable = expando.split("").sort(sortOrder).join("") === expando;
      setDocument();
      support.sortDetached = assert(function(el) {
        return el.compareDocumentPosition(document3.createElement("fieldset")) & 1;
      });
      jQuery.find = find;
      jQuery.expr[":"] = jQuery.expr.pseudos;
      jQuery.unique = jQuery.uniqueSort;
      find.compile = compile;
      find.select = select;
      find.setDocument = setDocument;
      find.escape = jQuery.escapeSelector;
      find.getText = jQuery.text;
      find.isXML = jQuery.isXMLDoc;
      find.selectors = jQuery.expr;
      find.support = jQuery.support;
      find.uniqueSort = jQuery.uniqueSort;
    })();
    var dir = function(elem, dir2, until) {
      var matched = [], truncate = until !== void 0;
      while ((elem = elem[dir2]) && elem.nodeType !== 9) {
        if (elem.nodeType === 1) {
          if (truncate && jQuery(elem).is(until)) {
            break;
          }
          matched.push(elem);
        }
      }
      return matched;
    };
    var siblings = function(n2, elem) {
      var matched = [];
      for (; n2; n2 = n2.nextSibling) {
        if (n2.nodeType === 1 && n2 !== elem) {
          matched.push(n2);
        }
      }
      return matched;
    };
    var rneedsContext = jQuery.expr.match.needsContext;
    var rsingleTag = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
    function winnow(elements, qualifier, not) {
      if (isFunction2(qualifier)) {
        return jQuery.grep(elements, function(elem, i2) {
          return !!qualifier.call(elem, i2, elem) !== not;
        });
      }
      if (qualifier.nodeType) {
        return jQuery.grep(elements, function(elem) {
          return elem === qualifier !== not;
        });
      }
      if (typeof qualifier !== "string") {
        return jQuery.grep(elements, function(elem) {
          return indexOf.call(qualifier, elem) > -1 !== not;
        });
      }
      return jQuery.filter(qualifier, elements, not);
    }
    jQuery.filter = function(expr, elems, not) {
      var elem = elems[0];
      if (not) {
        expr = ":not(" + expr + ")";
      }
      if (elems.length === 1 && elem.nodeType === 1) {
        return jQuery.find.matchesSelector(elem, expr) ? [elem] : [];
      }
      return jQuery.find.matches(expr, jQuery.grep(elems, function(elem2) {
        return elem2.nodeType === 1;
      }));
    };
    jQuery.fn.extend({
      find: function(selector) {
        var i2, ret, len = this.length, self2 = this;
        if (typeof selector !== "string") {
          return this.pushStack(jQuery(selector).filter(function() {
            for (i2 = 0; i2 < len; i2++) {
              if (jQuery.contains(self2[i2], this)) {
                return true;
              }
            }
          }));
        }
        ret = this.pushStack([]);
        for (i2 = 0; i2 < len; i2++) {
          jQuery.find(selector, self2[i2], ret);
        }
        return len > 1 ? jQuery.uniqueSort(ret) : ret;
      },
      filter: function(selector) {
        return this.pushStack(winnow(this, selector || [], false));
      },
      not: function(selector) {
        return this.pushStack(winnow(this, selector || [], true));
      },
      is: function(selector) {
        return !!winnow(
          this,
          typeof selector === "string" && rneedsContext.test(selector) ? jQuery(selector) : selector || [],
          false
        ).length;
      }
    });
    var rootjQuery, rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/, init = jQuery.fn.init = function(selector, context, root) {
      var match, elem;
      if (!selector) {
        return this;
      }
      root = root || rootjQuery;
      if (typeof selector === "string") {
        if (selector[0] === "<" && selector[selector.length - 1] === ">" && selector.length >= 3) {
          match = [null, selector, null];
        } else {
          match = rquickExpr.exec(selector);
        }
        if (match && (match[1] || !context)) {
          if (match[1]) {
            context = context instanceof jQuery ? context[0] : context;
            jQuery.merge(this, jQuery.parseHTML(
              match[1],
              context && context.nodeType ? context.ownerDocument || context : document2,
              true
            ));
            if (rsingleTag.test(match[1]) && jQuery.isPlainObject(context)) {
              for (match in context) {
                if (isFunction2(this[match])) {
                  this[match](context[match]);
                } else {
                  this.attr(match, context[match]);
                }
              }
            }
            return this;
          } else {
            elem = document2.getElementById(match[2]);
            if (elem) {
              this[0] = elem;
              this.length = 1;
            }
            return this;
          }
        } else if (!context || context.jquery) {
          return (context || root).find(selector);
        } else {
          return this.constructor(context).find(selector);
        }
      } else if (selector.nodeType) {
        this[0] = selector;
        this.length = 1;
        return this;
      } else if (isFunction2(selector)) {
        return root.ready !== void 0 ? root.ready(selector) : selector(jQuery);
      }
      return jQuery.makeArray(selector, this);
    };
    init.prototype = jQuery.fn;
    rootjQuery = jQuery(document2);
    var rparentsprev = /^(?:parents|prev(?:Until|All))/, guaranteedUnique = {
      children: true,
      contents: true,
      next: true,
      prev: true
    };
    jQuery.fn.extend({
      has: function(target) {
        var targets = jQuery(target, this), l2 = targets.length;
        return this.filter(function() {
          var i2 = 0;
          for (; i2 < l2; i2++) {
            if (jQuery.contains(this, targets[i2])) {
              return true;
            }
          }
        });
      },
      closest: function(selectors, context) {
        var cur, i2 = 0, l2 = this.length, matched = [], targets = typeof selectors !== "string" && jQuery(selectors);
        if (!rneedsContext.test(selectors)) {
          for (; i2 < l2; i2++) {
            for (cur = this[i2]; cur && cur !== context; cur = cur.parentNode) {
              if (cur.nodeType < 11 && (targets ? targets.index(cur) > -1 : cur.nodeType === 1 && jQuery.find.matchesSelector(cur, selectors))) {
                matched.push(cur);
                break;
              }
            }
          }
        }
        return this.pushStack(matched.length > 1 ? jQuery.uniqueSort(matched) : matched);
      },
      index: function(elem) {
        if (!elem) {
          return this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
        }
        if (typeof elem === "string") {
          return indexOf.call(jQuery(elem), this[0]);
        }
        return indexOf.call(
          this,
          elem.jquery ? elem[0] : elem
        );
      },
      add: function(selector, context) {
        return this.pushStack(
          jQuery.uniqueSort(
            jQuery.merge(this.get(), jQuery(selector, context))
          )
        );
      },
      addBack: function(selector) {
        return this.add(
          selector == null ? this.prevObject : this.prevObject.filter(selector)
        );
      }
    });
    function sibling(cur, dir2) {
      while ((cur = cur[dir2]) && cur.nodeType !== 1) {
      }
      return cur;
    }
    jQuery.each({
      parent: function(elem) {
        var parent = elem.parentNode;
        return parent && parent.nodeType !== 11 ? parent : null;
      },
      parents: function(elem) {
        return dir(elem, "parentNode");
      },
      parentsUntil: function(elem, _i, until) {
        return dir(elem, "parentNode", until);
      },
      next: function(elem) {
        return sibling(elem, "nextSibling");
      },
      prev: function(elem) {
        return sibling(elem, "previousSibling");
      },
      nextAll: function(elem) {
        return dir(elem, "nextSibling");
      },
      prevAll: function(elem) {
        return dir(elem, "previousSibling");
      },
      nextUntil: function(elem, _i, until) {
        return dir(elem, "nextSibling", until);
      },
      prevUntil: function(elem, _i, until) {
        return dir(elem, "previousSibling", until);
      },
      siblings: function(elem) {
        return siblings((elem.parentNode || {}).firstChild, elem);
      },
      children: function(elem) {
        return siblings(elem.firstChild);
      },
      contents: function(elem) {
        if (elem.contentDocument != null && getProto(elem.contentDocument)) {
          return elem.contentDocument;
        }
        if (nodeName(elem, "template")) {
          elem = elem.content || elem;
        }
        return jQuery.merge([], elem.childNodes);
      }
    }, function(name, fn2) {
      jQuery.fn[name] = function(until, selector) {
        var matched = jQuery.map(this, fn2, until);
        if (name.slice(-5) !== "Until") {
          selector = until;
        }
        if (selector && typeof selector === "string") {
          matched = jQuery.filter(selector, matched);
        }
        if (this.length > 1) {
          if (!guaranteedUnique[name]) {
            jQuery.uniqueSort(matched);
          }
          if (rparentsprev.test(name)) {
            matched.reverse();
          }
        }
        return this.pushStack(matched);
      };
    });
    var rnothtmlwhite = /[^\x20\t\r\n\f]+/g;
    function createOptions(options) {
      var object = {};
      jQuery.each(options.match(rnothtmlwhite) || [], function(_2, flag) {
        object[flag] = true;
      });
      return object;
    }
    jQuery.Callbacks = function(options) {
      options = typeof options === "string" ? createOptions(options) : jQuery.extend({}, options);
      var firing, memory, fired, locked, list = [], queue = [], firingIndex = -1, fire = function() {
        locked = locked || options.once;
        fired = firing = true;
        for (; queue.length; firingIndex = -1) {
          memory = queue.shift();
          while (++firingIndex < list.length) {
            if (list[firingIndex].apply(memory[0], memory[1]) === false && options.stopOnFalse) {
              firingIndex = list.length;
              memory = false;
            }
          }
        }
        if (!options.memory) {
          memory = false;
        }
        firing = false;
        if (locked) {
          if (memory) {
            list = [];
          } else {
            list = "";
          }
        }
      }, self2 = {
        add: function() {
          if (list) {
            if (memory && !firing) {
              firingIndex = list.length - 1;
              queue.push(memory);
            }
            (function add(args) {
              jQuery.each(args, function(_2, arg) {
                if (isFunction2(arg)) {
                  if (!options.unique || !self2.has(arg)) {
                    list.push(arg);
                  }
                } else if (arg && arg.length && toType(arg) !== "string") {
                  add(arg);
                }
              });
            })(arguments);
            if (memory && !firing) {
              fire();
            }
          }
          return this;
        },
        remove: function() {
          jQuery.each(arguments, function(_2, arg) {
            var index;
            while ((index = jQuery.inArray(arg, list, index)) > -1) {
              list.splice(index, 1);
              if (index <= firingIndex) {
                firingIndex--;
              }
            }
          });
          return this;
        },
        has: function(fn2) {
          return fn2 ? jQuery.inArray(fn2, list) > -1 : list.length > 0;
        },
        empty: function() {
          if (list) {
            list = [];
          }
          return this;
        },
        disable: function() {
          locked = queue = [];
          list = memory = "";
          return this;
        },
        disabled: function() {
          return !list;
        },
        lock: function() {
          locked = queue = [];
          if (!memory && !firing) {
            list = memory = "";
          }
          return this;
        },
        locked: function() {
          return !!locked;
        },
        fireWith: function(context, args) {
          if (!locked) {
            args = args || [];
            args = [context, args.slice ? args.slice() : args];
            queue.push(args);
            if (!firing) {
              fire();
            }
          }
          return this;
        },
        fire: function() {
          self2.fireWith(this, arguments);
          return this;
        },
        fired: function() {
          return !!fired;
        }
      };
      return self2;
    };
    function Identity(v2) {
      return v2;
    }
    function Thrower(ex) {
      throw ex;
    }
    function adoptValue(value, resolve, reject, noValue) {
      var method;
      try {
        if (value && isFunction2(method = value.promise)) {
          method.call(value).done(resolve).fail(reject);
        } else if (value && isFunction2(method = value.then)) {
          method.call(value, resolve, reject);
        } else {
          resolve.apply(void 0, [value].slice(noValue));
        }
      } catch (value2) {
        reject.apply(void 0, [value2]);
      }
    }
    jQuery.extend({
      Deferred: function(func) {
        var tuples = [
          [
            "notify",
            "progress",
            jQuery.Callbacks("memory"),
            jQuery.Callbacks("memory"),
            2
          ],
          [
            "resolve",
            "done",
            jQuery.Callbacks("once memory"),
            jQuery.Callbacks("once memory"),
            0,
            "resolved"
          ],
          [
            "reject",
            "fail",
            jQuery.Callbacks("once memory"),
            jQuery.Callbacks("once memory"),
            1,
            "rejected"
          ]
        ], state = "pending", promise = {
          state: function() {
            return state;
          },
          always: function() {
            deferred.done(arguments).fail(arguments);
            return this;
          },
          "catch": function(fn2) {
            return promise.then(null, fn2);
          },
          pipe: function() {
            var fns = arguments;
            return jQuery.Deferred(function(newDefer) {
              jQuery.each(tuples, function(_i, tuple) {
                var fn2 = isFunction2(fns[tuple[4]]) && fns[tuple[4]];
                deferred[tuple[1]](function() {
                  var returned = fn2 && fn2.apply(this, arguments);
                  if (returned && isFunction2(returned.promise)) {
                    returned.promise().progress(newDefer.notify).done(newDefer.resolve).fail(newDefer.reject);
                  } else {
                    newDefer[tuple[0] + "With"](
                      this,
                      fn2 ? [returned] : arguments
                    );
                  }
                });
              });
              fns = null;
            }).promise();
          },
          then: function(onFulfilled, onRejected, onProgress) {
            var maxDepth = 0;
            function resolve(depth, deferred2, handler, special) {
              return function() {
                var that = this, args = arguments, mightThrow = function() {
                  var returned, then;
                  if (depth < maxDepth) {
                    return;
                  }
                  returned = handler.apply(that, args);
                  if (returned === deferred2.promise()) {
                    throw new TypeError("Thenable self-resolution");
                  }
                  then = returned && (typeof returned === "object" || typeof returned === "function") && returned.then;
                  if (isFunction2(then)) {
                    if (special) {
                      then.call(
                        returned,
                        resolve(maxDepth, deferred2, Identity, special),
                        resolve(maxDepth, deferred2, Thrower, special)
                      );
                    } else {
                      maxDepth++;
                      then.call(
                        returned,
                        resolve(maxDepth, deferred2, Identity, special),
                        resolve(maxDepth, deferred2, Thrower, special),
                        resolve(
                          maxDepth,
                          deferred2,
                          Identity,
                          deferred2.notifyWith
                        )
                      );
                    }
                  } else {
                    if (handler !== Identity) {
                      that = void 0;
                      args = [returned];
                    }
                    (special || deferred2.resolveWith)(that, args);
                  }
                }, process = special ? mightThrow : function() {
                  try {
                    mightThrow();
                  } catch (e2) {
                    if (jQuery.Deferred.exceptionHook) {
                      jQuery.Deferred.exceptionHook(
                        e2,
                        process.error
                      );
                    }
                    if (depth + 1 >= maxDepth) {
                      if (handler !== Thrower) {
                        that = void 0;
                        args = [e2];
                      }
                      deferred2.rejectWith(that, args);
                    }
                  }
                };
                if (depth) {
                  process();
                } else {
                  if (jQuery.Deferred.getErrorHook) {
                    process.error = jQuery.Deferred.getErrorHook();
                  } else if (jQuery.Deferred.getStackHook) {
                    process.error = jQuery.Deferred.getStackHook();
                  }
                  window2.setTimeout(process);
                }
              };
            }
            return jQuery.Deferred(function(newDefer) {
              tuples[0][3].add(
                resolve(
                  0,
                  newDefer,
                  isFunction2(onProgress) ? onProgress : Identity,
                  newDefer.notifyWith
                )
              );
              tuples[1][3].add(
                resolve(
                  0,
                  newDefer,
                  isFunction2(onFulfilled) ? onFulfilled : Identity
                )
              );
              tuples[2][3].add(
                resolve(
                  0,
                  newDefer,
                  isFunction2(onRejected) ? onRejected : Thrower
                )
              );
            }).promise();
          },
          promise: function(obj) {
            return obj != null ? jQuery.extend(obj, promise) : promise;
          }
        }, deferred = {};
        jQuery.each(tuples, function(i2, tuple) {
          var list = tuple[2], stateString = tuple[5];
          promise[tuple[1]] = list.add;
          if (stateString) {
            list.add(
              function() {
                state = stateString;
              },
              tuples[3 - i2][2].disable,
              tuples[3 - i2][3].disable,
              tuples[0][2].lock,
              tuples[0][3].lock
            );
          }
          list.add(tuple[3].fire);
          deferred[tuple[0]] = function() {
            deferred[tuple[0] + "With"](this === deferred ? void 0 : this, arguments);
            return this;
          };
          deferred[tuple[0] + "With"] = list.fireWith;
        });
        promise.promise(deferred);
        if (func) {
          func.call(deferred, deferred);
        }
        return deferred;
      },
      when: function(singleValue) {
        var remaining = arguments.length, i2 = remaining, resolveContexts = Array(i2), resolveValues = slice.call(arguments), primary = jQuery.Deferred(), updateFunc = function(i3) {
          return function(value) {
            resolveContexts[i3] = this;
            resolveValues[i3] = arguments.length > 1 ? slice.call(arguments) : value;
            if (!--remaining) {
              primary.resolveWith(resolveContexts, resolveValues);
            }
          };
        };
        if (remaining <= 1) {
          adoptValue(
            singleValue,
            primary.done(updateFunc(i2)).resolve,
            primary.reject,
            !remaining
          );
          if (primary.state() === "pending" || isFunction2(resolveValues[i2] && resolveValues[i2].then)) {
            return primary.then();
          }
        }
        while (i2--) {
          adoptValue(resolveValues[i2], updateFunc(i2), primary.reject);
        }
        return primary.promise();
      }
    });
    var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    jQuery.Deferred.exceptionHook = function(error, asyncError) {
      if (window2.console && window2.console.warn && error && rerrorNames.test(error.name)) {
        window2.console.warn(
          "jQuery.Deferred exception: " + error.message,
          error.stack,
          asyncError
        );
      }
    };
    jQuery.readyException = function(error) {
      window2.setTimeout(function() {
        throw error;
      });
    };
    var readyList = jQuery.Deferred();
    jQuery.fn.ready = function(fn2) {
      readyList.then(fn2).catch(function(error) {
        jQuery.readyException(error);
      });
      return this;
    };
    jQuery.extend({
      isReady: false,
      readyWait: 1,
      ready: function(wait) {
        if (wait === true ? --jQuery.readyWait : jQuery.isReady) {
          return;
        }
        jQuery.isReady = true;
        if (wait !== true && --jQuery.readyWait > 0) {
          return;
        }
        readyList.resolveWith(document2, [jQuery]);
      }
    });
    jQuery.ready.then = readyList.then;
    function completed() {
      document2.removeEventListener("DOMContentLoaded", completed);
      window2.removeEventListener("load", completed);
      jQuery.ready();
    }
    if (document2.readyState === "complete" || document2.readyState !== "loading" && !document2.documentElement.doScroll) {
      window2.setTimeout(jQuery.ready);
    } else {
      document2.addEventListener("DOMContentLoaded", completed);
      window2.addEventListener("load", completed);
    }
    var access = function(elems, fn2, key, value, chainable, emptyGet, raw) {
      var i2 = 0, len = elems.length, bulk = key == null;
      if (toType(key) === "object") {
        chainable = true;
        for (i2 in key) {
          access(elems, fn2, i2, key[i2], true, emptyGet, raw);
        }
      } else if (value !== void 0) {
        chainable = true;
        if (!isFunction2(value)) {
          raw = true;
        }
        if (bulk) {
          if (raw) {
            fn2.call(elems, value);
            fn2 = null;
          } else {
            bulk = fn2;
            fn2 = function(elem, _key, value2) {
              return bulk.call(jQuery(elem), value2);
            };
          }
        }
        if (fn2) {
          for (; i2 < len; i2++) {
            fn2(
              elems[i2],
              key,
              raw ? value : value.call(elems[i2], i2, fn2(elems[i2], key))
            );
          }
        }
      }
      if (chainable) {
        return elems;
      }
      if (bulk) {
        return fn2.call(elems);
      }
      return len ? fn2(elems[0], key) : emptyGet;
    };
    var rmsPrefix = /^-ms-/, rdashAlpha = /-([a-z])/g;
    function fcamelCase(_all, letter) {
      return letter.toUpperCase();
    }
    function camelCase(string) {
      return string.replace(rmsPrefix, "ms-").replace(rdashAlpha, fcamelCase);
    }
    var acceptData = function(owner) {
      return owner.nodeType === 1 || owner.nodeType === 9 || !+owner.nodeType;
    };
    function Data() {
      this.expando = jQuery.expando + Data.uid++;
    }
    Data.uid = 1;
    Data.prototype = {
      cache: function(owner) {
        var value = owner[this.expando];
        if (!value) {
          value = {};
          if (acceptData(owner)) {
            if (owner.nodeType) {
              owner[this.expando] = value;
            } else {
              Object.defineProperty(owner, this.expando, {
                value,
                configurable: true
              });
            }
          }
        }
        return value;
      },
      set: function(owner, data, value) {
        var prop, cache = this.cache(owner);
        if (typeof data === "string") {
          cache[camelCase(data)] = value;
        } else {
          for (prop in data) {
            cache[camelCase(prop)] = data[prop];
          }
        }
        return cache;
      },
      get: function(owner, key) {
        return key === void 0 ? this.cache(owner) : owner[this.expando] && owner[this.expando][camelCase(key)];
      },
      access: function(owner, key, value) {
        if (key === void 0 || key && typeof key === "string" && value === void 0) {
          return this.get(owner, key);
        }
        this.set(owner, key, value);
        return value !== void 0 ? value : key;
      },
      remove: function(owner, key) {
        var i2, cache = owner[this.expando];
        if (cache === void 0) {
          return;
        }
        if (key !== void 0) {
          if (Array.isArray(key)) {
            key = key.map(camelCase);
          } else {
            key = camelCase(key);
            key = key in cache ? [key] : key.match(rnothtmlwhite) || [];
          }
          i2 = key.length;
          while (i2--) {
            delete cache[key[i2]];
          }
        }
        if (key === void 0 || jQuery.isEmptyObject(cache)) {
          if (owner.nodeType) {
            owner[this.expando] = void 0;
          } else {
            delete owner[this.expando];
          }
        }
      },
      hasData: function(owner) {
        var cache = owner[this.expando];
        return cache !== void 0 && !jQuery.isEmptyObject(cache);
      }
    };
    var dataPriv = new Data();
    var dataUser = new Data();
    var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, rmultiDash = /[A-Z]/g;
    function getData(data) {
      if (data === "true") {
        return true;
      }
      if (data === "false") {
        return false;
      }
      if (data === "null") {
        return null;
      }
      if (data === +data + "") {
        return +data;
      }
      if (rbrace.test(data)) {
        return JSON.parse(data);
      }
      return data;
    }
    function dataAttr(elem, key, data) {
      var name;
      if (data === void 0 && elem.nodeType === 1) {
        name = "data-" + key.replace(rmultiDash, "-$&").toLowerCase();
        data = elem.getAttribute(name);
        if (typeof data === "string") {
          try {
            data = getData(data);
          } catch (e2) {
          }
          dataUser.set(elem, key, data);
        } else {
          data = void 0;
        }
      }
      return data;
    }
    jQuery.extend({
      hasData: function(elem) {
        return dataUser.hasData(elem) || dataPriv.hasData(elem);
      },
      data: function(elem, name, data) {
        return dataUser.access(elem, name, data);
      },
      removeData: function(elem, name) {
        dataUser.remove(elem, name);
      },
      _data: function(elem, name, data) {
        return dataPriv.access(elem, name, data);
      },
      _removeData: function(elem, name) {
        dataPriv.remove(elem, name);
      }
    });
    jQuery.fn.extend({
      data: function(key, value) {
        var i2, name, data, elem = this[0], attrs = elem && elem.attributes;
        if (key === void 0) {
          if (this.length) {
            data = dataUser.get(elem);
            if (elem.nodeType === 1 && !dataPriv.get(elem, "hasDataAttrs")) {
              i2 = attrs.length;
              while (i2--) {
                if (attrs[i2]) {
                  name = attrs[i2].name;
                  if (name.indexOf("data-") === 0) {
                    name = camelCase(name.slice(5));
                    dataAttr(elem, name, data[name]);
                  }
                }
              }
              dataPriv.set(elem, "hasDataAttrs", true);
            }
          }
          return data;
        }
        if (typeof key === "object") {
          return this.each(function() {
            dataUser.set(this, key);
          });
        }
        return access(this, function(value2) {
          var data2;
          if (elem && value2 === void 0) {
            data2 = dataUser.get(elem, key);
            if (data2 !== void 0) {
              return data2;
            }
            data2 = dataAttr(elem, key);
            if (data2 !== void 0) {
              return data2;
            }
            return;
          }
          this.each(function() {
            dataUser.set(this, key, value2);
          });
        }, null, value, arguments.length > 1, null, true);
      },
      removeData: function(key) {
        return this.each(function() {
          dataUser.remove(this, key);
        });
      }
    });
    jQuery.extend({
      queue: function(elem, type, data) {
        var queue;
        if (elem) {
          type = (type || "fx") + "queue";
          queue = dataPriv.get(elem, type);
          if (data) {
            if (!queue || Array.isArray(data)) {
              queue = dataPriv.access(elem, type, jQuery.makeArray(data));
            } else {
              queue.push(data);
            }
          }
          return queue || [];
        }
      },
      dequeue: function(elem, type) {
        type = type || "fx";
        var queue = jQuery.queue(elem, type), startLength = queue.length, fn2 = queue.shift(), hooks = jQuery._queueHooks(elem, type), next = function() {
          jQuery.dequeue(elem, type);
        };
        if (fn2 === "inprogress") {
          fn2 = queue.shift();
          startLength--;
        }
        if (fn2) {
          if (type === "fx") {
            queue.unshift("inprogress");
          }
          delete hooks.stop;
          fn2.call(elem, next, hooks);
        }
        if (!startLength && hooks) {
          hooks.empty.fire();
        }
      },
      _queueHooks: function(elem, type) {
        var key = type + "queueHooks";
        return dataPriv.get(elem, key) || dataPriv.access(elem, key, {
          empty: jQuery.Callbacks("once memory").add(function() {
            dataPriv.remove(elem, [type + "queue", key]);
          })
        });
      }
    });
    jQuery.fn.extend({
      queue: function(type, data) {
        var setter = 2;
        if (typeof type !== "string") {
          data = type;
          type = "fx";
          setter--;
        }
        if (arguments.length < setter) {
          return jQuery.queue(this[0], type);
        }
        return data === void 0 ? this : this.each(function() {
          var queue = jQuery.queue(this, type, data);
          jQuery._queueHooks(this, type);
          if (type === "fx" && queue[0] !== "inprogress") {
            jQuery.dequeue(this, type);
          }
        });
      },
      dequeue: function(type) {
        return this.each(function() {
          jQuery.dequeue(this, type);
        });
      },
      clearQueue: function(type) {
        return this.queue(type || "fx", []);
      },
      promise: function(type, obj) {
        var tmp, count = 1, defer = jQuery.Deferred(), elements = this, i2 = this.length, resolve = function() {
          if (!--count) {
            defer.resolveWith(elements, [elements]);
          }
        };
        if (typeof type !== "string") {
          obj = type;
          type = void 0;
        }
        type = type || "fx";
        while (i2--) {
          tmp = dataPriv.get(elements[i2], type + "queueHooks");
          if (tmp && tmp.empty) {
            count++;
            tmp.empty.add(resolve);
          }
        }
        resolve();
        return defer.promise(obj);
      }
    });
    var pnum = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source;
    var rcssNum = new RegExp("^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i");
    var cssExpand = ["Top", "Right", "Bottom", "Left"];
    var documentElement = document2.documentElement;
    var isAttached = function(elem) {
      return jQuery.contains(elem.ownerDocument, elem);
    }, composed = { composed: true };
    if (documentElement.getRootNode) {
      isAttached = function(elem) {
        return jQuery.contains(elem.ownerDocument, elem) || elem.getRootNode(composed) === elem.ownerDocument;
      };
    }
    var isHiddenWithinTree = function(elem, el) {
      elem = el || elem;
      return elem.style.display === "none" || elem.style.display === "" && isAttached(elem) && jQuery.css(elem, "display") === "none";
    };
    function adjustCSS(elem, prop, valueParts, tween) {
      var adjusted, scale, maxIterations = 20, currentValue = tween ? function() {
        return tween.cur();
      } : function() {
        return jQuery.css(elem, prop, "");
      }, initial = currentValue(), unit = valueParts && valueParts[3] || (jQuery.cssNumber[prop] ? "" : "px"), initialInUnit = elem.nodeType && (jQuery.cssNumber[prop] || unit !== "px" && +initial) && rcssNum.exec(jQuery.css(elem, prop));
      if (initialInUnit && initialInUnit[3] !== unit) {
        initial = initial / 2;
        unit = unit || initialInUnit[3];
        initialInUnit = +initial || 1;
        while (maxIterations--) {
          jQuery.style(elem, prop, initialInUnit + unit);
          if ((1 - scale) * (1 - (scale = currentValue() / initial || 0.5)) <= 0) {
            maxIterations = 0;
          }
          initialInUnit = initialInUnit / scale;
        }
        initialInUnit = initialInUnit * 2;
        jQuery.style(elem, prop, initialInUnit + unit);
        valueParts = valueParts || [];
      }
      if (valueParts) {
        initialInUnit = +initialInUnit || +initial || 0;
        adjusted = valueParts[1] ? initialInUnit + (valueParts[1] + 1) * valueParts[2] : +valueParts[2];
        if (tween) {
          tween.unit = unit;
          tween.start = initialInUnit;
          tween.end = adjusted;
        }
      }
      return adjusted;
    }
    var defaultDisplayMap = {};
    function getDefaultDisplay(elem) {
      var temp, doc = elem.ownerDocument, nodeName2 = elem.nodeName, display = defaultDisplayMap[nodeName2];
      if (display) {
        return display;
      }
      temp = doc.body.appendChild(doc.createElement(nodeName2));
      display = jQuery.css(temp, "display");
      temp.parentNode.removeChild(temp);
      if (display === "none") {
        display = "block";
      }
      defaultDisplayMap[nodeName2] = display;
      return display;
    }
    function showHide(elements, show) {
      var display, elem, values = [], index = 0, length = elements.length;
      for (; index < length; index++) {
        elem = elements[index];
        if (!elem.style) {
          continue;
        }
        display = elem.style.display;
        if (show) {
          if (display === "none") {
            values[index] = dataPriv.get(elem, "display") || null;
            if (!values[index]) {
              elem.style.display = "";
            }
          }
          if (elem.style.display === "" && isHiddenWithinTree(elem)) {
            values[index] = getDefaultDisplay(elem);
          }
        } else {
          if (display !== "none") {
            values[index] = "none";
            dataPriv.set(elem, "display", display);
          }
        }
      }
      for (index = 0; index < length; index++) {
        if (values[index] != null) {
          elements[index].style.display = values[index];
        }
      }
      return elements;
    }
    jQuery.fn.extend({
      show: function() {
        return showHide(this, true);
      },
      hide: function() {
        return showHide(this);
      },
      toggle: function(state) {
        if (typeof state === "boolean") {
          return state ? this.show() : this.hide();
        }
        return this.each(function() {
          if (isHiddenWithinTree(this)) {
            jQuery(this).show();
          } else {
            jQuery(this).hide();
          }
        });
      }
    });
    var rcheckableType = /^(?:checkbox|radio)$/i;
    var rtagName = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i;
    var rscriptType = /^$|^module$|\/(?:java|ecma)script/i;
    (function() {
      var fragment = document2.createDocumentFragment(), div = fragment.appendChild(document2.createElement("div")), input = document2.createElement("input");
      input.setAttribute("type", "radio");
      input.setAttribute("checked", "checked");
      input.setAttribute("name", "t");
      div.appendChild(input);
      support.checkClone = div.cloneNode(true).cloneNode(true).lastChild.checked;
      div.innerHTML = "<textarea>x</textarea>";
      support.noCloneChecked = !!div.cloneNode(true).lastChild.defaultValue;
      div.innerHTML = "<option></option>";
      support.option = !!div.lastChild;
    })();
    var wrapMap = {
      thead: [1, "<table>", "</table>"],
      col: [2, "<table><colgroup>", "</colgroup></table>"],
      tr: [2, "<table><tbody>", "</tbody></table>"],
      td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
      _default: [0, "", ""]
    };
    wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
    wrapMap.th = wrapMap.td;
    if (!support.option) {
      wrapMap.optgroup = wrapMap.option = [1, "<select multiple='multiple'>", "</select>"];
    }
    function getAll(context, tag) {
      var ret;
      if (typeof context.getElementsByTagName !== "undefined") {
        ret = context.getElementsByTagName(tag || "*");
      } else if (typeof context.querySelectorAll !== "undefined") {
        ret = context.querySelectorAll(tag || "*");
      } else {
        ret = [];
      }
      if (tag === void 0 || tag && nodeName(context, tag)) {
        return jQuery.merge([context], ret);
      }
      return ret;
    }
    function setGlobalEval(elems, refElements) {
      var i2 = 0, l2 = elems.length;
      for (; i2 < l2; i2++) {
        dataPriv.set(
          elems[i2],
          "globalEval",
          !refElements || dataPriv.get(refElements[i2], "globalEval")
        );
      }
    }
    var rhtml = /<|&#?\w+;/;
    function buildFragment(elems, context, scripts, selection, ignored) {
      var elem, tmp, tag, wrap, attached, j2, fragment = context.createDocumentFragment(), nodes = [], i2 = 0, l2 = elems.length;
      for (; i2 < l2; i2++) {
        elem = elems[i2];
        if (elem || elem === 0) {
          if (toType(elem) === "object") {
            jQuery.merge(nodes, elem.nodeType ? [elem] : elem);
          } else if (!rhtml.test(elem)) {
            nodes.push(context.createTextNode(elem));
          } else {
            tmp = tmp || fragment.appendChild(context.createElement("div"));
            tag = (rtagName.exec(elem) || ["", ""])[1].toLowerCase();
            wrap = wrapMap[tag] || wrapMap._default;
            tmp.innerHTML = wrap[1] + jQuery.htmlPrefilter(elem) + wrap[2];
            j2 = wrap[0];
            while (j2--) {
              tmp = tmp.lastChild;
            }
            jQuery.merge(nodes, tmp.childNodes);
            tmp = fragment.firstChild;
            tmp.textContent = "";
          }
        }
      }
      fragment.textContent = "";
      i2 = 0;
      while (elem = nodes[i2++]) {
        if (selection && jQuery.inArray(elem, selection) > -1) {
          if (ignored) {
            ignored.push(elem);
          }
          continue;
        }
        attached = isAttached(elem);
        tmp = getAll(fragment.appendChild(elem), "script");
        if (attached) {
          setGlobalEval(tmp);
        }
        if (scripts) {
          j2 = 0;
          while (elem = tmp[j2++]) {
            if (rscriptType.test(elem.type || "")) {
              scripts.push(elem);
            }
          }
        }
      }
      return fragment;
    }
    var rtypenamespace = /^([^.]*)(?:\.(.+)|)/;
    function returnTrue() {
      return true;
    }
    function returnFalse() {
      return false;
    }
    function on2(elem, types, selector, data, fn2, one) {
      var origFn, type;
      if (typeof types === "object") {
        if (typeof selector !== "string") {
          data = data || selector;
          selector = void 0;
        }
        for (type in types) {
          on2(elem, type, selector, data, types[type], one);
        }
        return elem;
      }
      if (data == null && fn2 == null) {
        fn2 = selector;
        data = selector = void 0;
      } else if (fn2 == null) {
        if (typeof selector === "string") {
          fn2 = data;
          data = void 0;
        } else {
          fn2 = data;
          data = selector;
          selector = void 0;
        }
      }
      if (fn2 === false) {
        fn2 = returnFalse;
      } else if (!fn2) {
        return elem;
      }
      if (one === 1) {
        origFn = fn2;
        fn2 = function(event) {
          jQuery().off(event);
          return origFn.apply(this, arguments);
        };
        fn2.guid = origFn.guid || (origFn.guid = jQuery.guid++);
      }
      return elem.each(function() {
        jQuery.event.add(this, types, fn2, data, selector);
      });
    }
    jQuery.event = {
      global: {},
      add: function(elem, types, handler, data, selector) {
        var handleObjIn, eventHandle, tmp, events, t2, handleObj, special, handlers, type, namespaces, origType, elemData = dataPriv.get(elem);
        if (!acceptData(elem)) {
          return;
        }
        if (handler.handler) {
          handleObjIn = handler;
          handler = handleObjIn.handler;
          selector = handleObjIn.selector;
        }
        if (selector) {
          jQuery.find.matchesSelector(documentElement, selector);
        }
        if (!handler.guid) {
          handler.guid = jQuery.guid++;
        }
        if (!(events = elemData.events)) {
          events = elemData.events = /* @__PURE__ */ Object.create(null);
        }
        if (!(eventHandle = elemData.handle)) {
          eventHandle = elemData.handle = function(e2) {
            return typeof jQuery !== "undefined" && jQuery.event.triggered !== e2.type ? jQuery.event.dispatch.apply(elem, arguments) : void 0;
          };
        }
        types = (types || "").match(rnothtmlwhite) || [""];
        t2 = types.length;
        while (t2--) {
          tmp = rtypenamespace.exec(types[t2]) || [];
          type = origType = tmp[1];
          namespaces = (tmp[2] || "").split(".").sort();
          if (!type) {
            continue;
          }
          special = jQuery.event.special[type] || {};
          type = (selector ? special.delegateType : special.bindType) || type;
          special = jQuery.event.special[type] || {};
          handleObj = jQuery.extend({
            type,
            origType,
            data,
            handler,
            guid: handler.guid,
            selector,
            needsContext: selector && jQuery.expr.match.needsContext.test(selector),
            namespace: namespaces.join(".")
          }, handleObjIn);
          if (!(handlers = events[type])) {
            handlers = events[type] = [];
            handlers.delegateCount = 0;
            if (!special.setup || special.setup.call(elem, data, namespaces, eventHandle) === false) {
              if (elem.addEventListener) {
                elem.addEventListener(type, eventHandle);
              }
            }
          }
          if (special.add) {
            special.add.call(elem, handleObj);
            if (!handleObj.handler.guid) {
              handleObj.handler.guid = handler.guid;
            }
          }
          if (selector) {
            handlers.splice(handlers.delegateCount++, 0, handleObj);
          } else {
            handlers.push(handleObj);
          }
          jQuery.event.global[type] = true;
        }
      },
      remove: function(elem, types, handler, selector, mappedTypes) {
        var j2, origCount, tmp, events, t2, handleObj, special, handlers, type, namespaces, origType, elemData = dataPriv.hasData(elem) && dataPriv.get(elem);
        if (!elemData || !(events = elemData.events)) {
          return;
        }
        types = (types || "").match(rnothtmlwhite) || [""];
        t2 = types.length;
        while (t2--) {
          tmp = rtypenamespace.exec(types[t2]) || [];
          type = origType = tmp[1];
          namespaces = (tmp[2] || "").split(".").sort();
          if (!type) {
            for (type in events) {
              jQuery.event.remove(elem, type + types[t2], handler, selector, true);
            }
            continue;
          }
          special = jQuery.event.special[type] || {};
          type = (selector ? special.delegateType : special.bindType) || type;
          handlers = events[type] || [];
          tmp = tmp[2] && new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)");
          origCount = j2 = handlers.length;
          while (j2--) {
            handleObj = handlers[j2];
            if ((mappedTypes || origType === handleObj.origType) && (!handler || handler.guid === handleObj.guid) && (!tmp || tmp.test(handleObj.namespace)) && (!selector || selector === handleObj.selector || selector === "**" && handleObj.selector)) {
              handlers.splice(j2, 1);
              if (handleObj.selector) {
                handlers.delegateCount--;
              }
              if (special.remove) {
                special.remove.call(elem, handleObj);
              }
            }
          }
          if (origCount && !handlers.length) {
            if (!special.teardown || special.teardown.call(elem, namespaces, elemData.handle) === false) {
              jQuery.removeEvent(elem, type, elemData.handle);
            }
            delete events[type];
          }
        }
        if (jQuery.isEmptyObject(events)) {
          dataPriv.remove(elem, "handle events");
        }
      },
      dispatch: function(nativeEvent) {
        var i2, j2, ret, matched, handleObj, handlerQueue, args = new Array(arguments.length), event = jQuery.event.fix(nativeEvent), handlers = (dataPriv.get(this, "events") || /* @__PURE__ */ Object.create(null))[event.type] || [], special = jQuery.event.special[event.type] || {};
        args[0] = event;
        for (i2 = 1; i2 < arguments.length; i2++) {
          args[i2] = arguments[i2];
        }
        event.delegateTarget = this;
        if (special.preDispatch && special.preDispatch.call(this, event) === false) {
          return;
        }
        handlerQueue = jQuery.event.handlers.call(this, event, handlers);
        i2 = 0;
        while ((matched = handlerQueue[i2++]) && !event.isPropagationStopped()) {
          event.currentTarget = matched.elem;
          j2 = 0;
          while ((handleObj = matched.handlers[j2++]) && !event.isImmediatePropagationStopped()) {
            if (!event.rnamespace || handleObj.namespace === false || event.rnamespace.test(handleObj.namespace)) {
              event.handleObj = handleObj;
              event.data = handleObj.data;
              ret = ((jQuery.event.special[handleObj.origType] || {}).handle || handleObj.handler).apply(matched.elem, args);
              if (ret !== void 0) {
                if ((event.result = ret) === false) {
                  event.preventDefault();
                  event.stopPropagation();
                }
              }
            }
          }
        }
        if (special.postDispatch) {
          special.postDispatch.call(this, event);
        }
        return event.result;
      },
      handlers: function(event, handlers) {
        var i2, handleObj, sel, matchedHandlers, matchedSelectors, handlerQueue = [], delegateCount = handlers.delegateCount, cur = event.target;
        if (delegateCount && cur.nodeType && !(event.type === "click" && event.button >= 1)) {
          for (; cur !== this; cur = cur.parentNode || this) {
            if (cur.nodeType === 1 && !(event.type === "click" && cur.disabled === true)) {
              matchedHandlers = [];
              matchedSelectors = {};
              for (i2 = 0; i2 < delegateCount; i2++) {
                handleObj = handlers[i2];
                sel = handleObj.selector + " ";
                if (matchedSelectors[sel] === void 0) {
                  matchedSelectors[sel] = handleObj.needsContext ? jQuery(sel, this).index(cur) > -1 : jQuery.find(sel, this, null, [cur]).length;
                }
                if (matchedSelectors[sel]) {
                  matchedHandlers.push(handleObj);
                }
              }
              if (matchedHandlers.length) {
                handlerQueue.push({ elem: cur, handlers: matchedHandlers });
              }
            }
          }
        }
        cur = this;
        if (delegateCount < handlers.length) {
          handlerQueue.push({ elem: cur, handlers: handlers.slice(delegateCount) });
        }
        return handlerQueue;
      },
      addProp: function(name, hook) {
        Object.defineProperty(jQuery.Event.prototype, name, {
          enumerable: true,
          configurable: true,
          get: isFunction2(hook) ? function() {
            if (this.originalEvent) {
              return hook(this.originalEvent);
            }
          } : function() {
            if (this.originalEvent) {
              return this.originalEvent[name];
            }
          },
          set: function(value) {
            Object.defineProperty(this, name, {
              enumerable: true,
              configurable: true,
              writable: true,
              value
            });
          }
        });
      },
      fix: function(originalEvent) {
        return originalEvent[jQuery.expando] ? originalEvent : new jQuery.Event(originalEvent);
      },
      special: {
        load: {
          noBubble: true
        },
        click: {
          setup: function(data) {
            var el = this || data;
            if (rcheckableType.test(el.type) && el.click && nodeName(el, "input")) {
              leverageNative(el, "click", true);
            }
            return false;
          },
          trigger: function(data) {
            var el = this || data;
            if (rcheckableType.test(el.type) && el.click && nodeName(el, "input")) {
              leverageNative(el, "click");
            }
            return true;
          },
          _default: function(event) {
            var target = event.target;
            return rcheckableType.test(target.type) && target.click && nodeName(target, "input") && dataPriv.get(target, "click") || nodeName(target, "a");
          }
        },
        beforeunload: {
          postDispatch: function(event) {
            if (event.result !== void 0 && event.originalEvent) {
              event.originalEvent.returnValue = event.result;
            }
          }
        }
      }
    };
    function leverageNative(el, type, isSetup) {
      if (!isSetup) {
        if (dataPriv.get(el, type) === void 0) {
          jQuery.event.add(el, type, returnTrue);
        }
        return;
      }
      dataPriv.set(el, type, false);
      jQuery.event.add(el, type, {
        namespace: false,
        handler: function(event) {
          var result, saved = dataPriv.get(this, type);
          if (event.isTrigger & 1 && this[type]) {
            if (!saved) {
              saved = slice.call(arguments);
              dataPriv.set(this, type, saved);
              this[type]();
              result = dataPriv.get(this, type);
              dataPriv.set(this, type, false);
              if (saved !== result) {
                event.stopImmediatePropagation();
                event.preventDefault();
                return result;
              }
            } else if ((jQuery.event.special[type] || {}).delegateType) {
              event.stopPropagation();
            }
          } else if (saved) {
            dataPriv.set(this, type, jQuery.event.trigger(
              saved[0],
              saved.slice(1),
              this
            ));
            event.stopPropagation();
            event.isImmediatePropagationStopped = returnTrue;
          }
        }
      });
    }
    jQuery.removeEvent = function(elem, type, handle) {
      if (elem.removeEventListener) {
        elem.removeEventListener(type, handle);
      }
    };
    jQuery.Event = function(src, props) {
      if (!(this instanceof jQuery.Event)) {
        return new jQuery.Event(src, props);
      }
      if (src && src.type) {
        this.originalEvent = src;
        this.type = src.type;
        this.isDefaultPrevented = src.defaultPrevented || src.defaultPrevented === void 0 && src.returnValue === false ? returnTrue : returnFalse;
        this.target = src.target && src.target.nodeType === 3 ? src.target.parentNode : src.target;
        this.currentTarget = src.currentTarget;
        this.relatedTarget = src.relatedTarget;
      } else {
        this.type = src;
      }
      if (props) {
        jQuery.extend(this, props);
      }
      this.timeStamp = src && src.timeStamp || Date.now();
      this[jQuery.expando] = true;
    };
    jQuery.Event.prototype = {
      constructor: jQuery.Event,
      isDefaultPrevented: returnFalse,
      isPropagationStopped: returnFalse,
      isImmediatePropagationStopped: returnFalse,
      isSimulated: false,
      preventDefault: function() {
        var e2 = this.originalEvent;
        this.isDefaultPrevented = returnTrue;
        if (e2 && !this.isSimulated) {
          e2.preventDefault();
        }
      },
      stopPropagation: function() {
        var e2 = this.originalEvent;
        this.isPropagationStopped = returnTrue;
        if (e2 && !this.isSimulated) {
          e2.stopPropagation();
        }
      },
      stopImmediatePropagation: function() {
        var e2 = this.originalEvent;
        this.isImmediatePropagationStopped = returnTrue;
        if (e2 && !this.isSimulated) {
          e2.stopImmediatePropagation();
        }
        this.stopPropagation();
      }
    };
    jQuery.each({
      altKey: true,
      bubbles: true,
      cancelable: true,
      changedTouches: true,
      ctrlKey: true,
      detail: true,
      eventPhase: true,
      metaKey: true,
      pageX: true,
      pageY: true,
      shiftKey: true,
      view: true,
      "char": true,
      code: true,
      charCode: true,
      key: true,
      keyCode: true,
      button: true,
      buttons: true,
      clientX: true,
      clientY: true,
      offsetX: true,
      offsetY: true,
      pointerId: true,
      pointerType: true,
      screenX: true,
      screenY: true,
      targetTouches: true,
      toElement: true,
      touches: true,
      which: true
    }, jQuery.event.addProp);
    jQuery.each({ focus: "focusin", blur: "focusout" }, function(type, delegateType) {
      function focusMappedHandler(nativeEvent) {
        if (document2.documentMode) {
          var handle = dataPriv.get(this, "handle"), event = jQuery.event.fix(nativeEvent);
          event.type = nativeEvent.type === "focusin" ? "focus" : "blur";
          event.isSimulated = true;
          handle(nativeEvent);
          if (event.target === event.currentTarget) {
            handle(event);
          }
        } else {
          jQuery.event.simulate(
            delegateType,
            nativeEvent.target,
            jQuery.event.fix(nativeEvent)
          );
        }
      }
      jQuery.event.special[type] = {
        setup: function() {
          var attaches;
          leverageNative(this, type, true);
          if (document2.documentMode) {
            attaches = dataPriv.get(this, delegateType);
            if (!attaches) {
              this.addEventListener(delegateType, focusMappedHandler);
            }
            dataPriv.set(this, delegateType, (attaches || 0) + 1);
          } else {
            return false;
          }
        },
        trigger: function() {
          leverageNative(this, type);
          return true;
        },
        teardown: function() {
          var attaches;
          if (document2.documentMode) {
            attaches = dataPriv.get(this, delegateType) - 1;
            if (!attaches) {
              this.removeEventListener(delegateType, focusMappedHandler);
              dataPriv.remove(this, delegateType);
            } else {
              dataPriv.set(this, delegateType, attaches);
            }
          } else {
            return false;
          }
        },
        _default: function(event) {
          return dataPriv.get(event.target, type);
        },
        delegateType
      };
      jQuery.event.special[delegateType] = {
        setup: function() {
          var doc = this.ownerDocument || this.document || this, dataHolder = document2.documentMode ? this : doc, attaches = dataPriv.get(dataHolder, delegateType);
          if (!attaches) {
            if (document2.documentMode) {
              this.addEventListener(delegateType, focusMappedHandler);
            } else {
              doc.addEventListener(type, focusMappedHandler, true);
            }
          }
          dataPriv.set(dataHolder, delegateType, (attaches || 0) + 1);
        },
        teardown: function() {
          var doc = this.ownerDocument || this.document || this, dataHolder = document2.documentMode ? this : doc, attaches = dataPriv.get(dataHolder, delegateType) - 1;
          if (!attaches) {
            if (document2.documentMode) {
              this.removeEventListener(delegateType, focusMappedHandler);
            } else {
              doc.removeEventListener(type, focusMappedHandler, true);
            }
            dataPriv.remove(dataHolder, delegateType);
          } else {
            dataPriv.set(dataHolder, delegateType, attaches);
          }
        }
      };
    });
    jQuery.each({
      mouseenter: "mouseover",
      mouseleave: "mouseout",
      pointerenter: "pointerover",
      pointerleave: "pointerout"
    }, function(orig, fix) {
      jQuery.event.special[orig] = {
        delegateType: fix,
        bindType: fix,
        handle: function(event) {
          var ret, target = this, related = event.relatedTarget, handleObj = event.handleObj;
          if (!related || related !== target && !jQuery.contains(target, related)) {
            event.type = handleObj.origType;
            ret = handleObj.handler.apply(this, arguments);
            event.type = fix;
          }
          return ret;
        }
      };
    });
    jQuery.fn.extend({
      on: function(types, selector, data, fn2) {
        return on2(this, types, selector, data, fn2);
      },
      one: function(types, selector, data, fn2) {
        return on2(this, types, selector, data, fn2, 1);
      },
      off: function(types, selector, fn2) {
        var handleObj, type;
        if (types && types.preventDefault && types.handleObj) {
          handleObj = types.handleObj;
          jQuery(types.delegateTarget).off(
            handleObj.namespace ? handleObj.origType + "." + handleObj.namespace : handleObj.origType,
            handleObj.selector,
            handleObj.handler
          );
          return this;
        }
        if (typeof types === "object") {
          for (type in types) {
            this.off(type, selector, types[type]);
          }
          return this;
        }
        if (selector === false || typeof selector === "function") {
          fn2 = selector;
          selector = void 0;
        }
        if (fn2 === false) {
          fn2 = returnFalse;
        }
        return this.each(function() {
          jQuery.event.remove(this, types, fn2, selector);
        });
      }
    });
    var rnoInnerhtml = /<script|<style|<link/i, rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i, rcleanScript = /^\s*<!\[CDATA\[|\]\]>\s*$/g;
    function manipulationTarget(elem, content) {
      if (nodeName(elem, "table") && nodeName(content.nodeType !== 11 ? content : content.firstChild, "tr")) {
        return jQuery(elem).children("tbody")[0] || elem;
      }
      return elem;
    }
    function disableScript(elem) {
      elem.type = (elem.getAttribute("type") !== null) + "/" + elem.type;
      return elem;
    }
    function restoreScript(elem) {
      if ((elem.type || "").slice(0, 5) === "true/") {
        elem.type = elem.type.slice(5);
      } else {
        elem.removeAttribute("type");
      }
      return elem;
    }
    function cloneCopyEvent(src, dest) {
      var i2, l2, type, pdataOld, udataOld, udataCur, events;
      if (dest.nodeType !== 1) {
        return;
      }
      if (dataPriv.hasData(src)) {
        pdataOld = dataPriv.get(src);
        events = pdataOld.events;
        if (events) {
          dataPriv.remove(dest, "handle events");
          for (type in events) {
            for (i2 = 0, l2 = events[type].length; i2 < l2; i2++) {
              jQuery.event.add(dest, type, events[type][i2]);
            }
          }
        }
      }
      if (dataUser.hasData(src)) {
        udataOld = dataUser.access(src);
        udataCur = jQuery.extend({}, udataOld);
        dataUser.set(dest, udataCur);
      }
    }
    function fixInput(src, dest) {
      var nodeName2 = dest.nodeName.toLowerCase();
      if (nodeName2 === "input" && rcheckableType.test(src.type)) {
        dest.checked = src.checked;
      } else if (nodeName2 === "input" || nodeName2 === "textarea") {
        dest.defaultValue = src.defaultValue;
      }
    }
    function domManip(collection, args, callback, ignored) {
      args = flat(args);
      var fragment, first2, scripts, hasScripts, node, doc, i2 = 0, l2 = collection.length, iNoClone = l2 - 1, value = args[0], valueIsFunction = isFunction2(value);
      if (valueIsFunction || l2 > 1 && typeof value === "string" && !support.checkClone && rchecked.test(value)) {
        return collection.each(function(index) {
          var self2 = collection.eq(index);
          if (valueIsFunction) {
            args[0] = value.call(this, index, self2.html());
          }
          domManip(self2, args, callback, ignored);
        });
      }
      if (l2) {
        fragment = buildFragment(args, collection[0].ownerDocument, false, collection, ignored);
        first2 = fragment.firstChild;
        if (fragment.childNodes.length === 1) {
          fragment = first2;
        }
        if (first2 || ignored) {
          scripts = jQuery.map(getAll(fragment, "script"), disableScript);
          hasScripts = scripts.length;
          for (; i2 < l2; i2++) {
            node = fragment;
            if (i2 !== iNoClone) {
              node = jQuery.clone(node, true, true);
              if (hasScripts) {
                jQuery.merge(scripts, getAll(node, "script"));
              }
            }
            callback.call(collection[i2], node, i2);
          }
          if (hasScripts) {
            doc = scripts[scripts.length - 1].ownerDocument;
            jQuery.map(scripts, restoreScript);
            for (i2 = 0; i2 < hasScripts; i2++) {
              node = scripts[i2];
              if (rscriptType.test(node.type || "") && !dataPriv.access(node, "globalEval") && jQuery.contains(doc, node)) {
                if (node.src && (node.type || "").toLowerCase() !== "module") {
                  if (jQuery._evalUrl && !node.noModule) {
                    jQuery._evalUrl(node.src, {
                      nonce: node.nonce || node.getAttribute("nonce")
                    }, doc);
                  }
                } else {
                  DOMEval(node.textContent.replace(rcleanScript, ""), node, doc);
                }
              }
            }
          }
        }
      }
      return collection;
    }
    function remove(elem, selector, keepData) {
      var node, nodes = selector ? jQuery.filter(selector, elem) : elem, i2 = 0;
      for (; (node = nodes[i2]) != null; i2++) {
        if (!keepData && node.nodeType === 1) {
          jQuery.cleanData(getAll(node));
        }
        if (node.parentNode) {
          if (keepData && isAttached(node)) {
            setGlobalEval(getAll(node, "script"));
          }
          node.parentNode.removeChild(node);
        }
      }
      return elem;
    }
    jQuery.extend({
      htmlPrefilter: function(html2) {
        return html2;
      },
      clone: function(elem, dataAndEvents, deepDataAndEvents) {
        var i2, l2, srcElements, destElements, clone2 = elem.cloneNode(true), inPage = isAttached(elem);
        if (!support.noCloneChecked && (elem.nodeType === 1 || elem.nodeType === 11) && !jQuery.isXMLDoc(elem)) {
          destElements = getAll(clone2);
          srcElements = getAll(elem);
          for (i2 = 0, l2 = srcElements.length; i2 < l2; i2++) {
            fixInput(srcElements[i2], destElements[i2]);
          }
        }
        if (dataAndEvents) {
          if (deepDataAndEvents) {
            srcElements = srcElements || getAll(elem);
            destElements = destElements || getAll(clone2);
            for (i2 = 0, l2 = srcElements.length; i2 < l2; i2++) {
              cloneCopyEvent(srcElements[i2], destElements[i2]);
            }
          } else {
            cloneCopyEvent(elem, clone2);
          }
        }
        destElements = getAll(clone2, "script");
        if (destElements.length > 0) {
          setGlobalEval(destElements, !inPage && getAll(elem, "script"));
        }
        return clone2;
      },
      cleanData: function(elems) {
        var data, elem, type, special = jQuery.event.special, i2 = 0;
        for (; (elem = elems[i2]) !== void 0; i2++) {
          if (acceptData(elem)) {
            if (data = elem[dataPriv.expando]) {
              if (data.events) {
                for (type in data.events) {
                  if (special[type]) {
                    jQuery.event.remove(elem, type);
                  } else {
                    jQuery.removeEvent(elem, type, data.handle);
                  }
                }
              }
              elem[dataPriv.expando] = void 0;
            }
            if (elem[dataUser.expando]) {
              elem[dataUser.expando] = void 0;
            }
          }
        }
      }
    });
    jQuery.fn.extend({
      detach: function(selector) {
        return remove(this, selector, true);
      },
      remove: function(selector) {
        return remove(this, selector);
      },
      text: function(value) {
        return access(this, function(value2) {
          return value2 === void 0 ? jQuery.text(this) : this.empty().each(function() {
            if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
              this.textContent = value2;
            }
          });
        }, null, value, arguments.length);
      },
      append: function() {
        return domManip(this, arguments, function(elem) {
          if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
            var target = manipulationTarget(this, elem);
            target.appendChild(elem);
          }
        });
      },
      prepend: function() {
        return domManip(this, arguments, function(elem) {
          if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
            var target = manipulationTarget(this, elem);
            target.insertBefore(elem, target.firstChild);
          }
        });
      },
      before: function() {
        return domManip(this, arguments, function(elem) {
          if (this.parentNode) {
            this.parentNode.insertBefore(elem, this);
          }
        });
      },
      after: function() {
        return domManip(this, arguments, function(elem) {
          if (this.parentNode) {
            this.parentNode.insertBefore(elem, this.nextSibling);
          }
        });
      },
      empty: function() {
        var elem, i2 = 0;
        for (; (elem = this[i2]) != null; i2++) {
          if (elem.nodeType === 1) {
            jQuery.cleanData(getAll(elem, false));
            elem.textContent = "";
          }
        }
        return this;
      },
      clone: function(dataAndEvents, deepDataAndEvents) {
        dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
        deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;
        return this.map(function() {
          return jQuery.clone(this, dataAndEvents, deepDataAndEvents);
        });
      },
      html: function(value) {
        return access(this, function(value2) {
          var elem = this[0] || {}, i2 = 0, l2 = this.length;
          if (value2 === void 0 && elem.nodeType === 1) {
            return elem.innerHTML;
          }
          if (typeof value2 === "string" && !rnoInnerhtml.test(value2) && !wrapMap[(rtagName.exec(value2) || ["", ""])[1].toLowerCase()]) {
            value2 = jQuery.htmlPrefilter(value2);
            try {
              for (; i2 < l2; i2++) {
                elem = this[i2] || {};
                if (elem.nodeType === 1) {
                  jQuery.cleanData(getAll(elem, false));
                  elem.innerHTML = value2;
                }
              }
              elem = 0;
            } catch (e2) {
            }
          }
          if (elem) {
            this.empty().append(value2);
          }
        }, null, value, arguments.length);
      },
      replaceWith: function() {
        var ignored = [];
        return domManip(this, arguments, function(elem) {
          var parent = this.parentNode;
          if (jQuery.inArray(this, ignored) < 0) {
            jQuery.cleanData(getAll(this));
            if (parent) {
              parent.replaceChild(elem, this);
            }
          }
        }, ignored);
      }
    });
    jQuery.each({
      appendTo: "append",
      prependTo: "prepend",
      insertBefore: "before",
      insertAfter: "after",
      replaceAll: "replaceWith"
    }, function(name, original) {
      jQuery.fn[name] = function(selector) {
        var elems, ret = [], insert = jQuery(selector), last2 = insert.length - 1, i2 = 0;
        for (; i2 <= last2; i2++) {
          elems = i2 === last2 ? this : this.clone(true);
          jQuery(insert[i2])[original](elems);
          push.apply(ret, elems.get());
        }
        return this.pushStack(ret);
      };
    });
    var rnumnonpx = new RegExp("^(" + pnum + ")(?!px)[a-z%]+$", "i");
    var rcustomProp = /^--/;
    var getStyles2 = function(elem) {
      var view = elem.ownerDocument.defaultView;
      if (!view || !view.opener) {
        view = window2;
      }
      return view.getComputedStyle(elem);
    };
    var swap = function(elem, options, callback) {
      var ret, name, old = {};
      for (name in options) {
        old[name] = elem.style[name];
        elem.style[name] = options[name];
      }
      ret = callback.call(elem);
      for (name in options) {
        elem.style[name] = old[name];
      }
      return ret;
    };
    var rboxStyle = new RegExp(cssExpand.join("|"), "i");
    (function() {
      function computeStyleTests() {
        if (!div) {
          return;
        }
        container.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0";
        div.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%";
        documentElement.appendChild(container).appendChild(div);
        var divStyle = window2.getComputedStyle(div);
        pixelPositionVal = divStyle.top !== "1%";
        reliableMarginLeftVal = roundPixelMeasures(divStyle.marginLeft) === 12;
        div.style.right = "60%";
        pixelBoxStylesVal = roundPixelMeasures(divStyle.right) === 36;
        boxSizingReliableVal = roundPixelMeasures(divStyle.width) === 36;
        div.style.position = "absolute";
        scrollboxSizeVal = roundPixelMeasures(div.offsetWidth / 3) === 12;
        documentElement.removeChild(container);
        div = null;
      }
      function roundPixelMeasures(measure) {
        return Math.round(parseFloat(measure));
      }
      var pixelPositionVal, boxSizingReliableVal, scrollboxSizeVal, pixelBoxStylesVal, reliableTrDimensionsVal, reliableMarginLeftVal, container = document2.createElement("div"), div = document2.createElement("div");
      if (!div.style) {
        return;
      }
      div.style.backgroundClip = "content-box";
      div.cloneNode(true).style.backgroundClip = "";
      support.clearCloneStyle = div.style.backgroundClip === "content-box";
      jQuery.extend(support, {
        boxSizingReliable: function() {
          computeStyleTests();
          return boxSizingReliableVal;
        },
        pixelBoxStyles: function() {
          computeStyleTests();
          return pixelBoxStylesVal;
        },
        pixelPosition: function() {
          computeStyleTests();
          return pixelPositionVal;
        },
        reliableMarginLeft: function() {
          computeStyleTests();
          return reliableMarginLeftVal;
        },
        scrollboxSize: function() {
          computeStyleTests();
          return scrollboxSizeVal;
        },
        reliableTrDimensions: function() {
          var table, tr, trChild, trStyle;
          if (reliableTrDimensionsVal == null) {
            table = document2.createElement("table");
            tr = document2.createElement("tr");
            trChild = document2.createElement("div");
            table.style.cssText = "position:absolute;left:-11111px;border-collapse:separate";
            tr.style.cssText = "border:1px solid";
            tr.style.height = "1px";
            trChild.style.height = "9px";
            trChild.style.display = "block";
            documentElement.appendChild(table).appendChild(tr).appendChild(trChild);
            trStyle = window2.getComputedStyle(tr);
            reliableTrDimensionsVal = parseInt(trStyle.height, 10) + parseInt(trStyle.borderTopWidth, 10) + parseInt(trStyle.borderBottomWidth, 10) === tr.offsetHeight;
            documentElement.removeChild(table);
          }
          return reliableTrDimensionsVal;
        }
      });
    })();
    function curCSS(elem, name, computed) {
      var width, minWidth, maxWidth, ret, isCustomProp = rcustomProp.test(name), style = elem.style;
      computed = computed || getStyles2(elem);
      if (computed) {
        ret = computed.getPropertyValue(name) || computed[name];
        if (isCustomProp && ret) {
          ret = ret.replace(rtrimCSS, "$1") || void 0;
        }
        if (ret === "" && !isAttached(elem)) {
          ret = jQuery.style(elem, name);
        }
        if (!support.pixelBoxStyles() && rnumnonpx.test(ret) && rboxStyle.test(name)) {
          width = style.width;
          minWidth = style.minWidth;
          maxWidth = style.maxWidth;
          style.minWidth = style.maxWidth = style.width = ret;
          ret = computed.width;
          style.width = width;
          style.minWidth = minWidth;
          style.maxWidth = maxWidth;
        }
      }
      return ret !== void 0 ? ret + "" : ret;
    }
    function addGetHookIf(conditionFn, hookFn) {
      return {
        get: function() {
          if (conditionFn()) {
            delete this.get;
            return;
          }
          return (this.get = hookFn).apply(this, arguments);
        }
      };
    }
    var cssPrefixes = ["Webkit", "Moz", "ms"], emptyStyle = document2.createElement("div").style, vendorProps = {};
    function vendorPropName(name) {
      var capName = name[0].toUpperCase() + name.slice(1), i2 = cssPrefixes.length;
      while (i2--) {
        name = cssPrefixes[i2] + capName;
        if (name in emptyStyle) {
          return name;
        }
      }
    }
    function finalPropName(name) {
      var final = jQuery.cssProps[name] || vendorProps[name];
      if (final) {
        return final;
      }
      if (name in emptyStyle) {
        return name;
      }
      return vendorProps[name] = vendorPropName(name) || name;
    }
    var rdisplayswap = /^(none|table(?!-c[ea]).+)/, cssShow = { position: "absolute", visibility: "hidden", display: "block" }, cssNormalTransform = {
      letterSpacing: "0",
      fontWeight: "400"
    };
    function setPositiveNumber(_elem, value, subtract) {
      var matches = rcssNum.exec(value);
      return matches ? Math.max(0, matches[2] - (subtract || 0)) + (matches[3] || "px") : value;
    }
    function boxModelAdjustment(elem, dimension, box, isBorderBox, styles, computedVal) {
      var i2 = dimension === "width" ? 1 : 0, extra = 0, delta = 0, marginDelta = 0;
      if (box === (isBorderBox ? "border" : "content")) {
        return 0;
      }
      for (; i2 < 4; i2 += 2) {
        if (box === "margin") {
          marginDelta += jQuery.css(elem, box + cssExpand[i2], true, styles);
        }
        if (!isBorderBox) {
          delta += jQuery.css(elem, "padding" + cssExpand[i2], true, styles);
          if (box !== "padding") {
            delta += jQuery.css(elem, "border" + cssExpand[i2] + "Width", true, styles);
          } else {
            extra += jQuery.css(elem, "border" + cssExpand[i2] + "Width", true, styles);
          }
        } else {
          if (box === "content") {
            delta -= jQuery.css(elem, "padding" + cssExpand[i2], true, styles);
          }
          if (box !== "margin") {
            delta -= jQuery.css(elem, "border" + cssExpand[i2] + "Width", true, styles);
          }
        }
      }
      if (!isBorderBox && computedVal >= 0) {
        delta += Math.max(0, Math.ceil(
          elem["offset" + dimension[0].toUpperCase() + dimension.slice(1)] - computedVal - delta - extra - 0.5
        )) || 0;
      }
      return delta + marginDelta;
    }
    function getWidthOrHeight(elem, dimension, extra) {
      var styles = getStyles2(elem), boxSizingNeeded = !support.boxSizingReliable() || extra, isBorderBox = boxSizingNeeded && jQuery.css(elem, "boxSizing", false, styles) === "border-box", valueIsBorderBox = isBorderBox, val = curCSS(elem, dimension, styles), offsetProp = "offset" + dimension[0].toUpperCase() + dimension.slice(1);
      if (rnumnonpx.test(val)) {
        if (!extra) {
          return val;
        }
        val = "auto";
      }
      if ((!support.boxSizingReliable() && isBorderBox || !support.reliableTrDimensions() && nodeName(elem, "tr") || val === "auto" || !parseFloat(val) && jQuery.css(elem, "display", false, styles) === "inline") && elem.getClientRects().length) {
        isBorderBox = jQuery.css(elem, "boxSizing", false, styles) === "border-box";
        valueIsBorderBox = offsetProp in elem;
        if (valueIsBorderBox) {
          val = elem[offsetProp];
        }
      }
      val = parseFloat(val) || 0;
      return val + boxModelAdjustment(
        elem,
        dimension,
        extra || (isBorderBox ? "border" : "content"),
        valueIsBorderBox,
        styles,
        val
      ) + "px";
    }
    jQuery.extend({
      cssHooks: {
        opacity: {
          get: function(elem, computed) {
            if (computed) {
              var ret = curCSS(elem, "opacity");
              return ret === "" ? "1" : ret;
            }
          }
        }
      },
      cssNumber: {
        animationIterationCount: true,
        aspectRatio: true,
        borderImageSlice: true,
        columnCount: true,
        flexGrow: true,
        flexShrink: true,
        fontWeight: true,
        gridArea: true,
        gridColumn: true,
        gridColumnEnd: true,
        gridColumnStart: true,
        gridRow: true,
        gridRowEnd: true,
        gridRowStart: true,
        lineHeight: true,
        opacity: true,
        order: true,
        orphans: true,
        scale: true,
        widows: true,
        zIndex: true,
        zoom: true,
        fillOpacity: true,
        floodOpacity: true,
        stopOpacity: true,
        strokeMiterlimit: true,
        strokeOpacity: true
      },
      cssProps: {},
      style: function(elem, name, value, extra) {
        if (!elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style) {
          return;
        }
        var ret, type, hooks, origName = camelCase(name), isCustomProp = rcustomProp.test(name), style = elem.style;
        if (!isCustomProp) {
          name = finalPropName(origName);
        }
        hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName];
        if (value !== void 0) {
          type = typeof value;
          if (type === "string" && (ret = rcssNum.exec(value)) && ret[1]) {
            value = adjustCSS(elem, name, ret);
            type = "number";
          }
          if (value == null || value !== value) {
            return;
          }
          if (type === "number" && !isCustomProp) {
            value += ret && ret[3] || (jQuery.cssNumber[origName] ? "" : "px");
          }
          if (!support.clearCloneStyle && value === "" && name.indexOf("background") === 0) {
            style[name] = "inherit";
          }
          if (!hooks || !("set" in hooks) || (value = hooks.set(elem, value, extra)) !== void 0) {
            if (isCustomProp) {
              style.setProperty(name, value);
            } else {
              style[name] = value;
            }
          }
        } else {
          if (hooks && "get" in hooks && (ret = hooks.get(elem, false, extra)) !== void 0) {
            return ret;
          }
          return style[name];
        }
      },
      css: function(elem, name, extra, styles) {
        var val, num, hooks, origName = camelCase(name), isCustomProp = rcustomProp.test(name);
        if (!isCustomProp) {
          name = finalPropName(origName);
        }
        hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName];
        if (hooks && "get" in hooks) {
          val = hooks.get(elem, true, extra);
        }
        if (val === void 0) {
          val = curCSS(elem, name, styles);
        }
        if (val === "normal" && name in cssNormalTransform) {
          val = cssNormalTransform[name];
        }
        if (extra === "" || extra) {
          num = parseFloat(val);
          return extra === true || isFinite(num) ? num || 0 : val;
        }
        return val;
      }
    });
    jQuery.each(["height", "width"], function(_i, dimension) {
      jQuery.cssHooks[dimension] = {
        get: function(elem, computed, extra) {
          if (computed) {
            return rdisplayswap.test(jQuery.css(elem, "display")) && (!elem.getClientRects().length || !elem.getBoundingClientRect().width) ? swap(elem, cssShow, function() {
              return getWidthOrHeight(elem, dimension, extra);
            }) : getWidthOrHeight(elem, dimension, extra);
          }
        },
        set: function(elem, value, extra) {
          var matches, styles = getStyles2(elem), scrollboxSizeBuggy = !support.scrollboxSize() && styles.position === "absolute", boxSizingNeeded = scrollboxSizeBuggy || extra, isBorderBox = boxSizingNeeded && jQuery.css(elem, "boxSizing", false, styles) === "border-box", subtract = extra ? boxModelAdjustment(
            elem,
            dimension,
            extra,
            isBorderBox,
            styles
          ) : 0;
          if (isBorderBox && scrollboxSizeBuggy) {
            subtract -= Math.ceil(
              elem["offset" + dimension[0].toUpperCase() + dimension.slice(1)] - parseFloat(styles[dimension]) - boxModelAdjustment(elem, dimension, "border", false, styles) - 0.5
            );
          }
          if (subtract && (matches = rcssNum.exec(value)) && (matches[3] || "px") !== "px") {
            elem.style[dimension] = value;
            value = jQuery.css(elem, dimension);
          }
          return setPositiveNumber(elem, value, subtract);
        }
      };
    });
    jQuery.cssHooks.marginLeft = addGetHookIf(
      support.reliableMarginLeft,
      function(elem, computed) {
        if (computed) {
          return (parseFloat(curCSS(elem, "marginLeft")) || elem.getBoundingClientRect().left - swap(elem, { marginLeft: 0 }, function() {
            return elem.getBoundingClientRect().left;
          })) + "px";
        }
      }
    );
    jQuery.each({
      margin: "",
      padding: "",
      border: "Width"
    }, function(prefix, suffix) {
      jQuery.cssHooks[prefix + suffix] = {
        expand: function(value) {
          var i2 = 0, expanded = {}, parts = typeof value === "string" ? value.split(" ") : [value];
          for (; i2 < 4; i2++) {
            expanded[prefix + cssExpand[i2] + suffix] = parts[i2] || parts[i2 - 2] || parts[0];
          }
          return expanded;
        }
      };
      if (prefix !== "margin") {
        jQuery.cssHooks[prefix + suffix].set = setPositiveNumber;
      }
    });
    jQuery.fn.extend({
      css: function(name, value) {
        return access(this, function(elem, name2, value2) {
          var styles, len, map = {}, i2 = 0;
          if (Array.isArray(name2)) {
            styles = getStyles2(elem);
            len = name2.length;
            for (; i2 < len; i2++) {
              map[name2[i2]] = jQuery.css(elem, name2[i2], false, styles);
            }
            return map;
          }
          return value2 !== void 0 ? jQuery.style(elem, name2, value2) : jQuery.css(elem, name2);
        }, name, value, arguments.length > 1);
      }
    });
    function Tween(elem, options, prop, end, easing) {
      return new Tween.prototype.init(elem, options, prop, end, easing);
    }
    jQuery.Tween = Tween;
    Tween.prototype = {
      constructor: Tween,
      init: function(elem, options, prop, end, easing, unit) {
        this.elem = elem;
        this.prop = prop;
        this.easing = easing || jQuery.easing._default;
        this.options = options;
        this.start = this.now = this.cur();
        this.end = end;
        this.unit = unit || (jQuery.cssNumber[prop] ? "" : "px");
      },
      cur: function() {
        var hooks = Tween.propHooks[this.prop];
        return hooks && hooks.get ? hooks.get(this) : Tween.propHooks._default.get(this);
      },
      run: function(percent) {
        var eased, hooks = Tween.propHooks[this.prop];
        if (this.options.duration) {
          this.pos = eased = jQuery.easing[this.easing](
            percent,
            this.options.duration * percent,
            0,
            1,
            this.options.duration
          );
        } else {
          this.pos = eased = percent;
        }
        this.now = (this.end - this.start) * eased + this.start;
        if (this.options.step) {
          this.options.step.call(this.elem, this.now, this);
        }
        if (hooks && hooks.set) {
          hooks.set(this);
        } else {
          Tween.propHooks._default.set(this);
        }
        return this;
      }
    };
    Tween.prototype.init.prototype = Tween.prototype;
    Tween.propHooks = {
      _default: {
        get: function(tween) {
          var result;
          if (tween.elem.nodeType !== 1 || tween.elem[tween.prop] != null && tween.elem.style[tween.prop] == null) {
            return tween.elem[tween.prop];
          }
          result = jQuery.css(tween.elem, tween.prop, "");
          return !result || result === "auto" ? 0 : result;
        },
        set: function(tween) {
          if (jQuery.fx.step[tween.prop]) {
            jQuery.fx.step[tween.prop](tween);
          } else if (tween.elem.nodeType === 1 && (jQuery.cssHooks[tween.prop] || tween.elem.style[finalPropName(tween.prop)] != null)) {
            jQuery.style(tween.elem, tween.prop, tween.now + tween.unit);
          } else {
            tween.elem[tween.prop] = tween.now;
          }
        }
      }
    };
    Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
      set: function(tween) {
        if (tween.elem.nodeType && tween.elem.parentNode) {
          tween.elem[tween.prop] = tween.now;
        }
      }
    };
    jQuery.easing = {
      linear: function(p2) {
        return p2;
      },
      swing: function(p2) {
        return 0.5 - Math.cos(p2 * Math.PI) / 2;
      },
      _default: "swing"
    };
    jQuery.fx = Tween.prototype.init;
    jQuery.fx.step = {};
    var fxNow, inProgress, rfxtypes = /^(?:toggle|show|hide)$/, rrun = /queueHooks$/;
    function schedule() {
      if (inProgress) {
        if (document2.hidden === false && window2.requestAnimationFrame) {
          window2.requestAnimationFrame(schedule);
        } else {
          window2.setTimeout(schedule, jQuery.fx.interval);
        }
        jQuery.fx.tick();
      }
    }
    function createFxNow() {
      window2.setTimeout(function() {
        fxNow = void 0;
      });
      return fxNow = Date.now();
    }
    function genFx(type, includeWidth) {
      var which, i2 = 0, attrs = { height: type };
      includeWidth = includeWidth ? 1 : 0;
      for (; i2 < 4; i2 += 2 - includeWidth) {
        which = cssExpand[i2];
        attrs["margin" + which] = attrs["padding" + which] = type;
      }
      if (includeWidth) {
        attrs.opacity = attrs.width = type;
      }
      return attrs;
    }
    function createTween(value, prop, animation) {
      var tween, collection = (Animation.tweeners[prop] || []).concat(Animation.tweeners["*"]), index = 0, length = collection.length;
      for (; index < length; index++) {
        if (tween = collection[index].call(animation, prop, value)) {
          return tween;
        }
      }
    }
    function defaultPrefilter(elem, props, opts) {
      var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display, isBox = "width" in props || "height" in props, anim = this, orig = {}, style = elem.style, hidden = elem.nodeType && isHiddenWithinTree(elem), dataShow = dataPriv.get(elem, "fxshow");
      if (!opts.queue) {
        hooks = jQuery._queueHooks(elem, "fx");
        if (hooks.unqueued == null) {
          hooks.unqueued = 0;
          oldfire = hooks.empty.fire;
          hooks.empty.fire = function() {
            if (!hooks.unqueued) {
              oldfire();
            }
          };
        }
        hooks.unqueued++;
        anim.always(function() {
          anim.always(function() {
            hooks.unqueued--;
            if (!jQuery.queue(elem, "fx").length) {
              hooks.empty.fire();
            }
          });
        });
      }
      for (prop in props) {
        value = props[prop];
        if (rfxtypes.test(value)) {
          delete props[prop];
          toggle = toggle || value === "toggle";
          if (value === (hidden ? "hide" : "show")) {
            if (value === "show" && dataShow && dataShow[prop] !== void 0) {
              hidden = true;
            } else {
              continue;
            }
          }
          orig[prop] = dataShow && dataShow[prop] || jQuery.style(elem, prop);
        }
      }
      propTween = !jQuery.isEmptyObject(props);
      if (!propTween && jQuery.isEmptyObject(orig)) {
        return;
      }
      if (isBox && elem.nodeType === 1) {
        opts.overflow = [style.overflow, style.overflowX, style.overflowY];
        restoreDisplay = dataShow && dataShow.display;
        if (restoreDisplay == null) {
          restoreDisplay = dataPriv.get(elem, "display");
        }
        display = jQuery.css(elem, "display");
        if (display === "none") {
          if (restoreDisplay) {
            display = restoreDisplay;
          } else {
            showHide([elem], true);
            restoreDisplay = elem.style.display || restoreDisplay;
            display = jQuery.css(elem, "display");
            showHide([elem]);
          }
        }
        if (display === "inline" || display === "inline-block" && restoreDisplay != null) {
          if (jQuery.css(elem, "float") === "none") {
            if (!propTween) {
              anim.done(function() {
                style.display = restoreDisplay;
              });
              if (restoreDisplay == null) {
                display = style.display;
                restoreDisplay = display === "none" ? "" : display;
              }
            }
            style.display = "inline-block";
          }
        }
      }
      if (opts.overflow) {
        style.overflow = "hidden";
        anim.always(function() {
          style.overflow = opts.overflow[0];
          style.overflowX = opts.overflow[1];
          style.overflowY = opts.overflow[2];
        });
      }
      propTween = false;
      for (prop in orig) {
        if (!propTween) {
          if (dataShow) {
            if ("hidden" in dataShow) {
              hidden = dataShow.hidden;
            }
          } else {
            dataShow = dataPriv.access(elem, "fxshow", { display: restoreDisplay });
          }
          if (toggle) {
            dataShow.hidden = !hidden;
          }
          if (hidden) {
            showHide([elem], true);
          }
          anim.done(function() {
            if (!hidden) {
              showHide([elem]);
            }
            dataPriv.remove(elem, "fxshow");
            for (prop in orig) {
              jQuery.style(elem, prop, orig[prop]);
            }
          });
        }
        propTween = createTween(hidden ? dataShow[prop] : 0, prop, anim);
        if (!(prop in dataShow)) {
          dataShow[prop] = propTween.start;
          if (hidden) {
            propTween.end = propTween.start;
            propTween.start = 0;
          }
        }
      }
    }
    function propFilter(props, specialEasing) {
      var index, name, easing, value, hooks;
      for (index in props) {
        name = camelCase(index);
        easing = specialEasing[name];
        value = props[index];
        if (Array.isArray(value)) {
          easing = value[1];
          value = props[index] = value[0];
        }
        if (index !== name) {
          props[name] = value;
          delete props[index];
        }
        hooks = jQuery.cssHooks[name];
        if (hooks && "expand" in hooks) {
          value = hooks.expand(value);
          delete props[name];
          for (index in value) {
            if (!(index in props)) {
              props[index] = value[index];
              specialEasing[index] = easing;
            }
          }
        } else {
          specialEasing[name] = easing;
        }
      }
    }
    function Animation(elem, properties, options) {
      var result, stopped, index = 0, length = Animation.prefilters.length, deferred = jQuery.Deferred().always(function() {
        delete tick.elem;
      }), tick = function() {
        if (stopped) {
          return false;
        }
        var currentTime = fxNow || createFxNow(), remaining = Math.max(0, animation.startTime + animation.duration - currentTime), temp = remaining / animation.duration || 0, percent = 1 - temp, index2 = 0, length2 = animation.tweens.length;
        for (; index2 < length2; index2++) {
          animation.tweens[index2].run(percent);
        }
        deferred.notifyWith(elem, [animation, percent, remaining]);
        if (percent < 1 && length2) {
          return remaining;
        }
        if (!length2) {
          deferred.notifyWith(elem, [animation, 1, 0]);
        }
        deferred.resolveWith(elem, [animation]);
        return false;
      }, animation = deferred.promise({
        elem,
        props: jQuery.extend({}, properties),
        opts: jQuery.extend(true, {
          specialEasing: {},
          easing: jQuery.easing._default
        }, options),
        originalProperties: properties,
        originalOptions: options,
        startTime: fxNow || createFxNow(),
        duration: options.duration,
        tweens: [],
        createTween: function(prop, end) {
          var tween = jQuery.Tween(
            elem,
            animation.opts,
            prop,
            end,
            animation.opts.specialEasing[prop] || animation.opts.easing
          );
          animation.tweens.push(tween);
          return tween;
        },
        stop: function(gotoEnd) {
          var index2 = 0, length2 = gotoEnd ? animation.tweens.length : 0;
          if (stopped) {
            return this;
          }
          stopped = true;
          for (; index2 < length2; index2++) {
            animation.tweens[index2].run(1);
          }
          if (gotoEnd) {
            deferred.notifyWith(elem, [animation, 1, 0]);
            deferred.resolveWith(elem, [animation, gotoEnd]);
          } else {
            deferred.rejectWith(elem, [animation, gotoEnd]);
          }
          return this;
        }
      }), props = animation.props;
      propFilter(props, animation.opts.specialEasing);
      for (; index < length; index++) {
        result = Animation.prefilters[index].call(animation, elem, props, animation.opts);
        if (result) {
          if (isFunction2(result.stop)) {
            jQuery._queueHooks(animation.elem, animation.opts.queue).stop = result.stop.bind(result);
          }
          return result;
        }
      }
      jQuery.map(props, createTween, animation);
      if (isFunction2(animation.opts.start)) {
        animation.opts.start.call(elem, animation);
      }
      animation.progress(animation.opts.progress).done(animation.opts.done, animation.opts.complete).fail(animation.opts.fail).always(animation.opts.always);
      jQuery.fx.timer(
        jQuery.extend(tick, {
          elem,
          anim: animation,
          queue: animation.opts.queue
        })
      );
      return animation;
    }
    jQuery.Animation = jQuery.extend(Animation, {
      tweeners: {
        "*": [function(prop, value) {
          var tween = this.createTween(prop, value);
          adjustCSS(tween.elem, prop, rcssNum.exec(value), tween);
          return tween;
        }]
      },
      tweener: function(props, callback) {
        if (isFunction2(props)) {
          callback = props;
          props = ["*"];
        } else {
          props = props.match(rnothtmlwhite);
        }
        var prop, index = 0, length = props.length;
        for (; index < length; index++) {
          prop = props[index];
          Animation.tweeners[prop] = Animation.tweeners[prop] || [];
          Animation.tweeners[prop].unshift(callback);
        }
      },
      prefilters: [defaultPrefilter],
      prefilter: function(callback, prepend) {
        if (prepend) {
          Animation.prefilters.unshift(callback);
        } else {
          Animation.prefilters.push(callback);
        }
      }
    });
    jQuery.speed = function(speed, easing, fn2) {
      var opt = speed && typeof speed === "object" ? jQuery.extend({}, speed) : {
        complete: fn2 || !fn2 && easing || isFunction2(speed) && speed,
        duration: speed,
        easing: fn2 && easing || easing && !isFunction2(easing) && easing
      };
      if (jQuery.fx.off) {
        opt.duration = 0;
      } else {
        if (typeof opt.duration !== "number") {
          if (opt.duration in jQuery.fx.speeds) {
            opt.duration = jQuery.fx.speeds[opt.duration];
          } else {
            opt.duration = jQuery.fx.speeds._default;
          }
        }
      }
      if (opt.queue == null || opt.queue === true) {
        opt.queue = "fx";
      }
      opt.old = opt.complete;
      opt.complete = function() {
        if (isFunction2(opt.old)) {
          opt.old.call(this);
        }
        if (opt.queue) {
          jQuery.dequeue(this, opt.queue);
        }
      };
      return opt;
    };
    jQuery.fn.extend({
      fadeTo: function(speed, to, easing, callback) {
        return this.filter(isHiddenWithinTree).css("opacity", 0).show().end().animate({ opacity: to }, speed, easing, callback);
      },
      animate: function(prop, speed, easing, callback) {
        var empty = jQuery.isEmptyObject(prop), optall = jQuery.speed(speed, easing, callback), doAnimation = function() {
          var anim = Animation(this, jQuery.extend({}, prop), optall);
          if (empty || dataPriv.get(this, "finish")) {
            anim.stop(true);
          }
        };
        doAnimation.finish = doAnimation;
        return empty || optall.queue === false ? this.each(doAnimation) : this.queue(optall.queue, doAnimation);
      },
      stop: function(type, clearQueue, gotoEnd) {
        var stopQueue = function(hooks) {
          var stop = hooks.stop;
          delete hooks.stop;
          stop(gotoEnd);
        };
        if (typeof type !== "string") {
          gotoEnd = clearQueue;
          clearQueue = type;
          type = void 0;
        }
        if (clearQueue) {
          this.queue(type || "fx", []);
        }
        return this.each(function() {
          var dequeue = true, index = type != null && type + "queueHooks", timers = jQuery.timers, data = dataPriv.get(this);
          if (index) {
            if (data[index] && data[index].stop) {
              stopQueue(data[index]);
            }
          } else {
            for (index in data) {
              if (data[index] && data[index].stop && rrun.test(index)) {
                stopQueue(data[index]);
              }
            }
          }
          for (index = timers.length; index--; ) {
            if (timers[index].elem === this && (type == null || timers[index].queue === type)) {
              timers[index].anim.stop(gotoEnd);
              dequeue = false;
              timers.splice(index, 1);
            }
          }
          if (dequeue || !gotoEnd) {
            jQuery.dequeue(this, type);
          }
        });
      },
      finish: function(type) {
        if (type !== false) {
          type = type || "fx";
        }
        return this.each(function() {
          var index, data = dataPriv.get(this), queue = data[type + "queue"], hooks = data[type + "queueHooks"], timers = jQuery.timers, length = queue ? queue.length : 0;
          data.finish = true;
          jQuery.queue(this, type, []);
          if (hooks && hooks.stop) {
            hooks.stop.call(this, true);
          }
          for (index = timers.length; index--; ) {
            if (timers[index].elem === this && timers[index].queue === type) {
              timers[index].anim.stop(true);
              timers.splice(index, 1);
            }
          }
          for (index = 0; index < length; index++) {
            if (queue[index] && queue[index].finish) {
              queue[index].finish.call(this);
            }
          }
          delete data.finish;
        });
      }
    });
    jQuery.each(["toggle", "show", "hide"], function(_i, name) {
      var cssFn = jQuery.fn[name];
      jQuery.fn[name] = function(speed, easing, callback) {
        return speed == null || typeof speed === "boolean" ? cssFn.apply(this, arguments) : this.animate(genFx(name, true), speed, easing, callback);
      };
    });
    jQuery.each({
      slideDown: genFx("show"),
      slideUp: genFx("hide"),
      slideToggle: genFx("toggle"),
      fadeIn: { opacity: "show" },
      fadeOut: { opacity: "hide" },
      fadeToggle: { opacity: "toggle" }
    }, function(name, props) {
      jQuery.fn[name] = function(speed, easing, callback) {
        return this.animate(props, speed, easing, callback);
      };
    });
    jQuery.timers = [];
    jQuery.fx.tick = function() {
      var timer, i2 = 0, timers = jQuery.timers;
      fxNow = Date.now();
      for (; i2 < timers.length; i2++) {
        timer = timers[i2];
        if (!timer() && timers[i2] === timer) {
          timers.splice(i2--, 1);
        }
      }
      if (!timers.length) {
        jQuery.fx.stop();
      }
      fxNow = void 0;
    };
    jQuery.fx.timer = function(timer) {
      jQuery.timers.push(timer);
      jQuery.fx.start();
    };
    jQuery.fx.interval = 13;
    jQuery.fx.start = function() {
      if (inProgress) {
        return;
      }
      inProgress = true;
      schedule();
    };
    jQuery.fx.stop = function() {
      inProgress = null;
    };
    jQuery.fx.speeds = {
      slow: 600,
      fast: 200,
      _default: 400
    };
    jQuery.fn.delay = function(time, type) {
      time = jQuery.fx ? jQuery.fx.speeds[time] || time : time;
      type = type || "fx";
      return this.queue(type, function(next, hooks) {
        var timeout = window2.setTimeout(next, time);
        hooks.stop = function() {
          window2.clearTimeout(timeout);
        };
      });
    };
    (function() {
      var input = document2.createElement("input"), select = document2.createElement("select"), opt = select.appendChild(document2.createElement("option"));
      input.type = "checkbox";
      support.checkOn = input.value !== "";
      support.optSelected = opt.selected;
      input = document2.createElement("input");
      input.value = "t";
      input.type = "radio";
      support.radioValue = input.value === "t";
    })();
    var boolHook, attrHandle = jQuery.expr.attrHandle;
    jQuery.fn.extend({
      attr: function(name, value) {
        return access(this, jQuery.attr, name, value, arguments.length > 1);
      },
      removeAttr: function(name) {
        return this.each(function() {
          jQuery.removeAttr(this, name);
        });
      }
    });
    jQuery.extend({
      attr: function(elem, name, value) {
        var ret, hooks, nType = elem.nodeType;
        if (nType === 3 || nType === 8 || nType === 2) {
          return;
        }
        if (typeof elem.getAttribute === "undefined") {
          return jQuery.prop(elem, name, value);
        }
        if (nType !== 1 || !jQuery.isXMLDoc(elem)) {
          hooks = jQuery.attrHooks[name.toLowerCase()] || (jQuery.expr.match.bool.test(name) ? boolHook : void 0);
        }
        if (value !== void 0) {
          if (value === null) {
            jQuery.removeAttr(elem, name);
            return;
          }
          if (hooks && "set" in hooks && (ret = hooks.set(elem, value, name)) !== void 0) {
            return ret;
          }
          elem.setAttribute(name, value + "");
          return value;
        }
        if (hooks && "get" in hooks && (ret = hooks.get(elem, name)) !== null) {
          return ret;
        }
        ret = jQuery.find.attr(elem, name);
        return ret == null ? void 0 : ret;
      },
      attrHooks: {
        type: {
          set: function(elem, value) {
            if (!support.radioValue && value === "radio" && nodeName(elem, "input")) {
              var val = elem.value;
              elem.setAttribute("type", value);
              if (val) {
                elem.value = val;
              }
              return value;
            }
          }
        }
      },
      removeAttr: function(elem, value) {
        var name, i2 = 0, attrNames = value && value.match(rnothtmlwhite);
        if (attrNames && elem.nodeType === 1) {
          while (name = attrNames[i2++]) {
            elem.removeAttribute(name);
          }
        }
      }
    });
    boolHook = {
      set: function(elem, value, name) {
        if (value === false) {
          jQuery.removeAttr(elem, name);
        } else {
          elem.setAttribute(name, name);
        }
        return name;
      }
    };
    jQuery.each(jQuery.expr.match.bool.source.match(/\w+/g), function(_i, name) {
      var getter = attrHandle[name] || jQuery.find.attr;
      attrHandle[name] = function(elem, name2, isXML) {
        var ret, handle, lowercaseName = name2.toLowerCase();
        if (!isXML) {
          handle = attrHandle[lowercaseName];
          attrHandle[lowercaseName] = ret;
          ret = getter(elem, name2, isXML) != null ? lowercaseName : null;
          attrHandle[lowercaseName] = handle;
        }
        return ret;
      };
    });
    var rfocusable = /^(?:input|select|textarea|button)$/i, rclickable = /^(?:a|area)$/i;
    jQuery.fn.extend({
      prop: function(name, value) {
        return access(this, jQuery.prop, name, value, arguments.length > 1);
      },
      removeProp: function(name) {
        return this.each(function() {
          delete this[jQuery.propFix[name] || name];
        });
      }
    });
    jQuery.extend({
      prop: function(elem, name, value) {
        var ret, hooks, nType = elem.nodeType;
        if (nType === 3 || nType === 8 || nType === 2) {
          return;
        }
        if (nType !== 1 || !jQuery.isXMLDoc(elem)) {
          name = jQuery.propFix[name] || name;
          hooks = jQuery.propHooks[name];
        }
        if (value !== void 0) {
          if (hooks && "set" in hooks && (ret = hooks.set(elem, value, name)) !== void 0) {
            return ret;
          }
          return elem[name] = value;
        }
        if (hooks && "get" in hooks && (ret = hooks.get(elem, name)) !== null) {
          return ret;
        }
        return elem[name];
      },
      propHooks: {
        tabIndex: {
          get: function(elem) {
            var tabindex = jQuery.find.attr(elem, "tabindex");
            if (tabindex) {
              return parseInt(tabindex, 10);
            }
            if (rfocusable.test(elem.nodeName) || rclickable.test(elem.nodeName) && elem.href) {
              return 0;
            }
            return -1;
          }
        }
      },
      propFix: {
        "for": "htmlFor",
        "class": "className"
      }
    });
    if (!support.optSelected) {
      jQuery.propHooks.selected = {
        get: function(elem) {
          var parent = elem.parentNode;
          if (parent && parent.parentNode) {
            parent.parentNode.selectedIndex;
          }
          return null;
        },
        set: function(elem) {
          var parent = elem.parentNode;
          if (parent) {
            parent.selectedIndex;
            if (parent.parentNode) {
              parent.parentNode.selectedIndex;
            }
          }
        }
      };
    }
    jQuery.each([
      "tabIndex",
      "readOnly",
      "maxLength",
      "cellSpacing",
      "cellPadding",
      "rowSpan",
      "colSpan",
      "useMap",
      "frameBorder",
      "contentEditable"
    ], function() {
      jQuery.propFix[this.toLowerCase()] = this;
    });
    function stripAndCollapse(value) {
      var tokens = value.match(rnothtmlwhite) || [];
      return tokens.join(" ");
    }
    function getClass(elem) {
      return elem.getAttribute && elem.getAttribute("class") || "";
    }
    function classesToArray(value) {
      if (Array.isArray(value)) {
        return value;
      }
      if (typeof value === "string") {
        return value.match(rnothtmlwhite) || [];
      }
      return [];
    }
    jQuery.fn.extend({
      addClass: function(value) {
        var classNames2, cur, curValue, className2, i2, finalValue;
        if (isFunction2(value)) {
          return this.each(function(j2) {
            jQuery(this).addClass(value.call(this, j2, getClass(this)));
          });
        }
        classNames2 = classesToArray(value);
        if (classNames2.length) {
          return this.each(function() {
            curValue = getClass(this);
            cur = this.nodeType === 1 && " " + stripAndCollapse(curValue) + " ";
            if (cur) {
              for (i2 = 0; i2 < classNames2.length; i2++) {
                className2 = classNames2[i2];
                if (cur.indexOf(" " + className2 + " ") < 0) {
                  cur += className2 + " ";
                }
              }
              finalValue = stripAndCollapse(cur);
              if (curValue !== finalValue) {
                this.setAttribute("class", finalValue);
              }
            }
          });
        }
        return this;
      },
      removeClass: function(value) {
        var classNames2, cur, curValue, className2, i2, finalValue;
        if (isFunction2(value)) {
          return this.each(function(j2) {
            jQuery(this).removeClass(value.call(this, j2, getClass(this)));
          });
        }
        if (!arguments.length) {
          return this.attr("class", "");
        }
        classNames2 = classesToArray(value);
        if (classNames2.length) {
          return this.each(function() {
            curValue = getClass(this);
            cur = this.nodeType === 1 && " " + stripAndCollapse(curValue) + " ";
            if (cur) {
              for (i2 = 0; i2 < classNames2.length; i2++) {
                className2 = classNames2[i2];
                while (cur.indexOf(" " + className2 + " ") > -1) {
                  cur = cur.replace(" " + className2 + " ", " ");
                }
              }
              finalValue = stripAndCollapse(cur);
              if (curValue !== finalValue) {
                this.setAttribute("class", finalValue);
              }
            }
          });
        }
        return this;
      },
      toggleClass: function(value, stateVal) {
        var classNames2, className2, i2, self2, type = typeof value, isValidValue = type === "string" || Array.isArray(value);
        if (isFunction2(value)) {
          return this.each(function(i3) {
            jQuery(this).toggleClass(
              value.call(this, i3, getClass(this), stateVal),
              stateVal
            );
          });
        }
        if (typeof stateVal === "boolean" && isValidValue) {
          return stateVal ? this.addClass(value) : this.removeClass(value);
        }
        classNames2 = classesToArray(value);
        return this.each(function() {
          if (isValidValue) {
            self2 = jQuery(this);
            for (i2 = 0; i2 < classNames2.length; i2++) {
              className2 = classNames2[i2];
              if (self2.hasClass(className2)) {
                self2.removeClass(className2);
              } else {
                self2.addClass(className2);
              }
            }
          } else if (value === void 0 || type === "boolean") {
            className2 = getClass(this);
            if (className2) {
              dataPriv.set(this, "__className__", className2);
            }
            if (this.setAttribute) {
              this.setAttribute(
                "class",
                className2 || value === false ? "" : dataPriv.get(this, "__className__") || ""
              );
            }
          }
        });
      },
      hasClass: function(selector) {
        var className2, elem, i2 = 0;
        className2 = " " + selector + " ";
        while (elem = this[i2++]) {
          if (elem.nodeType === 1 && (" " + stripAndCollapse(getClass(elem)) + " ").indexOf(className2) > -1) {
            return true;
          }
        }
        return false;
      }
    });
    var rreturn = /\r/g;
    jQuery.fn.extend({
      val: function(value) {
        var hooks, ret, valueIsFunction, elem = this[0];
        if (!arguments.length) {
          if (elem) {
            hooks = jQuery.valHooks[elem.type] || jQuery.valHooks[elem.nodeName.toLowerCase()];
            if (hooks && "get" in hooks && (ret = hooks.get(elem, "value")) !== void 0) {
              return ret;
            }
            ret = elem.value;
            if (typeof ret === "string") {
              return ret.replace(rreturn, "");
            }
            return ret == null ? "" : ret;
          }
          return;
        }
        valueIsFunction = isFunction2(value);
        return this.each(function(i2) {
          var val;
          if (this.nodeType !== 1) {
            return;
          }
          if (valueIsFunction) {
            val = value.call(this, i2, jQuery(this).val());
          } else {
            val = value;
          }
          if (val == null) {
            val = "";
          } else if (typeof val === "number") {
            val += "";
          } else if (Array.isArray(val)) {
            val = jQuery.map(val, function(value2) {
              return value2 == null ? "" : value2 + "";
            });
          }
          hooks = jQuery.valHooks[this.type] || jQuery.valHooks[this.nodeName.toLowerCase()];
          if (!hooks || !("set" in hooks) || hooks.set(this, val, "value") === void 0) {
            this.value = val;
          }
        });
      }
    });
    jQuery.extend({
      valHooks: {
        option: {
          get: function(elem) {
            var val = jQuery.find.attr(elem, "value");
            return val != null ? val : stripAndCollapse(jQuery.text(elem));
          }
        },
        select: {
          get: function(elem) {
            var value, option, i2, options = elem.options, index = elem.selectedIndex, one = elem.type === "select-one", values = one ? null : [], max2 = one ? index + 1 : options.length;
            if (index < 0) {
              i2 = max2;
            } else {
              i2 = one ? index : 0;
            }
            for (; i2 < max2; i2++) {
              option = options[i2];
              if ((option.selected || i2 === index) && !option.disabled && (!option.parentNode.disabled || !nodeName(option.parentNode, "optgroup"))) {
                value = jQuery(option).val();
                if (one) {
                  return value;
                }
                values.push(value);
              }
            }
            return values;
          },
          set: function(elem, value) {
            var optionSet, option, options = elem.options, values = jQuery.makeArray(value), i2 = options.length;
            while (i2--) {
              option = options[i2];
              if (option.selected = jQuery.inArray(jQuery.valHooks.option.get(option), values) > -1) {
                optionSet = true;
              }
            }
            if (!optionSet) {
              elem.selectedIndex = -1;
            }
            return values;
          }
        }
      }
    });
    jQuery.each(["radio", "checkbox"], function() {
      jQuery.valHooks[this] = {
        set: function(elem, value) {
          if (Array.isArray(value)) {
            return elem.checked = jQuery.inArray(jQuery(elem).val(), value) > -1;
          }
        }
      };
      if (!support.checkOn) {
        jQuery.valHooks[this].get = function(elem) {
          return elem.getAttribute("value") === null ? "on" : elem.value;
        };
      }
    });
    var location2 = window2.location;
    var nonce = { guid: Date.now() };
    var rquery = /\?/;
    jQuery.parseXML = function(data) {
      var xml2, parserErrorElem;
      if (!data || typeof data !== "string") {
        return null;
      }
      try {
        xml2 = new window2.DOMParser().parseFromString(data, "text/xml");
      } catch (e2) {
      }
      parserErrorElem = xml2 && xml2.getElementsByTagName("parsererror")[0];
      if (!xml2 || parserErrorElem) {
        jQuery.error("Invalid XML: " + (parserErrorElem ? jQuery.map(parserErrorElem.childNodes, function(el) {
          return el.textContent;
        }).join("\n") : data));
      }
      return xml2;
    };
    var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/, stopPropagationCallback = function(e2) {
      e2.stopPropagation();
    };
    jQuery.extend(jQuery.event, {
      trigger: function(event, data, elem, onlyHandlers) {
        var i2, cur, tmp, bubbleType, ontype, handle, special, lastElement, eventPath = [elem || document2], type = hasOwn.call(event, "type") ? event.type : event, namespaces = hasOwn.call(event, "namespace") ? event.namespace.split(".") : [];
        cur = lastElement = tmp = elem = elem || document2;
        if (elem.nodeType === 3 || elem.nodeType === 8) {
          return;
        }
        if (rfocusMorph.test(type + jQuery.event.triggered)) {
          return;
        }
        if (type.indexOf(".") > -1) {
          namespaces = type.split(".");
          type = namespaces.shift();
          namespaces.sort();
        }
        ontype = type.indexOf(":") < 0 && "on" + type;
        event = event[jQuery.expando] ? event : new jQuery.Event(type, typeof event === "object" && event);
        event.isTrigger = onlyHandlers ? 2 : 3;
        event.namespace = namespaces.join(".");
        event.rnamespace = event.namespace ? new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)") : null;
        event.result = void 0;
        if (!event.target) {
          event.target = elem;
        }
        data = data == null ? [event] : jQuery.makeArray(data, [event]);
        special = jQuery.event.special[type] || {};
        if (!onlyHandlers && special.trigger && special.trigger.apply(elem, data) === false) {
          return;
        }
        if (!onlyHandlers && !special.noBubble && !isWindow(elem)) {
          bubbleType = special.delegateType || type;
          if (!rfocusMorph.test(bubbleType + type)) {
            cur = cur.parentNode;
          }
          for (; cur; cur = cur.parentNode) {
            eventPath.push(cur);
            tmp = cur;
          }
          if (tmp === (elem.ownerDocument || document2)) {
            eventPath.push(tmp.defaultView || tmp.parentWindow || window2);
          }
        }
        i2 = 0;
        while ((cur = eventPath[i2++]) && !event.isPropagationStopped()) {
          lastElement = cur;
          event.type = i2 > 1 ? bubbleType : special.bindType || type;
          handle = (dataPriv.get(cur, "events") || /* @__PURE__ */ Object.create(null))[event.type] && dataPriv.get(cur, "handle");
          if (handle) {
            handle.apply(cur, data);
          }
          handle = ontype && cur[ontype];
          if (handle && handle.apply && acceptData(cur)) {
            event.result = handle.apply(cur, data);
            if (event.result === false) {
              event.preventDefault();
            }
          }
        }
        event.type = type;
        if (!onlyHandlers && !event.isDefaultPrevented()) {
          if ((!special._default || special._default.apply(eventPath.pop(), data) === false) && acceptData(elem)) {
            if (ontype && isFunction2(elem[type]) && !isWindow(elem)) {
              tmp = elem[ontype];
              if (tmp) {
                elem[ontype] = null;
              }
              jQuery.event.triggered = type;
              if (event.isPropagationStopped()) {
                lastElement.addEventListener(type, stopPropagationCallback);
              }
              elem[type]();
              if (event.isPropagationStopped()) {
                lastElement.removeEventListener(type, stopPropagationCallback);
              }
              jQuery.event.triggered = void 0;
              if (tmp) {
                elem[ontype] = tmp;
              }
            }
          }
        }
        return event.result;
      },
      simulate: function(type, elem, event) {
        var e2 = jQuery.extend(
          new jQuery.Event(),
          event,
          {
            type,
            isSimulated: true
          }
        );
        jQuery.event.trigger(e2, null, elem);
      }
    });
    jQuery.fn.extend({
      trigger: function(type, data) {
        return this.each(function() {
          jQuery.event.trigger(type, data, this);
        });
      },
      triggerHandler: function(type, data) {
        var elem = this[0];
        if (elem) {
          return jQuery.event.trigger(type, data, elem, true);
        }
      }
    });
    var rbracket = /\[\]$/, rCRLF = /\r?\n/g, rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i, rsubmittable = /^(?:input|select|textarea|keygen)/i;
    function buildParams(prefix, obj, traditional, add) {
      var name;
      if (Array.isArray(obj)) {
        jQuery.each(obj, function(i2, v2) {
          if (traditional || rbracket.test(prefix)) {
            add(prefix, v2);
          } else {
            buildParams(
              prefix + "[" + (typeof v2 === "object" && v2 != null ? i2 : "") + "]",
              v2,
              traditional,
              add
            );
          }
        });
      } else if (!traditional && toType(obj) === "object") {
        for (name in obj) {
          buildParams(prefix + "[" + name + "]", obj[name], traditional, add);
        }
      } else {
        add(prefix, obj);
      }
    }
    jQuery.param = function(a2, traditional) {
      var prefix, s2 = [], add = function(key, valueOrFunction) {
        var value = isFunction2(valueOrFunction) ? valueOrFunction() : valueOrFunction;
        s2[s2.length] = encodeURIComponent(key) + "=" + encodeURIComponent(value == null ? "" : value);
      };
      if (a2 == null) {
        return "";
      }
      if (Array.isArray(a2) || a2.jquery && !jQuery.isPlainObject(a2)) {
        jQuery.each(a2, function() {
          add(this.name, this.value);
        });
      } else {
        for (prefix in a2) {
          buildParams(prefix, a2[prefix], traditional, add);
        }
      }
      return s2.join("&");
    };
    jQuery.fn.extend({
      serialize: function() {
        return jQuery.param(this.serializeArray());
      },
      serializeArray: function() {
        return this.map(function() {
          var elements = jQuery.prop(this, "elements");
          return elements ? jQuery.makeArray(elements) : this;
        }).filter(function() {
          var type = this.type;
          return this.name && !jQuery(this).is(":disabled") && rsubmittable.test(this.nodeName) && !rsubmitterTypes.test(type) && (this.checked || !rcheckableType.test(type));
        }).map(function(_i, elem) {
          var val = jQuery(this).val();
          if (val == null) {
            return null;
          }
          if (Array.isArray(val)) {
            return jQuery.map(val, function(val2) {
              return { name: elem.name, value: val2.replace(rCRLF, "\r\n") };
            });
          }
          return { name: elem.name, value: val.replace(rCRLF, "\r\n") };
        }).get();
      }
    });
    var r20 = /%20/g, rhash = /#.*$/, rantiCache = /([?&])_=[^&]*/, rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg, rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, rnoContent = /^(?:GET|HEAD)$/, rprotocol = /^\/\//, prefilters = {}, transports = {}, allTypes = "*/".concat("*"), originAnchor = document2.createElement("a");
    originAnchor.href = location2.href;
    function addToPrefiltersOrTransports(structure) {
      return function(dataTypeExpression, func) {
        if (typeof dataTypeExpression !== "string") {
          func = dataTypeExpression;
          dataTypeExpression = "*";
        }
        var dataType, i2 = 0, dataTypes = dataTypeExpression.toLowerCase().match(rnothtmlwhite) || [];
        if (isFunction2(func)) {
          while (dataType = dataTypes[i2++]) {
            if (dataType[0] === "+") {
              dataType = dataType.slice(1) || "*";
              (structure[dataType] = structure[dataType] || []).unshift(func);
            } else {
              (structure[dataType] = structure[dataType] || []).push(func);
            }
          }
        }
      };
    }
    function inspectPrefiltersOrTransports(structure, options, originalOptions, jqXHR) {
      var inspected = {}, seekingTransport = structure === transports;
      function inspect(dataType) {
        var selected;
        inspected[dataType] = true;
        jQuery.each(structure[dataType] || [], function(_2, prefilterOrFactory) {
          var dataTypeOrTransport = prefilterOrFactory(options, originalOptions, jqXHR);
          if (typeof dataTypeOrTransport === "string" && !seekingTransport && !inspected[dataTypeOrTransport]) {
            options.dataTypes.unshift(dataTypeOrTransport);
            inspect(dataTypeOrTransport);
            return false;
          } else if (seekingTransport) {
            return !(selected = dataTypeOrTransport);
          }
        });
        return selected;
      }
      return inspect(options.dataTypes[0]) || !inspected["*"] && inspect("*");
    }
    function ajaxExtend(target, src) {
      var key, deep, flatOptions = jQuery.ajaxSettings.flatOptions || {};
      for (key in src) {
        if (src[key] !== void 0) {
          (flatOptions[key] ? target : deep || (deep = {}))[key] = src[key];
        }
      }
      if (deep) {
        jQuery.extend(true, target, deep);
      }
      return target;
    }
    function ajaxHandleResponses(s2, jqXHR, responses) {
      var ct, type, finalDataType, firstDataType, contents = s2.contents, dataTypes = s2.dataTypes;
      while (dataTypes[0] === "*") {
        dataTypes.shift();
        if (ct === void 0) {
          ct = s2.mimeType || jqXHR.getResponseHeader("Content-Type");
        }
      }
      if (ct) {
        for (type in contents) {
          if (contents[type] && contents[type].test(ct)) {
            dataTypes.unshift(type);
            break;
          }
        }
      }
      if (dataTypes[0] in responses) {
        finalDataType = dataTypes[0];
      } else {
        for (type in responses) {
          if (!dataTypes[0] || s2.converters[type + " " + dataTypes[0]]) {
            finalDataType = type;
            break;
          }
          if (!firstDataType) {
            firstDataType = type;
          }
        }
        finalDataType = finalDataType || firstDataType;
      }
      if (finalDataType) {
        if (finalDataType !== dataTypes[0]) {
          dataTypes.unshift(finalDataType);
        }
        return responses[finalDataType];
      }
    }
    function ajaxConvert(s2, response, jqXHR, isSuccess) {
      var conv2, current, conv, tmp, prev, converters = {}, dataTypes = s2.dataTypes.slice();
      if (dataTypes[1]) {
        for (conv in s2.converters) {
          converters[conv.toLowerCase()] = s2.converters[conv];
        }
      }
      current = dataTypes.shift();
      while (current) {
        if (s2.responseFields[current]) {
          jqXHR[s2.responseFields[current]] = response;
        }
        if (!prev && isSuccess && s2.dataFilter) {
          response = s2.dataFilter(response, s2.dataType);
        }
        prev = current;
        current = dataTypes.shift();
        if (current) {
          if (current === "*") {
            current = prev;
          } else if (prev !== "*" && prev !== current) {
            conv = converters[prev + " " + current] || converters["* " + current];
            if (!conv) {
              for (conv2 in converters) {
                tmp = conv2.split(" ");
                if (tmp[1] === current) {
                  conv = converters[prev + " " + tmp[0]] || converters["* " + tmp[0]];
                  if (conv) {
                    if (conv === true) {
                      conv = converters[conv2];
                    } else if (converters[conv2] !== true) {
                      current = tmp[0];
                      dataTypes.unshift(tmp[1]);
                    }
                    break;
                  }
                }
              }
            }
            if (conv !== true) {
              if (conv && s2.throws) {
                response = conv(response);
              } else {
                try {
                  response = conv(response);
                } catch (e2) {
                  return {
                    state: "parsererror",
                    error: conv ? e2 : "No conversion from " + prev + " to " + current
                  };
                }
              }
            }
          }
        }
      }
      return { state: "success", data: response };
    }
    jQuery.extend({
      active: 0,
      lastModified: {},
      etag: {},
      ajaxSettings: {
        url: location2.href,
        type: "GET",
        isLocal: rlocalProtocol.test(location2.protocol),
        global: true,
        processData: true,
        async: true,
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        accepts: {
          "*": allTypes,
          text: "text/plain",
          html: "text/html",
          xml: "application/xml, text/xml",
          json: "application/json, text/javascript"
        },
        contents: {
          xml: /\bxml\b/,
          html: /\bhtml/,
          json: /\bjson\b/
        },
        responseFields: {
          xml: "responseXML",
          text: "responseText",
          json: "responseJSON"
        },
        converters: {
          "* text": String,
          "text html": true,
          "text json": JSON.parse,
          "text xml": jQuery.parseXML
        },
        flatOptions: {
          url: true,
          context: true
        }
      },
      ajaxSetup: function(target, settings) {
        return settings ? ajaxExtend(ajaxExtend(target, jQuery.ajaxSettings), settings) : ajaxExtend(jQuery.ajaxSettings, target);
      },
      ajaxPrefilter: addToPrefiltersOrTransports(prefilters),
      ajaxTransport: addToPrefiltersOrTransports(transports),
      ajax: function(url, options) {
        if (typeof url === "object") {
          options = url;
          url = void 0;
        }
        options = options || {};
        var transport, cacheURL, responseHeadersString, responseHeaders, timeoutTimer, urlAnchor, completed2, fireGlobals, i2, uncached, s2 = jQuery.ajaxSetup({}, options), callbackContext = s2.context || s2, globalEventContext = s2.context && (callbackContext.nodeType || callbackContext.jquery) ? jQuery(callbackContext) : jQuery.event, deferred = jQuery.Deferred(), completeDeferred = jQuery.Callbacks("once memory"), statusCode = s2.statusCode || {}, requestHeaders = {}, requestHeadersNames = {}, strAbort = "canceled", jqXHR = {
          readyState: 0,
          getResponseHeader: function(key) {
            var match;
            if (completed2) {
              if (!responseHeaders) {
                responseHeaders = {};
                while (match = rheaders.exec(responseHeadersString)) {
                  responseHeaders[match[1].toLowerCase() + " "] = (responseHeaders[match[1].toLowerCase() + " "] || []).concat(match[2]);
                }
              }
              match = responseHeaders[key.toLowerCase() + " "];
            }
            return match == null ? null : match.join(", ");
          },
          getAllResponseHeaders: function() {
            return completed2 ? responseHeadersString : null;
          },
          setRequestHeader: function(name, value) {
            if (completed2 == null) {
              name = requestHeadersNames[name.toLowerCase()] = requestHeadersNames[name.toLowerCase()] || name;
              requestHeaders[name] = value;
            }
            return this;
          },
          overrideMimeType: function(type) {
            if (completed2 == null) {
              s2.mimeType = type;
            }
            return this;
          },
          statusCode: function(map) {
            var code;
            if (map) {
              if (completed2) {
                jqXHR.always(map[jqXHR.status]);
              } else {
                for (code in map) {
                  statusCode[code] = [statusCode[code], map[code]];
                }
              }
            }
            return this;
          },
          abort: function(statusText) {
            var finalText = statusText || strAbort;
            if (transport) {
              transport.abort(finalText);
            }
            done(0, finalText);
            return this;
          }
        };
        deferred.promise(jqXHR);
        s2.url = ((url || s2.url || location2.href) + "").replace(rprotocol, location2.protocol + "//");
        s2.type = options.method || options.type || s2.method || s2.type;
        s2.dataTypes = (s2.dataType || "*").toLowerCase().match(rnothtmlwhite) || [""];
        if (s2.crossDomain == null) {
          urlAnchor = document2.createElement("a");
          try {
            urlAnchor.href = s2.url;
            urlAnchor.href = urlAnchor.href;
            s2.crossDomain = originAnchor.protocol + "//" + originAnchor.host !== urlAnchor.protocol + "//" + urlAnchor.host;
          } catch (e2) {
            s2.crossDomain = true;
          }
        }
        if (s2.data && s2.processData && typeof s2.data !== "string") {
          s2.data = jQuery.param(s2.data, s2.traditional);
        }
        inspectPrefiltersOrTransports(prefilters, s2, options, jqXHR);
        if (completed2) {
          return jqXHR;
        }
        fireGlobals = jQuery.event && s2.global;
        if (fireGlobals && jQuery.active++ === 0) {
          jQuery.event.trigger("ajaxStart");
        }
        s2.type = s2.type.toUpperCase();
        s2.hasContent = !rnoContent.test(s2.type);
        cacheURL = s2.url.replace(rhash, "");
        if (!s2.hasContent) {
          uncached = s2.url.slice(cacheURL.length);
          if (s2.data && (s2.processData || typeof s2.data === "string")) {
            cacheURL += (rquery.test(cacheURL) ? "&" : "?") + s2.data;
            delete s2.data;
          }
          if (s2.cache === false) {
            cacheURL = cacheURL.replace(rantiCache, "$1");
            uncached = (rquery.test(cacheURL) ? "&" : "?") + "_=" + nonce.guid++ + uncached;
          }
          s2.url = cacheURL + uncached;
        } else if (s2.data && s2.processData && (s2.contentType || "").indexOf("application/x-www-form-urlencoded") === 0) {
          s2.data = s2.data.replace(r20, "+");
        }
        if (s2.ifModified) {
          if (jQuery.lastModified[cacheURL]) {
            jqXHR.setRequestHeader("If-Modified-Since", jQuery.lastModified[cacheURL]);
          }
          if (jQuery.etag[cacheURL]) {
            jqXHR.setRequestHeader("If-None-Match", jQuery.etag[cacheURL]);
          }
        }
        if (s2.data && s2.hasContent && s2.contentType !== false || options.contentType) {
          jqXHR.setRequestHeader("Content-Type", s2.contentType);
        }
        jqXHR.setRequestHeader(
          "Accept",
          s2.dataTypes[0] && s2.accepts[s2.dataTypes[0]] ? s2.accepts[s2.dataTypes[0]] + (s2.dataTypes[0] !== "*" ? ", " + allTypes + "; q=0.01" : "") : s2.accepts["*"]
        );
        for (i2 in s2.headers) {
          jqXHR.setRequestHeader(i2, s2.headers[i2]);
        }
        if (s2.beforeSend && (s2.beforeSend.call(callbackContext, jqXHR, s2) === false || completed2)) {
          return jqXHR.abort();
        }
        strAbort = "abort";
        completeDeferred.add(s2.complete);
        jqXHR.done(s2.success);
        jqXHR.fail(s2.error);
        transport = inspectPrefiltersOrTransports(transports, s2, options, jqXHR);
        if (!transport) {
          done(-1, "No Transport");
        } else {
          jqXHR.readyState = 1;
          if (fireGlobals) {
            globalEventContext.trigger("ajaxSend", [jqXHR, s2]);
          }
          if (completed2) {
            return jqXHR;
          }
          if (s2.async && s2.timeout > 0) {
            timeoutTimer = window2.setTimeout(function() {
              jqXHR.abort("timeout");
            }, s2.timeout);
          }
          try {
            completed2 = false;
            transport.send(requestHeaders, done);
          } catch (e2) {
            if (completed2) {
              throw e2;
            }
            done(-1, e2);
          }
        }
        function done(status, nativeStatusText, responses, headers) {
          var isSuccess, success, error, response, modified, statusText = nativeStatusText;
          if (completed2) {
            return;
          }
          completed2 = true;
          if (timeoutTimer) {
            window2.clearTimeout(timeoutTimer);
          }
          transport = void 0;
          responseHeadersString = headers || "";
          jqXHR.readyState = status > 0 ? 4 : 0;
          isSuccess = status >= 200 && status < 300 || status === 304;
          if (responses) {
            response = ajaxHandleResponses(s2, jqXHR, responses);
          }
          if (!isSuccess && jQuery.inArray("script", s2.dataTypes) > -1 && jQuery.inArray("json", s2.dataTypes) < 0) {
            s2.converters["text script"] = function() {
            };
          }
          response = ajaxConvert(s2, response, jqXHR, isSuccess);
          if (isSuccess) {
            if (s2.ifModified) {
              modified = jqXHR.getResponseHeader("Last-Modified");
              if (modified) {
                jQuery.lastModified[cacheURL] = modified;
              }
              modified = jqXHR.getResponseHeader("etag");
              if (modified) {
                jQuery.etag[cacheURL] = modified;
              }
            }
            if (status === 204 || s2.type === "HEAD") {
              statusText = "nocontent";
            } else if (status === 304) {
              statusText = "notmodified";
            } else {
              statusText = response.state;
              success = response.data;
              error = response.error;
              isSuccess = !error;
            }
          } else {
            error = statusText;
            if (status || !statusText) {
              statusText = "error";
              if (status < 0) {
                status = 0;
              }
            }
          }
          jqXHR.status = status;
          jqXHR.statusText = (nativeStatusText || statusText) + "";
          if (isSuccess) {
            deferred.resolveWith(callbackContext, [success, statusText, jqXHR]);
          } else {
            deferred.rejectWith(callbackContext, [jqXHR, statusText, error]);
          }
          jqXHR.statusCode(statusCode);
          statusCode = void 0;
          if (fireGlobals) {
            globalEventContext.trigger(
              isSuccess ? "ajaxSuccess" : "ajaxError",
              [jqXHR, s2, isSuccess ? success : error]
            );
          }
          completeDeferred.fireWith(callbackContext, [jqXHR, statusText]);
          if (fireGlobals) {
            globalEventContext.trigger("ajaxComplete", [jqXHR, s2]);
            if (!--jQuery.active) {
              jQuery.event.trigger("ajaxStop");
            }
          }
        }
        return jqXHR;
      },
      getJSON: function(url, data, callback) {
        return jQuery.get(url, data, callback, "json");
      },
      getScript: function(url, callback) {
        return jQuery.get(url, void 0, callback, "script");
      }
    });
    jQuery.each(["get", "post"], function(_i, method) {
      jQuery[method] = function(url, data, callback, type) {
        if (isFunction2(data)) {
          type = type || callback;
          callback = data;
          data = void 0;
        }
        return jQuery.ajax(jQuery.extend({
          url,
          type: method,
          dataType: type,
          data,
          success: callback
        }, jQuery.isPlainObject(url) && url));
      };
    });
    jQuery.ajaxPrefilter(function(s2) {
      var i2;
      for (i2 in s2.headers) {
        if (i2.toLowerCase() === "content-type") {
          s2.contentType = s2.headers[i2] || "";
        }
      }
    });
    jQuery._evalUrl = function(url, options, doc) {
      return jQuery.ajax({
        url,
        type: "GET",
        dataType: "script",
        cache: true,
        async: false,
        global: false,
        converters: {
          "text script": function() {
          }
        },
        dataFilter: function(response) {
          jQuery.globalEval(response, options, doc);
        }
      });
    };
    jQuery.fn.extend({
      wrapAll: function(html2) {
        var wrap;
        if (this[0]) {
          if (isFunction2(html2)) {
            html2 = html2.call(this[0]);
          }
          wrap = jQuery(html2, this[0].ownerDocument).eq(0).clone(true);
          if (this[0].parentNode) {
            wrap.insertBefore(this[0]);
          }
          wrap.map(function() {
            var elem = this;
            while (elem.firstElementChild) {
              elem = elem.firstElementChild;
            }
            return elem;
          }).append(this);
        }
        return this;
      },
      wrapInner: function(html2) {
        if (isFunction2(html2)) {
          return this.each(function(i2) {
            jQuery(this).wrapInner(html2.call(this, i2));
          });
        }
        return this.each(function() {
          var self2 = jQuery(this), contents = self2.contents();
          if (contents.length) {
            contents.wrapAll(html2);
          } else {
            self2.append(html2);
          }
        });
      },
      wrap: function(html2) {
        var htmlIsFunction = isFunction2(html2);
        return this.each(function(i2) {
          jQuery(this).wrapAll(htmlIsFunction ? html2.call(this, i2) : html2);
        });
      },
      unwrap: function(selector) {
        this.parent(selector).not("body").each(function() {
          jQuery(this).replaceWith(this.childNodes);
        });
        return this;
      }
    });
    jQuery.expr.pseudos.hidden = function(elem) {
      return !jQuery.expr.pseudos.visible(elem);
    };
    jQuery.expr.pseudos.visible = function(elem) {
      return !!(elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length);
    };
    jQuery.ajaxSettings.xhr = function() {
      try {
        return new window2.XMLHttpRequest();
      } catch (e2) {
      }
    };
    var xhrSuccessStatus = {
      0: 200,
      1223: 204
    }, xhrSupported = jQuery.ajaxSettings.xhr();
    support.cors = !!xhrSupported && "withCredentials" in xhrSupported;
    support.ajax = xhrSupported = !!xhrSupported;
    jQuery.ajaxTransport(function(options) {
      var callback, errorCallback;
      if (support.cors || xhrSupported && !options.crossDomain) {
        return {
          send: function(headers, complete) {
            var i2, xhr = options.xhr();
            xhr.open(
              options.type,
              options.url,
              options.async,
              options.username,
              options.password
            );
            if (options.xhrFields) {
              for (i2 in options.xhrFields) {
                xhr[i2] = options.xhrFields[i2];
              }
            }
            if (options.mimeType && xhr.overrideMimeType) {
              xhr.overrideMimeType(options.mimeType);
            }
            if (!options.crossDomain && !headers["X-Requested-With"]) {
              headers["X-Requested-With"] = "XMLHttpRequest";
            }
            for (i2 in headers) {
              xhr.setRequestHeader(i2, headers[i2]);
            }
            callback = function(type) {
              return function() {
                if (callback) {
                  callback = errorCallback = xhr.onload = xhr.onerror = xhr.onabort = xhr.ontimeout = xhr.onreadystatechange = null;
                  if (type === "abort") {
                    xhr.abort();
                  } else if (type === "error") {
                    if (typeof xhr.status !== "number") {
                      complete(0, "error");
                    } else {
                      complete(
                        xhr.status,
                        xhr.statusText
                      );
                    }
                  } else {
                    complete(
                      xhrSuccessStatus[xhr.status] || xhr.status,
                      xhr.statusText,
                      (xhr.responseType || "text") !== "text" || typeof xhr.responseText !== "string" ? { binary: xhr.response } : { text: xhr.responseText },
                      xhr.getAllResponseHeaders()
                    );
                  }
                }
              };
            };
            xhr.onload = callback();
            errorCallback = xhr.onerror = xhr.ontimeout = callback("error");
            if (xhr.onabort !== void 0) {
              xhr.onabort = errorCallback;
            } else {
              xhr.onreadystatechange = function() {
                if (xhr.readyState === 4) {
                  window2.setTimeout(function() {
                    if (callback) {
                      errorCallback();
                    }
                  });
                }
              };
            }
            callback = callback("abort");
            try {
              xhr.send(options.hasContent && options.data || null);
            } catch (e2) {
              if (callback) {
                throw e2;
              }
            }
          },
          abort: function() {
            if (callback) {
              callback();
            }
          }
        };
      }
    });
    jQuery.ajaxPrefilter(function(s2) {
      if (s2.crossDomain) {
        s2.contents.script = false;
      }
    });
    jQuery.ajaxSetup({
      accepts: {
        script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
      },
      contents: {
        script: /\b(?:java|ecma)script\b/
      },
      converters: {
        "text script": function(text2) {
          jQuery.globalEval(text2);
          return text2;
        }
      }
    });
    jQuery.ajaxPrefilter("script", function(s2) {
      if (s2.cache === void 0) {
        s2.cache = false;
      }
      if (s2.crossDomain) {
        s2.type = "GET";
      }
    });
    jQuery.ajaxTransport("script", function(s2) {
      if (s2.crossDomain || s2.scriptAttrs) {
        var script, callback;
        return {
          send: function(_2, complete) {
            script = jQuery("<script>").attr(s2.scriptAttrs || {}).prop({ charset: s2.scriptCharset, src: s2.url }).on("load error", callback = function(evt) {
              script.remove();
              callback = null;
              if (evt) {
                complete(evt.type === "error" ? 404 : 200, evt.type);
              }
            });
            document2.head.appendChild(script[0]);
          },
          abort: function() {
            if (callback) {
              callback();
            }
          }
        };
      }
    });
    var oldCallbacks = [], rjsonp = /(=)\?(?=&|$)|\?\?/;
    jQuery.ajaxSetup({
      jsonp: "callback",
      jsonpCallback: function() {
        var callback = oldCallbacks.pop() || jQuery.expando + "_" + nonce.guid++;
        this[callback] = true;
        return callback;
      }
    });
    jQuery.ajaxPrefilter("json jsonp", function(s2, originalSettings, jqXHR) {
      var callbackName, overwritten, responseContainer, jsonProp = s2.jsonp !== false && (rjsonp.test(s2.url) ? "url" : typeof s2.data === "string" && (s2.contentType || "").indexOf("application/x-www-form-urlencoded") === 0 && rjsonp.test(s2.data) && "data");
      if (jsonProp || s2.dataTypes[0] === "jsonp") {
        callbackName = s2.jsonpCallback = isFunction2(s2.jsonpCallback) ? s2.jsonpCallback() : s2.jsonpCallback;
        if (jsonProp) {
          s2[jsonProp] = s2[jsonProp].replace(rjsonp, "$1" + callbackName);
        } else if (s2.jsonp !== false) {
          s2.url += (rquery.test(s2.url) ? "&" : "?") + s2.jsonp + "=" + callbackName;
        }
        s2.converters["script json"] = function() {
          if (!responseContainer) {
            jQuery.error(callbackName + " was not called");
          }
          return responseContainer[0];
        };
        s2.dataTypes[0] = "json";
        overwritten = window2[callbackName];
        window2[callbackName] = function() {
          responseContainer = arguments;
        };
        jqXHR.always(function() {
          if (overwritten === void 0) {
            jQuery(window2).removeProp(callbackName);
          } else {
            window2[callbackName] = overwritten;
          }
          if (s2[callbackName]) {
            s2.jsonpCallback = originalSettings.jsonpCallback;
            oldCallbacks.push(callbackName);
          }
          if (responseContainer && isFunction2(overwritten)) {
            overwritten(responseContainer[0]);
          }
          responseContainer = overwritten = void 0;
        });
        return "script";
      }
    });
    support.createHTMLDocument = function() {
      var body = document2.implementation.createHTMLDocument("").body;
      body.innerHTML = "<form></form><form></form>";
      return body.childNodes.length === 2;
    }();
    jQuery.parseHTML = function(data, context, keepScripts) {
      if (typeof data !== "string") {
        return [];
      }
      if (typeof context === "boolean") {
        keepScripts = context;
        context = false;
      }
      var base, parsed, scripts;
      if (!context) {
        if (support.createHTMLDocument) {
          context = document2.implementation.createHTMLDocument("");
          base = context.createElement("base");
          base.href = document2.location.href;
          context.head.appendChild(base);
        } else {
          context = document2;
        }
      }
      parsed = rsingleTag.exec(data);
      scripts = !keepScripts && [];
      if (parsed) {
        return [context.createElement(parsed[1])];
      }
      parsed = buildFragment([data], context, scripts);
      if (scripts && scripts.length) {
        jQuery(scripts).remove();
      }
      return jQuery.merge([], parsed.childNodes);
    };
    jQuery.fn.load = function(url, params, callback) {
      var selector, type, response, self2 = this, off = url.indexOf(" ");
      if (off > -1) {
        selector = stripAndCollapse(url.slice(off));
        url = url.slice(0, off);
      }
      if (isFunction2(params)) {
        callback = params;
        params = void 0;
      } else if (params && typeof params === "object") {
        type = "POST";
      }
      if (self2.length > 0) {
        jQuery.ajax({
          url,
          type: type || "GET",
          dataType: "html",
          data: params
        }).done(function(responseText) {
          response = arguments;
          self2.html(selector ? jQuery("<div>").append(jQuery.parseHTML(responseText)).find(selector) : responseText);
        }).always(callback && function(jqXHR, status) {
          self2.each(function() {
            callback.apply(this, response || [jqXHR.responseText, status, jqXHR]);
          });
        });
      }
      return this;
    };
    jQuery.expr.pseudos.animated = function(elem) {
      return jQuery.grep(jQuery.timers, function(fn2) {
        return elem === fn2.elem;
      }).length;
    };
    jQuery.offset = {
      setOffset: function(elem, options, i2) {
        var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition, position = jQuery.css(elem, "position"), curElem = jQuery(elem), props = {};
        if (position === "static") {
          elem.style.position = "relative";
        }
        curOffset = curElem.offset();
        curCSSTop = jQuery.css(elem, "top");
        curCSSLeft = jQuery.css(elem, "left");
        calculatePosition = (position === "absolute" || position === "fixed") && (curCSSTop + curCSSLeft).indexOf("auto") > -1;
        if (calculatePosition) {
          curPosition = curElem.position();
          curTop = curPosition.top;
          curLeft = curPosition.left;
        } else {
          curTop = parseFloat(curCSSTop) || 0;
          curLeft = parseFloat(curCSSLeft) || 0;
        }
        if (isFunction2(options)) {
          options = options.call(elem, i2, jQuery.extend({}, curOffset));
        }
        if (options.top != null) {
          props.top = options.top - curOffset.top + curTop;
        }
        if (options.left != null) {
          props.left = options.left - curOffset.left + curLeft;
        }
        if ("using" in options) {
          options.using.call(elem, props);
        } else {
          curElem.css(props);
        }
      }
    };
    jQuery.fn.extend({
      offset: function(options) {
        if (arguments.length) {
          return options === void 0 ? this : this.each(function(i2) {
            jQuery.offset.setOffset(this, options, i2);
          });
        }
        var rect, win, elem = this[0];
        if (!elem) {
          return;
        }
        if (!elem.getClientRects().length) {
          return { top: 0, left: 0 };
        }
        rect = elem.getBoundingClientRect();
        win = elem.ownerDocument.defaultView;
        return {
          top: rect.top + win.pageYOffset,
          left: rect.left + win.pageXOffset
        };
      },
      position: function() {
        if (!this[0]) {
          return;
        }
        var offsetParent, offset, doc, elem = this[0], parentOffset = { top: 0, left: 0 };
        if (jQuery.css(elem, "position") === "fixed") {
          offset = elem.getBoundingClientRect();
        } else {
          offset = this.offset();
          doc = elem.ownerDocument;
          offsetParent = elem.offsetParent || doc.documentElement;
          while (offsetParent && (offsetParent === doc.body || offsetParent === doc.documentElement) && jQuery.css(offsetParent, "position") === "static") {
            offsetParent = offsetParent.parentNode;
          }
          if (offsetParent && offsetParent !== elem && offsetParent.nodeType === 1) {
            parentOffset = jQuery(offsetParent).offset();
            parentOffset.top += jQuery.css(offsetParent, "borderTopWidth", true);
            parentOffset.left += jQuery.css(offsetParent, "borderLeftWidth", true);
          }
        }
        return {
          top: offset.top - parentOffset.top - jQuery.css(elem, "marginTop", true),
          left: offset.left - parentOffset.left - jQuery.css(elem, "marginLeft", true)
        };
      },
      offsetParent: function() {
        return this.map(function() {
          var offsetParent = this.offsetParent;
          while (offsetParent && jQuery.css(offsetParent, "position") === "static") {
            offsetParent = offsetParent.offsetParent;
          }
          return offsetParent || documentElement;
        });
      }
    });
    jQuery.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function(method, prop) {
      var top = "pageYOffset" === prop;
      jQuery.fn[method] = function(val) {
        return access(this, function(elem, method2, val2) {
          var win;
          if (isWindow(elem)) {
            win = elem;
          } else if (elem.nodeType === 9) {
            win = elem.defaultView;
          }
          if (val2 === void 0) {
            return win ? win[prop] : elem[method2];
          }
          if (win) {
            win.scrollTo(
              !top ? val2 : win.pageXOffset,
              top ? val2 : win.pageYOffset
            );
          } else {
            elem[method2] = val2;
          }
        }, method, val, arguments.length);
      };
    });
    jQuery.each(["top", "left"], function(_i, prop) {
      jQuery.cssHooks[prop] = addGetHookIf(
        support.pixelPosition,
        function(elem, computed) {
          if (computed) {
            computed = curCSS(elem, prop);
            return rnumnonpx.test(computed) ? jQuery(elem).position()[prop] + "px" : computed;
          }
        }
      );
    });
    jQuery.each({ Height: "height", Width: "width" }, function(name, type) {
      jQuery.each({
        padding: "inner" + name,
        content: type,
        "": "outer" + name
      }, function(defaultExtra, funcName) {
        jQuery.fn[funcName] = function(margin, value) {
          var chainable = arguments.length && (defaultExtra || typeof margin !== "boolean"), extra = defaultExtra || (margin === true || value === true ? "margin" : "border");
          return access(this, function(elem, type2, value2) {
            var doc;
            if (isWindow(elem)) {
              return funcName.indexOf("outer") === 0 ? elem["inner" + name] : elem.document.documentElement["client" + name];
            }
            if (elem.nodeType === 9) {
              doc = elem.documentElement;
              return Math.max(
                elem.body["scroll" + name],
                doc["scroll" + name],
                elem.body["offset" + name],
                doc["offset" + name],
                doc["client" + name]
              );
            }
            return value2 === void 0 ? jQuery.css(elem, type2, extra) : jQuery.style(elem, type2, value2, extra);
          }, type, chainable ? margin : void 0, chainable);
        };
      });
    });
    jQuery.each([
      "ajaxStart",
      "ajaxStop",
      "ajaxComplete",
      "ajaxError",
      "ajaxSuccess",
      "ajaxSend"
    ], function(_i, type) {
      jQuery.fn[type] = function(fn2) {
        return this.on(type, fn2);
      };
    });
    jQuery.fn.extend({
      bind: function(types, data, fn2) {
        return this.on(types, null, data, fn2);
      },
      unbind: function(types, fn2) {
        return this.off(types, null, fn2);
      },
      delegate: function(selector, types, data, fn2) {
        return this.on(types, selector, data, fn2);
      },
      undelegate: function(selector, types, fn2) {
        return arguments.length === 1 ? this.off(selector, "**") : this.off(types, selector || "**", fn2);
      },
      hover: function(fnOver, fnOut) {
        return this.mouseenter(fnOver).mouseleave(fnOut || fnOver);
      }
    });
    jQuery.each(
      "blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),
      function(_i, name) {
        jQuery.fn[name] = function(data, fn2) {
          return arguments.length > 0 ? this.on(name, null, data, fn2) : this.trigger(name);
        };
      }
    );
    var rtrim = /^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;
    jQuery.proxy = function(fn2, context) {
      var tmp, args, proxy;
      if (typeof context === "string") {
        tmp = fn2[context];
        context = fn2;
        fn2 = tmp;
      }
      if (!isFunction2(fn2)) {
        return void 0;
      }
      args = slice.call(arguments, 2);
      proxy = function() {
        return fn2.apply(context || this, args.concat(slice.call(arguments)));
      };
      proxy.guid = fn2.guid = fn2.guid || jQuery.guid++;
      return proxy;
    };
    jQuery.holdReady = function(hold) {
      if (hold) {
        jQuery.readyWait++;
      } else {
        jQuery.ready(true);
      }
    };
    jQuery.isArray = Array.isArray;
    jQuery.parseJSON = JSON.parse;
    jQuery.nodeName = nodeName;
    jQuery.isFunction = isFunction2;
    jQuery.isWindow = isWindow;
    jQuery.camelCase = camelCase;
    jQuery.type = toType;
    jQuery.now = Date.now;
    jQuery.isNumeric = function(obj) {
      var type = jQuery.type(obj);
      return (type === "number" || type === "string") && !isNaN(obj - parseFloat(obj));
    };
    jQuery.trim = function(text2) {
      return text2 == null ? "" : (text2 + "").replace(rtrim, "$1");
    };
    var _jQuery = window2.jQuery, _$ = window2.$;
    jQuery.noConflict = function(deep) {
      if (window2.$ === jQuery) {
        window2.$ = _$;
      }
      if (deep && window2.jQuery === jQuery) {
        window2.jQuery = _jQuery;
      }
      return jQuery;
    };
    if (typeof noGlobal === "undefined") {
      window2.jQuery = window2.$ = jQuery;
    }
    return jQuery;
  });
})(jquery);
var $ = jquery.exports;
const classNames$h = {
  popupContainer: cls("popup-container"),
  detailContainer: cls("detail-container"),
  topLine: cls("popup-top-line"),
  border: cls("popup-arrow-border"),
  fill: cls("popup-arrow-fill"),
  sectionButton: cls("popup-section", "section-button"),
  content: cls("content"),
  editIcon: cls("icon", "ic-edit"),
  deleteIcon: cls("icon", "ic-delete"),
  editButton: cls("edit-button"),
  deleteButton: cls("delete-button"),
  verticalLine: cls("vertical-line")
};
function calculatePopupPosition$1(eventRect, layoutRect, popupRect) {
  let top;
  let left;
  let $body = $("body");
  const bodyClass = $body.attr("class");
  const hasSidebar = bodyClass == null ? void 0 : bodyClass.includes("sidebar-lg-show");
  if (hasSidebar) {
    top = eventRect.top + eventRect.height / 2 - popupRect.height / 2;
    left = eventRect.left + eventRect.width - 255;
  } else {
    top = eventRect.top + eventRect.height / 2 - popupRect.height / 2;
    left = eventRect.left + eventRect.width;
  }
  if (isTopOutOfLayout(top, layoutRect, popupRect)) {
    top = layoutRect.top + layoutRect.height - popupRect.height;
  }
  const popupLeft = eventRect.left + eventRect.width;
  const outLeftLayout = popupLeft + popupRect.width > layoutRect.left + layoutRect.width;
  if (outLeftLayout) {
    left = eventRect.left - popupRect.width;
  }
  return [
    Math.max(top, layoutRect.top) + window.scrollY - 110,
    Math.max(left, layoutRect.left) + window.scrollX - (hasSidebar ? outLeftLayout ? 255 : 25 : outLeftLayout ? 25 : 25)
  ];
}
function calculatePopupArrowPosition(eventRect, layoutRect, popupRect) {
  let top = eventRect.top + eventRect.height / 2 + window.scrollY;
  const popupLeft = eventRect.left + eventRect.width;
  const isOutOfLayout = popupLeft + popupRect.width > layoutRect.left + layoutRect.width;
  const direction = isOutOfLayout ? DetailPopupArrowDirection.right : DetailPopupArrowDirection.left;
  top = top - 110;
  return { top, direction };
}
function EventDetailPopup() {
  var _a, _b, _c, _d;
  const { useFormPopup } = useStore(optionsSelector);
  const popupParams = useStore(eventDetailPopupParamSelector);
  const options = useStore(optionsSelector);
  const { event, eventRect } = popupParams != null ? popupParams : {};
  const { showFormPopup, hideDetailPopup } = useDispatch("popup");
  const calendarColor = useCalendarColor(event);
  const layoutContainer = useLayoutContainer();
  const detailPopupSlot = useFloatingLayer("detailPopupSlot");
  const eventBus = useEventBus();
  const popupContainerRef = _$2(null);
  const [style, setStyle] = h$2({});
  const [arrowTop, setArrowTop] = h$2(0);
  const [arrowDirection, setArrowDirection] = h$2(
    DetailPopupArrowDirection.left
  );
  const popupArrowClassName = F$2(() => {
    const right = arrowDirection === DetailPopupArrowDirection.right;
    const left = arrowDirection === DetailPopupArrowDirection.left;
    return cls("popup-arrow", { right, left });
  }, [arrowDirection]);
  y$2(() => {
    if (popupContainerRef.current && eventRect && layoutContainer) {
      const layoutRect = layoutContainer.getBoundingClientRect();
      const popupRect = popupContainerRef.current.getBoundingClientRect();
      const [top, left] = calculatePopupPosition$1(eventRect, layoutRect, popupRect);
      const { top: arrowTopPosition, direction } = calculatePopupArrowPosition(
        eventRect,
        layoutRect,
        popupRect
      );
      setStyle({ top, left });
      setArrowTop(arrowTopPosition - top - HALF_OF_POPUP_ARROW_HEIGHT);
      setArrowDirection(direction);
    }
  }, [eventRect, layoutContainer]);
  if (isNil(event) || isNil(eventRect) || isNil(detailPopupSlot)) {
    return null;
  }
  const {
    title = "",
    isAllday: isAllday2 = false,
    start = new TZDate(),
    end = new TZDate(),
    location: location2,
    state,
    isReadOnly,
    isPrivate
  } = event;
  const popupArrowPointPosition = {
    top: eventRect.top + eventRect.height / 2,
    left: eventRect.left + eventRect.width / 2
  };
  const onClickEditButton = () => {
    if (useFormPopup) {
      showFormPopup({
        isCreationPopup: false,
        event,
        title,
        location: location2,
        start,
        end,
        isAllday: isAllday2,
        isPrivate,
        eventState: state,
        popupArrowPointPosition
      });
    } else {
      eventBus.fire("beforeUpdateEvent", { event: event.toEventObject(), changes: {} });
    }
  };
  const onClickDeleteButton = (url, token2) => {
    const formdata = new FormData();
    formdata.append("_token", token2);
    swal({
      title: "Warning",
      text: "Are you sure you want to delete this item?",
      icon: "warning",
      buttons: ["Cancel", "Delete"],
      dangerMode: true
    }).then((value) => {
      if (value) {
        fetch(url, {
          method: "DELETE",
          body: formdata,
          headers: {
            "X-CSRF-TOKEN": token2
          }
        }).then((resp) => {
          eventBus.fire("beforeDeleteEvent", event.toEventObject());
        });
      }
    });
    hideDetailPopup();
  };
  const userData = ((_a = options == null ? void 0 : options.allOptions) == null ? void 0 : _a.userData) || null;
  const token = (_b = options == null ? void 0 : options.allOptions) == null ? void 0 : _b.token;
  const backpackUrl = (_c = options == null ? void 0 : options.allOptions) == null ? void 0 : _c.backpackUrl;
  const templateCsvUrl = (_d = options == null ? void 0 : options.allOptions) == null ? void 0 : _d.templateCsvUrl;
  const editUrl = `${backpackUrl}/collab-event/${event.id}/edit`;
  const deleteURl = `${backpackUrl}/collab-event/${event.id}`;
  const eventId = event == null ? void 0 : event.id;
  return z(
    /* @__PURE__ */ y$3("div", {
      role: "dialog",
      className: classNames$h.popupContainer,
      ref: popupContainerRef,
      style
    }, /* @__PURE__ */ y$3("div", {
      className: classNames$h.detailContainer
    }, /* @__PURE__ */ y$3(EventDetailSectionHeader, {
      event,
      userData,
      backpackUrl,
      templateCsvUrl
    }), /* @__PURE__ */ y$3(EventDetailSectionDetail, {
      event,
      userData,
      backpackUrl
    }), !isReadOnly && /* @__PURE__ */ y$3("div", {
      className: classNames$h.sectionButton
    }, /* @__PURE__ */ y$3("a", {
      href: editUrl
    }, /* @__PURE__ */ y$3("button", {
      type: "button",
      className: classNames$h.editButton,
      onClick: onClickEditButton
    }, /* @__PURE__ */ y$3("span", {
      className: classNames$h.editIcon
    }), /* @__PURE__ */ y$3("span", {
      className: classNames$h.content
    }, /* @__PURE__ */ y$3(Template, {
      template: "popupEdit",
      as: "span"
    })))), /* @__PURE__ */ y$3("div", {
      className: classNames$h.verticalLine
    }), /* @__PURE__ */ y$3("button", {
      type: "button",
      className: classNames$h.deleteButton,
      onClick: () => onClickDeleteButton(deleteURl, token)
    }, /* @__PURE__ */ y$3("span", {
      className: classNames$h.deleteIcon
    }), /* @__PURE__ */ y$3("span", {
      className: classNames$h.content
    }, /* @__PURE__ */ y$3(Template, {
      template: "popupDelete",
      as: "span"
    })))), /* @__PURE__ */ y$3("div", {
      className: "row"
    }, /* @__PURE__ */ y$3("div", {
      className: "d-print-none with-border col d-flex justify-content-center align-items-center",
      style: { minWidth: "155px" }
    }, /* @__PURE__ */ y$3("a", {
      href: backpackUrl + '/collab-registration?event=%5B"' + eventId + '"%5D',
      className: "btn btn-primary",
      "data-style": "zoom-in",
      style: { width: "100%" }
    }, /* @__PURE__ */ y$3("span", {
      class: "ladda-label"
    }, "See Registrations"))), /* @__PURE__ */ y$3("div", {
      className: "d-print-none with-border d-flex col d-flex justify-content-center align-items-center",
      style: { minWidth: "155px" }
    }, /* @__PURE__ */ y$3("a", {
      href: backpackUrl + "/registrationImportView?event_id=" + eventId,
      className: "btn btn-primary",
      "data-style": "zoom-in",
      style: { width: "100%" }
    }, /* @__PURE__ */ y$3("span", {
      class: "ladda-label"
    }, "Bulk Upload (CSV)")))), /* @__PURE__ */ y$3("div", {
      className: "d-print-none with-border d-flex justify-content-center align-items-center",
      style: { minWidth: "155px", marginTop: "10px", marginBottom: "10px" }
    }, /* @__PURE__ */ y$3("a", {
      href: templateCsvUrl,
      class: "btn btn-primary",
      "data-style": "zoom-in",
      style: { width: "100%" }
    }, /* @__PURE__ */ y$3("span", {
      className: "ladda-label"
    }, "Download Bulk Upload Template (CSV)")))), /* @__PURE__ */ y$3("div", {
      className: classNames$h.topLine,
      style: { background: calendarColor.backgroundColor }
    }), /* @__PURE__ */ y$3("div", {
      className: popupArrowClassName
    }, /* @__PURE__ */ y$3("div", {
      className: classNames$h.border,
      style: { top: arrowTop }
    }, /* @__PURE__ */ y$3("div", {
      className: classNames$h.fill
    })))),
    detailPopupSlot
  );
}
const classNames$g = {
  dropdownMenu: cls("dropdown-menu"),
  dropdownMenuItem: cls("dropdown-menu-item"),
  dotIcon: cls("icon", "dot"),
  content: cls("content")
};
function DropdownMenuItem({ index, name, backgroundColor, onClick }) {
  return /* @__PURE__ */ y$3("li", {
    className: classNames$g.dropdownMenuItem,
    onClick: (e2) => onClick(e2, index)
  }, /* @__PURE__ */ y$3("span", {
    className: classNames$g.dotIcon,
    style: { backgroundColor }
  }), /* @__PURE__ */ y$3("span", {
    className: classNames$g.content
  }, name));
}
function CalendarDropdownMenu({ calendars, setOpened, onChangeIndex }) {
  const handleDropdownMenuItemClick = (e2, index) => {
    e2.stopPropagation();
    setOpened(false);
    onChangeIndex(index);
  };
  return /* @__PURE__ */ y$3("ul", {
    className: classNames$g.dropdownMenu
  }, calendars.map(({ name, backgroundColor = "000" }, index) => /* @__PURE__ */ y$3(DropdownMenuItem, {
    key: `dropdown-${name}-${index}`,
    index,
    name,
    backgroundColor,
    onClick: handleDropdownMenuItemClick
  })));
}
function PopupSection({
  children,
  classNames: classNames2 = [],
  onClick = noop
}) {
  return /* @__PURE__ */ y$3("div", {
    className: cls("popup-section", ...classNames2),
    onClick
  }, children);
}
function useDropdownState() {
  const [isOpened, setOpened] = h$2(false);
  const toggleDropdown = () => setOpened((prev) => !prev);
  return { isOpened, setOpened, toggleDropdown };
}
var FormStateActionType = /* @__PURE__ */ ((FormStateActionType2) => {
  FormStateActionType2["init"] = "init";
  FormStateActionType2["setCalendarId"] = "setCalendarId";
  FormStateActionType2["setTitle"] = "setTitle";
  FormStateActionType2["setLocation"] = "setLocation";
  FormStateActionType2["setPrivate"] = "setPrivate";
  FormStateActionType2["setAllday"] = "setAllday";
  FormStateActionType2["setState"] = "setState";
  FormStateActionType2["reset"] = "reset";
  return FormStateActionType2;
})(FormStateActionType || {});
const defaultFormState = {
  title: "",
  location: "",
  isAllday: false,
  isPrivate: false,
  state: "Busy"
};
function formStateReducer(state, action) {
  switch (action.type) {
    case "init":
      return __spreadValues(__spreadValues({}, defaultFormState), action.event);
    case "setCalendarId":
      return __spreadProps(__spreadValues({}, state), { calendarId: action.calendarId });
    case "setTitle":
      return __spreadProps(__spreadValues({}, state), { title: action.title });
    case "setLocation":
      return __spreadProps(__spreadValues({}, state), { location: action.location });
    case "setPrivate":
      return __spreadProps(__spreadValues({}, state), { isPrivate: action.isPrivate });
    case "setAllday":
      return __spreadProps(__spreadValues({}, state), { isAllday: action.isAllday });
    case "setState":
      return __spreadProps(__spreadValues({}, state), { state: action.state });
    case "reset":
      return __spreadValues(__spreadValues({}, state), defaultFormState);
    default:
      return state;
  }
}
function useFormState(initCalendarId) {
  return s$2(formStateReducer, __spreadValues({ calendarId: initCalendarId }, defaultFormState));
}
const classNames$f = {
  popupSection: ["dropdown-section", "calendar-section"],
  popupSectionItem: cls("popup-section-item", "popup-button"),
  dotIcon: cls("icon", "dot"),
  content: cls("content", "event-calendar")
};
function CalendarSelector({ calendars, selectedCalendarId, formStateDispatch }) {
  const { isOpened, setOpened, toggleDropdown } = useDropdownState();
  const selectedCalendar = calendars.find((calendar) => calendar.id === selectedCalendarId);
  const { backgroundColor = "", name = "" } = selectedCalendar != null ? selectedCalendar : {};
  const changeIndex = (index) => formStateDispatch({ type: FormStateActionType.setCalendarId, calendarId: calendars[index].id });
  return /* @__PURE__ */ y$3(PopupSection, {
    onClick: toggleDropdown,
    classNames: classNames$f.popupSection
  }, /* @__PURE__ */ y$3("button", {
    type: "button",
    className: classNames$f.popupSectionItem
  }, /* @__PURE__ */ y$3("span", {
    className: classNames$f.dotIcon,
    style: { backgroundColor }
  }), /* @__PURE__ */ y$3("span", {
    className: classNames$f.content
  }, name), /* @__PURE__ */ y$3("span", {
    className: cls("icon", "ic-dropdown-arrow", { open: isOpened })
  })), isOpened && /* @__PURE__ */ y$3(CalendarDropdownMenu, {
    calendars,
    setOpened,
    onChangeIndex: changeIndex
  }));
}
const classNames$e = {
  closeButton: cls("popup-button", "popup-close"),
  closeIcon: cls("icon", "ic-close")
};
function ClosePopupButton({ type, close }) {
  const { hideAllPopup } = useDispatch("popup");
  const onClickHandler = () => {
    hideAllPopup();
    if (isFunction$2(close)) {
      close();
    }
  };
  return /* @__PURE__ */ y$3("button", {
    type: "button",
    className: classNames$e.closeButton,
    onClick: onClickHandler
  }, type === "moreEvents" ? /* @__PURE__ */ y$3(Template, {
    template: "monthMoreClose"
  }) : /* @__PURE__ */ y$3("i", {
    className: classNames$e.closeIcon
  }));
}
const classNames$d = {
  confirmButton: cls("popup-button", "popup-confirm")
};
function ConfirmPopupButton({ children }) {
  return /* @__PURE__ */ y$3("button", {
    type: "submit",
    className: classNames$d.confirmButton
  }, /* @__PURE__ */ y$3("span", null, children));
}
function useStringOnlyTemplate({
  template,
  model,
  defaultValue = ""
}) {
  const templates2 = useStore(templateSelector);
  const templateFunc = templates2[template];
  if (isNil(templateFunc)) {
    return defaultValue;
  }
  let result = templateFunc(model);
  if (!isString_1(result)) {
    result = defaultValue;
  }
  return result;
}
const classNames$c = {
  datePickerContainer: cls("datepicker-container"),
  datePicker: cls("popup-section-item", "popup-date-picker"),
  allday: cls("popup-section-item", "popup-section-allday"),
  dateIcon: cls("icon", "ic-date"),
  dateDash: cls("popup-date-dash"),
  content: cls("content")
};
const DateSelector = k$1(function DateSelector2({ start, end, isAllday: isAllday2 = false, formStateDispatch }, ref) {
  const { usageStatistics } = useStore(optionsSelector);
  const startPickerContainerRef = _$2(null);
  const startPickerInputRef = _$2(null);
  const endPickerContainerRef = _$2(null);
  const endPickerInputRef = _$2(null);
  const startDatePlaceholder = useStringOnlyTemplate({
    template: "startDatePlaceholder",
    defaultValue: "Start Date"
  });
  const endDatePlaceholder = useStringOnlyTemplate({
    template: "endDatePlaceholder",
    defaultValue: "End Date"
  });
  const toggleAllday = () => formStateDispatch({ type: FormStateActionType.setAllday, isAllday: !isAllday2 });
  p$2(() => {
    if (startPickerContainerRef.current && startPickerInputRef.current && endPickerContainerRef.current && endPickerInputRef.current) {
      const startDate = new TZDate(start);
      const endDate = new TZDate(end);
      if (isAllday2) {
        startDate.setHours(12, 0, 0);
        endDate.setHours(13, 0, 0);
      }
      ref.current = DatePicker.createRangePicker({
        startpicker: {
          date: startDate.toDate(),
          input: startPickerInputRef.current,
          container: startPickerContainerRef.current
        },
        endpicker: {
          date: endDate.toDate(),
          input: endPickerInputRef.current,
          container: endPickerContainerRef.current
        },
        format: isAllday2 ? "yyyy-MM-dd" : "yyyy-MM-dd HH:mm",
        timePicker: isAllday2 ? false : {
          showMeridiem: false,
          usageStatistics
        },
        usageStatistics
      });
    }
  }, [start, end, isAllday2, usageStatistics, ref]);
  return /* @__PURE__ */ y$3(PopupSection, null, /* @__PURE__ */ y$3("div", {
    className: classNames$c.datePicker
  }, /* @__PURE__ */ y$3("span", {
    className: classNames$c.dateIcon
  }), /* @__PURE__ */ y$3("input", {
    name: "start",
    className: classNames$c.content,
    placeholder: startDatePlaceholder,
    ref: startPickerInputRef
  }), /* @__PURE__ */ y$3("div", {
    className: classNames$c.datePickerContainer,
    ref: startPickerContainerRef
  })), /* @__PURE__ */ y$3("span", {
    className: classNames$c.dateDash
  }, "-"), /* @__PURE__ */ y$3("div", {
    className: classNames$c.datePicker
  }, /* @__PURE__ */ y$3("span", {
    className: classNames$c.dateIcon
  }), /* @__PURE__ */ y$3("input", {
    name: "end",
    className: classNames$c.content,
    placeholder: endDatePlaceholder,
    ref: endPickerInputRef
  }), /* @__PURE__ */ y$3("div", {
    className: classNames$c.datePickerContainer,
    ref: endPickerContainerRef
  })), /* @__PURE__ */ y$3("div", {
    className: classNames$c.allday,
    onClick: toggleAllday
  }, /* @__PURE__ */ y$3("span", {
    className: cls("icon", {
      "ic-checkbox-normal": !isAllday2,
      "ic-checkbox-checked": isAllday2
    })
  }), /* @__PURE__ */ y$3("span", {
    className: classNames$c.content
  }, /* @__PURE__ */ y$3(Template, {
    template: "popupIsAllday"
  })), /* @__PURE__ */ y$3("input", {
    name: "isAllday",
    type: "checkbox",
    className: cls("hidden-input"),
    value: isAllday2 ? "true" : "false",
    checked: isAllday2
  })));
});
const EVENT_STATES = ["Busy", "Free"];
const classNames$b = {
  popupSectionItem: cls("popup-section-item", "dropdown-menu-item"),
  dropdownMenu: cls("dropdown-menu"),
  icon: cls("icon"),
  content: cls("content")
};
function StateDropdownMenu({ setOpened, setEventState }) {
  const onClickDropdown = (e2, state) => {
    e2.stopPropagation();
    setOpened(false);
    setEventState(state);
  };
  return /* @__PURE__ */ y$3("ul", {
    className: classNames$b.dropdownMenu
  }, EVENT_STATES.map((state) => /* @__PURE__ */ y$3("li", {
    key: state,
    className: classNames$b.popupSectionItem,
    onClick: (e2) => onClickDropdown(e2, state)
  }, /* @__PURE__ */ y$3("span", {
    className: classNames$b.icon
  }), /* @__PURE__ */ y$3("span", {
    className: classNames$b.content
  }, state === "Busy" ? /* @__PURE__ */ y$3(Template, {
    template: "popupStateBusy"
  }) : /* @__PURE__ */ y$3(Template, {
    template: "popupStateFree"
  })))));
}
const classNames$a = {
  popupSection: ["dropdown-section", "state-section"],
  popupSectionItem: cls("popup-section-item", "popup-button"),
  stateIcon: cls("icon", "ic-state"),
  arrowIcon: cls("icon", "ic-dropdown-arrow"),
  content: cls("content", "event-state")
};
function EventStateSelector({ eventState = "Busy", formStateDispatch }) {
  const { isOpened, setOpened, toggleDropdown } = useDropdownState();
  const handleChangeEventState = (state) => formStateDispatch({ type: FormStateActionType.setState, state });
  return /* @__PURE__ */ y$3(PopupSection, {
    onClick: toggleDropdown,
    classNames: classNames$a.popupSection
  }, /* @__PURE__ */ y$3("button", {
    type: "button",
    className: classNames$a.popupSectionItem
  }, /* @__PURE__ */ y$3("span", {
    className: classNames$a.stateIcon
  }), /* @__PURE__ */ y$3("span", {
    className: classNames$a.content
  }, eventState === "Busy" ? /* @__PURE__ */ y$3(Template, {
    template: "popupStateBusy"
  }) : /* @__PURE__ */ y$3(Template, {
    template: "popupStateFree"
  })), /* @__PURE__ */ y$3("span", {
    className: classNames$a.arrowIcon
  })), isOpened && /* @__PURE__ */ y$3(StateDropdownMenu, {
    setOpened,
    setEventState: handleChangeEventState
  }));
}
const classNames$9 = {
  popupSectionItem: cls("popup-section-item", "popup-section-location"),
  locationIcon: cls("icon", "ic-location"),
  content: cls("content")
};
function LocationInputBox({ location: location2, formStateDispatch }) {
  const locationPlaceholder = useStringOnlyTemplate({
    template: "locationPlaceholder",
    defaultValue: "Location"
  });
  const handleLocationChange = (e2) => {
    formStateDispatch({ type: FormStateActionType.setLocation, location: e2.currentTarget.value });
  };
  return /* @__PURE__ */ y$3(PopupSection, null, /* @__PURE__ */ y$3("div", {
    className: classNames$9.popupSectionItem
  }, /* @__PURE__ */ y$3("span", {
    className: classNames$9.locationIcon
  }), /* @__PURE__ */ y$3("input", {
    name: "location",
    className: classNames$9.content,
    placeholder: locationPlaceholder,
    value: location2,
    onChange: handleLocationChange
  })));
}
const classNames$8 = {
  popupSectionItem: cls("popup-section-item", "popup-section-title"),
  privateButton: cls("popup-section-item", "popup-section-private", "popup-button"),
  titleIcon: cls("icon", "ic-title"),
  content: cls("content")
};
function TitleInputBox({ title, isPrivate = false, formStateDispatch }) {
  const titlePlaceholder = useStringOnlyTemplate({
    template: "titlePlaceholder",
    defaultValue: "Subject"
  });
  const togglePrivate = () => formStateDispatch({ type: FormStateActionType.setPrivate, isPrivate: !isPrivate });
  const handleInputChange = (e2) => {
    formStateDispatch({ type: FormStateActionType.setTitle, title: e2.currentTarget.value });
  };
  return /* @__PURE__ */ y$3(PopupSection, null, /* @__PURE__ */ y$3("div", {
    className: classNames$8.popupSectionItem
  }, /* @__PURE__ */ y$3("span", {
    className: classNames$8.titleIcon
  }), /* @__PURE__ */ y$3("input", {
    name: "title",
    className: classNames$8.content,
    placeholder: titlePlaceholder,
    value: title,
    onChange: handleInputChange,
    required: true
  })), /* @__PURE__ */ y$3("button", {
    type: "button",
    className: classNames$8.privateButton,
    onClick: togglePrivate
  }, /* @__PURE__ */ y$3("span", {
    className: cls("icon", { "ic-private": isPrivate, "ic-public": !isPrivate })
  }), /* @__PURE__ */ y$3("input", {
    name: "isPrivate",
    type: "checkbox",
    className: cls("hidden-input"),
    value: isPrivate ? "true" : "false",
    checked: isPrivate
  })));
}
const classNames$7 = {
  popupContainer: cls("popup-container"),
  formContainer: cls("form-container"),
  popupArrowBorder: cls("popup-arrow-border"),
  popupArrowFill: cls("popup-arrow-fill")
};
function calculatePopupPosition(popupArrowPointPosition, layoutRect, popupRect) {
  let top = popupArrowPointPosition.top - popupRect.height - HALF_OF_POPUP_ARROW_HEIGHT;
  let left = popupArrowPointPosition.left - popupRect.width / 2;
  let direction = FormPopupArrowDirection.bottom;
  if (top < layoutRect.top) {
    direction = FormPopupArrowDirection.top;
    top = popupArrowPointPosition.top + HALF_OF_POPUP_ARROW_HEIGHT;
  }
  if (isTopOutOfLayout(top, layoutRect, popupRect)) {
    top = layoutRect.top + layoutRect.height - popupRect.height;
  }
  if (isLeftOutOfLayout(left, layoutRect, popupRect)) {
    left = layoutRect.left + layoutRect.width - popupRect.width;
  }
  return {
    top: top + window.scrollY,
    left: Math.max(left, layoutRect.left) + window.scrollX,
    direction
  };
}
function isBooleanKey(key) {
  return BOOLEAN_KEYS_OF_EVENT_MODEL_DATA.indexOf(key) !== -1;
}
function getChanges(event, eventObject) {
  return Object.entries(eventObject).reduce((changes, [key, value]) => {
    const eventObjectKey = key;
    if (event[eventObjectKey] instanceof TZDate) {
      if (compare(event[eventObjectKey], value) !== 0) {
        changes[eventObjectKey] = value;
      }
    } else if (event[eventObjectKey] !== value) {
      changes[eventObjectKey] = value;
    }
    return changes;
  }, {});
}
function EventFormPopup() {
  var _a;
  const { calendars } = useStore(calendarSelector);
  const { hideAllPopup } = useDispatch("popup");
  const popupParams = useStore(eventFormPopupParamSelector);
  const { start, end, popupArrowPointPosition, close, isCreationPopup, event } = popupParams != null ? popupParams : {};
  const eventBus = useEventBus();
  const formPopupSlot = useFloatingLayer("formPopupSlot");
  const [formState, formStateDispatch] = useFormState((_a = calendars[0]) == null ? void 0 : _a.id);
  const datePickerRef = _$2(null);
  const popupContainerRef = _$2(null);
  const [style, setStyle] = h$2({});
  const [arrowLeft, setArrowLeft] = h$2(0);
  const [arrowDirection, setArrowDirection] = h$2(
    FormPopupArrowDirection.bottom
  );
  const layoutContainer = useLayoutContainer();
  const popupArrowClassName = F$2(() => {
    const top = arrowDirection === FormPopupArrowDirection.top;
    const bottom = arrowDirection === FormPopupArrowDirection.bottom;
    return cls("popup-arrow", { top, bottom });
  }, [arrowDirection]);
  y$2(() => {
    if (popupContainerRef.current && popupArrowPointPosition && layoutContainer) {
      const layoutRect = layoutContainer.getBoundingClientRect();
      const popupRect = popupContainerRef.current.getBoundingClientRect();
      const { top, left, direction } = calculatePopupPosition(
        popupArrowPointPosition,
        layoutRect,
        popupRect
      );
      const arrowLeftPosition = popupArrowPointPosition.left - left;
      setStyle({ left, top });
      setArrowLeft(arrowLeftPosition);
      setArrowDirection(direction);
    }
  }, [layoutContainer, popupArrowPointPosition]);
  p$2(() => {
    if (isPresent(popupParams) && isPresent(event)) {
      formStateDispatch({
        type: FormStateActionType.init,
        event: {
          title: popupParams.title,
          location: popupParams.location,
          isAllday: popupParams.isAllday,
          isPrivate: popupParams.isPrivate,
          calendarId: event.calendarId,
          state: popupParams.eventState
        }
      });
    }
  }, [calendars, event, formStateDispatch, popupParams]);
  p$2(() => {
    if (isNil(popupParams)) {
      formStateDispatch({ type: FormStateActionType.reset });
    }
  }, [formStateDispatch, popupParams]);
  if (isNil(start) || isNil(end) || isNil(formPopupSlot)) {
    return null;
  }
  const onSubmit = (e2) => {
    var _a2, _b;
    e2.preventDefault();
    const formData = new FormData(e2.target);
    const eventData = __spreadValues({}, formState);
    formData.forEach((data, key) => {
      eventData[key] = isBooleanKey(key) ? data === "true" : data;
    });
    eventData.start = new TZDate((_a2 = datePickerRef.current) == null ? void 0 : _a2.getStartDate());
    eventData.end = new TZDate((_b = datePickerRef.current) == null ? void 0 : _b.getEndDate());
    if (isCreationPopup) {
      eventBus.fire("beforeCreateEvent", eventData);
    } else if (event) {
      const changes = getChanges(event, eventData);
      eventBus.fire("beforeUpdateEvent", { event: event.toEventObject(), changes });
    }
    hideAllPopup();
  };
  return z(
    /* @__PURE__ */ y$3("div", {
      role: "dialog",
      className: classNames$7.popupContainer,
      ref: popupContainerRef,
      style
    }, /* @__PURE__ */ y$3("form", {
      onSubmit
    }, /* @__PURE__ */ y$3("div", {
      className: classNames$7.formContainer
    }, (calendars == null ? void 0 : calendars.length) ? /* @__PURE__ */ y$3(CalendarSelector, {
      selectedCalendarId: formState.calendarId,
      calendars,
      formStateDispatch
    }) : /* @__PURE__ */ y$3(PopupSection, null), /* @__PURE__ */ y$3(TitleInputBox, {
      title: formState.title,
      isPrivate: formState.isPrivate,
      formStateDispatch
    }), /* @__PURE__ */ y$3(LocationInputBox, {
      location: formState.location,
      formStateDispatch
    }), /* @__PURE__ */ y$3(DateSelector, {
      start,
      end,
      isAllday: formState.isAllday,
      formStateDispatch,
      ref: datePickerRef
    }), /* @__PURE__ */ y$3(EventStateSelector, {
      eventState: formState.state,
      formStateDispatch
    }), /* @__PURE__ */ y$3(ClosePopupButton, {
      type: "form",
      close
    }), /* @__PURE__ */ y$3(PopupSection, null, /* @__PURE__ */ y$3(ConfirmPopupButton, null, isCreationPopup ? /* @__PURE__ */ y$3(Template, {
      template: "popupSave"
    }) : /* @__PURE__ */ y$3(Template, {
      template: "popupUpdate"
    })))), /* @__PURE__ */ y$3("div", {
      className: popupArrowClassName
    }, /* @__PURE__ */ y$3("div", {
      className: classNames$7.popupArrowBorder,
      style: { left: arrowLeft }
    }, /* @__PURE__ */ y$3("div", {
      className: classNames$7.popupArrowFill
    }))))),
    formPopupSlot
  );
}
function shownPopupParamSelector(state) {
  return Object.values(state.popup).find((popup) => isPresent(popup));
}
function PopupOverlay() {
  const shownPopupParam = useStore(shownPopupParamSelector);
  const { hideAllPopup } = useDispatch("popup");
  const isPopupShown = isPresent(shownPopupParam);
  const onClick = (ev) => {
    var _a;
    ev.stopPropagation();
    (_a = shownPopupParam == null ? void 0 : shownPopupParam.close) == null ? void 0 : _a.call(shownPopupParam);
    hideAllPopup();
  };
  return /* @__PURE__ */ y$3("div", {
    className: cls("popup-overlay"),
    style: { display: isPopupShown ? "block" : "none" },
    onClick
  });
}
const classNames$6 = {
  container: cls("see-more-container"),
  seeMore: cls("see-more"),
  header: cls("see-more-header"),
  list: cls("month-more-list")
};
function SeeMoreEventsPopup() {
  const popupParams = useStore(seeMorePopupParamSelector);
  const { date: date2, events = [], popupPosition } = popupParams != null ? popupParams : {};
  const { moreView, moreViewTitle } = useMonthTheme();
  const seeMorePopupSlot = useFloatingLayer("seeMorePopupSlot");
  const eventBus = useEventBus();
  const moreEventsPopupContainerRef = _$2(null);
  const isHidden = isNil(date2) || isNil(popupPosition) || isNil(seeMorePopupSlot);
  p$2(() => {
    if (!isHidden && moreEventsPopupContainerRef.current) {
      eventBus.fire("clickMoreEventsBtn", {
        date: date2.toDate(),
        target: moreEventsPopupContainerRef.current
      });
    }
  }, [date2, eventBus, isHidden]);
  if (isHidden) {
    return null;
  }
  const style = {
    height: MONTH_MORE_VIEW_HEADER_HEIGHT,
    marginBottom: MONTH_MORE_VIEW_HEADER_MARGIN_BOTTOM,
    padding: MONTH_MORE_VIEW_HEADER_PADDING,
    backgroundColor: moreViewTitle.backgroundColor
  };
  const moreTitle = {
    ymd: toFormat(date2, "YYYY-MM-DD"),
    day: date2.getDay(),
    date: date2.getDate().toString().padStart(2, "0")
  };
  const moreViewListStyle = {
    height: `calc(100% - ${MONTH_MORE_VIEW_HEADER_HEIGHT + MONTH_MORE_VIEW_HEADER_MARGIN_BOTTOM + MONTH_MORE_VIEW_HEADER_PADDING_TOP}px)`
  };
  return z(
    /* @__PURE__ */ y$3("div", {
      role: "dialog",
      className: classNames$6.container,
      style: popupPosition,
      ref: moreEventsPopupContainerRef
    }, /* @__PURE__ */ y$3("div", {
      className: classNames$6.seeMore,
      style: moreView
    }, /* @__PURE__ */ y$3("div", {
      className: classNames$6.header,
      style
    }, /* @__PURE__ */ y$3(Template, {
      template: "monthMoreTitleDate",
      param: moreTitle
    }), /* @__PURE__ */ y$3(ClosePopupButton, {
      type: "moreEvents"
    })), /* @__PURE__ */ y$3("div", {
      className: classNames$6.list,
      style: moreViewListStyle
    }, events.map((uiModel) => /* @__PURE__ */ y$3(HorizontalEvent, {
      key: `see-more-event-item-${uiModel.cid()}`,
      uiModel,
      eventHeight: MONTH_EVENT_HEIGHT,
      headerHeight: MONTH_MORE_VIEW_HEADER_HEIGHT,
      flat: true
    }))))),
    seeMorePopupSlot
  );
}
function getLayoutStylesFromInfo(width, height) {
  const styles = { height: toPercent(100) };
  if (width) {
    styles.width = width;
  }
  if (height) {
    styles.height = height;
  }
  return styles;
}
function Layout({
  children,
  width,
  height,
  className: className2 = "",
  autoAdjustPanels = false
}) {
  const { backgroundColor } = useTheme(commonThemeSelector);
  const [container, containerRefCallback] = useDOMNode();
  const { setLastPanelType, updateLayoutHeight } = useDispatch("weekViewLayout");
  const layoutClassName = F$2(() => `${cls("layout")} ${className2}`, [className2]);
  y$2(() => {
    if (container) {
      const onResizeWindow = () => updateLayoutHeight(container.offsetHeight);
      onResizeWindow();
      window.addEventListener("resize", onResizeWindow);
      return () => window.removeEventListener("resize", onResizeWindow);
    }
    return noop;
  }, [container, updateLayoutHeight]);
  y$2(() => {
    if (container && autoAdjustPanels) {
      const childArray = P$2(children);
      const lastChild = childArray[childArray.length - 1];
      if (!isString_1(lastChild) && !isNumber_1(lastChild) && !isNil(lastChild)) {
        setLastPanelType(lastChild.props.name);
      }
    }
  }, [children, setLastPanelType, autoAdjustPanels, container]);
  return /* @__PURE__ */ y$3(LayoutContainerProvider, {
    value: container
  }, /* @__PURE__ */ y$3("div", {
    ref: containerRefCallback,
    className: layoutClassName,
    style: __spreadProps(__spreadValues({}, getLayoutStylesFromInfo(width, height)), { backgroundColor })
  }, container ? children : null), /* @__PURE__ */ y$3(EventFormPopup, null), /* @__PURE__ */ y$3(EventDetailPopup, null), /* @__PURE__ */ y$3(SeeMoreEventsPopup, null), /* @__PURE__ */ y$3(PopupOverlay, null));
}
function getDefaultStyle(height, border) {
  return {
    height,
    width: "100%",
    cursor: "row-resize",
    borderTop: border,
    borderBottom: border
  };
}
function PanelResizer({ name, height }) {
  const border = useTheme(T$1((theme) => theme.week.panelResizer.border, []));
  const style = getDefaultStyle(height, border);
  const defaultGuideStyle = __spreadProps(__spreadValues({}, style), {
    display: "none",
    border: "none",
    backgroundColor: "#999"
  });
  const [guideStyle, setGuideStyle] = h$2(defaultGuideStyle);
  const startPos = _$2(null);
  const { updateDayGridRowHeightByDiff } = useDispatch("weekViewLayout");
  const onMouseDown = useDrag(DRAGGING_TYPE_CONSTANTS.panelResizer, {
    onDragStart: (e2) => {
      startPos.current = { left: e2.pageX, top: e2.pageY };
    },
    onDrag: (e2) => {
      if (startPos.current) {
        const top = e2.pageY - startPos.current.top;
        setGuideStyle((prev) => __spreadProps(__spreadValues({}, prev), { top, display: null }));
      }
    },
    onMouseUp: (e2) => {
      if (startPos.current) {
        const diff = e2.pageY - startPos.current.top;
        startPos.current = null;
        setGuideStyle(defaultGuideStyle);
        updateDayGridRowHeightByDiff({ rowName: name, diff });
      }
    }
  });
  return /* @__PURE__ */ y$3("div", {
    style: { position: "relative" }
  }, /* @__PURE__ */ y$3("div", {
    className: cls("panel-resizer"),
    style,
    onMouseDown
  }), /* @__PURE__ */ y$3("div", {
    className: cls("panel-resizer-guide"),
    style: guideStyle
  }));
}
function getPanelSide(side, maxExpandableSide) {
  return maxExpandableSide ? Math.min(maxExpandableSide, side) : side;
}
function getPanelStyle({
  initialHeight,
  initialWidth,
  overflowX,
  overflowY,
  maxExpandableWidth,
  maxExpandableHeight,
  minHeight,
  maxHeight,
  minWidth,
  maxWidth
}) {
  const style = {};
  if (initialWidth) {
    style.width = getPanelSide(initialWidth, maxExpandableWidth);
    style.height = "100%";
  }
  if (initialHeight) {
    style.width = "100%";
    style.height = getPanelSide(initialHeight, maxExpandableHeight);
  }
  if (overflowX) {
    style.overflowX = "auto";
  }
  if (overflowY) {
    style.overflowY = "auto";
  }
  return __spreadProps(__spreadValues({}, style), { minHeight, maxHeight, minWidth, maxWidth });
}
const Panel = k$1(function Panel2({
  name,
  initialWidth = DEFAULT_PANEL_HEIGHT,
  initialHeight = DEFAULT_PANEL_HEIGHT,
  overflowX,
  overflowY,
  maxExpandableWidth,
  maxExpandableHeight,
  minHeight,
  maxHeight,
  minWidth,
  maxWidth,
  resizerWidth = DEFAULT_RESIZER_LENGTH,
  resizerHeight = DEFAULT_RESIZER_LENGTH,
  resizable,
  children
}, ref) {
  const { updateDayGridRowHeight } = useDispatch("weekViewLayout");
  const { height: dayGridRowHeight } = useStore(
    T$1((state) => {
      var _a;
      return (_a = state.weekViewLayout.dayGridRows[name]) != null ? _a : {};
    }, [name])
  );
  const height = dayGridRowHeight != null ? dayGridRowHeight : initialHeight;
  y$2(() => {
    updateDayGridRowHeight({ rowName: name, height: initialHeight });
  }, [initialHeight, name, updateDayGridRowHeight]);
  const styles = getPanelStyle({
    initialWidth,
    initialHeight: height,
    overflowX,
    overflowY,
    maxExpandableWidth,
    maxExpandableHeight,
    minHeight,
    maxHeight,
    minWidth,
    maxWidth
  });
  const isResizable = F$2(() => {
    if (isNil(resizable) || isBoolean_1(resizable)) {
      return !!resizable;
    }
    return resizable.includes(name);
  }, [resizable, name]);
  return /* @__PURE__ */ y$3(_$3, null, /* @__PURE__ */ y$3("div", {
    className: cls("panel", name),
    style: styles,
    ref
  }, children), isResizable ? /* @__PURE__ */ y$3(PanelResizer, {
    name,
    width: resizerWidth,
    height: resizerHeight
  }) : null);
});
const className = "timegrid";
const addTimeGridPrefix = (selector) => `${className}-${selector}`;
const timeFormats = {
  second: "HH:mm:ss",
  minute: "HH:mm",
  hour: "HH:mm",
  date: "HH:mm",
  month: "MM.DD",
  year: "YYYY.MM.DD"
};
const classNames$5 = {
  time: cls("event-time"),
  content: cls("event-time-content"),
  travelTime: cls("travel-time"),
  resizeHandleX: cls("resize-handler-x"),
  moveEvent: cls("dragging--move-event"),
  resizeEvent: cls("dragging--resize-vertical-event")
};
function getMarginLeft(left) {
  const { percent, px } = extractPercentPx(`${left}`);
  return left > 0 || percent > 0 || px > 0 ? TIME_EVENT_CONTAINER_MARGIN_LEFT : 0;
}
function getContainerWidth(width, marginLeft) {
  if (isString_1(width)) {
    return width;
  }
  if (width >= 0) {
    return `calc(${toPercent(width)} - ${marginLeft}px)`;
  }
  return "";
}
function getStyles({
  uiModel,
  isDraggingTarget,
  hasNextStartTime,
  calendarColor,
  minHeight
}) {
  const {
    top,
    left,
    height,
    width,
    duplicateLeft,
    duplicateWidth,
    goingDurationHeight,
    modelDurationHeight,
    comingDurationHeight,
    croppedStart,
    croppedEnd
  } = uiModel;
  const travelBorderColor = "white";
  const borderRadius = 2;
  const defaultMarginBottom = 2;
  const marginLeft = getMarginLeft(left);
  const { color, backgroundColor, borderColor, dragBackgroundColor, shouldOpacity } = getEventColors(
    uiModel,
    calendarColor
  );
  const containerStyle = {
    width: getContainerWidth(duplicateWidth || width, marginLeft),
    height: `calc(${toPercent(Math.max(height, minHeight))} - ${defaultMarginBottom}px)`,
    top: toPercent(top),
    left: duplicateLeft || toPercent(left),
    borderRadius,
    borderLeft: `3px solid ${borderColor}`,
    marginLeft,
    color,
    background: isDraggingTarget ? dragBackgroundColor : backgroundColor,
    opacity: shouldOpacity ? 0.5 : 1,
    zIndex: hasNextStartTime ? 1 : 0
  };
  const goingDurationStyle = {
    height: toPercent(goingDurationHeight),
    borderBottom: `1px dashed ${travelBorderColor}`
  };
  const modelDurationStyle = {
    height: toPercent(modelDurationHeight)
  };
  const comingDurationStyle = {
    height: toPercent(comingDurationHeight),
    borderTop: `1px dashed ${travelBorderColor}`
  };
  if (croppedStart) {
    containerStyle.borderTopLeftRadius = 0;
    containerStyle.borderTopRightRadius = 0;
  }
  if (croppedEnd) {
    containerStyle.borderBottomLeftRadius = 0;
    containerStyle.borderBottomRightRadius = 0;
  }
  return {
    containerStyle,
    goingDurationStyle,
    modelDurationStyle,
    comingDurationStyle
  };
}
function isDraggableEvent({
  uiModel,
  isReadOnlyCalendar,
  isDraggingTarget,
  hasNextStartTime
}) {
  const { model } = uiModel;
  return !isReadOnlyCalendar && !model.isReadOnly && !isDraggingTarget && !hasNextStartTime;
}
function TimeEvent({
  uiModel,
  nextStartTime,
  isResizingGuide = false,
  minHeight = 0
}) {
  const {
    useDetailPopup,
    isReadOnly: isReadOnlyCalendar,
    week: weekOptions
  } = useStore(optionsSelector);
  const calendarColor = useCalendarColor(uiModel.model);
  const { collapseDuplicateEvents } = weekOptions;
  const layoutContainer = useLayoutContainer();
  const { showDetailPopup } = useDispatch("popup");
  const { setDraggingEventUIModel } = useDispatch("dnd");
  const { setSelectedDuplicateEventCid } = useDispatch("weekViewLayout");
  const eventBus = useEventBus();
  const eventContainerRef = _$2(null);
  const [isDraggingTarget, setIsDraggingTarget] = h$2(false);
  const { model, goingDurationHeight, modelDurationHeight, comingDurationHeight, croppedEnd } = uiModel;
  const { id, calendarId, customStyle } = model;
  const hasNextStartTime = isPresent(nextStartTime);
  const { containerStyle, goingDurationStyle, modelDurationStyle, comingDurationStyle } = getStyles(
    { uiModel, isDraggingTarget, hasNextStartTime, calendarColor, minHeight }
  );
  const isGuide = hasNextStartTime || isResizingGuide;
  useTransientUpdate(dndSelector, ({ draggingEventUIModel, draggingState }) => {
    if (draggingState === DraggingState.DRAGGING && (draggingEventUIModel == null ? void 0 : draggingEventUIModel.cid()) === uiModel.cid() && !hasNextStartTime && !isResizingGuide) {
      setIsDraggingTarget(true);
    } else {
      setIsDraggingTarget(false);
    }
  });
  p$2(() => {
    if (!isResizingGuide) {
      eventBus.fire("afterRenderEvent", uiModel.model.toEventObject());
    }
  }, []);
  const startDragEvent = (className2) => {
    setDraggingEventUIModel(uiModel);
    layoutContainer == null ? void 0 : layoutContainer.classList.add(className2);
  };
  const endDragEvent = (className2) => {
    setIsDraggingTarget(false);
    layoutContainer == null ? void 0 : layoutContainer.classList.remove(className2);
  };
  const onMoveStart = useDrag(DRAGGING_TYPE_CREATORS.moveEvent("timeGrid", `${uiModel.cid()}`), {
    onDragStart: () => {
      if (isDraggable) {
        startDragEvent(classNames$5.moveEvent);
      }
    },
    onMouseUp: (e2, { draggingState }) => {
      endDragEvent(classNames$5.moveEvent);
      const isClick = draggingState <= DraggingState.INIT;
      if (isClick && collapseDuplicateEvents) {
        const selectedDuplicateEventCid = uiModel.duplicateEvents.length > 0 ? uiModel.cid() : DEFAULT_DUPLICATE_EVENT_CID;
        setSelectedDuplicateEventCid(selectedDuplicateEventCid);
      }
      if (isClick && useDetailPopup && eventContainerRef.current) {
        showDetailPopup(
          {
            event: uiModel.model,
            eventRect: eventContainerRef.current.getBoundingClientRect()
          },
          false
        );
      }
      if (isClick) {
        eventBus.fire("clickEvent", { event: uiModel.model.toEventObject(), nativeEvent: e2 });
      }
    },
    onPressESCKey: () => endDragEvent(classNames$5.moveEvent)
  });
  const handleMoveStart = (e2) => {
    e2.stopPropagation();
    onMoveStart(e2);
  };
  const onResizeStart = useDrag(
    DRAGGING_TYPE_CREATORS.resizeEvent("timeGrid", `${uiModel.cid()}`),
    {
      onDragStart: () => startDragEvent(classNames$5.resizeEvent),
      onMouseUp: () => endDragEvent(classNames$5.resizeEvent),
      onPressESCKey: () => endDragEvent(classNames$5.resizeEvent)
    }
  );
  const handleResizeStart = (e2) => {
    e2.stopPropagation();
    onResizeStart(e2);
  };
  const isDraggable = isDraggableEvent({
    uiModel,
    isReadOnlyCalendar,
    isDraggingTarget,
    hasNextStartTime
  });
  const shouldShowResizeHandle = isDraggable && !croppedEnd;
  return /* @__PURE__ */ y$3("div", {
    "data-testid": `${isGuide ? "guide-" : ""}time-event-${model.title}-${uiModel.cid()}`,
    "data-calendar-id": calendarId,
    "data-event-id": id,
    className: classNames$5.time,
    style: __spreadValues(__spreadValues({}, containerStyle), customStyle),
    onMouseDown: handleMoveStart,
    ref: eventContainerRef
  }, goingDurationHeight ? /* @__PURE__ */ y$3("div", {
    className: classNames$5.travelTime,
    style: goingDurationStyle
  }, /* @__PURE__ */ y$3(Template, {
    template: "goingDuration",
    param: model
  })) : null, modelDurationHeight ? /* @__PURE__ */ y$3("div", {
    className: classNames$5.content,
    style: modelDurationStyle
  }, /* @__PURE__ */ y$3(Template, {
    template: "time",
    param: __spreadProps(__spreadValues({}, model.toEventObject()), {
      start: hasNextStartTime ? nextStartTime : model.start
    })
  })) : null, comingDurationHeight ? /* @__PURE__ */ y$3("div", {
    className: classNames$5.travelTime,
    style: comingDurationStyle
  }, /* @__PURE__ */ y$3(Template, {
    template: "comingDuration",
    param: model
  })) : null, shouldShowResizeHandle ? /* @__PURE__ */ y$3("div", {
    className: classNames$5.resizeHandleX,
    onMouseDown: handleResizeStart
  }) : null);
}
function GridSelection({ top, height, text: text2 }) {
  const { backgroundColor, border } = useTheme(
    T$1((theme) => theme.common.gridSelection, [])
  );
  const color = useTheme(T$1((theme) => theme.week.gridSelection.color, []));
  const style = {
    top: toPercent(top),
    height: toPercent(height),
    backgroundColor,
    border
  };
  return /* @__PURE__ */ y$3("div", {
    className: cls("time", "grid-selection"),
    style,
    "data-testid": `time-grid-selection-${top}-${height}`
  }, text2.length > 0 ? /* @__PURE__ */ y$3("span", {
    className: cls("grid-selection-label"),
    style: { color }
  }, text2) : null);
}
function GridSelectionByColumn({ columnIndex, timeGridRows }) {
  const gridSelectionData = useStore(
    T$1(
      (state) => timeGridSelectionHelper.calculateSelection(
        state.gridSelection.timeGrid,
        columnIndex,
        timeGridRows.length - 1
      ),
      [columnIndex, timeGridRows]
    )
  );
  const gridSelectionProps = F$2(() => {
    if (!gridSelectionData) {
      return null;
    }
    const { startRowIndex, endRowIndex, isStartingColumn, isSelectingMultipleColumns } = gridSelectionData;
    const { top: startRowTop, startTime: startRowStartTime } = timeGridRows[startRowIndex];
    const {
      top: endRowTop,
      height: endRowHeight,
      endTime: endRowEndTime
    } = timeGridRows[endRowIndex];
    const gridSelectionHeight = endRowTop + endRowHeight - startRowTop;
    let text2 = `${startRowStartTime} - ${endRowEndTime}`;
    if (isSelectingMultipleColumns) {
      text2 = isStartingColumn ? startRowStartTime : "";
    }
    return {
      top: startRowTop,
      height: gridSelectionHeight,
      text: text2
    };
  }, [gridSelectionData, timeGridRows]);
  if (isNil(gridSelectionProps)) {
    return null;
  }
  return /* @__PURE__ */ y$3(GridSelection, __spreadValues({}, gridSelectionProps));
}
function useTimeGridEventResize({
  gridPositionFinder,
  totalUIModels,
  columnIndex,
  timeGridData
}) {
  const eventBus = useEventBus();
  const {
    isDraggingEnd,
    isDraggingCanceled,
    draggingEvent: resizingStartUIModel,
    clearDraggingEvent
  } = useDraggingEvent("timeGrid", "resize");
  const [currentGridPos, clearCurrentGridPos] = useCurrentPointerPositionInGrid(gridPositionFinder);
  const [guideUIModel, setGuideUIModel] = h$2(null);
  const clearStates = T$1(() => {
    setGuideUIModel(null);
    clearDraggingEvent();
    clearCurrentGridPos();
  }, [clearCurrentGridPos, clearDraggingEvent]);
  const baseResizingInfo = F$2(() => {
    if (isNil(resizingStartUIModel)) {
      return null;
    }
    const { columns, rows } = timeGridData;
    const resizeTargetUIModelColumns = totalUIModels.map(
      (uiModels) => uiModels.filter(
        (uiModel) => uiModel.cid() === resizingStartUIModel.cid()
      )
    );
    const findRowIndexOf = (targetDate, targetColumnIndex) => (row) => {
      const rowStartTZDate = setTimeStrToDate(columns[targetColumnIndex].date, row.startTime);
      const rowEndTZDate = setTimeStrToDate(
        timeGridData.columns[targetColumnIndex].date,
        row.endTime
      );
      return rowStartTZDate <= targetDate && targetDate < rowEndTZDate;
    };
    const eventStartDateColumnIndex = resizeTargetUIModelColumns.findIndex((row) => row.length > 0);
    const resizingStartEventUIModel = resizeTargetUIModelColumns[eventStartDateColumnIndex][0];
    const { goingDuration = 0 } = resizingStartEventUIModel.model;
    const renderStart = addMinutes(resizingStartEventUIModel.getStarts(), -goingDuration);
    const eventStartDateRowIndex = Math.max(
      rows.findIndex(findRowIndexOf(renderStart, eventStartDateColumnIndex)),
      0
    );
    const eventEndDateColumnIndex = findLastIndex(
      resizeTargetUIModelColumns,
      (row) => row.length > 0
    );
    const resizingEndEventUIModel = resizeTargetUIModelColumns[eventEndDateColumnIndex][0];
    const { comingDuration = 0 } = resizingEndEventUIModel.model;
    const renderEnd = addMinutes(resizingEndEventUIModel.getStarts(), comingDuration);
    let eventEndDateRowIndex = rows.findIndex(findRowIndexOf(renderEnd, eventEndDateColumnIndex));
    eventEndDateRowIndex = eventEndDateRowIndex >= 0 ? eventEndDateRowIndex : rows.length - 1;
    return {
      eventStartDateColumnIndex,
      eventStartDateRowIndex,
      eventEndDateColumnIndex,
      eventEndDateRowIndex,
      resizeTargetUIModelColumns
    };
  }, [resizingStartUIModel, timeGridData, totalUIModels]);
  const canCalculateGuideUIModel = isPresent(baseResizingInfo) && isPresent(resizingStartUIModel) && isPresent(currentGridPos);
  const oneRowHeight = F$2(
    () => baseResizingInfo ? timeGridData.rows[0].height : 0,
    [baseResizingInfo, timeGridData.rows]
  );
  p$2(() => {
    if (canCalculateGuideUIModel) {
      const { eventStartDateRowIndex, eventStartDateColumnIndex, eventEndDateColumnIndex } = baseResizingInfo;
      if (columnIndex === eventEndDateColumnIndex && eventStartDateColumnIndex === eventEndDateColumnIndex) {
        const clonedUIModel = resizingStartUIModel.clone();
        const { height, goingDurationHeight, comingDurationHeight } = clonedUIModel;
        const newHeight = Math.max(
          oneRowHeight + goingDurationHeight * height / 100 + comingDurationHeight * height / 100,
          timeGridData.rows[currentGridPos.rowIndex].top - timeGridData.rows[eventStartDateRowIndex].top + oneRowHeight
        );
        const newGoingDurationHeight = goingDurationHeight * height / newHeight;
        const newComingDurationHeight = comingDurationHeight * height / newHeight;
        clonedUIModel.setUIProps({
          height: newHeight,
          goingDurationHeight: newGoingDurationHeight,
          comingDurationHeight: newComingDurationHeight,
          modelDurationHeight: 100 - (newGoingDurationHeight + newComingDurationHeight)
        });
        setGuideUIModel(clonedUIModel);
      }
    }
  }, [
    baseResizingInfo,
    canCalculateGuideUIModel,
    columnIndex,
    currentGridPos,
    resizingStartUIModel,
    timeGridData.rows,
    oneRowHeight
  ]);
  p$2(() => {
    if (canCalculateGuideUIModel) {
      const { resizeTargetUIModelColumns, eventStartDateColumnIndex, eventEndDateColumnIndex } = baseResizingInfo;
      if ((columnIndex === eventStartDateColumnIndex || columnIndex === eventEndDateColumnIndex) && eventStartDateColumnIndex !== eventEndDateColumnIndex) {
        let clonedUIModel;
        if (columnIndex === eventStartDateColumnIndex) {
          clonedUIModel = resizeTargetUIModelColumns[columnIndex][0].clone();
        } else {
          clonedUIModel = resizingStartUIModel.clone();
          clonedUIModel.setUIProps({
            height: timeGridData.rows[currentGridPos.rowIndex].top + oneRowHeight
          });
        }
        setGuideUIModel(clonedUIModel);
      }
    }
  }, [
    baseResizingInfo,
    canCalculateGuideUIModel,
    columnIndex,
    currentGridPos,
    resizingStartUIModel,
    timeGridData.rows,
    oneRowHeight
  ]);
  useWhen(() => {
    const shouldUpdate = !isDraggingCanceled && isPresent(baseResizingInfo) && isPresent(currentGridPos) && isPresent(resizingStartUIModel) && baseResizingInfo.eventEndDateColumnIndex === columnIndex;
    if (shouldUpdate) {
      const { comingDuration = 0 } = resizingStartUIModel.model;
      const targetEndDate = addMinutes(
        setTimeStrToDate(
          timeGridData.columns[columnIndex].date,
          timeGridData.rows[currentGridPos.rowIndex].endTime
        ),
        -comingDuration
      );
      const minEndDate = addMinutes(resizingStartUIModel.getStarts(), 30);
      eventBus.fire("beforeUpdateEvent", {
        event: resizingStartUIModel.model.toEventObject(),
        changes: {
          end: max(minEndDate, targetEndDate)
        }
      });
    }
    clearStates();
  }, isDraggingEnd);
  return guideUIModel;
}
function ResizingGuideByColumn({
  gridPositionFinder,
  totalUIModels,
  columnIndex,
  timeGridData
}) {
  const guideUIModel = useTimeGridEventResize({
    gridPositionFinder,
    totalUIModels,
    columnIndex,
    timeGridData
  });
  if (isNil(guideUIModel)) {
    return null;
  }
  return /* @__PURE__ */ y$3(TimeEvent, {
    uiModel: guideUIModel,
    isResizingGuide: true
  });
}
const classNames$4 = {
  column: cls("column"),
  backgrounds: cls("background-events"),
  events: cls("events")
};
function VerticalEvents({
  eventUIModels,
  minEventHeight
}) {
  const style = { marginRight: 8 };
  return /* @__PURE__ */ y$3("div", {
    className: classNames$4.events,
    style
  }, eventUIModels.map((eventUIModel) => /* @__PURE__ */ y$3(TimeEvent, {
    key: `${eventUIModel.valueOf()}-${eventUIModel.cid()}`,
    uiModel: eventUIModel,
    minHeight: minEventHeight
  })));
}
function backgroundColorSelector$1(theme) {
  return {
    defaultBackgroundColor: theme.week.dayGrid.backgroundColor,
    todayBackgroundColor: theme.week.today.backgroundColor,
    weekendBackgroundColor: theme.week.weekend.backgroundColor
  };
}
function getBackgroundColor({
  today,
  columnDate,
  defaultBackgroundColor,
  todayBackgroundColor,
  weekendBackgroundColor
}) {
  const isTodayColumn = isSameDate(today, columnDate);
  const isWeekendColumn = isWeekend(columnDate.getDay());
  if (isTodayColumn) {
    return todayBackgroundColor;
  }
  if (isWeekendColumn) {
    return weekendBackgroundColor;
  }
  return defaultBackgroundColor;
}
const Column = x$1(function Column2({
  columnDate,
  columnWidth,
  columnIndex,
  totalUIModels,
  gridPositionFinder,
  timeGridData,
  isLastColumn
}) {
  const { rows: timeGridRows } = timeGridData;
  const borderRight = useTheme(T$1((theme) => theme.week.timeGrid.borderRight, []));
  const backgroundColorTheme = useTheme(backgroundColorSelector$1);
  const [, getNow] = usePrimaryTimezone();
  const today = getNow();
  const backgroundColor = getBackgroundColor(__spreadValues({ today, columnDate }, backgroundColorTheme));
  const style = {
    width: columnWidth,
    backgroundColor,
    borderRight: isLastColumn ? "none" : borderRight
  };
  const uiModelsByColumn = totalUIModels[columnIndex];
  const minEventHeight = timeGridRows[0].height;
  return /* @__PURE__ */ y$3("div", {
    className: classNames$4.column,
    style,
    "data-testid": `timegrid-column-${columnDate.getDay()}`
  }, /* @__PURE__ */ y$3(VerticalEvents, {
    eventUIModels: uiModelsByColumn,
    minEventHeight
  }), /* @__PURE__ */ y$3(ResizingGuideByColumn, {
    gridPositionFinder,
    totalUIModels,
    columnIndex,
    timeGridData
  }), /* @__PURE__ */ y$3(GridSelectionByColumn, {
    columnIndex,
    timeGridRows
  }));
});
function gridLineBorderSelector(theme) {
  return {
    halfHourLineBorder: theme.week.timeGridHalfHourLine.borderBottom,
    hourLineBorder: theme.week.timeGridHourLine.borderBottom
  };
}
const GridLines = x$1(function GridLines2({
  timeGridRows
}) {
  const { halfHourLineBorder, hourLineBorder } = useTheme(gridLineBorderSelector);
  return /* @__PURE__ */ y$3("div", {
    className: cls("gridlines")
  }, timeGridRows.map((time, index) => {
    const isUpperLine = index % 2 === 0;
    return /* @__PURE__ */ y$3("div", {
      key: `gridline-${time.startTime}-${time.endTime}`,
      className: cls("gridline-half"),
      style: {
        top: toPercent(time.top),
        height: toPercent(time.height),
        borderBottom: isUpperLine ? halfHourLineBorder : hourLineBorder
      },
      "data-testid": `gridline-${time.startTime}-${time.endTime}`
    });
  }));
});
const THIRTY_MINUTES = 30;
function getCurrentIndexByTime(time, hourStart) {
  const hour = time.getHours() - hourStart;
  const minutes = time.getMinutes();
  return hour * 2 + Math.floor(minutes / THIRTY_MINUTES);
}
function getMovingEventPosition({
  draggingEvent,
  columnDiff,
  rowDiff,
  timeGridDataRows,
  currentDate
}) {
  const rowHeight = timeGridDataRows[0].height;
  const maxHeight = rowHeight * timeGridDataRows.length;
  const millisecondsDiff = rowDiff * MS_PER_THIRTY_MINUTES + columnDiff * MS_PER_DAY;
  const hourStart = Number(timeGridDataRows[0].startTime.split(":")[0]);
  const { goingDuration = 0, comingDuration = 0 } = draggingEvent.model;
  const goingStart = addMinutes(draggingEvent.getStarts(), -goingDuration);
  const comingEnd = addMinutes(draggingEvent.getEnds(), comingDuration);
  const nextStart = addMilliseconds(goingStart, millisecondsDiff);
  const nextEnd = addMilliseconds(comingEnd, millisecondsDiff);
  const startIndex = Math.max(getCurrentIndexByTime(nextStart, hourStart), 0);
  const endIndex = Math.min(getCurrentIndexByTime(nextEnd, hourStart), timeGridDataRows.length - 1);
  const isStartAtPrevDate = nextStart.getFullYear() < currentDate.getFullYear() || nextStart.getMonth() < currentDate.getMonth() || nextStart.getDate() < currentDate.getDate();
  const isEndAtNextDate = nextEnd.getFullYear() > currentDate.getFullYear() || nextEnd.getMonth() > currentDate.getMonth() || nextEnd.getDate() > currentDate.getDate();
  const indexDiff = endIndex - (isStartAtPrevDate ? 0 : startIndex);
  const top = isStartAtPrevDate ? 0 : timeGridDataRows[startIndex].top;
  const height = isEndAtNextDate ? maxHeight : Math.max(indexDiff, 1) * rowHeight;
  return { top, height };
}
const initXSelector = (state) => state.dnd.initX;
const initYSelector = (state) => state.dnd.initY;
function useTimeGridEventMove({
  gridPositionFinder,
  timeGridData
}) {
  const initX = useStore(initXSelector);
  const initY = useStore(initYSelector);
  const eventBus = useEventBus();
  const { isDraggingEnd, isDraggingCanceled, draggingEvent, clearDraggingEvent } = useDraggingEvent(
    "timeGrid",
    "move"
  );
  const [currentGridPos, clearCurrentGridPos] = useCurrentPointerPositionInGrid(gridPositionFinder);
  const initGridPosRef = _$2(null);
  p$2(() => {
    if (isPresent(initX) && isPresent(initY)) {
      initGridPosRef.current = gridPositionFinder({
        clientX: initX,
        clientY: initY
      });
    }
  }, [gridPositionFinder, initX, initY]);
  const gridDiff = F$2(() => {
    if (isNil(initGridPosRef.current) || isNil(currentGridPos)) {
      return null;
    }
    return {
      columnDiff: currentGridPos.columnIndex - initGridPosRef.current.columnIndex,
      rowDiff: currentGridPos.rowIndex - initGridPosRef.current.rowIndex
    };
  }, [currentGridPos]);
  const startDateTime = F$2(() => {
    if (isNil(draggingEvent)) {
      return null;
    }
    return draggingEvent.getStarts();
  }, [draggingEvent]);
  const clearState = T$1(() => {
    clearCurrentGridPos();
    clearDraggingEvent();
    initGridPosRef.current = null;
  }, [clearCurrentGridPos, clearDraggingEvent]);
  const nextStartTime = F$2(() => {
    if (isNil(gridDiff) || isNil(startDateTime)) {
      return null;
    }
    return addMilliseconds(
      startDateTime,
      gridDiff.rowDiff * MS_PER_THIRTY_MINUTES + gridDiff.columnDiff * MS_PER_DAY
    );
  }, [gridDiff, startDateTime]);
  const movingEvent = F$2(() => {
    if (isNil(draggingEvent) || isNil(currentGridPos) || isNil(gridDiff)) {
      return null;
    }
    const clonedEvent = draggingEvent.clone();
    const { top, height } = getMovingEventPosition({
      draggingEvent: clonedEvent,
      columnDiff: gridDiff.columnDiff,
      rowDiff: gridDiff.rowDiff,
      timeGridDataRows: timeGridData.rows,
      currentDate: timeGridData.columns[currentGridPos.columnIndex].date
    });
    clonedEvent.setUIProps({
      left: timeGridData.columns[currentGridPos.columnIndex].left,
      width: timeGridData.columns[currentGridPos.columnIndex].width,
      top,
      height
    });
    return clonedEvent;
  }, [currentGridPos, draggingEvent, gridDiff, timeGridData.columns, timeGridData.rows]);
  useWhen(() => {
    const shouldUpdate = !isDraggingCanceled && isPresent(draggingEvent) && isPresent(currentGridPos) && isPresent(gridDiff) && isPresent(nextStartTime) && (gridDiff.rowDiff !== 0 || gridDiff.columnDiff !== 0);
    if (shouldUpdate) {
      const duration = draggingEvent.duration();
      const nextEndTime = addMilliseconds(nextStartTime, duration);
      eventBus.fire("beforeUpdateEvent", {
        event: draggingEvent.model.toEventObject(),
        changes: {
          start: nextStartTime,
          end: nextEndTime
        }
      });
    }
    clearState();
  }, isDraggingEnd);
  return {
    movingEvent,
    nextStartTime
  };
}
function MovingEventShadow$1({
  gridPositionFinder,
  timeGridData
}) {
  const { movingEvent, nextStartTime } = useTimeGridEventMove({
    gridPositionFinder,
    timeGridData
  });
  if (isNil(movingEvent)) {
    return null;
  }
  return /* @__PURE__ */ y$3(TimeEvent, {
    uiModel: movingEvent,
    nextStartTime
  });
}
const TEST_IDS = {
  NOW_INDICATOR: "timegrid-now-indicator",
  NOW_INDICATOR_LABEL: "timegrid-now-indicator-label"
};
const classNames$3 = {
  line: cls(addTimeGridPrefix("now-indicator")),
  left: cls(addTimeGridPrefix("now-indicator-left")),
  marker: cls(addTimeGridPrefix("now-indicator-marker")),
  today: cls(addTimeGridPrefix("now-indicator-today")),
  right: cls(addTimeGridPrefix("now-indicator-right"))
};
function nowIndicatorTheme(theme) {
  return {
    pastBorder: theme.week.nowIndicatorPast.border,
    todayBorder: theme.week.nowIndicatorToday.border,
    futureBorder: theme.week.nowIndicatorFuture.border,
    bulletBackgroundColor: theme.week.nowIndicatorBullet.backgroundColor
  };
}
function NowIndicator({ top, columnWidth, columnCount, columnIndex }) {
  const { pastBorder, todayBorder, futureBorder, bulletBackgroundColor } = useTheme(nowIndicatorTheme);
  const layoutContainer = useLayoutContainer();
  const eventBus = useEventBus();
  const indicatorRef = _$2(null);
  const leftLine = {
    left: toPercent(columnWidth * columnIndex),
    width: toPercent(columnWidth * columnIndex)
  };
  const rightLine = {
    left: toPercent(columnWidth * (columnIndex + 1)),
    width: toPercent(columnWidth * (columnCount - columnIndex + 1))
  };
  p$2(() => {
    const scrollToNow = (behavior) => {
      var _a;
      const scrollArea = (_a = layoutContainer == null ? void 0 : layoutContainer.querySelector(`.${cls("panel")}.${cls("time")}`)) != null ? _a : null;
      if (scrollArea && indicatorRef.current) {
        const { offsetHeight: scrollAreaOffsetHeight } = scrollArea;
        const { offsetTop: targetOffsetTop } = indicatorRef.current;
        const newScrollTop = targetOffsetTop - scrollAreaOffsetHeight / 2;
        if (scrollArea.scrollTo) {
          scrollArea.scrollTo({ top: newScrollTop, behavior });
        } else {
          scrollArea.scrollTop = newScrollTop;
        }
      }
    };
    eventBus.on("scrollToNow", scrollToNow);
    return () => eventBus.off("scrollToNow", scrollToNow);
  }, [eventBus, layoutContainer]);
  p$2(() => {
    eventBus.fire("scrollToNow", "smooth");
  }, [eventBus]);
  return /* @__PURE__ */ y$3("div", {
    ref: indicatorRef,
    className: classNames$3.line,
    style: { top: toPercent(top) },
    "data-testid": TEST_IDS.NOW_INDICATOR
  }, /* @__PURE__ */ y$3("div", {
    className: classNames$3.left,
    style: { width: leftLine.width, borderTop: pastBorder }
  }), /* @__PURE__ */ y$3("div", {
    className: classNames$3.marker,
    style: { left: leftLine.left, backgroundColor: bulletBackgroundColor }
  }), /* @__PURE__ */ y$3("div", {
    className: classNames$3.today,
    style: {
      left: leftLine.left,
      width: toPercent(columnWidth),
      borderTop: todayBorder
    }
  }), /* @__PURE__ */ y$3("div", {
    className: classNames$3.right,
    style: {
      left: rightLine.left,
      borderTop: futureBorder
    }
  }));
}
const classNames$2 = {
  now: addTimeGridPrefix("current-time"),
  dayDifference: addTimeGridPrefix("day-difference")
};
function NowIndicatorLabel({ unit, top, now, zonedNow }) {
  const color = useTheme(T$1((theme) => theme.week.nowIndicatorLabel.color, []));
  const dateDifference = F$2(() => {
    return getDateDifference(zonedNow, now);
  }, [zonedNow, now]);
  const model = {
    unit,
    time: zonedNow,
    format: timeFormats[unit]
  };
  return /* @__PURE__ */ y$3("div", {
    className: cls(classNames$2.now),
    style: { top: toPercent(top), color },
    "data-testid": TEST_IDS.NOW_INDICATOR_LABEL
  }, dateDifference !== 0 && /* @__PURE__ */ y$3("span", {
    className: cls(classNames$2.dayDifference)
  }, `[${dateDifference > 0 ? "+" : "-"}${Math.abs(dateDifference)}]`), /* @__PURE__ */ y$3(Template, {
    template: "timegridNowIndicatorLabel",
    param: model,
    as: "span"
  }));
}
const monthVisibleEventCountSelector = (state) => {
  var _a;
  return (_a = state.options.month.visibleEventCount) != null ? _a : 6;
};
const showNowIndicatorOptionSelector = (state) => state.options.week.showNowIndicator;
const showTimezoneCollapseButtonOptionSelector = (state) => {
  var _a;
  return (_a = state.options.week.showTimezoneCollapseButton) != null ? _a : false;
};
const timezonesCollapsedOptionSelector = (state) => {
  var _a;
  return (_a = state.options.week.timezonesCollapsed) != null ? _a : false;
};
const classNames$1 = {
  timeColumn: addTimeGridPrefix("time-column"),
  hourRows: addTimeGridPrefix("hour-rows"),
  time: addTimeGridPrefix("time"),
  timeLabel: addTimeGridPrefix("time-label"),
  first: addTimeGridPrefix("time-first"),
  last: addTimeGridPrefix("time-last"),
  hidden: addTimeGridPrefix("time-hidden")
};
function backgroundColorSelector(theme) {
  return {
    primaryTimezoneBackgroundColor: theme.week.timeGridLeft.backgroundColor,
    subTimezoneBackgroundColor: theme.week.timeGridLeftAdditionalTimezone.backgroundColor
  };
}
function timeColorSelector(theme) {
  return {
    pastTimeColor: theme.week.pastTime.color,
    futureTimeColor: theme.week.futureTime.color
  };
}
function HourRows({ rowsInfo, isPrimary, borderRight, width, nowIndicatorState }) {
  var _a;
  const showNowIndicator = useStore(showNowIndicatorOptionSelector);
  const { primaryTimezoneBackgroundColor, subTimezoneBackgroundColor } = useTheme(backgroundColorSelector);
  const { pastTimeColor, futureTimeColor } = useTheme(timeColorSelector);
  const zonedNow = isPresent(nowIndicatorState) ? addMinutes(nowIndicatorState.now, (_a = rowsInfo[0].diffFromPrimaryTimezone) != null ? _a : 0) : null;
  const backgroundColor = isPrimary ? primaryTimezoneBackgroundColor : subTimezoneBackgroundColor;
  return /* @__PURE__ */ y$3("div", {
    role: "rowgroup",
    className: cls(classNames$1.hourRows),
    style: { width: toPercent(width), borderRight, backgroundColor }
  }, rowsInfo.map(({ date: date2, top, className: className2 }) => {
    const isPast = isPresent(zonedNow) && date2 < zonedNow;
    const color = isPast ? pastTimeColor : futureTimeColor;
    return /* @__PURE__ */ y$3("div", {
      key: date2.getTime(),
      className: className2,
      style: {
        top: toPercent(top),
        color
      },
      role: "row"
    }, /* @__PURE__ */ y$3(Template, {
      template: `timegridDisplay${isPrimary ? "Primary" : ""}Time`,
      param: { time: date2 },
      as: "span"
    }));
  }), showNowIndicator && isPresent(nowIndicatorState) && isPresent(zonedNow) && /* @__PURE__ */ y$3(NowIndicatorLabel, {
    unit: "hour",
    top: nowIndicatorState.top,
    now: nowIndicatorState.now,
    zonedNow
  }));
}
const TimeColumn = x$1(function TimeColumn2({ timeGridRows, nowIndicatorState }) {
  const showNowIndicator = useStore(showNowIndicatorOptionSelector);
  const timezones = useStore(timezonesSelector);
  const timezonesCollapsed = useStore(timezonesCollapsedOptionSelector);
  const tzConverter = useTZConverter();
  const { width, borderRight } = useTheme(weekTimeGridLeftSelector);
  const rowsByHour = F$2(
    () => timeGridRows.filter((_2, index) => index % 2 === 0 || index === timeGridRows.length - 1),
    [timeGridRows]
  );
  const hourRowsPropsMapper = T$1(
    (row, index, diffFromPrimaryTimezone) => {
      const shouldHideRow = ({ top: rowTop, height: rowHeight }) => {
        if (!showNowIndicator || isNil(nowIndicatorState)) {
          return false;
        }
        const indicatorTop = nowIndicatorState.top;
        return rowTop - rowHeight <= indicatorTop && indicatorTop <= rowTop + rowHeight;
      };
      const isFirst = index === 0;
      const isLast = index === rowsByHour.length - 1;
      const className2 = cls(classNames$1.time, {
        [classNames$1.first]: isFirst,
        [classNames$1.last]: isLast,
        [classNames$1.hidden]: shouldHideRow(row)
      });
      let date2 = setTimeStrToDate(new TZDate(), isLast ? row.endTime : row.startTime);
      if (isPresent(diffFromPrimaryTimezone)) {
        date2 = addMinutes(date2, diffFromPrimaryTimezone);
      }
      return {
        date: date2,
        top: row.top,
        className: className2,
        diffFromPrimaryTimezone
      };
    },
    [rowsByHour, nowIndicatorState, showNowIndicator]
  );
  const [primaryTimezone, ...otherTimezones] = timezones;
  const hourRowsWidth = otherTimezones.length > 0 ? 100 / (otherTimezones.length + 1) : 100;
  const primaryTimezoneHourRowsProps = rowsByHour.map(
    (row, index) => hourRowsPropsMapper(row, index)
  );
  const otherTimezoneHourRowsProps = F$2(() => {
    if (otherTimezones.length === 0) {
      return [];
    }
    return otherTimezones.reverse().map((timezone) => {
      const { timezoneName } = timezone;
      const primaryTimezoneOffset = tzConverter(primaryTimezone.timezoneName).getTimezoneOffset();
      const currentTimezoneOffset = tzConverter(timezoneName).getTimezoneOffset();
      const diffFromPrimaryTimezone = currentTimezoneOffset - primaryTimezoneOffset;
      return rowsByHour.map(
        (row, index) => hourRowsPropsMapper(row, index, diffFromPrimaryTimezone)
      );
    });
  }, [hourRowsPropsMapper, otherTimezones, primaryTimezone, rowsByHour, tzConverter]);
  return /* @__PURE__ */ y$3("div", {
    className: cls(classNames$1.timeColumn),
    style: { width },
    "data-testid": "timegrid-time-column"
  }, !timezonesCollapsed && otherTimezoneHourRowsProps.map((rowsInfo) => /* @__PURE__ */ y$3(HourRows, {
    key: rowsInfo[0].diffFromPrimaryTimezone,
    rowsInfo,
    isPrimary: false,
    borderRight,
    width: hourRowsWidth,
    nowIndicatorState
  })), /* @__PURE__ */ y$3(HourRows, {
    rowsInfo: primaryTimezoneHourRowsProps,
    isPrimary: true,
    borderRight,
    width: timezonesCollapsed ? 100 : hourRowsWidth,
    nowIndicatorState
  }));
});
function getTopPercentByTime(date2, start, end) {
  const startTime = start.getTime();
  const endTime = end.getTime();
  const time = limit(date2.getTime(), [startTime], [endTime]) - startTime;
  const max2 = endTime - startTime;
  const topPercent = ratio(max2, 100, time);
  return limit(topPercent, [0], [100]);
}
function getTopHeightByTime(start, end, minTime, maxTime) {
  const top = getTopPercentByTime(start, minTime, maxTime);
  const bottom = getTopPercentByTime(end, minTime, maxTime);
  const height = bottom - top;
  return {
    top,
    height
  };
}
const MIN_HEIGHT_PERCENT = 1;
function isBetween(startColumnTime, endColumnTime) {
  return (uiModel) => {
    const { goingDuration = 0, comingDuration = 0 } = uiModel.model;
    const ownStarts = addMinutes(uiModel.getStarts(), -goingDuration);
    const ownEnds = addMinutes(uiModel.getEnds(), comingDuration);
    return !(ownEnds <= startColumnTime || ownStarts >= endColumnTime);
  };
}
function setInnerHeights(uiModel, options) {
  const { renderStart, renderEnd, modelStart, modelEnd } = options;
  const { goingDuration = 0, comingDuration = 0 } = uiModel.model;
  let modelDurationHeight = 100;
  if (goingDuration > 0) {
    const { height: goingDurationHeight } = getTopHeightByTime(
      renderStart,
      modelStart,
      renderStart,
      renderEnd
    );
    uiModel.goingDurationHeight = goingDurationHeight;
    modelDurationHeight -= goingDurationHeight;
  }
  if (comingDuration > 0) {
    const { height: comingDurationHeight } = getTopHeightByTime(
      modelEnd,
      renderEnd,
      renderStart,
      renderEnd
    );
    uiModel.comingDurationHeight = comingDurationHeight;
    modelDurationHeight -= comingDurationHeight;
  }
  uiModel.modelDurationHeight = modelDurationHeight;
}
function setCroppedEdges(uiModel, options) {
  const { goingStart, comingEnd, startColumnTime, endColumnTime } = options;
  if (goingStart < startColumnTime) {
    uiModel.croppedStart = true;
  }
  if (comingEnd > endColumnTime) {
    uiModel.croppedEnd = true;
  }
}
function getDuplicateLeft(uiModel, baseLeft) {
  const { duplicateEvents, duplicateEventIndex } = uiModel;
  const prevEvent = duplicateEvents[duplicateEventIndex - 1];
  let left = baseLeft;
  if (prevEvent) {
    const { percent: leftPercent, px: leftPx } = extractPercentPx(`${prevEvent.duplicateLeft}`);
    const { percent: widthPercent, px: widthPx } = extractPercentPx(`${prevEvent.duplicateWidth}`);
    const percent = leftPercent + widthPercent;
    const px = leftPx + widthPx + TIME_EVENT_CONTAINER_MARGIN_LEFT;
    if (percent !== 0) {
      left = `calc(${toPercent(percent)} ${px > 0 ? "+" : "-"} ${toPx(Math.abs(px))})`;
    } else {
      left = toPx(px);
    }
  } else {
    left = toPercent(left);
  }
  return left;
}
function getDuplicateWidth(uiModel, baseWidth) {
  const { collapse } = uiModel;
  return collapse ? `${COLLAPSED_DUPLICATE_EVENT_WIDTH_PX}px` : `calc(${toPercent(baseWidth)} - ${toPx(
    (COLLAPSED_DUPLICATE_EVENT_WIDTH_PX + TIME_EVENT_CONTAINER_MARGIN_LEFT) * (uiModel.duplicateEvents.length - 1) + TIME_EVENT_CONTAINER_MARGIN_LEFT
  )})`;
}
function setDimension(uiModel, options) {
  const { startColumnTime, endColumnTime, baseWidth, columnIndex, renderStart, renderEnd } = options;
  const { duplicateEvents } = uiModel;
  const { top, height } = getTopHeightByTime(
    renderStart,
    renderEnd,
    startColumnTime,
    endColumnTime
  );
  const dimension = {
    top,
    left: baseWidth * columnIndex,
    width: baseWidth,
    height: Math.max(MIN_HEIGHT_PERCENT, height),
    duplicateLeft: "",
    duplicateWidth: ""
  };
  if (duplicateEvents.length > 0) {
    dimension.duplicateLeft = getDuplicateLeft(uiModel, dimension.left);
    dimension.duplicateWidth = getDuplicateWidth(uiModel, dimension.width);
  }
  uiModel.setUIProps(dimension);
}
function getRenderInfoOptions(uiModel, columnIndex, baseWidth, startColumnTime, endColumnTime) {
  const { goingDuration = 0, comingDuration = 0 } = uiModel.model;
  const modelStart = uiModel.getStarts();
  const modelEnd = uiModel.getEnds();
  const goingStart = addMinutes(modelStart, -goingDuration);
  const comingEnd = addMinutes(modelEnd, comingDuration);
  const renderStart = max(goingStart, startColumnTime);
  const renderEnd = min(comingEnd, endColumnTime);
  return {
    baseWidth,
    columnIndex,
    modelStart,
    modelEnd,
    renderStart,
    renderEnd,
    goingStart,
    comingEnd,
    startColumnTime,
    endColumnTime,
    duplicateEvents: uiModel.duplicateEvents
  };
}
function setRenderInfo({
  uiModel,
  columnIndex,
  baseWidth,
  startColumnTime,
  endColumnTime,
  isDuplicateEvent = false
}) {
  if (!isDuplicateEvent && uiModel.duplicateEvents.length > 0) {
    uiModel.duplicateEvents.forEach((event) => {
      setRenderInfo({
        uiModel: event,
        columnIndex,
        baseWidth,
        startColumnTime,
        endColumnTime,
        isDuplicateEvent: true
      });
    });
    return;
  }
  const renderInfoOptions = getRenderInfoOptions(
    uiModel,
    columnIndex,
    baseWidth,
    startColumnTime,
    endColumnTime
  );
  setDimension(uiModel, renderInfoOptions);
  setInnerHeights(uiModel, renderInfoOptions);
  setCroppedEdges(uiModel, renderInfoOptions);
}
function setDuplicateEvents(uiModels, options, selectedDuplicateEventCid) {
  const { getDuplicateEvents, getMainEvent } = options;
  const eventObjects = uiModels.map((uiModel) => uiModel.model.toEventObject());
  uiModels.forEach((targetUIModel) => {
    if (targetUIModel.collapse || targetUIModel.duplicateEvents.length > 0) {
      return;
    }
    const duplicateEvents = getDuplicateEvents(targetUIModel.model.toEventObject(), eventObjects);
    if (duplicateEvents.length <= 1) {
      return;
    }
    const mainEvent = getMainEvent(duplicateEvents);
    const duplicateEventUIModels = duplicateEvents.map(
      (event) => uiModels.find((uiModel) => uiModel.cid() === event.__cid)
    );
    const isSelectedGroup = !!(selectedDuplicateEventCid > DEFAULT_DUPLICATE_EVENT_CID && duplicateEvents.find((event) => event.__cid === selectedDuplicateEventCid));
    const duplicateStarts = duplicateEvents.reduce((acc, { start, goingDuration }) => {
      const renderStart = addMinutes(start, -goingDuration);
      return min(acc, renderStart);
    }, duplicateEvents[0].start);
    const duplicateEnds = duplicateEvents.reduce((acc, { end, comingDuration }) => {
      const renderEnd = addMinutes(end, comingDuration);
      return max(acc, renderEnd);
    }, duplicateEvents[0].end);
    duplicateEventUIModels.forEach((event, index) => {
      const isMain = event.cid() === mainEvent.__cid;
      const collapse = !(isSelectedGroup && event.cid() === selectedDuplicateEventCid || !isSelectedGroup && isMain);
      event.setUIProps({
        duplicateEvents: duplicateEventUIModels,
        duplicateEventIndex: index,
        collapse,
        isMain,
        duplicateStarts,
        duplicateEnds
      });
    });
  });
  return uiModels;
}
function setRenderInfoOfUIModels(events, startColumnTime, endColumnTime, selectedDuplicateEventCid, collapseDuplicateEventsOptions) {
  const uiModels = events.filter(isTimeEvent).filter(isBetween(startColumnTime, endColumnTime)).sort(array.compare.event.asc);
  if (collapseDuplicateEventsOptions) {
    setDuplicateEvents(uiModels, collapseDuplicateEventsOptions, selectedDuplicateEventCid);
  }
  const expandedEvents = uiModels.filter((uiModel) => !uiModel.collapse);
  const uiModelColl = createEventCollection(...expandedEvents);
  const usingTravelTime = true;
  const collisionGroups = getCollisionGroup(expandedEvents, usingTravelTime);
  const matrices = getMatrices(uiModelColl, collisionGroups, usingTravelTime);
  matrices.forEach((matrix) => {
    const maxRowLength = Math.max(...matrix.map((row) => row.length));
    const baseWidth = Math.round(100 / maxRowLength);
    matrix.forEach((row) => {
      row.forEach((uiModel, columnIndex) => {
        setRenderInfo({ uiModel, columnIndex, baseWidth, startColumnTime, endColumnTime });
      });
    });
  });
  return uiModels;
}
function useInterval(callback, delay) {
  const savedCallback = _$2(callback);
  p$2(() => {
    savedCallback.current = callback;
  }, [callback]);
  p$2(() => {
    const tick = () => savedCallback.current();
    const intervalDelay = delay != null ? delay : -1;
    if (intervalDelay > 0) {
      const id = setInterval(tick, intervalDelay);
      return () => clearInterval(id);
    }
  }, [delay]);
}
function useIsMounted() {
  const isMountedRef = _$2(true);
  p$2(() => {
    return () => {
      isMountedRef.current = false;
    };
  }, []);
  return T$1(() => isMountedRef.current, []);
}
const classNames = {
  timegrid: cls(className),
  scrollArea: cls(addTimeGridPrefix("scroll-area"))
};
function TimeGrid({ timeGridData, events }) {
  const {
    isReadOnly,
    week: { narrowWeekend, startDayOfWeek, collapseDuplicateEvents }
  } = useStore(optionsSelector);
  const showNowIndicator = useStore(showNowIndicatorOptionSelector);
  const selectedDuplicateEventCid = useStore(
    (state) => state.weekViewLayout.selectedDuplicateEventCid
  );
  const [, getNow] = usePrimaryTimezone();
  const isMounted = useIsMounted();
  const { width: timeGridLeftWidth } = useTheme(weekTimeGridLeftSelector);
  const [nowIndicatorState, setNowIndicatorState] = h$2(null);
  const { columns, rows } = timeGridData;
  const lastColumnIndex = columns.length - 1;
  const totalUIModels = F$2(
    () => columns.map(
      ({ date: date2 }) => events.filter(isBetween(toStartOfDay(date2), toEndOfDay(date2))).map((uiModel) => uiModel.clone())
    ).map(
      (uiModelsByColumn, columnIndex) => setRenderInfoOfUIModels(
        uiModelsByColumn,
        setTimeStrToDate(columns[columnIndex].date, first(rows).startTime),
        setTimeStrToDate(columns[columnIndex].date, last(rows).endTime),
        selectedDuplicateEventCid,
        collapseDuplicateEvents
      )
    ),
    [columns, rows, events, selectedDuplicateEventCid, collapseDuplicateEvents]
  );
  const currentDateData = F$2(() => {
    const now = getNow();
    const currentDateIndexInColumns = columns.findIndex((column) => isSameDate(column.date, now));
    if (currentDateIndexInColumns < 0) {
      return null;
    }
    const startTime = setTimeStrToDate(
      columns[currentDateIndexInColumns].date,
      timeGridData.rows[0].startTime
    );
    const endTime = setTimeStrToDate(
      columns[currentDateIndexInColumns].date,
      last(timeGridData.rows).endTime
    );
    return {
      startTime,
      endTime,
      currentDateIndex: currentDateIndexInColumns
    };
  }, [columns, getNow, timeGridData.rows]);
  const [columnsContainer, setColumnsContainer] = useDOMNode();
  const gridPositionFinder = F$2(
    () => createGridPositionFinder({
      rowsCount: rows.length,
      columnsCount: columns.length,
      container: columnsContainer,
      narrowWeekend,
      startDayOfWeek
    }),
    [columns.length, columnsContainer, narrowWeekend, rows.length, startDayOfWeek]
  );
  const onMouseDown = useGridSelection({
    type: "timeGrid",
    gridPositionFinder,
    selectionSorter: timeGridSelectionHelper.sortSelection,
    dateGetter: timeGridSelectionHelper.getDateFromCollection,
    dateCollection: timeGridData
  });
  const updateTimeGridIndicator = T$1(() => {
    if (isPresent(currentDateData)) {
      const { startTime, endTime } = currentDateData;
      const now = getNow();
      if (startTime <= now && now <= endTime) {
        setNowIndicatorState({
          top: getTopPercentByTime(now, startTime, endTime),
          now
        });
      }
    }
  }, [currentDateData, getNow]);
  y$2(() => {
    var _a;
    if (isMounted()) {
      if (((_a = currentDateData == null ? void 0 : currentDateData.currentDateIndex) != null ? _a : -1) >= 0) {
        updateTimeGridIndicator();
      } else {
        setNowIndicatorState(null);
      }
    }
  }, [currentDateData, isMounted, updateTimeGridIndicator]);
  useInterval(updateTimeGridIndicator, isPresent(currentDateData) ? MS_PER_MINUTES : null);
  return /* @__PURE__ */ y$3("div", {
    className: classNames.timegrid
  }, /* @__PURE__ */ y$3("div", {
    className: classNames.scrollArea
  }, /* @__PURE__ */ y$3(TimeColumn, {
    timeGridRows: rows,
    nowIndicatorState
  }), /* @__PURE__ */ y$3("div", {
    className: cls("columns"),
    style: { left: timeGridLeftWidth },
    ref: setColumnsContainer,
    onMouseDown: passConditionalProp(!isReadOnly, onMouseDown)
  }, /* @__PURE__ */ y$3(GridLines, {
    timeGridRows: rows
  }), /* @__PURE__ */ y$3(MovingEventShadow$1, {
    gridPositionFinder,
    timeGridData
  }), columns.map((column, index) => /* @__PURE__ */ y$3(Column, {
    key: column.date.toString(),
    timeGridData,
    columnDate: column.date,
    columnWidth: toPercent(column.width),
    columnIndex: index,
    totalUIModels,
    gridPositionFinder,
    isLastColumn: index === lastColumnIndex
  })), showNowIndicator && isPresent(currentDateData) && isPresent(nowIndicatorState) ? /* @__PURE__ */ y$3(NowIndicator, {
    top: nowIndicatorState.top,
    columnWidth: columns[0].width,
    columnCount: columns.length,
    columnIndex: currentDateData.currentDateIndex
  }) : null)));
}
function TimezoneCollapseButton({ isCollapsed }) {
  const eventBus = useEventBus();
  const iconClassName = cls("icon", {
    "ic-arrow-right": isCollapsed,
    "ic-arrow-left": !isCollapsed
  });
  return /* @__PURE__ */ y$3("button", {
    className: cls(addTimeGridPrefix("timezone-collapse-button")),
    "aria-expanded": !isCollapsed,
    onClick: () => eventBus.fire("clickTimezonesCollapseBtn", isCollapsed)
  }, /* @__PURE__ */ y$3("span", {
    className: iconClassName,
    role: "img"
  }));
}
function TimezoneLabel({ label, offset, tooltip, width = 100, left }) {
  return /* @__PURE__ */ y$3("div", {
    title: tooltip,
    className: cls(addTimeGridPrefix("timezone-label")),
    style: {
      width: toPercent(width),
      height: toPercent(100),
      left: toPercent(left)
    },
    role: "gridcell"
  }, /* @__PURE__ */ y$3(Template, {
    template: "timezoneDisplayLabel",
    param: { displayLabel: label, timezoneOffset: offset },
    as: "span"
  }));
}
function useTimezoneCollapseOptions() {
  const showTimezoneCollapseButton = useStore(showTimezoneCollapseButtonOptionSelector);
  const timezonesCollapsed = useStore(timezonesCollapsedOptionSelector);
  return F$2(() => {
    return {
      showTimezoneCollapseButton,
      timezonesCollapsed
    };
  }, [showTimezoneCollapseButton, timezonesCollapsed]);
}
function TimezoneLabels({ top }) {
  const timezones = useStore(timezonesSelector);
  const { width } = useTheme(weekTimeGridLeftSelector);
  const tzConverter = useTZConverter();
  const { showTimezoneCollapseButton, timezonesCollapsed } = useTimezoneCollapseOptions();
  if (timezones.length <= 1) {
    return null;
  }
  const timezoneLabelProps = timezones.map(({ displayLabel, timezoneName, tooltip }) => {
    return !isUndefined_1(displayLabel) ? { label: displayLabel, offset: null, tooltip: tooltip != null ? tooltip : timezoneName } : {
      label: null,
      offset: tzConverter(timezoneName).getTimezoneOffset(),
      tooltip: tooltip != null ? tooltip : timezoneName
    };
  });
  const [primaryTimezone, ...restTimezones] = timezoneLabelProps;
  const subTimezones = restTimezones.reverse();
  const timezonesCount = timezonesCollapsed ? 1 : timezones.length;
  const timezoneLabelWidth = 100 / timezonesCount;
  return /* @__PURE__ */ y$3("div", {
    style: {
      top,
      width
    },
    role: "columnheader",
    className: cls("timezone-labels-slot")
  }, !timezonesCollapsed && subTimezones.map((subTimezone, index) => {
    var _a;
    return /* @__PURE__ */ y$3(TimezoneLabel, __spreadValues({
      key: `subTimezone-${(_a = subTimezone.label) != null ? _a : subTimezone.offset}`,
      width: timezoneLabelWidth,
      left: timezoneLabelWidth * index
    }, subTimezone));
  }), showTimezoneCollapseButton && /* @__PURE__ */ y$3(TimezoneCollapseButton, {
    isCollapsed: timezonesCollapsed
  }), /* @__PURE__ */ y$3(TimezoneLabel, __spreadValues({
    width: timezoneLabelWidth,
    left: timezoneLabelWidth * subTimezones.length
  }, primaryTimezone)));
}
const VIEW_TYPE = {
  MONTH: "month",
  WEEK: "week",
  DAY: "day"
};
const DEFAULT_TASK_PANEL = ["milestone", "task"];
const DEFAULT_EVENT_PANEL = ["allday", "time"];
function getActivePanels(taskView, eventView) {
  const activePanels = [];
  if (taskView === true) {
    activePanels.push(...DEFAULT_TASK_PANEL);
  } else if (Array.isArray(taskView)) {
    activePanels.push(...taskView);
  }
  if (eventView === true) {
    activePanels.push(...DEFAULT_EVENT_PANEL);
  } else if (Array.isArray(eventView)) {
    activePanels.push(...eventView);
  }
  return activePanels;
}
function useEventsWithTimezone(events) {
  const primaryTimezoneName = useStore(primaryTimezoneSelector);
  const tzConverter = useTZConverter();
  return F$2(() => {
    if (primaryTimezoneName === "Local") {
      return events;
    }
    const isSystemUsingDST = isUsingDST(new TZDate());
    const {
      timedEvents = createEventCollection(),
      totalEvents = createEventCollection()
    } = events.groupBy(
      (eventModel) => eventModel.category === "time" ? "timedEvents" : "totalEvents"
    );
    timedEvents.each((eventModel) => {
      const clonedEventModel = clone$2(eventModel);
      let zonedStart = tzConverter(primaryTimezoneName, clonedEventModel.start);
      let zonedEnd = tzConverter(primaryTimezoneName, clonedEventModel.end);
      if (isSystemUsingDST) {
        if (!isUsingDST(zonedStart)) {
          zonedStart = zonedStart.addHours(1);
        }
        if (!isUsingDST(zonedEnd)) {
          zonedEnd = zonedEnd.addHours(1);
        }
      } else {
        if (isUsingDST(zonedStart)) {
          zonedStart = zonedStart.addHours(-1);
        }
        if (isUsingDST(zonedEnd)) {
          zonedEnd = zonedEnd.addHours(-1);
        }
      }
      clonedEventModel.start = zonedStart;
      clonedEventModel.end = zonedEnd;
      totalEvents.add(clonedEventModel);
    });
    return totalEvents;
  }, [events, primaryTimezoneName, tzConverter]);
}
function useCalendarData(calendar, ...filters) {
  const filteredEvents = F$2(
    () => calendar.events.filter(Collection.and(...filters)),
    [calendar.events, filters]
  );
  const filteredEventsWithTimezone = useEventsWithTimezone(filteredEvents);
  return F$2(
    () => __spreadProps(__spreadValues({}, calendar), {
      events: filteredEventsWithTimezone
    }),
    [calendar, filteredEventsWithTimezone]
  );
}
function isTimeGridDraggingType(draggingItemType) {
  return /^(event|gridSelection)\/timeGrid/.test(draggingItemType != null ? draggingItemType : "");
}
function useTimeGridScrollSync(scrollArea, rowCount) {
  useTransientUpdate(dndSelector, ({ y: y2, draggingItemType, draggingState }) => {
    if (isPresent(scrollArea) && isTimeGridDraggingType(draggingItemType) && draggingState === DraggingState.DRAGGING && isPresent(y2)) {
      const { offsetTop, offsetHeight, scrollHeight } = scrollArea;
      const scrollBoundary = Math.floor(scrollHeight / rowCount);
      const layoutHeight = offsetTop + offsetHeight;
      if (y2 < offsetTop + scrollBoundary) {
        const scrollDiff = y2 - (offsetTop + scrollBoundary);
        scrollArea.scrollTop = Math.max(0, scrollArea.scrollTop + scrollDiff);
      } else if (y2 > layoutHeight - scrollBoundary) {
        const scrollDiff = y2 - (layoutHeight - scrollBoundary);
        scrollArea.scrollTop = Math.min(offsetHeight, scrollArea.scrollTop + scrollDiff);
      }
    }
  });
}
function timegridHeightSelector(state) {
  var _a, _b, _c;
  return (_c = (_b = (_a = state.weekViewLayout) == null ? void 0 : _a.dayGridRows) == null ? void 0 : _b.time) == null ? void 0 : _c.height;
}
function useTimezoneLabelsTop(timePanel) {
  const timeGridPanelHeight = useStore(timegridHeightSelector);
  const [stickyTop, setStickyTop] = h$2(null);
  y$2(() => {
    if (isPresent(timeGridPanelHeight) && timePanel) {
      setStickyTop(timePanel.offsetTop);
    }
  }, [timeGridPanelHeight, timePanel]);
  return stickyTop;
}
function useDayViewState() {
  const calendar = useStore(calendarSelector);
  const options = useStore(optionsSelector);
  const { dayGridRows: gridRowLayout, lastPanelType } = useStore(weekViewLayoutSelector);
  const { renderDate } = useStore(viewSelector);
  return F$2(
    () => ({
      calendar,
      options,
      gridRowLayout,
      lastPanelType,
      renderDate
    }),
    [calendar, options, gridRowLayout, lastPanelType, renderDate]
  );
}
function Day$1() {
  var _a, _b;
  const { calendar, options, gridRowLayout, lastPanelType, renderDate } = useDayViewState();
  const primaryTimezoneName = useStore(primaryTimezoneSelector);
  const gridHeaderMarginLeft = useTheme(T$1((theme) => theme.week.dayGridLeft.width, []));
  const [timePanel, setTimePanelRef] = useDOMNode();
  const weekOptions = options.week;
  const { narrowWeekend, startDayOfWeek, workweek, hourStart, hourEnd, eventView, taskView } = weekOptions;
  const days = F$2(() => [renderDate], [renderDate]);
  const dayNames = getDayNames(days, (_b = (_a = options.week) == null ? void 0 : _a.dayNames) != null ? _b : []);
  const { rowStyleInfo, cellWidthMap } = getRowStyleInfo(
    days.length,
    narrowWeekend,
    startDayOfWeek,
    workweek
  );
  const calendarData = useCalendarData(calendar, options.eventFilter);
  const dayGridEvents = F$2(() => {
    const getFilterRange = () => {
      if (primaryTimezoneName === "Local") {
        return [toStartOfDay(days[0]), toEndOfDay(days[0])];
      }
      return [toStartOfDay(addDate(days[0], -1)), toEndOfDay(addDate(days[0], 1))];
    };
    const [weekStartDate, weekEndDate] = getFilterRange();
    return getWeekViewEvents(days, calendarData, {
      narrowWeekend,
      hourStart,
      hourEnd,
      weekStartDate,
      weekEndDate
    });
  }, [calendarData, days, hourEnd, hourStart, narrowWeekend, primaryTimezoneName]);
  const timeGridData = F$2(
    () => createTimeGridData(days, {
      hourStart,
      hourEnd,
      narrowWeekend
    }),
    [days, hourEnd, hourStart, narrowWeekend]
  );
  const activePanels = getActivePanels(taskView, eventView);
  const gridRows = activePanels.map((key) => {
    var _a2, _b2;
    if (key === "time") {
      return null;
    }
    const rowType = key;
    return /* @__PURE__ */ y$3(Panel, {
      key: rowType,
      name: rowType,
      resizable: rowType !== lastPanelType
    }, rowType === "allday" ? /* @__PURE__ */ y$3(AlldayGridRow, {
      events: dayGridEvents[rowType],
      rowStyleInfo,
      gridColWidthMap: cellWidthMap,
      weekDates: days,
      height: (_a2 = gridRowLayout[rowType]) == null ? void 0 : _a2.height,
      options: weekOptions
    }) : /* @__PURE__ */ y$3(OtherGridRow, {
      category: rowType,
      events: dayGridEvents[rowType],
      weekDates: days,
      height: (_b2 = gridRowLayout[rowType]) == null ? void 0 : _b2.height,
      options: weekOptions,
      gridColWidthMap: cellWidthMap
    }));
  });
  useTimeGridScrollSync(timePanel, timeGridData.rows.length);
  const stickyTop = useTimezoneLabelsTop(timePanel);
  return /* @__PURE__ */ y$3(Layout, {
    className: cls("day-view"),
    autoAdjustPanels: true
  }, /* @__PURE__ */ y$3(Panel, {
    name: "day-view-day-names",
    initialHeight: WEEK_DAY_NAME_HEIGHT + WEEK_DAY_NAME_BORDER
  }, /* @__PURE__ */ y$3(GridHeader, {
    type: "week",
    dayNames,
    marginLeft: gridHeaderMarginLeft,
    rowStyleInfo
  })), gridRows, activePanels.includes("time") ? /* @__PURE__ */ y$3(Panel, {
    name: "time",
    autoSize: 1,
    ref: setTimePanelRef
  }, /* @__PURE__ */ y$3(TimeGrid, {
    events: dayGridEvents.time,
    timeGridData
  }), /* @__PURE__ */ y$3(TimezoneLabels, {
    top: stickyTop
  })) : null);
}
function AccumulatedGridSelection({ rowIndex, weekDates, narrowWeekend }) {
  const gridSelectionDataByRow = useStore(
    T$1(
      (state) => state.gridSelection.accumulated.dayGridMonth.map(
        (gridSelection) => dayGridMonthSelectionHelper.calculateSelection(gridSelection, rowIndex, weekDates.length)
      ),
      [rowIndex, weekDates]
    )
  );
  return /* @__PURE__ */ y$3("div", {
    className: cls("accumulated-grid-selection")
  }, gridSelectionDataByRow.map(
    (gridSelectionData) => gridSelectionData ? /* @__PURE__ */ y$3(GridSelection$1, {
      type: "accumulated",
      gridSelectionData,
      weekDates,
      narrowWeekend
    }) : null
  ));
}
function MoreEventsButton({ type, number, onClickButton, className: className2 }) {
  const { reset } = useDispatch("dnd");
  const handleMouseDown = (e2) => {
    e2.stopPropagation();
  };
  const handleClick = () => {
    reset();
    onClickButton();
  };
  const exceedButtonTemplate = `monthGrid${type === CellBarType.header ? "Header" : "Footer"}Exceed`;
  return /* @__PURE__ */ y$3("button", {
    type: "button",
    onMouseDown: handleMouseDown,
    onClick: handleClick,
    className: className2
  }, /* @__PURE__ */ y$3(Template, {
    template: exceedButtonTemplate,
    param: number
  }));
}
function getDateColor({
  date: date2,
  theme,
  renderDate,
  isToday
}) {
  const dayIndex = date2.getDay();
  const thisMonth = renderDate.getMonth();
  const isSameMonth2 = thisMonth === date2.getMonth();
  const {
    common: { holiday, saturday, today, dayName },
    month: { dayExceptThisMonth, holidayExceptThisMonth }
  } = theme;
  if (isToday) {
    return today.color;
  }
  if (isSunday(dayIndex)) {
    return isSameMonth2 ? holiday.color : holidayExceptThisMonth.color;
  }
  if (isSaturday(dayIndex)) {
    return isSameMonth2 ? saturday.color : dayExceptThisMonth.color;
  }
  if (!isSameMonth2) {
    return dayExceptThisMonth.color;
  }
  return dayName.color;
}
function useCellHeaderTheme() {
  const common = useCommonTheme();
  const month = useMonthTheme();
  return F$2(() => ({ common, month }), [common, month]);
}
function CellHeader({
  type = CellBarType.header,
  exceedCount = 0,
  date: date2,
  onClickExceedCount
}) {
  const { renderDate } = useStore(viewSelector);
  const [, getNow] = usePrimaryTimezone();
  const theme = useCellHeaderTheme();
  const height = theme.month.gridCell[`${type}Height`];
  const ymd = toFormat(date2, "YYYYMMDD");
  const todayYmd = toFormat(getNow(), "YYYYMMDD");
  const isToday = ymd === todayYmd;
  const templateParam = {
    date: toFormat(date2, "YYYY-MM-DD"),
    day: date2.getDay(),
    hiddenEventCount: exceedCount,
    isOtherMonth: date2.getMonth() !== renderDate.getMonth(),
    isToday: ymd === todayYmd,
    month: date2.getMonth(),
    ymd
  };
  const gridCellDateStyle = { color: getDateColor({ date: date2, theme, isToday, renderDate }) };
  const monthGridTemplate = `monthGrid${capitalize(type)}`;
  if (isNil(height)) {
    return null;
  }
  return /* @__PURE__ */ y$3("div", {
    className: cls(`grid-cell-${type}`),
    style: { height }
  }, /* @__PURE__ */ y$3("span", {
    className: cls("grid-cell-date"),
    style: gridCellDateStyle
  }, /* @__PURE__ */ y$3(Template, {
    template: monthGridTemplate,
    param: templateParam
  })), exceedCount ? /* @__PURE__ */ y$3(MoreEventsButton, {
    type,
    number: exceedCount,
    onClickButton: onClickExceedCount,
    className: cls("grid-cell-more-events")
  }) : null);
}
function getSeeMorePopupSize({
  grid,
  offsetWidth,
  eventLength,
  layerSize
}) {
  const minHeight = getSize(grid).height + MONTH_MORE_VIEW_PADDING * 2;
  let width = offsetWidth + MONTH_MORE_VIEW_PADDING * 2;
  const { width: moreViewWidth, height: moreViewHeight } = layerSize;
  const MAX_DISPLAY_EVENT_COUNT = 10;
  width = Math.max(width, MONTH_MORE_VIEW_MIN_WIDTH);
  let height = MONTH_MORE_VIEW_HEADER_HEIGHT + MONTH_MORE_VIEW_HEADER_MARGIN_BOTTOM + MONTH_MORE_VIEW_PADDING;
  const eventHeight = MONTH_EVENT_HEIGHT + MONTH_EVENT_MARGIN_TOP;
  if (eventLength <= MAX_DISPLAY_EVENT_COUNT) {
    height += eventHeight * eventLength;
  } else {
    height += eventHeight * MAX_DISPLAY_EVENT_COUNT;
  }
  if (moreViewWidth) {
    width = moreViewWidth;
  }
  if (moreViewHeight) {
    height = moreViewHeight;
  }
  if (isNaN(height) || height < minHeight) {
    height = minHeight;
  }
  return { width, height };
}
function getSeeMorePopupPosition(popupSize, appContainerSize, cellRect) {
  const {
    width: containerWidth,
    height: containerHeight,
    left: containerLeft,
    top: containerTop
  } = appContainerSize;
  const { width: popupWidth, height: popupHeight } = popupSize;
  const containerRight = containerLeft + containerWidth;
  const containerBottom = containerTop + containerHeight;
  let left = cellRect.left + cellRect.width / 2 - popupWidth / 2;
  let { top } = cellRect;
  const isLeftOutOfContainer = left < containerLeft;
  const isRightOutOfContainer = left + popupWidth > containerRight;
  const isUpperOutOfContainer = top < containerTop;
  const isLowerOutOfContainer = top + popupHeight > containerBottom;
  if (isLeftOutOfContainer) {
    left = containerLeft;
  }
  if (isRightOutOfContainer) {
    left = containerRight - popupWidth;
  }
  if (isUpperOutOfContainer) {
    top = containerTop;
  }
  if (isLowerOutOfContainer) {
    top = containerBottom - popupHeight;
  }
  return { top: top + window.scrollY, left: left + window.scrollX };
}
function getSeeMorePopupRect({
  layoutContainer,
  cell,
  popupSize
}) {
  const containerRect = layoutContainer.getBoundingClientRect();
  const cellRect = cell.getBoundingClientRect();
  const popupPosition = getSeeMorePopupPosition(popupSize, containerRect, cellRect);
  return __spreadValues(__spreadValues({}, popupSize), popupPosition);
}
function usePopupPosition(eventLength, parentContainer, layoutContainer) {
  const { width: moreViewWidth, height: moreViewHeight } = useTheme(monthMoreViewSelector);
  const [container, containerRefCallback] = useDOMNode();
  const [popupPosition, setPopupPosition] = h$2(null);
  p$2(() => {
    if (layoutContainer && parentContainer && container) {
      const popupSize = getSeeMorePopupSize({
        grid: parentContainer,
        offsetWidth: container.offsetWidth,
        eventLength,
        layerSize: {
          width: moreViewWidth,
          height: moreViewHeight
        }
      });
      const rect = getSeeMorePopupRect({
        cell: container,
        layoutContainer,
        popupSize
      });
      setPopupPosition(rect);
    }
  }, [layoutContainer, container, eventLength, parentContainer, moreViewWidth, moreViewHeight]);
  return { popupPosition, containerRefCallback };
}
function weekendBackgroundColorSelector(theme) {
  return theme.month.weekend.backgroundColor;
}
function GridCell({ date: date2, events = [], style, parentContainer, contentAreaHeight }) {
  const layoutContainer = useLayoutContainer();
  const { showSeeMorePopup } = useDispatch("popup");
  const backgroundColor = useTheme(weekendBackgroundColorSelector);
  const { popupPosition, containerRefCallback } = usePopupPosition(
    events.length,
    parentContainer,
    layoutContainer
  );
  const onOpenSeeMorePopup = T$1(() => {
    if (popupPosition) {
      showSeeMorePopup({
        date: date2,
        popupPosition,
        events
      });
    }
  }, [date2, events, popupPosition, showSeeMorePopup]);
  const exceedCount = getExceedCount(
    events,
    contentAreaHeight,
    MONTH_EVENT_HEIGHT + MONTH_EVENT_MARGIN_TOP
  );
  return /* @__PURE__ */ y$3("div", {
    className: cls("daygrid-cell"),
    style: __spreadProps(__spreadValues({}, style), { backgroundColor: isWeekend(date2.getDay()) ? backgroundColor : "inherit" }),
    ref: containerRefCallback
  }, /* @__PURE__ */ y$3(CellHeader, {
    type: CellBarType.header,
    exceedCount,
    date: date2,
    onClickExceedCount: onOpenSeeMorePopup
  }), /* @__PURE__ */ y$3(CellHeader, {
    type: CellBarType.footer,
    exceedCount,
    date: date2,
    onClickExceedCount: onOpenSeeMorePopup
  }));
}
const GridRow = x$1(function GridRow2({
  week,
  rowInfo,
  gridDateEventModelMap = {},
  contentAreaHeight
}) {
  const [container, containerRefCallback] = useDOMNode();
  const border = useTheme(T$1((theme) => theme.common.border, []));
  return /* @__PURE__ */ y$3("div", {
    className: cls("weekday-grid"),
    style: { borderTop: border },
    ref: containerRefCallback
  }, week.map((date2, columnIndex) => {
    const dayIndex = date2.getDay();
    const { width, left } = rowInfo[columnIndex];
    const ymd = toFormat(toStartOfDay(date2), "YYYYMMDD");
    return /* @__PURE__ */ y$3(GridCell, {
      key: `daygrid-cell-${dayIndex}`,
      date: date2,
      style: {
        width: toPercent(width),
        left: toPercent(left)
      },
      parentContainer: container,
      events: gridDateEventModelMap[ymd],
      contentAreaHeight
    });
  }));
});
function GridSelectionByRow({ weekDates, narrowWeekend, rowIndex }) {
  const gridSelectionDataByRow = useStore(
    T$1(
      (state) => dayGridMonthSelectionHelper.calculateSelection(
        state.gridSelection.dayGridMonth,
        rowIndex,
        weekDates.length
      ),
      [rowIndex, weekDates.length]
    )
  );
  if (isNil(gridSelectionDataByRow)) {
    return null;
  }
  return /* @__PURE__ */ y$3(GridSelection$1, {
    type: "month",
    gridSelectionData: gridSelectionDataByRow,
    weekDates,
    narrowWeekend
  });
}
const MonthEvents = x$1(function MonthEvents2({
  contentAreaHeight,
  eventHeight = EVENT_HEIGHT,
  events,
  name,
  className: className2
}) {
  const { headerHeight } = useTheme(monthGridCellSelector);
  const dayEvents = events.filter(isWithinHeight(contentAreaHeight, eventHeight + MONTH_EVENT_MARGIN_TOP)).map((uiModel) => /* @__PURE__ */ y$3(HorizontalEvent, {
    key: `${name}-DayEvent-${uiModel.cid()}`,
    uiModel,
    eventHeight,
    headerHeight: headerHeight != null ? headerHeight : MONTH_CELL_BAR_HEIGHT
  }));
  return /* @__PURE__ */ y$3("div", {
    className: className2
  }, dayEvents);
});
function useDayGridMonthEventMove({
  dateMatrix,
  rowInfo,
  gridPositionFinder,
  rowIndex
}) {
  const eventBus = useEventBus();
  const {
    isDraggingEnd,
    isDraggingCanceled,
    draggingEvent: movingEvent,
    clearDraggingEvent
  } = useDraggingEvent("dayGrid", "move");
  const [currentGridPos, clearCurrentGridPos] = useCurrentPointerPositionInGrid(gridPositionFinder);
  const movingEventUIModel = F$2(() => {
    var _a, _b;
    let shadowEventUIModel = null;
    if (movingEvent && (currentGridPos == null ? void 0 : currentGridPos.rowIndex) === rowIndex) {
      shadowEventUIModel = movingEvent;
      shadowEventUIModel.left = rowInfo[(_a = currentGridPos == null ? void 0 : currentGridPos.columnIndex) != null ? _a : 0].left;
      shadowEventUIModel.width = rowInfo[(_b = currentGridPos == null ? void 0 : currentGridPos.columnIndex) != null ? _b : 0].width;
    }
    return shadowEventUIModel;
  }, [movingEvent, currentGridPos == null ? void 0 : currentGridPos.rowIndex, currentGridPos == null ? void 0 : currentGridPos.columnIndex, rowIndex, rowInfo]);
  useWhen(() => {
    const shouldUpdate = !isDraggingCanceled && isPresent(movingEventUIModel) && isPresent(currentGridPos);
    if (shouldUpdate) {
      const preStartDate = movingEventUIModel.model.getStarts();
      const eventDuration = movingEventUIModel.duration();
      const currentDate = dateMatrix[currentGridPos.rowIndex][currentGridPos.columnIndex];
      const timeOffsetPerDay = getDateDifference(currentDate, preStartDate) * MS_PER_DAY;
      const newStartDate = new TZDate(preStartDate.getTime() + timeOffsetPerDay);
      const newEndDate = new TZDate(newStartDate.getTime() + eventDuration);
      eventBus.fire("beforeUpdateEvent", {
        event: movingEventUIModel.model.toEventObject(),
        changes: {
          start: newStartDate,
          end: newEndDate
        }
      });
    }
    clearDraggingEvent();
    clearCurrentGridPos();
  }, isDraggingEnd);
  return movingEventUIModel;
}
function MovingEventShadow({ dateMatrix, gridPositionFinder, rowInfo, rowIndex }) {
  const movingEvent = useDayGridMonthEventMove({
    dateMatrix,
    rowInfo,
    gridPositionFinder,
    rowIndex
  });
  if (isNil(movingEvent)) {
    return null;
  }
  return /* @__PURE__ */ y$3(HorizontalEvent, {
    uiModel: movingEvent,
    movingLeft: movingEvent.left,
    eventHeight: EVENT_HEIGHT,
    headerHeight: MONTH_CELL_PADDING_TOP + MONTH_CELL_BAR_HEIGHT
  });
}
function getRowPosOfUIModel(uiModel, dateRow) {
  const startColumnIndex = Math.max(getGridDateIndex(uiModel.getStarts(), dateRow), 0);
  const endColumnIndex = getGridDateIndex(uiModel.getEnds(), dateRow);
  return {
    startColumnIndex,
    endColumnIndex
  };
}
function useDayGridMonthEventResize({
  dateMatrix,
  gridPositionFinder,
  renderedUIModels,
  cellWidthMap,
  rowIndex
}) {
  const eventBus = useEventBus();
  const {
    isDraggingEnd,
    isDraggingCanceled,
    draggingEvent: resizingStartUIModel,
    clearDraggingEvent
  } = useDraggingEvent("dayGrid", "resize");
  const [currentGridPos, clearCurrentGridPos] = useCurrentPointerPositionInGrid(gridPositionFinder);
  const [guideProps, setGuideProps] = h$2(null);
  const clearStates = T$1(() => {
    setGuideProps(null);
    clearCurrentGridPos();
    clearDraggingEvent();
  }, [clearCurrentGridPos, clearDraggingEvent]);
  const baseResizingInfo = F$2(() => {
    if (isNil(resizingStartUIModel)) {
      return null;
    }
    const resizeTargetUIModelRows = renderedUIModels.map(
      ({ uiModels }) => uiModels.filter(
        (uiModel) => uiModel.cid() === resizingStartUIModel.cid()
      )
    );
    const eventStartDateRowIndex = resizeTargetUIModelRows.findIndex((row) => row.length > 0);
    const eventEndDateRowIndex = findLastIndex(resizeTargetUIModelRows, (row) => row.length > 0);
    const eventStartUIModelPos = getRowPosOfUIModel(
      resizeTargetUIModelRows[eventStartDateRowIndex][0],
      dateMatrix[eventStartDateRowIndex]
    );
    const eventEndUIModelPos = getRowPosOfUIModel(
      resizeTargetUIModelRows[eventEndDateRowIndex][0],
      dateMatrix[eventEndDateRowIndex]
    );
    return {
      eventStartDateColumnIndex: eventStartUIModelPos.startColumnIndex,
      eventStartDateRowIndex,
      eventEndDateColumnIndex: eventEndUIModelPos.endColumnIndex,
      eventEndDateRowIndex,
      resizeTargetUIModelRows
    };
  }, [dateMatrix, renderedUIModels, resizingStartUIModel]);
  const canCalculateProps = isPresent(baseResizingInfo) && isPresent(resizingStartUIModel) && isPresent(currentGridPos);
  p$2(() => {
    if (canCalculateProps && rowIndex === baseResizingInfo.eventStartDateRowIndex) {
      const { eventStartDateRowIndex, eventStartDateColumnIndex } = baseResizingInfo;
      const clonedUIModel = baseResizingInfo.resizeTargetUIModelRows[eventStartDateRowIndex][0].clone();
      let height;
      if (eventStartDateRowIndex === currentGridPos.rowIndex) {
        height = cellWidthMap[eventStartDateColumnIndex][Math.max(eventStartDateColumnIndex, currentGridPos.columnIndex)];
      } else if (eventStartDateRowIndex > currentGridPos.rowIndex) {
        height = cellWidthMap[eventStartDateColumnIndex][eventStartDateColumnIndex];
      } else {
        height = cellWidthMap[eventStartDateColumnIndex][dateMatrix[rowIndex].length - 1];
        clonedUIModel.setUIProps({ exceedRight: true });
      }
      setGuideProps([clonedUIModel, height]);
    }
  }, [baseResizingInfo, canCalculateProps, cellWidthMap, currentGridPos, dateMatrix, rowIndex]);
  p$2(() => {
    if (canCalculateProps && baseResizingInfo.eventStartDateRowIndex < rowIndex && rowIndex < currentGridPos.rowIndex) {
      const clonedUIModel = resizingStartUIModel.clone();
      clonedUIModel.setUIProps({ left: 0, exceedLeft: true, exceedRight: true });
      setGuideProps([clonedUIModel, "100%"]);
    }
  }, [baseResizingInfo, canCalculateProps, currentGridPos, resizingStartUIModel, rowIndex]);
  p$2(() => {
    if (canCalculateProps && baseResizingInfo.eventStartDateRowIndex < currentGridPos.rowIndex && rowIndex === currentGridPos.rowIndex) {
      const clonedUIModel = resizingStartUIModel.clone();
      clonedUIModel.setUIProps({ left: 0, exceedLeft: true });
      setGuideProps([clonedUIModel, cellWidthMap[0][currentGridPos.columnIndex]]);
    }
  }, [
    baseResizingInfo,
    canCalculateProps,
    cellWidthMap,
    currentGridPos,
    resizingStartUIModel,
    rowIndex
  ]);
  p$2(() => {
    if (canCalculateProps && rowIndex > baseResizingInfo.eventStartDateRowIndex && rowIndex > currentGridPos.rowIndex) {
      setGuideProps(null);
    }
  }, [canCalculateProps, currentGridPos, baseResizingInfo, rowIndex]);
  useWhen(() => {
    if (canCalculateProps) {
      const { eventStartDateColumnIndex, eventStartDateRowIndex } = baseResizingInfo;
      const shouldUpdate = !isDraggingCanceled && (currentGridPos.rowIndex === eventStartDateRowIndex && currentGridPos.columnIndex >= eventStartDateColumnIndex || currentGridPos.rowIndex > eventStartDateRowIndex);
      if (shouldUpdate) {
        const targetEndDate = dateMatrix[currentGridPos.rowIndex][currentGridPos.columnIndex];
        eventBus.fire("beforeUpdateEvent", {
          event: resizingStartUIModel.model.toEventObject(),
          changes: {
            end: targetEndDate
          }
        });
      }
    }
    clearStates();
  }, isDraggingEnd);
  return guideProps;
}
function ResizingGuideByRow({
  dateMatrix,
  cellWidthMap,
  gridPositionFinder,
  renderedUIModels,
  rowIndex
}) {
  const resizingGuideProps = useDayGridMonthEventResize({
    dateMatrix,
    gridPositionFinder,
    cellWidthMap,
    renderedUIModels,
    rowIndex
  });
  if (isNil(resizingGuideProps)) {
    return null;
  }
  const [uiModel, resizingWidth] = resizingGuideProps;
  return /* @__PURE__ */ y$3("div", {
    className: cls("weekday-events")
  }, /* @__PURE__ */ y$3(HorizontalEvent, {
    key: `resizing-event-${uiModel.cid()}`,
    uiModel,
    eventHeight: MONTH_EVENT_HEIGHT,
    headerHeight: MONTH_CELL_PADDING_TOP + MONTH_CELL_BAR_HEIGHT,
    resizingWidth
  }));
}
const TOTAL_PERCENT_HEIGHT = 100;
function useCellContentAreaHeight(eventHeight) {
  const visibleEventCount = useStore(monthVisibleEventCountSelector);
  const { headerHeight: themeHeaderHeight, footerHeight: themeFooterHeight } = useTheme(monthGridCellSelector);
  const ref = _$2(null);
  const [cellContentAreaHeight, setCellContentAreaHeight] = h$2(0);
  p$2(() => {
    if (ref.current) {
      const rowHeight = getSize(ref.current).height;
      const headerHeight = MONTH_CELL_PADDING_TOP + (themeHeaderHeight != null ? themeHeaderHeight : MONTH_CELL_BAR_HEIGHT);
      const footerHeight = themeFooterHeight != null ? themeFooterHeight : 0;
      const baseContentAreaHeight = rowHeight - headerHeight - footerHeight;
      const visibleEventCountHeight = visibleEventCount * (eventHeight + MONTH_EVENT_MARGIN_TOP);
      setCellContentAreaHeight(Math.min(baseContentAreaHeight, visibleEventCountHeight));
    }
  }, [themeFooterHeight, themeHeaderHeight, eventHeight, visibleEventCount]);
  return { ref, cellContentAreaHeight };
}
function DayGridMonth({ dateMatrix = [], rowInfo = [], cellWidthMap = [] }) {
  const [gridContainer, setGridContainerRef] = useDOMNode();
  const calendar = useStore(calendarSelector);
  const { ref, cellContentAreaHeight } = useCellContentAreaHeight(MONTH_EVENT_HEIGHT);
  const { eventFilter, month: monthOptions, isReadOnly } = useStore(optionsSelector);
  const { narrowWeekend, startDayOfWeek } = monthOptions;
  const rowHeight = TOTAL_PERCENT_HEIGHT / dateMatrix.length;
  const gridPositionFinder = F$2(
    () => createGridPositionFinder({
      container: gridContainer,
      rowsCount: dateMatrix.length,
      columnsCount: dateMatrix[0].length,
      narrowWeekend,
      startDayOfWeek
    }),
    [dateMatrix, gridContainer, narrowWeekend, startDayOfWeek]
  );
  const calendarData = useCalendarData(calendar, eventFilter);
  const renderedEventUIModels = F$2(
    () => dateMatrix.map((week) => getRenderedEventUIModels(week, calendarData, narrowWeekend)),
    [calendarData, dateMatrix, narrowWeekend]
  );
  const onMouseDown = useGridSelection({
    type: "dayGridMonth",
    gridPositionFinder,
    dateCollection: dateMatrix,
    dateGetter: dayGridMonthSelectionHelper.getDateFromCollection,
    selectionSorter: dayGridMonthSelectionHelper.sortSelection
  });
  return /* @__PURE__ */ y$3("div", {
    ref: setGridContainerRef,
    onMouseDown: passConditionalProp(!isReadOnly, onMouseDown),
    className: cls("month-daygrid")
  }, dateMatrix.map((week, rowIndex) => {
    const { uiModels, gridDateEventModelMap } = renderedEventUIModels[rowIndex];
    return /* @__PURE__ */ y$3("div", {
      key: `dayGrid-events-${rowIndex}`,
      className: cls("month-week-item"),
      style: { height: toPercent(rowHeight) },
      ref
    }, /* @__PURE__ */ y$3("div", {
      className: cls("weekday")
    }, /* @__PURE__ */ y$3(GridRow, {
      gridDateEventModelMap,
      week,
      rowInfo,
      contentAreaHeight: cellContentAreaHeight
    }), /* @__PURE__ */ y$3(MonthEvents, {
      name: "month",
      events: uiModels,
      contentAreaHeight: cellContentAreaHeight,
      eventHeight: MONTH_EVENT_HEIGHT,
      className: cls("weekday-events")
    }), /* @__PURE__ */ y$3(GridSelectionByRow, {
      weekDates: week,
      narrowWeekend,
      rowIndex
    }), /* @__PURE__ */ y$3(AccumulatedGridSelection, {
      rowIndex,
      weekDates: week,
      narrowWeekend
    })), /* @__PURE__ */ y$3(ResizingGuideByRow, {
      dateMatrix,
      gridPositionFinder,
      rowIndex,
      cellWidthMap,
      renderedUIModels: renderedEventUIModels
    }), /* @__PURE__ */ y$3(MovingEventShadow, {
      dateMatrix,
      gridPositionFinder,
      rowIndex,
      rowInfo
    }));
  }));
}
function getMonthDayNames(options) {
  const { dayNames, startDayOfWeek, workweek } = options.month;
  const dayIndices = [...Array(7)].map((_2, i2) => (startDayOfWeek + i2) % 7);
  const monthDayNames = dayIndices.map((i2) => ({
    day: i2,
    label: capitalize(dayNames[i2])
  }));
  return monthDayNames.filter((dayNameInfo) => workweek ? !isWeekend(dayNameInfo.day) : true);
}
function Month$1() {
  const options = useStore(optionsSelector);
  const { renderDate } = useStore(viewSelector);
  const dayNames = getMonthDayNames(options);
  const monthOptions = options.month;
  const { narrowWeekend, startDayOfWeek, workweek } = monthOptions;
  const dateMatrix = F$2(
    () => createDateMatrixOfMonth(renderDate, monthOptions),
    [monthOptions, renderDate]
  );
  const { rowStyleInfo, cellWidthMap } = F$2(
    () => getRowStyleInfo(dayNames.length, narrowWeekend, startDayOfWeek, workweek),
    [dayNames.length, narrowWeekend, startDayOfWeek, workweek]
  );
  const rowInfo = rowStyleInfo.map((cellStyleInfo, index) => __spreadProps(__spreadValues({}, cellStyleInfo), {
    date: dateMatrix[0][index]
  }));
  return /* @__PURE__ */ y$3(Layout, {
    className: cls("month")
  }, /* @__PURE__ */ y$3(GridHeader, {
    type: "month",
    dayNames,
    options: monthOptions,
    rowStyleInfo
  }), /* @__PURE__ */ y$3(DayGridMonth, {
    dateMatrix,
    rowInfo,
    cellWidthMap
  }));
}
function useWeekViewState() {
  const options = useStore(optionsSelector);
  const calendar = useStore(calendarSelector);
  const { dayGridRows: gridRowLayout, lastPanelType } = useStore(weekViewLayoutSelector);
  const { renderDate } = useStore(viewSelector);
  return F$2(
    () => ({
      options,
      calendar,
      gridRowLayout,
      lastPanelType,
      renderDate
    }),
    [calendar, gridRowLayout, lastPanelType, options, renderDate]
  );
}
function Week$1() {
  var _a, _b;
  const { options, calendar, gridRowLayout, lastPanelType, renderDate } = useWeekViewState();
  const gridHeaderMarginLeft = useTheme(T$1((theme) => theme.week.dayGridLeft.width, []));
  const primaryTimezoneName = useStore(primaryTimezoneSelector);
  const [timePanel, setTimePanelRef] = useDOMNode();
  const weekOptions = options.week;
  const { narrowWeekend, startDayOfWeek, workweek, hourStart, hourEnd, eventView, taskView } = weekOptions;
  const weekDates = F$2(() => getWeekDates(renderDate, weekOptions), [renderDate, weekOptions]);
  const dayNames = getDayNames(weekDates, (_b = (_a = options.week) == null ? void 0 : _a.dayNames) != null ? _b : []);
  const { rowStyleInfo, cellWidthMap } = getRowStyleInfo(
    weekDates.length,
    narrowWeekend,
    startDayOfWeek,
    workweek
  );
  const calendarData = useCalendarData(calendar, options.eventFilter);
  const eventByPanel = F$2(() => {
    const getFilterRange = () => {
      if (primaryTimezoneName === "Local") {
        return [toStartOfDay(first(weekDates)), toEndOfDay(last(weekDates))];
      }
      return [toStartOfDay(addDate(first(weekDates), -1)), toEndOfDay(addDate(last(weekDates), 1))];
    };
    const [weekStartDate, weekEndDate] = getFilterRange();
    return getWeekViewEvents(weekDates, calendarData, {
      narrowWeekend,
      hourStart,
      hourEnd,
      weekStartDate,
      weekEndDate
    });
  }, [calendarData, hourEnd, hourStart, narrowWeekend, primaryTimezoneName, weekDates]);
  const timeGridData = F$2(
    () => createTimeGridData(weekDates, {
      hourStart,
      hourEnd,
      narrowWeekend
    }),
    [hourEnd, hourStart, narrowWeekend, weekDates]
  );
  const activePanels = getActivePanels(taskView, eventView);
  const dayGridRows = activePanels.map((key) => {
    var _a2, _b2;
    if (key === "time") {
      return null;
    }
    const rowType = key;
    return /* @__PURE__ */ y$3(Panel, {
      name: rowType,
      key: rowType,
      resizable: rowType !== lastPanelType
    }, rowType === "allday" ? /* @__PURE__ */ y$3(AlldayGridRow, {
      events: eventByPanel[rowType],
      rowStyleInfo,
      gridColWidthMap: cellWidthMap,
      weekDates,
      height: (_a2 = gridRowLayout[rowType]) == null ? void 0 : _a2.height,
      options: weekOptions
    }) : /* @__PURE__ */ y$3(OtherGridRow, {
      category: rowType,
      events: eventByPanel[rowType],
      weekDates,
      height: (_b2 = gridRowLayout[rowType]) == null ? void 0 : _b2.height,
      options: weekOptions,
      gridColWidthMap: cellWidthMap
    }));
  });
  const hasTimePanel = F$2(() => activePanels.includes("time"), [activePanels]);
  useTimeGridScrollSync(timePanel, timeGridData.rows.length);
  const stickyTop = useTimezoneLabelsTop(timePanel);
  return /* @__PURE__ */ y$3(Layout, {
    className: cls("week-view"),
    autoAdjustPanels: true
  }, /* @__PURE__ */ y$3(Panel, {
    name: "week-view-day-names",
    initialHeight: WEEK_DAY_NAME_HEIGHT + WEEK_DAY_NAME_BORDER * 2
  }, /* @__PURE__ */ y$3(GridHeader, {
    type: "week",
    dayNames,
    marginLeft: gridHeaderMarginLeft,
    options: weekOptions,
    rowStyleInfo
  })), dayGridRows, hasTimePanel ? /* @__PURE__ */ y$3(Panel, {
    name: "time",
    autoSize: 1,
    ref: setTimePanelRef
  }, /* @__PURE__ */ y$3(TimeGrid, {
    events: eventByPanel.time,
    timeGridData
  }), /* @__PURE__ */ y$3(TimezoneLabels, {
    top: stickyTop
  })) : null);
}
const views = {
  month: Month$1,
  week: Week$1,
  day: Day$1
};
function Main() {
  const { currentView } = useStore(viewSelector);
  const CurrentViewComponent = F$2(() => views[currentView] || (() => null), [currentView]);
  return /* @__PURE__ */ y$3(CurrentViewComponent, null);
}
var n = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|^--/i, o = /^(area|base|br|col|embed|hr|img|input|link|meta|param|source|track|wbr)$/, i = /[\s\n\\/='"\0<>]/, l = /^xlink:?./, a = /["&<]/;
function s(e2) {
  if (false === a.test(e2 += ""))
    return e2;
  for (var t2 = 0, r2 = 0, n2 = "", o2 = ""; r2 < e2.length; r2++) {
    switch (e2.charCodeAt(r2)) {
      case 34:
        o2 = "&quot;";
        break;
      case 38:
        o2 = "&amp;";
        break;
      case 60:
        o2 = "&lt;";
        break;
      default:
        continue;
    }
    r2 !== t2 && (n2 += e2.slice(t2, r2)), n2 += o2, t2 = r2 + 1;
  }
  return r2 !== t2 && (n2 += e2.slice(t2, r2)), n2;
}
var f = function(e2, t2) {
  return String(e2).replace(/(\n+)/g, "$1" + (t2 || "	"));
}, u = function(e2, t2, r2) {
  return String(e2).length > (t2 || 40) || !r2 && -1 !== String(e2).indexOf("\n") || -1 !== String(e2).indexOf("<");
}, c = {}, _ = /([A-Z])/g;
function p(e2) {
  var t2 = "";
  for (var r2 in e2) {
    var o2 = e2[r2];
    null != o2 && "" !== o2 && (t2 && (t2 += " "), t2 += "-" == r2[0] ? r2 : c[r2] || (c[r2] = r2.replace(_, "-$1").toLowerCase()), t2 = "number" == typeof o2 && false === n.test(r2) ? t2 + ": " + o2 + "px;" : t2 + ": " + o2 + ";");
  }
  return t2 || void 0;
}
function d(e2, t2) {
  return Array.isArray(t2) ? t2.reduce(d, e2) : null != t2 && false !== t2 && e2.push(t2), e2;
}
function v() {
  this.__d = true;
}
function h(e2, t2) {
  return { __v: e2, context: t2, props: e2.props, setState: v, forceUpdate: v, __d: true, __h: [] };
}
function g(e2, t2) {
  var r2 = e2.contextType, n2 = r2 && t2[r2.__c];
  return null != r2 ? n2 ? n2.props.value : r2.__ : t2;
}
var y = [];
function m(r2, n2, a2, c2, _2, v2) {
  if (null == r2 || "boolean" == typeof r2)
    return "";
  if ("object" != typeof r2)
    return "function" == typeof r2 ? "" : s(r2);
  var b2 = a2.pretty, x2 = b2 && "string" == typeof b2 ? b2 : "	";
  if (Array.isArray(r2)) {
    for (var k2 = "", S2 = 0; S2 < r2.length; S2++)
      b2 && S2 > 0 && (k2 += "\n"), k2 += m(r2[S2], n2, a2, c2, _2, v2);
    return k2;
  }
  if (void 0 !== r2.constructor)
    return "";
  var w2, C2 = r2.type, O2 = r2.props, j2 = false;
  if ("function" == typeof C2) {
    if (j2 = true, !a2.shallow || !c2 && false !== a2.renderRootComponent) {
      if (C2 === _$3) {
        var A2 = [];
        return d(A2, r2.props.children), m(A2, n2, a2, false !== a2.shallowHighOrder, _2, v2);
      }
      var F2, H2 = r2.__c = h(r2, n2);
      l$3.__b && l$3.__b(r2);
      var M2 = l$3.__r;
      if (C2.prototype && "function" == typeof C2.prototype.render) {
        var L2 = g(C2, n2);
        (H2 = r2.__c = new C2(O2, L2)).__v = r2, H2._dirty = H2.__d = true, H2.props = O2, null == H2.state && (H2.state = {}), null == H2._nextState && null == H2.__s && (H2._nextState = H2.__s = H2.state), H2.context = L2, C2.getDerivedStateFromProps ? H2.state = Object.assign({}, H2.state, C2.getDerivedStateFromProps(H2.props, H2.state)) : H2.componentWillMount && (H2.componentWillMount(), H2.state = H2._nextState !== H2.state ? H2._nextState : H2.__s !== H2.state ? H2.__s : H2.state), M2 && M2(r2), F2 = H2.render(H2.props, H2.state, H2.context);
      } else
        for (var T2 = g(C2, n2), E2 = 0; H2.__d && E2++ < 25; )
          H2.__d = false, M2 && M2(r2), F2 = C2.call(r2.__c, O2, T2);
      return H2.getChildContext && (n2 = Object.assign({}, n2, H2.getChildContext())), l$3.diffed && l$3.diffed(r2), m(F2, n2, a2, false !== a2.shallowHighOrder, _2, v2);
    }
    C2 = (w2 = C2).displayName || w2 !== Function && w2.name || function(e2) {
      var t2 = (Function.prototype.toString.call(e2).match(/^\s*function\s+([^( ]+)/) || "")[1];
      if (!t2) {
        for (var r3 = -1, n3 = y.length; n3--; )
          if (y[n3] === e2) {
            r3 = n3;
            break;
          }
        r3 < 0 && (r3 = y.push(e2) - 1), t2 = "UnnamedComponent" + r3;
      }
      return t2;
    }(w2);
  }
  var $2, D2, N2 = "<" + C2;
  if (O2) {
    var P2 = Object.keys(O2);
    a2 && true === a2.sortAttributes && P2.sort();
    for (var W2 = 0; W2 < P2.length; W2++) {
      var I2 = P2[W2], R2 = O2[I2];
      if ("children" !== I2) {
        if (!i.test(I2) && (a2 && a2.allAttributes || "key" !== I2 && "ref" !== I2 && "__self" !== I2 && "__source" !== I2)) {
          if ("defaultValue" === I2)
            I2 = "value";
          else if ("defaultChecked" === I2)
            I2 = "checked";
          else if ("defaultSelected" === I2)
            I2 = "selected";
          else if ("className" === I2) {
            if (void 0 !== O2.class)
              continue;
            I2 = "class";
          } else
            _2 && l.test(I2) && (I2 = I2.toLowerCase().replace(/^xlink:?/, "xlink:"));
          if ("htmlFor" === I2) {
            if (O2.for)
              continue;
            I2 = "for";
          }
          "style" === I2 && R2 && "object" == typeof R2 && (R2 = p(R2)), "a" === I2[0] && "r" === I2[1] && "boolean" == typeof R2 && (R2 = String(R2));
          var U2 = a2.attributeHook && a2.attributeHook(I2, R2, n2, a2, j2);
          if (U2 || "" === U2)
            N2 += U2;
          else if ("dangerouslySetInnerHTML" === I2)
            D2 = R2 && R2.__html;
          else if ("textarea" === C2 && "value" === I2)
            $2 = R2;
          else if ((R2 || 0 === R2 || "" === R2) && "function" != typeof R2) {
            if (!(true !== R2 && "" !== R2 || (R2 = I2, a2 && a2.xml))) {
              N2 = N2 + " " + I2;
              continue;
            }
            if ("value" === I2) {
              if ("select" === C2) {
                v2 = R2;
                continue;
              }
              "option" === C2 && v2 == R2 && void 0 === O2.selected && (N2 += " selected");
            }
            N2 = N2 + " " + I2 + '="' + s(R2) + '"';
          }
        }
      } else
        $2 = R2;
    }
  }
  if (b2) {
    var V2 = N2.replace(/\n\s*/, " ");
    V2 === N2 || ~V2.indexOf("\n") ? b2 && ~N2.indexOf("\n") && (N2 += "\n") : N2 = V2;
  }
  if (N2 += ">", i.test(C2))
    throw new Error(C2 + " is not a valid HTML tag name in " + N2);
  var q2, z2 = o.test(C2) || a2.voidElements && a2.voidElements.test(C2), Z2 = [];
  if (D2)
    b2 && u(D2) && (D2 = "\n" + x2 + f(D2, x2)), N2 += D2;
  else if (null != $2 && d(q2 = [], $2).length) {
    for (var B2 = b2 && ~N2.indexOf("\n"), G2 = false, J = 0; J < q2.length; J++) {
      var K2 = q2[J];
      if (null != K2 && false !== K2) {
        var Q2 = m(K2, n2, a2, true, "svg" === C2 || "foreignObject" !== C2 && _2, v2);
        if (b2 && !B2 && u(Q2) && (B2 = true), Q2)
          if (b2) {
            var X2 = Q2.length > 0 && "<" != Q2[0];
            G2 && X2 ? Z2[Z2.length - 1] += Q2 : Z2.push(Q2), G2 = X2;
          } else
            Z2.push(Q2);
      }
    }
    if (b2 && B2)
      for (var Y2 = Z2.length; Y2--; )
        Z2[Y2] = "\n" + x2 + f(Z2[Y2], x2);
  }
  if (Z2.length || D2)
    N2 += Z2.join("");
  else if (a2 && a2.xml)
    return N2.substring(0, N2.length - 1) + " />";
  return !z2 || q2 || D2 ? (b2 && ~N2.indexOf("\n") && (N2 += "\n"), N2 = N2 + "</" + C2 + ">") : N2 = N2.replace(/>$/, " />"), N2;
}
var b = { shallow: true };
S.render = S;
var x = function(e2, t2) {
  return S(e2, t2, b);
}, k = [];
function S(n2, o2, i2) {
  o2 = o2 || {};
  var l2 = l$3.__s;
  l$3.__s = true;
  var a2, s2 = y$3(_$3, null);
  return s2.__k = [n2], a2 = i2 && (i2.pretty || i2.voidElements || i2.sortAttributes || i2.shallow || i2.allAttributes || i2.xml || i2.attributeHook) ? m(n2, o2, i2) : F(n2, o2, false, void 0, s2), l$3.__c && l$3.__c(n2, k), l$3.__s = l2, k.length = 0, a2;
}
function w(e2) {
  return null == e2 || "boolean" == typeof e2 ? null : "string" == typeof e2 || "number" == typeof e2 || "bigint" == typeof e2 ? y$3(null, null, e2) : e2;
}
function C(e2, t2) {
  return "className" === e2 ? "class" : "htmlFor" === e2 ? "for" : "defaultValue" === e2 ? "value" : "defaultChecked" === e2 ? "checked" : "defaultSelected" === e2 ? "selected" : t2 && l.test(e2) ? e2.toLowerCase().replace(/^xlink:?/, "xlink:") : e2;
}
function O(e2, t2) {
  return "style" === e2 && null != t2 && "object" == typeof t2 ? p(t2) : "a" === e2[0] && "r" === e2[1] && "boolean" == typeof t2 ? String(t2) : t2;
}
var j = Array.isArray, A = Object.assign;
function F(r2, n2, l2, a2, f2) {
  if (null == r2 || true === r2 || false === r2 || "" === r2)
    return "";
  if ("object" != typeof r2)
    return "function" == typeof r2 ? "" : s(r2);
  if (j(r2)) {
    var u2 = "";
    f2.__k = r2;
    for (var c2 = 0; c2 < r2.length; c2++)
      u2 += F(r2[c2], n2, l2, a2, f2), r2[c2] = w(r2[c2]);
    return u2;
  }
  if (void 0 !== r2.constructor)
    return "";
  r2.__ = f2, l$3.__b && l$3.__b(r2);
  var _2 = r2.type, p2 = r2.props;
  if ("function" == typeof _2) {
    var d2;
    if (_2 === _$3)
      d2 = p2.children;
    else {
      d2 = _2.prototype && "function" == typeof _2.prototype.render ? function(e2, r3) {
        var n3 = e2.type, o2 = g(n3, r3), i2 = new n3(e2.props, o2);
        e2.__c = i2, i2.__v = e2, i2.__d = true, i2.props = e2.props, null == i2.state && (i2.state = {}), null == i2.__s && (i2.__s = i2.state), i2.context = o2, n3.getDerivedStateFromProps ? i2.state = A({}, i2.state, n3.getDerivedStateFromProps(i2.props, i2.state)) : i2.componentWillMount && (i2.componentWillMount(), i2.state = i2.__s !== i2.state ? i2.__s : i2.state);
        var l3 = l$3.__r;
        return l3 && l3(e2), i2.render(i2.props, i2.state, i2.context);
      }(r2, n2) : function(e2, r3) {
        var n3, o2 = h(e2, r3), i2 = g(e2.type, r3);
        e2.__c = o2;
        for (var l3 = l$3.__r, a3 = 0; o2.__d && a3++ < 25; )
          o2.__d = false, l3 && l3(e2), n3 = e2.type.call(o2, e2.props, i2);
        return n3;
      }(r2, n2);
      var v2 = r2.__c;
      v2.getChildContext && (n2 = A({}, n2, v2.getChildContext()));
    }
    var y2 = F(d2 = null != d2 && d2.type === _$3 && null == d2.key ? d2.props.children : d2, n2, l2, a2, r2);
    return l$3.diffed && l$3.diffed(r2), r2.__ = void 0, l$3.unmount && l$3.unmount(r2), y2;
  }
  var m2, b2, x2 = "<";
  if (x2 += _2, p2)
    for (var k2 in m2 = p2.children, p2) {
      var S2 = p2[k2];
      if (!("key" === k2 || "ref" === k2 || "__self" === k2 || "__source" === k2 || "children" === k2 || "className" === k2 && "class" in p2 || "htmlFor" === k2 && "for" in p2 || i.test(k2))) {
        if (S2 = O(k2 = C(k2, l2), S2), "dangerouslySetInnerHTML" === k2)
          b2 = S2 && S2.__html;
        else if ("textarea" === _2 && "value" === k2)
          m2 = S2;
        else if ((S2 || 0 === S2 || "" === S2) && "function" != typeof S2) {
          if (true === S2 || "" === S2) {
            S2 = k2, x2 = x2 + " " + k2;
            continue;
          }
          if ("value" === k2) {
            if ("select" === _2) {
              a2 = S2;
              continue;
            }
            "option" !== _2 || a2 != S2 || "selected" in p2 || (x2 += " selected");
          }
          x2 = x2 + " " + k2 + '="' + s(S2) + '"';
        }
      }
    }
  var H2 = x2;
  if (x2 += ">", i.test(_2))
    throw new Error(_2 + " is not a valid HTML tag name in " + x2);
  var M2 = "", L2 = false;
  if (b2)
    M2 += b2, L2 = true;
  else if ("string" == typeof m2)
    M2 += s(m2), L2 = true;
  else if (j(m2)) {
    r2.__k = m2;
    for (var T2 = 0; T2 < m2.length; T2++) {
      var E2 = m2[T2];
      if (m2[T2] = w(E2), null != E2 && false !== E2) {
        var $2 = F(E2, n2, "svg" === _2 || "foreignObject" !== _2 && l2, a2, r2);
        $2 && (M2 += $2, L2 = true);
      }
    }
  } else if (null != m2 && false !== m2 && true !== m2) {
    r2.__k = [w(m2)];
    var D2 = F(m2, n2, "svg" === _2 || "foreignObject" !== _2 && l2, a2, r2);
    D2 && (M2 += D2, L2 = true);
  }
  if (l$3.diffed && l$3.diffed(r2), r2.__ = void 0, l$3.unmount && l$3.unmount(r2), L2)
    x2 += M2;
  else if (o.test(_2))
    return H2 + " />";
  return x2 + "</" + _2 + ">";
}
S.shallowRender = x;
function forEachOwnProperties$2(obj, iteratee, context) {
  var key;
  context = context || null;
  for (key in obj) {
    if (obj.hasOwnProperty(key)) {
      if (iteratee.call(context, obj[key], key, obj) === false) {
        break;
      }
    }
  }
}
var forEachOwnProperties_1 = forEachOwnProperties$2;
var forEachOwnProperties$1 = forEachOwnProperties_1;
function imagePing$1(url, trackingInfo) {
  var trackingElement = document.createElement("img");
  var queryString = "";
  forEachOwnProperties$1(trackingInfo, function(value, key) {
    queryString += "&" + key + "=" + value;
  });
  queryString = queryString.substring(1);
  trackingElement.src = url + "?" + queryString;
  trackingElement.style.display = "none";
  document.body.appendChild(trackingElement);
  document.body.removeChild(trackingElement);
  return trackingElement;
}
var imagePing_1 = imagePing$1;
var isUndefined$1 = isUndefined_1;
var imagePing = imagePing_1;
var ms7days = 7 * 24 * 60 * 60 * 1e3;
function isExpired(date2) {
  var now = new Date().getTime();
  return now - date2 > ms7days;
}
function sendHostname(appName, trackingId) {
  var url = "https://www.google-analytics.com/collect";
  var hostname = location.hostname;
  var hitType = "event";
  var eventCategory = "use";
  var applicationKeyForStorage = "TOAST UI " + appName + " for " + hostname + ": Statistics";
  var date2 = window.localStorage.getItem(applicationKeyForStorage);
  if (!isUndefined$1(window.tui) && window.tui.usageStatistics === false) {
    return;
  }
  if (date2 && !isExpired(date2)) {
    return;
  }
  window.localStorage.setItem(applicationKeyForStorage, new Date().getTime());
  setTimeout(function() {
    if (document.readyState === "interactive" || document.readyState === "complete") {
      imagePing(url, {
        v: 1,
        t: hitType,
        tid: trackingId,
        cid: hostname,
        dp: hostname,
        dh: appName,
        el: appName,
        ec: eventCategory
      });
    }
  }, 1e3);
}
var sendHostname_1 = sendHostname;
function CalendarContainer({ theme, store, eventBus, children }) {
  return /* @__PURE__ */ y$3(EventBusProvider, {
    value: eventBus
  }, /* @__PURE__ */ y$3(ThemeProvider, {
    store: theme
  }, /* @__PURE__ */ y$3(StoreProvider, {
    store
  }, /* @__PURE__ */ y$3(FloatingLayerProvider, null, children))));
}
const GA_TRACKING_ID = "UA-129951699-1";
function extend$1(target, objects) {
  var hasOwnProp = Object.prototype.hasOwnProperty;
  var source, prop, i2, len;
  for (i2 = 1, len = arguments.length; i2 < len; i2 += 1) {
    source = arguments[i2];
    for (prop in source) {
      if (hasOwnProp.call(source, prop)) {
        target[prop] = source[prop];
      }
    }
  }
  return target;
}
var extend_1 = extend$1;
function isNull$1(obj) {
  return obj === null;
}
var isNull_1 = isNull$1;
var isUndefined = isUndefined_1;
var isNull = isNull_1;
function isExisty$1(param) {
  return !isUndefined(param) && !isNull(param);
}
var isExisty_1 = isExisty$1;
function isArray$2(obj) {
  return obj instanceof Array;
}
var isArray_1 = isArray$2;
function isFunction$1(obj) {
  return obj instanceof Function;
}
var isFunction_1 = isFunction$1;
function forEachArray$1(arr, iteratee, context) {
  var index = 0;
  var len = arr.length;
  context = context || null;
  for (; index < len; index += 1) {
    if (iteratee.call(context, arr[index], index, arr) === false) {
      break;
    }
  }
}
var forEachArray_1 = forEachArray$1;
var isArray$1 = isArray_1;
var forEachArray = forEachArray_1;
var forEachOwnProperties = forEachOwnProperties_1;
function forEach$1(obj, iteratee, context) {
  if (isArray$1(obj)) {
    forEachArray(obj, iteratee, context);
  } else {
    forEachOwnProperties(obj, iteratee, context);
  }
}
var forEach_1 = forEach$1;
var extend = extend_1;
var isExisty = isExisty_1;
var isString = isString_1;
var isObject = isObject_1;
var isArray = isArray_1;
var isFunction = isFunction_1;
var forEach = forEach_1;
var R_EVENTNAME_SPLIT = /\s+/g;
function CustomEvents() {
  this.events = null;
  this.contexts = null;
}
CustomEvents.mixin = function(func) {
  extend(func.prototype, CustomEvents.prototype);
};
CustomEvents.prototype._getHandlerItem = function(handler, context) {
  var item = { handler };
  if (context) {
    item.context = context;
  }
  return item;
};
CustomEvents.prototype._safeEvent = function(eventName) {
  var events = this.events;
  var byName;
  if (!events) {
    events = this.events = {};
  }
  if (eventName) {
    byName = events[eventName];
    if (!byName) {
      byName = [];
      events[eventName] = byName;
    }
    events = byName;
  }
  return events;
};
CustomEvents.prototype._safeContext = function() {
  var context = this.contexts;
  if (!context) {
    context = this.contexts = [];
  }
  return context;
};
CustomEvents.prototype._indexOfContext = function(ctx) {
  var context = this._safeContext();
  var index = 0;
  while (context[index]) {
    if (ctx === context[index][0]) {
      return index;
    }
    index += 1;
  }
  return -1;
};
CustomEvents.prototype._memorizeContext = function(ctx) {
  var context, index;
  if (!isExisty(ctx)) {
    return;
  }
  context = this._safeContext();
  index = this._indexOfContext(ctx);
  if (index > -1) {
    context[index][1] += 1;
  } else {
    context.push([ctx, 1]);
  }
};
CustomEvents.prototype._forgetContext = function(ctx) {
  var context, contextIndex;
  if (!isExisty(ctx)) {
    return;
  }
  context = this._safeContext();
  contextIndex = this._indexOfContext(ctx);
  if (contextIndex > -1) {
    context[contextIndex][1] -= 1;
    if (context[contextIndex][1] <= 0) {
      context.splice(contextIndex, 1);
    }
  }
};
CustomEvents.prototype._bindEvent = function(eventName, handler, context) {
  var events = this._safeEvent(eventName);
  this._memorizeContext(context);
  events.push(this._getHandlerItem(handler, context));
};
CustomEvents.prototype.on = function(eventName, handler, context) {
  var self2 = this;
  if (isString(eventName)) {
    eventName = eventName.split(R_EVENTNAME_SPLIT);
    forEach(eventName, function(name) {
      self2._bindEvent(name, handler, context);
    });
  } else if (isObject(eventName)) {
    context = handler;
    forEach(eventName, function(func, name) {
      self2.on(name, func, context);
    });
  }
};
CustomEvents.prototype.once = function(eventName, handler, context) {
  var self2 = this;
  if (isObject(eventName)) {
    context = handler;
    forEach(eventName, function(func, name) {
      self2.once(name, func, context);
    });
    return;
  }
  function onceHandler() {
    handler.apply(context, arguments);
    self2.off(eventName, onceHandler, context);
  }
  this.on(eventName, onceHandler, context);
};
CustomEvents.prototype._spliceMatches = function(arr, predicate) {
  var i2 = 0;
  var len;
  if (!isArray(arr)) {
    return;
  }
  for (len = arr.length; i2 < len; i2 += 1) {
    if (predicate(arr[i2]) === true) {
      arr.splice(i2, 1);
      len -= 1;
      i2 -= 1;
    }
  }
};
CustomEvents.prototype._matchHandler = function(handler) {
  var self2 = this;
  return function(item) {
    var needRemove = handler === item.handler;
    if (needRemove) {
      self2._forgetContext(item.context);
    }
    return needRemove;
  };
};
CustomEvents.prototype._matchContext = function(context) {
  var self2 = this;
  return function(item) {
    var needRemove = context === item.context;
    if (needRemove) {
      self2._forgetContext(item.context);
    }
    return needRemove;
  };
};
CustomEvents.prototype._matchHandlerAndContext = function(handler, context) {
  var self2 = this;
  return function(item) {
    var matchHandler = handler === item.handler;
    var matchContext = context === item.context;
    var needRemove = matchHandler && matchContext;
    if (needRemove) {
      self2._forgetContext(item.context);
    }
    return needRemove;
  };
};
CustomEvents.prototype._offByEventName = function(eventName, handler) {
  var self2 = this;
  var andByHandler = isFunction(handler);
  var matchHandler = self2._matchHandler(handler);
  eventName = eventName.split(R_EVENTNAME_SPLIT);
  forEach(eventName, function(name) {
    var handlerItems = self2._safeEvent(name);
    if (andByHandler) {
      self2._spliceMatches(handlerItems, matchHandler);
    } else {
      forEach(handlerItems, function(item) {
        self2._forgetContext(item.context);
      });
      self2.events[name] = [];
    }
  });
};
CustomEvents.prototype._offByHandler = function(handler) {
  var self2 = this;
  var matchHandler = this._matchHandler(handler);
  forEach(this._safeEvent(), function(handlerItems) {
    self2._spliceMatches(handlerItems, matchHandler);
  });
};
CustomEvents.prototype._offByObject = function(obj, handler) {
  var self2 = this;
  var matchFunc;
  if (this._indexOfContext(obj) < 0) {
    forEach(obj, function(func, name) {
      self2.off(name, func);
    });
  } else if (isString(handler)) {
    matchFunc = this._matchContext(obj);
    self2._spliceMatches(this._safeEvent(handler), matchFunc);
  } else if (isFunction(handler)) {
    matchFunc = this._matchHandlerAndContext(handler, obj);
    forEach(this._safeEvent(), function(handlerItems) {
      self2._spliceMatches(handlerItems, matchFunc);
    });
  } else {
    matchFunc = this._matchContext(obj);
    forEach(this._safeEvent(), function(handlerItems) {
      self2._spliceMatches(handlerItems, matchFunc);
    });
  }
};
CustomEvents.prototype.off = function(eventName, handler) {
  if (isString(eventName)) {
    this._offByEventName(eventName, handler);
  } else if (!arguments.length) {
    this.events = {};
    this.contexts = [];
  } else if (isFunction(eventName)) {
    this._offByHandler(eventName);
  } else if (isObject(eventName)) {
    this._offByObject(eventName, handler);
  }
};
CustomEvents.prototype.fire = function(eventName) {
  this.invoke.apply(this, arguments);
};
CustomEvents.prototype.invoke = function(eventName) {
  var events, args, index, item;
  if (!this.hasListener(eventName)) {
    return true;
  }
  events = this._safeEvent(eventName);
  args = Array.prototype.slice.call(arguments, 1);
  index = 0;
  while (events[index]) {
    item = events[index];
    if (item.handler.apply(item.context, args) === false) {
      return false;
    }
    index += 1;
  }
  return true;
};
CustomEvents.prototype.hasListener = function(eventName) {
  return this.getListenerLength(eventName) > 0;
};
CustomEvents.prototype.getListenerLength = function(eventName) {
  var events = this._safeEvent(eventName);
  return events.length;
};
var customEvents = CustomEvents;
class EventBusImpl extends customEvents {
  on(eventName, handler) {
    super.on(eventName, handler);
    return this;
  }
  off(eventName, handler) {
    super.off(eventName, handler);
    return this;
  }
  fire(eventName, ...args) {
    super.fire(eventName, ...args);
    return this;
  }
  once(eventName, handler) {
    super.once(eventName, handler);
    return this;
  }
}
class CalendarCore {
  constructor(container, options = {}) {
    var _a;
    this.container = isString_1(container) ? (_a = document == null ? void 0 : document.querySelector(container)) != null ? _a : null : container;
    this.theme = initThemeStore(options.theme);
    this.eventBus = new EventBusImpl();
    this.store = initCalendarStore(options);
    this.renderRange = this.calculateRenderRange(toStartOfDay());
    addAttributeHooks();
    if (this.getStoreState().options.usageStatistics === true) {
      sendHostname_1("calendar", GA_TRACKING_ID);
    }
  }
  getStoreState(group) {
    const state = this.store.getState();
    return group ? state[group] : state;
  }
  getStoreDispatchers(group) {
    const dispatchers = this.store.getState().dispatch;
    return group ? dispatchers[group] : dispatchers;
  }
  destroy() {
    if (this.container) {
      hn(this.container);
    }
    this.store.clearListeners();
    this.theme.clearListeners();
    this.eventBus.off();
    removeAttributeHooks();
    for (const key in this) {
      if (this.hasOwnProperty(key)) {
        delete this[key];
      }
    }
  }
  calculateMonthRenderDate({
    renderDate,
    offset,
    monthOptions
  }) {
    let newRenderDate = new TZDate(renderDate);
    const { visibleWeeksCount } = monthOptions;
    if (visibleWeeksCount > 0) {
      newRenderDate = addDate(newRenderDate, offset * 7 * visibleWeeksCount);
    } else {
      newRenderDate = addMonths(newRenderDate, offset);
    }
    const dateMatrix = createDateMatrixOfMonth(newRenderDate, monthOptions);
    const [[start]] = dateMatrix;
    const end = last(last(dateMatrix));
    return {
      renderDate: newRenderDate,
      renderRange: { start, end }
    };
  }
  calculateWeekRenderDate({
    renderDate,
    offset,
    weekOptions
  }) {
    const newRenderDate = new TZDate(renderDate);
    newRenderDate.addDate(offset * 7);
    const weekDates = getWeekDates(newRenderDate, weekOptions);
    const [start] = weekDates;
    const end = last(weekDates);
    return {
      renderDate: newRenderDate,
      renderRange: { start, end }
    };
  }
  calculateDayRenderDate({ renderDate, offset }) {
    const newRenderDate = new TZDate(renderDate);
    newRenderDate.addDate(offset);
    const start = toStartOfDay(newRenderDate);
    const end = toEndOfDay(newRenderDate);
    return {
      renderDate: newRenderDate,
      renderRange: { start, end }
    };
  }
  move(offset) {
    if (isNil(offset)) {
      return;
    }
    const { currentView, renderDate } = this.getStoreState().view;
    const { options } = this.getStoreState();
    const { setRenderDate } = this.getStoreDispatchers().view;
    const newRenderDate = new TZDate(renderDate);
    let calculatedRenderDate = {
      renderDate: newRenderDate,
      renderRange: { start: new TZDate(newRenderDate), end: new TZDate(newRenderDate) }
    };
    if (currentView === "month") {
      calculatedRenderDate = this.calculateMonthRenderDate({
        renderDate,
        offset,
        monthOptions: options.month
      });
    } else if (currentView === "week") {
      calculatedRenderDate = this.calculateWeekRenderDate({
        renderDate,
        offset,
        weekOptions: options.week
      });
    } else if (currentView === "day") {
      calculatedRenderDate = this.calculateDayRenderDate({ renderDate, offset });
    }
    setRenderDate(calculatedRenderDate.renderDate);
    this.renderRange = calculatedRenderDate.renderRange;
  }
  createEvents(events) {
    const { createEvents: createEvents2 } = this.getStoreDispatchers("calendar");
    createEvents2(events);
  }
  getEventModel(eventId, calendarId) {
    const { events } = this.getStoreState("calendar");
    return events.find(
      ({ id, calendarId: eventCalendarId }) => id === eventId && eventCalendarId === calendarId
    );
  }
  getEvent(eventId, calendarId) {
    var _a, _b;
    return (_b = (_a = this.getEventModel(eventId, calendarId)) == null ? void 0 : _a.toEventObject()) != null ? _b : null;
  }
  updateEvent(eventId, calendarId, changes) {
    const { updateEvent: updateEvent2 } = this.getStoreDispatchers("calendar");
    const event = this.getEventModel(eventId, calendarId);
    if (event) {
      updateEvent2({ event, eventData: changes });
    }
  }
  deleteEvent(eventId, calendarId) {
    const { deleteEvent: deleteEvent2 } = this.getStoreDispatchers("calendar");
    const event = this.getEventModel(eventId, calendarId);
    if (event) {
      deleteEvent2(event);
    }
  }
  setCalendarVisibility(calendarId, isVisible) {
    const { setCalendarVisibility } = this.getStoreDispatchers("calendar");
    const calendarIds = Array.isArray(calendarId) ? calendarId : [calendarId];
    setCalendarVisibility(calendarIds, isVisible);
  }
  render() {
    if (isPresent(this.container)) {
      B$3(
        /* @__PURE__ */ y$3(CalendarContainer, {
          theme: this.theme,
          store: this.store,
          eventBus: this.eventBus
        }, this.getComponent()),
        this.container
      );
    }
    return this;
  }
  renderToString() {
    return S(
      /* @__PURE__ */ y$3(CalendarContainer, {
        theme: this.theme,
        store: this.store,
        eventBus: this.eventBus
      }, this.getComponent())
    );
  }
  clear() {
    const { clearEvents: clearEvents2 } = this.getStoreDispatchers("calendar");
    clearEvents2();
  }
  scrollToNow(scrollBehavior = "auto") {
    this.eventBus.fire("scrollToNow", scrollBehavior);
  }
  calculateRenderRange(renderDate) {
    const { currentView } = this.getStoreState().view;
    const { options } = this.getStoreState();
    const newRenderDate = new TZDate(renderDate);
    let newRenderRange = { start: new TZDate(newRenderDate), end: new TZDate(newRenderDate) };
    if (currentView === "month") {
      newRenderRange = this.calculateMonthRenderDate({
        renderDate,
        offset: 0,
        monthOptions: options.month
      }).renderRange;
    } else if (currentView === "week") {
      newRenderRange = this.calculateWeekRenderDate({
        renderDate,
        offset: 0,
        weekOptions: options.week
      }).renderRange;
    } else if (currentView === "day") {
      newRenderRange = this.calculateDayRenderDate({ renderDate, offset: 0 }).renderRange;
    }
    return newRenderRange;
  }
  today() {
    const { setRenderDate } = this.getStoreDispatchers().view;
    const today = new TZDate();
    setRenderDate(today);
    this.renderRange = this.calculateRenderRange(today);
  }
  setDate(date2) {
    const { setRenderDate } = this.getStoreDispatchers("view");
    const dateToChange = new TZDate(date2);
    setRenderDate(dateToChange);
    this.renderRange = this.calculateRenderRange(dateToChange);
  }
  next() {
    this.move(1);
  }
  prev() {
    this.move(-1);
  }
  setCalendarColor(calendarId, colorOptions) {
    const { setCalendarColor } = this.getStoreDispatchers().calendar;
    setCalendarColor(calendarId, colorOptions);
  }
  changeView(viewName) {
    const { changeView } = this.getStoreDispatchers("view");
    changeView(viewName);
    this.renderRange = this.calculateRenderRange(this.getDate());
  }
  getElement(eventId, calendarId) {
    const event = this.getEvent(eventId, calendarId);
    if (event && this.container) {
      return this.container.querySelector(
        `[data-event-id="${eventId}"][data-calendar-id="${calendarId}"]`
      );
    }
    return null;
  }
  setTheme(theme) {
    const { setTheme } = this.theme.getState().dispatch;
    setTheme(theme);
  }
  getOptions() {
    const { options, template } = this.getStoreState();
    const _a = this.theme.getState(), theme = __objRest(_a, ["dispatch"]);
    return __spreadProps(__spreadValues({}, options), {
      template,
      theme
    });
  }
  setOptions(options) {
    const _a = options, { theme, template } = _a, restOptions = __objRest(_a, ["theme", "template"]);
    const { setTheme } = this.theme.getState().dispatch;
    const {
      options: { setOptions },
      template: { setTemplate }
    } = this.getStoreDispatchers();
    if (isPresent(theme)) {
      setTheme(theme);
    }
    if (isPresent(template)) {
      setTemplate(template);
    }
    setOptions(restOptions);
  }
  getDate() {
    const { renderDate } = this.getStoreState().view;
    return renderDate;
  }
  getDateRangeStart() {
    return this.renderRange.start;
  }
  getDateRangeEnd() {
    return this.renderRange.end;
  }
  getViewName() {
    const { currentView } = this.getStoreState("view");
    return currentView;
  }
  setCalendars(calendars) {
    const { setCalendars } = this.getStoreDispatchers().calendar;
    setCalendars(calendars);
  }
  openFormPopup(event) {
    const { showFormPopup } = this.getStoreDispatchers().popup;
    const eventModel = new EventModel(event);
    const { title, location: location2, start, end, isAllday: isAllday2, isPrivate, state: eventState } = eventModel;
    showFormPopup({
      isCreationPopup: true,
      event: eventModel,
      title,
      location: location2,
      start,
      end,
      isAllday: isAllday2,
      isPrivate,
      eventState
    });
  }
  clearGridSelections() {
    const { clearAll } = this.getStoreDispatchers().gridSelection;
    clearAll();
  }
  fire(eventName, ...args) {
    this.eventBus.fire(eventName, ...args);
    return this;
  }
  off(eventName, handler) {
    this.eventBus.off(eventName, handler);
    return this;
  }
  on(eventName, handler) {
    this.eventBus.on(eventName, handler);
    return this;
  }
  once(eventName, handler) {
    this.eventBus.once(eventName, handler);
    return this;
  }
}
function isValidViewType(viewType) {
  return !!Object.values(VIEW_TYPE).find((type) => type === viewType);
}
class Calendar$1 extends CalendarCore {
  constructor(container, options = {}) {
    super(container, options);
    const { defaultView = "week" } = options;
    if (!isValidViewType(defaultView)) {
      throw new InvalidViewTypeError(defaultView);
    }
    this.render();
  }
  getComponent() {
    return /* @__PURE__ */ y$3(Main, null);
  }
}
var Calendar = Vue.component("ToastUICalendar", {
  name: "ToastUICalendar",
  props: {
    view: String,
    useFormPopup: {
      type: Boolean,
      default: () => void 0
    },
    useDetailPopup: {
      type: Boolean,
      default: () => void 0
    },
    isReadOnly: {
      type: Boolean,
      default: () => void 0
    },
    usageStatistics: {
      type: Boolean,
      default: () => void 0
    },
    eventFilter: Function,
    week: Object,
    month: Object,
    gridSelection: {
      type: [Object, Boolean],
      default: () => void 0
    },
    timezone: Object,
    theme: Object,
    template: Object,
    calendars: Array,
    events: Array
  },
  data() {
    return {
      calendarInstance: null
    };
  },
  watch: {
    view(value) {
      this.calendarInstance.changeView(value);
    },
    useFormPopup(value) {
      this.calendarInstance.setOptions({ useFormPopup: value });
    },
    useDetailPopup(value) {
      this.calendarInstance.setOptions({ useDetailPopup: value });
    },
    isReadOnly(value) {
      this.calendarInstance.setOptions({ isReadOnly: value });
    },
    eventFilter(value) {
      this.calendarInstance.setOptions({ eventFilter: value });
    },
    week(value) {
      this.calendarInstance.setOptions({ week: value });
    },
    month(value) {
      this.calendarInstance.setOptions({ month: value });
    },
    gridSelection(value) {
      this.calendarInstance.setOptions({ gridSelection: value });
    },
    timezone(value) {
      this.calendarInstance.setOptions({ timezone: value });
    },
    theme(value) {
      this.calendarInstance.setTheme(value);
    },
    template(value) {
      this.calendarInstance.setOptions({ template: value });
    },
    calendars(value) {
      this.calendarInstance.setCalendars(value);
    },
    events(value) {
      this.calendarInstance.clear();
      this.calendarInstance.createEvents(value);
    }
  },
  mounted() {
    this.calendarInstance = new Calendar$1(this.$refs.container, {
      defaultView: this.view,
      useFormPopup: this.useFormPopup,
      useDetailPopup: this.useDetailPopup,
      isReadOnly: this.isReadOnly,
      usageStatistics: this.usageStatistics,
      eventFilter: this.eventFilter,
      week: this.week,
      month: this.month,
      gridSelection: this.gridSelection,
      timezone: this.timezone,
      theme: this.theme,
      template: this.template,
      calendars: this.calendars
    });
    this.addEventListeners();
    this.calendarInstance.createEvents(this.events);
  },
  beforeDestroy() {
    this.calendarInstance.off();
    this.calendarInstance.destroy();
  },
  methods: {
    addEventListeners() {
      Object.keys(this.$listeners).forEach((eventName) => {
        this.calendarInstance.on(eventName, (...args) => this.$emit(eventName, ...args));
      });
    },
    getRootElement() {
      return this.$refs.container;
    },
    getInstance() {
      return this.calendarInstance;
    }
  },
  template: '<div ref="container" class="toastui-vue-calendar" />'
});
export { Calendar as default };
