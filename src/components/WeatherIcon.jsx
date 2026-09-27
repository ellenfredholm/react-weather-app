import { getWeatherInfo } from "../utils/weatherCodes";

function WeatherIcon({ code }) {
    const { description, icon } = getWeatherInfo(code);

    return (
        <span className="weather-icon" role="img" aria-label={description}>{icon}</span>
    )
}

export default WeatherIcon