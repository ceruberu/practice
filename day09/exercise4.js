var input;
var $theme = $('theme');
while(!(input === "red" || input ===  "green" || input === "grey"))
{
input = prompt("asd");


}


$('#theme').css({
  "background-color" : input,
  "color" : input,
  // "border" : "1px solid " + input
  "border" : `1px solid ${input}`
})
