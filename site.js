$(function() {

  $('select')
    .on('change', function(){
    $self=$(this);
    $('.select-overlay span').text($self.val());
  });

});