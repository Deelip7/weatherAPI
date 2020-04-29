// User Inputs
var input = document.querySelector(".weather-form__input");
var button = document.querySelector(".weather-form__button");

//API Values
var locationName = document.querySelector(".weather-output__location");
var descriptions = document.querySelector(".weather-output__descriptions");
var temp = document.querySelector(".weather-output__temp");
var feelsLike = document.querySelector(".weather-output__feelslike");
var humidity = document.querySelector(".weather-output__humidity");
var wind = document.querySelector(".weather-output__wind");
var icon = document.querySelector(".weather-output__icon");

fetch(
  "https://api.openweathermap.org/data/2.5/weather?zip=" +
    "11801" +
    "&appid=1e12d953ad0dc8ff3a4f488ae456a976"
)
  .then((res) => res.json())
  .then((data) => {
    var location = data["name"];
    // var tempCel = Math.round(data.main["temp"] - 273.15);
    // var tempFah = Math.round(((data.main["temp"] - 273.15) * 9) / 5 + 32);
    var tempK = data.main["temp"];
    var description1 = data.weather[0]["main"];
    var description2 = data.weather[0]["description"];
    var feels_Like = data.main["feels_like"];
    var humid = data.main["humidity"] + "%";
    var windspeed = data.wind["speed"] + "mph";
    var iconCode = data.weather[0].icon;
    var iconUrl = "http://openweathermap.org/img/wn/" + iconCode + ".png";

    temp.innerHTML = tempK;
    locationName.innerHTML = location;
    descriptions.innerHTML = description2;
    humidity.innerHTML = humid;
    wind.innerHTML = windspeed;
    feelsLike.innerHTML = feels_Like;
    icon.innerHTML = "<img src='" + iconUrl + "'>";
  });
