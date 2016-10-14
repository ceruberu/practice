// 아래의 정보들을 전해주는 간단한 일기예보 페이지를 만들어주세요.
//
// 현재 기온 hint: temp
// 오늘의 최대 기온과 최저기온 hint: temp_max, temp_min
// 현재 날씨 정보 hint: weather
// 바람 속도 hint: wind
// 해돋이와 일몰시간. hint: new Date(sys.sunrise * 1000)
// 유저들이 페이지 리로드 할 필요 없이 버튼 클릭이나 링크 클릭만으로 다른 지역의 일기예보도 보일 수 있게 해보겠습니다.
//
// 페이지 윗부분에 지역 이름 텍스트의 링크를 1개 이상 만들어주세요.

  $('a').on("click", function(event){
    event.preventDefault();

    var text = $(this).text();
    $('#container').empty();


    $.get(`http://api.openweathermap.org/data/2.5/
weather?q=${text}&mode=json&units=imperial&APP
ID=50209915e0bb37dacb88e9ee4f70d10b`)
// ${text} set variable inside *******
    .then(function(wea) {
      console.log(wea)
      $('#container').text (wea.main.temp);

    })
    $('#container').html ('<p> 로딩중입니다 </p>')

  });



// event.preventDefault()를 invoke 하여 브라우저가 페이지 새로 고침을 못하도록 click handler를 링크에 적용시켜주세요.
// 예)
// $( "a" ).click(function( event ) {
//
//   event.preventDefault();
//
//   // your code here
//
// });
// 링크/버튼 클릭 시 #container안의 내용들을 전부 지워주세요.
//
// 링크/버튼 클릭 시 유저에게 요청하신 데이터를 서버에서 가지고 오는 중이라고 알려주세요.
//
// 리크/버튼 클릭 시 데이터가 날씨 서버에서부터 response로 돌아오면 페이지에 보여주세요.
//

var getweather = $.get('http://api.openweathermap.org/data/2.5/weather?q=San%20Francisco&mode=json&units=imperial&APPID=50209915e0bb37dacb88e9ee4f70d10b');
