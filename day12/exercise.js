
var callback = function () {
  beeper()
};
var beeper = function () {
  $('#target').append("<p>beep</p>")
}




$('button').on('click', callback)
