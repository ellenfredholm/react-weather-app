import WeatherIcon from "./WeatherIcon";

function HourlyForecast({ hourly }) {

    return (
        <section className="hourly-forecast">
            <h2>Next 24 hours</h2>
            <ul className="hourly-list">
                {hourly.time.map((time, index) => (
                        <li key={time} className="hourly-item">
                            <span>{index === 0 ? "Now" : time.slice(11, 16)}</span>
                            <WeatherIcon code={hourly.weather_code[index]} />
                            <span>{Math.round(hourly.temperature_2m[index])}°</span>
                        </li>
                ))}
            </ul>

        </section>
    )
}

export default HourlyForecast