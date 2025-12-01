const api ="180dc03ea319979d8a0e5e2c0a4d8189"; //ADD YOUR API_KEY HERE

async function getWeather() {
    const city = document.getElementById("city").value;
    if(!city) {alert("Enter city name!"); return; }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api}&units=metric`;

    const res = await fetch(url);
    if(!res.ok) {
        document.getElementById("result").innerHTML = "City not found 😥";
        return;
    }

    const data = await res.json();

    document.getElementById("result").innerHTML = `
    <div class="temp">${Math.round(data.main.temp)}&deg;C</div>
    <div class="desc">${data.weather[0].description}</div>
    <div>Humidity: ${data.main.humidity}%</div>
    <div>Wind: ${data.wind.speed} m/s</div> `;
}
