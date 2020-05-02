// User Inputs 90001
var input = document.querySelector(".form__input");
var button = document.querySelector(".form__button");

//Current weather data
var descriptions = document.querySelector(".card__descriptions");
var locationName = document.querySelector(".card__location");
var feelsLike = document.querySelector(".output__feelslike");
var humidity = document.querySelector(".output__humidity");
var temp = document.querySelector(".card__temp");
var wind = document.querySelector(".output__wind");
var icon = document.querySelector(".card__icon");
var dateTime = document.querySelector(".card__date");
var enterMsg = document.querySelector(".card__enter");

//3 days forcast
var dayOneDate = document.querySelector(".day1_date");
var dayOneIcon = document.querySelector(".day1_icon");
var dayOneTemp = document.querySelector(".day1_temp");
var dayTwoDate = document.querySelector(".day2_date");
var dayTwoIcon = document.querySelector(".day2_icon");
var dayTwoTemp = document.querySelector(".day2_temp");
var dayThreeDate = document.querySelector(".day3_date");
var dayThreeIcon = document.querySelector(".day3_icon");
var dayThreeTemp = document.querySelector(".day3_temp");
var forcastContainer = document.getElementById("hide2");

input.value = "30060";

button.addEventListener("click", function (name) {
  fetch(
    "https://cors-anywhere.herokuapp.com/https://api.openweathermap.org/data/2.5/forecast?zip=" +
      input.value +
      "&appid=1e12d953ad0dc8ff3a4f488ae456a976"
  )
    .then((res) => res.json())
    .then((data) => {
      forcastContainer.style.display = "flex";

      var location = data["city"]["name"];
      var tempCel = Math.round(data.list[0]["main"]["temp"] - 273.15);
      // var tempFah = Math.round(((data.main["temp"] - 273.15) * 9) / 5 + 32);
      var description1 = data.list[2]["weather"][0]["main"];
      var description2 = data.list[2]["weather"][0]["description"];
      var feels_Like = Math.round(data.list[0]["main"]["feels_like"] - 273.15);
      var humid = data.list[0]["main"]["humidity"] + "%";
      var windspeed = data.list[3]["wind"]["speed"] + " mph";
      var iconCode = data.list[2]["weather"][0].icon;
      var time = data["city"]["timezone"];
      var mytime = Math.floor(new Date().getTime() / 1000.0) + time;
      var mydate = new Date(mytime * 1000);
      var date = mydate.toGMTString();

      console.log(iconCode);

      weatherIcon(iconCode);
      var str = date;
      var stringArray = str.split(/\b\s+/);

      enterMsg.innerHTML = " ";
      temp.innerHTML = tempCel + "°C";
      locationName.innerHTML = location;
      descriptions.innerHTML = description1;
      feelsLike.innerHTML = feels_Like + "°C";
      humidity.innerHTML = humid;
      wind.innerHTML = windspeed;
      dateTime.innerHTML = stringArray[0] + " " + stringArray[1];

      //3 days forcast

      weatherDate(stringArray);

      var d1 =
        "http://openweathermap.org/img/wn/" +
        data.list[4]["weather"][0].icon +
        "@2x.png";
      dayOneIcon.innerHTML = "<img src=" + d1 + ">";

      var d2 =
        "http://openweathermap.org/img/wn/" +
        data.list[12]["weather"][0].icon +
        "@2x.png";
      dayTwoIcon.innerHTML = "<img src=" + d2 + ">";

      var d3 =
        "http://openweathermap.org/img/wn/" +
        data.list[12]["weather"][0].icon +
        "@2x.png";
      dayThreeIcon.innerHTML = "<img src=" + d3 + ">";

      var day1temp = Math.round(data.list[4]["main"]["temp"] - 273.15) + "°C";
      var day2temp = Math.round(data.list[12]["main"]["temp"] - 273.15) + "°C";
      var day3temp = Math.round(data.list[20]["main"]["temp"] - 273.15) + "°C";

      dayOneTemp.innerHTML = day1temp;
      dayTwoTemp.innerHTML = day2temp;
      dayThreeTemp.innerHTML = day3temp;
    })
    .catch((err) => alert("Invalid City name. Please try again"));
});

function weatherDate(date) {
  var str = date[0];
  var stringArray = str.split(",");

  if (stringArray[0] === "Fri") {
    dayOneDate.innerHTML = "Saturday";
    dayTwoDate.innerHTML = "Sunday";
    dayThreeDate.innerHTML = "Monday";
  } else if (stringArray[0] === "Sat") {
    dayOneDate.innerHTML = "Sunday";
    dayTwoDate.innerHTML = "Monday";
    dayThreeDate.innerHTML = "Tuesday";
  } else if (stringArray[0] === "Sun") {
    dayOneDate.innerHTML = "Monday";
    dayTwoDate.innerHTML = "Tuesday";
    dayThreeDate.innerHTML = "Wednesday";
  } else if (stringArray[0] === "Mon") {
    dayOneDate.innerHTML = "Tuesday";
    dayTwoDate.innerHTML = "Wednesday";
    dayThreeDate.innerHTML = "Thursday";
  } else if (stringArray[0] === "Tue") {
    dayOneDate.innerHTML = "Wednesday";
    dayTwoDate.innerHTML = "Thursday";
    dayThreeDate.innerHTML = "Friday";
  } else if (stringArray[0] === "Wed") {
    dayOneDate.innerHTML = "Thursday";
    dayTwoDate.innerHTML = "Friday";
    dayThreeDate.innerHTML = "Saturday";
  } else if (stringArray[0] === "Thurs") {
    dayOneDate.innerHTML = "Friday";
    dayTwoDate.innerHTML = "Saturday";
    dayThreeDate.innerHTML = "Sunday";
  }
}

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
      icon.innerHTML = "<img src='img/02d.svg'>";
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
}
