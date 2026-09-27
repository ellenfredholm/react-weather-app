import { Link } from "react-router-dom";
import { useLocations } from "../context/LocationsContext";

function LocationCard({ location }) {
    const { removeLocation } = useLocations();

    return (
        <li className="location-card">
            <Link to={`/location/${location.id}`} className="location-card-link">
                <h3>{location.city}</h3>
                <p>{location.country}</p>
            </Link>
            <button type="button" onClick={() => removeLocation(location.id)} aria-label={`Remove ${location.city}`}>Remove</button>
        </li>
    )
}

export default LocationCard