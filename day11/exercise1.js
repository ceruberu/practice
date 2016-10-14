

var tripler = function (x) {
  console.log(x *3)
 return x * 3;
}

var multiplier = function (x,y) {
  console.log( x*y)
  return x * y;
}

var divider = function (x,y) {
  return x / y;
}

var remainder = function (x,y) {
  return x % y;
}

console.log(remainder(divider(multiplier(tripler(3),12),2),3))
