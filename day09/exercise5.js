$('body').append('<div id="container"> </div>')
$('#container').append("<img>")
$("img").attr("src", "https://media.giphy.com/media/l0MYBwbLmqYAsGHqo/giphy.gif")
$("img").css({
  "display" : "inline-block",
  "width" : "100px",
  "height" : "100px"
})
$("img").animate({
  "width" : "500px",
  "height" : "500px"
}, 4000)
