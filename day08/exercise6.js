var n = 1;
var string = "";

while ( n <= 100 ) {
  if (n % 3 === 0 && n % 5 === 0) {
    string += "<div class=\"fizzbuzz\">FizzBuzz<div>";
  } else if (n % 3 === 0) {
    string += "<div class=\"fizz\">Fizz</div>";
  } else if (n % 5 === 0) {
    string += "<div class=\"buzz\">Buzz</div>";
  } else {
    string += "<div>"+ n+"</div>";
  }
  n++;
}

document.querySelector("#target").innerHTML= string;
