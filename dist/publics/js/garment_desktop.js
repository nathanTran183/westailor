function Garment(t, e) {
  this.step = "", this.container = $(t), this._relations_active = {}, this.buttons_holes_opened = !1, this.extra_fabrics_active = !1, this.extra_linings_active = !1, this.current_extra_option = !1, this.render = $("#available_window .layers"), this.render_zoom = $("#available_window_zoom .layers"), this.pocket_square = $(".pocket_square", this.container), this.render_enabled = !0, this.current_fabric_activator_parent = "", this.id_box_opt_fabric = "", this.bLazy_fabric = !1, this.bLazy_extra = !1, this.fabric_new = !1, this.fabric_preview_open = !1, this.image_size = "STD", this.multi_fabric = !1, this.multi_fabric_active = !1, this.multi_fabric_options = [], this.position_render = "", this.zoom = "", this.last_change = "", this.has_extra_lining = !1, this.has_extra_unlined = !1, this.manualStateChange = !0, this.previous_view = "front", this.quilted_alert = !1, this.unlined_coat_alert = !1, this.winter_lining_alert = !1, this.out_of_stock_status = !1, this.views = [], this.pre_filter_active = !1, this.shirt_style_click = !1, this.actived_coat_seters = !1, this.customer_active = !1, this.lastSharedUrl = null, this._events = {}, this.logos_code = {};for (var r in e) this[r] = e[r];this.current.product_type = this.product_type, this.zoom = "normal", this.current.view = "front", this.current.view_detail = "inside", this.current.neck_open = 0, this.current.inner_sleeve = 0, this.current._show_lining = !1, this.real_product_type = this.product_type, "man_levita" != this.product_type && "man_frac" != this.product_type && "man_chaque" != this.product_type || (this.real_product_type = "man_ceremonial"), this.complex && (this.multi_fabric_options = this.product_parts, "man_suit2" == this.product_type && (this.multi_fabric_options[2] = "man_waistcoat"), this.current.config._active_block = this.multi_fabric_options[0], "man_smoking_jacket" == this.multi_fabric_options[0] && (this.multi_fabric_options[0] = "man_jacket"), "man_levita_jacket" == this.multi_fabric_options[0] && (this.multi_fabric_options[0] = "man_jacket"), "man_chaque_jacket" == this.multi_fabric_options[0] && (this.multi_fabric_options[0] = "man_jacket"), "man_frac_jacket" == this.multi_fabric_options[0] && (this.multi_fabric_options[0] = "man_jacket")), $(".action_column div.price").before('<div class="price original_price"></div>'), "defaultFilter=wedding" == window.location.search.substring(1) && "man_waistcoat" == this.product_type && $("#extra li.waistcoat_metal_buttons").hide(), this.resize_render_viewport_init();var i = {};for (var a in this.config) i[a] = this.config[a];for (var a in this.extra) i[a] = this.extra[a];if (this.product_config = i, this.current.fabric.shoes = "1", this.current.model = model, this.current.style = p_style, "man_shirt" == this.product_type) {
    if (this.current.style || (this.current.style = "business"), this.current.fabric.button_code = e.fabric.man_shirt.button_code, this.current.fabric.button_code || (this.current.fabric.button_code = 1), this.current.fabric.hole_code_fabric = e.fabric.man_shirt.hole_code, this.current.fabric.hole_code_fabric || (this.current.fabric.hole_code_fabric = 107), this.current.fabric.thread_code_fabric = e.fabric.man_shirt.thread_code, this.current.fabric.thread_code_fabric || (this.current.fabric.thread_code_fabric = 107), this.current.fabric.cuff_code = e.fabric.man_shirt.cuff_code, this.current.fabric.cuff_code || (this.current.fabric.cuff_code = 1), this.shirt_styles = this.styles, "auto" != this.current.style && "business" != this.current.style) {
      var o = $(".image_render .options_render a.style"),
          n = $("span", o),
          c = this.shirt_styles[this.current.style];void 0 !== c && ("auto" != this.current.style && $(".title", o).hide(), "auto" != c.view_detail && (this.current.view_detail = c.view_detail), "auto" != c.neck_open && (this.current.neck_open = c.neck_open), "auto" != c.inner_sleeve && (this.current.inner_sleeve = c.inner_sleeve), "auto" != c.icon && n.html(c.icon), "auto" != this.current.style && $(".title." + c.title_to_show, o).show());
    }this.current.fabric.pant_code = e.fabric[this.product_type].pant_code, this.current.fabric.pant_code || (this.current.fabric.pant_code = 1);
  } else if ("man_jacket" == this.product_type) this.current.fabric.button_code = e.fabric.man_jacket.button_code, this.current.fabric.button_code || (this.current.fabric.button_code = 2), this.current.fabric.shirt_to_jacket_id = e.fabric.man_jacket.shirt_to_jacket_id, this.current.fabric.shirt_to_jacket_id || (this.current.fabric.shirt_to_jacket_id = 699), this.current.fabric.lining = e.fabric.man_jacket.lining_id, this.current.fabric.lining || (this.current.fabric.lining = 59), this.current.fabric.label_color = e.fabric.man_jacket.label_color, this.current.fabric.label_color || (this.current.fabric.label_color = 0), this.current.fabric.pant_code = e.fabric[this.product_type].pant_code, this.current.fabric.pant_code || (this.current.fabric.pant_code = 1), this.current.fabric.shoes = e.fabric.shoes, this.current.fabric.shoes || (this.current.fabric.shoes = 1), this.current.fabric.shoe_color = e.fabric.shoe_color, this.current.fabric.shoe_color || (this.current.fabric.shoe_color = "black"), this.current.fabric.tie = e.fabric.id_t4l_tie, this.current.fabric.tie || (this.current.fabric.tie = 1), this.current.pocket_square = "recto", this.current.quilted_waistcoat = "abierto";else if ("man_suit2" == this.product_type || "man_suit3" == this.product_type) this.current.fabric.button_code = e.fabric.man_jacket.button_code, this.current.fabric.button_code || (this.current.fabric.button_code = 2), this.current.fabric.tie = e.fabric.id_t4l_tie, this.current.fabric.tie || (this.current.fabric.tie = 1), this.current.fabric.shirt_to_jacket_id = e.fabric.man_jacket.shirt_to_jacket_id, this.current.fabric.shirt_to_jacket_id || (this.current.fabric.shirt_to_jacket_id = 699), this.current.fabric.lining = e.fabric.man_jacket.lining_id, this.current.fabric.lining || (this.current.fabric.lining = 59), this.current.fabric.label_color = e.fabric.man_jacket.label_color, this.current.fabric.label_color || (this.current.fabric.label_color = 0), this.current.fabric.shoes = e.fabric.shoes, this.current.fabric.shoes || (this.current.fabric.shoes = 1), this.current.fabric.shoe_color = e.fabric.shoe_color, this.current.fabric.shoe_color || (this.current.fabric.shoe_color = "black"), this.current.fabric.waistcoat_button_code = e.fabric.man_waistcoat.button_code, this.current.fabric.waistcoat_button_code || (this.current.fabric.waistcoat_button_code = 2);else if ("man_smoking" == this.product_type) this.current.fabric.button_code = e.fabric.man_smoking.button_code, this.current.fabric.button_code || (this.current.fabric.button_code = 2), this.current.fabric.tie = e.fabric.id_t4l_tie, this.current.fabric.tie || (this.current.fabric.tie = 1), this.current.fabric.shirt_to_jacket_id = e.fabric.man_smoking.shirt_to_jacket_id, this.current.fabric.shirt_to_jacket_id || (this.current.fabric.shirt_to_jacket_id = 699), this.current.fabric.lining = e.fabric.man_smoking.lining_id, this.current.fabric.lining || (this.current.fabric.lining = 59), this.current.fabric.label_color = e.fabric.man_smoking.label_color, this.current.fabric.label_color || (this.current.fabric.label_color = 0), this.current.fabric.shoes = e.fabric.shoes, this.current.fabric.shoes || (this.current.fabric.shoes = 1), this.current.fabric.shoe_color = e.fabric.shoe_color, this.current.fabric.shoe_color || (this.current.fabric.shoe_color = "black");else if ("man_levita" == this.product_type) this.current.fabric.button_code = e.fabric.man_ceremonial.button_code, this.current.fabric.button_code || (this.current.fabric.button_code = 2), this.current.fabric.tie = e.fabric.id_t4l_tie, this.current.fabric.tie || (this.current.fabric.tie = 1), this.current.fabric.shirt_to_jacket_id = e.fabric.man_ceremonial.shirt_to_jacket_id, this.current.fabric.shirt_to_jacket_id || (this.current.fabric.shirt_to_jacket_id = 699), this.current.fabric.lining = e.fabric.man_ceremonial.lining_id, this.current.fabric.lining || (this.current.fabric.lining = 59), this.current.fabric.label_color = e.fabric.man_ceremonial.label_color, this.current.fabric.label_color || (this.current.fabric.label_color = 0), this.current.fabric.shoes = e.fabric.shoes, this.current.fabric.shoes || (this.current.fabric.shoes = 1), this.current.fabric.shoe_color = e.fabric.shoe_color, this.current.fabric.shoe_color || (this.current.fabric.shoe_color = "black");else if ("man_frac" == this.product_type) this.current.fabric.button_code = e.fabric.man_ceremonial.button_code, this.current.fabric.button_code || (this.current.fabric.button_code = 2), this.current.fabric.tie = e.fabric.id_t4l_tie, this.current.fabric.tie || (this.current.fabric.tie = 1), this.current.fabric.shirt_to_jacket_id = e.fabric.man_ceremonial.shirt_to_jacket_id, this.current.fabric.shirt_to_jacket_id || (this.current.fabric.shirt_to_jacket_id = 699), this.current.fabric.lining = e.fabric.man_ceremonial.lining_id, this.current.fabric.lining || (this.current.fabric.lining = 59), this.current.fabric.label_color = e.fabric.man_ceremonial.label_color, this.current.fabric.label_color || (this.current.fabric.label_color = 0), this.current.fabric.shoes = e.fabric.shoes, this.current.fabric.shoes || (this.current.fabric.shoes = 1), this.current.fabric.shoe_color = e.fabric.shoe_color, this.current.fabric.shoe_color || (this.current.fabric.shoe_color = "black");else if ("man_chaque" == this.product_type) this.current.fabric.button_code = e.fabric.man_ceremonial.button_code, this.current.fabric.button_code || (this.current.fabric.button_code = 2), this.current.fabric.tie = e.fabric.id_t4l_tie, this.current.fabric.tie || (this.current.fabric.tie = 1), this.current.fabric.shirt_to_jacket_id = e.fabric.man_ceremonial.shirt_to_jacket_id, this.current.fabric.shirt_to_jacket_id || (this.current.fabric.shirt_to_jacket_id = 699), this.current.fabric.lining = e.fabric.man_ceremonial.lining_id, this.current.fabric.lining || (this.current.fabric.lining = 59), this.current.fabric.label_color = e.fabric.man_ceremonial.label_color, this.current.fabric.label_color || (this.current.fabric.label_color = 0), this.current.fabric.shoes = e.fabric.shoes, this.current.fabric.shoes || (this.current.fabric.shoes = 1), this.current.fabric.shoe_color = e.fabric.shoe_color, this.current.fabric.shoe_color || (this.current.fabric.shoe_color = "black");else if ("man_pants" == this.product_type) this.current.fabric.button_code = e.fabric.man_pants.button_code, this.current.fabric.button_code || (this.current.fabric.button_code = 2), this.current.fabric.shirt_to_jacket_id = e.fabric.man_pants.shirt_to_jacket_id, this.current.fabric.shirt_to_jacket_id || (this.current.fabric.shirt_to_jacket_id = 699), this.current.fabric.lining = e.fabric.man_pants.lining_id, this.current.fabric.lining || (this.current.fabric.lining = 59), this.current.fabric.label_color = e.fabric.man_pants.label_color, this.current.fabric.label_color || (this.current.fabric.label_color = 0), this.current.fabric.pant_code = e.fabric[this.product_type].pant_code, this.current.fabric.pant_code || (this.current.fabric.pant_code = 1), this.current.fabric.shoes = e.fabric.shoes, this.current.fabric.shoes || (this.current.fabric.shoes = 1), this.current.fabric.shoe_color = e.fabric.shoe_color, this.current.fabric.shoe_color || (this.current.fabric.shoe_color = "black"), this.current.fabric.tie = e.fabric.id_t4l_tie, this.current.fabric.tie || (this.current.fabric.tie = 1), this.current.pocket_square = "recto";else if ("man_waistcoat" == this.product_type) this.current.fabric.button_code = e.fabric.man_waistcoat.button_code, this.current.fabric.button_code || (this.current.fabric.button_code = 2), this.current.fabric.waistcoat_button_code = e.fabric.man_waistcoat.button_code, this.current.fabric.waistcoat_button_code || (this.current.fabric.waistcoat_button_code = 2), this.current.fabric.shirt_to_jacket_id = e.fabric.man_waistcoat.shirt_to_jacket_id, this.current.fabric.shirt_to_jacket_id || (this.current.fabric.shirt_to_jacket_id = 699), this.current.fabric.lining = e.fabric.man_waistcoat.lining_id, this.current.fabric.lining || (this.current.fabric.lining = 59), this.current.fabric.label_color = e.fabric.man_waistcoat.label_color, this.current.fabric.label_color || (this.current.fabric.label_color = 0), this.current.fabric.pant_code = e.fabric[this.product_type].pant_code, this.current.fabric.pant_code || (this.current.fabric.pant_code = 1), this.current.fabric.shoes = e.fabric.shoes, this.current.fabric.shoes || (this.current.fabric.shoes = 1), this.current.fabric.shoe_color = e.fabric.shoe_color, this.current.fabric.shoe_color || (this.current.fabric.shoe_color = "black"), this.current.fabric.tie = e.fabric.id_t4l_tie, this.current.fabric.tie || (this.current.fabric.tie = 1), this.current.pocket_square = "recto";else if ("man_coat" == this.product_type) this.current.fabric.button_code = e.fabric.man_coat.button_code, this.current.fabric.button_code || (this.current.fabric.button_code = 2), this.current.fabric.ribbon_color = e.fabric.man_coat.ribbon_color, this.current.fabric.ribbon_color || (this.current.fabric.ribbon_color = "mm");else if ("man_polo" == this.product_type) {
    var s = this,
        l = [];$(".box_opt.logos .box_logos .logo").each(function () {
      var t = $(this).attr("rel"),
          e = $(this).attr("code");l[t] = e;
    }), s.logos_code = l;
  }if ("man_polo" == this.product_type) {
    var _ = $("#extra .options_list").html(),
        u = $("#extra .box_opts").html();$("#config .options_list").append(_), $("#config .box_opts").append(u), $("#extra").remove(), $(".step_separator").last().remove(), $("#header_config .step_inside").addClass("without_extra"), $("#link_extras").remove();
  }
}function parse_query_string(t, e) {
  if (e) {
    e = e.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");var r = new RegExp("[\\?&]" + e + "=([^&#]*)").exec(t);return null == r ? "" : decodeURIComponent(r[1].replace(/\+/g, " "));
  }var i,
      a = /\+/g,
      o = /([^&=]+)=?([^&]*)/g,
      n = function (t) {
    return decodeURIComponent(t.replace(a, " "));
  },
      c = t.replace(/^\?/, "");for (urlParams = {}; i = o.exec(c);) urlParams[n(i[1])] = n(i[2]);return urlParams;
}function formatMoney(t, e, r, i) {
  t = t || 0, e = isNaN(e = Math.abs(e)) ? 2 : e, r = r || ",", i = i || ".";var a = t < 0 ? "-" : "",
      o = parseInt(t = Math.abs(+t || 0).toFixed(e), 10) + "",
      n = (n = o.length) > 3 ? n % 3 : 0,
      c = Math.abs(t - o).toFixed(e).slice(2);return "00" == c ? a + (n ? o.substr(0, n) + r : "") + o.substr(n).replace(/(\d{3})(?=\d)/g, "$1" + r) : a + (n ? o.substr(0, n) + r : "") + o.substr(n).replace(/(\d{3})(?=\d)/g, "$1" + r) + (e ? i + c : "");
}function format_price(t, e, r) {
  switch (r || (r = window.currency), e) {case "small_symbol":
      switch (r.iso) {case "GBP":
          return "<small>" + r.symbol + "</small>" + formatMoney(t);case "USD":
          i = "<small>" + r.symbol + "</small>" + formatMoney(t);return "/en-ca/" != window.region_url && "/fr-ca/" != window.region_url || (i += '<small style="font-size: 50%">USD</small>'), i;case "AUD":
          return "<small>AU" + r.symbol + "</small>" + formatMoney(t);case "MXN":
          return "<small>MX" + r.symbol + "</small>" + formatMoney(t);case "RUB":
          return formatMoney(t) + "<small>p</small>";case "CHF":
          return "<small>CHF </small>" + formatMoney(t, 2, "'", ".");default:
          return formatMoney(t, 2, ".", ",") + "<small>" + r.symbol + "</small>";}case "text":default:
      switch (r.iso) {case "GBP":
          return r.symbol + formatMoney(t);case "USD":
          var i = r.symbol + formatMoney(t);return "/en-ca/" != window.region_url && "/fr-ca/" != window.region_url || (i += '<small style="font-size: 50%">USD</small>'), i;case "AUD":
          return "AU" + r.symbol + formatMoney(t);case "MXN":
          return "MX" + r.symbol + formatMoney(t);case "RUB":
          return formatMoney(t) + "p";case "CHF":
          return "<small>CHF </small>" + formatMoney(t, 2, "'", ".");default:
          return formatMoney(t) + r.symbol;}}
}function str_replace(t, e, r, i) {
  var a = 0,
      o = 0,
      n = "",
      c = "",
      s = 0,
      l = 0,
      _ = [].concat(t),
      u = [].concat(e),
      p = r,
      d = "[object Array]" === Object.prototype.toString.call(u),
      f = "[object Array]" === Object.prototype.toString.call(p);for (p = [].concat(p), i && (this.window[i] = 0), a = 0, s = p.length; a < s; a++) if ("" !== p[a]) for (o = 0, l = _.length; o < l; o++) n = p[a] + "", c = d ? void 0 !== u[o] ? u[o] : "" : u[0], p[a] = n.split(_[o]).join(c), i && p[a] !== n && (this.window[i] += (n.length - p[a].length) / _[o].length);return f ? p : p[0];
}function strpos(t, e, r) {
  var i = (t + "").indexOf(e, r || 0);return -1 !== i && i;
}function array_push(t) {
  var e = 0,
      r = "",
      i = arguments,
      a = i.length,
      o = /^\d$/,
      n = 0,
      c = 0,
      s = 0;if (t.hasOwnProperty("length")) {
    for (e = 1; e < a; e++) t[t.length] = i[e];return t.length;
  }for (r in t) t.hasOwnProperty(r) && (++s, -1 !== r.search(o) && (c = (n = parseInt(r, 10)) > c ? n : c));for (e = 1; e < a; e++) t[++c] = i[e];return s + e - 1;
}function empty(t) {
  var e,
      r,
      i,
      a = [void 0, null, !1, 0, "", "0"];for (r = 0, i = a.length; r < i; r++) if (t === a[r]) return !0;if ("object" == typeof t) {
    for (e in t) return !1;return !0;
  }return !1;
}function array_merge() {
  var t,
      e = Array.prototype.slice.call(arguments),
      r = e.length,
      i = {},
      a = "",
      o = 0,
      n = 0,
      c = 0,
      s = 0,
      l = Object.prototype.toString,
      _ = !0;for (c = 0; c < r; c++) if ("[object Array]" !== l.call(e[c])) {
    _ = !1;break;
  }if (_) {
    for (_ = [], c = 0; c < r; c++) _ = _.concat(e[c]);return _;
  }for (c = 0, s = 0; c < r; c++) if (t = e[c], "[object Array]" === l.call(t)) for (n = 0, o = t.length; n < o; n++) i[s++] = t[n];else for (a in t) t.hasOwnProperty(a) && (parseInt(a, 10) + "" === a ? i[s++] = t[a] : i[a] = t[a]);return i;
}!function (t, e) {
  "function" == typeof define && define.amd ? define(e) : "object" == typeof exports ? module.exports = e() : t.Blazy = e();
}(this, function () {
  "use strict";
  function t(t) {
    var r = t._util;r.elements = f(t.options), r.count = r.elements.length, r.destroyed && (r.destroyed = !1, t.options.container && m(t.options.container, function (t) {
      b(t, "scroll", r.validateT);
    }), b(window, "resize", r.saveViewportOffsetT), b(window, "resize", r.validateT), b(window, "scroll", r.validateT)), e(t);
  }function e(t) {
    for (var e = t._util, i = 0; i < e.count; i++) {
      var a = e.elements[i];(r(a, t.options) || p(a, t.options.successClass)) && (t.load(a), e.elements.splice(i, 1), e.count--, i--);
    }0 === e.count && t.destroy();
  }function r(t, e) {
    var r = t.getBoundingClientRect();if (e.container && y) {
      var a = t.closest(e.containerClass);if (a) {
        var o = a.getBoundingClientRect();if (i(o, w)) {
          var n = o.top - e.offset,
              c = o.right + e.offset,
              s = o.bottom + e.offset,
              l = o.left - e.offset;return i(r, { top: n > w.top ? n : w.top, right: c < w.right ? c : w.right, bottom: s < w.bottom ? s : w.bottom, left: l > w.left ? l : w.left });
        }return !1;
      }
    }return i(r, w);
  }function i(t, e) {
    return t.right >= e.left && t.bottom >= e.top && t.left <= e.right && t.top <= e.bottom;
  }function a(t, e, r) {
    if (!p(t, r.successClass) && (e || r.loadInvisible || t.offsetWidth > 0 && t.offsetHeight > 0)) {
      var i = l(t, $) || l(t, r.src);if (i) {
        var a = i.split(r.separator),
            s = a[k && a.length > 1 ? 1 : 0],
            _ = l(t, r.srcset),
            f = u(t, "img"),
            h = t.parentNode,
            g = h && u(h, "picture");if (f || void 0 === t.src) {
          var w = new Image(),
              y = function () {
            r.error && r.error(t, "invalid"), d(t, r.errorClass), v(w, "error", y), v(w, "load", S);
          },
              S = function () {
            f ? g || c(t, s, _) : t.style.backgroundImage = 'url("' + s + '")', o(t, r), v(w, "load", S), v(w, "error", y);
          };g && (w = t, m(h.getElementsByTagName("source"), function (t) {
            n(t, C, r.srcset);
          })), b(w, "error", y), b(w, "load", S), c(w, s, _);
        } else t.src = s, o(t, r);
      } else u(t, "video") ? (m(t.getElementsByTagName("source"), function (t) {
        n(t, x, r.src);
      }), t.load(), o(t, r)) : (r.error && r.error(t, "missing"), d(t, r.errorClass));
    }
  }function o(t, e) {
    d(t, e.successClass), e.success && e.success(t), _(t, e.src), _(t, e.srcset), m(e.breakpoints, function (e) {
      _(t, e.src);
    });
  }function n(t, e, r) {
    var i = l(t, r);i && (s(t, e, i), _(t, r));
  }function c(t, e, r) {
    r && s(t, C, r), t.src = e;
  }function s(t, e, r) {
    t.setAttribute(e, r);
  }function l(t, e) {
    return t.getAttribute(e);
  }function _(t, e) {
    t.removeAttribute(e);
  }function u(t, e) {
    return t.nodeName.toLowerCase() === e;
  }function p(t, e) {
    return -1 !== (" " + t.className + " ").indexOf(" " + e + " ");
  }function d(t, e) {
    p(t, e) || (t.className += " " + e);
  }function f(t) {
    for (var e = [], r = t.root.querySelectorAll(t.selector), i = r.length; i--; e.unshift(r[i]));return e;
  }function h(t) {
    w.bottom = (window.innerHeight || document.documentElement.clientHeight) + t, w.right = (window.innerWidth || document.documentElement.clientWidth) + t;
  }function b(t, e, r) {
    t.attachEvent ? t.attachEvent && t.attachEvent("on" + e, r) : t.addEventListener(e, r, { capture: !1, passive: !0 });
  }function v(t, e, r) {
    t.detachEvent ? t.detachEvent && t.detachEvent("on" + e, r) : t.removeEventListener(e, r, { capture: !1, passive: !0 });
  }function m(t, e) {
    if (t && e) for (var r = t.length, i = 0; i < r && !1 !== e(t[i], i); i++);
  }function g(t, e, r) {
    var i = 0;return function () {
      var a = +new Date();a - i < e || (i = a, t.apply(r, arguments));
    };
  }var $,
      w,
      k,
      y,
      x = "src",
      C = "srcset";return function (r) {
    if (!document.querySelectorAll) {
      var i = document.createStyleSheet();document.querySelectorAll = function (t, e, r, a, o) {
        for (o = document.all, e = [], r = (t = t.replace(/\[for\b/gi, "[htmlFor").split(",")).length; r--;) {
          for (i.addRule(t[r], "k:v"), a = o.length; a--;) o[a].currentStyle.k && e.push(o[a]);i.removeRule(0);
        }return e;
      };
    }var o = this,
        n = o._util = {};n.elements = [], n.destroyed = !0, o.options = r || {}, o.options.error = o.options.error || !1, o.options.offset = o.options.offset || 100, o.options.root = o.options.root || document, o.options.success = o.options.success || !1, o.options.selector = o.options.selector || ".b-lazy", o.options.separator = o.options.separator || "|", o.options.containerClass = o.options.container, o.options.container = !!o.options.containerClass && document.querySelectorAll(o.options.containerClass), o.options.errorClass = o.options.errorClass || "b-error", o.options.breakpoints = o.options.breakpoints || !1, o.options.loadInvisible = o.options.loadInvisible || !1, o.options.successClass = o.options.successClass || "b-loaded", o.options.validateDelay = o.options.validateDelay || 25, o.options.saveViewportOffsetDelay = o.options.saveViewportOffsetDelay || 50, o.options.srcset = o.options.srcset || "data-srcset", o.options.src = $ = o.options.src || "data-src", y = Element.prototype.closest, k = window.devicePixelRatio > 1, (w = {}).top = 0 - o.options.offset, w.left = 0 - o.options.offset, o.revalidate = function () {
      t(o);
    }, o.load = function (t, e) {
      var r = this.options;t && void 0 === t.length ? a(t, e, r) : m(t, function (t) {
        a(t, e, r);
      });
    }, o.destroy = function () {
      var t = o._util;o.options.container && m(o.options.container, function (e) {
        v(e, "scroll", t.validateT);
      }), v(window, "scroll", t.validateT), v(window, "resize", t.validateT), v(window, "resize", t.saveViewportOffsetT), t.count = 0, t.elements.length = 0, t.destroyed = !0;
    }, n.validateT = g(function () {
      e(o);
    }, o.options.validateDelay, o), n.saveViewportOffsetT = g(function () {
      h(o.options.offset);
    }, o.options.saveViewportOffsetDelay, o), h(o.options.offset), m(o.options.breakpoints, function (t) {
      if (t.width >= window.screen.width) return $ = t.src, !1;
    }), setTimeout(function () {
      t(o);
    });
  };
}), function (t) {
  "function" == typeof define && define.amd && define.amd.jQuery ? define(["jquery"], t) : t(jQuery);
}(function (t) {
  function e(e) {
    return !e || void 0 !== e.allowPageScroll || void 0 === e.swipe && void 0 === e.swipeStatus || (e.allowPageScroll = l), void 0 !== e.click && void 0 === e.tap && (e.tap = e.click), e || (e = {}), e = t.extend({}, t.fn.swipe.defaults, e), this.each(function () {
      var i = t(this),
          a = i.data(j);a || (a = new r(this, e), i.data(j, a));
    });
  }function r(e, r) {
    function T(e) {
      if (!(lt() || t(e.target).closest(r.excludedElements, Nt).length > 0)) {
        var i,
            a = e.originalEvent ? e.originalEvent : e,
            o = a.touches,
            n = o ? o[0] : a;return Rt = $, o ? Wt = o.length : e.preventDefault(), Ft = 0, Lt = null, Dt = null, Et = 0, Ut = 0, qt = 0, Gt = 1, Bt = 0, Qt = ft(), Mt = vt(), ct(), !o || Wt === r.fingers || r.fingers === m || M() ? (ut(0, n), Vt = St(), 2 == Wt && (ut(1, o[1]), Ut = qt = $t(Qt[0].start, Qt[1].start)), (r.swipeStatus || r.pinchStatus) && (i = F(a, Rt))) : i = !1, !1 === i ? (Rt = y, F(a, Rt), i) : (r.hold && (te = setTimeout(t.proxy(function () {
          Nt.trigger("hold", [a.target]), r.hold && (i = r.hold.call(Nt, a, a.target));
        }, this), r.longTapThreshold)), _t(!0), null);
      }
    }function z(t) {
      var e = t.originalEvent ? t.originalEvent : t;if (Rt !== k && Rt !== y && !st()) {
        var i,
            a = e.touches,
            o = pt(a ? a[0] : e);if (Jt = St(), a && (Wt = a.length), r.hold && clearTimeout(te), Rt = w, 2 == Wt && (0 == Ut ? (ut(1, a[1]), Ut = qt = $t(Qt[0].start, Qt[1].start)) : (pt(a[1]), qt = $t(Qt[0].end, Qt[1].end), Dt = kt(Qt[0].end, Qt[1].end)), Gt = wt(Ut, qt), Bt = Math.abs(Ut - qt)), Wt === r.fingers || r.fingers === m || !a || M()) {
          if (Lt = Ct(o.start, o.end), B(t, Lt), Ft = yt(o.start, o.end), Et = gt(), ht(Lt, Ft), (r.swipeStatus || r.pinchStatus) && (i = F(e, Rt)), !r.triggerOnTouchEnd || r.triggerOnTouchLeave) {
            var n = !0;if (r.triggerOnTouchLeave) {
              var c = jt(this);n = Tt(o.end, c);
            }!r.triggerOnTouchEnd && n ? Rt = H(w) : r.triggerOnTouchLeave && !n && (Rt = H(k)), Rt != y && Rt != k || F(e, Rt);
          }
        } else F(e, Rt = y);!1 === i && F(e, Rt = y);
      }
    }function I(t) {
      var e = t.originalEvent ? t.originalEvent : t,
          i = e.touches;return i && i.length ? (nt(), !0) : (st() && (Wt = Yt), Jt = St(), Et = gt(), U() || !E() ? F(e, Rt = y) : r.triggerOnTouchEnd || 0 == r.triggerOnTouchEnd && Rt === w ? (t.preventDefault(), F(e, Rt = k)) : !r.triggerOnTouchEnd && X() ? L(e, Rt = k, d) : Rt === w && F(e, Rt = y), _t(!1), null);
    }function A() {
      Wt = 0, Jt = 0, Vt = 0, Ut = 0, qt = 0, Gt = 1, ct(), _t(!1);
    }function O(t) {
      var e = t.originalEvent ? t.originalEvent : t;r.triggerOnTouchLeave && F(e, Rt = H(k));
    }function P() {
      Nt.unbind(It, T), Nt.unbind(Ht, A), Nt.unbind(At, z), Nt.unbind(Ot, I), Pt && Nt.unbind(Pt, O), _t(!1);
    }function H(t) {
      var e = t,
          i = G(),
          a = E(),
          o = U();return !i || o ? e = y : !a || t != w || r.triggerOnTouchEnd && !r.triggerOnTouchLeave ? !a && t == k && r.triggerOnTouchLeave && (e = y) : e = k, e;
    }function F(t, e) {
      var r,
          i = t.touches;return Q() || W() || N() || M() ? ((Q() || W()) && (r = L(t, e, u)), (N() || M()) && !1 !== r && (r = L(t, e, p))) : at() && !1 !== r ? r = L(t, e, f) : ot() && !1 !== r ? r = L(t, e, h) : it() && !1 !== r && (r = L(t, e, d)), e === y && A(t), e === k && (i ? i.length || A(t) : A(t)), r;
    }function L(e, l, _) {
      var b;if (_ == u) {
        if (Nt.trigger("swipeStatus", [l, Lt || null, Ft || 0, Et || 0, Wt, Qt]), r.swipeStatus && !1 === (b = r.swipeStatus.call(Nt, e, l, Lt || null, Ft || 0, Et || 0, Wt, Qt))) return !1;if (l == k && R()) {
          if (Nt.trigger("swipe", [Lt, Ft, Et, Wt, Qt]), r.swipe && !1 === (b = r.swipe.call(Nt, e, Lt, Ft, Et, Wt, Qt))) return !1;switch (Lt) {case i:
              Nt.trigger("swipeLeft", [Lt, Ft, Et, Wt, Qt]), r.swipeLeft && (b = r.swipeLeft.call(Nt, e, Lt, Ft, Et, Wt, Qt));break;case a:
              Nt.trigger("swipeRight", [Lt, Ft, Et, Wt, Qt]), r.swipeRight && (b = r.swipeRight.call(Nt, e, Lt, Ft, Et, Wt, Qt));break;case o:
              Nt.trigger("swipeUp", [Lt, Ft, Et, Wt, Qt]), r.swipeUp && (b = r.swipeUp.call(Nt, e, Lt, Ft, Et, Wt, Qt));break;case n:
              Nt.trigger("swipeDown", [Lt, Ft, Et, Wt, Qt]), r.swipeDown && (b = r.swipeDown.call(Nt, e, Lt, Ft, Et, Wt, Qt));}
        }
      }if (_ == p) {
        if (Nt.trigger("pinchStatus", [l, Dt || null, Bt || 0, Et || 0, Wt, Gt, Qt]), r.pinchStatus && !1 === (b = r.pinchStatus.call(Nt, e, l, Dt || null, Bt || 0, Et || 0, Wt, Gt, Qt))) return !1;if (l == k && D()) switch (Dt) {case c:
            Nt.trigger("pinchIn", [Dt || null, Bt || 0, Et || 0, Wt, Gt, Qt]), r.pinchIn && (b = r.pinchIn.call(Nt, e, Dt || null, Bt || 0, Et || 0, Wt, Gt, Qt));break;case s:
            Nt.trigger("pinchOut", [Dt || null, Bt || 0, Et || 0, Wt, Gt, Qt]), r.pinchOut && (b = r.pinchOut.call(Nt, e, Dt || null, Bt || 0, Et || 0, Wt, Gt, Qt));}
      }return _ == d ? l !== y && l !== k || (clearTimeout(Zt), clearTimeout(te), Y() && !tt() ? (Kt = St(), Zt = setTimeout(t.proxy(function () {
        Kt = null, Nt.trigger("tap", [e.target]), r.tap && (b = r.tap.call(Nt, e, e.target));
      }, this), r.doubleTapThreshold)) : (Kt = null, Nt.trigger("tap", [e.target]), r.tap && (b = r.tap.call(Nt, e, e.target)))) : _ == f ? l !== y && l !== k || (clearTimeout(Zt), Kt = null, Nt.trigger("doubletap", [e.target]), r.doubleTap && (b = r.doubleTap.call(Nt, e, e.target))) : _ == h && (l !== y && l !== k || (clearTimeout(Zt), Kt = null, Nt.trigger("longtap", [e.target]), r.longTap && (b = r.longTap.call(Nt, e, e.target)))), b;
    }function E() {
      var t = !0;return null !== r.threshold && (t = Ft >= r.threshold), t;
    }function U() {
      var t = !1;return null !== r.cancelThreshold && null !== Lt && (t = bt(Lt) - Ft >= r.cancelThreshold), t;
    }function q() {
      return null === r.pinchThreshold || Bt >= r.pinchThreshold;
    }function G() {
      return !r.maxTimeThreshold || !(Et >= r.maxTimeThreshold);
    }function B(t, e) {
      if (!1 !== r.preventDefaultEvents) if (r.allowPageScroll === l) t.preventDefault();else {
        var c = r.allowPageScroll === _;switch (e) {case i:
            (r.swipeLeft && c || !c && r.allowPageScroll != b) && t.preventDefault();break;case a:
            (r.swipeRight && c || !c && r.allowPageScroll != b) && t.preventDefault();break;case o:
            (r.swipeUp && c || !c && r.allowPageScroll != v) && t.preventDefault();break;case n:
            (r.swipeDown && c || !c && r.allowPageScroll != v) && t.preventDefault();}
      }
    }function D() {
      var t = V(),
          e = J(),
          r = q();return t && e && r;
    }function M() {
      return !!(r.pinchStatus || r.pinchIn || r.pinchOut);
    }function N() {
      return !(!D() || !M());
    }function R() {
      var t = G(),
          e = E(),
          r = V(),
          i = J();return !U() && i && r && e && t;
    }function W() {
      return !!(r.swipe || r.swipeStatus || r.swipeLeft || r.swipeRight || r.swipeUp || r.swipeDown);
    }function Q() {
      return !(!R() || !W());
    }function V() {
      return Wt === r.fingers || r.fingers === m || !x;
    }function J() {
      return 0 !== Qt[0].end.x;
    }function X() {
      return !!r.tap;
    }function Y() {
      return !!r.doubleTap;
    }function K() {
      return !!r.longTap;
    }function Z() {
      if (null == Kt) return !1;var t = St();return Y() && t - Kt <= r.doubleTapThreshold;
    }function tt() {
      return Z();
    }function et() {
      return (1 === Wt || !x) && (isNaN(Ft) || Ft < r.threshold);
    }function rt() {
      return Et > r.longTapThreshold && Ft < g;
    }function it() {
      return !(!et() || !X());
    }function at() {
      return !(!Z() || !Y());
    }function ot() {
      return !(!rt() || !K());
    }function nt() {
      Xt = St(), Yt = event.touches.length + 1;
    }function ct() {
      Xt = 0, Yt = 0;
    }function st() {
      var t = !1;return Xt && St() - Xt <= r.fingerReleaseThreshold && (t = !0), t;
    }function lt() {
      return !(!0 !== Nt.data(j + "_intouch"));
    }function _t(t) {
      !0 === t ? (Nt.bind(At, z), Nt.bind(Ot, I), Pt && Nt.bind(Pt, O)) : (Nt.unbind(At, z, !1), Nt.unbind(Ot, I, !1), Pt && Nt.unbind(Pt, O, !1)), Nt.data(j + "_intouch", !0 === t);
    }function ut(t, e) {
      var r = void 0 !== e.identifier ? e.identifier : 0;return Qt[t].identifier = r, Qt[t].start.x = Qt[t].end.x = e.pageX || e.clientX, Qt[t].start.y = Qt[t].end.y = e.pageY || e.clientY, Qt[t];
    }function pt(t) {
      var e = dt(void 0 !== t.identifier ? t.identifier : 0);return e.end.x = t.pageX || t.clientX, e.end.y = t.pageY || t.clientY, e;
    }function dt(t) {
      for (var e = 0; e < Qt.length; e++) if (Qt[e].identifier == t) return Qt[e];
    }function ft() {
      for (var t = [], e = 0; e <= 5; e++) t.push({ start: { x: 0, y: 0 }, end: { x: 0, y: 0 }, identifier: 0 });return t;
    }function ht(t, e) {
      e = Math.max(e, bt(t)), Mt[t].distance = e;
    }function bt(t) {
      if (Mt[t]) return Mt[t].distance;
    }function vt() {
      var t = {};return t[i] = mt(i), t[a] = mt(a), t[o] = mt(o), t[n] = mt(n), t;
    }function mt(t) {
      return { direction: t, distance: 0 };
    }function gt() {
      return Jt - Vt;
    }function $t(t, e) {
      var r = Math.abs(t.x - e.x),
          i = Math.abs(t.y - e.y);return Math.round(Math.sqrt(r * r + i * i));
    }function wt(t, e) {
      return (e / t * 1).toFixed(2);
    }function kt() {
      return Gt < 1 ? s : c;
    }function yt(t, e) {
      return Math.round(Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2)));
    }function xt(t, e) {
      var r = t.x - e.x,
          i = e.y - t.y,
          a = Math.atan2(i, r),
          o = Math.round(180 * a / Math.PI);return o < 0 && (o = 360 - Math.abs(o)), o;
    }function Ct(t, e) {
      var r = xt(t, e);return r <= 45 && r >= 0 ? i : r <= 360 && r >= 315 ? i : r >= 135 && r <= 225 ? a : r > 45 && r < 135 ? n : o;
    }function St() {
      return new Date().getTime();
    }function jt(e) {
      var r = (e = t(e)).offset();return { left: r.left, right: r.left + e.outerWidth(), top: r.top, bottom: r.top + e.outerHeight() };
    }function Tt(t, e) {
      return t.x > e.left && t.x < e.right && t.y > e.top && t.y < e.bottom;
    }var zt = x || S || !r.fallbackToMouseEvents,
        It = zt ? S ? C ? "MSPointerDown" : "pointerdown" : "touchstart" : "mousedown",
        At = zt ? S ? C ? "MSPointerMove" : "pointermove" : "touchmove" : "mousemove",
        Ot = zt ? S ? C ? "MSPointerUp" : "pointerup" : "touchend" : "mouseup",
        Pt = zt ? null : "mouseleave",
        Ht = S ? C ? "MSPointerCancel" : "pointercancel" : "touchcancel",
        Ft = 0,
        Lt = null,
        Et = 0,
        Ut = 0,
        qt = 0,
        Gt = 1,
        Bt = 0,
        Dt = 0,
        Mt = null,
        Nt = t(e),
        Rt = "start",
        Wt = 0,
        Qt = null,
        Vt = 0,
        Jt = 0,
        Xt = 0,
        Yt = 0,
        Kt = 0,
        Zt = null,
        te = null;try {
      Nt.bind(It, T), Nt.bind(Ht, A);
    } catch (e) {
      t.error("events not supported " + It + "," + Ht + " on jQuery.swipe");
    }this.enable = function () {
      return Nt.bind(It, T), Nt.bind(Ht, A), Nt;
    }, this.disable = function () {
      return P(), Nt;
    }, this.destroy = function () {
      P(), Nt.data(j, null), Nt = null;
    }, this.option = function (e, i) {
      if (void 0 !== r[e]) {
        if (void 0 === i) return r[e];r[e] = i;
      } else t.error("Option " + e + " does not exist on jQuery.swipe.options");return null;
    };
  }var i = "left",
      a = "right",
      o = "up",
      n = "down",
      c = "in",
      s = "out",
      l = "none",
      _ = "auto",
      u = "swipe",
      p = "pinch",
      d = "tap",
      f = "doubletap",
      h = "longtap",
      b = "horizontal",
      v = "vertical",
      m = "all",
      g = 10,
      $ = "start",
      w = "move",
      k = "end",
      y = "cancel",
      x = "ontouchstart" in window,
      C = window.navigator.msPointerEnabled && !window.navigator.pointerEnabled,
      S = window.navigator.pointerEnabled || window.navigator.msPointerEnabled,
      j = "TouchSwipe",
      T = { fingers: 1, threshold: 75, cancelThreshold: null, pinchThreshold: 20, maxTimeThreshold: null, fingerReleaseThreshold: 250, longTapThreshold: 500, doubleTapThreshold: 200, swipe: null, swipeLeft: null, swipeRight: null, swipeUp: null, swipeDown: null, swipeStatus: null, pinchIn: null, pinchOut: null, pinchStatus: null, click: null, tap: null, doubleTap: null, longTap: null, hold: null, triggerOnTouchEnd: !0, triggerOnTouchLeave: !1, allowPageScroll: "auto", fallbackToMouseEvents: !0, excludedElements: "label, button, input, select, textarea, a, .noSwipe", preventDefaultEvents: !0 };t.fn.swipe = function (r) {
    var i = t(this),
        a = i.data(j);if (a && "string" == typeof r) {
      if (a[r]) return a[r].apply(this, Array.prototype.slice.call(arguments, 1));t.error("Method " + r + " does not exist on jQuery.swipe");
    } else if (!(a || "object" != typeof r && r)) return e.apply(this, arguments);return i;
  }, t.fn.swipe.version = "1.6.9", t.fn.swipe.defaults = T, t.fn.swipe.phases = { PHASE_START: $, PHASE_MOVE: w, PHASE_END: k, PHASE_CANCEL: y }, t.fn.swipe.directions = { LEFT: i, RIGHT: a, UP: o, DOWN: n, IN: c, OUT: s }, t.fn.swipe.pageScroll = { NONE: l, HORIZONTAL: b, VERTICAL: v, AUTO: _ }, t.fn.swipe.fingers = { ONE: 1, TWO: 2, THREE: 3, ALL: m };
}), Garment.prototype.getCurrentLayers = function () {
  return this.current;
}, Garment.prototype.parseImages = function (t, e, r) {
  layers = this.getLayers(), layers = this.parseLayers(layers, e, r), final_images = [];for (key in t) {
    var i = t[key];array_push(final_images, [layers[i.layer].src + i.src, i.zIndex, i.class, i.render]);
  }return final_images;
}, Garment.prototype.renderDraw = function (t, e, r, i) {
  var a = this;t || (t = "STD"), i || (i = !1), this.current.size = t, "man_suit2" == a.product_type && "without_model" == a.current.view && "man_pants" == this.current.config._active_block && (this.current.config._active_block = "man_jacket"), "blouse_cuffs" == a.last_change || "blouse_cuff" == a.last_change ? (this.current.inner_strip_desactive = !0, a.last_change = "") : this.current.inner_strip_desactive = !1;var o = this.renderGetImages(),
      n = $(".loading"),
      c = a.render,
      s = null;if ("BIG" == t && (c = a.render_zoom, n = $(".image_render_full .loading")), webp_support) for (var l in o) {
    var _ = o[l][0].replace("png", "webp");o[l][0] = _;
  }c.find("img").addClass("delete"), e != r && c.find("img.delete").remove(), "favourite_product" === i && (c = $("#favourite_product_popup .image").first(), s = $("#favourite_product_popup .loading").first());var u = [];for (var p in o) (h = c.find("img[src$='" + o[p][0] + "']")).length ? (h.attr("class", ""), o[p][2] && h.addClass(o[p][2])) : u.push(p);if (u.length) {
    n.addClass("active");var d = 0;for (var p in u) {
      var f = o[u[p]][3];0 != f && (f += "/");var h = $('<img onerror = "" src="' + o[u[p]][0] + '" alt="" render = ' + f + ">").on("load", function () {
        ++d == u.length && (s && s.removeClass("active"), n.removeClass("active"), c.addClass("active"), c.find("img").show(), c.find("img.delete").remove(), $(".loading_personalize").hide());
      }).hide().appendTo(c).css("zIndex", o[u[p]][1]).attr("class", "").each(function () {}).on("error", function () {
        ++d == u.length && (s && s.removeClass("active"), c.addClass("active"), n.removeClass("active"), c.find("img").show(), c.find("img.delete").remove(), $(".loading_personalize").hide());
      });o[u[p]][2] && h.addClass(o[u[p]][2]);
    }
  } else s && s.removeClass("active"), c.find("img.delete").remove();
}, Garment.prototype.parseLayers = function (t, e, r) {
  r || (r = "STD");var i = !1,
      a = !1;if (void 0 !== e.extras.button_holes_threads && e.extras.button_holes_threads["holes-color"]) {
    i = !0;var o = e.extras.button_holes_threads["holes-color"];
  }if (void 0 !== e.extras.button_holes_threads && e.extras.button_holes_threads["threads-color"]) {
    a = !0;var n = e.extras.button_holes_threads["threads-color"];
  }var c = !1,
      s = !1,
      l = !1;if (void 0 !== e.extras.logos) {
    c = !0;var s = this.logos_code[e.extras.logos.logo],
        l = e.extras.logos.color_custom;
  }void 0 !== e.extras.contrasts && "1" == e.extras.contrasts.contrast && (!0, void 0 === e.extras.contrasts.contrasts_flap || empty(e.extras.contrasts.contrasts_flap) || (e.fabric.extra_satin_jacket_lapel = e.extras.contrasts.contrasts_flap), void 0 === e.extras.contrasts.contrasts_pockets || empty(e.extras.contrasts.contrasts_pockets) || (e.fabric.extra_satin_jacket_pockets = e.extras.contrasts.contrasts_pockets), void 0 === e.extras.contrasts.contrasts_buttons || empty(e.extras.contrasts.contrasts_buttons) || (e.fabric.extra_satin_jacket_buttons = e.extras.contrasts.contrasts_buttons, e.fabric.extra_satin_pants_buttons = e.extras.contrasts.contrasts_buttons), void 0 === e.extras.contrasts.contrasts_pants || empty(e.extras.contrasts.contrasts_pants) || (e.fabric.extra_satin_pants_ribbon = e.extras.contrasts.contrasts_pants)), view = e.view, "without_model" == e.view && (view = "front");for (k in t) {
    t[k];for (key in e.fabric) {
      var _ = e.fabric[key];!1 !== strpos(key, "_") && "lining_id" != key && ("botones_jacket_id" == key && (_ > 100 || !_) && (_ = 1), "pants_button_code" == key && (_ > 100 || !_) && (_ = 1), t[k].src = str_replace("#" + key + "#", _, t[k].src));
    }switch (t[k].src.indexOf("new_man/pants") > 0 && "without_model" == e.view && (view = "folded"), t[k].src.indexOf("new_man/jacket") > 0 && "without_model" == e.view && (view = "front"), t[k].src = str_replace("#view#", view, t[k].src), t[k].src = str_replace("#size#", r, t[k].src), t[k].src = str_replace("#model#", 1, t[k].src), this.product_type) {case "man_shirt":
        t[k].src = str_replace("#neck_fabric_id#", this.current.extras.neck_fabric.fabric_id, t[k].src), t[k].src = str_replace("#cuffs_fabric_id#", e.extras.cuffs_fabric.fabric_id, t[k].src), t[k].src = str_replace("#patches_fabric_id#", e.extras.patches.fabric_id, t[k].src), i && (t[k].src = str_replace("#hole_code_extra#", o, t[k].src)), a && (t[k].src = str_replace("#thread_code_extra#", n, t[k].src)), void 0 !== this.current.extras.winter_lining && "personalizado" == this.current.extras.winter_lining.contrast && (t[k].src = str_replace("#winter_lining_id#", this.current.extras.winter_lining.color, t[k].src));break;case "man_polo":
        i && (t[k].src = str_replace("#hole_code_extra#", o, t[k].src)), a && (t[k].src = str_replace("#thread_code_extra#", n, t[k].src)), c && (t[k].src = str_replace("#logo_code#", s, t[k].src), t[k].src = str_replace("#logo_color#", l, t[k].src));break;case "man_jacket":case "man_suit":case "man_suit2":case "man_smoking":case "man_levita":case "man_frac":case "man_chaque":
        if (t[k].src = str_replace("#shirt_to_jacket_id#", this.current.fabric.shirt_to_jacket_id, t[k].src), t[k].src = str_replace("#man_jacket#", this.current.fabric.man_smoking, t[k].src), void 0 !== this.current.extras.metal_buttons ? "personalizado" == this.current.extras.metal_buttons.contrast ? t[k].src = str_replace("#botones_jacket_id#", this.current.extras.metal_buttons.type, t[k].src) : ((this.current.fabric._button_code > 100 || void 0 === this.current.fabric._button_code) && (this.current.fabric._button_code = 1), t[k].src = str_replace("#botones_jacket_id#", this.current.fabric._button_code, t[k].src)) : (this.current.fabric._button_code > 100 && (this.current.fabric._button_code = 1), t[k].src = str_replace("#botones_jacket_id#", this.current.fabric._button_code, t[k].src)), void 0 !== this.current.extras.metal_buttons) {
          if (void 0 !== this.current.extras.button_holes_threads && void 0 !== this.current.extras.button_holes_threads["threads-color"] && this.current.extras.button_holes_threads["threads-color"] && "personalizado" != this.current.extras.metal_buttons.contrast) {
            h = this.current.extras.button_holes_threads["threads-color"];t[k].src = str_replace("#hilos_jacket_id#", h, t[k].src);
          }
        } else if (void 0 !== this.current.extras.button_holes_threads && void 0 !== this.current.extras.button_holes_threads["threads-color"]) {
          h = this.current.extras.button_holes_threads["threads-color"];t[k].src = str_replace("#hilos_jacket_id#", h, t[k].src);
        }if (void 0 !== this.current.extras.button_holes_threads) if (void 0 !== this.current.extras.button_holes_threads["holes-color"]) {
          if (this.current.extras.button_holes_threads["holes-color"]) {
            b = this.current.extras.button_holes_threads["holes-color"];t[k].src = str_replace("#ojales_jacket_id#", b, t[k].src);
          }
        } else {
          var u = "dark",
              p = ["white", "beige", "green", "pink", "orange", "yellow", "purple", "light"],
              d = [1083, 1444, 1477, 1479, 1283, 1081, 1082, 1062, 1457],
              f = $('#fabric a[rel="' + this.current.fabric.man_jacket + '"]').attr("tone");jQuery.inArray(f, p) >= 0 && (u = "light"), jQuery.inArray(this.current.fabric.man_jacket, d) >= 0 && (u = "light"), t[k].src = str_replace("#ojales_jacket_id#", u, t[k].src);
        }if ("personalizado" != this.current.extras.lining.contrast && "padded" != this.current.extras.lining.contrast && "unlined" != this.current.extras.lining.contrast || !this.current.extras.lining.lining_id ? "unlined" != this.current.extras.lining.contrast || this.current.extras.lining.lining_id ? this.current.fabric.lining_id && (t[k].src = str_replace("#lining_id#", this.current.fabric.lining_id, t[k].src)) : t[k].src = str_replace("#lining_id#", this.current.fabric.unlined_lining, t[k].src) : t[k].src = str_replace("#lining_id#", this.current.extras.lining.lining_id, t[k].src), t[k].src = str_replace("#lining_id#", 152, t[k].src), this.current.fabric.unlined_lining && (t[k].src = str_replace("#lining_default_id#", this.current.fabric.unlined_lining, t[k].src)), this.current.fabric.lining_id && (t[k].src = str_replace("#lining_default_id#", this.current.fabric.lining_id, t[k].src)), t[k].src = str_replace("#lining_default_id#", 152, t[k].src), void 0 !== this.current.extras.waistcoat_lining && "personalizado" == this.current.extras.waistcoat_lining.contrast ? t[k].src = str_replace("#lining_id_waistcoat#", this.current.extras.waistcoat_lining.lining_id, t[k].src) : t[k].src = str_replace("#lining_id_waistcoat#", this.current.fabric.waistcoat_lining_id, t[k].src), void 0 !== this.current.extras.waistcoat_lining_back && "personalizado" == this.current.extras.waistcoat_lining_back.contrast ? t[k].src = str_replace("#lining_id_back_waistcoat#", this.current.extras.waistcoat_lining_back.lining_id, t[k].src) : t[k].src = str_replace("#lining_id_back_waistcoat#", this.current.fabric.waistcoat_lining_id, t[k].src), void 0 !== this.current.extras.neck_lining && this.current.extras.neck_lining.color && (t[k].src = str_replace("#cuello_id#", this.current.extras.neck_lining.color, t[k].src)), void 0 !== this.current.extras.patches && this.current.extras.patches.patches && (t[k].src = str_replace("#coderas_id#", this.current.extras.patches.patches, t[k].src)), void 0 !== this.current.extras.waistcoat_metal_buttons) {
          if (void 0 !== this.current.extras.waistcoat_button_holes_threads && void 0 !== this.current.extras.waistcoat_button_holes_threads["threads-color"] && this.current.extras.waistcoat_button_holes_threads["threads-color"]) {
            h = this.current.extras.waistcoat_button_holes_threads["threads-color"];t[k].src = str_replace("#waistcoat_hilos_code#", h, t[k].src);
          }
        } else if (void 0 !== this.current.extras.waistcoat_button_holes_threads && void 0 !== this.current.extras.waistcoat_button_holes_threads["threads-color"]) {
          h = this.current.extras.waistcoat_button_holes_threads["threads-color"];t[k].src = str_replace("#waistcoat_hilos_code#", h, t[k].src);
        }if (void 0 !== this.current.extras.waistcoat_metal_buttons) {
          if (void 0 !== this.current.extras.waistcoat_button_holes_threads && void 0 !== this.current.extras.waistcoat_button_holes_threads["holes-color"] && this.current.extras.waistcoat_button_holes_threads["holes-color"]) {
            b = this.current.extras.waistcoat_button_holes_threads["holes-color"];t[k].src = str_replace("#waistcoat_ojales_code#", b, t[k].src);
          }
        } else if (void 0 !== this.current.extras.waistcoat_button_holes_threads && void 0 !== this.current.extras.waistcoat_button_holes_threads["holes-color"]) {
          b = this.current.extras.waistcoat_button_holes_threads["holes-color"];t[k].src = str_replace("#waistcoat_ojales_code#", b, t[k].src);
        }void 0 !== this.current.extras.waistcoat_metal_buttons && "personalizado" == this.current.extras.waistcoat_metal_buttons.contrast ? t[k].src = str_replace("#waistcoat_button_code_id#", this.current.extras.waistcoat_metal_buttons.type, t[k].src) : t[k].src = str_replace("#waistcoat_button_code_id#", this.current.fabric.waistcoat_button_code, t[k].src), void 0 !== this.current.extras.quilted_waistcoat && this.current.extras.quilted_waistcoat.color && (t[k].src = str_replace("#quilted_waistcoat_id#", this.current.extras.quilted_waistcoat.color, t[k].src)), "man_jacket" == this.product_type && void 0 !== this.current.extras.jacket_lapel_satin && this.current.extras.jacket_lapel_satin.color && (t[k].src = str_replace("#satin_jacket_lapel#", this.current.extras.jacket_lapel_satin.color, t[k].src)), "man_smoking" != this.product_type && "man_chaque" != this.product_type && "man_levita" != this.product_type && "man_frac" != this.product_type || (void 0 !== this.current.extras.contrasts && this.current.extras.contrasts.contrasts_buttons ? t[k].src = str_replace("#satin_jacket_buttons#", this.current.extras.contrasts.contrasts_buttons, t[k].src) : t[k].src = str_replace("#satin_jacket_buttons#", this.current.satin_jacket_buttons, t[k].src), void 0 !== this.current.extras.contrasts && this.current.extras.contrasts.contrasts_flap ? t[k].src = str_replace("#satin_jacket_lapel#", this.current.extras.contrasts.contrasts_flap, t[k].src) : t[k].src = str_replace("#satin_jacket_lapel#", this.current.satin_jacket_lapel, t[k].src), void 0 !== this.current.extras.contrasts && this.current.extras.contrasts.contrasts_pockets ? t[k].src = str_replace("#satin_jacket_pockets#", this.current.extras.contrasts.contrasts_pockets, t[k].src) : t[k].src = str_replace("#satin_jacket_pockets#", this.current.satin_jacket_pockets, t[k].src), void 0 !== this.current.extras.contrasts && this.current.extras.contrasts.contrasts_buttons ? t[k].src = str_replace("#satin_pants_buttons#", this.current.extras.contrasts.contrasts_buttons, t[k].src) : t[k].src = str_replace("#satin_pants_buttons#", this.current.satin_pants_buttons, t[k].src), void 0 !== this.current.extras.contrasts && this.current.extras.contrasts.contrasts_pants ? t[k].src = str_replace("#satin_pants_ribbon#", this.current.extras.contrasts.contrasts_pants, t[k].src) : t[k].src = str_replace("#satin_pants_ribbon#", this.current.satin_pants_ribbon, t[k].src));break;case "man_waistcoat":
        if ("personalizado" == this.current.extras.waistcoat_lining.contrast ? t[k].src = str_replace("#lining_id_waistcoat#", this.current.extras.waistcoat_lining.lining_id, t[k].src) : t[k].src = str_replace("#lining_id_waistcoat#", this.current.fabric.waistcoat_lining_id, t[k].src), "personalizado" == this.current.extras.waistcoat_lining_back.contrast ? t[k].src = str_replace("#lining_id_back_waistcoat#", this.current.extras.waistcoat_lining_back.lining_id, t[k].src) : t[k].src = str_replace("#lining_id_back_waistcoat#", this.current.fabric.waistcoat_lining_id, t[k].src), void 0 !== this.current.extras.waistcoat_button_holes_threads) {
          if (void 0 !== this.current.extras.waistcoat_button_holes_threads["threads-color"] && this.current.extras.waistcoat_button_holes_threads["threads-color"]) {
            var h = this.current.extras.waistcoat_button_holes_threads["threads-color"];t[k].src = str_replace("#waistcoat_hilos_code#", h, t[k].src);
          }if (void 0 !== this.current.extras.waistcoat_button_holes_threads["holes-color"] && this.current.extras.waistcoat_button_holes_threads["holes-color"]) {
            var b = this.current.extras.waistcoat_button_holes_threads["holes-color"];t[k].src = str_replace("#waistcoat_ojales_code#", b, t[k].src);
          }
        }void 0 !== this.current.extras.waistcoat_metal_buttons && "personalizado" == this.current.extras.waistcoat_metal_buttons.contrast ? t[k].src = str_replace("#waistcoat_button_code_id#", this.current.extras.waistcoat_metal_buttons.type, t[k].src) : t[k].src = str_replace("#waistcoat_button_code_id#", this.current.fabric._button_code, t[k].src);break;case "man_coat":
        void 0 !== this.current.extras.quilted_waistcoat && this.current.extras.quilted_waistcoat.color && (t[k].src = str_replace("#quilted_waistcoat_id#", this.current.extras.quilted_waistcoat.color, t[k].src)), void 0 !== this.current.extras.contrast_collar && this.current.extras.contrast_collar.color && (t[k].src = str_replace("#contrast_collar_id#", this.current.extras.contrast_collar.color, t[k].src)), "custom" == this.current.extras.coat_lining.contrast || "padded" == this.current.extras.coat_lining.contrast || "unlined" == this.current.extras.coat_lining.contrast ? (t[k].src = str_replace("#lining_id#", this.current.extras.coat_lining.lining_id, t[k].src), t[k].src = str_replace("#lining_default_id#", this.current.fabric.unlined_lining, t[k].src)) : t[k].src = str_replace("#lining_id#", this.current.fabric.lining_id, t[k].src), t[k].src = str_replace("#zipper_color#", this.current.fabric.zipper_color, t[k].src), t[k].src = str_replace("#ribbon_color#", this.current.fabric.ribbon_color, t[k].src), t[k].src = str_replace("#button_code#", this.current.fabric.button_code, t[k].src), t[k].src = str_replace("#id_t4l_suit_rel#", this.current.fabric.id_t4l_suit_rel, t[k].src), t[k].src = str_replace("#tie#", this.current.fabric.tie, t[k].src);}t[k].src = str_replace("#pant_code#", this.current.fabric.pant_code, t[k].src), t[k].src = str_replace("#shoes#", this.current.fabric.shoe_color, t[k].src), t[k].src = str_replace("#tie#", this.current.fabric.tie, t[k].src), load_to_local ? t[k].src = t[k].src.replace(/^\//, "http://lrender.tailor4less.com/") : t[k].src = t[k].src.replace(/^\//, window.cdn_host);
  }return t;
}, Garment.prototype.renderInitials = function () {
  var t = this,
      e = t.product_type.replace("woman_", "");e += "_", "woman_suitpants" == t.product_type || "woman_suitskirt" == t.product_type ? e = "jacket_" : "man_polo" == t.product_type || "man_shirt" == t.product_type || "man_jacket" == t.product_type || "man_suit" == t.product_type || "man_suit2" == t.product_type || "man_smoking" == t.product_type || "man_chaque" == t.product_type || "man_frac" == t.product_type || "man_levita" == t.product_type ? e = "" : "man_waistcoat" == t.product_type ? e = "waistcoat_" : "man_coat" == t.product_type && (e = "coat_"), e += "initials";var r = t.current.extras[e],
      i = r.text,
      a = r.color_custom,
      o = r.pos,
      n = r.type;if (i && a && n && ("front" == t.current.view || "without_model" == t.current.view || "folded" == t.current.view)) {
    24 == n ? n = "Arial" : 21 == n || 19 == n ? n = "Monotype Corsiva" : 23 == n || 74 == n ? n = "Times New Roman" : 22 == n ? n = "Rockwell" : 22 != n && 77 != n || (n = "Rockwell"), 20 == a ? a = "2361ad" : 21 == a ? a = "ffcf10" : 22 == a ? a = "a48239" : 23 == a ? a = "e63b85" : 26 == a ? a = "dd2535" : 27 == a ? a = "ffffff" : 28 == a ? a = "34a547" : 29 == a ? a = "000000" : 24 == a ? a = "b3b3b3" : 35 == a ? a = "ff7912" : 36 == a ? a = "731422" : 37 == a ? a = "5d1970" : 38 == a ? a = "b8f2f2" : 39 == a ? a = "3d2a26" : 40 == a && (a = "4477cf"), 9 == a ? a = "ffcf10" : 11 == a ? a = "2361ad" : 12 == a ? a = "ffffff" : 13 == a ? a = "a48239" : 14 == a ? a = "741422" : 15 == a ? a = "b3b3b3" : 16 == a ? a = "3d2a26" : 17 == a ? a = "000000" : 18 == a ? a = "e63b85" : 19 == a ? a = "34a547" : 25 == a ? a = "eb1d1d" : 31 == a ? a = "ff7912" : 32 == a ? a = "5f1970" : 33 == a ? a = "b8f2f2" : 34 == a && (a = "4477cf");var c = "<div id='initials_3d'></div>";"man_polo" == t.product_type ? t.initials_image ? $("#initials_svg").append(c) : $(".viewport #initials_svg").append(c) : $("#initials_svg").append(c);function s(t, e) {
      for (var r in e) t.setAttribute(r, e[r]);
    }var l = $("#initials_svg").empty().get(0);"man_polo" == t.product_type && (l = t.initials_image ? $("#initials_svg").empty().get(0) : $(".viewport #initials_svg").empty().get(0)), l.setAttribute("width", $(".image_render .layers").width());var _ = document.createElementNS("http://www.w3.org/2000/svg", "text");_.textContent = i;var u = "7",
        p = 1e3;switch (o || (o = "interior"), "man_polo" == t.product_type && t.initials_image && (o = "interior_" + $("#initials .box_position_initial label.checked input").val()), o) {case "high":
        switch (t.current.view) {case "front":
            p = ie_navigator ? 45 : 155, x_size = 253, "man_polo" == t.product_type && (p = 165, x_size = 250), s(_, { x: x_size, y: p, transform: "rotate(3,170,155)" }), u = "7";break;case "without_model":
            s(_, { x: 253, y: p = ie_navigator ? 0 : 30, transform: "rotate(3,170,155)" }), u = "7";break;case "back":
            break;case "side":
            s(_, { x: 263, y: 145, transform: "rotate(5,0,0)", "letter-spacing": "-2px" }), u = "8";break;case "folded":
            s(_, { x: 310, y: 350, transform: "rotate(1,170,155)" }), u = "12";}break;case "medium":
        switch (t.current.view) {case "front":
            p = ie_navigator ? 153 : 253, s(_, { x: 253, y: 253, transform: "rotate(2,170,155)" });break;case "without_model":
            s(_, { x: 253, y: 130, transform: "rotate(2,170,155)" });break;case "back":
            break;case "side":
            s(_, { x: 273, y: 233, transform: "rotate(5,0,0)", "letter-spacing": "-3px" }), u = "8";}break;case "low":
        switch (t.current.view) {case "front":
            p = ie_navigator ? 235 : 335, x_size = 256, "man_polo" == t.product_type && (p = 395, x_size = 282), s(_, { x: x_size, y: p, transform: "rotate(2,170,155)" });break;case "without_model":
            s(_, { x: 400, y: 270, transform: "rotate(2,170,155)" });}break;case "cuff":
        switch (t.current.view) {case "front":
            "man_shirt" == t.product_type ? (p = ie_navigator ? 300 : 40, s(_, { x: 370, y: 415, transform: "rotate(8,180,145)" }), u = "5") : (p = ie_navigator ? 300 : 40, s(_, { x: 355, y: 405, transform: "rotate(7,180,145)" }));break;case "without_model":
            s(_, { x: 340, y: 280, transform: "rotate(7,180,145)" });}break;case "interior":
        switch (t.current.view) {case "front":case "without_model":
            "man_coat" == t.product_type ? s(_, { x: 195, y: 128, transform: "rotate(355,150,70)" }) : s(_, { x: 176, y: 150, transform: "rotate(345,160,80)" });}break;case "interior_high":case "interior_low":case "interior_cuff":
        s(_, { x: 180, y: 120 }), u = "20";}s(_, { "font-family": n, "font-size": u + "px", fill: "#" + a }), l.appendChild(_);
  } else $("#initials_svg").empty(), $(".viewport #initials_svg").empty();
}, Garment.prototype.relationsApply = function (t, e) {
  function r(e, r) {
    if ("initials" != e.field_name && "logos" != e.field_name || "man_polo" != e.block) o = $(e.css_selector, i.container);else var o = $(e.css_selector, i.container).parent();if (!o.length) return !0;switch (e.rel_type) {case "disable":
        if (r) {
          var n = !1;for (var c in i._relations_active) if (c != t) for (var s in i._relations_active[c]) if ("disable" == i._relations_active[c][s].rel_type) {
            var l = i._relations_active[c][s];if (l.block != e.block) continue;if (l.field_name != e.field_name) continue;if (l.field_values && e.field_values) ;else if (l.field_values) ;else if (!e.field_values) {
              n = !0;break;
            }
          }if (n) break;
        }var _ = r ? "show" : "hide";if ("coat_model_combined" == e.field_name && coat_generic_mode) return;if ("fabric" == e.step) !r && $.inArray(e.block, a) < 0 && a.push(e.block);else if ("extra" == e.step) {
          if (e.field_values) for (var u in e.field_values) "show" == _ ? o.removeClass("not_show").trigger("cssClassChanged") : o.addClass("not_show").trigger("cssClassChanged");else o[_](), "show" == _ ? o.removeClass("not_show").trigger("cssClassChanged") : (o.addClass("not_show").trigger("cssClassChanged"), void 0 !== i.current.extras[e.field_name] && void 0 !== i.current.extras[e.field_name].contrast && ("custom" != i.current.extras[e.field_name].contrast && "personalizado" != i.current.extras[e.field_name].contrast || (i.extraSetPrice(e.field_name, 0), $(".box_opt." + e.field_name + " .option_trigger.zero_value").click(), i.renderDraw())));
        } else if (e.field_values) {
          if (o.hasClass("box_opt") || o.hasClass("subbox_opt")) {
            var p = !1;for (var u in e.field_values) if ("checkbox" == e.field_values[u]) $(".checkbox_option", o)[_](), "show" == _ ? $(".checkbox_option", o).removeClass("not_show").trigger("cssClassChanged") : $(".checkbox_option", o).addClass("not_show").trigger("cssClassChanged");else {
              if ("show" == _ && "ulster" == e.field_values[u] && void 0 !== i.current.config.coat_model && "overcoat" == i.current.config.coat_model) continue;$('.option_trigger[rel="' + e.field_values[u] + '"]', o)[_](), "show" == _ ? $('.option_trigger[rel="' + e.field_values[u] + '"]', o).removeClass("not_show").trigger("cssClassChanged") : $('.option_trigger[rel="' + e.field_values[u] + '"]', o).addClass("not_show").trigger("cssClassChanged"), "hide" == _ ? $('.option_trigger[rel="' + e.field_values[u] + '"]', o).addClass("no_active").trigger("cssClassChanged") : $('.option_trigger[rel="' + e.field_values[u] + '"]', o).removeClass("no_active").trigger("cssClassChanged"), $('.option_trigger[rel="' + e.field_values[u] + '"]', o).hasClass("active") && (p = !0);
            }p && $(".option_trigger:not(.no_active)", o).first().click();
          } else for (var u in e.field_values) if ((d = o.find('input[value="' + e.field_values[u] + '"]')).closest(".option")[_](), "show" == _ ? d.closest(".option").removeClass("not_show").trigger("cssClassChanged") : d.closest(".option").addClass("not_show").trigger("cssClassChanged"), "show" == _ ? (d.closest(".option").addClass("visible"), d.closest(".option").removeClass("oculto")) : (d.closest(".option").addClass("oculto"), d.closest(".option").removeClass("visible")), d.is(":active")) {
            f = d.attr("name");i.mobile_enabled ? $("#" + f + "_opt label").not(".oculto").first().children("input").click() : $("div." + f + " label:visible:first").children("input").click();
          }
        } else o[_](), "show" == _ ? o.removeClass("not_show").trigger("cssClassChanged") : o.addClass("not_show").trigger("cssClassChanged"), r && (o.find("input:checked").length || o.find("input:eq(0)").prop("selected", 1).click());break;case "set":
        if (!id_cart_product && !id_shop_order_detail && !id_feed_product || i.actived_coat_seters) {
          if ("extra" == e.step && o.click(), !e.field_values) break;if (o.hasClass("box_opt") || o.hasClass("subbox_opt")) $('.option_trigger[rel="' + e.field_values[0] + '"]', o).click();else {
            var d = o.find('input[value="' + e.field_values[u] + '"]'),
                f = d.attr("name");i.mobile_enabled ? $("#" + f + "_opt label").not(".oculto").first().children("input").click() : $("div." + f + " label:visible:first").children("input").click();
          }
        }}
  }var i = this,
      a = [];if (void 0 !== this._relations_active[t]) for (var o in this._relations_active[t]) r(this._relations_active[t][o], !0);this._relations_active[t] = [];for (var o in e) {
    var n = this.relationParse(e[o]);r(n), this._relations_active[t].push(n);
  }
}, Garment.prototype.relationParse = function (t) {
  var e,
      r,
      i = { rel_type: !1, step: !1, block: !1, field_name: !1, field_values: !1, css_selector: !1 };return e = t.split("#"), i.rel_type = e[0], e = e[1].split(":"), r = "#" + e[0], i.step = e[0], e.length > 1 && (i.block = e[1]), e.length > 2 && ("shirt_neck_options" == e[2] ? r = ".box_opt div.neck_options" : "shirt_neck_no_interfacing" == e[2] ? r = '.box_opt div[name="' + e[2] + '"]' : "satin_flap[contrasts]" == e[2] ? r = ".box_opt.contrasts" : "type_flap" == e[2] ? r = ".box_opt #type_flap" : "extra" == i.step ? r = ".container_options ul.options_list li." + e[2] : (r = ".container_options ul.options_list li." + e[2], $(r, this.container).length || (r = ".box_opt .subbox_opt#" + e[2])), i.field_name = e[2]), e.length > 3 && (r = "buttonthreads_color" == e[3] ? " .box_opt#" + e[2] + " div." + e[3] : "extra" == i.step && "initials" == e[2] ? " .box_opt#" + e[2] + ' .box_position_initial input[value="' + e[3].trim("[]") + '"]' : "extra" == i.step && "logos" == e[2] ? " .box_opt#" + e[2] + ' .box_position_logos input[value="' + e[3].trim("[]") + '"]' : "extra" == i.step ? " .box_opt#" + e[2] + ' .option_trigger[rel="' + e[3] + '"]' : "#" + e[2], i.field_values = e[3].trim("[]").split(",")), i.css_selector = r, i;
};var fabricPreview = new function () {
  this.preview_fabric = !1, this.hidden = !0, this.samples_window = !1, String.prototype.capitalize = function () {
    return this.charAt(0).toUpperCase() + this.slice(1);
  }, this.init = function (t) {
    var e = this;this.preview_fabric || (this.preview_fabric = $(".preview_fabric")), this.active_info_bars = t, this.active_info_bars ? ($(".info", this.preview_fabric).addClass("openable"), this.preview_fabric.on("click", ".samples", function (t) {
      var r = $("a", this).attr("href"),
          i = r;if (-1 == r.indexOf(window.location.hostname) && (i = "https://" + window.location.hostname + r), !e.samples_window || e.samples_window.closed) return e.samples_window = window.open(i, "_blank"), !1;var a = r.match(/\?(.*)$/);if (a) {
        for (var o = {}, n = a[1].split("&"), c = 0; c < n.length; c++) {
          var s = n[c].split("=");o[decodeURIComponent(s[0])] = decodeURIComponent(s[1] || "");
        }e.samples_window.postMessage(o, i), e.samples_window.focus();
      }return !1;
    }), this.preview_fabric.on("click", ".more_info", function (t) {
      return !!$(".info", this.preview_fabric).hasClass("openable") && ($(".info", e.preview_fabric).hasClass("open") ? ($(".info", e.preview_fabric).removeClass("open"), e.hidden = !0) : ($(".info", e.preview_fabric).addClass("open"), e.hidden = !1), !1);
    }), this.preview_fabric.on("click", ".hide_info", function (t) {
      return $(".info", e.preview_fabric).removeClass("open"), e.hidden = !0, !1;
    }), this.preview_fabric.on("click", ".info", function (t) {
      return !!$(".info", this.preview_fabric).hasClass("openable") && ($(".info", e.preview_fabric).hasClass("open") ? ($(".info", e.preview_fabric).removeClass("open"), e.hidden = !0) : ($(".info", e.preview_fabric).addClass("open"), e.hidden = !1), !1);
    })) : ($(".info", this.preview_fabric).removeClass("openable"), e.hidden = !0), $(window).width() > 1440 && ($(".info", e.preview_fabric).addClass("open"), e.hidden = !1);
  }, this.close = function () {
    this.preview_fabric.hide(), this.hidden = !0;
  }, this.show = function (t, e, r, i, a) {
    this.hidden = !0;var o = "",
        n = "";"lining" == e ? (o = "default", n = "big") : ("pants" != (o = (o = (o = r).replace("woman_", "")).replace("man_", "")) && "skirt" != o && "jacket" != o && "suit3" != o && "suit2" != o && "waistcoat" != o && "smoking" != o && "suitpants" != o && "suitskirt" != o && "levita" != o && "chaque" != o && "frac" != o || (o = "suit"), n = "huge");var c = t.id_fabric,
        s = window.cdn_host,
        l = e;"extra" == l && (l = "fabric");var _ = s + "dimg/" + l + "/" + o + "/" + c + "_" + n + ".jpg";$(".image img", this.preview_fabric).attr("src", _), $(".image img", this.preview_fabric).attr("onerror", "this.src='" + _ + "';"), void 0 !== $("a.link_samples").attr("href") && $("a.link_samples", this.preview_fabric).attr("href", $("a.link_samples").attr("href").split("?")[0] + "?fabric_type=suit&ref=" + c), $(".header .new").hide(), $(".fabric_options_description .category_group").removeClass("active"), $(".fabric_options .category_group .more").css("visibility", "visible"), $(".category_group", this.preview_fabric).removeClass("grey"), $(".season, .thread_style, .brightness,.stretchy_text, .material, .tone,.details .weight, .thread_count, .opacity, .waterproof, .samples, .samples, .fabric_options, .super_shiny, .stretchy", this.preview_fabric).hide(), $(".info", this.preview_fabric).removeClass("openable"), $(".tencel", this.preview_fabric).removeClass("active");var u = t.title;if ($(".details .title", this.preview_fabric).html(u), $(".info[class*='fabric_type_']", this.preview_fabric).removeClass(function (t, e) {
      return (e.match(/(^|\s)fabric_type_\S+/g) || []).join(" ");
    }), $(".info", this.preview_fabric).addClass("fabric_type_" + o), "fabric" == e) {
      $(".info", this.preview_fabric).addClass("openable"), void 0 !== t.samples && t.samples > 0 && $(".samples", this.preview_fabric).show(), $(".fabric_options", this.preview_fabric).show(), "1" == t.new && $(".header .new").show();var p = t.composition;"linen" == p && (p = "100linen");for (var d, f = /(\d+)([a-z]+)/g, h = [], b = !1; d = f.exec(p);) h.push(d[1] + "% " + (void 0 === i[d[2]] ? d[2] : i[d[2]]));h.length ? b = h.join(" &amp; ") : void 0 !== i[p] && (b = i[p]), b && $(".header .composition", this.preview_fabric).html(" - " + b).show();var v = i[t.season];v && $(".details .season", this.preview_fabric).html(v.capitalize()).show();var m = t.thread_style;m && $(".details .thread_style", this.preview_fabric).html(" - " + m.capitalize()).show();var g = i[W = t.brightness];"midshining" != W && "shining" != W || $(".details .brightness", this.preview_fabric).html(" - " + g.capitalize()).show(), "midshining" != t.brightness && "shining" != t.brightness || $(".details .super_shiny", this.preview_fabric).show();var w = i[t.subtone];void 0 !== w && "" != w && null != w || (w = i[t.tone]), w && $(".details .tone", this.preview_fabric).html(" - " + w.capitalize()).show();var k = t.fabric_weight;k > 0 && (void 0 === a || "en-uk" != a && "en-us" != a ? k += " gr/m2" : (k = Math.round(.02949 * k * 100) / 100, k += " oz/yd<sup>2</sup>"), $(".details .weight", this.preview_fabric).html(" - " + k).show());var y = t.thread_count;y > 0 && $(".details .thread_count", this.preview_fabric).html(" - Super " + y.capitalize() + "s").show();var x = i["opacity_" + t.opacity],
          C = t.opacity;x && "full" != C && $(".details .opacity", this.preview_fabric).html(" - " + x.capitalize()).show();var S = "";t.price > 0 ? (S = "(+" + (S = format_price(t.price, "small_symbol", window.currency_json)) + ")", $(".category_group.category .price", this.preview_fabric).html(S)) : $(".category_group.category .price_box", this.preview_fabric).html("");var j = t.category_group;$(".fabric_options .category_group").removeClass("active"), $(".fabric_options_description .category_group").removeClass("active"), "premium" == j ? $(".fabric_options .category_group.premium").addClass("active") : "limited" == j && $(".fabric_options .category_group.limited").addClass("active");var T = t.tags;T && (T = T.split(","));var z = !1,
          I = !1,
          A = !1,
          O = !1;for (var P in T) "oeko" == T[P] && (z = !0), "easy" == T[P] && (I = !0), "wrinkle" == T[P] && (A = !0), "waterproof" == T[P] && (O = "waterproof"), "waterresistant" == T[P] && (O = "waterresistant");if (1 == z && $(".fabric_options .category_group.oeko").addClass("active"), 1 == I && $(".fabric_options .category_group.easy").addClass("active"), 1 == A && $(".fabric_options .category_group.wrinkle").addClass("active"), O) {
        var H = i[O];$(".details .waterproof", this.preview_fabric).html(" - " + H.capitalize()).show();
      }if (t.stretchy > 0) {
        var F = i.stretchy;$(".details .stretchy_text", this.preview_fabric).html(" - " + F.capitalize()).show(), $(".details .stretchy", this.preview_fabric).show();
      }b = !1;"100% merino wool" == (b = i[p]) && $(".fabric_options .category_group.wool").addClass("active");"1" == t.shirt_yarn && $(".fabric_options .category_group.2ply").addClass("active");"1" == t.double_faced && $(".fabric_options .category_group.double_faced").addClass("active");"thick" == t.thickness && $(".fabric_options .category_group.thickness").addClass("active");var L = t.bars.excelence,
          E = $(".bar.excelence");$(".subar", E).removeClass("active");for (R = 1; R <= L; R++) $(".subar.bar_" + R, E).addClass("active");var U = t.bars.hot,
          q = $(".bar.warmth");$(".subar", q).removeClass("active");for (R = 1; R <= U; R++) $(".subar.bar_" + R, q).addClass("active");var G = t.bars.weight,
          B = $(".bar.weight");$(".subar", B).removeClass("active");for (R = 1; R <= G; R++) $(".subar.bar_" + R, B).addClass("active");if ($(".bar.weight .subar").html(" "), t.fabric_weight > 0) {
        k = t.fabric_weight;var D = R - 1;void 0 === a || "en-uk" != a && "en-us" != a ? k += " gr/m2" : (k = Math.round(.02949 * k * 100) / 100, k += " oz/yd2"), $(".bar.weight .bar_" + D).html("<span>" + k + "</span>");
      }var M = t.bars.fineza,
          N = $(".bar.fineza");$(".subar", N).removeClass("active");for (var R = 1; R <= M; R++) $(".subar.bar_" + R, N).addClass("active");"tencel" != t.simple_composition && "Tencel" != t.simple_composition || $(".tencel", this.preview_fabric).addClass("active");
    } else if ("lining" == e || "extra" == e) {
      $(".info", this.preview_fabric).removeClass("openable").removeClass("open");var W = t.brightness;(g = i[W]) && $(".details .brightness", this.preview_fabric).html(g.capitalize()).show();var Q = i[t.material];Q && ("woman_trenchcoat" != this.product_type && "man_trenchcoat" != this.product_type && W ? $(".details .material", this.preview_fabric).html(" - " + Q.capitalize()).show() : $(".details .material", this.preview_fabric).html(Q.capitalize()).show()), $(".details .composition").hide(), $(".details .composition").hide();
    }this.preview_fabric.show();
  };
}();Garment.prototype.fabricSelect = function (t, e, r) {
  $(".favourite").removeClass("hide"), this.lastSharedUrl = null, void 0 === r && (r = !0);var i = this;$("#fabric .fabric_list .fabric_box").removeClass("checked"), e.addClass("checked");var a = $("span", e).attr("rel"),
      o = $("span", e).attr("category"),
      n = $("span", e).attr("bc"),
      c = $("span", e).attr("zc"),
      s = $("span", e).attr("rc"),
      l = $("span", e).attr("hc"),
      _ = $("span", e).attr("tc"),
      u = $("span", e).attr("cc"),
      p = $("span", e).attr("pc"),
      d = $("span", e).attr("si"),
      f = $("span", e).attr("li"),
      h = $("span", e).attr("uli"),
      b = $("span", e).attr("lco"),
      v = $("span", e).attr("soc"),
      m = ($("span", e).attr("br"), fabric_options_i18n[$("span", e).attr("bri")], $("span", e).attr("idt")),
      g = $("span", e).attr("idrs"),
      w = $("span", e).attr("simple_composition"),
      k = fabric_options_i18n[$("span", e).attr("sci")],
      y = $("span", e).attr("sco"),
      x = ($("span", e).attr("texture"), $("span", e).attr("category_group")),
      C = fabric_options_i18n[$("span", e).attr("cgi")],
      S = $("span", e).attr("vdet"),
      j = $("span", e).attr("nop"),
      T = $("span", e).attr("df");if (i.multi_fabric_active) {
    var z = $(".action_column .fabric_group." + i.multi_fabric_active);$(".simple_composition .name", z).html(k);I = $(".info .title", e).html();$(".ref span", z).html(I);"basic" == x ? "?" : "premium" == x ? "&" : "limited" == x && "%", "basic" == x ? $(".category_group .name", z).hide() : $(".category_group .name", z).html(C).show();
  } else {
    var I = $(".info .title", e).html();$(".action_column div.ref span").html(I), $(".action_column .simple_composition .name").html(k);"basic" == x ? "?" : "premium" == x ? "&" : "limited" == x && "%", "basic" == x ? $(".action_column .category_group .name").hide() : $(".action_column .category_group .name").html(C).show();
  }var A = $("span", e).attr("ddl");if ("1" == A ? ($(".extra_linings").addClass("disable_dark_linings"), $(".box_opt.lining").addClass("disable_dark_linings"), $("li.neck_lining").addClass("dark_fabric_mode"), void 0 !== i.current.extras.neck_lining && "undefined" != i.current.extras.neck_lining.color && $(".box_opt.neck_lining .option_trigger.zero_value").click()) : i.multi_fabric_active && "man_pants" != i.multi_fabric_active ? ($(".extra_linings").removeClass("disable_dark_linings"), $(".box_opt.lining").removeClass("disable_dark_linings"), $("li.neck_lining").removeClass("dark_fabric_mode")) : i.multi_fabric_active || ($(".extra_linings").removeClass("disable_dark_linings"), $(".box_opt.lining").removeClass("disable_dark_linings"), $("li.neck_lining").removeClass("dark_fabric_mode")), "man_jacket" == i.product_type && ("summer" == $("span", e).attr("season") || "linen" == w || "linen-blends" == w ? ($("#quilted_waistcoat .option_trigger.zero_value").click(), $("#extra .quilted_waistcoat").hide()) : $("#extra .quilted_waistcoat").show()), i.has_extra_lining) {
    var O = $('input[name="' + i.has_extra_lining + '[contrast]"]').val(),
        P = $('input[name="' + i.has_extra_lining + '[lining_id]"]').val();if ("undefined" != P && "1" == A && $(".extra_linings .lining_" + P).parent().hasClass("dark")) {
      i.id_box_opt_fabric = i.has_extra_lining;var e = $('#extras .box_opt[id="' + i.has_extra_lining + '"]');$("." + i.has_extra_lining + ' .option_trigger[rel="' + O + '"]').click(), $(".extra_linings .lining_box").not(".dark").first().click();
    }"linen" == (k = $("span", e).attr("simple_composition")) ? ($('.option_trigger[rel="padded"]').hide(), $("#extra .options_list .patches").hide()) : ($('.option_trigger[rel="padded"]').show(), $("#extra .options_list .patches").show());
  }if ("woman_suitpants" == i.product_type || "woman_suitskirt" == i.product_type || "man_suit" == i.product_type || "man_suit2" == i.product_type || "man_suit3" == i.product_type || "man_smoking" == i.product_type || "man_levita" == i.product_type || "man_chaque" == i.product_type || "man_frac" == i.product_type) {
    if (i.multi_fabric_active) {
      var H = i.multi_fabric_active;$('input[name="fabric[' + H + ']"]', t).val(a), i.current.fabric[H] = a;
    } else $('input[name="fabric[' + i.multi_fabric_options[0] + ']"]', t).val(a), $('input[name="fabric[' + i.multi_fabric_options[1] + ']"]', t).val(a), $('input[name="fabric[' + i.multi_fabric_options[2] + ']"]', t).val(a), i.current.fabric[i.multi_fabric_options[0]] = a, i.current.fabric[i.multi_fabric_options[1]] = a, i.current.fabric[i.multi_fabric_options[2]] = a, i.current.fabric.button_code = n, i.current.fabric._button_code = n, i.current.fabric.waistcoat_button_code = n, i.current.fabric.pants_button_code = n, i.current.fabric.zipper_color = c, i.current.fabric.ribbon_color = s;
  } else $('input[name="fabric[' + i.product_type + ']"]', t).val(a), i.current.fabric[i.product_type] = a, i.current.fabric.button_code = n, i.current.fabric._button_code = n, i.current.fabric.waistcoat_button_code = n, i.current.fabric.pants_button_code = n, i.current.fabric.zipper_color = c, i.current.fabric.ribbon_color = s;for (var F in i.fabric) if (!i.multi_fabric_active || F == i.multi_fabric_active) {
    if ("man_suit2" == i.product_type || "man_suit3" == i.product_type || "man_smoking" == i.product_type || "man_levita" == i.product_type || "man_chaque" == i.product_type || "man_frac" == i.product_type) i.updateFabricPrices(F, o, !1, e);else {
      i.price_detail["fabric_" + F] = 0;for (var L in i.fabric[F].price) void 0 !== o && void 0 !== i.fabric[F].price[L][o] && (i.price_detail["fabric_" + F] = i.fabric[F].price[L][o]);
    }E = $("span", e).attr("dsc");if ("man_suit3" == i.real_product_type) E = $("span", e).attr("dsc_suit3");if ("man_ceremonial3" == i.real_product_type) var E = $("span", e).attr("dsc_ceremonial3");E && !i.multi_fabric_active ? i.price_detail.fabric_discount = E : i.price_detail.fabric_discount = 0;
  }if ("man_shirt" == i.product_type || "man_polo" == i.product_type ? (i.current.fabric.hole_code_fabric = l, i.current.fabric.hole_code_fabric || (i.current.fabric.hole_code_fabric = 107), i.current.fabric.thread_code_fabric = _, i.current.fabric.thread_code_fabric || (i.current.fabric.thread_code_fabric = 107), i.current.fabric.cuff_code = u, i.current.fabric.cuff_code || (i.current.fabric.cuff_code = 1), i.current.fabric.pant_code = p, i.current.fabric.pant_code || (i.current.fabric.pant_code = 1), i.current.fabric.shoe_color = v, i.current.fabric.shoe_color || (i.current.fabric.shoe_color = 1), i.shirt_style_click || (i.current.neck_open = j, i.current.neck_open || (i.current.neck_open = 0), i.current.view_detail = S, i.current.view_detail || (i.current.view_detail = "inside"))) : "man_jacket" == i.product_type || "man_suit" == i.product_type || "man_suit2" == i.product_type || "man_smoking" == i.product_type || "man_levita" == i.product_type || "man_chaque" == i.product_type || "man_frac" == i.product_type ? i.multi_fabric_active ? ("man_jacket" == i.multi_fabric_active && (i.current.fabric.button_code = n, i.current.fabric._button_code = n, i.current.fabric.shirt_to_jacket_id = d, i.current.fabric.shirt_to_jacket_id || (i.current.fabric.shirt_to_jacket_id = 699), i.current.fabric.pant_code = p, i.current.fabric.pant_code || (i.current.fabric.pant_code = 1), i.current.fabric.lining_id = f, i.current.fabric.lining_id || (i.current.fabric.lining_id = 59), i.current.fabric.unlined_lining = h, i.current.fabric.unlined_lining || (i.current.fabric.unlined_lining = 59), i.current.fabric.label_color = b, i.current.fabric.label_color || (i.current.fabric.label_color = 0), i.current.fabric.shoe_color = v, i.current.fabric.shoe_color || (i.current.fabric.shoe_color = 1), i.current.fabric.tie = m, i.current.fabric.tie || (i.current.fabric.tie = 1), "man_smoking" != i.product_type && "man_levita" != i.product_type && "man_chaque" != i.product_type && "man_frac" != i.product_type || (i.current.satin_jacket_buttons = y, i.current.satin_jacket_buttons && "0" != y || (i.current.satin_jacket_buttons = 1), i.current.satin_jacket_lapel = y, i.current.satin_jacket_lapel && "0" != y || (i.current.satin_jacket_lapel = 1), i.current.satin_jacket_pockets = y, i.current.satin_jacket_pockets && "0" != y || (i.current.satin_jacket_pockets = 1), i.current.satin_pants_buttons = y, i.current.satin_pants_buttons && "0" != y || (i.current.satin_pants_buttons = 1), i.current.satin_pants_ribbon = y, i.current.satin_pants_ribbon && "0" != y || (i.current.satin_pants_ribbon = 1))), "man_waistcoat" == i.multi_fabric_active && (i.current.fabric.waistcoat_button_code = n, i.current.fabric.waistcoat_lining_id = f, i.current.fabric.waistcoat_lining_id || (i.current.fabric.waistcoat_lining_id = 59)), "man_pants" == i.multi_fabric_active && (i.current.fabric.pants_button_code = n)) : (i.current.fabric.button_code = n, i.current.fabric._button_code = n, i.current.fabric.waistcoat_button_code = n, i.current.fabric.pants_button_code = n, i.current.fabric.shirt_to_jacket_id = d, i.current.fabric.shirt_to_jacket_id || (i.current.fabric.shirt_to_jacket_id = 699), i.current.fabric.pant_code = p, i.current.fabric.pant_code || (i.current.fabric.pant_code = 1), i.current.fabric.lining_id = f, i.current.fabric.lining_id || (i.current.fabric.lining_id = 59), i.current.fabric.waistcoat_lining_id = f, i.current.fabric.waistcoat_lining_id || (i.current.fabric.waistcoat_lining_id = 59), i.current.fabric.unlined_lining = h, i.current.fabric.unlined_lining || (i.current.fabric.unlined_lining = 59), i.current.fabric.label_color = b, i.current.fabric.label_color || (i.current.fabric.label_color = 0), i.current.fabric.shoe_color = v, i.current.fabric.shoe_color || (i.current.fabric.shoe_color = 1), i.current.fabric.tie = m, i.current.fabric.tie || (i.current.fabric.tie = 1), "man_smoking" != i.product_type && "man_levita" != i.product_type && "man_chaque" != i.product_type && "man_frac" != i.product_type || (i.current.satin_jacket_buttons = y, i.current.satin_jacket_buttons && "0" != y || (i.current.satin_jacket_buttons = 1), i.current.satin_jacket_lapel = y, i.current.satin_jacket_lapel && "0" != y || (i.current.satin_jacket_lapel = 1), i.current.satin_jacket_pockets = y, i.current.satin_jacket_pockets && "0" != y || (i.current.satin_jacket_pockets = 1), i.current.satin_pants_buttons = y, i.current.satin_pants_buttons && "0" != y || (i.current.satin_pants_buttons = 1), i.current.satin_pants_ribbon = y, i.current.satin_pants_ribbon && "0" != y || (i.current.satin_pants_ribbon = 1))) : "man_pants" == i.product_type ? (i.current.fabric.shirt_to_jacket_id = d, i.current.fabric.shirt_to_jacket_id || (i.current.fabric.shirt_to_jacket_id = 699), i.current.fabric.shoe_color = v, i.current.fabric.shoe_color || (i.current.fabric.shoe_color = 1), i.current.fabric.pants_button_code = n) : "man_waistcoat" == i.product_type ? (i.current.fabric.shirt_to_jacket_id = d, i.current.fabric.shirt_to_jacket_id || (i.current.fabric.shirt_to_jacket_id = 699), i.current.fabric.pant_code = p, i.current.fabric.pant_code || (i.current.fabric.pant_code = 1), i.current.fabric.waistcoat_lining_id = f, i.current.fabric.waistcoat_lining_id || (i.current.fabric.waistcoat_lining_id = 59), i.current.fabric.unlined_lining = h, i.current.fabric.unlined_lining || (i.current.fabric.unlined_lining = 59), i.current.fabric.label_color = b, i.current.fabric.label_color || (i.current.fabric.label_color = 0), i.current.fabric.shoe_color = v, i.current.fabric.shoe_color || (i.current.fabric.shoe_color = 1), i.current.fabric.tie = m, i.current.fabric.tie || (i.current.fabric.tie = 1), i.current.fabric._button_code = n, i.current.fabric._button_code || (i.current.fabric._button_code = 2)) : "man_coat" == i.product_type && (i.current.fabric.lining_id = f, i.current.fabric.lining_id || (i.current.fabric.lining_id = 57), i.current.fabric.unlined_lining = f, i.current.fabric.unlined_lining || (i.current.fabric.unlined_lining = 57), i.current.fabric.tie = m, i.current.fabric.tie || (i.current.fabric.tie = 0), i.current.fabric.id_t4l_suit_rel = g, i.current.fabric.id_t4l_suit_rel && 0 != i.current.fabric.id_t4l_suit_rel || (i.current.fabric.id_t4l_suit_rel = 141), i.current.fabric.double_faced = T), "default" == i.has_extra_unlined) {
    var U = i.current.fabric.unlined_lining;"man_coat" == i.product_type ? ($('input[name="coat_lining[lining_id]"]').val(U).change(), i.current.extras.coat_lining.lining_id = U) : ($('input[name="lining[lining_id]"]').val(U).change(), i.current.extras.lining.lining_id = U);
  }i.updatePrice(), r && i.renderDraw(), i.fabric_preview_open && $("span.thumb_preview", e).click();
}, Garment.prototype.initConfigure = function () {
  var t = this,
      e = t.container.find("#config"),
      r = e.find(".container_options"),
      i = e.find(".box_opt"),
      a = e.find(".checkbox_option"),
      o = e.find(".neck_options.neck"),
      n = e.find(".neck_options.cuff"),
      c = !1;r.on("click", "span", function () {
    if ($(this).hasClass("submenu")) {
      var i = $(this).attr("rel");return $(this).hasClass("min") ? ($(this).removeClass("min"), $('li[product="' + i + '"]', e).slideToggle().removeClass("invisible")) : ($(this).addClass("min"), $('li[product="' + i + '"]', e).slideToggle().addClass("invisible")), setTimeout(function () {
        $(".container_options", e).perfectScrollbar("update");
      }, 300), !1;
    }r.addClass("min"), c && t.hideOptionBox(c, e), c = this.getAttribute("href").replace(/^[^#]*#/, ""), $("#" + c).addClass("active"), $("span", r).removeClass("active"), $(this).addClass("active"), $(".preview_fabric").hide();var a = t.views.config[c];if (a && (t.inArray(t.current.view, a) || (t.changeView(a[0]), "folded" == a[0] && "man_shirt" == t.product_type && t.show_force_view_message(!0))), "woman_suitpants" == t.product_type || "woman_suitskirt" == t.product_type || "man_suit" == t.product_type || "man_suit2" == t.product_type || "man_chaque" == t.product_type || "man_levita" == t.product_type || "man_frac" == t.product_type) {
      var o = $(this).attr("product");t.changeActiveBlock(o, !0);
    }return !1;
  }), $(".submenu:first").click(), r.on("click", "a.shirt_cut", function () {
    t.change_style_shirt("casual");
  }), i.on("click", "a.back", function () {
    return r.removeClass("min"), c && $("#" + c).removeClass("active"), r.find("li a.active").removeClass("active"), !1;
  }), i.on("click", ".option_trigger", function () {
    if ("man_polo" == t.product_type && $(this).parents(".box_opt").attr("data-price") > 0) return !1;if (t.last_change = $(this).parent().attr("id"), $(this).parent().find(".option_trigger").removeClass("active"), $(this).addClass("active"), $(this).parent().hasClass("combined_block")) {
      a = $(this).parent().find("input");input_name = a.attr("name"), input_value = a.val();var e = this.getAttribute("rel"),
          i = t.current.config[input_name];if (a.val(e).change(), input_value = a.val(), (c = $("#" + input_name).attr("views")) && (c = c.split(","), t.inArray(t.current.view, c) || t.changeView(c[0])), void 0 !== t.product_config[input_name] && t.relationsApply(input_name, t.product_config[input_name][input_value]), $(this).parent().attr("icon-change") && t.change_icon_trigger($(this), r), "jacket_style" == input_name && "crossed" == e && $('#jacket_buttons .option_trigger[rel="4"]').click(), "trenchcoat_style" == input_name && "crossed" == e && $('#trenchcoat_fastening .option_trigger[rel="button_standard"]').click(), e != i) {
        n = $(this).attr("price");price = 0, n && (price = parseFloat(n)), t.price_detail[input_name] = price, t.updatePrice();
      }
    } else {
      var a = $(this).parent().find("input");input_name = a.attr("name"), input_value = a.val();var e = this.getAttribute("rel"),
          i = t.current.config[input_name];if ("polo_collar" == input_name || "polo_placket" == input_name || "polo_cuffs" == input_name) {
        var o = $(this).attr("rel");e != i && ($(".colors_section input", "#" + input_name).val("").change(), $(this).parents(".box_opt").find(".common_color").removeClass("checked")), "default" != o ? (t.current.config[input_name + "_color"] = 0, $(".colors_section .color_block", "#" + i).removeClass("active"), $(".colors_section .color_block." + o, "#" + input_name).addClass("active")) : ($(".colors_section input", "#" + input_name).val(""), t.current.config[input_name + "_color"] = 0, $(".colors_section .color_block", "#" + input_name).removeClass("active"));
      }if (a.val(e).change(), input_value = a.val(), "man_suit2" == t.product_type && "waistcoat" == input_name && "1" == input_value) price = parseFloat(a.attr("price")), t.convetToSuit3(price, !0);else if ("man_suit2" == t.product_type && "waistcoat" == input_name && "0" == input_value) t.convetToSuit2();else if ("man_levita" != t.product_type && "man_frac" != t.product_type && "man_chaque" != t.product_type || "waistcoat" != input_name || "0" != input_value) {
        if ("man_levita" != t.product_type && "man_frac" != t.product_type && "man_chaque" != t.product_type || "waistcoat" != input_name || "1" != input_value) {
          if ("jacket_style_combined" == input_name) ;else if (e != i) {
            var n = $(this).attr("price");price = 0, n && (price = parseFloat(n)), t.price_detail[input_name] = price, t.updatePrice();
          }
        } else price = parseFloat(a.attr("price")), t.convetToCeremonial3(price, !0);
      } else t.convetToCeremonial2();void 0 !== t.product_config[input_name] && t.relationsApply(input_name, t.product_config[input_name][input_value]), $(this).parent().attr("icon-fixed") || t.change_icon_trigger($(this), r);
    }if ("waistcoat" == input_name && t.changeActiveBlock("man_waistcoat", !0), t.current_extra_option) {
      var c = t.views.config[t.current_extra_option];c && (t.inArray(t.current.view, c) || (t.changeView(c[0]), "folded" == c[0] && t.show_force_view_message(!0)));
    }
  }), "man_polo" == t.product_type && $(".list_common_color", "#config").on("click", ".common_color", function () {
    var e = $(this).parents(".box_opt").attr("id");if ("logos" == e || "button_holes_threads" == e || "initials " == e) return !1;$(this).parent().find(".common_color.checked").removeClass("checked");var r = $(this).attr("rel");$(this).parents(".colors_section").find("input").val(r).change(), $(this).addClass("checked");var i = $(this).parents(".box_opt").find(".option_trigger.active").attr("rel"),
        a = $('.option_trigger[rel="' + i + '"]', "#" + e).attr("price_color");return price = 0, a && (price = parseFloat(a)), t.price_detail[e] = price, t.updatePrice(), !1;
  }), n.on("click", "label", function () {
    var t = $(this).attr("rel");return $(this).parent().find("label").removeClass("checked"), $(this).addClass("checked"), $('.neck_options.neck div[name="shirt_neck_no_interfacing"] .box_options input[value="' + t + '"]').parent().click(), !1;
  }), a.on("click", "label", function () {
    $(this).attr("rel");$(this).parent().find("label").removeClass("checked"), $(this).addClass("checked");var t = $(this).attr("rel"),
        e = $(this).attr("option_filter");if (1 == t) {
      $("#" + e).addClass("slanted");r = $("#" + e + " .option_trigger.active").attr("equival");$("#" + e + ' .option_trigger[rel="' + r + '"]').click();
    } else {
      $("#" + e).removeClass("slanted");var r = $("#" + e + " .option_trigger.active").attr("equival");$("#" + e + ' .option_trigger[rel="' + r + '"]').click();
    }return !1;
  }), o.on("click", "label", function () {
    var e = $(this).attr("rel"),
        r = $(this).parent().parent().attr("name"),
        i = $("input", this).val();return "shirt_neck_buttons" == r ? ($(this).parent().find("label").removeClass("checked"), $(this).parent().find("input").prop("checked", !1), $(this).addClass("checked"), $("input", this).prop("checked", !0)) : ($(this).parent().find("label").removeClass("checked"), $(this).parent().find("input").prop("checked", !1), $('.neck_options.cuff div[name="shirt_neck_no_interfacing"] label').removeClass("checked"), $('.neck_options.cuff label[rel="' + e + '"]').addClass("checked"), $(this).addClass("checked"), $("input", this).prop("checked", !0), void 0 !== t.product_config[r] && t.relationsApply(r, t.product_config[r][i])), t.current.config[r] = i, "shirt_neck_buttons" == r && t.renderDraw(), !1;
  }), o.on("click", "a.tooltip", function () {
    $("div.tooltip", o).toggleClass("active");
  }), $("a.tooltip", o).bind("touchstart", function (t) {
    $("div.tooltip", o).addClass("active");
  }), $("a.tooltip", o).bind("touchend", function (t) {
    $("div.tooltip", o).removeClass("active");
  }), $("input", e).change(function (e) {
    var r = $(this).attr("name"),
        i = $(this).val();if ("jacket_style_combined" == r) {
      var a = (n = i.split("_"))[0],
          o = 2;o = "mao" == a ? 5 : n[1], t.current.config.jacket_style = a, t.current.config.jacket_buttons = o;
    } else if ("waistcoat_style_combined" == this.name) {
      var n = i.split("_"),
          c = n[0],
          s = n[1];t.current.config.waistcoat_style = c, t.current.config.waistcoat_buttons = s;
    } else t.current.config[r] = i;t.renderDraw();
  });
}, Garment.prototype.initFabric = function () {
  function t() {
    var t = $(".fabric_options_fix").height() + $(".multifabric_selectors").height();$(".fabric_list").css("margin-bottom", t);
  }function e(t, e) {
    $("#fabric .fabric_options_fix .filter_title").html(t), e ? $("#fabric .filter_section").addClass("pointer") : $("#fabric .filter_section ").removeClass("pointer");
  }function r() {
    $("#personalize_fabrics_info_popup").addClass("active");
  }function i() {
    $("#personalize_fabrics_split").addClass("active");
  }function a(t) {
    d.removeClass(function (t, e) {
      return (e.match(/(^|\s)sub_list_\S+/g) || []).join(" ");
    });var e = t;"man_jacket" == e && (e = n.product_type), d.addClass("sub_list_" + e);
  }function o(t) {
    if (n.multi_fabric_active = t, 0 == n.multi_fabric_active) {
      $("#fabric .fabric_list").removeClass("multi_fabric").removeClass("three"), $(".multifabric_selectors").hide(), n.stepSetURL("fabric");var e = $('input[name="fabric[' + n.multi_fabric_options[0] + ']"]', n.container).val();$('input[name="fabric[' + n.multi_fabric_options[1] + ']"]').val(e), $('input[name="fabric[' + n.multi_fabric_options[2] + ']"]').val(e), n.current.fabric[n.multi_fabric_options[0]] = e, n.current.fabric[n.multi_fabric_options[1]] = e, n.current.fabric[n.multi_fabric_options[2]] = e, $(".fabric_box .price.general").addClass("visible"), $(".fabric_box .price.split").removeClass("visible"), $(".action_column .fabric_group").hide(), $(".action_column .fabric_group.general").show();var r = $('.fabric_box div[rel="' + e + '"]', d).parent();n.fabricSelect($("#fabric"), r);
    } else {
      $("#fabric .fabric_list").addClass("multi_fabric"), "man_suit3" == n.real_product_type && $("#fabric .fabric_list").addClass("three"), "man_ceremonial3" == n.real_product_type && $("#fabric .fabric_list").addClass("three"), $(".multifabric_selectors").show(), n.multi_fabric_active = n.multi_fabric_options[0], a(n.multi_fabric_active);var i = n.current.fabric.man_jacket,
          o = $('#fabric .image[rel="' + i + '"] a').attr("category");n.updateFabricPrices("man_jacket", o, !0);var i = n.current.fabric.man_pants,
          o = $('#fabric .image[rel="' + i + '"] a').attr("category");if (n.updateFabricPrices("man_pants", o, !0), "man_suit3" == n.real_product_type) {
        var i = n.current.fabric.man_waistcoat,
            o = $('#fabric .image[rel="' + i + '"] a').attr("category");n.updateFabricPrices("man_waistcoat", o, !0);
      } else if ("man_ceremonial3" == n.real_product_type) {
        var i = n.current.fabric.man_waistcoat,
            o = $('#fabric .image[rel="' + i + '"] a').attr("category");n.updateFabricPrices("man_waistcoat", o, !0);
      }n.price_detail.fabric_man_suit2 = 0, n.price_detail.fabric_man_suit3 = 0, $(".action_column .fabric_group.general").hide();var c = ["man_jacket", "man_pants"];"man_suit3" == n.real_product_type && c.push("man_waistcoat"), "man_ceremonial3" == n.real_product_type && c.push("man_waistcoat");for (var s = 0; s < c.length; s++) $(".action_column .fabric_group." + c[s]).show();
    }b.removeClass("active"), n.fabricPriceActive();
  }var n = this,
      c = $("#fabric"),
      s = (c.find(".filter_section"), $(".filters.fabric_step")),
      l = s.find(".menu_filter"),
      _ = (l.find(".filter li"), c.find(".active_filters")),
      u = (_.find("ul"), c.find(".fabric_options")),
      p = c.find(".fabric_options_fix"),
      d = c.find(".fabric_list"),
      f = d.find(".fabric_box"),
      h = $("#personalize_fabrics_info_popup"),
      b = $("#personalize_fabrics_split"),
      v = [],
      m = !1;"undefined" != typeof winter_blazer_landing && "yes" == winter_blazer_landing || $('li [rel="winter_tweed"]').hide(), $(".fabric_container_lazy").scroll(function () {
    $(".arrow_scroll").addClass("hide"), $(".ps-scrollbar-y-rail").removeClass("force_visible"), m = !0;
  }), $(".arrow_scroll span").addClass("shake"), setTimeout(function () {
    m || $(".ps-scrollbar-y-rail").addClass("force_visible");
  }, 1e4), $(".arrow_scroll").click(function () {
    $(".fabric_list").animate({ scrollTop: 300 }, "slow");
  }), jQuery.fn.hasScrollBar = function () {
    return this.get(0).scrollHeight > this.height();
  }, setTimeout(function () {
    $(".fabric_container_lazy").hasScrollBar() || $(".arrow_scroll").addClass("hide");
  }, 500), f.each(function () {
    var t = $(".info .title", this).width(),
        e = $(".info .price", this).width(),
        r = { width: 140 - e - 5, "white-space": "nowrap", overflow: "hidden", "text-overflow": "ellipsis" };t + e > 140 && $(".info .title", this).css(r);
  }, function () {
    $(".info .title", this).css("width", "auto");
  }), $("#fabric .fabric_options_fix").on("click", ".pointer", function () {
    s.addClass("active");
  }), h.on("click", ".link", function () {
    var t = $(this),
        e = (t.attr("filter_cat"), t.attr("filter"));t.filter = e, n.applyFilterFabric(t, !1, !0), h.removeClass("active");
  }), "man_suit" != n.product_type && "man_suit2" != n.product_type || $(".fabric_box", c).each(function () {
    var t = $(this),
        e = $("a.fabric", t);e.attr("simple_composition"), e.attr("fw");
  }), d.on("click", ".fabric_box:not(.out_of_stock)", function () {
    return void 0 !== n.out_of_stock_control && void 0 !== n.out_of_stock_control.fabric && "ok" !== n.out_of_stock_control.fabric && delete n.out_of_stock_control.fabric, $(".fabric_box.checked", d).removeClass("checked"), n.fabricSelect(c, $(this)), !1;
  }), l.find(".item_menu_filter").each(function () {
    v.push($(this).attr("rel"));
  });var g = $(".left_filters");g.on("click", "a", function () {
    switch ($("li", g).removeClass("active"), $(this).parent().addClass("active"), s.removeClass("active"), h.removeClass("active"), b.removeClass("active"), $(this).attr("rel")) {case "all":
        n.push_dataLayer("config_" + n.product_type, "step2:filter_type_all"), n.removeAllFilters(c, f, u, p, l), d.css("margin-top", ""), tablet_device || $(".fabric_list").perfectScrollbar("update"), e($(this).parent().attr("message"));break;case "new":
        n.pre_filter_active = !0, n.push_dataLayer("config_" + n.product_type, "step2:filter_type_new"), n.removeAllFilters(c, f, u, p, l), d.css("margin-top", ""), (t = []).filter = "new", n.applyFilterFabric(t, !1, !1), tablet_device || $(".fabric_list").perfectScrollbar("update"), e($(this).parent().attr("message"));break;case "best_sell":
        n.pre_filter_active = !0, n.push_dataLayer("config_" + n.product_type, "step2:filter_type_best_sell"), n.removeAllFilters(c, f, u, p, l), d.css("margin-top", ""), (t = []).filter = "best_seller", n.applyFilterFabric(t, !1, !1), tablet_device || $(".fabric_list").perfectScrollbar("update"), e($(this).parent().attr("message"));break;case "premium":
        n.pre_filter_active = !0, n.push_dataLayer("config_" + n.product_type, "step2:filter_type_premium"), n.removeAllFilters(c, f, u, p, l), d.css("margin-top", ""), (t = []).filter = "premium", n.applyFilterFabric(t, !1, !1), tablet_device || $(".fabric_list").perfectScrollbar("update"), e($(this).parent().attr("message"));break;case "promo":
        n.pre_filter_active = !0, n.push_dataLayer("config_" + n.product_type, "step2:filter_type_promo"), n.removeAllFilters(c, f, u, p, l), d.css("margin-top", ""), (t = []).filter = "promo", n.applyFilterFabric(t, !1, !1), tablet_device || $(".fabric_list").perfectScrollbar("update"), e($(this).parent().attr("message"));break;case "summer":
        n.pre_filter_active = !0, n.push_dataLayer("config_" + n.product_type, "step2:filter_type_summer"), n.removeAllFilters(c, f, u, p, l), d.css("margin-top", ""), (t = []).filter = "summer", n.applyFilterFabric(t, !1, !1), tablet_device || $(".fabric_list").perfectScrollbar("update"), e($(this).parent().attr("message"));break;case "winter":
        n.pre_filter_active = !0, n.push_dataLayer("config_" + n.product_type, "step2:filter_type_winter"), n.removeAllFilters(c, f, u, p, l), d.css("margin-top", "");var t = [];t.filter = "winter", n.applyFilterFabric(t, !1, !1), tablet_device || $(".fabric_list").perfectScrollbar("update"), e($(this).parent().attr("message"));break;case "filter":
        n.pre_filter_active && (n.removeAllFilters(c, f, u, p, l), n.pre_filter_active = !1), s.addClass("active"), n.closeThumbFabric(), n.isFF() ? setTimeout(function () {
          $(".background_fixed", s).show();
        }, 600) : $(".background_fixed", s).show(), e($(this).parent().attr("message"), "pointer");break;case "multi":
        s.removeClass("active"), i();break;case "info":
        s.removeClass("active"), r();}return !1;
  }), b.on("click", "a.back", function () {
    b.removeClass("active");
  }), b.on("click", "a.back", function () {
    b.removeClass("active");
  }), b.on("click", ".option_trigger", function () {
    $(".option_trigger", b).removeClass("active"), $(this).addClass("active");var e = $(this).attr("rel");o(e = 0 != e && "man_jacket"), t();
  }), $(".multifabric_selectors").on("click", "label", function () {
    $(".multifabric_selectors label").removeClass("checked"), $(this).addClass("checked");var t = $(this).attr("rel");n.multi_fabric_active = t, a(t), n.bLazy_fabric && n.bLazy_fabric.revalidate(), n.fabricPriceActive(), "man_pants" != t && n.changeActiveBlock(t, !1);
  }), s.on("click", "a.back", function () {
    return c.show(), s.removeClass("active"), !1;
  }), h.on("click", "a.back", function () {
    return c.show(), h.removeClass("active"), !1;
  }), s.on("click", ".item_menu", function () {
    $(this).parent().toggleClass("active"), $(this).toggleClass("active");$(this).next().slideToggle().toggleClass("active");var t = $(".filters .menu_filter .content").scrollTop() + $(this).offset().top;$(".filters .menu_filter .content").animate({ scrollTop: t }, 1e3), tablet_device || $(".filters .menu_filter .content").perfectScrollbar("update");
  }).find("ul.sub_menu_filter").hide(), l.on("click", ".filter li", function () {
    var t = $(this).parents(".sub_menu_filter");$(this).hasClass("all") ? t.find(".filter li").removeClass("active") : t.find(".filter li.all").removeClass("active"), $(this).toggleClass("active"), n.check_auto_all_select(t);
  }), _.on("click", "li", function () {
    $(this).remove();var e = $(this).attr("rel");$(this).attr("rel_type");l.find("li[rel=" + e + "]").removeClass("active");var r = [];return _.find("li").each(function () {
      var t = $(this).attr("rel"),
          e = $(this).attr("rel_type");void 0 === r[e] && (r[e] = []), r[e].push(t);
    }), 0 === $(".active_filters li").length && ($(".filter_title").hide(), $(".filter_title.all_fabrics").show()), s.find("ul.sub_menu_filter").each(function () {
      n.check_auto_all_select($(this));
    }), t(), n.update_fabric_list(f, v, r, c), tablet_device || $(".fabric_list").perfectScrollbar("update"), !1;
  });var w = !1,
      k = [];s.find(".apply").on("click", "a", function () {
    return n.push_dataLayer("config_" + n.product_type, "step2:filter_applied"), k = [], $("li", _).remove(), l.find(".item_menu_filter").each(function (t) {
      var e = $(this),
          r = e.attr("rel");k[r] = [], e.find(".filter li.active").not(".all").each(function () {
        w = !0;var t = $(this).attr("rel"),
            e = $(this).find("a").html();k[r].push(t), _.append("<li rel_type=" + r + " rel=" + t + "><a href='javascript:;'><div class='cruz'>k</div><div class='title'>" + e + "</div></a></li>");
      }), 0 == k[r].length && delete k[r];
    }), t(), w && (_.show(), $(".filter_title").hide(), $(".filter_title.add_filters").show(), n.update_fabric_list(f, v, k, c)), c.show(), s.removeClass("active"), tablet_device || $(".fabric_list").perfectScrollbar("update"), !1;
  }), $(".check_multiple_fabric", n.container).click(function () {
    n.multi_fabric ? activeMultiFabric("desactive") : activeMultiFabric("active");
  }), $(".multiple_fabric_options").on("click", ".option", function () {
    $(".multiple_fabric_options .option").removeClass("active");var t = $(this).attr("id");n.multi_fabric = t, $(this).addClass("active");
  }), $(".fabric_box").each(function () {
    $(".composition span.trad", this).html(fabric_options_i18n[$(".composition span.trad", this).html()]).parent().addClass("visible");
  });
}, Garment.prototype.keychain_isset = function (t, e) {
  if (void 0 === t) return !1;for (var r = t, i = 0; i < e.length; i++) {
    if (void 0 === r[e[i]]) return !1;r = r[e[i]];
  }return !0;
}, Garment.prototype.initExtras = function () {
  var t = this,
      e = t.container,
      r = e.find("#extra");if ("man_polo" == t.product_type) r = e.find("#config");var i = r.find(".container_options"),
      a = r.find(".box_opts"),
      o = a.find(".box_opt"),
      n = (a.find('[data-extra-type*="standart"]'), a.find('[data-extra-type*="fabric"]'), a.find('[data-extra-type*="threads"]'), a.find(".initials"), r.find(".extra_fabrics")),
      c = n.find(".fabric_list"),
      s = r.find(".extra_linings"),
      l = s.find(".lining_list"),
      _ = $("#extra"),
      u = _.find(".filter_section"),
      p = $(".filters.extra_step"),
      d = p.find(".menu_filter"),
      f = (d.find(".filter li"), _.find(".active_filters")),
      h = f.find("ul"),
      b = _.find(".fabric_options"),
      v = _.find(".fabric_options_fix"),
      m = new Blazy({ container: ".box_opt.logos" }),
      g = (c = _.find(".fabric_list")).find(".fabric_box");if ("man_trenchcoat" == t.product_type || "man_coat" == t.product_type || "man_levita" == t.product_type || "man_frac" == t.product_type || "man_chaque" == t.product_type || "man_suit" == t.product_type || "man_suit2" == t.product_type || "man_jacket" == t.product_type || "man_waistcoat" == t.product_type) g = (l = _.find(".lining_list")).find(".lining_box");var w = [];i.on("click", "span", function () {
    if ($(this).hasClass("submenu")) {
      var e = $(this).attr("rel");return $(this).hasClass("min") ? ($(this).removeClass("min"), $('li[product="' + e + '"]', r).slideToggle().removeClass("invisible")) : ($(this).addClass("min"), $('li[product="' + e + '"]', r).slideToggle().addClass("invisible")), setTimeout(function () {
        $(".container_options", r).perfectScrollbar("update");
      }, 300), !1;
    }t.closeThumbFabric(), t.closeSeersuckerWarning(), t.closeInitialsImage(), i.addClass("min"), $(this).addClass("active"), t.current_extra_option && t.hideOptionBox(t.current_extra_option, _), t.extra_fabrics_active && n.removeClass("active"), t.extra_linings_active && s.removeClass("active"), p.removeClass("active"), t.removeAllFilters(_, g, b, v, d), t.current_extra_option = this.getAttribute("href").replace(/^[^#]*#/, ""), $("#" + t.current_extra_option, _).addClass("active");var a = t.views.extra[t.current_extra_option];return a && (t.inArray(t.current.view, a) || (t.changeView(a[0]), "folded" == a[0] && t.show_force_view_message(!0))), t.complex && ("waistcoat_button_holes_threads" == t.current_extra_option || "waistcoat_initials" == t.current_extra_option || "waistcoat_metal_buttons" == t.current_extra_option ? t.changeActiveBlock("man_waistcoat", !0) : "lining" != t.current_extra_option || "man_suit2" != t.product_type && "man_suit3" != t.product_type ? "sash" == t.current_extra_option && "without_model" != t.current.view ? t.changeActiveBlock("man_pants", !1) : "waistcoat_lining_back" == t.current_extra_option && "without_model" != t.current.view ? t.changeActiveBlock("man_waistcoat", !1) : t.changeActiveBlock(t.multi_fabric_options[0], !0) : t.changeActiveBlock("man_jacket_only", !0)), "initials" != t.current_extra_option && "coat_initials" != t.current_extra_option && "polo_initials" != t.current_extra_option || ("man_jacket" != t.product_type && "man_suit" != t.product_type && "man_suit2" != t.product_type && "man_coat" != t.product_type && "man_polo" != t.product_type || t.showInitialsImage(), "man_polo" == t.product_type && t.renderInitials()), "quilted_waistcoat" != t.current_extra_option || t.quilted_alert || t.showQuilterWaistcoatAlert(), "winter_lining" != t.current_extra_option || t.winter_lining_alert || t.showWinterLiningAlert(), "logos" == t.current_extra_option && setTimeout(function () {
      m && m.revalidate();
    }, 200), !1;
  }), o.on("click", "a.back", function () {
    return t.closeInitialsImage(), i.removeClass("min"), t.current_extra_option && ($("#" + t.current_extra_option).removeClass("active"), t.hideOptionBox(t.current_extra_option, o)), i.find("li a.active").removeClass("active"), !1;
  }), "man_polo" == t.product_type && $("#initials .box_position_initial label").click(function () {
    $("input", this).val();var e = window.cdn_host;$("#available_window .initials .image img").attr("src", e + "dimg/fabric/polo/" + t.current.fabric.man_polo + "_big.jpg");
  }), $("div.box_opt", a).each(function () {
    var e = this.getAttribute("data-extra-type"),
        r = this.getAttribute("id");t.current.extras[r] = [], "function" == typeof t["initExtra_" + e] && t["initExtra_" + e].apply(t, [r, $(this)]);
  }), $("input", _).change(function () {
    t.renderDraw();
  }), c.on("click", ".fabric_box:not(.out_of_stock)", function () {
    t.keychain_isset(t.out_of_stock_control, ["extras", "fabric", t.current_fabric_activator_parent.attr("id")]) && delete t.out_of_stock_control.extras.fabric[t.current_fabric_activator_parent.attr("id")];var e = $(this).find(".image").attr("rel");if (o = $(this).parent(), t.id_box_opt_fabric) return t.set_extra_fabric(t.id_box_opt_fabric, option_fabric_trigger_selected, t.current_fabric_activator_parent, e), t.fabric_preview_open && $("span.thumb_preview", this).click(), !1;
  }), l.on("click", ".lining_box:not(.out_of_stock)", function () {
    t.keychain_isset(t.out_of_stock_control, ["extras", "lining", t.current_fabric_activator_parent.attr("id")]) && delete t.out_of_stock_control.extras.lining[t.current_fabric_activator_parent.attr("id")];var e = $(this).find(".image").attr("rel");if (o = $(this).parent(), t.id_box_opt_fabric) return t.current._show_lining = !0, t.has_extra_lining = t.id_box_opt_fabric, t.set_extra_lining(t.id_box_opt_fabric, option_fabric_trigger_selected, t.current_fabric_activator_parent, e, $(this)), t.current._show_lining = !1, t.fabric_preview_open && $("span.thumb_preview", this).click(), !1;
  }), n.on("click", ".back", function () {
    return extra_fabrics_active = !1, n.removeClass("active"), t.current_fabric_activator_parent.addClass("active"), !1;
  }), s.on("click", ".back", function () {
    return extra_linings_active = !1, s.removeClass("active"), t.current_fabric_activator_parent.addClass("active"), !1;
  }), c.on("click", ".fabric_box:not(.out_of_stock)", function () {
    return c.find(".fabric_box.checked").removeClass("checked"), $(this).addClass("checked"), !1;
  }), l.on("click", ".lining_box:not(.out_of_stock)", function () {
    return l.find(".lining_box.checked").removeClass("checked"), $(this).addClass("checked"), !1;
  }), d.find(".item_menu_filter").each(function () {
    w.push($(this).attr("rel"));
  }), u.on("click", "a.filter_button", function () {
    p.addClass("active"), t.isFF() ? setTimeout(function () {
      $(".background_fixed", p).show();
    }, 600) : $(".background_fixed", p).show();
  }), p.on("click", "a.back", function () {
    return _.show(), p.removeClass("active"), !1;
  }), p.on("click", ".item_menu", function () {
    $(this).parent().toggleClass("active"), $(this).toggleClass("active");$(this).next().slideToggle().toggleClass("active");
  }).find("ul.sub_menu_filter").hide(), d.on("click", ".filter li", function () {
    var e = $(this).parents(".sub_menu_filter");$(this).hasClass("all") ? e.find(".filter li").removeClass("active") : e.find(".filter li.all").removeClass("active"), $(this).toggleClass("active"), t.check_auto_all_select(e);
  }), f.on("click", "li", function () {
    $(this).remove(), t.resize_height_fabric_options_fix(b, v);var e = $(this).attr("rel");$(this).attr("rel_type");d.find("li[rel=" + e + "]").removeClass("active");var r = [];return h.find("li").each(function () {
      var t = $(this).attr("rel"),
          e = $(this).attr("rel_type");void 0 === r[e] && (r[e] = []), r[e].push(t);
    }), p.find("ul.sub_menu_filter").each(function () {
      t.check_auto_all_select($(this));
    }), t.update_fabric_list(g, w, r, _), !1;
  });var k = !1,
      y = [];p.find(".apply").on("click", "a", function () {
    return h.html(""), d.find(".item_menu_filter").each(function (t) {
      var e = $(this),
          r = e.attr("rel");y[r] = [], e.find(".filter li.active").not(".all").each(function () {
        k = !0;var t = $(this).attr("rel"),
            e = $(this).find("a").html();y[r].push(t), h.prepend("<li rel_type=" + r + " rel=" + t + "><a href='javascript;:'><div class='cruz'>k</div><div class='title'>" + e + "</div></a></li>");
      }), 0 == y[r].length && delete y[r];
    }), k && (f.show(), t.update_fabric_list(g, w, y, _)), _.show(), p.removeClass("active"), t.resize_height_fabric_options_fix(b, v), !1;
  }), $(".quilted_waistcoat .tooltip_info").click(function () {
    t.showQuilterWaistcoatAlert();
  }), $(".quilted_waistcoat_alert").click(function () {
    t.hideQuilterWaistcoatAlert();
  }), $(".unlined_coat_alert").click(function () {
    t.hideUnlinedCoatAlert();
  }), $(".winter_lining .tooltip_info").click(function () {
    t.showWinterLiningAlert();
  }), $(".winter_lining_alert").click(function () {
    t.hideWinterLiningAlert();
  });
}, Garment.prototype.initExtra_standart = function (t, e) {
  var r = this;e.on("click", ".option_trigger", function () {
    var t = $(this).parent().attr("id");$(this).parent().find(".option_trigger").removeClass("active"), $(this).addClass("active");var e = $(this).attr("rel"),
        i = $(this).parent().find("input");if (i.val(e), $(this).hasClass("zero_value")) r.extraSetPrice(t, 0);else {
      var a = parseFloat($(this).parent().attr("data-price"));isNaN(a) && (a = 0), r.extraSetPrice(t, a);
    }i.val(e).change(), input_name = i.attr("name"), input_value = i.val(), void 0 !== r.product_config[input_name].contrast && r.relationsApply(input_name, r.product_config[input_name].contrast[input_value]);
  });
}, Garment.prototype.initExtra_initials = function (t, e) {
  function r(e) {
    if (o) {
      var r = $('input[name="' + t + '[text]"]', e).val();a.current.extras[t].text = r;var i = $('input[name="' + t + '[color_custom]"]', e).val();a.current.extras[t].color_custom = i;var n = $('input[name="' + t + '[type]"]:checked', e).val();a.current.extras[t].type = n;var c = $('input[name="' + t + '[pos]"]:checked', e).val();a.current.extras[t].pos = c;
    } else a.current.extras[t] = [];"man_coat" != this.product_type && "man_trenchcoat" != this.product_type && a.renderInitials();
  }function i() {
    $(".list_common_color .common_color", e).removeClass("checked");var t = $(".list_common_color .common_color", e).first().attr("rel");$('input[name="initials[color_custom]"]', e).val(t), $(".list_common_color .common_color", e).first().addClass("checked");
  }var a = this,
      o = !1;$(document).ready(function () {
    $(window).keydown(function (t) {
      if (13 == t.keyCode) return t.preventDefault(), !1;
    });
  }), $('input[name="' + t + '[text]"]', e).keyup(function (i) {
    i.keyCode || i.which;if ("" != $(this).val()) {
      o = !0;var n = parseFloat(e.attr("data-price"));isNaN(n) && (n = 0), a.extraSetPrice(t, n);
    } else a.extraSetPrice(t, 0), o = !1;r(e);
  }), e.on("click", ".remove", function () {
    return $(".txt_initial", e).val("").change(), i(), a.extraSetPrice(t, 0), o = !1, r(e), !1;
  });var n = e.find(".box_font_initial");n.on("click", "label", function () {
    return n.find("label.checked").removeClass("checked"), $(this).addClass("checked"), $("input", n).prop("checked", !1), $("input", $(this)).prop("checked", !0), "" != $('input[name="' + t + '[text]"]').val() && (o = !0), r(e), !1;
  });var c = e.find(".box_position_initial");c.on("click", "label", function () {
    return c.find("label.checked").removeClass("checked"), $(this).addClass("checked"), $("input", c).prop("checked", !1), $("input", $(this)).prop("checked", !0), "" != $('input[name="' + t + '[text]"]').val() && (o = !0), r(e), !1;
  }), $(".list_common_color", e).on("click", ".common_color", function () {
    $(this).parent().find(".common_color.checked").removeClass("checked");var i = $(this).attr("rel");if ($(this).parent().find("input").val(i).change(), $(this).addClass("checked"), "" != $('input[name="' + t + '[text]"]').val() && (o = !0), o) {
      var n = parseFloat(e.attr("data-price"));isNaN(n) && (n = 0), a.extraSetPrice(t, n);
    }return r(e), !1;
  });
}, Garment.prototype.initExtra_logos = function (t, e) {
  function r(e) {
    if (o) {
      var r = $('input[name="' + t + '[color_custom]"]', e).val();a.current.extras[t].color_custom = r;var i = $('input[name="' + t + '[logo]"]', e).val();a.current.extras[t].logo = i;var n = $('input[name="' + t + '[pos]"]:checked', e).val();a.current.extras[t].pos = n;
    } else a.current.extras[t] = [];
  }function i() {
    $(".list_common_color .common_color", e).removeClass("checked");var t = $(".list_common_color .common_color", e).first().attr("rel");$('input[name="initials[color_custom]"]', e).val(t), $(".list_common_color .common_color", e).first().addClass("checked");
  }var a = this,
      o = !1,
      n = e.find(".box_logos");e.on("click", ".remove_logo", function () {
    return $('input[name="' + t + '[logo]"]').val("").change(), n.find(".logo.checked").removeClass("checked"), i(), a.extraSetPrice(t, 0), o = !1, r(e), $(".remove_logo").removeClass("active"), a.renderDraw(), !1;
  }), n.on("click", ".logo", function () {
    n.find(".logo.checked").removeClass("checked"), $(this).addClass("checked");var i = $(this).attr("rel");$('input[name="' + t + '[logo]"]').val(i), o = !0, r(e), $('input[name="' + t + '[logo]"]').change(), $(".remove_logo").addClass("active");var c = parseFloat(e.attr("data-price"));return isNaN(c) && (c = 0), a.extraSetPrice(t, c), !1;
  });var c = e.find(".box_position_logos");c.on("click", "label", function () {
    return c.find("label.checked").removeClass("checked"), $(this).addClass("checked"), $("input", c).prop("checked", !1), $("input", $(this)).prop("checked", !0), "" != $('input[name="' + t + '[logo]"]').val() && (o = !0), r(e), $("input", $(this)).change(), !1;
  }), $(".list_common_color", e).on("click", ".common_color", function () {
    $(this).parent().find(".common_color.checked").removeClass("checked");var i = $(this).attr("rel");return $(this).parent().find("input").val(i), $(this).addClass("checked"), "" != $('input[name="' + t + '[logo]"]').val() && (o = !0), r(e), $(this).parent().find("input").change(), !1;
  });
}, Garment.prototype.initExtra_threads = function (t, e) {
  var r = this;e.on("click", ".option_trigger", function () {
    $(this).parent().find(".option_trigger").removeClass("active"), $(this).addClass("active"), $(".button_holes_section").removeClass("active");var t = $(this).attr("rel");t ? (r.buttons_holes_opened = !0, $(".buttonholes_color").addClass("active"), "lapel" != t && $(".buttonthreads_color").addClass("active")) : ($("input", e).val(""), $(".list_common_color .common_color", e).removeClass("checked"));var i = this.getAttribute("rel");$(this).parent().find("input").val(i).change(), "man_polo" == r.product_type && r.renderDraw();
  }), $("input", e).change(function () {
    r.trigger("changeButtonHoles" + t, [e]);
  }), this.bind("changeButtonHoles" + t, function (e) {
    r.saveExtraBoxButtonsHoles(t, e);
  }), $(".list_common_color", e).on("click", ".common_color", function () {
    $(this).parent().find(".common_color.checked").removeClass("checked");var t = $(this).attr("rel");return $(this).parent().find("input").val(t).change(), $(this).addClass("checked"), $(this).parent().find("input").change(), !1;
  });
}, Garment.prototype.initExtra_colors = function (t, e) {
  function r() {
    var r = !1,
        a = 0;"contrasts" == t ? ($(".colors_section.active", e).each(function () {
      $("input", this).each(function () {
        "" != $(this).val() && ++a;
      });
    }), a >= 1 && (r = !0)) : ($(".colors_section.active", e).each(function () {
      "" != $("input", this).val() && ++a;
    }), 1 == a && (r = !0)), r ? (price = parseFloat(e.attr("data-price")), rel = $(".option_trigger.active", e).attr("rel"), isNaN(price) && (price = 0), i.extraSetPrice(t, price), void 0 !== i.product_config[t].contrast && i.relationsApply(t + "[contrast]", i.product_config[t].contrast[rel])) : (rel = parseFloat(e.attr("rel")), i.extraSetPrice(t, 0), void 0 !== i.product_config[t].contrast && i.relationsApply(t + "[contrast]", i.product_config[t].contrast[rel]));
  }var i = this;e.on("click", ".option_trigger", function () {
    $(this).parent().find(".option_trigger").removeClass("active"), $(this).addClass("active"), $(".colors_section", e).removeClass("active");var r = $(this).attr("rel");r ? $(".colors_section", e).addClass("active") : ($("input", e).val(""), $(".list_common_color .common_color", e).removeClass("checked"));var i = this.getAttribute("rel");$(this).parent().find("input").val(i).change(), "quilted_waistcoat" == t && r && $(".box_color", e).first().click(), "contrast_collar" == t && r && $(".box_color", e).first().click();
  }), $("input", e).change(function () {
    r();
  }), $(".list_common_color", e).on("click", ".common_color", function () {
    $(this).parent().find(".common_color.checked").removeClass("checked");var t = $(this).attr("rel");return $(this).parent().find("input").val(t).change(), $(this).addClass("checked"), !1;
  });
}, Garment.prototype.set_extra_fabric = function (t, e, r, i) {
  var a = this,
      o = e.attr("rel");$('input[name="' + t + '[contrast]"]', r).val(o), i && $('input[name="' + t + '[fabric_id]"]', r).val(i), $(".option_trigger", r).removeClass("active"), e.addClass("active");var n = parseFloat($("#" + t).attr("data-price"));isNaN(n) && (n = 0), a.extraSetPrice(t, n), $('input[name="' + t + '[contrast]"]', r).val(o).change(), void 0 !== a.product_config[t][o] && a.relationsApply(t + "[contrast]", a.product_config[t][o]);
}, Garment.prototype.set_extra_lining = function (t, e, r, i, a) {
  var o = this,
      n = e.attr("rel");if ($('input[name="' + t + '[contrast]"]', r).val(n), i && $('input[name="' + t + '[lining_id]"]', r).val(i), $(".option_trigger", r).removeClass("active"), e.addClass("active"), "waistcoat_lining_back" == o.id_box_opt_fabric) c = parseFloat(e.attr("data-price"));else if ("unlined" == n) c = parseFloat($(".lining", a).attr("data-price-piping"));else if (a) c = parseFloat($(".lining", a).attr("data-price"));else var c = parseFloat($("#" + t).attr("data-price"));isNaN(c) && (c = 0);var s = "lining";"unlined" == n && (s = "unlined", o.has_extra_unlined = "personalized"), $(".image", a).hasClass("default_" + s) && (c = null), "unlined" == n ? o.extraSetPrice("piping", c) : (o.extraSetPrice("piping", 0), o.extraSetPrice(t, c)), $('input[name="' + t + '[contrast]"]', r).val(n).change(), void 0 !== o.product_config[t][n] && o.relationsApply(t + "[contrast]", o.product_config[t][n]);
}, Garment.prototype.initExtra_fabrics = function (t, e) {
  var r = this,
      i = $("#extra", r.container),
      a = (i.find(".fabric_options"), i.find(".fabric_options_fix"), $(".extra_fabrics", r.container));a.find(".fabric_list").find(".fabric_box"), $(".filters.extra_step", r.container).find(".menu_filter").find(".filter li"), i.find(".active_filters").find("ul");e.on("click", ".option_trigger", function () {
    r.closeThumbFabric(), r.closeInitialsImage(), r.closeSeersuckerWarning(), r.id_box_opt_fabric = $(this).parent().attr("id");var e = $(this).attr("views");if (e && (e = e.split(","), r.inArray(r.current.view, e) || r.changeView(e[0])), option_fabric_trigger_selected = $(this), $(this).hasClass("fabric_activator")) {
      r.last_change = $(this).parent().attr("id"), r.extra_fabrics_active = !0, r.current_fabric_activator_parent = $(this).parent(), r.current_fabric_activator_parent.removeClass("active"), $(".fabric_box.checked", a).removeClass("checked");var i = $('input[name="' + r.id_box_opt_fabric + '[fabric_id]"]', r.current_fabric_activator_parent).val();$('.fabric_box [rel="' + i + '"]', a).parent().addClass("checked"), i && r.set_extra_fabric(r.id_box_opt_fabric, option_fabric_trigger_selected, r.current_fabric_activator_parent, i), a.addClass("active"), setTimeout(function () {
        r.bLazy_fabric && r.bLazy_fabric.revalidate();
      }, 200), r.scrolltoFabric(".extra_fabrics");var o = $(this).attr("rel");return "cuffs_fabric" == t && "inner" == o && (r.changeView("front"), r.change_style_shirt("inner_sleeve")), !1;
    }$(this).parent().find(".option_trigger").removeClass("active"), $(this).addClass("active");option_fabric_trigger_selected.attr("rel");$('input[name="' + r.id_box_opt_fabric + '[fabric_id]"]', $(this).parent()).val(""), $('input[name="' + r.id_box_opt_fabric + '[contrast]"]', $(this).parent()).val(""), r.extraSetPrice(t, 0), r.keychain_isset(r.out_of_stock_control, ["extras", "fabric", t]) && delete r.out_of_stock_control.extras.fabric[t], $('input[name="' + r.id_box_opt_fabric + '[fabric_id]"]', $(this).parent()).val("").change();
  });
}, Garment.prototype.initExtra_lining = function (t, e) {
  var r = this;r.has_extra_lining = !1;var i = $("#extra", r.container),
      a = (i.find(".fabric_options"), i.find(".fabric_options_fix"), $(".extra_linings", r.container)),
      o = a.find(".lining_list");o.find(".lining_box"), $(".filters.extra_step", r.container).find(".menu_filter").find(".filter li"), i.find(".active_filters").find("ul");e.on("click", ".option_trigger", function () {
    r.has_extra_unlined = !1, o.removeClass("unlined_mode"), o.removeClass("lining_mode"), r.closeThumbFabric(), r.closeSeersuckerWarning(), r.id_box_opt_fabric = $(this).parent().attr("id"), option_fabric_trigger_selected = $(this);var e = option_fabric_trigger_selected.attr("rel");if ($(this).hasClass("lining_activator")) {
      o.addClass("lining_mode"), (c = $(this).attr("filter")) && (a.removeClass("personalizado"), a.removeClass("padded"), a.addClass(c)), r.extra_linings_active = !0, r.current_fabric_activator_parent = $(this).parent(), r.current_fabric_activator_parent.removeClass("active"), $(".lining_box.checked", a).removeClass("checked");i = $('input[name="' + r.id_box_opt_fabric + '[lining_id]"]', r.current_fabric_activator_parent).val();return $('.lining_box [rel="' + i + '"]', a).parent().addClass("checked"), "waistcoat_lining_back" == r.id_box_opt_fabric ? ($(".lining_list").addClass("waistcoat_lining_back"), $(".lining_list .price").removeClass("active"), $(".lining_list .diamond").removeClass("active")) : ($(".lining_list").removeClass("waistcoat_lining_back"), $(".lining_list .price").addClass("active"), $(".lining_list .diamond").addClass("active")), a.addClass("active"), tablet_device || a.perfectScrollbar("update"), setTimeout(function () {
        r.bLazy_fabric && r.bLazy_fabric.revalidate();
      }, 200), void 0 !== r.product_config[r.id_box_opt_fabric] && void 0 !== r.product_config[r.id_box_opt_fabric].options && r.relationsApply(r.id_box_opt_fabric + "[contrast]", r.product_config[r.id_box_opt_fabric].options[e]), r.id_box_opt_fabric.indexOf("waistcoat") > -1 ? ($(".lining_list .image").removeClass("default_unlined"), $(".lining_list .image").removeClass("default_lining"), $(".lining_box .lining_" + r.current.fabric.waistcoat_lining_id).addClass("default_lining")) : ($(".lining_list .image").removeClass("default_lining"), $(".lining_box .lining_" + r.current.fabric.lining_id).addClass("default_lining"), $(".lining_list .image").removeClass("default_unlined"), $(".lining_box .lining_" + r.current.fabric.unlined_lining).addClass("default_unlined")), !1;
    }if ($(this).hasClass("lining_unlined")) {
      "coat_lining" != r.current_extra_option || r.unlined_coat_alert || r.showUnlinedCoatAlert(), r.has_extra_unlined = "default", r.extra_linings_active = !0;var i = $('input[name="' + r.id_box_opt_fabric + '[lining_id]"]', r.current_fabric_activator_parent).val(),
          n = $('input[name="' + r.id_box_opt_fabric + '[contrast]"]', r.current_fabric_activator_parent).val();$(this).parent().find(".option_trigger").removeClass("active"), $(this).addClass("active");s = parseFloat($(this).attr("data-price"));r.keychain_isset(r.out_of_stock_control, ["extras", "lining", t]) && delete r.out_of_stock_control.extras.lining[t], $('input[name="' + r.id_box_opt_fabric + '[contrast]"]').val("unlined").change(), o.addClass("unlined_mode");var c = $(this).attr("filter");c && (a.removeClass("personalizado"), a.removeClass("padded"), a.addClass(c)), r.current_fabric_activator_parent = $(this).parent(), r.current_fabric_activator_parent.removeClass("active"), a.addClass("active"), tablet_device || a.perfectScrollbar("update"), $(".lining_box.checked", a).removeClass("checked"), i && "unlined" == n || (i = r.current.fabric.unlined_lining), "waistcoat_lining_back" == r.id_box_opt_fabric ? ($(".lining_list .price").removeClass("active"), $(".lining_list .diamond").removeClass("active")) : ($(".lining_list .price").addClass("active"), $(".lining_list .diamond").addClass("active")), $('input[name="' + r.id_box_opt_fabric + '[lining_id]"]').val(i), $('.lining_box [rel="' + i + '"]', a).parent().addClass("checked"), r.extraSetPrice(t, s), r.renderDraw(), setTimeout(function () {
        r.bLazy_fabric && r.bLazy_fabric.revalidate();
      }, 200), void 0 !== r.product_config[r.id_box_opt_fabric] && void 0 !== r.product_config[r.id_box_opt_fabric].options && r.relationsApply(r.id_box_opt_fabric + "[contrast]", r.product_config[r.id_box_opt_fabric].options[e]), r.id_box_opt_fabric.indexOf("waistcoat") > -1 ? ($(".lining_list .image").removeClass("default_unlined"), $(".lining_list .image").removeClass("default_lining"), $(".lining_box .lining_" + r.current.fabric.waistcoat_lining_id).addClass("default_lining")) : ($(".lining_list .image").removeClass("default_lining"), $(".lining_box .lining_" + r.current.fabric.lining_id).addClass("default_lining"), $(".lining_list .image").removeClass("default_unlined"), $(".lining_box .lining_" + r.current.fabric.unlined_lining).addClass("default_unlined"));
    } else if ($(this).hasClass("same_as_front")) {
      o.addClass("lining_mode"), $(this).parent().find(".option_trigger").removeClass("active"), $(this).addClass("active");var s = parseFloat($(this).attr("data-price"));$('input[name="' + r.id_box_opt_fabric + '[lining_id]"]').val(r.current.fabric.man_waistcoat), $('input[name="' + r.id_box_opt_fabric + '[contrast]"]').val("same_as_front").change(), r.extraSetPrice(t, s), r.keychain_isset(r.out_of_stock_control, ["extras", "lining", t]) && delete r.out_of_stock_control.extras.lining[t], r.renderDraw(), void 0 !== r.product_config[r.id_box_opt_fabric] && void 0 !== r.product_config[r.id_box_opt_fabric].options && r.relationsApply(r.id_box_opt_fabric + "[contrast]", r.product_config[r.id_box_opt_fabric].options[e]);
    } else $(this).parent().find(".option_trigger").removeClass("active"), $(this).addClass("active"), $('input[name="' + r.id_box_opt_fabric + '[lining_id]"]', $(this).parent()).val(""), $('input[name="' + r.id_box_opt_fabric + '[contrast]"]', $(this).parent()).val(""), r.extraSetPrice(t, 0), r.extraSetPrice("unlined", 0), r.extraSetPrice("piping", 0), r.keychain_isset(r.out_of_stock_control, ["extras", "lining", t]) && delete r.out_of_stock_control.extras.lining[t], $('input[name="' + r.id_box_opt_fabric + '[lining_id]"]', $(this).parent()).val("").change(), void 0 !== r.product_config[r.id_box_opt_fabric] && void 0 !== r.product_config[r.id_box_opt_fabric].options && r.relationsApply(r.id_box_opt_fabric + "[contrast]", r.product_config[r.id_box_opt_fabric].options[e]);
  });
}, Garment.prototype.resize_render_viewport_init = function () {
  var t = this.render_info.viewport;this.current_view = "", this.current_product = "", this.current_view_ratio = "", this.viewport_full = {}, this.viewport_zoom = {}, this.viewport = t;var e = $(window).width();for (var r in t) {
    this.current_view || (this.current_view = r), this.viewport_full[r] = { w: 0, h: 0, top: this.viewport[r].base.h }, this.viewport[r].base.ratio = 0;for (var i in this.viewport[r]) "base" != i && (this.viewport[r][i].ratio = this.viewport[r][i].h / this.viewport[r][i].w, this.current_product || (this.current_product = i), this.viewport[r].base.ratio < this.viewport[r][i].ratio && (this.viewport[r].base.ratio = this.viewport[r][i].ratio), this.viewport[r][i].w > this.viewport_full[r].w && (this.viewport_full[r].w = this.viewport[r][i].w), this.viewport[r][i].h + this.viewport[r][i].top > this.viewport_full[r].h && (this.viewport_full[r].h = this.viewport[r][i].h + this.viewport[r][i].top), this.viewport[r][i].top < this.viewport_full[r].top && (this.viewport_full[r].top = this.viewport[r][i].top));this.viewport_full[r].h = this.viewport_full[r].h - this.viewport_full[r].top, this.viewport_full[r].ratio = this.viewport_full[r].h / this.viewport_full[r].w;var a = e / this.viewport[r].base.w;a > 2 && (a = 2), this.viewport_zoom[r] = {}, this.viewport_zoom[r].h = Math.round(this.viewport[r].base.h * a), this.viewport_zoom[r].w = Math.round(this.viewport[r].base.w * a);
  }
}, Garment.prototype.resize_render_viewport = function (t, e, r) {
  function i(t, e, r, i) {
    var a = { width: 0, left: 0, top: 0 };return t < e ? (a.width = i / e, a.left = (r - a.width) / 2) : a.width = r, a;
  }var a = this;if (void 0 !== this.viewport && void 0 !== this.viewport[this.current.view]) {
    var o = $("#available_window"),
        n = o.find(".viewport"),
        c = o.height(),
        s = o.width(),
        l = c / s;if ("full" == a.current_product) {
      var _ = (p = i(l, a.viewport_full[a.current.view].ratio, s, c)).width / a.viewport_full[a.current.view].w,
          u = a.viewport_full[a.current.view].h * _;p.top = -a.viewport_full[a.current.view].top * _;
    } else {
      var p = i(l, a.viewport[a.current.view].base.ratio, s, c),
          _ = p.width / a.viewport[a.current.view].base.w,
          u = a.viewport[a.current.view][a.current_product].h * _;p.top = -a.viewport[a.current.view][a.current_product].top * _;
    }if (u < c && (p.top += (c - u) / 2), p.top > 0 && (p.top = 0), $("form.garment_form").hasClass("hide_face") && ("man_smoking" == this.product_type || "man_suit2" == this.product_type || "man_chaque" == this.product_type || "man_frac" == this.product_type || "man_levita" == this.product_type) && ("man_jacket" == this.current_product || "man_levita" == this.current_product || "man_frac" == this.current_product || "man_chaque" == this.current_product) && ("front" == a.current.view || "back" == a.current.view)) {
      var d = .3 * u;"back" != a.current.view || "man_smoking" != this.product_type && "man_suit2" != this.product_type && "man_chaque" != this.product_type && "man_frac" != this.product_type && "man_levita" != this.product_type || (d = .2 * u), p.top = p.top - d;
    }n.css(p);
  }
}, Garment.prototype.updateConfiguratedProduct = function (t) {
  function e(t, e) {
    for (var r = e.length, i = 0; i < r; i++) if (e[i] == t) return !0;return !1;
  }function r(t, e, r) {
    var i = {};for (var a in t) i[a] = t[a];for (var a in e) i[a] = e[a];for (var a in r) i[a] = r[a];return i;
  }var i = this,
      a = $("#config", i.container),
      o = $("#fabric", i.container),
      n = $("#extra", i.container);if ("man_polo" == this.product_type) n = $("#config", i.container);"default" == t && (product = this.current);var c = !1;void 0 !== product.config.pants_chinos && (c = product.config.pants_chinos), "man_pants" == i.product_type && "1" == c ? ($(".fabric_options_fix").hide(), $(".fabric_list").css("margin-top", "0px"), $('.option_trigger[rel="rounded"]').hide()) : "man_pants" == i.product_type && "1" != c ? ($('.filters .filter li[rel="cotton"]').hide(), $('.option_trigger[rel="rounded_chinos"]').hide(), $('#fabric .fabric_box .image a[simple_composition="cotton"]').parent().parent().remove()) : $('.option_trigger[rel="rounded_chinos"]').hide();var s = product.config;if (s) {
    $(".option_trigger", a).removeClass("active");for (k in s) if ("_active_block" != k) {
      if (i.current.config[k] = s[k], "shirt_neck_no_interfacing" == k || "shirt_neck_buttons" == k) $('input[name="' + k + '"]', a).each(function () {
        var t = $(this).val();t == s[k] ? ($(this).parent().addClass("checked"), $(this).attr("checked", !0), "shirt_neck_no_interfacing" == k && $("label#cuff_interfacing_" + t).addClass("checked")) : ($(this).parent().removeClass("checked"), $(this).attr("checked", !1), "shirt_neck_no_interfacing" == k && $("label#cuff_interfacing_" + t).removeClass("checked"));
      });else if ("jacket_pockets_type" == k || "smoking_pockets_type" == k) (h = $('.box_opt[id="' + k + '"] .option_trigger[rel="' + s[k] + '"]', a)).addClass("active"), h.hasClass("slanted") && $("#jacket_pockets_type").addClass("slanted"), h.hasClass("slanted") && $("#smoking_pockets_type").addClass("slanted"), $('input[name="' + k + '"]', a).val(s[k]);else if ("waistcoat" == k && "1" == s[k]) {
        if ("man_levita" == i.product_type || "man_frac" == i.product_type || "man_chaque" == i.product_type) {
          f = $("#input_waistcoat").attr("price");f = parseFloat(f), i.convetToCeremonial3(f, !0);
        } else {
          f = $("#input_waistcoat").attr("price");f = parseFloat(f), i.convetToSuit3(f, !1);
        }
      } else if ("jacket_style_combined" == k) {
        var l = (u = s[k].split("_"))[0],
            _ = 2;_ = "mao" == l ? 5 : u[1], i.current.config.jacket_style = l, i.current.config.jacket_buttons = _, i.current.config.jacket_style_combined = "mao" == l ? l : l + "_" + _, $('input[name="jacket_style_combined"]', a).val(i.current.config.jacket_style_combined);
      } else if ("waistcoat_style_combined" == k) {
        var u = s[k].split("_"),
            p = u[0],
            d = u[1];i.current.config.waistcoat_style = p, i.current.config.waistcoat_buttons = d, i.current.config.waistcoat_style_combined = p + "_" + d, $('input[name="waistcoat_style_combined"]', a).val(i.current.config.waistcoat_style_combined);
      } else $('input[name="' + k + '"]', a).val(s[k]);if ($('.box_opt[id="' + k + '"] .option_trigger[rel="' + s[k] + '"]', a).addClass("active"), $('.subbox_opt[id="' + k + '"] .option_trigger[rel="' + s[k] + '"]', a).addClass("active"), (f = $('.box_opt[id="' + k + '"] .option_trigger[rel="' + s[k] + '"]', a).attr("price")) || (f = $('.subbox_opt[id="' + k + '"] .option_trigger[rel="' + s[k] + '"]', a).attr("price")), f > 0 && (i.price_detail[k] = f, i.updatePrice()), $('.box_opt[id="' + k + '"] .option_trigger[rel="' + s[k] + '"]', a).hasClass("special_type")) {
        var f = $('.box_opt[id="' + k + '"] .option_trigger[rel="' + s[k] + '"]', a).attr("price_color");$(".colors_section .color_block." + s[k], '.box_opt[id="' + k + '"]').addClass("active"), $(".colors_section .color_block." + s[k] + ' .common_color[rel="' + s[k + "_color"] + '"]', '.box_opt[id="' + k + '"]').addClass("checked"), f > 0 && (i.price_detail[k] = f, i.updatePrice());
      }var h = $('.box_opt[id="' + k + '"] .option_trigger[rel="' + s[k] + '"]', a);h.parent().attr("icon-fixed") || i.change_icon_trigger(h, $(".container_options", a)), void 0 !== i.product_config[k] && i.relationsApply(k, i.product_config[k][s[k]]);
    }
  }var b = ["shirt_neck", "shirt_cuff", "shirt_patches", "blouse_neck", "blouse_cuff", "neck_fabric", "cuffs_fabric"],
      v = ["shirt_threads", "blouse_threads", "jacket_threads", "button_holes_threads", "waistcoat_button_holes_threads", "coat_threads", "threads"],
      m = ["coat_lining", "lining", "waistcoat_lining", "waistcoat_lining_back"],
      g = ["patches"],
      w = ["tuxedo", "type_flap"];if ("man_suit2" == i.product_type && void 0 !== product.extras && void 0 !== product.extras.man_jacket) y = r(product.extras.man_jacket, product.extras.man_pants, product.extras.man_waistcoat);else if ("man_levita" != i.product_type && "man_chaque" != i.product_type && "man_frac" != i.product_type || void 0 === product.extras || void 0 === product.extras.man_jacket) y = product.extras;else var y = r(product.extras.man_jacket, product.extras.man_pants, product.extras.man_waistcoat);if (y) for (k in y) if (k.indexOf("initials") > -1 || k.indexOf("logos") > -1) {
    var x = $('.box_opt[id="' + k + '"]', n);i.updateExtraInitials(y[k], x, k);
  } else if (e(k, b)) {
    C = $('.box_opt[id="' + k + '"]', n);i.updateExtraFabric(k, y[k], C);
  } else if (e(k, g) && "man_shirt" == i.product_type) {
    C = $('.box_opt[id="' + k + '"]', n);i.updateExtraPatches(k, y[k], C);
  } else if (e(k, v)) {
    C = $('.box_opt[id="' + k + '"]', n);i.updateExtraThreads(k, y[k], C);
  } else if (e(k, m)) {
    C = $('.box_opt[id="' + k + '"]', n);i.updateExtraLining(k, y[k], C);
  } else if (e(k, w)) {
    C = $('.box_opt[id="' + k + '"]', n);i.updateExtraStandart(k, y[k], C);
  } else {
    var C = $('.box_opt[id="' + k + '"]', n);i.updateExtraOther(k, y[k], C);
  }var S = product.fabric;if (S || (S = this.current), S) {
    var j = i.product_type;if ("woman_suitpants" == j || "woman_suitskirt" == j || "man_suit" == j || "man_suit2" == j || "man_suit3" == j || "man_levita" == j || "man_frac" == j || "man_chaque" == j) {
      var T = S[i.multi_fabric_options[0]],
          z = S[i.multi_fabric_options[1]],
          I = S[i.multi_fabric_options[2]];i.current.fabric[i.multi_fabric_options[0]] = T, i.current.fabric[i.multi_fabric_options[1]] = z, i.current.fabric[i.multi_fabric_options[2]] = I;var A = !1;if (T != z && (A = !0), I && T != I && (A = !0), A) {
        if ($('#personalize_fabrics_split .option_trigger[rel="1"]', i.container).click(), !(C = $('.fabric_list .fabric_box div[rel="' + T + '"]')).length) {
          H = $("#fabric .fabric_list .fabric_box div.image").first().attr("rel");i.current.fabric[i.multi_fabric_options[0]] = H, C = $('#fabric .fabric_list .fabric_box div[rel="' + H + '"]');
        }if (!(O = $('.fabric_list .fabric_box div[rel="' + z + '"]')).length) {
          H = $("#fabric .fabric_list .fabric_box div.image").first().attr("rel");i.current.fabric[i.multi_fabric_options[1]] = H, O = $('#fabric .fabric_list .fabric_box div[rel="' + H + '"]');
        }if (i.multi_fabric_active = i.multi_fabric_options[1], i.fabricSelect(o, O.parent(), !1), I) {
          if (!(I = $('.fabric_list .fabric_box div[rel="' + I + '"]')).length) {
            H = $("#fabric .fabric_list .fabric_box div.image").first().attr("rel");i.current.fabric[i.multi_fabric_options[2]] = H, I = $('#fabric .fabric_list .fabric_box div[rel="' + H + '"]');
          }i.multi_fabric_active = i.multi_fabric_options[2], i.fabricSelect(o, I.parent(), !1);
        }i.multi_fabric_active = i.multi_fabric_options[0], i.fabricSelect(o, C.parent());
      } else {
        if (!(C = $('.fabric_list .fabric_box div[rel="' + T + '"]')).length) {
          H = $("#fabric .fabric_list .fabric_box div.image").first().attr("rel");i.current.fabric[i.multi_fabric_options[0]] = H, i.current.fabric[i.multi_fabric_options[1]] = H, i.current.fabric[i.multi_fabric_options[2]] = H, C = $('#fabric .fabric_list .fabric_box div[rel="' + H + '"]');
        }i.fabricSelect(o, C.parent());
      }
    } else if ("man_smoking" == j) {
      var T = S[i.multi_fabric_options[0]],
          z = S[i.multi_fabric_options[1]];if (i.current.fabric[i.multi_fabric_options[0]] = T, i.current.fabric[i.multi_fabric_options[1]] = z, T != z) {
        if ($('#personalize_fabrics_split .option_trigger[rel="1"]', i.container).click(), !(C = $('.fabric_list .fabric_box div[rel="' + T + '"]')).length) {
          H = $("#fabric .fabric_list .fabric_box div.image").first().attr("rel");i.current.fabric[i.multi_fabric_options[0]] = H, C = $('#fabric .fabric_list .fabric_box div[rel="' + H + '"]');
        }var O = $('.fabric_list .fabric_box div[rel="' + z + '"]');if (!O.length) {
          H = $("#fabric .fabric_list .fabric_box div.image").first().attr("rel");i.current.fabric[i.multi_fabric_options[1]] = H, O = $('#fabric .fabric_list .fabric_box div[rel="' + H + '"]');
        }i.multi_fabric_active = i.multi_fabric_options[1], i.fabricSelect(o, O.parent()), i.multi_fabric_active = i.multi_fabric_options[0], i.fabricSelect(o, C.parent());
      } else {
        if (!(C = $('.fabric_list .fabric_box div[rel="' + T + '"]')).length) {
          H = $("#fabric .fabric_list .fabric_box div.image").first().attr("rel");i.current.fabric[i.multi_fabric_options[0]] = H, i.current.fabric[i.multi_fabric_options[1]] = H, C = $('#fabric .fabric_list .fabric_box div[rel="' + H + '"]');
        }i.fabricSelect(o, C.parent());
      }
    } else if ("man_polo" != j && "man_shirt" != j && "man_jacket" != j && "man_pants" != j && "man_waistcoat" != j || "default" == t) {
      P = S[j];if (i.current.fabric[j] = P, !(C = $('#fabric .fabric_list .fabric_box div[rel="' + P + '"]')).length) {
        H = $("#fabric .fabric_list .fabric_box div.image").first().attr("rel");i.current.fabric[j] = H, C = $('#fabric .fabric_list .fabric_box div[rel="' + H + '"]');
      }i.fabricSelect(o, C.parent());
    } else {
      var P = S.id_t4l_fabric;if (i.current.fabric[j] = P, !(C = $('#fabric .fabric_list .fabric_box div[rel="' + P + '"]')).length) {
        var H = $("#fabric .fabric_list .fabric_box div.image").first().attr("rel");i.current.fabric[j] = H, C = $('#fabric .fabric_list .fabric_box div[rel="' + H + '"]');
      }i.fabricSelect(o, C.parent());
    }
  }
}, Garment.prototype.updateExtraInitials = function (t, e, r) {
  if (0 != t.length) {
    var i = this;r.indexOf("initials") > -1 && $('input[name="' + r + '[text]"]', e).val(t.text), r.indexOf("initials") > -1 ? ($('input[name="' + r + '[type]"]', e).prop("checked", !1), $('input[name="' + r + '[type]"]', e).parent().removeClass("checked"), $('input[name="' + r + '[type]"][value="' + t.type + '"]').prop("checked", !0).parent().addClass("checked")) : ($('.box_logos .logo[rel="' + t.logo + '"]', e).addClass("checked"), $(".box_logos input", e).val(t.logo)), $("div.common_color", e).removeClass("checked"), $('input[name="' + r + '[color_custom]"]', e).val(t.color_custom), $('div.common_color[rel="' + t.color_custom + '"]', e).addClass("checked"), $('input[name="' + r + '[pos]"]', e).prop("checked", !1), $('input[name="' + r + '[pos]"]', e).parent().removeClass("checked"), $('input[name="' + r + '[pos]"][value="' + t.pos + '"]').prop("checked", !0).parent().addClass("checked");var a = parseFloat(e.attr("data-price"));isNaN(a) && (a = 0), i.extraSetPrice(r, a), r.indexOf("initials") > -1 ? (i.current.extras[r].text = t.text, i.current.extras[r].color_custom = t.color_custom, i.current.extras[r].type = t.type, i.current.extras[r].pos = t.pos) : (i.current.extras[r].color_custom = t.color_custom, i.current.extras[r].pos = t.pos, i.current.extras[r].logo = t.logo), "man_coat" != this.product_type && "man_trenchcoat" != this.product_type && i.renderInitials(), "man_polo" == this.product_type && "logos" == r && i.renderDraw();
  }
}, Garment.prototype.updateExtraFabric = function (t, e, r) {
  if (0 != e.length) {
    var i = this,
        a = "";$(".option_trigger", r).removeClass("active"), "man_shirt" == i.product_type ? e.id_t4l_fabric.in && e.id_t4l_fabric.out ? (a = "full", $('input[name="' + t + '[contrast]"]', r).val(a), $('input[name="' + t + '[fabric_id]"]', r).val(e.id_t4l_fabric.in), $('.option_trigger[rel="full"]', r).addClass("active")) : e.id_t4l_fabric.in ? (a = "inner", $('input[name="' + t + '[contrast]"]', r).val(a), $('input[name="' + t + '[fabric_id]"]', r).val(e.id_t4l_fabric.in), $('.option_trigger[rel="inner"]', r).addClass("active")) : e.id_t4l_fabric.out && (a = "outer", $('input[name="' + t + '[contrast]"]', r).val(a), $('input[name="' + t + '[fabric_id]"]', r).val(e.id_t4l_fabric.out), $('.option_trigger[rel="outer"]', r).addClass("active")) : ($('input[name="' + t + '[contrast]"]', r).val(e.contrast), $('input[name="' + t + '[fabric_id]"]', r).val(e.fabric_id), $('.option_trigger[rel="' + e.contrast + '"]', r).addClass("active"));var o = parseFloat($("#" + t).attr("data-price"));i.extraSetPrice(t, o), void 0 !== i.product_config[t] && i.relationsApply(t, i.product_config[t][a]);
  } else $(".option_trigger.zero_value", r).addClass("active");
}, Garment.prototype.updateExtraPatches = function (t, e, r) {
  if (0 != e.length) {
    var i = this;$(".option_trigger", r).removeClass("active"), $('input[name="' + t + '[contrast]"]', r).val("custom"), $('input[name="' + t + '[fabric_id]"]', r).val(e.id_t4l_fabric), $('.option_trigger[rel="custom"]', r).addClass("active");var a = parseFloat($("#" + t).attr("data-price"));i.extraSetPrice(t, a);
  } else $(".option_trigger.zero_value", r).addClass("active");
}, Garment.prototype.updateExtraStandart = function (t, e, r) {
  var i = this;if (0 == e.length) return $(".option_trigger.zero_value", r).addClass("active"), void ("type_flap" == t && void 0 !== i.product_config[t].contrast.default && i.relationsApply(t, i.product_config[t].contrast.default));$('input[name="' + t + '"]', r).val(e), $(".option_trigger.active", r).removeClass("active"), $('.option_trigger[rel="' + e + '"]', r).addClass("active");var a = parseFloat($("#" + t).attr("data-price"));i.extraSetPrice(t, a), void 0 !== i.product_config[t] && i.relationsApply(t, i.product_config[t][e]);
}, Garment.prototype.updateExtraOther = function (t, e, r) {
  var i = this;if (0 != e.length) {
    $('input[name="' + t + '[contrast]"]', r).val(e.contrast), "jacket_metal_button" == t ? $('input[name="' + t + '[type]"]', r).val(e.type) : "metal_buttons" == t ? $('input[name="' + t + '[type]"]', r).val(e.type) : "waistcoat_metal_buttons" == t ? $('input[name="' + t + '[type]"]', r).val(e.type) : "contrasts" == t ? ($('input[name="contrasts[contrast]"]', r).val(e.contrast), $('input[name="contrasts[contrasts_flap]"]', r).val(e.contrasts_flap), $('input[name="contrasts[contrasts_buttons]"]', r).val(e.contrasts_buttons), $('input[name="contrasts[contrasts_pants]"]', r).val(e.contrasts_pants), $('input[name="contrasts[contrasts_pockets]"]', r).val(e.contrasts_pockets)) : $('input[name="' + t + '[color]"]', r).val(e.color), $(".option_trigger.active", r).removeClass("active"), $('.option_trigger[rel="' + e.contrast + '"]', r).addClass("active"), $(".colors_section", r).addClass("active"), "jacket_metal_button" == t ? $('.colors_section .common_color[rel="' + e.type + '"]', r).addClass("checked") : "metal_buttons" == t ? $('.colors_section .common_color[rel="' + e.type + '"]', r).addClass("checked") : "contrasts" == t ? ($('.color_block.contrasts_flap .common_color[rel="' + e.contrasts_flap + '"]', r).addClass("checked"), $('.color_block.contrasts_buttons .common_color[rel="' + e.contrasts_buttons + '"]', r).addClass("checked"), $('.color_block.contrasts_pants .common_color[rel="' + e.contrasts_pants + '"]', r).addClass("checked"), $('.color_block.contrasts_pockets .common_color[rel="' + e.contrasts_pockets + '"]', r).addClass("checked")) : $('.colors_section .common_color[rel="' + e.color + '"]', r).addClass("checked");var a = parseFloat($("#" + t).attr("data-price"));i.extraSetPrice(t, a), void 0 !== i.product_config[t] && void 0 !== i.product_config[t].contrast && i.relationsApply(t, i.product_config[t].contrast[e.contrast]);
  } else $(".option_trigger.zero_value", r).addClass("active");
}, Garment.prototype.updateExtraLining = function (t, e, r) {
  if (0 != e.length) {
    var i = this;if ($(".option_trigger", r).removeClass("active"), $('input[name="' + t + '[contrast]"]', r).val(e.contrast), $('input[name="' + t + '[lining_id]"]', r).val(e.lining_id), $('.option_trigger[rel="' + e.contrast + '"]', r).addClass("active"), "unlined" == e.contrast) {
      i.changeView("without_model");var a = parseFloat($('.option_trigger[rel="' + e.contrast + '"]', r).attr("data-price")),
          o = $(".extra_linings .lining_list .lining_box div.lining_" + e.lining_id).parent(),
          n = parseFloat($(".lining", o).attr("data-price-piping"));o.find(".image").hasClass("default_unlined") && (n = null), i.extraSetPrice("piping", n);
    } else if ("same_as_front" == e.contrast) {
      i.changeView("without_model");a = parseFloat($('.option_trigger[rel="' + e.contrast + '"]', r).attr("data-price"));
    } else {
      a = parseFloat($("#" + t).attr("data-price"));if ((o = $(".extra_linings .lining_list .lining_box div.lining_" + e.lining_id).parent()).hasClass("padded") && ($(".option_trigger", r).removeClass("active"), $('.option_trigger[rel="padded"]', r).addClass("active")), "waistcoat_lining_back" == t) a = parseFloat($("#waistcoat_lining_back").attr("data-price"));else a = parseFloat($(".lining", o).attr("data-price"));
    }i.has_extra_lining = t, i.current_fabric_activator_parent = $(".option_trigger", r).parent(), i.extraSetPrice(t, a), void 0 !== i.product_config[t] && i.relationsApply(t, i.product_config[t][""]);
  } else $(".option_trigger.zero_value", r).addClass("active");
}, Garment.prototype.updateExtraThreads = function (t, e, r) {
  var i = this;if (0 != e.length) {
    $(".button_holes_section", r).addClass("active"), $(".option_trigger.active", r).removeClass("active"), "man_shirt" == i.product_type ? ($('.option_trigger[rel="' + e.position + '"]', r).addClass("active"), $('input[name="' + t + '[contrast]"]', r).val(e.position), e.apply_at && ($('.option_trigger[rel="' + e.apply_at + '"]', r).addClass("active"), $('input[name="' + t + '[contrast]"]', r).val(e.apply_at)), e.buttonthreads_color && ($('.buttonthreads_color .list_common_color .common_color[rel="' + e.buttonthreads_color + '"]').addClass("checked"), $('input[name="' + t + '[threads][color]"]').val(e.buttonthreads_color)), e.buttonholes_color && ($('.buttonholes_color .list_common_color .common_color[rel="' + e.buttonholes_color + '"]').addClass("checked"), $('input[name="' + t + '[holes][color]"]').val(e.buttonholes_color))) : ($('.option_trigger[rel="' + e.contrast + '"]', r).addClass("active"), $('input[name="' + t + '[contrast]"]', r).val(e.contrast), void 0 !== e.threads && e.threads.color && ($('.buttonthreads_color .list_common_color .common_color[rel="' + e.threads.color + '"]').addClass("checked"), $('input[name="' + t + '[threads][color]"]').val(e.threads.color)), void 0 !== e.holes && e.holes.color && ($('.buttonholes_color .list_common_color .common_color[rel="' + e.holes.color + '"]').addClass("checked"), $('input[name="' + t + '[holes][color]"]').val(e.holes.color)));var a = parseFloat($("#" + t).attr("data-price"));i.extraSetPrice(t, a);
  } else $(".option_trigger.zero_value", r).addClass("active");
}, Garment.prototype.stepNext = function () {
  if (coat_generic_mode) switch (this.step) {case "config":
      return this.stepSetURL("fabric");case "fabric":
      return this.stepSetURL("extra");case "extra":
      this.container.submit();} else if ("man_polo" == this.product_type) switch (this.step) {case "fabric":
      return this.stepSetURL("config");case "config":
      this.container.submit();} else switch (this.step) {case "fabric":
      return this.multi_fabric ? this.stepSetURL(this.multi_fabric_options[1].replace("man_", "fabric_")) : this.stepSetURL("config");case "fabric_pants":case "fabric_skirt":
      return this.stepSetURL("config");case "config":
      if (void 0 === this.extra) {
        this.container.submit();break;
      }return this.stepSetURL("extra");case "extra":
      this.container.submit();}
}, Garment.prototype.gaEvent = function (t) {
  var e = t;"zoom" == t && (e = "zoom_model"), this.push_dataLayer("config_" + this.product_type, "step:" + e);
}, Garment.prototype.stepPrev = function () {
  switch (this.step) {case "config":
      return !1;case "fabric":
      return this.stepSetURL("config");case "extra":
      return this.stepSetURL("fabric");}
}, Garment.prototype.stepSetURL = function (t) {
  $(".preview_fabric", this.container).hide(), "extra" == t ? $(".preview_fabric", this.container).addClass("extra") : $(".preview_fabric", this.container).removeClass("extra"), History.pushState({ step: t }, this.window_title, "?step=" + t);
}, Garment.prototype.stepSwitch = function (t) {
  if (this.gaEvent(t), "zoom" == t) {
    $(".image_render_full").addClass(this.current.view), $(".image_render_full .layers").html("");var e = { width: this.viewport_zoom[this.current.view].w, height: this.viewport_zoom[this.current.view].h, "margin-left": -this.viewport_zoom[this.current.view].w / 2 };return "man_shirt" == this.product_type && "folded" != this.current.view && (e["margin-top"] = -this.viewport_zoom[this.current.view].h / 5), "man_pants" == this.product_type && "front" == this.current.view && (e["margin-top"] = -this.viewport_zoom[this.current.view].h / 4), $(".image_render_full .viewport").css(e), $(".image_render_full").addClass("active"), this.renderDraw("BIG"), !1;
  }if (this.closeSeersuckerWarning(), this.closeInitialsImage(), $(".image_render_full").removeClass(this.current.view), $(".image_render_full").removeClass("active"), "fabric" != t && $("#personalize_fabrics_info_popup").removeClass("active"), "fabric" != t && $("#personalize_fabrics_split").removeClass("active"), "man_jacket" != this.current.config._active_block && "man_suit2" == this.product_type && (this.current.config._active_block = "man_jacket", this.renderDraw()), "secondari" == this.position_render && this.desactivePositionRenderSecondari(), "fabric" == t && this.fabric_new && (this.scrolltoFabric(".fabric_list"), this.fabric_new = !0), t || (t = "config"), this.step != t) {
    if ("fabric" == t || "fabric_pants" == t || "fabric_skirt" == t ? ($(".image_render", this.container).addClass("fabric_step"), $(".preview_fabric").addClass("fabric_step")) : ($(".image_render", this.container).removeClass("fabric_step"), $(".preview_fabric").removeClass("fabric_step")), "fabric_pants" == t || "fabric_skirt" == t) {
      this.multi_fabric = t.replace("fabric_", "man_"), $("#fabric .fabric_box .price.split").removeClass("visible"), $("#fabric .fabric_box .price.split." + this.multi_fabric).addClass("visible"), $("#fabric .fabric_list .fabric_box").removeClass("checked");r = $('input[name="fabric[' + this.multi_fabric + ']"]').val();$('#fabric .fabric_list .fabric_box div[rel="' + r + '"]').parent().addClass("checked");
    }if ("fabric" == t && this.multi_fabric) {
      this.multi_fabric = "man_jacket", $("#fabric .fabric_list .fabric_box").removeClass("checked");var r = $('input[name="fabric[' + this.multi_fabric + ']"]').val();$('#fabric .fabric_list .fabric_box div[rel="' + r + '"]').parent().addClass("checked");
    }this.trigger("changeStep", [t]), "fabric" != t || tablet_device || $(".fabric_list").perfectScrollbar("update"), "extra" != t && "fabric" != t || this.remarketing(t), this.resize_render_viewport(this.current.view, !1, !1);
  }
}, Garment.prototype.remarketing = function (t, e) {
  if (void 0 === window.remarketing || !window.remarketing) return !1;var r = this,
      i = document.location.pathname.replace("personalize/", "remarketing/");if ("extra" == t) {
    e = $.extend({ action: "getSimilarID", product_type: this.product_type }, this.current);$.getJSON(i, e, function (t) {
      !t.error && t.id && dataLayer.push({ event: "productView", eventSource: "personalize_extras", product_type: r.product_type, product_id: t.id });
    });
  } else if ("fabric_filter" == t || "fabric" == t) {
    var e = $.extend({ action: "getSimilarsID", product_type: this.product_type }, e);$.getJSON(i, e, function (t) {
      !t.error && t.ids && dataLayer.push({ event: "productsView", eventSource: "personalize_filter", product_type: r.product_type, product_ids: t.ids });
    });
  }
}, Garment.prototype.bind = function (t, e) {
  void 0 === this._events[t] && (this._events[t] = []), this._events[t].push(e);
}, Garment.prototype.trigger = function (t, e) {
  if (void 0 !== this._events[t]) for (var r in this._events[t]) this._events[t][r].apply(this, e);
}, Garment.prototype.unbind = function (t, e) {
  if (void 0 !== this._events[t]) {
    var r = this._events[t].indexOf(e);r > -1 && this._events[t].splice(r, 1);
  }
}, Garment.prototype.parse_query_string = function (t, e) {
  if (e) {
    e = e.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");var r = new RegExp("[\\?&]" + e + "=([^&#]*)").exec(t);return null == r ? "" : decodeURIComponent(r[1].replace(/\+/g, " "));
  }var i,
      a = /\+/g,
      o = /([^&=]+)=?([^&]*)/g,
      n = function (t) {
    return decodeURIComponent(t.replace(a, " "));
  },
      c = t.replace(/^\?/, "");for (urlParams = {}; i = o.exec(c);) urlParams[n(i[1])] = n(i[2]);return urlParams;
}, Garment.prototype.scrolltoFabric = function (t) {
  setTimeout(function () {
    var e = 0,
        r = $(t + " .fabric_box.checked");r.length && (e = r.offset().top - 200), $(t).animate({ scrollTop: e }, 500);
  }, 600);
}, Garment.prototype.initGarment = function () {
  this.initCommon(), this.formInit(), this.initConfigure(), this.initFabric(), this.initExtras(), this.updatePrice();i = this;if (fabricPreview.init(!0), id_shop_order_detail || i.initFabricOutOfStock(), filter_fabric) for (var t in filter_fabric) for (var e in filter_fabric[t]) {
    var r = { filter: filter_fabric[t][e] };this.applyFilterFabric(r, !1, !0);
  }"undefined" != typeof Blazy ? this.bLazy_fabric = new Blazy({ container: ".fabric_container_lazy", success: function (t) {
      t.parentNode.className = t.parentNode.className.replace(/\loading\b/, "");
    }, error: function (t, e) {
      dataLayer.push({ event: "blazy_error" });
    } }) : this.bLazy_fabric = !1, this.bLazy_fabric && this.bLazy_fabric.revalidate(), 8 == function () {
    var t = navigator.userAgent.toLowerCase();return -1 != t.indexOf("msie") && parseInt(t.split("msie")[1]);
  }() && $(window).resize(function () {
    var t = $(window).height(),
        e = .54 * t,
        r = e / 2;$(".image_render .layers").css("width", e + "px"), $(".image_render .layers").css("margin-left", "-" + r + "px"), $(".image_render .loading").css("width", e + "px"), $(".image_render .loading").css("margin-left", "-" + r + "px");var i = .174 * t;$(".image_render .layers IMG.shirt").css("top", i + "px");var a = .55 * t;$(".image_render .layers IMG.pant").css("top", a + "px");var o = $(window).width();if (o > 1080) $(".image_render_full .layers IMG.shirt").css("top", "347px"), $(".image_render_full .layers IMG.pant").css("top", "1100px");else {
      var n = .315 * o;$(".image_render_full .layers IMG.shirt").css("top", n + "px");var c = 1 * o;$(".image_render_full .layers IMG.pant").css("top", c + "px");
    }
  }), tablet_device ? ($(".container_options").addClass("overflow_scroll"), $(".box_opt").addClass("overflow_scroll"), $("#fabric .fabric_list").addClass("overflow_scroll"), $(".filters .menu_filter .content").addClass("overflow_scroll")) : ($(".container_options").perfectScrollbar({ suppressScrollX: !0 }), $(".box_opt").perfectScrollbar(), $("#fabric .fabric_list").perfectScrollbar({ suppressScrollX: !0 }), $(".filters .menu_filter .content").perfectScrollbar({ suppressScrollX: !0 }), $("#personalize_fabrics_info_popup").perfectScrollbar({ suppressScrollX: !0 }));var i = this;$(window).resize(function () {
    i.resize_render_viewport(i.current.view);
  }), $(".option_title").each(function () {
    var t = $(this).attr("data-shorttext");t && t.toLowerCase().indexOf("_tip") >= 0 && (t = $(this).html()), $(this).parents("span").append('<div class="shorttext">' + t + "</div>");
  }), "undefined" != typeof winter_blazer_landing && "yes" == winter_blazer_landing && i.showQuilterWaistcoatAlert();var a = !1;if (first_fabric_selector && (a = $("#fabric .fabric_list .fabric_box.active").first().find(".image:eq(0)").attr("rel")), id_cart_product || id_shop_order_detail || default_alterate) a && (product.fabric.id_t4l_fabric = a, product.fabric[this.product_type] = a), this.updateConfiguratedProduct();else {
    if (a) if (void 0 !== this.multi_fabric_options && this.multi_fabric_options.length) for (var o in this.multi_fabric_options) this.current.fabric[this.multi_fabric_options[o]] = a;else this.current.fabric[this.product_type] = a;this.current.fabric, this.updateConfiguratedProduct("default");
  }this.actived_coat_seters = !0, coat_generic_mode || $("#coat_model").hide(), $(".container_options").perfectScrollbar("update");var n = parse_query_string(document.location.search, "view");n && this.changeView(n, !1);
}, Garment.prototype.initFabricOutOfStock = function () {
  var t = this,
      e = !1;if (out_of_stock) {
    var r = !1;if (e = {}, void 0 !== out_of_stock.fabric && (e.fabric = out_of_stock.fabric, r || (t.showFabricOutOfStock("fabric", out_of_stock.fabric, "fabric"), r = !0)), void 0 !== out_of_stock.extras) {
      if (e.extras = {}, void 0 !== out_of_stock.extras.lining) {
        e.extras.lining = {};for (var i in out_of_stock.extras.lining) e.extras.lining[i] = out_of_stock.extras.lining[i], r || (t.showFabricOutOfStock("lining", out_of_stock.extras.lining[i], i), r = !0);
      }if (void 0 !== out_of_stock.extras.fabric) {
        e.extras.fabric = {};for (var a in out_of_stock.extras.fabric) e.extras.fabric[a] = out_of_stock.extras.fabric[a], r || (t.showFabricOutOfStock("fabric", out_of_stock.extras.fabric[a], a), r = !0);
      }
    }
  }t.out_of_stock_control = e, $(".popup_warning_fabric_out").click(function () {
    t.hideFabricOutOfStock();
  });
}, Garment.prototype.showFabricOutOfStock = function (t, e, r) {
  var i = this;"fabric" != r && $("#extra li." + r + " a", i.container).click(), $(".step_next").removeClass("disabled");var a = window.cdn_host,
      o = "";"lining" == t ? o = "default" : "pants" != (o = (o = (o = i.product_type).replace("woman_", "")).replace("man_", "")) && "skirt" != o && "jacket" != o && "suit2" != o && "waistcoat" != o && "smoking" != o && "frac" != o && "chaque" != o && "levita" != o && "suitpants" != o && "suitskirt" != o || (o = "suit");var n = a + "dimg/" + t + "/" + o + "/" + e + "_big.jpg";$(".popup_warning_fabric_out .image img").attr("src", n), $(".popup_warning_fabric_out").removeClass("fabric_out").removeClass("lining_out").addClass(t + "_out").show();
}, Garment.prototype.allFabricsAndLiningsOk = function () {
  var t = this;if (void 0 !== t.out_of_stock_control.fabric) return t.showFabricOutOfStock("fabric", t.out_of_stock_control.fabric, "fabric"), !1;if (void 0 !== t.out_of_stock_control.extras) {
    if (void 0 !== t.out_of_stock_control.extras.lining) for (var e in t.out_of_stock_control.extras.lining) if ("ok" !== t.out_of_stock_control.extras.lining[e]) return t.showFabricOutOfStock("lining", t.out_of_stock_control.extras.lining[e], e), !1;if (void 0 !== t.out_of_stock_control.extras.fabric) for (var r in t.out_of_stock_control.extras.fabric) if ("ok" !== t.out_of_stock_control.extras.fabric[r]) return t.showFabricOutOfStock("fabric", t.out_of_stock_control.extras.fabric[r], r), !1;
  }return !0;
}, Garment.prototype.applyFilterFabric = function (t, e, r) {
  var i = this;void 0 === e && (hide_fabric = !1), void 0 === r && (r = !0), $(".filters.fabric_step").find('.sub_menu_filter .filter li[rel="' + t.filter + '"]').first().addClass("active").parent().find("li.all").removeClass("active"), applied_filters = [];var a = $("#fabric"),
      o = $("#fabric .fabric_list .fabric_box"),
      n = $("#fabric .active_filters"),
      c = (n.find("ul"), $(".filters.fabric_step")),
      s = c.find(".menu_filter"),
      l = a.find(".fabric_options"),
      _ = a.find(".fabric_options_fix"),
      u = a.find(".fabric_list"),
      p = !1;$("li", n).remove(), $(".filters.fabric_step").find(".item_menu_filter").each(function (t) {
    var e = $(this),
        i = e.attr("rel");applied_filters[i] = [], e.find(".filter li.active").not(".all").each(function () {
      p = !0;var t = $(this).attr("rel"),
          e = $(this).find("a").html();if (applied_filters[i].push(t), r) {
        var a = $(".left_filters");$("li", a).removeClass("active"), $('li[rel="filter"]').addClass("active"), n.append("<li rel_type=" + i + " rel=" + t + "><a href='javascript;:'><div class='cruz'>k</div><div class='title'>" + e + "</div></a></li>");
      }
    }), applied_filters[i].length <= 0 && delete applied_filters[i];
  });$(".fabric_options_fix").height();var d = [];s.find(".item_menu_filter").each(function () {
    d.push($(this).attr("rel"));
  }), p && (n.show(), i.update_fabric_list(o, d, applied_filters, $("#fabric"))), e && ($("#fabric").addClass("active"), c.removeClass("active"), i.resize_height_fabric_options_fix(l, _, u), $("#fabric").removeClass("active"));
}, Garment.prototype.formInit = function () {
  var t = this;$(this.container).submit(function () {
    return t.formSubmit();
  });
}, Garment.prototype.formSubmit = function () {
  this.allow_redirect = !0;var t = this;if (!id_shop_order_detail && !t.allFabricsAndLiningsOk()) return !1;var e = "1";id_cart_product && (e = id_cart_product), $(this.container).append('<input type="hidden" name="next" value="' + e + '" />');var r = !1;return id_crossell_feed_product && (r = id_crossell_feed_product), $(this.container).append('<input type="hidden" name="id_crossell_feed_product" value="' + r + '" />'), !0;
}, Garment.prototype.isSpecialView = function (t) {
  return "sp" == t.split("_")[0];
}, Garment.prototype.changeView = function (t, e) {
  this.show_force_view_message(!1);var r = this.current.view;this.current.view = t, $(".image_render").removeClass(r), $(".image_render").addClass(t), $(".image_render .views li.active").removeClass("active"), $('.image_render .views li[rel="' + t + '"]').addClass("active"), "folded" == t ? $(".image_render .layers").addClass("folded") : $(".image_render .layers").removeClass("folded"), e || ("man_suit2" != this.product_type && "man_suit3" != this.product_type || (this.changeActiveBlock("man_jacket", !0), this.moveRender("down")), this.renderDraw("STD", r, t), "man_shirt" != this.product_type && "man_polo" != this.product_type || this.renderInitials(), $(window).resize());
}, Garment.prototype.change_style_shirt = function (t) {
  var e = this;e.shirt_style_click = !0, t || (t = "business" == e.current.style ? "casual" : (e.current.style, "business"));var r = $(".image_render .options_render a.style"),
      i = $("span", r),
      a = e.shirt_styles[t];"auto" != t && $(".title", r).hide(), "auto" != t && (e.current.style = t), "auto" != a.view_detail && (e.current.view_detail = a.view_detail), "auto" != a.neck_open && (e.current.neck_open = a.neck_open), "auto" != a.inner_sleeve && (e.current.inner_sleeve = a.inner_sleeve), "auto" != a.icon && i.html(a.icon), "auto" != t && $(".title." + a.title_to_show, r).show(), e.renderDraw();
}, Garment.prototype.change_style_shirt_simple = function (t) {
  var e = this;e.shirt_style_click = !0;var r = e.shirt_styles[t],
      i = $(".image_render .options_render a.style"),
      a = $("span", i);e.current.style = t, "auto" != r.view_detail && (e.current.view_detail = r.view_detail), "auto" != r.neck_open && (e.current.neck_open = r.neck_open), "auto" != r.inner_sleeve && (e.current.inner_sleeve = r.inner_sleeve), "auto" != r.icon && a.html(r.icon), "auto" != r.title_to_show && ("auto" != t && $(".title", i).hide(), $(".title." + r.title_to_show, i).show()), e.renderDraw();
}, Garment.prototype.change_style_pocket_square = function () {
  var t = this;t.current.extras.handkerchief.contrast && ("recto" == t.current.pocket_square ? t.current.pocket_square = "normal" : t.current.pocket_square = "recto", t.renderDraw());
}, Garment.prototype.change_style_quilted_waistcoat = function () {
  var t = this;"abierto" == t.current.quilted_waistcoat ? t.current.quilted_waistcoat = "cerrado" : t.current.quilted_waistcoat = "abierto", t.renderDraw();
}, Garment.prototype.initCommon = function () {
  function t() {
    function t(t, i, a, o, n) {
      return "vw" == a ? e * i / 100 + "px" : "vh" == a ? r * i / 100 + "px" : "vmax" == a ? Math.max(r, e) * i / 100 + "px" : "vmin" == a ? Math.min(r, e) * i / 100 + "px" : "";
    }var e = $(window).width(),
        r = $(window).height();$("img.resize_fix").each(function () {
      var e = this.getAttribute("resize_fix");if (void 0 === e) return !0;this.setAttribute("style", e.replace(/(\d*)(vh|vw|vmax|vmin)/g, t));
    });
  }var e = this,
      r = $(".image_render", e.container);$(".preview_fabric", e.container);this.bind("changeStep", function (t) {
    if ($(".step a.active").removeClass("active"), $(".block.active").removeClass("active"), $(".filters.active").removeClass("active"), $(".container_options ul li a.active").removeClass("active"), $(".container_options.min").removeClass("min"), $(".box_opt.active").removeClass("active"), e.step = t, $(".step ." + e.step).addClass("active"), $("#" + e.step + ".block").addClass("active"), "woman_suitpants" == e.product_type || "woman_suitskirt" == e.product_type || "man_suit" == e.product_type || "man_suit2" == e.product_type) {
      var r = t.replace("fabric_", ""),
          i = e.multi_fabric_options[1].replace("man_", "");e.multi_fabric && r == i && $("#fabric.block").addClass("active");
    }var a = ".fabric_container_lazy";"extra" == t && (a = ".extra_container_lazy"), "undefined" != typeof Blazy ? this.bLazy_fabric = new Blazy({ container: a, success: function (t) {
        t.parentNode.className = t.parentNode.className.replace(/\loading\b/, "");
      }, error: function (t, e) {
        dataLayer.push({ event: "blazy_error" });
      } }) : this.bLazy_fabric = !1, this.bLazy_fabric && this.bLazy_fabric.revalidate();
  }), History.Adapter.bind(window, "statechange", function () {
    var t = History.getState();if (coat_generic_mode) r = "config";else var r = "fabric";var i = ["config", "fabric", "fabric_pants", "extra", "zoom"];-1 != jQuery.inArray(t.data.step, i) && (r = t.data.step), e.stepSwitch(r);
  }), $(".step").on("click", "a", function () {
    var t = $(this).attr("rel");return e.stepSetURL(t), !1;
  }), $("a.step_next").click(function () {
    return !$(this).hasClass("disabled") && ("extra" == e.step ? $(this).addClass("disabled") : "config" == e.step && "man_pants" == e.product_type && $(this).addClass("disabled"), e.stepNext(), !1);
  }), $(window).resize(t), t();var i = this.parse_query_string(window.location.search);i.step || (coat_generic_mode ? i.step = "config" : i.step = "fabric"), History.replaceState(i, window.title), $(window).trigger("statechange");for (var a in extra_prices) $('#extra .box_opts .box_opt[id="' + a + '"]').attr("data-price", extra_prices[a]);var o = [];$("#config .container_options span", e.container).each(function () {
    var t = this.getAttribute("href");if (!t) return !0;t = t.replace(/^[^#]*#/, "");var e = $(this).attr("rel");e && (e = e.split(","), o[t] = e);
  }), e.views.config = o;var n = [];$("#extra .container_options span", e.container).each(function () {
    var t = this.getAttribute("href");if (!t) return !0;t = t.replace(/^[^#]*#/, "");var e = $(this).attr("rel");e && (e = e.split(","), n[t] = e);
  }), e.views.extra = n, $(".views").on("click", "li", function () {
    var t = $(this).attr("rel");return $(this).parent().find("li").removeClass("active"), $(this).addClass("active"), e.changeView(t), !1;
  }), $(".bottom_click").click(function () {
    "shirt_outside" == e.current.style ? e.change_style_shirt_simple("shirt_inside") : e.change_style_shirt_simple("shirt_outside");
  }), $(".neck_click").click(function () {
    "neck_open" == e.current.style ? e.change_style_shirt_simple("neck_close") : e.change_style_shirt_simple("neck_open");
  }), $(".cuff_click_left").click(function () {
    1 == e.current.inner_sleeve ? e.change_style_shirt_simple("cuff_close") : e.change_style_shirt_simple("cuff_open");
  }), $(".cuff_click_right").click(function () {
    1 == e.current.inner_sleeve ? e.change_style_shirt_simple("cuff_close") : e.change_style_shirt_simple("cuff_open");
  }), $(".pocket_square").click(function () {
    e.change_style_pocket_square();
  }), $(".quilted_waistcoat_click").click(function () {
    e.change_style_quilted_waistcoat();
  }), $(".options_render", r).on("click", "a.fabric", function () {
    this.fabric_preview_open = !0;var t = e.product_type;t.replace("man_", "");"woman_suitpants" != e.product_type && "woman_suitskirt" != e.product_type || (t = "woman_jacket"), "man_suit" != e.product_type && "man_suit2" != e.product_type || (t = "man_jacket"), "man_smoking" != e.product_type && "man_levita" != e.product_type && "man_frac" != e.product_type && "man_chaque" != e.product_type || (t = "man_jacket");var r = e.current.fabric[t],
        i = $('#fabric .image[rel="' + r + '"] span.thumb_preview');return e.showPreviewFabric(i, "fabric"), !1;
  }), $(".options_render", r).on("click", "a.style", function () {
    return e.change_style_shirt(), !1;
  }), $(".options_render", r).on("click", "a.plus", function () {
    return "less" == e.zoom ? (e.current_product = e.multi_fabric_options[0], e.resize_render_viewport(e.current.view, !1, !1), e.zoom = "normal", $("span", "a.less").show()) : e.stepSetURL("zoom"), !1;
  }), $(".options_render", r).on("click", "a.without_jacket", function () {
    return e.changeActiveBlock(!1, !1), !1;
  }), $(".options_render", r).on("click", "a.movement", function () {
    return e.moveRender(), !1;
  }), $(".options_render", r).on("click", "a.less", function () {
    e.current_product;return e.current_product = "full", e.resize_render_viewport(e.current.view, !1, !0), e.zoom = "less", $("span", $(this)).hide(), !1;
  }), $(".image_render_full").click(function () {
    History.back();
  }), null != show_prices_customer && (show_prices_customer.hasOwnProperty("show_customer_prices") || ($(".diamond").hide(), $(".price").hide(), $(".options_list .tags").hide())), e.initThumbFabric(), "man_suit2" != e.product_type && "man_suit" != e.product_type || $(".extras.title_combined").hide();try {
    e.initShareAndFav();
  } catch (t) {}
}, Garment.prototype.initShareAndFav = function () {
  function t(t) {
    var t = parseInt(t);if ($('.add_to_cart[data-id="' + t + '"]', u).addClass("hide"), $('.go_to_cart_loader[data-id="' + t + '"]', u).addClass("visible"), t) $.post(window.location + "?ajax=1", { id_product: t, save_cart_by_feed: !0 }, function (e) {
      e && ($('.go_to_cart_loader[data-id="' + t + '"]', u).removeClass("visible"), $('.go_to_cart[data-id="' + t + '"]', u).addClass("visible"));
    });else {
      n(), $(l.container).append('<input type="hidden" name="next_save_cart" value="1" class="input_auto_delete"/>');var e = $("form").serialize();$.ajax({ type: "POST", url: window.location + "?ajax=1", data: e, success: function (t) {
          dataLayer.push({ event: "analyticsEvent", eventCategory: "personalize", eventAction: "add_to_cart", eventLabel: "mobile" });
        } });
    }
  }function e(t) {
    var t = parseInt(t);if (h) r = h.email;else if (customer) r = window.getStoredCustomer().email;else {
      var e = window.getStoredCustomerTemp();if (e) var r = e.email;
    }t && r && $.post(window.location + "?ajax=1", { id_product: t, email: r, remove_product_wish_list: !0 }, function (t) {
      if (t) {
        var e = l.cont_favorites + 1,
            r = "product_" + e;e > 2 && (r = "product_3_more"), u.removeClass(r), r = "product_" + l.cont_favorites, l.cont_favorites > 2 && (r = "product_3_more"), u.addClass(r), $("#favourite_product_popup .products").perfectScrollbar("update");
      }
    });
  }function r() {
    d.addClass("visible"), u.addClass("visible"), $(".products", u).show();
  }function i(t) {
    (t = parseInt(t)) && $.post(window.location + "?ajax=1", { id_product: t, share_favorite_product: !0 }, function (t) {
      if (t) {
        if (p.addClass("show"), d.addClass("visible"), u.removeClass("visible"), $(".loading", "#share_popup").addClass("hide"), "ko" == t) {
          var e = $(tmpl("share_product_error_tmpl", []));return void $(".flex", "#share_popup").html(e);
        }c((t = JSON.parse(t)).url_product, t.img_src, t.product_title);
      }
    });
  }function a(t) {
    var e = $("#favourite_product_popup");if (l.customer_active) {
      var r = window.getStoredCustomer();if (r) a = r.email;else {
        var i = window.getStoredCustomerTemp();if (i) var a = i.email;
      }
    }if (!a) {
      if (null == (a = $('.content input[name="email"]', e).val()).match(/[\S]+[\@][\S]+[\.][\S]+/i)) return $(".email_error_format").show(), !1;$(".email_error_format").hide();
    }u.removeClass("visible"), d.removeClass("visible"), $(".favourite").addClass("hide"), n(), $(l.container).append('<input type="hidden" name="add_favourite_product" value="1"  class="input_auto_delete"/>'), $("form").append('<input type="hidden" name="email" value="' + a + '"   class="input_auto_delete"/>');var o = $("form").serialize();setTimeout(function () {
      $("#add_product_popup_message").addClass("visible");
    }, 1e3), setTimeout(function () {
      $("#add_product_popup_message").removeClass("visible");
    }, 4e3), void 0 === l.cont_favorites && (l.cont_favorites = 0), l.cont_favorites++;var c = "product_" + l.cont_favorites;return l.cont_favorites > 2 && (c = "product_3_more"), u.addClass(c), l.customer_active || (l.cont_favorites = 1, $("#favorites span").html(l.cont_favorites), $(".fav_box_header").addClass("visible")), $.ajax({ type: "POST", url: window.location + "?ajax=1", data: o, success: function (e) {
        if (e) {
          var o = (e = JSON.parse(e)).id_product;if ($(u).addClass("customer_active"), $(".your_wish_list", u).hide(), $(".your_wish_list.has-customer", u).show(), l.customer_active = !0, l.product_saved = !0, u.addClass("customer_active"), $(".your_wish_list", u).hide(), $(".your_wish_list.has-customer", u).show(), !r && !i) {
            var n = { email: a };n = JSON.stringify(n), window.localStorage.setItem("customer_temp", n);
          }if ($("#favorites span").html(l.cont_favorites), $("#favorites").addClass("visible"), o) {
            $(".product", u).first().addClass("saved"), $(".product", u).first().find(".add_to_cart").attr("data-id", o), $(".product", u).first().find(".remove").attr("data-id", o), $(".product", u).first().find(".share").attr("data-id", o), $(".product", u).first().find(".go_to_cart").attr("data-id", o), $(".product", u).first().find(".go_to_cart_loader").attr("data-id", o);var c = $(".product", u).first().find(".wrap_image").attr("href");c = c.replace("#id_product#", o), $(".product", u).first().find(".wrap_image").attr("href", c);var s = e.title;s && $(".product", u).first().find(".title").html(s);
          }t && "function" == typeof t && t();
        }
      } }), dataLayer.push({ event: "analyticsEvent", eventCategory: "personalize", eventAction: "add_favorite", eventLabel: "mobile" }), !0;
  }function o() {
    d.addClass("visible"), u.addClass("visible"), u.find(".loading").addClass("active"), l.customer_active || $(".product", u).remove();var t = $(".action_column .price").html().match(/\d+/g)[0],
        e = { title: $(".title_compo .title").html(), price: formatPrice(t) },
        r = $(tmpl("favourite_product_tmpl", e));$(".products", u).prepend(r), 1 !== $(".products .product", u).length || l.customer_active ? $(".products", u).show() : $(".products", u).hide();var i = l.current.view;l.current.view = "folded";var a = "folded";l.views.indexOf("folded") > 0 ? l.current.view = "folded" : l.views.indexOf("without_model") > 0 ? (l.current.view = "without_model", a = "without_model") : (l.current.view = "front", a = "front"), l.renderDraw(!1, !1, !1, "favourite_product"), l.current.view = i;var o = 135 / l.viewport[a].base.ratio;l.complex && (o += 10), $(".image", u).css("width", o), $(".image", u).css("max-width", "130px");
  }function n() {
    $(".input_auto_delete", l.container).remove();
  }function c(t, e, r) {
    var i = { link: encodeURIComponent(t), raw_link: t, img: encodeURIComponent(e), title: encodeURIComponent(r) },
        a = $(tmpl("share_product_tmpl", i));$(".flex", "#share_popup").html(a), void 0 !== navigator.share && $(".social.native", "#share_popup").removeClass("hide");
  }function s() {
    if (p.hasClass("show")) return d.removeClass("visible"), void p.removeClass("show");if (null != l.lastSharedUrl) return p.addClass("show"), void d.addClass("visible");$(".loading", "#share_popup").removeClass("hide"), $(".container", "#share_popup").addClass("hide"), p.addClass("show"), d.addClass("visible"), n(), $(l.container).append('<input type="hidden" name="next_share_product" value="1" class="input_auto_delete"/>');var t = $("form").serialize();$.ajax({ type: "POST", url: window.location + "?ajax=1", data: t, success: function (t) {
        if (t) {
          if ($(".container", "#share_popup").removeClass("hide"), $(".loading", "#share_popup").addClass("hide"), "error" == t) {
            var e = $(tmpl("share_product_error_tmpl", []));return void $(".flex", "#share_popup").html(e);
          }t = JSON.parse(t), l.lastSharedUrl = t.url_product, c(t.url_product, t.img_src, t.product_title), dataLayer.push({ event: "share_product", eventCategory: "share_product", eventAction: "share", eventLabel: "desktop" });
        }
      } });
  }var l = this,
      _ = $("body"),
      u = ($("#save_product_popup"), $("#favourite_product_popup")),
      p = $("#share_popup"),
      d = $("#disable_popup");if ($("#favourite_product_popup .products").perfectScrollbar(), _.on("click", ".social a", p, function (t) {
    return !(!$(this).hasClass("email") && !$(this).hasClass("copylink")) || (t.preventDefault(), window.open($(this).attr("href"), "ShareWindow", "height=450, width=550, top=" + ($(window).height() / 2 - 275) + ", left=" + ($(window).width() / 2 - 225) + ", toolbar=0, location=0, menubar=0, directories=0, scrollbars=0"), !1);
  }), customer || customer_temp) {
    var f = !1,
        h = !1;customer ? (h = window.getStoredCustomer(), f = !0) : customer_temp && (h = window.getStoredCustomerTemp()), h.email && $.post(window.location + "?ajax=1", { email: h.email, get_wish_list: !0, product_type: l.product_type, logged: f }, function (t) {
      if (t) {
        t = JSON.parse(t);var e = $("#favourite_product_popup"),
            r = t.length;if (r > 0) {
          l.cont_favorites = r, $("#favorites span").html(r), $(".fav_box_header").addClass("visible");var i = "product_" + l.cont_favorites;l.cont_favorites > 2 && (i = "product_3_more"), e.addClass(i);for (var a in t) {
            var o = { title: t[a].product_title, price: formatPrice(t[a].price) },
                n = $(tmpl("favourite_product_tmpl", o));$(".products", e).prepend(n);var c = t[a].img_src,
                s = $('<img src="' + c + '">');$("#favourite_product_popup .image").first().html(s);var _ = "folded";_ = l.views.indexOf("without_model") > 0 ? "without_model" : l.views.indexOf("folded") > 0 ? "folded" : "front";var u = 135 / l.viewport[_].base.ratio;l.complex && (u += 10), $(".image", e).css("width", u);var p = t[a].id_product;$(".product", e).first().find(".add_to_cart").attr("data-id", p), $(".product", e).first().find(".remove").attr("data-id", p), $(".product", e).first().find(".share").attr("data-id", p), $(".product", e).first().find(".go_to_cart").attr("data-id", p), $(".product", e).first().find(".go_to_cart_loader").attr("data-id", p);var d = $(".product", e).first().find(".wrap_image").attr("href");d = d.replace("#id_product#", p), $(".product", e).first().find(".wrap_image").attr("href", d);
          }$(".product", "#favourite_product_popup").addClass("saved");
        }
      }
    });
  }u.on("click", ".add_to_cart", function () {
    var e = $(this).attr("data-id");e && t(e);
  }), u.on("click", ".remove", function () {
    var t = $(this).attr("data-id"),
        r = $(this).attr("data-text");confirm(r) && "null" != t && (e(t), $(this).parents(".product").remove(), l.cont_favorites--, $("#favorites span").html(l.cont_favorites), 0 == $(".product", u).length && (u.removeClass("visible"), d.removeClass("visible")));
  }), u.on("click", ".share", function () {
    var t = $(this).attr("data-id");"null" != t && i(t);
  }), (customer || customer_temp) && ($(u).addClass("customer_active"), $(".your_wish_list", u).hide(), $(".your_wish_list.has-customer", u).show(), l.customer_active = !0), _.on("click", ".favourite", function () {
    if ($(this).hasClass("hide")) return !1;l.customer_active && a(), o();
  }), _.on("click", ".shareButton", function () {
    s();
  }), _.on("click", "#share_popup  .close", function () {
    s();
  }), _.on("click", ".social > a", "#share_popup", function (t) {
    var e = this,
        r = $(e).attr("class");dataLayer.push({ event: "share_product", eventCategory: "share_product", eventAction: "" + r, eventLabel: "desktop" });
  }), d.click(function () {
    u.removeClass("visible"), d.removeClass("visible"), p.removeClass("show");
  }), _.on("click", "#favourite_product_popup .close", function () {
    u.removeClass("visible"), d.removeClass("visible");
  }), _.on("click", "#favourite_product_popup .save", function () {
    a(function () {
      $("#favorites").trigger("click");
    });
  }), $("#favourite_product_popup input").keydown(function (t) {
    13 === t.which && $(".save", "#favourite_product_popup").click();
  }), $("body").on("click", "#favorites", function (t) {
    t.preventDefault(), t.stopPropagation(), r();
  }), _.on("click", ".copylink", function (t) {
    t.preventDefault(), $(".social-link input").get(0).select(), document.execCommand("copy"), $(".copylinkok").fadeIn(), setTimeout(function () {
      $(".copylinkok").hide();
    }, 3e3);
  });
}, Garment.prototype.moveRender = function (t) {
  var e = this;"up" == t ? ($("li.movement a").addClass("moved"), e.current_product = e.multi_fabric_options[1], e.resize_render_viewport(e.current.view, !1, !1)) : "down" == t ? ($("li.movement a").removeClass("moved"), e.current_product = e.multi_fabric_options[0], e.resize_render_viewport(e.current.view, !1, !1)) : ($("li.movement a").toggleClass("moved"), e.current_product == e.multi_fabric_options[1] ? e.current_product = e.multi_fabric_options[0] : e.current_product = e.multi_fabric_options[1], e.resize_render_viewport(e.current.view, !1, !1));
}, Garment.prototype.hideOptionBox = function (t, e) {
  var r = this;$("#" + t, e).removeClass("active"), $("a." + t, e).removeClass("active"), "shirt_threads" == t && r.trigger("hideOptionBox", []);
}, Garment.prototype.show_force_view_message = function (t) {
  t ? $("#show_force_view_message").addClass("move") : $("#show_force_view_message").removeClass("move");
}, Garment.prototype.changeActiveBlock = function (t, e) {
  return void 0 === e && (e = !1), "undefined" == typeof change_icon && (change_icon = !0), ("man_suit2" == this.product_type || "man_suit3" == this.product_type || "man_levita" == this.product_type || "man_frac" == this.product_type || "man_chaque" == this.product_type) && "man_pants" == t && "without_model" == this.current.view || (e && (t == this.multi_fabric_options[0] || "man_waistcoat" == t ? $(".options_render a.movement").removeClass("moved") : $(".options_render a.movement").addClass("moved"), this.current_product = "man_jacket_only" == t ? "man_jacket" : t, this.resize_render_viewport(this.current.view, !1, !1)), t || (t = "man_jacket" == this.current.config._active_block || "man_smoking_jacket" == this.current.config._active_block || "man_smoking" == this.current.config._active_block || "man_levita_jacket" == this.current.config._active_block || "man_levita" == this.current.config._active_block || "man_chaque_jacket" == this.current.config._active_block || "man_chaque" == this.current.config._active_block || "man_frac_jacket" == this.current.config._active_block || "man_frac" == this.current.config._active_block ? "1" == this.current.config.waistcoat ? this.multi_fabric_options[2] : this.multi_fabric_options[1] : this.multi_fabric_options[0]), this.current.config._active_block != t && ("man_jacket" != t ? $(".options_render li.without_jacket", this.container).addClass("active") : $(".options_render li.without_jacket", this.container).removeClass("active"), this.current.config._active_block = t, void this.renderDraw()));
}, Garment.prototype.convetToSuit3 = function (t, e) {
  var r = this;if (t = parseFloat(t), $('input[name="waistcoat"]').val(1), r.price_detail.waistcoat = t, r.updatePrice(), r.real_product_type = "man_suit3", $("#fabric .fabric_list").addClass("three"), $("#fabric .fabric_box .price.split").removeClass("visible"), $("#fabric .fabric_box .price.split.man_suit3").addClass("visible"), $(".extras.title_combined").show(), $('.multifabric_selectors label[rel="man_waistcoat"]').show(), r.fabricPriceActive(), e) {
    var i = r.current.fabric.man_jacket,
        a = $('#fabric .image[rel="' + i + '"] span').attr("category"),
        o = $('#fabric .fabric_box div[rel="' + i + '"]').parent();r.updateFabricPrices(!1, a, !0, o);
  }
}, Garment.prototype.convetToSuit2 = function () {
  var t = this;$('input[name="waistcoat"]').val(0), t.price_detail.waistcoat = 0, t.updatePrice(), t.real_product_type = "man_suit2", $(".extras.title_combined").hide(), $("#fabric .fabric_list").removeClass("three"), $("#fabric .fabric_box .price.split").removeClass("visible"), $("#fabric .fabric_box .price.split.man_suit2").addClass("visible"), $('.multifabric_selectors label[rel="man_waistcoat"]').hide();var e = t.current.fabric.man_jacket,
      r = $('#fabric .image[rel="' + e + '"] span').attr("category");t.current.extras.waistcoat_button_holes_threads = [], t.current.extras.waistcoat_initials = [], t.current.extras.waistcoat_lining = [], t.extraSetPrice("waistcoat_button_holes_threads", 0), t.extraSetPrice("waistcoat_initials", 0), t.extraSetPrice("waistcoat_lining", 0), t.fabricPriceActive();var i = $('#fabric .fabric_box div[rel="' + e + '"]').parent();t.updateFabricPrices(!1, r, !0, i);
}, Garment.prototype.convetToCeremonial3 = function (t, e) {
  var r = this;if (t = parseFloat(t), $('input[name="waistcoat"]').val(1), r.price_detail.waistcoat = t, r.updatePrice(), r.real_product_type = "man_ceremonial3", $("#fabric .fabric_list").addClass("three"), $("#fabric .fabric_box .price.split").removeClass("visible"), $("#fabric .fabric_box .price.split.man_suit3").addClass("visible"), $('.multifabric_selectors label[rel="man_waistcoat"]').show(), $(".extras.title_combined").show(), r.fabricPriceActive(), e) {
    var i = r.current.fabric.man_jacket,
        a = $('#fabric .image[rel="' + i + '"] span').attr("category"),
        o = $('#fabric .fabric_box div[rel="' + i + '"]').parent();r.updateFabricPrices(!1, a, !0, o);
  }
}, Garment.prototype.convetToCeremonial2 = function () {
  var t = this;$('input[name="waistcoat"]').val(0), t.price_detail.waistcoat = 0, t.updatePrice(), t.real_product_type = "man_ceremonial", $(".extras.title_combined").hide(), $("#fabric .fabric_list").removeClass("three"), $("#fabric .fabric_box .price.split").removeClass("visible"), $("#fabric .fabric_box .price.split.man_suit2").addClass("visible"), $('.multifabric_selectors label[rel="man_waistcoat"]').hide();var e = t.current.fabric.man_jacket,
      r = $('#fabric .image[rel="' + e + '"] span').attr("category");t.current.extras.waistcoat_button_holes_threads = [], t.current.extras.waistcoat_initials = [], t.current.extras.waistcoat_lining = [], t.extraSetPrice("waistcoat_button_holes_threads", 0), t.extraSetPrice("waistcoat_initials", 0), t.extraSetPrice("waistcoat_lining", 0), t.fabricPriceActive();var i = $('#fabric .fabric_box div[rel="' + e + '"]').parent();t.updateFabricPrices(!1, r, !0, i);
}, Garment.prototype.change_icon_trigger = function (t, e) {
  var r = t.attr("rel-icon"),
      i = t.attr("option_name"),
      a = $("." + i + " .option_icon", e).get(0);void 0 !== a && (a.className = a.className.replace(/icon_[^\s]+/, r));
}, Garment.prototype.check_auto_all_select = function (t) {
  0 == t.find("li.active").not(".all").length && t.find("li.all").addClass("active");
}, Garment.prototype.update_fabric_list = function (t, e, r, i) {
  a = !1;if (r.simple_composition) {
    for (o = r.simple_composition.length - 1; o >= 0; o--) {
      if ("filcoupe" == r.simple_composition[o]) var a = !0;"woolmark" == r.simple_composition[o] && (r.c = ["100woolmerino"], e.push("c"), r.simple_composition.splice(o, 1)), "stretchy" == r.simple_composition[o] && (r.st = ["2", "1"], e.push("st"), r.simple_composition.splice(o, 1));
    }r.simple_composition.length < 1 && delete r.simple_composition;
  }if (r.characteristics) {
    for (o = r.characteristics.length - 1; o >= 0; o--) "2ply" == r.characteristics[o] && (void 0 === r.tags && (r.tags = []), r.tags.push("yarn"), e.push("tags"), r.characteristics.splice(o, 1)), "wrinkle" == r.characteristics[o] && (void 0 === r.tags && (r.tags = []), r.tags.push("wrinkle"), e.push("tags"), r.characteristics.splice(o, 1)), "easy" == r.characteristics[o] && (void 0 === r.tags && (r.tags = []), r.tags.push("easy"), e.push("tags"), r.characteristics.splice(o, 1)), "oeko" == r.characteristics[o] && (void 0 === r.tags && (r.tags = []), r.tags.push("oeko"), e.push("tags"), r.characteristics.splice(o, 1)), "stretchy" == r.characteristics[o] && (void 0 === r.tags && (r.tags = []), r.tags.push("stretchy"), e.push("tags"), r.characteristics.splice(o, 1));r.characteristics.length < 1 && delete r.characteristics;
  }if (r.category_group) {
    for (var o = r.category_group.length - 1; o >= 0; o--) {
      var n = r.category_group[o];switch (n) {case "new":case "best_seller":case "promo":
          r[n] = [1], e.push(n), r.category_group.splice(o, 1);}
    }r.category_group.length < 1 && delete r.category_group;
  }var c = this;t.each(function () {
    var t = $(this);t.addClass("active");var i = $(this).find("span");for (var o in e) if (void 0 != r[e[o]]) if (a && "simple_composition" == e[o]) {
      _ = i.attr("thread_style");-1 == r[e[o]].indexOf(_) && t.removeClass("active");
    } else if ("tags" == e[o]) {
      var n = !1,
          s = r[e[o]];for (var l in s) "stretchy" == s[l] ? i.attr("st") > 0 && (n = !0) : "yarn" == s[l] ? "1" == i.attr("y") && (n = !0) : -1 != i.attr("t").indexOf(s[l]) && (n = !0);n || t.removeClass("active");
    } else if ("simple_composition" == e[o]) {
      var _ = i.attr("simple_composition"),
          n = !1;for (var u in r[e[o]]) {
        var p = r[e[o]][u];-1 != _.indexOf(p) && (n = !0);
      }n || t.removeClass("active");
    } else if ("season" == e[o] && "winter_tweed" == r[e[o]][0]) {
      var d = i.attr("season"),
          f = i.attr("simple_composition");"winter" != d && "tweed" != f && t.removeClass("active");
    } else {
      _ = i.attr(e[o]);-1 == r[e[o]].indexOf(_) && r[e[o]] != _ && t.removeClass("active");
    }if ("man_suit" == c.product_type || "man_suit2" == c.product_type) i.attr("simple_composition"), i.attr("fw");
  }), 0 == $(".fabric_list .fabric_box.active", i).length ? $(".empty_fabrics", i).addClass("active") : $(".empty_fabrics", i).removeClass("active"), 0 == $(".lining_list .lining_box.active", i).length ? $(".empty_linings", i).addClass("active") : $(".empty_linings", i).removeClass("active"), this.bLazy_fabric && this.bLazy_fabric.revalidate(), $(".fabric_container_lazy").get(0).scrollHeight <= $(".fabric_container_lazy").get(0).offsetHeight && $(".arrow_scroll").addClass("hide"), this.remarketing("fabric_filter", r);
}, Garment.prototype.resize_height_fabric_options_fix = function (t, e, r) {
  var i = t.height(),
      a = $(".multifabric_selectors").height();e.height(i), this.multi_fabric_active && (i += a), r && r.css("margin-top", i);
}, Garment.prototype.updateFabricPrices = function (t, e, r, i) {
  var a = this;if (a.multi_fabric_active && t && ("man_suit2" == a.product_type || "man_suit3" == a.product_type)) {
    a.price_detail.fabric_man_suit2 = 0, a.price_detail.fabric_man_suit3 = 0, a.price_detail["fabric_" + t] = 0;for (var o in a.fabric[t].price) void 0 !== e && void 0 !== a.fabric[t].price[o][e] && (a.price_detail["fabric_" + t] = a.fabric[t].price[o][e]);
  } else if (a.multi_fabric_active && t && "man_smoking" == a.product_type) {
    a.price_detail["fabric_" + t] = 0;for (var o in a.fabric[t].price) void 0 !== e && void 0 !== a.fabric[t].price[o][e] && (a.price_detail["fabric_" + t] = a.fabric[t].price[o][e]);
  } else if (a.multi_fabric_active && t && ("man_levita" == a.product_type || "man_frac" == a.product_type || "man_chaque" == a.product_type)) {
    a.price_detail["fabric_" + t] = 0;for (var o in a.fabric[t].price) void 0 !== e && void 0 !== a.fabric[t].price[o][e] && (a.price_detail["fabric_" + t] = a.fabric[t].price[o][e]);
  } else if (t) {
    if (t == a.real_product_type) {
      a.price_detail["fabric_" + t] = 0;for (var o in a.fabric[t].price) void 0 !== e && void 0 !== a.fabric[t].price[o][e] && (a.price_detail["fabric_" + t] = a.fabric[t].price[o][e]);
    } else a.price_detail["fabric_" + t] = 0;
  } else for (var t in a.fabric) if (t == a.real_product_type) {
    a.price_detail["fabric_" + t] = 0;for (var o in a.fabric[t].price) void 0 !== e && void 0 !== a.fabric[t].price[o][e] && (a.price_detail["fabric_" + t] = a.fabric[t].price[o][e]);
  } else a.price_detail["fabric_" + t] = 0;if (r) {
    n = $("span", i).attr("dsc");if ("man_suit3" == a.real_product_type) n = $("span", i).attr("dsc_suit3");if ("man_ceremonial3" == a.real_product_type) var n = $("span", i).attr("dsc_ceremonial3");n && !a.multi_fabric_active ? a.price_detail.fabric_discount = n : a.price_detail.fabric_discount = 0, a.updatePrice();
  }
}, String.prototype.capitalize = function () {
  return this.charAt(0).toUpperCase() + this.slice(1);
}, Garment.prototype.showPreviewFabric = function (t, e) {
  this.push_dataLayer("config_" + this.product_type, "step:zoom_fabric");var r = this;r.fabric_preview_open = !0, r.closeSeersuckerWarning();var i = t.prev().attr("price");"man_suit2" == r.product_type && "man_suit3" == r.real_product_type && (i = t.prev().attr("man_suit3")), r.complex && r.multi_fabric_active && (i = t.prev().attr(r.multi_fabric_active));var t = { id_fabric: t.prev().attr("rel"), title: t.prev().attr("name"), new: t.prev().attr("new"), composition: t.prev().attr("c"), simple_composition: t.prev().attr("sci"), season: t.prev().attr("season"), thread_style: t.prev().attr("thread_style"), brightness: t.prev().attr("br"), tone: t.prev().attr("tp"), subtone: t.prev().attr("stp"), fabric_weight: t.prev().attr("fw"), thread_count: t.prev().attr("tco"), opacity: t.prev().attr("opacity"), rank: t.prev().attr("r"), category_group: t.prev().attr("cgi"), tags: t.prev().attr("t"), shirt_yarn: t.prev().attr("y"), material: t.prev().attr("material"), stretchy: t.prev().attr("st"), samples: t.prev().attr("sam"), double_faced: t.prev().attr("df"), thickness: t.prev().attr("th"), bars: { excelence: t.prev().attr("b_ex"), hot: t.prev().attr("b_cal"), weight: t.prev().attr("b_pes"), fineza: t.prev().attr("b_fin") }, price: i };fabricPreview.show(t, e, r.product_type, fabric_options_i18n, region);
}, Garment.prototype.initThumbFabric = function () {
  var t = this,
      e = $(".preview_fabric", t.container),
      r = $(".seersucker_warning", t.container);$(".fabric_box").on("click", "span.thumb_preview", function () {
    var e = $(this).parents(".sidebar-options").attr("id");return t.showPreviewFabric($(this), e), !1;
  }), e.click(function () {
    t.closeThumbFabric();
  }), $(".action_column", t.container).on("click", ".category_group span", function () {
    t.fabric_preview_open = !0;var e = t.product_type;e.replace("man_", "");"man_suit" != t.product_type && "man_suit2" != t.product_type || (e = "man_jacket"), t.multi_fabric_active && (e = $(this).parents(".fabric_group").attr("rel"));var r = t.current.fabric[e],
        i = $('#fabric .image[rel="' + r + '"] span.thumb_preview');return t.showPreviewFabric(i, "fabric"), !1;
  }), $(".action_column", t.container).on("click", ".simple_composition .name", function () {
    t.fabric_preview_open = !0;var e = t.product_type;e.replace("man_", "");"man_suit" != t.product_type && "man_suit2" != t.product_type || (e = "man_jacket"), t.multi_fabric_active && (e = $(this).parents(".fabric_group").attr("rel"));var r = t.current.fabric[e],
        i = $('#fabric .image[rel="' + r + '"] span.thumb_preview');return t.showPreviewFabric(i, "fabric"), !1;
  }), $(".lining_box").on("click", "span.thumb_preview", function () {
    return t.showPreviewFabric($(this), "lining"), !1;
  }), e.on("click", ".close", function () {
    t.closeThumbFabric();
  }), t.container.on("click", ".seersucker_warning", function () {
    t.closeSeersuckerWarning();
  }), r.on("click", ".close", function () {
    t.closeSeersuckerWarning();
  });
}, Garment.prototype.showInitialsImage = function () {
  var t = this;t.initials_image = !0;var e = window.cdn_host;if (dev_mode && (e = ""), "man_coat" == t.product_type) $("#available_window .initials .image img").attr("src", e + "images/man/coat/initials/initials.jpg");else if ("man_polo" == t.product_type) $("#initials .box_position_initial label.checked input").val(), $("#available_window .initials .image img").attr("src", e + "dimg/fabric/polo/" + t.current.fabric.man_polo + "_big.jpg");else $("#available_window .initials .image img").attr("src", e + "images/man/jacket/initials/initials.jpg");$("#available_window .initials", t.container).show();
}, Garment.prototype.closeInitialsImage = function () {
  var t = this;t.initials_image = !1, $("#available_window .initials", t.container).hide(), "man_polo" == t.product_type && t.current.extras.initials && t.renderInitials();
}, Garment.prototype.closeSeersuckerWarning = function () {
  var t = this,
      e = $(".seersucker_warning", t.container);t.preview_seersucker_warning = !1, e.hide();
}, Garment.prototype.showSeersuckerWarning = function (t) {
  var e = this;e.seersucker_warning = !0;var r = $(".seersucker_warning", e.container);r.show();var i = window.cdn_host;dev_mode && (i = ""), $(".image img", r).attr("src", i + "/dimg/fabric/suit/" + t + "_huge.jpg");
}, Garment.prototype.closeThumbFabric = function () {
  this.fabric_preview_open = !1, fabricPreview.close();
}, Garment.prototype.isFF = function () {
  return navigator.userAgent.toLowerCase().indexOf("firefox") > -1;
}, Garment.prototype.fabricPriceActive = function () {
  var t = this;0 == t.multi_fabric_active ? ($("#fabric .price").removeClass("visible"), $("#fabric .price." + t.real_product_type).addClass("visible"), $("#fabric .fabric_list .fabric_box.checked").removeClass("checked"), $('#fabric .fabric_list .fabric_box div[rel="' + t.current.fabric[t.multi_fabric_options[0]] + '"]').parent().addClass("checked")) : ($("#fabric .price").removeClass("visible"), $("#fabric .price." + t.multi_fabric_active).addClass("visible"), $("#fabric .fabric_list .fabric_box.checked").removeClass("checked"), $('#fabric .fabric_list .fabric_box div[rel="' + t.current.fabric[t.multi_fabric_active] + '"]').parent().addClass("checked"), setTimeout(function () {
    var t = 0,
        e = $("#fabric .fabric_list .fabric_box.checked");e.length && (t = e.offset().top - 200), $("#fabric .fabric_list").animate({ scrollTop: t }, 500);
  }, 600));
}, Garment.prototype.push_dataLayer = function (t, e) {
  dataLayer && dataLayer.push({ event: "configurator", eventCategory: t, eventAction: e, eventLabel: "desktop" });
}, Garment.prototype.showQuilterWaistcoatAlert = function () {
  var t = this;t.quilted_alert = !0, $(".quilted_waistcoat_alert", t.container).show();var e = window.cdn_host;dev_mode && (e = "");var r = "jacket";"man_coat" == t.product_type && (r = "coat"), $(".quilted_waistcoat_alert .image img", t.container).attr("src", e + "images/man/" + r + "/quilted_waistcoat_alert.jpg");
}, Garment.prototype.hideQuilterWaistcoatAlert = function () {
  var t = this;$(".quilted_waistcoat_alert", t.container).hide();
}, Garment.prototype.showUnlinedCoatAlert = function () {
  var t = this;t.unlined_coat_alert = !0, $(".unlined_coat_alert", t.container).show();var e = window.cdn_host;dev_mode && (e = "");var r = "jacket";"man_coat" == t.product_type && (r = "coat"), $(".unlined_coat_alert .image img", t.container).attr("src", e + "images/man/" + r + "/unlined_coat_alert.jpg");
}, Garment.prototype.hideUnlinedCoatAlert = function () {
  var t = this;$(".unlined_coat_alert", t.container).hide();
}, Garment.prototype.showWinterLiningAlert = function () {
  var t = this;t.winter_lining_alert = !0, $(".winter_lining_alert", t.container).show();var e = window.cdn_host;dev_mode && (e = ""), $(".winter_lining_alert .image img", t.container).attr("src", e + "/images/man/shirt/winter_lining_alert_3.jpg");
}, Garment.prototype.hideWinterLiningAlert = function () {
  var t = this;$(".winter_lining_alert", t.container).hide();
}, Garment.prototype.hideFabricOutOfStock = function () {
  $(".popup_warning_fabric_out").hide();
}, Garment.prototype.validateStateButtonHoles = function (t) {
  var e = !1,
      r = 0;return $(".color_section.active, .thread_section.active", t).each(function () {
    "" != $("input", this).val() && ++r;
  }), r >= 1 && (e = !0), e;
}, Garment.prototype.saveExtraBoxButtonsHoles = function (t, e) {
  var r = this;if (r.validateStateButtonHoles(e)) {
    e.attr("id");[];var i = 0;"" != $("input#input_button_holes_threads", e).val() && (i = parseFloat(e.attr("data-price")), isNaN(i) && (i = 0)), r.extraSetPrice(t, i), void 0 !== r.product_config[t].contrast && r.relationsApply(t + "[contrast]", r.product_config[t].contrast.all);
  } else r.extraSetPrice(t, 0), void 0 !== r.product_config[t].contrast && r.relationsApply(t + "[contrast]", r.product_config[t].contrast[""]);
}, Garment.prototype.restoreBoxHoles = function (t, e) {
  var r = this;if (r.validateStateButtonHoles(e) ? 0 : 1) {
    $(".color_section input", e).val(""), $(".color_section .common_color.checked").removeClass("checked"), $(".color_section", e).removeClass("active"), $(".option_trigger", e).removeClass("active");var i = e.attr("id");if (!r.extra_threads_state) return $(".option_trigger.zero_value", e).addClass("active"), !0;var a = r.extra_threads_state["input_" + i];if ("only_cuffs" == a) {
      $("[rel=" + a + "]", e).addClass("active"), $("input[name=" + i + "]", e).val(a);var o = r.extra_threads_state.input_only_cuffs;$('.color_section .list_common_color[rel="' + a + '"] .common_color[rel="' + o + '"]').addClass("checked"), $('.color_section .list_common_color[rel="' + a + '"] input').val(o), $(".color_section." + a, e).addClass("active");
    } else "" == a && ($("[rel=" + a + "]", e).addClass("active"), $("input[name=" + i + "]", e).val(a), $(".color_section.only_cuffs", e).addClass("active"), $(".color_section.all", e).addClass("active"));r.renderDraw();
  }
}, Garment.prototype.removeAllFilters = function (t, e, r, i, a) {
  var o = this,
      n = [];t.find(".active_filters li").each(function () {
    $(this).remove();
  }), o.update_fabric_list(e, n, n, t), t.find(".extra_fabrics").scrollTop(0), a.find(".item_menu_filter.active .sub_menu_filter").removeClass("active").hide(), a.find(".item_menu_filter.active").removeClass("active"), a.find(".item_menu.active").removeClass("active"), a.find(".filter li.active").removeClass("active"), a.find(".filter li.all").addClass("active");
}, Garment.prototype.extraSetPrice = function (t, e) {
  var r = this,
      i = !1;"piping" == t && (t = "lining", "man_coat" == r.product_type && (t = "coat_lining"), i = !0);var a = !1;if (null == e && t.indexOf("lining") > -1 && (a = !0, e = 0), -1 == t.indexOf("_initials") && "logos" != t) if (e > 0 || a) {
    o = $("#" + t, r.container);$("input", o).each(function () {
      var e = $(this).attr("name_current"),
          i = $(this).val();"tuxedo" != t && "type_flap" != t ? r.current.extras[t][e] = i : r.current.extras[t] = i;
    });
  } else {
    var o = $("#" + t, r.container);r.current.extras[t] = [], "contrasts" == t && $("input", o).each(function () {
      var e = $(this).attr("name_current");r.current.extras[t][e] = "";
    });
  }"handkerchief" == t && e > 0 ? r.pocket_square.show() : r.pocket_square.hide(), i ? this.price_detail.piping = e : this.price_detail[t] = e, this.updatePrice(), e > 0 ? ("quilted_waistcoat" == t && $(".quilted_waistcoat_click").addClass("active"), "contrasts" == t || "type_flap" == t ? $('#extra .container_options ul a[href="satin_flap"]').addClass("inc_price") : $('#extra .container_options ul a[href="' + t + '"]').addClass("inc_price")) : ("quilted_waistcoat" == t && $(".quilted_waistcoat_click").removeClass("active"), "contrasts" == t || "type_flap" == t ? $('#extra .container_options ul a[href="satin_flap"]').removeClass("inc_price") : $('#extra .container_options ul a[href="' + t + '"]').removeClass("inc_price"));
}, Garment.prototype.inArray = function (t, e) {
  if (!e) return !1;for (var r = e.length, i = 0; i < r; i++) if (e[i] == t) return !0;return !1;
}, Garment.prototype.updatePrice = function () {
  var t = this,
      e = 0;for (var r in t.price_detail) isNaN(t.price_detail[r]) && delete t.price_detail[r], e += parseFloat(t.price_detail[r]);var i = format_price(e = Math.round(100 * e) / 100, "small_symbol", window.currency_json);if ($(".action_column div.price").html(i), t.price_detail.fabric_discount < 0) {
    $(".action_column div.price").not(".original_price").addClass("discount");var a = format_price(e - t.price_detail.fabric_discount, "small_symbol", window.currency_json);$(".action_column div.original_price").html(a).show();
  } else $(".action_column div.price").removeClass("discount"), $(".action_column div.original_price").hide();
}, Garment.prototype.minimalMode = function (t) {
  this.container.addClass("minimal"), $(".options_list > li", this.container).filter(".not_show").each(function () {
    var t = $("> span", this).attr("href");t && $(t).hide();
  }).bind("cssClassChanged", function () {
    var e = $("> span", this).attr("href");if (e) if ($(this).hasClass("not_show")) $(e).hide();else {
      var r = e.substring(1);for (var i in t) for (var a in t[i]) if (a == r && "all" == t[i][a]) return !1;$(e).show();
    }
  });for (var e in t) for (var r in t[e]) {
    var i = t[e][r],
        a = $("#" + r);if (Array.isArray(i)) for (var o = a.find(".option_trigger"), n = 0; n < i.length; n++) 0 == i[n].toString().indexOf(".") ? a.find(i[n]).hide() : o.filter('[rel="' + i[n] + '"]').hide();else "all" == i ? a.hide() : 0 == i.indexOf(".") && a.find(i).hide();
  }$(".box_opt.col2", this.container).addClass("col3 before_col2").removeClass("col2"), $("#extra .extra_fabrics").hide(), $(".box_opt", this.container).perfectScrollbar("destroy"), $(".box_opts", this.container).perfectScrollbar();
}, String.prototype.trim = function (t) {
  var e,
      r = 0,
      i = 0,
      a = this + "";for (e = t ? (t += "").replace(/([\[\]\(\)\.\?\/\*\{\}\+\$\^\:])/g, "$1") : " \n\r\t\f\v            ​\u2028\u2029　", r = a.length, i = 0; i < r; i++) if (-1 === e.indexOf(a.charAt(i))) {
    a = a.substring(i);break;
  }for (i = (r = a.length) - 1; i >= 0; i--) if (-1 === e.indexOf(a.charAt(i))) {
    a = a.substring(0, i + 1);break;
  }return -1 === e.indexOf(a.charAt(0)) ? a : "";
}, String.prototype.capitalize = function () {
  return this.charAt(0).toUpperCase() + this.slice(1);
}, String.prototype.getID = function (t) {
  return t ? this.replace(/^[^#]*#/, "") : this.replace(/^[^#]*/, "");
}, Object.size = function (t) {
  var e,
      r = 0;for (e in t) t.hasOwnProperty(e) && r++;return r;
}, "object" != typeof JSON && (JSON = {}), function () {
  "use strict";
  function f(t) {
    return t < 10 ? "0" + t : t;
  }function quote(t) {
    return escapable.lastIndex = 0, escapable.test(t) ? '"' + t.replace(escapable, function (t) {
      var e = meta[t];return "string" == typeof e ? e : "\\u" + ("0000" + t.charCodeAt(0).toString(16)).slice(-4);
    }) + '"' : '"' + t + '"';
  }function str(t, e) {
    var r,
        i,
        a,
        o,
        n,
        c = gap,
        s = e[t];switch (s && "object" == typeof s && "function" == typeof s.toJSON && (s = s.toJSON(t)), "function" == typeof rep && (s = rep.call(e, t, s)), typeof s) {case "string":
        return quote(s);case "number":
        return isFinite(s) ? String(s) : "null";case "boolean":case "null":
        return String(s);case "object":
        if (!s) return "null";if (gap += indent, n = [], "[object Array]" === Object.prototype.toString.apply(s)) {
          for (o = s.length, r = 0; r < o; r += 1) n[r] = str(r, s) || "null";return a = 0 === n.length ? "[]" : gap ? "[\n" + gap + n.join(",\n" + gap) + "\n" + c + "]" : "[" + n.join(",") + "]", gap = c, a;
        }if (rep && "object" == typeof rep) for (o = rep.length, r = 0; r < o; r += 1) "string" == typeof rep[r] && (i = rep[r], (a = str(i, s)) && n.push(quote(i) + (gap ? ": " : ":") + a));else for (i in s) Object.prototype.hasOwnProperty.call(s, i) && (a = str(i, s)) && n.push(quote(i) + (gap ? ": " : ":") + a);return a = 0 === n.length ? "{}" : gap ? "{\n" + gap + n.join(",\n" + gap) + "\n" + c + "}" : "{" + n.join(",") + "}", gap = c, a;}
  }"function" != typeof Date.prototype.toJSON && (Date.prototype.toJSON = function (t) {
    return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + f(this.getUTCMonth() + 1) + "-" + f(this.getUTCDate()) + "T" + f(this.getUTCHours()) + ":" + f(this.getUTCMinutes()) + ":" + f(this.getUTCSeconds()) + "Z" : null;
  }, String.prototype.toJSON = Number.prototype.toJSON = Boolean.prototype.toJSON = function (t) {
    return this.valueOf();
  });var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
      escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
      gap,
      indent,
      meta = { "\b": "\\b", "\t": "\\t", "\n": "\\n", "\f": "\\f", "\r": "\\r", '"': '\\"', "\\": "\\\\" },
      rep;"function" != typeof JSON.stringify && (JSON.stringify = function (t, e, r) {
    var i;if (gap = "", indent = "", "number" == typeof r) for (i = 0; i < r; i += 1) indent += " ";else "string" == typeof r && (indent = r);if (rep = e, !e || "function" == typeof e || "object" == typeof e && "number" == typeof e.length) return str("", { "": t });throw new Error("JSON.stringify");
  }), "function" != typeof JSON.parse && (JSON.parse = function (text, reviver) {
    function walk(t, e) {
      var r,
          i,
          a = t[e];if (a && "object" == typeof a) for (r in a) Object.prototype.hasOwnProperty.call(a, r) && (void 0 !== (i = walk(a, r)) ? a[r] = i : delete a[r]);return reviver.call(t, e, a);
    }var j;if (text = String(text), cx.lastIndex = 0, cx.test(text) && (text = text.replace(cx, function (t) {
      return "\\u" + ("0000" + t.charCodeAt(0).toString(16)).slice(-4);
    })), /^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) return j = eval("(" + text + ")"), "function" == typeof reviver ? walk({ "": j }, "") : j;throw new SyntaxError("JSON.parse");
  });
}(), function (t, e) {
  "use strict";
  var r = t.History = t.History || {},
      i = t.jQuery;if (void 0 !== r.Adapter) throw new Error("History.js Adapter has already been loaded...");r.Adapter = { bind: function (t, e, r) {
      i(t).bind(e, r);
    }, trigger: function (t, e, r) {
      i(t).trigger(e, r);
    }, extractEventData: function (t, e, r) {
      return e && e.originalEvent && e.originalEvent[t] || r && r[t] || void 0;
    }, onDomLoad: function (t) {
      i(t);
    } }, void 0 !== r.init && r.init();
}(window), function (t, e) {
  "use strict";
  var r = t.document,
      i = t.setTimeout || i,
      a = t.clearTimeout || a,
      o = t.setInterval || o,
      n = t.History = t.History || {};if (void 0 !== n.initHtml4) throw new Error("History.js HTML4 Support has already been loaded...");n.initHtml4 = function () {
    if (void 0 !== n.initHtml4.initialized) return !1;n.initHtml4.initialized = !0, n.enabled = !0, n.savedHashes = [], n.isLastHash = function (t) {
      return t === n.getHashByIndex();
    }, n.isHashEqual = function (t, e) {
      return t = encodeURIComponent(t).replace(/%25/g, "%"), e = encodeURIComponent(e).replace(/%25/g, "%"), t === e;
    }, n.saveHash = function (t) {
      return !n.isLastHash(t) && (n.savedHashes.push(t), !0);
    }, n.getHashByIndex = function (t) {
      return void 0 === t ? n.savedHashes[n.savedHashes.length - 1] : t < 0 ? n.savedHashes[n.savedHashes.length + t] : n.savedHashes[t];
    }, n.discardedHashes = {}, n.discardedStates = {}, n.discardState = function (t, e, r) {
      var i,
          a = n.getHashByState(t);return i = { discardedState: t, backState: r, forwardState: e }, n.discardedStates[a] = i, !0;
    }, n.discardHash = function (t, e, r) {
      var i = { discardedHash: t, backState: r, forwardState: e };return n.discardedHashes[t] = i, !0;
    }, n.discardedState = function (t) {
      var e = n.getHashByState(t);return n.discardedStates[e] || !1;
    }, n.discardedHash = function (t) {
      return n.discardedHashes[t] || !1;
    }, n.recycleState = function (t) {
      var e = n.getHashByState(t);return n.discardedState(t) && delete n.discardedStates[e], !0;
    }, n.emulated.hashChange && (n.hashChangeInit = function () {
      n.checkerFunction = null;var e,
          i,
          a,
          c,
          s = "",
          l = Boolean(n.getHash());return n.isInternetExplorer() ? (e = "historyjs-iframe", (i = r.createElement("iframe")).setAttribute("id", e), i.setAttribute("src", "#"), i.style.display = "none", r.body.appendChild(i), i.contentWindow.document.open(), i.contentWindow.document.close(), a = "", c = !1, n.checkerFunction = function () {
        if (c) return !1;c = !0;var e = n.getHash(),
            r = n.getHash(i.contentWindow.document);return e !== s ? (s = e, r !== e && (a = r = e, i.contentWindow.document.open(), i.contentWindow.document.close(), i.contentWindow.document.location.hash = n.escapeHash(e)), n.Adapter.trigger(t, "hashchange")) : r !== a && (a = r, l && "" === r ? n.back() : n.setHash(r, !1)), c = !1, !0;
      }) : n.checkerFunction = function () {
        var e = n.getHash() || "";return e !== s && (s = e, n.Adapter.trigger(t, "hashchange")), !0;
      }, n.intervalList.push(o(n.checkerFunction, n.options.hashChangeInterval)), !0;
    }, n.Adapter.onDomLoad(n.hashChangeInit)), n.emulated.pushState && (n.onHashChange = function (e) {
      var r,
          i = e && e.newURL || n.getLocationHref(),
          a = n.getHashByUrl(i),
          o = null;return n.isLastHash(a) ? (n.busy(!1), !1) : (n.doubleCheckComplete(), n.saveHash(a), a && n.isTraditionalAnchor(a) ? (n.Adapter.trigger(t, "anchorchange"), n.busy(!1), !1) : (o = n.extractState(n.getFullUrl(a || n.getLocationHref()), !0), n.isLastSavedState(o) ? (n.busy(!1), !1) : (n.getHashByState(o), (r = n.discardedState(o)) ? (n.getHashByIndex(-2) === n.getHashByState(r.forwardState) ? n.back(!1) : n.forward(!1), !1) : (n.pushState(o.data, o.title, encodeURI(o.url), !1), !0))));
    }, n.Adapter.bind(t, "hashchange", n.onHashChange), n.pushState = function (e, r, i, a) {
      if (i = encodeURI(i).replace(/%25/g, "%"), n.getHashByUrl(i)) throw new Error("History.js does not support states with fragment-identifiers (hashes/anchors).");if (!1 !== a && n.busy()) return n.pushQueue({ scope: n, callback: n.pushState, args: arguments, queue: a }), !1;n.busy(!0);var o = n.createStateObject(e, r, i),
          c = n.getHashByState(o),
          s = n.getState(!1),
          l = n.getHashByState(s),
          _ = n.getHash(),
          u = n.expectedStateId == o.id;return n.storeState(o), n.expectedStateId = o.id, n.recycleState(o), n.setTitle(o), c === l ? (n.busy(!1), !1) : (n.saveState(o), u || n.Adapter.trigger(t, "statechange"), !n.isHashEqual(c, _) && !n.isHashEqual(c, n.getShortUrl(n.getLocationHref())) && n.setHash(c, !1), n.busy(!1), !0);
    }, n.replaceState = function (e, r, i, a) {
      if (i = encodeURI(i).replace(/%25/g, "%"), n.getHashByUrl(i)) throw new Error("History.js does not support states with fragment-identifiers (hashes/anchors).");if (!1 !== a && n.busy()) return n.pushQueue({ scope: n, callback: n.replaceState, args: arguments, queue: a }), !1;n.busy(!0);var o = n.createStateObject(e, r, i),
          c = n.getHashByState(o),
          s = n.getState(!1),
          l = n.getHashByState(s),
          _ = n.getStateByIndex(-2);return n.discardState(s, o, _), c === l ? (n.storeState(o), n.expectedStateId = o.id, n.recycleState(o), n.setTitle(o), n.saveState(o), n.Adapter.trigger(t, "statechange"), n.busy(!1)) : n.pushState(o.data, o.title, o.url, !1), !0;
    }), n.emulated.pushState && n.getHash() && !n.emulated.hashChange && n.Adapter.onDomLoad(function () {
      n.Adapter.trigger(t, "hashchange");
    });
  }, void 0 !== n.init && n.init();
}(window), function (t, e) {
  "use strict";
  var r = t.console || e,
      i = t.document,
      a = t.navigator,
      o = !1,
      n = t.setTimeout,
      c = t.clearTimeout,
      s = t.setInterval,
      l = t.clearInterval,
      _ = t.JSON,
      u = t.alert,
      p = t.History = t.History || {},
      d = t.history;try {
    (o = t.sessionStorage).setItem("TEST", "1"), o.removeItem("TEST");
  } catch (t) {
    o = !1;
  }if (_.stringify = _.stringify || _.encode, _.parse = _.parse || _.decode, void 0 !== p.init) throw new Error("History.js Core has already been loaded...");p.init = function (t) {
    return void 0 !== p.Adapter && (void 0 !== p.initCore && p.initCore(), void 0 !== p.initHtml4 && p.initHtml4(), !0);
  }, p.initCore = function (f) {
    if (void 0 !== p.initCore.initialized) return !1;if (p.initCore.initialized = !0, p.options = p.options || {}, p.options.hashChangeInterval = p.options.hashChangeInterval || 100, p.options.safariPollInterval = p.options.safariPollInterval || 500, p.options.doubleCheckInterval = p.options.doubleCheckInterval || 500, p.options.disableSuid = p.options.disableSuid || !1, p.options.storeInterval = p.options.storeInterval || 1e3, p.options.busyDelay = p.options.busyDelay || 250, p.options.debug = p.options.debug || !1, p.options.initialTitle = p.options.initialTitle || i.title, p.options.html4Mode = p.options.html4Mode || !1, p.options.delayInit = p.options.delayInit || !1, p.intervalList = [], p.clearAllIntervals = function () {
      var t,
          e = p.intervalList;if (void 0 !== e && null !== e) {
        for (t = 0; t < e.length; t++) l(e[t]);p.intervalList = null;
      }
    }, p.debug = function () {
      (p.options.debug || !1) && p.log.apply(p, arguments);
    }, p.log = function () {
      var t,
          e,
          a,
          o,
          n,
          c = void 0 !== r && void 0 !== r.log && void 0 !== r.log.apply,
          s = i.getElementById("log");for (c ? (o = Array.prototype.slice.call(arguments), t = o.shift(), void 0 !== r.debug ? r.debug.apply(r, [t, o]) : r.log.apply(r, [t, o])) : t = "\n" + arguments[0] + "\n", e = 1, a = arguments.length; e < a; ++e) {
        if ("object" == typeof (n = arguments[e]) && void 0 !== _) try {
          n = _.stringify(n);
        } catch (t) {}t += "\n" + n + "\n";
      }return s ? (s.value += t + "\n-----\n", s.scrollTop = s.scrollHeight - s.clientHeight) : c || u(t), !0;
    }, p.getInternetExplorerMajorVersion = function () {
      return p.getInternetExplorerMajorVersion.cached = void 0 !== p.getInternetExplorerMajorVersion.cached ? p.getInternetExplorerMajorVersion.cached : function () {
        for (var t = 3, e = i.createElement("div"), r = e.getElementsByTagName("i"); (e.innerHTML = "\x3c!--[if gt IE " + ++t + "]><i></i><![endif]--\x3e") && r[0];);return t > 4 && t;
      }();
    }, p.isInternetExplorer = function () {
      return p.isInternetExplorer.cached = void 0 !== p.isInternetExplorer.cached ? p.isInternetExplorer.cached : Boolean(p.getInternetExplorerMajorVersion());
    }, p.options.html4Mode ? p.emulated = { pushState: !0, hashChange: !0 } : p.emulated = { pushState: !Boolean(t.history && t.history.pushState && t.history.replaceState && !/ Mobile\/([1-7][a-z]|(8([abcde]|f(1[0-8]))))/i.test(a.userAgent) && !/AppleWebKit\/5([0-2]|3[0-2])/i.test(a.userAgent)), hashChange: Boolean(!("onhashchange" in t || "onhashchange" in i) || p.isInternetExplorer() && p.getInternetExplorerMajorVersion() < 8) }, p.enabled = !p.emulated.pushState, p.bugs = { setHash: Boolean(!p.emulated.pushState && "Apple Computer, Inc." === a.vendor && /AppleWebKit\/5([0-2]|3[0-3])/.test(a.userAgent)), safariPoll: Boolean(!p.emulated.pushState && "Apple Computer, Inc." === a.vendor && /AppleWebKit\/5([0-2]|3[0-3])/.test(a.userAgent)), ieDoubleCheck: Boolean(p.isInternetExplorer() && p.getInternetExplorerMajorVersion() < 8), hashEscape: Boolean(p.isInternetExplorer() && p.getInternetExplorerMajorVersion() < 7) }, p.isEmptyObject = function (t) {
      for (var e in t) if (t.hasOwnProperty(e)) return !1;return !0;
    }, p.cloneObject = function (t) {
      var e, r;return t ? (e = _.stringify(t), r = _.parse(e)) : r = {}, r;
    }, p.getRootUrl = function () {
      var t = i.location.protocol + "//" + (i.location.hostname || i.location.host);return i.location.port && (t += ":" + i.location.port), t += "/";
    }, p.getBaseHref = function () {
      var t = i.getElementsByTagName("base"),
          e = null,
          r = "";return 1 === t.length && (e = t[0], r = e.href.replace(/[^\/]+$/, "")), (r = r.replace(/\/+$/, "")) && (r += "/"), r;
    }, p.getBaseUrl = function () {
      return p.getBaseHref() || p.getBasePageUrl() || p.getRootUrl();
    }, p.getPageUrl = function () {
      return ((p.getState(!1, !1) || {}).url || p.getLocationHref()).replace(/\/+$/, "").replace(/[^\/]+$/, function (t, e, r) {
        return (/\./.test(t) ? t : t + "/"
        );
      });
    }, p.getBasePageUrl = function () {
      return p.getLocationHref().replace(/[#\?].*/, "").replace(/[^\/]+$/, function (t, e, r) {
        return (/[^\/]$/.test(t) ? "" : t
        );
      }).replace(/\/+$/, "") + "/";
    }, p.getFullUrl = function (t, e) {
      var r = t,
          i = t.substring(0, 1);return e = void 0 === e || e, /[a-z]+\:\/\//.test(t) || (r = "/" === i ? p.getRootUrl() + t.replace(/^\/+/, "") : "#" === i ? p.getPageUrl().replace(/#.*/, "") + t : "?" === i ? p.getPageUrl().replace(/[\?#].*/, "") + t : e ? p.getBaseUrl() + t.replace(/^(\.\/)+/, "") : p.getBasePageUrl() + t.replace(/^(\.\/)+/, "")), r.replace(/\#$/, "");
    }, p.getShortUrl = function (t) {
      var e = t,
          r = p.getBaseUrl(),
          i = p.getRootUrl();return p.emulated.pushState && (e = e.replace(r, "")), e = e.replace(i, "/"), p.isTraditionalAnchor(e) && (e = "./" + e), e = e.replace(/^(\.\/)+/g, "./").replace(/\#$/, "");
    }, p.getLocationHref = function (t) {
      return (t = t || i).URL === t.location.href ? t.location.href : t.location.href === decodeURIComponent(t.URL) ? t.URL : t.location.hash && decodeURIComponent(t.location.href.replace(/^[^#]+/, "")) === t.location.hash ? t.location.href : -1 == t.URL.indexOf("#") && -1 != t.location.href.indexOf("#") ? t.location.href : t.URL || t.location.href;
    }, p.store = {}, p.idToState = p.idToState || {}, p.stateToId = p.stateToId || {}, p.urlToId = p.urlToId || {}, p.storedStates = p.storedStates || [], p.savedStates = p.savedStates || [], p.normalizeStore = function () {
      p.store.idToState = p.store.idToState || {}, p.store.urlToId = p.store.urlToId || {}, p.store.stateToId = p.store.stateToId || {};
    }, p.getState = function (t, e) {
      void 0 === t && (t = !0), void 0 === e && (e = !0);var r = p.getLastSavedState();return !r && e && (r = p.createStateObject()), t && (r = p.cloneObject(r), r.url = r.cleanUrl || r.url), r;
    }, p.getIdByState = function (t) {
      var e,
          r = p.extractId(t.url);if (!r) if (e = p.getStateString(t), void 0 !== p.stateToId[e]) r = p.stateToId[e];else if (void 0 !== p.store.stateToId[e]) r = p.store.stateToId[e];else {
        for (; r = new Date().getTime() + String(Math.random()).replace(/\D/g, ""), void 0 !== p.idToState[r] || void 0 !== p.store.idToState[r];);p.stateToId[e] = r, p.idToState[r] = t;
      }return r;
    }, p.normalizeState = function (t) {
      var e, r;return t && "object" == typeof t || (t = {}), void 0 !== t.normalized ? t : (t.data && "object" == typeof t.data || (t.data = {}), e = {}, e.normalized = !0, e.title = t.title || "", e.url = p.getFullUrl(t.url ? t.url : p.getLocationHref()), e.hash = p.getShortUrl(e.url), e.data = p.cloneObject(t.data), e.id = p.getIdByState(e), e.cleanUrl = e.url.replace(/\??\&_suid.*/, ""), e.url = e.cleanUrl, r = !p.isEmptyObject(e.data), (e.title || r) && !0 !== p.options.disableSuid && (e.hash = p.getShortUrl(e.url).replace(/\??\&_suid.*/, ""), /\?/.test(e.hash) || (e.hash += "?"), e.hash += "&_suid=" + e.id), e.hashedUrl = p.getFullUrl(e.hash), (p.emulated.pushState || p.bugs.safariPoll) && p.hasUrlDuplicate(e) && (e.url = e.hashedUrl), e);
    }, p.createStateObject = function (t, e, r) {
      var i = { data: t, title: e, url: r };return i = p.normalizeState(i);
    }, p.getStateById = function (t) {
      return t = String(t), p.idToState[t] || p.store.idToState[t] || e;
    }, p.getStateString = function (t) {
      var e, r;return e = p.normalizeState(t), r = { data: e.data, title: t.title, url: t.url }, _.stringify(r);
    }, p.getStateId = function (t) {
      var e;return e = p.normalizeState(t), e.id;
    }, p.getHashByState = function (t) {
      var e;return e = p.normalizeState(t), e.hash;
    }, p.extractId = function (t) {
      var e, r;return r = -1 != t.indexOf("#") ? t.split("#")[0] : t, e = /(.*)\&_suid=([0-9]+)$/.exec(r), e ? e[1] || t : t, (e ? String(e[2] || "") : "") || !1;
    }, p.isTraditionalAnchor = function (t) {
      return !/[\/\?\.]/.test(t);
    }, p.extractState = function (t, e) {
      var r,
          i,
          a = null;return e = e || !1, (r = p.extractId(t)) && (a = p.getStateById(r)), a || (i = p.getFullUrl(t), (r = p.getIdByUrl(i) || !1) && (a = p.getStateById(r)), !a && e && !p.isTraditionalAnchor(t) && (a = p.createStateObject(null, null, i))), a;
    }, p.getIdByUrl = function (t) {
      return p.urlToId[t] || p.store.urlToId[t] || e;
    }, p.getLastSavedState = function () {
      return p.savedStates[p.savedStates.length - 1] || e;
    }, p.getLastStoredState = function () {
      return p.storedStates[p.storedStates.length - 1] || e;
    }, p.hasUrlDuplicate = function (t) {
      var e;return e = p.extractState(t.url), e && e.id !== t.id;
    }, p.storeState = function (t) {
      return p.urlToId[t.url] = t.id, p.storedStates.push(p.cloneObject(t)), t;
    }, p.isLastSavedState = function (t) {
      var e,
          r,
          i,
          a = !1;return p.savedStates.length && (e = t.id, r = p.getLastSavedState(), i = r.id, a = e === i), a;
    }, p.saveState = function (t) {
      return !p.isLastSavedState(t) && (p.savedStates.push(p.cloneObject(t)), !0);
    }, p.getStateByIndex = function (t) {
      return void 0 === t ? p.savedStates[p.savedStates.length - 1] : t < 0 ? p.savedStates[p.savedStates.length + t] : p.savedStates[t];
    }, p.getCurrentIndex = function () {
      return p.savedStates.length < 1 ? 0 : p.savedStates.length - 1;
    }, p.getHash = function (t) {
      var e = p.getLocationHref(t);return p.getHashByUrl(e);
    }, p.unescapeHash = function (t) {
      var e = p.normalizeHash(t);return e = decodeURIComponent(e);
    }, p.normalizeHash = function (t) {
      return t.replace(/[^#]*#/, "").replace(/#.*/, "");
    }, p.setHash = function (t, e) {
      var r, a;return !1 !== e && p.busy() ? (p.pushQueue({ scope: p, callback: p.setHash, args: arguments, queue: e }), !1) : (p.busy(!0), (r = p.extractState(t, !0)) && !p.emulated.pushState ? p.pushState(r.data, r.title, r.url, !1) : p.getHash() !== t && (p.bugs.setHash ? (a = p.getPageUrl(), p.pushState(null, null, a + "#" + t, !1)) : i.location.hash = t), p);
    }, p.escapeHash = function (e) {
      var r = p.normalizeHash(e);return r = t.encodeURIComponent(r), p.bugs.hashEscape || (r = r.replace(/\%21/g, "!").replace(/\%26/g, "&").replace(/\%3D/g, "=").replace(/\%3F/g, "?")), r;
    }, p.getHashByUrl = function (t) {
      var e = String(t).replace(/([^#]*)#?([^#]*)#?(.*)/, "$2");return e = p.unescapeHash(e);
    }, p.setTitle = function (t) {
      var e,
          r = t.title;r || (e = p.getStateByIndex(0)) && e.url === t.url && (r = e.title || p.options.initialTitle);try {
        i.getElementsByTagName("title")[0].innerHTML = r.replace("<", "&lt;").replace(">", "&gt;").replace(" & ", " &amp; ");
      } catch (t) {}return i.title = r, p;
    }, p.queues = [], p.busy = function (t) {
      if (void 0 !== t ? p.busy.flag = t : void 0 === p.busy.flag && (p.busy.flag = !1), !p.busy.flag) {
        c(p.busy.timeout);var e = function () {
          var t, r, i;if (!p.busy.flag) for (t = p.queues.length - 1; t >= 0; --t) 0 !== (r = p.queues[t]).length && (i = r.shift(), p.fireQueueItem(i), p.busy.timeout = n(e, p.options.busyDelay));
        };p.busy.timeout = n(e, p.options.busyDelay);
      }return p.busy.flag;
    }, p.busy.flag = !1, p.fireQueueItem = function (t) {
      return t.callback.apply(t.scope || p, t.args || []);
    }, p.pushQueue = function (t) {
      return p.queues[t.queue || 0] = p.queues[t.queue || 0] || [], p.queues[t.queue || 0].push(t), p;
    }, p.queue = function (t, e) {
      return "function" == typeof t && (t = { callback: t }), void 0 !== e && (t.queue = e), p.busy() ? p.pushQueue(t) : p.fireQueueItem(t), p;
    }, p.clearQueue = function () {
      return p.busy.flag = !1, p.queues = [], p;
    }, p.stateChanged = !1, p.doubleChecker = !1, p.doubleCheckComplete = function () {
      return p.stateChanged = !0, p.doubleCheckClear(), p;
    }, p.doubleCheckClear = function () {
      return p.doubleChecker && (c(p.doubleChecker), p.doubleChecker = !1), p;
    }, p.doubleCheck = function (t) {
      return p.stateChanged = !1, p.doubleCheckClear(), p.bugs.ieDoubleCheck && (p.doubleChecker = n(function () {
        return p.doubleCheckClear(), p.stateChanged || t(), !0;
      }, p.options.doubleCheckInterval)), p;
    }, p.safariStatePoll = function () {
      var e = p.extractState(p.getLocationHref());if (!p.isLastSavedState(e)) return e || p.createStateObject(), p.Adapter.trigger(t, "popstate"), p;
    }, p.back = function (t) {
      return !1 !== t && p.busy() ? (p.pushQueue({ scope: p, callback: p.back, args: arguments, queue: t }), !1) : (p.busy(!0), p.doubleCheck(function () {
        p.back(!1);
      }), d.go(-1), !0);
    }, p.forward = function (t) {
      return !1 !== t && p.busy() ? (p.pushQueue({ scope: p, callback: p.forward, args: arguments, queue: t }), !1) : (p.busy(!0), p.doubleCheck(function () {
        p.forward(!1);
      }), d.go(1), !0);
    }, p.go = function (t, e) {
      var r;if (t > 0) for (r = 1; r <= t; ++r) p.forward(e);else {
        if (!(t < 0)) throw new Error("History.go: History.go requires a positive or negative integer passed.");for (r = -1; r >= t; --r) p.back(e);
      }return p;
    }, p.emulated.pushState) {
      var h = function () {};p.pushState = p.pushState || h, p.replaceState = p.replaceState || h;
    } else p.onPopState = function (e, r) {
      var i,
          a,
          o = !1,
          n = !1;return p.doubleCheckComplete(), (i = p.getHash()) ? ((a = p.extractState(i || p.getLocationHref(), !0)) ? p.replaceState(a.data, a.title, a.url, !1) : (p.Adapter.trigger(t, "anchorchange"), p.busy(!1)), p.expectedStateId = !1, !1) : (o = p.Adapter.extractEventData("state", e, r) || !1, (n = o ? p.getStateById(o) : p.expectedStateId ? p.getStateById(p.expectedStateId) : p.extractState(p.getLocationHref())) || (n = p.createStateObject(null, null, p.getLocationHref())), p.expectedStateId = !1, p.isLastSavedState(n) ? (p.busy(!1), !1) : (p.storeState(n), p.saveState(n), p.setTitle(n), p.Adapter.trigger(t, "statechange"), p.busy(!1), !0));
    }, p.Adapter.bind(t, "popstate", p.onPopState), p.pushState = function (e, r, i, a) {
      if (p.getHashByUrl(i) && p.emulated.pushState) throw new Error("History.js does not support states with fragement-identifiers (hashes/anchors).");if (!1 !== a && p.busy()) return p.pushQueue({ scope: p, callback: p.pushState, args: arguments, queue: a }), !1;p.busy(!0);var o = p.createStateObject(e, r, i);return p.isLastSavedState(o) ? p.busy(!1) : (p.storeState(o), p.expectedStateId = o.id, d.pushState(o.id, o.title, o.url), p.Adapter.trigger(t, "popstate")), !0;
    }, p.replaceState = function (e, r, i, a) {
      if (p.getHashByUrl(i) && p.emulated.pushState) throw new Error("History.js does not support states with fragement-identifiers (hashes/anchors).");if (!1 !== a && p.busy()) return p.pushQueue({ scope: p, callback: p.replaceState, args: arguments, queue: a }), !1;p.busy(!0);var o = p.createStateObject(e, r, i);return p.isLastSavedState(o) ? p.busy(!1) : (p.storeState(o), p.expectedStateId = o.id, d.replaceState(o.id, o.title, o.url), p.Adapter.trigger(t, "popstate")), !0;
    };if (o) {
      try {
        p.store = _.parse(o.getItem("History.store")) || {};
      } catch (t) {
        p.store = {};
      }p.normalizeStore();
    } else p.store = {}, p.normalizeStore();p.Adapter.bind(t, "unload", p.clearAllIntervals), p.saveState(p.storeState(p.extractState(p.getLocationHref(), !0))), o && (p.onUnload = function () {
      var t, e, r;try {
        t = _.parse(o.getItem("History.store")) || {};
      } catch (e) {
        t = {};
      }t.idToState = t.idToState || {}, t.urlToId = t.urlToId || {}, t.stateToId = t.stateToId || {};for (e in p.idToState) p.idToState.hasOwnProperty(e) && (t.idToState[e] = p.idToState[e]);for (e in p.urlToId) p.urlToId.hasOwnProperty(e) && (t.urlToId[e] = p.urlToId[e]);for (e in p.stateToId) p.stateToId.hasOwnProperty(e) && (t.stateToId[e] = p.stateToId[e]);p.store = t, p.normalizeStore(), r = _.stringify(t);try {
        o.setItem("History.store", r);
      } catch (t) {
        if (t.code !== DOMException.QUOTA_EXCEEDED_ERR) throw t;o.length && (o.removeItem("History.store"), o.setItem("History.store", r));
      }
    }, p.intervalList.push(s(p.onUnload, p.options.storeInterval)), p.Adapter.bind(t, "beforeunload", p.onUnload), p.Adapter.bind(t, "unload", p.onUnload)), p.emulated.pushState || (p.bugs.safariPoll && p.intervalList.push(s(p.safariStatePoll, p.options.safariPollInterval)), "Apple Computer, Inc." !== a.vendor && "Mozilla" !== (a.appCodeName || "") || (p.Adapter.bind(t, "hashchange", function () {
      p.Adapter.trigger(t, "popstate");
    }), p.getHash() && p.Adapter.onDomLoad(function () {
      p.Adapter.trigger(t, "hashchange");
    })));
  }, (!p.options || !p.options.delayInit) && p.init();
}(window);