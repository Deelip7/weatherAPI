fetch(
  "https://api.openweathermap.org/data/2.5/weather?zip=" +
    "11801" +
    "&appid=1e12d953ad0dc8ff3a4f488ae456a976"
)
  .then((res) => res.json())
  .then((data) => console.log(data));
