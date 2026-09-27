import { useLocations } from "../context/LocationsContext";
import LocationCard from "./LocationCard";

function LocationList() {
    const { locations } = useLocations();

    if (locations.length === 0) {
        return <p className="empty-message">No saved locations</p>
    }

    return (
        <ul className="location-list">
            {locations.map((location) => (<LocationCard key={location.id} location={location} />))}
        </ul>
    )
}

export default LocationList