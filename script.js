// User Inputs
var input = document.querySelector(".weather-form__input");
var button = document.querySelector(".weather-form__button");

//API Values
var locationName = document.querySelector(".weather-output__location");
var description = document.querySelector(".weather-output__descriptions");
var temp = document.querySelector(".weather-output__temp");
var feelsLike = document.querySelector(".weather-output__feelslike");
var humidity = document.querySelector(".weather-output__humidity");
var wind = document.querySelector(".weather-output__wind");

fetch(
  "https://api.openweathermap.org/data/2.5/weather?zip=" +
    "11801" +
    "&appid=1e12d953ad0dc8ff3a4f488ae456a976"
)
  .then((res) => res.json())
  .then((data) => {
    var locationName = data["name"];
    // var tempCel = Math.round(data.main["temp"] - 273.15);
    // var tempFah = Math.round(((data.main["temp"] - 273.15) * 9) / 5 + 32);
    var tempCel = data.main["temp"];
    var tempFah = data.main["temp"];
    var description = data.weather[0]["main"];
    var description2 = data.weather[0]["description"];
    var feelsLike = data.main["feels_like"];
    var humidity = data.main["humidity"] + "%";
    var wind = data.wind["speed"] + "mph";

    console.log(
      locationName,
      tempCel,
      tempFah,
      description,
      description2,
      feelsLike,
      humidity,
      wind
    );
  });
