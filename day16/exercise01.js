$.ajax({
  method: "GET",
  url: 'http://api.openweathermap.org/data/2.5/weather?q=San%20Francisco&mode=json&units=imperial&APPID=50209915e0bb37dacb88e9ee4f70d10b',
  success: function(weather_data){
    console.log(weather_data)
  }
})

var to_be_run_on_server_response = function(weather_data){
  $('#container').append(weather_data.main.temp)
}

$.get('http://api.openweathermap.org/data/2.5/weather?q=San%20Francisco&mode=json&units=imperial&APPID=50209915e0bb37dacb88e9ee4f70d10b').success(to_be_run_on_server_response)
