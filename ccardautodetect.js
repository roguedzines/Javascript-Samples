
        $(document).ready(function() {
            if ($('.hic_box').length === 0) {
                $('<div class="hic_box"></div>').insertAfter('input#dwfrm_billing_paymentMethods_creditCard_number');
                $('<span class="hic_check"><img src="http://delivery.hiconversion.com/app/resource?external=dygiunE4Bk"></span>').insertBefore('.hic_box');
                var visareg = /^4[0-9]{12}(?:[0-9]{3})?$/;
                var visa = $('select#dwfrm_billing_paymentMethods_creditCard_type option:contains("Visa")');
                $('.formfield.cardnumber .value').on('change', 'input#dwfrm_billing_paymentMethods_creditCard_number', function() {
                    if ($('input#dwfrm_billing_paymentMethods_creditCard_number').val().match(visareg)) {
                        $('select#dwfrm_billing_paymentMethods_creditCard_type option:contains("Visa")').attr('selected', 'selected');
                        $('.hic_check').addClass('show-me');
                        $('.hic_box').css({
                            'background-image': 'url(https://www.lancome-usa.com/on/demandware.static/Sites-lancome_us-Site/-/default/dw17de53c5/images/creditcardoptions.gif)',
                            'background-position': '-66px 0px',
                            'width': '72px'
                        });
                    }

                });
            }
            var mcreg = /^5[1-5]\d{13,16}$/;
            $('.formfield.cardnumber .value').on('change', 'input#dwfrm_billing_paymentMethods_creditCard_number', function() {
                if ($('input#dwfrm_billing_paymentMethods_creditCard_number').val().match(mcreg)) {
                    $('select#dwfrm_billing_paymentMethods_creditCard_type option:contains("Master Card")').attr('selected', 'selected');
                    $('.hic_check').addClass('show-me');
                    $('.hic_box').css({
                        'background-image': 'url(https://www.lancome-usa.com/on/demandware.static/Sites-lancome_us-Site/-/default/dw17de53c5/images/creditcardoptions.gif)',
                        'background-position': '0px 0px',
                        'width': '65px',
                        'margin-left': '5px'
                    });
                }
            });


            var amexreg = /^3[47][0-9]{13}$/;
            $('.formfield.cardnumber .value').on('change', 'input#dwfrm_billing_paymentMethods_creditCard_number', function() {
                if ($('input#dwfrm_billing_paymentMethods_creditCard_number').val().match(amexreg)) {
                    $('select#dwfrm_billing_paymentMethods_creditCard_type option:contains("American Express")').attr('selected', 'selected');
                    $('.hic_check').addClass('show-me');
                    $('.hic_box').css({
                        'background-image': 'url(https://www.lancome-usa.com/on/demandware.static/Sites-lancome_us-Site/-/default/dw17de53c5/images/creditcardoptions.gif)',
                        'background-position': '-138px 0px',
                        'width': '65px'
                    });
                }
            });

            var discreg = /^6(?:011|5[0-9]{2})[0-9]{12}$/;
            $('.formfield.cardnumber .value').on('change', 'input#dwfrm_billing_paymentMethods_creditCard_number', function() {
                if ($('input#dwfrm_billing_paymentMethods_creditCard_number').val().match(discreg)) {
                    $('select#dwfrm_billing_paymentMethods_creditCard_type option:contains("Discover")').attr('selected', 'selected');
                    $('.hic_check').addClass('show-me');
                    $('.hic_box').css({
                        'background-image': 'url(https://www.lancome-usa.com/on/demandware.static/Sites-lancome_us-Site/-/default/dw17de53c5/images/creditcardoptions.gif)',
                        'background-position': '-195px 0px',
                        'width': '65px'
                    });
                }
            });

            var chinaupreg = /^62[0-5]\d{13,16}$/;
            $('.formfield.cardnumber .value').on('change', 'input#dwfrm_billing_paymentMethods_creditCard_number', function() {
                if ($('input#dwfrm_billing_paymentMethods_creditCard_number').val().match(chinaupreg)) {
                    $('select#dwfrm_billing_paymentMethods_creditCard_type option:contains("China UnionPay")').attr('selected', 'selected');
                    $('.hic_check').addClass('show-me');
                    $('.hic_box').css({
                        'background-image': 'url(https://www.lancome-usa.com/on/demandware.static/Sites-lancome_us-Site/-/default/dw17de53c5/images/creditcardoptions.gif)',
                        'background-position': '-266px 0px',
                        'width': '65px'
                    });
                }

            });

        });

        $(document).ajaxComplete(function() {
            if ($('.hic_box').length === 0) {
                $('<div class="hic_box"></div>').insertAfter('input#dwfrm_billing_paymentMethods_creditCard_number');
                $('<span class="hic_check"><img src="http://delivery.hiconversion.com/app/resource?external=dygiunE4Bk"></span>').insertBefore('.hic_box');
                var visareg = /^4[0-9]{12}(?:[0-9]{3})?$/;
                var visa = $('select#dwfrm_billing_paymentMethods_creditCard_type option:contains("Visa")');
                $('.formfield.cardnumber .value').on('change', 'input#dwfrm_billing_paymentMethods_creditCard_number', function() {
                    if ($('input#dwfrm_billing_paymentMethods_creditCard_number').val().match(visareg)) {
                        $('select#dwfrm_billing_paymentMethods_creditCard_type option:contains("Visa")').attr('selected', 'selected');
                        $('.hic_check').addClass('show-me');
                        $('.hic_box').css({
                            'background-image': 'url(https://www.lancome-usa.com/on/demandware.static/Sites-lancome_us-Site/-/default/dw17de53c5/images/creditcardoptions.gif)',
                            'background-position': '-66px 0px',
                            'width': '72px'
                        });
                    }

                });
            }
            var mcreg = /^5[1-5]\d{13,16}$/;
            $('.formfield.cardnumber .value').on('change', 'input#dwfrm_billing_paymentMethods_creditCard_number', function() {
                if ($('input#dwfrm_billing_paymentMethods_creditCard_number').val().match(mcreg)) {
                    $('select#dwfrm_billing_paymentMethods_creditCard_type option:contains("Master Card")').attr('selected', 'selected');
                    $('.hic_check').addClass('show-me');
                    $('.hic_box').css({
                        'background-image': 'url(https://www.lancome-usa.com/on/demandware.static/Sites-lancome_us-Site/-/default/dw17de53c5/images/creditcardoptions.gif)',
                        'background-position': '0px 0px',
                        'width': '65px',
                        'margin-left': '5px'
                    });
                }
            });


            var amexreg = /^3[47][0-9]{13}$/;
            $('.formfield.cardnumber .value').on('change', 'input#dwfrm_billing_paymentMethods_creditCard_number', function() {
                if ($('input#dwfrm_billing_paymentMethods_creditCard_number').val().match(amexreg)) {
                    $('select#dwfrm_billing_paymentMethods_creditCard_type option:contains("American Express")').attr('selected', 'selected');
                    $('.hic_check').addClass('show-me');
                    $('.hic_box').css({
                        'background-image': 'url(https://www.lancome-usa.com/on/demandware.static/Sites-lancome_us-Site/-/default/dw17de53c5/images/creditcardoptions.gif)',
                        'background-position': '-138px 0px',
                        'width': '65px'
                    });
                }
            });

            var discreg = /^6(?:011|5[0-9]{2})[0-9]{12}$/;
            $('.formfield.cardnumber .value').on('change', 'input#dwfrm_billing_paymentMethods_creditCard_number', function() {
                if ($('input#dwfrm_billing_paymentMethods_creditCard_number').val().match(discreg)) {
                    $('select#dwfrm_billing_paymentMethods_creditCard_type option:contains("Discover")').attr('selected', 'selected');
                    $('.hic_check').addClass('show-me');
                    $('.hic_box').css({
                        'background-image': 'url(https://www.lancome-usa.com/on/demandware.static/Sites-lancome_us-Site/-/default/dw17de53c5/images/creditcardoptions.gif)',
                        'background-position': '-195px 0px',
                        'width': '65px'
                    });
                }
            });

            var chinaupreg = /^62[0-5]\d{13,16}$/;
            $('.formfield.cardnumber .value').on('change', 'input#dwfrm_billing_paymentMethods_creditCard_number', function() {
                if ($('input#dwfrm_billing_paymentMethods_creditCard_number').val().match(chinaupreg)) {
                    $('select#dwfrm_billing_paymentMethods_creditCard_type option:contains("China UnionPay")').attr('selected', 'selected');
                    $('.hic_check').addClass('show-me');
                    $('.hic_box').css({
                        'background-image': 'url(https://www.lancome-usa.com/on/demandware.static/Sites-lancome_us-Site/-/default/dw17de53c5/images/creditcardoptions.gif)',
                        'background-position': '-266px 0px',
                        'width': '65px'
                    });
                }

            });

        });
