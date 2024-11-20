function updateWeather(response) {
  let temperatureElement = document.querySelector("#temprature");
  temperatureElement.innerHtml = searchInput.value;
}
function searchCity(city) {
  let apikey = "764t30of3bb7082cb08301ec7c1324a9";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}& units=metric`;
  axios.get(apiUrl).then(updateWeather);
}
function handleSearchSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-form-input");
  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = searchInput.value;
  searchCity(searchInput.value);
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);
