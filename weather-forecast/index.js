const currentWeather = {
  location: "Tbilisi",
  temperature: 15,
  weatherCondition: "snowy",
  date: "12-04-2022",
};

function download() {
  const l = document.getElementById("location");
  const t = document.getElementById("temperature");
  const w = document.getElementById("weatherCondition");
  const d = document.getElementById("date");

  l.lastChild.replaceWith(currentWeather.location);
  t.lastChild.replaceWith(currentWeather.temperature);
  w.lastChild.replaceWith(currentWeather.weatherCondition);
  d.lastChild.replaceWith(currentWeather.date);
}

document.getElementById("btn").addEventListener("click", download);

// function download() {
//   document.getElementById("location").replaceWith(currentWeather.location);
//   document
//     .getElementById("temperature")
//     .replaceWith(currentWeather.temperature);
//   document
//     .getElementById("weatherCondition")
//     .replaceWith(currentWeather.weatherCondition);
//   document.getElementById("date").replaceWith(currentWeather.date);
// }

// document.getElementById("btn").addEventListener("click", download);
