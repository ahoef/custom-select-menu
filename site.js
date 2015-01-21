$(function() {

    // Select Box 1
      $('#select-box-1 select')
        .on('change', function(){
        $self=$(this);
        $('#select-box-1 .select-overlay span').text($self.val());
      });


    // Select Box 2
    var $selectBox2 = $('#select-box-2 select'),
        $fakeSelect = $('.fake-select'),
        $list = $('.options'),
        numberOfOptions = $('#select-box-2 select').children('option').length;

    // Show the first select option in the styled div
    // $fakeSelect.text($selectBox2.children('option').eq(0).text());

    for (var i = 0; i < numberOfOptions; i++) {
        $('<li />', {
            text: $selectBox2.children('option').eq(i).text(),
            rel: $selectBox2.children('option').eq(i).val()
        }).appendTo($list);
    }

    var $listItems = $list.children('li');

    $fakeSelect.click(function (e) {
        e.stopPropagation();
        $('.fake-select.active').each(function () {
            $(this).removeClass('active').next('ul.options').hide();
        });
        $(this).toggleClass('active').next('ul.options').toggle();
    });

    $listItems.click(function (e) {
        e.stopPropagation();
        $fakeSelect.text($(this).text()).removeClass('active');
        $selectBox2.val($(this).attr('rel'));
        $list.hide();
    });

    $(document).click(function () {
        $fakeSelect.removeClass('active');
        $list.hide();
    });
    
});