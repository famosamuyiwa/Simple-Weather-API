

const cityName = document.getElementById('city-name')
const weatherType = document.getElementById("weather-type")
const temps = document.querySelectorAll("#weather-output span")

// API_KEY for maps api
let API_KEY = "a8e71c9932b20c4ceb0aed183e6a83bb";

getWeatherData = (city) => {
  const URL = "https://api.openweathermap.org/data/2.5/weather";
  const weatherURL = `${URL}?q=${city}&appid=${API_KEY}&units=imperial`

  return fetch(weatherURL)
    .then(response => response.json())
    .then(json => json)
    .catch(err => console.error(err))
}


const searchCity = async () => {
  const city = document.getElementById('city-input').value;
  const data = await getWeatherData(city)
  showWeatherData(data)
}

const showWeatherData = (weatherData) => {
  cityName.innerText = weatherData.name
  weatherType.innerText = weatherData.weather[0].main
  temps.forEach(temp => {
    if (temp.getAttribute("id") == "temp") {
      temp.innerText = weatherData.main.temp
    }
    else if (temp.getAttribute("id") == "min-temp") {
      temp.innerText = weatherData.main.temp_min
    }
    else if (temp.getAttribute("id") == "max-temp") {
      temp.innerText = weatherData.main.temp_max
    }
    else {
      return
    }
  })
}

