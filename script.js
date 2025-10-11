const apiKey = "2eb2ecb293510a389ca82eb2468a2eb9";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weathericon = document.querySelector("weather-icon"); 


async function checkweather(city) {
  const response = await fetch(`${apiUrl + city}&appid=${apiKey}`);
  const data = await response.json();


if (data.weather(0).main ==)

  console.log(data);

  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
  document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
  document.querySelector(".wind").innerHTML = data.wind.speed + " Km/h";
}

searchBtn.addEventListener("click", () => {
  checkweather(searchBox.value);
});
