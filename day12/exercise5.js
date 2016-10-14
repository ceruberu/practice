var el_finder = function(event){
  console.log("calling el_finder for:", this, event.target)
  $('div').removeAttr('id','active');
  $(this).attr('id', 'active');
}

$('div').on('click',el_finder)
