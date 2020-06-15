var currentWeatherEl = document.querySelector("#current-cast");
var cityInputEl = document.querySelector("#citySearch");
var userFormEl = document.querySelector("#city-search");

var formSubmitHandler = function(event) {
  event.preventDefault();

  var cityName = cityInputEl.value.trim();

  if (cityName) {
    getCurrentWeather(cityName);
  } else {
    alert("please enter a valid city name");
  }
}

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

  currentWeatherEl.textContent = "";

  var weatherEl = document.createElement("div");
  weatherEl.classList = "list-item flex-row justify-space-between";

  var headerEl = document.createElement("h2");
  headerEl.innerHTML = "<span>" + cityInputEl.value.trim().toUpperCase() + "</span>";

  var mainEl = document.createElement("span");
  mainEl.classList = "flex-row align-center";

  mainEl.innerHTML = 
  "<i>temp: " + Math.floor(((weather.main.temp - 273.15) * (9/5) + 32)) + " degrees fahreneheit</i></br>"
  + "<i>Humidity: " + weather.main.humidity + "</i></br>"
  + "<i>Wind Speed: " + weather.wind.speed + "</i>";

  weatherEl.appendChild(headerEl);

  weatherEl.appendChild(mainEl);

  currentWeatherEl.appendChild(weatherEl);
}

userFormEl.addEventListener("submit", formSubmitHandler);