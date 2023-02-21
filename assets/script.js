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
