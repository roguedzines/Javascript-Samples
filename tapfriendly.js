$(document).ready(function() {
    console.log(5);
    var buttonminus = $('<button type="button" class="hic_minusbutton">-</button>');
    var buttonadd = $('<button type="button" class="hic_addbutton">+</button>');
    var count = 1;
    buttonadd.on('click', function() {
        var select = $(this).parent().find('select');
        var prevVal = select.val();
        var newVal = parseInt(prevVal) + 1;
        if (select.find('option[value=' + newVal + ']').length) {
            select.val(newVal).trigger('change');
            count++;
        }
    });
    buttonminus.on('click', function() {
        var select = $(this).parent().find('select');
        var prevVal = select.val();
        var newVal = parseInt(prevVal) - 1;
        if (select.find('option[value=' + newVal + ']').length) {
            select.val(newVal).trigger('change');
        }

    });
    $('.styledSelect').after(buttonadd);
    $('.styledSelect').after(buttonminus);
});
