
import React, { useState,useEffect } from 'react';
import Search from './Search';
import WeatherDisplay from './WeatherDisplay';
import Favorites from './Favorites';
import axios from 'axios';








const Maindashboard = () => {
  const [city, setCity] = useState(localStorage.getItem("lastCity") || "New York");
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [unit, setUnit] = useState("metric"); // Toggle Celsius/Fahrenheit

  const API_KEY = "af046ac3b932a6e4fc2742ea2dcd4c12";
  const JSON_SERVER_URL = "http://localhost:5000/favorites";

  useEffect(() => {
    fetchWeather(city);
    fetchFavorites();
    localStorage.setItem("lastCity", city);
  }, [city,unit]);

  const fetchWeather = async (city) => {
    try {
      const weatherRes = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${unit}&appid=${API_KEY}`
      );
      const forecastRes = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=${unit}&appid=${API_KEY}`
      );
      setCurrentWeather(weatherRes.data);
      setForecast(forecastRes.data.list.filter((_, idx) => idx % 8 === 0)); // Daily forecast
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };
  const fetchFavorites = async () => {
    const response = await axios.get(JSON_SERVER_URL);
    setFavorites(response.data);
  };

  const addFavorite = async (cityName) => {
    if (!favorites.some((fav) => fav.name === cityName)) {
      const response = await axios.post(JSON_SERVER_URL, { name: cityName });
      setFavorites([...favorites, response.data]);
    }
  };

  const removeFavorite = async (id) => {
    await axios.delete(`${JSON_SERVER_URL}/${id}`);
    setFavorites(favorites.filter((fav) => fav.id !== id));
  };

  const toggleUnit = () => {
    setUnit((prevUnit) => (prevUnit === "metric" ? "imperial" : "metric"));
  };

    
  
  return (
    <div className="dashboard">
    <Search setCity={setCity} />
    <button className="toggle-btn" onClick={toggleUnit}>
      Switch to {unit === "metric" ? "Fahrenheit" : "Celsius"}
    </button>
    <WeatherDisplay currentWeather={currentWeather} forecast={forecast} />
    <Favorites
      favorites={favorites}
      setCity={setCity}
      addFavorite={addFavorite}
      removeFavorite={removeFavorite}
    />
  </div>


    
  )
}

export default Maindashboard