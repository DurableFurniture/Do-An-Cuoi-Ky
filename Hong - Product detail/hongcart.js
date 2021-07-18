// Change Quantity

$('.minus').on('click', function (e) {
    e.preventDefault();
    var $this = $(this);
    var $input = $this.closest('div').find('input');
    var value = parseInt($input.val());

    if (value >= 1) {
        value = value - 1;
    } else {
        value = 0;
    }

    $input.val(value);
});

$('.add').on('click', function (e) {
    e.preventDefault();
    var $this = $(this);
    var $input = $this.closest('div').find('input');
    var value = parseInt($input.val());

    if (value <= 100) {
        value = value + 1;
    } else {
        value = 100;
    }

    $input.val(value);
});

// Set rates

var taxRate = 0.00;
var shippingRate = 15.00;
var fadeTime = 300;

// Assigns actions

$('.product-quantity input').change( function () {
    updateQuantity(this);
});

$('.product-remove a').click( function () {
    removeItem(this);
});

$('#hong-update-cart-button').click( function () {
    calculateSubtotal(this);
});

$('#hong-calculate-shipping-button').click( function () {
    recalculateCart(this);
})

// Sum up row totals

var subtotal = 0;

function calculateSubtotal() {
    $('.product-line').each( function () {
        subtotal += parseFloat($(this).children('.product-subtotal').text());
    });
}

// Recalculate cart

function recalculateCart() {

    calculateSubtotal();

    // Calculate totals
    var tax = subtotal * taxRate;
    var shipping = (subtotal > 0 ? shippingRate : 0);
    var total = subtotal + tax + shipping;

    // Update totals + shipping display

    $('.cart_totals').fadeOut(fadeTime, function() {
        $('#cart-subtotal').html(subtotal.toFixed(2));
        $('#cart-tax').html(tax.toFixed(2));
        $('#cart-shipping').html(shipping.toFixed(2));
        $('#cart-total').html(total.toFixed(2));
        if(total == 0){
            $('.proceed-to-checkout').fadeOut(fadeTime);
        }else{
            $('.proceed-to-checkout').fadeIn(fadeTime);
        }
        $('.cart_totals').fadeIn(fadeTime);
    });
}

// Update quantity

function updateQuantity(quantityInput) {

    // Calculate line price

    var productRow = $(quantityInput).parent().parent();
    var price = parseFloat(productRow.children('.product-price').text());
    var quantity = $(quantityInput).val();
    var linePrice = price * quantity;

    // Update line price display and recalculate cart totals

    productRow.children('product-line-price').each(function () {
        $(this).fadeOut(fadeTime, function () {
            $(this).text(linePrice.toFixed(2));
            recalculateCart();
            $(this).fadeIn(fadeTime);
        });
    });
}

// Remove item

function removeItem(removeButton) {

    // Remove row from DOM and reculculate cart

    var productRow = $(removeButton).parent().parent();
    productRow.slideUp(fadeTime, function () {
        productRow.remove();
        recalculateCart();
    });
}