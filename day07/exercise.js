var text = window.location.search.split('=')[1]
var x = decodeURIComponent(text);
text = text.replace(/\+/g, "");



var response, image_path;
var secret_saying = document.querySelector('#message').textContent;


if (text === "독수리는 자정에 날라갑니다") {
  response = "통과하세요"
  image_path = "open_door.jpeg"
} else {
  response = "적이다 공격하라"
  image_path = "attack.jpeg"
}

document.querySelector('#result').textContent = response;
document.querySelector('img').src = image_path;
