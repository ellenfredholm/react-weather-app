import { Link } from "react-router-dom";
import { useForecast } from "../hooks/useForecast";
import CurrentWeather from "./CurrentWeather";
import ErrorMessage from "./ErrorMessage";
import Loader from "./Loader";

function FeaturedWeather({ location }) {
  const { forecast, isLoading, error } = useForecast(location);

  return (
    <section className="featured-weather">
      <h2>{location.city}</h2>
      <p>
        {location.country}
      </p>

      {isLoading && <Loader />}
      {error && <ErrorMessage message={error} />}
      {forecast && <CurrentWeather current={forecast.current} />}

      <Link to={`/location/${location.id}`}>See full forecast</Link>
    </section>
  );
}

export default FeaturedWeather;