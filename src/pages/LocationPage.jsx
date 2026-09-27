import { Link, useParams } from "react-router-dom"
import { useLocations } from "../context/LocationsContext"
import CurrentWeather from "../components/CurrentWeather"
import DailyForecast from "../components/DailyForecast"
import HourlyForecast from "../components/HourlyForecast"
import ErrorMessage from "../components/ErrorMessage"
import Loader from "../components/Loader"
import { useForecast } from "../hooks/useForecast"

function LocationPage() {
    const { id } = useParams();
    const { locations } = useLocations();
    const location = locations.find((item) => item.id === id);
    const { forecast, isLoading, error } = useForecast(location);

    if (!location) {
        return (
            <section>
                <h1>Location not found</h1>
                <Link to="/">Back to my locations</Link>
            </section>
        )
    }

    return (
        <section>
            <Link to="/">Back</Link>
            <h1>{location.city}</h1>
            <p>{location.country}</p>
            {isLoading && <Loader />}
            {error && <ErrorMessage message={error} />}
            {forecast && (
                <>
                <CurrentWeather current={forecast.current} />
                <HourlyForecast hourly={forecast.hourly} />
                <DailyForecast daily={forecast.daily} />
                </>
            )}
        </section>
    )

}

export default LocationPage