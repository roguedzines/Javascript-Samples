 $('<div class="hic_option_container"></div>').insertAfter('#dmilist_Qty');
  var hic_options = $('.hic_option_container');

  var option = $("select#dmilist_Qty option");
  var hidedisabled = $("select#dmilist_Qty option:contains('CLICK FOR MORE')");
  if (hidedisabled) {
    hidedisabled.hide();
    hidedisabled.removeAttr('selected');
  }
  var optiontext = $("select#dmilist_Qty option").text();
  var optionselected = $("select#dmilist_Qty option:selected").attr('value');

  option.each(function() {
    var item = $(this);
    var optiontext = $(this).text();
    var optionvalue = $(this).attr('value');
    var disabled = $('.hic_type:contains("CLICK FOR MORE")');
    if (disabled) {
      disabled.parent().hide();

    }
    if ($(this).attr('selected')) {
      var testtext = $('<div class="hicoption testselected hic_price"><span class="hic_type">' + optiontext + '</span></div>').appendTo(hic_options);
    } else {
      var testtext = $('<div class="hicoption hic_price"><span class="hic_type">' + optiontext + '</span></div>').appendTo(hic_options);
    }

    var $siblings = testtext.siblings();

    testtext.each(function() {
      $(this).click(function() {

        $(this).addClass('testselected');
        if ($(this).siblings().hasClass('testselected')) {
          $(this).siblings().removeClass('testselected');
        }
        item.prop('selected', true);
        item.trigger('change');
      });
    });

  });
