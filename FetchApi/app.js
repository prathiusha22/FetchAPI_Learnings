document.getElementById('submitButton').addEventListener('click', function () {
    var city = document.getElementById('cityInput').value;
    const apikey = "25aad1cd62bf0a3e31e4ca4204da92a1";
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`;

    fetch(URL)
        .then(response => {
            return response.json();
        })
        .then(data => {
            console.log(data);
            const weatherDesc = data.weather[0].description;
            const maxTemp = (data.main.temp_max - 273.15).toFixed(2);
            const minTemp = (data.main.temp_min - 273.15).toFixed(2);
            document.getElementById("weatherDesc").innerText = `Weather in ${city}: ${weatherDesc}`;
            document.getElementById("temperature").innerText = `Max Temp: ${maxTemp}°C`;
            document.getElementById("temperature2").innerText= `Min Temp: ${minTemp}°C`;
            const windspeed=data.wind.speed;
            document.getElementById("windspeed").innerText=`WindSpeed: ${windspeed}`;
            const humidity=data.main.humidity;
            document.getElementById("humidity").innerText=`Humidity: ${humidity}`;
        })
        .catch(error => {
            console.error('Error while fetching data:', error);
            alert('Error!! City not found');
        });
});