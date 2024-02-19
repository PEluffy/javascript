const button = document.getElementById("search-button");
const cityInput = document.getElementById("city-input");
const locationtext = document.getElementById("location");
const weatherText = document.getElementById("weather");
async function getData(cityName) {
  const promise = await fetch(
    `http://api.weatherapi.com/v1/current.json?key=acddaa3e2bf9492183780642241902&q=${cityName}&aqi=yes`
  );
  return await promise.json();
}
function isCold(temp) {
  return temp > 10 ? false : true;
}
const apiKey = button.addEventListener("click", async () => {
  const value = cityInput.value;
  const result = await getData(value);
  const temp = result.current.temp_c;

  locationtext.innerText = `${result.location.name}`;
  weatherText.innerText = `${temp} degree celcius ${
    isCold(temp) ? "🥶" : "🥵"
  }`;
  locationtext.style.color = "blue";
});
