import WeatherIcon from "./WeatherIcon";

function HourlyForecast({ hourly, currentTime }) {
    const currentHour = currentTime.slice(0, 13);
    const foundIndex = hourly.time.findIndex((time) => time.slice(0, 13) === currentHour);
    const startIndex = Math.max(foundIndex, 0);
    const nextHours = hourly.time.slice(startIndex, startIndex + 24);

    return (
        <section className="hourly-forecast">
            <h2>Next 24 hours</h2>
            <ul className="hourly-list">
                {nextHours.map((time, index) => {
                    const dataIndex = startIndex + index;
                    return (
                        <li key={time} className="hourly-item">
                            <span>{index === 0 ? "Now" : time.slice(11, 16)}</span>
                            <WeatherIcon code={hourly.weather_code[dataIndex]} />
                            <span>{Math.round(hourly.temperature_2m[dataIndex])}°</span>
                        </li>
                    )    
                })}
            </ul>

        </section>
    )
}

export default HourlyForecast