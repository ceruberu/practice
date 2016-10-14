var n = 1;
var product = 1;

while ( n <= 10 ) {
  product = product * n
  n++;
}
n = n -1
n += ''
document.querySelector("#whatn").innerHTML = "n =" + n;
document.querySelector("#whatproduct").innerHTML = product;
