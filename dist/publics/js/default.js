function normalize(e) {
  for (var t = "ÃÀÁÄÂÈÉËÊÌÍÏÎÒÓÖÔÙÚÜÛãàáäâèéëêìíïîòóöôùúüûÑñÇç", n = {}, r = 0, i = t.length; r < i; r++) n[t.charAt(r)] = "AAAAAEEEEIIIIOOOOUUUUaaaaaeeeeiiiioooouuuuNnCc".charAt(r);for (var o = [], r = 0, i = e.length; r < i; r++) {
    var a = e.charAt(r);n.hasOwnProperty(e.charAt(r)) ? o.push(n[a]) : o.push(a);
  }return o.join("");
}function promo_set_cookie(e, t) {
  "string" == typeof t && (t = new Date(t)), t.setHours(23), t.setMinutes(59), t.setSeconds(59), document.cookie = e + "=1; expires=" + t.toUTCString() + "; path=/";
}function promo_get_cookie(e) {
  for (var t = e + "=", n = document.cookie.split(";"), r = 0; r < n.length; r++) {
    for (var i = n[r]; " " == i.charAt(0);) i = i.substring(1);if (0 == i.indexOf(t)) return i.substring(t.length, i.length);
  }return "";
}function promo_popup(e, t) {
  if (window.mobile_enabled) {
    var n = $("#popup_object");n.length || (n = $('<div class="mobile_popup"><iframe></iframe></div>').appendTo("body"), window.popup_object_close = function () {
      n.hide(), $(".body, footer, .reviews, .bar_promotion, .body").show();
    }), n.find("iframe").attr("src", window.region_url + "promo_popup/" + e), n.show(), $(".body, footer, .reviews, .bar_promotion, .body").hide();
  } else {
    var r = 540,
        i = 540;if (t) {
      var o = t.split("x");(r = o[0]) && (r += "px"), o.length > 1 && (i = o[1] + "px");
    }$.magnificPopup.open({ items: { src: window.region_url + "promo_popup/" + e }, closeMarkup: '<button title="Close (Esc)" type="button" class="mfp-close">v</button>', mainClass: "promo_popup", type: "iframe", callbacks: { open: function () {
          $(".promo_popup .mfp-content").css({ "max-width": r, "min-width": r, height: i });
        } } });
  }
}function init_promo_banner() {
  var e = $("#promo_block_top");$(".close, .show", e).click(function () {
    return e.toggleClass("banner"), !1;
  }), e.click(function () {
    return $(this).hasClass("banner") && e.removeClass("banner"), !1;
  });
}function resolution_steps() {
  return $(window).width() > 1440 ? "" : "_1440";
}function formatMoney(e, t, n, r) {
  e = e || 0, t = isNaN(t = Math.abs(t)) ? 2 : t, n = "RUB" != window.currency ? n || "," : n || "", r = r || ".";var i = e < 0 ? "-" : "",
      o = parseInt(e = Math.abs(+e || 0).toFixed(t), 10) + "",
      a = (a = o.length) > 3 ? a % 3 : 0,
      s = Math.abs(e - o).toFixed(t).slice(2);return "00" == s ? i + (a ? o.substr(0, a) + n : "") + o.substr(a).replace(/(\d{3})(?=\d)/g, "$1" + n) : i + (a ? o.substr(0, a) + n : "") + o.substr(a).replace(/(\d{3})(?=\d)/g, "$1" + n) + (t ? r + s : "");
}function formatPrice(e, t) {
  var n = "";switch (t) {case "configure":default:
      switch (window.currency) {case "EUR":
          n = formatMoney(e, 2, ".", ",") + "<small>€</small>";break;case "USD":
          n = "<small>$</small>" + formatMoney(e, 2, ",", "."), "/en-ca/" != window.region_url && "/fr-ca/" != window.region_url || (n += '<small style="font-size: 50%">USD</small>');break;case "GBP":
          n = "<small>£</small>" + formatMoney(e, 2, ",", ".");break;case "RMB":
          n = formatMoney(e, 2, "", ".") + "<small>元</small>";break;case "AUD":
          n = "<small>AU$</small>" + formatMoney(e, 2, ",", ".");break;case "RUB":
          n = formatMoney(e, 2, "", ".") + "<small>p</small>";break;case "MXN":
          n = "<small>MX$</small>" + formatMoney(e, 2, ",", ".");break;case "CHF":
          n = "<small>CHF </small>" + formatMoney(e, 2, "'", ".");break;default:
          n = formatMoney(e) + "<small>" + window.currency + "</small>";}}return n;
}function createSlideshow(e, t, n, r) {
  function i(e) {
    if (e < 1) return !1;if (e > u) return !1;s && (s.find("a").each(function (t) {
      switch (this.getAttribute("rel")) {case "back":
          this.className = e > 1 ? "go back" : "disabled back";break;case "next":
          this.className = e < u ? "go next" : "disabled next";break;default:
          this.className = "go";}
    }).get(e).className = "current"), l.animate({ left: -t * (e - 1) }, 750), d = 1 * e;if (u > c) {
      var n = 7 - d;n > 0 && (n = 0), n < -(c - 4) && (n = -(c - 4)), s.find("div.content_pages").animate({ left: 35 * n + "px" }, "fast");
    }
  }var o = $(e),
      a = o.find(".page"),
      s = o.find("div.slider_paginator");s.length || (s = !1);var l = o.find("div.slider_box"),
      u = a.length,
      c = 12,
      d = -1;if (t || (t = a.eq(0).width()), s && u) {
    if (r) {
      if (u > c) f = '<div class="box_back left"><a href="javascript:;" class="back" rel="back"><span>&lt;</span></a></div>';else f = '<div class="box_back"><a href="javascript:;" class="back" rel="back"><span>&lt;</span></a></div>';f += u > c ? '<div class="pages middle"><div class="content_pages">' : '<div class="pages">';for (p = 0; p < u; p++) f += '<a href="javascript:;" class="go" rel="' + (p + 1) + '">' + (p + 1) + "</a>";f += u > c ? "</div></div>" : "</div>", f += u > c ? '<div class="box_next right"><a href="javascript:;" class="next" rel="next"><span>&gt;</span></a></div>' : '<div class="box_next"><a href="javascript:;" class="next" rel="next"><span>&gt;</span></a></div>', s.html(f).find("a").click(function () {
        if ($(this).hasClass("disabled")) return !1;var e = this.getAttribute("rel");return "back" == e ? i(d - 1) : "next" == e ? i(d + 1) : void i(e);
      });
    } else {
      for (var f = '<a href="javascript:;" class="go back" rel="back"><span>&lt;</span></a>', p = 0; p < u; p++) f += '<a href="javascript:;" class="go" rel="' + (p + 1) + '">' + (p + 1) + "</a>";f += '<a href="javascript:;" class="go next" rel="next"><span>&gt;</span></a>', s.html(f).find("a").click(function () {
        if ($(this).hasClass("disabled")) return !1;var e = this.getAttribute("rel");return "back" == e ? i(d - 1) : "next" == e ? i(d + 1) : void i(e);
      });
    }
  } else {
    var h;(h = o.find("span.next")) && h.click(function () {
      return i(d + 1);
    }), (h = o.find("span.prev")) && h.click(function () {
      return i(d - 1);
    });
  }if (n) i(n);else {
    var m = o.find("div.selected").closest(".page").index();i(m > -1 ? m + 1 : 1);
  }
}function isValidCharacterInitials(e) {
  if (void 0 !== e.charCode && (e = e.charCode), "0" == e) return !0;if ("object" == typeof e && "0" == (e = e.which)) return !0;var t = /[a-zA-Z0-9.\s /<>,;:"'`!@#%^&*(){}\-_+=|-~¬ºª¡\[\]^`´ç¨·]/g;return !!String.fromCharCode(e).match(t);
}function applyHButton(e) {
  return !0;
}function initTooltips(e) {
  "function" == typeof e.tooltip ? e.tooltip({ html: '<table class="box"><tr><td class="tl"></td><td class="tc"></td><td class="tr"></td></tr><tr><td class="cl"></td><td class="cc" id="tooltip_content"></td><td class="cr"></td></tr><tr><td class="bl"></td><td class="bc"></td><td class="br"></td></tr></table>' }) : e.each(function () {
    var e = $(this).attr("title").replace(/<br\s?\/?>/g, " ").replace(/<\/?\s?[^>]*>/g, "");$(this).attr("title", e);
  });
}function initQTip(e) {
  e.qtip({ mode: "above" });
}function force_region_callback(e) {
  return $.get(window.region_url + "set_user_region/" + e.getAttribute("rel")), $("#redirect_to").slideUp(), !1;
}function resize_menu_width() {
  var e = [],
      t = { safe_margin: 100, logo: 155, logo_small: 60, right: $("#toolbar .right").outerWidth(!0) },
      n = [],
      r = 2;$(window).width() <= 1e3 && (r += 6);var i = $("#toolbar .left li.main").each(function () {
    if (e.push($(this).width() + r), "other" != this.getAttribute("rel")) {
      var t = $("a:eq(0)", this),
          i = t.text();-1 !== t.html().indexOf('<span class="new">NEW</span>') && (i = i.replace("NEW", '<span class="new">NEW</span>')), n.push('<li class="hidden"><a class="subnav_titles" href="' + t.attr("href") + '">' + i + '</a></li><li class="split split2 hidden"></li>');
    }
  }),
      o = i.filter(".last");o.hasClass("sumissura_title") && (o = i.filter("li").slice(-2)), i = i.not(o);var a = $(n.join(""));o.find("ul.subnav").prepend(a), $(window).resize(function () {
    var n = $(window).width();n < 650 && (n = 600), n > 700 && n < 800 && (n = 700), n > 1440 && (n = 1440);var r = n - t.logo - t.right - t.safe_margin;n <= 1e3 && (r = r + t.logo - t.logo_small);for (var o = 0, s = 0; o + e[s] < r && s < e.length;) o += e[s], n <= 1e3 && (o -= 6), s++;i.hide().prev(".sep").hide(), i.slice(0, s).show().prev(".sep").show(), a.hide().slice(2 * s).show();
  }), $(window).trigger("resize"), $("#toolbar").css("overflow", "visible");
}!function (e, t) {
  function n(e) {
    var t = e.length,
        n = ue.type(e);return !ue.isWindow(e) && (!(1 !== e.nodeType || !t) || "array" === n || "function" !== n && (0 === t || "number" == typeof t && t > 0 && t - 1 in e));
  }function r(e) {
    var t = _e[e] = {};return ue.each(e.match(de) || [], function (e, n) {
      t[n] = !0;
    }), t;
  }function i(e, n, r, i) {
    if (ue.acceptData(e)) {
      var o,
          a,
          s = ue.expando,
          l = e.nodeType,
          u = l ? ue.cache : e,
          c = l ? e[s] : e[s] && s;if (c && u[c] && (i || u[c].data) || r !== t || "string" != typeof n) return c || (c = l ? e[s] = ee.pop() || ue.guid++ : s), u[c] || (u[c] = l ? {} : { toJSON: ue.noop }), ("object" == typeof n || "function" == typeof n) && (i ? u[c] = ue.extend(u[c], n) : u[c].data = ue.extend(u[c].data, n)), a = u[c], i || (a.data || (a.data = {}), a = a.data), r !== t && (a[ue.camelCase(n)] = r), "string" == typeof n ? null == (o = a[n]) && (o = a[ue.camelCase(n)]) : o = a, o;
    }
  }function o(e, t, n) {
    if (ue.acceptData(e)) {
      var r,
          i,
          o = e.nodeType,
          a = o ? ue.cache : e,
          l = o ? e[ue.expando] : ue.expando;if (a[l]) {
        if (t && (r = n ? a[l] : a[l].data)) {
          ue.isArray(t) ? t = t.concat(ue.map(t, ue.camelCase)) : t in r ? t = [t] : (t = ue.camelCase(t), t = t in r ? [t] : t.split(" ")), i = t.length;for (; i--;) delete r[t[i]];if (n ? !s(r) : !ue.isEmptyObject(r)) return;
        }(n || (delete a[l].data, s(a[l]))) && (o ? ue.cleanData([e], !0) : ue.support.deleteExpando || a != a.window ? delete a[l] : a[l] = null);
      }
    }
  }function a(e, n, r) {
    if (r === t && 1 === e.nodeType) {
      var i = "data-" + n.replace(Ae, "-$1").toLowerCase();if ("string" == typeof (r = e.getAttribute(i))) {
        try {
          r = "true" === r || "false" !== r && ("null" === r ? null : +r + "" === r ? +r : Te.test(r) ? ue.parseJSON(r) : r);
        } catch (e) {}ue.data(e, n, r);
      } else r = t;
    }return r;
  }function s(e) {
    var t;for (t in e) if (("data" !== t || !ue.isEmptyObject(e[t])) && "toJSON" !== t) return !1;return !0;
  }function l() {
    return !0;
  }function u() {
    return !1;
  }function c() {
    try {
      return G.activeElement;
    } catch (e) {}
  }function d(e, t) {
    do {
      e = e[t];
    } while (e && 1 !== e.nodeType);return e;
  }function f(e, t, n) {
    if (ue.isFunction(t)) return ue.grep(e, function (e, r) {
      return !!t.call(e, r, e) !== n;
    });if (t.nodeType) return ue.grep(e, function (e) {
      return e === t !== n;
    });if ("string" == typeof t) {
      if (qe.test(t)) return ue.filter(t, e, n);t = ue.filter(t, e);
    }return ue.grep(e, function (e) {
      return ue.inArray(e, t) >= 0 !== n;
    });
  }function p(e) {
    var t = Ue.split("|"),
        n = e.createDocumentFragment();if (n.createElement) for (; t.length;) n.createElement(t.pop());return n;
  }function h(e, t) {
    return ue.nodeName(e, "table") && ue.nodeName(1 === t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e;
  }function m(e) {
    return e.type = (null !== ue.find.attr(e, "type")) + "/" + e.type, e;
  }function g(e) {
    var t = rt.exec(e.type);return t ? e.type = t[1] : e.removeAttribute("type"), e;
  }function v(e, t) {
    for (var n, r = 0; null != (n = e[r]); r++) ue._data(n, "globalEval", !t || ue._data(t[r], "globalEval"));
  }function y(e, t) {
    if (1 === t.nodeType && ue.hasData(e)) {
      var n,
          r,
          i,
          o = ue._data(e),
          a = ue._data(t, o),
          s = o.events;if (s) {
        delete a.handle, a.events = {};for (n in s) for (r = 0, i = s[n].length; i > r; r++) ue.event.add(t, n, s[n][r]);
      }a.data && (a.data = ue.extend({}, a.data));
    }
  }function b(e, t) {
    var n, r, i;if (1 === t.nodeType) {
      if (n = t.nodeName.toLowerCase(), !ue.support.noCloneEvent && t[ue.expando]) {
        i = ue._data(t);for (r in i.events) ue.removeEvent(t, r, i.handle);t.removeAttribute(ue.expando);
      }"script" === n && t.text !== e.text ? (m(t).text = e.text, g(t)) : "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML), ue.support.html5Clone && e.innerHTML && !ue.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && et.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : "option" === n ? t.defaultSelected = t.selected = e.defaultSelected : ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue);
    }
  }function x(e, n) {
    var r,
        i,
        o = 0,
        a = typeof e.getElementsByTagName !== V ? e.getElementsByTagName(n || "*") : typeof e.querySelectorAll !== V ? e.querySelectorAll(n || "*") : t;if (!a) for (a = [], r = e.childNodes || e; null != (i = r[o]); o++) !n || ue.nodeName(i, n) ? a.push(i) : ue.merge(a, x(i, n));return n === t || n && ue.nodeName(e, n) ? ue.merge([e], a) : a;
  }function w(e) {
    et.test(e.type) && (e.defaultChecked = e.checked);
  }function C(e, t) {
    if (t in e) return t;for (var n = t.charAt(0).toUpperCase() + t.slice(1), r = t, i = Ct.length; i--;) if ((t = Ct[i] + n) in e) return t;return r;
  }function k(e, t) {
    return e = t || e, "none" === ue.css(e, "display") || !ue.contains(e.ownerDocument, e);
  }function _(e, t) {
    for (var n, r, i, o = [], a = 0, s = e.length; s > a; a++) (r = e[a]).style && (o[a] = ue._data(r, "olddisplay"), n = r.style.display, t ? (o[a] || "none" !== n || (r.style.display = ""), "" === r.style.display && k(r) && (o[a] = ue._data(r, "olddisplay", E(r.nodeName)))) : o[a] || (i = k(r), (n && "none" !== n || !i) && ue._data(r, "olddisplay", i ? n : ue.css(r, "display"))));for (a = 0; s > a; a++) (r = e[a]).style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? o[a] || "" : "none"));return e;
  }function T(e, t, n) {
    var r = mt.exec(t);return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t;
  }function A(e, t, n, r, i) {
    for (var o = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0, a = 0; 4 > o; o += 2) "margin" === n && (a += ue.css(e, n + wt[o], !0, i)), r ? ("content" === n && (a -= ue.css(e, "padding" + wt[o], !0, i)), "margin" !== n && (a -= ue.css(e, "border" + wt[o] + "Width", !0, i))) : (a += ue.css(e, "padding" + wt[o], !0, i), "padding" !== n && (a += ue.css(e, "border" + wt[o] + "Width", !0, i)));return a;
  }function S(e, t, n) {
    var r = !0,
        i = "width" === t ? e.offsetWidth : e.offsetHeight,
        o = lt(e),
        a = ue.support.boxSizing && "border-box" === ue.css(e, "boxSizing", !1, o);if (0 >= i || null == i) {
      if ((0 > (i = ut(e, t, o)) || null == i) && (i = e.style[t]), gt.test(i)) return i;r = a && (ue.support.boxSizingReliable || i === e.style[t]), i = parseFloat(i) || 0;
    }return i + A(e, t, n || (a ? "border" : "content"), r, o) + "px";
  }function E(e) {
    var t = G,
        n = yt[e];return n || ("none" !== (n = N(e, t)) && n || (st = (st || ue("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(t.documentElement), (t = (st[0].contentWindow || st[0].contentDocument).document).write("<!doctype html><html><body>"), t.close(), n = N(e, t), st.detach()), yt[e] = n), n;
  }function N(e, t) {
    var n = ue(t.createElement(e)).appendTo(t.body),
        r = ue.css(n[0], "display");return n.remove(), r;
  }function F(e, t, n, r) {
    var i;if (ue.isArray(t)) ue.each(t, function (t, i) {
      n || _t.test(e) ? r(e, i) : F(e + "[" + ("object" == typeof i ? t : "") + "]", i, n, r);
    });else if (n || "object" !== ue.type(t)) r(e, t);else for (i in t) F(e + "[" + i + "]", t[i], n, r);
  }function j(e) {
    return function (t, n) {
      "string" != typeof t && (n = t, t = "*");var r,
          i = 0,
          o = t.toLowerCase().match(de) || [];if (ue.isFunction(n)) for (; r = o[i++];) "+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n);
    };
  }function D(e, n, r, i) {
    function o(l) {
      var u;return a[l] = !0, ue.each(e[l] || [], function (e, l) {
        var c = l(n, r, i);return "string" != typeof c || s || a[c] ? s ? !(u = c) : t : (n.dataTypes.unshift(c), o(c), !1);
      }), u;
    }var a = {},
        s = e === qt;return o(n.dataTypes[0]) || !a["*"] && o("*");
  }function L(e, n) {
    var r,
        i,
        o = ue.ajaxSettings.flatOptions || {};for (i in n) n[i] !== t && ((o[i] ? e : r || (r = {}))[i] = n[i]);return r && ue.extend(!0, e, r), e;
  }function $(e, n, r) {
    for (var i, o, a, s, l = e.contents, u = e.dataTypes; "*" === u[0];) u.shift(), o === t && (o = e.mimeType || n.getResponseHeader("Content-Type"));if (o) for (s in l) if (l[s] && l[s].test(o)) {
      u.unshift(s);break;
    }if (u[0] in r) a = u[0];else {
      for (s in r) {
        if (!u[0] || e.converters[s + " " + u[0]]) {
          a = s;break;
        }i || (i = s);
      }a = a || i;
    }return a ? (a !== u[0] && u.unshift(a), r[a]) : t;
  }function I(e, t, n, r) {
    var i,
        o,
        a,
        s,
        l,
        u = {},
        c = e.dataTypes.slice();if (c[1]) for (a in e.converters) u[a.toLowerCase()] = e.converters[a];for (o = c.shift(); o;) if (e.responseFields[o] && (n[e.responseFields[o]] = t), !l && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = o, o = c.shift()) if ("*" === o) o = l;else if ("*" !== l && l !== o) {
      if (!(a = u[l + " " + o] || u["* " + o])) for (i in u) if ((s = i.split(" "))[1] === o && (a = u[l + " " + s[0]] || u["* " + s[0]])) {
        !0 === a ? a = u[i] : !0 !== u[i] && (o = s[0], c.unshift(s[1]));break;
      }if (!0 !== a) if (a && e.throws) t = a(t);else try {
        t = a(t);
      } catch (e) {
        return { state: "parsererror", error: a ? e : "No conversion from " + l + " to " + o };
      }
    }return { state: "success", data: t };
  }function O() {
    try {
      return new e.XMLHttpRequest();
    } catch (e) {}
  }function M() {
    try {
      return new e.ActiveXObject("Microsoft.XMLHTTP");
    } catch (e) {}
  }function P() {
    return setTimeout(function () {
      Gt = t;
    }), Gt = ue.now();
  }function z(e, t, n) {
    for (var r, i = (tn[t] || []).concat(tn["*"]), o = 0, a = i.length; a > o; o++) if (r = i[o].call(n, t, e)) return r;
  }function H(e, t, n) {
    var r,
        i,
        o = 0,
        a = en.length,
        s = ue.Deferred().always(function () {
      delete l.elem;
    }),
        l = function () {
      if (i) return !1;for (var t = Gt || P(), n = Math.max(0, u.startTime + u.duration - t), r = 1 - (n / u.duration || 0), o = 0, a = u.tweens.length; a > o; o++) u.tweens[o].run(r);return s.notifyWith(e, [u, r, n]), 1 > r && a ? n : (s.resolveWith(e, [u]), !1);
    },
        u = s.promise({ elem: e, props: ue.extend({}, t), opts: ue.extend(!0, { specialEasing: {} }, n), originalProperties: t, originalOptions: n, startTime: Gt || P(), duration: n.duration, tweens: [], createTween: function (t, n) {
        var r = ue.Tween(e, u.opts, t, n, u.opts.specialEasing[t] || u.opts.easing);return u.tweens.push(r), r;
      }, stop: function (t) {
        var n = 0,
            r = t ? u.tweens.length : 0;if (i) return this;for (i = !0; r > n; n++) u.tweens[n].run(1);return t ? s.resolveWith(e, [u, t]) : s.rejectWith(e, [u, t]), this;
      } }),
        c = u.props;for (q(c, u.opts.specialEasing); a > o; o++) if (r = en[o].call(u, e, c, u.opts)) return r;return ue.map(c, z, u), ue.isFunction(u.opts.start) && u.opts.start.call(e, u), ue.fx.timer(ue.extend(l, { elem: e, anim: u, queue: u.opts.queue })), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always);
  }function q(e, t) {
    var n, r, i, o, a;for (n in e) if (r = ue.camelCase(n), i = t[r], o = e[n], ue.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), (a = ue.cssHooks[r]) && "expand" in a) {
      o = a.expand(o), delete e[r];for (n in o) n in e || (e[n] = o[n], t[n] = i);
    } else t[r] = i;
  }function R(e, t, n, r, i) {
    return new R.prototype.init(e, t, n, r, i);
  }function B(e, t) {
    var n,
        r = { height: e },
        i = 0;for (t = t ? 1 : 0; 4 > i; i += 2 - t) n = wt[i], r["margin" + n] = r["padding" + n] = e;return t && (r.opacity = r.width = e), r;
  }function W(e) {
    return ue.isWindow(e) ? e : 9 === e.nodeType && (e.defaultView || e.parentWindow);
  }var U,
      Q,
      V = typeof t,
      X = e.location,
      G = e.document,
      J = G.documentElement,
      Z = e.jQuery,
      Y = e.$,
      K = {},
      ee = [],
      te = "1.10.0",
      ne = ee.concat,
      re = ee.push,
      ie = ee.slice,
      oe = ee.indexOf,
      ae = K.toString,
      se = K.hasOwnProperty,
      le = te.trim,
      ue = function (e, t) {
    return new ue.fn.init(e, t, Q);
  },
      ce = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
      de = /\S+/g,
      fe = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
      pe = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
      he = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
      me = /^[\],:{}\s]*$/,
      ge = /(?:^|:|,)(?:\s*\[)+/g,
      ve = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
      ye = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,
      be = /^-ms-/,
      xe = /-([\da-z])/gi,
      we = function (e, t) {
    return t.toUpperCase();
  },
      Ce = function (e) {
    (G.addEventListener || "load" === e.type || "complete" === G.readyState) && (ke(), ue.ready());
  },
      ke = function () {
    G.addEventListener ? (G.removeEventListener("DOMContentLoaded", Ce, !1), e.removeEventListener("load", Ce, !1)) : (G.detachEvent("onreadystatechange", Ce), e.detachEvent("onload", Ce));
  };ue.fn = ue.prototype = { jquery: te, constructor: ue, init: function (e, n, r) {
      var i, o;if (!e) return this;if ("string" == typeof e) {
        if (!(i = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : pe.exec(e)) || !i[1] && n) return !n || n.jquery ? (n || r).find(e) : this.constructor(n).find(e);if (i[1]) {
          if (n = n instanceof ue ? n[0] : n, ue.merge(this, ue.parseHTML(i[1], n && n.nodeType ? n.ownerDocument || n : G, !0)), he.test(i[1]) && ue.isPlainObject(n)) for (i in n) ue.isFunction(this[i]) ? this[i](n[i]) : this.attr(i, n[i]);return this;
        }if ((o = G.getElementById(i[2])) && o.parentNode) {
          if (o.id !== i[2]) return r.find(e);this.length = 1, this[0] = o;
        }return this.context = G, this.selector = e, this;
      }return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : ue.isFunction(e) ? r.ready(e) : (e.selector !== t && (this.selector = e.selector, this.context = e.context), ue.makeArray(e, this));
    }, selector: "", length: 0, toArray: function () {
      return ie.call(this);
    }, get: function (e) {
      return null == e ? this.toArray() : 0 > e ? this[this.length + e] : this[e];
    }, pushStack: function (e) {
      var t = ue.merge(this.constructor(), e);return t.prevObject = this, t.context = this.context, t;
    }, each: function (e, t) {
      return ue.each(this, e, t);
    }, ready: function (e) {
      return ue.ready.promise().done(e), this;
    }, slice: function () {
      return this.pushStack(ie.apply(this, arguments));
    }, first: function () {
      return this.eq(0);
    }, last: function () {
      return this.eq(-1);
    }, eq: function (e) {
      var t = this.length,
          n = +e + (0 > e ? t : 0);return this.pushStack(n >= 0 && t > n ? [this[n]] : []);
    }, map: function (e) {
      return this.pushStack(ue.map(this, function (t, n) {
        return e.call(t, n, t);
      }));
    }, end: function () {
      return this.prevObject || this.constructor(null);
    }, push: re, sort: [].sort, splice: [].splice }, ue.fn.init.prototype = ue.fn, ue.extend = ue.fn.extend = function () {
    var e,
        n,
        r,
        i,
        o,
        a,
        s = arguments[0] || {},
        l = 1,
        u = arguments.length,
        c = !1;for ("boolean" == typeof s && (c = s, s = arguments[1] || {}, l = 2), "object" == typeof s || ue.isFunction(s) || (s = {}), u === l && (s = this, --l); u > l; l++) if (null != (o = arguments[l])) for (i in o) e = s[i], r = o[i], s !== r && (c && r && (ue.isPlainObject(r) || (n = ue.isArray(r))) ? (n ? (n = !1, a = e && ue.isArray(e) ? e : []) : a = e && ue.isPlainObject(e) ? e : {}, s[i] = ue.extend(c, a, r)) : r !== t && (s[i] = r));return s;
  }, ue.extend({ expando: "jQuery" + (te + Math.random()).replace(/\D/g, ""), noConflict: function (t) {
      return e.$ === ue && (e.$ = Y), t && e.jQuery === ue && (e.jQuery = Z), ue;
    }, isReady: !1, readyWait: 1, holdReady: function (e) {
      e ? ue.readyWait++ : ue.ready(!0);
    }, ready: function (e) {
      if (!0 === e ? ! --ue.readyWait : !ue.isReady) {
        if (!G.body) return setTimeout(ue.ready);ue.isReady = !0, !0 !== e && --ue.readyWait > 0 || (U.resolveWith(G, [ue]), ue.fn.trigger && ue(G).trigger("ready").off("ready"));
      }
    }, isFunction: function (e) {
      return "function" === ue.type(e);
    }, isArray: Array.isArray || function (e) {
      return "array" === ue.type(e);
    }, isWindow: function (e) {
      return null != e && e == e.window;
    }, isNumeric: function (e) {
      return !isNaN(parseFloat(e)) && isFinite(e);
    }, type: function (e) {
      return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? K[ae.call(e)] || "object" : typeof e;
    }, isPlainObject: function (e) {
      var n;if (!e || "object" !== ue.type(e) || e.nodeType || ue.isWindow(e)) return !1;try {
        if (e.constructor && !se.call(e, "constructor") && !se.call(e.constructor.prototype, "isPrototypeOf")) return !1;
      } catch (e) {
        return !1;
      }if (ue.support.ownLast) for (n in e) return se.call(e, n);for (n in e);return n === t || se.call(e, n);
    }, isEmptyObject: function (e) {
      var t;for (t in e) return !1;return !0;
    }, error: function (e) {
      throw Error(e);
    }, parseHTML: function (e, t, n) {
      if (!e || "string" != typeof e) return null;"boolean" == typeof t && (n = t, t = !1), t = t || G;var r = he.exec(e),
          i = !n && [];return r ? [t.createElement(r[1])] : (r = ue.buildFragment([e], t, i), i && ue(i).remove(), ue.merge([], r.childNodes));
    }, parseJSON: function (n) {
      return e.JSON && e.JSON.parse ? e.JSON.parse(n) : null === n ? n : "string" == typeof n && (n = ue.trim(n)) && me.test(n.replace(ve, "@").replace(ye, "]").replace(ge, "")) ? Function("return " + n)() : (ue.error("Invalid JSON: " + n), t);
    }, parseXML: function (n) {
      var r, i;if (!n || "string" != typeof n) return null;try {
        e.DOMParser ? (i = new DOMParser(), r = i.parseFromString(n, "text/xml")) : (r = new ActiveXObject("Microsoft.XMLDOM"), r.async = "false", r.loadXML(n));
      } catch (e) {
        r = t;
      }return r && r.documentElement && !r.getElementsByTagName("parsererror").length || ue.error("Invalid XML: " + n), r;
    }, noop: function () {}, globalEval: function (t) {
      t && ue.trim(t) && (e.execScript || function (t) {
        e.eval.call(e, t);
      })(t);
    }, camelCase: function (e) {
      return e.replace(be, "ms-").replace(xe, we);
    }, nodeName: function (e, t) {
      return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
    }, each: function (e, t, r) {
      var i = 0,
          o = e.length,
          a = n(e);if (r) {
        if (a) for (; o > i && !1 !== t.apply(e[i], r); i++);else for (i in e) if (!1 === t.apply(e[i], r)) break;
      } else if (a) for (; o > i && !1 !== t.call(e[i], i, e[i]); i++);else for (i in e) if (!1 === t.call(e[i], i, e[i])) break;return e;
    }, trim: le && !le.call("\ufeff ") ? function (e) {
      return null == e ? "" : le.call(e);
    } : function (e) {
      return null == e ? "" : (e + "").replace(fe, "");
    }, makeArray: function (e, t) {
      var r = t || [];return null != e && (n(Object(e)) ? ue.merge(r, "string" == typeof e ? [e] : e) : re.call(r, e)), r;
    }, inArray: function (e, t, n) {
      var r;if (t) {
        if (oe) return oe.call(t, e, n);for (r = t.length, n = n ? 0 > n ? Math.max(0, r + n) : n : 0; r > n; n++) if (n in t && t[n] === e) return n;
      }return -1;
    }, merge: function (e, n) {
      var r = n.length,
          i = e.length,
          o = 0;if ("number" == typeof r) for (; r > o; o++) e[i++] = n[o];else for (; n[o] !== t;) e[i++] = n[o++];return e.length = i, e;
    }, grep: function (e, t, n) {
      var r,
          i = [],
          o = 0,
          a = e.length;for (n = !!n; a > o; o++) r = !!t(e[o], o), n !== r && i.push(e[o]);return i;
    }, map: function (e, t, r) {
      var i,
          o = 0,
          a = e.length,
          s = [];if (n(e)) for (; a > o; o++) null != (i = t(e[o], o, r)) && (s[s.length] = i);else for (o in e) null != (i = t(e[o], o, r)) && (s[s.length] = i);return ne.apply([], s);
    }, guid: 1, proxy: function (e, n) {
      var r, i, o;return "string" == typeof n && (o = e[n], n = e, e = o), ue.isFunction(e) ? (r = ie.call(arguments, 2), i = function () {
        return e.apply(n || this, r.concat(ie.call(arguments)));
      }, i.guid = e.guid = e.guid || ue.guid++, i) : t;
    }, access: function (e, n, r, i, o, a, s) {
      var l = 0,
          u = e.length,
          c = null == r;if ("object" === ue.type(r)) {
        o = !0;for (l in r) ue.access(e, n, l, r[l], !0, a, s);
      } else if (i !== t && (o = !0, ue.isFunction(i) || (s = !0), c && (s ? (n.call(e, i), n = null) : (c = n, n = function (e, t, n) {
        return c.call(ue(e), n);
      })), n)) for (; u > l; l++) n(e[l], r, s ? i : i.call(e[l], l, n(e[l], r)));return o ? e : c ? n.call(e) : u ? n(e[0], r) : a;
    }, now: function () {
      return new Date().getTime();
    }, swap: function (e, t, n, r) {
      var i,
          o,
          a = {};for (o in t) a[o] = e.style[o], e.style[o] = t[o];i = n.apply(e, r || []);for (o in t) e.style[o] = a[o];return i;
    } }), ue.ready.promise = function (t) {
    if (!U) if (U = ue.Deferred(), "complete" === G.readyState) setTimeout(ue.ready);else if (G.addEventListener) G.addEventListener("DOMContentLoaded", Ce, !1), e.addEventListener("load", Ce, !1);else {
      G.attachEvent("onreadystatechange", Ce), e.attachEvent("onload", Ce);var n = !1;try {
        n = null == e.frameElement && G.documentElement;
      } catch (e) {}n && n.doScroll && function e() {
        if (!ue.isReady) {
          try {
            n.doScroll("left");
          } catch (t) {
            return setTimeout(e, 50);
          }ke(), ue.ready();
        }
      }();
    }return U.promise(t);
  }, ue.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (e, t) {
    K["[object " + t + "]"] = t.toLowerCase();
  }), Q = ue(G), function (e, t) {
    function n(e, t, n, r) {
      var i, o, a, s, l, u, c, d, f, m;if ((t ? t.ownerDocument || t : R) !== $ && L(t), t = t || $, n = n || [], !e || "string" != typeof e) return n;if (1 !== (s = t.nodeType) && 9 !== s) return [];if (O && !r) {
        if (i = we.exec(e)) if (a = i[1]) {
          if (9 === s) {
            if (!(o = t.getElementById(a)) || !o.parentNode) return n;if (o.id === a) return n.push(o), n;
          } else if (t.ownerDocument && (o = t.ownerDocument.getElementById(a)) && H(t, o) && o.id === a) return n.push(o), n;
        } else {
          if (i[2]) return ne.apply(n, t.getElementsByTagName(e)), n;if ((a = i[3]) && T.getElementsByClassName && t.getElementsByClassName) return ne.apply(n, t.getElementsByClassName(a)), n;
        }if (T.qsa && (!M || !M.test(e))) {
          if (d = c = q, f = t, m = 9 === s && e, 1 === s && "object" !== t.nodeName.toLowerCase()) {
            for (u = p(e), (c = t.getAttribute("id")) ? d = c.replace(_e, "\\$&") : t.setAttribute("id", d), d = "[id='" + d + "'] ", l = u.length; l--;) u[l] = d + h(u[l]);f = me.test(e) && t.parentNode || t, m = u.join(",");
          }if (m) try {
            return ne.apply(n, f.querySelectorAll(m)), n;
          } catch (e) {} finally {
            c || t.removeAttribute("id");
          }
        }
      }return C(e.replace(fe, "$1"), t, n, r);
    }function r(e) {
      return xe.test(e + "");
    }function i() {
      function e(n, r) {
        return t.push(n += " ") > S.cacheLength && delete e[t.shift()], e[n] = r;
      }var t = [];return e;
    }function o(e) {
      return e[q] = !0, e;
    }function a(e) {
      var t = $.createElement("div");try {
        return !!e(t);
      } catch (e) {
        return !1;
      } finally {
        t.parentNode && t.parentNode.removeChild(t), t = null;
      }
    }function s(e, t, n) {
      for (var r, i = (e = e.split("|")).length, o = n ? null : t; i--;) (r = S.attrHandle[e[i]]) && r !== t || (S.attrHandle[e[i]] = o);
    }function l(e, t) {
      var n = e.getAttributeNode(t);return n && n.specified ? n.value : !0 === e[t] ? t.toLowerCase() : null;
    }function u(e, t) {
      return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
    }function c(e) {
      return "input" === e.nodeName.toLowerCase() ? e.defaultValue : t;
    }function d(e, t) {
      var n = t && e,
          r = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || Z) - (~e.sourceIndex || Z);if (r) return r;if (n) for (; n = n.nextSibling;) if (n === t) return -1;return e ? 1 : -1;
    }function f(e) {
      return o(function (t) {
        return t = +t, o(function (n, r) {
          for (var i, o = e([], n.length, t), a = o.length; a--;) n[i = o[a]] && (n[i] = !(r[i] = n[i]));
        });
      });
    }function p(e, t) {
      var r,
          i,
          o,
          a,
          s,
          l,
          u,
          c = Q[e + " "];if (c) return t ? 0 : c.slice(0);for (s = e, l = [], u = S.preFilter; s;) {
        (!r || (i = pe.exec(s))) && (i && (s = s.slice(i[0].length) || s), l.push(o = [])), r = !1, (i = he.exec(s)) && (r = i.shift(), o.push({ value: r, type: i[0].replace(fe, " ") }), s = s.slice(r.length));for (a in S.filter) !(i = be[a].exec(s)) || u[a] && !(i = u[a](i)) || (r = i.shift(), o.push({ value: r, type: a, matches: i }), s = s.slice(r.length));if (!r) break;
      }return t ? s.length : s ? n.error(e) : Q(e, l).slice(0);
    }function h(e) {
      for (var t = 0, n = e.length, r = ""; n > t; t++) r += e[t].value;return r;
    }function m(e, t, n) {
      var r = t.dir,
          i = n && "parentNode" === r,
          o = W++;return t.first ? function (t, n, o) {
        for (; t = t[r];) if (1 === t.nodeType || i) return e(t, n, o);
      } : function (t, n, a) {
        var s,
            l,
            u,
            c = B + " " + o;if (a) {
          for (; t = t[r];) if ((1 === t.nodeType || i) && e(t, n, a)) return !0;
        } else for (; t = t[r];) if (1 === t.nodeType || i) if (u = t[q] || (t[q] = {}), (l = u[r]) && l[0] === c) {
          if (!0 === (s = l[1]) || s === A) return !0 === s;
        } else if (l = u[r] = [c], l[1] = e(t, n, a) || A, !0 === l[1]) return !0;
      };
    }function g(e) {
      return e.length > 1 ? function (t, n, r) {
        for (var i = e.length; i--;) if (!e[i](t, n, r)) return !1;return !0;
      } : e[0];
    }function v(e, t, n, r, i) {
      for (var o, a = [], s = 0, l = e.length, u = null != t; l > s; s++) (o = e[s]) && (!n || n(o, r, i)) && (a.push(o), u && t.push(s));return a;
    }function y(e, t, n, r, i, a) {
      return r && !r[q] && (r = y(r)), i && !i[q] && (i = y(i, a)), o(function (o, a, s, l) {
        var u,
            c,
            d,
            f = [],
            p = [],
            h = a.length,
            m = o || w(t || "*", s.nodeType ? [s] : s, []),
            g = !e || !o && t ? m : v(m, f, e, s, l),
            y = n ? i || (o ? e : h || r) ? [] : a : g;if (n && n(g, y, s, l), r) for (u = v(y, p), r(u, [], s, l), c = u.length; c--;) (d = u[c]) && (y[p[c]] = !(g[p[c]] = d));if (o) {
          if (i || e) {
            if (i) {
              for (u = [], c = y.length; c--;) (d = y[c]) && u.push(g[c] = d);i(null, y = [], u, l);
            }for (c = y.length; c--;) (d = y[c]) && (u = i ? ie.call(o, d) : f[c]) > -1 && (o[u] = !(a[u] = d));
          }
        } else y = v(y === a ? y.splice(h, y.length) : y), i ? i(null, a, y, l) : ne.apply(a, y);
      });
    }function b(e) {
      for (var t, n, r, i = e.length, o = S.relative[e[0].type], a = o || S.relative[" "], s = o ? 1 : 0, l = m(function (e) {
        return e === t;
      }, a, !0), u = m(function (e) {
        return ie.call(t, e) > -1;
      }, a, !0), c = [function (e, n, r) {
        return !o && (r || n !== j) || ((t = n).nodeType ? l(e, n, r) : u(e, n, r));
      }]; i > s; s++) if (n = S.relative[e[s].type]) c = [m(g(c), n)];else {
        if ((n = S.filter[e[s].type].apply(null, e[s].matches))[q]) {
          for (r = ++s; i > r && !S.relative[e[r].type]; r++);return y(s > 1 && g(c), s > 1 && h(e.slice(0, s - 1).concat({ value: " " === e[s - 2].type ? "*" : "" })).replace(fe, "$1"), n, r > s && b(e.slice(s, r)), i > r && b(e = e.slice(r)), i > r && h(e));
        }c.push(n);
      }return g(c);
    }function x(e, t) {
      var r = 0,
          i = t.length > 0,
          a = e.length > 0,
          s = function (o, s, l, u, c) {
        var d,
            f,
            p,
            h = [],
            m = 0,
            g = "0",
            y = o && [],
            b = null != c,
            x = j,
            w = o || a && S.find.TAG("*", c && s.parentNode || s),
            C = B += null == x ? 1 : Math.random() || .1;for (b && (j = s !== $ && s, A = r); null != (d = w[g]); g++) {
          if (a && d) {
            for (f = 0; p = e[f++];) if (p(d, s, l)) {
              u.push(d);break;
            }b && (B = C, A = ++r);
          }i && ((d = !p && d) && m--, o && y.push(d));
        }if (m += g, i && g !== m) {
          for (f = 0; p = t[f++];) p(y, h, s, l);if (o) {
            if (m > 0) for (; g--;) y[g] || h[g] || (h[g] = ee.call(u));h = v(h);
          }ne.apply(u, h), b && !o && h.length > 0 && m + t.length > 1 && n.uniqueSort(u);
        }return b && (B = C, j = x), y;
      };return i ? o(s) : s;
    }function w(e, t, r) {
      for (var i = 0, o = t.length; o > i; i++) n(e, t[i], r);return r;
    }function C(e, t, n, r) {
      var i,
          o,
          a,
          s,
          l,
          u = p(e);if (!r && 1 === u.length) {
        if ((o = u[0] = u[0].slice(0)).length > 2 && "ID" === (a = o[0]).type && T.getById && 9 === t.nodeType && O && S.relative[o[1].type]) {
          if (!(t = (S.find.ID(a.matches[0].replace(Te, Ae), t) || [])[0])) return n;e = e.slice(o.shift().value.length);
        }for (i = be.needsContext.test(e) ? 0 : o.length; i-- && (a = o[i], !S.relative[s = a.type]);) if ((l = S.find[s]) && (r = l(a.matches[0].replace(Te, Ae), me.test(o[0].type) && t.parentNode || t))) {
          if (o.splice(i, 1), !(e = r.length && h(o))) return ne.apply(n, r), n;break;
        }
      }return F(e, u)(r, t, !O, n, me.test(e)), n;
    }function k() {}var _,
        T,
        A,
        S,
        E,
        N,
        F,
        j,
        D,
        L,
        $,
        I,
        O,
        M,
        P,
        z,
        H,
        q = "sizzle" + -new Date(),
        R = e.document,
        B = 0,
        W = 0,
        U = i(),
        Q = i(),
        V = i(),
        X = !1,
        G = function () {
      return 0;
    },
        J = typeof t,
        Z = 1 << 31,
        Y = {}.hasOwnProperty,
        K = [],
        ee = K.pop,
        te = K.push,
        ne = K.push,
        re = K.slice,
        ie = K.indexOf || function (e) {
      for (var t = 0, n = this.length; n > t; t++) if (this[t] === e) return t;return -1;
    },
        oe = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
        ae = "[\\x20\\t\\r\\n\\f]",
        se = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
        le = se.replace("w", "w#"),
        ce = "\\[" + ae + "*(" + se + ")" + ae + "*(?:([*^$|!~]?=)" + ae + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + le + ")|)|)" + ae + "*\\]",
        de = ":(" + se + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + ce.replace(3, 8) + ")*)|.*)\\)|)",
        fe = RegExp("^" + ae + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ae + "+$", "g"),
        pe = RegExp("^" + ae + "*," + ae + "*"),
        he = RegExp("^" + ae + "*([>+~]|" + ae + ")" + ae + "*"),
        me = RegExp(ae + "*[+~]"),
        ge = RegExp("=" + ae + "*([^\\]'\"]*)" + ae + "*\\]", "g"),
        ve = RegExp(de),
        ye = RegExp("^" + le + "$"),
        be = { ID: RegExp("^#(" + se + ")"), CLASS: RegExp("^\\.(" + se + ")"), TAG: RegExp("^(" + se.replace("w", "w*") + ")"), ATTR: RegExp("^" + ce), PSEUDO: RegExp("^" + de), CHILD: RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ae + "*(even|odd|(([+-]|)(\\d*)n|)" + ae + "*(?:([+-]|)" + ae + "*(\\d+)|))" + ae + "*\\)|)", "i"), bool: RegExp("^(?:" + oe + ")$", "i"), needsContext: RegExp("^" + ae + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ae + "*((?:-\\d)?\\d*)" + ae + "*\\)|)(?=[^-]|$)", "i") },
        xe = /^[^{]+\{\s*\[native \w/,
        we = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        Ce = /^(?:input|select|textarea|button)$/i,
        ke = /^h\d$/i,
        _e = /'|\\/g,
        Te = RegExp("\\\\([\\da-f]{1,6}" + ae + "?|(" + ae + ")|.)", "ig"),
        Ae = function (e, t, n) {
      var r = "0x" + t - 65536;return r !== r || n ? t : 0 > r ? String.fromCharCode(r + 65536) : String.fromCharCode(55296 | r >> 10, 56320 | 1023 & r);
    };try {
      ne.apply(K = re.call(R.childNodes), R.childNodes), K[R.childNodes.length].nodeType;
    } catch (e) {
      ne = { apply: K.length ? function (e, t) {
          te.apply(e, re.call(t));
        } : function (e, t) {
          for (var n = e.length, r = 0; e[n++] = t[r++];);e.length = n - 1;
        } };
    }N = n.isXML = function (e) {
      var t = e && (e.ownerDocument || e).documentElement;return !!t && "HTML" !== t.nodeName;
    }, T = n.support = {}, L = n.setDocument = function (e) {
      var n = e ? e.ownerDocument || e : R;return n !== $ && 9 === n.nodeType && n.documentElement ? ($ = n, I = n.documentElement, O = !N(n), T.attributes = a(function (e) {
        return e.innerHTML = "<a href='#'></a>", s("type|href|height|width", u, "#" === e.firstChild.getAttribute("href")), s(oe, l, null == e.getAttribute("disabled")), e.className = "i", !e.getAttribute("className");
      }), T.input = a(function (e) {
        return e.innerHTML = "<input>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value");
      }), s("value", c, T.attributes && T.input), T.getElementsByTagName = a(function (e) {
        return e.appendChild(n.createComment("")), !e.getElementsByTagName("*").length;
      }), T.getElementsByClassName = a(function (e) {
        return e.innerHTML = "<div class='a'></div><div class='a i'></div>", e.firstChild.className = "i", 2 === e.getElementsByClassName("i").length;
      }), T.getById = a(function (e) {
        return I.appendChild(e).id = q, !n.getElementsByName || !n.getElementsByName(q).length;
      }), T.getById ? (S.find.ID = function (e, t) {
        if (typeof t.getElementById !== J && O) {
          var n = t.getElementById(e);return n && n.parentNode ? [n] : [];
        }
      }, S.filter.ID = function (e) {
        var t = e.replace(Te, Ae);return function (e) {
          return e.getAttribute("id") === t;
        };
      }) : (delete S.find.ID, S.filter.ID = function (e) {
        var t = e.replace(Te, Ae);return function (e) {
          var n = typeof e.getAttributeNode !== J && e.getAttributeNode("id");return n && n.value === t;
        };
      }), S.find.TAG = T.getElementsByTagName ? function (e, n) {
        return typeof n.getElementsByTagName !== J ? n.getElementsByTagName(e) : t;
      } : function (e, t) {
        var n,
            r = [],
            i = 0,
            o = t.getElementsByTagName(e);if ("*" === e) {
          for (; n = o[i++];) 1 === n.nodeType && r.push(n);return r;
        }return o;
      }, S.find.CLASS = T.getElementsByClassName && function (e, n) {
        return typeof n.getElementsByClassName !== J && O ? n.getElementsByClassName(e) : t;
      }, P = [], M = [], (T.qsa = r(n.querySelectorAll)) && (a(function (e) {
        e.innerHTML = "<select><option selected=''></option></select>", e.querySelectorAll("[selected]").length || M.push("\\[" + ae + "*(?:value|" + oe + ")"), e.querySelectorAll(":checked").length || M.push(":checked");
      }), a(function (e) {
        var t = n.createElement("input");t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("t", ""), e.querySelectorAll("[t^='']").length && M.push("[*^$]=" + ae + "*(?:''|\"\")"), e.querySelectorAll(":enabled").length || M.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), M.push(",.*:");
      })), (T.matchesSelector = r(z = I.webkitMatchesSelector || I.mozMatchesSelector || I.oMatchesSelector || I.msMatchesSelector)) && a(function (e) {
        T.disconnectedMatch = z.call(e, "div"), z.call(e, "[s!='']:x"), P.push("!=", de);
      }), M = M.length && RegExp(M.join("|")), P = P.length && RegExp(P.join("|")), H = r(I.contains) || I.compareDocumentPosition ? function (e, t) {
        var n = 9 === e.nodeType ? e.documentElement : e,
            r = t && t.parentNode;return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)));
      } : function (e, t) {
        if (t) for (; t = t.parentNode;) if (t === e) return !0;return !1;
      }, T.sortDetached = a(function (e) {
        return 1 & e.compareDocumentPosition(n.createElement("div"));
      }), G = I.compareDocumentPosition ? function (e, t) {
        if (e === t) return X = !0, 0;var r = t.compareDocumentPosition && e.compareDocumentPosition && e.compareDocumentPosition(t);return r ? 1 & r || !T.sortDetached && t.compareDocumentPosition(e) === r ? e === n || H(R, e) ? -1 : t === n || H(R, t) ? 1 : D ? ie.call(D, e) - ie.call(D, t) : 0 : 4 & r ? -1 : 1 : e.compareDocumentPosition ? -1 : 1;
      } : function (e, t) {
        var r,
            i = 0,
            o = e.parentNode,
            a = t.parentNode,
            s = [e],
            l = [t];if (e === t) return X = !0, 0;if (!o || !a) return e === n ? -1 : t === n ? 1 : o ? -1 : a ? 1 : D ? ie.call(D, e) - ie.call(D, t) : 0;if (o === a) return d(e, t);for (r = e; r = r.parentNode;) s.unshift(r);for (r = t; r = r.parentNode;) l.unshift(r);for (; s[i] === l[i];) i++;return i ? d(s[i], l[i]) : s[i] === R ? -1 : l[i] === R ? 1 : 0;
      }, n) : $;
    }, n.matches = function (e, t) {
      return n(e, null, null, t);
    }, n.matchesSelector = function (e, t) {
      if ((e.ownerDocument || e) !== $ && L(e), t = t.replace(ge, "='$1']"), !(!T.matchesSelector || !O || P && P.test(t) || M && M.test(t))) try {
        var r = z.call(e, t);if (r || T.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r;
      } catch (e) {}return n(t, $, null, [e]).length > 0;
    }, n.contains = function (e, t) {
      return (e.ownerDocument || e) !== $ && L(e), H(e, t);
    }, n.attr = function (e, n) {
      (e.ownerDocument || e) !== $ && L(e);var r = S.attrHandle[n.toLowerCase()],
          i = r && Y.call(S.attrHandle, n.toLowerCase()) ? r(e, n, !O) : t;return i === t ? T.attributes || !O ? e.getAttribute(n) : (i = e.getAttributeNode(n)) && i.specified ? i.value : null : i;
    }, n.error = function (e) {
      throw Error("Syntax error, unrecognized expression: " + e);
    }, n.uniqueSort = function (e) {
      var t,
          n = [],
          r = 0,
          i = 0;if (X = !T.detectDuplicates, D = !T.sortStable && e.slice(0), e.sort(G), X) {
        for (; t = e[i++];) t === e[i] && (r = n.push(i));for (; r--;) e.splice(n[r], 1);
      }return e;
    }, E = n.getText = function (e) {
      var t,
          n = "",
          r = 0,
          i = e.nodeType;if (i) {
        if (1 === i || 9 === i || 11 === i) {
          if ("string" == typeof e.textContent) return e.textContent;for (e = e.firstChild; e; e = e.nextSibling) n += E(e);
        } else if (3 === i || 4 === i) return e.nodeValue;
      } else for (; t = e[r]; r++) n += E(t);return n;
    }, S = n.selectors = { cacheLength: 50, createPseudo: o, match: be, attrHandle: {}, find: {}, relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } }, preFilter: { ATTR: function (e) {
          return e[1] = e[1].replace(Te, Ae), e[3] = (e[4] || e[5] || "").replace(Te, Ae), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4);
        }, CHILD: function (e) {
          return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || n.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && n.error(e[0]), e;
        }, PSEUDO: function (e) {
          var n,
              r = !e[5] && e[2];return be.CHILD.test(e[0]) ? null : (e[3] && e[4] !== t ? e[2] = e[4] : r && ve.test(r) && (n = p(r, !0)) && (n = r.indexOf(")", r.length - n) - r.length) && (e[0] = e[0].slice(0, n), e[2] = r.slice(0, n)), e.slice(0, 3));
        } }, filter: { TAG: function (e) {
          var t = e.replace(Te, Ae).toLowerCase();return "*" === e ? function () {
            return !0;
          } : function (e) {
            return e.nodeName && e.nodeName.toLowerCase() === t;
          };
        }, CLASS: function (e) {
          var t = U[e + " "];return t || (t = RegExp("(^|" + ae + ")" + e + "(" + ae + "|$)")) && U(e, function (e) {
            return t.test("string" == typeof e.className && e.className || typeof e.getAttribute !== J && e.getAttribute("class") || "");
          });
        }, ATTR: function (e, t, r) {
          return function (i) {
            var o = n.attr(i, e);return null == o ? "!=" === t : !t || (o += "", "=" === t ? o === r : "!=" === t ? o !== r : "^=" === t ? r && 0 === o.indexOf(r) : "*=" === t ? r && o.indexOf(r) > -1 : "$=" === t ? r && o.slice(-r.length) === r : "~=" === t ? (" " + o + " ").indexOf(r) > -1 : "|=" === t && (o === r || o.slice(0, r.length + 1) === r + "-"));
          };
        }, CHILD: function (e, t, n, r, i) {
          var o = "nth" !== e.slice(0, 3),
              a = "last" !== e.slice(-4),
              s = "of-type" === t;return 1 === r && 0 === i ? function (e) {
            return !!e.parentNode;
          } : function (t, n, l) {
            var u,
                c,
                d,
                f,
                p,
                h,
                m = o !== a ? "nextSibling" : "previousSibling",
                g = t.parentNode,
                v = s && t.nodeName.toLowerCase(),
                y = !l && !s;if (g) {
              if (o) {
                for (; m;) {
                  for (d = t; d = d[m];) if (s ? d.nodeName.toLowerCase() === v : 1 === d.nodeType) return !1;h = m = "only" === e && !h && "nextSibling";
                }return !0;
              }if (h = [a ? g.firstChild : g.lastChild], a && y) {
                for (p = (u = (c = g[q] || (g[q] = {}))[e] || [])[0] === B && u[1], f = u[0] === B && u[2], d = p && g.childNodes[p]; d = ++p && d && d[m] || (f = p = 0) || h.pop();) if (1 === d.nodeType && ++f && d === t) {
                  c[e] = [B, p, f];break;
                }
              } else if (y && (u = (t[q] || (t[q] = {}))[e]) && u[0] === B) f = u[1];else for (; (d = ++p && d && d[m] || (f = p = 0) || h.pop()) && ((s ? d.nodeName.toLowerCase() !== v : 1 !== d.nodeType) || !++f || (y && ((d[q] || (d[q] = {}))[e] = [B, f]), d !== t)););return (f -= i) === r || 0 == f % r && f / r >= 0;
            }
          };
        }, PSEUDO: function (e, t) {
          var r,
              i = S.pseudos[e] || S.setFilters[e.toLowerCase()] || n.error("unsupported pseudo: " + e);return i[q] ? i(t) : i.length > 1 ? (r = [e, e, "", t], S.setFilters.hasOwnProperty(e.toLowerCase()) ? o(function (e, n) {
            for (var r, o = i(e, t), a = o.length; a--;) r = ie.call(e, o[a]), e[r] = !(n[r] = o[a]);
          }) : function (e) {
            return i(e, 0, r);
          }) : i;
        } }, pseudos: { not: o(function (e) {
          var t = [],
              n = [],
              r = F(e.replace(fe, "$1"));return r[q] ? o(function (e, t, n, i) {
            for (var o, a = r(e, null, i, []), s = e.length; s--;) (o = a[s]) && (e[s] = !(t[s] = o));
          }) : function (e, i, o) {
            return t[0] = e, r(t, null, o, n), !n.pop();
          };
        }), has: o(function (e) {
          return function (t) {
            return n(e, t).length > 0;
          };
        }), contains: o(function (e) {
          return function (t) {
            return (t.textContent || t.innerText || E(t)).indexOf(e) > -1;
          };
        }), lang: o(function (e) {
          return ye.test(e || "") || n.error("unsupported lang: " + e), e = e.replace(Te, Ae).toLowerCase(), function (t) {
            var n;do {
              if (n = O ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-");
            } while ((t = t.parentNode) && 1 === t.nodeType);return !1;
          };
        }), target: function (t) {
          var n = e.location && e.location.hash;return n && n.slice(1) === t.id;
        }, root: function (e) {
          return e === I;
        }, focus: function (e) {
          return e === $.activeElement && (!$.hasFocus || $.hasFocus()) && !!(e.type || e.href || ~e.tabIndex);
        }, enabled: function (e) {
          return !1 === e.disabled;
        }, disabled: function (e) {
          return !0 === e.disabled;
        }, checked: function (e) {
          var t = e.nodeName.toLowerCase();return "input" === t && !!e.checked || "option" === t && !!e.selected;
        }, selected: function (e) {
          return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected;
        }, empty: function (e) {
          for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeName > "@" || 3 === e.nodeType || 4 === e.nodeType) return !1;return !0;
        }, parent: function (e) {
          return !S.pseudos.empty(e);
        }, header: function (e) {
          return ke.test(e.nodeName);
        }, input: function (e) {
          return Ce.test(e.nodeName);
        }, button: function (e) {
          var t = e.nodeName.toLowerCase();return "input" === t && "button" === e.type || "button" === t;
        }, text: function (e) {
          var t;return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || t.toLowerCase() === e.type);
        }, first: f(function () {
          return [0];
        }), last: f(function (e, t) {
          return [t - 1];
        }), eq: f(function (e, t, n) {
          return [0 > n ? n + t : n];
        }), even: f(function (e, t) {
          for (var n = 0; t > n; n += 2) e.push(n);return e;
        }), odd: f(function (e, t) {
          for (var n = 1; t > n; n += 2) e.push(n);return e;
        }), lt: f(function (e, t, n) {
          for (var r = 0 > n ? n + t : n; --r >= 0;) e.push(r);return e;
        }), gt: f(function (e, t, n) {
          for (var r = 0 > n ? n + t : n; t > ++r;) e.push(r);return e;
        }) } };for (_ in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }) S.pseudos[_] = function (e) {
      return function (t) {
        return "input" === t.nodeName.toLowerCase() && t.type === e;
      };
    }(_);for (_ in { submit: !0, reset: !0 }) S.pseudos[_] = function (e) {
      return function (t) {
        var n = t.nodeName.toLowerCase();return ("input" === n || "button" === n) && t.type === e;
      };
    }(_);F = n.compile = function (e, t) {
      var n,
          r = [],
          i = [],
          o = V[e + " "];if (!o) {
        for (t || (t = p(e)), n = t.length; n--;) (o = b(t[n]))[q] ? r.push(o) : i.push(o);o = V(e, x(i, r));
      }return o;
    }, S.pseudos.nth = S.pseudos.eq, k.prototype = S.filters = S.pseudos, S.setFilters = new k(), T.sortStable = q.split("").sort(G).join("") === q, L(), [0, 0].sort(G), T.detectDuplicates = X, ue.find = n, ue.expr = n.selectors, ue.expr[":"] = ue.expr.pseudos, ue.unique = n.uniqueSort, ue.text = n.getText, ue.isXMLDoc = n.isXML, ue.contains = n.contains;
  }(e);var _e = {};ue.Callbacks = function (e) {
    var n,
        i,
        o,
        a,
        s,
        l,
        u = [],
        c = !(e = "string" == typeof e ? _e[e] || r(e) : ue.extend({}, e)).once && [],
        d = function (t) {
      for (i = e.memory && t, o = !0, s = l || 0, l = 0, a = u.length, n = !0; u && a > s; s++) if (!1 === u[s].apply(t[0], t[1]) && e.stopOnFalse) {
        i = !1;break;
      }n = !1, u && (c ? c.length && d(c.shift()) : i ? u = [] : f.disable());
    },
        f = { add: function () {
        if (u) {
          var t = u.length;(function t(n) {
            ue.each(n, function (n, r) {
              var i = ue.type(r);"function" === i ? e.unique && f.has(r) || u.push(r) : r && r.length && "string" !== i && t(r);
            });
          })(arguments), n ? a = u.length : i && (l = t, d(i));
        }return this;
      }, remove: function () {
        return u && ue.each(arguments, function (e, t) {
          for (var r; (r = ue.inArray(t, u, r)) > -1;) u.splice(r, 1), n && (a >= r && a--, s >= r && s--);
        }), this;
      }, has: function (e) {
        return e ? ue.inArray(e, u) > -1 : !(!u || !u.length);
      }, empty: function () {
        return u = [], a = 0, this;
      }, disable: function () {
        return u = c = i = t, this;
      }, disabled: function () {
        return !u;
      }, lock: function () {
        return c = t, i || f.disable(), this;
      }, locked: function () {
        return !c;
      }, fireWith: function (e, t) {
        return t = t || [], t = [e, t.slice ? t.slice() : t], !u || o && !c || (n ? c.push(t) : d(t)), this;
      }, fire: function () {
        return f.fireWith(this, arguments), this;
      }, fired: function () {
        return !!o;
      } };return f;
  }, ue.extend({ Deferred: function (e) {
      var t = [["resolve", "done", ue.Callbacks("once memory"), "resolved"], ["reject", "fail", ue.Callbacks("once memory"), "rejected"], ["notify", "progress", ue.Callbacks("memory")]],
          n = "pending",
          r = { state: function () {
          return n;
        }, always: function () {
          return i.done(arguments).fail(arguments), this;
        }, then: function () {
          var e = arguments;return ue.Deferred(function (n) {
            ue.each(t, function (t, o) {
              var a = o[0],
                  s = ue.isFunction(e[t]) && e[t];i[o[1]](function () {
                var e = s && s.apply(this, arguments);e && ue.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[a + "With"](this === r ? n.promise() : this, s ? [e] : arguments);
              });
            }), e = null;
          }).promise();
        }, promise: function (e) {
          return null != e ? ue.extend(e, r) : r;
        } },
          i = {};return r.pipe = r.then, ue.each(t, function (e, o) {
        var a = o[2],
            s = o[3];r[o[1]] = a.add, s && a.add(function () {
          n = s;
        }, t[1 ^ e][2].disable, t[2][2].lock), i[o[0]] = function () {
          return i[o[0] + "With"](this === i ? r : this, arguments), this;
        }, i[o[0] + "With"] = a.fireWith;
      }), r.promise(i), e && e.call(i, i), i;
    }, when: function (e) {
      var t,
          n,
          r,
          i = 0,
          o = ie.call(arguments),
          a = o.length,
          s = 1 !== a || e && ue.isFunction(e.promise) ? a : 0,
          l = 1 === s ? e : ue.Deferred(),
          u = function (e, n, r) {
        return function (i) {
          n[e] = this, r[e] = arguments.length > 1 ? ie.call(arguments) : i, r === t ? l.notifyWith(n, r) : --s || l.resolveWith(n, r);
        };
      };if (a > 1) for (t = Array(a), n = Array(a), r = Array(a); a > i; i++) o[i] && ue.isFunction(o[i].promise) ? o[i].promise().done(u(i, r, o)).fail(l.reject).progress(u(i, n, t)) : --s;return s || l.resolveWith(r, o), l.promise();
    } }), ue.support = function (t) {
    var n,
        r,
        i,
        o,
        a,
        s,
        l,
        u,
        c,
        d = G.createElement("div");if (d.setAttribute("className", "t"), d.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", n = d.getElementsByTagName("*") || [], !(r = d.getElementsByTagName("a")[0]) || !r.style || !n.length) return t;s = (o = G.createElement("select")).appendChild(G.createElement("option")), i = d.getElementsByTagName("input")[0], r.style.cssText = "top:1px;float:left;opacity:.5", t.getSetAttribute = "t" !== d.className, t.leadingWhitespace = 3 === d.firstChild.nodeType, t.tbody = !d.getElementsByTagName("tbody").length, t.htmlSerialize = !!d.getElementsByTagName("link").length, t.style = /top/.test(r.getAttribute("style")), t.hrefNormalized = "/a" === r.getAttribute("href"), t.opacity = /^0.5/.test(r.style.opacity), t.cssFloat = !!r.style.cssFloat, t.checkOn = !!i.value, t.optSelected = s.selected, t.enctype = !!G.createElement("form").enctype, t.html5Clone = "<:nav></:nav>" !== G.createElement("nav").cloneNode(!0).outerHTML, t.inlineBlockNeedsLayout = !1, t.shrinkWrapBlocks = !1, t.pixelPosition = !1, t.deleteExpando = !0, t.noCloneEvent = !0, t.reliableMarginRight = !0, t.boxSizingReliable = !0, i.checked = !0, t.noCloneChecked = i.cloneNode(!0).checked, o.disabled = !0, t.optDisabled = !s.disabled;try {
      delete d.test;
    } catch (e) {
      t.deleteExpando = !1;
    }(i = G.createElement("input")).setAttribute("value", ""), t.input = "" === i.getAttribute("value"), i.value = "t", i.setAttribute("type", "radio"), t.radioValue = "t" === i.value, i.setAttribute("checked", "t"), i.setAttribute("name", "t"), (a = G.createDocumentFragment()).appendChild(i), t.appendChecked = i.checked, t.checkClone = a.cloneNode(!0).cloneNode(!0).lastChild.checked, d.attachEvent && (d.attachEvent("onclick", function () {
      t.noCloneEvent = !1;
    }), d.cloneNode(!0).click());for (c in { submit: !0, change: !0, focusin: !0 }) d.setAttribute(l = "on" + c, "t"), t[c + "Bubbles"] = l in e || !1 === d.attributes[l].expando;d.style.backgroundClip = "content-box", d.cloneNode(!0).style.backgroundClip = "", t.clearCloneStyle = "content-box" === d.style.backgroundClip;for (c in ue(t)) break;return t.ownLast = "0" !== c, ue(function () {
      var n,
          r,
          i,
          o = "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",
          a = G.getElementsByTagName("body")[0];a && (n = G.createElement("div"), n.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", a.appendChild(n).appendChild(d), d.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", i = d.getElementsByTagName("td"), i[0].style.cssText = "padding:0;margin:0;border:0;display:none", u = 0 === i[0].offsetHeight, i[0].style.display = "", i[1].style.display = "none", t.reliableHiddenOffsets = u && 0 === i[0].offsetHeight, d.innerHTML = "", d.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", ue.swap(a, null != a.style.zoom ? { zoom: 1 } : {}, function () {
        t.boxSizing = 4 === d.offsetWidth;
      }), e.getComputedStyle && (t.pixelPosition = "1%" !== (e.getComputedStyle(d, null) || {}).top, t.boxSizingReliable = "4px" === (e.getComputedStyle(d, null) || { width: "4px" }).width, r = d.appendChild(G.createElement("div")), r.style.cssText = d.style.cssText = o, r.style.marginRight = r.style.width = "0", d.style.width = "1px", t.reliableMarginRight = !parseFloat((e.getComputedStyle(r, null) || {}).marginRight)), typeof d.style.zoom !== V && (d.innerHTML = "", d.style.cssText = o + "width:1px;padding:1px;display:inline;zoom:1", t.inlineBlockNeedsLayout = 3 === d.offsetWidth, d.style.display = "block", d.innerHTML = "<div></div>", d.firstChild.style.width = "5px", t.shrinkWrapBlocks = 3 !== d.offsetWidth, t.inlineBlockNeedsLayout && (a.style.zoom = 1)), a.removeChild(n), n = d = i = r = null);
    }), n = o = a = s = r = i = null, t;
  }({});var Te = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
      Ae = /([A-Z])/g;ue.extend({ cache: {}, noData: { applet: !0, embed: !0, object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" }, hasData: function (e) {
      return !!(e = e.nodeType ? ue.cache[e[ue.expando]] : e[ue.expando]) && !s(e);
    }, data: function (e, t, n) {
      return i(e, t, n);
    }, removeData: function (e, t) {
      return o(e, t);
    }, _data: function (e, t, n) {
      return i(e, t, n, !0);
    }, _removeData: function (e, t) {
      return o(e, t, !0);
    }, acceptData: function (e) {
      if (e.nodeType && 1 !== e.nodeType && 9 !== e.nodeType) return !1;var t = e.nodeName && ue.noData[e.nodeName.toLowerCase()];return !t || !0 !== t && e.getAttribute("classid") === t;
    } }), ue.fn.extend({ data: function (e, n) {
      var r,
          i,
          o = null,
          s = 0,
          l = this[0];if (e === t) {
        if (this.length && (o = ue.data(l), 1 === l.nodeType && !ue._data(l, "parsedAttrs"))) {
          for (r = l.attributes; r.length > s; s++) 0 === (i = r[s].name).indexOf("data-") && (i = ue.camelCase(i.slice(5)), a(l, i, o[i]));ue._data(l, "parsedAttrs", !0);
        }return o;
      }return "object" == typeof e ? this.each(function () {
        ue.data(this, e);
      }) : arguments.length > 1 ? this.each(function () {
        ue.data(this, e, n);
      }) : l ? a(l, e, ue.data(l, e)) : null;
    }, removeData: function (e) {
      return this.each(function () {
        ue.removeData(this, e);
      });
    } }), ue.extend({ queue: function (e, n, r) {
      var i;return e ? (n = (n || "fx") + "queue", i = ue._data(e, n), r && (!i || ue.isArray(r) ? i = ue._data(e, n, ue.makeArray(r)) : i.push(r)), i || []) : t;
    }, dequeue: function (e, t) {
      t = t || "fx";var n = ue.queue(e, t),
          r = n.length,
          i = n.shift(),
          o = ue._queueHooks(e, t);"inprogress" === i && (i = n.shift(), r--), o.cur = i, i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, function () {
        ue.dequeue(e, t);
      }, o)), !r && o && o.empty.fire();
    }, _queueHooks: function (e, t) {
      var n = t + "queueHooks";return ue._data(e, n) || ue._data(e, n, { empty: ue.Callbacks("once memory").add(function () {
          ue._removeData(e, t + "queue"), ue._removeData(e, n);
        }) });
    } }), ue.fn.extend({ queue: function (e, n) {
      var r = 2;return "string" != typeof e && (n = e, e = "fx", r--), r > arguments.length ? ue.queue(this[0], e) : n === t ? this : this.each(function () {
        var t = ue.queue(this, e, n);ue._queueHooks(this, e), "fx" === e && "inprogress" !== t[0] && ue.dequeue(this, e);
      });
    }, dequeue: function (e) {
      return this.each(function () {
        ue.dequeue(this, e);
      });
    }, delay: function (e, t) {
      return e = ue.fx ? ue.fx.speeds[e] || e : e, t = t || "fx", this.queue(t, function (t, n) {
        var r = setTimeout(t, e);n.stop = function () {
          clearTimeout(r);
        };
      });
    }, clearQueue: function (e) {
      return this.queue(e || "fx", []);
    }, promise: function (e, n) {
      var r,
          i = 1,
          o = ue.Deferred(),
          a = this,
          s = this.length,
          l = function () {
        --i || o.resolveWith(a, [a]);
      };for ("string" != typeof e && (n = e, e = t), e = e || "fx"; s--;) (r = ue._data(a[s], e + "queueHooks")) && r.empty && (i++, r.empty.add(l));return l(), o.promise(n);
    } });var Se,
      Ee,
      Ne = /[\t\r\n\f]/g,
      Fe = /\r/g,
      je = /^(?:input|select|textarea|button|object)$/i,
      De = /^(?:a|area)$/i,
      Le = /^(?:checked|selected)$/i,
      $e = ue.support.getSetAttribute,
      Ie = ue.support.input;ue.fn.extend({ attr: function (e, t) {
      return ue.access(this, ue.attr, e, t, arguments.length > 1);
    }, removeAttr: function (e) {
      return this.each(function () {
        ue.removeAttr(this, e);
      });
    }, prop: function (e, t) {
      return ue.access(this, ue.prop, e, t, arguments.length > 1);
    }, removeProp: function (e) {
      return e = ue.propFix[e] || e, this.each(function () {
        try {
          this[e] = t, delete this[e];
        } catch (e) {}
      });
    }, addClass: function (e) {
      var t,
          n,
          r,
          i,
          o,
          a = 0,
          s = this.length,
          l = "string" == typeof e && e;if (ue.isFunction(e)) return this.each(function (t) {
        ue(this).addClass(e.call(this, t, this.className));
      });if (l) for (t = (e || "").match(de) || []; s > a; a++) if (n = this[a], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(Ne, " ") : " ")) {
        for (o = 0; i = t[o++];) 0 > r.indexOf(" " + i + " ") && (r += i + " ");n.className = ue.trim(r);
      }return this;
    }, removeClass: function (e) {
      var t,
          n,
          r,
          i,
          o,
          a = 0,
          s = this.length,
          l = 0 === arguments.length || "string" == typeof e && e;if (ue.isFunction(e)) return this.each(function (t) {
        ue(this).removeClass(e.call(this, t, this.className));
      });if (l) for (t = (e || "").match(de) || []; s > a; a++) if (n = this[a], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(Ne, " ") : "")) {
        for (o = 0; i = t[o++];) for (; r.indexOf(" " + i + " ") >= 0;) r = r.replace(" " + i + " ", " ");n.className = e ? ue.trim(r) : "";
      }return this;
    }, toggleClass: function (e, t) {
      var n = typeof e,
          r = "boolean" == typeof t;return ue.isFunction(e) ? this.each(function (n) {
        ue(this).toggleClass(e.call(this, n, this.className, t), t);
      }) : this.each(function () {
        if ("string" === n) for (var i, o = 0, a = ue(this), s = t, l = e.match(de) || []; i = l[o++];) s = r ? s : !a.hasClass(i), a[s ? "addClass" : "removeClass"](i);else (n === V || "boolean" === n) && (this.className && ue._data(this, "__className__", this.className), this.className = this.className || !1 === e ? "" : ue._data(this, "__className__") || "");
      });
    }, hasClass: function (e) {
      for (var t = " " + e + " ", n = 0, r = this.length; r > n; n++) if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(Ne, " ").indexOf(t) >= 0) return !0;return !1;
    }, val: function (e) {
      var n,
          r,
          i,
          o = this[0];return arguments.length ? (i = ue.isFunction(e), this.each(function (n) {
        var o;1 === this.nodeType && (null == (o = i ? e.call(this, n, ue(this).val()) : e) ? o = "" : "number" == typeof o ? o += "" : ue.isArray(o) && (o = ue.map(o, function (e) {
          return null == e ? "" : e + "";
        })), (r = ue.valHooks[this.type] || ue.valHooks[this.nodeName.toLowerCase()]) && "set" in r && r.set(this, o, "value") !== t || (this.value = o));
      })) : o ? (r = ue.valHooks[o.type] || ue.valHooks[o.nodeName.toLowerCase()]) && "get" in r && (n = r.get(o, "value")) !== t ? n : "string" == typeof (n = o.value) ? n.replace(Fe, "") : null == n ? "" : n : void 0;
    } }), ue.extend({ valHooks: { option: { get: function (e) {
          var t = ue.find.attr(e, "value");return null != t ? t : e.text;
        } }, select: { get: function (e) {
          for (var t, n, r = e.options, i = e.selectedIndex, o = "select-one" === e.type || 0 > i, a = o ? null : [], s = o ? i + 1 : r.length, l = 0 > i ? s : o ? i : 0; s > l; l++) if (!(!(n = r[l]).selected && l !== i || (ue.support.optDisabled ? n.disabled : null !== n.getAttribute("disabled")) || n.parentNode.disabled && ue.nodeName(n.parentNode, "optgroup"))) {
            if (t = ue(n).val(), o) return t;a.push(t);
          }return a;
        }, set: function (e, t) {
          for (var n, r, i = e.options, o = ue.makeArray(t), a = i.length; a--;) r = i[a], (r.selected = ue.inArray(ue(r).val(), o) >= 0) && (n = !0);return n || (e.selectedIndex = -1), o;
        } } }, attr: function (e, n, r) {
      var i,
          o,
          a = e.nodeType;if (e && 3 !== a && 8 !== a && 2 !== a) return typeof e.getAttribute === V ? ue.prop(e, n, r) : (1 === a && ue.isXMLDoc(e) || (n = n.toLowerCase(), i = ue.attrHooks[n] || (ue.expr.match.bool.test(n) ? Ee : Se)), r === t ? i && "get" in i && null !== (o = i.get(e, n)) ? o : null == (o = ue.find.attr(e, n)) ? t : o : null !== r ? i && "set" in i && (o = i.set(e, r, n)) !== t ? o : (e.setAttribute(n, r + ""), r) : (ue.removeAttr(e, n), t));
    }, removeAttr: function (e, t) {
      var n,
          r,
          i = 0,
          o = t && t.match(de);if (o && 1 === e.nodeType) for (; n = o[i++];) r = ue.propFix[n] || n, ue.expr.match.bool.test(n) ? Ie && $e || !Le.test(n) ? e[r] = !1 : e[ue.camelCase("default-" + n)] = e[r] = !1 : ue.attr(e, n, ""), e.removeAttribute($e ? n : r);
    }, attrHooks: { type: { set: function (e, t) {
          if (!ue.support.radioValue && "radio" === t && ue.nodeName(e, "input")) {
            var n = e.value;return e.setAttribute("type", t), n && (e.value = n), t;
          }
        } } }, propFix: { for: "htmlFor", class: "className" }, prop: function (e, n, r) {
      var i,
          o,
          a = e.nodeType;if (e && 3 !== a && 8 !== a && 2 !== a) return (1 !== a || !ue.isXMLDoc(e)) && (n = ue.propFix[n] || n, o = ue.propHooks[n]), r !== t ? o && "set" in o && (i = o.set(e, r, n)) !== t ? i : e[n] = r : o && "get" in o && null !== (i = o.get(e, n)) ? i : e[n];
    }, propHooks: { tabIndex: { get: function (e) {
          var t = ue.find.attr(e, "tabindex");return t ? parseInt(t, 10) : je.test(e.nodeName) || De.test(e.nodeName) && e.href ? 0 : -1;
        } } } }), Ee = { set: function (e, t, n) {
      return !1 === t ? ue.removeAttr(e, n) : Ie && $e || !Le.test(n) ? e.setAttribute(!$e && ue.propFix[n] || n, n) : e[ue.camelCase("default-" + n)] = e[n] = !0, n;
    } }, ue.each(ue.expr.match.bool.source.match(/\w+/g), function (e, n) {
    var r = ue.expr.attrHandle[n] || ue.find.attr;ue.expr.attrHandle[n] = Ie && $e || !Le.test(n) ? function (e, n, i) {
      var o = ue.expr.attrHandle[n],
          a = i ? t : (ue.expr.attrHandle[n] = t) != r(e, n, i) ? n.toLowerCase() : null;return ue.expr.attrHandle[n] = o, a;
    } : function (e, n, r) {
      return r ? t : e[ue.camelCase("default-" + n)] ? n.toLowerCase() : null;
    };
  }), Ie && $e || (ue.attrHooks.value = { set: function (e, n, r) {
      return ue.nodeName(e, "input") ? (e.defaultValue = n, t) : Se && Se.set(e, n, r);
    } }), $e || (Se = { set: function (e, n, r) {
      var i = e.getAttributeNode(r);return i || e.setAttributeNode(i = e.ownerDocument.createAttribute(r)), i.value = n += "", "value" === r || n === e.getAttribute(r) ? n : t;
    } }, ue.expr.attrHandle.id = ue.expr.attrHandle.name = ue.expr.attrHandle.coords = function (e, n, r) {
    var i;return r ? t : (i = e.getAttributeNode(n)) && "" !== i.value ? i.value : null;
  }, ue.valHooks.button = { get: function (e, n) {
      var r = e.getAttributeNode(n);return r && r.specified ? r.value : t;
    }, set: Se.set }, ue.attrHooks.contenteditable = { set: function (e, t, n) {
      Se.set(e, "" !== t && t, n);
    } }, ue.each(["width", "height"], function (e, n) {
    ue.attrHooks[n] = { set: function (e, r) {
        return "" === r ? (e.setAttribute(n, "auto"), r) : t;
      } };
  })), ue.support.hrefNormalized || ue.each(["href", "src"], function (e, t) {
    ue.propHooks[t] = { get: function (e) {
        return e.getAttribute(t, 4);
      } };
  }), ue.support.style || (ue.attrHooks.style = { get: function (e) {
      return e.style.cssText || t;
    }, set: function (e, t) {
      return e.style.cssText = t + "";
    } }), ue.support.optSelected || (ue.propHooks.selected = { get: function (e) {
      var t = e.parentNode;return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex), null;
    } }), ue.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
    ue.propFix[this.toLowerCase()] = this;
  }), ue.support.enctype || (ue.propFix.enctype = "encoding"), ue.each(["radio", "checkbox"], function () {
    ue.valHooks[this] = { set: function (e, n) {
        return ue.isArray(n) ? e.checked = ue.inArray(ue(e).val(), n) >= 0 : t;
      } }, ue.support.checkOn || (ue.valHooks[this].get = function (e) {
      return null === e.getAttribute("value") ? "on" : e.value;
    });
  });var Oe = /^(?:input|select|textarea)$/i,
      Me = /^key/,
      Pe = /^(?:mouse|contextmenu)|click/,
      ze = /^(?:focusinfocus|focusoutblur)$/,
      He = /^([^.]*)(?:\.(.+)|)$/;ue.event = { global: {}, add: function (e, n, r, i, o) {
      var a,
          s,
          l,
          u,
          c,
          d,
          f,
          p,
          h,
          m,
          g,
          v = ue._data(e);if (v) {
        for (r.handler && (u = r, r = u.handler, o = u.selector), r.guid || (r.guid = ue.guid++), (s = v.events) || (s = v.events = {}), (d = v.handle) || (d = v.handle = function (e) {
          return typeof ue === V || e && ue.event.triggered === e.type ? t : ue.event.dispatch.apply(d.elem, arguments);
        }, d.elem = e), l = (n = (n || "").match(de) || [""]).length; l--;) a = He.exec(n[l]) || [], h = g = a[1], m = (a[2] || "").split(".").sort(), h && (c = ue.event.special[h] || {}, h = (o ? c.delegateType : c.bindType) || h, c = ue.event.special[h] || {}, f = ue.extend({ type: h, origType: g, data: i, handler: r, guid: r.guid, selector: o, needsContext: o && ue.expr.match.needsContext.test(o), namespace: m.join(".") }, u), (p = s[h]) || (p = s[h] = [], p.delegateCount = 0, c.setup && !1 !== c.setup.call(e, i, m, d) || (e.addEventListener ? e.addEventListener(h, d, !1) : e.attachEvent && e.attachEvent("on" + h, d))), c.add && (c.add.call(e, f), f.handler.guid || (f.handler.guid = r.guid)), o ? p.splice(p.delegateCount++, 0, f) : p.push(f), ue.event.global[h] = !0);e = null;
      }
    }, remove: function (e, t, n, r, i) {
      var o,
          a,
          s,
          l,
          u,
          c,
          d,
          f,
          p,
          h,
          m,
          g = ue.hasData(e) && ue._data(e);if (g && (c = g.events)) {
        for (u = (t = (t || "").match(de) || [""]).length; u--;) if (s = He.exec(t[u]) || [], p = m = s[1], h = (s[2] || "").split(".").sort(), p) {
          for (d = ue.event.special[p] || {}, f = c[p = (r ? d.delegateType : d.bindType) || p] || [], s = s[2] && RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), l = o = f.length; o--;) a = f[o], !i && m !== a.origType || n && n.guid !== a.guid || s && !s.test(a.namespace) || r && r !== a.selector && ("**" !== r || !a.selector) || (f.splice(o, 1), a.selector && f.delegateCount--, d.remove && d.remove.call(e, a));l && !f.length && (d.teardown && !1 !== d.teardown.call(e, h, g.handle) || ue.removeEvent(e, p, g.handle), delete c[p]);
        } else for (p in c) ue.event.remove(e, p + t[u], n, r, !0);ue.isEmptyObject(c) && (delete g.handle, ue._removeData(e, "events"));
      }
    }, trigger: function (n, r, i, o) {
      var a,
          s,
          l,
          u,
          c,
          d,
          f,
          p = [i || G],
          h = se.call(n, "type") ? n.type : n,
          m = se.call(n, "namespace") ? n.namespace.split(".") : [];if (l = d = i = i || G, 3 !== i.nodeType && 8 !== i.nodeType && !ze.test(h + ue.event.triggered) && (h.indexOf(".") >= 0 && (m = h.split("."), h = m.shift(), m.sort()), s = 0 > h.indexOf(":") && "on" + h, n = n[ue.expando] ? n : new ue.Event(h, "object" == typeof n && n), n.isTrigger = o ? 2 : 3, n.namespace = m.join("."), n.namespace_re = n.namespace ? RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, n.result = t, n.target || (n.target = i), r = null == r ? [n] : ue.makeArray(r, [n]), c = ue.event.special[h] || {}, o || !c.trigger || !1 !== c.trigger.apply(i, r))) {
        if (!o && !c.noBubble && !ue.isWindow(i)) {
          for (u = c.delegateType || h, ze.test(u + h) || (l = l.parentNode); l; l = l.parentNode) p.push(l), d = l;d === (i.ownerDocument || G) && p.push(d.defaultView || d.parentWindow || e);
        }for (f = 0; (l = p[f++]) && !n.isPropagationStopped();) n.type = f > 1 ? u : c.bindType || h, (a = (ue._data(l, "events") || {})[n.type] && ue._data(l, "handle")) && a.apply(l, r), (a = s && l[s]) && ue.acceptData(l) && a.apply && !1 === a.apply(l, r) && n.preventDefault();if (n.type = h, !o && !n.isDefaultPrevented() && (!c._default || !1 === c._default.apply(p.pop(), r)) && ue.acceptData(i) && s && i[h] && !ue.isWindow(i)) {
          (d = i[s]) && (i[s] = null), ue.event.triggered = h;try {
            i[h]();
          } catch (e) {}ue.event.triggered = t, d && (i[s] = d);
        }return n.result;
      }
    }, dispatch: function (e) {
      e = ue.event.fix(e);var n,
          r,
          i,
          o,
          a,
          s = [],
          l = ie.call(arguments),
          u = (ue._data(this, "events") || {})[e.type] || [],
          c = ue.event.special[e.type] || {};if (l[0] = e, e.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, e)) {
        for (s = ue.event.handlers.call(this, e, u), n = 0; (o = s[n++]) && !e.isPropagationStopped();) for (e.currentTarget = o.elem, a = 0; (i = o.handlers[a++]) && !e.isImmediatePropagationStopped();) (!e.namespace_re || e.namespace_re.test(i.namespace)) && (e.handleObj = i, e.data = i.data, (r = ((ue.event.special[i.origType] || {}).handle || i.handler).apply(o.elem, l)) !== t && !1 === (e.result = r) && (e.preventDefault(), e.stopPropagation()));return c.postDispatch && c.postDispatch.call(this, e), e.result;
      }
    }, handlers: function (e, n) {
      var r,
          i,
          o,
          a,
          s = [],
          l = n.delegateCount,
          u = e.target;if (l && u.nodeType && (!e.button || "click" !== e.type)) for (; u != this; u = u.parentNode || this) if (1 === u.nodeType && (!0 !== u.disabled || "click" !== e.type)) {
        for (o = [], a = 0; l > a; a++) i = n[a], r = i.selector + " ", o[r] === t && (o[r] = i.needsContext ? ue(r, this).index(u) >= 0 : ue.find(r, this, null, [u]).length), o[r] && o.push(i);o.length && s.push({ elem: u, handlers: o });
      }return n.length > l && s.push({ elem: this, handlers: n.slice(l) }), s;
    }, fix: function (e) {
      if (e[ue.expando]) return e;var t,
          n,
          r,
          i = e.type,
          o = e,
          a = this.fixHooks[i];for (a || (this.fixHooks[i] = a = Pe.test(i) ? this.mouseHooks : Me.test(i) ? this.keyHooks : {}), r = a.props ? this.props.concat(a.props) : this.props, e = new ue.Event(o), t = r.length; t--;) n = r[t], e[n] = o[n];return e.target || (e.target = o.srcElement || G), 3 === e.target.nodeType && (e.target = e.target.parentNode), e.metaKey = !!e.metaKey, a.filter ? a.filter(e, o) : e;
    }, props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "), fixHooks: {}, keyHooks: { props: "char charCode key keyCode".split(" "), filter: function (e, t) {
        return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e;
      } }, mouseHooks: { props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "), filter: function (e, n) {
        var r,
            i,
            o,
            a = n.button,
            s = n.fromElement;return null == e.pageX && null != n.clientX && (i = e.target.ownerDocument || G, o = i.documentElement, r = i.body, e.pageX = n.clientX + (o && o.scrollLeft || r && r.scrollLeft || 0) - (o && o.clientLeft || r && r.clientLeft || 0), e.pageY = n.clientY + (o && o.scrollTop || r && r.scrollTop || 0) - (o && o.clientTop || r && r.clientTop || 0)), !e.relatedTarget && s && (e.relatedTarget = s === e.target ? n.toElement : s), e.which || a === t || (e.which = 1 & a ? 1 : 2 & a ? 3 : 4 & a ? 2 : 0), e;
      } }, special: { load: { noBubble: !0 }, focus: { trigger: function () {
          if (this !== c() && this.focus) try {
            return this.focus(), !1;
          } catch (e) {}
        }, delegateType: "focusin" }, blur: { trigger: function () {
          return this === c() && this.blur ? (this.blur(), !1) : t;
        }, delegateType: "focusout" }, click: { trigger: function () {
          return ue.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : t;
        }, _default: function (e) {
          return ue.nodeName(e.target, "a");
        } }, beforeunload: { postDispatch: function (e) {
          e.result !== t && (e.originalEvent.returnValue = e.result);
        } } }, simulate: function (e, t, n, r) {
      var i = ue.extend(new ue.Event(), n, { type: e, isSimulated: !0, originalEvent: {} });r ? ue.event.trigger(i, null, t) : ue.event.dispatch.call(t, i), i.isDefaultPrevented() && n.preventDefault();
    } }, ue.removeEvent = G.removeEventListener ? function (e, t, n) {
    e.removeEventListener && e.removeEventListener(t, n, !1);
  } : function (e, t, n) {
    var r = "on" + t;e.detachEvent && (typeof e[r] === V && (e[r] = null), e.detachEvent(r, n));
  }, ue.Event = function (e, n) {
    return this instanceof ue.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || !1 === e.returnValue || e.getPreventDefault && e.getPreventDefault() ? l : u) : this.type = e, n && ue.extend(this, n), this.timeStamp = e && e.timeStamp || ue.now(), this[ue.expando] = !0, t) : new ue.Event(e, n);
  }, ue.Event.prototype = { isDefaultPrevented: u, isPropagationStopped: u, isImmediatePropagationStopped: u, preventDefault: function () {
      var e = this.originalEvent;this.isDefaultPrevented = l, e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1);
    }, stopPropagation: function () {
      var e = this.originalEvent;this.isPropagationStopped = l, e && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0);
    }, stopImmediatePropagation: function () {
      this.isImmediatePropagationStopped = l, this.stopPropagation();
    } }, ue.each({ mouseenter: "mouseover", mouseleave: "mouseout" }, function (e, t) {
    ue.event.special[e] = { delegateType: t, bindType: t, handle: function (e) {
        var n,
            r = this,
            i = e.relatedTarget,
            o = e.handleObj;return (!i || i !== r && !ue.contains(r, i)) && (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t), n;
      } };
  }), ue.support.submitBubbles || (ue.event.special.submit = { setup: function () {
      return !ue.nodeName(this, "form") && (ue.event.add(this, "click._submit keypress._submit", function (e) {
        var n = e.target,
            r = ue.nodeName(n, "input") || ue.nodeName(n, "button") ? n.form : t;r && !ue._data(r, "submitBubbles") && (ue.event.add(r, "submit._submit", function (e) {
          e._submit_bubble = !0;
        }), ue._data(r, "submitBubbles", !0));
      }), t);
    }, postDispatch: function (e) {
      e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && ue.event.simulate("submit", this.parentNode, e, !0));
    }, teardown: function () {
      return !ue.nodeName(this, "form") && (ue.event.remove(this, "._submit"), t);
    } }), ue.support.changeBubbles || (ue.event.special.change = { setup: function () {
      return Oe.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (ue.event.add(this, "propertychange._change", function (e) {
        "checked" === e.originalEvent.propertyName && (this._just_changed = !0);
      }), ue.event.add(this, "click._change", function (e) {
        this._just_changed && !e.isTrigger && (this._just_changed = !1), ue.event.simulate("change", this, e, !0);
      })), !1) : (ue.event.add(this, "beforeactivate._change", function (e) {
        var t = e.target;Oe.test(t.nodeName) && !ue._data(t, "changeBubbles") && (ue.event.add(t, "change._change", function (e) {
          !this.parentNode || e.isSimulated || e.isTrigger || ue.event.simulate("change", this.parentNode, e, !0);
        }), ue._data(t, "changeBubbles", !0));
      }), t);
    }, handle: function (e) {
      var n = e.target;return this !== n || e.isSimulated || e.isTrigger || "radio" !== n.type && "checkbox" !== n.type ? e.handleObj.handler.apply(this, arguments) : t;
    }, teardown: function () {
      return ue.event.remove(this, "._change"), !Oe.test(this.nodeName);
    } }), ue.support.focusinBubbles || ue.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
    var n = 0,
        r = function (e) {
      ue.event.simulate(t, e.target, ue.event.fix(e), !0);
    };ue.event.special[t] = { setup: function () {
        0 == n++ && G.addEventListener(e, r, !0);
      }, teardown: function () {
        0 == --n && G.removeEventListener(e, r, !0);
      } };
  }), ue.fn.extend({ on: function (e, n, r, i, o) {
      var a, s;if ("object" == typeof e) {
        "string" != typeof n && (r = r || n, n = t);for (a in e) this.on(a, n, r, e[a], o);return this;
      }if (null == r && null == i ? (i = n, r = n = t) : null == i && ("string" == typeof n ? (i = r, r = t) : (i = r, r = n, n = t)), !1 === i) i = u;else if (!i) return this;return 1 === o && (s = i, i = function (e) {
        return ue().off(e), s.apply(this, arguments);
      }, i.guid = s.guid || (s.guid = ue.guid++)), this.each(function () {
        ue.event.add(this, e, i, r, n);
      });
    }, one: function (e, t, n, r) {
      return this.on(e, t, n, r, 1);
    }, off: function (e, n, r) {
      var i, o;if (e && e.preventDefault && e.handleObj) return i = e.handleObj, ue(e.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;if ("object" == typeof e) {
        for (o in e) this.off(o, n, e[o]);return this;
      }return (!1 === n || "function" == typeof n) && (r = n, n = t), !1 === r && (r = u), this.each(function () {
        ue.event.remove(this, e, r, n);
      });
    }, trigger: function (e, t) {
      return this.each(function () {
        ue.event.trigger(e, t, this);
      });
    }, triggerHandler: function (e, n) {
      var r = this[0];return r ? ue.event.trigger(e, n, r, !0) : t;
    } });var qe = /^.[^:#\[\.,]*$/,
      Re = /^(?:parents|prev(?:Until|All))/,
      Be = ue.expr.match.needsContext,
      We = { children: !0, contents: !0, next: !0, prev: !0 };ue.fn.extend({ find: function (e) {
      var t,
          n = [],
          r = this,
          i = r.length;if ("string" != typeof e) return this.pushStack(ue(e).filter(function () {
        for (t = 0; i > t; t++) if (ue.contains(r[t], this)) return !0;
      }));for (t = 0; i > t; t++) ue.find(e, r[t], n);return n = this.pushStack(i > 1 ? ue.unique(n) : n), n.selector = this.selector ? this.selector + " " + e : e, n;
    }, has: function (e) {
      var t,
          n = ue(e, this),
          r = n.length;return this.filter(function () {
        for (t = 0; r > t; t++) if (ue.contains(this, n[t])) return !0;
      });
    }, not: function (e) {
      return this.pushStack(f(this, e || [], !0));
    }, filter: function (e) {
      return this.pushStack(f(this, e || [], !1));
    }, is: function (e) {
      return !!f(this, "string" == typeof e && Be.test(e) ? ue(e) : e || [], !1).length;
    }, closest: function (e, t) {
      for (var n, r = 0, i = this.length, o = [], a = Be.test(e) || "string" != typeof e ? ue(e, t || this.context) : 0; i > r; r++) for (n = this[r]; n && n !== t; n = n.parentNode) if (11 > n.nodeType && (a ? a.index(n) > -1 : 1 === n.nodeType && ue.find.matchesSelector(n, e))) {
        n = o.push(n);break;
      }return this.pushStack(o.length > 1 ? ue.unique(o) : o);
    }, index: function (e) {
      return e ? "string" == typeof e ? ue.inArray(this[0], ue(e)) : ue.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
    }, add: function (e, t) {
      var n = "string" == typeof e ? ue(e, t) : ue.makeArray(e && e.nodeType ? [e] : e),
          r = ue.merge(this.get(), n);return this.pushStack(ue.unique(r));
    }, addBack: function (e) {
      return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
    } }), ue.each({ parent: function (e) {
      var t = e.parentNode;return t && 11 !== t.nodeType ? t : null;
    }, parents: function (e) {
      return ue.dir(e, "parentNode");
    }, parentsUntil: function (e, t, n) {
      return ue.dir(e, "parentNode", n);
    }, next: function (e) {
      return d(e, "nextSibling");
    }, prev: function (e) {
      return d(e, "previousSibling");
    }, nextAll: function (e) {
      return ue.dir(e, "nextSibling");
    }, prevAll: function (e) {
      return ue.dir(e, "previousSibling");
    }, nextUntil: function (e, t, n) {
      return ue.dir(e, "nextSibling", n);
    }, prevUntil: function (e, t, n) {
      return ue.dir(e, "previousSibling", n);
    }, siblings: function (e) {
      return ue.sibling((e.parentNode || {}).firstChild, e);
    }, children: function (e) {
      return ue.sibling(e.firstChild);
    }, contents: function (e) {
      return ue.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : ue.merge([], e.childNodes);
    } }, function (e, t) {
    ue.fn[e] = function (n, r) {
      var i = ue.map(this, t, n);return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = ue.filter(r, i)), this.length > 1 && (We[e] || (i = ue.unique(i)), Re.test(e) && (i = i.reverse())), this.pushStack(i);
    };
  }), ue.extend({ filter: function (e, t, n) {
      var r = t[0];return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? ue.find.matchesSelector(r, e) ? [r] : [] : ue.find.matches(e, ue.grep(t, function (e) {
        return 1 === e.nodeType;
      }));
    }, dir: function (e, n, r) {
      for (var i = [], o = e[n]; o && 9 !== o.nodeType && (r === t || 1 !== o.nodeType || !ue(o).is(r));) 1 === o.nodeType && i.push(o), o = o[n];return i;
    }, sibling: function (e, t) {
      for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);return n;
    } });var Ue = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
      Qe = / jQuery\d+="(?:null|\d+)"/g,
      Ve = RegExp("<(?:" + Ue + ")[\\s/>]", "i"),
      Xe = /^\s+/,
      Ge = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
      Je = /<([\w:]+)/,
      Ze = /<tbody/i,
      Ye = /<|&#?\w+;/,
      Ke = /<(?:script|style|link)/i,
      et = /^(?:checkbox|radio)$/i,
      tt = /checked\s*(?:[^=]|=\s*.checked.)/i,
      nt = /^$|\/(?:java|ecma)script/i,
      rt = /^true\/(.*)/,
      it = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
      ot = { option: [1, "<select multiple='multiple'>", "</select>"], legend: [1, "<fieldset>", "</fieldset>"], area: [1, "<map>", "</map>"], param: [1, "<object>", "</object>"], thead: [1, "<table>", "</table>"], tr: [2, "<table><tbody>", "</tbody></table>"], col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: ue.support.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"] },
      at = p(G).appendChild(G.createElement("div"));ot.optgroup = ot.option, ot.tbody = ot.tfoot = ot.colgroup = ot.caption = ot.thead, ot.th = ot.td, ue.fn.extend({ text: function (e) {
      return ue.access(this, function (e) {
        return e === t ? ue.text(this) : this.empty().append((this[0] && this[0].ownerDocument || G).createTextNode(e));
      }, null, e, arguments.length);
    }, append: function () {
      return this.domManip(arguments, function (e) {
        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || h(this, e).appendChild(e);
      });
    }, prepend: function () {
      return this.domManip(arguments, function (e) {
        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
          var t = h(this, e);t.insertBefore(e, t.firstChild);
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
      for (var n, r = e ? ue.filter(e, this) : this, i = 0; null != (n = r[i]); i++) t || 1 !== n.nodeType || ue.cleanData(x(n)), n.parentNode && (t && ue.contains(n.ownerDocument, n) && v(x(n, "script")), n.parentNode.removeChild(n));return this;
    }, empty: function () {
      for (var e, t = 0; null != (e = this[t]); t++) {
        for (1 === e.nodeType && ue.cleanData(x(e, !1)); e.firstChild;) e.removeChild(e.firstChild);e.options && ue.nodeName(e, "select") && (e.options.length = 0);
      }return this;
    }, clone: function (e, t) {
      return e = null != e && e, t = null == t ? e : t, this.map(function () {
        return ue.clone(this, e, t);
      });
    }, html: function (e) {
      return ue.access(this, function (e) {
        var n = this[0] || {},
            r = 0,
            i = this.length;if (e === t) return 1 === n.nodeType ? n.innerHTML.replace(Qe, "") : t;if (!("string" != typeof e || Ke.test(e) || !ue.support.htmlSerialize && Ve.test(e) || !ue.support.leadingWhitespace && Xe.test(e) || ot[(Je.exec(e) || ["", ""])[1].toLowerCase()])) {
          e = e.replace(Ge, "<$1></$2>");try {
            for (; i > r; r++) 1 === (n = this[r] || {}).nodeType && (ue.cleanData(x(n, !1)), n.innerHTML = e);n = 0;
          } catch (e) {}
        }n && this.empty().append(e);
      }, null, e, arguments.length);
    }, replaceWith: function () {
      var e = ue.map(this, function (e) {
        return [e.nextSibling, e.parentNode];
      }),
          t = 0;return this.domManip(arguments, function (n) {
        var r = e[t++],
            i = e[t++];i && (r && r.parentNode !== i && (r = this.nextSibling), ue(this).remove(), i.insertBefore(n, r));
      }, !0), t ? this : this.remove();
    }, detach: function (e) {
      return this.remove(e, !0);
    }, domManip: function (e, t, n) {
      e = ne.apply([], e);var r,
          i,
          o,
          a,
          s,
          l,
          u = 0,
          c = this.length,
          d = this,
          f = c - 1,
          p = e[0],
          h = ue.isFunction(p);if (h || !(1 >= c || "string" != typeof p || ue.support.checkClone) && tt.test(p)) return this.each(function (r) {
        var i = d.eq(r);h && (e[0] = p.call(this, r, i.html())), i.domManip(e, t, n);
      });if (c && (l = ue.buildFragment(e, this[0].ownerDocument, !1, !n && this), r = l.firstChild, 1 === l.childNodes.length && (l = r), r)) {
        for (o = (a = ue.map(x(l, "script"), m)).length; c > u; u++) i = l, u !== f && (i = ue.clone(i, !0, !0), o && ue.merge(a, x(i, "script"))), t.call(this[u], i, u);if (o) for (s = a[a.length - 1].ownerDocument, ue.map(a, g), u = 0; o > u; u++) i = a[u], nt.test(i.type || "") && !ue._data(i, "globalEval") && ue.contains(s, i) && (i.src ? ue._evalUrl(i.src) : ue.globalEval((i.text || i.textContent || i.innerHTML || "").replace(it, "")));l = r = null;
      }return this;
    } }), ue.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function (e, t) {
    ue.fn[e] = function (e) {
      for (var n, r = 0, i = [], o = ue(e), a = o.length - 1; a >= r; r++) n = r === a ? this : this.clone(!0), ue(o[r])[t](n), re.apply(i, n.get());return this.pushStack(i);
    };
  }), ue.extend({ clone: function (e, t, n) {
      var r,
          i,
          o,
          a,
          s,
          l = ue.contains(e.ownerDocument, e);if (ue.support.html5Clone || ue.isXMLDoc(e) || !Ve.test("<" + e.nodeName + ">") ? o = e.cloneNode(!0) : (at.innerHTML = e.outerHTML, at.removeChild(o = at.firstChild)), !(ue.support.noCloneEvent && ue.support.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || ue.isXMLDoc(e))) for (r = x(o), s = x(e), a = 0; null != (i = s[a]); ++a) r[a] && b(i, r[a]);if (t) if (n) for (s = s || x(e), r = r || x(o), a = 0; null != (i = s[a]); a++) y(i, r[a]);else y(e, o);return (r = x(o, "script")).length > 0 && v(r, !l && x(e, "script")), r = s = i = null, o;
    }, buildFragment: function (e, t, n, r) {
      for (var i, o, a, s, l, u, c, d = e.length, f = p(t), h = [], m = 0; d > m; m++) if ((o = e[m]) || 0 === o) if ("object" === ue.type(o)) ue.merge(h, o.nodeType ? [o] : o);else if (Ye.test(o)) {
        for (s = s || f.appendChild(t.createElement("div")), l = (Je.exec(o) || ["", ""])[1].toLowerCase(), c = ot[l] || ot._default, s.innerHTML = c[1] + o.replace(Ge, "<$1></$2>") + c[2], i = c[0]; i--;) s = s.lastChild;if (!ue.support.leadingWhitespace && Xe.test(o) && h.push(t.createTextNode(Xe.exec(o)[0])), !ue.support.tbody) for (i = (o = "table" !== l || Ze.test(o) ? "<table>" !== c[1] || Ze.test(o) ? 0 : s : s.firstChild) && o.childNodes.length; i--;) ue.nodeName(u = o.childNodes[i], "tbody") && !u.childNodes.length && o.removeChild(u);for (ue.merge(h, s.childNodes), s.textContent = ""; s.firstChild;) s.removeChild(s.firstChild);s = f.lastChild;
      } else h.push(t.createTextNode(o));for (s && f.removeChild(s), ue.support.appendChecked || ue.grep(x(h, "input"), w), m = 0; o = h[m++];) if ((!r || -1 === ue.inArray(o, r)) && (a = ue.contains(o.ownerDocument, o), s = x(f.appendChild(o), "script"), a && v(s), n)) for (i = 0; o = s[i++];) nt.test(o.type || "") && n.push(o);return s = null, f;
    }, cleanData: function (e, t) {
      for (var n, r, i, o, a = 0, s = ue.expando, l = ue.cache, u = ue.support.deleteExpando, c = ue.event.special; null != (n = e[a]); a++) if ((t || ue.acceptData(n)) && (i = n[s], o = i && l[i])) {
        if (o.events) for (r in o.events) c[r] ? ue.event.remove(n, r) : ue.removeEvent(n, r, o.handle);l[i] && (delete l[i], u ? delete n[s] : typeof n.removeAttribute !== V ? n.removeAttribute(s) : n[s] = null, ee.push(i));
      }
    }, _evalUrl: function (e) {
      return ue.ajax({ url: e, type: "GET", dataType: "script", async: !1, global: !1, throws: !0 });
    } }), ue.fn.extend({ wrapAll: function (e) {
      if (ue.isFunction(e)) return this.each(function (t) {
        ue(this).wrapAll(e.call(this, t));
      });if (this[0]) {
        var t = ue(e, this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
          for (var e = this; e.firstChild && 1 === e.firstChild.nodeType;) e = e.firstChild;return e;
        }).append(this);
      }return this;
    }, wrapInner: function (e) {
      return ue.isFunction(e) ? this.each(function (t) {
        ue(this).wrapInner(e.call(this, t));
      }) : this.each(function () {
        var t = ue(this),
            n = t.contents();n.length ? n.wrapAll(e) : t.append(e);
      });
    }, wrap: function (e) {
      var t = ue.isFunction(e);return this.each(function (n) {
        ue(this).wrapAll(t ? e.call(this, n) : e);
      });
    }, unwrap: function () {
      return this.parent().each(function () {
        ue.nodeName(this, "body") || ue(this).replaceWith(this.childNodes);
      }).end();
    } });var st,
      lt,
      ut,
      ct = /alpha\([^)]*\)/i,
      dt = /opacity\s*=\s*([^)]*)/,
      ft = /^(top|right|bottom|left)$/,
      pt = /^(none|table(?!-c[ea]).+)/,
      ht = /^margin/,
      mt = RegExp("^(" + ce + ")(.*)$", "i"),
      gt = RegExp("^(" + ce + ")(?!px)[a-z%]+$", "i"),
      vt = RegExp("^([+-])=(" + ce + ")", "i"),
      yt = { BODY: "block" },
      bt = { position: "absolute", visibility: "hidden", display: "block" },
      xt = { letterSpacing: 0, fontWeight: 400 },
      wt = ["Top", "Right", "Bottom", "Left"],
      Ct = ["Webkit", "O", "Moz", "ms"];ue.fn.extend({ css: function (e, n) {
      return ue.access(this, function (e, n, r) {
        var i,
            o,
            a = {},
            s = 0;if (ue.isArray(n)) {
          for (o = lt(e), i = n.length; i > s; s++) a[n[s]] = ue.css(e, n[s], !1, o);return a;
        }return r !== t ? ue.style(e, n, r) : ue.css(e, n);
      }, e, n, arguments.length > 1);
    }, show: function () {
      return _(this, !0);
    }, hide: function () {
      return _(this);
    }, toggle: function (e) {
      var t = "boolean" == typeof e;return this.each(function () {
        (t ? e : k(this)) ? ue(this).show() : ue(this).hide();
      });
    } }), ue.extend({ cssHooks: { opacity: { get: function (e, t) {
          if (t) {
            var n = ut(e, "opacity");return "" === n ? "1" : n;
          }
        } } }, cssNumber: { columnCount: !0, fillOpacity: !0, fontWeight: !0, lineHeight: !0, opacity: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 }, cssProps: { float: ue.support.cssFloat ? "cssFloat" : "styleFloat" }, style: function (e, n, r, i) {
      if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
        var o,
            a,
            s,
            l = ue.camelCase(n),
            u = e.style;if (n = ue.cssProps[l] || (ue.cssProps[l] = C(u, l)), s = ue.cssHooks[n] || ue.cssHooks[l], r === t) return s && "get" in s && (o = s.get(e, !1, i)) !== t ? o : u[n];if ("string" === (a = typeof r) && (o = vt.exec(r)) && (r = (o[1] + 1) * o[2] + parseFloat(ue.css(e, n)), a = "number"), !(null == r || "number" === a && isNaN(r) || ("number" !== a || ue.cssNumber[l] || (r += "px"), ue.support.clearCloneStyle || "" !== r || 0 !== n.indexOf("background") || (u[n] = "inherit"), s && "set" in s && (r = s.set(e, r, i)) === t))) try {
          u[n] = r;
        } catch (e) {}
      }
    }, css: function (e, n, r, i) {
      var o,
          a,
          s,
          l = ue.camelCase(n);return n = ue.cssProps[l] || (ue.cssProps[l] = C(e.style, l)), (s = ue.cssHooks[n] || ue.cssHooks[l]) && "get" in s && (a = s.get(e, !0, r)), a === t && (a = ut(e, n, i)), "normal" === a && n in xt && (a = xt[n]), "" === r || r ? (o = parseFloat(a), !0 === r || ue.isNumeric(o) ? o || 0 : a) : a;
    } }), e.getComputedStyle ? (lt = function (t) {
    return e.getComputedStyle(t, null);
  }, ut = function (e, n, r) {
    var i,
        o,
        a,
        s = r || lt(e),
        l = s ? s.getPropertyValue(n) || s[n] : t,
        u = e.style;return s && ("" !== l || ue.contains(e.ownerDocument, e) || (l = ue.style(e, n)), gt.test(l) && ht.test(n) && (i = u.width, o = u.minWidth, a = u.maxWidth, u.minWidth = u.maxWidth = u.width = l, l = s.width, u.width = i, u.minWidth = o, u.maxWidth = a)), l;
  }) : G.documentElement.currentStyle && (lt = function (e) {
    return e.currentStyle;
  }, ut = function (e, n, r) {
    var i,
        o,
        a,
        s = r || lt(e),
        l = s ? s[n] : t,
        u = e.style;return null == l && u && u[n] && (l = u[n]), gt.test(l) && !ft.test(n) && (i = u.left, o = e.runtimeStyle, (a = o && o.left) && (o.left = e.currentStyle.left), u.left = "fontSize" === n ? "1em" : l, l = u.pixelLeft + "px", u.left = i, a && (o.left = a)), "" === l ? "auto" : l;
  }), ue.each(["height", "width"], function (e, n) {
    ue.cssHooks[n] = { get: function (e, r, i) {
        return r ? 0 === e.offsetWidth && pt.test(ue.css(e, "display")) ? ue.swap(e, bt, function () {
          return S(e, n, i);
        }) : S(e, n, i) : t;
      }, set: function (e, t, r) {
        var i = r && lt(e);return T(0, t, r ? A(e, n, r, ue.support.boxSizing && "border-box" === ue.css(e, "boxSizing", !1, i), i) : 0);
      } };
  }), ue.support.opacity || (ue.cssHooks.opacity = { get: function (e, t) {
      return dt.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : "";
    }, set: function (e, t) {
      var n = e.style,
          r = e.currentStyle,
          i = ue.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : "",
          o = r && r.filter || n.filter || "";n.zoom = 1, (t >= 1 || "" === t) && "" === ue.trim(o.replace(ct, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === t || r && !r.filter) || (n.filter = ct.test(o) ? o.replace(ct, i) : o + " " + i);
    } }), ue(function () {
    ue.support.reliableMarginRight || (ue.cssHooks.marginRight = { get: function (e, n) {
        return n ? ue.swap(e, { display: "inline-block" }, ut, [e, "marginRight"]) : t;
      } }), !ue.support.pixelPosition && ue.fn.position && ue.each(["top", "left"], function (e, n) {
      ue.cssHooks[n] = { get: function (e, r) {
          return r ? (r = ut(e, n), gt.test(r) ? ue(e).position()[n] + "px" : r) : t;
        } };
    });
  }), ue.expr && ue.expr.filters && (ue.expr.filters.hidden = function (e) {
    return 0 >= e.offsetWidth && 0 >= e.offsetHeight || !ue.support.reliableHiddenOffsets && "none" === (e.style && e.style.display || ue.css(e, "display"));
  }, ue.expr.filters.visible = function (e) {
    return !ue.expr.filters.hidden(e);
  }), ue.each({ margin: "", padding: "", border: "Width" }, function (e, t) {
    ue.cssHooks[e + t] = { expand: function (n) {
        for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; 4 > r; r++) i[e + wt[r] + t] = o[r] || o[r - 2] || o[0];return i;
      } }, ht.test(e) || (ue.cssHooks[e + t].set = T);
  });var kt = /%20/g,
      _t = /\[\]$/,
      Tt = /\r?\n/g,
      At = /^(?:submit|button|image|reset|file)$/i,
      St = /^(?:input|select|textarea|keygen)/i;ue.fn.extend({ serialize: function () {
      return ue.param(this.serializeArray());
    }, serializeArray: function () {
      return this.map(function () {
        var e = ue.prop(this, "elements");return e ? ue.makeArray(e) : this;
      }).filter(function () {
        var e = this.type;return this.name && !ue(this).is(":disabled") && St.test(this.nodeName) && !At.test(e) && (this.checked || !et.test(e));
      }).map(function (e, t) {
        var n = ue(this).val();return null == n ? null : ue.isArray(n) ? ue.map(n, function (e) {
          return { name: t.name, value: e.replace(Tt, "\r\n") };
        }) : { name: t.name, value: n.replace(Tt, "\r\n") };
      }).get();
    } }), ue.param = function (e, n) {
    var r,
        i = [],
        o = function (e, t) {
      t = ue.isFunction(t) ? t() : null == t ? "" : t, i[i.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t);
    };if (n === t && (n = ue.ajaxSettings && ue.ajaxSettings.traditional), ue.isArray(e) || e.jquery && !ue.isPlainObject(e)) ue.each(e, function () {
      o(this.name, this.value);
    });else for (r in e) F(r, e[r], n, o);return i.join("&").replace(kt, "+");
  }, ue.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (e, t) {
    ue.fn[t] = function (e, n) {
      return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t);
    };
  }), ue.fn.extend({ hover: function (e, t) {
      return this.mouseenter(e).mouseleave(t || e);
    }, bind: function (e, t, n) {
      return this.on(e, null, t, n);
    }, unbind: function (e, t) {
      return this.off(e, null, t);
    }, delegate: function (e, t, n, r) {
      return this.on(t, e, n, r);
    }, undelegate: function (e, t, n) {
      return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n);
    } });var Et,
      Nt,
      Ft = ue.now(),
      jt = /\?/,
      Dt = /#.*$/,
      Lt = /([?&])_=[^&]*/,
      $t = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
      It = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
      Ot = /^(?:GET|HEAD)$/,
      Mt = /^\/\//,
      Pt = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
      zt = ue.fn.load,
      Ht = {},
      qt = {},
      Rt = "*/".concat("*");try {
    Nt = X.href;
  } catch (e) {
    (Nt = G.createElement("a")).href = "", Nt = Nt.href;
  }Et = Pt.exec(Nt.toLowerCase()) || [], ue.fn.load = function (e, n, r) {
    if ("string" != typeof e && zt) return zt.apply(this, arguments);var i,
        o,
        a,
        s = this,
        l = e.indexOf(" ");return l >= 0 && (i = e.slice(l, e.length), e = e.slice(0, l)), ue.isFunction(n) ? (r = n, n = t) : n && "object" == typeof n && (a = "POST"), s.length > 0 && ue.ajax({ url: e, type: a, dataType: "html", data: n }).done(function (e) {
      o = arguments, s.html(i ? ue("<div>").append(ue.parseHTML(e)).find(i) : e);
    }).complete(r && function (e, t) {
      s.each(r, o || [e.responseText, t, e]);
    }), this;
  }, ue.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
    ue.fn[t] = function (e) {
      return this.on(t, e);
    };
  }), ue.extend({ active: 0, lastModified: {}, etag: {}, ajaxSettings: { url: Nt, type: "GET", isLocal: It.test(Et[1]), global: !0, processData: !0, async: !0, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: { "*": Rt, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" }, contents: { xml: /xml/, html: /html/, json: /json/ }, responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" }, converters: { "* text": String, "text html": !0, "text json": ue.parseJSON, "text xml": ue.parseXML }, flatOptions: { url: !0, context: !0 } }, ajaxSetup: function (e, t) {
      return t ? L(L(e, ue.ajaxSettings), t) : L(ue.ajaxSettings, e);
    }, ajaxPrefilter: j(Ht), ajaxTransport: j(qt), ajax: function (e, n) {
      function r(e, n, r, i) {
        var o,
            d,
            y,
            b,
            w,
            k = n;2 !== x && (x = 2, l && clearTimeout(l), c = t, s = i || "", C.readyState = e > 0 ? 4 : 0, o = e >= 200 && 300 > e || 304 === e, r && (b = $(f, C, r)), b = I(f, b, C, o), o ? (f.ifModified && ((w = C.getResponseHeader("Last-Modified")) && (ue.lastModified[a] = w), (w = C.getResponseHeader("etag")) && (ue.etag[a] = w)), 204 === e || "HEAD" === f.type ? k = "nocontent" : 304 === e ? k = "notmodified" : (k = b.state, d = b.data, y = b.error, o = !y)) : (y = k, (e || !k) && (k = "error", 0 > e && (e = 0))), C.status = e, C.statusText = (n || k) + "", o ? m.resolveWith(p, [d, k, C]) : m.rejectWith(p, [C, k, y]), C.statusCode(v), v = t, u && h.trigger(o ? "ajaxSuccess" : "ajaxError", [C, f, o ? d : y]), g.fireWith(p, [C, k]), u && (h.trigger("ajaxComplete", [C, f]), --ue.active || ue.event.trigger("ajaxStop")));
      }"object" == typeof e && (n = e, e = t), n = n || {};var i,
          o,
          a,
          s,
          l,
          u,
          c,
          d,
          f = ue.ajaxSetup({}, n),
          p = f.context || f,
          h = f.context && (p.nodeType || p.jquery) ? ue(p) : ue.event,
          m = ue.Deferred(),
          g = ue.Callbacks("once memory"),
          v = f.statusCode || {},
          y = {},
          b = {},
          x = 0,
          w = "canceled",
          C = { readyState: 0, getResponseHeader: function (e) {
          var t;if (2 === x) {
            if (!d) for (d = {}; t = $t.exec(s);) d[t[1].toLowerCase()] = t[2];t = d[e.toLowerCase()];
          }return null == t ? null : t;
        }, getAllResponseHeaders: function () {
          return 2 === x ? s : null;
        }, setRequestHeader: function (e, t) {
          var n = e.toLowerCase();return x || (e = b[n] = b[n] || e, y[e] = t), this;
        }, overrideMimeType: function (e) {
          return x || (f.mimeType = e), this;
        }, statusCode: function (e) {
          var t;if (e) if (2 > x) for (t in e) v[t] = [v[t], e[t]];else C.always(e[C.status]);return this;
        }, abort: function (e) {
          var t = e || w;return c && c.abort(t), r(0, t), this;
        } };if (m.promise(C).complete = g.add, C.success = C.done, C.error = C.fail, f.url = ((e || f.url || Nt) + "").replace(Dt, "").replace(Mt, Et[1] + "//"), f.type = n.method || n.type || f.method || f.type, f.dataTypes = ue.trim(f.dataType || "*").toLowerCase().match(de) || [""], null == f.crossDomain && (i = Pt.exec(f.url.toLowerCase()), f.crossDomain = !(!i || i[1] === Et[1] && i[2] === Et[2] && (i[3] || ("http:" === i[1] ? "80" : "443")) === (Et[3] || ("http:" === Et[1] ? "80" : "443")))), f.data && f.processData && "string" != typeof f.data && (f.data = ue.param(f.data, f.traditional)), D(Ht, f, n, C), 2 === x) return C;(u = f.global) && 0 == ue.active++ && ue.event.trigger("ajaxStart"), f.type = f.type.toUpperCase(), f.hasContent = !Ot.test(f.type), a = f.url, f.hasContent || (f.data && (a = f.url += (jt.test(a) ? "&" : "?") + f.data, delete f.data), !1 === f.cache && (f.url = Lt.test(a) ? a.replace(Lt, "$1_=" + Ft++) : a + (jt.test(a) ? "&" : "?") + "_=" + Ft++)), f.ifModified && (ue.lastModified[a] && C.setRequestHeader("If-Modified-Since", ue.lastModified[a]), ue.etag[a] && C.setRequestHeader("If-None-Match", ue.etag[a])), (f.data && f.hasContent && !1 !== f.contentType || n.contentType) && C.setRequestHeader("Content-Type", f.contentType), C.setRequestHeader("Accept", f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + ("*" !== f.dataTypes[0] ? ", " + Rt + "; q=0.01" : "") : f.accepts["*"]);for (o in f.headers) C.setRequestHeader(o, f.headers[o]);if (f.beforeSend && (!1 === f.beforeSend.call(p, C, f) || 2 === x)) return C.abort();w = "abort";for (o in { success: 1, error: 1, complete: 1 }) C[o](f[o]);if (c = D(qt, f, n, C)) {
        C.readyState = 1, u && h.trigger("ajaxSend", [C, f]), f.async && f.timeout > 0 && (l = setTimeout(function () {
          C.abort("timeout");
        }, f.timeout));try {
          x = 1, c.send(y, r);
        } catch (e) {
          if (!(2 > x)) throw e;r(-1, e);
        }
      } else r(-1, "No Transport");return C;
    }, getJSON: function (e, t, n) {
      return ue.get(e, t, n, "json");
    }, getScript: function (e, n) {
      return ue.get(e, t, n, "script");
    } }), ue.each(["get", "post"], function (e, n) {
    ue[n] = function (e, r, i, o) {
      return ue.isFunction(r) && (o = o || i, i = r, r = t), ue.ajax({ url: e, type: n, dataType: o, data: r, success: i });
    };
  }), ue.ajaxSetup({ accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" }, contents: { script: /(?:java|ecma)script/ }, converters: { "text script": function (e) {
        return ue.globalEval(e), e;
      } } }), ue.ajaxPrefilter("script", function (e) {
    e.cache === t && (e.cache = !1), e.crossDomain && (e.type = "GET", e.global = !1);
  }), ue.ajaxTransport("script", function (e) {
    if (e.crossDomain) {
      var n,
          r = G.head || ue("head")[0] || G.documentElement;return { send: function (t, i) {
          (n = G.createElement("script")).async = !0, e.scriptCharset && (n.charset = e.scriptCharset), n.src = e.url, n.onload = n.onreadystatechange = function (e, t) {
            (t || !n.readyState || /loaded|complete/.test(n.readyState)) && (n.onload = n.onreadystatechange = null, n.parentNode && n.parentNode.removeChild(n), n = null, t || i(200, "success"));
          }, r.insertBefore(n, r.firstChild);
        }, abort: function () {
          n && n.onload(t, !0);
        } };
    }
  });var Bt = [],
      Wt = /(=)\?(?=&|$)|\?\?/;ue.ajaxSetup({ jsonp: "callback", jsonpCallback: function () {
      var e = Bt.pop() || ue.expando + "_" + Ft++;return this[e] = !0, e;
    } }), ue.ajaxPrefilter("json jsonp", function (n, r, i) {
    var o,
        a,
        s,
        l = !1 !== n.jsonp && (Wt.test(n.url) ? "url" : "string" == typeof n.data && !(n.contentType || "").indexOf("application/x-www-form-urlencoded") && Wt.test(n.data) && "data");return l || "jsonp" === n.dataTypes[0] ? (o = n.jsonpCallback = ue.isFunction(n.jsonpCallback) ? n.jsonpCallback() : n.jsonpCallback, l ? n[l] = n[l].replace(Wt, "$1" + o) : !1 !== n.jsonp && (n.url += (jt.test(n.url) ? "&" : "?") + n.jsonp + "=" + o), n.converters["script json"] = function () {
      return s || ue.error(o + " was not called"), s[0];
    }, n.dataTypes[0] = "json", a = e[o], e[o] = function () {
      s = arguments;
    }, i.always(function () {
      e[o] = a, n[o] && (n.jsonpCallback = r.jsonpCallback, Bt.push(o)), s && ue.isFunction(a) && a(s[0]), s = a = t;
    }), "script") : t;
  });var Ut,
      Qt,
      Vt = 0,
      Xt = e.ActiveXObject && function () {
    var e;for (e in Ut) Ut[e](t, !0);
  };ue.ajaxSettings.xhr = e.ActiveXObject ? function () {
    return !this.isLocal && O() || M();
  } : O, Qt = ue.ajaxSettings.xhr(), ue.support.cors = !!Qt && "withCredentials" in Qt, (Qt = ue.support.ajax = !!Qt) && ue.ajaxTransport(function (n) {
    if (!n.crossDomain || ue.support.cors) {
      var r;return { send: function (i, o) {
          var a,
              s,
              l = n.xhr();if (n.username ? l.open(n.type, n.url, n.async, n.username, n.password) : l.open(n.type, n.url, n.async), n.xhrFields) for (s in n.xhrFields) l[s] = n.xhrFields[s];n.mimeType && l.overrideMimeType && l.overrideMimeType(n.mimeType), n.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest");try {
            for (s in i) l.setRequestHeader(s, i[s]);
          } catch (e) {}l.send(n.hasContent && n.data || null), r = function (e, i) {
            var s, u, c, d;try {
              if (r && (i || 4 === l.readyState)) if (r = t, a && (l.onreadystatechange = ue.noop, Xt && delete Ut[a]), i) 4 !== l.readyState && l.abort();else {
                d = {}, s = l.status, u = l.getAllResponseHeaders(), "string" == typeof l.responseText && (d.text = l.responseText);try {
                  c = l.statusText;
                } catch (e) {
                  c = "";
                }s || !n.isLocal || n.crossDomain ? 1223 === s && (s = 204) : s = d.text ? 200 : 404;
              }
            } catch (e) {
              i || o(-1, e);
            }d && o(s, c, d, u);
          }, n.async ? 4 === l.readyState ? setTimeout(r) : (a = ++Vt, Xt && (Ut || (Ut = {}, ue(e).unload(Xt)), Ut[a] = r), l.onreadystatechange = r) : r();
        }, abort: function () {
          r && r(t, !0);
        } };
    }
  });var Gt,
      Jt,
      Zt = /^(?:toggle|show|hide)$/,
      Yt = RegExp("^(?:([+-])=|)(" + ce + ")([a-z%]*)$", "i"),
      Kt = /queueHooks$/,
      en = [function (e, t, n) {
    var r,
        i,
        o,
        a,
        s,
        l,
        u = this,
        c = {},
        d = e.style,
        f = e.nodeType && k(e),
        p = ue._data(e, "fxshow");n.queue || (null == (s = ue._queueHooks(e, "fx")).unqueued && (s.unqueued = 0, l = s.empty.fire, s.empty.fire = function () {
      s.unqueued || l();
    }), s.unqueued++, u.always(function () {
      u.always(function () {
        s.unqueued--, ue.queue(e, "fx").length || s.empty.fire();
      });
    })), 1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [d.overflow, d.overflowX, d.overflowY], "inline" === ue.css(e, "display") && "none" === ue.css(e, "float") && (ue.support.inlineBlockNeedsLayout && "inline" !== E(e.nodeName) ? d.zoom = 1 : d.display = "inline-block")), n.overflow && (d.overflow = "hidden", ue.support.shrinkWrapBlocks || u.always(function () {
      d.overflow = n.overflow[0], d.overflowX = n.overflow[1], d.overflowY = n.overflow[2];
    }));for (r in t) if (i = t[r], Zt.exec(i)) {
      if (delete t[r], o = o || "toggle" === i, i === (f ? "hide" : "show")) continue;c[r] = p && p[r] || ue.style(e, r);
    }if (!ue.isEmptyObject(c)) {
      p ? "hidden" in p && (f = p.hidden) : p = ue._data(e, "fxshow", {}), o && (p.hidden = !f), f ? ue(e).show() : u.done(function () {
        ue(e).hide();
      }), u.done(function () {
        var t;ue._removeData(e, "fxshow");for (t in c) ue.style(e, t, c[t]);
      });for (r in c) a = z(f ? p[r] : 0, r, u), r in p || (p[r] = a.start, f && (a.end = a.start, a.start = "width" === r || "height" === r ? 1 : 0));
    }
  }],
      tn = { "*": [function (e, t) {
      var n = this.createTween(e, t),
          r = n.cur(),
          i = Yt.exec(t),
          o = i && i[3] || (ue.cssNumber[e] ? "" : "px"),
          a = (ue.cssNumber[e] || "px" !== o && +r) && Yt.exec(ue.css(n.elem, e)),
          s = 1,
          l = 20;if (a && a[3] !== o) {
        o = o || a[3], i = i || [], a = +r || 1;do {
          s = s || ".5", a /= s, ue.style(n.elem, e, a + o);
        } while (s !== (s = n.cur() / r) && 1 !== s && --l);
      }return i && (n.unit = o, n.start = +a || +r || 0, n.end = i[1] ? a + (i[1] + 1) * i[2] : +i[2]), n;
    }] };ue.Animation = ue.extend(H, { tweener: function (e, t) {
      ue.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");for (var n, r = 0, i = e.length; i > r; r++) n = e[r], tn[n] = tn[n] || [], tn[n].unshift(t);
    }, prefilter: function (e, t) {
      t ? en.unshift(e) : en.push(e);
    } }), ue.Tween = R, R.prototype = { constructor: R, init: function (e, t, n, r, i, o) {
      this.elem = e, this.prop = n, this.easing = i || "swing", this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (ue.cssNumber[n] ? "" : "px");
    }, cur: function () {
      var e = R.propHooks[this.prop];return e && e.get ? e.get(this) : R.propHooks._default.get(this);
    }, run: function (e) {
      var t,
          n = R.propHooks[this.prop];return this.pos = t = this.options.duration ? ue.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : R.propHooks._default.set(this), this;
    } }, R.prototype.init.prototype = R.prototype, R.propHooks = { _default: { get: function (e) {
        var t;return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = ue.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0 : e.elem[e.prop];
      }, set: function (e) {
        ue.fx.step[e.prop] ? ue.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[ue.cssProps[e.prop]] || ue.cssHooks[e.prop]) ? ue.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now;
      } } }, R.propHooks.scrollTop = R.propHooks.scrollLeft = { set: function (e) {
      e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
    } }, ue.each(["toggle", "show", "hide"], function (e, t) {
    var n = ue.fn[t];ue.fn[t] = function (e, r, i) {
      return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(B(t, !0), e, r, i);
    };
  }), ue.fn.extend({ fadeTo: function (e, t, n, r) {
      return this.filter(k).css("opacity", 0).show().end().animate({ opacity: t }, e, n, r);
    }, animate: function (e, t, n, r) {
      var i = ue.isEmptyObject(e),
          o = ue.speed(t, n, r),
          a = function () {
        var t = H(this, ue.extend({}, e), o);a.finish = function () {
          t.stop(!0);
        }, (i || ue._data(this, "finish")) && t.stop(!0);
      };return a.finish = a, i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a);
    }, stop: function (e, n, r) {
      var i = function (e) {
        var t = e.stop;delete e.stop, t(r);
      };return "string" != typeof e && (r = n, n = e, e = t), n && !1 !== e && this.queue(e || "fx", []), this.each(function () {
        var t = !0,
            n = null != e && e + "queueHooks",
            o = ue.timers,
            a = ue._data(this);if (n) a[n] && a[n].stop && i(a[n]);else for (n in a) a[n] && a[n].stop && Kt.test(n) && i(a[n]);for (n = o.length; n--;) o[n].elem !== this || null != e && o[n].queue !== e || (o[n].anim.stop(r), t = !1, o.splice(n, 1));(t || !r) && ue.dequeue(this, e);
      });
    }, finish: function (e) {
      return !1 !== e && (e = e || "fx"), this.each(function () {
        var t,
            n = ue._data(this),
            r = n[e + "queue"],
            i = n[e + "queueHooks"],
            o = ue.timers,
            a = r ? r.length : 0;for (n.finish = !0, ue.queue(this, e, []), i && i.cur && i.cur.finish && i.cur.finish.call(this), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));for (t = 0; a > t; t++) r[t] && r[t].finish && r[t].finish.call(this);delete n.finish;
      });
    } }), ue.each({ slideDown: B("show"), slideUp: B("hide"), slideToggle: B("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function (e, t) {
    ue.fn[e] = function (e, n, r) {
      return this.animate(t, e, n, r);
    };
  }), ue.speed = function (e, t, n) {
    var r = e && "object" == typeof e ? ue.extend({}, e) : { complete: n || !n && t || ue.isFunction(e) && e, duration: e, easing: n && t || t && !ue.isFunction(t) && t };return r.duration = ue.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in ue.fx.speeds ? ue.fx.speeds[r.duration] : ue.fx.speeds._default, (null == r.queue || !0 === r.queue) && (r.queue = "fx"), r.old = r.complete, r.complete = function () {
      ue.isFunction(r.old) && r.old.call(this), r.queue && ue.dequeue(this, r.queue);
    }, r;
  }, ue.easing = { linear: function (e) {
      return e;
    }, swing: function (e) {
      return .5 - Math.cos(e * Math.PI) / 2;
    } }, ue.timers = [], ue.fx = R.prototype.init, ue.fx.tick = function () {
    var e,
        n = ue.timers,
        r = 0;for (Gt = ue.now(); n.length > r; r++) (e = n[r])() || n[r] !== e || n.splice(r--, 1);n.length || ue.fx.stop(), Gt = t;
  }, ue.fx.timer = function (e) {
    e() && ue.timers.push(e) && ue.fx.start();
  }, ue.fx.interval = 13, ue.fx.start = function () {
    Jt || (Jt = setInterval(ue.fx.tick, ue.fx.interval));
  }, ue.fx.stop = function () {
    clearInterval(Jt), Jt = null;
  }, ue.fx.speeds = { slow: 600, fast: 200, _default: 400 }, ue.fx.step = {}, ue.expr && ue.expr.filters && (ue.expr.filters.animated = function (e) {
    return ue.grep(ue.timers, function (t) {
      return e === t.elem;
    }).length;
  }), ue.fn.offset = function (e) {
    if (arguments.length) return e === t ? this : this.each(function (t) {
      ue.offset.setOffset(this, e, t);
    });var n,
        r,
        i = { top: 0, left: 0 },
        o = this[0],
        a = o && o.ownerDocument;return a ? (n = a.documentElement, ue.contains(n, o) ? (typeof o.getBoundingClientRect !== V && (i = o.getBoundingClientRect()), r = W(a), { top: i.top + (r.pageYOffset || n.scrollTop) - (n.clientTop || 0), left: i.left + (r.pageXOffset || n.scrollLeft) - (n.clientLeft || 0) }) : i) : void 0;
  }, ue.offset = { setOffset: function (e, t, n) {
      var r = ue.css(e, "position");"static" === r && (e.style.position = "relative");var i,
          o,
          a = ue(e),
          s = a.offset(),
          l = ue.css(e, "top"),
          u = ue.css(e, "left"),
          c = {},
          d = {};("absolute" === r || "fixed" === r) && ue.inArray("auto", [l, u]) > -1 ? (d = a.position(), i = d.top, o = d.left) : (i = parseFloat(l) || 0, o = parseFloat(u) || 0), ue.isFunction(t) && (t = t.call(e, n, s)), null != t.top && (c.top = t.top - s.top + i), null != t.left && (c.left = t.left - s.left + o), "using" in t ? t.using.call(e, c) : a.css(c);
    } }, ue.fn.extend({ position: function () {
      if (this[0]) {
        var e,
            t,
            n = { top: 0, left: 0 },
            r = this[0];return "fixed" === ue.css(r, "position") ? t = r.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), ue.nodeName(e[0], "html") || (n = e.offset()), n.top += ue.css(e[0], "borderTopWidth", !0), n.left += ue.css(e[0], "borderLeftWidth", !0)), { top: t.top - n.top - ue.css(r, "marginTop", !0), left: t.left - n.left - ue.css(r, "marginLeft", !0) };
      }
    }, offsetParent: function () {
      return this.map(function () {
        for (var e = this.offsetParent || J; e && !ue.nodeName(e, "html") && "static" === ue.css(e, "position");) e = e.offsetParent;return e || J;
      });
    } }), ue.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (e, n) {
    var r = /Y/.test(n);ue.fn[e] = function (i) {
      return ue.access(this, function (e, i, o) {
        var a = W(e);return o === t ? a ? n in a ? a[n] : a.document.documentElement[i] : e[i] : (a ? a.scrollTo(r ? ue(a).scrollLeft() : o, r ? o : ue(a).scrollTop()) : e[i] = o, t);
      }, e, i, arguments.length, null);
    };
  }), ue.each({ Height: "height", Width: "width" }, function (e, n) {
    ue.each({ padding: "inner" + e, content: n, "": "outer" + e }, function (r, i) {
      ue.fn[i] = function (i, o) {
        var a = arguments.length && (r || "boolean" != typeof i),
            s = r || (!0 === i || !0 === o ? "margin" : "border");return ue.access(this, function (n, r, i) {
          var o;return ue.isWindow(n) ? n.document.documentElement["client" + e] : 9 === n.nodeType ? (o = n.documentElement, Math.max(n.body["scroll" + e], o["scroll" + e], n.body["offset" + e], o["offset" + e], o["client" + e])) : i === t ? ue.css(n, r, s) : ue.style(n, r, i, s);
        }, n, a ? i : t, a, null);
      };
    });
  }), ue.fn.size = function () {
    return this.length;
  }, ue.fn.andSelf = ue.fn.addBack, "object" == typeof module && "object" == typeof module.exports ? module.exports = ue : (e.jQuery = e.$ = ue, "function" == typeof define && define.amd && define("jquery", [], function () {
    return ue;
  }));
}(window), jQuery.fn.labelify = function (e) {
  e = jQuery.extend({ text: "title", labelledClass: "" }, e);var t,
      n = { title: function (e) {
      return $(e).attr("title");
    }, label: function (e) {
      return $("label[for=" + e.id + "]").text();
    } },
      r = $(this);return $(this).each(function () {
    if ("function" == typeof (t = "string" == typeof e.text ? n[e.text] : e.text) && t(this)) {
      $(this).data("label", t(this).replace(/\n/g, "")), $(this).focus(function () {
        this.value === $(this).data("label") && (this.value = this.defaultValue, $(this).removeClass(e.labelledClass));
      }).blur(function () {
        this.value === this.defaultValue && (this.value = $(this).data("label"), $(this).addClass(e.labelledClass));
      });var i = function () {
        r.each(function () {
          this.value === $(this).data("label") && (this.value = this.defaultValue, $(this).removeClass(e.labelledClass));
        });
      };$(this).parents("form").submit(i), $(window).unload(i), this.value === this.defaultValue && (this.value = $(this).data("label"), $(this).addClass(e.labelledClass));
    }
  });
}, function (e) {
  e.fn.qtip = function (t) {
    var n = e.extend({ speed: 200, mode: "below", space: 70 }, t);return this.each(function () {
      var t = -1;e(document).on("mousemove", function (e) {
        t = e.clientY;
      });var r = e(window).height(),
          i = e(this).attr("title");e(this).removeAttr("title alt"), e(this).hover(function () {
        var o = n.mode;e(window).on("resize", function () {
          r = e(window).height();
        }), r - t < n.space ? o = "above" : (o = n.mode, e(this).attr("data-mode") && (o = e(this).attr("data-mode"))), tipr_cont = ".tipr_container_" + o;var a = '<div class="tipr_container_' + o + '"><div class="tipr_point_' + o + '"><div class="tipr_content">' + i + "</div></div></div>";e(this).after(a);var s = e(tipr_cont).outerWidth(),
            l = (e(this).width(), -s / 2 - 10);e(tipr_cont).css("margin-left", l + "px"), e(tipr_cont).fadeIn(n.speed).css("display", "inline-block");
      }, function () {
        e(tipr_cont).remove();
      });
    });
  };
}(jQuery), function (e, t, n) {
  function r(e, t) {
    return typeof e === t;
  }function i(e) {
    var t = k.className,
        n = C._config.classPrefix || "";if (_ && (t = t.baseVal), C._config.enableJSClass) {
      var r = new RegExp("(^|\\s)" + n + "no-js(\\s|$)");t = t.replace(r, "$1" + n + "js$2");
    }C._config.enableClasses && (t += " " + n + e.join(" " + n), _ ? k.className.baseVal = t : k.className = t);
  }function o() {
    return "function" != typeof t.createElement ? t.createElement(arguments[0]) : _ ? t.createElementNS.call(t, "http://www.w3.org/2000/svg", arguments[0]) : t.createElement.apply(t, arguments);
  }function a(e, t) {
    return !!~("" + e).indexOf(t);
  }function s(e, t) {
    if ("object" == typeof e) for (var n in e) A(e, n) && s(n, e[n]);else {
      var r = (e = e.toLowerCase()).split("."),
          o = C[r[0]];if (2 == r.length && (o = o[r[1]]), void 0 !== o) return C;t = "function" == typeof t ? t() : t, 1 == r.length ? C[r[0]] = t : (!C[r[0]] || C[r[0]] instanceof Boolean || (C[r[0]] = new Boolean(C[r[0]])), C[r[0]][r[1]] = t), i([(t && 0 != t ? "" : "no-") + r.join("-")]), C._trigger(e, t);
    }return C;
  }function l() {
    var e = t.body;return e || ((e = o(_ ? "svg" : "body")).fake = !0), e;
  }function u(e, n, r, i) {
    var a,
        s,
        u,
        c,
        d = "modernizr",
        f = o("div"),
        p = l();if (parseInt(r, 10)) for (; r--;) (u = o("div")).id = i ? i[r] : d + (r + 1), f.appendChild(u);return a = o("style"), a.type = "text/css", a.id = "s" + d, (p.fake ? p : f).appendChild(a), p.appendChild(f), a.styleSheet ? a.styleSheet.cssText = e : a.appendChild(t.createTextNode(e)), f.id = d, p.fake && (p.style.background = "", p.style.overflow = "hidden", c = k.style.overflow, k.style.overflow = "hidden", k.appendChild(p)), s = n(f, e), p.fake ? (p.parentNode.removeChild(p), k.style.overflow = c, k.offsetHeight) : f.parentNode.removeChild(f), !!s;
  }function c(e) {
    return e.replace(/([a-z])-([a-z])/g, function (e, t, n) {
      return t + n.toUpperCase();
    }).replace(/^-/, "");
  }function d(e, t) {
    return function () {
      return e.apply(t, arguments);
    };
  }function f(e, t, n) {
    var i;for (var o in e) if (e[o] in t) return !1 === n ? e[o] : (i = t[e[o]], r(i, "function") ? d(i, n || t) : i);return !1;
  }function p(e) {
    return e.replace(/([A-Z])/g, function (e, t) {
      return "-" + t.toLowerCase();
    }).replace(/^ms-/, "-ms-");
  }function h(t, n, r) {
    var i;if ("getComputedStyle" in e) {
      i = getComputedStyle.call(e, t, n);var o = e.console;null !== i ? r && (i = i.getPropertyValue(r)) : o && o[o.error ? "error" : "log"].call(o, "getComputedStyle returning null, its possible modernizr test results are inaccurate");
    } else i = !n && t.currentStyle && t.currentStyle[r];return i;
  }function m(t, r) {
    var i = t.length;if ("CSS" in e && "supports" in e.CSS) {
      for (; i--;) if (e.CSS.supports(p(t[i]), r)) return !0;return !1;
    }if ("CSSSupportsRule" in e) {
      for (var o = []; i--;) o.push("(" + p(t[i]) + ":" + r + ")");return o = o.join(" or "), u("@supports (" + o + ") { #modernizr { position: absolute; } }", function (e) {
        return "absolute" == h(e, null, "position");
      });
    }return n;
  }function g(e, t, i, s) {
    function l() {
      d && (delete j.style, delete j.modElem);
    }if (s = !r(s, "undefined") && s, !r(i, "undefined")) {
      var u = m(e, i);if (!r(u, "undefined")) return u;
    }for (var d, f, p, h, g, v = ["modernizr", "tspan", "samp"]; !j.style && v.length;) d = !0, j.modElem = o(v.shift()), j.style = j.modElem.style;for (p = e.length, f = 0; f < p; f++) if (h = e[f], g = j.style[h], a(h, "-") && (h = c(h)), j.style[h] !== n) {
      if (s || r(i, "undefined")) return l(), "pfx" != t || h;try {
        j.style[h] = i;
      } catch (e) {}if (j.style[h] != g) return l(), "pfx" != t || h;
    }return l(), !1;
  }function v(e, t, n, i, o) {
    var a = e.charAt(0).toUpperCase() + e.slice(1),
        s = (e + " " + E.join(a + " ") + a).split(" ");return r(t, "string") || r(t, "undefined") ? g(s, t, i, o) : (s = (e + " " + N.join(a + " ") + a).split(" "), f(s, t, n));
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
      C = function () {};C.prototype = w, (C = new C()).addTest("svg", !!t.createElementNS && !!t.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect), C.addTest("localstorage", function () {
    var e = "modernizr";try {
      return localStorage.setItem(e, e), localStorage.removeItem(e), !0;
    } catch (e) {
      return !1;
    }
  });var k = t.documentElement,
      _ = "svg" === k.nodeName.toLowerCase();C.addTest("canvas", function () {
    var e = o("canvas");return !(!e.getContext || !e.getContext("2d"));
  }), C.addTest("webgl", function () {
    var t = o("canvas"),
        n = "probablySupportsContext" in t ? "probablySupportsContext" : "supportsContext";return n in t ? t[n]("webgl") || t[n]("experimental-webgl") : "WebGLRenderingContext" in e;
  }), C.addTest("rgba", function () {
    var e = o("a").style;return e.cssText = "background-color:rgba(150,255,150,.5)", ("" + e.backgroundColor).indexOf("rgba") > -1;
  }), C.addTest("inlinesvg", function () {
    var e = o("div");return e.innerHTML = "<svg/>", "http://www.w3.org/2000/svg" == ("undefined" != typeof SVGRect && e.firstChild && e.firstChild.namespaceURI);
  });var T = w._config.usePrefixes ? " -webkit- -moz- -o- -ms- ".split(" ") : ["", ""];w._prefixes = T, C.addTest("hsla", function () {
    var e = o("a").style;return e.cssText = "background-color:hsla(120,40%,100%,.5)", a(e.backgroundColor, "rgba") || a(e.backgroundColor, "hsla");
  });var A;!function () {
    var e = {}.hasOwnProperty;A = r(e, "undefined") || r(e.call, "undefined") ? function (e, t) {
      return t in e && r(e.constructor.prototype[t], "undefined");
    } : function (t, n) {
      return e.call(t, n);
    };
  }(), w._l = {}, w.on = function (e, t) {
    this._l[e] || (this._l[e] = []), this._l[e].push(t), C.hasOwnProperty(e) && setTimeout(function () {
      C._trigger(e, C[e]);
    }, 0);
  }, w._trigger = function (e, t) {
    if (this._l[e]) {
      var n = this._l[e];setTimeout(function () {
        var e;for (e = 0; e < n.length; e++) (0, n[e])(t);
      }, 0), delete this._l[e];
    }
  }, C._q.push(function () {
    w.addTest = s;
  }), C.addAsyncTest(function () {
    function e(e, t, n) {
      function r(t) {
        var r = !(!t || "load" !== t.type) && 1 == i.width;s(e, "webp" === e && r ? new Boolean(r) : r), n && n(t);
      }var i = new Image();i.onerror = r, i.onload = r, i.src = t;
    }var t = [{ uri: "data:image/webp;base64,UklGRiQAAABXRUJQVlA4IBgAAAAwAQCdASoBAAEAAwA0JaQAA3AA/vuUAAA=", name: "webp" }, { uri: "data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA==", name: "webp.alpha" }, { uri: "data:image/webp;base64,UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA", name: "webp.animation" }, { uri: "data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA=", name: "webp.lossless" }],
        n = t.shift();e(n.name, n.uri, function (n) {
      if (n && "load" === n.type) for (var r = 0; r < t.length; r++) e(t[r].name, t[r].uri);
    });
  });var S = w.testStyles = u;C.addTest("touchevents", function () {
    var n;if ("ontouchstart" in e || e.DocumentTouch && t instanceof DocumentTouch) n = !0;else {
      var r = ["@media (", T.join("touch-enabled),("), "heartz", ")", "{#modernizr{top:9px;position:absolute}}"].join("");S(r, function (e) {
        n = 9 === e.offsetTop;
      });
    }return n;
  }), function () {
    var e = navigator.userAgent,
        t = e.match(/w(eb)?osbrowser/gi),
        n = e.match(/windows phone/gi) && e.match(/iemobile\/([0-9])+/gi) && parseFloat(RegExp.$1) >= 9;return t || n;
  }() ? C.addTest("fontface", !1) : S('@font-face {font-family:"font";src:url("https://")}', function (e, n) {
    var r = t.getElementById("smodernizr"),
        i = r.sheet || r.styleSheet,
        o = i ? i.cssRules && i.cssRules[0] ? i.cssRules[0].cssText : i.cssText || "" : "",
        a = /src/i.test(o) && 0 === o.indexOf(n.split(" ")[0]);C.addTest("fontface", a);
  });var E = w._config.usePrefixes ? "Moz O ms Webkit".split(" ") : [];w._cssomPrefixes = E;var N = w._config.usePrefixes ? "Moz O ms Webkit".toLowerCase().split(" ") : [];w._domPrefixes = N;var F = { elem: o("modernizr") };C._q.push(function () {
    delete F.elem;
  });var j = { style: F.elem.style };C._q.unshift(function () {
    delete j.style;
  }), w.testAllProps = v, w.testAllProps = y, C.addTest("backgroundsize", y("backgroundSize", "100%", !0)), C.addTest("flexbox", y("flexBasis", "1px", !0)), C.addTest("flexboxlegacy", y("boxDirection", "reverse", !0)), function () {
    var e, t, n, i, o, a;for (var s in x) if (x.hasOwnProperty(s)) {
      if (e = [], (t = x[s]).name && (e.push(t.name.toLowerCase()), t.options && t.options.aliases && t.options.aliases.length)) for (n = 0; n < t.options.aliases.length; n++) e.push(t.options.aliases[n].toLowerCase());for (i = r(t.fn, "function") ? t.fn() : t.fn, o = 0; o < e.length; o++) 1 === (a = e[o].split(".")).length ? C[a[0]] = i : (!C[a[0]] || C[a[0]] instanceof Boolean || (C[a[0]] = new Boolean(C[a[0]])), C[a[0]][a[1]] = i), b.push((i ? "" : "no-") + a.join("-"));
    }
  }(), i(b), delete w.addTest, delete w.addAsyncTest;for (var D = 0; D < C._q.length; D++) C._q[D]();e.Modernizr = C;
}(window, document);var i18n_messages;if (function (e) {
  e.extend(e.fn, { validate: function (t) {
      if (this.length) {
        var n = e.data(this[0], "validator");return n || (n = new e.validator(t, this[0]), e.data(this[0], "validator", n), n.settings.onsubmit && (this.find("input, button").filter(".cancel").click(function () {
          n.cancelSubmit = !0;
        }), n.settings.submitHandler && this.find("input, button").filter(":submit").click(function () {
          n.submitButton = this;
        }), this.submit(function (t) {
          function r() {
            if (n.settings.submitHandler) {
              if (n.submitButton) var t = e("<input type='hidden'/>").attr("name", n.submitButton.name).val(n.submitButton.value).appendTo(n.currentForm);return n.settings.submitHandler.call(n, n.currentForm), n.submitButton && t.remove(), !1;
            }return !0;
          }return n.settings.debug && t.preventDefault(), n.cancelSubmit ? (n.cancelSubmit = !1, r()) : n.form() ? n.pendingRequest ? (n.formSubmitted = !0, !1) : r() : (n.focusInvalid(), !1);
        })), n);
      }t && t.debug && window.console;
    }, valid: function () {
      if (e(this[0]).is("form")) return this.validate().form();var t = !0,
          n = e(this[0].form).validate();return this.each(function () {
        t &= n.element(this);
      }), t;
    }, removeAttrs: function (t) {
      var n = {},
          r = this;return e.each(t.split(/\s/), function (e, t) {
        n[t] = r.attr(t), r.removeAttr(t);
      }), n;
    }, rules: function (t, n) {
      var r = this[0];if (t) {
        var i = e.data(r.form, "validator").settings,
            o = i.rules,
            a = e.validator.staticRules(r);switch (t) {case "add":
            e.extend(a, e.validator.normalizeRule(n)), o[r.name] = a, n.messages && (i.messages[r.name] = e.extend(i.messages[r.name], n.messages));break;case "remove":
            if (!n) return delete o[r.name], a;var s = {};return e.each(n.split(/\s/), function (e, t) {
              s[t] = a[t], delete a[t];
            }), s;}
      }var l = e.validator.normalizeRules(e.extend({}, e.validator.metadataRules(r), e.validator.classRules(r), e.validator.attributeRules(r), e.validator.staticRules(r)), r);if (l.required) {
        var u = l.required;delete l.required, l = e.extend({ required: u }, l);
      }return l;
    } }), e.extend(e.expr[":"], { blank: function (t) {
      return !e.trim("" + t.value);
    }, filled: function (t) {
      return !!e.trim("" + t.value);
    }, unchecked: function (e) {
      return !e.checked;
    } }), e.validator = function (t, n) {
    this.settings = e.extend(!0, {}, e.validator.defaults, t), this.currentForm = n, this.init();
  }, e.validator.format = function (t, n) {
    return 1 == arguments.length ? function () {
      var n = e.makeArray(arguments);return n.unshift(t), e.validator.format.apply(this, n);
    } : (arguments.length > 2 && n.constructor != Array && (n = e.makeArray(arguments).slice(1)), n.constructor != Array && (n = [n]), e.each(n, function (e, n) {
      t = t.replace(new RegExp("\\{" + e + "\\}", "g"), n);
    }), t);
  };var t = e("html").attr("lang");switch (void 0 === t && (t = "en"), t.substring(0, 2)) {case "es":
      i18n_messages = { required: "Este campo es obligatorio.", required_check: "Este campo es obligatorio.", add_address_number: "Por favor, indica el número de tu casa.", remote: "Por favor, rellene esta campo.", email: "Por favor, escriba una direcci&oacute;n de correo v&aacute;lida", url: "Por favor, escriba una URL válida.", date: "Por favor, escriba una fecha válida.", dateISO: "Por favor, escriba una fecha (ISO) válida.", number: "Por favor, escriba un número entero válido.", digits: "Por favor, escriba sólo dígitos.", creditcard: "Por favor, escriba un número de tarjeta válido.", equalTo: "Por favor, escriba el mismo valor de nuevo.", accept: "Por favor, escriba una valor con una extensión aceptada.", maxlength: jQuery.validator.format("Por favor, no escriba más de {0} caracteres."), minlength: jQuery.validator.format("Por favor, no escriba menos de {0} caracteres."), rangelength: jQuery.validator.format("Por favor, escriba un valor entre {0} y {1} caracteres."), range: jQuery.validator.format("Por favor, escriba un valor entre {0} y {1}."), max: jQuery.validator.format("Por favor, escriba un valor igual o menor que {0}."), min: jQuery.validator.format("Por favor, escriba un valor igual o mayor que {0}."), unique: "Este email ya ha sido registrado.", fullname: "Por favor, introduzca su nombre y apellido.", boxoffice: "Lo sentimos pero no podemos realizar envíos a apartados de correos. Gracias por su comprensión.", frenchDom: "Por favor, elige tu DOM-TOM.", phone: "Introduce un formato de número de teléfono válido." };break;case "ru":
      i18n_messages = { required: "Заполнить поле.", required_check: "Заполнить поле.", add_address_number: "Пожалуйста, добавьте ваш адрес.", remote: "Пожалуйста, заполните поле.", email: "Пожалуйста, введите действительный эмайл", url: "Пожалуйста, введите действительный URL.", date: "Пожалуйста, введите действительное число.", dateISO: "Пожалуйста, введите действительное число (ISO).", dateDE: "Bitte geben Sie ein gültiges Datum ein.", number: "Пожалуйста, введите действительный полный номер.", numberDE: "Bitte geben Sie eine Nummer ein.", digits: "Пожалуйста, введите только цифры.", creditcard: "Пожалуйста, введите действительный номер пластиковой карты.", equalTo: "Пожалуйста, напишите заново.", accept: "Пожалуйста, введите заново.", maxlength: jQuery.validator.format("Пожалуйста, не вводите больше {0} символов."), minlength: jQuery.validator.format("Пожалуйста, не вводите меньше {0} символов."), rangelength: jQuery.validator.format("Пожалуйста, введите значение между {0} и {1} символов."), range: jQuery.validator.format("Пожалуйста, введите значение между {0} и {1}."), max: jQuery.validator.format("Пожалуйста, введите значение равно или меньше {0}."), min: jQuery.validator.format("Пожалуйста, введите значение равно или больше {0}."), unique: "Данный эмайл был зарегистрирован", fullname: "Пожалуйста, введите Ваше имя и фамилию", boxoffice: "К сожалению, мы не в состоянии отправить Ваш заказ в почтовый ящик.", frenchDom: "Please, choose your DOM-TOM in the country list." };break;case "fr":
      i18n_messages = { required: "Ce champ est requis.", required_check: "Ce champ est requis.", add_address_number: "Merci de bien vouloir indiquer le numéro de votre rue.", remote: "Veuillez remplir ce champ pour continuer.", email: "Veuillez entrer une adresse email valide.", url: "Veuillez entrer une URL valide.", date: "Veuillez entrer une date valide.", dateISO: "Veuillez entrer une date valide (ISO).", number: "Veuillez entrer un nombre valide.", digits: "Veuillez entrer (seulement) une valeur numérique.", creditcard: "Veuillez entrer un numéro de carte de crédit valide.", equalTo: "Veuillez entrer une nouvelle fois la même valeur.", accept: "Veuillez entrer une valeur avec une extension valide.", maxlength: jQuery.validator.format("Veuillez ne pas entrer plus de {0} caractères."), minlength: jQuery.validator.format("Veuillez entrer au moins {0} caractères."), rangelength: jQuery.validator.format("Veuillez entrer entre {0} et {1} caractères."), range: jQuery.validator.format("Veuillez entrer une valeur entre {0} et {1}."), max: jQuery.validator.format("Veuillez entrer une valeur inférieure ou égale à {0}."), min: jQuery.validator.format("Veuillez entrer une valeur supérieure ou égale à {0}."), unique: "Cet e-mail a déjà été enregistrée", fullname: "Merci de bien vouloir laisser votre prénom et votre nom", boxoffice: "Nous sommes désolés mais nous ne livrons pas aux boîtes postales.  Merci pour votre compréhension. ", frenchDom: "Veuillez choisir votre DOM-TOM (territoire) dans la liste des pays ci-jointe." };break;case "it":
      i18n_messages = { required: "Questo campo é obbligatorio.", required_check: "Questo campo é obbligatorio.", add_address_number: "Aggiungi il numero civico del tuo indirizzo.", remote: "Riempia questo campo, per favore.", email: "Inserisca un indirizzo di posta valido, per favore", url: "Inserisca un URL valido, per favore.", date: "Inserisca una data valida, per favore.", dateISO: "Inserisca una data (ISO) valida, per favore.", number: "Inserisca un numero intero valido, per favore.", digits: "Inserisca solo numeri, per favore.", creditcard: "Inserisca un numero di carta valido, per favore.", equalTo: "Inserisca di nuovo lo stesso valore, per favore.", accept: "Inserisca un valore con un'estenzione accettabile, per favore.", maxlength: jQuery.validator.format("Non inserisca più di {0} caratteri, per favore."), minlength: jQuery.validator.format("Non inserisca meno di {0} caratteri, per favore."), rangelength: jQuery.validator.format("Inserisca un valore tra {0} e {1} caratteri,per favore."), range: jQuery.validator.format("Inserisca un valore tra {0} e {1}, per favore."), max: jQuery.validator.format("Inserisca un valore ugule o minore di {0}, per favore."), min: jQuery.validator.format("Inserisca un valore ugule o maggiore di {0}, per favore."), unique: "Questa email è già stata registrata", fullname: "Per favore, inserisca il suo nome e cognome", boxoffice: "Siamo spiacenti ma non é possibile inviare il tuo ordine ad un casella postale.", frenchDom: "Selezioni la Sua regione dall'elenco dei Paesi." };break;case "de":
      i18n_messages = { required: "Dieses Feld ist ein Pflichtfeld.", required_check: "Dieses Feld ist ein Pflichtfeld.", add_address_number: "Bitte tragen Sie Ihre Hausnummer ein.", maxlength: jQuery.validator.format("Geben Sie bitte maximal {0} Zeichen ein."), minlength: jQuery.validator.format("Geben Sie bitte mindestens {0} Zeichen ein."), rangelength: jQuery.validator.format("Geben Sie bitte mindestens {0} und maximal {1} Zeichen ein."), email: "Geben Sie bitte eine gültige E-Mail Adresse ein.", url: "Geben Sie bitte eine gültige URL ein.", date: "Bitte geben Sie ein gültiges Datum ein.", number: "Geben Sie bitte eine Nummer ein.", digits: "Geben Sie bitte nur Ziffern ein.", equalTo: "Bitte denselben Wert wiederholen.", range: jQuery.validator.format("Geben Sie bitten einen Wert zwischen {0} und {1}."), max: jQuery.validator.format("Geben Sie bitte einen Wert kleiner oder gleich {0} ein."), min: jQuery.validator.format("Geben Sie bitte einen Wert größer oder gleich {0} ein."), creditcard: "Geben Sie bitte ein gültige Kreditkarten-Nummer ein.", unique: "Diese E-Mail ist bereits registriert", fullname: "Bitte geben Sie Ihren Vor- und Nachnamen ein.", boxoffice: "Leider ist eine Lieferung an Packstationen nicht möglich.", frenchDom: "Bitte wählen Sie Ihre DOM -TOM in der Länderliste." };break;default:
      i18n_messages = { required: "This field is required.", required_check: "This field is required.", add_address_number: "Please, add your building number.", remote: "Please fix this field.", email: "Please enter a valid email address.", url: "Please enter a valid URL.", date: "Please enter a valid date.", dateISO: "Please enter a valid date (ISO).", dateDE: "Bitte geben Sie ein gültiges Datum ein.", number: "Please enter a valid number.", numberDE: "Bitte geben Sie eine Nummer ein.", digits: "Please enter only digits", creditcard: "Please enter a valid credit card.", equalTo: "Please enter the same value again.", accept: "Please enter a value with a valid extension.", maxlength: e.validator.format("Please enter no more than {0} characters."), minlength: e.validator.format("Please enter at least {0} characters."), rangelength: e.validator.format("Please enter a value between {0} and {1} characters long."), range: e.validator.format("Please enter a value between {0} and {1}."), max: e.validator.format("Please enter a value less than or equal to {0}."), min: e.validator.format("Please enter a value greater than or equal to {0}."), unique: "This email has already been registered", fullname: "Please enter your name and surname", boxoffice: "We are sorry, but we are not able to send your order to a PO Box. Thanks for your understanding.", frenchDom: "Please, choose your DOM-TOM in the country list." };}e.extend(e.validator, { defaults: { messages: {}, groups: {}, rules: {}, errorClass: "error", validClass: "valid", errorElement: "label", focusInvalid: !0, errorContainer: e([]), errorLabelContainer: e([]), onsubmit: !0, ignore: [], ignoreTitle: !1, onfocusin: function (e) {
        this.lastActive = e, this.settings.focusCleanup && !this.blockFocusCleanup && (this.settings.unhighlight && this.settings.unhighlight.call(this, e, this.settings.errorClass, this.settings.validClass), this.errorsFor(e).hide());
      }, onfocusout: function (e) {
        this.checkable(e) || !(e.name in this.submitted) && this.optional(e) || this.element(e);
      }, onkeyup: function (e) {
        (e.name in this.submitted || e == this.lastElement) && this.element(e);
      }, onclick: function (e) {
        e.name in this.submitted ? this.element(e) : e.parentNode.name in this.submitted && this.element(e.parentNode);
      }, highlight: function (t, n, r) {
        e(t).addClass(n).removeClass(r);
      }, unhighlight: function (t, n, r) {
        e(t).removeClass(n).addClass(r);
      } }, setDefaults: function (t) {
      e.extend(e.validator.defaults, t);
    }, messages: i18n_messages, autoCreateRanges: !1, prototype: { init: function () {
        function t(t) {
          var n = e.data(this[0].form, "validator"),
              r = "on" + t.type.replace(/^validate/, "");n.settings[r] && n.settings[r].call(n, this[0]);
        }this.labelContainer = e(this.settings.errorLabelContainer), this.errorContext = this.labelContainer.length && this.labelContainer || e(this.currentForm), this.containers = e(this.settings.errorContainer).add(this.settings.errorLabelContainer), this.submitted = {}, this.valueCache = {}, this.pendingRequest = 0, this.pending = {}, this.invalid = {}, this.reset();var n = this.groups = {};e.each(this.settings.groups, function (t, r) {
          e.each(r.split(/\s/), function (e, r) {
            n[r] = t;
          });
        });var r = this.settings.rules;e.each(r, function (t, n) {
          r[t] = e.validator.normalizeRule(n);
        }), e(this.currentForm).validateDelegate(":text, :password, :file, select, textarea", "focusin focusout keyup", t).validateDelegate(":radio, :checkbox, select, option", "click", t), this.settings.invalidHandler && e(this.currentForm).bind("invalid-form.validate", this.settings.invalidHandler);
      }, form: function () {
        return this.checkForm(), e.extend(this.submitted, this.errorMap), this.invalid = e.extend({}, this.errorMap), this.valid() || e(this.currentForm).triggerHandler("invalid-form", [this]), this.showErrors(), this.valid();
      }, checkForm: function () {
        this.prepareForm();for (var e = 0, t = this.currentElements = this.elements(); t[e]; e++) this.check(t[e]);return this.valid();
      }, element: function (t) {
        t = this.clean(t), this.lastElement = t, this.prepareElement(t), this.currentElements = e(t);var n = this.check(t);return n ? delete this.invalid[t.name] : this.invalid[t.name] = !0, this.numberOfInvalids() || (this.toHide = this.toHide.add(this.containers)), this.showErrors(), n;
      }, showErrors: function (t) {
        if (t) {
          e.extend(this.errorMap, t), this.errorList = [];for (var n in t) this.errorList.push({ message: t[n], element: this.findByName(n)[0] });this.successList = e.grep(this.successList, function (e) {
            return !(e.name in t);
          });
        }this.settings.showErrors ? this.settings.showErrors.call(this, this.errorMap, this.errorList) : this.defaultShowErrors();
      }, resetForm: function () {
        e.fn.resetForm && e(this.currentForm).resetForm(), this.submitted = {}, this.prepareForm(), this.hideErrors(), this.elements().removeClass(this.settings.errorClass);
      }, numberOfInvalids: function () {
        return this.objectLength(this.invalid);
      }, objectLength: function (e) {
        var t = 0;for (var n in e) t++;return t;
      }, hideErrors: function () {
        this.addWrapper(this.toHide).hide();
      }, valid: function () {
        return 0 == this.size();
      }, size: function () {
        return this.errorList.length;
      }, focusInvalid: function () {
        if (this.settings.focusInvalid) try {
          e(this.findLastActive() || this.errorList.length && this.errorList[0].element || []).filter(":visible").focus().trigger("focusin");
        } catch (e) {}
      }, findLastActive: function () {
        var t = this.lastActive;return t && 1 == e.grep(this.errorList, function (e) {
          return e.element.name == t.name;
        }).length && t;
      }, elements: function () {
        var t = this,
            n = {};return e([]).add(this.currentForm.elements).filter(":input").not(":submit, :reset, :image, [disabled]").not(this.settings.ignore).filter(function () {
          return !this.name && t.settings.debug && window.console, !(this.name in n || !t.objectLength(e(this).rules())) && (n[this.name] = !0, !0);
        });
      }, clean: function (t) {
        return e(t)[0];
      }, errors: function () {
        return e(this.settings.errorElement + "." + this.settings.errorClass, this.errorContext);
      }, reset: function () {
        this.successList = [], this.errorList = [], this.errorMap = {}, this.toShow = e([]), this.toHide = e([]), this.currentElements = e([]);
      }, prepareForm: function () {
        this.reset(), this.toHide = this.errors().add(this.containers);
      }, prepareElement: function (e) {
        this.reset(), this.toHide = this.errorsFor(e);
      }, check: function (t) {
        t = this.clean(t), this.checkable(t) && (t = this.findByName(t.name)[0]);var n = e(t).rules(),
            r = !1;for (method in n) {
          var i = { method: method, parameters: n[method] };try {
            var o = e.validator.methods[method].call(this, t.value.replace(/\r/g, ""), t, i.parameters);if ("dependency-mismatch" == o) {
              r = !0;continue;
            }if (r = !1, "pending" == o) return void (this.toHide = this.toHide.not(this.errorsFor(t)));if (!o) return this.formatAndAdd(t, i), !1;
          } catch (e) {
            throw this.settings.debug && window.console, e;
          }
        }if (!r) return this.objectLength(n) && this.successList.push(t), !0;
      }, customMetaMessage: function (t, n) {
        if (e.metadata) {
          var r = this.settings.meta ? e(t).metadata()[this.settings.meta] : e(t).metadata();return r && r.messages && r.messages[n];
        }
      }, customMessage: function (e, t) {
        var n = this.settings.messages[e];return n && (n.constructor == String ? n : n[t]);
      }, findDefined: function () {
        for (var e = 0; e < arguments.length; e++) if (void 0 !== arguments[e]) return arguments[e];
      }, defaultMessage: function (t, n) {
        return this.findDefined(this.customMessage(t.name, n), this.customMetaMessage(t, n), !this.settings.ignoreTitle && t.title || void 0, e.validator.messages[n], "<strong>Warning: No message defined for " + t.name + "</strong>");
      }, formatAndAdd: function (e, t) {
        var n = this.defaultMessage(e, t.method),
            r = /\$?\{(\d+)\}/g;"function" == typeof n ? n = n.call(this, t.parameters, e) : r.test(n) && (n = jQuery.format(n.replace(r, "{$1}"), t.parameters)), this.errorList.push({ message: n, element: e }), this.errorMap[e.name] = n, this.submitted[e.name] = n;
      }, addWrapper: function (e) {
        return this.settings.wrapper && (e = e.add(e.parent(this.settings.wrapper))), e;
      }, defaultShowErrors: function () {
        for (t = 0; this.errorList[t]; t++) {
          var e = this.errorList[t];this.settings.highlight && this.settings.highlight.call(this, e.element, this.settings.errorClass, this.settings.validClass), this.showLabel(e.element, e.message);
        }if (this.errorList.length && (this.toShow = this.toShow.add(this.containers)), this.settings.success) for (t = 0; this.successList[t]; t++) this.showLabel(this.successList[t]);if (this.settings.unhighlight) for (var t = 0, n = this.validElements(); n[t]; t++) this.settings.unhighlight.call(this, n[t], this.settings.errorClass, this.settings.validClass);this.toHide = this.toHide.not(this.toShow), this.hideErrors(), this.addWrapper(this.toShow).show();
      }, validElements: function () {
        return this.currentElements.not(this.invalidElements());
      }, invalidElements: function () {
        return e(this.errorList).map(function () {
          return this.element;
        });
      }, showLabel: function (t, n) {
        var r = this.errorsFor(t);r.length ? (r.removeClass().addClass(this.settings.errorClass), r.attr("generated") && r.html(n)) : (r = e("<" + this.settings.errorElement + "/>").attr({ for: this.idOrName(t), generated: !0 }).addClass(this.settings.errorClass).html(n || ""), this.settings.wrapper && (r = r.hide().show().wrap("<" + this.settings.wrapper + "/>").parent()), this.labelContainer.append(r).length || (this.settings.errorPlacement ? this.settings.errorPlacement(r, e(t)) : r.insertAfter(t))), !n && this.settings.success && (r.text(""), "string" == typeof this.settings.success ? r.addClass(this.settings.success) : this.settings.success(r)), this.toShow = this.toShow.add(r);
      }, errorsFor: function (t) {
        var n = this.idOrName(t);return this.errors().filter(function () {
          return e(this).attr("for") == n;
        });
      }, idOrName: function (e) {
        return this.groups[e.name] || (this.checkable(e) ? e.name : e.id || e.name);
      }, checkable: function (e) {
        return (/radio|checkbox/i.test(e.type)
        );
      }, findByName: function (t) {
        var n = this.currentForm;return e(document.getElementsByName(t)).map(function (e, r) {
          return r.form == n && r.name == t && r || null;
        });
      }, getLength: function (t, n) {
        switch (n.nodeName.toLowerCase()) {case "select":
            return e("option:selected", n).length;case "input":
            if (this.checkable(n)) return this.findByName(n.name).filter(":checked").length;}return t.length;
      }, depend: function (e, t) {
        return !this.dependTypes[typeof e] || this.dependTypes[typeof e](e, t);
      }, dependTypes: { boolean: function (e, t) {
          return e;
        }, string: function (t, n) {
          return !!e(t, n.form).length;
        }, function: function (e, t) {
          return e(t);
        } }, optional: function (t) {
        return !e.validator.methods.required.call(this, e.trim(t.value), t) && "dependency-mismatch";
      }, startRequest: function (e) {
        this.pending[e.name] || (this.pendingRequest++, this.pending[e.name] = !0);
      }, stopRequest: function (t, n) {
        this.pendingRequest--, this.pendingRequest < 0 && (this.pendingRequest = 0), delete this.pending[t.name], n && 0 == this.pendingRequest && this.formSubmitted && this.form() ? (e(this.currentForm).submit(), this.formSubmitted = !1) : !n && 0 == this.pendingRequest && this.formSubmitted && (e(this.currentForm).triggerHandler("invalid-form", [this]), this.formSubmitted = !1);
      }, previousValue: function (t) {
        return e.data(t, "previousValue") || e.data(t, "previousValue", { old: null, valid: !0, message: this.defaultMessage(t, "remote") });
      } }, classRuleSettings: { required: { required: !0 }, email: { email: !0 }, url: { url: !0 }, date: { date: !0 }, dateISO: { dateISO: !0 }, dateDE: { dateDE: !0 }, number: { number: !0 }, numberDE: { numberDE: !0 }, digits: { digits: !0 }, creditcard: { creditcard: !0 } }, addClassRules: function (t, n) {
      t.constructor == String ? this.classRuleSettings[t] = n : e.extend(this.classRuleSettings, t);
    }, classRules: function (t) {
      var n = {},
          r = e(t).attr("class");return r && e.each(r.split(" "), function () {
        this in e.validator.classRuleSettings && e.extend(n, e.validator.classRuleSettings[this]);
      }), n;
    }, attributeRules: function (t) {
      var n = {},
          r = e(t);for (method in e.validator.methods) {
        var i = r.attr(method);i && (n[method] = i);
      }return n.maxlength && /-1|2147483647|524288/.test(n.maxlength) && delete n.maxlength, n;
    }, metadataRules: function (t) {
      if (!e.metadata) return {};var n = e.data(t.form, "validator").settings.meta;return n ? e(t).metadata()[n] : e(t).metadata();
    }, staticRules: function (t) {
      var n = {},
          r = e.data(t.form, "validator");return r.settings.rules && (n = e.validator.normalizeRule(r.settings.rules[t.name]) || {}), n;
    }, normalizeRules: function (t, n) {
      return e.each(t, function (r, i) {
        if (!1 !== i) {
          if (i.param || i.depends) {
            var o = !0;switch (typeof i.depends) {case "string":
                o = !!e(i.depends, n.form).length;break;case "function":
                o = i.depends.call(n, n);}o ? t[r] = void 0 === i.param || i.param : delete t[r];
          }
        } else delete t[r];
      }), e.each(t, function (r, i) {
        t[r] = e.isFunction(i) ? i(n) : i;
      }), e.each(["minlength", "maxlength", "min", "max"], function () {
        t[this] && (t[this] = Number(t[this]));
      }), e.each(["rangelength", "range"], function () {
        t[this] && (t[this] = [Number(t[this][0]), Number(t[this][1])]);
      }), e.validator.autoCreateRanges && (t.min && t.max && (t.range = [t.min, t.max], delete t.min, delete t.max), t.minlength && t.maxlength && (t.rangelength = [t.minlength, t.maxlength], delete t.minlength, delete t.maxlength)), t.messages && delete t.messages, t;
    }, normalizeRule: function (t) {
      if ("string" == typeof t) {
        var n = {};e.each(t.split(/\s/), function () {
          n[this] = !0;
        }), t = n;
      }return t;
    }, addMethod: function (t, n, r) {
      e.validator.methods[t] = n, e.validator.messages[t] = void 0 != r ? r : e.validator.messages[t], n.length < 3 && e.validator.addClassRules(t, e.validator.normalizeRule(t));
    }, methods: { required: function (t, n, r) {
        if (!this.depend(r, n)) return "dependency-mismatch";switch (n.nodeName.toLowerCase()) {case "select":
            var i = e(n).val();return i && i.length > 0;case "input":
            if (this.checkable(n)) return this.getLength(t, n) > 0;default:
            return e.trim(t).length > 0;}
      }, required_check: function (t, n, r) {
        if (!this.depend(r, n)) return "dependency-mismatch";switch (n.nodeName.toLowerCase()) {case "select":
            var i = e(n).val();return i && i.length > 0;case "input":
            if (this.checkable(n)) return this.getLength(t, n) > 0;default:
            return e.trim(t).length > 0;}
      }, remote: function (t, n, r) {
        if (this.optional(n)) return "dependency-mismatch";var i = this.previousValue(n);if (this.settings.messages[n.name] || (this.settings.messages[n.name] = {}), i.originalMessage = this.settings.messages[n.name].remote, this.settings.messages[n.name].remote = i.message, r = "string" == typeof r && { url: r } || r, i.old !== t) {
          i.old = t;var o = this;this.startRequest(n);var a = {};return a[n.name] = t, e.ajax(e.extend(!0, { url: r, mode: "abort", port: "validate" + n.name, dataType: "json", data: a, success: function (r) {
              o.settings.messages[n.name].remote = i.originalMessage;var a = !0 === r;if (a) {
                var s = o.formSubmitted;o.prepareElement(n), o.formSubmitted = s, o.successList.push(n), o.showErrors();
              } else {
                var l = {},
                    u = i.message = r || o.defaultMessage(n, "remote");l[n.name] = e.isFunction(u) ? u(t) : u, o.showErrors(l);
              }i.valid = a, o.stopRequest(n, a);
            } }, r)), "pending";
        }return this.pending[n.name] ? "pending" : i.valid;
      }, add_address_number: function (e, t) {
        return this.optional(t) || /\d+/g.test(e);
      }, minlength: function (t, n, r) {
        return this.optional(n) || this.getLength(e.trim(t), n) >= r;
      }, maxlength: function (t, n, r) {
        return this.optional(n) || this.getLength(e.trim(t), n) <= r;
      }, rangelength: function (t, n, r) {
        var i = this.getLength(e.trim(t), n);return this.optional(n) || i >= r[0] && i <= r[1];
      }, min: function (e, t, n) {
        return this.optional(t) || e >= n;
      }, max: function (e, t, n) {
        return this.optional(t) || e <= n;
      }, range: function (e, t, n) {
        return this.optional(t) || e >= n[0] && e <= n[1];
      }, email: function (e, t) {
        return this.optional(t) || /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(e);
      }, url: function (e, t) {
        return this.optional(t) || /^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(e);
      }, date: function (e, t) {
        return this.optional(t) || !/Invalid|NaN/.test(new Date(e));
      }, dateISO: function (e, t) {
        return this.optional(t) || /^\d{4}[\/-]\d{1,2}[\/-]\d{1,2}$/.test(e);
      }, number: function (e, t) {
        return this.optional(t) || /^-?(?:\d+|\d{1,3}(?:,\d{3})+)(?:\.\d+)?$/.test(e);
      }, digits: function (e, t) {
        return this.optional(t) || /^\d+$/.test(e);
      }, phone: function (e, t, n) {
        return this.optional(t) || new RegExp(n).test(e.replace(/\ /g, ""));
      }, creditcard: function (e, t) {
        if (this.optional(t)) return "dependency-mismatch";if (/[^0-9-]+/.test(e)) return !1;for (var n = 0, r = 0, i = !1, o = (e = e.replace(/\D/g, "")).length - 1; o >= 0; o--) {
          var a = e.charAt(o),
              r = parseInt(a, 10);i && (r *= 2) > 9 && (r -= 9), n += r, i = !i;
        }return n % 10 == 0;
      }, accept: function (e, t, n) {
        return n = "string" == typeof n ? n.replace(/,/g, "|") : "png|jpe?g|gif", this.optional(t) || e.match(new RegExp(".(" + n + ")$", "i"));
      }, equalTo: function (t, n, r) {
        return t == e(r).unbind(".validate-equalTo").bind("blur.validate-equalTo", function () {
          e(n).valid();
        }).val();
      } } }), e.format = e.validator.format;
}(jQuery), function (e) {
  var t = e.ajax,
      n = {};e.ajax = function (r) {
    var i = (r = e.extend(r, e.extend({}, e.ajaxSettings, r))).port;return "abort" == r.mode ? (n[i] && n[i].abort(), n[i] = t.apply(this, arguments)) : t.apply(this, arguments);
  };
}(jQuery), function (e) {
  jQuery.event.special.focusin || jQuery.event.special.focusout || !document.addEventListener || e.each({ focus: "focusin", blur: "focusout" }, function (t, n) {
    function r(t) {
      return t = e.event.fix(t), t.type = n, e.event.handle.call(this, t);
    }e.event.special[n] = { setup: function () {
        this.addEventListener(t, r, !0);
      }, teardown: function () {
        this.removeEventListener(t, r, !0);
      }, handler: function (t) {
        return arguments[0] = e.event.fix(t), arguments[0].type = n, e.event.handle.apply(this, arguments);
      } };
  }), e.extend(e.fn, { validateDelegate: function (t, n, r) {
      return this.bind(n, function (n) {
        var i = e(n.target);if (i.is(t)) return r.apply(i, arguments);
      });
    } });
}(jQuery), $.validator.addMethod("fullname", function (e, t) {
  var n = /[\s]/;return this.optional(t) || n.test(e);
}), $.validator.addMethod("boxoffice", function (e, t) {
  var n = e.toLowerCase(),
      r = (n = n.replace(/\./g, "")).replace(/\s/g, ""),
      i = /\bpob\b/,
      o = /(officebox)/,
      a = /(postalbox)/,
      s = /\bpo(\s|)box\b/,
      l = /(packstation)/;return !(n.match(i) || r.match(o) || r.match(a) || n.match(s) || n.match(l));
}), function (e) {
  var t,
      n,
      r,
      i,
      o,
      a,
      s,
      l = function () {},
      u = !!window.jQuery,
      c = e(window),
      d = function (e, n) {
    t.ev.on("mfp" + e + ".mfp", n);
  },
      f = function (t, n, r, i) {
    var o = document.createElement("div");return o.className = "mfp-" + t, r && (o.innerHTML = r), i ? n && n.appendChild(o) : (o = e(o), n && o.appendTo(n)), o;
  },
      p = function (n, r) {
    t.ev.triggerHandler("mfp" + n, r), t.st.callbacks && (n = n.charAt(0).toLowerCase() + n.slice(1), t.st.callbacks[n] && t.st.callbacks[n].apply(t, e.isArray(r) ? r : [r]));
  },
      h = function () {
    (t.st.focus ? t.content.find(t.st.focus).eq(0) : t.wrap).trigger("focus");
  },
      m = function (n) {
    return n === s && t.currTemplate.closeBtn || (t.currTemplate.closeBtn = e(t.st.closeMarkup.replace("%title%", t.st.tClose)), s = n), t.currTemplate.closeBtn;
  },
      g = function () {
    e.magnificPopup.instance || ((t = new l()).init(), e.magnificPopup.instance = t);
  },
      v = function (n) {
    if (!e(n).hasClass("mfp-prevent-close")) {
      var r = t.st.closeOnContentClick,
          i = t.st.closeOnBgClick;if (r && i) return !0;if (!t.content || e(n).hasClass("mfp-close") || t.preloader && n === t.preloader[0]) return !0;if (n === t.content[0] || e.contains(t.content[0], n)) {
        if (r) return !0;
      } else if (i && e.contains(document, n)) return !0;return !1;
    }
  },
      y = function () {
    var e = document.createElement("p").style,
        t = ["ms", "O", "Moz", "Webkit"];if (void 0 !== e.transition) return !0;for (; t.length;) if (t.pop() + "Transition" in e) return !0;return !1;
  };l.prototype = { constructor: l, init: function () {
      var n = navigator.appVersion;t.isIE7 = -1 !== n.indexOf("MSIE 7."), t.isIE8 = -1 !== n.indexOf("MSIE 8."), t.isLowIE = t.isIE7 || t.isIE8, t.isAndroid = /android/gi.test(n), t.isIOS = /iphone|ipad|ipod/gi.test(n), t.supportsTransition = y(), t.probablyMobile = t.isAndroid || t.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent), r = e(document.body), i = e(document), t.popupsCache = {};
    }, open: function (n) {
      var r;if (!1 === n.isObj) {
        t.items = n.items.toArray(), t.index = 0;var o,
            s = n.items;for (r = 0; r < s.length; r++) if ((o = s[r]).parsed && (o = o.el[0]), o === n.el[0]) {
          t.index = r;break;
        }
      } else t.items = e.isArray(n.items) ? n.items : [n.items], t.index = n.index || 0;if (t.isOpen) t.updateItemHTML();else {
        t.types = [], a = "", n.mainEl && n.mainEl.length ? t.ev = n.mainEl.eq(0) : t.ev = i, n.key ? (t.popupsCache[n.key] || (t.popupsCache[n.key] = {}), t.currTemplate = t.popupsCache[n.key]) : t.currTemplate = {}, t.st = e.extend(!0, {}, e.magnificPopup.defaults, n), t.fixedContentPos = "auto" === t.st.fixedContentPos ? !t.probablyMobile : t.st.fixedContentPos, t.st.modal && (t.st.closeOnContentClick = !1, t.st.closeOnBgClick = !1, t.st.showCloseBtn = !1, t.st.enableEscapeKey = !1), t.bgOverlay || (t.bgOverlay = f("bg").on("click.mfp", function () {
          t.close();
        }), t.wrap = f("wrap").attr("tabindex", -1).on("click.mfp", function (e) {
          v(e.target) && t.close();
        }), t.container = f("container", t.wrap)), t.contentContainer = f("content"), t.st.preloader && (t.preloader = f("preloader", t.container, t.st.tLoading));var l = e.magnificPopup.modules;for (r = 0; r < l.length; r++) {
          var u = l[r];u = u.charAt(0).toUpperCase() + u.slice(1), t["init" + u].call(t);
        }p("BeforeOpen"), t.st.showCloseBtn && (t.st.closeBtnInside ? (d("MarkupParse", function (e, t, n, r) {
          n.close_replaceWith = m(r.type);
        }), a += " mfp-close-btn-in") : t.wrap.append(m())), t.st.alignTop && (a += " mfp-align-top"), t.fixedContentPos ? t.wrap.css({ overflow: t.st.overflowY, overflowX: "hidden", overflowY: t.st.overflowY }) : t.wrap.css({ top: c.scrollTop(), position: "absolute" }), (!1 === t.st.fixedBgPos || "auto" === t.st.fixedBgPos && !t.fixedContentPos) && t.bgOverlay.css({ height: i.height(), position: "absolute" }), t.st.enableEscapeKey && i.on("keyup.mfp", function (e) {
          27 === e.keyCode && t.close();
        }), c.on("resize.mfp", function () {
          t.updateSize();
        }), t.st.closeOnContentClick || (a += " mfp-auto-cursor"), a && t.wrap.addClass(a);var g = t.wH = c.height(),
            y = {};if (t.fixedContentPos && t._hasScrollBar(g)) {
          var b = t._getScrollbarSize();b && (y.paddingRight = b);
        }t.fixedContentPos && (t.isIE7 ? e("body, html").css("overflow", "hidden") : y.overflow = "hidden");var x = t.st.mainClass;t.isIE7 && (x += " mfp-ie7"), x && t._addClassToMFP(x), t.updateItemHTML(), p("BuildControls"), e("html").css(y), t.bgOverlay.add(t.wrap).prependTo(document.body), t._lastFocusedEl = document.activeElement, setTimeout(function () {
          t.content ? (t._addClassToMFP("mfp-ready"), h()) : t.bgOverlay.addClass("mfp-ready"), i.on("focusin.mfp", function (n) {
            if (n.target !== t.wrap[0] && !e.contains(t.wrap[0], n.target)) return h(), !1;
          });
        }, 16), t.isOpen = !0, t.updateSize(g), p("Open");
      }
    }, close: function () {
      t.isOpen && (p("BeforeClose"), t.isOpen = !1, t.st.removalDelay && !t.isLowIE && t.supportsTransition ? (t._addClassToMFP("mfp-removing"), setTimeout(function () {
        t._close();
      }, t.st.removalDelay)) : t._close());
    }, _close: function () {
      p("Close");var n = "mfp-removing mfp-ready ";if (t.bgOverlay.detach(), t.wrap.detach(), t.container.empty(), t.st.mainClass && (n += t.st.mainClass + " "), t._removeClassFromMFP(n), t.fixedContentPos) {
        var r = { paddingRight: "" };t.isIE7 ? e("body, html").css("overflow", "") : r.overflow = "", e("html").css(r);
      }i.off("keyup.mfp focusin.mfp"), t.ev.off(".mfp"), t.wrap.attr("class", "mfp-wrap").removeAttr("style"), t.bgOverlay.attr("class", "mfp-bg"), t.container.attr("class", "mfp-container"), !t.st.showCloseBtn || t.st.closeBtnInside && !0 !== t.currTemplate[t.currItem.type] || t.currTemplate.closeBtn && t.currTemplate.closeBtn.detach(), t._lastFocusedEl && e(t._lastFocusedEl).trigger("focus"), t.currItem = null, t.content = null, t.currTemplate = null, t.prevHeight = 0, p("AfterClose");
    }, updateSize: function (e) {
      if (t.isIOS) {
        var n = document.documentElement.clientWidth / window.innerWidth,
            r = window.innerHeight * n;t.wrap.css("height", r), t.wH = r;
      } else t.wH = e || c.height();t.fixedContentPos || t.wrap.css("height", t.wH), p("Resize");
    }, updateItemHTML: function () {
      var n = t.items[t.index];t.contentContainer.detach(), t.content && t.content.detach(), n.parsed || (n = t.parseEl(t.index));var r = n.type;if (p("BeforeChange", [t.currItem ? t.currItem.type : "", r]), t.currItem = n, !t.currTemplate[r]) {
        var i = !!t.st[r] && t.st[r].markup;p("FirstMarkupParse", i), t.currTemplate[r] = !i || e(i);
      }o && o !== n.type && t.container.removeClass("mfp-" + o + "-holder");var a = t["get" + r.charAt(0).toUpperCase() + r.slice(1)](n, t.currTemplate[r]);t.appendContent(a, r), n.preloaded = !0, p("Change", n), o = n.type, t.container.prepend(t.contentContainer), p("AfterChange");
    }, appendContent: function (e, n) {
      t.content = e, e ? t.st.showCloseBtn && t.st.closeBtnInside && !0 === t.currTemplate[n] ? t.content.find(".mfp-close").length || t.content.append(m()) : t.content = e : t.content = "", p("BeforeAppend"), t.container.addClass("mfp-" + n + "-holder"), t.contentContainer.append(t.content);
    }, parseEl: function (n) {
      var r = t.items[n],
          i = r.type;if ((r = r.tagName ? { el: e(r) } : { data: r, src: r.src }).el) {
        for (var o = t.types, a = 0; a < o.length; a++) if (r.el.hasClass("mfp-" + o[a])) {
          i = o[a];break;
        }r.src = r.el.attr("data-mfp-src"), r.src || (r.src = r.el.attr("href"));
      }return r.type = i || t.st.type || "inline", r.index = n, r.parsed = !0, t.items[n] = r, p("ElementParse", r), t.items[n];
    }, addGroup: function (e, n) {
      var r = function (r) {
        r.mfpEl = this, t._openClick(r, e, n);
      };n || (n = {});var i = "click.magnificPopup";n.mainEl = e, n.items ? (n.isObj = !0, e.off(i).on(i, r)) : (n.isObj = !1, n.delegate ? e.off(i).on(i, n.delegate, r) : (n.items = e, e.off(i).on(i, r)));
    }, _openClick: function (n, r, i) {
      if ((void 0 !== i.midClick ? i.midClick : e.magnificPopup.defaults.midClick) || 2 !== n.which && !n.ctrlKey && !n.metaKey) {
        var o = void 0 !== i.disableOn ? i.disableOn : e.magnificPopup.defaults.disableOn;if (o) if (e.isFunction(o)) {
          if (!o.call(t)) return !0;
        } else if (c.width() < o) return !0;n.type && (n.preventDefault(), t.isOpen && n.stopPropagation()), i.el = e(n.mfpEl), i.delegate && (i.items = r.find(i.delegate)), t.open(i);
      }
    }, updateStatus: function (e, r) {
      if (t.preloader) {
        n !== e && t.container.removeClass("mfp-s-" + n), r || "loading" !== e || (r = t.st.tLoading);var i = { status: e, text: r };p("UpdateStatus", i), e = i.status, r = i.text, t.preloader.html(r), t.preloader.find("a").on("click", function (e) {
          e.stopImmediatePropagation();
        }), t.container.addClass("mfp-s-" + e), n = e;
      }
    }, _addClassToMFP: function (e) {
      t.bgOverlay.addClass(e), t.wrap.addClass(e);
    }, _removeClassFromMFP: function (e) {
      this.bgOverlay.removeClass(e), t.wrap.removeClass(e);
    }, _hasScrollBar: function (e) {
      return (t.isIE7 ? i.height() : document.body.scrollHeight) > (e || c.height());
    }, _parseMarkup: function (t, n, r) {
      var i;r.data && (n = e.extend(r.data, n)), p("MarkupParse", [t, n, r]), e.each(n, function (e, n) {
        if (void 0 === n || !1 === n) return !0;if ((i = e.split("_")).length > 1) {
          var r = t.find(".mfp-" + i[0]);if (r.length > 0) {
            var o = i[1];"replaceWith" === o ? r[0] !== n[0] && r.replaceWith(n) : "img" === o ? r.is("img") ? r.attr("src", n) : r.replaceWith('<img src="' + n + '" class="' + r.attr("class") + '" />') : r.attr(i[1], n);
          }
        } else t.find(".mfp-" + e).html(n);
      });
    }, _getScrollbarSize: function () {
      if (void 0 === t.scrollbarSize) {
        var e = document.createElement("div");e.id = "mfp-sbm", e.style.cssText = "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;", document.body.appendChild(e), t.scrollbarSize = e.offsetWidth - e.clientWidth, document.body.removeChild(e);
      }return t.scrollbarSize;
    } }, e.magnificPopup = { instance: null, proto: l.prototype, modules: [], open: function (e, t) {
      return g(), e || (e = {}), e.isObj = !0, e.index = t || 0, this.instance.open(e);
    }, close: function () {
      return e.magnificPopup.instance.close();
    }, registerModule: function (t, n) {
      n.options && (e.magnificPopup.defaults[t] = n.options), e.extend(this.proto, n.proto), this.modules.push(t);
    }, defaults: { disableOn: 0, key: null, midClick: !1, mainClass: "", preloader: !0, focus: "", closeOnContentClick: !1, closeOnBgClick: !0, closeBtnInside: !0, showCloseBtn: !0, enableEscapeKey: !0, modal: !1, alignTop: !1, removalDelay: 0, fixedContentPos: "auto", fixedBgPos: "auto", overflowY: "auto", closeMarkup: '<button title="%title%" type="button" class="mfp-close">&times;</button>', tClose: "Close (Esc)", tLoading: "Loading..." } }, e.fn.magnificPopup = function (n) {
    g();var r = e(this);if ("string" == typeof n) {
      if ("open" === n) {
        var i,
            o = u ? r.data("magnificPopup") : r[0].magnificPopup,
            a = parseInt(arguments[1], 10) || 0;o.items ? i = o.items[a] : (i = r, o.delegate && (i = i.find(o.delegate)), i = i.eq(a)), t._openClick({ mfpEl: i }, r, o);
      } else t.isOpen && t[n].apply(t, Array.prototype.slice.call(arguments, 1));
    } else u ? r.data("magnificPopup", n) : r[0].magnificPopup = n, t.addGroup(r, n);return r;
  };var b,
      x,
      w,
      C = function () {
    w && (x.after(w.addClass(b)).detach(), w = null);
  };e.magnificPopup.registerModule("inline", { options: { hiddenClass: "hide", markup: "", tNotFound: "Content not found" }, proto: { initInline: function () {
        t.types.push("inline"), d("Close.inline", function () {
          C();
        });
      }, getInline: function (n, r) {
        if (C(), n.src) {
          var i = t.st.inline,
              o = e(n.src);if (o.length) {
            var a = o[0].parentNode;a && a.tagName && (x || (b = i.hiddenClass, x = f(b), b = "mfp-" + b), w = o.after(x).detach().removeClass(b)), t.updateStatus("ready");
          } else t.updateStatus("error", i.tNotFound), o = e("<div>");return n.inlineElement = o, o;
        }return t.updateStatus("ready"), t._parseMarkup(r, {}, n), r;
      } } });var k,
      _ = function () {
    k && r.removeClass(k);
  };e.magnificPopup.registerModule("ajax", { options: { settings: null, cursor: "mfp-ajax-cur", tError: '<a href="%url%">The content</a> could not be loaded.' }, proto: { initAjax: function () {
        t.types.push("ajax"), k = t.st.ajax.cursor, d("Close.ajax", function () {
          _(), t.req && t.req.abort();
        });
      }, getAjax: function (n) {
        k && r.addClass(k), t.updateStatus("loading");var i = e.extend({ url: n.src, success: function (r, i, o) {
            var a = { data: r, xhr: o };p("ParseAjax", a), t.appendContent(e(a.data), "ajax"), n.finished = !0, _(), h(), setTimeout(function () {
              t.wrap.addClass("mfp-ready");
            }, 16), t.updateStatus("ready"), p("AjaxContentAdded");
          }, error: function () {
            _(), n.finished = n.loadError = !0, t.updateStatus("error", t.st.ajax.tError.replace("%url%", n.src));
          } }, t.st.ajax.settings);return t.req = e.ajax(i), "";
      } } });var T,
      A = function (n) {
    if (n.data && void 0 !== n.data.title) return n.data.title;var r = t.st.image.titleSrc;if (r) {
      if (e.isFunction(r)) return r.call(t, n);if (n.el) return n.el.attr(r) || "";
    }return "";
  };e.magnificPopup.registerModule("image", { options: { markup: '<div class="mfp-figure"><div class="mfp-close"></div><div class="mfp-img"></div><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></div>', cursor: "mfp-zoom-out-cur", titleSrc: "title", verticalFit: !0, tError: '<a href="%url%">The image</a> could not be loaded.' }, proto: { initImage: function () {
        var e = t.st.image,
            n = ".image";t.types.push("image"), d("Open" + n, function () {
          "image" === t.currItem.type && e.cursor && r.addClass(e.cursor);
        }), d("Close" + n, function () {
          e.cursor && r.removeClass(e.cursor), c.off("resize.mfp");
        }), d("Resize" + n, t.resizeImage), t.isLowIE && d("AfterChange", t.resizeImage);
      }, resizeImage: function () {
        var e = t.currItem;if (e.img && t.st.image.verticalFit) {
          var n = 0;t.isLowIE && (n = parseInt(e.img.css("padding-top"), 10) + parseInt(e.img.css("padding-bottom"), 10)), e.img.css("max-height", t.wH - n);
        }
      }, _onImageHasSize: function (e) {
        e.img && (e.hasSize = !0, T && clearInterval(T), e.isCheckingImgSize = !1, p("ImageHasSize", e), e.imgHidden && (t.content && t.content.removeClass("mfp-loading"), e.imgHidden = !1));
      }, findImageSize: function (e) {
        var n = 0,
            r = e.img[0],
            i = function (o) {
          T && clearInterval(T), T = setInterval(function () {
            r.naturalWidth > 0 ? t._onImageHasSize(e) : (n > 200 && clearInterval(T), 3 === ++n ? i(10) : 40 === n ? i(50) : 100 === n && i(500));
          }, o);
        };i(1);
      }, getImage: function (n, r) {
        var i = 0,
            o = function () {
          n && (n.img[0].complete ? (n.img.off(".mfploader"), n === t.currItem && (t._onImageHasSize(n), t.updateStatus("ready")), n.hasSize = !0, n.loaded = !0, p("ImageLoadComplete")) : ++i < 200 ? setTimeout(o, 100) : a());
        },
            a = function () {
          n && (n.img.off(".mfploader"), n === t.currItem && (t._onImageHasSize(n), t.updateStatus("error", s.tError.replace("%url%", n.src))), n.hasSize = !0, n.loaded = !0, n.loadError = !0);
        },
            s = t.st.image,
            l = r.find(".mfp-img");if (l.length) {
          var u = new Image();u.className = "mfp-img", n.img = e(u).on("load.mfploader", o).on("error.mfploader", a), u.src = n.src, l.is("img") && (n.img = n.img.clone()), n.img[0].naturalWidth > 0 && (n.hasSize = !0);
        }return t._parseMarkup(r, { title: A(n), img_replaceWith: n.img }, n), t.resizeImage(), n.hasSize ? (T && clearInterval(T), n.loadError ? (r.addClass("mfp-loading"), t.updateStatus("error", s.tError.replace("%url%", n.src))) : (r.removeClass("mfp-loading"), t.updateStatus("ready")), r) : (t.updateStatus("loading"), n.loading = !0, n.hasSize || (n.imgHidden = !0, r.addClass("mfp-loading"), t.findImageSize(n)), r);
      } } });var S,
      E = function () {
    return void 0 === S && (S = void 0 !== document.createElement("p").style.MozTransform), S;
  };e.magnificPopup.registerModule("zoom", { options: { enabled: !1, easing: "ease-in-out", duration: 300, opener: function (e) {
        return e.is("img") ? e : e.find("img");
      } }, proto: { initZoom: function () {
        var e = t.st.zoom,
            n = ".zoom";if (e.enabled && t.supportsTransition) {
          var r,
              i,
              o = e.duration,
              a = function (t) {
            var n = t.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),
                r = "all " + e.duration / 1e3 + "s " + e.easing,
                i = { position: "fixed", zIndex: 9999, left: 0, top: 0, "-webkit-backface-visibility": "hidden" },
                o = "transition";return i["-webkit-" + o] = i["-moz-" + o] = i["-o-" + o] = i[o] = r, n.css(i), n;
          },
              s = function () {
            t.content.css("visibility", "visible");
          };d("BuildControls" + n, function () {
            if (t._allowZoom()) {
              if (clearTimeout(r), t.content.css("visibility", "hidden"), image = t._getItemToZoom(), !image) return void s();(i = a(image)).css(t._getOffset()), t.wrap.append(i), r = setTimeout(function () {
                i.css(t._getOffset(!0)), r = setTimeout(function () {
                  s(), setTimeout(function () {
                    i.remove(), image = i = null, p("ZoomAnimationEnded");
                  }, 16);
                }, o);
              }, 16);
            }
          }), d("BeforeClose" + n, function () {
            if (t._allowZoom()) {
              if (clearTimeout(r), t.st.removalDelay = o, !image) {
                if (image = t._getItemToZoom(), !image) return;i = a(image);
              }i.css(t._getOffset(!0)), t.wrap.append(i), t.content.css("visibility", "hidden"), setTimeout(function () {
                i.css(t._getOffset());
              }, 16);
            }
          }), d("Close" + n, function () {
            t._allowZoom() && (s(), i && i.remove());
          });
        }
      }, _allowZoom: function () {
        return "image" === t.currItem.type;
      }, _getItemToZoom: function () {
        return !!t.currItem.hasSize && t.currItem.img;
      }, _getOffset: function (n) {
        var r,
            i = (r = n ? t.currItem.img : t.st.zoom.opener(t.currItem.el || t.currItem)).offset(),
            o = parseInt(r.css("padding-top"), 10),
            a = parseInt(r.css("padding-bottom"), 10);i.top -= e(window).scrollTop() - o;var s = { width: r.width(), height: (u ? r.innerHeight() : r[0].offsetHeight) - a - o };return E() ? s["-moz-transform"] = s.transform = "translate(" + i.left + "px," + i.top + "px)" : (s.left = i.left, s.top = i.top), s;
      } } });var N = function (e) {
    if (t.currTemplate.iframe) {
      var n = t.currTemplate.iframe.find("iframe");n.length && (e || (n[0].src = "//about:blank"), t.isIE8 && n.css("display", e ? "block" : "none"));
    }
  };e.magnificPopup.registerModule("iframe", { options: { markup: '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>', srcAction: "iframe_src", patterns: { youtube: { index: "youtube.com", id: "v=", src: "//www.youtube.com/embed/%id%?autoplay=1" }, vimeo: { index: "vimeo.com/", id: "/", src: "//player.vimeo.com/video/%id%?autoplay=1" }, gmaps: { index: "//maps.google.", src: "%id%&output=embed" } } }, proto: { initIframe: function () {
        t.types.push("iframe"), d("BeforeChange", function (e, t, n) {
          t !== n && ("iframe" === t ? N() : "iframe" === n && N(!0));
        }), d("Close.iframe", function () {
          N();
        });
      }, getIframe: function (n, r) {
        var i = n.src,
            o = t.st.iframe;e.each(o.patterns, function () {
          if (i.indexOf(this.index) > -1) return this.id && (i = "string" == typeof this.id ? i.substr(i.lastIndexOf(this.id) + this.id.length, i.length) : this.id.call(this, i)), i = this.src.replace("%id%", i), !1;
        });var a = {};return o.srcAction && (a[o.srcAction] = i), t._parseMarkup(r, a, n), t.updateStatus("ready"), r;
      } } });var F = function (e) {
    var n = t.items.length;return e > n - 1 ? e - n : e < 0 ? n + e : e;
  },
      j = function (e, t, n) {
    return e.replace("%curr%", t + 1).replace("%total%", n);
  };e.magnificPopup.registerModule("gallery", { options: { enabled: !1, arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>', preload: [0, 2], navigateByImgClick: !0, arrows: !0, tPrev: "Previous (Left arrow key)", tNext: "Next (Right arrow key)", tCounter: "%curr% of %total%" }, proto: { initGallery: function () {
        var n = t.st.gallery,
            r = ".mfp-gallery",
            o = Boolean(e.fn.mfpFastClick);if (t.direction = !0, !n || !n.enabled) return !1;a += " mfp-gallery", d("Open" + r, function () {
          n.navigateByImgClick && t.wrap.on("click" + r, ".mfp-img", function () {
            if (t.items.length > 1) return t.next(), !1;
          }), i.on("keydown" + r, function (e) {
            37 === e.keyCode ? t.prev() : 39 === e.keyCode && t.next();
          });
        }), d("UpdateStatus" + r, function (e, n) {
          n.text && (n.text = j(n.text, t.currItem.index, t.items.length));
        }), d("MarkupParse" + r, function (e, r, i, o) {
          var a = t.items.length;i.counter = a > 1 ? j(n.tCounter, o.index, a) : "";
        }), d("BuildControls" + r, function () {
          if (t.items.length > 1 && n.arrows && !t.arrowLeft) {
            var r = n.arrowMarkup,
                i = t.arrowLeft = e(r.replace("%title%", n.tPrev).replace("%dir%", "left")).addClass("mfp-prevent-close"),
                a = t.arrowRight = e(r.replace("%title%", n.tNext).replace("%dir%", "right")).addClass("mfp-prevent-close"),
                s = o ? "mfpFastClick" : "click";i[s](function () {
              t.prev();
            }), a[s](function () {
              t.next();
            }), t.isIE7 && (f("b", i[0], !1, !0), f("a", i[0], !1, !0), f("b", a[0], !1, !0), f("a", a[0], !1, !0)), t.container.append(i.add(a));
          }
        }), d("Change" + r, function () {
          t._preloadTimeout && clearTimeout(t._preloadTimeout), t._preloadTimeout = setTimeout(function () {
            t.preloadNearbyImages(), t._preloadTimeout = null;
          }, 16);
        }), d("Close" + r, function () {
          i.off(r), t.wrap.off("click" + r), t.arrowLeft && o && t.arrowLeft.add(t.arrowRight).destroyMfpFastClick(), t.arrowRight = t.arrowLeft = null;
        });
      }, next: function () {
        t.direction = !0, t.index = F(t.index + 1), t.updateItemHTML();
      }, prev: function () {
        t.direction = !1, t.index = F(t.index - 1), t.updateItemHTML();
      }, goTo: function (e) {
        t.direction = e >= t.index, t.index = e, t.updateItemHTML();
      }, preloadNearbyImages: function () {
        var e,
            n = t.st.gallery.preload,
            r = Math.min(n[0], t.items.length),
            i = Math.min(n[1], t.items.length);for (e = 1; e <= (t.direction ? i : r); e++) t._preloadItem(t.index + e);for (e = 1; e <= (t.direction ? r : i); e++) t._preloadItem(t.index - e);
      }, _preloadItem: function (n) {
        if (n = F(n), !t.items[n].preloaded) {
          var r = t.items[n];r.parsed || (r = t.parseEl(n)), p("LazyLoad", r), "image" === r.type && (r.img = e('<img class="mfp-img" />').on("load.mfploader", function () {
            r.hasSize = !0;
          }).on("error.mfploader", function () {
            r.hasSize = !0, r.loadError = !0, p("LazyLoadError", r);
          }).attr("src", r.src)), r.preloaded = !0;
        }
      } } });e.magnificPopup.registerModule("retina", { options: { replaceSrc: function (e) {
        return e.src.replace(/\.\w+$/, function (e) {
          return "@2x" + e;
        });
      }, ratio: 1 }, proto: { initRetina: function () {
        if (window.devicePixelRatio > 1) {
          var e = t.st.retina,
              n = e.ratio;(n = isNaN(n) ? n() : n) > 1 && (d("ImageHasSize.retina", function (e, t) {
            t.img.css({ "max-width": t.img[0].naturalWidth / n, width: "100%" });
          }), d("ElementParse.retina", function (t, r) {
            r.src = e.replaceSrc(r, n);
          }));
        }
      } } }), function () {
    var t = "ontouchstart" in window,
        n = function () {
      c.off("touchmove" + r + " touchend" + r);
    },
        r = ".mfpFastClick";e.fn.mfpFastClick = function (i) {
      return e(this).each(function () {
        var o,
            a = e(this);if (t) {
          var s, l, u, d, f, p;a.on("touchstart" + r, function (e) {
            d = !1, p = 1, f = e.originalEvent ? e.originalEvent.touches[0] : e.touches[0], l = f.clientX, u = f.clientY, c.on("touchmove" + r, function (e) {
              f = e.originalEvent ? e.originalEvent.touches : e.touches, p = f.length, f = f[0], (Math.abs(f.clientX - l) > 10 || Math.abs(f.clientY - u) > 10) && (d = !0, n());
            }).on("touchend" + r, function (e) {
              n(), d || p > 1 || (o = !0, e.preventDefault(), clearTimeout(s), s = setTimeout(function () {
                o = !1;
              }, 1e3), i());
            });
          });
        }a.on("click" + r, function () {
          o || i();
        });
      });
    }, e.fn.destroyMfpFastClick = function () {
      e(this).off("touchstart" + r + " click" + r), t && c.off("touchmove" + r + " touchend" + r);
    };
  }();
}(window.jQuery || window.Zepto), function (e, t) {
  window.hsCookies = { options: { cookieId: "noticeCookie" }, init: function () {
      this.mustShowBox() && (this.setEvents(), this.showBox());
    }, setEvents: function () {
      var t = this,
          n = ["click.hsCookies", "scroll.hsCookies"];e(document).on(n.join(" "), function () {
        t.userAction();
      });
    }, unsetEvents: function () {
      e(document).off(".hsCookies");
    }, userAction: function () {
      this.createCookie(this.options.cookieId, "1", 1825), this.unsetEvents();
    }, showBox: function () {
      var t = "";switch (e("html").attr("lang")) {case "es":
          t = '<div class="text"> Este sitio web utiliza cookies propias y de terceros para optimizar tu navegación, adaptarse a tus preferencias, y realizar labores analíticas. Si continúa utilizando el sitio web, usted acepta nuestra <a class="cookie_link" href="' + region_url + 'info/legal#cookies" target="_blank">política de Cookies</a>.</div>';break;case "fr":
          t = '<div class="text"> Ce site web installe des cookies propres et des tiers pour optimiser votre navigation et vos préférences en réalisant des travaux  analytiques.  En continuant à utiliser ce site, vous acceptez <a class="cookie_link" href="' + region_url + 'info/legal#cookies" target="_blank">le paramétrage de nos cookies</a>.</div>';break;case "de":
          t = '<div class="text"> Wir verwenden eigene Cookies und Cookies Dritter auf unserer Website, um Ihren Besuch effizienter zu machen, um uns Ihre persönlichen Vorlieben zu merken und um Statistiken zu erstellen. Wenn Sie unsere Website weiterhin benutzen, heißt das für uns, dass Sie mit der Verwendung <a class="cookie_link" href="' + region_url + 'info/legal#cookies" target="_blank">von Cookies einverstanden sind</a>.</div>';break;case "it":
          t = '<div class="text"> Questo sito utilizza i cookies al fine di agevolare la tua navigazione, fornirti un’esperienza di navigazione personalizzata ed eseguire analisi statistiche. Utilizzando e accedendo al Sito, l’utente accetta l’ <a class="cookie_link" href="' + region_url + 'info/legal#cookies" target="_blank">uso dei cookies</a>.</div>';break;case "ru":
          t = '<div class="text"> Наш сайт пользуется собственными и посторонними Cookies для оптимизации навигации и для анализ сайта. Если Вы продолжите навигацию, Вы соглашаетесь <a class="cookie_link" href="' + region_url + 'info/legal#cookies" target="_blank">с нашей политикой Cookies</a></div>';break;default:
          t = '<div class="text"> This page uses private and third-party cookies. If you continue using our website, you accept our <a class="cookie_link" href="' + region_url + 'info/legal#cookies" target="_blank">cookies policy</a>.</div>';}var n = e('<div id="cookie-box"><div class="container">' + t + ' <div class="link_close close"><span>x</span></div></div></div>');n.click(function (e) {
        e.stopPropagation();
      }), e("body").prepend(n), n.find("a").click(function () {
        e("#cookie-box").remove();
      }), n.find(".close").click(function () {
        e("#cookie-box").remove();
      });
    }, mustShowBox: function () {
      var e = this.readCookie(this.options.cookieId);return !(e && "1" == e || /\/politica_cookies/.test(location.href));
    }, createCookie: function (e, t, n) {
      if (n) {
        var r = new Date();r.setTime(r.getTime() + 24 * n * 60 * 60 * 1e3);i = "; expires=" + r.toUTCString();
      } else var i = "";document.cookie = e + "=" + t + i + "; path=/";
    }, readCookie: function (e) {
      for (var t = e + "=", n = document.cookie.split(";"), r = 0; r < n.length; r++) {
        for (var i = n[r]; " " == i.charAt(0);) i = i.substring(1, i.length);if (0 == i.indexOf(t)) return i.substring(t.length, i.length);
      }return null;
    } }, e(document).ready(function () {
    try {
      window.self === window.top && hsCookies.init();
    } catch (e) {
      return !0;
    }
  });
}(jQuery), ready_callbacks.push(function () {
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
}), ready_callbacks.push(function () {
  var e = {};if (document.location.search) for (var t = parent.document.location.search, n = ("?" === t[0] ? t.substr(1) : t).split("&"), r = 0; r < n.length; r++) {
    var i = n[r].split("=");e[decodeURIComponent(i[0])] = decodeURIComponent(i[1] || "");
  }var o = !1;if (void 0 !== e.utm_source && e.utm_source) o = { s: e.utm_source, m: void 0 !== e.utm_medium ? e.utm_medium : "", c: void 0 !== e.utm_campaign ? e.utm_campaign : "", filter: void 0 !== e.utm_filter ? e.utm_filter : "" };else if (parent.document.referrer && -1 == parent.document.referrer.indexOf("//" + document.domain)) {
    var a = { amp: "ampproject.org", google: "google.", bing: "bing.", yahoo: "yahoo.", yandex: "yandex.", facebook: "facebook.", twitter: "twitter.", instagram: "instagram.", pinterest: "pinterest.", sumissura: "sumissura.com", tailor4less: "tailor4less.com", hockerty: "hockerty." },
        s = "other";for (var l in a) if (parent.document.referrer.indexOf(a[l]) > -1) {
      s = l;break;
    }o = { s: s, m: "organic", c: "referrer", filter: "" };
  }if (!o) return !1;var u = "organic" == o.m ? "-r" : "";if ("google" == o.s || "bing" == o.s || -1 !== o.s.indexOf("facebook")) {
    var c = { "-rmk": "RMK", "-display": "DIS", "-shopping": "SHO", "-gmail": "GMAIL", "-similarusers": "SIM", "-txt": "TXT", "-acq": "ACQ", "-ret": "RET" };for (var d in c) if (-1 != o.c.indexOf(c[d])) {
      u = d, "" == o.filter && void 0 !== e.utm_filter && (o.filter = e.utm_filter);break;
    }"-txt" == u && (-1 != o.c.indexOf("Brand") ? u = "-txt-branding" : -1 != o.c.toLowerCase().indexOf("custom") && (u = "-txt-custom"));
  }o.s += u, "" !== o.filter && "" !== o.c && (o.s += "-" + o.filter), -1 !== o.s.indexOf("facebook") && 0 === o.c.indexOf("IG") && (o.s = o.s.replace("facebook", "instagram"));var f = ("; " + document.cookie).split("; leadsource="),
      p = 2 == f.length && f.pop().split(";").shift();if (p && (p = JSON.parse(p)), "object" != typeof p && (p = {}), p) {
    if (void 0 === p.f) {
      var h = new Date();o.utc = Math.floor(h.getTime() / 1e3) - 60 * h.getTimezoneOffset(), p.f = o;
    } else p.l = o;var m = new Date();m.setTime(m.getTime() + 31536e6), document.cookie = "leadsource=" + JSON.stringify(p) + "; expires= " + m.toUTCString() + "; path=/";
  }
}), $.fn.iosRefresh = function () {}, /\bMSIE 6/.test(navigator.userAgent) && !window.opera) {
  var newUrl = window.region_url + "showMsnIe6/";setTimeout(function () {
    window.location = newUrl;
  }, 0);
}$.fn.disableOptions = function (e) {
  return this.each(function () {
    var t = $(this);t.data("copy") || t.data("copy", t.find("option"));var n = t.val();t.empty(), t.data("copy").each(function () {
      for (var n = e.length - 1; n >= 0; n--) if (e[n] == this.value) return;t.append(this);
    }), t.val(n), null == t.val() ? t.val(t.children(":first").val()) : t.val(n);
  });
}, $.fn.tabs = function (e) {
  var t = { use_href_hash: !0 };return e && (t = $.extend(t, e)), this.each(function () {
    var e = $(this);e.find("ul.triggers a").click(function () {
      if ($(this).hasClass("selected")) return !1;var t = this.getAttribute("href").replace(/^[^#]+/, "");return e.find("div.tab").hide(), e.find("ul.triggers a").removeClass("selected"), $(t).show(), $(this).addClass("selected"), !1;
    });document.location.href.replace(/^[^#]+/, "");var t = !1;t || (t = e.find("ul.triggers a:first")), t.click();
  });
}, ready_callbacks.push(function () {
  var e = $(".toolbar_login");$("#toolbar").on("click", "a.pwd_lost", function () {
    var t = this.getAttribute("href").replace(/^[^#]*#/, "");return e.find("form").hide().filter("." + t).show(), !1;
  }), $("#toolbar").on("submit", "form.form_sign_in", function (e) {
    return $(e.target).valid();
  });var t = window.cdn_host;$("#toolbar").on("submit", "form.form_pwd_lost", function (e) {
    var n = $(e.target).valid();return n && $(".form_pwd_lost .submit").replaceWith('<img style="width:60px;height:60px" src="' + t + 'images/garment/loading_red.gif">'), n;
  }), $("#toolbar").on("click", "a.social", function () {
    return window.open(this.href, "login", "toolbar=no,status=no,menubar=no,scrollbars=yes,resizable=yes,width=640,height=480"), !1;
  }), $("#toolbar .how_it_works").on("mouseover", function () {
    $(this).addClass("keep_hover");
  }).on("mouseout", function (e) {
    $(e.target).is("input") || $(this).removeClass("keep_hover");
  }), "ontouchstart" in window && $("#toolbar a.dropdown, #login-trigger").click(function () {
    return !1;
  }), $("#menu-configure-trigger").click(function () {
    return $(".config_mode").addClass("active"), !1;
  }), $("#menu-configure-trigger-logo").click(function () {
    return $(".config_mode").addClass("active"), !1;
  }), $("#body").click(function () {
    $(".config_mode").removeClass("active");
  }), $(".personalize").click(function () {
    $(".config_mode").removeClass("active");
  });var n = resolution_steps();if ($(".background_howitworks_change").removeClass("background_howitworks_change").addClass("resolution" + n), $("#register_input_footer").length) {
    var r = $("#register_input_footer");r.focus(function () {
      $("#footer p.send").hide(), $("#privacy_label.region_required").css("display", "block");
    }), $("#form_register_newsletter").validate(), $("#register_newsletter").click(function () {
      dataLayer ? dataLayer.push({ event: "send", eventCategory: "Engagement", eventAction: "AltaNewsletter" }) : ga("send", "event", { eventCategory: "Engagement", eventAction: "AltaNewsletter" });var e = $("#form_register_newsletter").find("#privacy_label.region_required #privacy");r.val() && (0 == e.length || e.prop("checked")) ? $("#form_register_newsletter").submit() : (r.css("border-color", "#b8513a"), e.parents("#privacy_label").find("p.error").css({ display: "inline-block" }));
    }), $("#privacy_label.region_required #privacy").change(function () {
      var e = $(this),
          t = e.parents("#privacy_label").find(".error");e.prop("checked") ? t.css({ display: "none" }) : t.css({ display: "inline-block" });
    });
  }$("#footer .magnific_conditions").magnificPopup({ type: "iframe" }), "undefined" == typeof video && (video = !1), "how" == video && $.magnificPopup.open({ items: { src: "http://player.vimeo.com/video/" + id_video + "?title=0&amp;byline=0&amp;portrait=0&amp;color=ffffff&autoplay=1", type: "iframe" } }), "why" == video && $.magnificPopup.open({ items: { src: "http://player.vimeo.com/video/" + id_video + "?title=0&amp;byline=0&amp;portrait=0&amp;color=ffffff&autoplay=1", type: "iframe" } });var i = !1;$("#mini_cart_container").hover(function () {
    if (i) return !0;$(".image", this).each(function () {
      $(this).css("background", "url(" + $(this).attr("src_temp") + ") center center no-repeat");
    }), i = !0;
  }), $("#mini_cart_container").click(function () {
    if (i) return !0;$(".image", this).each(function () {
      $(this).css("background", "url(" + $(this).attr("src_temp") + ") center center no-repeat");
    }), i = !0;
  });
}), ready_callbacks.push(function () {
  $("#toolbar .close_menu").click(function () {
    return $(".config_mode").removeClass("active"), !1;
  }), resize_menu_width(), $("#change_region_link").click(function () {
    $(".regions_popup").show();
  }), $(".regions_popup .background, .regions_popup .close").click(function () {
    $(".regions_popup").hide();
  }), $("body").on("click", "span.ds_link, div.ds_link", function () {
    var e = this.getAttribute("rel");return !("" == e || !e) && ("_blank" == this.getAttribute("target") ? (window.open(e), !1) : (window.location = e, !1));
  }), $("#aboutuspopup").length && ($.magnificPopup.open({ items: { src: "#aboutuspopup" }, type: "inline", closeMarkup: '<button title="Close (Esc)" type="button" class="mfp-close">v</button>' }), $("#aboutuspopup .button").click(function () {
    $.magnificPopup.close();
  })), -1 != navigator.userAgent.indexOf("Mac OS X") && $("body").addClass("mac");
}), ready_callbacks.push(function () {
  var e = -1 == document.cookie.indexOf("noticeSuggest");if (e) {
    var t = {};if (document.location.search) for (var n = document.location.search, r = ("?" === n[0] ? n.substr(1) : n).split("&"), i = 0; i < r.length; i++) {
      var o = r[i].split("=");t[decodeURIComponent(o[0])] = decodeURIComponent(o[1] || "");
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
});var headerMenu = function (e) {
  this.target = e, this.domain = $(e).data("domain"), this.appended = !1, $("ul", e).length && (this.appended = !0), this.menu = { ENGLISH: { en: { USA: "en-us", Canada: "en-ca", "United Kingdom": "en-uk", Australia: "en-au", Ireland: "en-ie", Switzerland: "en-ch", Others: "en" } }, "ESPAÑOL": { es: { "España": "es", "Estados Unidos": "es-us", "México": "es-mx", Otros: "es" } }, "FRANÇAIS": { fr: { France: "fr", Belgique: "fr-be", Suisse: "fr-ch", Canada: "fr-ca" } }, DEUTSCH: { de: { Deutschland: "de", "Österreich": "de-at", Schweiz: "de-ch" } }, ITALIANO: { it: { Italia: "it", Svizzera: "it-ch" } }, "РУССКИЙ": { po: { Russia: "ru" } } };
};headerMenu.prototype.append = function () {
  if (!this.appended) {
    this.appended = !0;var e = "";this.domain;$.each(this.menu, function (t, n) {
      $.each(n, function (n, r) {
        e += "<ul class='" + n + "'>", e += "<li class='title'><span>" + t + "</span></li>", $.each(r, function (t, n) {
          var r = "/" + n + "/",
              i = $('link[rel="alternate"][hreflang="' + n + '"]').first(),
              o = $(i).attr("href");o && (r = o.replace("/select_language", "/")), e += "<li><span rel='" + r + "' class='ds_link'>" + t + "</span></li>";
        }), e += "</ul>";
      });
    }), $(this.target).append(e);
  }
};var hMenu = new headerMenu("#language_selector");$("#change_region_link").click(function (e) {
  hMenu.append();
}), "sumissura" === hMenu.domain && hMenu.append(), function () {
  var e = {};this.tmpl = function t(n, r) {
    var i = /\W/.test(n) ? new Function("obj", "var p=[],print=function(){p.push.apply(p,arguments);};with(obj){p.push('" + n.replace(/[\r\t\n]/g, " ").replace(/'(?=[^%]*%>)/g, "\t").split("'").join("\\'").split("\t").join("'").replace(/<%=(.+?)%>/g, "',$1,'").split("<%").join("');").split("%>").join("p.push('") + "');}return p.join('');") : e[n] = e[n] || t(document.getElementById(n).innerHTML);return r ? i(r) : i;
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
      r = 0;if (t && t.products && region_url.split("/").join("") === t.region) if (n = Object.keys(t.products).length, r = t.total, n > 0) {
    if (mobile_enabled) $("#mobile-cart-trigger").html(n);else {
      var i = "";i = -1 !== window.location.host.indexOf("sumissura") ? '<div class="circle">A<span class="qty_' + n + '">' + n + "</span></div>" : '<div class="circle"><span class="qty_' + n + '">' + n + "</span></div>";var o = {};if ($("#mini_cart_tmpl").length) {
        c = tmpl("mini_cart_tmpl", o);$("#mini_cart_container").append(c);
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