const currentWeather = {
  location: "Tbilisi",
  temperature: 15,
  weatherCondition: "snowy",
  date: "12-04-2022",
};

function download() {
  const temperature = document.getElementById("temperature");
  const weatherCondition = document.getElementById("weatherCondition");
  const date = document.getElementById("date");

  temperature.innerText = currentWeather.temperature;
  weatherCondition.innerText = currentWeather.weatherCondition;
  date.innerText = currentWeather.date;
}

document.getElementById("btn").addEventListener("click", download);
