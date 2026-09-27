import { Link, useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { useLocations } from "../context/LocationsContext"
import { getForecast } from "../services/weatherApi"
import CurrentWeather from "../components/CurrentWeather"
import ErrorMessage from "../components/ErrorMessage"
import Loader from "../components/Loader"

function LocationPage() {
    const { id } = useParams();
    const { locations } = useLocations();
    const location = locations.find((item) => item.id === id);
    const [forecast, setForecast] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!location) {
            return;
        }

        async function loadForecast() {

            try {
                const data = await getForecast(location.latitude, location.longitude);
                setForecast(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setIsLoading(false);
            }
        }

        loadForecast();

    }, [location])

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
            <h1>{location.name}</h1>
            <p>{location.city}, {location.country}</p>
            {isLoading && <Loader />}
            {error && <ErrorMessage message={error} />}
            {forecast && <CurrentWeather current={forecast.current} />}
        </section>
    )

}

export default LocationPage