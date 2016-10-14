
var text = window.location.search.split('=')[1]
console.log(text)
var x = decodeURIComponent(text);
console.log(x)
text = text.replace(/\+/g, " ");
console.log(text)



var get_pictures = function(searchTerm) {
  $.ajax({
    url: "https://api.imgur.com/3/gallery/search?q=" + encodeURI(searchTerm),
    headers: { "Authorization": "Client-ID e3776adbe9c5fb9" },
    success: function(response) {
      $('<img>').attr('src', response.data[0].link).appendTo('body')
    }
  })
}

get_pictures(text);
