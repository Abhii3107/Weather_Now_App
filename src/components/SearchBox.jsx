import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./SearchBox.css";
import { weatherCodeMap } from "./weatherCodeMap";

const SearchBox = ({ updateInfo }) => {
  const [city, setCity] = useState("");
  const [error, setError] = useState(false);

  const cord_API = "https://geocoding-api.open-meteo.com/v1/search";
  const weath_API = "https://api.open-meteo.com/v1/forecast";

  let getWeatherInfo = async () => {
    try {
      // Get coordinates
      let geoResponse = await fetch(`${cord_API}?name=${city}&count=1`);

      if (!geoResponse.ok) {
        throw new Error("City not found");
      }

      let geoData = await geoResponse.json();

      const { latitude, longitude, name } = geoData.results[0];

      // Get weather data
      let weatherResponse = await fetch(
        `${weath_API}?latitude=${latitude}&longitude=${longitude}&current_weather=true&daily=temperature_2m_max,temperature_2m_min&hourly=apparent_temperature,relativehumidity_2m&timezone=auto`
      );

      if (!weatherResponse.ok) {
        throw new Error("City not found");
      }

      let weatherData = await weatherResponse.json();

      //   console.log(`Weather in ${name}:`, weatherData);

      const result = {
        city: city,
        temp: weatherData.current_weather.temperature,
        humidity: weatherData.hourly.relativehumidity_2m[0],
        tempMin: weatherData.daily.temperature_2m_min[0],
        tempMax: weatherData.daily.temperature_2m_max[0],
        feelsLike: weatherData.hourly.apparent_temperature[0],
        weather:
          weatherCodeMap[weatherData.current_weather.weathercode] || "Unknown", // Open-Meteo gives a numeric code - so converting code into weather strings
      };
      return result;
    } catch (err) {
      throw err;
    }
  };

  let handleChange = (evt) => {
    setCity(evt.target.value);
  };

  let handleSubmit = async (event) => {
    event.preventDefault();
    try {
      console.log(city);
      setCity("");
      const newInfo = await getWeatherInfo();
      updateInfo(newInfo);
      setError(false); // reset error if success
    } catch (err) {
      console.error(err);
      setError(true);
    }
  };
  return (
    <div className="SearchBox">
      <form onSubmit={handleSubmit}>
        <TextField
          id="outlined-basic"
          label=" City Name"
          variant="outlined"
          required
          value={city}
          onChange={handleChange}
        />
        <br></br>
        <br></br>
        <Button variant="contained" type="submit">
          Search
        </Button>
        {error && <p style={{ color: "red" }}>No such place exists.</p>}
      </form>
    </div>
  );
};

export default SearchBox;
