var n = 0
var string = ""

while ( n <= 20 ) {
  if ( n === 13 ) {
    string += "<p class=\"thirteen\">la-la-la, nothing to say here</p>"
  } else if ( n % 2 === 0 ) {
    string += "I like the number " + n + ", a nice even number."
  } else {
    string += "I like the number " + n + ", odd is okay too!"
  }
  n++;
}

document.querySelector("#target").innerHTML = string;
