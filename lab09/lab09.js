// Function to display weather data
function displayWeather(response) {
    if (response !== 'error') {
        const weatherData = JSON.parse(response);
        let temperature = weatherData.current.temperature_2m;
        let precipitation = weatherData.current.precipitation;
        let cloudCover = weatherData.current.cloudcover;

        // Update the DOM with weather data
        document.getElementById('precip').innerHTML = precipitation;
        document.getElementById('temp').innerHTML = temperature;

        // Display cloud cover emoji
        let cloudEmoji = cloudCover >= 50 ? '☁️' : '☀️';
        document.getElementById('cloud').innerHTML = cloudEmoji;
    } else {
        document.getElementById('temp').innerHTML = "Error loading weather data";
    }
}

// API endpoint for Syracuse, NY
let endpoint = 'https://api.open-meteo.com/v1/forecast?latitude=43.0481&longitude=-76.1474&current=temperature_2m,precipitation,cloud_cover&temperature_unit=fahrenheit&precipitation_unit=inch&wind_speed_unit=mph&forecast_days=1';

// STEP 1 - Create a Request Object
const request = new XMLHttpRequest();

// STEP 2 - Check the Status of the Request
request.addEventListener('readystatechange', () => {
    if (request.readyState === 4 && request.status === 200) {
        displayWeather(request.responseText);
    } else if (request.readyState === 4) {
        displayWeather('error');
    }
});

// STEP 3 - Open the Endpoint and Send the Request
request.open('GET', endpoint);
request.send();