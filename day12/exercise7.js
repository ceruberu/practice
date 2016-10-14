$('input#type').on('keypress', function (event) {
  $('label').text(event.keyCode)
})

$('body').on('keypress', function(event){
  String.fromCharCode(event.keyCode)
})
