const apiKey = "2eb2ecb293510a389ca82eb2468a2eb9";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
  const response = await fetch(`${apiUrl + city}&appid=${apiKey}`);

  if (response.status === 404) {
    alert("City not found!");
    return;
  }

  const data = await response.json();
  console.log(data);

  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
  document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
  document.querySelector(".wind").innerHTML = data.wind.speed + " Km/h";
}
 


searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value.trim());
});

searchBox.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    checkWeather(searchBox.value.trim());
  }
});
