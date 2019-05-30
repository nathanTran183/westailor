function setContentByStep(step) {
    $('.preview_fabric').css("display", "none");
    if (!step || (!!step && step == 'fabric')) {
        $('#available_window').addClass('fabric_step');
        $('.preview_fabric').addClass('fabric_step');
        $('#fabric').addClass('active');
        $('#config').removeClass('active');
        $('.step_inside').find('a.active').removeClass('active');
        $('.step_inside .fabric').addClass('active');
    } else if (step == 'config') {
        $('#available_window').removeClass('fabric_step');
        $('.preview_fabric').removeClass('fabric_step');
        $('#config').addClass('active');
        $('#fabric').removeClass('active');
        $('.step_inside').find('a.active').removeClass('active');
        $('.step_inside .config').addClass('active');
    }
    
}

function urlParam(name) {
    var results = new RegExp('[\?&]' + name + '=([^&#]*)')
        .exec(window.location.search);
    return (results !== null) ? results[1] || 0 : false;
}

$(document).ready(function () {    
    $(window).on('popstate', function () {
        setContentByStep(urlParam('step'));
    });
    setContentByStep(urlParam('step'));

    $('.fabric_container_lazy').perfectScrollbar();
    $('.container_options').perfectScrollbar();

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
    $('.step_next').click(function (event) {
        let step = urlParam('step');
        if (!step || step == 'fabric') {
            setContentByStep('config');
            window.history.pushState('next_step', '', '?step=config');
            step = urlParam('step');
        }
        else if (step == 'config') {
            window.location.href = 'http://www.google.com'
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

    // Handle resize model image
    $(window).resize(function () {
        // var t=$(window).height(), e= .54 *t 
        // $(".image_render .layers").css("width",e+"px")
        let t = $(window).width();
        let s = 233 - ((1440 - t) / 2)
                        
        if ($(window).width() > 1440) {
            $(".image_render .layers").css("left", "10%");    
            // $(".image_render .layers").css("width", 393 - (914-t)+"px");
            $(".image_render .layers").css("height", "100%");
            $(".image_render .layers").css("width", $(window).height()/3*2 + "px");
            // $(".image_render .layers").css("max-width", "90%");
        } else {
            // $(".image_render .layers").css("left", "10%");
            $(".image_render .layers").css("left",s+"px");
            $(".image_render .layers").css("height", "100%");
            $(".image_render .layers").css("width", $(window).height()/3*2 + "px");
            if ($(window).width() < 914 && $(window).width() > 860) {
                $(".image_render .layers").css("left", "0px");
                $(".image_render .layers").css("width", 393 - (914-t)+"px");
            } else if ($(window).width() <= 860) {
                $(".image_render .layers").css("left", "0px");
                
                $(".image_render .layers").css("width", 385 - (860-t)+"px");
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
        $('.preview_fabric .fabric img').attr('src', fabric.detailed_img);
        //TODO - Reload model image
    });
    // Handle change type of fabric
    $('.left_filters a').click(function (event) {
        event.preventDefault();
        $('.left_filters').find('.active').removeClass('active');
        $(this).parent().addClass('active');
        let title = $(this).children('.option_icon').attr('title');
        console.log(title)
        $('.filter_title.all_fabrics').html(title);
        //TODO - Reload list fabric in here 
    })

    // Handle change style
    $('#style_menu span').click(function (event) {
        let style = $(this).attr('class');
        $(this).parent().parent().parent().toggleClass('min');
        if ($(this).parent().parent().parent().hasClass('min')) {
            $('.box_opts').find('.active').removeClass('active');
            $('.box_opts').find('#' + style).addClass('active');
        } else {
            $('.box_opts').find('.active').removeClass('active');
        }

    });
    $('.back').click(function (event) {
        $(this).parent().removeClass('active');
        if ($(this).parent().parent().hasClass('box_opts')) {
            $('.sidebar-options').find('.min').removeClass('min');
        }
    });
});