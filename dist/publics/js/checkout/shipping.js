var original_iso = !1,
    Checkout = { initCart: function () {
    function e(e) {
      var i, r;i = "popup" === e.attr("rel") ? $("#smartModal") : "mobile_popup" === e.attr("rel") ? $("#container_save_mobile") : $(".save_cart .hidden_email_save_cart_block");var t = !1;null == (r = "mobile_popup" === e.attr("rel") ? $("#email_mobile", i) : $('.email_save_cart input[name="email"]', i)).val().match(/[\S]+[\@][\S]+[\.][\S]+/i) ? ($(".email_error_format").show(), t = !0) : $(".email_error_format").hide();var a = {};if ((a = "popup" == e.attr("rel") ? $("#privacy_label.ouibounce.region_required #privacy.ouibounce", i) : "mobile_popup" === e.attr("rel") ? $("#privacy_label.popup_mobile.region_required #privacy.popup_mobile", i) : $("#privacy_label.button_popup.region_required #privacy.button_popup", i)).length > 0 && !a.prop("checked") && ("popup" == e.attr("rel") ? a.parents("#privacy_label.ouibounce").find("p.error").css({ display: "inline-block" }) : a.parents("#privacy_label.button_popup").find("p.error").css({ display: "inline-block" }), t = !0), t) return !1;$(".email_save_cart input", i).css("visibility", "hidden"), $(".email_save_cart .save_cart", i).css("visibility", "hidden"), $(".email_save_cart .not_now", i).css("visibility", "hidden"), $(".email_save_cart div.loading", i).html('<img src="/images/loading.gif" />').fadeIn();var o = region_url + "checkout/";return o += mobile_device ? "save_cart_mobile" : "login_register", $.post(o, { no_output: "1", action: "register", save_cart: "1", step: "cart", email: r.val() }, function (r) {
        "ok" == $.trim(r) ? ($(".email_save_cart div.loading", i).css("display", "none"), $(".email_save_cart_error", i).css("display", "none"), $(".email_save_cart", i).css("display", "none"), $(".email_save_cart_ok", i).fadeIn(), mobile_device && History.pushState({ option: "" }, window.title, ""), dataLayer.push({ event: "save_cart", eventCategory: "save_cart", eventAction: "save_email", eventLabel: "desktop" }), setTimeout(function () {
          "popup" === e.attr("rel") || "mobile_popup" === e.attr("rel") ? i.fadeOut() : i.parents(".save_cart").fadeOut();
        }, 2e3)) : ($(".email_save_cart div.loading", i).css("display", "none"), $(".email_save_cart .save_cart", i).css("visibility", "visible"), $(".email_save_cart .not_now", i).css("visibility", "visible"), $(".email_save_cart input", i).css("visibility", "visible"), $(".email_save_cart_error", i).fadeIn());
      }), !0;
    }if (this.has_sticky_bar = !1, this.sticky_bar = function () {
      if (this.has_sticky_bar || window.mobile_enabled) return !1;this.has_sticky_bar = !0;var e = $(".cart_header .floating.right.buttons").clone(!0);$("#body").append('<div class="sticky_bar desktop_only"><div class="body_box"></div></div>'), $(".sticky_bar .body_box").append(e).find(".add_measures_big").html($(".shipping_info .add_measures_big").html()), $("#body").addClass("has_sticky_bar");
    }, $(".add_code_text").click(function () {
      $(this).siblings(".add_code_input").show();
    }), window.mobile_enabled) {
      var i = $('<div id="product_preview_mobile"></div>').appendTo("#body");i.click(function () {
        i.hide(), $("body, html").css("overflow", "");
      }), $("a.popup_link").unbind("click").click(function (e) {
        var r = $("img", this);$("body, html").css("overflow", "hidden");var t = r.attr("src");return -1 != t.indexOf("accessory") && (t = t.replace("_thumb", "_big")), i.html('<img src="' + t + '" pagespeed_no_transform />').show(), e.stopPropagation(), !1;
      });
    }$(".add_code_input .send-voucher").click(function () {
      var e = $(this),
          i = e.siblings('input[name="voucher_code"]').val();if ("" === i) return $(".voucher .add_code_input input").css("border-color", "red"), !1;mobile_device ? $.post(region_url + "checkout/cart", { action: "voucher", voucher_code: i }, function (e) {
        location.href = region_url + "checkout/cart/";
      }) : e.parents(".voucher_form").submit();
    }), $(".more_units").click(function () {
      $(this).parents(".opt").find(".more_units_form").show();
    }), $(".update_q").click(function () {
      var e = $(this),
          i = e.parents(".more_units_form").find("input.n_products"),
          r = i.val();if (e.hasClass("more")) {
        if (r >= 20) return !1;r++;
      } else if (e.hasClass("less")) {
        if (r <= 1) return !1;r--;
      }i.val(r), e.parents(".more_units_form").find("form").submit();
    }), $("body").hasClass("iphone") || void 0 === window.cart_delete_product_txt || "" == window.cart_delete_product_txt || $(".cart_delete_product").click(function () {
      return confirm(window.cart_delete_product_txt);
    }), $("#privacy_label.ouibounce.region_required #privacy.ouibounce, #privacy_label.popup_mobile.region_required #privacy.popup_mobile, #privacy_label.button_popup.region_required #privacy.button_popup").change(function () {
      var e = $(this),
          i = e.parents("#privacy_label").find(".error");e.prop("checked") ? i.css({ display: "none" }) : i.css({ display: "inline-block" });
    });var r = window.cdn_host;if ($("body").on("click", "a.save_cart", function () {
      return e($(this)) && $(this).replaceWith('<img style="width:60px;height:60px" src="' + r + 'images/garment/loading_blue.gif">'), !1;
    }), $("#form_mobile_save_cart").submit(function () {
      return e($(this)), !1;
    }), $(".show_email_save_cart_block").click(function () {
      dataLayer.push({ event: "save_cart", eventCategory: "save_cart", eventAction: "show_input", eventLabel: "desktop" }), $(".save_cart").show();
    }), $(".save_cart .background, .save_cart .mfp-close").click(function () {
      $(".save_cart").hide();
    }), $(".priority_line_info .activate").click(function () {
      return $(this).find("input").is(":checked") ? ($.post(region_url + "checkout/remove_super_express_shipping", function (e) {
        location.href = region_url + "checkout/cart/";
      }), !1) : ($(".express_shipping_container").show(), !1);
    }), $("#express_shipping_popup .no_thanks, #express_shipping_popup .close").click(function () {
      $(".express_shipping_container").hide();
    }), $("#express_shipping_popup .button_2 .btn-blue").click(function () {
      $.post(region_url + "checkout/add_super_express_shipping", function (e) {
        location.href = region_url + "checkout/cart/";
      });
    }), window.mobile_enabled) {
      var t = !!$("body").hasClass("iphone50");History.Adapter.bind(window, "statechange", function () {
        "save_cart" != History.getState().data.option && $("#container_save_mobile").hide();
      });function a() {
        switch (History.getState().data.option) {case "save_cart":
            "undefined" != typeof drift && drift.on("ready", function (e, i) {
              e.widget.hide();
            }), window.scrollTo(0, 0), $("#container_save_mobile").show(), $("body").css("overflow", "hidden"), $("body").hasClass("android") && ($("#email_mobile").focus(function () {
              $("#container_save_mobile div.save_cart").css("top", "-130px");
            }), $("#email_mobile").blur(function () {
              $("#container_save_mobile div.save_cart").css("top", "0px");
            })), $(".bar_promotion").hide(), $("#body_height,body").removeClass("has_promotion"), t && $("#cart_update_form").hide();break;default:
            "undefined" != typeof drift && drift.on("ready", function (e, i) {
              e.widget.show();
            }), $("#container_save_mobile").hide(), $("body").css("overflow", "");}$(window).scroll();
      }History.Adapter.bind(window, "statechange", a), a(), is_user || cart_saved || !cart_products || (History.pushState({ option: "save_cart" }, window.title, "?option=save_cart"), dataLayer ? dataLayer.push({ event: "save_cart", eventCategory: "save_cart", eventAction: "open_prompt", eventLabel: "mobile" }) : ga_callbacks.push(["send", "event", { eventCategory: "save_cart", eventAction: "open_prompt", eventLabel: "mobile_from_cart" }])), $(".product_info .title .name").each(function () {
        for (var e = $(this), i = parseInt(e.css("line-height").replace("px", "")), r = e.height(), t = e.text().trim(); r > 2 * i;) t = t.slice(0, -1), r = e.text(t + "...").height();
      });
    }$("#voucher_popup .background, #voucher_popup .close").click(function () {
      $("#voucher_popup").hide();
    }), initQTip($(".merge_order .tooltip")), $("a.popup_link").magnificPopup({ type: "iframe" });
  }, initCartCheckout: function () {
    function e(e) {
      return $("input[name=action]", i).val(e), i.submit(), !1;
    }if ($(".add_measures.cart").click(function () {
      parent.$(".mfp-close").click();
    }), !cart_products) return parent.location.href = region_url + "checkout/cart", !1;var i = $("#cart_update_form");$("#cart table.products table.q a.update_q").click(function () {
      var i = $(this).attr("rel"),
          r = $('input[name="' + i + '"]').val();if ($(this).hasClass("more")) r++;else {
        if (!(r > 1)) return !1;r--;
      }return $('input[name="' + i + '"]').val(r), e("update");
    }), $("a.voucher", i).click(function () {
      return e("voucher");
    });
  }, initSignIn: function () {
    function e() {
      return "register" == $("input[name=log_reg]:checked").val();
    }$("#form_login").validate({ rules: { email: { required: function () {
            return !e();
          }, email: function () {
            return !e();
          } }, password: { required: function () {
            return !e();
          } } } }), $("#form_register").validate({ rules: { fullname: { required: !0 }, email: { email: !0, required: !0 }, password: { required: !0, minlength: 6 }, password2: { required: !0, equalTo: "#password" } }, errorContainer: "#errors_container", errorLabelContainer: "#errors_container ul", wrapper: "li" }), $("#act_login").click(function () {
      $("#form_login").submit();
    }), $("#act_register").click(function () {
      $("#form_register").submit();
    }), $("#inp_radio_login").click(function () {
      $(".signin_checkout table.options div.info_login").show(), $("#msn_register").hide(), $("#msn_login").show();
    }), $("#inp_radio_register").click(function () {
      $("#msn_login").hide(), $("#msn_register").show(), $(".signin_checkout table.options div.info_login").hide();
    });
  }, initShipping: function (e) {
    function i(e) {}function r() {
      if (window.info_cart) {
        var e = window.info_cart.country_extra_price;isNaN(e) && (e = 0);var i = $("#mini_shipping_cost"),
            r = $("#tr_mini_shipping_cost");if (window.info_cart.voucher_free_shipping) t = parseFloat(0);else var t = parseFloat(window.info_cart.total_shipping) + e;var a = formatPrice(t);r.removeClass("dto").removeClass("gray");var o = parseFloat(window.info_cart.total_base) + parseFloat(window.info_cart.total_shipping);if (0 == parseFloat(t)) {
          var n = i.attr("text_free");i.html(n), r.addClass("dto");
        } else i.html(a), r.addClass("gray");window.info_cart.voucher_free_shipping || (o += e), $("#td_mini_total").html(formatPrice(o));
      }
    }function t() {
      if (window.info_cart) {
        var e = window.info_cart.country_extra_price;if (isNaN(e) && (e = 0), window.info_cart.voucher_free_shipping) i = parseFloat(0);else var i = parseFloat(window.info_cart.total_shipping) + e;var r = formatPrice(i),
            t = parseFloat(window.info_cart.total_base) + parseFloat(window.info_cart.total_shipping);0 == parseFloat(r) ? ($(".cart_totals_menu .shipping").css("display", "none"), $(".cart_totals_menu .free").css("display", "table-row")) : ($(".cart_totals_menu .free").css("display", "none"), $(".cart_totals_menu .shipping").css("display", "table-row"), $(".cart_totals_menu .shipping td").html(r)), window.info_cart.voucher_free_shipping || (t += e), $(".cart_totals_menu .total td").html(formatPrice(t));
      }
    }function a(e) {
      return e && "object" == typeof e && e.constructor === Array;
    }function o() {
      var e = $("#id_iso_country").val().toLowerCase(),
          i = $("input[name='city']").val().toLowerCase(),
          r = !1;if ("it" == e & (i.indexOf("san marino") >= 0 || i.indexOf("sanmarino") >= 0) && (r = !0), r) {
        var t = window.msn_warning_address.replace("#CITY#", i).replace("#LANG#", window.lang).replace("#DOMAIN#", $("#shipping_warnings").attr("domain"));$("#shipping_warnings").text(t).css("display", "block");
      } else $("#shipping_warnings").css("display", "none");
    }$("a.popup_link").magnificPopup({ type: "iframe" }), $("#ajx_email").blur(function () {
      var e = $("#ajx_email").val(),
          i = $("#ajx_secure_id").val();return void 0 !== s && s.element(this), void 0 === e || "" == e ? ($("#social_links").hide(), !1) : /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(e) ? void $.ajax({ type: "POST", url: region_url + "checkout/ajax_get_user_by_email", data: { ajx_email: e, ajx_secure_id: i }, async: !0, success: function (e) {
          "ko" != e ? ($("#social_links").show(), $("#social_links .login_psw").hide(), $("#social_links .social_link").hide(), $(".info_login", "#shipping_address").hide(), "ok" == e ? ($("#social_links .login_psw").show(), $("#social_links .login_psw").focus()) : "facebook" == e ? $("#social_links .login_facebook").css("display", "block") : "linkedin" == e ? $("#social_links .login_linkedin").css("display", "block") : "google" == e ? $("#social_links .login_google").css("display", "block") : "yandex" == e ? $("#social_links .login_yandex").css("display", "block") : $("#social_links .login_psw").show()) : $("#social_links").hide();
        }, timeout: 3e3 }) : ($("#social_links").hide(), !1);
    }), $(".see_all_products", ".mini_cart.shipping").click(function () {
      return $(".product", ".mini_cart.shipping").removeClass("hidden"), $(this).hide(), $(".payment_checkout .box_btn_shipping").clone().prependTo(".payment_checkout #mini_cart_container"), $(".payment_checkout #mini_cart_container #btn_shipping").attr("id", "btn_shipping_helper"), $("#btn_shipping_helper").click(function () {
        $("#form_shipping").submit();
      }), !1;
    }), $("#login_bnt").click(function () {
      var e = $("#ajx_email").val(),
          i = $("#login_psw").val();void 0 !== e && "" != e && /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(e) && $.ajax({ type: "POST", url: region_url + "checkout/ajax_login/", data: { email_value: e, pwd_value: i }, async: !0, complete: function (e) {
          "ok" == $.trim(e.responseText) ? window.location.reload(!0) : ($("#login_psw").removeClass("valid").addClass("error"), $(".error_psw", "#shipping_address").show());
        } });
    }), $("#btn_shipping").on("click", function () {
      $("#form_shipping").submit();
    }), $("#header .modify_order").show(), $("#uniform-id_iso_country span").addClass("country"), $("#id_iso_country").change(function () {
      var e = $("#id_iso_country").val();if (e) {
        i(e);var a = parseFloat($("#id_iso_country option[value=" + e + "]").attr("price"));window.info_cart && (window.info_cart.country_extra_price = a, backoffice_store || window.mobile_enabled ? r() : t()), o();
      }
    }).change(), $("#id_address").change(function (e) {
      var e = $("#id_address").val(),
          i = $("#shipping_address");if (!i.length) return !1;var r = i.find(".default_address");e && "" != e ? $.getJSON(region_url + "checkout/getAddress", { id_address: e }, function (e) {
        if (e.error) return !1;for (var t in e.address) {
          var a = i.find(':input[name="' + t + '"]');a.length && a.val(e.address[t]);
        }r.hide().find('[name="save"]').attr("checked", !1), $("#id_iso_country").change();
      }) : (i.find(":input").not("input.legal").val("").filter('[name="id_iso_country"]').change(), r.show(), $(".courier").hide()), $("#shipping_address input", "#form_shipping").removeClass("valid"), $("#shipping_address input", "#form_shipping").removeClass("error"), $("#shipping_address label.error", "#form_shipping").hide();
    });var n = { name: { required: !0, fullname: !0 }, street: { required: !0, boxoffice: !0, add_address_number: !0 }, street2: { required: !1, boxoffice: !0 }, city: { required: !0 }, zipcode: { required: !0 }, state: { required: !0 }, phone: { required: !0, minlength: 4 }, id_iso_country: { required: !0 } };"/cn/" == region_url && (n.name.fullname = !1), "/ru/" == region_url && (n.phone.required = !0), "/de/" == region_url && (n.phone.required = !0), "/es/" == region_url && (n.phone.required = !0, n.phone.phone = "^[0-9]{2,4}[0-9]{9}$|^[\\+]{1}[\\d]{2}[0-9]{9}$|^[0-9]{9}$", delete n.phone.minlength), e || (n.ajx_email = { required: !0, email: !0 }), $('input[name="state"]').length > 0 && (n.state.required = !1);var s = $("#form_shipping").validate({ rules: n, ignore: ".hide" });if ($("#form_shipping").submit(function (e) {}), $("#id_iso_country").change(function (e) {
      var i = $("#premium_box_container"),
          r = $("#id_iso_country").val(),
          t = !1;provinces[r] && (t = provinces[r].provinces), 1 === $("#id_iso_country option[value=" + r + "]").data("box") ? i.fadeIn() : i.fadeOut(), provinces[r] && 0 == provinces[r].zip_required ? ($(".address_zipcode").hide(), $(".address_zipcode input").addClass("hide")) : ($(".address_zipcode").show(), $(".address_zipcode input").removeClass("hide"));var o = $('input[name="state"]').val(),
          n = void 0 === window.state_placeholder ? "State" : window.state_placeholder;if (a(t)) {
        var s = $('<select id="state" name="state" class="uniformC uniform" required="required"></select>'),
            c = "",
            l = !1;t.forEach(function (e, i) {
          var r = "";o == e && (r = "selected", l = !0), c += '<option value="' + e + '" ' + r + ">" + e + "</option>";
        }), c = '<option value="" disabled ' + (l ? "" : "selected") + ">" + n + "</option>" + c, s.html(c), $("p.address_state input, p.address_state select, p.address_state label.error").remove(), $("p.address_state").append(s), $("p.address_state").show(), $('select[name="state"]').rules("add", { required: !0 });
      } else if ("optional" == t) {
        void 0 == o && (o = "");var d = $('<input type="text" name="state" class="inp level2" value="' + o + '" ' + (window.mobile_enabled ? ' placeholder="' + n + '" ' : "") + "/>");$("p.address_state input, p.address_state select, p.address_state label.error").remove(), $("p.address_state").append(d), $("p.address_state").show(), $('input[name="state"]').rules("remove");
      } else void 0 == o && (o = ""), $("p.address_state input, p.address_state select, p.address_state label.error").remove(), $("p.address_state").hide();
    }), $(".extra_line_street").click(function () {
      $(this).hide(), $(".payment_checkout .form p.field.street2").addClass("visible");
    }), $("#id_iso_country").change(), $(".legal_placeholder").change(function (e) {
      var i = $(this).is(":checked") ? 1 : "";$(".legal_placeholder").parent().parent().find(".error").remove(), $(".legal").val(i);
    }), window.mobile_enabled) {
      var c = !1;window.closePopupLegal = function () {
        return c && c.hide(), !1;
      }, $("#legal_ajax").click(function () {
        return c || (c = $('<iframe src="' + this.href + '?popup=1" class="legal_iframe"></iframe>').appendTo("body")), c.show(), !1;
      });
    } else $("#legal_ajax").magnificPopup({ type: "iframe" });if (window.isJoin) {
      $("input:text").each(function () {
        var e = $(this).attr("value");e || (e = "&nbsp;"), $(this).replaceWith("<p class='isJoin'>" + e + "</p>");
      });var l = $("select#id_iso_country option:selected").text();$("select#id_iso_country").replaceWith("<p class='isJoin'>" + l + "</p>");
    }var d = function (e) {
      $("#linkerParam").val(e.get("linkerParam"));
    };"function" == typeof ga ? ga(d) : ga_callbacks.push(d), $("input[name='city']").keyup(o);
  }, initPay: function () {
    function e() {
      return "saferpay" == $("select#methods").val();
    }function i() {
      s(), a();var e = $("#saferpay_form");return $.ajax({ url: region_url + "checkout/saferpay/mpicheck", data: e.find("input, select"), dataType: "json", success: function (e) {
          if (!e.mpi_link) return n();window.location = e.mpi_link;
        }, error: function (e, i, r) {
          c(), t(r = r.replace("Invalid JSON: ", ""));
        } }), !1;
    }function r() {
      $("#shipping_errors").show();
    }function t(e) {
      "KO" == e ? $("#saferpay_response_ko").show() : $("#saferpay_response").html(e).show();
    }function a() {
      $("#saferpay_response").html("").hide();
    }function o() {
      s(), $("#paypal_form").submit();
    }function n() {
      var e = $("#saferpay_form");return $.ajax({ url: e.attr("action"), data: e.find("input, select"), success: function (e) {
          var i = $('input[name="id_shop_order"]').val();"OK" == e.replace(/^\s+|\s+$/g, "") ? window.location.href = region_url + "checkout/confirm/?cm=" + i : (c(), t(e));
        }, error: function (e, i, r) {
          c(), t(r);
        } }), !1;
    }function s() {
      var e = $("#loading_content");e.height(e.parent().height()).css("opacity", "0.9"), $("#loading_content").fadeIn("fast");
    }function c() {
      $("#loading_content").fadeOut("fast");
    }$("a.review_order_pay").magnificPopup({ type: "iframe", iframe: { markup: '<div class="mfp-iframe-scaler cart_checkout"><div class="mfp-close"></div><iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe></div>' }, callbacks: { beforeOpen: function () {
          var e = $("#inline_04_finish_form").serialize();e += "&modify_order=1", $.post(region_url + "checkout/measures", e);
        }, open: function () {
          $(".mfp-content").addClass("white-popup-cart");
        }, close: function () {
          window.location.reload(!1);
        } }, closeOnContentClick: !1, closeOnBgClick: !1, showCloseBtn: !0, enableEscapeKey: !1 }), window.saferpay && (s(), $.post(window.region_url + "checkout/saferpay/execute_3ds/", window.saferpay, function (e) {
      "OK" == e.replace(/^\s+|\s+$/g, "") ? window.location.href = region_url + "checkout/confirm?cm=" + window.saferpay.id_shop_order : (c(), t(e));
    })), "voucher" == type_error && $("#voucher_errors").show(), "credit" == type_error && $("#credit_errors").show(), $("#header .modify_order").show(), $("#btn_authorise_payment,#btn_authorise_payment_paypal").click(function () {
      $("#form_pay").submit();
    }), $("#saferpay_form").validate({ rules: { cc_pan: { required: !0 }, cc_name: { required: !0 }, cc_cvc: { required: !0 } }, submitHandler: function () {
        return !1;
      } }), $("#form_shippingg").validate({ rules: { name: { required: !0 }, street: { required: !0 }, city: { required: !0 }, zipcode: { required: !0 }, state: { required: !0 }, phone: { required: !0 }, id_iso_country: { required: !0 } }, submitHandler: function () {
        s();$("#form_shipping #id_shop_order").attr("value");return $.ajax({ url: region_url + "checkout/validatePayment/", dataType: "json", type: "POST", data: $("#form_shipping").serialize(), success: function (e) {
            if (e.error) return c(), e.missing_fields && r(), !1;c();var i = $("#form_shipping #id_shop_order").attr("value");return window.location.href = region_url + "checkout/confirm?cm=" + i, !1;
          }, error: function () {
            c();
          } }), !1;
      } }), $("#form_pay").validate({ rules: { name: { required: !0 }, street: { required: !0 }, city: { required: !0 }, zipcode: { required: !0 }, state: { required: !0 }, phone: { required: !0 }, id_iso_country: { required: !0 }, pay_method: { required: !0 } }, submitHandler: function () {
        if ($("#voucher_errors").hide(), $("#credit_errors").hide(), e() && !$("#saferpay_form").valid()) return !1;s();var t = $("#id_shop_order").attr("value");return $.ajax({ url: region_url + "checkout/validatePayment/" + t, dataType: "json", type: "POST", data: $("#form_pay").serialize(), success: function (t) {
            if (t.error) return c(), t.missing_fields && r(), "voucher" == t.error && (location.href = region_url + "checkout/pay?error=voucher"), "credit" == t.error && (location.href = region_url + "checkout/pay?error=credit"), !1;e() ? i() : o();
          }, error: function () {
            c();
          } }), !1;
      } }), $("#methods").change(function () {
      var e = $(this).val();"paypal" == e ? ($("#btn_authorise_payment").hide(), $("div.recieve_it").hide(), $("#box_saferpay").hide(), $("#box_paypal").show()) : "saferpay" == e && ($("#btn_authorise_payment").show(), $("div.recieve_it").show(), $("#box_paypal").hide(), $("#box_saferpay").show());
    }), $("#img_ccv_pay").tooltip({ html: $("#cvc_helper").html() }), $("#what_is_this").tooltip({ html: $("#cvc_helper").html() });
  }, initFinish: function () {
    var e = $("#recommended_products_finish");e.length && (e.find("a.select_size").click(function () {
      return $(this).hide().closest("div.recommended_shop").find("div.size_box").show(), !1;
    }), e.find("a.add_recommended").click(function () {
      var e = !1;return e = $(this).attr("type"), ga("send", "event", { eventCategory: "Crossell", eventAction: e }), $(this).closest("form").submit(), !1;
    }), e.find("select.size_select").change(function () {
      return ga("send", "event", { eventCategory: "Crossell", eventAction: "belt" }), $(this).closest("form").submit(), !1;
    }));var i = $("#pre-config-polos");i.length && i.find("a.add_recommended").click(function () {
      return ga("send", "event", { eventCategory: "Crossell", eventAction: "Polo" }), i.find("#id_preconfig").val($(this).attr("rel")), $(this).closest("form").submit(), !1;
    }), $("#pre-config-polos a.ficha").magnificPopup({ type: "iframe" });
  }, initRecoverPass: function () {
    $("#recover_password_form").validate(), $("a.submit").click(function () {
      $("#recover_password_form").submit();
    });
  } };