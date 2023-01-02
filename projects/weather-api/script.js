let weatherUnit = "metric";
let apiKEY = "4ad75295d9974d6f743446c8efa1b48d";
let degreeSymbol = "°";
let icon;

function getUnit() {
  weatherUnit = document.getElementById("weather-unit-select").value;
}

function getWeatherData() {
  let city = document.getElementById("weather-of-city").value;
  if (city.length == 0) {
    alert("ERROR!! Please input a city name");
  } else if (weatherUnit == "metric") {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
        city +
        "&units=" +
        weatherUnit +
        "&appid=" +
        apiKEY
    )
      .then((data) => data.json())
      .then((data) => {
        icon = data.weather.icon;
        document.getElementById("city-name-display").innerText = data.name;
        document.getElementById("temperature").innerText = data.main.temp;
        document.getElementById("unit-symbol").innerText = degreeSymbol + "C";
        document.getElementById("weather-type").innerText =
          data.weather[0].main;
        let src =
          "http://openweathermap.org/img/wn/" +
          data.weather[0].icon +
          "@2x.png";
        document.getElementById("weather-icon").setAttribute("src", src);
      });
  } else if (weatherUnit == "imperial") {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
        city +
        "&units=" +
        weatherUnit +
        "&appid=" +
        apiKEY
    )
      .then((data) => data.json())
      .then((data) => {
        document.getElementById("city-name-display").innerText = data.name;
        document.getElementById("temperature").innerText = data.main.temp;
        document.getElementById("unit-symbol").innerText = degreeSymbol + "F";
        document.getElementById("weather-type").innerText =
          data.weather[0].main;
        let src =
          "http://openweathermap.org/img/wn/" +
          data.weather[0].icon +
          "@2x.png";
        document.getElementById("weather-icon").setAttribute("src", src);
      });
  }
}
