var new_sentence = "Hey";
var new_sentence2 = "Man";
var i = 0;
var y = Math.random();
console.log(y);



console.log(i);
var get_sentence = function() {
  var x = Math.round(Math.random());
  console.log(x);
  while (i !== 10) {
    if (x === 1) {
    $('p').append(new_sentence2)
  } else {
    $('p').append(new_sentence)
  }
  i++;
  var x = Math.round(Math.random());
}

};

get_sentence();
