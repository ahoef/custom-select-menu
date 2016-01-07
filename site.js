$(function() {

    /**
    * Select Box 0 - No JavaScript!
    */


    /**
    * Select Box 1 - Update the text of the styled overlay with 
    * the value selected 
    */
    $('#select-box-1 select').on('change', function(){
        $self=$(this);
        $('#select-box-1 .select-overlay span').text($self.val());
    });


    /**
    * Select Box 2 - Create a new list of options based on the list
    * of real <option> elements, and show it on click of the menu. 
    * Listen for clicks on the new options, close the menu, and 
    * update the value of the <select>. Also listen for clicks on 
    * the body to close the menu  
    */
    var $selectBox2 = $('#select-box-2 select'),
        $fakeSelect = $('.fake-select'),
        $list = $('.options'),
        numberOfOptions = $('#select-box-2 select').children('option').length;

    for (var i = 0; i < numberOfOptions; i++) {
        $('<li />', {
            text: $selectBox2.children('option').eq(i).text(),
            rel: $selectBox2.children('option').eq(i).val()
        }).appendTo($list);
    }

    var $listItems = $list.children('li');

    $fakeSelect.click(function (e) {
        e.stopPropagation();
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