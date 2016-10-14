var my_dream_life = {};
var property_key = 'Job';
my_dream_life[property_key] = ["PROGRAMING?","HAPPYLIFE"]
var another_property_key = 'Salary';
my_dream_life[another_property_key] = ["DONT STARVE", "SUSTAINING"]
console.log(my_dream_life[property_key]);
console.log(my_dream_life[another_property_key]);

my_dream_life[another_property_key] = my_dream_life[another_property_key].join(" ");

console.log(my_dream_life[another_property_key]);
//
// for (var key in my_dream_life) {
//  if (key === "Salary") {
//    $('div').append(my_dream_life[key])
//  }
// }
