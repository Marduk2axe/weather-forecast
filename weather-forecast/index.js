const currentWeather = {
  location: "Tbilisi",
  temperature: 15,
  weatherCondition: "snowy",
  date: "2022-04-12",
};

// function download() {
//   const temperature = document.getElementById("temperature");
//   const weatherCondition = document.getElementById("weatherCondition");
//   const date = document.getElementById("date");
//   const newdate = new Date(currentWeather.date);

//   temperature.innerText = currentWeather.temperature;
//   weatherCondition.innerText = currentWeather.weatherCondition;
//   date.innerText = newdate.getDate();
//   if (date.textContent < 10) {
//     date.textContent = "0" + date.textContent;
//   }
// }

// function loading() {
//   const icon = document.getElementById("icon");
//   const weatherCondition = document.getElementById("weatherCondition");
//   const newImg = document.createElement("img");
//   newImg.src = "./images/snowy.png";
//   newImg.className = "icon";
//   newImg.id = "icon";
//   newImg.alt = "snowy";
//   if (weatherCondition.textContent == "snowy") {
//     icon.replaceWith(newImg);
//   }
// }

// document.getElementById("btn").addEventListener("click", download);

// document.getElementById("btn").addEventListener("click", loading);

const newDate = document.createElement("span");
newDate.className = "date";
newDate.id = "date";

const newImg = document.createElement("img");
newImg.src = "./images/${currentWeather.weatherCondition}.png"; //не понял про динамический путь, пока так оставил
newImg.className = "icon";
newImg.id = "icon";
newImg.alt = "icon_weather";

const newTemperature = document.createElement("div");
newTemperature.className = "temperature";
newTemperature.id = "temperature";

const newWeatherCondition = document.createElement("span");
newWeatherCondition.className = "weather-description";
newWeatherCondition.id = "weatherCondition";

const date = document.getElementById("date");

const icon = document.getElementById("icon");

const temperature = document.getElementById("temperature");

const weatherCondition = document.getElementById("weatherCondition");

function draw() {
  const newdate = new Date(currentWeather.date);

  newDate.innerHTML = newdate.getDate();

  newTemperature.innerHTML = currentWeather.temperature;

  newWeatherCondition.innerHTML = currentWeather.weatherCondition;

  newImg.src = "./images/snowy.png"; //не понял про динамический путь, пока так оставил

  date.replaceWith(newDate);

  icon.replaceWith(newImg);

  temperature.replaceWith(newTemperature);

  weatherCondition.replaceWith(newWeatherCondition);

  if (newDate.textContent < 10) {
    newDate.textContent = "0" + newDate.textContent;
  }
}

document.getElementById("btn").addEventListener("click", draw);
