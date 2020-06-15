var currentWeatherEl = document.querySelector("#current-cast");

var getCurrentWeather = function(city) {
  var apiUrl = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=b25ccab974b7cdb990c6c7ad3e93123b";
  
  fetch(apiUrl).then(function(response) {
    if (response.ok) {
      response.json().then(function(city) {
        displayWeather(city);
      });
    } else {
      alert("Error: " + response.statusText);
    }
  }).catch(function(error) {
    alert("Unable to connect to database");
  });
}

var displayWeather = function(weather) {
  var weatherEl = document.createElement("div");
  weatherEl.classList = "list-item flex-row justify-space-between";

  var mainEl = document.createElement("span");
  mainEl.classList = "flex-row align-center";

  mainEl.innerHTML = "temp: " + Math.floor(((weather.main.temp - 273.15) * (9/5) + 32)) + " degrees fahreneheit";

  weatherEl.appendChild(mainEl);

  currentWeatherEl.appendChild(weatherEl);
}

getCurrentWeather("london");