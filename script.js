const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '***PUT YOUR OWN RAPID-API KEY***',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};

const getWeather = (city) => {
    cityName.innerHTML = city
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
        .then(response => response.json())
        .then((response) => {
            console.log(response)
            cloud_pct.innerHTML = response.cloud_pct
            feels_like.innerHTML = response.feels_like
            humidity.innerHTML = response.humidity
            humidity2.innerHTML = response.humidity
            max_temp.innerHTML = response.max_temp
            min_temp.innerHTML = response.min_temp
            sunrise.innerHTML = response.sunrise
            sunset.innerHTML = response.sunset
            temp.innerHTML = response.temp
            temp2.innerHTML = response.temp
            wind_degrees.innerHTML = response.wind_degrees
            wind_speed.innerHTML = response.wind_speed
            wind_speed2.innerHTML = response.wind_speed
        })
}

submitBtn.addEventListener("click", (e) => {
    e.preventDefault()
    getWeather(city.value)
})

getWeather('Bhubaneswar')

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Tokyo', options)
    .then(response => response.json())
    .then((response) => {
        console.log(response)
        tok_cloud_pct.innerHTML = response.cloud_pct
        tok_temp.innerHTML = response.temp
        tok_feels_like.innerHTML = response.feels_like
        tok_humidity.innerHTML = response.humidity
        tok_min_temp.innerHTML = response.min_temp
        tok_max_temp.innerHTML = response.max_temp
        tok_sunset.innerHTML = response.sunset
        tok_wind_speed.innerHTML = response.wind_speed
        tok_wind_degrees.innerHTML = response.wind_degrees
        tok_sunrise.innerHTML = response.sunrise

    })

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=London', options)
    .then(response => response.json())
    .then((response) => {
        console.log(response)
        lon_cloud_pct.innerHTML = response.cloud_pct
        lon_temp.innerHTML = response.temp
        lon_feels_like.innerHTML = response.feels_like
        lon_humidity.innerHTML = response.humidity
        lon_min_temp.innerHTML = response.min_temp
        lon_max_temp.innerHTML = response.max_temp
        lon_sunset.innerHTML = response.sunset
        lon_wind_speed.innerHTML = response.wind_speed
        lon_wind_degrees.innerHTML = response.wind_degrees
        lon_sunrise.innerHTML = response.sunrise

    })


fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Bangalore', options)
    .then(response => response.json())
    .then((response) => {
        console.log(response)
        ban_cloud_pct.innerHTML = response.cloud_pct
        ban_temp.innerHTML = response.temp
        ban_feels_like.innerHTML = response.feels_like
        ban_humidity.innerHTML = response.humidity
        ban_min_temp.innerHTML = response.min_temp
        ban_max_temp.innerHTML = response.max_temp
        ban_sunset.innerHTML = response.sunset
        ban_wind_degrees.innerHTML = response.wind_degrees
        ban_sunrise.innerHTML = response.sunrise
    })


fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Paris', options)
    .then(response => response.json())
    .then((response) => {
        console.log(response)
        par_cloud_pct.innerHTML = response.cloud_pct
        par_temp.innerHTML = response.temp
        par_feels_like.innerHTML = response.feels_like
        par_humidity.innerHTML = response.humidity
        par_min_temp.innerHTML = response.min_temp
        par_max_temp.innerHTML = response.max_temp
        par_sunset.innerHTML = response.sunset
        par_wind_speed.innerHTML = response.wind_speed
        par_wind_degrees.innerHTML = response.wind_degrees
        par_sunrise.innerHTML = response.sunrise

    })

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Egypt', options)
    .then(response => response.json())
    .then((response) => {
        console.log(response)
        egy_cloud_pct.innerHTML = response.cloud_pct
        egy_temp.innerHTML = response.temp
        egy_feels_like.innerHTML = response.feels_like
        egy_humidity.innerHTML = response.humidity
        egy_min_temp.innerHTML = response.min_temp
        egy_max_temp.innerHTML = response.max_temp
        egy_sunset.innerHTML = response.sunset
        egy_wind_speed.innerHTML = response.wind_speed
        egy_wind_degrees.innerHTML = response.wind_degrees
        egy_sunrise.innerHTML = response.sunrise
    })
