const defaultLocationId = "611717";

function capitalizeFirstLetter(str) {
  return str[0].toUpperCase() + str.slice(1);
}

function getWeatherImageAtrributes(weatherCondition) {
  const path = `./images/${weatherCondition}.png`;
  const alt = `icon_${weatherCondition}`;
  const id = `icon-${weatherCondition}`;
  return { path, id, alt };
}

function getWeatherData(weather) {
  const {
    location: currentLocation,
    temperature: currentTemperature,
    weatherCondition: currentWeatherCondition,
    date: currentDate,
  } = weather;
  const location = capitalizeFirstLetter(currentLocation);
  const date = new Date(currentDate);
  const monthShort = date.toLocaleDateString("en-EN", { month: "short" });
  const weekDay = date.toLocaleDateString("en-EN", { weekday: "long" });
  const dateNumber = date
    .getDate()
    .toLocaleString("en-US", { minimumIntegerDigits: 2, useGrouping: false });
  const formattedDate = `${dateNumber} ${monthShort}`;
  const temperature = `${currentTemperature}`;
  const weatherCondition = capitalizeFirstLetter(currentWeatherCondition);
  const imageAttributes = getWeatherImageAtrributes(currentWeatherCondition);
  return {
    location,
    weekDay,
    formattedDate,
    temperature,
    weatherCondition,
    imageAttributes,
  };
}

function getCardElements() {
  return [
    "day-of-the-week",
    "date",
    "icon",
    "temperature",
    "weatherCondition",
  ].map((id) => document.getElementById(id));
}

function generateWeatherImage(imageAttributes) {
  const newImg = document.createElement("img");
  newImg.src = imageAttributes.path;
  newImg.className = "icon";
  newImg.id = imageAttributes.id;
  newImg.alt = imageAttributes.alt;
  return newImg;
}

function draw(weather) {
  const {
    location,
    weekDay,
    formattedDate,
    temperature,
    weatherCondition,
    imageAttributes,
  } = getWeatherData(weather);
  const [
    weekDayElement,
    dateElement,
    weatherImageElement,
    temperatureElement,
    weatherConditionsElement,
  ] = getCardElements();
  const weatherImage = generateWeatherImage(imageAttributes);

  weekDayElement.innerHTML = weekDay;
  dateElement.innerHTML = formattedDate;
  temperatureElement.innerHTML = temperature;
  weatherConditionsElement.innerHTML = weatherCondition;
  weatherImageElement.replaceWith(weatherImage);
}

const urlOpenWeather =
  "https://api.openweathermap.org/data/2.5/weather?id=611717&appid=1f31ffb5674932f2097e47581526ecad";

function sendRequest(method, url) {
  return new Promise((resolve, reject) => {
    const openWeatherRequest = new XMLHttpRequest();

    openWeatherRequest.open(method, url);

    openWeatherRequest.responseType = "json";

    openWeatherRequest.onload = () => {
      if (openWeatherRequest.status >= 400) {
        reject(openWeatherRequest.response);
      } else {
        resolve(openWeatherRequest.response);
      }
    };

    openWeatherRequest.onerror = () => {
      reject(openWeatherRequest.response);
    };

    openWeatherRequest.send();
  });
}

function fetchWeather() {
  sendRequest("GET", urlOpenWeather)
    .then((data) => {
      const temp = data.main.temp;
      const weather = {
        location: data.name,
        temperature: convertTemperature(temp),
        weatherCondition: data.weather[0].main,
        date: new Date(),
      };
      draw(weather);
    })
    .catch((err) => console.log(err));
}

function convertTemperature(value) {
  const C = value - 273.15;
  const X = Math.round(C);
  return X;
}

function returnConvertTemperature() {
  const value = document.getElementById("temperature");
  const amount = parseFloat(value.innerHTML);
  if (amount < 273) {
    const a = amount + 273.15;
    const b = Math.round(a);
    value.innerHTML = b + `K`;
  } else {
    const a = amount - 273.15;
    const b = Math.round(a);
    value.innerHTML = b;
  }
}

document.getElementById("btn").addEventListener("click", fetchWeather);
document
  .getElementById("temp-switch")
  .addEventListener("click", returnConvertTemperature);
