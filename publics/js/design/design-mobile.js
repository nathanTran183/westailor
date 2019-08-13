function setContentByStep(step) {
    if (!step) {
        $('#available_window').removeClass('desplaced');
        $('.garment_container .garment_block_fabric ').removeClass('visible');
        $('.garment_container .garment_block_config ').removeClass('visible');
        $('.garment_container .garment_block_extra ').removeClass('visible');
    } else if (!!step && step == 'fabric') {
        $('#available_window').addClass('desplaced');
        $('.garment_container .garment_block_fabric ').addClass('visible');
        $('.garment_container .garment_block_config ').removeClass('visible');
        $('.garment_container .garment_block_extra ').removeClass('visible');

    } else if (step == 'config') {
        $('#available_window').addClass('desplaced');
        $('.garment_container .garment_block_config ').addClass('visible');
        $('.garment_container .garment_block_fabric ').removeClass('visible');
        $('.garment_container .garment_block_extra ').removeClass('visible');
    } else if (step == 'measure') {
        $('#available_window').addClass('desplaced');
        $('.garment_container .garment_block_extra ').addClass('visible');
        $('.garment_container .garment_block_config ').removeClass('visible');
        $('.garment_container .garment_block_fabric ').removeClass('visible');
    }
}

function checkOrientation() {
    if (window.orientation == 0 || window.orientation == 180) {
        $("#orientate_vertical").removeClass("visible");
        $("#body_height").removeClass("no_overflow")
    } else {
        $("#orientate_vertical").addClass("visible");
        $("#body_height").addClass("no_overflow")
    }
}

function backToMain() {
    $('#available_window').removeClass('desplaced');
    $('.garment_container .garment_block_fabric ').removeClass('visible');
    $('.garment_container .garment_block_config ').removeClass('visible');
    $('.garment_container .garment_block_extra ').removeClass('visible');
    $('.garment_block_config .navigate').removeClass('visible');
    $('.garment_container .garment_block_config .navigate').removeClass('visible');
    $('.garment_block_extra .navigate').hide();
    $('.garment_block_extra .navigate a').hide();
    $('#fabric_view_opt').removeClass('visible');
    $('.list_option').parent().find('.list_option.active').removeClass('active');
    $('.list_option').find('.config_field').hide();
}

function urlParam(name) {
    var results = new RegExp('[\?&]' + name + '=([^&#]*)')
        .exec(window.location.search);
    return (results !== null) ? results[1] || 0 : false;
}

function renderImage(component_id, componentImg, product_id) {
    if (!$('#'+product_id+' .slide.layers.front').find('#' + component_id).attr('src')) {
        if (!!componentImg.img_url_front)
            $('#'+product_id+' .slide.layers.front').append('<img src="' + componentImg.img_url_front + '" alt="front" id="' + component_id + '" class="front">')
    } else {
        if (!!componentImg.img_url_front)
            $('#'+product_id+' .slide.layers.front .front#' + component_id).attr('src', componentImg.img_url_front)
        else
            $('#'+product_id+' .slide.layers.front .front#' + component_id).remove();
    }
    if (!$('#'+product_id+' .slide.layers.back').find('#' + component_id).attr('src')) {
        if (!!componentImg.img_url_back)
            $('#'+product_id+' .slide.layers.back').append('<img src="' + componentImg.img_url_back + '" alt="back" id="' + component_id + '" class="back">')
    } else {
        if (!!componentImg.img_url_back)
            $('#'+product_id+' .slide.layers.back .back#' + component_id).attr('src', componentImg.img_url_back)
        else
            $('#'+product_id+' .slide.layers.back .back#' + component_id).remove();
    }
}

function checkMeasurement() {
    let flag = true;
    $('.garment_block_extra #measure_form input').each(function () {
        let input = $(this);
        if (!!input.val() && input.val() > 0) {
            currentDesign.measure[`${input.attr('name')}`] = input.val();
        } else {
            flag = false;
            return flag;
        }
    });
    return flag;
}

slides_generator = function () {
    var t = this, e = $(".slider"), i = $(".slide-wrapper", e);
    t.available_views = ["front", "back"];
    t.view = "front";
    t.navigate_configurator_button = $(".garment_block_config .navigate");
    t.changeView = function (t, e) {
        if (e = void 0 !== e && e, "without_jacket" == t) {
            i = this.view;
            return this.view = "front",
                $("#available_window").removeClass(i), $("#available_window").addClass("front"),
                $("#available_window .views li.active").removeClass("active"),
                $('#available_window .views li[rel="without_jacket"]').addClass("active")
        }
        this.previous_view = this.view; var i = this.view; this.view = t, $("#available_window").removeClass(i), $("#available_window").addClass(t), $("#available_window .views li.active").removeClass("active"), $('#available_window .views li[rel="' + t + '"]').addClass("active");
    }

    if (navigator.msMaxTouchPoints) e.addClass("ms-touch");
    else {
        t.slider = {
            el: { slider: e, holder: $(".holder", e) },
            slideWidth: e.width(),
            touchstartx: void 0,
            touchmovex: void 0,
            movex: void 0,
            index: 0,
            longTouch: void 0,
            init: function () {
                this.bindUIEvents()
            },
            bindUIEvents: function () {
                this.el.holder.on("touchstart", function (e) { t.slider.start(e) }),
                    this.el.holder.on("touchmove", function (e) { t.slider.move(e) }),
                    this.el.holder.on("touchend", function (e) { t.slider.end(e) })
            },
            start: function (t) { this.touchstartx = t.originalEvent.touches[0].pageX, $(".animate").removeClass("animate") },
            move: function (e) { this.touchmovex = e.originalEvent.touches[0].pageX, this.movex = this.index * this.slideWidth + (this.touchstartx - this.touchmovex), this.movex < this.slideWidth * t.available_views.length - 100 && this.el.holder.css("transform", "translate3d(-" + this.movex + "px,0,0)") },
            end: function (e) { Math.abs(this.index * this.slideWidth - this.movex) > this.slideWidth / 6 && (this.movex > this.index * this.slideWidth && this.index < t.available_views.length - 1 ? this.index++ : this.movex < this.index * this.slideWidth && this.index > 0 && this.index--), this.el.holder.addClass("animate").css("transform", "translate3d(-" + this.index * this.slideWidth + "px,0,0)"), t.view != t.available_views[this.index] && this.change_view() },
            set: function (t) {
                this.index = t,
                    this.el.holder.addClass("animate").css("transform", "translate3d(-" + this.index * this.slideWidth + "px,0,0)"),
                    this.change_view(),
                    $(window).resize()
            },
            change_view: function () {
                i.removeClass("visible").filter(".index_" + this.index).addClass("visible"),
                    t.changeView(t.available_views[this.index], !0);
                var e = i.not("." + t.available_views[this.index]).find(".slide");
                // e.filter(".layers").removeClass("active")
                // e.filter(".view_loading").addClass("active")
            }
        };
        var a = 100 / t.available_views.length;
        $(".slide-wrapper").css("width", a + "%");
        var r = 100 * t.available_views.length;
        $(".holder").css("width", r + "%"), t.slider.init(), t.navigate_configurator_button.removeClass("visible")
    }
}

$(document).ready(function () {
    $(window).on('popstate', function () {
        setContentByStep(urlParam('step'));
    });
    setContentByStep(urlParam('step'));

    $('.fabric_container_lazy').perfectScrollbar();
    $('.box_opt.col2').perfectScrollbar({
        suppressScrollX: true
    });
    $('.menu_filter .content').perfectScrollbar({
        suppressScrollX: true
    })
    $('.container_options').perfectScrollbar({
        suppressScrollX: true
    });



    // Handle change step
    $('.step_options .first').click(function (event) {
        event.preventDefault();
        window.history.pushState('next_step', '', $(this).attr('href'));
        setContentByStep('fabric');
    });
    $('.step_options .second').click(function (event) {
        event.preventDefault();
        setContentByStep('config');
        window.history.pushState('next_step', '', $(this).attr('href'));
    });
    $('.step_options .last').click(function (event) {
        event.preventDefault();
        setContentByStep('measure');
        window.history.pushState('next_step', '', $(this).attr('href'));
    });


    // Handle resize model image
    // $(window).resize(function () {
    //     let t = $(window).width();
    //     let s = 233 - ((1440 - t) / 2)

    //     { 
    //         var t = u.height() - 130, 
    //         e = u.width() - 45; 
    //         if (o.complex) 
    //             var t = u.height() - 45, e = u.width() - 45; 
    //         "without_model" != o.current.view || "man_suit2" != o.product_type && "man_smoking" != o.product_type && "man_levita" != o.product_type && "man_frac" != o.product_type && "man_chaque" != o.product_type || $(".add_to_cart").hasClass("visible") && (t *= .85); var i = t / e; p.width(); 
    //         if (o.complex) { 
    //             var r = (c = a(i, viewport[o.current.view].base.ratio, e, t)).width / viewport[o.current.view].base.w, n = viewport[o.current.view][d].h * r;
    //             if ("without_jacket" == o.current.view && 1 != o.current.config.waistcoat) 
    //                 { var s = d; d = "man_pants" } 
    //             c.top = -viewport[o.current.view][d].top * r, "without_jacket" == o.current.view && 1 != o.current.config.waistcoat && (d = s), c.top > 0 && (c.top = 0) 
    //         } else { 
    //             var c = a(i, viewport[o.current.view].base.ratio, e, t), r = c.width / viewport[o.current.view].base.w, n = viewport[o.current.view][d].h * r; 
    //             c.top = -viewport[o.current.view][d].top * r, n < t && (c.top += (t - n) / 2), c.top > 0 && (c.top = 0) 
    //         } 
    //         p.css(c), $("#shirt_initials_svg").css("top", c.top), o.top_original = c.top 
    //     }

    // });


    window.addEventListener("orientationchange", function () {
        checkOrientation();
    });
    /*
     * Author: Nathan Tran
     * Content: Handle related action to fabric
     */

    // Handle change fabric
    $('.fabric_list .fabric_thumb').click(function () {
        let fabric_id = $(this).find('.image').attr('id');
        let fabric = fabrics.find(fabric => fabric.code == fabric_id);
        
        $('#fabric_view_opt').attr('rel', fabric_id);
        $('#fabric_view_opt .price').html('$' + fabric.items.find(item => item.item_id == currentDesign.item_id).price);
        $('#fabric_view_opt .title').html(fabric.name);
        $('#fabric_view_opt .season').html(" - " + fabric.season.join('/'));
        $('#fabric_view_opt .texture').html(" - " + fabric.color.join('/'));
        $('#fabric_view_opt .material').html(fabric.material.join("/"));

        $('#fabric_view_opt #fabric_view_zoom').load(function() {
            $('#fabric_view_opt').addClass('visible')
        }).attr('src', fabric.detailed_img);
    });

    $('#fabric_view_opt .back').click(function () {
        $('#fabric_view_opt').removeClass('visible');
    })
    // Apply fabric
    $('.fabric_apply a').click(function () {
        let fabric_id = $(this).parent().parent().attr('rel');
        $('.fabric_list').find('.current').removeClass('current');
        $('.fabric_list .fabric_thumb[rel=' + fabric_id + "]").addClass('current');
        fabric = fabrics.find(fabric => fabric.code == fabric_id);
        currentDesign.fabric_id = fabric_id;

        products.forEach(product => {
            let productStyle = currentDesign.products.find(prod => prod.product_id == product.code);
            let styles = Object.keys(productStyle.style);
            let imgFabric = styleImg.find(image => image.fabric_id == fabric_id && image.product_id == product.code)
            styles.forEach(component_id => {
                let component = product.components.find(component => component.code == component_id);
                let componentImg;
                if (!!component.parentComponent) {
                    let parentStyle = productStyle.style[component.parentComponent];
                    componentImg = imgFabric.component_item.find(img => {
                        return img.item_id == productStyle.style[component_id] && img.parent_id == parentStyle
                    });
                    renderImage(component_id, componentImg, product.code);
                } else {
                    componentImg = imgFabric.component_item.find(img => img.item_id == productStyle.style[component_id]);
                    renderImage(component_id, componentImg, product.code);
                }
            });
        });
        //Close panel
        backToMain();
    });


    // Close panel when click backdrop panel
    $('#action_colum_desplaced').click(function () {
        backToMain();
    })

    
    slides_generator();

    $('#available_window .views li a').click(function (event) {
        event.preventDefault();
    });

    $('.favourite.with_add_to_cart').click(function() {
        $('.scroll_wrap').toggle();
    })

    // Handle open fabric filter
    $('.num_5 .filter').click(function () {
        $('.num_5 .filter.active').not(this).removeClass('active');
        $(this).toggleClass('active');
        type = $(this).attr('rel');
        $('.filters_content .content.active').not('.filters_content .content.' + type).removeClass('active')
        $(('.filters_content .content.' + type)).toggleClass('active')
        if ($('.num_5 .filter').hasClass('active')) {
            $('.fabric_list').addClass('double')
        } else {
            $('.fabric_list').removeClass('double')
        }
    });

    // Handle filter fabric
    $('.filter_button').click(function () {
        let counter = 0;
        $(this).toggleClass('active');
        let key = $(this).attr('data-type');
        let value = $(this).attr('rel');
        let index = filter_list[key].indexOf(value)
        if (index !== -1) {
            filter_list[key].splice(index, 1);
        } else {
            filter_list[key].push(value);
        }

        //execute filter fabric
        fabrics.forEach(fabric => {
            let flag = 0;
            Object.keys(filter_list).forEach(item => {
                if (filter_list[item].length == 0) {
                    flag++;
                } else {
                    let subFlag = false;
                    for (var subItem of fabric[item]) {
                        if (filter_list[item].indexOf(subItem) !== -1) {
                            subFlag = true;
                            break;
                        }
                    }
                    if (subFlag)
                        flag++;
                }
            })
            if (flag == Object.keys(filter_list).length) {
                counter++;
                $('.fabric_thumb[rel="' + fabric.code + '"]').addClass('active');
            } else {
                $('.fabric_thumb[rel="' + fabric.code + '"]').removeClass('active');
            }
        });
        if (counter == 0)
            $('#empty_list_fabric').addClass('active');
        else
            $('#empty_list_fabric').removeClass('active');
    })

    // Handle change config
    $('.list_option .drop_head').click(function () {
        if ($(this).parent().hasClass('active')) {
            $(this).parent().parent().find('.list_option.active').removeClass('active');
            $(this).parent().parent().find('.config_field').slideUp();
        } else {
            $(this).parent().parent().find('.list_option.active').removeClass('active');
            $(this).parent().parent().find('.config_field').slideUp();
            $(this).parent().addClass('active');
            $(this).parent().find('.config_field').slideDown();
        }
    });
    $('.garment_block .back').click(function () {
        backToMain();
    });

    $('.garment_block_config .config_block_title').click(function() {
        $('.garment_block_config .config_block').removeClass('visible');
        $(this).parent().addClass('visible');
        $('.garment_block_config .config_block_content').slideUp();
        $(this).parent().find('.config_block_content').slideDown();

    });

    // Handle change style in config
    $('.garment_block_config .box_opt_fix label').click(function () {
        $(this).parent().find('.active').removeClass('active');
        $(this).addClass('active');
        let component_id = $(this).parents('.list_option').attr('id');
        let componentItem_id = $(this).attr('id');
        let product_id = $(this).parents('.multiproduct').attr('id');

        let product = products.find(product => product.code == product_id);
        let productDesign = currentDesign.products.find(prod => prod.product_id == product_id);        

        // Set style to current design
        productDesign.style[component_id] = componentItem_id;
        // get all image by current fabric
        let imgFabric = styleImg.find(image => image.fabric_id == currentDesign.fabric_id  && image.product_id == product_id)

        let component = product.components.find(component => component.code == component_id);
        let componentImg;
        if (!!component.parentComponent) {
            let parentStyle = productDesign.style[component.parentComponent];
            componentImg = imgFabric.component_item.find(img => {
                return img.item_id == componentItem_id && img.parent_id == parentStyle
            });
            renderImage(component_id, componentImg, product_id);
        } else {
            componentImg = imgFabric.component_item.find(img => img.item_id == componentItem_id);
            renderImage(component_id, componentImg, product_id);
            let childComponent = product.components.find(component => component.parentComponent == component_id)
            if (!!childComponent) {
                componentImg = imgFabric.component_item.find(img => {
                    return img.item_id == productDesign.style[childComponent.code] && img.parent_id == productDesign.style[component_id]
                });
                renderImage(childComponent.code, componentImg, product_id);
            }
        }

        $('.scroll_wrap').hide();
        $('.scroll_wrap#'+product_id).show();
        $('.garment_block_config .navigate').addClass('visible');
    });

    $('.garment_block_config .navigate a').click(function (event) {
        event.preventDefault();
        $(this).parent().removeClass('visible')
        backToMain();
    })

    $('.garment_block_extra .box_opt_fix label').click(function () {
        $(this).parent().find('.checked').removeClass('checked');
        $(this).addClass('checked')
        if ($(this).attr('rel') == "1")
            $('.garment_block_extra #measure_form').slideUp()
        else
            $('.garment_block_extra #measure_form').slideDown()
    });

    // $('.garment_block_extra #measure_form select').change(function () {
    //     let selection = $(this).val();
    //     if ($(this).val() == 'NoSelect') {
    //         $('.garment_block_extra #measure_form input').each(function () {
    //             $(this).val('');
    //             $(this).css('border', '1px solid #dbdbdb')
    //         });
    //     } else {
    //         $('.garment_block_extra #measure_form input').each(function () {
    //             let item = $(this).attr('name');
    //             let value = size_json[selection][item];
    //             $(this).val(value);
    //             $(this).css('border', '1px solid #13bb18')
    //         });
    //     }
    // })

    //Handle validate measurement
    $('.garment_block_extra #measure_form input').keyup(function () {
        let input = $(this)
        let value = +$(this).val()
        if (isNaN(value) || value <= 0) {
            input.css('border', '1px solid #ff0000')
        }
        else
            input.css('border', '1px solid #13bb18')
    });

    $('.action .add_to_cart').click(function () {
        let measureVal = $('.garment_block_extra .box_opt_fix .checked').attr('rel')
        delete currentDesign.img;
        if (measureVal == "0")
            if (checkMeasurement()) {
                if(!pos) {
                    currentDesign.quantity = 1;
                } else {
                    url = '/api/orders/orderItem/' + pos
                }
                $.ajax({
                    type: 'POST',
                    data: JSON.stringify({
                        data: currentDesign
                    }),
                    contentType: 'application/json',
                    url: '/api/orders/orderItem',
                    success: function (data) {
                        window.location.href = '/checkout/cart'
                    },
                    error: function (error) {
                        console.log(error);
                    }
                });
            } else {
                alert('The measure form is not valid!')
                setContentByStep("measure");
            }
        else {
            currentDesign.quantity = 1;
            delete currentDesign.measure;
            if(!pos) {
                currentDesign.quantity = 1;
            } else {
                url = '/api/orders/orderItem/' + pos
            }
            $.ajax({
                type: 'POST',
                data: JSON.stringify({
                    data: currentDesign
                }),
                contentType: 'application/json',
                url: '/api/orders/orderItem',
                success: function (data) {
                    window.location.href = '/checkout/cart'
                },
                error: function (error) {
                    console.log(error);
                }
            });
        }
    })
});