import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";
import { Box, Typography } from "@mui/material";

export default function WeatherApp() {
  const [weatherInfo, setWeatherInfo] = useState({
    city: "Search a city...",
    feelsLike: "--",
    humidity: "--",
    temp: "--",
    temp_Max: "--",
    temp_Min: "--",
    weather: "N/A",
  });

  const updateInfo = (newInfo) => {
    setWeatherInfo(newInfo);
  };

  return (
    <Box
      sx={{
        textAlign: "center",
        minHeight: "100vh",
        background: "#e3f2fd",
        padding: "2rem",
      }}
    >
      <Typography variant="h4" gutterBottom>
        Weather App Data
      </Typography>
      <SearchBox updateInfo={updateInfo} />
      <InfoBox info={weatherInfo} />
    </Box>
  );
}
