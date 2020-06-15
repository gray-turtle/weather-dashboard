var getCurrentWeather = function(city) {
  var apiUrl = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=b25ccab974b7cdb990c6c7ad3e93123b";
  
  fetch(apiUrl).then(function(response) {
    if (response.ok) {
      console.log("yay");
    } else {
      alert("Error: " + response.statusText);
    }
  }).catch(function(error) {
    alert("Unable to connect to database");
  });
}

getCurrentWeather("london");