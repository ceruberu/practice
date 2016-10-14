var get_pictures = function(searchTerm) {
  $.ajax({
    url: "https://api.imgur.com/3/gallery/search?q=" + encodeURI(searchTerm),
    headers: { "Authorization": "Client-ID e3776adbe9c5fb9" },
    success: function(response) {
      console.log(response)
      var x = response.data
    }
  })
}
//
 var y = get_pictures("baby deer")
// $('<IMG>').append(x.data.link);
