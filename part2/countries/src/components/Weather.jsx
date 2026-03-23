import { useState, useEffect } from 'react'
import axios from 'axios'

const Weather = ({ city }) => {
  const [weather, setWeather] = useState(null)
  const api_key = import.meta.env.VITE_WEATHER_KEY

  useEffect(() => {
    // Only fetch if we have a city and an API key
    if (city && api_key) {
        console.log('My key is:', import.meta.env.VITE_WEATHER_KEY)
      axios
        .get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${api_key}`)
        .then(response => {
          setWeather(response.data)
        })
        .catch(error => console.error('Weather fetch failed', error))
    }
  }, [city, api_key])

  if (!weather) return <p className="text-neutral-500 italic">Loading weather...</p>

  return (
    <div className="mt-8 p-6 bg-blue-50 rounded-2xl border border-blue-100 animate-in fade-in duration-700">
      <h3 className="text-2xl font-bold mb-4 text-blue-900">Weather in {city}</h3>
      <div className="flex items-center gap-4">
        <img 
          src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} 
          alt={weather.weather[0].description}
          className="bg-blue-200 rounded-full w-20 h-20 shadow-inner"
        />
        <div>
          <p className="text-3xl font-black text-blue-900">{Math.round(weather.main.temp)}°C</p>
          <p className="text-blue-700 font-medium capitalize">{weather.weather[0].description}</p>
        </div>
      </div>
      <div className="mt-4 text-blue-800 font-semibold">
        Wind: {weather.wind.speed} m/s
      </div>
    </div>
  )
}

export default Weather