function checkTotalPrice() {
    $('.bag_price').html('$' + total_price)
    if (total_price - discount > 500)
        ship_fee = 0
    else
        ship_fee = 15
    $('.shipping_fee').html('$' + ship_fee)
    total_cart = ship_fee + total_price - discount;
    $('.total_price').html('$' + total_cart)
}

$(document).ready(function () {

    checkTotalPrice();

    $('.voucher_form').submit(function (e) {
        e.preventDefault();
        let code = $('.voucher_code').val();
        if (!!code) {
            $.ajax({
                type: "POST",
                url: '/api/discounts/check',
                data: {
                    code: code
                },
                success: function (data) {
                    $('.voucher_form').parent().find('label').remove();
                    $('.voucher_form').parent().append('<label style="color: green">Valid</label>')
                    $('.coupon').html("- $" + data.data.discount.percent * total_price / 100 + "(" + data.data.discount.percent + "%)")
                    discount = data.data.discount.percent * total_price / 100
                    checkTotalPrice()
                },
                error: function (error) {
                    console.log(error);
                    $('.voucher_form').parent().find('label').remove();
                    $('.voucher_form').parent().append('<label style="color: red">Code is invalid</label>')
                }
            });
        }
    });

    $('#btn_shipping').click(function (e) {
        $('#form_shipping').submit();
    })
})