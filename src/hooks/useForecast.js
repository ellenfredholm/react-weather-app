import { useEffect, useState } from "react";
import { getForecast } from "../services/weatherApi";

export function useForecast(location) {
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
  }, [location]);

  return { forecast, isLoading, error };
}