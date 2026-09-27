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