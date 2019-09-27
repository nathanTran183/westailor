function promo_set_cookie(e, t) {
  "string" == typeof t && (t = new Date(t)), t.setHours(23), t.setMinutes(59), t.setSeconds(59), document.cookie = e + "=1; expires=" + t.toUTCString() + "; path=/";
}function promo_get_cookie(e) {
  for (var t = e + "=", n = document.cookie.split(";"), r = 0; r < n.length; r++) {
    for (var o = n[r]; " " == o.charAt(0);) o = o.substring(1);if (0 == o.indexOf(t)) return o.substring(t.length, o.length);
  }return "";
}function promo_popup(e, t) {
  if (window.mobile_enabled) {
    var n = $("#popup_object");n.length || (n = $('<div class="mobile_popup"><iframe></iframe></div>').appendTo("body"), window.popup_object_close = function () {
      n.hide(), $(".body, footer, .reviews, .bar_promotion, .body").show();
    }), n.find("iframe").attr("src", window.region_url + "promo_popup/" + e), n.show(), $(".body, footer, .reviews, .bar_promotion, .body").hide();
  } else {
    var r = 540,
        o = 540;if (t) {
      var i = t.split("x");(r = i[0]) && (r += "px"), i.length > 1 && (o = i[1] + "px");
    }$.magnificPopup.open({ items: { src: window.region_url + "promo_popup/" + e }, closeMarkup: '<button title="Close (Esc)" type="button" class="mfp-close">v</button>', mainClass: "promo_popup", type: "iframe", callbacks: { open: function () {
          $(".promo_popup .mfp-content").css({ "max-width": r, "min-width": r, height: o });
        } } });
  }
}function init_promo_banner() {
  var e = $("#promo_block_top");$(".close, .show", e).click(function () {
    return e.toggleClass("banner"), !1;
  }), e.click(function () {
    return $(this).hasClass("banner") && e.removeClass("banner"), !1;
  });
}function initQTip() {
  return !0;
}function initTooltips() {
  return !0;
}function formatMoney(e, t, n, r, o) {
  e = e || 0, t = isNaN(t = Math.abs(t)) ? 2 : t, n = "RUB" != window.currency ? n || "," : n || "", r = r || ".";var i = e < 0 ? "-" : "",
      a = parseInt(e = Math.abs(+e || 0).toFixed(t), 10) + "",
      s = (s = a.length) > 3 ? s % 3 : 0,
      l = Math.abs(e - a).toFixed(t).slice(2);return "00" == l ? i + (s ? a.substr(0, s) + n : "") + a.substr(s).replace(/(\d{3})(?=\d)/g, "$1" + n) : (o && (l = "<span>" + l + "</span>"), i + (s ? a.substr(0, s) + n : "") + a.substr(s).replace(/(\d{3})(?=\d)/g, "$1" + n) + (t ? r + l : ""));
}function formatPrice(e, t) {
  var n = "";switch (t) {case "new_configure":
      switch (window.currency) {case "EUR":
          n = formatMoney(e, 2, ".", ",", "span") + "<small>€</small>";break;case "USD":
          n = "<small>$</small>" + formatMoney(e, 2, ",", ".", "span"), "/en-ca/" != window.region_url && "/fr-ca/" != window.region_url || (n += '<small style="font-size: 50%">USD</small>');break;case "GBP":
          n = "<small>£</small>" + formatMoney(e, 2, ",", ".", "span");break;case "RMB":
          n = formatMoney(e, 2, "", ".", "span") + "<small>元</small>";break;case "AUD":
          n = "<small>AU$</small>" + formatMoney(e, 2, ",", ".", "span");break;case "RUB":
          n = formatMoney(e, 2, "", ",", "span") + "<small>p</small>";break;case "MXN":
          n = "<small>MX$</small>" + formatMoney(e, 2, ",", ".", "span");break;case "CHF":
          n = "<small>CHF </small>" + formatMoney(e, 2, "'", ".", "span");break;default:
          n = formatMoney(e) + "<small>" + window.currency + "</small>";}break;case "configure":default:
      switch (window.currency) {case "EUR":
          n = formatMoney(e, 2, ".", ",") + "<small>€</small>";break;case "USD":
          n = "<small>$</small>" + formatMoney(e, 2, ",", "."), "/en-ca/" != window.region_url && "/fr-ca/" != window.region_url || (n += '<small style="font-size: 50%">USD</small>');break;case "GBP":
          n = "<small>£</small>" + formatMoney(e, 2, ",", ".");break;case "RMB":
          n = formatMoney(e, 2, "", ".") + "<small>元</small>";break;case "AUD":
          n = "<small>AU$</small>" + formatMoney(e, 2, ",", ".");break;case "RUB":
          n = formatMoney(e, 2, "", ",") + "<small>p</small>";break;case "MXN":
          n = "<small>MX$</small>" + formatMoney(e, 2, ",", ".");break;case "CHF":
          n = "<small>CHF </small>" + formatMoney(e, 2, "'", ".");break;default:
          n = formatMoney(e) + "<small>" + window.currency + "</small>";}}return n;
}function isValidCharacterInitials(e) {
  if (void 0 !== e.charCode && (e = e.charCode), "0" == e) return !0;if ("object" == typeof e && "0" == (e = e.which)) return !0;var t = /[a-zA-Z0-9.\s /<>,;:"'`!@#%^&*(){}\-_+=|-~¬ºª¡\[\]^`´ç¨·]/g;return !!String.fromCharCode(e).match(t);
}function resize_fix() {
  function e(e, r, o, i, a) {
    return "vw" == o ? t * r / 100 + "px" : "vh" == o ? n * r / 100 + "px" : "vmax" == o ? Math.max(n, t) * r / 100 + "px" : "vmin" == o ? Math.min(n, t) * r / 100 + "px" : "";
  }var t = $(window).width(),
      n = $(window).height();$(".resize_fix").each(function () {
    var t = this.getAttribute("resize_fix");this.setAttribute("style", t.replace(/(\d*)(vh|vw|vmax|vmin)/g, e));
  });
}!function (e, t) {
  "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function (e) {
    if (!e.document) throw new Error("jQuery requires a window with a document");return t(e);
  } : t(e);
}("undefined" != typeof window ? window : this, function (e, t) {
  function n(e) {
    var t = e.length,
        n = K.type(e);return "function" !== n && !K.isWindow(e) && (!(1 !== e.nodeType || !t) || "array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e);
  }function r(e, t, n) {
    if (K.isFunction(t)) return K.grep(e, function (e, r) {
      return !!t.call(e, r, e) !== n;
    });if (t.nodeType) return K.grep(e, function (e) {
      return e === t !== n;
    });if ("string" == typeof t) {
      if (ae.test(t)) return K.filter(t, e, n);t = K.filter(t, e);
    }return K.grep(e, function (e) {
      return W.call(t, e) >= 0 !== n;
    });
  }function o(e, t) {
    for (; (e = e[t]) && 1 !== e.nodeType;);return e;
  }function i(e) {
    var t = fe[e] = {};return K.each(e.match(de) || [], function (e, n) {
      t[n] = !0;
    }), t;
  }function a() {
    G.removeEventListener("DOMContentLoaded", a, !1), e.removeEventListener("load", a, !1), K.ready();
  }function s() {
    Object.defineProperty(this.cache = {}, 0, { get: function () {
        return {};
      } }), this.expando = K.expando + Math.random();
  }function l(e, t, n) {
    var r;if (void 0 === n && 1 === e.nodeType) if (r = "data-" + t.replace(ye, "-$1").toLowerCase(), "string" == typeof (n = e.getAttribute(r))) {
      try {
        n = "true" === n || "false" !== n && ("null" === n ? null : +n + "" === n ? +n : ve.test(n) ? K.parseJSON(n) : n);
      } catch (e) {}me.set(e, t, n);
    } else n = void 0;return n;
  }function u() {
    return !0;
  }function c() {
    return !1;
  }function d() {
    try {
      return G.activeElement;
    } catch (e) {}
  }function f(e, t) {
    return K.nodeName(e, "table") && K.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e;
  }function p(e) {
    return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e;
  }function h(e) {
    var t = Le.exec(e.type);return t ? e.type = t[1] : e.removeAttribute("type"), e;
  }function g(e, t) {
    for (var n = 0, r = e.length; r > n; n++) ge.set(e[n], "globalEval", !t || ge.get(t[n], "globalEval"));
  }function m(e, t) {
    var n, r, o, i, a, s, l, u;if (1 === t.nodeType) {
      if (ge.hasData(e) && (i = ge.access(e), a = ge.set(t, i), u = i.events)) {
        delete a.handle, a.events = {};for (o in u) for (n = 0, r = u[o].length; r > n; n++) K.event.add(t, o, u[o][n]);
      }me.hasData(e) && (s = me.access(e), l = K.extend({}, s), me.set(t, l));
    }
  }function v(e, t) {
    var n = e.getElementsByTagName ? e.getElementsByTagName(t || "*") : e.querySelectorAll ? e.querySelectorAll(t || "*") : [];return void 0 === t || t && K.nodeName(e, t) ? K.merge([e], n) : n;
  }function y(e, t) {
    var n = t.nodeName.toLowerCase();"input" === n && Se.test(e.type) ? t.checked = e.checked : ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue);
  }function b(t, n) {
    var r,
        o = K(n.createElement(t)).appendTo(n.body),
        i = e.getDefaultComputedStyle && (r = e.getDefaultComputedStyle(o[0])) ? r.display : K.css(o[0], "display");return o.detach(), i;
  }function x(e) {
    var t = G,
        n = qe[e];return n || ("none" !== (n = b(e, t)) && n || (Me = (Me || K("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement), (t = Me[0].contentDocument).write(), t.close(), n = b(e, t), Me.detach()), qe[e] = n), n;
  }function w(e, t, n) {
    var r,
        o,
        i,
        a,
        s = e.style;return (n = n || Ue(e)) && (a = n.getPropertyValue(t) || n[t]), n && ("" !== a || K.contains(e.ownerDocument, e) || (a = K.style(e, t)), Be.test(a) && Re.test(t) && (r = s.width, o = s.minWidth, i = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = o, s.maxWidth = i)), void 0 !== a ? a + "" : a;
  }function S(e, t) {
    return { get: function () {
        return e() ? void delete this.get : (this.get = t).apply(this, arguments);
      } };
  }function C(e, t) {
    if (t in e) return t;for (var n = t[0].toUpperCase() + t.slice(1), r = t, o = Xe.length; o--;) if ((t = Xe[o] + n) in e) return t;return r;
  }function T(e, t, n) {
    var r = Fe.exec(t);return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t;
  }function A(e, t, n, r, o) {
    for (var i = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0, a = 0; 4 > i; i += 2) "margin" === n && (a += K.css(e, n + xe[i], !0, o)), r ? ("content" === n && (a -= K.css(e, "padding" + xe[i], !0, o)), "margin" !== n && (a -= K.css(e, "border" + xe[i] + "Width", !0, o))) : (a += K.css(e, "padding" + xe[i], !0, o), "padding" !== n && (a += K.css(e, "border" + xe[i] + "Width", !0, o)));return a;
  }function k(e, t, n) {
    var r = !0,
        o = "width" === t ? e.offsetWidth : e.offsetHeight,
        i = Ue(e),
        a = "border-box" === K.css(e, "boxSizing", !1, i);if (0 >= o || null == o) {
      if ((0 > (o = w(e, t, i)) || null == o) && (o = e.style[t]), Be.test(o)) return o;r = a && (J.boxSizingReliable() || o === e.style[t]), o = parseFloat(o) || 0;
    }return o + A(e, t, n || (a ? "border" : "content"), r, i) + "px";
  }function _(e, t) {
    for (var n, r, o, i = [], a = 0, s = e.length; s > a; a++) (r = e[a]).style && (i[a] = ge.get(r, "olddisplay"), n = r.style.display, t ? (i[a] || "none" !== n || (r.style.display = ""), "" === r.style.display && we(r) && (i[a] = ge.access(r, "olddisplay", x(r.nodeName)))) : (o = we(r), "none" === n && o || ge.set(r, "olddisplay", o ? n : K.css(r, "display"))));for (a = 0; s > a; a++) (r = e[a]).style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? i[a] || "" : "none"));return e;
  }function E(e, t, n, r, o) {
    return new E.prototype.init(e, t, n, r, o);
  }function N() {
    return setTimeout(function () {
      Ve = void 0;
    }), Ve = K.now();
  }function j(e, t) {
    var n,
        r = 0,
        o = { height: e };for (t = t ? 1 : 0; 4 > r; r += 2 - t) n = xe[r], o["margin" + n] = o["padding" + n] = e;return t && (o.opacity = o.width = e), o;
  }function I(e, t, n) {
    for (var r, o = (et[t] || []).concat(et["*"]), i = 0, a = o.length; a > i; i++) if (r = o[i].call(n, t, e)) return r;
  }function D(e, t) {
    var n, r, o, i, a;for (n in e) if (r = K.camelCase(n), o = t[r], i = e[n], K.isArray(i) && (o = i[1], i = e[n] = i[0]), n !== r && (e[r] = i, delete e[n]), (a = K.cssHooks[r]) && "expand" in a) {
      i = a.expand(i), delete e[r];for (n in i) n in e || (e[n] = i[n], t[n] = o);
    } else t[r] = o;
  }function $(e, t, n) {
    var r,
        o,
        i = 0,
        a = Ze.length,
        s = K.Deferred().always(function () {
      delete l.elem;
    }),
        l = function () {
      if (o) return !1;for (var t = Ve || N(), n = Math.max(0, u.startTime + u.duration - t), r = 1 - (n / u.duration || 0), i = 0, a = u.tweens.length; a > i; i++) u.tweens[i].run(r);return s.notifyWith(e, [u, r, n]), 1 > r && a ? n : (s.resolveWith(e, [u]), !1);
    },
        u = s.promise({ elem: e, props: K.extend({}, t), opts: K.extend(!0, { specialEasing: {} }, n), originalProperties: t, originalOptions: n, startTime: Ve || N(), duration: n.duration, tweens: [], createTween: function (t, n) {
        var r = K.Tween(e, u.opts, t, n, u.opts.specialEasing[t] || u.opts.easing);return u.tweens.push(r), r;
      }, stop: function (t) {
        var n = 0,
            r = t ? u.tweens.length : 0;if (o) return this;for (o = !0; r > n; n++) u.tweens[n].run(1);return t ? s.resolveWith(e, [u, t]) : s.rejectWith(e, [u, t]), this;
      } }),
        c = u.props;for (D(c, u.opts.specialEasing); a > i; i++) if (r = Ze[i].call(u, e, c, u.opts)) return r;return K.map(c, I, u), K.isFunction(u.opts.start) && u.opts.start.call(e, u), K.fx.timer(K.extend(l, { elem: e, anim: u, queue: u.opts.queue })), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always);
  }function L(e) {
    return function (t, n) {
      "string" != typeof t && (n = t, t = "*");var r,
          o = 0,
          i = t.toLowerCase().match(de) || [];if (K.isFunction(n)) for (; r = i[o++];) "+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n);
    };
  }function H(e, t, n, r) {
    function o(s) {
      var l;return i[s] = !0, K.each(e[s] || [], function (e, s) {
        var u = s(t, n, r);return "string" != typeof u || a || i[u] ? a ? !(l = u) : void 0 : (t.dataTypes.unshift(u), o(u), !1);
      }), l;
    }var i = {},
        a = e === yt;return o(t.dataTypes[0]) || !i["*"] && o("*");
  }function O(e, t) {
    var n,
        r,
        o = K.ajaxSettings.flatOptions || {};for (n in t) void 0 !== t[n] && ((o[n] ? e : r || (r = {}))[n] = t[n]);return r && K.extend(!0, e, r), e;
  }function M(e, t, n) {
    for (var r, o, i, a, s = e.contents, l = e.dataTypes; "*" === l[0];) l.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));if (r) for (o in s) if (s[o] && s[o].test(r)) {
      l.unshift(o);break;
    }if (l[0] in n) i = l[0];else {
      for (o in n) {
        if (!l[0] || e.converters[o + " " + l[0]]) {
          i = o;break;
        }a || (a = o);
      }i = i || a;
    }return i ? (i !== l[0] && l.unshift(i), n[i]) : void 0;
  }function q(e, t, n, r) {
    var o,
        i,
        a,
        s,
        l,
        u = {},
        c = e.dataTypes.slice();if (c[1]) for (a in e.converters) u[a.toLowerCase()] = e.converters[a];for (i = c.shift(); i;) if (e.responseFields[i] && (n[e.responseFields[i]] = t), !l && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = i, i = c.shift()) if ("*" === i) i = l;else if ("*" !== l && l !== i) {
      if (!(a = u[l + " " + i] || u["* " + i])) for (o in u) if ((s = o.split(" "))[1] === i && (a = u[l + " " + s[0]] || u["* " + s[0]])) {
        !0 === a ? a = u[o] : !0 !== u[o] && (i = s[0], c.unshift(s[1]));break;
      }if (!0 !== a) if (a && e.throws) t = a(t);else try {
        t = a(t);
      } catch (e) {
        return { state: "parsererror", error: a ? e : "No conversion from " + l + " to " + i };
      }
    }return { state: "success", data: t };
  }function R(e, t, n, r) {
    var o;if (K.isArray(t)) K.each(t, function (t, o) {
      n || wt.test(e) ? r(e, o) : R(e + "[" + ("object" == typeof o ? t : "") + "]", o, n, r);
    });else if (n || "object" !== K.type(t)) r(e, t);else for (o in t) R(e + "[" + o + "]", t[o], n, r);
  }function B(e) {
    return K.isWindow(e) ? e : 9 === e.nodeType && e.defaultView;
  }var U = [],
      P = U.slice,
      F = U.concat,
      z = U.push,
      W = U.indexOf,
      Q = {},
      X = Q.toString,
      V = Q.hasOwnProperty,
      J = {},
      G = e.document,
      Y = "2.1.1",
      K = function (e, t) {
    return new K.fn.init(e, t);
  },
      Z = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
      ee = /^-ms-/,
      te = /-([\da-z])/gi,
      ne = function (e, t) {
    return t.toUpperCase();
  };K.fn = K.prototype = { jquery: Y, constructor: K, selector: "", length: 0, toArray: function () {
      return P.call(this);
    }, get: function (e) {
      return null != e ? 0 > e ? this[e + this.length] : this[e] : P.call(this);
    }, pushStack: function (e) {
      var t = K.merge(this.constructor(), e);return t.prevObject = this, t.context = this.context, t;
    }, each: function (e, t) {
      return K.each(this, e, t);
    }, map: function (e) {
      return this.pushStack(K.map(this, function (t, n) {
        return e.call(t, n, t);
      }));
    }, slice: function () {
      return this.pushStack(P.apply(this, arguments));
    }, first: function () {
      return this.eq(0);
    }, last: function () {
      return this.eq(-1);
    }, eq: function (e) {
      var t = this.length,
          n = +e + (0 > e ? t : 0);return this.pushStack(n >= 0 && t > n ? [this[n]] : []);
    }, end: function () {
      return this.prevObject || this.constructor(null);
    }, push: z, sort: U.sort, splice: U.splice }, K.extend = K.fn.extend = function () {
    var e,
        t,
        n,
        r,
        o,
        i,
        a = arguments[0] || {},
        s = 1,
        l = arguments.length,
        u = !1;for ("boolean" == typeof a && (u = a, a = arguments[s] || {}, s++), "object" == typeof a || K.isFunction(a) || (a = {}), s === l && (a = this, s--); l > s; s++) if (null != (e = arguments[s])) for (t in e) n = a[t], r = e[t], a !== r && (u && r && (K.isPlainObject(r) || (o = K.isArray(r))) ? (o ? (o = !1, i = n && K.isArray(n) ? n : []) : i = n && K.isPlainObject(n) ? n : {}, a[t] = K.extend(u, i, r)) : void 0 !== r && (a[t] = r));return a;
  }, K.extend({ expando: "jQuery" + (Y + Math.random()).replace(/\D/g, ""), isReady: !0, error: function (e) {
      throw new Error(e);
    }, noop: function () {}, isFunction: function (e) {
      return "function" === K.type(e);
    }, isArray: Array.isArray, isWindow: function (e) {
      return null != e && e === e.window;
    }, isNumeric: function (e) {
      return !K.isArray(e) && e - parseFloat(e) >= 0;
    }, isPlainObject: function (e) {
      return "object" === K.type(e) && !e.nodeType && !K.isWindow(e) && !(e.constructor && !V.call(e.constructor.prototype, "isPrototypeOf"));
    }, isEmptyObject: function (e) {
      var t;for (t in e) return !1;return !0;
    }, type: function (e) {
      return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? Q[X.call(e)] || "object" : typeof e;
    }, globalEval: function (e) {
      var t,
          n = eval;(e = K.trim(e)) && (1 === e.indexOf("use strict") ? (t = G.createElement("script"), t.text = e, G.head.appendChild(t).parentNode.removeChild(t)) : n(e));
    }, camelCase: function (e) {
      return e.replace(ee, "ms-").replace(te, ne);
    }, nodeName: function (e, t) {
      return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
    }, each: function (e, t, r) {
      var o = 0,
          i = e.length,
          a = n(e);if (r) {
        if (a) for (; i > o && !1 !== t.apply(e[o], r); o++);else for (o in e) if (!1 === t.apply(e[o], r)) break;
      } else if (a) for (; i > o && !1 !== t.call(e[o], o, e[o]); o++);else for (o in e) if (!1 === t.call(e[o], o, e[o])) break;return e;
    }, trim: function (e) {
      return null == e ? "" : (e + "").replace(Z, "");
    }, makeArray: function (e, t) {
      var r = t || [];return null != e && (n(Object(e)) ? K.merge(r, "string" == typeof e ? [e] : e) : z.call(r, e)), r;
    }, inArray: function (e, t, n) {
      return null == t ? -1 : W.call(t, e, n);
    }, merge: function (e, t) {
      for (var n = +t.length, r = 0, o = e.length; n > r; r++) e[o++] = t[r];return e.length = o, e;
    }, grep: function (e, t, n) {
      for (var r = [], o = 0, i = e.length, a = !n; i > o; o++) !t(e[o], o) !== a && r.push(e[o]);return r;
    }, map: function (e, t, r) {
      var o,
          i = 0,
          a = e.length,
          s = [];if (n(e)) for (; a > i; i++) null != (o = t(e[i], i, r)) && s.push(o);else for (i in e) null != (o = t(e[i], i, r)) && s.push(o);return F.apply([], s);
    }, guid: 1, proxy: function (e, t) {
      var n, r, o;return "string" == typeof t && (n = e[t], t = e, e = n), K.isFunction(e) ? (r = P.call(arguments, 2), o = function () {
        return e.apply(t || this, r.concat(P.call(arguments)));
      }, o.guid = e.guid = e.guid || K.guid++, o) : void 0;
    }, now: Date.now, support: J }), K.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (e, t) {
    Q["[object " + t + "]"] = t.toLowerCase();
  });var re = function (e) {
    function t(e, t, n, r) {
      var o, i, a, s, u, d, f, p, h, g;if ((t ? t.ownerDocument || t : q) !== j && N(t), t = t || j, n = n || [], !e || "string" != typeof e) return n;if (1 !== (s = t.nodeType) && 9 !== s) return [];if (D && !r) {
        if (o = me.exec(e)) if (a = o[1]) {
          if (9 === s) {
            if (!(i = t.getElementById(a)) || !i.parentNode) return n;if (i.id === a) return n.push(i), n;
          } else if (t.ownerDocument && (i = t.ownerDocument.getElementById(a)) && O(t, i) && i.id === a) return n.push(i), n;
        } else {
          if (o[2]) return Y.apply(n, t.getElementsByTagName(e)), n;if ((a = o[3]) && b.getElementsByClassName && t.getElementsByClassName) return Y.apply(n, t.getElementsByClassName(a)), n;
        }if (b.qsa && (!$ || !$.test(e))) {
          if (p = f = M, h = t, g = 9 === s && e, 1 === s && "object" !== t.nodeName.toLowerCase()) {
            for (d = C(e), (f = t.getAttribute("id")) ? p = f.replace(ye, "\\$&") : t.setAttribute("id", p), p = "[id='" + p + "'] ", u = d.length; u--;) d[u] = p + c(d[u]);h = ve.test(e) && l(t.parentNode) || t, g = d.join(",");
          }if (g) try {
            return Y.apply(n, h.querySelectorAll(g)), n;
          } catch (e) {} finally {
            f || t.removeAttribute("id");
          }
        }
      }return A(e.replace(ae, "$1"), t, n, r);
    }function n() {
      function e(n, r) {
        return t.push(n + " ") > x.cacheLength && delete e[t.shift()], e[n + " "] = r;
      }var t = [];return e;
    }function r(e) {
      return e[M] = !0, e;
    }function o(e) {
      var t = j.createElement("div");try {
        return !!e(t);
      } catch (e) {
        return !1;
      } finally {
        t.parentNode && t.parentNode.removeChild(t), t = null;
      }
    }function i(e, t) {
      for (var n = e.split("|"), r = e.length; r--;) x.attrHandle[n[r]] = t;
    }function a(e, t) {
      var n = t && e,
          r = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || Q) - (~e.sourceIndex || Q);if (r) return r;if (n) for (; n = n.nextSibling;) if (n === t) return -1;return e ? 1 : -1;
    }function s(e) {
      return r(function (t) {
        return t = +t, r(function (n, r) {
          for (var o, i = e([], n.length, t), a = i.length; a--;) n[o = i[a]] && (n[o] = !(r[o] = n[o]));
        });
      });
    }function l(e) {
      return e && typeof e.getElementsByTagName !== W && e;
    }function u() {}function c(e) {
      for (var t = 0, n = e.length, r = ""; n > t; t++) r += e[t].value;return r;
    }function d(e, t, n) {
      var r = t.dir,
          o = n && "parentNode" === r,
          i = B++;return t.first ? function (t, n, i) {
        for (; t = t[r];) if (1 === t.nodeType || o) return e(t, n, i);
      } : function (t, n, a) {
        var s,
            l,
            u = [R, i];if (a) {
          for (; t = t[r];) if ((1 === t.nodeType || o) && e(t, n, a)) return !0;
        } else for (; t = t[r];) if (1 === t.nodeType || o) {
          if (l = t[M] || (t[M] = {}), (s = l[r]) && s[0] === R && s[1] === i) return u[2] = s[2];if (l[r] = u, u[2] = e(t, n, a)) return !0;
        }
      };
    }function f(e) {
      return e.length > 1 ? function (t, n, r) {
        for (var o = e.length; o--;) if (!e[o](t, n, r)) return !1;return !0;
      } : e[0];
    }function p(e, n, r) {
      for (var o = 0, i = n.length; i > o; o++) t(e, n[o], r);return r;
    }function h(e, t, n, r, o) {
      for (var i, a = [], s = 0, l = e.length, u = null != t; l > s; s++) (i = e[s]) && (!n || n(i, r, o)) && (a.push(i), u && t.push(s));return a;
    }function g(e, t, n, o, i, a) {
      return o && !o[M] && (o = g(o)), i && !i[M] && (i = g(i, a)), r(function (r, a, s, l) {
        var u,
            c,
            d,
            f = [],
            g = [],
            m = a.length,
            v = r || p(t || "*", s.nodeType ? [s] : s, []),
            y = !e || !r && t ? v : h(v, f, e, s, l),
            b = n ? i || (r ? e : m || o) ? [] : a : y;if (n && n(y, b, s, l), o) for (u = h(b, g), o(u, [], s, l), c = u.length; c--;) (d = u[c]) && (b[g[c]] = !(y[g[c]] = d));if (r) {
          if (i || e) {
            if (i) {
              for (u = [], c = b.length; c--;) (d = b[c]) && u.push(y[c] = d);i(null, b = [], u, l);
            }for (c = b.length; c--;) (d = b[c]) && (u = i ? Z.call(r, d) : f[c]) > -1 && (r[u] = !(a[u] = d));
          }
        } else b = h(b === a ? b.splice(m, b.length) : b), i ? i(null, a, b, l) : Y.apply(a, b);
      });
    }function m(e) {
      for (var t, n, r, o = e.length, i = x.relative[e[0].type], a = i || x.relative[" "], s = i ? 1 : 0, l = d(function (e) {
        return e === t;
      }, a, !0), u = d(function (e) {
        return Z.call(t, e) > -1;
      }, a, !0), p = [function (e, n, r) {
        return !i && (r || n !== k) || ((t = n).nodeType ? l(e, n, r) : u(e, n, r));
      }]; o > s; s++) if (n = x.relative[e[s].type]) p = [d(f(p), n)];else {
        if ((n = x.filter[e[s].type].apply(null, e[s].matches))[M]) {
          for (r = ++s; o > r && !x.relative[e[r].type]; r++);return g(s > 1 && f(p), s > 1 && c(e.slice(0, s - 1).concat({ value: " " === e[s - 2].type ? "*" : "" })).replace(ae, "$1"), n, r > s && m(e.slice(s, r)), o > r && m(e = e.slice(r)), o > r && c(e));
        }p.push(n);
      }return f(p);
    }function v(e, n) {
      var o = n.length > 0,
          i = e.length > 0,
          a = function (r, a, s, l, u) {
        var c,
            d,
            f,
            p = 0,
            g = "0",
            m = r && [],
            v = [],
            y = k,
            b = r || i && x.find.TAG("*", u),
            w = R += null == y ? 1 : Math.random() || .1,
            S = b.length;for (u && (k = a !== j && a); g !== S && null != (c = b[g]); g++) {
          if (i && c) {
            for (d = 0; f = e[d++];) if (f(c, a, s)) {
              l.push(c);break;
            }u && (R = w);
          }o && ((c = !f && c) && p--, r && m.push(c));
        }if (p += g, o && g !== p) {
          for (d = 0; f = n[d++];) f(m, v, a, s);if (r) {
            if (p > 0) for (; g--;) m[g] || v[g] || (v[g] = J.call(l));v = h(v);
          }Y.apply(l, v), u && !r && v.length > 0 && p + n.length > 1 && t.uniqueSort(l);
        }return u && (R = w, k = y), m;
      };return o ? r(a) : a;
    }var y,
        b,
        x,
        w,
        S,
        C,
        T,
        A,
        k,
        _,
        E,
        N,
        j,
        I,
        D,
        $,
        L,
        H,
        O,
        M = "sizzle" + -new Date(),
        q = e.document,
        R = 0,
        B = 0,
        U = n(),
        P = n(),
        F = n(),
        z = function (e, t) {
      return e === t && (E = !0), 0;
    },
        W = "undefined",
        Q = 1 << 31,
        X = {}.hasOwnProperty,
        V = [],
        J = V.pop,
        G = V.push,
        Y = V.push,
        K = V.slice,
        Z = V.indexOf || function (e) {
      for (var t = 0, n = this.length; n > t; t++) if (this[t] === e) return t;return -1;
    },
        ee = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
        te = "[\\x20\\t\\r\\n\\f]",
        ne = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
        re = ne.replace("w", "w#"),
        oe = "\\[" + te + "*(" + ne + ")(?:" + te + "*([*^$|!~]?=)" + te + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + re + "))|)" + te + "*\\]",
        ie = ":(" + ne + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + oe + ")*)|.*)\\)|)",
        ae = new RegExp("^" + te + "+|((?:^|[^\\\\])(?:\\\\.)*)" + te + "+$", "g"),
        se = new RegExp("^" + te + "*," + te + "*"),
        le = new RegExp("^" + te + "*([>+~]|" + te + ")" + te + "*"),
        ue = new RegExp("=" + te + "*([^\\]'\"]*?)" + te + "*\\]", "g"),
        ce = new RegExp(ie),
        de = new RegExp("^" + re + "$"),
        fe = { ID: new RegExp("^#(" + ne + ")"), CLASS: new RegExp("^\\.(" + ne + ")"), TAG: new RegExp("^(" + ne.replace("w", "w*") + ")"), ATTR: new RegExp("^" + oe), PSEUDO: new RegExp("^" + ie), CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + te + "*(even|odd|(([+-]|)(\\d*)n|)" + te + "*(?:([+-]|)" + te + "*(\\d+)|))" + te + "*\\)|)", "i"), bool: new RegExp("^(?:" + ee + ")$", "i"), needsContext: new RegExp("^" + te + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + te + "*((?:-\\d)?\\d*)" + te + "*\\)|)(?=[^-]|$)", "i") },
        pe = /^(?:input|select|textarea|button)$/i,
        he = /^h\d$/i,
        ge = /^[^{]+\{\s*\[native \w/,
        me = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        ve = /[+~]/,
        ye = /'|\\/g,
        be = new RegExp("\\\\([\\da-f]{1,6}" + te + "?|(" + te + ")|.)", "ig"),
        xe = function (e, t, n) {
      var r = "0x" + t - 65536;return r !== r || n ? t : 0 > r ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320);
    };try {
      Y.apply(V = K.call(q.childNodes), q.childNodes), V[q.childNodes.length].nodeType;
    } catch (e) {
      Y = { apply: V.length ? function (e, t) {
          G.apply(e, K.call(t));
        } : function (e, t) {
          for (var n = e.length, r = 0; e[n++] = t[r++];);e.length = n - 1;
        } };
    }b = t.support = {}, S = t.isXML = function (e) {
      var t = e && (e.ownerDocument || e).documentElement;return !!t && "HTML" !== t.nodeName;
    }, N = t.setDocument = function (e) {
      var t,
          n = e ? e.ownerDocument || e : q,
          r = n.defaultView;return n !== j && 9 === n.nodeType && n.documentElement ? (j = n, I = n.documentElement, D = !S(n), r && r !== r.top && (r.addEventListener ? r.addEventListener("unload", function () {
        N();
      }, !1) : r.attachEvent && r.attachEvent("onunload", function () {
        N();
      })), b.attributes = o(function (e) {
        return e.className = "i", !e.getAttribute("className");
      }), b.getElementsByTagName = o(function (e) {
        return e.appendChild(n.createComment("")), !e.getElementsByTagName("*").length;
      }), b.getElementsByClassName = ge.test(n.getElementsByClassName) && o(function (e) {
        return e.innerHTML = "<div class='a'></div><div class='a i'></div>", e.firstChild.className = "i", 2 === e.getElementsByClassName("i").length;
      }), b.getById = o(function (e) {
        return I.appendChild(e).id = M, !n.getElementsByName || !n.getElementsByName(M).length;
      }), b.getById ? (x.find.ID = function (e, t) {
        if (typeof t.getElementById !== W && D) {
          var n = t.getElementById(e);return n && n.parentNode ? [n] : [];
        }
      }, x.filter.ID = function (e) {
        var t = e.replace(be, xe);return function (e) {
          return e.getAttribute("id") === t;
        };
      }) : (delete x.find.ID, x.filter.ID = function (e) {
        var t = e.replace(be, xe);return function (e) {
          var n = typeof e.getAttributeNode !== W && e.getAttributeNode("id");return n && n.value === t;
        };
      }), x.find.TAG = b.getElementsByTagName ? function (e, t) {
        return typeof t.getElementsByTagName !== W ? t.getElementsByTagName(e) : void 0;
      } : function (e, t) {
        var n,
            r = [],
            o = 0,
            i = t.getElementsByTagName(e);if ("*" === e) {
          for (; n = i[o++];) 1 === n.nodeType && r.push(n);return r;
        }return i;
      }, x.find.CLASS = b.getElementsByClassName && function (e, t) {
        return typeof t.getElementsByClassName !== W && D ? t.getElementsByClassName(e) : void 0;
      }, L = [], $ = [], (b.qsa = ge.test(n.querySelectorAll)) && (o(function (e) {
        e.innerHTML = "<select msallowclip=''><option selected=''></option></select>", e.querySelectorAll("[msallowclip^='']").length && $.push("[*^$]=" + te + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || $.push("\\[" + te + "*(?:value|" + ee + ")"), e.querySelectorAll(":checked").length || $.push(":checked");
      }), o(function (e) {
        var t = n.createElement("input");t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && $.push("name" + te + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || $.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), $.push(",.*:");
      })), (b.matchesSelector = ge.test(H = I.matches || I.webkitMatchesSelector || I.mozMatchesSelector || I.oMatchesSelector || I.msMatchesSelector)) && o(function (e) {
        b.disconnectedMatch = H.call(e, "div"), H.call(e, "[s!='']:x"), L.push("!=", ie);
      }), $ = $.length && new RegExp($.join("|")), L = L.length && new RegExp(L.join("|")), t = ge.test(I.compareDocumentPosition), O = t || ge.test(I.contains) ? function (e, t) {
        var n = 9 === e.nodeType ? e.documentElement : e,
            r = t && t.parentNode;return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)));
      } : function (e, t) {
        if (t) for (; t = t.parentNode;) if (t === e) return !0;return !1;
      }, z = t ? function (e, t) {
        if (e === t) return E = !0, 0;var r = !e.compareDocumentPosition - !t.compareDocumentPosition;return r || (1 & (r = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !b.sortDetached && t.compareDocumentPosition(e) === r ? e === n || e.ownerDocument === q && O(q, e) ? -1 : t === n || t.ownerDocument === q && O(q, t) ? 1 : _ ? Z.call(_, e) - Z.call(_, t) : 0 : 4 & r ? -1 : 1);
      } : function (e, t) {
        if (e === t) return E = !0, 0;var r,
            o = 0,
            i = e.parentNode,
            s = t.parentNode,
            l = [e],
            u = [t];if (!i || !s) return e === n ? -1 : t === n ? 1 : i ? -1 : s ? 1 : _ ? Z.call(_, e) - Z.call(_, t) : 0;if (i === s) return a(e, t);for (r = e; r = r.parentNode;) l.unshift(r);for (r = t; r = r.parentNode;) u.unshift(r);for (; l[o] === u[o];) o++;return o ? a(l[o], u[o]) : l[o] === q ? -1 : u[o] === q ? 1 : 0;
      }, n) : j;
    }, t.matches = function (e, n) {
      return t(e, null, null, n);
    }, t.matchesSelector = function (e, n) {
      if ((e.ownerDocument || e) !== j && N(e), n = n.replace(ue, "='$1']"), !(!b.matchesSelector || !D || L && L.test(n) || $ && $.test(n))) try {
        var r = H.call(e, n);if (r || b.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r;
      } catch (e) {}return t(n, j, null, [e]).length > 0;
    }, t.contains = function (e, t) {
      return (e.ownerDocument || e) !== j && N(e), O(e, t);
    }, t.attr = function (e, t) {
      (e.ownerDocument || e) !== j && N(e);var n = x.attrHandle[t.toLowerCase()],
          r = n && X.call(x.attrHandle, t.toLowerCase()) ? n(e, t, !D) : void 0;return void 0 !== r ? r : b.attributes || !D ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null;
    }, t.error = function (e) {
      throw new Error("Syntax error, unrecognized expression: " + e);
    }, t.uniqueSort = function (e) {
      var t,
          n = [],
          r = 0,
          o = 0;if (E = !b.detectDuplicates, _ = !b.sortStable && e.slice(0), e.sort(z), E) {
        for (; t = e[o++];) t === e[o] && (r = n.push(o));for (; r--;) e.splice(n[r], 1);
      }return _ = null, e;
    }, w = t.getText = function (e) {
      var t,
          n = "",
          r = 0,
          o = e.nodeType;if (o) {
        if (1 === o || 9 === o || 11 === o) {
          if ("string" == typeof e.textContent) return e.textContent;for (e = e.firstChild; e; e = e.nextSibling) n += w(e);
        } else if (3 === o || 4 === o) return e.nodeValue;
      } else for (; t = e[r++];) n += w(t);return n;
    }, (x = t.selectors = { cacheLength: 50, createPseudo: r, match: fe, attrHandle: {}, find: {}, relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } }, preFilter: { ATTR: function (e) {
          return e[1] = e[1].replace(be, xe), e[3] = (e[3] || e[4] || e[5] || "").replace(be, xe), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4);
        }, CHILD: function (e) {
          return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]), e;
        }, PSEUDO: function (e) {
          var t,
              n = !e[6] && e[2];return fe.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && ce.test(n) && (t = C(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3));
        } }, filter: { TAG: function (e) {
          var t = e.replace(be, xe).toLowerCase();return "*" === e ? function () {
            return !0;
          } : function (e) {
            return e.nodeName && e.nodeName.toLowerCase() === t;
          };
        }, CLASS: function (e) {
          var t = U[e + " "];return t || (t = new RegExp("(^|" + te + ")" + e + "(" + te + "|$)")) && U(e, function (e) {
            return t.test("string" == typeof e.className && e.className || typeof e.getAttribute !== W && e.getAttribute("class") || "");
          });
        }, ATTR: function (e, n, r) {
          return function (o) {
            var i = t.attr(o, e);return null == i ? "!=" === n : !n || (i += "", "=" === n ? i === r : "!=" === n ? i !== r : "^=" === n ? r && 0 === i.indexOf(r) : "*=" === n ? r && i.indexOf(r) > -1 : "$=" === n ? r && i.slice(-r.length) === r : "~=" === n ? (" " + i + " ").indexOf(r) > -1 : "|=" === n && (i === r || i.slice(0, r.length + 1) === r + "-"));
          };
        }, CHILD: function (e, t, n, r, o) {
          var i = "nth" !== e.slice(0, 3),
              a = "last" !== e.slice(-4),
              s = "of-type" === t;return 1 === r && 0 === o ? function (e) {
            return !!e.parentNode;
          } : function (t, n, l) {
            var u,
                c,
                d,
                f,
                p,
                h,
                g = i !== a ? "nextSibling" : "previousSibling",
                m = t.parentNode,
                v = s && t.nodeName.toLowerCase(),
                y = !l && !s;if (m) {
              if (i) {
                for (; g;) {
                  for (d = t; d = d[g];) if (s ? d.nodeName.toLowerCase() === v : 1 === d.nodeType) return !1;h = g = "only" === e && !h && "nextSibling";
                }return !0;
              }if (h = [a ? m.firstChild : m.lastChild], a && y) {
                for (p = (u = (c = m[M] || (m[M] = {}))[e] || [])[0] === R && u[1], f = u[0] === R && u[2], d = p && m.childNodes[p]; d = ++p && d && d[g] || (f = p = 0) || h.pop();) if (1 === d.nodeType && ++f && d === t) {
                  c[e] = [R, p, f];break;
                }
              } else if (y && (u = (t[M] || (t[M] = {}))[e]) && u[0] === R) f = u[1];else for (; (d = ++p && d && d[g] || (f = p = 0) || h.pop()) && ((s ? d.nodeName.toLowerCase() !== v : 1 !== d.nodeType) || !++f || (y && ((d[M] || (d[M] = {}))[e] = [R, f]), d !== t)););return (f -= o) === r || f % r == 0 && f / r >= 0;
            }
          };
        }, PSEUDO: function (e, n) {
          var o,
              i = x.pseudos[e] || x.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);return i[M] ? i(n) : i.length > 1 ? (o = [e, e, "", n], x.setFilters.hasOwnProperty(e.toLowerCase()) ? r(function (e, t) {
            for (var r, o = i(e, n), a = o.length; a--;) r = Z.call(e, o[a]), e[r] = !(t[r] = o[a]);
          }) : function (e) {
            return i(e, 0, o);
          }) : i;
        } }, pseudos: { not: r(function (e) {
          var t = [],
              n = [],
              o = T(e.replace(ae, "$1"));return o[M] ? r(function (e, t, n, r) {
            for (var i, a = o(e, null, r, []), s = e.length; s--;) (i = a[s]) && (e[s] = !(t[s] = i));
          }) : function (e, r, i) {
            return t[0] = e, o(t, null, i, n), !n.pop();
          };
        }), has: r(function (e) {
          return function (n) {
            return t(e, n).length > 0;
          };
        }), contains: r(function (e) {
          return function (t) {
            return (t.textContent || t.innerText || w(t)).indexOf(e) > -1;
          };
        }), lang: r(function (e) {
          return de.test(e || "") || t.error("unsupported lang: " + e), e = e.replace(be, xe).toLowerCase(), function (t) {
            var n;do {
              if (n = D ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-");
            } while ((t = t.parentNode) && 1 === t.nodeType);return !1;
          };
        }), target: function (t) {
          var n = e.location && e.location.hash;return n && n.slice(1) === t.id;
        }, root: function (e) {
          return e === I;
        }, focus: function (e) {
          return e === j.activeElement && (!j.hasFocus || j.hasFocus()) && !!(e.type || e.href || ~e.tabIndex);
        }, enabled: function (e) {
          return !1 === e.disabled;
        }, disabled: function (e) {
          return !0 === e.disabled;
        }, checked: function (e) {
          var t = e.nodeName.toLowerCase();return "input" === t && !!e.checked || "option" === t && !!e.selected;
        }, selected: function (e) {
          return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected;
        }, empty: function (e) {
          for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeType < 6) return !1;return !0;
        }, parent: function (e) {
          return !x.pseudos.empty(e);
        }, header: function (e) {
          return he.test(e.nodeName);
        }, input: function (e) {
          return pe.test(e.nodeName);
        }, button: function (e) {
          var t = e.nodeName.toLowerCase();return "input" === t && "button" === e.type || "button" === t;
        }, text: function (e) {
          var t;return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase());
        }, first: s(function () {
          return [0];
        }), last: s(function (e, t) {
          return [t - 1];
        }), eq: s(function (e, t, n) {
          return [0 > n ? n + t : n];
        }), even: s(function (e, t) {
          for (var n = 0; t > n; n += 2) e.push(n);return e;
        }), odd: s(function (e, t) {
          for (var n = 1; t > n; n += 2) e.push(n);return e;
        }), lt: s(function (e, t, n) {
          for (var r = 0 > n ? n + t : n; --r >= 0;) e.push(r);return e;
        }), gt: s(function (e, t, n) {
          for (var r = 0 > n ? n + t : n; ++r < t;) e.push(r);return e;
        }) } }).pseudos.nth = x.pseudos.eq;for (y in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }) x.pseudos[y] = function (e) {
      return function (t) {
        return "input" === t.nodeName.toLowerCase() && t.type === e;
      };
    }(y);for (y in { submit: !0, reset: !0 }) x.pseudos[y] = function (e) {
      return function (t) {
        var n = t.nodeName.toLowerCase();return ("input" === n || "button" === n) && t.type === e;
      };
    }(y);return u.prototype = x.filters = x.pseudos, x.setFilters = new u(), C = t.tokenize = function (e, n) {
      var r,
          o,
          i,
          a,
          s,
          l,
          u,
          c = P[e + " "];if (c) return n ? 0 : c.slice(0);for (s = e, l = [], u = x.preFilter; s;) {
        (!r || (o = se.exec(s))) && (o && (s = s.slice(o[0].length) || s), l.push(i = [])), r = !1, (o = le.exec(s)) && (r = o.shift(), i.push({ value: r, type: o[0].replace(ae, " ") }), s = s.slice(r.length));for (a in x.filter) !(o = fe[a].exec(s)) || u[a] && !(o = u[a](o)) || (r = o.shift(), i.push({ value: r, type: a, matches: o }), s = s.slice(r.length));if (!r) break;
      }return n ? s.length : s ? t.error(e) : P(e, l).slice(0);
    }, T = t.compile = function (e, t) {
      var n,
          r = [],
          o = [],
          i = F[e + " "];if (!i) {
        for (t || (t = C(e)), n = t.length; n--;) (i = m(t[n]))[M] ? r.push(i) : o.push(i);(i = F(e, v(o, r))).selector = e;
      }return i;
    }, A = t.select = function (e, t, n, r) {
      var o,
          i,
          a,
          s,
          u,
          d = "function" == typeof e && e,
          f = !r && C(e = d.selector || e);if (n = n || [], 1 === f.length) {
        if ((i = f[0] = f[0].slice(0)).length > 2 && "ID" === (a = i[0]).type && b.getById && 9 === t.nodeType && D && x.relative[i[1].type]) {
          if (!(t = (x.find.ID(a.matches[0].replace(be, xe), t) || [])[0])) return n;d && (t = t.parentNode), e = e.slice(i.shift().value.length);
        }for (o = fe.needsContext.test(e) ? 0 : i.length; o-- && (a = i[o], !x.relative[s = a.type]);) if ((u = x.find[s]) && (r = u(a.matches[0].replace(be, xe), ve.test(i[0].type) && l(t.parentNode) || t))) {
          if (i.splice(o, 1), !(e = r.length && c(i))) return Y.apply(n, r), n;break;
        }
      }return (d || T(e, f))(r, t, !D, n, ve.test(e) && l(t.parentNode) || t), n;
    }, b.sortStable = M.split("").sort(z).join("") === M, b.detectDuplicates = !!E, N(), b.sortDetached = o(function (e) {
      return 1 & e.compareDocumentPosition(j.createElement("div"));
    }), o(function (e) {
      return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href");
    }) || i("type|href|height|width", function (e, t, n) {
      return n ? void 0 : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
    }), b.attributes && o(function (e) {
      return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value");
    }) || i("value", function (e, t, n) {
      return n || "input" !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue;
    }), o(function (e) {
      return null == e.getAttribute("disabled");
    }) || i(ee, function (e, t, n) {
      var r;return n ? void 0 : !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null;
    }), t;
  }(e);K.find = re, K.expr = re.selectors, K.expr[":"] = K.expr.pseudos, K.unique = re.uniqueSort, K.text = re.getText, K.isXMLDoc = re.isXML, K.contains = re.contains;var oe = K.expr.match.needsContext,
      ie = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
      ae = /^.[^:#\[\.,]*$/;K.filter = function (e, t, n) {
    var r = t[0];return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? K.find.matchesSelector(r, e) ? [r] : [] : K.find.matches(e, K.grep(t, function (e) {
      return 1 === e.nodeType;
    }));
  }, K.fn.extend({ find: function (e) {
      var t,
          n = this.length,
          r = [],
          o = this;if ("string" != typeof e) return this.pushStack(K(e).filter(function () {
        for (t = 0; n > t; t++) if (K.contains(o[t], this)) return !0;
      }));for (t = 0; n > t; t++) K.find(e, o[t], r);return r = this.pushStack(n > 1 ? K.unique(r) : r), r.selector = this.selector ? this.selector + " " + e : e, r;
    }, filter: function (e) {
      return this.pushStack(r(this, e || [], !1));
    }, not: function (e) {
      return this.pushStack(r(this, e || [], !0));
    }, is: function (e) {
      return !!r(this, "string" == typeof e && oe.test(e) ? K(e) : e || [], !1).length;
    } });var se,
      le = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;(K.fn.init = function (e, t) {
    var n, r;if (!e) return this;if ("string" == typeof e) {
      if (!(n = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : le.exec(e)) || !n[1] && t) return !t || t.jquery ? (t || se).find(e) : this.constructor(t).find(e);if (n[1]) {
        if (t = t instanceof K ? t[0] : t, K.merge(this, K.parseHTML(n[1], t && t.nodeType ? t.ownerDocument || t : G, !0)), ie.test(n[1]) && K.isPlainObject(t)) for (n in t) K.isFunction(this[n]) ? this[n](t[n]) : this.attr(n, t[n]);return this;
      }return (r = G.getElementById(n[2])) && r.parentNode && (this.length = 1, this[0] = r), this.context = G, this.selector = e, this;
    }return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : K.isFunction(e) ? void 0 !== se.ready ? se.ready(e) : e(K) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), K.makeArray(e, this));
  }).prototype = K.fn, se = K(G);var ue = /^(?:parents|prev(?:Until|All))/,
      ce = { children: !0, contents: !0, next: !0, prev: !0 };K.extend({ dir: function (e, t, n) {
      for (var r = [], o = void 0 !== n; (e = e[t]) && 9 !== e.nodeType;) if (1 === e.nodeType) {
        if (o && K(e).is(n)) break;r.push(e);
      }return r;
    }, sibling: function (e, t) {
      for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);return n;
    } }), K.fn.extend({ has: function (e) {
      var t = K(e, this),
          n = t.length;return this.filter(function () {
        for (var e = 0; n > e; e++) if (K.contains(this, t[e])) return !0;
      });
    }, closest: function (e, t) {
      for (var n, r = 0, o = this.length, i = [], a = oe.test(e) || "string" != typeof e ? K(e, t || this.context) : 0; o > r; r++) for (n = this[r]; n && n !== t; n = n.parentNode) if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && K.find.matchesSelector(n, e))) {
        i.push(n);break;
      }return this.pushStack(i.length > 1 ? K.unique(i) : i);
    }, index: function (e) {
      return e ? "string" == typeof e ? W.call(K(e), this[0]) : W.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
    }, add: function (e, t) {
      return this.pushStack(K.unique(K.merge(this.get(), K(e, t))));
    }, addBack: function (e) {
      return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
    } }), K.each({ parent: function (e) {
      var t = e.parentNode;return t && 11 !== t.nodeType ? t : null;
    }, parents: function (e) {
      return K.dir(e, "parentNode");
    }, parentsUntil: function (e, t, n) {
      return K.dir(e, "parentNode", n);
    }, next: function (e) {
      return o(e, "nextSibling");
    }, prev: function (e) {
      return o(e, "previousSibling");
    }, nextAll: function (e) {
      return K.dir(e, "nextSibling");
    }, prevAll: function (e) {
      return K.dir(e, "previousSibling");
    }, nextUntil: function (e, t, n) {
      return K.dir(e, "nextSibling", n);
    }, prevUntil: function (e, t, n) {
      return K.dir(e, "previousSibling", n);
    }, siblings: function (e) {
      return K.sibling((e.parentNode || {}).firstChild, e);
    }, children: function (e) {
      return K.sibling(e.firstChild);
    }, contents: function (e) {
      return e.contentDocument || K.merge([], e.childNodes);
    } }, function (e, t) {
    K.fn[e] = function (n, r) {
      var o = K.map(this, t, n);return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (o = K.filter(r, o)), this.length > 1 && (ce[e] || K.unique(o), ue.test(e) && o.reverse()), this.pushStack(o);
    };
  });var de = /\S+/g,
      fe = {};K.Callbacks = function (e) {
    var t,
        n,
        r,
        o,
        a,
        s,
        l = [],
        u = !(e = "string" == typeof e ? fe[e] || i(e) : K.extend({}, e)).once && [],
        c = function (i) {
      for (t = e.memory && i, n = !0, s = o || 0, o = 0, a = l.length, r = !0; l && a > s; s++) if (!1 === l[s].apply(i[0], i[1]) && e.stopOnFalse) {
        t = !1;break;
      }r = !1, l && (u ? u.length && c(u.shift()) : t ? l = [] : d.disable());
    },
        d = { add: function () {
        if (l) {
          var n = l.length;!function t(n) {
            K.each(n, function (n, r) {
              var o = K.type(r);"function" === o ? e.unique && d.has(r) || l.push(r) : r && r.length && "string" !== o && t(r);
            });
          }(arguments), r ? a = l.length : t && (o = n, c(t));
        }return this;
      }, remove: function () {
        return l && K.each(arguments, function (e, t) {
          for (var n; (n = K.inArray(t, l, n)) > -1;) l.splice(n, 1), r && (a >= n && a--, s >= n && s--);
        }), this;
      }, has: function (e) {
        return e ? K.inArray(e, l) > -1 : !(!l || !l.length);
      }, empty: function () {
        return l = [], a = 0, this;
      }, disable: function () {
        return l = u = t = void 0, this;
      }, disabled: function () {
        return !l;
      }, lock: function () {
        return u = void 0, t || d.disable(), this;
      }, locked: function () {
        return !u;
      }, fireWith: function (e, t) {
        return !l || n && !u || (t = t || [], t = [e, t.slice ? t.slice() : t], r ? u.push(t) : c(t)), this;
      }, fire: function () {
        return d.fireWith(this, arguments), this;
      }, fired: function () {
        return !!n;
      } };return d;
  }, K.extend({ Deferred: function (e) {
      var t = [["resolve", "done", K.Callbacks("once memory"), "resolved"], ["reject", "fail", K.Callbacks("once memory"), "rejected"], ["notify", "progress", K.Callbacks("memory")]],
          n = "pending",
          r = { state: function () {
          return n;
        }, always: function () {
          return o.done(arguments).fail(arguments), this;
        }, then: function () {
          var e = arguments;return K.Deferred(function (n) {
            K.each(t, function (t, i) {
              var a = K.isFunction(e[t]) && e[t];o[i[1]](function () {
                var e = a && a.apply(this, arguments);e && K.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[i[0] + "With"](this === r ? n.promise() : this, a ? [e] : arguments);
              });
            }), e = null;
          }).promise();
        }, promise: function (e) {
          return null != e ? K.extend(e, r) : r;
        } },
          o = {};return r.pipe = r.then, K.each(t, function (e, i) {
        var a = i[2],
            s = i[3];r[i[1]] = a.add, s && a.add(function () {
          n = s;
        }, t[1 ^ e][2].disable, t[2][2].lock), o[i[0]] = function () {
          return o[i[0] + "With"](this === o ? r : this, arguments), this;
        }, o[i[0] + "With"] = a.fireWith;
      }), r.promise(o), e && e.call(o, o), o;
    }, when: function (e) {
      var t,
          n,
          r,
          o = 0,
          i = P.call(arguments),
          a = i.length,
          s = 1 !== a || e && K.isFunction(e.promise) ? a : 0,
          l = 1 === s ? e : K.Deferred(),
          u = function (e, n, r) {
        return function (o) {
          n[e] = this, r[e] = arguments.length > 1 ? P.call(arguments) : o, r === t ? l.notifyWith(n, r) : --s || l.resolveWith(n, r);
        };
      };if (a > 1) for (t = new Array(a), n = new Array(a), r = new Array(a); a > o; o++) i[o] && K.isFunction(i[o].promise) ? i[o].promise().done(u(o, r, i)).fail(l.reject).progress(u(o, n, t)) : --s;return s || l.resolveWith(r, i), l.promise();
    } });var pe;K.fn.ready = function (e) {
    return K.ready.promise().done(e), this;
  }, K.extend({ isReady: !1, readyWait: 1, holdReady: function (e) {
      e ? K.readyWait++ : K.ready(!0);
    }, ready: function (e) {
      (!0 === e ? --K.readyWait : K.isReady) || (K.isReady = !0, !0 !== e && --K.readyWait > 0 || (pe.resolveWith(G, [K]), K.fn.triggerHandler && (K(G).triggerHandler("ready"), K(G).off("ready"))));
    } }), K.ready.promise = function (t) {
    return pe || (pe = K.Deferred(), "complete" === G.readyState ? setTimeout(K.ready) : (G.addEventListener("DOMContentLoaded", a, !1), e.addEventListener("load", a, !1))), pe.promise(t);
  }, K.ready.promise();var he = K.access = function (e, t, n, r, o, i, a) {
    var s = 0,
        l = e.length,
        u = null == n;if ("object" === K.type(n)) {
      o = !0;for (s in n) K.access(e, t, s, n[s], !0, i, a);
    } else if (void 0 !== r && (o = !0, K.isFunction(r) || (a = !0), u && (a ? (t.call(e, r), t = null) : (u = t, t = function (e, t, n) {
      return u.call(K(e), n);
    })), t)) for (; l > s; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));return o ? e : u ? t.call(e) : l ? t(e[0], n) : i;
  };K.acceptData = function (e) {
    return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
  }, s.uid = 1, s.accepts = K.acceptData, s.prototype = { key: function (e) {
      if (!s.accepts(e)) return 0;var t = {},
          n = e[this.expando];if (!n) {
        n = s.uid++;try {
          t[this.expando] = { value: n }, Object.defineProperties(e, t);
        } catch (r) {
          t[this.expando] = n, K.extend(e, t);
        }
      }return this.cache[n] || (this.cache[n] = {}), n;
    }, set: function (e, t, n) {
      var r,
          o = this.key(e),
          i = this.cache[o];if ("string" == typeof t) i[t] = n;else if (K.isEmptyObject(i)) K.extend(this.cache[o], t);else for (r in t) i[r] = t[r];return i;
    }, get: function (e, t) {
      var n = this.cache[this.key(e)];return void 0 === t ? n : n[t];
    }, access: function (e, t, n) {
      var r;return void 0 === t || t && "string" == typeof t && void 0 === n ? void 0 !== (r = this.get(e, t)) ? r : this.get(e, K.camelCase(t)) : (this.set(e, t, n), void 0 !== n ? n : t);
    }, remove: function (e, t) {
      var n,
          r,
          o,
          i = this.key(e),
          a = this.cache[i];if (void 0 === t) this.cache[i] = {};else {
        K.isArray(t) ? r = t.concat(t.map(K.camelCase)) : (o = K.camelCase(t), t in a ? r = [t, o] : (r = o, r = r in a ? [r] : r.match(de) || [])), n = r.length;for (; n--;) delete a[r[n]];
      }
    }, hasData: function (e) {
      return !K.isEmptyObject(this.cache[e[this.expando]] || {});
    }, discard: function (e) {
      e[this.expando] && delete this.cache[e[this.expando]];
    } };var ge = new s(),
      me = new s(),
      ve = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
      ye = /([A-Z])/g;K.extend({ hasData: function (e) {
      return me.hasData(e) || ge.hasData(e);
    }, data: function (e, t, n) {
      return me.access(e, t, n);
    }, removeData: function (e, t) {
      me.remove(e, t);
    }, _data: function (e, t, n) {
      return ge.access(e, t, n);
    }, _removeData: function (e, t) {
      ge.remove(e, t);
    } }), K.fn.extend({ data: function (e, t) {
      var n,
          r,
          o,
          i = this[0],
          a = i && i.attributes;if (void 0 === e) {
        if (this.length && (o = me.get(i), 1 === i.nodeType && !ge.get(i, "hasDataAttrs"))) {
          for (n = a.length; n--;) a[n] && 0 === (r = a[n].name).indexOf("data-") && (r = K.camelCase(r.slice(5)), l(i, r, o[r]));ge.set(i, "hasDataAttrs", !0);
        }return o;
      }return "object" == typeof e ? this.each(function () {
        me.set(this, e);
      }) : he(this, function (t) {
        var n,
            r = K.camelCase(e);if (i && void 0 === t) {
          if (void 0 !== (n = me.get(i, e))) return n;if (void 0 !== (n = me.get(i, r))) return n;if (void 0 !== (n = l(i, r, void 0))) return n;
        } else this.each(function () {
          var n = me.get(this, r);me.set(this, r, t), -1 !== e.indexOf("-") && void 0 !== n && me.set(this, e, t);
        });
      }, null, t, arguments.length > 1, null, !0);
    }, removeData: function (e) {
      return this.each(function () {
        me.remove(this, e);
      });
    } }), K.extend({ queue: function (e, t, n) {
      var r;return e ? (t = (t || "fx") + "queue", r = ge.get(e, t), n && (!r || K.isArray(n) ? r = ge.access(e, t, K.makeArray(n)) : r.push(n)), r || []) : void 0;
    }, dequeue: function (e, t) {
      t = t || "fx";var n = K.queue(e, t),
          r = n.length,
          o = n.shift(),
          i = K._queueHooks(e, t);"inprogress" === o && (o = n.shift(), r--), o && ("fx" === t && n.unshift("inprogress"), delete i.stop, o.call(e, function () {
        K.dequeue(e, t);
      }, i)), !r && i && i.empty.fire();
    }, _queueHooks: function (e, t) {
      var n = t + "queueHooks";return ge.get(e, n) || ge.access(e, n, { empty: K.Callbacks("once memory").add(function () {
          ge.remove(e, [t + "queue", n]);
        }) });
    } }), K.fn.extend({ queue: function (e, t) {
      var n = 2;return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? K.queue(this[0], e) : void 0 === t ? this : this.each(function () {
        var n = K.queue(this, e, t);K._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && K.dequeue(this, e);
      });
    }, dequeue: function (e) {
      return this.each(function () {
        K.dequeue(this, e);
      });
    }, clearQueue: function (e) {
      return this.queue(e || "fx", []);
    }, promise: function (e, t) {
      var n,
          r = 1,
          o = K.Deferred(),
          i = this,
          a = this.length,
          s = function () {
        --r || o.resolveWith(i, [i]);
      };for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--;) (n = ge.get(i[a], e + "queueHooks")) && n.empty && (r++, n.empty.add(s));return s(), o.promise(t);
    } });var be = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
      xe = ["Top", "Right", "Bottom", "Left"],
      we = function (e, t) {
    return e = t || e, "none" === K.css(e, "display") || !K.contains(e.ownerDocument, e);
  },
      Se = /^(?:checkbox|radio)$/i;!function () {
    var e = G.createDocumentFragment().appendChild(G.createElement("div")),
        t = G.createElement("input");t.setAttribute("type", "radio"), t.setAttribute("checked", "checked"), t.setAttribute("name", "t"), e.appendChild(t), J.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, e.innerHTML = "<textarea>x</textarea>", J.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue;
  }();var Ce = "undefined";J.focusinBubbles = "onfocusin" in e;var Te = /^key/,
      Ae = /^(?:mouse|pointer|contextmenu)|click/,
      ke = /^(?:focusinfocus|focusoutblur)$/,
      _e = /^([^.]*)(?:\.(.+)|)$/;K.event = { global: {}, add: function (e, t, n, r, o) {
      var i,
          a,
          s,
          l,
          u,
          c,
          d,
          f,
          p,
          h,
          g,
          m = ge.get(e);if (m) for (n.handler && (i = n, n = i.handler, o = i.selector), n.guid || (n.guid = K.guid++), (l = m.events) || (l = m.events = {}), (a = m.handle) || (a = m.handle = function (t) {
        return typeof K !== Ce && K.event.triggered !== t.type ? K.event.dispatch.apply(e, arguments) : void 0;
      }), u = (t = (t || "").match(de) || [""]).length; u--;) s = _e.exec(t[u]) || [], p = g = s[1], h = (s[2] || "").split(".").sort(), p && (d = K.event.special[p] || {}, p = (o ? d.delegateType : d.bindType) || p, d = K.event.special[p] || {}, c = K.extend({ type: p, origType: g, data: r, handler: n, guid: n.guid, selector: o, needsContext: o && K.expr.match.needsContext.test(o), namespace: h.join(".") }, i), (f = l[p]) || (f = l[p] = [], f.delegateCount = 0, d.setup && !1 !== d.setup.call(e, r, h, a) || e.addEventListener && e.addEventListener(p, a, !1)), d.add && (d.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)), o ? f.splice(f.delegateCount++, 0, c) : f.push(c), K.event.global[p] = !0);
    }, remove: function (e, t, n, r, o) {
      var i,
          a,
          s,
          l,
          u,
          c,
          d,
          f,
          p,
          h,
          g,
          m = ge.hasData(e) && ge.get(e);if (m && (l = m.events)) {
        for (u = (t = (t || "").match(de) || [""]).length; u--;) if (s = _e.exec(t[u]) || [], p = g = s[1], h = (s[2] || "").split(".").sort(), p) {
          for (d = K.event.special[p] || {}, f = l[p = (r ? d.delegateType : d.bindType) || p] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = i = f.length; i--;) c = f[i], !o && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (f.splice(i, 1), c.selector && f.delegateCount--, d.remove && d.remove.call(e, c));a && !f.length && (d.teardown && !1 !== d.teardown.call(e, h, m.handle) || K.removeEvent(e, p, m.handle), delete l[p]);
        } else for (p in l) K.event.remove(e, p + t[u], n, r, !0);K.isEmptyObject(l) && (delete m.handle, ge.remove(e, "events"));
      }
    }, trigger: function (t, n, r, o) {
      var i,
          a,
          s,
          l,
          u,
          c,
          d,
          f = [r || G],
          p = V.call(t, "type") ? t.type : t,
          h = V.call(t, "namespace") ? t.namespace.split(".") : [];if (a = s = r = r || G, 3 !== r.nodeType && 8 !== r.nodeType && !ke.test(p + K.event.triggered) && (p.indexOf(".") >= 0 && (h = p.split("."), p = h.shift(), h.sort()), u = p.indexOf(":") < 0 && "on" + p, t = t[K.expando] ? t : new K.Event(p, "object" == typeof t && t), t.isTrigger = o ? 2 : 3, t.namespace = h.join("."), t.namespace_re = t.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = r), n = null == n ? [t] : K.makeArray(n, [t]), d = K.event.special[p] || {}, o || !d.trigger || !1 !== d.trigger.apply(r, n))) {
        if (!o && !d.noBubble && !K.isWindow(r)) {
          for (l = d.delegateType || p, ke.test(l + p) || (a = a.parentNode); a; a = a.parentNode) f.push(a), s = a;s === (r.ownerDocument || G) && f.push(s.defaultView || s.parentWindow || e);
        }for (i = 0; (a = f[i++]) && !t.isPropagationStopped();) t.type = i > 1 ? l : d.bindType || p, (c = (ge.get(a, "events") || {})[t.type] && ge.get(a, "handle")) && c.apply(a, n), (c = u && a[u]) && c.apply && K.acceptData(a) && (t.result = c.apply(a, n), !1 === t.result && t.preventDefault());return t.type = p, o || t.isDefaultPrevented() || d._default && !1 !== d._default.apply(f.pop(), n) || !K.acceptData(r) || u && K.isFunction(r[p]) && !K.isWindow(r) && ((s = r[u]) && (r[u] = null), K.event.triggered = p, r[p](), K.event.triggered = void 0, s && (r[u] = s)), t.result;
      }
    }, dispatch: function (e) {
      e = K.event.fix(e);var t,
          n,
          r,
          o,
          i,
          a = [],
          s = P.call(arguments),
          l = (ge.get(this, "events") || {})[e.type] || [],
          u = K.event.special[e.type] || {};if (s[0] = e, e.delegateTarget = this, !u.preDispatch || !1 !== u.preDispatch.call(this, e)) {
        for (a = K.event.handlers.call(this, e, l), t = 0; (o = a[t++]) && !e.isPropagationStopped();) for (e.currentTarget = o.elem, n = 0; (i = o.handlers[n++]) && !e.isImmediatePropagationStopped();) (!e.namespace_re || e.namespace_re.test(i.namespace)) && (e.handleObj = i, e.data = i.data, void 0 !== (r = ((K.event.special[i.origType] || {}).handle || i.handler).apply(o.elem, s)) && !1 === (e.result = r) && (e.preventDefault(), e.stopPropagation()));return u.postDispatch && u.postDispatch.call(this, e), e.result;
      }
    }, handlers: function (e, t) {
      var n,
          r,
          o,
          i,
          a = [],
          s = t.delegateCount,
          l = e.target;if (s && l.nodeType && (!e.button || "click" !== e.type)) for (; l !== this; l = l.parentNode || this) if (!0 !== l.disabled || "click" !== e.type) {
        for (r = [], n = 0; s > n; n++) i = t[n], o = i.selector + " ", void 0 === r[o] && (r[o] = i.needsContext ? K(o, this).index(l) >= 0 : K.find(o, this, null, [l]).length), r[o] && r.push(i);r.length && a.push({ elem: l, handlers: r });
      }return s < t.length && a.push({ elem: this, handlers: t.slice(s) }), a;
    }, props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "), fixHooks: {}, keyHooks: { props: "char charCode key keyCode".split(" "), filter: function (e, t) {
        return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e;
      } }, mouseHooks: { props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "), filter: function (e, t) {
        var n,
            r,
            o,
            i = t.button;return null == e.pageX && null != t.clientX && (n = e.target.ownerDocument || G, r = n.documentElement, o = n.body, e.pageX = t.clientX + (r && r.scrollLeft || o && o.scrollLeft || 0) - (r && r.clientLeft || o && o.clientLeft || 0), e.pageY = t.clientY + (r && r.scrollTop || o && o.scrollTop || 0) - (r && r.clientTop || o && o.clientTop || 0)), e.which || void 0 === i || (e.which = 1 & i ? 1 : 2 & i ? 3 : 4 & i ? 2 : 0), e;
      } }, fix: function (e) {
      if (e[K.expando]) return e;var t,
          n,
          r,
          o = e.type,
          i = e,
          a = this.fixHooks[o];for (a || (this.fixHooks[o] = a = Ae.test(o) ? this.mouseHooks : Te.test(o) ? this.keyHooks : {}), r = a.props ? this.props.concat(a.props) : this.props, e = new K.Event(i), t = r.length; t--;) n = r[t], e[n] = i[n];return e.target || (e.target = G), 3 === e.target.nodeType && (e.target = e.target.parentNode), a.filter ? a.filter(e, i) : e;
    }, special: { load: { noBubble: !0 }, focus: { trigger: function () {
          return this !== d() && this.focus ? (this.focus(), !1) : void 0;
        }, delegateType: "focusin" }, blur: { trigger: function () {
          return this === d() && this.blur ? (this.blur(), !1) : void 0;
        }, delegateType: "focusout" }, click: { trigger: function () {
          return "checkbox" === this.type && this.click && K.nodeName(this, "input") ? (this.click(), !1) : void 0;
        }, _default: function (e) {
          return K.nodeName(e.target, "a");
        } }, beforeunload: { postDispatch: function (e) {
          void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result);
        } } }, simulate: function (e, t, n, r) {
      var o = K.extend(new K.Event(), n, { type: e, isSimulated: !0, originalEvent: {} });r ? K.event.trigger(o, null, t) : K.event.dispatch.call(t, o), o.isDefaultPrevented() && n.preventDefault();
    } }, K.removeEvent = function (e, t, n) {
    e.removeEventListener && e.removeEventListener(t, n, !1);
  }, K.Event = function (e, t) {
    return this instanceof K.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? u : c) : this.type = e, t && K.extend(this, t), this.timeStamp = e && e.timeStamp || K.now(), void (this[K.expando] = !0)) : new K.Event(e, t);
  }, K.Event.prototype = { isDefaultPrevented: c, isPropagationStopped: c, isImmediatePropagationStopped: c, preventDefault: function () {
      var e = this.originalEvent;this.isDefaultPrevented = u, e && e.preventDefault && e.preventDefault();
    }, stopPropagation: function () {
      var e = this.originalEvent;this.isPropagationStopped = u, e && e.stopPropagation && e.stopPropagation();
    }, stopImmediatePropagation: function () {
      var e = this.originalEvent;this.isImmediatePropagationStopped = u, e && e.stopImmediatePropagation && e.stopImmediatePropagation(), this.stopPropagation();
    } }, K.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function (e, t) {
    K.event.special[e] = { delegateType: t, bindType: t, handle: function (e) {
        var n,
            r = this,
            o = e.relatedTarget,
            i = e.handleObj;return (!o || o !== r && !K.contains(r, o)) && (e.type = i.origType, n = i.handler.apply(this, arguments), e.type = t), n;
      } };
  }), J.focusinBubbles || K.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
    var n = function (e) {
      K.event.simulate(t, e.target, K.event.fix(e), !0);
    };K.event.special[t] = { setup: function () {
        var r = this.ownerDocument || this,
            o = ge.access(r, t);o || r.addEventListener(e, n, !0), ge.access(r, t, (o || 0) + 1);
      }, teardown: function () {
        var r = this.ownerDocument || this,
            o = ge.access(r, t) - 1;o ? ge.access(r, t, o) : (r.removeEventListener(e, n, !0), ge.remove(r, t));
      } };
  }), K.fn.extend({ on: function (e, t, n, r, o) {
      var i, a;if ("object" == typeof e) {
        "string" != typeof t && (n = n || t, t = void 0);for (a in e) this.on(a, t, n, e[a], o);return this;
      }if (null == n && null == r ? (r = t, n = t = void 0) : null == r && ("string" == typeof t ? (r = n, n = void 0) : (r = n, n = t, t = void 0)), !1 === r) r = c;else if (!r) return this;return 1 === o && (i = r, r = function (e) {
        return K().off(e), i.apply(this, arguments);
      }, r.guid = i.guid || (i.guid = K.guid++)), this.each(function () {
        K.event.add(this, e, r, n, t);
      });
    }, one: function (e, t, n, r) {
      return this.on(e, t, n, r, 1);
    }, off: function (e, t, n) {
      var r, o;if (e && e.preventDefault && e.handleObj) return r = e.handleObj, K(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;if ("object" == typeof e) {
        for (o in e) this.off(o, t, e[o]);return this;
      }return (!1 === t || "function" == typeof t) && (n = t, t = void 0), !1 === n && (n = c), this.each(function () {
        K.event.remove(this, e, n, t);
      });
    }, trigger: function (e, t) {
      return this.each(function () {
        K.event.trigger(e, t, this);
      });
    }, triggerHandler: function (e, t) {
      var n = this[0];return n ? K.event.trigger(e, t, n, !0) : void 0;
    } });var Ee = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
      Ne = /<([\w:]+)/,
      je = /<|&#?\w+;/,
      Ie = /<(?:script|style|link)/i,
      De = /checked\s*(?:[^=]|=\s*.checked.)/i,
      $e = /^$|\/(?:java|ecma)script/i,
      Le = /^true\/(.*)/,
      He = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
      Oe = { option: [1, "<select multiple='multiple'>", "</select>"], thead: [1, "<table>", "</table>"], col: [2, "<table><colgroup>", "</colgroup></table>"], tr: [2, "<table><tbody>", "</tbody></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: [0, "", ""] };Oe.optgroup = Oe.option, Oe.tbody = Oe.tfoot = Oe.colgroup = Oe.caption = Oe.thead, Oe.th = Oe.td, K.extend({ clone: function (e, t, n) {
      var r,
          o,
          i,
          a,
          s = e.cloneNode(!0),
          l = K.contains(e.ownerDocument, e);if (!(J.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || K.isXMLDoc(e))) for (a = v(s), i = v(e), r = 0, o = i.length; o > r; r++) y(i[r], a[r]);if (t) if (n) for (i = i || v(e), a = a || v(s), r = 0, o = i.length; o > r; r++) m(i[r], a[r]);else m(e, s);return (a = v(s, "script")).length > 0 && g(a, !l && v(e, "script")), s;
    }, buildFragment: function (e, t, n, r) {
      for (var o, i, a, s, l, u, c = t.createDocumentFragment(), d = [], f = 0, p = e.length; p > f; f++) if ((o = e[f]) || 0 === o) if ("object" === K.type(o)) K.merge(d, o.nodeType ? [o] : o);else if (je.test(o)) {
        for (i = i || c.appendChild(t.createElement("div")), a = (Ne.exec(o) || ["", ""])[1].toLowerCase(), s = Oe[a] || Oe._default, i.innerHTML = s[1] + o.replace(Ee, "<$1></$2>") + s[2], u = s[0]; u--;) i = i.lastChild;K.merge(d, i.childNodes), (i = c.firstChild).textContent = "";
      } else d.push(t.createTextNode(o));for (c.textContent = "", f = 0; o = d[f++];) if ((!r || -1 === K.inArray(o, r)) && (l = K.contains(o.ownerDocument, o), i = v(c.appendChild(o), "script"), l && g(i), n)) for (u = 0; o = i[u++];) $e.test(o.type || "") && n.push(o);return c;
    }, cleanData: function (e) {
      for (var t, n, r, o, i = K.event.special, a = 0; void 0 !== (n = e[a]); a++) {
        if (K.acceptData(n) && (o = n[ge.expando]) && (t = ge.cache[o])) {
          if (t.events) for (r in t.events) i[r] ? K.event.remove(n, r) : K.removeEvent(n, r, t.handle);ge.cache[o] && delete ge.cache[o];
        }delete me.cache[n[me.expando]];
      }
    } }), K.fn.extend({ text: function (e) {
      return he(this, function (e) {
        return void 0 === e ? K.text(this) : this.empty().each(function () {
          (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && (this.textContent = e);
        });
      }, null, e, arguments.length);
    }, append: function () {
      return this.domManip(arguments, function (e) {
        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || f(this, e).appendChild(e);
      });
    }, prepend: function () {
      return this.domManip(arguments, function (e) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var t = f(this, e);t.insertBefore(e, t.firstChild);
        }
      });
    }, before: function () {
      return this.domManip(arguments, function (e) {
        this.parentNode && this.parentNode.insertBefore(e, this);
      });
    }, after: function () {
      return this.domManip(arguments, function (e) {
        this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
      });
    }, remove: function (e, t) {
      for (var n, r = e ? K.filter(e, this) : this, o = 0; null != (n = r[o]); o++) t || 1 !== n.nodeType || K.cleanData(v(n)), n.parentNode && (t && K.contains(n.ownerDocument, n) && g(v(n, "script")), n.parentNode.removeChild(n));return this;
    }, empty: function () {
      for (var e, t = 0; null != (e = this[t]); t++) 1 === e.nodeType && (K.cleanData(v(e, !1)), e.textContent = "");return this;
    }, clone: function (e, t) {
      return e = null != e && e, t = null == t ? e : t, this.map(function () {
        return K.clone(this, e, t);
      });
    }, html: function (e) {
      return he(this, function (e) {
        var t = this[0] || {},
            n = 0,
            r = this.length;if (void 0 === e && 1 === t.nodeType) return t.innerHTML;if ("string" == typeof e && !Ie.test(e) && !Oe[(Ne.exec(e) || ["", ""])[1].toLowerCase()]) {
          e = e.replace(Ee, "<$1></$2>");try {
            for (; r > n; n++) 1 === (t = this[n] || {}).nodeType && (K.cleanData(v(t, !1)), t.innerHTML = e);t = 0;
          } catch (e) {}
        }t && this.empty().append(e);
      }, null, e, arguments.length);
    }, replaceWith: function () {
      var e = arguments[0];return this.domManip(arguments, function (t) {
        e = this.parentNode, K.cleanData(v(this)), e && e.replaceChild(t, this);
      }), e && (e.length || e.nodeType) ? this : this.remove();
    }, detach: function (e) {
      return this.remove(e, !0);
    }, domManip: function (e, t) {
      e = F.apply([], e);var n,
          r,
          o,
          i,
          a,
          s,
          l = 0,
          u = this.length,
          c = this,
          d = u - 1,
          f = e[0],
          g = K.isFunction(f);if (g || u > 1 && "string" == typeof f && !J.checkClone && De.test(f)) return this.each(function (n) {
        var r = c.eq(n);g && (e[0] = f.call(this, n, r.html())), r.domManip(e, t);
      });if (u && (n = K.buildFragment(e, this[0].ownerDocument, !1, this), r = n.firstChild, 1 === n.childNodes.length && (n = r), r)) {
        for (i = (o = K.map(v(n, "script"), p)).length; u > l; l++) a = n, l !== d && (a = K.clone(a, !0, !0), i && K.merge(o, v(a, "script"))), t.call(this[l], a, l);if (i) for (s = o[o.length - 1].ownerDocument, K.map(o, h), l = 0; i > l; l++) a = o[l], $e.test(a.type || "") && !ge.access(a, "globalEval") && K.contains(s, a) && (a.src ? K._evalUrl && K._evalUrl(a.src) : K.globalEval(a.textContent.replace(He, "")));
      }return this;
    } }), K.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function (e, t) {
    K.fn[e] = function (e) {
      for (var n, r = [], o = K(e), i = o.length - 1, a = 0; i >= a; a++) n = a === i ? this : this.clone(!0), K(o[a])[t](n), z.apply(r, n.get());return this.pushStack(r);
    };
  });var Me,
      qe = {},
      Re = /^margin/,
      Be = new RegExp("^(" + be + ")(?!px)[a-z%]+$", "i"),
      Ue = function (e) {
    return e.ownerDocument.defaultView.getComputedStyle(e, null);
  };!function () {
    var t,
        n,
        r = G.documentElement,
        o = G.createElement("div"),
        i = G.createElement("div");if (i.style) {
      i.style.backgroundClip = "content-box", i.cloneNode(!0).style.backgroundClip = "", J.clearCloneStyle = "content-box" === i.style.backgroundClip, o.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute", o.appendChild(i);function a() {
        i.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", i.innerHTML = "", r.appendChild(o);var a = e.getComputedStyle(i, null);t = "1%" !== a.top, n = "4px" === a.width, r.removeChild(o);
      }e.getComputedStyle && K.extend(J, { pixelPosition: function () {
          return a(), t;
        }, boxSizingReliable: function () {
          return null == n && a(), n;
        }, reliableMarginRight: function () {
          var t,
              n = i.appendChild(G.createElement("div"));return n.style.cssText = i.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", n.style.marginRight = n.style.width = "0", i.style.width = "1px", r.appendChild(o), t = !parseFloat(e.getComputedStyle(n, null).marginRight), r.removeChild(o), t;
        } });
    }
  }(), K.swap = function (e, t, n, r) {
    var o,
        i,
        a = {};for (i in t) a[i] = e.style[i], e.style[i] = t[i];o = n.apply(e, r || []);for (i in t) e.style[i] = a[i];return o;
  };var Pe = /^(none|table(?!-c[ea]).+)/,
      Fe = new RegExp("^(" + be + ")(.*)$", "i"),
      ze = new RegExp("^([+-])=(" + be + ")", "i"),
      We = { position: "absolute", visibility: "hidden", display: "block" },
      Qe = { letterSpacing: "0", fontWeight: "400" },
      Xe = ["Webkit", "O", "Moz", "ms"];K.extend({ cssHooks: { opacity: { get: function (e, t) {
          if (t) {
            var n = w(e, "opacity");return "" === n ? "1" : n;
          }
        } } }, cssNumber: { columnCount: !0, fillOpacity: !0, flexGrow: !0, flexShrink: !0, fontWeight: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 }, cssProps: { float: "cssFloat" }, style: function (e, t, n, r) {
      if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
        var o,
            i,
            a,
            s = K.camelCase(t),
            l = e.style;return t = K.cssProps[s] || (K.cssProps[s] = C(l, s)), a = K.cssHooks[t] || K.cssHooks[s], void 0 === n ? a && "get" in a && void 0 !== (o = a.get(e, !1, r)) ? o : l[t] : ("string" === (i = typeof n) && (o = ze.exec(n)) && (n = (o[1] + 1) * o[2] + parseFloat(K.css(e, t)), i = "number"), void (null != n && n === n && ("number" !== i || K.cssNumber[s] || (n += "px"), J.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"), a && "set" in a && void 0 === (n = a.set(e, n, r)) || (l[t] = n))));
      }
    }, css: function (e, t, n, r) {
      var o,
          i,
          a,
          s = K.camelCase(t);return t = K.cssProps[s] || (K.cssProps[s] = C(e.style, s)), (a = K.cssHooks[t] || K.cssHooks[s]) && "get" in a && (o = a.get(e, !0, n)), void 0 === o && (o = w(e, t, r)), "normal" === o && t in Qe && (o = Qe[t]), "" === n || n ? (i = parseFloat(o), !0 === n || K.isNumeric(i) ? i || 0 : o) : o;
    } }), K.each(["height", "width"], function (e, t) {
    K.cssHooks[t] = { get: function (e, n, r) {
        return n ? Pe.test(K.css(e, "display")) && 0 === e.offsetWidth ? K.swap(e, We, function () {
          return k(e, t, r);
        }) : k(e, t, r) : void 0;
      }, set: function (e, n, r) {
        var o = r && Ue(e);return T(0, n, r ? A(e, t, r, "border-box" === K.css(e, "boxSizing", !1, o), o) : 0);
      } };
  }), K.cssHooks.marginRight = S(J.reliableMarginRight, function (e, t) {
    return t ? K.swap(e, { display: "inline-block" }, w, [e, "marginRight"]) : void 0;
  }), K.each({ margin: "", padding: "", border: "Width" }, function (e, t) {
    K.cssHooks[e + t] = { expand: function (n) {
        for (var r = 0, o = {}, i = "string" == typeof n ? n.split(" ") : [n]; 4 > r; r++) o[e + xe[r] + t] = i[r] || i[r - 2] || i[0];return o;
      } }, Re.test(e) || (K.cssHooks[e + t].set = T);
  }), K.fn.extend({ css: function (e, t) {
      return he(this, function (e, t, n) {
        var r,
            o,
            i = {},
            a = 0;if (K.isArray(t)) {
          for (r = Ue(e), o = t.length; o > a; a++) i[t[a]] = K.css(e, t[a], !1, r);return i;
        }return void 0 !== n ? K.style(e, t, n) : K.css(e, t);
      }, e, t, arguments.length > 1);
    }, show: function () {
      return _(this, !0);
    }, hide: function () {
      return _(this);
    }, toggle: function (e) {
      return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
        we(this) ? K(this).show() : K(this).hide();
      });
    } }), K.Tween = E, E.prototype = { constructor: E, init: function (e, t, n, r, o, i) {
      this.elem = e, this.prop = n, this.easing = o || "swing", this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = i || (K.cssNumber[n] ? "" : "px");
    }, cur: function () {
      var e = E.propHooks[this.prop];return e && e.get ? e.get(this) : E.propHooks._default.get(this);
    }, run: function (e) {
      var t,
          n = E.propHooks[this.prop];return this.pos = t = this.options.duration ? K.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : E.propHooks._default.set(this), this;
    } }, E.prototype.init.prototype = E.prototype, E.propHooks = { _default: { get: function (e) {
        var t;return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = K.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0 : e.elem[e.prop];
      }, set: function (e) {
        K.fx.step[e.prop] ? K.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[K.cssProps[e.prop]] || K.cssHooks[e.prop]) ? K.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now;
      } } }, E.propHooks.scrollTop = E.propHooks.scrollLeft = { set: function (e) {
      e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
    } }, K.easing = { linear: function (e) {
      return e;
    }, swing: function (e) {
      return .5 - Math.cos(e * Math.PI) / 2;
    } }, K.fx = E.prototype.init, K.fx.step = {};var Ve,
      Je,
      Ge = /^(?:toggle|show|hide)$/,
      Ye = new RegExp("^(?:([+-])=|)(" + be + ")([a-z%]*)$", "i"),
      Ke = /queueHooks$/,
      Ze = [function (e, t, n) {
    var r,
        o,
        i,
        a,
        s,
        l,
        u,
        c = this,
        d = {},
        f = e.style,
        p = e.nodeType && we(e),
        h = ge.get(e, "fxshow");n.queue || (null == (s = K._queueHooks(e, "fx")).unqueued && (s.unqueued = 0, l = s.empty.fire, s.empty.fire = function () {
      s.unqueued || l();
    }), s.unqueued++, c.always(function () {
      c.always(function () {
        s.unqueued--, K.queue(e, "fx").length || s.empty.fire();
      });
    })), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [f.overflow, f.overflowX, f.overflowY], "inline" === ("none" === (u = K.css(e, "display")) ? ge.get(e, "olddisplay") || x(e.nodeName) : u) && "none" === K.css(e, "float") && (f.display = "inline-block")), n.overflow && (f.overflow = "hidden", c.always(function () {
      f.overflow = n.overflow[0], f.overflowX = n.overflow[1], f.overflowY = n.overflow[2];
    }));for (r in t) if (o = t[r], Ge.exec(o)) {
      if (delete t[r], i = i || "toggle" === o, o === (p ? "hide" : "show")) {
        if ("show" !== o || !h || void 0 === h[r]) continue;p = !0;
      }d[r] = h && h[r] || K.style(e, r);
    } else u = void 0;if (K.isEmptyObject(d)) "inline" === ("none" === u ? x(e.nodeName) : u) && (f.display = u);else {
      h ? "hidden" in h && (p = h.hidden) : h = ge.access(e, "fxshow", {}), i && (h.hidden = !p), p ? K(e).show() : c.done(function () {
        K(e).hide();
      }), c.done(function () {
        var t;ge.remove(e, "fxshow");for (t in d) K.style(e, t, d[t]);
      });for (r in d) a = I(p ? h[r] : 0, r, c), r in h || (h[r] = a.start, p && (a.end = a.start, a.start = "width" === r || "height" === r ? 1 : 0));
    }
  }],
      et = { "*": [function (e, t) {
      var n = this.createTween(e, t),
          r = n.cur(),
          o = Ye.exec(t),
          i = o && o[3] || (K.cssNumber[e] ? "" : "px"),
          a = (K.cssNumber[e] || "px" !== i && +r) && Ye.exec(K.css(n.elem, e)),
          s = 1,
          l = 20;if (a && a[3] !== i) {
        i = i || a[3], o = o || [], a = +r || 1;do {
          s = s || ".5", a /= s, K.style(n.elem, e, a + i);
        } while (s !== (s = n.cur() / r) && 1 !== s && --l);
      }return o && (a = n.start = +a || +r || 0, n.unit = i, n.end = o[1] ? a + (o[1] + 1) * o[2] : +o[2]), n;
    }] };K.Animation = K.extend($, { tweener: function (e, t) {
      K.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");for (var n, r = 0, o = e.length; o > r; r++) n = e[r], et[n] = et[n] || [], et[n].unshift(t);
    }, prefilter: function (e, t) {
      t ? Ze.unshift(e) : Ze.push(e);
    } }), K.speed = function (e, t, n) {
    var r = e && "object" == typeof e ? K.extend({}, e) : { complete: n || !n && t || K.isFunction(e) && e, duration: e, easing: n && t || t && !K.isFunction(t) && t };return r.duration = K.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in K.fx.speeds ? K.fx.speeds[r.duration] : K.fx.speeds._default, (null == r.queue || !0 === r.queue) && (r.queue = "fx"), r.old = r.complete, r.complete = function () {
      K.isFunction(r.old) && r.old.call(this), r.queue && K.dequeue(this, r.queue);
    }, r;
  }, K.fn.extend({ fadeTo: function (e, t, n, r) {
      return this.filter(we).css("opacity", 0).show().end().animate({ opacity: t }, e, n, r);
    }, animate: function (e, t, n, r) {
      var o = K.isEmptyObject(e),
          i = K.speed(t, n, r),
          a = function () {
        var t = $(this, K.extend({}, e), i);(o || ge.get(this, "finish")) && t.stop(!0);
      };return a.finish = a, o || !1 === i.queue ? this.each(a) : this.queue(i.queue, a);
    }, stop: function (e, t, n) {
      var r = function (e) {
        var t = e.stop;delete e.stop, t(n);
      };return "string" != typeof e && (n = t, t = e, e = void 0), t && !1 !== e && this.queue(e || "fx", []), this.each(function () {
        var t = !0,
            o = null != e && e + "queueHooks",
            i = K.timers,
            a = ge.get(this);if (o) a[o] && a[o].stop && r(a[o]);else for (o in a) a[o] && a[o].stop && Ke.test(o) && r(a[o]);for (o = i.length; o--;) i[o].elem !== this || null != e && i[o].queue !== e || (i[o].anim.stop(n), t = !1, i.splice(o, 1));(t || !n) && K.dequeue(this, e);
      });
    }, finish: function (e) {
      return !1 !== e && (e = e || "fx"), this.each(function () {
        var t,
            n = ge.get(this),
            r = n[e + "queue"],
            o = n[e + "queueHooks"],
            i = K.timers,
            a = r ? r.length : 0;for (n.finish = !0, K.queue(this, e, []), o && o.stop && o.stop.call(this, !0), t = i.length; t--;) i[t].elem === this && i[t].queue === e && (i[t].anim.stop(!0), i.splice(t, 1));for (t = 0; a > t; t++) r[t] && r[t].finish && r[t].finish.call(this);delete n.finish;
      });
    } }), K.each(["toggle", "show", "hide"], function (e, t) {
    var n = K.fn[t];K.fn[t] = function (e, r, o) {
      return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(j(t, !0), e, r, o);
    };
  }), K.each({ slideDown: j("show"), slideUp: j("hide"), slideToggle: j("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function (e, t) {
    K.fn[e] = function (e, n, r) {
      return this.animate(t, e, n, r);
    };
  }), K.timers = [], K.fx.tick = function () {
    var e,
        t = 0,
        n = K.timers;for (Ve = K.now(); t < n.length; t++) (e = n[t])() || n[t] !== e || n.splice(t--, 1);n.length || K.fx.stop(), Ve = void 0;
  }, K.fx.timer = function (e) {
    K.timers.push(e), e() ? K.fx.start() : K.timers.pop();
  }, K.fx.interval = 13, K.fx.start = function () {
    Je || (Je = setInterval(K.fx.tick, K.fx.interval));
  }, K.fx.stop = function () {
    clearInterval(Je), Je = null;
  }, K.fx.speeds = { slow: 600, fast: 200, _default: 400 }, K.fn.delay = function (e, t) {
    return e = K.fx ? K.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function (t, n) {
      var r = setTimeout(t, e);n.stop = function () {
        clearTimeout(r);
      };
    });
  }, function () {
    var e = G.createElement("input"),
        t = G.createElement("select"),
        n = t.appendChild(G.createElement("option"));e.type = "checkbox", J.checkOn = "" !== e.value, J.optSelected = n.selected, t.disabled = !0, J.optDisabled = !n.disabled, (e = G.createElement("input")).value = "t", e.type = "radio", J.radioValue = "t" === e.value;
  }();var tt,
      nt = K.expr.attrHandle;K.fn.extend({ attr: function (e, t) {
      return he(this, K.attr, e, t, arguments.length > 1);
    }, removeAttr: function (e) {
      return this.each(function () {
        K.removeAttr(this, e);
      });
    } }), K.extend({ attr: function (e, t, n) {
      var r,
          o,
          i = e.nodeType;if (e && 3 !== i && 8 !== i && 2 !== i) return typeof e.getAttribute === Ce ? K.prop(e, t, n) : (1 === i && K.isXMLDoc(e) || (t = t.toLowerCase(), r = K.attrHooks[t] || (K.expr.match.bool.test(t) ? tt : void 0)), void 0 === n ? r && "get" in r && null !== (o = r.get(e, t)) ? o : null == (o = K.find.attr(e, t)) ? void 0 : o : null !== n ? r && "set" in r && void 0 !== (o = r.set(e, n, t)) ? o : (e.setAttribute(t, n + ""), n) : void K.removeAttr(e, t));
    }, removeAttr: function (e, t) {
      var n,
          r,
          o = 0,
          i = t && t.match(de);if (i && 1 === e.nodeType) for (; n = i[o++];) r = K.propFix[n] || n, K.expr.match.bool.test(n) && (e[r] = !1), e.removeAttribute(n);
    }, attrHooks: { type: { set: function (e, t) {
          if (!J.radioValue && "radio" === t && K.nodeName(e, "input")) {
            var n = e.value;return e.setAttribute("type", t), n && (e.value = n), t;
          }
        } } } }), tt = { set: function (e, t, n) {
      return !1 === t ? K.removeAttr(e, n) : e.setAttribute(n, n), n;
    } }, K.each(K.expr.match.bool.source.match(/\w+/g), function (e, t) {
    var n = nt[t] || K.find.attr;nt[t] = function (e, t, r) {
      var o, i;return r || (i = nt[t], nt[t] = o, o = null != n(e, t, r) ? t.toLowerCase() : null, nt[t] = i), o;
    };
  });var rt = /^(?:input|select|textarea|button)$/i;K.fn.extend({ prop: function (e, t) {
      return he(this, K.prop, e, t, arguments.length > 1);
    }, removeProp: function (e) {
      return this.each(function () {
        delete this[K.propFix[e] || e];
      });
    } }), K.extend({ propFix: { for: "htmlFor", class: "className" }, prop: function (e, t, n) {
      var r,
          o,
          i = e.nodeType;if (e && 3 !== i && 8 !== i && 2 !== i) return (1 !== i || !K.isXMLDoc(e)) && (t = K.propFix[t] || t, o = K.propHooks[t]), void 0 !== n ? o && "set" in o && void 0 !== (r = o.set(e, n, t)) ? r : e[t] = n : o && "get" in o && null !== (r = o.get(e, t)) ? r : e[t];
    }, propHooks: { tabIndex: { get: function (e) {
          return e.hasAttribute("tabindex") || rt.test(e.nodeName) || e.href ? e.tabIndex : -1;
        } } } }), J.optSelected || (K.propHooks.selected = { get: function (e) {
      var t = e.parentNode;return t && t.parentNode && t.parentNode.selectedIndex, null;
    } }), K.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
    K.propFix[this.toLowerCase()] = this;
  });var ot = /[\t\r\n\f]/g;K.fn.extend({ addClass: function (e) {
      var t,
          n,
          r,
          o,
          i,
          a,
          s = "string" == typeof e && e,
          l = 0,
          u = this.length;if (K.isFunction(e)) return this.each(function (t) {
        K(this).addClass(e.call(this, t, this.className));
      });if (s) for (t = (e || "").match(de) || []; u > l; l++) if (n = this[l], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(ot, " ") : " ")) {
        for (i = 0; o = t[i++];) r.indexOf(" " + o + " ") < 0 && (r += o + " ");a = K.trim(r), n.className !== a && (n.className = a);
      }return this;
    }, removeClass: function (e) {
      var t,
          n,
          r,
          o,
          i,
          a,
          s = 0 === arguments.length || "string" == typeof e && e,
          l = 0,
          u = this.length;if (K.isFunction(e)) return this.each(function (t) {
        K(this).removeClass(e.call(this, t, this.className));
      });if (s) for (t = (e || "").match(de) || []; u > l; l++) if (n = this[l], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(ot, " ") : "")) {
        for (i = 0; o = t[i++];) for (; r.indexOf(" " + o + " ") >= 0;) r = r.replace(" " + o + " ", " ");a = e ? K.trim(r) : "", n.className !== a && (n.className = a);
      }return this;
    }, toggleClass: function (e, t) {
      var n = typeof e;return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : this.each(K.isFunction(e) ? function (n) {
        K(this).toggleClass(e.call(this, n, this.className, t), t);
      } : function () {
        if ("string" === n) for (var t, r = 0, o = K(this), i = e.match(de) || []; t = i[r++];) o.hasClass(t) ? o.removeClass(t) : o.addClass(t);else (n === Ce || "boolean" === n) && (this.className && ge.set(this, "__className__", this.className), this.className = this.className || !1 === e ? "" : ge.get(this, "__className__") || "");
      });
    }, hasClass: function (e) {
      for (var t = " " + e + " ", n = 0, r = this.length; r > n; n++) if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(ot, " ").indexOf(t) >= 0) return !0;return !1;
    } });var it = /\r/g;K.fn.extend({ val: function (e) {
      var t,
          n,
          r,
          o = this[0];return arguments.length ? (r = K.isFunction(e), this.each(function (n) {
        var o;1 === this.nodeType && (null == (o = r ? e.call(this, n, K(this).val()) : e) ? o = "" : "number" == typeof o ? o += "" : K.isArray(o) && (o = K.map(o, function (e) {
          return null == e ? "" : e + "";
        })), (t = K.valHooks[this.type] || K.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, o, "value") || (this.value = o));
      })) : o ? (t = K.valHooks[o.type] || K.valHooks[o.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(o, "value")) ? n : "string" == typeof (n = o.value) ? n.replace(it, "") : null == n ? "" : n : void 0;
    } }), K.extend({ valHooks: { option: { get: function (e) {
          var t = K.find.attr(e, "value");return null != t ? t : K.trim(K.text(e));
        } }, select: { get: function (e) {
          for (var t, n, r = e.options, o = e.selectedIndex, i = "select-one" === e.type || 0 > o, a = i ? null : [], s = i ? o + 1 : r.length, l = 0 > o ? s : i ? o : 0; s > l; l++) if (!(!(n = r[l]).selected && l !== o || (J.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && K.nodeName(n.parentNode, "optgroup"))) {
            if (t = K(n).val(), i) return t;a.push(t);
          }return a;
        }, set: function (e, t) {
          for (var n, r, o = e.options, i = K.makeArray(t), a = o.length; a--;) r = o[a], (r.selected = K.inArray(r.value, i) >= 0) && (n = !0);return n || (e.selectedIndex = -1), i;
        } } } }), K.each(["radio", "checkbox"], function () {
    K.valHooks[this] = { set: function (e, t) {
        return K.isArray(t) ? e.checked = K.inArray(K(e).val(), t) >= 0 : void 0;
      } }, J.checkOn || (K.valHooks[this].get = function (e) {
      return null === e.getAttribute("value") ? "on" : e.value;
    });
  }), K.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (e, t) {
    K.fn[t] = function (e, n) {
      return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t);
    };
  }), K.fn.extend({ hover: function (e, t) {
      return this.mouseenter(e).mouseleave(t || e);
    }, bind: function (e, t, n) {
      return this.on(e, null, t, n);
    }, unbind: function (e, t) {
      return this.off(e, null, t);
    }, delegate: function (e, t, n, r) {
      return this.on(t, e, n, r);
    }, undelegate: function (e, t, n) {
      return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n);
    } });var at = K.now(),
      st = /\?/;K.parseJSON = function (e) {
    return JSON.parse(e + "");
  }, K.parseXML = function (e) {
    var t;if (!e || "string" != typeof e) return null;try {
      t = new DOMParser().parseFromString(e, "text/xml");
    } catch (e) {
      t = void 0;
    }return (!t || t.getElementsByTagName("parsererror").length) && K.error("Invalid XML: " + e), t;
  };var lt,
      ut,
      ct = /#.*$/,
      dt = /([?&])_=[^&]*/,
      ft = /^(.*?):[ \t]*([^\r\n]*)$/gm,
      pt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
      ht = /^(?:GET|HEAD)$/,
      gt = /^\/\//,
      mt = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
      vt = {},
      yt = {},
      bt = "*/".concat("*");try {
    ut = location.href;
  } catch (e) {
    (ut = G.createElement("a")).href = "", ut = ut.href;
  }lt = mt.exec(ut.toLowerCase()) || [], K.extend({ active: 0, lastModified: {}, etag: {}, ajaxSettings: { url: ut, type: "GET", isLocal: pt.test(lt[1]), global: !0, processData: !0, async: !0, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: { "*": bt, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" }, contents: { xml: /xml/, html: /html/, json: /json/ }, responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" }, converters: { "* text": String, "text html": !0, "text json": K.parseJSON, "text xml": K.parseXML }, flatOptions: { url: !0, context: !0 } }, ajaxSetup: function (e, t) {
      return t ? O(O(e, K.ajaxSettings), t) : O(K.ajaxSettings, e);
    }, ajaxPrefilter: L(vt), ajaxTransport: L(yt), ajax: function (e, t) {
      function n(e, t, n, a) {
        var l,
            c,
            v,
            y,
            x,
            S = t;2 !== b && (b = 2, s && clearTimeout(s), r = void 0, i = a || "", w.readyState = e > 0 ? 4 : 0, l = e >= 200 && 300 > e || 304 === e, n && (y = M(d, w, n)), y = q(d, y, w, l), l ? (d.ifModified && ((x = w.getResponseHeader("Last-Modified")) && (K.lastModified[o] = x), (x = w.getResponseHeader("etag")) && (K.etag[o] = x)), 204 === e || "HEAD" === d.type ? S = "nocontent" : 304 === e ? S = "notmodified" : (S = y.state, c = y.data, v = y.error, l = !v)) : (v = S, (e || !S) && (S = "error", 0 > e && (e = 0))), w.status = e, w.statusText = (t || S) + "", l ? h.resolveWith(f, [c, S, w]) : h.rejectWith(f, [w, S, v]), w.statusCode(m), m = void 0, u && p.trigger(l ? "ajaxSuccess" : "ajaxError", [w, d, l ? c : v]), g.fireWith(f, [w, S]), u && (p.trigger("ajaxComplete", [w, d]), --K.active || K.event.trigger("ajaxStop")));
      }"object" == typeof e && (t = e, e = void 0), t = t || {};var r,
          o,
          i,
          a,
          s,
          l,
          u,
          c,
          d = K.ajaxSetup({}, t),
          f = d.context || d,
          p = d.context && (f.nodeType || f.jquery) ? K(f) : K.event,
          h = K.Deferred(),
          g = K.Callbacks("once memory"),
          m = d.statusCode || {},
          v = {},
          y = {},
          b = 0,
          x = "canceled",
          w = { readyState: 0, getResponseHeader: function (e) {
          var t;if (2 === b) {
            if (!a) for (a = {}; t = ft.exec(i);) a[t[1].toLowerCase()] = t[2];t = a[e.toLowerCase()];
          }return null == t ? null : t;
        }, getAllResponseHeaders: function () {
          return 2 === b ? i : null;
        }, setRequestHeader: function (e, t) {
          var n = e.toLowerCase();return b || (e = y[n] = y[n] || e, v[e] = t), this;
        }, overrideMimeType: function (e) {
          return b || (d.mimeType = e), this;
        }, statusCode: function (e) {
          var t;if (e) if (2 > b) for (t in e) m[t] = [m[t], e[t]];else w.always(e[w.status]);return this;
        }, abort: function (e) {
          var t = e || x;return r && r.abort(t), n(0, t), this;
        } };if (h.promise(w).complete = g.add, w.success = w.done, w.error = w.fail, d.url = ((e || d.url || ut) + "").replace(ct, "").replace(gt, lt[1] + "//"), d.type = t.method || t.type || d.method || d.type, d.dataTypes = K.trim(d.dataType || "*").toLowerCase().match(de) || [""], null == d.crossDomain && (l = mt.exec(d.url.toLowerCase()), d.crossDomain = !(!l || l[1] === lt[1] && l[2] === lt[2] && (l[3] || ("http:" === l[1] ? "80" : "443")) === (lt[3] || ("http:" === lt[1] ? "80" : "443")))), d.data && d.processData && "string" != typeof d.data && (d.data = K.param(d.data, d.traditional)), H(vt, d, t, w), 2 === b) return w;(u = d.global) && 0 == K.active++ && K.event.trigger("ajaxStart"), d.type = d.type.toUpperCase(), d.hasContent = !ht.test(d.type), o = d.url, d.hasContent || (d.data && (o = d.url += (st.test(o) ? "&" : "?") + d.data, delete d.data), !1 === d.cache && (d.url = dt.test(o) ? o.replace(dt, "$1_=" + at++) : o + (st.test(o) ? "&" : "?") + "_=" + at++)), d.ifModified && (K.lastModified[o] && w.setRequestHeader("If-Modified-Since", K.lastModified[o]), K.etag[o] && w.setRequestHeader("If-None-Match", K.etag[o])), (d.data && d.hasContent && !1 !== d.contentType || t.contentType) && w.setRequestHeader("Content-Type", d.contentType), w.setRequestHeader("Accept", d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + ("*" !== d.dataTypes[0] ? ", " + bt + "; q=0.01" : "") : d.accepts["*"]);for (c in d.headers) w.setRequestHeader(c, d.headers[c]);if (d.beforeSend && (!1 === d.beforeSend.call(f, w, d) || 2 === b)) return w.abort();x = "abort";for (c in { success: 1, error: 1, complete: 1 }) w[c](d[c]);if (r = H(yt, d, t, w)) {
        w.readyState = 1, u && p.trigger("ajaxSend", [w, d]), d.async && d.timeout > 0 && (s = setTimeout(function () {
          w.abort("timeout");
        }, d.timeout));try {
          b = 1, r.send(v, n);
        } catch (e) {
          if (!(2 > b)) throw e;n(-1, e);
        }
      } else n(-1, "No Transport");return w;
    }, getJSON: function (e, t, n) {
      return K.get(e, t, n, "json");
    }, getScript: function (e, t) {
      return K.get(e, void 0, t, "script");
    } }), K.each(["get", "post"], function (e, t) {
    K[t] = function (e, n, r, o) {
      return K.isFunction(n) && (o = o || r, r = n, n = void 0), K.ajax({ url: e, type: t, dataType: o, data: n, success: r });
    };
  }), K.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
    K.fn[t] = function (e) {
      return this.on(t, e);
    };
  }), K._evalUrl = function (e) {
    return K.ajax({ url: e, type: "GET", dataType: "script", async: !1, global: !1, throws: !0 });
  }, K.fn.extend({ wrapAll: function (e) {
      var t;return K.isFunction(e) ? this.each(function (t) {
        K(this).wrapAll(e.call(this, t));
      }) : (this[0] && (t = K(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
        for (var e = this; e.firstElementChild;) e = e.firstElementChild;return e;
      }).append(this)), this);
    }, wrapInner: function (e) {
      return this.each(K.isFunction(e) ? function (t) {
        K(this).wrapInner(e.call(this, t));
      } : function () {
        var t = K(this),
            n = t.contents();n.length ? n.wrapAll(e) : t.append(e);
      });
    }, wrap: function (e) {
      var t = K.isFunction(e);return this.each(function (n) {
        K(this).wrapAll(t ? e.call(this, n) : e);
      });
    }, unwrap: function () {
      return this.parent().each(function () {
        K.nodeName(this, "body") || K(this).replaceWith(this.childNodes);
      }).end();
    } }), K.expr.filters.hidden = function (e) {
    return e.offsetWidth <= 0 && e.offsetHeight <= 0;
  }, K.expr.filters.visible = function (e) {
    return !K.expr.filters.hidden(e);
  };var xt = /%20/g,
      wt = /\[\]$/,
      St = /\r?\n/g,
      Ct = /^(?:submit|button|image|reset|file)$/i,
      Tt = /^(?:input|select|textarea|keygen)/i;K.param = function (e, t) {
    var n,
        r = [],
        o = function (e, t) {
      t = K.isFunction(t) ? t() : null == t ? "" : t, r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t);
    };if (void 0 === t && (t = K.ajaxSettings && K.ajaxSettings.traditional), K.isArray(e) || e.jquery && !K.isPlainObject(e)) K.each(e, function () {
      o(this.name, this.value);
    });else for (n in e) R(n, e[n], t, o);return r.join("&").replace(xt, "+");
  }, K.fn.extend({ serialize: function () {
      return K.param(this.serializeArray());
    }, serializeArray: function () {
      return this.map(function () {
        var e = K.prop(this, "elements");return e ? K.makeArray(e) : this;
      }).filter(function () {
        var e = this.type;return this.name && !K(this).is(":disabled") && Tt.test(this.nodeName) && !Ct.test(e) && (this.checked || !Se.test(e));
      }).map(function (e, t) {
        var n = K(this).val();return null == n ? null : K.isArray(n) ? K.map(n, function (e) {
          return { name: t.name, value: e.replace(St, "\r\n") };
        }) : { name: t.name, value: n.replace(St, "\r\n") };
      }).get();
    } }), K.ajaxSettings.xhr = function () {
    try {
      return new XMLHttpRequest();
    } catch (e) {}
  };var At = 0,
      kt = {},
      _t = { 0: 200, 1223: 204 },
      Et = K.ajaxSettings.xhr();e.ActiveXObject && K(e).on("unload", function () {
    for (var e in kt) kt[e]();
  }), J.cors = !!Et && "withCredentials" in Et, J.ajax = Et = !!Et, K.ajaxTransport(function (e) {
    var t;return J.cors || Et && !e.crossDomain ? { send: function (n, r) {
        var o,
            i = e.xhr(),
            a = ++At;if (i.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields) for (o in e.xhrFields) i[o] = e.xhrFields[o];e.mimeType && i.overrideMimeType && i.overrideMimeType(e.mimeType), e.crossDomain || n["X-Requested-With"] || (n["X-Requested-With"] = "XMLHttpRequest");for (o in n) i.setRequestHeader(o, n[o]);t = function (e) {
          return function () {
            t && (delete kt[a], t = i.onload = i.onerror = null, "abort" === e ? i.abort() : "error" === e ? r(i.status, i.statusText) : r(_t[i.status] || i.status, i.statusText, "string" == typeof i.responseText ? { text: i.responseText } : void 0, i.getAllResponseHeaders()));
          };
        }, i.onload = t(), i.onerror = t("error"), t = kt[a] = t("abort");try {
          i.send(e.hasContent && e.data || null);
        } catch (e) {
          if (t) throw e;
        }
      }, abort: function () {
        t && t();
      } } : void 0;
  }), K.ajaxSetup({ accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" }, contents: { script: /(?:java|ecma)script/ }, converters: { "text script": function (e) {
        return K.globalEval(e), e;
      } } }), K.ajaxPrefilter("script", function (e) {
    void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET");
  }), K.ajaxTransport("script", function (e) {
    if (e.crossDomain) {
      var t, n;return { send: function (r, o) {
          t = K("<script>").prop({ async: !0, charset: e.scriptCharset, src: e.url }).on("load error", n = function (e) {
            t.remove(), n = null, e && o("error" === e.type ? 404 : 200, e.type);
          }), G.head.appendChild(t[0]);
        }, abort: function () {
          n && n();
        } };
    }
  });var Nt = [],
      jt = /(=)\?(?=&|$)|\?\?/;K.ajaxSetup({ jsonp: "callback", jsonpCallback: function () {
      var e = Nt.pop() || K.expando + "_" + at++;return this[e] = !0, e;
    } }), K.ajaxPrefilter("json jsonp", function (t, n, r) {
    var o,
        i,
        a,
        s = !1 !== t.jsonp && (jt.test(t.url) ? "url" : "string" == typeof t.data && !(t.contentType || "").indexOf("application/x-www-form-urlencoded") && jt.test(t.data) && "data");return s || "jsonp" === t.dataTypes[0] ? (o = t.jsonpCallback = K.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s ? t[s] = t[s].replace(jt, "$1" + o) : !1 !== t.jsonp && (t.url += (st.test(t.url) ? "&" : "?") + t.jsonp + "=" + o), t.converters["script json"] = function () {
      return a || K.error(o + " was not called"), a[0];
    }, t.dataTypes[0] = "json", i = e[o], e[o] = function () {
      a = arguments;
    }, r.always(function () {
      e[o] = i, t[o] && (t.jsonpCallback = n.jsonpCallback, Nt.push(o)), a && K.isFunction(i) && i(a[0]), a = i = void 0;
    }), "script") : void 0;
  }), K.parseHTML = function (e, t, n) {
    if (!e || "string" != typeof e) return null;"boolean" == typeof t && (n = t, t = !1), t = t || G;var r = ie.exec(e),
        o = !n && [];return r ? [t.createElement(r[1])] : (r = K.buildFragment([e], t, o), o && o.length && K(o).remove(), K.merge([], r.childNodes));
  };var It = K.fn.load;K.fn.load = function (e, t, n) {
    if ("string" != typeof e && It) return It.apply(this, arguments);var r,
        o,
        i,
        a = this,
        s = e.indexOf(" ");return s >= 0 && (r = K.trim(e.slice(s)), e = e.slice(0, s)), K.isFunction(t) ? (n = t, t = void 0) : t && "object" == typeof t && (o = "POST"), a.length > 0 && K.ajax({ url: e, type: o, dataType: "html", data: t }).done(function (e) {
      i = arguments, a.html(r ? K("<div>").append(K.parseHTML(e)).find(r) : e);
    }).complete(n && function (e, t) {
      a.each(n, i || [e.responseText, t, e]);
    }), this;
  }, K.expr.filters.animated = function (e) {
    return K.grep(K.timers, function (t) {
      return e === t.elem;
    }).length;
  };var Dt = e.document.documentElement;K.offset = { setOffset: function (e, t, n) {
      var r,
          o,
          i,
          a,
          s,
          l,
          u = K.css(e, "position"),
          c = K(e),
          d = {};"static" === u && (e.style.position = "relative"), s = c.offset(), i = K.css(e, "top"), l = K.css(e, "left"), ("absolute" === u || "fixed" === u) && (i + l).indexOf("auto") > -1 ? (r = c.position(), a = r.top, o = r.left) : (a = parseFloat(i) || 0, o = parseFloat(l) || 0), K.isFunction(t) && (t = t.call(e, n, s)), null != t.top && (d.top = t.top - s.top + a), null != t.left && (d.left = t.left - s.left + o), "using" in t ? t.using.call(e, d) : c.css(d);
    } }, K.fn.extend({ offset: function (e) {
      if (arguments.length) return void 0 === e ? this : this.each(function (t) {
        K.offset.setOffset(this, e, t);
      });var t,
          n,
          r = this[0],
          o = { top: 0, left: 0 },
          i = r && r.ownerDocument;return i ? (t = i.documentElement, K.contains(t, r) ? (typeof r.getBoundingClientRect !== Ce && (o = r.getBoundingClientRect()), n = B(i), { top: o.top + n.pageYOffset - t.clientTop, left: o.left + n.pageXOffset - t.clientLeft }) : o) : void 0;
    }, position: function () {
      if (this[0]) {
        var e,
            t,
            n = this[0],
            r = { top: 0, left: 0 };return "fixed" === K.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), K.nodeName(e[0], "html") || (r = e.offset()), r.top += K.css(e[0], "borderTopWidth", !0), r.left += K.css(e[0], "borderLeftWidth", !0)), { top: t.top - r.top - K.css(n, "marginTop", !0), left: t.left - r.left - K.css(n, "marginLeft", !0) };
      }
    }, offsetParent: function () {
      return this.map(function () {
        for (var e = this.offsetParent || Dt; e && !K.nodeName(e, "html") && "static" === K.css(e, "position");) e = e.offsetParent;return e || Dt;
      });
    } }), K.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (t, n) {
    var r = "pageYOffset" === n;K.fn[t] = function (o) {
      return he(this, function (t, o, i) {
        var a = B(t);return void 0 === i ? a ? a[n] : t[o] : void (a ? a.scrollTo(r ? e.pageXOffset : i, r ? i : e.pageYOffset) : t[o] = i);
      }, t, o, arguments.length, null);
    };
  }), K.each(["top", "left"], function (e, t) {
    K.cssHooks[t] = S(J.pixelPosition, function (e, n) {
      return n ? (n = w(e, t), Be.test(n) ? K(e).position()[t] + "px" : n) : void 0;
    });
  }), K.each({ Height: "height", Width: "width" }, function (e, t) {
    K.each({ padding: "inner" + e, content: t, "": "outer" + e }, function (n, r) {
      K.fn[r] = function (r, o) {
        var i = arguments.length && (n || "boolean" != typeof r),
            a = n || (!0 === r || !0 === o ? "margin" : "border");return he(this, function (t, n, r) {
          var o;return K.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (o = t.documentElement, Math.max(t.body["scroll" + e], o["scroll" + e], t.body["offset" + e], o["offset" + e], o["client" + e])) : void 0 === r ? K.css(t, n, a) : K.style(t, n, r, a);
        }, t, i ? r : void 0, i, null);
      };
    });
  }), K.fn.size = function () {
    return this.length;
  }, K.fn.andSelf = K.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function () {
    return K;
  });var $t = e.jQuery,
      Lt = e.$;return K.noConflict = function (t) {
    return e.$ === K && (e.$ = Lt), t && e.jQuery === K && (e.jQuery = $t), K;
  }, typeof t === Ce && (e.jQuery = e.$ = K), K;
}), function (e) {
  var t = !1,
      n = !1,
      r = { isUrl: function (e) {
      return !!RegExp("^(https?:\\/\\/)?((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|((\\d{1,3}\\.){3}\\d{1,3}))(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*(\\?[;&a-z\\d%_.~+=-]*)?(\\#[-a-z\\d_]*)?$", "i").test(e);
    }, loadContent: function (e, t) {
      e.html(t);
    }, addPrefix: function (e) {
      var t = e.attr("id"),
          n = e.attr("class");"string" == typeof t && "" !== t && e.attr("id", t.replace(/([A-Za-z0-9_.\-]+)/g, "sidr-id-$1")), "string" == typeof n && "" !== n && "sidr-inner" !== n && e.attr("class", n.replace(/([A-Za-z0-9_.\-]+)/g, "sidr-class-$1")), e.removeAttr("style");
    }, execute: function (r, i, a) {
      "function" == typeof i ? (a = i, i = "sidr") : i || (i = "sidr");var s,
          l,
          u,
          c = e("#" + i),
          d = e(c.data("body")),
          f = e("html"),
          p = c.outerWidth(!0),
          h = c.data("speed"),
          g = c.data("side"),
          m = c.data("displace"),
          v = c.data("onOpen"),
          y = c.data("onClose"),
          b = "sidr" === i ? "sidr-open" : "sidr-open " + i + "-open";if ("open" === r || "toggle" === r && !c.is(":visible")) {
        if (c.is(":visible") || t) return;if (!1 !== n) return void o.close(n, function () {
          o.open(i);
        });t = !0, "left" === g ? (s = { left: p + "px" }, l = { left: "0px" }) : (s = { right: p + "px" }, l = { right: "0px" }), d.is("body") && (u = f.scrollTop(), f.css("overflow-x", "hidden").scrollTop(u)), m ? d.addClass("sidr-animating").css({ width: d.width(), position: "absolute" }).animate(s, h, function () {
          e(this).addClass(b);
        }) : setTimeout(function () {
          e(this).addClass(b);
        }, h), c.css("display", "block").animate(l, h, function () {
          t = !1, n = i, "function" == typeof a && a(i), d.removeClass("sidr-animating");
        }), v();
      } else {
        if (!c.is(":visible") || t) return;t = !0, "left" === g ? (s = { left: 0 }, l = { left: "-" + p + "px" }) : (s = { right: 0 }, l = { right: "-" + p + "px" }), d.is("body") && (u = f.scrollTop(), f.removeAttr("style").scrollTop(u)), d.addClass("sidr-animating").animate(s, h).removeClass(b), c.animate(l, h, function () {
          c.removeAttr("style").hide(), d.removeAttr("style"), e("html").removeAttr("style"), t = !1, n = !1, "function" == typeof a && a(i), d.removeClass("sidr-animating");
        }), y();
      }
    } },
      o = { open: function (e, t) {
      r.execute("open", e, t);
    }, close: function (e, t) {
      r.execute("close", e, t);
    }, toggle: function (e, t) {
      r.execute("toggle", e, t);
    }, toogle: function (e, t) {
      r.execute("toggle", e, t);
    } };e.sidr = function (t) {
    return o[t] ? o[t].apply(this, Array.prototype.slice.call(arguments, 1)) : "function" != typeof t && "string" != typeof t && t ? void e.error("Method " + t + " does not exist on jQuery.sidr") : o.toggle.apply(this, arguments);
  }, e.fn.sidr = function (t) {
    var n = e.extend({ name: "sidr", speed: 200, side: "left", source: null, renaming: !0, body: "body", displace: !0, onOpen: function () {}, onClose: function () {} }, t),
        i = n.name,
        a = e("#" + i);if (0 === a.length && (a = e("<div />").attr("id", i).appendTo(e("body"))), a.addClass("sidr").addClass(n.side).data({ speed: n.speed, side: n.side, body: n.body, displace: n.displace, onOpen: n.onOpen, onClose: n.onClose }), "function" == typeof n.source) {
      var s = n.source(i);r.loadContent(a, s);
    } else if ("string" == typeof n.source && r.isUrl(n.source)) e.get(n.source, function (e) {
      r.loadContent(a, e);
    });else if ("string" == typeof n.source) {
      var l = "",
          u = n.source.split(",");if (e.each(u, function (t, n) {
        l += '<div class="sidr-inner">' + e(n).html() + "</div>";
      }), n.renaming) {
        var c = e("<div />").html(l);c.find("*").each(function (t, n) {
          var o = e(n);r.addPrefix(o);
        }), l = c.html();
      }r.loadContent(a, l);
    } else null !== n.source && e.error("Invalid Sidr Source");return this.each(function () {
      var t = e(this);t.data("sidr") || (t.data("sidr", i), "ontouchstart" in document.documentElement ? (t.bind("touchstart", function (e) {
        e.originalEvent.touches[0], this.touched = e.timeStamp;
      }), t.bind("touchend", function (e) {
        200 > Math.abs(e.timeStamp - this.touched) && (e.preventDefault(), o.toggle(i));
      })) : t.click(function (e) {
        e.preventDefault(), o.toggle(i);
      }));
    });
  };
}(jQuery), function (e, t) {
  "use strict";
  var n = e.History = e.History || {},
      r = e.jQuery;if (void 0 !== n.Adapter) throw new Error("History.js Adapter has already been loaded...");n.Adapter = { bind: function (e, t, n) {
      r(e).bind(t, n);
    }, trigger: function (e, t, n) {
      r(e).trigger(t, n);
    }, extractEventData: function (e, t, n) {
      return t && t.originalEvent && t.originalEvent[e] || n && n[e] || void 0;
    }, onDomLoad: function (e) {
      r(e);
    } }, void 0 !== n.init && n.init();
}(window), function (e, t) {
  "use strict";
  var n = e.console || t,
      r = e.document,
      o = e.navigator,
      i = !1,
      a = e.setTimeout,
      s = e.clearTimeout,
      l = e.setInterval,
      u = e.clearInterval,
      c = e.JSON,
      d = e.alert,
      f = e.History = e.History || {},
      p = e.history;try {
    (i = e.sessionStorage).setItem("TEST", "1"), i.removeItem("TEST");
  } catch (e) {
    i = !1;
  }if (c.stringify = c.stringify || c.encode, c.parse = c.parse || c.decode, void 0 !== f.init) throw new Error("History.js Core has already been loaded...");f.init = function (e) {
    return void 0 !== f.Adapter && (void 0 !== f.initCore && f.initCore(), void 0 !== f.initHtml4 && f.initHtml4(), !0);
  }, f.initCore = function (h) {
    if (void 0 !== f.initCore.initialized) return !1;if (f.initCore.initialized = !0, f.options = f.options || {}, f.options.hashChangeInterval = f.options.hashChangeInterval || 100, f.options.safariPollInterval = f.options.safariPollInterval || 500, f.options.doubleCheckInterval = f.options.doubleCheckInterval || 500, f.options.disableSuid = f.options.disableSuid || !1, f.options.storeInterval = f.options.storeInterval || 1e3, f.options.busyDelay = f.options.busyDelay || 250, f.options.debug = f.options.debug || !1, f.options.initialTitle = f.options.initialTitle || r.title, f.options.html4Mode = f.options.html4Mode || !1, f.options.delayInit = f.options.delayInit || !1, f.intervalList = [], f.clearAllIntervals = function () {
      var e,
          t = f.intervalList;if (void 0 !== t && null !== t) {
        for (e = 0; e < t.length; e++) u(t[e]);f.intervalList = null;
      }
    }, f.debug = function () {
      (f.options.debug || !1) && f.log.apply(f, arguments);
    }, f.log = function () {
      var e,
          t,
          o,
          i,
          a,
          s = void 0 !== n && void 0 !== n.log && void 0 !== n.log.apply,
          l = r.getElementById("log");for (s ? (i = Array.prototype.slice.call(arguments), e = i.shift(), void 0 !== n.debug ? n.debug.apply(n, [e, i]) : n.log.apply(n, [e, i])) : e = "\n" + arguments[0] + "\n", t = 1, o = arguments.length; t < o; ++t) {
        if ("object" == typeof (a = arguments[t]) && void 0 !== c) try {
          a = c.stringify(a);
        } catch (e) {}e += "\n" + a + "\n";
      }return l ? (l.value += e + "\n-----\n", l.scrollTop = l.scrollHeight - l.clientHeight) : s || d(e), !0;
    }, f.getInternetExplorerMajorVersion = function () {
      return f.getInternetExplorerMajorVersion.cached = void 0 !== f.getInternetExplorerMajorVersion.cached ? f.getInternetExplorerMajorVersion.cached : function () {
        for (var e = 3, t = r.createElement("div"), n = t.getElementsByTagName("i"); (t.innerHTML = "\x3c!--[if gt IE " + ++e + "]><i></i><![endif]--\x3e") && n[0];);return e > 4 && e;
      }();
    }, f.isInternetExplorer = function () {
      return f.isInternetExplorer.cached = void 0 !== f.isInternetExplorer.cached ? f.isInternetExplorer.cached : Boolean(f.getInternetExplorerMajorVersion());
    }, f.options.html4Mode ? f.emulated = { pushState: !0, hashChange: !0 } : f.emulated = { pushState: !Boolean(e.history && e.history.pushState && e.history.replaceState && !/ Mobile\/([1-7][a-z]|(8([abcde]|f(1[0-8]))))/i.test(o.userAgent) && !/AppleWebKit\/5([0-2]|3[0-2])/i.test(o.userAgent)), hashChange: Boolean(!("onhashchange" in e || "onhashchange" in r) || f.isInternetExplorer() && f.getInternetExplorerMajorVersion() < 8) }, f.enabled = !f.emulated.pushState, f.bugs = { setHash: Boolean(!f.emulated.pushState && "Apple Computer, Inc." === o.vendor && /AppleWebKit\/5([0-2]|3[0-3])/.test(o.userAgent)), safariPoll: Boolean(!f.emulated.pushState && "Apple Computer, Inc." === o.vendor && /AppleWebKit\/5([0-2]|3[0-3])/.test(o.userAgent)), ieDoubleCheck: Boolean(f.isInternetExplorer() && f.getInternetExplorerMajorVersion() < 8), hashEscape: Boolean(f.isInternetExplorer() && f.getInternetExplorerMajorVersion() < 7) }, f.isEmptyObject = function (e) {
      for (var t in e) if (e.hasOwnProperty(t)) return !1;return !0;
    }, f.cloneObject = function (e) {
      var t, n;return e ? (t = c.stringify(e), n = c.parse(t)) : n = {}, n;
    }, f.getRootUrl = function () {
      var e = r.location.protocol + "//" + (r.location.hostname || r.location.host);return r.location.port && (e += ":" + r.location.port), e += "/";
    }, f.getBaseHref = function () {
      var e = r.getElementsByTagName("base"),
          t = null,
          n = "";return 1 === e.length && (t = e[0], n = t.href.replace(/[^\/]+$/, "")), (n = n.replace(/\/+$/, "")) && (n += "/"), n;
    }, f.getBaseUrl = function () {
      return f.getBaseHref() || f.getBasePageUrl() || f.getRootUrl();
    }, f.getPageUrl = function () {
      return ((f.getState(!1, !1) || {}).url || f.getLocationHref()).replace(/\/+$/, "").replace(/[^\/]+$/, function (e, t, n) {
        return (/\./.test(e) ? e : e + "/"
        );
      });
    }, f.getBasePageUrl = function () {
      return f.getLocationHref().replace(/[#\?].*/, "").replace(/[^\/]+$/, function (e, t, n) {
        return (/[^\/]$/.test(e) ? "" : e
        );
      }).replace(/\/+$/, "") + "/";
    }, f.getFullUrl = function (e, t) {
      var n = e,
          r = e.substring(0, 1);return t = void 0 === t || t, /[a-z]+\:\/\//.test(e) || (n = "/" === r ? f.getRootUrl() + e.replace(/^\/+/, "") : "#" === r ? f.getPageUrl().replace(/#.*/, "") + e : "?" === r ? f.getPageUrl().replace(/[\?#].*/, "") + e : t ? f.getBaseUrl() + e.replace(/^(\.\/)+/, "") : f.getBasePageUrl() + e.replace(/^(\.\/)+/, "")), n.replace(/\#$/, "");
    }, f.getShortUrl = function (e) {
      var t = e,
          n = f.getBaseUrl(),
          r = f.getRootUrl();return f.emulated.pushState && (t = t.replace(n, "")), t = t.replace(r, "/"), f.isTraditionalAnchor(t) && (t = "./" + t), t = t.replace(/^(\.\/)+/g, "./").replace(/\#$/, "");
    }, f.getLocationHref = function (e) {
      return (e = e || r).URL === e.location.href ? e.location.href : e.location.href === decodeURIComponent(e.URL) ? e.URL : e.location.hash && decodeURIComponent(e.location.href.replace(/^[^#]+/, "")) === e.location.hash ? e.location.href : -1 == e.URL.indexOf("#") && -1 != e.location.href.indexOf("#") ? e.location.href : e.URL || e.location.href;
    }, f.store = {}, f.idToState = f.idToState || {}, f.stateToId = f.stateToId || {}, f.urlToId = f.urlToId || {}, f.storedStates = f.storedStates || [], f.savedStates = f.savedStates || [], f.normalizeStore = function () {
      f.store.idToState = f.store.idToState || {}, f.store.urlToId = f.store.urlToId || {}, f.store.stateToId = f.store.stateToId || {};
    }, f.getState = function (e, t) {
      void 0 === e && (e = !0), void 0 === t && (t = !0);var n = f.getLastSavedState();return !n && t && (n = f.createStateObject()), e && (n = f.cloneObject(n), n.url = n.cleanUrl || n.url), n;
    }, f.getIdByState = function (e) {
      var t,
          n = f.extractId(e.url);if (!n) if (t = f.getStateString(e), void 0 !== f.stateToId[t]) n = f.stateToId[t];else if (void 0 !== f.store.stateToId[t]) n = f.store.stateToId[t];else {
        for (; n = new Date().getTime() + String(Math.random()).replace(/\D/g, ""), void 0 !== f.idToState[n] || void 0 !== f.store.idToState[n];);f.stateToId[t] = n, f.idToState[n] = e;
      }return n;
    }, f.normalizeState = function (e) {
      var t, n;return e && "object" == typeof e || (e = {}), void 0 !== e.normalized ? e : (e.data && "object" == typeof e.data || (e.data = {}), t = {}, t.normalized = !0, t.title = e.title || "", t.url = f.getFullUrl(e.url ? e.url : f.getLocationHref()), t.hash = f.getShortUrl(t.url), t.data = f.cloneObject(e.data), t.id = f.getIdByState(t), t.cleanUrl = t.url.replace(/\??\&_suid.*/, ""), t.url = t.cleanUrl, n = !f.isEmptyObject(t.data), (t.title || n) && !0 !== f.options.disableSuid && (t.hash = f.getShortUrl(t.url).replace(/\??\&_suid.*/, ""), /\?/.test(t.hash) || (t.hash += "?"), t.hash += "&_suid=" + t.id), t.hashedUrl = f.getFullUrl(t.hash), (f.emulated.pushState || f.bugs.safariPoll) && f.hasUrlDuplicate(t) && (t.url = t.hashedUrl), t);
    }, f.createStateObject = function (e, t, n) {
      var r = { data: e, title: t, url: n };return r = f.normalizeState(r);
    }, f.getStateById = function (e) {
      return e = String(e), f.idToState[e] || f.store.idToState[e] || t;
    }, f.getStateString = function (e) {
      var t, n;return t = f.normalizeState(e), n = { data: t.data, title: e.title, url: e.url }, c.stringify(n);
    }, f.getStateId = function (e) {
      var t;return t = f.normalizeState(e), t.id;
    }, f.getHashByState = function (e) {
      var t;return t = f.normalizeState(e), t.hash;
    }, f.extractId = function (e) {
      var t, n;return n = -1 != e.indexOf("#") ? e.split("#")[0] : e, t = /(.*)\&_suid=([0-9]+)$/.exec(n), t ? t[1] || e : e, (t ? String(t[2] || "") : "") || !1;
    }, f.isTraditionalAnchor = function (e) {
      return !/[\/\?\.]/.test(e);
    }, f.extractState = function (e, t) {
      var n,
          r,
          o = null;return t = t || !1, (n = f.extractId(e)) && (o = f.getStateById(n)), o || (r = f.getFullUrl(e), (n = f.getIdByUrl(r) || !1) && (o = f.getStateById(n)), !o && t && !f.isTraditionalAnchor(e) && (o = f.createStateObject(null, null, r))), o;
    }, f.getIdByUrl = function (e) {
      return f.urlToId[e] || f.store.urlToId[e] || t;
    }, f.getLastSavedState = function () {
      return f.savedStates[f.savedStates.length - 1] || t;
    }, f.getLastStoredState = function () {
      return f.storedStates[f.storedStates.length - 1] || t;
    }, f.hasUrlDuplicate = function (e) {
      var t;return t = f.extractState(e.url), t && t.id !== e.id;
    }, f.storeState = function (e) {
      return f.urlToId[e.url] = e.id, f.storedStates.push(f.cloneObject(e)), e;
    }, f.isLastSavedState = function (e) {
      var t,
          n,
          r,
          o = !1;return f.savedStates.length && (t = e.id, n = f.getLastSavedState(), r = n.id, o = t === r), o;
    }, f.saveState = function (e) {
      return !f.isLastSavedState(e) && (f.savedStates.push(f.cloneObject(e)), !0);
    }, f.getStateByIndex = function (e) {
      return void 0 === e ? f.savedStates[f.savedStates.length - 1] : e < 0 ? f.savedStates[f.savedStates.length + e] : f.savedStates[e];
    }, f.getCurrentIndex = function () {
      return f.savedStates.length < 1 ? 0 : f.savedStates.length - 1;
    }, f.getHash = function (e) {
      var t = f.getLocationHref(e);return f.getHashByUrl(t);
    }, f.unescapeHash = function (e) {
      var t = f.normalizeHash(e);return t = decodeURIComponent(t);
    }, f.normalizeHash = function (e) {
      return e.replace(/[^#]*#/, "").replace(/#.*/, "");
    }, f.setHash = function (e, t) {
      var n, o;return !1 !== t && f.busy() ? (f.pushQueue({ scope: f, callback: f.setHash, args: arguments, queue: t }), !1) : (f.busy(!0), (n = f.extractState(e, !0)) && !f.emulated.pushState ? f.pushState(n.data, n.title, n.url, !1) : f.getHash() !== e && (f.bugs.setHash ? (o = f.getPageUrl(), f.pushState(null, null, o + "#" + e, !1)) : r.location.hash = e), f);
    }, f.escapeHash = function (t) {
      var n = f.normalizeHash(t);return n = e.encodeURIComponent(n), f.bugs.hashEscape || (n = n.replace(/\%21/g, "!").replace(/\%26/g, "&").replace(/\%3D/g, "=").replace(/\%3F/g, "?")), n;
    }, f.getHashByUrl = function (e) {
      var t = String(e).replace(/([^#]*)#?([^#]*)#?(.*)/, "$2");return t = f.unescapeHash(t);
    }, f.setTitle = function (e) {
      var t,
          n = e.title;n || (t = f.getStateByIndex(0)) && t.url === e.url && (n = t.title || f.options.initialTitle);try {
        r.getElementsByTagName("title")[0].innerHTML = n.replace("<", "&lt;").replace(">", "&gt;").replace(" & ", " &amp; ");
      } catch (e) {}return r.title = n, f;
    }, f.queues = [], f.busy = function (e) {
      if (void 0 !== e ? f.busy.flag = e : void 0 === f.busy.flag && (f.busy.flag = !1), !f.busy.flag) {
        s(f.busy.timeout);var t = function () {
          var e, n, r;if (!f.busy.flag) for (e = f.queues.length - 1; e >= 0; --e) 0 !== (n = f.queues[e]).length && (r = n.shift(), f.fireQueueItem(r), f.busy.timeout = a(t, f.options.busyDelay));
        };f.busy.timeout = a(t, f.options.busyDelay);
      }return f.busy.flag;
    }, f.busy.flag = !1, f.fireQueueItem = function (e) {
      return e.callback.apply(e.scope || f, e.args || []);
    }, f.pushQueue = function (e) {
      return f.queues[e.queue || 0] = f.queues[e.queue || 0] || [], f.queues[e.queue || 0].push(e), f;
    }, f.queue = function (e, t) {
      return "function" == typeof e && (e = { callback: e }), void 0 !== t && (e.queue = t), f.busy() ? f.pushQueue(e) : f.fireQueueItem(e), f;
    }, f.clearQueue = function () {
      return f.busy.flag = !1, f.queues = [], f;
    }, f.stateChanged = !1, f.doubleChecker = !1, f.doubleCheckComplete = function () {
      return f.stateChanged = !0, f.doubleCheckClear(), f;
    }, f.doubleCheckClear = function () {
      return f.doubleChecker && (s(f.doubleChecker), f.doubleChecker = !1), f;
    }, f.doubleCheck = function (e) {
      return f.stateChanged = !1, f.doubleCheckClear(), f.bugs.ieDoubleCheck && (f.doubleChecker = a(function () {
        return f.doubleCheckClear(), f.stateChanged || e(), !0;
      }, f.options.doubleCheckInterval)), f;
    }, f.safariStatePoll = function () {
      var t = f.extractState(f.getLocationHref());if (!f.isLastSavedState(t)) return t || f.createStateObject(), f.Adapter.trigger(e, "popstate"), f;
    }, f.back = function (e) {
      return !1 !== e && f.busy() ? (f.pushQueue({ scope: f, callback: f.back, args: arguments, queue: e }), !1) : (f.busy(!0), f.doubleCheck(function () {
        f.back(!1);
      }), p.go(-1), !0);
    }, f.forward = function (e) {
      return !1 !== e && f.busy() ? (f.pushQueue({ scope: f, callback: f.forward, args: arguments, queue: e }), !1) : (f.busy(!0), f.doubleCheck(function () {
        f.forward(!1);
      }), p.go(1), !0);
    }, f.go = function (e, t) {
      var n;if (e > 0) for (n = 1; n <= e; ++n) f.forward(t);else {
        if (!(e < 0)) throw new Error("History.go: History.go requires a positive or negative integer passed.");for (n = -1; n >= e; --n) f.back(t);
      }return f;
    }, f.emulated.pushState) {
      var g = function () {};f.pushState = f.pushState || g, f.replaceState = f.replaceState || g;
    } else f.onPopState = function (t, n) {
      var r,
          o,
          i = !1,
          a = !1;return f.doubleCheckComplete(), (r = f.getHash()) ? ((o = f.extractState(r || f.getLocationHref(), !0)) ? f.replaceState(o.data, o.title, o.url, !1) : (f.Adapter.trigger(e, "anchorchange"), f.busy(!1)), f.expectedStateId = !1, !1) : (i = f.Adapter.extractEventData("state", t, n) || !1, (a = i ? f.getStateById(i) : f.expectedStateId ? f.getStateById(f.expectedStateId) : f.extractState(f.getLocationHref())) || (a = f.createStateObject(null, null, f.getLocationHref())), f.expectedStateId = !1, f.isLastSavedState(a) ? (f.busy(!1), !1) : (f.storeState(a), f.saveState(a), f.setTitle(a), f.Adapter.trigger(e, "statechange"), f.busy(!1), !0));
    }, f.Adapter.bind(e, "popstate", f.onPopState), f.pushState = function (t, n, r, o) {
      if (f.getHashByUrl(r) && f.emulated.pushState) throw new Error("History.js does not support states with fragement-identifiers (hashes/anchors).");if (!1 !== o && f.busy()) return f.pushQueue({ scope: f, callback: f.pushState, args: arguments, queue: o }), !1;f.busy(!0);var i = f.createStateObject(t, n, r);return f.isLastSavedState(i) ? f.busy(!1) : (f.storeState(i), f.expectedStateId = i.id, p.pushState(i.id, i.title, i.url), f.Adapter.trigger(e, "popstate")), !0;
    }, f.replaceState = function (t, n, r, o) {
      if (f.getHashByUrl(r) && f.emulated.pushState) throw new Error("History.js does not support states with fragement-identifiers (hashes/anchors).");if (!1 !== o && f.busy()) return f.pushQueue({ scope: f, callback: f.replaceState, args: arguments, queue: o }), !1;f.busy(!0);var i = f.createStateObject(t, n, r);return f.isLastSavedState(i) ? f.busy(!1) : (f.storeState(i), f.expectedStateId = i.id, p.replaceState(i.id, i.title, i.url), f.Adapter.trigger(e, "popstate")), !0;
    };if (i) {
      try {
        f.store = c.parse(i.getItem("History.store")) || {};
      } catch (e) {
        f.store = {};
      }f.normalizeStore();
    } else f.store = {}, f.normalizeStore();f.Adapter.bind(e, "unload", f.clearAllIntervals), f.saveState(f.storeState(f.extractState(f.getLocationHref(), !0))), i && (f.onUnload = function () {
      var e, t, n;try {
        e = c.parse(i.getItem("History.store")) || {};
      } catch (t) {
        e = {};
      }e.idToState = e.idToState || {}, e.urlToId = e.urlToId || {}, e.stateToId = e.stateToId || {};for (t in f.idToState) f.idToState.hasOwnProperty(t) && (e.idToState[t] = f.idToState[t]);for (t in f.urlToId) f.urlToId.hasOwnProperty(t) && (e.urlToId[t] = f.urlToId[t]);for (t in f.stateToId) f.stateToId.hasOwnProperty(t) && (e.stateToId[t] = f.stateToId[t]);f.store = e, f.normalizeStore(), n = c.stringify(e);try {
        i.setItem("History.store", n);
      } catch (e) {
        if (e.code !== DOMException.QUOTA_EXCEEDED_ERR) throw e;i.length && (i.removeItem("History.store"), i.setItem("History.store", n));
      }
    }, f.intervalList.push(l(f.onUnload, f.options.storeInterval)), f.Adapter.bind(e, "beforeunload", f.onUnload), f.Adapter.bind(e, "unload", f.onUnload)), f.emulated.pushState || (f.bugs.safariPoll && f.intervalList.push(l(f.safariStatePoll, f.options.safariPollInterval)), "Apple Computer, Inc." !== o.vendor && "Mozilla" !== (o.appCodeName || "") || (f.Adapter.bind(e, "hashchange", function () {
      f.Adapter.trigger(e, "popstate");
    }), f.getHash() && f.Adapter.onDomLoad(function () {
      f.Adapter.trigger(e, "hashchange");
    })));
  }, (!f.options || !f.options.delayInit) && f.init();
}(window), function (e, t, n) {
  function r(e, t) {
    return typeof e === t;
  }function o(e) {
    var t = C.className,
        n = S._config.classPrefix || "";if (T && (t = t.baseVal), S._config.enableJSClass) {
      var r = new RegExp("(^|\\s)" + n + "no-js(\\s|$)");t = t.replace(r, "$1" + n + "js$2");
    }S._config.enableClasses && (t += " " + n + e.join(" " + n), T ? C.className.baseVal = t : C.className = t);
  }function i() {
    return "function" != typeof t.createElement ? t.createElement(arguments[0]) : T ? t.createElementNS.call(t, "http://www.w3.org/2000/svg", arguments[0]) : t.createElement.apply(t, arguments);
  }function a(e, t) {
    return !!~("" + e).indexOf(t);
  }function s(e, t) {
    if ("object" == typeof e) for (var n in e) k(e, n) && s(n, e[n]);else {
      var r = (e = e.toLowerCase()).split("."),
          i = S[r[0]];if (2 == r.length && (i = i[r[1]]), void 0 !== i) return S;t = "function" == typeof t ? t() : t, 1 == r.length ? S[r[0]] = t : (!S[r[0]] || S[r[0]] instanceof Boolean || (S[r[0]] = new Boolean(S[r[0]])), S[r[0]][r[1]] = t), o([(t && 0 != t ? "" : "no-") + r.join("-")]), S._trigger(e, t);
    }return S;
  }function l() {
    var e = t.body;return e || ((e = i(T ? "svg" : "body")).fake = !0), e;
  }function u(e, n, r, o) {
    var a,
        s,
        u,
        c,
        d = "modernizr",
        f = i("div"),
        p = l();if (parseInt(r, 10)) for (; r--;) (u = i("div")).id = o ? o[r] : d + (r + 1), f.appendChild(u);return a = i("style"), a.type = "text/css", a.id = "s" + d, (p.fake ? p : f).appendChild(a), p.appendChild(f), a.styleSheet ? a.styleSheet.cssText = e : a.appendChild(t.createTextNode(e)), f.id = d, p.fake && (p.style.background = "", p.style.overflow = "hidden", c = C.style.overflow, C.style.overflow = "hidden", C.appendChild(p)), s = n(f, e), p.fake ? (p.parentNode.removeChild(p), C.style.overflow = c, C.offsetHeight) : f.parentNode.removeChild(f), !!s;
  }function c(e) {
    return e.replace(/([a-z])-([a-z])/g, function (e, t, n) {
      return t + n.toUpperCase();
    }).replace(/^-/, "");
  }function d(e, t) {
    return function () {
      return e.apply(t, arguments);
    };
  }function f(e, t, n) {
    var o;for (var i in e) if (e[i] in t) return !1 === n ? e[i] : (o = t[e[i]], r(o, "function") ? d(o, n || t) : o);return !1;
  }function p(e) {
    return e.replace(/([A-Z])/g, function (e, t) {
      return "-" + t.toLowerCase();
    }).replace(/^ms-/, "-ms-");
  }function h(t, n, r) {
    var o;if ("getComputedStyle" in e) {
      o = getComputedStyle.call(e, t, n);var i = e.console;null !== o ? r && (o = o.getPropertyValue(r)) : i && i[i.error ? "error" : "log"].call(i, "getComputedStyle returning null, its possible modernizr test results are inaccurate");
    } else o = !n && t.currentStyle && t.currentStyle[r];return o;
  }function g(t, r) {
    var o = t.length;if ("CSS" in e && "supports" in e.CSS) {
      for (; o--;) if (e.CSS.supports(p(t[o]), r)) return !0;return !1;
    }if ("CSSSupportsRule" in e) {
      for (var i = []; o--;) i.push("(" + p(t[o]) + ":" + r + ")");return i = i.join(" or "), u("@supports (" + i + ") { #modernizr { position: absolute; } }", function (e) {
        return "absolute" == h(e, null, "position");
      });
    }return n;
  }function m(e, t, o, s) {
    function l() {
      d && (delete I.style, delete I.modElem);
    }if (s = !r(s, "undefined") && s, !r(o, "undefined")) {
      var u = g(e, o);if (!r(u, "undefined")) return u;
    }for (var d, f, p, h, m, v = ["modernizr", "tspan", "samp"]; !I.style && v.length;) d = !0, I.modElem = i(v.shift()), I.style = I.modElem.style;for (p = e.length, f = 0; f < p; f++) if (h = e[f], m = I.style[h], a(h, "-") && (h = c(h)), I.style[h] !== n) {
      if (s || r(o, "undefined")) return l(), "pfx" != t || h;try {
        I.style[h] = o;
      } catch (e) {}if (I.style[h] != m) return l(), "pfx" != t || h;
    }return l(), !1;
  }function v(e, t, n, o, i) {
    var a = e.charAt(0).toUpperCase() + e.slice(1),
        s = (e + " " + E.join(a + " ") + a).split(" ");return r(t, "string") || r(t, "undefined") ? m(s, t, o, i) : (s = (e + " " + N.join(a + " ") + a).split(" "), f(s, t, n));
  }function y(e, t, r) {
    return v(e, n, n, t, r);
  }var b = [],
      x = [],
      w = { _version: "3.6.0", _config: { classPrefix: "", enableClasses: !0, enableJSClass: !0, usePrefixes: !0 }, _q: [], on: function (e, t) {
      var n = this;setTimeout(function () {
        t(n[e]);
      }, 0);
    }, addTest: function (e, t, n) {
      x.push({ name: e, fn: t, options: n });
    }, addAsyncTest: function (e) {
      x.push({ name: null, fn: e });
    } },
      S = function () {};S.prototype = w, (S = new S()).addTest("svg", !!t.createElementNS && !!t.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect), S.addTest("localstorage", function () {
    var e = "modernizr";try {
      return localStorage.setItem(e, e), localStorage.removeItem(e), !0;
    } catch (e) {
      return !1;
    }
  });var C = t.documentElement,
      T = "svg" === C.nodeName.toLowerCase();S.addTest("canvas", function () {
    var e = i("canvas");return !(!e.getContext || !e.getContext("2d"));
  }), S.addTest("webgl", function () {
    var t = i("canvas"),
        n = "probablySupportsContext" in t ? "probablySupportsContext" : "supportsContext";return n in t ? t[n]("webgl") || t[n]("experimental-webgl") : "WebGLRenderingContext" in e;
  }), S.addTest("rgba", function () {
    var e = i("a").style;return e.cssText = "background-color:rgba(150,255,150,.5)", ("" + e.backgroundColor).indexOf("rgba") > -1;
  }), S.addTest("inlinesvg", function () {
    var e = i("div");return e.innerHTML = "<svg/>", "http://www.w3.org/2000/svg" == ("undefined" != typeof SVGRect && e.firstChild && e.firstChild.namespaceURI);
  });var A = w._config.usePrefixes ? " -webkit- -moz- -o- -ms- ".split(" ") : ["", ""];w._prefixes = A, S.addTest("hsla", function () {
    var e = i("a").style;return e.cssText = "background-color:hsla(120,40%,100%,.5)", a(e.backgroundColor, "rgba") || a(e.backgroundColor, "hsla");
  });var k;!function () {
    var e = {}.hasOwnProperty;k = r(e, "undefined") || r(e.call, "undefined") ? function (e, t) {
      return t in e && r(e.constructor.prototype[t], "undefined");
    } : function (t, n) {
      return e.call(t, n);
    };
  }(), w._l = {}, w.on = function (e, t) {
    this._l[e] || (this._l[e] = []), this._l[e].push(t), S.hasOwnProperty(e) && setTimeout(function () {
      S._trigger(e, S[e]);
    }, 0);
  }, w._trigger = function (e, t) {
    if (this._l[e]) {
      var n = this._l[e];setTimeout(function () {
        var e;for (e = 0; e < n.length; e++) (0, n[e])(t);
      }, 0), delete this._l[e];
    }
  }, S._q.push(function () {
    w.addTest = s;
  }), S.addAsyncTest(function () {
    function e(e, t, n) {
      function r(t) {
        var r = !(!t || "load" !== t.type) && 1 == o.width;s(e, "webp" === e && r ? new Boolean(r) : r), n && n(t);
      }var o = new Image();o.onerror = r, o.onload = r, o.src = t;
    }var t = [{ uri: "data:image/webp;base64,UklGRiQAAABXRUJQVlA4IBgAAAAwAQCdASoBAAEAAwA0JaQAA3AA/vuUAAA=", name: "webp" }, { uri: "data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA==", name: "webp.alpha" }, { uri: "data:image/webp;base64,UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA", name: "webp.animation" }, { uri: "data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA=", name: "webp.lossless" }],
        n = t.shift();e(n.name, n.uri, function (n) {
      if (n && "load" === n.type) for (var r = 0; r < t.length; r++) e(t[r].name, t[r].uri);
    });
  });var _ = w.testStyles = u;S.addTest("touchevents", function () {
    var n;if ("ontouchstart" in e || e.DocumentTouch && t instanceof DocumentTouch) n = !0;else {
      var r = ["@media (", A.join("touch-enabled),("), "heartz", ")", "{#modernizr{top:9px;position:absolute}}"].join("");_(r, function (e) {
        n = 9 === e.offsetTop;
      });
    }return n;
  }), function () {
    var e = navigator.userAgent,
        t = e.match(/w(eb)?osbrowser/gi),
        n = e.match(/windows phone/gi) && e.match(/iemobile\/([0-9])+/gi) && parseFloat(RegExp.$1) >= 9;return t || n;
  }() ? S.addTest("fontface", !1) : _('@font-face {font-family:"font";src:url("https://")}', function (e, n) {
    var r = t.getElementById("smodernizr"),
        o = r.sheet || r.styleSheet,
        i = o ? o.cssRules && o.cssRules[0] ? o.cssRules[0].cssText : o.cssText || "" : "",
        a = /src/i.test(i) && 0 === i.indexOf(n.split(" ")[0]);S.addTest("fontface", a);
  });var E = w._config.usePrefixes ? "Moz O ms Webkit".split(" ") : [];w._cssomPrefixes = E;var N = w._config.usePrefixes ? "Moz O ms Webkit".toLowerCase().split(" ") : [];w._domPrefixes = N;var j = { elem: i("modernizr") };S._q.push(function () {
    delete j.elem;
  });var I = { style: j.elem.style };S._q.unshift(function () {
    delete I.style;
  }), w.testAllProps = v, w.testAllProps = y, S.addTest("backgroundsize", y("backgroundSize", "100%", !0)), S.addTest("flexbox", y("flexBasis", "1px", !0)), S.addTest("flexboxlegacy", y("boxDirection", "reverse", !0)), function () {
    var e, t, n, o, i, a;for (var s in x) if (x.hasOwnProperty(s)) {
      if (e = [], (t = x[s]).name && (e.push(t.name.toLowerCase()), t.options && t.options.aliases && t.options.aliases.length)) for (n = 0; n < t.options.aliases.length; n++) e.push(t.options.aliases[n].toLowerCase());for (o = r(t.fn, "function") ? t.fn() : t.fn, i = 0; i < e.length; i++) 1 === (a = e[i].split(".")).length ? S[a[0]] = o : (!S[a[0]] || S[a[0]] instanceof Boolean || (S[a[0]] = new Boolean(S[a[0]])), S[a[0]][a[1]] = o), b.push((o ? "" : "no-") + a.join("-"));
    }
  }(), o(b), delete w.addTest, delete w.addAsyncTest;for (var D = 0; D < S._q.length; D++) S._q[D]();e.Modernizr = S;
}(window, document), ready_callbacks.push(function () {
  function e(e) {
    var t = new RegExp("[?&]" + e + "(=([^&#]*)|&|#|$)").exec(window.location.href);return t ? t[2] ? decodeURIComponent(t[2].replace(/\+/g, " ")) : "" : null;
  }function t(e) {
    $.ajax({ url: window.region_url + "popup_size/" + e }).done(function (t) {
      promo_popup(e, t);
    });
  }var n = e("promo_popup");if (n) return t(n), !0;if (n = e("promo_banner")) return function (e) {
    $.ajax({ url: window.region_url + "getBanner/" + e }).done(function (e) {
      $("#promo_block_top").remove(), $(body).prepend(e), init_promo_banner();
    });
  }(n), !0;if (void 0 !== window.dataLayer && !1 !== window.dataLayer && void 0 !== window.dataLayer[0].promotion_popup_firsttime && parseInt(window.dataLayer[0].promotion_popup_firsttime)) {
    var r = window.dataLayer[0].promotion_active;promo_get_cookie("promo_" + r) || (promo_set_cookie("promo_" + r, window.dataLayer[0].promotion_valid), t(r));
  }init_promo_banner();
}), $.fn.uniform = function () {
  return this;
}, void 0 === $.fn.magnificPopup && ($.fn.magnificPopup = function () {
  return this;
}), $.fn.initQTip = function () {
  return this;
}, $.fn.qtip = function () {
  return this;
}, $.fn.DefaultValue = function (e) {
  return this.attr("placeholder", e);
}, $.fn.iosRefresh = function () {
  return this.each(function () {
    this.style.display = "none", this.offsetHeight, this.style.display = "";
  });
}, $.fn.disableOptions = function (e) {
  return this;
}, $(window).resize(resize_fix), ready_callbacks.push(resize_fix), ready_callbacks.push(function () {
  $("#mobile-menu-trigger").sidr({ name: "mobile-menu", side: "left", onOpen: function () {
      $("#menu_body_hidder").show(), $("#footer").addClass("hidden_footer");
    }, onClose: function () {
      $("#menu_body_hidder").hide(), $("#footer").removeClass("hidden_footer");
    } }), $("#mobile-menu-step").sidr({ name: "mobile-menu", side: "left", speed: 300, onOpen: function () {
      $("#menu_body_hidder").show(), $("#footer").addClass("hidden_footer");
    }, onClose: function () {
      $("#menu_body_hidder").hide(), $("#footer").removeClass("hidden_footer");
    } }), $("#menu_body_hidder").click(function () {
    $.sidr("close", "mobile-menu");
  }).bind("touchstart", function () {
    return $.sidr("close", "mobile-menu"), !1;
  });var e = !1;if ($("#mobile-menu a.dropdown").click(function () {
    return e != this.parentNode && ($("ul.subnav", this.parentNode).slideDown(), e && $("ul.subnav", e).slideUp(), e = this.parentNode, !1);
  }), $("#mobile-menu span.ds_link").click(function () {
    $(this).hasClass("parent") ? $("ul.subnav", this.parentNode).slideToggle() : window.open(this.getAttribute("rel"), "_self");
  }), $("#mobile-cart-trigger.no_click").click(function () {
    return !1;
  }), $("span.ds_link, div.ds_link").click(function () {
    var e = this.getAttribute("href");return "" != e && e || (e = this.getAttribute("rel")), !("" == e || !e) && ("_blank" == this.getAttribute("target") ? (window.open(e), !1) : (window.location = e, !1));
  }), $("#aboutuspopup").length && (setTimeout(function () {
    $("#aboutuspopup").slideDown();
  }, 300), $("#aboutuspopup .mfp-close").click(function () {
    $("#aboutuspopup").slideUp();
  })), $("#register_input_footer").length) {
    var t = $("#register_input_footer");t.focus(function () {
      $("#footer p.send").hide(), $("#privacy_label.region_required").css("display", "block");
    }), $("#register_newsletter").click(function () {
      dataLayer ? dataLayer.push({ event: "send", eventCategory: "Engagement", eventAction: "AltaNewsletter" }) : ga("send", "event", { eventCategory: "Engagement", eventAction: "AltaNewsletter" });var e = $("#form_register_newsletter").find("#privacy_label.region_required #privacy");if (!t.val() || 0 != e.length && !e.prop("checked")) return t.val() || t.css("border-color", "#b8513a"), e.prop("checked") || e.parents("#privacy_label").find("p.error").css({ display: "inline-block" }), !1;$("#form_register_newsletter").submit();
    }), $("#privacy_label.region_required #privacy").change(function () {
      var e = $(this),
          t = e.parents("#privacy_label").find(".error");e.prop("checked") ? t.css({ display: "none" }) : t.css({ display: "inline-block" });
    });
  }
}), ready_callbacks.push(function () {
  var e = {};if (document.location.search) for (var t = parent.document.location.search, n = ("?" === t[0] ? t.substr(1) : t).split("&"), r = 0; r < n.length; r++) {
    var o = n[r].split("=");e[decodeURIComponent(o[0])] = decodeURIComponent(o[1] || "");
  }var i = !1;if (void 0 !== e.utm_source && e.utm_source) i = { s: e.utm_source, m: void 0 !== e.utm_medium ? e.utm_medium : "", c: void 0 !== e.utm_campaign ? e.utm_campaign : "", filter: void 0 !== e.utm_filter ? e.utm_filter : "" };else if (parent.document.referrer && -1 == parent.document.referrer.indexOf("//" + document.domain)) {
    var a = { amp: "ampproject.org", google: "google.", bing: "bing.", yahoo: "yahoo.", yandex: "yandex.", facebook: "facebook.", twitter: "twitter.", instagram: "instagram.", pinterest: "pinterest.", sumissura: "sumissura.com", tailor4less: "tailor4less.com", hockerty: "hockerty." },
        s = "other";for (var l in a) if (parent.document.referrer.indexOf(a[l]) > -1) {
      s = l;break;
    }i = { s: s, m: "organic", c: "referrer", filter: "" };
  }if (!i) return !1;var u = "organic" == i.m ? "-r" : "";if ("google" == i.s || "bing" == i.s || -1 !== i.s.indexOf("facebook")) {
    var c = { "-rmk": "RMK", "-display": "DIS", "-shopping": "SHO", "-gmail": "GMAIL", "-similarusers": "SIM", "-txt": "TXT", "-acq": "ACQ", "-ret": "RET" };for (var d in c) if (-1 != i.c.indexOf(c[d])) {
      u = d, "" == i.filter && void 0 !== e.utm_filter && (i.filter = e.utm_filter);break;
    }"-txt" == u && (-1 != i.c.indexOf("Brand") ? u = "-txt-branding" : -1 != i.c.toLowerCase().indexOf("custom") && (u = "-txt-custom"));
  }i.s += u, "" !== i.filter && "" !== i.c && (i.s += "-" + i.filter), -1 !== i.s.indexOf("facebook") && 0 === i.c.indexOf("IG") && (i.s = i.s.replace("facebook", "instagram"));var f = ("; " + document.cookie).split("; leadsource="),
      p = 2 == f.length && f.pop().split(";").shift();if (p && (p = JSON.parse(p)), "object" != typeof p && (p = {}), p) {
    if (void 0 === p.f) {
      var h = new Date();i.utc = Math.floor(h.getTime() / 1e3) - 60 * h.getTimezoneOffset(), p.f = i;
    } else p.l = i;var g = new Date();g.setTime(g.getTime() + 31536e6), document.cookie = "leadsource=" + JSON.stringify(p) + "; expires= " + g.toUTCString() + "; path=/";
  }
});var headerMenu = function (e) {
  this.target = e, this.domain = $(e).data("domain"), this.appended = !1, $("ul", e).length && (this.appended = !0), this.menu = { ENGLISH: { en: { USA: "en-us", Canada: "en-ca", "United Kingdom": "en-uk", Australia: "en-au", Ireland: "en-ie", Switzerland: "en-ch", Others: "en" } }, "ESPAÑOL": { es: { "España": "es", "Estados Unidos": "es-us", "México": "es-mx", Otros: "es" } }, "FRANÇAIS": { fr: { France: "fr", Belgique: "fr-be", Suisse: "fr-ch", Canada: "fr-ca" } }, DEUTSCH: { de: { Deutschland: "de", "Österreich": "de-at", Schweiz: "de-ch" } }, ITALIANO: { it: { Italia: "it", Svizzera: "it-ch" } }, "РУССКИЙ": { po: { Russia: "ru" } } };
};headerMenu.prototype.append = function () {
  if (!this.appended) {
    this.appended = !0;var e = "";this.domain;$.each(this.menu, function (t, n) {
      $.each(n, function (n, r) {
        e += "<ul class='" + n + "'>", e += "<li class='title'><span>" + t + "</span></li>", $.each(r, function (t, n) {
          var r = "/" + n + "/",
              o = $('link[rel="alternate"][hreflang="' + n + '"]').first(),
              i = $(o).attr("href");i && (r = i.replace("/select_language", "/")), e += "<li><span rel='" + r + "' class='ds_link'>" + t + "</span></li>";
        }), e += "</ul>";
      });
    }), $(this.target).append(e);
  }
};var hMenu = new headerMenu("#language_selector");$("#change_region_link").click(function (e) {
  hMenu.append();
}), "sumissura" === hMenu.domain && hMenu.append(), ready_callbacks.push(function () {
  var e = -1 == document.cookie.indexOf("noticeSuggest");if (e) {
    var t = {};if (document.location.search) for (var n = document.location.search, r = ("?" === n[0] ? n.substr(1) : n).split("&"), o = 0; o < r.length; o++) {
      var i = r[o].split("=");t[decodeURIComponent(i[0])] = decodeURIComponent(i[1] || "");
    }void 0 !== t.utm_source && "facebook_ads" == t.utm_source && (e = !1);
  }if (e) {
    var a = !1;$.getJSON("https://" + window.document.domain + region_url + "customer/suggestRegion", { v: "8Duc5RlyU])5F2Y" }, function (e) {
      if (e.ok && !a && (a = !0, mobile_enabled ? $("body").prepend(e.html) : $("body").append(e.html), $("#changeRegion").slideDown(), e.suggest)) {
        var t = JSON.parse(e.suggest),
            n = $('link[rel="alternate"][hreflang="' + t.region + '"]').first().attr("href");n && $(".button-red", "#changeRegion").attr("href", n + "?suggestRegion=1");
      }
    }), $("body").on("click", ".close_suggest, .changeRegionBox .close", function (e) {
      e.preventDefault(), mobile_enabled ? $("#changeRegion").slideUp() : $("#changeRegion").hide();
    });
  }
}), function () {
  var e = {};this.tmpl = function t(n, r) {
    var o = /\W/.test(n) ? new Function("obj", "var p=[],print=function(){p.push.apply(p,arguments);};with(obj){p.push('" + n.replace(/[\r\t\n]/g, " ").replace(/'(?=[^%]*%>)/g, "\t").split("'").join("\\'").split("\t").join("'").replace(/<%=(.+?)%>/g, "',$1,'").split("<%").join("');").split("%>").join("p.push('") + "');}return p.join('');") : e[n] = e[n] || t(document.getElementById(n).innerHTML);return r ? o(r) : o;
  };
}(), "undefined" == typeof Storage && (window.localStorage = { setItem: function (e, t) {}, getItem: function (e) {}, removeItem: function (e) {}, clear: function () {} }), window.getStoredCart = function () {
  var e = localStorage.getItem("cart");if (!e && "null" != e) return !1;try {
    if ((e = JSON.parse(e)) && Object.keys(e).length > 0) return e;
  } catch (e) {}return !1;
}, window.getStoredCustomer = function () {
  var e = localStorage.getItem("customer");if (!e && "null" != e) return !1;try {
    if ((e = JSON.parse(e)) && Object.keys(e).length > 0) return e;
  } catch (e) {}return !1;
}, window.getStoredCustomerTemp = function () {
  var e = localStorage.getItem("customer_temp");if (!e && "null" != e) return !1;try {
    if ((e = JSON.parse(e)) && Object.keys(e).length > 0) return e;
  } catch (e) {}return !1;
}, ready_callbacks.push(function () {
  if (void 0 !== window.localStorageUpdate) for (var e in localStorageUpdate) localStorage.setItem(e, "object" == typeof localStorageUpdate[e] ? JSON.stringify(localStorageUpdate[e]) : localStorageUpdate[e]);var t = getStoredCart(),
      n = 0,
      r = 0;if (t && t.products && region_url.split("/").join("") === t.region) {
    if (n = Object.keys(t.products).length, r = t.total, n > 0) ;else {
      var o = "";o = -1 !== window.location.host.indexOf("sumissura") ? '<div class="circle">A<span class="qty_' + n + '">' + n + "</span></div>" : '<div class="circle"><span class="qty_' + n + '">' + n + "</span></div>", $("#cart-trigger", "#mini_cart_container").prepend(o);var i = {};if ($("#mini_cart_tmpl").length) {
        c = tmpl("mini_cart_tmpl", i);$("#mini_cart_container").append(c);
      }if ($("#mini_cart_products_tmpl").length) {
        var a = { n_productos: n, cart_products: Object.values(t.products), cart: t },
            s = tmpl("mini_cart_products_tmpl", a);-1 !== window.location.host.indexOf("sumissura") ? $(".cart li", "#mini_cart_container").prepend(s) : $(".slider_product", "#mini_cart_container").prepend(s);
      }
    }
  } else mobile_enabled ? $("#mobile-cart-trigger").html("") : $("#cart-trigger .circle", "#mini_cart_container").remove();dataLayer.push({ cart_n_products: 0 | n, cart_price: r });var l = getStoredCustomer();if (l) {
    if ($("#header_logged").length) {
      var u = { customer: l },
          c = tmpl("header_logged", u);$(".toolbar_login").append(c);
    }dataLayer.push({ customer_logged: l.vuser ? 0 : 1, customer_id: l.id_shop_customer, customer_email: l.email, customer_segment: l.customer_segment, customer_n_orders: l.t4l_n_orders, customer_samples: l.t4l_samples, customer_last_order: l.t4l_last_order });
  } else if ($("#header_logged").length) {
    c = tmpl("header_login", []);$(".toolbar_login").append(c);
  }var d = localStorage.getItem("isAdmin");d = JSON.parse(d), dataLayer.push({ isAdmin: 1 == d });
});