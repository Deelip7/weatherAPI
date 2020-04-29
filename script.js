// User Inputs
var input = document.querySelector(".form__input");
var button = document.querySelector(".form__button");

//API Values
var descriptions = document.querySelector(".card__descriptions");
var locationName = document.querySelector(".card__location");
var feelsLike = document.querySelector(".output__feelslike");
var humidity = document.querySelector(".output__humidity");
var temp = document.querySelector(".card__temp");
var wind = document.querySelector(".output__wind");
var icon = document.querySelector(".card__icon");

fetch(
  "https://api.openweathermap.org/data/2.5/weather?zip=" +
    "11801" +
    "&appid=1e12d953ad0dc8ff3a4f488ae456a976"
)
  .then((res) => res.json())
  .then((data) => {
    var location = data["name"];
    var tempCel = Math.round(data.main["temp"] - 273.15);
    // var tempFah = Math.round(((data.main["temp"] - 273.15) * 9) / 5 + 32);
    var description1 = data.weather[0]["main"];
    var description2 = data.weather[0]["description"];
    var feels_Like = Math.round(data.main["feels_like"] - 273.15);
    var humid = data.main["humidity"] + "%";
    var windspeed = data.wind["speed"] + " mph";
    var iconCode = data.weather[0].icon;
    var iconUrl = "http://openweathermap.org/img/wn/" + iconCode + ".png";

    temp.innerHTML = tempCel + "°C";
    locationName.innerHTML = location;
    descriptions.innerHTML = description1;
    humidity.innerHTML = "Humidity " + humid;
    wind.innerHTML = "Wind " + windspeed;
    feelsLike.innerHTML = "Feels Like " + feels_Like + "°C";
    icon.innerHTML = "<img src='" + iconUrl + "'>";
  });
