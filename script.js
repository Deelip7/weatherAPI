// User Inputs 90001
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
var dateTime = document.querySelector(".card__date");
var enterMsg = document.querySelector(".card__enter");

button.addEventListener("click", function (name) {
  fetch(
    "https://cors-anywhere.herokuapp.com/https://api.openweathermap.org/data/2.5/weather?q=" +
      input.value +
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
      var time = data["timezone"];
      var mytime = Math.floor(new Date().getTime() / 1000.0) + time;

      var mydate = new Date(mytime * 1000);
      var date = mydate.toGMTString();

      console.log(date);

      var iconUrl = "http://openweathermap.org/img/wn/" + iconCode + ".png";

      temp.innerHTML = tempCel + "°C";
      locationName.innerHTML = location;
      descriptions.innerHTML = description1;
      humidity.innerHTML = "<strong>Humidity  </strong>- " + humid;
      wind.innerHTML = "<strong>Wind </strong>- " + windspeed;
      feelsLike.innerHTML =
        "<strong>Feels Like </strong>- " + feels_Like + "°C";
      dateTime.innerHTML = date;
      enterMsg.innerHTML = " ";
      input.value = "";

      // icon.innerHTML = "<img src='" + iconUrl + "'>";
    })
    .catch((err) => alert("Invalid City name. Please try again"));
});

function weatherIcon(code) {
  switch (code) {
    case "01d":
      icon.innerHTML = "<img src='img/01d.svg'>";
      break;
    case "01n":
      icon.innerHTML = "<img src='img/01n.svg'>";
      break;
    case "02d":
    case "02n":
      icon.innerHTML = "<img src='img/02d.png'>";
      break;
    case "03d":
    case "03n":
      icon.innerHTML = "<img src='img/03d.svg'>";
      break;
    case "04d":
    case "04n":
      icon.innerHTML = "<img src='img/04d.svg'>";
      break;
    case "09d":
    case "09n":
      icon.innerHTML = "<img src='img/09d.svg'>";
      break;
    case "10d":
    case "10n":
      icon.innerHTML = "<img src='img/09d.svg'>";
      break;
    case "11d":
    case "11n":
      icon.innerHTML = "<img src='img/11d.svg'>";
      break;
    case "13d":
    case "13n":
      icon.innerHTML = "<img src='img/13d.svg'>";
      break;
    case "50d":
      icon.innerHTML = "<img src='img/50d.svg'>";
      break;
    case "50n":
      icon.innerHTML = "<img src='img/50n.svg'>";
      break;
    default:
      icon.innerHTML = "";
  }
  console.log(code);
}
