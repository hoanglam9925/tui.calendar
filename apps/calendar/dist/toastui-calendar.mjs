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
/*!
 * TOAST UI Calendar 2nd Edition
 * @version 2.1.3 | Wed May 24 2023
 * @author NHN Cloud FE Development Lab <dl_javascript@nhn.com>
 * @license MIT
 */
import DatePicker from "tui-date-picker";
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
    null != w2[h2] && ("function" == typeof u2.type && null != w2[h2].__e && w2[h2].__e == u2.__d && (u2.__d = $$1(i2).nextSibling), S$2(w2[h2], w2[h2]));
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
function $$1(n2) {
  var l2, u2, i2;
  if (null == n2.type || "string" == typeof n2.type)
    return n2.__e;
  if (n2.__k) {
    for (l2 = n2.__k.length - 1; l2 >= 0; l2--)
      if ((u2 = n2.__k[l2]) && (i2 = $$1(u2)))
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
  borderColor: "#000"
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
function clone$1(source) {
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
function clone(date2) {
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
  const date2 = clone(d2);
  date2.setMilliseconds(d2.getMilliseconds() + step);
  return date2;
}
function addMinutes(d2, step) {
  const date2 = clone(d2);
  date2.setMinutes(d2.getMinutes() + step);
  return date2;
}
function setTimeStrToDate(d2, timeStr) {
  const date2 = clone(d2);
  date2.setHours(...timeStr.split(":").map(Number));
  return date2;
}
function addDate(d2, step) {
  const date2 = clone(d2);
  date2.setDate(d2.getDate() + step);
  return date2;
}
function subtractDate(d2, steps) {
  const date2 = clone(d2);
  date2.setDate(d2.getDate() - steps);
  return date2;
}
function addMonths(d2, step = 1) {
  const date2 = clone(d2);
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
    const entries = this.internalMap.entries();
    let next = entries.next();
    while (next.done === false) {
      const [key, value] = next.value;
      if (iteratee(value, key) === false) {
        break;
      }
      next = entries.next();
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
var purify = { exports: {} };
/*! @license DOMPurify 2.4.5 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/2.4.5/LICENSE */
(function(module, exports) {
  (function(global2, factory) {
    module.exports = factory();
  })(commonjsGlobal, function() {
    function _typeof(obj) {
      "@babel/helpers - typeof";
      return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj2) {
        return typeof obj2;
      } : function(obj2) {
        return obj2 && "function" == typeof Symbol && obj2.constructor === Symbol && obj2 !== Symbol.prototype ? "symbol" : typeof obj2;
      }, _typeof(obj);
    }
    function _setPrototypeOf(o2, p2) {
      _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf2(o3, p3) {
        o3.__proto__ = p3;
        return o3;
      };
      return _setPrototypeOf(o2, p2);
    }
    function _isNativeReflectConstruct() {
      if (typeof Reflect === "undefined" || !Reflect.construct)
        return false;
      if (Reflect.construct.sham)
        return false;
      if (typeof Proxy === "function")
        return true;
      try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
        }));
        return true;
      } catch (e2) {
        return false;
      }
    }
    function _construct(Parent, args, Class) {
      if (_isNativeReflectConstruct()) {
        _construct = Reflect.construct;
      } else {
        _construct = function _construct2(Parent2, args2, Class2) {
          var a2 = [null];
          a2.push.apply(a2, args2);
          var Constructor2 = Function.bind.apply(Parent2, a2);
          var instance = new Constructor2();
          if (Class2)
            _setPrototypeOf(instance, Class2.prototype);
          return instance;
        };
      }
      return _construct.apply(null, arguments);
    }
    function _toConsumableArray(arr) {
      return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
    }
    function _arrayWithoutHoles(arr) {
      if (Array.isArray(arr))
        return _arrayLikeToArray(arr);
    }
    function _iterableToArray(iter) {
      if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null)
        return Array.from(iter);
    }
    function _unsupportedIterableToArray(o2, minLen) {
      if (!o2)
        return;
      if (typeof o2 === "string")
        return _arrayLikeToArray(o2, minLen);
      var n2 = Object.prototype.toString.call(o2).slice(8, -1);
      if (n2 === "Object" && o2.constructor)
        n2 = o2.constructor.name;
      if (n2 === "Map" || n2 === "Set")
        return Array.from(o2);
      if (n2 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2))
        return _arrayLikeToArray(o2, minLen);
    }
    function _arrayLikeToArray(arr, len) {
      if (len == null || len > arr.length)
        len = arr.length;
      for (var i2 = 0, arr2 = new Array(len); i2 < len; i2++)
        arr2[i2] = arr[i2];
      return arr2;
    }
    function _nonIterableSpread() {
      throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var hasOwnProperty = Object.hasOwnProperty, setPrototypeOf = Object.setPrototypeOf, isFrozen = Object.isFrozen, getPrototypeOf = Object.getPrototypeOf, getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
    var freeze = Object.freeze, seal = Object.seal, create = Object.create;
    var _ref = typeof Reflect !== "undefined" && Reflect, apply = _ref.apply, construct = _ref.construct;
    if (!apply) {
      apply = function apply2(fun, thisValue, args) {
        return fun.apply(thisValue, args);
      };
    }
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
    if (!construct) {
      construct = function construct2(Func, args) {
        return _construct(Func, _toConsumableArray(args));
      };
    }
    var arrayForEach = unapply(Array.prototype.forEach);
    var arrayPop = unapply(Array.prototype.pop);
    var arrayPush = unapply(Array.prototype.push);
    var stringToLowerCase = unapply(String.prototype.toLowerCase);
    var stringToString = unapply(String.prototype.toString);
    var stringMatch = unapply(String.prototype.match);
    var stringReplace = unapply(String.prototype.replace);
    var stringIndexOf = unapply(String.prototype.indexOf);
    var stringTrim = unapply(String.prototype.trim);
    var regExpTest = unapply(RegExp.prototype.test);
    var typeErrorCreate = unconstruct(TypeError);
    function unapply(func) {
      return function(thisArg) {
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
    function addToSet(set, array2, transformCaseFunc) {
      transformCaseFunc = transformCaseFunc ? transformCaseFunc : stringToLowerCase;
      if (setPrototypeOf) {
        setPrototypeOf(set, null);
      }
      var l2 = array2.length;
      while (l2--) {
        var element = array2[l2];
        if (typeof element === "string") {
          var lcElement = transformCaseFunc(element);
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
    function clone2(object) {
      var newObject = create(null);
      var property;
      for (property in object) {
        if (apply(hasOwnProperty, object, [property]) === true) {
          newObject[property] = object[property];
        }
      }
      return newObject;
    }
    function lookupGetter(object, prop) {
      while (object !== null) {
        var desc = getOwnPropertyDescriptor(object, prop);
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
      function fallbackValue(element) {
        console.warn("fallback value for", element);
        return null;
      }
      return fallbackValue;
    }
    var html$1 = freeze(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "section", "select", "shadow", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]);
    var svg$1 = freeze(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]);
    var svgFilters = freeze(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]);
    var svgDisallowed = freeze(["animate", "color-profile", "cursor", "discard", "fedropshadow", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]);
    var mathMl$1 = freeze(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover"]);
    var mathMlDisallowed = freeze(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]);
    var text = freeze(["#text"]);
    var html = freeze(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "pattern", "placeholder", "playsinline", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "xmlns", "slot"]);
    var svg = freeze(["accent-height", "accumulate", "additive", "alignment-baseline", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]);
    var mathMl = freeze(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]);
    var xml = freeze(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]);
    var MUSTACHE_EXPR = seal(/\{\{[\w\W]*|[\w\W]*\}\}/gm);
    var ERB_EXPR = seal(/<%[\w\W]*|[\w\W]*%>/gm);
    var TMPLIT_EXPR = seal(/\${[\w\W]*}/gm);
    var DATA_ATTR = seal(/^data-[\-\w.\u00B7-\uFFFF]/);
    var ARIA_ATTR = seal(/^aria-[\-\w]+$/);
    var IS_ALLOWED_URI = seal(
      /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i
    );
    var IS_SCRIPT_OR_DATA = seal(/^(?:\w+script|data):/i);
    var ATTR_WHITESPACE = seal(
      /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g
    );
    var DOCTYPE_NAME = seal(/^html$/i);
    var getGlobal = function getGlobal2() {
      return typeof window === "undefined" ? null : window;
    };
    var _createTrustedTypesPolicy = function _createTrustedTypesPolicy2(trustedTypes, document2) {
      if (_typeof(trustedTypes) !== "object" || typeof trustedTypes.createPolicy !== "function") {
        return null;
      }
      var suffix = null;
      var ATTR_NAME = "data-tt-policy-suffix";
      if (document2.currentScript && document2.currentScript.hasAttribute(ATTR_NAME)) {
        suffix = document2.currentScript.getAttribute(ATTR_NAME);
      }
      var policyName = "dompurify" + (suffix ? "#" + suffix : "");
      try {
        return trustedTypes.createPolicy(policyName, {
          createHTML: function createHTML(html2) {
            return html2;
          },
          createScriptURL: function createScriptURL(scriptUrl) {
            return scriptUrl;
          }
        });
      } catch (_2) {
        console.warn("TrustedTypes policy " + policyName + " could not be created.");
        return null;
      }
    };
    function createDOMPurify() {
      var window2 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : getGlobal();
      var DOMPurify = function DOMPurify2(root) {
        return createDOMPurify(root);
      };
      DOMPurify.version = "2.4.5";
      DOMPurify.removed = [];
      if (!window2 || !window2.document || window2.document.nodeType !== 9) {
        DOMPurify.isSupported = false;
        return DOMPurify;
      }
      var originalDocument = window2.document;
      var document2 = window2.document;
      var DocumentFragment = window2.DocumentFragment, HTMLTemplateElement = window2.HTMLTemplateElement, Node = window2.Node, Element2 = window2.Element, NodeFilter = window2.NodeFilter, _window$NamedNodeMap = window2.NamedNodeMap, NamedNodeMap = _window$NamedNodeMap === void 0 ? window2.NamedNodeMap || window2.MozNamedAttrMap : _window$NamedNodeMap, HTMLFormElement = window2.HTMLFormElement, DOMParser = window2.DOMParser, trustedTypes = window2.trustedTypes;
      var ElementPrototype = Element2.prototype;
      var cloneNode = lookupGetter(ElementPrototype, "cloneNode");
      var getNextSibling = lookupGetter(ElementPrototype, "nextSibling");
      var getChildNodes = lookupGetter(ElementPrototype, "childNodes");
      var getParentNode = lookupGetter(ElementPrototype, "parentNode");
      if (typeof HTMLTemplateElement === "function") {
        var template = document2.createElement("template");
        if (template.content && template.content.ownerDocument) {
          document2 = template.content.ownerDocument;
        }
      }
      var trustedTypesPolicy = _createTrustedTypesPolicy(trustedTypes, originalDocument);
      var emptyHTML = trustedTypesPolicy ? trustedTypesPolicy.createHTML("") : "";
      var _document = document2, implementation = _document.implementation, createNodeIterator = _document.createNodeIterator, createDocumentFragment = _document.createDocumentFragment, getElementsByTagName = _document.getElementsByTagName;
      var importNode = originalDocument.importNode;
      var documentMode = {};
      try {
        documentMode = clone2(document2).documentMode ? document2.documentMode : {};
      } catch (_2) {
      }
      var hooks = {};
      DOMPurify.isSupported = typeof getParentNode === "function" && implementation && typeof implementation.createHTMLDocument !== "undefined" && documentMode !== 9;
      var MUSTACHE_EXPR$1 = MUSTACHE_EXPR, ERB_EXPR$1 = ERB_EXPR, TMPLIT_EXPR$1 = TMPLIT_EXPR, DATA_ATTR$1 = DATA_ATTR, ARIA_ATTR$1 = ARIA_ATTR, IS_SCRIPT_OR_DATA$1 = IS_SCRIPT_OR_DATA, ATTR_WHITESPACE$1 = ATTR_WHITESPACE;
      var IS_ALLOWED_URI$1 = IS_ALLOWED_URI;
      var ALLOWED_TAGS = null;
      var DEFAULT_ALLOWED_TAGS = addToSet({}, [].concat(_toConsumableArray(html$1), _toConsumableArray(svg$1), _toConsumableArray(svgFilters), _toConsumableArray(mathMl$1), _toConsumableArray(text)));
      var ALLOWED_ATTR = null;
      var DEFAULT_ALLOWED_ATTR = addToSet({}, [].concat(_toConsumableArray(html), _toConsumableArray(svg), _toConsumableArray(mathMl), _toConsumableArray(xml)));
      var CUSTOM_ELEMENT_HANDLING = Object.seal(Object.create(null, {
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
      var FORBID_TAGS = null;
      var FORBID_ATTR = null;
      var ALLOW_ARIA_ATTR = true;
      var ALLOW_DATA_ATTR = true;
      var ALLOW_UNKNOWN_PROTOCOLS = false;
      var ALLOW_SELF_CLOSE_IN_ATTR = true;
      var SAFE_FOR_TEMPLATES = false;
      var WHOLE_DOCUMENT = false;
      var SET_CONFIG = false;
      var FORCE_BODY = false;
      var RETURN_DOM = false;
      var RETURN_DOM_FRAGMENT = false;
      var RETURN_TRUSTED_TYPE = false;
      var SANITIZE_DOM = true;
      var SANITIZE_NAMED_PROPS = false;
      var SANITIZE_NAMED_PROPS_PREFIX = "user-content-";
      var KEEP_CONTENT = true;
      var IN_PLACE = false;
      var USE_PROFILES = {};
      var FORBID_CONTENTS = null;
      var DEFAULT_FORBID_CONTENTS = addToSet({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]);
      var DATA_URI_TAGS = null;
      var DEFAULT_DATA_URI_TAGS = addToSet({}, ["audio", "video", "img", "source", "image", "track"]);
      var URI_SAFE_ATTRIBUTES = null;
      var DEFAULT_URI_SAFE_ATTRIBUTES = addToSet({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]);
      var MATHML_NAMESPACE = "http://www.w3.org/1998/Math/MathML";
      var SVG_NAMESPACE = "http://www.w3.org/2000/svg";
      var HTML_NAMESPACE = "http://www.w3.org/1999/xhtml";
      var NAMESPACE = HTML_NAMESPACE;
      var IS_EMPTY_INPUT = false;
      var ALLOWED_NAMESPACES = null;
      var DEFAULT_ALLOWED_NAMESPACES = addToSet({}, [MATHML_NAMESPACE, SVG_NAMESPACE, HTML_NAMESPACE], stringToString);
      var PARSER_MEDIA_TYPE;
      var SUPPORTED_PARSER_MEDIA_TYPES = ["application/xhtml+xml", "text/html"];
      var DEFAULT_PARSER_MEDIA_TYPE = "text/html";
      var transformCaseFunc;
      var CONFIG = null;
      var formElement = document2.createElement("form");
      var isRegexOrFunction = function isRegexOrFunction2(testValue) {
        return testValue instanceof RegExp || testValue instanceof Function;
      };
      var _parseConfig = function _parseConfig2(cfg) {
        if (CONFIG && CONFIG === cfg) {
          return;
        }
        if (!cfg || _typeof(cfg) !== "object") {
          cfg = {};
        }
        cfg = clone2(cfg);
        PARSER_MEDIA_TYPE = SUPPORTED_PARSER_MEDIA_TYPES.indexOf(cfg.PARSER_MEDIA_TYPE) === -1 ? PARSER_MEDIA_TYPE = DEFAULT_PARSER_MEDIA_TYPE : PARSER_MEDIA_TYPE = cfg.PARSER_MEDIA_TYPE;
        transformCaseFunc = PARSER_MEDIA_TYPE === "application/xhtml+xml" ? stringToString : stringToLowerCase;
        ALLOWED_TAGS = "ALLOWED_TAGS" in cfg ? addToSet({}, cfg.ALLOWED_TAGS, transformCaseFunc) : DEFAULT_ALLOWED_TAGS;
        ALLOWED_ATTR = "ALLOWED_ATTR" in cfg ? addToSet({}, cfg.ALLOWED_ATTR, transformCaseFunc) : DEFAULT_ALLOWED_ATTR;
        ALLOWED_NAMESPACES = "ALLOWED_NAMESPACES" in cfg ? addToSet({}, cfg.ALLOWED_NAMESPACES, stringToString) : DEFAULT_ALLOWED_NAMESPACES;
        URI_SAFE_ATTRIBUTES = "ADD_URI_SAFE_ATTR" in cfg ? addToSet(
          clone2(DEFAULT_URI_SAFE_ATTRIBUTES),
          cfg.ADD_URI_SAFE_ATTR,
          transformCaseFunc
        ) : DEFAULT_URI_SAFE_ATTRIBUTES;
        DATA_URI_TAGS = "ADD_DATA_URI_TAGS" in cfg ? addToSet(
          clone2(DEFAULT_DATA_URI_TAGS),
          cfg.ADD_DATA_URI_TAGS,
          transformCaseFunc
        ) : DEFAULT_DATA_URI_TAGS;
        FORBID_CONTENTS = "FORBID_CONTENTS" in cfg ? addToSet({}, cfg.FORBID_CONTENTS, transformCaseFunc) : DEFAULT_FORBID_CONTENTS;
        FORBID_TAGS = "FORBID_TAGS" in cfg ? addToSet({}, cfg.FORBID_TAGS, transformCaseFunc) : {};
        FORBID_ATTR = "FORBID_ATTR" in cfg ? addToSet({}, cfg.FORBID_ATTR, transformCaseFunc) : {};
        USE_PROFILES = "USE_PROFILES" in cfg ? cfg.USE_PROFILES : false;
        ALLOW_ARIA_ATTR = cfg.ALLOW_ARIA_ATTR !== false;
        ALLOW_DATA_ATTR = cfg.ALLOW_DATA_ATTR !== false;
        ALLOW_UNKNOWN_PROTOCOLS = cfg.ALLOW_UNKNOWN_PROTOCOLS || false;
        ALLOW_SELF_CLOSE_IN_ATTR = cfg.ALLOW_SELF_CLOSE_IN_ATTR !== false;
        SAFE_FOR_TEMPLATES = cfg.SAFE_FOR_TEMPLATES || false;
        WHOLE_DOCUMENT = cfg.WHOLE_DOCUMENT || false;
        RETURN_DOM = cfg.RETURN_DOM || false;
        RETURN_DOM_FRAGMENT = cfg.RETURN_DOM_FRAGMENT || false;
        RETURN_TRUSTED_TYPE = cfg.RETURN_TRUSTED_TYPE || false;
        FORCE_BODY = cfg.FORCE_BODY || false;
        SANITIZE_DOM = cfg.SANITIZE_DOM !== false;
        SANITIZE_NAMED_PROPS = cfg.SANITIZE_NAMED_PROPS || false;
        KEEP_CONTENT = cfg.KEEP_CONTENT !== false;
        IN_PLACE = cfg.IN_PLACE || false;
        IS_ALLOWED_URI$1 = cfg.ALLOWED_URI_REGEXP || IS_ALLOWED_URI$1;
        NAMESPACE = cfg.NAMESPACE || HTML_NAMESPACE;
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
          ALLOWED_TAGS = addToSet({}, _toConsumableArray(text));
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
            ALLOWED_TAGS = clone2(ALLOWED_TAGS);
          }
          addToSet(ALLOWED_TAGS, cfg.ADD_TAGS, transformCaseFunc);
        }
        if (cfg.ADD_ATTR) {
          if (ALLOWED_ATTR === DEFAULT_ALLOWED_ATTR) {
            ALLOWED_ATTR = clone2(ALLOWED_ATTR);
          }
          addToSet(ALLOWED_ATTR, cfg.ADD_ATTR, transformCaseFunc);
        }
        if (cfg.ADD_URI_SAFE_ATTR) {
          addToSet(URI_SAFE_ATTRIBUTES, cfg.ADD_URI_SAFE_ATTR, transformCaseFunc);
        }
        if (cfg.FORBID_CONTENTS) {
          if (FORBID_CONTENTS === DEFAULT_FORBID_CONTENTS) {
            FORBID_CONTENTS = clone2(FORBID_CONTENTS);
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
        if (freeze) {
          freeze(cfg);
        }
        CONFIG = cfg;
      };
      var MATHML_TEXT_INTEGRATION_POINTS = addToSet({}, ["mi", "mo", "mn", "ms", "mtext"]);
      var HTML_INTEGRATION_POINTS = addToSet({}, ["foreignobject", "desc", "title", "annotation-xml"]);
      var COMMON_SVG_AND_HTML_ELEMENTS = addToSet({}, ["title", "style", "font", "a", "script"]);
      var ALL_SVG_TAGS = addToSet({}, svg$1);
      addToSet(ALL_SVG_TAGS, svgFilters);
      addToSet(ALL_SVG_TAGS, svgDisallowed);
      var ALL_MATHML_TAGS = addToSet({}, mathMl$1);
      addToSet(ALL_MATHML_TAGS, mathMlDisallowed);
      var _checkValidNamespace = function _checkValidNamespace2(element) {
        var parent = getParentNode(element);
        if (!parent || !parent.tagName) {
          parent = {
            namespaceURI: NAMESPACE,
            tagName: "template"
          };
        }
        var tagName = stringToLowerCase(element.tagName);
        var parentTagName = stringToLowerCase(parent.tagName);
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
      var _forceRemove = function _forceRemove2(node) {
        arrayPush(DOMPurify.removed, {
          element: node
        });
        try {
          node.parentNode.removeChild(node);
        } catch (_2) {
          try {
            node.outerHTML = emptyHTML;
          } catch (_3) {
            node.remove();
          }
        }
      };
      var _removeAttribute = function _removeAttribute2(name, node) {
        try {
          arrayPush(DOMPurify.removed, {
            attribute: node.getAttributeNode(name),
            from: node
          });
        } catch (_2) {
          arrayPush(DOMPurify.removed, {
            attribute: null,
            from: node
          });
        }
        node.removeAttribute(name);
        if (name === "is" && !ALLOWED_ATTR[name]) {
          if (RETURN_DOM || RETURN_DOM_FRAGMENT) {
            try {
              _forceRemove(node);
            } catch (_2) {
            }
          } else {
            try {
              node.setAttribute(name, "");
            } catch (_2) {
            }
          }
        }
      };
      var _initDocument = function _initDocument2(dirty) {
        var doc;
        var leadingWhitespace;
        if (FORCE_BODY) {
          dirty = "<remove></remove>" + dirty;
        } else {
          var matches = stringMatch(dirty, /^[\r\n\t ]+/);
          leadingWhitespace = matches && matches[0];
        }
        if (PARSER_MEDIA_TYPE === "application/xhtml+xml" && NAMESPACE === HTML_NAMESPACE) {
          dirty = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + dirty + "</body></html>";
        }
        var dirtyPayload = trustedTypesPolicy ? trustedTypesPolicy.createHTML(dirty) : dirty;
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
        var body = doc.body || doc.documentElement;
        if (dirty && leadingWhitespace) {
          body.insertBefore(document2.createTextNode(leadingWhitespace), body.childNodes[0] || null);
        }
        if (NAMESPACE === HTML_NAMESPACE) {
          return getElementsByTagName.call(doc, WHOLE_DOCUMENT ? "html" : "body")[0];
        }
        return WHOLE_DOCUMENT ? doc.documentElement : body;
      };
      var _createIterator = function _createIterator2(root) {
        return createNodeIterator.call(
          root.ownerDocument || root,
          root,
          NodeFilter.SHOW_ELEMENT | NodeFilter.SHOW_COMMENT | NodeFilter.SHOW_TEXT,
          null,
          false
        );
      };
      var _isClobbered = function _isClobbered2(elm) {
        return elm instanceof HTMLFormElement && (typeof elm.nodeName !== "string" || typeof elm.textContent !== "string" || typeof elm.removeChild !== "function" || !(elm.attributes instanceof NamedNodeMap) || typeof elm.removeAttribute !== "function" || typeof elm.setAttribute !== "function" || typeof elm.namespaceURI !== "string" || typeof elm.insertBefore !== "function" || typeof elm.hasChildNodes !== "function");
      };
      var _isNode = function _isNode2(object) {
        return _typeof(Node) === "object" ? object instanceof Node : object && _typeof(object) === "object" && typeof object.nodeType === "number" && typeof object.nodeName === "string";
      };
      var _executeHook = function _executeHook2(entryPoint, currentNode, data) {
        if (!hooks[entryPoint]) {
          return;
        }
        arrayForEach(hooks[entryPoint], function(hook) {
          hook.call(DOMPurify, currentNode, data, CONFIG);
        });
      };
      var _sanitizeElements = function _sanitizeElements2(currentNode) {
        var content;
        _executeHook("beforeSanitizeElements", currentNode, null);
        if (_isClobbered(currentNode)) {
          _forceRemove(currentNode);
          return true;
        }
        if (regExpTest(/[\u0080-\uFFFF]/, currentNode.nodeName)) {
          _forceRemove(currentNode);
          return true;
        }
        var tagName = transformCaseFunc(currentNode.nodeName);
        _executeHook("uponSanitizeElement", currentNode, {
          tagName,
          allowedTags: ALLOWED_TAGS
        });
        if (currentNode.hasChildNodes() && !_isNode(currentNode.firstElementChild) && (!_isNode(currentNode.content) || !_isNode(currentNode.content.firstElementChild)) && regExpTest(/<[/\w]/g, currentNode.innerHTML) && regExpTest(/<[/\w]/g, currentNode.textContent)) {
          _forceRemove(currentNode);
          return true;
        }
        if (tagName === "select" && regExpTest(/<template/i, currentNode.innerHTML)) {
          _forceRemove(currentNode);
          return true;
        }
        if (!ALLOWED_TAGS[tagName] || FORBID_TAGS[tagName]) {
          if (!FORBID_TAGS[tagName] && _basicCustomElementTest(tagName)) {
            if (CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof RegExp && regExpTest(CUSTOM_ELEMENT_HANDLING.tagNameCheck, tagName))
              return false;
            if (CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof Function && CUSTOM_ELEMENT_HANDLING.tagNameCheck(tagName))
              return false;
          }
          if (KEEP_CONTENT && !FORBID_CONTENTS[tagName]) {
            var parentNode = getParentNode(currentNode) || currentNode.parentNode;
            var childNodes = getChildNodes(currentNode) || currentNode.childNodes;
            if (childNodes && parentNode) {
              var childCount = childNodes.length;
              for (var i2 = childCount - 1; i2 >= 0; --i2) {
                parentNode.insertBefore(cloneNode(childNodes[i2], true), getNextSibling(currentNode));
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
        if ((tagName === "noscript" || tagName === "noembed") && regExpTest(/<\/no(script|embed)/i, currentNode.innerHTML)) {
          _forceRemove(currentNode);
          return true;
        }
        if (SAFE_FOR_TEMPLATES && currentNode.nodeType === 3) {
          content = currentNode.textContent;
          content = stringReplace(content, MUSTACHE_EXPR$1, " ");
          content = stringReplace(content, ERB_EXPR$1, " ");
          content = stringReplace(content, TMPLIT_EXPR$1, " ");
          if (currentNode.textContent !== content) {
            arrayPush(DOMPurify.removed, {
              element: currentNode.cloneNode()
            });
            currentNode.textContent = content;
          }
        }
        _executeHook("afterSanitizeElements", currentNode, null);
        return false;
      };
      var _isValidAttribute = function _isValidAttribute2(lcTag, lcName, value) {
        if (SANITIZE_DOM && (lcName === "id" || lcName === "name") && (value in document2 || value in formElement)) {
          return false;
        }
        if (ALLOW_DATA_ATTR && !FORBID_ATTR[lcName] && regExpTest(DATA_ATTR$1, lcName))
          ;
        else if (ALLOW_ARIA_ATTR && regExpTest(ARIA_ATTR$1, lcName))
          ;
        else if (!ALLOWED_ATTR[lcName] || FORBID_ATTR[lcName]) {
          if (_basicCustomElementTest(lcTag) && (CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof RegExp && regExpTest(CUSTOM_ELEMENT_HANDLING.tagNameCheck, lcTag) || CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof Function && CUSTOM_ELEMENT_HANDLING.tagNameCheck(lcTag)) && (CUSTOM_ELEMENT_HANDLING.attributeNameCheck instanceof RegExp && regExpTest(CUSTOM_ELEMENT_HANDLING.attributeNameCheck, lcName) || CUSTOM_ELEMENT_HANDLING.attributeNameCheck instanceof Function && CUSTOM_ELEMENT_HANDLING.attributeNameCheck(lcName)) || lcName === "is" && CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements && (CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof RegExp && regExpTest(CUSTOM_ELEMENT_HANDLING.tagNameCheck, value) || CUSTOM_ELEMENT_HANDLING.tagNameCheck instanceof Function && CUSTOM_ELEMENT_HANDLING.tagNameCheck(value)))
            ;
          else {
            return false;
          }
        } else if (URI_SAFE_ATTRIBUTES[lcName])
          ;
        else if (regExpTest(IS_ALLOWED_URI$1, stringReplace(value, ATTR_WHITESPACE$1, "")))
          ;
        else if ((lcName === "src" || lcName === "xlink:href" || lcName === "href") && lcTag !== "script" && stringIndexOf(value, "data:") === 0 && DATA_URI_TAGS[lcTag])
          ;
        else if (ALLOW_UNKNOWN_PROTOCOLS && !regExpTest(IS_SCRIPT_OR_DATA$1, stringReplace(value, ATTR_WHITESPACE$1, "")))
          ;
        else if (!value)
          ;
        else {
          return false;
        }
        return true;
      };
      var _basicCustomElementTest = function _basicCustomElementTest2(tagName) {
        return tagName.indexOf("-") > 0;
      };
      var _sanitizeAttributes = function _sanitizeAttributes2(currentNode) {
        var attr;
        var value;
        var lcName;
        var l2;
        _executeHook("beforeSanitizeAttributes", currentNode, null);
        var attributes = currentNode.attributes;
        if (!attributes) {
          return;
        }
        var hookEvent = {
          attrName: "",
          attrValue: "",
          keepAttr: true,
          allowedAttributes: ALLOWED_ATTR
        };
        l2 = attributes.length;
        while (l2--) {
          attr = attributes[l2];
          var _attr = attr, name = _attr.name, namespaceURI = _attr.namespaceURI;
          value = name === "value" ? attr.value : stringTrim(attr.value);
          lcName = transformCaseFunc(name);
          hookEvent.attrName = lcName;
          hookEvent.attrValue = value;
          hookEvent.keepAttr = true;
          hookEvent.forceKeepAttr = void 0;
          _executeHook("uponSanitizeAttribute", currentNode, hookEvent);
          value = hookEvent.attrValue;
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
            value = stringReplace(value, MUSTACHE_EXPR$1, " ");
            value = stringReplace(value, ERB_EXPR$1, " ");
            value = stringReplace(value, TMPLIT_EXPR$1, " ");
          }
          var lcTag = transformCaseFunc(currentNode.nodeName);
          if (!_isValidAttribute(lcTag, lcName, value)) {
            continue;
          }
          if (SANITIZE_NAMED_PROPS && (lcName === "id" || lcName === "name")) {
            _removeAttribute(name, currentNode);
            value = SANITIZE_NAMED_PROPS_PREFIX + value;
          }
          if (trustedTypesPolicy && _typeof(trustedTypes) === "object" && typeof trustedTypes.getAttributeType === "function") {
            if (namespaceURI)
              ;
            else {
              switch (trustedTypes.getAttributeType(lcTag, lcName)) {
                case "TrustedHTML":
                  value = trustedTypesPolicy.createHTML(value);
                  break;
                case "TrustedScriptURL":
                  value = trustedTypesPolicy.createScriptURL(value);
                  break;
              }
            }
          }
          try {
            if (namespaceURI) {
              currentNode.setAttributeNS(namespaceURI, name, value);
            } else {
              currentNode.setAttribute(name, value);
            }
            arrayPop(DOMPurify.removed);
          } catch (_2) {
          }
        }
        _executeHook("afterSanitizeAttributes", currentNode, null);
      };
      var _sanitizeShadowDOM = function _sanitizeShadowDOM2(fragment) {
        var shadowNode;
        var shadowIterator = _createIterator(fragment);
        _executeHook("beforeSanitizeShadowDOM", fragment, null);
        while (shadowNode = shadowIterator.nextNode()) {
          _executeHook("uponSanitizeShadowNode", shadowNode, null);
          if (_sanitizeElements(shadowNode)) {
            continue;
          }
          if (shadowNode.content instanceof DocumentFragment) {
            _sanitizeShadowDOM2(shadowNode.content);
          }
          _sanitizeAttributes(shadowNode);
        }
        _executeHook("afterSanitizeShadowDOM", fragment, null);
      };
      DOMPurify.sanitize = function(dirty) {
        var cfg = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        var body;
        var importedNode;
        var currentNode;
        var oldNode;
        var returnNode;
        IS_EMPTY_INPUT = !dirty;
        if (IS_EMPTY_INPUT) {
          dirty = "<!-->";
        }
        if (typeof dirty !== "string" && !_isNode(dirty)) {
          if (typeof dirty.toString !== "function") {
            throw typeErrorCreate("toString is not a function");
          } else {
            dirty = dirty.toString();
            if (typeof dirty !== "string") {
              throw typeErrorCreate("dirty is not a string, aborting");
            }
          }
        }
        if (!DOMPurify.isSupported) {
          if (_typeof(window2.toStaticHTML) === "object" || typeof window2.toStaticHTML === "function") {
            if (typeof dirty === "string") {
              return window2.toStaticHTML(dirty);
            }
            if (_isNode(dirty)) {
              return window2.toStaticHTML(dirty.outerHTML);
            }
          }
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
            var tagName = transformCaseFunc(dirty.nodeName);
            if (!ALLOWED_TAGS[tagName] || FORBID_TAGS[tagName]) {
              throw typeErrorCreate("root node is forbidden and cannot be sanitized in-place");
            }
          }
        } else if (dirty instanceof Node) {
          body = _initDocument("<!---->");
          importedNode = body.ownerDocument.importNode(dirty, true);
          if (importedNode.nodeType === 1 && importedNode.nodeName === "BODY") {
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
        var nodeIterator = _createIterator(IN_PLACE ? dirty : body);
        while (currentNode = nodeIterator.nextNode()) {
          if (currentNode.nodeType === 3 && currentNode === oldNode) {
            continue;
          }
          if (_sanitizeElements(currentNode)) {
            continue;
          }
          if (currentNode.content instanceof DocumentFragment) {
            _sanitizeShadowDOM(currentNode.content);
          }
          _sanitizeAttributes(currentNode);
          oldNode = currentNode;
        }
        oldNode = null;
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
          if (ALLOWED_ATTR.shadowroot || ALLOWED_ATTR.shadowrootmod) {
            returnNode = importNode.call(originalDocument, returnNode, true);
          }
          return returnNode;
        }
        var serializedHTML = WHOLE_DOCUMENT ? body.outerHTML : body.innerHTML;
        if (WHOLE_DOCUMENT && ALLOWED_TAGS["!doctype"] && body.ownerDocument && body.ownerDocument.doctype && body.ownerDocument.doctype.name && regExpTest(DOCTYPE_NAME, body.ownerDocument.doctype.name)) {
          serializedHTML = "<!DOCTYPE " + body.ownerDocument.doctype.name + ">\n" + serializedHTML;
        }
        if (SAFE_FOR_TEMPLATES) {
          serializedHTML = stringReplace(serializedHTML, MUSTACHE_EXPR$1, " ");
          serializedHTML = stringReplace(serializedHTML, ERB_EXPR$1, " ");
          serializedHTML = stringReplace(serializedHTML, TMPLIT_EXPR$1, " ");
        }
        return trustedTypesPolicy && RETURN_TRUSTED_TYPE ? trustedTypesPolicy.createHTML(serializedHTML) : serializedHTML;
      };
      DOMPurify.setConfig = function(cfg) {
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
        var lcTag = transformCaseFunc(tag);
        var lcName = transformCaseFunc(attr);
        return _isValidAttribute(lcTag, lcName, value);
      };
      DOMPurify.addHook = function(entryPoint, hookFunction) {
        if (typeof hookFunction !== "function") {
          return;
        }
        hooks[entryPoint] = hooks[entryPoint] || [];
        arrayPush(hooks[entryPoint], hookFunction);
      };
      DOMPurify.removeHook = function(entryPoint) {
        if (hooks[entryPoint]) {
          return arrayPop(hooks[entryPoint]);
        }
      };
      DOMPurify.removeHooks = function(entryPoint) {
        if (hooks[entryPoint]) {
          hooks[entryPoint] = [];
        }
      };
      DOMPurify.removeAllHooks = function() {
        hooks = {};
      };
      return DOMPurify;
    }
    var purify2 = createDOMPurify();
    return purify2;
  });
})(purify);
var browser = window.DOMPurify || (window.DOMPurify = purify.exports.default || purify.exports);
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
    const eventYMD = toFormat(timeUIModel.getStarts(), "YYYYMMDD");
    let topArrayInYMD = indiceInYMD[eventYMD];
    if (isUndefined_1(topArrayInYMD)) {
      topArrayInYMD = indiceInYMD[eventYMD] = [];
      idsOfDay[eventYMD].forEach((cid) => {
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
var B = "undefined" != typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103, H = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/, Z = /^on(Ani|Tra|Tou|BeforeInp|Compo)/, Y = /[A-Z0-9]/g, $ = "undefined" != typeof document, q = function(n2) {
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
      if (!("value" === o2 && "defaultValue" in t2 && null == i2 || $ && "children" === o2 && "noscript" === e2 || "class" === o2 || "className" === o2)) {
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
      dragBackgroundColor: calendar == null ? void 0 : calendar.dragBackgroundColor
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
  const { color, backgroundColor, dragBackgroundColor, borderColor } = getEventColors(
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
    opacity: isDraggingTarget ? 0.5 : 1
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
  }, /* @__PURE__ */ y$3("b", null, " QR Code: "), " ", currentUserData == null ? void 0 : currentUserData.qr_content)), (currentUserData == null ? void 0 : currentUserData.description) && /* @__PURE__ */ y$3("div", {
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
    className: "col-7"
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
  let top = eventRect.top + eventRect.height / 2 - popupRect.height / 2;
  let left = eventRect.left + eventRect.width - 225;
  if (isTopOutOfLayout(top, layoutRect, popupRect)) {
    top = layoutRect.top + layoutRect.height - popupRect.height;
  }
  const outLeftLayout = isLeftOutOfLayout(left, layoutRect, popupRect);
  if (outLeftLayout) {
    left = eventRect.left - popupRect.width;
  }
  return [
    Math.max(top, layoutRect.top) + window.scrollY - 110,
    Math.max(left, layoutRect.left) + window.scrollX - (outLeftLayout ? 255 : 25)
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
  const { color, backgroundColor, borderColor, dragBackgroundColor } = getEventColors(
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
    backgroundColor: isDraggingTarget ? dragBackgroundColor : backgroundColor,
    opacity: isDraggingTarget ? 0.5 : 1,
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
function GridSelection({ top, height, text }) {
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
  }, text.length > 0 ? /* @__PURE__ */ y$3("span", {
    className: cls("grid-selection-label"),
    style: { color }
  }, text) : null);
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
    let text = `${startRowStartTime} - ${endRowEndTime}`;
    if (isSelectingMultipleColumns) {
      text = isStartingColumn ? startRowStartTime : "";
    }
    return {
      top: startRowTop,
      height: gridSelectionHeight,
      text
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
      const clonedEventModel = clone$1(eventModel);
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
    const _a = this.theme.getState(), { dispatch } = _a, theme = __objRest(_a, ["dispatch"]);
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
class Calendar extends CalendarCore {
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
class Day extends CalendarCore {
  constructor(container, options = {}) {
    super(container, options);
    this.render();
  }
  getComponent() {
    return /* @__PURE__ */ y$3(Day$1, null);
  }
}
class Month extends CalendarCore {
  constructor(container, options = {}) {
    super(container, options);
    this.render();
  }
  getComponent() {
    return /* @__PURE__ */ y$3(Month$1, null);
  }
  hideMoreView() {
    const { hideSeeMorePopup } = this.getStoreDispatchers().popup;
    hideSeeMorePopup();
  }
}
class Week extends CalendarCore {
  constructor(container, options = {}) {
    super(container, options);
    this.render();
  }
  getComponent() {
    return /* @__PURE__ */ y$3(Week$1, null);
  }
}
export { Day, Month, TZDate, Week, Calendar as default };
