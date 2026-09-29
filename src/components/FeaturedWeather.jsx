import { Link } from "react-router-dom";
import { useForecast } from "../hooks/useForecast";
import CurrentWeather from "./CurrentWeather";
import ErrorMessage from "./ErrorMessage";
import Loader from "./Loader";

function FeaturedWeather({ location }) {
  const { forecast, isLoading, error } = useForecast(location);

  return (
    <section className="featured-weather">
      {isLoading && <Loader />}
      {error && <ErrorMessage message={error} />}
      {forecast && ( <CurrentWeather current={forecast.current} title={`${location.city}, ${location.country}`}/> )}

      <Link to={`/location/${location.id}`} className="button-link">See full forecast</Link>
    </section>
  );
}

export default FeaturedWeather;