function checkTotalPrice() {
    $('.bag_total .price').html('$' + total_price);
    if (total_price > 500) ship_fee = 0;else ship_fee = 15;
    $('.shipping .price').html('$' + ship_fee);
    total_cart = ship_fee + total_price;
    $('.final_total .price').html('$' + total_cart);
}

$(document).ready(function () {

    cart.forEach(item => {
        total_price += item.price * item.quantity;
    });
    checkTotalPrice();

    $('.cart_modify_product.cart_delete_product').click(function () {
        let item_id = $(this).parent().parent().attr('id').split("item_")[1];
        let selection = confirm("Do you want to remove this item from shopping cart?");
        if (selection == true) {
            $.ajax({
                type: 'POST',
                contentType: 'application/json',
                url: '/api/orders/removeItem/' + item_id,
                success: function (data) {
                    window.location.href = '/checkout/cart';
                },
                error: function (error) {
                    console.log(error);
                }
            });
        }
    });

    //Update item quantity
    $('.update_quantity .update_q.more').click(function (event) {
        event.preventDefault();
        let quantity = +$(this).parent().parent().find('[name="quantity"]').val();
        quantity++;
        $(this).parent().parent().find('[name="quantity"]').val(quantity);
        let item_id = $(this).parents('.options').attr('id');
        let item_price = cart[item_id.split('item_')[1]].price;
        $(this).parents('.product_info').find('.title span.price').html('$' + item_price * quantity);

        total_price += item_price;
        checkTotalPrice();
        $(this).parent().parent().find('.submit_quantity').show();
    });
    $('.update_quantity .update_q.less').click(function (event) {
        event.preventDefault();
        let quantity = +$(this).parent().parent().find('[name="quantity"]').val();
        if (quantity > 1) {
            quantity--;
            $(this).parent().parent().find('[name="quantity"]').val(quantity);
            // Update price
            let item_id = $(this).parents('.options').attr('id');
            let item_price = cart[item_id.split('item_')[1]].price;
            $(this).parents('.product_info').find('.title span.price').html('$' + item_price * quantity);

            //Update total price
            total_price -= item_price;
            checkTotalPrice();
            $(this).parent().parent().find('.submit_quantity').show();
        }
    });
    $(".more_units_form .submit-form").click(function () {
        $(this).parents('.update_quantity').submit();
    });
    $(".update_quantity").submit(function (e) {
        e.preventDefault();
        let form = $(this);
        let item_id = $(this).parents('.options').attr('id');
        let quantity = $(this).find('[name="quantity"]').val();
        $.ajax({
            type: "POST",
            url: '/api/orders/updateQuantity/' + item_id.split('item_')[1],
            data: {
                quantity: quantity
            },
            success: function (data) {
                form.find('.submit_quantity').hide();
                alert('Saved');
            },
            error: function (error) {
                console.log(error);
                form.find('.submit_quantity').hide();
            }
        });
    });

    //Display img
    $(".popup_link").click(function (event) {
        event.preventDefault();
        $('#product_preview iframe').attr('src', $(this).attr('data-href'));

        let index = $(this).attr('rel');
        $('#product_preview_mobile').empty();
        cart[index].products.forEach(product => {
            $('#product_preview_mobile').append('<img src="' + product.img + '" pagespeed_no_transform="">');
        });
        $('#product_preview_mobile').show();
    });

    $('#product_preview_mobile').click(function () {
        $('#product_preview_mobile').hide();
    });
});