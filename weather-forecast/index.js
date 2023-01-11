const currentWeather = {
  location: "Tbilisi",
  temperature: 15,
  weatherCondition: "snowy",
  date: "2022-04-12",
};

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
  const temperature = `${currentTemperature}˚`;
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

function draw() {
  const {
    location,
    weekDay,
    formattedDate,
    temperature,
    weatherCondition,
    imageAttributes,
  } = getWeatherData(currentWeather);
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

document.getElementById("btn").addEventListener("click", draw);
