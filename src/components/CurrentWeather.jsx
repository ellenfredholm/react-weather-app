import { getWeatherInfo } from "../utils/weatherCodes";
import WeatherIcon from "./WeatherIcon";

function CurrentWeather({ current, title }) {
    const { description } = getWeatherInfo(current.weather_code);

    return (
        <section className="current-weather">
            {title && <h2 className="current-title">{title}</h2>}
            <WeatherIcon code={current.weather_code} />
            <p className="current-temperature">
                {Math.round(current.temperature_2m)}°C
            </p>
            <p className="current-description">{description}</p>

            <div className="current-details">
            <p>
                <span className="detail-label">Feels like </span>
                <span className="detail-value">{Math.round(current.apparent_temperature)}°C</span>
            </p>
            <p>
                <span className="detail-label">Humidity </span>
                <span className="detail-value">{current.relative_humidity_2m}%</span>
            </p>
            <p>
                <span className="detail-label">Wind </span>
                <span className="detail-value">{Math.round(current.wind_speed_10m)} m/s</span>
            </p>
            </div>

        </section>
    )
}

export default CurrentWeather