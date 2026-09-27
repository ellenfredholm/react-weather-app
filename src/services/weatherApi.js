const GEOCODING_URL = "https://geocoding-api.open-meteo.com/v1/search";

export async function searchCity(cityName) {
    const url = `${GEOCODING_URL}?name=${encodeURIComponent(cityName)}&count=1&format=json`;
    // encodeURIComponent gör så att mellanrum och speciella tecken funkar i urlen
    const response = await fetch(url);

    if (!response.ok) {
        throw new Error("Could not reach weather service. Try again.");
    }

    const data = await response.json();

    if (!data.results || data.results.length === 0) {
        return null;
    }

    const place = data.results[0];

    return {
        city: place.name,
        country: place.country,
        latitude: place.latitude,
        longitude: place.longitude
    }
}

const FORECAST_URL = "https://api.open-meteo.com/v1/forecast";

export async function getForecast(latitude, longitude) {
    const params = new URLSearchParams({
        latitude,
        longitude,
        current: "temperature_2m,apparent_temperature,relative_humidity_2m,wind_speed_10m,weather_code",
        hourly: "temperature_2m,weather_code",
        daily: "weather_code,temperature_2m_max,temperature_2m_min",
        wind_speed_unit: "ms",
        timezone: "auto",
        forecast_days: 7,
    })

    const response = await fetch(`${FORECAST_URL}?${params}`);

    if (!response.ok) {
        throw new Error("Could not load weather, try again")
    }

    return response.json();
}