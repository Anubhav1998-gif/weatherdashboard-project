import React from 'react'

const WeatherDisplay = ({currentWeather, forecast}) => {
  if (!currentWeather) return <p>Loading...</p>;


  return (
    <div className="weather-display">
      <h2>Current Weather in {currentWeather.name}</h2>
      <p>Temperature: {currentWeather.main.temp}°</p>
      

      <h3>5-Day Forecast</h3>
      <div className="forecast">
        {forecast.map((day, idx) => (
          <div key={idx} className="forecast-item">
            <p>{new Date(day.dt_txt).toLocaleDateString()}</p>
            <p>Temp: {day.main.temp}°</p>
            <p>{day.weather[0].description}</p>
          </div>
        ))}
      </div>
    </div>


  )
}

export default WeatherDisplay