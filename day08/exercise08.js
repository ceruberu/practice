var n = 30;
var counter = 1;
var string = "";

while( counter <= n ) {
  if (counter !== n) {
    if (counter % 2 === 0) {
      string = string + "<p class=\"even\">" + counter + ", </p>"
    } else {
      string = string + "<p class=\"odd\">" + counter + ", </p>"
  }
} else {
  string = string + "<p class=\"even\">" + counter +"</p>";
}

counter += 1;
}

document.querySelector("#target").innerHTML = string;
