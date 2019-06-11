function setContentByStep(step) {
    $('.preview_fabric').css("display", "none");
    if (!step || (!!step && step == 'fabric')) {
        $('#available_window').addClass('fabric_step');
        $('.preview_fabric').addClass('fabric_step');
        $('#fabric').addClass('active');
        $('#config').removeClass('active');
        $('#extra').removeClass('active');
        $('.step_inside').find('a.active').removeClass('active');
        $('.step_inside .fabric').addClass('active');
    } else if (step == 'config') {
        $('#available_window').removeClass('fabric_step');
        $('.preview_fabric').removeClass('fabric_step');
        $('#config').addClass('active');
        $('#fabric').removeClass('active');
        $('#extra').removeClass('active');
        $('.step_inside').find('a.active').removeClass('active');
        $('.step_inside .config').addClass('active');
    } else if (step == 'measure') {
        $('#available_window').removeClass('fabric_step');
        $('.preview_fabric').removeClass('fabric_step');
        $('#extra').addClass('active');
        $('#fabric').removeClass('active');
        $('#config').removeClass('active');
        $('.step_inside').find('a.active').removeClass('active');
        $('.step_inside .measure').addClass('active');
    }
}

function urlParam(name) {
    var results = new RegExp('[\?&]' + name + '=([^&#]*)')
        .exec(window.location.search);
    return (results !== null) ? results[1] || 0 : false;
}

function renderImage(component_id, componentImg) {
    if (!$('.images_render').find('#' + component_id).attr('src')) {
        if (imageRenderFlag && !!componentImg.img_url_front) {
            $('.images_render').append('<img src="' + componentImg.img_url_front + '" alt="front" id="' + component_id + '" class="front">')
            $('.images_render').append('<img src="' + componentImg.img_url_back + '" alt="back" id="' + component_id + '" class="back" style="display: none;">')
        }
        if (!imageRenderFlag && !!componentImg.img_url_back) {
            $('.images_render').append('<img src="' + componentImg.img_url_back + '" alt="back" id="' + component_id + '" class="back">')
            $('.images_render').append('<img src="' + componentImg.img_url_front + '" alt="front" id="' + component_id + '" class="front" style="display: none;">')
        }
    } else {
        if (!!componentImg.img_url_front) {
            $('.images_render .front#' + component_id).attr('src', componentImg.img_url_front)
        } else
            $('.images_render .front#'  + component_id).remove();
        if (!!componentImg.img_url_back)
            $('.images_render .back#' + component_id).attr('src', componentImg.img_url_back)
        else
            $('.images_render .back#' + component_id).remove();
    }
}

function checkMeasurement() {     
    let flag = true;
    $('#extra #measure_form input').each(function(){
        let input = $(this);        
        if(!!input.val() && input.val() > 0) {
            currentDesign.measure[`${input.attr('name')}`] = input.val();
        } else {
            flag = false;
            return flag;
        }
    });
    return flag;
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
    $('.container_options').perfectScrollbar({
        suppressScrollX: true
    });

    // Handle change step
    $('#link_fabric').click(function (event) {
        event.preventDefault();
        window.history.pushState('next_step', '', $(this).attr('href'));
        setContentByStep();
    });
    $('#link_configure').click(function (event) {
        event.preventDefault();
        setContentByStep('config');
        window.history.pushState('next_step', '', $(this).attr('href'));
    });
    $('#link_measure').click(function (event) {
        event.preventDefault();
        setContentByStep('measure');
        window.history.pushState('next_step', '', $(this).attr('href'));
    });
    $('.step_next').click(function (event) {
        let step = urlParam('step');
        if (!step || step == 'fabric') {
            setContentByStep('config');
            window.history.pushState('next_step', '', '?step=config');
            step = urlParam('step');
        }
        else if (step == 'config') {
            setContentByStep('measure');
            window.history.pushState('next_step', '', '?step=measure');
            step = urlParam('step');
        } else {
            if(checkMeasurement()) {
                currentDesign.quantity = 1;                
                $.ajax({
                    type: 'POST',
                    data: JSON.stringify({
                        data: currentDesign
                    }),
                    contentType: 'application/json',
                    url: '/api/order/orderItem',
                    success: function (data) {
                        window.location.href = '/checkout/cart'
                    },
                    error: function (error) {
                        console.log(error);
                    }
                });
            } else {
                alert('The measure form is not valid!')
            }
        }
    });

    // Handle view fabric detail
    $('.thumb_preview').click(function (event) {
        let fabric_id = $(this).parent().attr('id');
        fabric_view = fabrics.find(fabric => fabric.code == fabric_id);
        $('.preview_fabric .fabric img').attr('src', fabric_view.detailed_img);
        $('.preview_fabric').css("display", "block");
    });
    $('.fabric_detail').click(function () {
        $('.preview_fabric').css("display", "block");
    })

    $('.close').click(function (event) {
        $('.preview_fabric').css("display", "none");
    });

    $(".image_render .layers").css("left", "10%");
    // Handle resize model image
    $(window).resize(function () {
        let t = $(window).width();
        let s = 233 - ((1440 - t) / 2)

        if ($(window).width() > 1440) {
            $(".image_render .layers").css("left", "10%");
            $(".image_render .layers").css("height", "100%");
            $(".image_render .layers").css("width", $(window).height() / 3 * 2 + "px");
        } else {
            $(".image_render .layers").css("left", s + "px");
            $(".image_render .layers").css("height", "100%");
            $(".image_render .layers").css("width", $(window).height() / 3 * 2 + "px");
            if ($(window).width() < 914 && $(window).width() > 860) {
                $(".image_render .layers").css("left", "0px");
                $(".image_render .layers").css("width", 393 - (914 - t) + "px");
            } else if ($(window).width() <= 860) {
                $(".image_render .layers").css("left", "0px");
                $(".image_render .layers").css("width", 385 - (860 - t) + "px");
            }
        }
    });
    /*
     * Author: Nathan Tran
     * Content: Handle related action to fabric
     */

    // Handle change fabric
    $('.fabric_box .image').click(function () {
        $(this).parent().parent().find('.checked').removeClass('checked');
        $(this).parent().addClass('checked');
        let fabric_id = $(this).attr('id');
        fabric = fabrics.find(fabric => fabric.code == fabric_id);
        currentDesign.fabric = fabric_id;
        $('.preview_fabric .fabric img').attr('src', fabric.detailed_img);
        
        // Handle reload model image
        let styles = Object.keys(currentDesign.style);
        let imgFabric = styleImg.find(component => component.fabric_id == fabric_id)
        
        styles.forEach(component_id => {
            let component = components.find(component => component.code == component_id);
            let componentImg;
            if (!!component.parentComponent) {
                let parentStyle = currentDesign.style[component.parentComponent];
                componentImg = imgFabric.component_item.find(img => {
                    return img.item_id == currentDesign.style[component_id] && img.parent_id == parentStyle
                });
                renderImage(component_id, componentImg);
            } else {
                componentImg = imgFabric.component_item.find(img => img.item_id == currentDesign.style[component_id]);
                renderImage(component_id, componentImg);
            }    
        });
    });
    // Handle change type of fabric
    $('.left_filters a').click(function (event) {
        event.preventDefault();
        $('.left_filters').find('.active').removeClass('active');
        $(this).parent().addClass('active');
        let title = $(this).children('.option_icon').attr('title');
        $('.filter_title.all_fabrics').html(title);
        //TODO - Reload list fabric in here 
    })

    // Handle change config
    $('#style_menu span').click(function (event) {
        let style = $(this).attr('class');
        $(this).parent().parent().parent().addClass('min');
        $('.box_opts').find('.box_opt.active').removeClass('active');
        $(this).parent().parent().find('span.active').removeClass('active');
        $(this).addClass('active');
        $('.box_opts').find('#' + style).addClass('active');
    });
    $('.back').click(function (event) {
        $(this).parent().removeClass('active');
        if ($(this).parent().parent().hasClass('box_opts')) {
            $('.sidebar-options').find('.min').removeClass('min');
        }
    });

    // Handle change style
    $('.option_trigger').click(function () {
        $(this).parent().find('.active').removeClass('active');
        $(this).addClass('active');
        let component_id = $(this).parent().attr('id');
        let componentItem_id = $(this).attr('id');

        // Set style to current design
        currentDesign.style[component_id] = componentItem_id;
        // get all image by current fabric
        let imgFabric = styleImg.find(component => component.fabric_id == fabric.id)

        let component = components.find(component => component.code == component_id);
        let componentImg;
        if (!!component.parentComponent) {
            let parentStyle = currentDesign.style[component.parentComponent];
            componentImg = imgFabric.component_item.find(img => {
                return img.item_id == componentItem_id && img.parent_id == parentStyle
            });
            renderImage(component_id, componentImg);
        } else {
            componentImg = imgFabric.component_item.find(img => img.item_id == componentItem_id);
            renderImage(component_id, componentImg);
            let childComponent = components.find(component => component.parentComponent == component_id)
            if (!!childComponent) {
                componentImg = imgFabric.component_item.find(img => {
                    return img.item_id == currentDesign.style[childComponent.code] && img.parent_id == currentDesign.style[component_id]
                });
                renderImage(childComponent.code, componentImg);
            }
        }
    });

    $('#extra #measure_form select').change(function() {
        let selection = $(this).val();
        if($(this).val()=='NoSelect') {
            $('#extra #measure_form input').each(function(){
                $(this).val('');
                $(this).css('border','1px solid #dbdbdb')
            });
        } else {
            $('#extra #measure_form input').each(function(){
                let item = $(this).attr('name');
                let value = size_json[selection][item];
                $(this).val(value);
                $(this).css('border','1px solid #13bb18')
            });
        }

    })

    //Handle validate measurement
    $('#extra #measure_form input').change(function(event) {        
        if(isNaN(+$(this).val()) || +$(this).val() <= 0)
            $(this).css('border','1px solid #ff0000')
        else
            $(this).css('border','1px solid #13bb18')
    });

    // change view side (front or back)
    $('#available_window .num_3 a').click(function (e) {
        e.preventDefault();
        if (!$(this).parent().hasClass('active')) {
            $('#available_window .num_3').find('.active').removeClass('active');
            $(this).parent().addClass('active');
            $('.images_render .' + $(this).parent().attr('rel')).css('display', 'block');
            $('.images_render .' + ($(this).parent().attr('rel') == 'back' ? 'front' : 'back')).css('display', 'none');
            imageRenderFlag = !imageRenderFlag
        }
    });
});