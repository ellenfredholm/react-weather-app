import WeatherIcon from "./WeatherIcon";

function formatDay(date, index) {
    if (index === 0) {
        return "Today";
    }

    return new Date(`${date}T12:00`).toLocaleDateString("en-GB", { weekday: "short" });
}

function DailyForecast({ daily }) {
    return (
        <section className="daily-forecast">
            <h2>7-day forecast</h2>
            <ul className="daily-list">
                {daily.time.map((date, index) => (
                    <li key={date} className="daily-item">
                        <span>{formatDay(date, index)}</span>
                        <WeatherIcon code={daily.weather_code[index]} />
                        <span>
                            {Math.round(daily.temperature_2m_max[index])}° /{" "}
                            {Math.round(daily.temperature_2m_min[index])}°
                        </span>
                    </li>
                ))}
            </ul>
        </section>
    )
}

export default DailyForecast