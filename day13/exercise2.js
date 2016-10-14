var scrambled_poem = "roses red are bacon crispy i bacon love and is blue violets are"

var scrambled_arr = scrambled_poem.split(' ');
console.log(scrambled_arr);
var unscrambled_arr = [];

var pop_arr = function () {
  unscrambled_arr.push(scrambled_arr.pop())
}
var shift_arr = function () {
  unscrambled_arr.push(scrambled_arr.shift())
}

var len_scramble = unscrambled_arr.length;
//
// while (len_scramble !== 0) {
//   if(len_scramble % 2 === 1 ) {
//     pop_arr();
//     console.log(scrambled_arr[len_scramble-1]);
//   } else {
//     shift_arr();
//     console.log(scrambled_arr[len_scramble-1]);
//   }
//   len_scramble--;
// }

pop_arr();
console.log(unscrambled_arr[unscrambled_arr.length - 1])
pop_arr();
console.log(unscrambled_arr[len_scramble-1])

pop_arr();

console.log(unscrambled_arr[len_scramble-1])
pop_arr();

console.log(unscrambled_arr[len_scramble-1])
pop_arr();
console.log(unscrambled_arr[len_scramble-1])
pop_arr();
console.log(unscrambled_arr[len_scramble-1])
pop_arr();
