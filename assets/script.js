async function fetchApiGeoData(city) {
  let apiKey = "60d38292445dbe1a20b97c43b4fe3bd2";
  let apiObj = {};

  await fetch(
    `https://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${apiKey}`,
    {
      cache: "reload",
    }
  )
    .then((response) => response.json())
    .then((response) => (apiObj = response))
    .catch((err) => console.error(err));

  return apiObj;
}
// fetch current weather data based on latitude and longitude passed
async function fetchApiWeatherData(lat, lon) {
  let apiKey = "60d38292445dbe1a20b97c43b4fe3bd2";
  let apiObj = {};

  await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=${apiKey}`
  )
    .then((response) => response.json())
    .then((response) => (apiObj = response))
    .catch((err) => console.error(err));

  return apiObj;
}
// fetch 5 day forecast weather data based on latitude and longitude passed
async function fetchApiForecastData(lat, lon) {
  let apiKey = "60d38292445dbe1a20b97c43b4fe3bd2";
  let apiObj = {};

  await fetch(
    `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=imperial&appid=${apiKey}`
  )
    .then((response) => response.json())
    .then((response) => (apiObj = response))
    .catch((err) => console.error(err));

  return apiObj;
}
