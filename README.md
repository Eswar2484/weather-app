# 🌤️ Simple Weather App

A beginner‑friendly weather application built using **HTML, CSS, and JavaScript**. It fetches real‑time weather data from the **OpenWeatherMap API**.

---

## 🚀 Features

* Search weather by city name
* Shows:

  * Temperature (°C)
  * Weather description
  * Humidity
  * Wind speed
* Clean and simple UI
* Fully responsive
* Uses async/await fetch API

---

## 🛠️ Technologies Used

* **HTML5**
* **CSS3** (Glass effect UI)
* **JavaScript** (Fetch API)
* **OpenWeatherMap API**

---

## 📦 Project Structure

```
weather-app/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

---

## 🔑 Setup Your API Key

1. Go to **OpenWeatherMap**: [https://home.openweathermap.org/api_keys](https://home.openweathermap.org/api_keys)
2. Create a free account
3. Copy your API key
4. Replace this line in `script.js`:

```
const API_KEY = "YOUR_API_KEY";
```

⚠️ **Note:** It may take 15–30 minutes for a new API key to activate.

---

## ▶️ How to Run

1. Download or clone the project
2. Open `index.html` in a browser
3. Enter any city name (e.g., `Chennai`, `Delhi`, `Trichy`)
4. Get live weather instantly!

---

## ❗Common Issues & Fixes

### 1️⃣ City Not Found

* Your API key is not activated yet
* OR you forgot to replace `YOUR_API_KEY`
* OR wrong URL

### 2️⃣ No Response

* Internet connection required

---

## 📌 Example API URL

```
https://api.openweathermap.org/data/2.5/weather?q=chennai&appid=YOUR_API_KEY&units=metric
```

---

## 🧩 Future Improvements (Optional)

* Add weather icons
* Add loading animation
* Add error popup UI
* Display 5‑day forecast

---

## 💙 Credits

* Weather data from **OpenWeatherMap API**
* Developed by **Eswar** ✨
