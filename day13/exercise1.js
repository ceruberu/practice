var bucket_list = [];
bucket_list[0] = "평생을 함께할 사랑을 찾기";
bucket_list[1] = "웃으며 죽기";

bucket_list.push("전국여행");
bucket_list.unshift("명작읽기","평생친구");
console.log(bucket_list[2])
console.log(bucket_list.length)
var dying_wish = bucket_list.pop();
var do_it_now = bucket_list.shift();
console.log(dying_wish);
console.log(do_it_now);
console.log(bucket_list.length)

var i = 0;
var append_strings = function(args) {
  for(var i = 0; i < args.length; i++)
  // $(arguments[i]).addClass(argument);
  console.log(args[i]);
}

var shendler_list = ["wat","the","???"]
// append_strings(bucket_list);
append_strings(shendler_list);

console.log(shendler_list[1])
