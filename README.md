# 🌦️ React Weather App

A simple weather application built with **React** and **Open-Meteo API**.  
Users can search for a city and get real-time weather information like temperature, humidity, min/max temperature, feels like, and weather description.

---

## 🔗 Live Demo
👉 [Weather App on Vercel](https://weather-now-app-eight.vercel.app/)

---

## 🚀 Features
- 🌍 Search weather by city name using Open-Meteo Geocoding API.  
- 🌡️ Shows temperature, feels like, humidity, min/max values.  
- ☁️ Weather description converted from weather codes (e.g., cloudy, rainy, haze).  
- 🎨 UI styled with **Material UI** and custom CSS.  
- 🖼️ Dynamic images/icons depending on weather conditions.  
- 🚀 Deployed on **Vercel** for instant access.  

---

## 📂 Project Structure
src/
┣ components/
┃ ┣ InfoBox.css → Styling for weather card
┃ ┣ InfoBox.jsx → Weather info card (UI + icons + images)
┃ ┣ SearchBox.css → Styling for search form
┃ ┣ SearchBox.jsx → Input field + fetch weather logic
┃ ┣ WeatherApp.jsx → Main app logic (state + rendering)
┃ ┗ weatherCodeMap.js → Maps weather codes → text descriptions
┣ App.js → Root component
┣ index.js → Entry point


## 🛠️ Working of the Application

### 1. User Input
- User enters a **city name** in the search box and clicks **Search**.

### 2. Get City Coordinates
- The app sends a request to the **Open-Meteo Geocoding API**:  
https://geocoding-api.open-meteo.com/v1/search?name={city}&count=1


- This returns the city’s **latitude** and **longitude**.

### 3. Fetch Weather Data
- Using the coordinates, the app calls the **Open-Meteo Weather API**:  
https://api.open-meteo.com/v1/forecast?latitude={lat}&longitude={lon}&current_weather=true&daily=temperature_2m_max,temperature_2m_min&hourly=apparent_temperature,relativehumidity_2m&timezone=auto


- This provides:
- Current weather  
- Feels-like temperature  
- Humidity  
- Min/Max temperature  
- Weather code  

### 4. Convert Weather Code → Description
- Example mappings:  
- `0 = Clear Sky`  
- `2 = Cloudy`  
- `61 = Rain`  
- The app uses **`weatherCodeMap.js`** to map numeric codes into human-readable descriptions.

### 5. Display Results
- Info is passed to the **InfoBox** component.  
- Weather details are displayed inside a **Material UI Card**, with **icons/images changing dynamically** based on weather conditions.

---

## 🌐 APIs Used
- **Geocoding API** → Get city coordinates  
- **Weather Forecast API** → Get weather details (temperature, humidity, description)


## 📸 Example Output

Searching for **Delhi** might show:

Temperature = 23.41°C
Feels Like = 23.03°C
Humidity = 47%
Min Temp = 23.41°C
Max Temp = 23.41°C
Weather = Overcast Clouds

markdown
Copy code

---

## 📦 Dependencies

- **React**  
- **@mui/material**  
- **@mui/icons-material**  
- **@emotion/react**  
- **@emotion/styled**  

## ⚙️ Installation & Setup

1. **Clone the repository:**
```bash
git clone https://github.com/your-username/react-weather-app.git
cd react-weather-app
Install dependencies:

2. **Install dependencies:**
npm install


3. **Run the app:**
npm run dev

4. **Open in browser:**
http://localhost:5173