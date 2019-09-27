function parse_query_string(t, e) {
  if (e) {
    e = e.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");var i = new RegExp("[\\?&]" + e + "=([^&#]*)").exec(t);return null == i ? "" : decodeURIComponent(i[1].replace(/\+/g, " "));
  }var a,
      r = /\+/g,
      n = /([^&=]+)=?([^&]*)/g,
      o = function (t) {
    return decodeURIComponent(t.replace(r, " "));
  },
      s = t.replace(/^\?/, "");for (urlParams = {}; a = n.exec(s);) urlParams[o(a[1])] = o(a[2]);return urlParams;
}function formatMoney(t, e, i, a) {
  t = t || 0, e = isNaN(e = Math.abs(e)) ? 2 : e, i = i || ",", a = a || ".";var r = t < 0 ? "-" : "",
      n = parseInt(t = Math.abs(+t || 0).toFixed(e), 10) + "",
      o = (o = n.length) > 3 ? o % 3 : 0,
      s = Math.abs(t - n).toFixed(e).slice(2);return "00" == s ? r + (o ? n.substr(0, o) + i : "") + n.substr(o).replace(/(\d{3})(?=\d)/g, "$1" + i) : r + (o ? n.substr(0, o) + i : "") + n.substr(o).replace(/(\d{3})(?=\d)/g, "$1" + i) + (e ? a + s : "");
}function format_price(t, e, i) {
  switch (i || (i = window.currency), e) {case "small_symbol":
      switch (i.iso) {case "GBP":
          return "<small>" + i.symbol + "</small>" + formatMoney(t);case "USD":
          a = "<small>" + i.symbol + "</small>" + formatMoney(t);return "/en-ca/" != window.region_url && "/fr-ca/" != window.region_url || (a += '<small style="font-size: 50%">USD</small>'), a;case "AUD":
          return "<small>AU" + i.symbol + "</small>" + formatMoney(t);case "MXN":
          return "<small>MX" + i.symbol + "</small>" + formatMoney(t);case "RUB":
          return formatMoney(t) + "<small>p</small>";case "CHF":
          return "<small>CHF </small>" + formatMoney(t, 2, "'", ".");default:
          return formatMoney(t, 2, ".", ",") + "<small>" + i.symbol + "</small>";}case "text":default:
      switch (i.iso) {case "GBP":
          return i.symbol + formatMoney(t);case "USD":
          var a = i.symbol + formatMoney(t);return "/en-ca/" != window.region_url && "/fr-ca/" != window.region_url || (a += '<small style="font-size: 50%">USD</small>'), a;case "AUD":
          return "AU" + i.symbol + formatMoney(t);case "MXN":
          return "MX" + i.symbol + formatMoney(t);case "RUB":
          return formatMoney(t) + "p";case "CHF":
          return "<small>CHF </small>" + formatMoney(t, 2, "'", ".");default:
          return formatMoney(t) + i.symbol;}}
}function str_replace(t, e, i, a) {
  var r = 0,
      n = 0,
      o = "",
      s = "",
      c = 0,
      l = 0,
      _ = [].concat(t),
      d = [].concat(e),
      u = i,
      p = "[object Array]" === Object.prototype.toString.call(d),
      f = "[object Array]" === Object.prototype.toString.call(u);for (u = [].concat(u), a && (this.window[a] = 0), r = 0, c = u.length; r < c; r++) if ("" !== u[r]) for (n = 0, l = _.length; n < l; n++) o = u[r] + "", s = p ? void 0 !== d[n] ? d[n] : "" : d[0], u[r] = o.split(_[n]).join(s), a && u[r] !== o && (this.window[a] += (o.length - u[r].length) / _[n].length);return f ? u : u[0];
}function strpos(t, e, i) {
  var a = (t + "").indexOf(e, i || 0);return -1 !== a && a;
}function array_push(t) {
  var e = 0,
      i = "",
      a = arguments,
      r = a.length,
      n = /^\d$/,
      o = 0,
      s = 0,
      c = 0;if (t.hasOwnProperty("length")) {
    for (e = 1; e < r; e++) t[t.length] = a[e];return t.length;
  }for (i in t) t.hasOwnProperty(i) && (++c, -1 !== i.search(n) && (s = (o = parseInt(i, 10)) > s ? o : s));for (e = 1; e < r; e++) t[++s] = a[e];return c + e - 1;
}function empty(t) {
  var e,
      i,
      a,
      r = [void 0, null, !1, 0, "", "0"];for (i = 0, a = r.length; i < a; i++) if (t === r[i]) return !0;if ("object" == typeof t) {
    for (e in t) return !1;return !0;
  }return !1;
}function array_merge() {
  var t,
      e = Array.prototype.slice.call(arguments),
      i = e.length,
      a = {},
      r = "",
      n = 0,
      o = 0,
      s = 0,
      c = 0,
      l = Object.prototype.toString,
      _ = !0;for (s = 0; s < i; s++) if ("[object Array]" !== l.call(e[s])) {
    _ = !1;break;
  }if (_) {
    for (_ = [], s = 0; s < i; s++) _ = _.concat(e[s]);return _;
  }for (s = 0, c = 0; s < i; s++) if (t = e[s], "[object Array]" === l.call(t)) for (o = 0, n = t.length; o < n; o++) a[c++] = t[o];else for (r in t) t.hasOwnProperty(r) && (parseInt(r, 10) + "" === r ? a[c++] = t[r] : a[r] = t[r]);return a;
}function Garment(t, e) {
  function i() {
    0 == window.orientation || void 0 === window.orientation ? ($("#orientate_vertical").removeClass("visible"), $("#body_height").removeClass("no_overflow")) : ($("#orientate_vertical").addClass("visible"), $("#body_height").addClass("no_overflow"));
  }function a(t, e, i, a) {
    var r = { width: 0, left: 0, top: 0, marginRight: "auto" };return t < e ? (r.width = a / e, r.left = (i - r.width) / 2) : "man_pants" == o.product_type && "folded" == o.current.view ? (r.width = a, r.marginRight = -r.width / 2) : r.width = i, r;
  }function r() {
    var t = u.height() - 130,
        e = u.width() - 45;if (o.complex) var t = u.height() - 45,
        e = u.width() - 45;"without_model" != o.current.view || "man_suit2" != o.product_type && "man_smoking" != o.product_type && "man_levita" != o.product_type && "man_frac" != o.product_type && "man_chaque" != o.product_type || $(".add_to_cart").hasClass("visible") && (t *= .85);var i = t / e;p.width();if (o.complex) {
      var r = (c = a(i, viewport[o.current.view].base.ratio, e, t)).width / viewport[o.current.view].base.w,
          n = viewport[o.current.view][d].h * r;if ("without_jacket" == o.current.view && 1 != o.current.config.waistcoat) {
        var s = d;d = "man_pants";
      }c.top = -viewport[o.current.view][d].top * r, "without_jacket" == o.current.view && 1 != o.current.config.waistcoat && (d = s), c.top > 0 && (c.top = 0);
    } else {
      var c = a(i, viewport[o.current.view].base.ratio, e, t),
          r = c.width / viewport[o.current.view].base.w,
          n = viewport[o.current.view][d].h * r;c.top = -viewport[o.current.view][d].top * r, n < t && (c.top += (t - n) / 2), c.top > 0 && (c.top = 0);
    }p.css(c), $("#shirt_initials_svg").css("top", c.top), o.top_original = c.top;
  }this.step = "";o = this;window.addEventListener("orientationchange", function () {
    i(), setTimeout(function () {
      o.slides_generator();
    }, 500);
  }, !1), i();for (var n in e) this[n] = e[n];if ($(".extra_block_man_jacket  div.config_block_title").hide(), this.container = $(t), this.rend = $("#available_window", this.container), this.render = $("#available_window .viewport", this.container), this.render_enabled = !1, this._fabric_block_obj = null, this._fabric_block = "", this._relations_active = {}, this._events = {}, this.multiple_fabric_enabled = !1, this.multi_fabric_active = !1, this.allow_redirect = !1, this.window_title = document.title, this.loading_layer = $(".garment_loading", this.container), this.loading_general = $(".loading_general"), this.render_zoom = $("#available_window_zoom .layers"), this.load_general = !1, this.has_extra_lining = !1, this.has_extra_unlined = !1, this.real_product_type = this.product_type, "man_levita" != this.product_type && "man_frac" != this.product_type && "man_chaque" != this.product_type || (this.real_product_type = "man_ceremonial"), this.current.product_type = this.product_type, this.multi_options_width = [], this.pre_filter_active = !1, this.active_titles = !1, this.first_resize = 0, this.hammertime = "", this.scale_render = 1, this.initScale = 1, this.quilted_alert = !1, this.active_info_bars = !0, this.viewport = "", this.slider = "", this.top_original = $(".viewport").css("top"), this.base_configurer = location.protocol + "//" + location.host + location.pathname, this.filters_applied = [], this.product_saved = !1, this.stop_counters_popup = !1, this.navigate_configurator_button = $(".garment_block_config .navigate"), this.popup_status_step = 0, this.fabric_preview_opened = !1, this.load_linings = !1, this.actived_coat_seters = !1, this.customer_active = !1, this.cont_favorites = 0, this.session_time = Date.now(), this.inactive_time = 0, this.limit_session_time = 0, this.limit_inactive_time = 0, this.action_fabric_changed = !1, this.lastSharedUrl = null, this.polo_special_options = [], this.polo_special_options_open = !1, this.pending_callbacks = {}, this.logos_code = [], $(document).bind("click", function (t) {
    o.inactive_time = 0;
  }), this.complex ? (this.multi_fabric_options = this.product_parts, "man_suit2" != this.product_type && "man_suit3" != this.product_type && "man_levita" != this.product_type && "man_frac" != this.product_type && "man_chaque" != this.product_type || (this.multi_fabric_options[2] = "man_waistcoat"), this.current.config._active_block = this.multi_fabric_options[0], "man_smoking_jacket" == this.multi_fabric_options[0] && (this.multi_fabric_options[0] = "man_jacket"), "man_levita_jacket" == this.multi_fabric_options[0] && (this.multi_fabric_options[0] = "man_jacket"), "man_frac_jacket" == this.multi_fabric_options[0] && (this.multi_fabric_options[0] = "man_jacket"), "man_chaque_jacket" == this.multi_fabric_options[0] && (this.multi_fabric_options[0] = "man_jacket"), this._fabric_block = this.multi_fabric_options[0], o.multiple_fabric_enabled = !0) : this._fabric_block = this.product_type, "man_polo" == this.product_type) {
    var o = this,
        s = [];$(".extra_container.logos .logo").each(function () {
      var t = $(this).attr("rel"),
          e = $(this).attr("code");s[t] = e;
    }), o.logos_code = s;
  }"defaultFilter=wedding" == window.location.search.substring(1) && "man_waistcoat" == this.product_type && $(".garment_block_extra div.waistcoat_metal_buttons").hide(), this.fabric_info_global = "", this.mobile_enabled = window.mobile_enabled, this.is_mobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent), this.mobile_current_option = !1, this.mobile_layer_extra_fabrics_visible = !1, this.mobile_layer_extra_fabrics;var c = this.product_type;-1 != jQuery.inArray(c, ["man_suit2", "man_suit3", "man_smoking", "man_levita", "man_chaque", "man_frac"]) && this.views.push("without_jacket"), this.available_views = this.views, this.current.view = "front", this.views = [];var l = parse_query_string(document.location.search, "view");l && this.changeView(l, !1);var _ = [];$(".extra_block .extra_container", this.container).each(function () {
    var t = this.getAttribute("option"),
        e = $(this).attr("rel");e && (e = e.split(","), _[t] = e);
  }), this.views.extra = _;var d,
      u = $("#available_window"),
      p = u.find(".layers"),
      f = "front",
      h = {};for (var n in viewport) {
    f || (f = n), h[n] = { w: 0, h: 0, top: viewport[n].base.h }, viewport[n].base.ratio = 0;for (var v in viewport[n]) "base" != v && (viewport[n][v].ratio = viewport[n][v].h / viewport[n][v].w, d || (d = v), viewport[n].base.ratio < viewport[n][v].ratio && (viewport[n].base.ratio = viewport[n][v].ratio), viewport[n][v].w > h[n].w && (h[n].w = viewport[n][v].w), viewport[n][v].h + viewport[n][v].top > h[n].h && (h[n].h = viewport[n][v].h + viewport[n][v].top), viewport[n][v].top < h[n].top && (h[n].top = viewport[n][v].top));h[n].h = h[n].h - h[n].top, h[n].ratio = h[n].h / h[n].w;
  }if ((o = this).viewport = viewport, $(window).resize(r), r(), ["man_chaque", "man_levita", "man_frac", "man_smoking", "man_pants", "man_suit2", "man_suit3", "man_jacket", "man_waistcoat", "man_shirt", "man_coat"].indexOf(this.product_type) > -1) {
    if ("man_shirt" == this.product_type && (this.current.view_detail = "inside", this.current.neck_open = 0, this.current.inner_sleeve = 0, this.current.style || (this.current.style = "business"), this.shirt_styles = this.styles, "auto" != this.current.style && "business" != this.current.style)) {
      var b = $(".image_render .options_render a.style"),
          m = $("span", b),
          g = this.shirt_styles[this.current.style];void 0 !== g && ("auto" != this.current.style && $(".title", b).hide(), "auto" != g.view_detail && (this.current.view_detail = g.view_detail), "auto" != g.neck_open && (this.current.neck_open = g.neck_open), "auto" != g.inner_sleeve && (this.current.inner_sleeve = g.inner_sleeve), "auto" != g.icon && m.html(g.icon), "auto" != this.current.style && $(".title." + g.title_to_show, b).show());
    }var w = this.product_type;["man_suit2", "man_suit3", "man_frac", "man_levita", "man_chaque", "man_smoking"].indexOf(w) > -1 && (w = "man_jacket", o.has_extra_lining = "man_jacket"), ["man_jacket", "man_suit2", "man_suit3", "man_waistcoat"].indexOf(w) > -1 && (o.has_extra_lining = w);var k = this.fabric[w];for (var n in k) this.current.fabric[n] = k[n];"1" == this.current.config.pants_chinos && (this.current.fabric.pants_button_code = 4);
  } else for (var y = ["button_code", "zipper_color", "label_color", "shoe_color", "lining_id", "pant_code"], x = 0; x < y.length; x++) void 0 !== e.fabric[this.product_type][y[x]] && (this.current.fabric[y[x]] = e.fabric[this.product_type][y[x]]);this.current.fabric.shoe_color = e.fabric.shoes, this.current.fabric.shoe_color || (this.current.fabric.shoe_color = "black"), this.current.satin_jacket_buttons = e.fabric.id_t4l_satin, this.current.satin_jacket_buttons || (this.current.satin_jacket_buttons = 1), this.current.satin_jacket_lapel = e.fabric.id_t4l_satin, this.current.satin_jacket_lapel || (this.current.satin_jacket_lapel = 1), this.current.satin_jacket_pockets = e.fabric.id_t4l_satin, this.current.satin_jacket_pockets || (this.current.satin_jacket_pockets = 1), this.current.satin_pants_buttons = e.fabric.id_t4l_satin, this.current.satin_pants_buttons || (this.current.satin_pants_buttons = 1), this.current.satin_pants_ribbon = e.fabric.id_t4l_satin, o.current.satin_pants_ribbon || (this.current.satin_pants_ribbon = 1), this.fabrics_disabled = [], void 0 === window.fabrics && (window.fabrics = {}), this._fabrics = window.fabrics, void 0 === window.linings && (window.linings = {}), this._linings = window.linings;o = this;$("#shirt_initials_svg").swipe({ swipeLeft: function (t) {
      var e = jQuery.inArray(o.current.view, o.available_views);(e += 1) > o.available_views.length - 1 && (e = 0), o.slider.set(e);
    }, swipeRight: function (t) {
      var e = jQuery.inArray(o.current.view, o.available_views);(e -= 1) < 0 && (e = o.available_views.length - 1), o.slider.set(e);
    } });var C = $("#available_window"),
      j = !1,
      S = !1;C.bind("touchstart", function (t) {
    -1 != ["initials_preview", "centered", "product_type", "loading_text", o.product_type, "opt_trigger", "config_block_title", "extra_block_title"].indexOf(t.target.classList[0]) || $("#available_window").hasClass("zoom") || "zoom" == t.target.classList[0] || (j = !0), S = t.originalEvent.changedTouches[0].clientY;
  }), C.bind("touchend", function (t) {
    j = !1;
  }), C.bind("touchmove", function (t) {
    var e = Math.round(t.originalEvent.changedTouches[0].clientY - S);j && 0 == $(window).scrollTop() && e >= 0 && t.preventDefault();
  });var T = window.getStoredCart();if (T) {
    var A = function (t) {
      var e = 0;for (var i in t) t.hasOwnProperty(i) && ++e;return e;
    }(T.products);A > 0 ? $("#mobile-cart-trigger span").append(A) : $("#mobile-cart-trigger").hide();
  }
}function isValidCharacterInitials(t) {
  if (void 0 !== t.charCode && (t = t.charCode), "0" == t) return !0;if ("object" == typeof t && "0" == (t = t.which)) return !0;var e = /[a-zA-Z0-9.\s /<>,;:"'`!@#%^&*(){}\-_+=|-~¬ºª¡\[\]^`´ç¨·]/g;return !!String.fromCharCode(t).match(e);
}String.prototype.trim = function (t) {
  var e,
      i = 0,
      a = 0,
      r = this + "";for (e = t ? (t += "").replace(/([\[\]\(\)\.\?\/\*\{\}\+\$\^\:])/g, "$1") : " \n\r\t\f\v            ​\u2028\u2029　", i = r.length, a = 0; a < i; a++) if (-1 === e.indexOf(r.charAt(a))) {
    r = r.substring(a);break;
  }for (a = (i = r.length) - 1; a >= 0; a--) if (-1 === e.indexOf(r.charAt(a))) {
    r = r.substring(0, a + 1);break;
  }return -1 === e.indexOf(r.charAt(0)) ? r : "";
}, String.prototype.capitalize = function () {
  return this.charAt(0).toUpperCase() + this.slice(1);
}, String.prototype.getID = function (t) {
  return t ? this.replace(/^[^#]*#/, "") : this.replace(/^[^#]*/, "");
}, Object.size = function (t) {
  var e,
      i = 0;for (e in t) t.hasOwnProperty(e) && i++;return i;
}, function (t) {
  "function" == typeof define && define.amd && define.amd.jQuery ? define(["jquery"], t) : t(jQuery);
}(function (t) {
  function e(e) {
    return !e || void 0 !== e.allowPageScroll || void 0 === e.swipe && void 0 === e.swipeStatus || (e.allowPageScroll = l), void 0 !== e.click && void 0 === e.tap && (e.tap = e.click), e || (e = {}), e = t.extend({}, t.fn.swipe.defaults, e), this.each(function () {
      var a = t(this),
          r = a.data(S);r || (r = new i(this, e), a.data(S, r));
    });
  }function i(e, i) {
    function T(e) {
      if (!(lt() || t(e.target).closest(i.excludedElements, Nt).length > 0)) {
        var a,
            r = e.originalEvent ? e.originalEvent : e,
            n = r.touches,
            o = n ? n[0] : r;return Bt = w, n ? Qt = n.length : e.preventDefault(), qt = 0, Lt = null, Ut = null, Ht = 0, It = 0, Dt = 0, Rt = 1, Ft = 0, Vt = ft(), Mt = bt(), st(), !n || Qt === i.fingers || i.fingers === m || M() ? (dt(0, o), Wt = jt(), 2 == Qt && (dt(1, n[1]), It = Dt = wt(Vt[0].start, Vt[1].start)), (i.swipeStatus || i.pinchStatus) && (a = q(r, Bt))) : a = !1, !1 === a ? (Bt = y, q(r, Bt), a) : (i.hold && (te = setTimeout(t.proxy(function () {
          Nt.trigger("hold", [r.target]), i.hold && (a = i.hold.call(Nt, r, r.target));
        }, this), i.longTapThreshold)), _t(!0), null);
      }
    }function A(t) {
      var e = t.originalEvent ? t.originalEvent : t;if (Bt !== $ && Bt !== y && !ct()) {
        var a,
            r = e.touches,
            n = ut(r ? r[0] : e);if (Xt = jt(), r && (Qt = r.length), i.hold && clearTimeout(te), Bt = k, 2 == Qt && (0 == It ? (dt(1, r[1]), It = Dt = wt(Vt[0].start, Vt[1].start)) : (ut(r[1]), Dt = wt(Vt[0].end, Vt[1].end), Ut = $t(Vt[0].end, Vt[1].end)), Rt = kt(It, Dt), Ft = Math.abs(It - Dt)), Qt === i.fingers || i.fingers === m || !r || M()) {
          if (Lt = Ct(n.start, n.end), F(t, Lt), qt = yt(n.start, n.end), Ht = gt(), ht(Lt, qt), (i.swipeStatus || i.pinchStatus) && (a = q(e, Bt)), !i.triggerOnTouchEnd || i.triggerOnTouchLeave) {
            var o = !0;if (i.triggerOnTouchLeave) {
              var s = St(this);o = Tt(n.end, s);
            }!i.triggerOnTouchEnd && o ? Bt = z(k) : i.triggerOnTouchLeave && !o && (Bt = z($)), Bt != y && Bt != $ || q(e, Bt);
          }
        } else q(e, Bt = y);!1 === a && q(e, Bt = y);
      }
    }function E(t) {
      var e = t.originalEvent ? t.originalEvent : t,
          a = e.touches;return a && a.length ? (ot(), !0) : (ct() && (Qt = Jt), Xt = jt(), Ht = gt(), I() || !H() ? q(e, Bt = y) : i.triggerOnTouchEnd || 0 == i.triggerOnTouchEnd && Bt === k ? (t.preventDefault(), q(e, Bt = $)) : !i.triggerOnTouchEnd && Y() ? L(e, Bt = $, p) : Bt === k && q(e, Bt = y), _t(!1), null);
    }function G() {
      Qt = 0, Xt = 0, Wt = 0, It = 0, Dt = 0, Rt = 1, st(), _t(!1);
    }function O(t) {
      var e = t.originalEvent ? t.originalEvent : t;i.triggerOnTouchLeave && q(e, Bt = z($));
    }function P() {
      Nt.unbind(Et, T), Nt.unbind(zt, G), Nt.unbind(Gt, A), Nt.unbind(Ot, E), Pt && Nt.unbind(Pt, O), _t(!1);
    }function z(t) {
      var e = t,
          a = R(),
          r = H(),
          n = I();return !a || n ? e = y : !r || t != k || i.triggerOnTouchEnd && !i.triggerOnTouchLeave ? !r && t == $ && i.triggerOnTouchLeave && (e = y) : e = $, e;
    }function q(t, e) {
      var i,
          a = t.touches;return V() || Q() || N() || M() ? ((V() || Q()) && (i = L(t, e, d)), (N() || M()) && !1 !== i && (i = L(t, e, u))) : rt() && !1 !== i ? i = L(t, e, f) : nt() && !1 !== i ? i = L(t, e, h) : at() && !1 !== i && (i = L(t, e, p)), e === y && G(t), e === $ && (a ? a.length || G(t) : G(t)), i;
    }function L(e, l, _) {
      var v;if (_ == d) {
        if (Nt.trigger("swipeStatus", [l, Lt || null, qt || 0, Ht || 0, Qt, Vt]), i.swipeStatus && !1 === (v = i.swipeStatus.call(Nt, e, l, Lt || null, qt || 0, Ht || 0, Qt, Vt))) return !1;if (l == $ && B()) {
          if (Nt.trigger("swipe", [Lt, qt, Ht, Qt, Vt]), i.swipe && !1 === (v = i.swipe.call(Nt, e, Lt, qt, Ht, Qt, Vt))) return !1;switch (Lt) {case a:
              Nt.trigger("swipeLeft", [Lt, qt, Ht, Qt, Vt]), i.swipeLeft && (v = i.swipeLeft.call(Nt, e, Lt, qt, Ht, Qt, Vt));break;case r:
              Nt.trigger("swipeRight", [Lt, qt, Ht, Qt, Vt]), i.swipeRight && (v = i.swipeRight.call(Nt, e, Lt, qt, Ht, Qt, Vt));break;case n:
              Nt.trigger("swipeUp", [Lt, qt, Ht, Qt, Vt]), i.swipeUp && (v = i.swipeUp.call(Nt, e, Lt, qt, Ht, Qt, Vt));break;case o:
              Nt.trigger("swipeDown", [Lt, qt, Ht, Qt, Vt]), i.swipeDown && (v = i.swipeDown.call(Nt, e, Lt, qt, Ht, Qt, Vt));}
        }
      }if (_ == u) {
        if (Nt.trigger("pinchStatus", [l, Ut || null, Ft || 0, Ht || 0, Qt, Rt, Vt]), i.pinchStatus && !1 === (v = i.pinchStatus.call(Nt, e, l, Ut || null, Ft || 0, Ht || 0, Qt, Rt, Vt))) return !1;if (l == $ && U()) switch (Ut) {case s:
            Nt.trigger("pinchIn", [Ut || null, Ft || 0, Ht || 0, Qt, Rt, Vt]), i.pinchIn && (v = i.pinchIn.call(Nt, e, Ut || null, Ft || 0, Ht || 0, Qt, Rt, Vt));break;case c:
            Nt.trigger("pinchOut", [Ut || null, Ft || 0, Ht || 0, Qt, Rt, Vt]), i.pinchOut && (v = i.pinchOut.call(Nt, e, Ut || null, Ft || 0, Ht || 0, Qt, Rt, Vt));}
      }return _ == p ? l !== y && l !== $ || (clearTimeout(Kt), clearTimeout(te), J() && !tt() ? (Zt = jt(), Kt = setTimeout(t.proxy(function () {
        Zt = null, Nt.trigger("tap", [e.target]), i.tap && (v = i.tap.call(Nt, e, e.target));
      }, this), i.doubleTapThreshold)) : (Zt = null, Nt.trigger("tap", [e.target]), i.tap && (v = i.tap.call(Nt, e, e.target)))) : _ == f ? l !== y && l !== $ || (clearTimeout(Kt), Zt = null, Nt.trigger("doubletap", [e.target]), i.doubleTap && (v = i.doubleTap.call(Nt, e, e.target))) : _ == h && (l !== y && l !== $ || (clearTimeout(Kt), Zt = null, Nt.trigger("longtap", [e.target]), i.longTap && (v = i.longTap.call(Nt, e, e.target)))), v;
    }function H() {
      var t = !0;return null !== i.threshold && (t = qt >= i.threshold), t;
    }function I() {
      var t = !1;return null !== i.cancelThreshold && null !== Lt && (t = vt(Lt) - qt >= i.cancelThreshold), t;
    }function D() {
      return null === i.pinchThreshold || Ft >= i.pinchThreshold;
    }function R() {
      return !i.maxTimeThreshold || !(Ht >= i.maxTimeThreshold);
    }function F(t, e) {
      if (!1 !== i.preventDefaultEvents) if (i.allowPageScroll === l) t.preventDefault();else {
        var s = i.allowPageScroll === _;switch (e) {case a:
            (i.swipeLeft && s || !s && i.allowPageScroll != v) && t.preventDefault();break;case r:
            (i.swipeRight && s || !s && i.allowPageScroll != v) && t.preventDefault();break;case n:
            (i.swipeUp && s || !s && i.allowPageScroll != b) && t.preventDefault();break;case o:
            (i.swipeDown && s || !s && i.allowPageScroll != b) && t.preventDefault();}
      }
    }function U() {
      var t = W(),
          e = X(),
          i = D();return t && e && i;
    }function M() {
      return !!(i.pinchStatus || i.pinchIn || i.pinchOut);
    }function N() {
      return !(!U() || !M());
    }function B() {
      var t = R(),
          e = H(),
          i = W(),
          a = X();return !I() && a && i && e && t;
    }function Q() {
      return !!(i.swipe || i.swipeStatus || i.swipeLeft || i.swipeRight || i.swipeUp || i.swipeDown);
    }function V() {
      return !(!B() || !Q());
    }function W() {
      return Qt === i.fingers || i.fingers === m || !x;
    }function X() {
      return 0 !== Vt[0].end.x;
    }function Y() {
      return !!i.tap;
    }function J() {
      return !!i.doubleTap;
    }function Z() {
      return !!i.longTap;
    }function K() {
      if (null == Zt) return !1;var t = jt();return J() && t - Zt <= i.doubleTapThreshold;
    }function tt() {
      return K();
    }function et() {
      return (1 === Qt || !x) && (isNaN(qt) || qt < i.threshold);
    }function it() {
      return Ht > i.longTapThreshold && qt < g;
    }function at() {
      return !(!et() || !Y());
    }function rt() {
      return !(!K() || !J());
    }function nt() {
      return !(!it() || !Z());
    }function ot() {
      Yt = jt(), Jt = event.touches.length + 1;
    }function st() {
      Yt = 0, Jt = 0;
    }function ct() {
      var t = !1;return Yt && jt() - Yt <= i.fingerReleaseThreshold && (t = !0), t;
    }function lt() {
      return !(!0 !== Nt.data(S + "_intouch"));
    }function _t(t) {
      !0 === t ? (Nt.bind(Gt, A), Nt.bind(Ot, E), Pt && Nt.bind(Pt, O)) : (Nt.unbind(Gt, A, !1), Nt.unbind(Ot, E, !1), Pt && Nt.unbind(Pt, O, !1)), Nt.data(S + "_intouch", !0 === t);
    }function dt(t, e) {
      var i = void 0 !== e.identifier ? e.identifier : 0;return Vt[t].identifier = i, Vt[t].start.x = Vt[t].end.x = e.pageX || e.clientX, Vt[t].start.y = Vt[t].end.y = e.pageY || e.clientY, Vt[t];
    }function ut(t) {
      var e = pt(void 0 !== t.identifier ? t.identifier : 0);return e.end.x = t.pageX || t.clientX, e.end.y = t.pageY || t.clientY, e;
    }function pt(t) {
      for (var e = 0; e < Vt.length; e++) if (Vt[e].identifier == t) return Vt[e];
    }function ft() {
      for (var t = [], e = 0; e <= 5; e++) t.push({ start: { x: 0, y: 0 }, end: { x: 0, y: 0 }, identifier: 0 });return t;
    }function ht(t, e) {
      e = Math.max(e, vt(t)), Mt[t].distance = e;
    }function vt(t) {
      if (Mt[t]) return Mt[t].distance;
    }function bt() {
      var t = {};return t[a] = mt(a), t[r] = mt(r), t[n] = mt(n), t[o] = mt(o), t;
    }function mt(t) {
      return { direction: t, distance: 0 };
    }function gt() {
      return Xt - Wt;
    }function wt(t, e) {
      var i = Math.abs(t.x - e.x),
          a = Math.abs(t.y - e.y);return Math.round(Math.sqrt(i * i + a * a));
    }function kt(t, e) {
      return (e / t * 1).toFixed(2);
    }function $t() {
      return Rt < 1 ? c : s;
    }function yt(t, e) {
      return Math.round(Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2)));
    }function xt(t, e) {
      var i = t.x - e.x,
          a = e.y - t.y,
          r = Math.atan2(a, i),
          n = Math.round(180 * r / Math.PI);return n < 0 && (n = 360 - Math.abs(n)), n;
    }function Ct(t, e) {
      var i = xt(t, e);return i <= 45 && i >= 0 ? a : i <= 360 && i >= 315 ? a : i >= 135 && i <= 225 ? r : i > 45 && i < 135 ? o : n;
    }function jt() {
      return new Date().getTime();
    }function St(e) {
      var i = (e = t(e)).offset();return { left: i.left, right: i.left + e.outerWidth(), top: i.top, bottom: i.top + e.outerHeight() };
    }function Tt(t, e) {
      return t.x > e.left && t.x < e.right && t.y > e.top && t.y < e.bottom;
    }var At = x || j || !i.fallbackToMouseEvents,
        Et = At ? j ? C ? "MSPointerDown" : "pointerdown" : "touchstart" : "mousedown",
        Gt = At ? j ? C ? "MSPointerMove" : "pointermove" : "touchmove" : "mousemove",
        Ot = At ? j ? C ? "MSPointerUp" : "pointerup" : "touchend" : "mouseup",
        Pt = At ? null : "mouseleave",
        zt = j ? C ? "MSPointerCancel" : "pointercancel" : "touchcancel",
        qt = 0,
        Lt = null,
        Ht = 0,
        It = 0,
        Dt = 0,
        Rt = 1,
        Ft = 0,
        Ut = 0,
        Mt = null,
        Nt = t(e),
        Bt = "start",
        Qt = 0,
        Vt = null,
        Wt = 0,
        Xt = 0,
        Yt = 0,
        Jt = 0,
        Zt = 0,
        Kt = null,
        te = null;try {
      Nt.bind(Et, T), Nt.bind(zt, G);
    } catch (e) {
      t.error("events not supported " + Et + "," + zt + " on jQuery.swipe");
    }this.enable = function () {
      return Nt.bind(Et, T), Nt.bind(zt, G), Nt;
    }, this.disable = function () {
      return P(), Nt;
    }, this.destroy = function () {
      P(), Nt.data(S, null), Nt = null;
    }, this.option = function (e, a) {
      if (void 0 !== i[e]) {
        if (void 0 === a) return i[e];i[e] = a;
      } else t.error("Option " + e + " does not exist on jQuery.swipe.options");return null;
    };
  }var a = "left",
      r = "right",
      n = "up",
      o = "down",
      s = "in",
      c = "out",
      l = "none",
      _ = "auto",
      d = "swipe",
      u = "pinch",
      p = "tap",
      f = "doubletap",
      h = "longtap",
      v = "horizontal",
      b = "vertical",
      m = "all",
      g = 10,
      w = "start",
      k = "move",
      $ = "end",
      y = "cancel",
      x = "ontouchstart" in window,
      C = window.navigator.msPointerEnabled && !window.navigator.pointerEnabled,
      j = window.navigator.pointerEnabled || window.navigator.msPointerEnabled,
      S = "TouchSwipe",
      T = { fingers: 1, threshold: 75, cancelThreshold: null, pinchThreshold: 20, maxTimeThreshold: null, fingerReleaseThreshold: 250, longTapThreshold: 500, doubleTapThreshold: 200, swipe: null, swipeLeft: null, swipeRight: null, swipeUp: null, swipeDown: null, swipeStatus: null, pinchIn: null, pinchOut: null, pinchStatus: null, click: null, tap: null, doubleTap: null, longTap: null, hold: null, triggerOnTouchEnd: !0, triggerOnTouchLeave: !1, allowPageScroll: "auto", fallbackToMouseEvents: !0, excludedElements: "label, button, input, select, textarea, a, .noSwipe", preventDefaultEvents: !0 };t.fn.swipe = function (i) {
    var a = t(this),
        r = a.data(S);if (r && "string" == typeof i) {
      if (r[i]) return r[i].apply(this, Array.prototype.slice.call(arguments, 1));t.error("Method " + i + " does not exist on jQuery.swipe");
    } else if (!(r || "object" != typeof i && i)) return e.apply(this, arguments);return a;
  }, t.fn.swipe.version = "1.6.9", t.fn.swipe.defaults = T, t.fn.swipe.phases = { PHASE_START: w, PHASE_MOVE: k, PHASE_END: $, PHASE_CANCEL: y }, t.fn.swipe.directions = { LEFT: a, RIGHT: r, UP: n, DOWN: o, IN: s, OUT: c }, t.fn.swipe.pageScroll = { NONE: l, HORIZONTAL: v, VERTICAL: b, AUTO: _ }, t.fn.swipe.fingers = { ONE: 1, TWO: 2, THREE: 3, ALL: m };
}), function (t, e) {
  "function" == typeof define && define.amd ? define(e) : "object" == typeof exports ? module.exports = e() : t.Blazy = e();
}(this, function () {
  "use strict";
  function t(t) {
    var i = t._util;i.elements = f(t.options), i.count = i.elements.length, i.destroyed && (i.destroyed = !1, t.options.container && m(t.options.container, function (t) {
      v(t, "scroll", i.validateT);
    }), v(window, "resize", i.saveViewportOffsetT), v(window, "resize", i.validateT), v(window, "scroll", i.validateT)), e(t);
  }function e(t) {
    for (var e = t._util, a = 0; a < e.count; a++) {
      var r = e.elements[a];(i(r, t.options) || u(r, t.options.successClass)) && (t.load(r), e.elements.splice(a, 1), e.count--, a--);
    }0 === e.count && t.destroy();
  }function i(t, e) {
    var i = t.getBoundingClientRect();if (e.container && y) {
      var r = t.closest(e.containerClass);if (r) {
        var n = r.getBoundingClientRect();if (a(n, k)) {
          var o = n.top - e.offset,
              s = n.right + e.offset,
              c = n.bottom + e.offset,
              l = n.left - e.offset;return a(i, { top: o > k.top ? o : k.top, right: s < k.right ? s : k.right, bottom: c < k.bottom ? c : k.bottom, left: l > k.left ? l : k.left });
        }return !1;
      }
    }return a(i, k);
  }function a(t, e) {
    return t.right >= e.left && t.bottom >= e.top && t.left <= e.right && t.top <= e.bottom;
  }function r(t, e, i) {
    if (!u(t, i.successClass) && (e || i.loadInvisible || t.offsetWidth > 0 && t.offsetHeight > 0)) {
      var a = l(t, w) || l(t, i.src);if (a) {
        var r = a.split(i.separator),
            c = r[$ && r.length > 1 ? 1 : 0],
            _ = l(t, i.srcset),
            f = d(t, "img"),
            h = t.parentNode,
            g = h && d(h, "picture");if (f || void 0 === t.src) {
          var k = new Image(),
              y = function () {
            i.error && i.error(t, "invalid"), p(t, i.errorClass), b(k, "error", y), b(k, "load", j);
          },
              j = function () {
            f ? g || s(t, c, _) : t.style.backgroundImage = 'url("' + c + '")', n(t, i), b(k, "load", j), b(k, "error", y);
          };g && (k = t, m(h.getElementsByTagName("source"), function (t) {
            o(t, C, i.srcset);
          })), v(k, "error", y), v(k, "load", j), s(k, c, _);
        } else t.src = c, n(t, i);
      } else d(t, "video") ? (m(t.getElementsByTagName("source"), function (t) {
        o(t, x, i.src);
      }), t.load(), n(t, i)) : (i.error && i.error(t, "missing"), p(t, i.errorClass));
    }
  }function n(t, e) {
    p(t, e.successClass), e.success && e.success(t), _(t, e.src), _(t, e.srcset), m(e.breakpoints, function (e) {
      _(t, e.src);
    });
  }function o(t, e, i) {
    var a = l(t, i);a && (c(t, e, a), _(t, i));
  }function s(t, e, i) {
    i && c(t, C, i), t.src = e;
  }function c(t, e, i) {
    t.setAttribute(e, i);
  }function l(t, e) {
    return t.getAttribute(e);
  }function _(t, e) {
    t.removeAttribute(e);
  }function d(t, e) {
    return t.nodeName.toLowerCase() === e;
  }function u(t, e) {
    return -1 !== (" " + t.className + " ").indexOf(" " + e + " ");
  }function p(t, e) {
    u(t, e) || (t.className += " " + e);
  }function f(t) {
    for (var e = [], i = t.root.querySelectorAll(t.selector), a = i.length; a--; e.unshift(i[a]));return e;
  }function h(t) {
    k.bottom = (window.innerHeight || document.documentElement.clientHeight) + t, k.right = (window.innerWidth || document.documentElement.clientWidth) + t;
  }function v(t, e, i) {
    t.attachEvent ? t.attachEvent && t.attachEvent("on" + e, i) : t.addEventListener(e, i, { capture: !1, passive: !0 });
  }function b(t, e, i) {
    t.detachEvent ? t.detachEvent && t.detachEvent("on" + e, i) : t.removeEventListener(e, i, { capture: !1, passive: !0 });
  }function m(t, e) {
    if (t && e) for (var i = t.length, a = 0; a < i && !1 !== e(t[a], a); a++);
  }function g(t, e, i) {
    var a = 0;return function () {
      var r = +new Date();r - a < e || (a = r, t.apply(i, arguments));
    };
  }var w,
      k,
      $,
      y,
      x = "src",
      C = "srcset";return function (i) {
    if (!document.querySelectorAll) {
      var a = document.createStyleSheet();document.querySelectorAll = function (t, e, i, r, n) {
        for (n = document.all, e = [], i = (t = t.replace(/\[for\b/gi, "[htmlFor").split(",")).length; i--;) {
          for (a.addRule(t[i], "k:v"), r = n.length; r--;) n[r].currentStyle.k && e.push(n[r]);a.removeRule(0);
        }return e;
      };
    }var n = this,
        o = n._util = {};o.elements = [], o.destroyed = !0, n.options = i || {}, n.options.error = n.options.error || !1, n.options.offset = n.options.offset || 100, n.options.root = n.options.root || document, n.options.success = n.options.success || !1, n.options.selector = n.options.selector || ".b-lazy", n.options.separator = n.options.separator || "|", n.options.containerClass = n.options.container, n.options.container = !!n.options.containerClass && document.querySelectorAll(n.options.containerClass), n.options.errorClass = n.options.errorClass || "b-error", n.options.breakpoints = n.options.breakpoints || !1, n.options.loadInvisible = n.options.loadInvisible || !1, n.options.successClass = n.options.successClass || "b-loaded", n.options.validateDelay = n.options.validateDelay || 25, n.options.saveViewportOffsetDelay = n.options.saveViewportOffsetDelay || 50, n.options.srcset = n.options.srcset || "data-srcset", n.options.src = w = n.options.src || "data-src", y = Element.prototype.closest, $ = window.devicePixelRatio > 1, (k = {}).top = 0 - n.options.offset, k.left = 0 - n.options.offset, n.revalidate = function () {
      t(n);
    }, n.load = function (t, e) {
      var i = this.options;t && void 0 === t.length ? r(t, e, i) : m(t, function (t) {
        r(t, e, i);
      });
    }, n.destroy = function () {
      var t = n._util;n.options.container && m(n.options.container, function (e) {
        b(e, "scroll", t.validateT);
      }), b(window, "scroll", t.validateT), b(window, "resize", t.validateT), b(window, "resize", t.saveViewportOffsetT), t.count = 0, t.elements.length = 0, t.destroyed = !0;
    }, o.validateT = g(function () {
      e(n);
    }, n.options.validateDelay, n), o.saveViewportOffsetT = g(function () {
      h(n.options.offset);
    }, n.options.saveViewportOffsetDelay, n), h(n.options.offset), m(n.options.breakpoints, function (t) {
      if (t.width >= window.screen.width) return w = t.src, !1;
    }), setTimeout(function () {
      t(n);
    });
  };
}), Garment.prototype.adjustmentAvailableWindowtoZoom = function (t) {
  var e = $(".viewport"),
      i = { top: this.top_original, height: "auto", overflowY: "initial" };if (t && !this.complex) {
    this.top_original = e.css("top");var a = 1.55 * -this.viewport[this.current.view][this.product_type].top,
        r = 1.55 * this.viewport[this.current.view][this.product_type].h - a,
        n = $(window).height();r < n && (r = n);i = { top: a, height: r, overflowY: "hidden" }, $("img", e).each(function () {
      var t = $(this).attr("src");$(this).attr("src", t.replace("STD", "BIG"));
    });
  }e.css(i);
}, Garment.prototype.loadPreImages = function (t) {
  $("img", t).each(function () {
    var t = $(this).attr("pre-src");void 0 !== t && !1 !== t && ($(this).attr("src", t), $(this).removeAttr("pre_src"));
  });
}, Garment.prototype.onswipeform = function () {
  $("form, label").swipe("enable");
}, Garment.prototype.offswipeform = function () {
  $("form, label").swipe("disable");
}, Garment.prototype.initGarment = function () {
  var t = this;if (this.loading_general.show(), this.initGarmentConfig(), this.initGarmentFabric(), this.initGarmentExtra(), this.initMobileLayers(), this.initFabricOutOfStock(), this.initGarmentHeader(), this.updatePrice(), this.renderInit(), "winter" == filter_fabric.filter || default_alterate ? this.updateConfiguratedProduct() : this.updateConfiguratedProduct("default"), "man_coat" != this.product_type || id_cart_product || void 0 === t.config.coat_model[t.current.config.coat_model] || t.relationsApply("coat_model", t.config.coat_model[t.current.config.coat_model], !0), "man_frac" != this.product_type && "man_levita" != this.product_type || id_cart_product || void 0 === t.extra.type_flap.contrast.default || t.relationsApply("type_flap", t.extra.type_flap.contrast.default), t.actived_coat_seters = !0, this.renderDraw(), this.zoom(), $("#action_colum_desplaced").click(function () {
    $("#available_window").hasClass("desplaced") && t.goToRender();
  }), t.slides_generator(), $("form, label, label").swipe({ excludedElements: ".noSwipe", swipeLeft: function () {
      return !!$("#fabric_view_opt .image.zoom_mode").hasClass("zoom_home") || !!$("#available_window").hasClass("zoom") || ($("#fabric_view_opt").hasClass("visible") ? (History.back(), !0) : !!$("#fabric_view_opt").hasClass("zoom_mode") || !(t.scale_render > 1) && void ($("#available_window").hasClass("desplaced") && t.goToRender()));
    } }), t.onswipeform(), coat_generic_mode || $(".coat_model").hide(), $(".action .title").html().length > 28 && $(".action .info").addClass("reduced"), customer || customer_temp) {
    var e = !1;customer ? (customer_full = window.getStoredCustomer(), e = !0) : customer_temp && (customer_full = window.getStoredCustomerTemp()), customer_full.email && $.post(window.location + "?ajax=1", { email: customer_full.email, get_wish_list: !0, product_type: t.product_type, logged: e }, function (e) {
      if (e) {
        e = JSON.parse(e);var i = $("#favourite_product_popup"),
            a = e.length;if (a > 0) {
          t.cont_favorites = a, $("#favorites span").html(a), $("#favorites").addClass("visible");var r = "product_" + t.cont_favorites;t.cont_favorites > 2 && (r = "product_3_more"), i.addClass(r);for (var n in e) {
            var o = { title: e[n].product_title, price: formatPrice(e[n].price) },
                s = $(tmpl("favourite_product_tmpl", o));$(".products", i).prepend(s);var c = e[n].img_src,
                l = $('<img src="' + c + '">');$("#favourite_product_popup .image").first().html(l);var _ = "folded";_ = t.available_views.indexOf("without_model") > 0 ? "without_model" : t.available_views.indexOf("folded") > 0 ? "folded" : "front";var d = 135 / t.viewport[_].base.ratio;t.complex && (d += 10), $(".image", i).css("width", d);var u = e[n].id_product;$(".product", i).first().find(".add_to_cart").attr("data-id", u), $(".product", i).first().find(".remove").attr("data-id", u), $(".product", i).first().find(".share").attr("data-id", u), $(".product", i).first().find(".go_to_cart").attr("data-id", u), $(".product", i).first().find(".go_to_cart_loader").attr("data-id", u);var p = $(".product", i).first().find(".wrap_image").attr("href");p = p.replace("#id_product#", u), $(".product", i).first().find(".wrap_image").attr("href", p);
          }$(".product", "#favourite_product_popup").addClass("saved");
        }
      }
    });
  }
}, Garment.prototype.slides_generator = function () {
  var t = this,
      e = $("#slider"),
      i = $(".slide-wrapper", e);if (navigator.msMaxTouchPoints) e.addClass("ms-touch");else {
    t.slider = { el: { slider: e, holder: $(".holder", e) }, slideWidth: e.width(), touchstartx: void 0, touchmovex: void 0, movex: void 0, index: 0, longTouch: void 0, init: function () {
        this.bindUIEvents();
      }, bindUIEvents: function () {
        this.el.holder.on("touchstart", function (e) {
          t.slider.start(e);
        }), this.el.holder.on("touchmove", function (e) {
          t.slider.move(e);
        }), this.el.holder.on("touchend", function (e) {
          t.slider.end(e);
        });
      }, start: function (t) {
        this.touchstartx = t.originalEvent.touches[0].pageX, $(".animate").removeClass("animate");
      }, move: function (e) {
        this.touchmovex = e.originalEvent.touches[0].pageX, this.movex = this.index * this.slideWidth + (this.touchstartx - this.touchmovex), this.movex < this.slideWidth * t.available_views.length - 100 && this.el.holder.css("transform", "translate3d(-" + this.movex + "px,0,0)");
      }, end: function (e) {
        Math.abs(this.index * this.slideWidth - this.movex) > this.slideWidth / 6 && (this.movex > this.index * this.slideWidth && this.index < t.available_views.length - 1 ? this.index++ : this.movex < this.index * this.slideWidth && this.index > 0 && this.index--), this.el.holder.addClass("animate").css("transform", "translate3d(-" + this.index * this.slideWidth + "px,0,0)"), t.current.view != t.available_views[this.index] && this.change_view();
      }, set: function (t) {
        this.index = t, this.el.holder.addClass("animate").css("transform", "translate3d(-" + this.index * this.slideWidth + "px,0,0)"), this.change_view(), $(window).resize();
      }, change_view: function () {
        i.removeClass("visible").filter(".index_" + this.index).addClass("visible"), i.find(".layers").empty(), t.changeView(t.available_views[this.index], !0);var e = i.not("." + t.available_views[this.index]).find(".slide");e.filter(".layers").removeClass("active"), e.filter(".view_loading").addClass("active");
      } };var a = 100 / t.available_views.length;$(".slide-wrapper").css("width", a + "%");var r = 100 * t.available_views.length;$(".holder").css("width", r + "%"), t.slider.init(), t.navigate_configurator_button.removeClass("visible");
  }
}, Garment.prototype.zoom = function () {
  var t = this;$("#available_window .zoom").click(function () {
    var e = parse_query_string(window.location.href.replace(/^[^?]*/, ""));e.step = t.step, e.option = e.action, delete e.action, delete e.step, e.option = "zoom", History.pushState(e, t.window_title, "?" + jQuery.param(e));
  }), $("#available_window .zoom_close").click(function () {
    History.back();
  }), $("#zoom_scroll_layer").click(function () {
    History.back();
  });
}, Garment.prototype.updateConfiguratedProduct = function (t) {
  function e(t, e) {
    for (var i = e.length, a = 0; a < i; a++) if (e[a] == t) return !0;return !1;
  }var i = this,
      a = ($(".garment_block_fabric"), $(".garment_block_extra"));"default" == t && (product = this.current);var r = ["shirt_neck", "shirt_cuff", "shirt_patches", "blouse_neck", "blouse_cuff", "neck_fabric", "cuffs_fabric"],
      n = ["shirt_threads", "blouse_threads", "jacket_threads", "button_holes_threads", "waistcoat_button_holes_threads", "coat_threads", "threads"],
      o = ["coat_lining", "lining", "waistcoat_lining", "waistcoat_lining_back", "coat_lining"],
      s = ["tuxedo", "type_flap"];"man_shirt" == i.product_type && r.push("patches");var c = [];if (c = product.extras) for (k in c) if (k.indexOf("initials") > -1 || k.indexOf("logos") > -1) {
    var l = $('.extra_container[data-extra-name="' + k + '"]', a);i.updateExtraInitials(c[k], l, k);
  } else if (e(k, r)) {
    _ = $('.extra_container[data-extra-name="' + k + '"]', a);i.updateExtraFabric(k, c[k], _);
  } else if (e(k, n)) {
    _ = $('.extra_container[data-extra-name="' + k + '"]', a);i.updateExtraThreads(k, c[k], _);
  } else if (e(k, o)) {
    _ = $('.extra_container[data-extra-name="' + k + '"]', a);i.updateExtraLining(k, c[k], _);
  } else if (e(k, s)) {
    _ = $('.extra_container[data-extra-name="' + k + '"]', a);i.updateExtraStandart(k, c[k], _);
  } else {
    var _ = $('.extra_container[data-extra-name="' + k + '"]', a);i.updateExtraColors(k, c[k], _);
  }var d = product.fabric;if (d || (d = this.current), d) {
    var u = i.product_type;if ("woman_suitpants" == u || "woman_suitskirt" == u || "man_suit" == u || "man_suit2" == u || "man_suit3" == u || "man_smoking" == u || "man_levita" == u || "man_frac" == u || "man_chaque" == u) {
      var p = d[i.multi_fabric_options[0]],
          f = d[i.multi_fabric_options[1]],
          h = d[i.multi_fabric_options[2]];void 0 !== d.jacket && (p = d.jacket.id_t4l_fabric), void 0 !== d.pants && (f = d.pants.id_t4l_fabric), void 0 !== d.waistcoat && (h = d.waistcoat.id_t4l_fabric), i.current.fabric[i.multi_fabric_options[0]] = p, i.current.fabric[i.multi_fabric_options[1]] = f, i.current.fabric[i.multi_fabric_options[2]] = h;var v = "man_jacket",
          b = !1;if (p != f && (b = !0), h && p != h && (b = !0), b) {
        i.multiple_fabric_enabled = !0;$('#personalize_fabrics_split .option_trigger[rel="1"]');if ($(".activator .check_radio_2").click(), i.multi_fabric_active = i.multi_fabric_options[1], $("input.fabric_input").val(p), $('input[name="fabric[' + i.multi_fabric_active + ']"]').val(f), void 0 !== d.waistcoat) {
          h = d.waistcoat.id_t4l_fabric;i.current.fabric[i.multi_fabric_options[2]] = h, i.multi_fabric_active = i.multi_fabric_options[2], $('input[name="fabric[' + i.multi_fabric_active + ']"]').val(h);
        }i.multi_fabric_active = i.multi_fabric_options[0], i.fabricSelect(v, p, "initial"), $('.multi_options div[rel="man_jacket"]').first().click();"man_suit3" == i.real_product_type && 2, "man_ceremonial3" == i.real_product_type && 2;
      } else i.fabricSelect(v, p, "initial");
    } else if ("man_smoking" == i.product_type) {
      var v = "man_smoking",
          m = d.id_t4l_fabric;i.fabricSelect(v, m, "initial");
    } else {
      v = i.product_type;void 0 === (m = d.id_t4l_fabric) && (m = d[i.product_type]), void 0 !== m && i.fabricSelect(v, m, "initial");
    }
  }i.renderDraw();
}, Garment.prototype.updateExtraLining = function (t, e, i) {
  0 != e.length && (this.has_extra_lining = t, this.load_linings(), i.prev().addClass("tick"), $("label", i).removeClass("checked").removeClass("active"), $('input[value="' + e.contrast + '"]', i).prop("checked", !0).parent().addClass("checked").addClass("active"), $('input[name="' + t + '[lining_id]"]', i).val(e.lining_id));
}, Garment.prototype.updateExtraFabric = function (t, e, i) {
  0 != e.length && (i.prev().addClass("tick"), $("label", i).removeClass("checked").removeClass("active"), $('input[value="' + e.contrast + '"]', i).prop("checked", !0).parent().addClass("checked").addClass("active"), $('input[name="' + t + '[fabric_id]"]', i).val(e.fabric_id));
}, Garment.prototype.updateExtraThreads = function (t, e, i) {
  var a = this;0 != e.length && (i.prev().addClass("tick"), $("label", i).removeClass("checked").removeClass("active"), $('input[value="' + e.contrast + '"]', i).prop("checked", !0).parent().addClass("checked").addClass("active"), "man_shirt" == a.product_type ? ($(".required.threads", i).show(), $('input[name="' + t + '[threads][color]"][value="' + e.buttonholes_color + '"]', i).prop("checked", !0).parent().addClass("active").addClass("checked"), $(".required.holes", i).show(), $('input[name="' + t + '[holes][color]"][value="' + e.buttonthreads_color + '"]', i).prop("checked", !0).parent().addClass("active").addClass("checked")) : ($(".required.threads", i).show(), $('input[name="' + t + '[threads][color]"][value="' + e.threads.color + '"]', i).prop("checked", !0).parent().addClass("active").addClass("checked"), $(".required.holes", i).show(), $('input[name="' + t + '[holes][color]"][value="' + e.holes.color + '"]', i).prop("checked", !0).parent().addClass("active").addClass("checked")));
}, Garment.prototype.updateExtraColors = function (t, e, i) {
  var a = this;0 != e.length && (i.prev().addClass("tick"), $("label", i).removeClass("checked").removeClass("active"), $('input[value="' + e.contrast + '"]', i).prop("checked", !0).parent().addClass("checked").addClass("active"), $(".required", i).show(), "metal_buttons" == t ? $('input[value="' + e.type + '"]', i).prop("checked", !0).parent().addClass("active").addClass("checked") : "waistcoat_metal_buttons" == t ? $('input[value="' + e.type + '"]', i).prop("checked", !0).parent().addClass("active").addClass("checked") : "contrasts" == t ? ($('input[name="contrasts[contrasts_flap]"]', i).val(e.contrasts_flap), $('.contrasts_flap .fabric_thumb[data-id="' + e.contrasts_flap + '"]', i).addClass("current"), $('input[name="contrasts[contrasts_buttons]"]', i).val(e.contrasts_buttons), $('.contrasts_buttons .fabric_thumb[data-id="' + e.contrasts_buttons + '"]', i).addClass("current"), $('input[name="contrasts[contrasts_pants]"]', i).val(e.contrasts_pants), $('.contrasts_pants .fabric_thumb[data-id="' + e.contrasts_pants + '"]', i).addClass("current"), $('input[name="contrasts[contrasts_pockets]"]', i).val(e.contrasts_pockets), $('.contrasts_pockets .fabric_thumb[data-id="' + e.contrasts_pockets + '"]', i).addClass("current")) : "patches" == t || "coat_patches" == t || "trenchcoat_patches" == t ? ($('input[name="' + t + '[color]"]', i).val(e.color), $('.fabric_thumb[data-id="' + e.color + '"]', i).addClass("current"), a.current.extras[t].patches = e.color) : ($('input[name="' + t + '[color]"]', i).val(e.color), $('.fabric_thumb[data-id="' + e.color + '"]', i).addClass("current")), ("man_chaque" != a.product_type && "man_frac" != a.product_type && "man_levita" != a.product_type || "contrasts" != t) && $("a.select", i).trigger("click", ["updateMode"]), void 0 !== a.extra[t].contrast && a.relationsApply(t, a.extra[t].contrast[a.current.extras[t].contrast]), a.loadPreImages(i));
}, Garment.prototype.updateExtraStandart = function (t, e, i) {
  var a = this;if (0 == e.length || "default" == e) return $(".option_trigger.zero_value", i).addClass("active"), void ("type_flap" == t && void 0 !== a.extra[t].contrast.default && a.relationsApply(t, a.extra[t].contrast.default));i.parents(".list_option").find(".drop_head").addClass("tick"), $("label", i).removeClass("checked").removeClass("active"), $('input[value="' + e + '"]', i).prop("checked", !0).parent().addClass("checked").addClass("active"), void 0 !== a.extra[t].contrast && a.relationsApply(t, a.extra[t].contrast[a.current.extras[t]]);
}, Garment.prototype.updateExtraInitials = function (t, e, i) {
  if (0 != t.length) {
    e.prev().addClass("tick"), i.indexOf("initials") > -1 && $('input[name="' + i + '[text]"]', e).val(t.text), i.indexOf("initials") > -1 ? ($('input[name="' + i + '[type]"]', e).prop("checked", !1), $('input[name="' + i + '[type]"]', e).parent().removeClass("checked"), $('input[name="' + i + '[type]"][value="' + t.type + '"]').prop("checked", !0).parent().addClass("checked")) : ($('.logo[rel="' + t.logo + '"]', e).addClass("current"), $('input[name="logos[logo]"]', e).val(t.logo)), $("div.common_color", e).removeClass("checked"), $('input[name="' + i + '[color_custom]"]', e).val(t.color_custom), $('div.common_color[rel="' + t.color_custom + '"]', e).addClass("checked"), $('input[name="' + i + '[pos]"]', e).prop("checked", !1), $('input[name="' + i + '[pos]"]', e).parent().removeClass("checked");var a = $('input[name="' + i + '[pos]"][value="' + t.pos + '"]');a.prop("checked", !0).parent().addClass("checked"), $('input[name="' + i + '[position]"]', e).prop("checked", !1), $('input[name="' + i + '[position]"]', e).parent().removeClass("checked"), (a = $('input[name="' + i + '[position]"][value="' + t.position + '"]')).prop("checked", !0).parent().addClass("checked");
  }
}, Garment.prototype.with_add_to_cart = function () {
  $(".add_to_cart").addClass("visible"), $(".zoom").addClass("with_add_to_cart"), $(".step_options").addClass("with_add_to_cart"), $("ul.views").addClass("with_add_to_cart"), $(".favourite").addClass("with_add_to_cart"), $(".ladesk_chat").addClass("with_add_to_cart"), $(".shareButton").addClass("with_add_to_cart");
}, Garment.prototype.initGarmentHeader = function () {
  function t() {
    $(".input_auto_delete", _.container).remove();
  }function e() {
    if (p.hasClass("show")) return f.removeClass("visible"), void p.removeClass("show");if (null != _.lastSharedUrl) return p.addClass("show"), void f.addClass("visible");$(".loading", "#share_popup").removeClass("hide"), $(".container", "#share_popup").addClass("hide"), p.addClass("show"), f.addClass("visible"), t(), $(_.container).append('<input type="hidden" name="next_share_product" value="1" class="input_auto_delete"/>');var e = $("form").serialize();$.ajax({ type: "POST", url: window.location + "?ajax=1", data: e, success: function (t) {
        if (t) {
          if ($(".container", "#share_popup").removeClass("hide"), $(".loading", "#share_popup").addClass("hide"), "error" == t) {
            var e = $(tmpl("share_product_error_tmpl", []));return void $(".flex", "#share_popup").html(e);
          }t = JSON.parse(t), _.lastSharedUrl = t.url_product, i(t.url_product, t.img_src, t.product_title), dataLayer.push({ event: "share_product", eventCategory: "share_product", eventAction: "share", eventLabel: "mobile_2" });
        }
      } });
  }function i(t, e, i) {
    var a = { link: encodeURIComponent(t), img: encodeURIComponent(e), title: encodeURIComponent(i) },
        r = $(tmpl("share_product_tmpl", a));$(".flex", "#share_popup").html(r), void 0 !== navigator.share && $(".social.native", "#share_popup").removeClass("hide");
  }function a() {
    f.addClass("visible"), u.addClass("visible"), u.find(".loading").addClass("active"), _.customer_active || $(".product", u).remove();var t = $(".price_final").html().match(/\d+/g)[0],
        e = { title: $(".title_compo .title").html(), price: formatPrice(t) },
        i = $(tmpl("favourite_product_tmpl", e));$(".products", u).prepend(i), 1 !== $(".products .product", u).length || _.customer_active ? $(".products", u).show() : $(".products", u).hide();var a = _.current.view;_.current.view = "folded";var r = "folded";_.available_views.indexOf("folded") > 0 ? _.current.view = "folded" : _.available_views.indexOf("without_model") > 0 ? (_.current.view = "without_model", r = "without_model") : (_.current.view = "front", r = "front"), null != _.product_parts && _.renderSetActiveBlock(_.product_parts[0]), _.renderDraw(!1, !1, !1, !1, "favourite_product"), _.current.view = a;var n = 135 / _.viewport[r].base.ratio;_.complex && (n += 10), $(".image", u).css("width", n);
  }function r() {
    if (_.stop_counters_popup = !0, _.product_saved) return c(), !1;_.customer_saved && $(".your_wish_list", u).addClass("visible"), d.find(".loading").addClass("active");var t = _.current.view;_.current.view = "folded";var e = "folded";_.available_views.indexOf("folded") > 0 ? _.current.view = "folded" : _.available_views.indexOf("without_model") > 0 ? (_.current.view = "without_model", e = "without_model") : (_.current.view = "front", e = "front"), null != _.product_parts && _.renderSetActiveBlock(_.product_parts[0]), _.renderDraw(!1, !1, !1, !1, "save_product");var i = "";2 == _.popup_status_step && (i = "bi"), 3 == _.popup_status_step && (i = "tri"), $(".meter", d).removeClass("bi").addClass(i), _.current.view = t, d.addClass("visible");dataLayer.push({ event: "save_design", eventCategory: "save_cart", eventAction: "save_design", eventLabel: "auto" });var a = (r = $(".wrap_image", d).height()) / _.viewport[e].base.ratio;_.complex && (a += 10), $(".image", d).css("width", a);var r = $(".content", d).height();$(".content", d).css("min-height", r);
  }function n(e) {
    var e = parseInt(e);if ($('.add_to_cart[data-id="' + e + '"]', u).addClass("hide"), $('.go_to_cart_loader[data-id="' + e + '"]', u).addClass("visible"), e) $.post(window.location + "?ajax=1", { id_product: e, save_cart_by_feed: !0 }, function (t) {
      t && ($('.go_to_cart_loader[data-id="' + e + '"]', u).removeClass("visible"), $('.go_to_cart[data-id="' + e + '"]', u).addClass("visible"));
    });else {
      t(), $(_.container).append('<input type="hidden" name="next_save_cart" value="1" class="input_auto_delete"/>');var i = $("form").serialize();$.ajax({ type: "POST", url: window.location + "?ajax=1", data: i, success: function (t) {
          dataLayer.push({ event: "analyticsEvent", eventCategory: "personalize", eventAction: "add_to_cart", eventLabel: "mobile" });
        } });
    }
  }function o(t) {
    var t = parseInt(t);if (customer_full) i = customer_full.email;else if (customer) i = window.getStoredCustomer().email;else {
      var e = window.getStoredCustomerTemp();if (e) var i = e.email;
    }t && i && $.post(window.location + "?ajax=1", { id_product: t, email: i, remove_product_wish_list: !0 }, function (t) {});
  }function s(t) {
    (t = parseInt(t)) && $.post(window.location + "?ajax=1", { id_product: t, share_favorite_product: !0 }, function (t) {
      if (t) {
        if (p.addClass("show"), f.addClass("visible"), u.removeClass("visible"), $(".loading", "#share_popup").addClass("hide"), "ko" == t) {
          var e = $(tmpl("share_product_error_tmpl", []));return void $(".flex", "#share_popup").html(e);
        }i((t = JSON.parse(t)).url_product, t.img_src, t.product_title);
      }
    });
  }function c() {
    var e = $("#save_product_popup"),
        i = $('.content input[name="email"]', e);if (null == i.val().match(/[\S]+[\@][\S]+[\.][\S]+/i)) return $(".email_error_format").show(), !1;$(".email_error_format").hide(), d.removeClass("visible"), t(), $(_.container).append('<input type="hidden" name="next_save_cart" value="1"  class="input_auto_delete"/>');var a = $("form").serialize();$.ajax({ type: "POST", data: a, success: function (t) {
        if (t) {
          id_cart_product = t, $(_.container).append('<input type="hidden" name="id_cart_product" value="' + t + '"  class="input_auto_delete">');var e = region_url + "checkout/save_cart_mobile";$.post(e, { no_output: "1", action: "register", save_cart: "1", step: "cart", email: i.val() }, function (t) {
            "ok" == $.trim(t) && dataLayer.push({ event: "save_cart", eventCategory: "save_cart", eventAction: "save_email", eventLabel: "mobile_2" });
          }), _.product_saved = !0, $("#save_product_popup_message").addClass("visible"), setTimeout(function () {
            $("#save_product_popup_message").removeClass("visible");
          }, 3e3);
        }
      } });
  }function l() {
    var e = $("#favourite_product_popup");if (_.customer_active) {
      var i = window.getStoredCustomer();if (i) r = i.email;else {
        var a = window.getStoredCustomerTemp();if (a) var r = a.email;
      }
    }if (!r) {
      if (null == (r = $('.content input[name="email"]', e).val()).match(/[\S]+[\@][\S]+[\.][\S]+/i)) return $(".email_error_format").show(), !1;$(".email_error_format").hide();
    }u.removeClass("visible"), f.removeClass("visible"), $(".favourite").addClass("hide"), t(), $(_.container).append('<input type="hidden" name="add_favourite_product" value="1"  class="input_auto_delete"/>'), $("form").append('<input type="hidden" name="email" value="' + r + '"   class="input_auto_delete"/>');var n = $("form").serialize();$("#add_product_popup_message").addClass("visible"), setTimeout(function () {
      $("#add_product_popup_message").removeClass("visible");
    }, 3e3), _.cont_favorites++;var o = "product_" + _.cont_favorites;_.cont_favorites > 2 && (o = "product_3_more"), u.addClass(o), $.ajax({ type: "POST", url: window.location + "?ajax=1", data: n, success: function (t) {
        if (t) {
          var e = (t = JSON.parse(t)).id_product;if ($(u).addClass("customer_active"), _.customer_active = !0, _.product_saved = !0, u.addClass("customer_active"), !i && !a) {
            var n = { email: r };n = JSON.stringify(n), window.localStorage.setItem("customer_temp", n);
          }if ($("#favorites span").html(_.cont_favorites), $("#favorites").addClass("visible"), e) {
            $(".product", u).first().addClass("saved"), $(".product", u).first().find(".add_to_cart").attr("data-id", e), $(".product", u).first().find(".remove").attr("data-id", e), $(".product", u).first().find(".share").attr("data-id", e), $(".product", u).first().find(".go_to_cart").attr("data-id", e), $(".product", u).first().find(".go_to_cart_loader").attr("data-id", e);var o = $(".product", u).first().find(".wrap_image").attr("href");o = o.replace("#id_product#", e), $(".product", u).first().find(".wrap_image").attr("href", o);var s = t.title;s && $(".product", u).first().find(".title").html(s);
          }
        }
      } }), dataLayer.push({ event: "analyticsEvent", eventCategory: "personalize", eventAction: "add_favorite", eventLabel: "mobile" });
  }var _ = this,
      d = $("#save_product_popup"),
      u = $("#favourite_product_popup"),
      p = $("#share_popup"),
      f = $("#disable_popup"),
      h = $("nav.garment_nav", this.container).on("click", "a", function () {
    return _.stepSetURL(this.href.getID(!0)), !1;
  });$(".step_options").on("click", ".step", function () {
    _.with_add_to_cart(), $(window).resize();var t = $(this).attr("rel");return $('.step[rel="' + t + '"] .message').remove(), $('.step[rel="' + t + '"]').prevAll().each(function () {
      $(".message", this).remove();
    }), $('.step[rel="' + t + '"]').next().next().find(".message").addClass("visible"), t != _.step && (_.stepSetURL(t), !1);
  }), $(".step_options .message").first().addClass("visible"), $(".favourite").click(function () {
    if ($(this).hasClass("hide")) return !1;_.customer_active && l(), a();
  }), (customer || customer_temp) && ($(u).addClass("customer_active"), _.customer_active = !0), f.click(function () {
    u.removeClass("visible"), f.removeClass("visible"), p.removeClass("show");
  }), $("#favourite_product_popup .close").click(function () {
    u.removeClass("visible"), f.removeClass("visible");
  }), $("#favourite_product_popup .save").click(function () {
    l();
  }), $(".shareButton").click(function () {
    e();
  }), $(".close", "#share_popup").click(function () {
    e();
  }), $("body").on("click", ".social > a", "#share_popup", function (t) {
    var e = this,
        i = $(e).attr("class");dataLayer.push({ event: "share_product", eventCategory: "share_product", eventAction: "" + i, eventLabel: "mobile_2" });
  }), $("#save_product_popup .close").click(function () {
    d.removeClass("visible").removeClass("favorite_mode"), $("img", d).remove();
  }), $("#save_product_popup .no_thanks").click(function () {
    d.removeClass("visible").removeClass("favorite_mode"), $("img", d).remove();
  });$("#privacy_popup.add_favourite");var v = $("#privacy_popup.save_product");$("#save_product_popup .save").click(function () {
    v.hasClass("active") ? v.addClass("visible") : c();
  }), $(".cancel", v).click(function () {
    v.removeClass("visible");
  }), $(".accept", v).click(function () {
    c(), v.removeClass("visible");
  }), u.on("click", ".add_to_cart", function () {
    var t = $(this).attr("data-id");"null" == t ? c() : n(t);
  }), u.on("click", ".remove", function () {
    var t = $(this).attr("data-id");"null" != t && (o(t), $(this).parents(".product").remove(), _.cont_favorites--, $("#favorites span").html(_.cont_favorites), 0 == $(".product", u).length && (u.removeClass("visible"), f.removeClass("visible")));
  }), u.on("click", ".share", function () {
    var t = $(this).attr("data-id");"null" != t && s(t);
  }), $("#favorites").click(function (t) {
    f.addClass("visible"), u.addClass("visible"), $(".products", u).show(), t.preventDefault(), t.stopPropagation();
  }), $("#share_popup").on("click", ".social.native a.native", function (t) {
    t.preventDefault();var e = $(this);return void 0 !== navigator.share && navigator.share({ title: e.data("title"), text: e.data("text"), url: decodeURIComponent(e.data("link")) }).then(function () {
      dataLayer.push({ event: "share_product", eventCategory: "share_product", eventAction: "native", eventLabel: "mobile_2" });
    }).catch(function (t) {}), !1;
  }), customer || window.setInterval(function () {
    var t = Date.now() - _.session_time;t = Math.floor(t / 1e3), 1 == _.popup_status_step ? (_.limit_session_time = 70, _.limit_inactive_time = 6) : 2 == _.popup_status_step ? (_.limit_session_time = 60, _.limit_inactive_time = 8) : 3 == _.popup_status_step && (_.limit_session_time = 50, _.limit_inactive_time = 10);var e = !1;$("#favourite_product_popup").hasClass("visible") && (e = !0), _.popup_status_step > 0 && !e && !_.product_saved && !_.customer_active && !_.stop_counters_popup && t > _.limit_session_time && _.inactive_time > _.limit_inactive_time && r(), _.inactive_time++;
  }, 1e3), "undefined" != typeof drift && drift.on("ready", function (t) {
    $("#chat_drift").removeClass("hide").click(function () {
      return t.sidebar.open(), !1;
    }), t.widget.hide();
  }), History.Adapter.bind(window, "statechange", function () {
    var t = History.getState(),
        e = "",
        i = ["config", "fabric", "fabric_man_pants", "fabric_man_waistcoat", "extra", "zoom", "fabric_zoom"];_.inactive_time = 0, -1 != jQuery.inArray(t.data.step, i) && (e = t.data.step), "fabric" == e && _.action_fabric_changed && _.popup_status_step < 1 && (_.popup_status_step = 1), "config" == e && _.popup_status_step < 2 && (_.popup_status_step = 2), "extra" == e && _.popup_status_step < 3 && (_.popup_status_step = 3), "extra" == e && $(".favourite").is(":visible") && !$(".favourite").hasClass("hide") && $(".arrow_fav").addClass("visible"), _.stepSwitch(e);
  });var b = h.find(".col-xs-5");this.bind("stepSwitch", function (t) {
    switch (this.step) {case "extra":
        break;default:
        b.removeClass("two_options");}
  }), this.formInit();var m = parse_query_string(window.location.search);History.replaceState(m, window.title), $(window).trigger("statechange");
}, Garment.prototype.convetToSuit3 = function (t, e) {
  var i = this;if (t = parseFloat(t), i.price_detail.waistcoat = t, i.updatePrice(), i.real_product_type = "man_suit3", $(".fabric_thumb .info .price.man_suit").removeClass("visible"), $(".fabric_thumb .info .price.man_suit." + i.real_product_type).addClass("visible"), $(".extras.title_combined").show(), $('.multi_options div[rel="man_waistcoat"]').show(), $(".extra_block_man_jacket  div.config_block_title").show(), e) {
    var a = i.fabric_info_global.category,
        r = i.fabric_info_global.id_t4l_fabric;i.updateFabricPrices(!1, a, !0, r);
  }
}, Garment.prototype.convetToSuit2 = function () {
  var t = this;t.price_detail.waistcoat = 0, t.updatePrice(), t.real_product_type = "man_suit2", $(".extras.title_combined").hide(), $(".fabric_thumb .info .price.man_suit").removeClass("visible"), $(".fabric_thumb .info .price.man_suit." + t.real_product_type).addClass("visible"), $('.multi_options div[rel="man_waistcoat"]').hide(), $(".extra_block_man_jacket  div.config_block_title").hide();var e = t.fabric_info_global.category,
      i = t.fabric_info_global.id_t4l_fabric;t.updateFabricPrices(!1, e, !0, i);
}, Garment.prototype.convetToCeremonial3 = function (t, e) {
  var i = this;if (t = parseFloat(t), i.price_detail.waistcoat = t, i.real_product_type = "man_ceremonial3", i.updatePrice(), $(".fabric_thumb .info .price.man_suit").removeClass("visible"), $(".fabric_thumb .info .price.man_suit." + i.real_product_type).addClass("visible"), $(".extras.title_combined").show(), $('.multi_options div[rel="man_waistcoat"]').show(), $(".extra_block_" + i.product_type + "  div.config_block_title").show(), e) {
    var a = i.fabric_info_global.category,
        r = i.fabric_info_global.id_t4l_fabric;i.updateFabricPrices(!1, a, !0, r);
  }
}, Garment.prototype.convetToCeremonial2 = function () {
  var t = this;t.price_detail.waistcoat = 0, t.real_product_type = "man_ceremonial", t.updatePrice(), $(".extras.title_combined").hide(), $(".fabric_thumb .info .price.man_suit").removeClass("visible"), $(".fabric_thumb .info .price.man_suit." + t.real_product_type).addClass("visible"), $('.multi_options div[rel="man_waistcoat"]').hide(), $(".extra_block_" + t.product_type + "  div.config_block_title").hide();var e = t.fabric_info_global.category,
      i = t.fabric_info_global.id_t4l_fabric;t.updateFabricPrices(!1, e, !0, i);
}, Garment.prototype.initGarmentConfig = function () {
  var t,
      e = this;$(".extras.title_combined").hide();var i = $(".drop_head:visible").first().width() - 60;$(".box_title").each(function () {
    if ($(this).width() > i) {
      var t = { "line-height": "16px", "white-space": "unset", "margin-top": "2px" };$(this).css(t).addClass("title_double");
    }$(this).css("width", i);
  }), $(".config_block_title").click(function () {
    var t = $(this).attr("rel");if (0 == $(this).siblings(".config_block_content." + t + ":visible").length) {
      if ("config" == e.step) i = $(".garment_block_config .config_block_content");else if ("extra" == e.step) var i = $(".garment_block_extra .config_block_content");i.slideUp(), "config" == e.step ? i.parents(".config_block").removeClass("visible") : "extra" == e.step && i.parents(".extra_block").removeClass("visible");var a = $(this).siblings(".config_block_content." + t);a.slideDown("slow", function (t) {
        var i = $(this).offset().top;$(".garment_block_" + e.step).animate({ scrollTop: i - 60 }, "slow");
      }), "config" == e.step ? a.parents(".config_block").addClass("visible") : "extra" == e.step && a.parents(".extra_block").addClass("visible");
    } else (i = $(this).siblings(".config_block_content." + t)).slideUp(), i.parents(".config_block").removeClass("visible"), i.parents(".extra_block").removeClass("visible");
  }), e.complex && ($(".garment_block_config .config_block_content").not(":first").hide().removeClass("visible").parents(".config_block").removeClass("visible"), $(".garment_block_extra .config_block_content").not(":first").hide().removeClass("visible").parents(".config_block").removeClass("visible")), $(".views").on("click", "li", function () {
    $(this).attr("rel");var t = $(this).index();return e.slider.set(t), !1;
  }), $("div.config_field", this.container).not(".config_field_combine").each(function () {
    if ($(this).hasClass("combinated")) {
      (i = $("input:eq(0)", this)).length || (i = $("select:eq(0)", this));$(this).attr("option");$("div.config_field_combine", this).each(function () {
        var t = $("input:eq(0)", this);t.length || (t = $("select:eq(0)", this));var i = t.attr("name");if (void 0 !== e.current.config[i]) switch (t.attr("type")) {case "radio":
            $('input[value="' + e.current.config[i] + '"]', this).prop("checked", !0);break;default:
            t.val(e.current.config[i]);}if ("waistcoat" == i && "1" == e.current.config[i]) {
          var a = $('input[name="waistcoat"]').attr("price");a = parseFloat(a), e.convetToSuit3(a, !1);
        }void 0 !== e.config[i] && e.relationsApply(i, e.config[i][e.current.config[i]]);
      });
    } else {
      var t = $(this).attr("option"),
          i = $("input:eq(0)", this);i.length || (i = $("select:eq(0)", this));var a = i.attr("name");function r(t, e) {
        for (var i = e.length, a = 0; a < i; a++) if (e[a] == t) return !0;return !1;
      }if (r(t, ["polo_collar", "polo_cuffs", "polo_placket"]) && ($('input[value="' + e.current.config[t] + '"]', this).prop("checked", !0), $('input[value="' + e.current.config[a] + '"]', this).val(e.current.config[a])), void 0 !== e.current.config[a]) switch (i.attr("type")) {case "radio":
          $('input[value="' + e.current.config[a] + '"]', this).prop("checked", !0);break;default:
          i.val(e.current.config[a]);}if ("waistcoat" == a && "1" == e.current.config[a]) {
        var n = $('input[name="waistcoat"]').attr("price");n = parseFloat(n), "man_levita" == e.product_type || "man_frac" == e.product_type || "man_chaque" == e.product_type ? e.convetToCeremonial3(n, !1) : e.convetToSuit3(n, !1);
      }void 0 !== e.config[a] && e.relationsApply(a, e.config[a][e.current.config[a]]);
    }
  }), $(window).trigger("resize"), "man_polo" == e.product_type && $("label.special_type", this.container).click(function (t) {
    var i = $(this).attr("name"),
        r = $("input", this),
        n = r.val(),
        o = (parseFloat(r.attr("data-price")), $(".config_field." + i, this.container));return e.polo_special_options_open = i, e.polo_special_options[i] = e.current.config[i], $("label", o).removeClass("checked").removeClass("active"), r.prop("checked", !0), $(this).addClass("checked").addClass("active"), e.current.config[i] = n, "default" != n ? (History.pushState({ step: "extra", option: i, fabrics: 1 }, window.title, "?step=config&option=" + i + "&polo_special_fabrics=1"), $(".extra_fabrics_header").hide(), e.mobile_layer_extra_fabrics.find(".list").html(""), e.loading_layer.addClass("fabric_mode"), e.loading_layer.show(), a(i, n)) : ($('input[name="' + i + '_color"]', o).val(""), e.polo_special_options[i] = n, e.current.config[i + "_color"] = !1, e.price_detail[i] = 0, e.updatePrice(), e.renderDraw(), e.goToRender()), t.stopPropagation(), t.preventDefault(), !1;
  });var a = function (t, i) {
    var a = $(".config_field." + t, this.container),
        r = { action: "polo_special_fabrics", option_name: t, value: i };e.mobile_layer_extra_fabrics.find(".list").load(window.location.href, r, function () {
      e.loading_layer.removeClass("fabric_mode");var r = parseInt(e.current.config[t + "_color"]);r && $(".fabric_thumb", this).filter(".fabric_" + r).addClass("current"), e.bLazy && e.bLazy.revalidate(), $("a", e.mobile_layer_extra_fabrics).click(function () {
        var r = $(this).attr("data-id");$('input[name="' + t + '_color"]', a).val(r), e.current.config[t + "_color"] = r;var n = $('label[mode="' + i + '"]', a).attr("price"),
            o = 0;return n && (o = parseFloat(n)), e.price_detail[t] = o, e.updatePrice(), e.renderDraw(), e.goToRender(), !1;
      }), e.loading_layer.hide();
    }), $("#action_colum_desplaced").click(function (i) {
      if (e.polo_special_options_open == t) {
        var r = e.polo_special_options[t];return $("label", a).removeClass("checked").removeClass("active"), $('label[mode="' + r + '"]', a).addClass("checked").addClass("active"), $('label[mode="' + r + '"] input', a).prop("checked", !0), e.current.config[t] = r, "default" == r && (e.current.config[t + "_color"] = 0, $('input[name="' + t + '_color"]', a).val("")), e.polo_special_options_open = !1, e.goToRender(), i.stopPropagation(), !0;
      }
    });
  };t = $("a.opt_trigger", this.container);var r = $("input, select", this.container).change(function () {
    if ($(".favourite").removeClass("hide"), e.lastSharedUrl = null, void 0 === e.config[this.name]) return !1;if ("man_suit2" != e.product_type && "man_suit3" != e.product_type || "waistcoat" != this.name || "1" != this.value) {
      if ("man_suit2" != e.product_type && "man_suit3" != e.product_type || "waistcoat" != this.name || "0" != this.value) {
        if ("man_levita" != e.product_type && "man_frac" != e.product_type && "man_chaque" != e.product_type || "waistcoat" != this.name || "0" != this.value) {
          if ("man_levita" != e.product_type && "man_frac" != e.product_type && "man_chaque" != e.product_type || "waistcoat" != this.name || "1" != this.value) {
            if ("man_polo" == e.product_type || "man_coat" == e.product_type) {
              var i = $(this).attr("price"),
                  a = 0;i && (a = parseFloat(i));var r = $(this).attr("name");e.price_detail[r] = a, e.updatePrice();
            }
          } else a = parseFloat($(this).attr("price")), e.convetToCeremonial3(a, !0);
        } else e.convetToCeremonial2(), !1;
      } else e.convetToSuit2(), !1;
    } else a = parseFloat(this.getAttribute("price")), e.convetToSuit3(a, !0);var n = $(this).parent().attr("views");if (n) {
      var o = n.split(",");if (!e.inArray(e.current.view, o)) if ("man_suit2" != e.product_type && "man_suit3" != e.product_type && "man_chaque" != e.product_type && "man_levita" != e.product_type && "man_frac" != e.product_type || "folded" != o[0] || !o[1]) {
        s = e.available_views.indexOf(o[0]);"string" != typeof e.slider && e.slider.set(s);
      } else {
        var s = e.available_views.indexOf(o[1]);"string" != typeof e.slider && e.slider.set(s);
      }
    }if (e.relationsApply(this.name, e.config[this.name][this.value]), $(this).is(":checkbox")) $(this).is(":checked") ? e.current.config[this.name] = $(this).val() : e.current.config[this.name] = !1;else if ("jacket_style_combined" == this.name) {
      var c = (_ = (p = $(this).val()).split("_"))[0],
          l = 2;l = "mao" == c ? "5" : _[1], e.current.config.jacket_style = c, e.current.config.jacket_buttons = l, e.current.config.jacket_style_combined = p;
    } else if ("waistcoat_style_combined" == this.name) {
      var _ = (p = $(this).val()).split("_"),
          d = _[0],
          u = _[1];e.current.config.waistcoat_style = d, e.current.config.waistcoat_buttons = u, e.current.config.waistcoat_style_combined = p;
    } else if ("trenchcoat_style" == this.name) {
      var p = $(this).val();if (p = "crossed") {
        var f = $('.sub_config_field.trenchcoat_fastening input[value="button_standard"]').parents("label");f.hasClass("active") || f.click();
      }
    } else e.current.config[this.name] = $(this).val();if ("coat_model" == this.name && "overcoat" != this.value && void 0 !== e.current.extras.quilted_waistcoat && void 0 !== e.current.extras.quilted_waistcoat.contrast && "personalizado" == e.current.extras.quilted_waistcoat.contrast && (e.extraSetPrice("quilted_waistcoat", 0), e.current.extras.quilted_waistcoat = []), "coat_model" != this.name || "overcoat" == this.value && "double-breasted" == this.value || void 0 === e.current.extras.contrast_collar || void 0 !== e.current.extras.contrast_collar.contrast && "personalizado" == e.current.extras.contrast_collar.contrast && e.extraSetPrice("contrast_collar", 0), "woman_suitpants" == window.garment_opt.product_type || "woman_suitskirt" == window.garment_opt.product_type) {
      var h = $(this).closest(".config_block").attr("data-block");"woman_jacket" == h ? $(".controls .arrow_up").click() : "woman_pants" != h && "woman_skirt" != h || $(".controls .arrow_down").click();
    }var v = $(this).parents(".config_field").attr("option"),
        b = t.filter("." + v).attr("icon-fixed");b && void 0 !== b || e.change_icon_trigger(v, this, t);var m = this.getAttribute("data-block");e.renderSetActiveBlock(m), e.renderDraw(), e.navigate_configurator_button.addClass("visible");
  });e.navigate_configurator_button.click(function () {
    e.goToRender();
  }), r.not('[rel="is_filter"]').click(function (t) {
    if ("is_filter" == $(this).attr("rel")) return !1;t.stopPropagation();var e = $(this),
        i = e.hasClass("current"),
        a = e.parents(".filter"),
        r = $(this).parent();if (e.hasClass("all")) {
      if (i) return !1;a.find("input").not(this).parent().removeClass("active").removeClass("checked"), a.find("input.all").parent().addClass("active").addClass("checked");
    } else r.parent().find(".active").hasClass("active") && r.parent().find(".active").removeClass("active").removeClass("checked"), r.addClass("active").addClass("checked"), a.find("input.all").parent().removeClass("active").removeClass("checked");
  }).filter(":checked").parent().addClass("active").addClass("checked"), $("input:checked").each(function () {
    var t = $(this),
        i = t.parent().attr("name"),
        a = t.attr("value"),
        r = t.attr("data-field-name");e.extra && void 0 !== e.extra[i] && void 0 !== e.extra[i][r] && e.relationsApply(i, e.extra[i][r][a]);
  }), $("div.config_block", this.container).each(function () {
    var t = this.getAttribute("data-block");$("input, select", this).attr("data-block", t);
  }), document.all && $("label.option", this.container).find("img").on("click", function () {
    $(this.parentNode).click().find("input").change();
  }), "man_pants" == e.product_type && "1" == e.current.config.pants_chinos ? $('input[name="pants_front_pocket"][value="rounded"]').parent().hide() : "1" != e.current.config.pants_chinos && $('input[name="pants_front_pocket"][value="rounded_chinos"]').parent().hide();
}, Garment.prototype.change_icon_trigger = function (t, e, i) {
  var a = $(e).prev().attr("icoclass"),
      r = i.filter("." + t).get(0);void 0 !== r && (r.className = r.className.replace(/icon_[^\s]+/, a));
}, Garment.prototype.getCurrentLayers = function () {
  return this.current;
}, Garment.prototype.parseLayers = function (t, e, i) {
  i || (i = "STD");var a = !1,
      r = !1;if (void 0 !== e.extras.button_holes_threads) {
    if (e.extras.button_holes_threads["holes-color"]) {
      a = !0;var n = e.extras.button_holes_threads["holes-color"];
    }if (e.extras.button_holes_threads["threads-color"]) {
      r = !0;var o = e.extras.button_holes_threads["threads-color"];
    }
  }var s = !1,
      c = !1,
      l = !1;if (void 0 !== e.extras.logos) {
    s = !0;var c = this.logos_code[e.extras.logos.logo],
        l = e.extras.logos.color_custom;
  }view = e.view;var _ = "dark",
      d = ["white", "beige", "green", "pink", "orange", "yellow", "purple", "light"],
      u = [1083, 1444, 1477, 1479, 1283, 1081, 1082, 1062, 1457];if (void 0 !== this.current.fabric.man_jacket && $("div.fabric_" + this.current.fabric.man_jacket)) {
    var p = $("div.fabric_" + this.current.fabric.man_jacket).attr("to");jQuery.inArray(p, d) >= 0 && (_ = "light"), jQuery.inArray(this.current.fabric.man_jacket, u) >= 0 && (_ = "light");
  }for (k in t) {
    t[k];for (key in e.fabric) {
      var f = e.fabric[key];!1 !== strpos(key, "_") && "lining_id" != key && "satin_jacket_buttons" != key && "satin_jacket_pockets" != key && "satin_jacket_lapel" != key && "satin_jacket_buttons" != key && "satin_pants_ribbon" != key && ("botones_jacket_id" == key && (f > 100 || !f) && (f = 1), "pants_button_code" == key && (f > 100 || !f) && (f = 1), t[k].src = str_replace("#" + key + "#", f, t[k].src));
    }switch (t[k].src.indexOf("new_man/pants") > 0 && "without_model" == e.view && (view = "folded"), t[k].src.indexOf("new_man/jacket") > 0 && "without_model" == e.view && (view = "front"), t[k].src.indexOf("new_man/polo") > 0 && "without_model" == e.view && (view = "front"), t[k].src.indexOf("new_man/waistcoat") > 0 && "without_model" == e.view && (view = "front"), t[k].src.indexOf("new_man/coat") > 0 && "without_model" == e.view && (view = "front"), t[k].src = str_replace("#view#", view, t[k].src), t[k].src = str_replace("#size#", i, t[k].src), t[k].src = str_replace("#model#", 1, t[k].src), this.product_type) {case "man_shirt":
        t[k].src = str_replace("#neck_fabric_id#", this.current.extras.neck_fabric.fabric_id, t[k].src), t[k].src = str_replace("#cuffs_fabric_id#", e.extras.cuffs_fabric.fabric_id, t[k].src), t[k].src = str_replace("#patches_fabric_id#", e.extras.patches.fabric_id, t[k].src), a && (t[k].src = str_replace("#hole_code_extra#", n, t[k].src)), r && (t[k].src = str_replace("#thread_code_extra#", o, t[k].src)), this.current.extras.winter_lining && "personalizado" == this.current.extras.winter_lining.contrast && (t[k].src = str_replace("#winter_lining_id#", this.current.extras.winter_lining.color, t[k].src));break;case "man_polo":
        a && (t[k].src = str_replace("#hole_code_extra#", n, t[k].src)), r && (t[k].src = str_replace("#thread_code_extra#", o, t[k].src)), s && (t[k].src = str_replace("#logo_code#", c, t[k].src), t[k].src = str_replace("#logo_color#", l, t[k].src));break;case "man_jacket":case "man_suit":case "man_suit3":case "man_suit2":case "man_smoking":case "man_levita":case "man_frac":case "man_chaque":
        if (t[k].src = str_replace("#shirt_to_jacket_id#", this.current.fabric.shirt_to_jacket_id, t[k].src), "personalizado" != this.current.extras.lining.contrast && "padded" != this.current.extras.lining.contrast && "unlined" != this.current.extras.lining.contrast || !this.current.extras.lining.lining_id ? "unlined" != this.current.extras.lining.contrast || this.current.extras.lining.lining_id ? this.current.fabric.lining_id && (t[k].src = str_replace("#lining_id#", this.current.fabric.lining_id, t[k].src)) : t[k].src = str_replace("#lining_id#", this.current.fabric.unlined_lining, t[k].src) : t[k].src = str_replace("#lining_id#", this.current.extras.lining.lining_id, t[k].src), t[k].src = str_replace("#lining_id#", 152, t[k].src), this.current.fabric.unlined_lining && (t[k].src = str_replace("#lining_default_id#", this.current.fabric.unlined_lining, t[k].src)), this.current.fabric.lining_id && (t[k].src = str_replace("#lining_default_id#", this.current.fabric.lining_id, t[k].src)), t[k].src = str_replace("#lining_default_id#", 152, t[k].src), void 0 !== this.current.extras.waistcoat_lining && "personalizado" == this.current.extras.waistcoat_lining.contrast ? t[k].src = str_replace("#lining_id_waistcoat#", this.current.extras.waistcoat_lining.lining_id, t[k].src) : t[k].src = str_replace("#lining_id_waistcoat#", this.current.fabric.waistcoat_lining_id, t[k].src), void 0 !== this.current.extras.metal_buttons && "personalizado" == this.current.extras.metal_buttons.contrast ? t[k].src = str_replace("#botones_jacket_id#", this.current.extras.metal_buttons.type, t[k].src) : t[k].src = str_replace("#botones_jacket_id#", this.current.fabric._button_code, t[k].src), void 0 !== this.current.extras.metal_buttons) {
          if (void 0 !== this.current.extras.button_holes_threads && void 0 !== this.current.extras.button_holes_threads["threads-color"] && this.current.extras.button_holes_threads["threads-color"] && "personalizado" != this.current.extras.metal_buttons.contrast) {
            h = this.current.extras.button_holes_threads["threads-color"];t[k].src = str_replace("#hilos_jacket_id#", h, t[k].src);
          }
        } else if (void 0 !== this.current.extras.button_holes_threads && void 0 !== this.current.extras.button_holes_threads["threads-color"]) {
          h = this.current.extras.button_holes_threads["threads-color"];t[k].src = str_replace("#hilos_jacket_id#", h, t[k].src);
        }if (void 0 !== this.current.extras.button_holes_threads) if (void 0 !== this.current.extras.button_holes_threads["holes-color"]) {
          if (this.current.extras.button_holes_threads["holes-color"]) {
            v = this.current.extras.button_holes_threads["holes-color"];t[k].src = str_replace("#ojales_jacket_id#", v, t[k].src);
          }
        } else t[k].src = str_replace("#ojales_jacket_id#", _, t[k].src);if (void 0 !== this.current.extras.waistcoat_lining_back && "personalizado" == this.current.extras.waistcoat_lining_back.contrast ? t[k].src = str_replace("#lining_id_back_waistcoat#", this.current.extras.waistcoat_lining_back.lining_id, t[k].src) : t[k].src = str_replace("#lining_id_back_waistcoat#", this.current.fabric.waistcoat_lining_id, t[k].src), void 0 !== this.current.extras.neck_lining && this.current.extras.neck_lining.color && (t[k].src = str_replace("#cuello_id#", this.current.extras.neck_lining.color, t[k].src)), void 0 !== this.current.extras.patches && this.current.extras.patches.patches && (t[k].src = str_replace("#coderas_id#", this.current.extras.patches.patches, t[k].src)), void 0 !== this.current.extras.quilted_waistcoat && this.current.extras.quilted_waistcoat.color && (t[k].src = str_replace("#quilted_waistcoat_id#", this.current.extras.quilted_waistcoat.color, t[k].src)), void 0 !== this.current.extras.waistcoat_metal_buttons) {
          if (void 0 !== this.current.extras.waistcoat_button_holes_threads && void 0 !== this.current.extras.waistcoat_button_holes_threads["threads-color"] && this.current.extras.waistcoat_button_holes_threads["threads-color"]) {
            h = this.current.extras.waistcoat_button_holes_threads["threads-color"];t[k].src = str_replace("#waistcoat_hilos_code#", h, t[k].src);
          }
        } else if (void 0 !== this.current.extras.waistcoat_button_holes_threads && void 0 !== this.current.extras.waistcoat_button_holes_threads["threads-color"]) {
          h = this.current.extras.waistcoat_button_holes_threads["threads-color"];t[k].src = str_replace("#waistcoat_hilos_code#", h, t[k].src);
        }if (void 0 !== this.current.extras.waistcoat_metal_buttons) {
          if (void 0 !== this.current.extras.waistcoat_button_holes_threads && void 0 !== this.current.extras.waistcoat_button_holes_threads["holes-color"] && this.current.extras.waistcoat_button_holes_threads["holes-color"]) {
            v = this.current.extras.waistcoat_button_holes_threads["holes-color"];t[k].src = str_replace("#waistcoat_ojales_code#", v, t[k].src);
          }
        } else if (void 0 !== this.current.extras.waistcoat_button_holes_threads && void 0 !== this.current.extras.waistcoat_button_holes_threads["holes-color"]) {
          v = this.current.extras.waistcoat_button_holes_threads["holes-color"];t[k].src = str_replace("#waistcoat_ojales_code#", v, t[k].src);
        }void 0 !== this.current.extras.waistcoat_metal_buttons && "personalizado" == this.current.extras.waistcoat_metal_buttons.contrast ? t[k].src = str_replace("#waistcoat_button_code_id#", this.current.extras.waistcoat_metal_buttons.type, t[k].src) : t[k].src = str_replace("#waistcoat_button_code_id#", this.current.fabric._button_code, t[k].src), "man_jacket" == this.product_type && void 0 !== this.current.extras.jacket_lapel_satin && this.current.extras.jacket_lapel_satin.color && (t[k].src = str_replace("#satin_jacket_lapel#", this.current.extras.jacket_lapel_satin.color, t[k].src)), "man_smoking" == this.product_type ? (t[k].src = str_replace("#man_jacket#", this.current.fabric.man_smoking, t[k].src), void 0 !== this.current.extras.contrasts && 1 == this.current.extras.contrasts.contrast && this.current.extras.contrasts.contrasts_buttons ? t[k].src = str_replace("#satin_jacket_buttons#", this.current.extras.contrasts.contrasts_buttons, t[k].src) : t[k].src = str_replace("#satin_jacket_buttons#", this.current.satin_jacket_buttons, t[k].src), void 0 !== this.current.extras.contrasts && 1 == this.current.extras.contrasts.contrast && this.current.extras.contrasts.contrasts_flap ? t[k].src = str_replace("#satin_jacket_lapel#", this.current.extras.contrasts.contrasts_flap, t[k].src) : t[k].src = str_replace("#satin_jacket_lapel#", this.current.satin_jacket_lapel, t[k].src), void 0 !== this.current.extras.contrasts && 1 == this.current.extras.contrasts.contrast && this.current.extras.contrasts.contrasts_pockets ? t[k].src = str_replace("#satin_jacket_pockets#", this.current.extras.contrasts.contrasts_pockets, t[k].src) : t[k].src = str_replace("#satin_jacket_pockets#", this.current.satin_jacket_pockets, t[k].src), void 0 !== this.current.extras.contrasts && 1 == this.current.extras.contrasts.contrast && this.current.extras.contrasts.contrasts_buttons ? t[k].src = str_replace("#satin_pants_buttons#", this.current.extras.contrasts.contrasts_buttons, t[k].src) : t[k].src = str_replace("#satin_pants_buttons#", this.current.satin_pants_buttons, t[k].src), void 0 !== this.current.extras.contrasts && 1 == this.current.extras.contrasts.contrast && this.current.extras.contrasts.contrasts_pants ? t[k].src = str_replace("#satin_pants_ribbon#", this.current.extras.contrasts.contrasts_pants, t[k].src) : t[k].src = str_replace("#satin_pants_ribbon#", this.current.satin_pants_ribbon, t[k].src)) : "man_levita" != this.product_type && "man_chaque" != this.product_type && "man_frac" != this.product_type || ("man_levita" == this.product_type ? t[k].src = str_replace("#man_levita#", this.current.fabric.man_levita, t[k].src) : "man_chaque" == this.product_type ? t[k].src = str_replace("#man_chaque#", this.current.fabric.man_chaque, t[k].src) : "man_frac" == this.product_type && (t[k].src = str_replace("#man_frac#", this.current.fabric.man_frac, t[k].src)), void 0 !== this.current.extras.contrasts && 1 == this.current.extras.contrasts.contrast && this.current.extras.contrasts.contrasts_buttons ? t[k].src = str_replace("#satin_jacket_buttons#", this.current.extras.contrasts.contrasts_buttons, t[k].src) : t[k].src = str_replace("#satin_jacket_buttons#", this.current.fabric.satin_jacket_buttons, t[k].src), void 0 !== this.current.extras.contrasts && 1 == this.current.extras.contrasts.contrast && this.current.extras.contrasts.contrasts_flap ? t[k].src = str_replace("#satin_jacket_lapel#", this.current.extras.contrasts.contrasts_flap, t[k].src) : t[k].src = str_replace("#satin_jacket_lapel#", this.current.fabric.satin_jacket_lapel, t[k].src), void 0 !== this.current.extras.contrasts && 1 == this.current.extras.contrasts.contrast && this.current.extras.contrasts.contrasts_pockets ? t[k].src = str_replace("#satin_jacket_pockets#", this.current.extras.contrasts.contrasts_pockets, t[k].src) : t[k].src = str_replace("#satin_jacket_pockets#", this.current.fabric.satin_jacket_pockets, t[k].src));break;case "man_waistcoat":
        if ("personalizado" == this.current.extras.waistcoat_lining.contrast ? t[k].src = str_replace("#lining_id_waistcoat#", this.current.extras.waistcoat_lining.lining_id, t[k].src) : t[k].src = str_replace("#lining_id_waistcoat#", this.current.fabric.waistcoat_lining_id, t[k].src), "personalizado" == this.current.extras.waistcoat_lining_back.contrast ? t[k].src = str_replace("#lining_id_back_waistcoat#", this.current.extras.waistcoat_lining_back.lining_id, t[k].src) : t[k].src = str_replace("#lining_id_back_waistcoat#", this.current.fabric.waistcoat_lining_id, t[k].src), void 0 !== this.current.extras.waistcoat_button_holes_threads && void 0 !== this.current.extras.waistcoat_button_holes_threads["threads-color"] && this.current.extras.waistcoat_button_holes_threads["threads-color"]) {
          var h = this.current.extras.waistcoat_button_holes_threads["threads-color"];t[k].src = str_replace("#waistcoat_hilos_code#", h, t[k].src);
        }if (void 0 !== this.current.extras.waistcoat_button_holes_threads && void 0 !== this.current.extras.waistcoat_button_holes_threads["holes-color"] && this.current.extras.waistcoat_button_holes_threads["holes-color"]) {
          var v = this.current.extras.waistcoat_button_holes_threads["holes-color"];t[k].src = str_replace("#waistcoat_ojales_code#", v, t[k].src);
        }void 0 !== this.current.extras.waistcoat_metal_buttons && "personalizado" == this.current.extras.waistcoat_metal_buttons.contrast ? t[k].src = str_replace("#waistcoat_button_code_id#", this.current.extras.waistcoat_metal_buttons.type, t[k].src) : t[k].src = str_replace("#waistcoat_button_code_id#", this.current.fabric._button_code, t[k].src);break;case "man_pants":
        t[k].src = str_replace("#shirt_to_jacket_id#", this.current.fabric.shirt_to_jacket_id, t[k].src);break;case "man_coat":
        void 0 !== this.current.extras.quilted_waistcoat && this.current.extras.quilted_waistcoat.color && (t[k].src = str_replace("#quilted_waistcoat_id#", this.current.extras.quilted_waistcoat.color, t[k].src)), void 0 !== this.current.extras.contrast_collar && this.current.extras.contrast_collar.color && (t[k].src = str_replace("#contrast_collar_id#", this.current.extras.contrast_collar.color, t[k].src)), "custom" == this.current.extras.coat_lining.contrast || "padded" == this.current.extras.coat_lining.contrast || "unlined" == this.current.extras.coat_lining.contrast ? (t[k].src = str_replace("#lining_id#", this.current.extras.coat_lining.lining_id, t[k].src), t[k].src = str_replace("#lining_default_id#", this.current.fabric.unlined_lining, t[k].src)) : t[k].src = str_replace("#lining_id#", this.current.fabric.lining_id, t[k].src), t[k].src = str_replace("#zipper_color#", this.current.fabric.zipper_color, t[k].src), t[k].src = str_replace("#ribbon_color#", this.current.fabric.ribbon_color, t[k].src), t[k].src = str_replace("#button_code#", this.current.fabric.button_code, t[k].src), t[k].src = str_replace("#jacket_fabric_id#", 141, t[k].src), t[k].src = str_replace("#id_t4l_suit_rel#", this.current.fabric.id_t4l_suit_rel, t[k].src);}this.current.fabric.pant_code > 2 && (this.current.fabric.pant_code = 1), t[k].src = str_replace("#pant_code#", this.current.fabric.pant_code, t[k].src), t[k].src = str_replace("#shoes#", this.current.fabric.shoe_color, t[k].src), t[k].src = str_replace("#tie#", this.current.fabric.tie, t[k].src), t[k].src = t[k].src.replace(/^\//, window.cdn_host);
  }return t;
}, Garment.prototype.setFilterMessage = function (t, e) {
  return this.active_titles = e, void 0 !== t && ("no_text" == t ? ($(".result_text").html(""), !0) : (t += " <span></span>", void $(".result_text").html(t)));
}, Garment.prototype.setMessageFilterCounter = function () {
  var t = $(".fabric_list .fabric_thumb").length;$(".result_text span").html("(" + t + ")");
}, Garment.prototype.initGarmentFabric = function () {
  function t(t, e, i) {
    if ("remove" == t) {
      for (var r in a.filters_applied[e]) a.filters_applied[e][r] == i && a.filters_applied[e].splice(r, 1);0 == a.filters_applied[e].length && delete a.filters_applied[e], $(".added_filters .added_filters_wrap .title_filter[f_value=" + i + "]").remove(), 0 == $(".added_filters .title_filter").length && ($(".added_filters").removeClass("active"), $(".filter.filter_" + e).hasClass("active") || $(".fabric_list").removeClass("double"));
    } else "add" == t && (void 0 === a.filters_applied[e] && (a.filters_applied[e] = []), a.filters_applied[e].push(i), $(".added_filters .added_filters_wrap").append("<div rel_type='" + e + "' rel_type='" + i + "' class='title_filter t' f_type='" + e + "' f_value='" + i + "'><div class='cruz'>k</div>" + fabric_options_i18n[i] + "</div>"), $(".added_filters").addClass("active"), $(".fabric_list").addClass("double"));var n = 20;$(".added_filters_wrap .t").each(function (t) {
      n += parseInt($(this).outerWidth() + 12, 10);
    }), $(".added_filters_wrap").css("width", n), a.update_fabric_list();
  }function e(t) {
    r.removeClass(function (t, e) {
      return (e.match(/(^|\s)sub_list_\S+/g) || []).join(" ");
    });var e = t;"man_jacket" == e && (e = a.product_type), r.addClass("sub_list_" + e);
  }$(".filter_up .up").click(function () {
    return $(".garment_block_fabric").animate({ scrollTop: 0 }, 700), !1;
  }), $(".garment_block_fabric").scroll(function () {
    $(".garment_block_fabric").scrollTop() >= 600 ? $(".filter_up").addClass("visible") : $(".filter_up").removeClass("visible");
  }), "undefined" != typeof winter_blazer_landing && "yes" == winter_blazer_landing || $(".winter_tweed").parents("li").hide();var i = $(".filter_bar:first .filters div.filter").length;$(".filter_bar .filters").addClass("num_" + i), $(".body").removeClass("body_blocked");var a = this;this.bind("multiFabric", this.fabricMultiChange), "undefined" != typeof Blazy ? this.bLazy = new Blazy({ success: function (t) {
      t.parentNode.className = t.parentNode.className.replace(/\loading\b/, "");
    }, error: function (t, e) {
      dataLayer.push({ event: "blazy_error" });
    } }) : this.bLazy = !1, $(".filters div.filter .option_icon").click(function () {
    $(".filters div.filter").not($(this).parent()).removeClass("active");var t = $(this).attr("rel");$(this).parent().hasClass("active") ? ($(this).parent().removeClass("active"), $(".filters_content .content." + t).removeClass("active"), $(".added_filters").hasClass("active") || $(".fabric_list").removeClass("double")) : ($(this).parent().addClass("active"), $(".filters_content .content").removeClass("active"), $(".filters_content .content." + t).addClass("active"), $(".fabric_list").addClass("double"));
  }), $(".filters_content .filter_button").click(function () {
    var e = $(this).data("type"),
        i = $(this).attr("rel"),
        r = "";"sort" == e && $(".filters_content .filter_button[data-type=sort]").removeClass("active"), $(this).hasClass("active") ? ($(this).removeClass("active"), r = "remove") : ($(this).addClass("active"), r = "add"), "sort" == e ? a.sort_fabric_list(i) : t(r, e, i);
  });$(".filters");$(".garment_block_fabric").on("click", ".title_filter", function (e) {
    var i = $(this).attr("f_type"),
        a = $(this).attr("f_value");return $(".filters .filter_button." + a).removeClass("active"), t("remove", i, a), !1;
  });var r = $(".garment_block_fabric .fabric_list"),
      n = $(".multi_fabric_section");$(".check_radio_2", n).click(function () {
    n.hasClass("active") ? (multi_active = !1, a.multi_fabric_active = multi_active, r.removeClass("multi_fabric")) : (multi_active = !0, r.addClass("multi_fabric"), $(".multi_options .check_button").first().click()), a.fabricPriceActive(), n.toggleClass("active");
  }), $(".multi_options").on("click", ".check_button", function () {
    $(".multi_options .check_button").removeClass("checked"), $(this).addClass("checked");var t = $(this).attr("rel");a.multi_fabric_active = t, a._fabric_block = t, e(t), a.fabricPriceActive(), a.bLazy && a.bLazy.revalidate();
  });this.bind("stepSwitch", function (t) {
    switch ($("#link_apply_samples", this.container).hide(), t) {case "fabric":
        $(".fabric_list").hasClass("loaded") || this.fabricsLoad(), $("#link_apply_samples", this.container).show();}
  });for (var o in this.fabric) if (void 0 !== this.current.fabric[o]) {
    var s = this.current.fabric[o];s && ($('input[name="fabric[' + o + ']"]').val(s), a.setProductComposition(s, o));
  }$(".action .action_fabric").click(function () {
    var t = { mode: "click_compo", option: "fabric_view" },
        e = $(this).data("url_info").substring(1).split("&");for (var i in e) {
      var r = e[i].split("=");t[r[0]] = r[1];
    }History.pushState(t, a.window_title, "?" + jQuery.param(t));
  }), $(".text_block a.back").click(function (t) {
    return a.goToRender(), t.stopPropagation(), !0;
  }), $(".result_text").click(function () {
    History.pushState({ step: a.step, option: "fabric_filter" }, a.window_title, "?step=" + a.step + "&option=fabric_filter");
  }), this.bind("fabricChangeBlock", function (t, e) {
    if ("fabric" != this.step) return !1;$(".fabric_list", e).hasClass("loaded") || this.fabricsLoad();
  });
}, Garment.prototype.setProductComposition = function (t, e) {
  if (!t || void 0 === t) return !1;var i = this.fabricGetInfo(t, e, function () {
    this.setProductComposition(t, e);
  });if ("callback" != i) {
    var a = this.prepareUrlToGetFabricInfo() + "fabric_view_2/" + t + "/" + e;$(".action .action_fabric").data("url_info", a), $(".action .composition").html(fabric_options_i18n[i.simple_composition]);var r = "";"man_shirt" != this.product_type && "basic" != i.category_group ? r = fabric_options_i18n[i.category_group] : "man_shirt" == this.product_type && (r = fabric_options_i18n["thread_style_" + i.thread_style]), $(".action .fabric_info_extra").html(r);
  }
}, Garment.prototype.fabricPriceActive = function () {
  var t = this;t.multi_fabric_active ? ($(".fabric_thumb .info .price.man_suit").removeClass("visible"), $(".fabric_thumb .info .price.man_suit." + t.multi_fabric_active).addClass("visible"), $(".fabric_block .fabric_list .fabric_thumb.current").removeClass("current"), $(".fabric_block .fabric_list .fabric_thumb.fabric_" + t.current.fabric[t.multi_fabric_active]).addClass("current"), setTimeout(function () {
    var t = 0,
        e = $(".fabric_thumb.current");e.length && (t = e.offset().top - 200), $(".garment_block_fabric.visible").animate({ scrollTop: t }, 500);
  }, 600)) : ($(".fabric_thumb .info .price.man_suit").removeClass("visible"), $(".fabric_thumb .info .price.man_suit." + t.real_product_type).addClass("visible"), $(".fabric_block .fabric_list .fabric_thumb.current").removeClass("current"), $(".fabric_block .fabric_list .fabric_thumb.fabric_" + t.current.fabric[t.multi_fabric_options[0]]).addClass("checked"), setTimeout(function () {
    var t = 0,
        e = $(".fabric_thumb.current");e.length && (t = e.offset().top - 200), $(".garment_block_fabric.visible").animate({ scrollTop: t }, 500);
  }, 600));
}, Garment.prototype.applyFilterFabric = function (t) {
  $(".fabric_block:visible .filters_content .filter_button." + t.filter).click();
}, Garment.prototype.initGarmentExtra = function () {
  $("div.extra_block_selector", this.container);var t = this;$("div.garment_block_extra", this.container).on("click", "a.discard", function () {
    var e = $(this.parentNode),
        i = e.attr("data-extra-name");return t.extraDiscard(i, e), !1;
  });var e = $("div.extra_container", this.container).each(function () {
    var e = (this.getAttribute("data-extra-type") + "").capitalize(),
        i = this.getAttribute("data-extra-name");void 0 === t.current.extras[i] && (t.current.extras[i] = []), "function" == typeof t["initExtra" + e] && t["initExtra" + e].apply(t, [i, this]), $(this).addClass("loaded");
  }),
      i = !1;this.bind("stepSwitch", function (a) {
    i || "extra" == a && (e.filter(".active").each(function () {
      t.trigger("activateExtra", [this.getAttribute("data-extra-name")]);
    }), i = !0);
  });$("input, select", this.container).change(function () {
    var e = this.getAttribute("data-block");"lining[lining_id]" == this.getAttribute("name") && (e = "man_jacket_only"), t.renderSetActiveBlock(e);
  });
}, Garment.prototype.initMobileLayers = function () {
  var t = new Blazy({ container: ".extra_container.logos" }),
      e = this;$(".garment_block .fabric_filters .back").click(function (t) {
    History.back(), t.stopPropagation();
  }), $(".config_header .back").click(function (t) {
    e.goToRender(), t.stopPropagation();
  }), $(".garment_block .result_text .back").click(function (t) {
    e.goToRender(), t.stopPropagation();
  }), $(".image_render_full .close").click(function () {
    History.back();
  }), $(".list_option .drop_head", this.container).click(function () {
    var t = this.getAttribute("option").replace("/^[^#]/", "").replace("#", "");if (t != e.mobile_current_option) return History.pushState({ step: e.step, option: t }, e.window_title, "?step=" + e.step + "&option=" + t), !1;if ("extra" == e.step) {
      var i = e.current.extras[e.mobile_current_option];void 0 === i && e.trigger("discardExtra", [e.mobile_current_option]), jQuery.isEmptyObject(i) && e.trigger("discardExtra", [e.mobile_current_option]);
    }History.back();
  }), History.Adapter.bind(window, "statechange", function () {
    var i = History.getState();if ($(".filter_up").removeClass("visible"), void 0 !== i.data.popup && "quilted_waistcoat" == i.data.popup ? e.showQuilterWaistcoatAlert() : e.hideQuilterWaistcoatAlert(), void 0 !== i.data.popup && "unlined_coat" == i.data.popup ? e.showUnlinedCoatAlert() : e.hideUnlinedCoatAlert(), $(".config_field").parents(".list_option").removeClass("active"), void 0 === i.data.step && void 0 === i.data.option && void 0 === i.data.mode && $("#available_window", this.container).removeClass("desplaced"), void 0 !== i.data.option) {
      if (e.mobile_current_option = i.data.option, $(".config_field:not(.container_full_view):not(." + i.data.option + ")").slideUp(), $(".config_field.container_full_view:not(." + i.data.option + ")").removeClass("visible"), (l = $(".config_field." + i.data.option)).hasClass("container_full_view")) {
        l.addClass("visible");var a = $(".extra_header", l).height();$(".extra_header+.box_opt", l).css("margin-top", a), (e.step = "extra") && ($(".navigate", l).removeClass("two_options"), e.loadPreImages(l), "logos" == i.data.option && setTimeout(function () {
          t && t.revalidate();
        }, 200));
      } else if ("fabric" != e.step) {
        var r = $(".garment_block_config .list_option:visible").length,
            n = $(".garment_block_" + e.step + " .list_option." + i.data.option + ":visible").index(".list_option:visible");"extra" == e.step && (n -= r);var o = 0 + 54 * n;o > 53 && $(".garment_block_" + e.step).animate({ scrollTop: o }, 400), l.slideDown(400);
      }if ($(".config_field." + i.data.option).parents(".list_option").addClass("active"), e.complex && !l.parents(".config_block_content").is(":visible") && "config" == e.step) {
        var s = $(".config_block.multiproduct .config_block_content");s.removeClass("visible").slideUp(), s.parents(".config_block").removeClass("visible");var c = l.parents(".config_block_content");c.addClass("visible").slideDown(), c.parents(".config_block").addClass("visible");
      }if ($(".fabric_zoom_iframe").remove(), "fabric_zoom" == i.data.option) l = $("#fabric_view_opt").show();if ($("body").css("overflow", "hidden"), "fabric_view" == i.data.option) {
        var l = $("#fabric_view_opt").addClass("visible");if (void 0 !== i.data.mode && "click_compo" == i.data.mode && $("#available_window", this.container).addClass("desplaced"), e.loading_layer.addClass("fabric_mode").show(), e.fabric_preview_opened == i.data.id_t4l_fabric) {
          var _ = $("#fabric_view_opt");e.loading_layer.removeClass("fabric_mode").hide(), _.removeClass("zoom_mode"), $(".image", _).removeClass("zoom_mode"), $(".info", _).removeClass("open"), $(".info .bars", _).css("height", 0), $(".info .bars", _).get(0).setAttribute("data-collapsed", "true");
        } else {
          var d = e.prepareUrlToGetFabricInfo() + "fabric_view_2/" + i.data.id_t4l_fabric + "/" + i.data.fabric_block;l.find(".loader").html("").load(d, function () {
            function t(t) {
              t.each(function () {
                var t = $(this).get(0);if (null == t) return !0;var e = t.scrollHeight,
                    i = t.style.transition;t.style.transition = "", requestAnimationFrame(function () {
                  t.style.height = e + "px", t.style.transition = i, requestAnimationFrame(function () {
                    t.style.height = "0px";
                  });
                }), t.setAttribute("data-collapsed", "true");
              });
            }function a(t) {
              t.each(function () {
                var t = $(this).get(0);if (null == t) return !0;var e = t.scrollHeight;t.style.height = e + "px", t.addEventListener("transitionend", function (e) {
                  t.removeEventListener("transitionend", arguments.callee), t.style.height = null;
                }), t.setAttribute("data-collapsed", "false");
              });
            }e.fabric_preview_opened = i.data.id_t4l_fabric;var r = e._fabric_block,
                n = e.fabricGetInfo(i.data.id_t4l_fabric, r),
                o = $(".garment_block_fabric .fabric_list .fabric_thumb.fabric_" + i.data.id_t4l_fabric + " span.price.visible").html();$(".info[class*='fabric_type_']", p).removeClass(function (t, e) {
              return (e.match(/(^|\s)fabric_type_\S+/g) || []).join(" ");
            }), $(".info", p).addClass("fabric_type_" + n.fabric_type), $("#fabric_view_opt .fabric_options .category_group").removeClass(".visible"), "premium" == n.category_group && $(".fabric_options .category_group.premium").addClass("visible"), "limited" == n.category_group && $(".fabric_options .category_group.limited").addClass("visible");var s = !1,
                c = !1,
                _ = !1;if (d = n.tags) {
              var d = d.split(",");for (var u in d) "oeko" == d[u] && (s = !0), "easy" == d[u] && (c = !0), "wrinkle" == d[u] && (_ = !0);
            }c && $(".fabric_options .category_group.easy").addClass("visible"), _ && $(".fabric_options .category_group.wrinkle").addClass("visible"), s && $(".fabric_options .category_group.oeko").addClass("visible");"100% merino wool" == n.composition && $(".fabric_options .category_group.wool").addClass("visible");"1" == n.shirt_sharn && $(".fabric_options .category_group.2ply").addClass("visible");"1" == n.double_faced && $(".fabric_options .category_group.double_faced").addClass("visible");var p = $("#fabric_view_opt");if ("thick" == n.thickness && $(".fabric_options .category_group.thickness").addClass("visible"), void 0 !== n.bars.hot) {
              var f = n.bars.hot,
                  h = $(".bar.warmth");$(".subar", h).removeClass("active");for (w = 1; w <= f; w++) $(".subar.bar_" + w, h).addClass("active");
            }var v = n.bars.weight,
                b = $(".bar.weight");$(".subar", b).removeClass("active");for (w = 1; w <= v; w++) $(".subar.bar_" + w, b).addClass("active");var m = n.bars.fineza,
                g = $(".bar.fineza");$(".subar", g).removeClass("active");for (var w = 1; w <= m; w++) $(".subar.bar_" + w, g).addClass("active");e.active_info_bars ? $(".info").addClass("openable") : $(".info").removeClass("openable"), e.initial_info_height = $("#fabric_view_opt .info").outerHeight(), $(".info", p).click(function () {
              var e = $(".bars"),
                  i = $(".info .fabric_options .category_group.visible");if ("true" === e.get(0).getAttribute("data-collapsed")) {
                if ($(".info", p).hasClass("open")) $(".info", p).removeClass("open");else {
                  $(".info", p).addClass("open");var r = ($("#fabric_view_opt .bars").width() - $("#fabric_view_opt .bars .title").width() - 25) / 5;$("#fabric_view_opt .bars .bar .subar").css("width", r);
                }a(e), a(i), e.each(function () {
                  $(this).get(0).setAttribute("data-collapsed", "false");
                }), null != i && i.each(function () {
                  $(this).get(0).setAttribute("data-collapsed", "false");
                });
              } else t(e), t(i), setTimeout(function () {
                if ($(".info", p).hasClass("open")) $(".info", p).removeClass("open");else {
                  $(".info", p).addClass("open");var t = ($("#fabric_view_opt .bars").width() - $("#fabric_view_opt .bars .title").width() - 25) / 5;$("#fabric_view_opt .bars .bar .subar").css("width", t);
                }
              }, 100);return !1;
            }), $("#fabric_view_3d .back").click(function (t) {
              $("#fabric_view_opt").hasClass("click_compo") ? e.goToRender() : (History.back(), t.stopPropagation());
            }), $("#fabric_view_opt .lupa").click(function () {
              if ($(this).hasClass("zoom_mode")) History.back();else {
                var t = parse_query_string(window.location.href.replace(/^[^?]*/, ""));t.step = e.step, t.option = t.action, delete t.action, t.option = "fabric_zoom", History.pushState(t, e.window_title, "?" + jQuery.param(t));
              }
            }), $("#fabric_view_opt .image .close").click(function () {
              History.back();
            }), $("#fabric_view_opt .image").click(function () {
              if ($(this).hasClass("close")) return History.back(), !0;if (!$(this).hasClass("zoom_mode")) {
                var t = parse_query_string(window.location.href.replace(/^[^?]*/, ""));t.step = e.step, t.option = t.action, delete t.action, t.option = "fabric_zoom", History.pushState(t, e.window_title, "?" + jQuery.param(t));
              }
            }), void 0 !== i.data.mode && "click_compo" == i.data.mode ? (l.addClass("click_compo"), $("#fabric_view_opt .more_info").click()) : l.removeClass("click_compo");var k = o;$("div.price", this).html(k);var y = $("#fabric_view_opt .header .title").width(),
                x = $("#fabric_view_opt  .price").width(),
                C = $("#fabric_view_opt  .more_info").width(),
                j = $("#fabric_view_opt .header").width() - y - C - x - 20;$("#fabric_view_opt .description.composition .value").width() > j && $("#fabric_view_opt .description.composition .value").css("width", j), e.loading_layer.removeClass("fabric_mode").hide();
          });
        }
      }if ("fabric_info" == i.data.option && $("#personalize_fabrics_info_popup").addClass("visible"), "fabric_filter" == i.data.option && $(".fabric_filters").addClass("visible").scrollTop(0), "zoom" == i.data.option) {
        var u = $(".image_render_full .viewport");$(".image_render_full").addClass("active"), $(".image_render_full .loading").addClass("active"), $(".image_render_full .layers").html(""), $(".image_render_full").addClass(e.current.view);p = 1;if (e.complex) {
          var p = 1,
              f = -e.viewport[e.current.view].man_jacket.top * p - 10,
              h = e.viewport[e.current.view].base.h * p,
              v = $(window).height();h < v && (h = v);b = "hidden";css = { top: f, height: h, overflowY: b }, u.css(css);
        } else {
          var p = 1,
              f = -e.viewport[e.current.view][e.product_type].top * p;(h = e.viewport[e.current.view][e.product_type].h * p - f) < (v = $(window).height()) && (h = v);var b = "hidden";h *= 1.15, css = { top: f, height: h, overflowY: b }, u.css(css);
        }var m = u.offset().left + u.width() / 3;m = u.offset().left + u.width() / 6, $("#available_window_zoom").scrollTop(0), $("#available_window_zoom").scrollLeft(m), e.renderDraw(e.view, !1, !1, "BIG");
      }"fabric_zoom" == i.data.option ? ($("#fabric_view_opt").show(), $("#fabric_view_opt").addClass("zoom_mode"), $("#fabric_view_opt .image").addClass("zoom_mode")) : ("man_pants" == e.product_type && "1" == e.current.config.pants_chinos ? $("#header_form").hide() : $("#header_form").show(), $("#fabric_view_opt").removeClass("zoom_mode")), void 0 !== i.data.fabrics ? (e.mobile_layer_extra_fabrics.addClass("visible"), e.mobile_layer_extra_fabrics_visible = !0) : (e.mobile_layer_extra_fabrics.removeClass("visible"), e.mobile_layer_extra_fabrics_visible = !1);
    } else e.mobile_current_option && ($("body").css("overflow", ""), $(".config_field").not(".container_full_view").slideUp(), $(".config_field.container_full_view").removeClass("visible"), e.mobile_current_option = !1), e.mobile_layer_extra_fabrics_visible && (e.mobile_layer_extra_fabrics.removeClass("visible"), e.mobile_layer_extra_fabrics_visible = !1), $("#personalize_fabrics_info_popup").removeClass("visible"), $(".fabric_filters").removeClass("visible"), $("#fabric_view_opt").removeClass("visible"), $("#personalize_fabrics_split").hide(), "man_pants" == e.product_type && "1" == e.current.config.pants_chinos ? $("#header_form").hide() : $("#header_form").show(), $(".views").show(), e.onswipeform(), $(".step_options").removeClass("hide"), $(".head").fadeIn(), $(".action").slideDown(), $(".controls").show(), $(".fabric_zoom_iframe").remove(), e.hideQuilterWaistcoatAlert(), $("#available_window_zoom").scrollTop($("#available_window_zoom").offset().top), $("#available_window_zoom").scrollLeft($("#available_window_zoom").offset().top), $(".image_render_full").removeClass(e.current.view), $(".image_render_full").removeClass("active");$(window).scrollTop(0), $(".mobile_layer").scrollTop(0);
  }), $("div.fabric_filters", this.container).attr("id", "fabric_filter_opt").addClass("manual_close");var i = $('<div id="fabric_view_opt" class="fabric_preview_popup manual_close"><div class="loader"></div></div>').appendTo(this.container);i.append($("div.fabric_filters .navigate").clone()), $(".navigate", i).removeClass("two_options").addClass("fabric_apply"), $(".fabric_preview_popup .navigate").on("click", "a", function () {
    if ($(".body").removeClass("body_blocked"), $(".fabric_preview_popup").hasClass("click_compo") && $("#available_window", this.container).removeClass("desplaced"), "select" == this.className) {
      var t = History.getState();e.with_add_to_cart(), e.fabricSelect(t.data.fabric_block, t.data.id_t4l_fabric), e.action_fabric_changed = !0, e.popup_status_step < 1 && (e.popup_status_step = 1), e.goToRender();
    } else History.back();
  }), e.mobile_layer_extra_fabrics = $('<div class="mobile_layer extras_fabrics ' + e.product_type + '"><div class="extra_fabrics_header"><div class="title polos" style="display:none;">' + fabric_options_i18n.select_contrast + '</div><div class="title fabrics">' + fabric_options_i18n.fabrics + '</div><div class="title linings">' + fabric_options_i18n.linings + '</div><div class="link_popup_unlined_coat"><span>$</span>' + fabric_options_i18n.unlined_coat_more_info + '</div><a href="javascript:;" class="back_extra">h</a></div><div class="list"></div></div>').appendTo(this.container), e.bLazy && e.mobile_layer_extra_fabrics.bind("scroll", e.bLazy.revalidate), "man_coat" == e.product_type && ($(".extra_fabrics_header").on("click", ".link_popup_unlined_coat", function () {
    var t = parse_query_string(window.location.href.replace(/^[^?]*/, ""));t.step = e.step, t.option = t.option, t.popup = "unlined_coat", History.pushState(t, e.window_title, "?" + jQuery.param(t));
  }), $(".unlined_coat_alert").click(function () {
    History.back();
  }));
}, Garment.prototype.stepNext = function () {
  switch (this.step) {case "config":
      return this.stepSetURL("fabric");case "fabric":case "fabric_man_pants":case "fabric_man_waistcoat":
      if ("man_suit2" == this.product_type || "man_suit3" == this.product_type || "man_suit" == this.product_type || "man_smoking" == this.product_type) {
        if (this.multi_fabric_active == this.multi_fabric_options[0]) return this.stepSetURL("fabric_man_pants");if (("man_suit3" == this.real_product_type || "man_ceremonial3" == this.real_product_type) && this.multi_fabric_active == this.multi_fabric_options[1]) return this.stepSetURL("fabric_man_waistcoat");
      }if (void 0 !== this.extra) return this.stepSetURL("extra");case "extra":
      this.container.submit();}
}, Garment.prototype.stepPrev = function () {
  switch (this.step) {case "config":
      return !1;case "fabric":
      return this.stepSetURL("config");case "extra":
      return this.stepSetURL("fabric");}
}, Garment.prototype.gaEvent = function (t) {
  var e = t;e || (e = "start"), this.push_dataLayer("config_" + this.product_type, "step:" + e);
}, Garment.prototype.stepSetURL = function (t) {
  History.pushState({ step: t }, this.window_title, "?step=" + t);
}, Garment.prototype.stepSwitch = function (t) {
  this.gaEvent(t), this.step != t && ($("div.garment_block", this.container).removeClass("visible").filter(".garment_block_" + t).addClass("visible"), "" == t ? $("#available_window", this.container).removeClass("desplaced") : $("#available_window", this.container).addClass("desplaced"), this.step = t, this.trigger("stepSwitch", [t]));
}, Garment.prototype.stepScroll = function () {
  var t = $('<header class="garment_step garment_header"><div class="container"></div></header>').appendTo(this.container),
      e = t.find(".container"),
      i = !1;switch ($("a.step_next:eq(0)", this.container).clone(!0).appendTo(e), $("div.garment_header_right", this.container).clone().appendTo(e), this._scroll_header = t, $("html").attr("lang")) {case "es":
      a = " VOLVER ARRIBA ";break;case "fr":
      a = " HAUT DE LA PAGE ";break;case "de":
      a = " ZURÜCK NACH OBEN ";break;case "it":
      a = " TORNA SU ";break;case "ru":
      a = " ​ВЕРНУТЬСЯ НАВЕРХ​ ";break;default:
      var a = " BACK TO TOP ";}var r = $('<footer class="garment_step"><div class="container"><a class="to_top" href="javascript:;"><span class="icon">C</span><span class="txt"> ' + a + " </span></a></div></footer>").appendTo(this.container),
      n = r.find(".container"),
      o = !1;$("a.step_next:eq(0)", this.container).clone(!0).appendTo(n), $("a.step_prev:eq(0)", this.container).clone(!0).appendTo(n), this._scroll_footer = r;var s = 0,
      c = $(".garment_nav", this.container).offset().top + 20,
      l = this,
      _ = $(window),
      d = function () {
    var e = 0;switch (l.step) {case "fabric":
        e = s;break;default:
        e = c;}var a = _.scrollTop();a > 100 ? o || (r.css("visibility", "visible"), o = !0) : o && (r.css("visibility", "hidden"), o = !1), l.bind("stepSwitch", function (t) {
      "config" == t ? r.find(".step_prev").hide() : r.find(".step_prev").show();
    }), e && a >= e ? i || (t.css("visibility", "visible"), l.trigger("scrollHeaderShow", [t]), i = !0) : i && (t.css("visibility", "hidden"), l.trigger("scrollHeaderHide", [t]), i = !1);
  };_.bind("scroll", d).bind("touchmove", d).bind("touchend", d), $("a.to_top", r).click(function () {
    return $("body, html").animate({ scrollTop: c - 110 }, "fast", d), !1;
  }), this.bind("scrollHeaderShow", function () {
    switch (this.step) {case "fabric":
        $("div.fabric_filters").clone(!0, !0).appendTo(e).find("input").unbind("change").change(function () {
          "radio" == this.type || "checkbox" == this.type ? $('input[name="' + this.name + '"][value="' + this.value + '"]').prop("checked", !0).change() : $('input[name="' + this.name + '"]').val(this.value).change();
        });break;default:
        $("div.fabric_filters", e).remove();}
  }), this.bind("scrollHeaderHide", function () {
    $("div.fabric_filters", e).remove();
  }), this.bind("stepSwitch", function (t) {
    $("html, body").animate({ scrollTop: c - 110 }, d), e.get(0).className = "container " + t;
  }), this.bind("fabricsBeforeLoad", function (t) {
    _.scrollTop() > c && $("body").animate({ scrollTop: c }, "fast");
  }), this.bind("fabricsLoad", function (t) {
    s || (s = $("div.fabric_list", l.fabric_block_obj).offset().top);
  });
}, Garment.prototype.formInit = function () {
  var t = this;$(this.container).submit(function () {
    return t.formSubmit();
  }), $(".add_to_cart", this.container).click(function () {
    if ($(this).hasClass("disabled")) return !1;$(this).addClass("disabled"), t.container.submit();
  });
}, Garment.prototype.formSubmit = function () {
  function t() {
    var t = "input" == this.tagName.toLowerCase(),
        a = t ? $(this) : $("input", this),
        r = t ? a.parent().get(0) : this;if (a.length) switch (a.eq(0).attr("type")) {case "radio":case "checkbox":
        if (!a.filter(":checked").length) return e.formShowError(i, r), e.allow_redirect = !1, !1;break;default:
        if (!a.val()) return e.formShowError(i, r), e.allow_redirect = !1, !1;} else {
      var n = $("select", this);if (!n.length) return !0;if (!n.val()) return e.formShowError(i, r), e.allow_redirect = !1, !1;
    }return !0;
  }this.allow_redirect = !0;var e = this,
      i = "";if (!e.allFabricsAndLiningsOk()) return !1;if (i = "config", $(".garment_block_config:visible", this.container).find(".config_field:visible").each(t), !this.allow_redirect) return !1;if (i = "fabric", $(".garment_block_fabric", this.container).find("input.required").each(t), !this.allow_redirect) return !1;var a = 1;return id_cart_product && (a = id_cart_product), $(this.container).append('<input type="hidden" name="next" value="' + a + '" />'), !0;
}, Garment.prototype.formShowError = function (t, e) {
  var i = $(e).offset().top - 300;i < 0 && (i = 0), $("html, body").animate({ scrollTop: i }, "500", "swing");
}, Garment.prototype.bind = function (t, e) {
  void 0 === this._events[t] && (this._events[t] = []), this._events[t].push(e);
}, Garment.prototype.trigger = function (t, e) {
  if (void 0 !== this._events[t]) for (var i in this._events[t]) this._events[t][i].apply(this, e);
}, Garment.prototype.unbind = function (t, e) {
  if (void 0 !== this._events[t]) {
    var i = this._events[t].indexOf(e);i > -1 && this._events[t].splice(i, 1);
  }
}, Garment.prototype.relationsApply = function (t, e, i) {
  function a(e, i) {
    if ("initials" != e.field_name && "logos" != e.field_name || "man_polo" != e.block) a = $(e.css_selector, r.container);else var a = $(e.css_selector, r.container).parent();switch (e.rel_type) {case "require":
        if (!a.length) return !0;e.field_values && (a = a.filter("." + e.field_values.join(", ."))), i ? (a.removeClass("required"), r.formGetPopover(a, !1)) : a.addClass("required");break;case "disable":
        if ("coat_model_combined" == e.field_name && coat_generic_mode) return;if (!a.length) return !0;if (i) {
          var o = !1;for (var s in r._relations_active) if (s != t) for (var c in r._relations_active[s]) if ("disable" == r._relations_active[s][c].rel_type) {
            var l = r._relations_active[s][c];if (l.block != e.block) continue;if (l.field_name != e.field_name) continue;if (l.field_values && e.field_values) ;else if (l.field_values) ;else if (!e.field_values) {
              o = !0;break;
            }
          }if (o) break;
        }v = i ? "show" : "hide";if ("fabric" == e.step) !i && $.inArray(e.block, n) < 0 && n.push(e.block);else if ("extra" == e.step) {
          if (e.field_values && "initials" != e.field_name && "logos" != e.field_name) for (var _ in e.field_values) a.filter("." + e.field_values[_])[v]();else a[v](), "hide" == v && void 0 !== r.current.extras[e.field_name] && void 0 !== r.current.extras[e.field_name].contrast && ("custom" != r.current.extras[e.field_name].contrast && "personalizado" != r.current.extras[e.field_name].contrast || (r.extraSetPrice(e.field_name, 0), $(".config_field." + e.field_name + " .option").removeClass("checked"), $(".config_field." + e.field_name + ' .option[mode="default"]').addClass("checked").click()));
        } else if (e.field_values) {
          if (a.hasClass("box_opt_select")) {
            if (i) return !1;var d = a.data("options");d || (d = {}, a.find("option").each(function () {
              d[this.value] = this.innerHTML;
            }), a.data("options", d)), d = jQuery.extend({}, d);for (var _ in e.field_values) delete d[e.field_values[_]];var u = a.find("select"),
                p = u.val();u.empty(), $.each(d, function (t, e) {
              u.append($("<option></option>").attr("value", t).prop("selected", t == p).text(e));
            }), u.change();
          } else for (var _ in e.field_values) if ("show" != v || "ulster" != e.field_values[_] || void 0 === r.current.config.coat_model || "overcoat" != r.current.config.coat_model) {
            var f = a.find('input[value="' + e.field_values[_] + '"]');if (f.closest(".option")[v](), "show" == v ? (f.closest(".option").addClass("visible"), f.closest(".option").removeClass("oculto")) : (f.closest(".option").addClass("oculto"), f.closest(".option").removeClass("visible")), f.is(":checked")) {
              var h = f.attr("name");r.mobile_enabled ? $("#" + h + "_opt label").not(".oculto").first().children("input").click() : $("div." + h + " label:visible:first").children("input").click();
            }
          }
        } else a[v](), i && (a.find("input:checked").length || a.find("input:eq(0)").prop("selected", 1).click());break;case "inhabilite":
        if (!a.length) return !0;var v = i ? "show" : "hide";if ("extra" == e.step && e.field_values) for (var _ in e.field_values) "show" == v ? a.filter("." + e.field_values[_]).removeClass("ocult") : a.filter("." + e.field_values[_]).addClass("ocult");break;case "set":
        if (!id_cart_product || r.actived_coat_seters) {
          if ("config" != e.step) break;if (!e.field_values) break;$("." + e.field_name + " label").removeClass("checked").removeClass("active"), $("." + e.field_name + ' input[value="' + e.field_values[0] + '"]').prop("checked", !0).change().parents("label").addClass("checked").addClass("active");
        }}
  }var r = this,
      n = [];if (void 0 !== this._relations_active[t]) for (var o in this._relations_active[t]) try {
    a(this._relations_active[t][o], !0);
  } catch (t) {}this._relations_active[t] = [];for (var o in e) {
    var s = this.relationParse(e[o]);try {
      a(s);
    } catch (t) {}this._relations_active[t].push(s);
  }var c = n.length != this.fabrics_disabled.length;if (!n) for (var l in n) if ($.inArray(l, this.fabrics_diabled) >= 0) {
    c = !0;break;
  }c && (this.fabrics_disabled = n, this.fabricsUpdateDisabled());
}, Garment.prototype.relationParse = function (t) {
  var e,
      i,
      a = { rel_type: !1, step: !1, block: !1, field_name: !1, field_values: !1, css_selector: !1 };e = t.split("#"), a.rel_type = e[0], i = "div." + (e = e[1].split(":"))[0] + "_block", a.step = e[0];var r = e[2];return e.length > 1 && (i += "_" + e[1], a.block = e[1]), e.length > 2 && (i = "contrasts" == e[2] ? ".extra_container." + e[2] : "extra" == a.step ? ".list_option." + e[2] : "extras" == a.step && "title_combined.extras.man_waistcoat" == e[2] ? "div." + e[2] : "extras" == a.step ? ".list_option." + e[2] : "trenchcoat_fastening" == e[2] ? " div.sub_config_field." + e[2] : "div.list_option." + e[2], a.field_name = e[2]), e.length > 3 && ("man_polo" != this.product_type || "initials" != e[2] && "logos" != e[2] ? "extra" == a.step || "extras" == a.step ? i += " div.extra_field" : i = "coat_lapel_style" == a.field_name ? " div.sub_config_field." + a.field_name : "coat_fastening" == a.field_name ? " div.sub_config_field." + a.field_name : "trenchcoat_body_pockets" == a.field_name ? " div.sub_config_field." + a.field_name : "div.list_option." + e[2] : i = ".config_field." + e[2] + ' input[value="' + e[3].trim("[]") + '"]', a.field_values = e[3].trim("[]").split(",")), r.indexOf("exactly") > -1 && (i = "." + r.replace("exactly", "")), a.css_selector = i, a;
}, Garment.prototype.parseImages = function (t, e, i) {
  layers = this.getLayers(), layers = this.parseLayers(layers, e, i), final_images = [];for (key in t) {
    var a = t[key];array_push(final_images, [layers[a.layer].src + a.src, a.zIndex, a.class, a.render]);
  }return final_images;
}, Garment.prototype.renderInit = function () {
  window.mobile_enabled || this.renderScroll();var t = this,
      e = $("#available_window", this.container);if (!e.length) return !1;var i = $(".controls a.toggle", e);if (i.length) {
    var a = i.attr("data-block"),
        r = [];$("div.config_block", this.container).each(function () {
      r.push(this.getAttribute("data-block"));
    }), this.bind("renderChangeActiveBlock", function (t) {
      a == t ? i.attr("data-icon", "N").find("span").hide().filter(".h").show() : i.attr("data-icon", "O").find("span").hide().filter(".s").show();
    }), i.click(function () {
      if (a == t.renderGetActiveBlock()) {
        i.addClass("without");var e = "";for (var n in r) if (r[n] != a) {
          e = r[n];break;
        }"man_jacket" == a && "1" == t.current.config.waistcoat && (e = "man_waistcoat"), e && t.renderSetActiveBlock(e);
      } else t.renderSetActiveBlock(a);t.renderDraw();
    }), this.renderSetActiveBlock(a), this.bind("stepSwitch", function () {
      t.renderGetActiveBlock() != a && (this.renderSetActiveBlock(a), this.renderDraw());
    });
  }this.render_enabled = !0, this.renderDraw();
}, Garment.prototype.renderSetActiveBlock = function (t) {
  if (void 0 === this.current.config._active_block || this.current.config._active_block != t) {
    if ("man_pants" == t && "without_model" == this.current.view) return;this.current.config._active_block = t, this.trigger("renderChangeActiveBlock", [t]), "man_pants" == t && this.available_views.indexOf("without_jacket") > -1 && this.slider.set(this.available_views.indexOf("without_jacket"));
  }
}, Garment.prototype.renderGetActiveBlock = function () {
  return void 0 === this.current.config._active_block ? "" : this.current.config._active_block;
}, Garment.prototype.renderSetActiveExtra = function (t) {
  void 0 !== this.current.config._active_extra && this.current.config._active_extra == t || (this.current.config._active_extra = t, this.trigger("renderChangeActiveExtra", [t]));
}, Garment.prototype.renderGetActiveExtra = function () {
  return void 0 === this.current.config._active_extra ? "" : this.current.config._active_extra;
}, Garment.prototype.changeView = function (t, e) {
  if (e = void 0 !== e && e, "without_jacket" == t) {
    i = this.current.view;return this.current.view = "front", $("#available_window").removeClass(i), $("#available_window").addClass("front"), $("#available_window .views li.active").removeClass("active"), $('#available_window .views li[rel="without_jacket"]').addClass("active"), "man_ceremonial3" == this.real_product_type || "man_suit3" == this.real_product_type || "1" == this.current.config.waistcoat ? this.renderSetActiveBlock("man_waistcoat") : this.renderSetActiveBlock("man_pants"), this.renderDraw(), this.current.view = "without_jacket", !0;
  }this.previous_view = this.current.view;var i = this.current.view;this.current.view = t, $("#available_window").removeClass(i), $("#available_window").addClass(t), $("#available_window .views li.active").removeClass("active"), $('#available_window .views li[rel="' + t + '"]').addClass("active"), "man_suit2" == this.product_type || "man_suit3" == this.product_type || "man_smoking" == this.product_type ? (this.current.config._active_block = "man_jacket", this.trigger("renderChangeActiveBlock", ["man_jacket"])) : "man_levita" != this.product_type && "man_chaque" != this.product_type && "man_frac" != this.product_type || (this.current.config._active_block = this.product_type + "_jacket", this.trigger("renderChangeActiveBlock", [this.product_type + "_jacket"])), e && (this.renderDraw(!1, i, t), this.renderInitials()), "without_jacket" != t && $(window).resize();
}, Garment.prototype.checkViewChange = function (t, e) {
  e = void 0 !== e && e;var i = this,
      a = $(".extra_container." + t).attr("views");if (a) {
    var r = a.split(",");if (!i.inArray(i.current.view, r)) if ("man_suit2" != i.product_type && "man_suit3" != i.product_type && "man_levita" != i.product_type && "man_frac" != i.product_type && "man_chaque" != i.product_type || "folded" != r[0] || !r[1]) {
      n = i.available_views.indexOf(r[0]);i.slider.set(n);
    } else {
      var n = i.available_views.indexOf(r[1]);i.slider.set(n);
    }
  }
}, Garment.prototype.renderDraw = function (t, e, i, a, r) {
  var n = this;if (r || (r = !1), a = a || "STD", this.current.size = a, "without_jacket" == n.current.view) return this.current.view = "front", this.renderDraw(t, e, i, a), this.current.view = "without_jacket", !0;"blouse_cuffs" == n.last_change || "blouse_cuff" == n.last_change ? (this.current.inner_strip_desactive = !0, n.last_change = "") : this.current.inner_strip_desactive = !1;var o = this.renderGetImages(),
      s = $(".loading"),
      c = $(".slide-wrapper.visible .slide.layers"),
      l = $(".slide-wrapper.visible .slide.view_loading");"BIG" == a && (c = this.render_zoom, s = $(".image_render_full .loading")), c.find("img").addClass("delete"), e != i && c.find("img.delete").remove(), "save_product" == r ? (c = $("#save_product_popup .image"), l = $("#save_product_popup .loading")) : "favourite_product" == r && (c = $("#favourite_product_popup .image").first(), l = $("#favourite_product_popup .loading").first());var _ = [];for (var d in o) {
    var u = c.find("img[src$='" + o[d][0] + "']");u.length ? (u.attr("class", ""), o[d][2] && u.addClass(o[d][2])) : _.push(d);
  }if (_.length) {
    s.addClass("active");var p = 0;for (var d in _) {
      var f = o[_[d]][3];0 != f && (f += "/"), u = $('<img onerror = "" src="' + o[_[d]][0] + '" alt="" render = ' + f + ">").on("load", function () {
        ++p == _.length && (l.removeClass("active"), c.addClass("active"), n.loading_general.fadeOut(300), s.removeClass("active"), setTimeout(function () {
          $(".step_options").removeClass("hide");
        }, 600), n.load_general = !0, c.find("img").show(), c.find("img.delete").remove());
      }).hide().appendTo(c).css("zIndex", o[_[d]][1]).attr("class", "").each(function () {}).on("error", function () {
        ++p == _.length && (l.removeClass("active"), c.addClass("active"), n.loading_general.fadeOut(300), n.load_general = !0, s.removeClass("active"), c.find("img").show(), c.find("img.delete").remove());
      }), o[_[d]][2] && u.addClass(o[_[d]][2]);
    }
  } else l.removeClass("active"), c.find("img.delete").remove();
}, Garment.prototype.renderScroll = function () {
  function t() {
    var t = $(e.container).height() > e.render_height - r;s && !t && n(), s = t;
  }var e = this,
      i = $("#available_window", this.container);if (!i.length) return !1;$(".controls", i);var a = i.offset().top,
      r = $("nav.garment_nav", this.container).height() + $("header.garment_header", this.container).height() + 120;this.render_height = i.height();var n = function () {
    if (!s) return !0;o.scrollTop() > a ? i.addClass("fixed") : i.removeClass("fixed");
  },
      o = $(window).bind("scroll", n).bind("touchmove", n),
      s = !1;t(), o.resize(t), this.bind("stepSwitch", t), this.bind("fabricsLoad", t), this.bind("activateExtraFinish", t), this.bind("discardExtraFinish", t);var c = i.find("a.arrow_up"),
      l = i.find("a.arrow_down"),
      _ = this.render.css("margin-top");l.click(function (t) {
    t.preventDefault();var a = parseInt($(window).height()) - 160 - parseInt(i.find("img:eq(0)").height());return $(this).addClass("disabled"), c.removeClass("disabled"), e.render.animate({ "margin-top": a + "px" }, 750), !1;
  }), c.click(function (t) {
    return t.preventDefault(), $(this).addClass("disabled"), l.removeClass("disabled"), e.render.animate({ "margin-top": _ }, 750), !1;
  }), this.bind("scrollHeaderShow", function (t) {
    if (!s) return !1;parseInt(t.css("padding-top")), parseInt(t.css("padding-bottom"));i.css("margin-top", t.outerHeight() + "px"), i.addClass("fixed");
  }), this.bind("scrollHeaderHide", function (t) {
    i.css("margin-top", 0), i.removeClass("fixed"), l.addClass("disabled"), c.removeClass("disabled");
  });
}, Garment.prototype.showQuilterWaistcoatAlert = function () {
  var t = this;t.quilted_alert = !0, $(".quilted_waistcoat_alert").show();var e = window.cdn_host,
      i = "jacket";"man_coat" == t.product_type && (i = "coat"), $(".quilted_waistcoat_alert .image img").attr("src", e + "images/man/" + i + "/quilted_waistcoat_alert.jpg");
}, Garment.prototype.hideQuilterWaistcoatAlert = function () {
  $(".quilted_waistcoat_alert").hide();
}, Garment.prototype.showUnlinedCoatAlert = function () {
  var t = this;t.quilted_alert = !0, $(".unlined_coat_alert").show();var e = window.cdn_host,
      i = "jacket";"man_coat" == t.product_type && (i = "coat"), $(".unlined_coat_alert .image img").attr("src", e + "images/man/" + i + "/unlined_coat_alert.jpg");
}, Garment.prototype.hideUnlinedCoatAlert = function () {
  $(".unlined_coat_alert").hide();
}, Garment.prototype.initFabricOutOfStock = function () {
  var t = this,
      e = !1;if (out_of_stock) {
    var i = !1;if (e = {}, void 0 !== out_of_stock.fabric && (e.fabric = out_of_stock.fabric, i || (t.showFabricOutOfStock("fabric", out_of_stock.fabric, "fabric"), i = !0)), void 0 !== out_of_stock.extras) {
      if (e.extras = {}, void 0 !== out_of_stock.extras.lining) {
        e.extras.lining = {};for (var a in out_of_stock.extras.lining) e.extras.lining[a] = out_of_stock.extras.lining[a], i || (t.showFabricOutOfStock("lining", out_of_stock.extras.lining[a], a), i = !0);
      }if (void 0 !== out_of_stock.extras.fabric) {
        e.extras.fabric = {};for (var r in out_of_stock.extras.fabric) e.extras.fabric[r] = out_of_stock.extras.fabric[r], i || (t.showFabricOutOfStock("fabric", out_of_stock.extras.fabric[r], r), i = !0);
      }
    }
  }t.out_of_stock_control = e, $(".popup_warning_fabric_out").click(function () {
    t.hideFabricOutOfStock();
  });
}, Garment.prototype.showFabricOutOfStock = function (t, e, i) {
  var a = this;if ("fabric" != i) {
    History.pushState({ step: "extra" }, window.title, "?step=extra&option=" + i);var r = a.views.extra[i];if (r && !a.inArray(a.current.view, r)) if ("man_suit2" != a.product_type && "man_suit3" != a.product_type && "man_levita" != a.product_type && "man_frac" != a.product_type && "man_chaque" != a.product_type || "folded" != r[0]) {
      n = a.available_views.indexOf(r[0]);a.slider.set(n);
    } else {
      var n = a.available_views.indexOf(r[1]);a.slider.set(n);
    }
  }var o = window.cdn_host,
      s = "";"lining" == t ? s = "default" : "pants" != (s = (s = (s = a.product_type).replace("woman_", "")).replace("man_", "")) && "skirt" != s && "jacket" != s && "suit2" != s && "waistcoat" != s && "smoking" != s && "suitpants" != s && "suitskirt" != s && "levita" != s && "chaque" != s && "frac" != s || (s = "suit");var c = o + "dimg/" + t + "/" + s + "/" + e + "_normal.jpg";$(".popup_warning_fabric_out .image img").attr("src", c), $(".popup_warning_fabric_out").removeClass("fabric_out").removeClass("lining_out").addClass(t + "_out").show();
}, Garment.prototype.allFabricsAndLiningsOk = function () {
  var t = this;if (void 0 !== t.out_of_stock_control.fabric) return t.showFabricOutOfStock("fabric", t.out_of_stock_control.fabric, "fabric"), !1;if (void 0 !== t.out_of_stock_control.extras) {
    if (void 0 !== t.out_of_stock_control.extras.lining) for (var e in t.out_of_stock_control.extras.lining) if ("ok" !== t.out_of_stock_control.extras.lining[e]) return t.showFabricOutOfStock("lining", t.out_of_stock_control.extras.lining[e], e), !1;if (void 0 !== t.out_of_stock_control.extras.fabric) for (var i in t.out_of_stock_control.extras.fabric) if ("ok" !== t.out_of_stock_control.extras.fabric[i]) return t.showFabricOutOfStock("fabric", t.out_of_stock_control.extras.fabric[i], i), !1;
  }return !0;
}, Garment.prototype.hideFabricOutOfStock = function () {
  $(".popup_warning_fabric_out").hide();
}, Garment.prototype.keychain_isset = function (t, e) {
  for (var i = t, a = 0; a < e.length; a++) {
    if (void 0 === i[e[a]]) return !1;i = i[e[a]];
  }return !0;
}, Garment.prototype.fabricChangeBlock = function (t) {
  var e = $("div.fabric_block_selector", this.container),
      i = ($("a.selector", e).removeClass("current").filter("." + t).addClass("current"), $("div.fabric_block", this.container).hide());this._fabric_block_obj = i.filter(".fabric_block_" + t).show(), this._fabric_block = t, this.trigger("fabricChangeBlock", [t, this._fabric_block_obj]);
}, Garment.prototype.fabricsLoad = function (t) {
  var e = this;e.loading_layer.addClass("fabric_mode").show(), this.trigger("fabricsBeforeLoad", []);var i = !1,
      a = { action: "fabric_filter_2", disable_blocks: this.fabrics_disabled.join(",") };"man_pants" == e.product_type && (a.pants_chinos = e.current.config.pants_chinos), $('input.fabric_input[type="hidden"]').each(function () {
    if ("reset" == this.value) return i = !0, !1;"is_filter" != $(this).attr("rel") && (a[this.name] = this.value);
  }), i && (a = { action: "fabric_filter", disable_blocks: this.fabrics_disabled.join(",") }, $('input.fabric_input[type="hidden"]').each(function () {
    a[this.name] = this.value;
  })), e.out_of_stock_control && void 0 !== e.out_of_stock_control.fabric && (a.fabric_out = e.out_of_stock_control.fabric), $(".garment_block_fabric").scroll(function () {
    e.bLazy && e.bLazy.revalidate();
  });var r = $(".garment_block_fabric div.fabric_list");r.addClass("loaded loading").load(window.location.href, a, function (i) {
    $(this).removeClass("loading"), $(this).on("click", "span.select:not(.out_of_stock)", function () {
      var t = { step: "fabric", option: "fabric_view" },
          i = $(this).data("url_info").substring(1).split("&");for (var a in i) {
        var r = i[a].split("=");t[r[0]] = r[1];
      }return delete t.action, History.pushState(t, e.window_title, "?" + jQuery.param(t)), !1;
    }), $(this).on("click", ".fabric_thumb.active ", function () {
      $(this).find("span.select:not(.out_of_stock)").click();
    });var a = $('input[name="fabric[' + e._fabric_block + ']"]').val();r.find(".fabric_" + a).addClass("current"), e.trigger("fabricsLoad", [r]);var n = 0;$(".fabric_filters ul li label.active").each(function () {
      $("input", this).hasClass("all") || ++n;
    }), setTimeout(function () {
      if (e.bLazy && e.bLazy.revalidate(), filter_fabric) {
        var t = !1;"fabric" == this.step && (t = !0);for (var i in filter_fabric) for (var a in filter_fabric[i]) {
          var r = { filter: filter_fabric[i][a] };e.applyFilterFabric(r, t, !1);
        }
      }
    }, 200), e.loading_layer.removeClass("fabric_mode").hide(), ("man_smoking" == e.product_type || "man_suit2" == e.product_type || "man_chaque" == e.product_type || "man_levita" == e.product_type || "man_frac" == e.product_type) && e.multi_fabric_active ? $(".fabric_thumb .info .price.man_suit." + e.multi_fabric_active).addClass("visible") : $(".fabric_thumb .info .price.man_suit." + e.real_product_type).addClass("visible"), "man_pants" == e.product_type && "1" == e.current.config.pants_chinos ? ($(".fabric_block_man_pants").css("margin-top", "-80px"), $("#header_form").hide(), $('input[name="pants_front_pocket"][value="rounded"]').parent().hide()) : "man_pants" == e.product_type && "0" == e.current.config.pants_chinos && ($(".fabric_filters ul.filter li input.cotton").parent().parent().hide(), $('.fabric_thumb[simple_composition="cotton"]').remove(), $('input[name="pants_front_pocket"][value="rounded_chinos"]').parent().hide()), t && $(".filter_button." + t).click(), filter_fabric || setTimeout(function () {
      var t = 0,
          e = $(".fabric_thumb.current");e.length && (t = e.offset().top - 200), $(".garment_block_fabric.visible").animate({ scrollTop: t }, 500);
    }, 600);
  }), r.on("click", "a", function (t) {
    $(".body").addClass("body_blocked");var i = parse_query_string(this.href.replace(/^[^?]*/, ""));return e.mobile_enabled ? (i.step = e.step, i.option = i.action, delete i.action, History.pushState(i, e.window_title, "?" + jQuery.param(i))) : $(this.parentNode).hasClass("current") || (e.fabricSelect(i.fabric_block, i.id_t4l_fabric), t.ctrlKey = !0), !1;
  }), History.Adapter.bind(window, "statechange", function () {
    "fabric_view" != History.getState().data.option && $(".body").removeClass("body_blocked");
  });
}, Garment.prototype.sort_fabric_list = function (t) {
  var e = $(".fabric_block:visible .fabric_thumb");e.detach().sort(function (e, i) {
    return "new" == t ? parseInt(e.getAttribute(t)) < parseInt(i.getAttribute(t)) ? 1 : -1 : parseInt(e.getAttribute(t)) > parseInt(i.getAttribute(t)) ? 1 : -1;
  }), e.appendTo(".fabric_list"), this.bLazy && this.bLazy.revalidate();
}, Garment.prototype.update_fabric_list = function () {
  var t = $(".fabric_block .fabric_thumb"),
      e = this,
      i = e.filters_applied,
      a = { tone: "to", texture: "tx", simple_composition: "sco", season: "s", thread_style: "ts" };t.each(function () {
    var t = $(this);t.addClass("active");for (var e in i) {
      var r = t.attr(a[e]);if ("simple_composition" == e) {
        var n = !1;for (var o in i[e]) {
          var s = i[e][o];-1 != r.indexOf(s) && (n = !0);
        }n || t.removeClass("active");
      } else -1 == i[e].indexOf(r) && i[e] != r && t.removeClass("active");
    }
  }), 0 == $(".fabric_block .fabric_list .fabric_thumb.active").length ? $("#empty_list_fabric").addClass("active") : $("#empty_list_fabric").removeClass("active"), e.bLazy && e.bLazy.revalidate();
}, Garment.prototype.viewButtonsColor = function (t) {
  switch ($(".fabric_block .fabric_" + t).attr("to")) {case "white":case "beige":
      $("#available_window .views").addClass("white_mode");break;default:
      $("#available_window .views").removeClass("white_mode");}
}, Garment.prototype.fabricSelect = function (t, e, i) {
  if ($(".favourite").removeClass("hide"), this.lastSharedUrl = null, !e) return !1;var a = $("div.fabric_block_" + t),
      r = $(".garment_block_fabric"),
      n = this;"initial" != i && void 0 !== n.out_of_stock_control.fabric && "ok" !== n.out_of_stock_control.fabric && delete n.out_of_stock_control.fabric;var o = this.fabricGetInfo(e, t, function () {
    n.fabricSelect(t, e);
  });if ("callback" != o) {
    n.setProductComposition(e, t), $(".fabric_thumb", this.multiple_fabric_enabled ? a : r).removeClass("current").filter(".fabric_" + e).addClass("current");for (var s in this.fabric) break;if (t == s) for (var c = ["ribbon_color"], l = 0; l < c.length; l++) void 0 !== o[c[l]] && (n.current.fabric["_" + c[l]] = o[c[l]]);if ($(".action .composition").html(fabric_options_i18n[o.simple_composition]), n.multi_fabric_active) $('input[name="fabric[' + n.multi_fabric_active + ']"]').val(e), n.current.fabric[n.multi_fabric_active] = e, n.multi_fabric_active == n.multi_fabric_options[0] ? (n.current.fabric.shirt_to_jacket_id = o.shirt_id, n.current.fabric.shirt_to_jacket_id || (n.current.fabric.shirt_to_jacket_id = 699), n.current.fabric.pant_code = o.pant_code, n.current.fabric.pant_code || (n.current.fabric.pant_code = 1), n.current.fabric.lining_id = o.id_t4l_lining, n.current.fabric.lining_id || (n.current.fabric.lining_id = 59), n.current.fabric.unlined_lining = o.unlined_lining, n.current.fabric.unlined_lining && 0 != n.current.fabric.unlined_lining || (n.current.fabric.unlined_lining = o.id_t4l_lining), n.current.fabric.unlined_lining || (n.current.fabric.unlined_lining = 59), n.current.fabric.label_color = o.label_color, n.current.fabric.label_color || (n.current.fabric.label_color = 0), n.current.fabric.shoe_color = o.shoe_color, n.current.fabric.shoe_color || (n.current.fabric.shoe_color = 1), n.current.fabric.tie = o.id_t4l_tie, n.current.fabric.tie || (n.current.fabric.tie = 1), this.current.fabric._button_code = o.button_code, this.current.fabric._button_code || (this.current.fabric._button_code = 1), this.current.fabric.button_code = o.button_code, this.current.fabric.button_code || (this.current.fabric.button_code = 1), "man_smoking" == n.product_type ? (0 == n.current.fabric.tie && (n.current.fabric.tie = 2), n.current.satin_jacket_buttons = o.id_t4l_satin, n.current.satin_jacket_buttons && "0" != o.id_t4l_satin || (n.current.satin_jacket_buttons = 1), n.current.satin_jacket_lapel = o.id_t4l_satin, n.current.satin_jacket_lapel && "0" != o.id_t4l_satin || (n.current.satin_jacket_lapel = 1), n.current.satin_jacket_pockets = o.id_t4l_satin, n.current.satin_jacket_pockets && "0" != o.id_t4l_satin || (n.current.satin_jacket_pockets = 1), n.current.satin_pants_buttons = o.id_t4l_satin, n.current.satin_pants_buttons && "0" != o.id_t4l_satin || (n.current.satin_pants_buttons = 1), n.current.satin_pants_ribbon = o.id_t4l_satin, n.current.satin_pants_ribbon && "0" != o.id_t4l_satin || (n.current.satin_pants_ribbon = 1)) : "man_levita" != n.product_type && "man_frac" != n.product_type && "man_chaque" != n.product_type || (n.current.satin_jacket_buttons = o.id_t4l_satin, n.current.satin_jacket_buttons && "0" != o.id_t4l_satin || (n.current.satin_jacket_buttons = 1), n.current.satin_jacket_lapel = o.id_t4l_satin, n.current.satin_jacket_lapel && "0" != o.id_t4l_satin || (n.current.satin_jacket_lapel = 1), n.current.satin_jacket_pockets = o.id_t4l_satin, n.current.satin_jacket_pockets && "0" != o.id_t4l_satin || (n.current.satin_jacket_pockets = 1), n.current.satin_pants_buttons = o.id_t4l_satin, n.current.satin_pants_buttons && "0" != o.id_t4l_satin || (n.current.satin_pants_buttons = 1), n.current.satin_pants_ribbon = o.id_t4l_satin, n.current.satin_pants_ribbon && "0" != o.id_t4l_satin || (n.current.satin_pants_ribbon = 1))) : n.multi_fabric_active == n.multi_fabric_options[2] ? (this.current.fabric.waistcoat_button_code = o.button_code, this.current.fabric.waistcoat_button_code || (this.current.fabric.waistcoat_button_code = 1), n.current.fabric.waistcoat_lining_id = o.id_t4l_lining, n.current.fabric.waistcoat_lining_id || (n.current.fabric.waistcoat_lining_id = 59)) : n.multi_fabric_active == n.multi_fabric_options[1] && (this.current.fabric.pants_button_code = o.button_code, this.current.fabric.pants_button_code || (this.current.fabric.pants_button_code = 1));else if ($("input.fabric_input", r).val(e), n.current.fabric[n.product_type] = e, "man_suit2" == n.product_type || "man_suit3" == n.product_type ? (n.current.fabric.man_jacket = e, n.current.fabric.man_pants = e, n.current.fabric.man_waistcoat = e) : "man_smoking" == n.product_type ? (n.current.fabric.man_smoking = e, n.current.fabric.man_jacket = e, n.current.fabric.man_pants = e) : "man_levita" == n.product_type ? (n.current.fabric.man_levita = e, n.current.fabric.man_jacket = e, n.current.fabric.man_waistcoat = e, n.current.fabric.man_pants = e) : "man_frac" == n.product_type ? (n.current.fabric.man_frac = e, n.current.fabric.man_jacket = e, n.current.fabric.man_waistcoat = e, n.current.fabric.man_pants = e) : "man_chaque" == n.product_type && (n.current.fabric.man_chaque = e, n.current.fabric.man_jacket = e, n.current.fabric.man_waistcoat = e, n.current.fabric.man_pants = e), "man_shirt" == n.product_type) this.current.fabric.button_code = o.button_code, this.current.fabric.button_code || (this.current.fabric.button_code = 1), n.current.fabric.hole_code_fabric = o.hole_code, n.current.fabric.hole_code_fabric || (n.current.fabric.hole_code_fabric = 107), n.current.fabric.thread_code_fabric = o.thread_code, n.current.fabric.thread_code_fabric || (n.current.fabric.thread_code_fabric = 107), n.current.fabric.cuff_code = o.cuff_code, n.current.fabric.cuff_code || (n.current.fabric.cuff_code = 1), n.current.fabric.pant_code = o.pant_code, n.current.fabric.pant_code || (n.current.fabric.pant_code = 1), n.current.fabric.shoe_color = o.shoe_color, n.current.fabric.shoe_color || (n.current.fabric.shoe_color = 1), n.current.neck_open = o.neck_open, n.current.neck_open || (n.current.neck_open = 0), n.current.view_detail = o.view_detail, n.current.view_detail || (n.current.view_detail = "inside");else if ("man_jacket" == n.product_type || "man_suit" == n.product_type || "man_suit2" == n.product_type || "man_suit3" == n.product_type || "man_waistcoat" == n.product_type || "man_smoking" == n.product_type || "man_levita" == n.product_type || "man_frac" == n.product_type || "man_chaque" == n.product_type) n.current.fabric.shirt_to_jacket_id = o.shirt_id, n.current.fabric.shirt_to_jacket_id || (n.current.fabric.shirt_to_jacket_id = 699), n.current.fabric.pant_code = o.pant_code, n.current.fabric.pant_code || (n.current.fabric.pant_code = 1), n.current.fabric.lining_id = o.id_t4l_lining, n.current.fabric.lining_id || (n.current.fabric.lining_id = 59), n.current.fabric.unlined_lining = o.unlined_lining, n.current.fabric.unlined_lining && 0 != n.current.fabric.unlined_lining || (n.current.fabric.unlined_lining = o.id_t4l_lining), n.current.fabric.unlined_lining || (n.current.fabric.unlined_lining = 59), n.current.fabric.waistcoat_lining_id = o.id_t4l_lining, n.current.fabric.waistcoat_lining_id || (n.current.fabric.waistcoat_lining_id = 59), n.current.fabric.label_color = o.label_color, n.current.fabric.label_color || (n.current.fabric.label_color = 0), n.current.fabric.shoe_color = o.shoe_color, n.current.fabric.shoe_color || (n.current.fabric.shoe_color = 1), n.current.fabric.tie = o.id_t4l_tie, n.current.fabric.tie || (n.current.fabric.tie = 1), this.current.fabric._button_code = o.button_code, this.current.fabric._button_code || (this.current.fabric._button_code = 1), this.current.fabric.button_code = o.button_code, this.current.fabric.button_code || (this.current.fabric.button_code = 1), this.current.fabric.waistcoat_button_code = o.button_code, this.current.fabric.waistcoat_button_code || (this.current.fabric.waistcoat_button_code = 1), this.current.fabric.pants_button_code = o.button_code, this.current.fabric.pants_button_code || (this.current.fabric.pants_button_code = 1), "man_smoking" != n.product_type && "man_levita" != n.product_type && "man_frac" != n.product_type && "man_chaque" != n.product_type || (0 == n.current.fabric.tie && (n.current.fabric.tie = 2), n.current.satin_jacket_buttons = o.id_t4l_satin, n.current.satin_jacket_buttons && "0" != o.id_t4l_satin || (n.current.satin_jacket_buttons = 1), n.current.satin_jacket_lapel = o.id_t4l_satin, n.current.satin_jacket_lapel && "0" != o.id_t4l_satin || (n.current.satin_jacket_lapel = 1), n.current.satin_jacket_pockets = o.id_t4l_satin, n.current.satin_jacket_pockets && "0" != o.id_t4l_satin || (n.current.satin_jacket_pockets = 1), n.current.satin_pants_buttons = o.id_t4l_satin, n.current.satin_pants_buttons && "0" != o.id_t4l_satin || (n.current.satin_pants_buttons = 1), n.current.satin_pants_ribbon = o.id_t4l_satin, n.current.satin_pants_ribbon && "0" != o.id_t4l_satin || (n.current.satin_pants_ribbon = 1));else if ("man_pants" == n.product_type) n.current.fabric.shirt_to_jacket_id = o.shirt_id, n.current.fabric.shirt_to_jacket_id || (n.current.fabric.shirt_to_jacket_id = 699), n.current.fabric.shoe_color = o.shoe_color, n.current.fabric.shoe_color || (n.current.fabric.shoe_color = 1), this.current.fabric._button_code = o.button_code, this.current.fabric._button_code || (this.current.fabric._button_code = 1), this.current.fabric.button_code = o.button_code, this.current.fabric.button_code || (this.current.fabric.button_code = 1), this.current.fabric.pants_button_code = o.button_code, this.current.fabric.pants_button_code || (this.current.fabric.pants_button_code = 1);else if ("man_waistcoat" == n.product_type) n.current.fabric.waistcoat_lining_id = o.id_t4l_lining, n.current.fabric.waistcoat_lining_id || (n.current.fabric.waistcoat_lining_id = 59);else if ("man_coat" == n.product_type) n.current.fabric.lining_id = o.id_t4l_lining, n.current.fabric.lining_id || (n.current.fabric.lining_id = 57), n.current.fabric.unlined_lining = o.unlined_lining, n.current.fabric.unlined_lining && 0 != n.current.fabric.unlined_lining || (n.current.fabric.unlined_lining = o.id_t4l_lining), n.current.fabric.unlined_lining || (n.current.fabric.unlined_lining = 57), n.current.fabric.ribbon_color = o.ribbon_color, n.current.fabric.ribbon_color || (n.current.fabric.ribbon_color = "hei"), n.current.fabric.zipper_color = o.zipper_color, n.current.fabric.zipper_color || (n.current.fabric.zipper_color = "hei"), n.current.fabric.button_code = o.button_code, n.current.fabric.button_code || (n.current.fabric.button_code = 2), n.current.fabric.double_faced = o.double_faced, n.current.fabric.tie = o.id_t4l_tie, n.current.fabric.tie || (n.current.fabric.tie = 0), n.current.fabric.id_t4l_suit_rel = o.id_t4l_suit_rel, n.current.fabric.id_t4l_suit_rel && 0 != n.current.fabric.id_t4l_suit_rel || (n.current.fabric.id_t4l_suit_rel = 141);else for (var _ = ["button_code", "zipper_color", "label_color", "shoe_color", "lining_id", "pant_code"], d = 0; d < _.length; d++) void 0 !== o[_[d]] && (this.current.fabric[_[d]] = o[_[d]]);if (this.has_extra_lining) {
      var u = $(".fabric_thumb.fabric_" + e).attr("ddl");"1" == u ? ($(".extras_fabrics").addClass("disable_dark_linings"), $("div.extra_container.neck_lining").addClass("dark_fabric_mode"), void 0 !== n.current.extras.neck_lining && void 0 !== n.current.extras.neck_lining.color && (n.extraDiscard("neck_lining"), $("div.extra_container.neck_lining label").removeClass("checked"))) : ($(".extras_fabrics").removeClass("disable_dark_linings"), $("div.extra_container.neck_lining .extra_content").show(), $("div.extra_container.neck_lining").removeClass("dark_fabric_mode"), $("div.extra_container.neck_lining label").first().addClass("checked"));var p = $('input[name="' + this.has_extra_lining + '[lining_id]"]').val();if ("undefined" != p && 1 == u && $(".extras_fabrics .lining_" + p).hasClass("dark")) {
        var f = $(".extras_fabrics .lining_thumb").not(".dark").first().attr("value");$('input[name="' + this.has_extra_lining + '[lining_id]"]').val(f), n.current.extras[this.has_extra_lining].lining_id = f;
      }"linen" == $(".fabric_" + e, a).attr("sc") ? ($('.box_opt .option input[value="padded"]').parent().hide(), $(".extra_container.patches").hide()) : ($('.box_opt .option input[value="padded"]').parent().show(), $(".extra_container.patches").show());
    }if ("default" == n.has_extra_unlined) {
      var h = n.current.fabric.unlined_lining;$('input[name="lining[lining_id]"]').val(h).change(), n.current.extras.lining.lining_id = h;
    }if (n.fabric_info_global = o, "man_jacket" == n.product_type) {
      var v = o.season,
          b = o.simple_composition;"summer" == v || "linen" == b || "linen-blends" == b ? ($("#quilted_waistcoat_opt label").first().hasClass("checked") || $("#quilted_waistcoat_opt label input").first().click(), $(".garment_block_extra .extra_container.quilted_waistcoat").hide()) : $(".garment_block_extra .extra_container.quilted_waistcoat").show();
    }for (var m in this.fabric) if (!n.multi_fabric_active || m == n.multi_fabric_active) {
      if ("man_suit2" == n.product_type || "man_suit3" == n.product_type || "man_smoking" == n.product_type || "man_levita" == n.product_type || "man_chaque" == n.product_type || "man_frac" == n.product_type) n.updateFabricPrices(m, o.category, !1, e);else {
        if (this.price_detail["fabric_" + m] = 0, -1 != $.inArray(m, this.fabrics_disabled)) continue;for (var g in this.fabric[m].price) void 0 !== o[g] && void 0 !== this.fabric[m].price[g][o[g]] && (this.price_detail["fabric_" + m] += this.fabric[m].price[g][o[g]]);
      }w = $("div.fabric_" + e).attr("dsc");if ("man_suit3" == n.real_product_type) w = $("div.fabric_" + e).attr("dsc_suit3");if ("man_ceremonial3" == n.real_product_type) var w = $("div.fabric_" + e).attr("dsc_ceremonial3");n.price_detail.fabric_discount = w < 0 ? w : 0;
    }this.updatePrice(), this.renderDraw(), "man_suit2" != n.product_type && "man_suit3" != n.product_type && "man_smoking" != n.product_type && "man_pants" != n.product_type && "man_frac" != n.product_type && "man_levita" != n.product_type && "man_chaque" != n.product_type || n.viewButtonsColor(e);
  }
}, Garment.prototype.updateFabricPrices = function (t, e, i, a) {
  var r = this;if ("business" == e && (e = "bussines"), !r.multi_fabric_active || "man_suit2" != r.product_type && "man_suit3" != r.product_type) {
    if (r.multi_fabric_active && "man_smoking" == r.product_type) {
      r.price_detail["fabric_" + t] = 0;for (var n in r.fabric[t].price) void 0 !== e && void 0 !== r.fabric[t].price[n][e] && (r.price_detail["fabric_" + t] = r.fabric[t].price[n][e]);
    } else if (r.multi_fabric_active && t && ("man_levita" == r.product_type || "man_frac" == r.product_type || "man_chaque" == r.product_type)) {
      r.price_detail.fabric_man_ceremonial = 0, r.price_detail.fabric_man_ceremonial3 = 0, r.price_detail["fabric_" + t] = 0;for (var n in r.fabric[t].price) void 0 !== e && void 0 !== r.fabric[t].price[n][e] && (r.price_detail["fabric_" + t] = r.fabric[t].price[n][e]);
    } else if (t) {
      if (t == r.real_product_type) {
        r.price_detail["fabric_" + t] = 0;for (var n in r.fabric[t].price) void 0 !== e && void 0 !== r.fabric[t].price[n][e] && (r.price_detail["fabric_" + t] = r.fabric[t].price[n][e]);
      } else r.price_detail["fabric_" + t] = 0;
    } else for (var t in r.fabric) if (t == r.real_product_type) {
      r.price_detail["fabric_" + t] = 0;for (var n in r.fabric[t].price) void 0 !== e && void 0 !== r.fabric[t].price[n][e] && (r.price_detail["fabric_" + t] = r.fabric[t].price[n][e]);
    } else r.price_detail["fabric_" + t] = 0;
  } else if (r.price_detail.fabric_man_suit2 = 0, r.price_detail.fabric_man_suit3 = 0, r.price_detail["fabric_" + t] = 0, t) for (var n in r.fabric[t].price) void 0 !== e && void 0 !== r.fabric[t].price[n][e] && (r.price_detail["fabric_" + t] = r.fabric[t].price[n][e]);if (i) {
    o = $("div.fabric_" + a).attr("dsc");if ("man_suit3" == r.real_product_type) o = $("div.fabric_" + a).attr("dsc_suit3");if ("man_ceremonial3" == r.real_product_type) var o = $("div.fabric_" + a).attr("dsc_ceremonial3");r.price_detail.fabric_discount = o < 0 ? o : 0, r.updatePrice();
  }
}, Garment.prototype.fabricMultiChange = function (t) {
  if (t) $("div.garment_block_fabric", this._container).addClass("multi_enabled");else {
    for (var e in this.fabric) break;var i = $("input.fabric_input", this.container).filter('[name="fabric[' + e + ']"]').val();this.fabricSelect(e, i), $("div.garment_block_fabric", this._container).removeClass("multi_enabled");
  }
}, Garment.prototype.prepareUrlToGetFabricInfo = function () {
  var t = window.location.pathname.replace(/\/?personalize.*$/, "");if ("man_coat" != this.product_type || coat_generic_mode) t += "/";else {
    var e = t.split("/").pop();t = t.replace(e, "");
  }return t;
}, Garment.prototype.fabricGetInfo = function (t, e, i) {
  e.split("_");if (void 0 === this._fabrics[t]) {
    this._fabrics[t] = "loading";var a = this,
        r = a.prepareUrlToGetFabricInfo();return $.getJSON(r + "fabric_info/" + t, function (e) {
      if (a._fabrics[t] = e, i && i.apply(a, [a._fabrics[t], t]), void 0 !== a.pending_callbacks["fabricGetInfo_" + t]) {
        for (var r in a.pending_callbacks["fabricGetInfo_" + t]) a.pending_callbacks["fabricGetInfo_" + t][r].apply(a, [a._fabrics[t], t]);a.pending_callbacks["fabricGetInfo_" + t] = [];
      }
    }), "callback";
  }return "loading" == this._fabrics[t] ? (void 0 === this.pending_callbacks["fabricGetInfo_" + t] && (this.pending_callbacks["fabricGetInfo_" + t] = []), this.pending_callbacks["fabricGetInfo_" + t].push(i), "callback") : this._fabrics[t];
}, Garment.prototype.fabricsUpdateDisabled = function () {
  var t = $(".fabric_block_selector", this.container),
      e = $(".fabric_block_selector_enable", this.container),
      i = $(".selector", t).show();for (var a in this.fabrics_disabled) i.filter("." + a).hide();Object.size(this.fabric) - this.fabrics_disabled.length > 1 ? (this.multiple_fabric_enabled && t.show(), e.show()) : (t.hide(), e.hide());var r = this;$("input.fabric_input", this.container).each(function () {
    this.value && r.fabricSelect(this.getAttribute("data-block-name"), this.value);
  }), $(".fabric_list", this.container).removeClass("loaded"), "fabric" == this.step && this.fabricsLoad();
}, Garment.prototype.extraChangeBlock = function (t) {
  var e = $("div.extra_block_selector", this.container);$("a.selector", e).removeClass("current").filter("." + t).addClass("current");$("div.extra_block", this.container).hide().filter(".extra_block_" + t).show(), this.trigger("extraChangeBlock", [t, this._fabric_block_obj]);
}, Garment.prototype.extraActivate = function (t, e) {
  if (e || (e = $("div.extra_container", this.container).filter("." + t)), !e.hasClass("active")) {
    var i = this;e.find(".extra_content").slideDown(function () {
      i.trigger("activateExtraFinish", [t]);
    }), e.addClass("active"), this.renderSetActiveExtra(t), $("input[data-price!=0]:eq(0)", e).prop("checked", !0).change(), this.trigger("activateExtra", [t]);
  }
}, Garment.prototype.extraSetPrice = function (t, e, i) {
  var a = this,
      r = !1;"piping" == t && (t = "lining", "man_coat" == a.product_type && (t = "coat_lining"), r = !0);var n = !1;null == e && t.indexOf("lining") > -1 && (n = !0, e = 0), i || (i = $("div.extra_container", this.container).filter("." + t)), e || n ? i.parents(".list_option").find(".drop_head").addClass("tick") : i.parents(".list_option").find(".drop_head").removeClass("tick"), $(".title_price", i).text(format_price(e, "small_symbol", window.currency_json)), r ? this.price_detail.piping = e : this.price_detail[t] = e, this.updatePrice();
}, Garment.prototype.extraDiscard = function (t, e) {
  e || (e = $("div.extra_container", this.container).filter("." + t));var i = this;e.removeClass("active"), e.prev().removeClass("active"), e.find(".extra_content").slideUp(function () {
    i.trigger("discardExtraFinish", [t]);
  }), this.price_detail[t] = 0, this.updatePrice(), this.current.extras[t] = [], this.renderSetActiveExtra(!1), this.trigger("discardExtra", [t, e]);
}, Garment.prototype.goToRender = function () {
  if ($(".garment_block_config .navigate").removeClass("visible"), this.mobile_current_option) {
    var t = this.current.extras[this.mobile_current_option];"satin_flap" == this.mobile_current_option && this.trigger("discardExtra", ["type_flap"]), void 0 === t && this.trigger("discardExtra", [this.mobile_current_option]), jQuery.isEmptyObject(t) && this.trigger("discardExtra", [this.mobile_current_option]);
  }$("#available_window", this.container).removeClass("desplaced"), History.pushState(!1, !1, this.base_configurer);
}, Garment.prototype.inArray = function (t, e) {
  if (!e) return !1;for (var i = e.length, a = 0; a < i; a++) if (e[a] == t) return !0;return !1;
}, Garment.prototype.push_dataLayer = function (t, e) {
  dataLayer && dataLayer.push({ event: "configurator", eventCategory: t, eventAction: e, eventLabel: "mobile" });
}, Garment.prototype.updatePrice = function () {
  var t = 0;for (var e in this.price_detail) isNaN(this.price_detail[e]) && delete this.price_detail[e], t += parseFloat(this.price_detail[e]);var i = format_price(t = Math.round(100 * t) / 100, "small_symbol", window.currency_json);if ($(".action .price_final").html(i), this.price_detail.fabric_discount < 0) {
    $(".prices_block").addClass("dsc"), $(".action .price_final").addClass("discounted");var a = format_price(t - this.price_detail.fabric_discount, "small_symbol", window.currency_json);$(".action .original_price").html(a).show();
  } else $(".prices_block").removeClass("dsc"), $(".action .price_final").removeClass("discounted"), $(".action .original_price").hide();
}, Garment.prototype.renderInitials = function () {
  function t(t, e) {
    for (var i in e) t.setAttribute(i, e[i]);
  }var e = this.current.extras.initials;if ("man_shirt" == this.product_type) {
    var i = $("#shirt_initials_svg").empty().get(0);i.setAttribute("width", $(".image_render .layers").width());var a = document.createElementNS("http://www.w3.org/2000/svg", "text");a.textContent = e.text;var r = "8";switch (e.position) {case "high":
        switch (this.current.view) {case "front":
            t(a, { x: 253, y: 215, transform: "rotate(3,170,155)" }), r = "10";}break;case "medium":
        switch (this.current.view) {case "front":
            t(a, { x: 250, y: 315, transform: "rotate(2,170,155)" });}break;case "low":
        switch (this.current.view) {case "front":
            t(a, { x: 250, y: 385, transform: "rotate(2,170,155)" });}break;case "cuff":
        switch (this.current.view) {case "front":
            t(a, { x: 350, y: 465, transform: "rotate(7,180,145)" });}}"front" == this.current.view && (t(a, { "font-family": e.font, "font-size": r + "px", fill: "#" + e.color }), i.appendChild(a));
  }return e;
}, Garment.prototype.initExtraInitials = function (t, e) {
  function i() {
    var i = { text: c.val(), font: $("input.font:checked", e).val(), position: $("input.position:checked", e).val(), color: $("input.color:checked", e).attr("data-color") };a.html(JSON.stringify(i));var o = !0;for (var s in i) if ("shirt_initials" == t) {
      if (!i[s]) {
        o = !1;break;
      }
    } else if (("jacket_initials" == t || "initials" == t || "waistcoat_initials" == t) && !i[s] && "position" != s) {
      o = !1;break;
    }o && r.extraSetPrice(t, n, $(e)), r.current.extras[t] = i, r.renderInitials();
  }var a = $(".initials_preview"),
      r = this,
      n = 1 * $("input.initials_price", e).val();$(".extra_title", e).append($(".extra_price", e)), $(".extra_field_initials_text .box_opt_fix", e).append($(".discard", e).html("v")), $(".mobile_layer", e).addClass("manual_close"), function () {
    for (var t = ["font", "position", "color"], i = 0; i < t.length; i++) $("input." + t[i] + ":checked", e).length || $("input." + t[i] + ":eq(0)", e).prop("checked", 1).change().parent().addClass("active").addClass("checked");
  }(), $(".discard", e).click(function () {
    s.val("").keyup(), r.price_detail[t] = 0, r.updatePrice(), i(), $('.list_option div[option="' + t + '"]').removeClass("tick"), History.back();
  }), $("a.close", e).click(function () {
    var t = r.current.extras[r.mobile_current_option];void 0 === t && r.trigger("discardExtra", [r.mobile_current_option]), jQuery.isEmptyObject(t) && r.trigger("discardExtra", [r.mobile_current_option]), History.back();
  }), $(".back_extra_full", e).click(function (t) {
    var e = r.current.extras[r.mobile_current_option];void 0 === e && r.trigger("discardExtra", [r.mobile_current_option]), jQuery.isEmptyObject(e) && r.trigger("discardExtra", [r.mobile_current_option]), History.back(), t.stopPropagation();
  });var o = $("a.select", e).click(function () {
    r.checkViewChange(t, !0), i(), r.goToRender();
  });$(e).on("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend", function (t) {
    $(e).hasClass("visible") ? $(".navigate", e).addClass("fixed") : $(".navigate", e).removeClass("fixed");
  }), $("input", e).change(function () {
    $("input.initials_text", e).val() ? o.parent().addClass("two_options") : o.parent().removeClass("two_options");
  });var s = $("input.initials_text", e).keypress(isValidCharacterInitials).bind("paste", function (t) {
    return !1;
  }).keyup(function () {
    this.value ? o.parent().addClass("two_options") : o.parent().removeClass("two_options");
  }).keyup();this.bind("discardExtra", function (i) {
    i == t && ($("input.text", e).val(""), $(".navigate.two_options", e).removeClass("two_options"));
  });var c = $("input.text", e).keypress(function () {});
}, Garment.prototype.initExtraLining = function (t, e) {
  var i = this,
      a = !1,
      r = $("div.lining_slider", e),
      n = ($("div.lining_slider_contents", r), $("div.lining_filters", e)),
      o = ($(".extras_fabrics"), function () {
    a = !0;var r = { action: "lining_filter_2", extra_name: t };i.out_of_stock_control && i.keychain_isset(i.out_of_stock_control, ["extras", "lining", t]) && (r.fabric_out = i.out_of_stock_control.extras.lining[t]), $("input, select", n).each(function () {
      r[this.name] = this.value;
    }), $(".extra_fabrics_header .title.fabrics").hide(), $(".extra_fabrics_header .link_popup_unlined_coat").hide(), $(".extras_fabrics", i.container).hasClass("unlined_mode") && $(".extra_fabrics_header .link_popup_unlined_coat").show(), i.mobile_layer_extra_fabrics.find(".list").load(window.location.href, r, function () {
      "waistcoat_lining_back" == t ? $(".extras_fabrics .lining_thumb .price").hide() : $(".price", e).show(), $(".extras_fabrics .lining_thumb", i.container).removeClass("default_unlined"), $(".extras_fabrics .lining_thumb", i.container).removeClass("default_lining"), t.indexOf("waistcoat") > -1 ? $(".extras_fabrics .lining_thumb.lining_" + i.current.fabric.waistcoat_lining_id).addClass("default_lining") : ($(".extras_fabrics .lining_thumb.lining_" + i.current.fabric.unlined_lining).addClass("default_unlined"), $(".extras_fabrics .lining_thumb.lining_" + i.current.fabric.lining_id).addClass("default_lining"));var a = parseInt($("input.idExtra", e).val());a && $(".fabric_thumb", this).filter(".lining_" + a).addClass("current"), i.bLazy && i.bLazy.revalidate(), $("a.out_of_stock", i.mobile_layer_extra_fabrics).click(function (t) {
        return !1;
      }), $("a:not(.out_of_stock):not(.back_extra)", i.mobile_layer_extra_fabrics).click(function (e) {
        var a = this.getAttribute("data-id");return null == a ? (History.back(), !1) : (i.with_add_to_cart(), i.liningSelect(t, a), i.checkViewChange(t), i.goToRender(), !1);
      }), i.loading_layer.hide();
    });
  });i.load_linings = o, $(".extras_fabrics a.back").click(function () {
    return History.back(), !1;
  }), $("#action_colum_desplaced").click(function (a) {
    if (i.mobile_current_option == t) return void 0 === i.current.extras[t].lining_id && $(".extra_field input[data-price=0]", e).click(), i.goToRender(), a.stopPropagation(), !0;
  }), $("form").on("click", ".back_extra", function (a) {
    if (i.mobile_current_option == t) return void 0 === i.current.extras[t].lining_id && $(".extra_field input[data-price=0]", e).click(), History.back(), a.stopPropagation(), !0;
  }), $("label", e).click(function (a) {
    var r = $("input", this),
        n = parseFloat(r.attr("data-price")),
        s = (r.attr("data-field-name"), r.val()),
        c = $(".extras_fabrics", i.container);if (c.removeClass("padded").removeClass("lining_mode").removeClass("unlined_mode"), "padded" == s ? c.addClass("padded") : "unlined" == s ? c.addClass("unlined_mode") : c.addClass("lining_mode"), i.current.extras[t].contrast = r.val(), i.has_extra_unlined = !1, n) {
      if ("unlined" == s) {
        i.has_extra_unlined = "default";var l = i.current.extras[t].contrast;(_ = i.current.extras[t].lining_id) && "unlined" == l || (_ = i.current.fabric.unlined_lining), i.current.extras[t].lining_id = _, $('input[name="' + t + '[lining_id]"]', $(e)).val(_), i.extraSetPrice(t, n, $(e)), i.renderDraw(), i.checkViewChange(t), i.loading_layer.show(), o(), History.pushState({ step: "extra", option: t, fabrics: 1 }, window.title, "?step=extra&option=" + t + "&fabrics=1");
      } else if ("same_as_front" == s) i.extraSetPrice(t, n, $(e)), i.current.extras[t].lining_id = i.current.fabric.man_waistcoat, $('input[name="waistcoat_lining_back[lining_id]"]').val(i.current.fabric.man_waistcoat), i.renderSetActiveBlock("man_waistcoat"), i.checkViewChange(t), i.renderDraw(), i.goToRender();else {
        var _ = $('input[name="' + t + '[lining_id]"]', $(e)).val();_ && (i.extraSetPrice("piping", 0, $(e)), i.extraSetPrice(t, n, $(e)), i.renderDraw(), i.checkViewChange(t)), i.loading_layer.show(), o(), History.pushState({ step: "extra", option: t, fabrics: 1 }, window.title, "?step=extra&option=" + t + "&fabrics=1");
      }
    } else i.out_of_stock_control && i.keychain_isset(i.out_of_stock_control, ["extras", "lining", t]) && delete i.out_of_stock_control.extras.lining[t], $('input[name="jacket_lining[lining_id]"]').val(""), $('input[name="lining[lining_id]"]').val(""), i.extraSetPrice(t, 0, $(e)), i.checkViewChange(t), i.renderDraw(), i.goToRender();a.stopPropagation();
  }), $(e).find("select").change(o), this.bind("activateExtra", function (e) {
    a || e != t || o();
  }), this.bind("discardExtra", function (i) {
    i == t && ($("input.id", e).val(""), $(".lining_thumb", e).removeClass("current"));
  });
}, Garment.prototype.liningSelect = function (t, e) {
  $(".favourite").removeClass("hide");var i = $("div.extra_container", this.container).filter("." + t),
      a = this;a.out_of_stock_control && a.keychain_isset(a.out_of_stock_control, ["extras", "lining", t]) && delete a.out_of_stock_control.extras.lining[t], $(".lining_thumb", i).removeClass("current").filter(".lining_" + e).addClass("current"), $("input.idExtra", i).val(e).change();var r = $(".option.checked input[name='" + t + "[contrast]']").val();if ("waistcoat_lining_back" == t) n = parseFloat($("input[name='waistcoat_lining_back[contrast]'][value='personalizado']").attr("data-price"));else if ("unlined" == r) n = parseFloat($(".lining_" + e).find(".unlined_mode").attr("data-price-piping"));else var n = parseFloat($(".lining_" + e).find(".price").html().replace(",", ".").replace("$", "").replace("£", "").replace("CHF&nbsp;", ""));var o = "lining";"unlined" == r && (o = "unlined", a.has_extra_unlined = "personalized"), $(".lining_thumb.lining_" + e).hasClass("default_" + o) && (n = null), "unlined" == r ? this.extraSetPrice("piping", n, i) : (this.extraSetPrice("piping", 0), this.extraSetPrice(t, n, i)), a.current._show_lining = 1, a.current.extras[t].lining_id = e, a.renderDraw(), a.current._show_lining = 0;
}, Garment.prototype.liningGetInfo = function (t, e) {
  if (void 0 === this._linings[t]) {
    var i = this;return $.getJSON("", "action=lining_info&id=" + t, function (a) {
      i._linings[t] = a, e && e.apply(i, [i._linings[t], t]);
    }), "callback";
  }return this._linings[t];
}, Garment.prototype.initExtraColors = function (t, e) {
  function i() {
    o = {}, n.each(function () {
      "contrast" == this.getAttribute("data-field-name") || "type" == this.getAttribute("data-field-name") ? o[this.getAttribute("data-field-name")] = $("input:checked", this).val() : o[this.getAttribute("data-field-name")] = $("div.current", this).attr("data-id");
    });
  }function a() {
    $("." + t + " label.checked").removeClass("checked"), $("." + t + " input.checked").prop("checked", 0).change(), $("." + t + " div.current").removeClass("current"), "contrasts" != t || "man_frac" != r.product_type && "man_levita" != r.product_type && "man_chaque" != r.product_type || delete o.color, n.each(function () {
      var e = this.getAttribute("data-field-name");"contrast" == e || "type" == e ? ($("." + t + " input[value=" + o[e] + "]").prop("checked", 1).change(), $("." + t + " input[value=" + o[e] + "]").parents(".extra_field").find(".option").removeClass("active").removeClass("checked"), $("." + t + " input[value=" + o[e] + "]").parent().addClass("active").addClass("checked")) : "contrasts" == t ? $("." + t + " ." + e + " div[data-id=" + o[e] + "]").addClass("current") : $("." + t + " div[data-id=" + o[e] + "]").addClass("current");
    });
  }var r = this,
      n = $(".extra_field", e);$(".mobile_layer", e).addClass("manual_close"), "contrasts" == t && ("man_frac" == r.product_type || "man_levita" == r.product_type || r.product_type), $("input", e).change(function (i) {
    $(".favourite").removeClass("hide");var a = parseFloat(this.getAttribute("data-price"));isNaN(a) && (a = 0), 0 == a ? $(".fabric_thumb", e).removeClass("current") : 0 == $(".fabric_thumb.current", e).length && $(".fabric_thumb", e).first().click(), r.extraSetPrice(t, a, $(e));var n = this.getAttribute("data-field-name");if (void 0 !== r.extra[t][n]) {
      var o = void 0 !== r.extra[t][n][this.value] ? r.extra[t][n][this.value] : [];r.relationsApply(t, o);
    }return r.loadPreImages(e), 0 == a && $(".navigate", e).addClass("two_options"), r.current.extras[t][n] = this.value, !0;
  }), $(e).on("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend", function (t) {
    $(e).hasClass("visible") ? $(".navigate", e).addClass("fixed") : $(".navigate", e).removeClass("fixed");
  }), "quilted_waistcoat" == t && ($(".link_popup_quilted_waistcoat").click(function () {
    var t = parse_query_string(window.location.href.replace(/^[^?]*/, ""));t.step = r.step, t.option = t.option, t.popup = "quilted_waistcoat", History.pushState(t, r.window_title, "?" + jQuery.param(t));
  }), $(".quilted_waistcoat_alert").click(function () {
    History.back();
  }));var o;$(e).on("click", ".fabric_thumb", function () {
    $('label[mode="personalizado"] input', e).click();var t = $(this).closest(".extra_field");return $(".fabric_thumb", t).not(this).removeClass("current"), $(this).addClass("current"), $("input", t).val(this.getAttribute("data-id")), $(".navigate", e).addClass("two_options"), !1;
  }), $(".extra_field_metal_button label").click(function () {
    $(".navigate", e).addClass("two_options");
  }), i(), $("a.close", e).click(function (t) {
    return $(".navigate", e).removeClass("two_options"), a(), History.back(), t.stopPropagation(), !0;
  }), $("a.back", e).click(function (t) {
    return $(".navigate", e).removeClass("two_options"), a(), History.back(), t.stopPropagation(), !0;
  }), $("#action_colum_desplaced").click(function (e) {
    return r.mobile_current_option == t ? (a(), r.goToRender(), e.stopPropagation(), !0) : "satin_flap" == r.mobile_current_option && "contrasts" == t ? (a(), r.goToRender(), e.stopPropagation(), !0) : void 0;
  });$("a.select", e).click(function (e, a) {
    if (i(), "updateMode" == a) return !0;$(".navigate").removeClass("two_options"), "jacket_lapel_satin" == t && (r.current.extras[t].color = $('input[name="jacket_lapel_satin[color]"]').val()), "handkerchief" == t && (r.current.extras[t].color = $('input[name="handkerchief[color]"]').val()), "patches" == t && (r.current.extras[t].patches = $('input[name="patches[color]"]').val()), "coat_patches" == t && (r.current.extras[t].patches = $('input[name="coat_patches[color]"]').val()), "trenchcoat_patches" == t && (r.current.extras[t].patches = $('input[name="trenchcoat_patches[color]"]').val()), "quilted_waistcoat" == t && (r.current.extras[t].color = $('input[name="quilted_waistcoat[color]"]').val()), "contrast_collar" == t && (r.current.extras[t].color = $('input[name="contrast_collar[color]"]').val()), "winter_lining" == t && (r.current.extras[t].color = $('input[name="winter_lining[color]"]').val()), "neck_lining" == t && (r.current.extras[t].color = $('input[name="neck_lining[color]"]').val()), "neck" == t && (r.current.extras[t].color = $('input[name="neck_lining[color]"]').val()), "coat_neck" == t && (r.current.extras[t].color = $('input[name="coat_neck[color]"]').val()), "metal_buttons" == t && (r.current.extras[t].color = $('input[name="metal_buttons[type]"]').val()), "bowtie" == t && (r.current.extras[t].color = $('input[name="bowtie[color]"]').val()), "sash" == t && (r.current.extras[t].color = $('input[name="sash[color]"]').val()), "neck_ribbon" == t && (r.current.extras[t].color = $('input[name="neck_ribbon[color]"]').val()), "contrasts" == t && (r.current.extras.contrasts.contrasts_flap = $('input[name="contrasts[contrasts_flap]"]').val(), r.current.extras.contrasts.contrasts_pockets = $('input[name="contrasts[contrasts_pockets]"]').val(), r.current.extras.contrasts.contrasts_buttons = $('input[name="contrasts[contrasts_buttons]"]').val(), r.current.extras.contrasts.contrasts_pants = $('input[name="contrasts[contrasts_pants]"]').val(), delete r.current.extras.contrasts.color), "jacket_lapel_satin" == t && (r.current.extras[t].color = $('input[name="jacket_lapel_satin[color]"]').val()), "sash" == t && r.renderSetActiveBlock("man_pants"), r.checkViewChange(t, !1), r.renderDraw(), r.goToRender();
  });$(".back_extra_full", e).click(function (t) {
    History.back(), t.stopPropagation();
  }), "contrasts" == t && $(".satin_flap .back_extra_full").click(function (t) {
    a(), History.back(), t.stopPropagation();
  }), this.bind("activateExtra", function (i) {
    i == t && $("input:checked", e).change();
  }), this.bind("discardExtra", function (i) {
    i == t && ($(".fabric_thumb", e).removeClass("current"), $("input[type=radio]:eq(0)", e).prop("checked", "1").change(), $("input[type=hidden]", e).val(""), $("label", e).removeClass("checked").find("input").attr("checked", !1));
  });
}, Garment.prototype.initExtraFabrics = function (t, e) {
  var i = this,
      a = !1,
      r = $("div.fabric_slider", e),
      n = ($("div.fabric_slider_contents", r), $("div.fabric_filters", e));$(".contrast", e);$("label", e).click(function (a) {
    var r = $("input", this),
        n = parseFloat(r.attr("data-price")),
        o = r.attr("data-field-name");i.current.extras[t][o] = r.val(), n ? (History.pushState({ step: "extra", option: t, fabrics: 1 }, window.title, "?step=extra&option=" + t + "&fabrics=1"), i.loading_layer.show(), s()) : (i.out_of_stock_control && i.keychain_isset(i.out_of_stock_control, ["extras", "fabric", t]) && delete i.out_of_stock_control.extras.fabric[t], i.extraSetPrice(t, 0, $(e)), i.checkViewChange(t), i.renderDraw(), i.goToRender()), a.stopPropagation();
  }), $("input", e).change(function (e) {
    $(".favourite").removeClass("hide");var a = $(this),
        r = (parseFloat(a.attr("data-price")), a.attr("data-field-name"));i.current.extras[t][r] = a.val(), i.renderDraw();
  }), $("#action_colum_desplaced").click(function (a) {
    if (i.mobile_current_option == t) return void 0 === i.current.extras[t].fabric_id && $(".extra_field input[data-price=0]", e).click(), i.goToRender(), a.stopPropagation(), !0;
  }), $("form").on("click", ".back_extra", function (a) {
    if (i.mobile_current_option == t) return void 0 === i.current.extras[t].fabric_id && $(".extra_field input[data-price=0]", e).click(), History.back(), a.stopPropagation(), !0;
  });var o = parseInt($("input.idExtra", e).val());o && (i.current.extras[t].fabric_id = o);var s = function () {
    a = !0;var r = { action: "fabric_filter_2", extra_name: t };i.out_of_stock_control && i.keychain_isset(i.out_of_stock_control, ["extras", "fabric", t]) && (r.fabric_out = i.out_of_stock_control.extras.fabric[t]), $("input, select", n).each(function () {
      r[this.name] = this.value;
    }), $(".extra_fabrics_header .title.linings").hide(), $(".extra_fabrics_header .link_popup_unlined_coat").hide(), i.mobile_layer_extra_fabrics.find(".list").load(window.location.href, r, function () {
      var a = parseInt($("input.idExtra", e).val());a && $(".fabric_thumb", this).filter(".fabric_" + a).addClass("current"), i.bLazy && i.bLazy.revalidate(), $("a.out_of_stock", i.mobile_layer_extra_fabrics).click(function (t) {
        return !1;
      }), $("a:not(.out_of_stock):not(.back_extra)", i.mobile_layer_extra_fabrics).click(function () {
        return i.checkViewChange(t), i.with_add_to_cart(), i.fabricSelectExtra(t, this.getAttribute("data-id")), i.goToRender(), !1;
      }), i.loading_layer.hide();
    });
  };$(e).on("change", ".fabric_filters select", function () {
    s();
  }), $(e).on("click", ".fabric_filters a, .fabric_filters input", function () {
    s();
  }), this.bind("activateExtra", function (e) {
    a || e != t || s();
  }), this.bind("discardExtra", function (i) {
    i == t && ($("input.idExtra", e).val(""), $(".fabric_thumb", e).removeClass("current"), $("input[type=radio]:eq(0)", e).prop("checked", "1").change(), $(".fabric_filters input[type=radio]:eq(0)", e).prop("checked", "1").change());
  });
}, Garment.prototype.fabricSelectExtra = function (t, e) {
  var i = $("div.extra_container", this.container).filter("." + t),
      a = this;a.out_of_stock_control && a.keychain_isset(a.out_of_stock_control, ["extras", "fabric", t]) && delete a.out_of_stock_control.extras.fabric[t], $(".fabric_thumb", this.mobile_enabled ? this.mobile_layer_extra_fabrics : i).removeClass("current").filter(".fabric_" + e).addClass("current"), $("input.idExtra", i).val(e).change();var r = parseFloat($(".option.checked input[type=radio]", i).data("price"));this.extraSetPrice(t, r, i), a.current.extras[t].fabric_id = e, a.renderDraw();
}, Garment.prototype.fabricGetInfoExtra = function (t, e) {
  if (void 0 === this._fabrics[t]) {
    var i = this;return $.getJSON(window.location.pathname.replace(/personalize\/?/, "") + "fabric_info/" + t, function (a) {
      i._fabrics[t] = a, e && e.apply(i, [i._fabrics[t], t]);
    }), "callback";
  }return this._fabrics[t];
}, Garment.prototype.initExtraThreads = function (t, e) {
  function i() {
    return s.find("input:checked").length == s.length;
  }function a() {
    c = {}, o.each(function () {
      c[this.getAttribute("data-field-name")] = $("input:checked", this).val();
    });
  }function r() {
    $("." + t + " input.checked", e).prop("checked", 0).change(), o.each(function () {
      var e = this.getAttribute("data-field-name");$("." + t + " input[value=" + c[e] + "]").prop("checked", 1).change(), $("." + t + " ." + e + " input[value=" + c[e] + "]").parents(".extra_field").find(".option").removeClass("active").removeClass("checked"), $("." + t + " ." + e + " input[value=" + c[e] + "]").parent().addClass("active").addClass("checked");
    });
  }var n = this,
      o = ($(".threads_preview", e), $(".extra_field", e)),
      s = o.filter(".color");"man_jacket" != this.product_type && "man_suit2" != this.product_type && "man_suit3" != this.product_type || (this.current.extras.button_holes_threads ? (void 0 !== this.current.extras.button_holes_threads.holes && (this.current.extras.button_holes_threads["holes-color"] = this.current.extras.button_holes_threads.holes.color), void 0 !== this.current.extras.button_holes_threads.threads && (this.current.extras.button_holes_threads["threads-color"] = this.current.extras.button_holes_threads.threads.color)) : this.current.extras.waistcoat_button_holes_threads && (void 0 !== this.current.extras.waistcoat_button_holes_threads.holes && (this.current.extras.waistcoat_button_holes_threads["holes-color"] = this.current.extras.waistcoat_button_holes_threads.holes.color), void 0 !== this.current.extras.waistcoat_button_holes_threads.threads && (this.current.extras.waistcoat_button_holes_threads["threads-color"] = this.current.extras.waistcoat_button_holes_threads.threads.color))), $(e).on("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend", function (t) {
    $(e).hasClass("visible") ? $(".navigate", e).addClass("fixed") : $(".navigate", e).removeClass("fixed");
  }), $("input", e).change(function () {
    if ($(".favourite").removeClass("hide"), $(this).hasClass("color")) n.mobile_enabled || n.price_detail[t], i && $(".navigate", e).addClass("two_options");else {
      var a = parseFloat(this.getAttribute("data-price"));isNaN(a) || (n.extraSetPrice(t, a, $(e)), 0 == a ? ($(".navigate", e).addClass("two_options"), $("input.color:checked", e).prop("checked", !1).parent().removeClass("checked")) : setTimeout(function () {
        var t = $(".extra_field_threads").offset().top;0 == $(window).scrollTop() && $(".garment_block_extra").animate({ scrollTop: t - 100 }, 1e3);
      }, 500));
    }var r = this.getAttribute("data-field-name");if (void 0 !== n.extra[t][r]) {
      var o = void 0 !== n.extra[t][r][this.value] ? n.extra[t][r][this.value] : [];n.relationsApply(t, o);
    }return n.current.extras[t][r] = this.value, !0;
  });var c;a(), $(".mobile_layer", e).addClass("manual_close");$("a.select", e).click(function (e) {
    return a(), n.checkViewChange(t, !1), n.renderDraw(), n.goToRender(), e.stopPropagation(), !0;
  });$("a.close", e).click(function (t) {
    return r(), History.back(), t.stopPropagation(), !0;
  }), $("a.back", e).click(function (t) {
    return r(), History.back(), t.stopPropagation(), !0;
  }), $(".back_extra_full", e).click(function (t) {
    r(), History.back(), t.stopPropagation();
  }), $("#action_colum_desplaced").click(function (e) {
    if (n.mobile_current_option == t) return r(), n.goToRender(), e.stopPropagation(), !0;
  }), this.bind("discardExtra", function (i) {
    i == t && ($(".color input[type=radio]", e).prop("checked", !1), $(".extra_field input[type=radio]", e).filter(":first").prop("checked", "1").change());
  });
}, Garment.prototype.initExtraStandart = function (t, e) {
  function i() {
    if (r.value != a.current.extras.type_flap) {
      var i = a.current.extras.type_flap;i && " undefined" != typeof i && 0 != i.length || (i = "default"), $('input[value="' + i + '"]', e).click(), void 0 !== a.extra[t][r.field_name] && a.relationsApply(t, a.extra[t][r.field_name][i]);
    }
  }var a = this,
      r = [];$("label", e).click(function (i) {
    var n = $("input", this),
        o = parseFloat(n.attr("data-price")),
        s = n.attr("data-field-name"),
        c = n.val();$(".favourite").removeClass("hide"), "type_flap" == t ? ($(".extra_content .navigate").addClass("two_options"), r.input_val = c, r.price = o, r.field_name = s, void 0 !== a.extra[t][s] && a.relationsApply(t, a.extra[t][s][c])) : (a.current.extras[t] = n.val(), a.checkViewChange(t, !1), o ? (a.extraSetPrice(t, o, $(e)), a.renderDraw(), "type_flap" == t ? $(".extra_content .navigate").addClass("two_options") : a.goToRender()) : (a.extraSetPrice(t, 0, $(e)), a.renderDraw(), "type_flap" == t ? $(".extra_content .navigate").addClass("two_options") : a.goToRender()), void 0 !== a.extra[t][s] && a.relationsApply(t, a.extra[t][s][a.current.extras[t]])), i.stopPropagation();
  }), $("a.select", e).click(function () {
    History.pushState({ step: "extra" }, window.title, "?step=extra");
  }), "type_flap" == t && $(".contrasts a.select").click(function () {
    a.current.extras[t] = r.input_val, a.checkViewChange(t, !1), r.price ? (a.extraSetPrice(t, r.price, $(e)), a.renderDraw(), "type_flap" == t ? $(".extra_content .navigate").addClass("two_options") : a.goToRender()) : (a.extraSetPrice(t, 0, $(e)), a.renderDraw(), "type_flap" == t ? $(".extra_content .navigate").addClass("two_options") : a.goToRender()), void 0 !== a.extra[t][r.field_name] && a.relationsApply(t, a.extra[t][r.field_name][a.current.extras[t]]);
  }), "type_flap" == t && $(".satin_flap .back_extra_full").click(function (t) {
    i(), t.stopPropagation();
  }), this.bind("discardExtra", function (a) {
    "type_flap" == a ? i() : a == t && ($("input.id", e).val(""), $(".lining_thumb", e).removeClass("current"));
  });
}, Garment.prototype.initExtraLogos = function (t, e) {
  function i() {
    for (var t = ["logo", "position", "color"], i = 0; i < t.length; i++) $("input." + t[i] + ":checked", e).length || $("input." + t[i] + ":eq(0)", e).prop("checked", 1).change().parent().addClass("active").addClass("checked");$(".logo", e).removeClass("current");
  }function a() {
    var i = { logo: $('input[name="logos[logo]"]', e).val(), pos: $("input.position:checked", e).val(), color_custom: $("input.color:checked", e).attr("value") },
        a = !0;for (var o in i) if (!i[o]) {
      a = !1;break;
    }a && r.extraSetPrice(t, n, $(e)), r.current.extras[t] = i, r.renderDraw();
  }$(".initials_preview");var r = this,
      n = 1 * $("input.logos_price", e).val(),
      o = $(".remove_logo", e);$(".extra_title", e).append($(".extra_price", e)), $(".extra_field_initials_text .box_opt_fix", e).append($(".discard", e).html("v")), $(".mobile_layer", e).addClass("manual_close"), i(), o.click(function () {
    $(this).removeClass("active"), $('input[name="logos[logo]"]', e).val("").change(), i(), r.price_detail[t] = 0, r.updatePrice(), a(), $('.list_option div[option="' + t + '"]').removeClass("tick"), History.back();
  }), $(".discard", e).click(function () {
    $('input[name="logos[logo]"]', e).val("").change(), r.price_detail[t] = 0, r.updatePrice(), a(), $('.list_option div[option="' + t + '"]').removeClass("tick"), History.back();
  }), $("a.close", e).click(function () {
    var t = r.current.extras[r.mobile_current_option];void 0 === t && r.trigger("discardExtra", [r.mobile_current_option]), jQuery.isEmptyObject(t) && r.trigger("discardExtra", [r.mobile_current_option]), History.back();
  }), $(".back_extra_full", e).click(function (t) {
    var e = r.current.extras[r.mobile_current_option];void 0 === e && r.trigger("discardExtra", [r.mobile_current_option]), jQuery.isEmptyObject(e) && r.trigger("discardExtra", [r.mobile_current_option]), History.back(), t.stopPropagation();
  });var s = $("a.select", e).click(function () {
    r.checkViewChange(t, !0), a(), o.addClass("active"), r.goToRender();
  });$(".logo", e).click(function () {
    $(".logo", e).removeClass("current"), $(this).addClass("current");var t = $(this).attr("rel");$('input[name="logos[logo]"]', e).val(t).change(), s.parent().addClass("two_options");
  }), $(e).on("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend", function (t) {
    $(e).hasClass("visible") ? $(".navigate", e).addClass("fixed") : $(".navigate", e).removeClass("fixed");
  }), $("input", e).change(function () {
    $(".logo.current", e).length ? s.parent().addClass("two_options") : s.parent().removeClass("two_options");
  }), this.bind("discardExtra", function (i) {
    i == t && ($("input.text", e).val(""), $(".navigate.two_options", e).removeClass("two_options"));
  });
};