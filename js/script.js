const API_Key = "c5598d4c8c3289e2e963a16b6f64ed34";
const API_URL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");


async function checkWeather(city){
    const response = await fetch(API_URL + city + `&appid=${API_Key}`);
    var data = await response.json();

    console.log(data);
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) +"°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity+"%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/hr";
    document.querySelector(".max-min .max").innerHTML = "H: " + Math.round(data.main.temp_max) +"°C" ; 
    document.querySelector(".max-min .min").innerHTML = "L: " + Math.round(data.main.temp_min) +"°C" ; 
    document.querySelector(".feels-like").innerHTML = "Feels Like " + Math.round(data.main.feels_like) + "°C";
    
    if (data.weather[0].main = "Clouds"){
        weatherIcon.src = './images/images/clouds.png'
    } else if (data.weather[0].main = "Clear"){
        weatherIcon.src = './images/images/clear.png'
    } else if (data.weather[0].main = "Rain"){
        weatherIcon.src = './images/images/rain.png'
    } else if (data.weather[0].main = "Drizzle"){
        weatherIcon.src = './images/images/drizzle.png'
    } else if (data.weather[0].main = "Mist"){
        weatherIcon.src = './images/images/mist.png'
    }
}

searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
})

