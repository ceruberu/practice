// dog라는 새로운 object를 만들어 작업하세요.
var dog = {};

// name과 location property를 만드세요.
dog.name = "까미";
dog.location = "동인천";
// party method를 만드세요.
dog.party = function(){
  console.log(this.name + "가 미친듯이 춤을 춥니다");
};
// party method에서 name property를 reference 하여 dog.party를 invoke 하면 “뽀삐가 미친 듯이 춤을 춥니다”라고 log 해주세요. (dog.name이 “뽀삐”인 경우)
// string data type을 저장할 favorite_food property를 만드세요.

dog.favorite_food = "고기";

// favorite_food property를 reference 하는 eat method를 define 하세요.

dog.hungry = true;
dog.eat = function(){
  this.hungry = false;
  console.log(this.hungry)
};


// hungry property를 만들고 true value를 assign 하세요.
// dog가 eat을 하면 hungry property를 false로 바꾸세요. (this를 사용하세요)

dog.go_to_park = function(){

  this.location = "Park";

    if(dog.hungry===true)
    {
        console.log("공원에가서 배가고파집니다")
            dog.hungry = true;
  } else {
      console.log("이미 배가고픕니다")
  }


};

var callDog = function() {console.log(dog)};
var eatDog = function() {dog.eat()};
var parkDog = function() {dog.go_to_park()};
$('#container').on('click', callDog);
$('#park').on('click',parkDog)
$('#eat').on('click',eatDog)



// dog의 location과 hungry property를 reference 하는 go_to_park method를 만드세요. go_to_park invoke 시 hungry property를 true로 그리고 location property를 ‘Park’로 바뀌도록 하세요.
