var scrambled_poem = "roses red are bacon crispy i bacon love and is blue violets are"

var scrambled_arr = scrambled_poem.split(' ');

var reversed_arr = [];
var len = scrambled_arr.length;
var reverser = function (arg) {
// var (arg +"_new") = arg;
while (len !== 0) {
  scrambled_arr.pop(scrambled_arr.shift());

}

}

console.log(scrambled_arr);

reverser(scrambled_arr);
console.log(scrambled_arr_new);
