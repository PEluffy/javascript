const button = document.getElementById("click");
const temp = document.getElementById("temp");

button.addEventListener("click", async () => {
  console.log("clicked");
  navigator.geolocation.getCurrentPosition(
    async (postion) => {
      const data = await getData(
        postion.coords.latitude,
        postion.coords.longitude
      );
      console.log(data.current.temp_c);
      const temperature = data.current.temp_c;

      temp.innerText = `your current location temperature is ${temperature} degree celcius`;
      temp.style.color = "blue";
    },
    () => {
      alert("some issue");
    }
  );
});

async function getData(latitude, longitude) {
  const promise = await fetch(
    `http://api.weatherapi.com/v1/current.json?key=acddaa3e2bf9492183780642241902&q=${latitude},${longitude}&aqi=yes`
  );
  return await promise.json();
}
