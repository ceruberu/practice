var favorites = []

var famous = ['alex smith', 'amy whinehouse', 'cameron diaz', 'brad pitt',
  'ashton kutcher', 'mark whalberg', 'morgan freeman', 'mila kunis']

var obama_jobs = []

var politicos = {
  secretary_of_state: 'hillary clinton',
  potus: 'barack obama',
  flotus: 'michelle obama',
  vice_prez: 'joe biden',
  gov_of_california: 'jerry brown'
}
var famous_a = [];

for (var key in famous) {
  if (!!famous[key].match("a") === true){
  famous[key].push(famous_a);
  }
}
console.log(famous_a);
