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

function loading() {
  const icon = document.getElementById("icon");
  const weatherCondition = document.getElementById("weatherCondition");
  const newImg = document.createElement("img");
  newImg.src = "./images/snowy.png";
  newImg.className = "icon";
  newImg.id = "icon";
  newImg.alt = "snowy";
  if (weatherCondition.textContent == "snowy") {
    icon.replaceWith(newImg);
  }
}

document.getElementById("btn").addEventListener("click", download);

document.getElementById("btn").addEventListener("click", loading);
