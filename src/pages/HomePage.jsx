import AddLocationForm from "../components/AddLocationForm.jsx";
import LocationList from "../components/LocationList.jsx";
import FeaturedWeather from "../components/FeaturedWeather.jsx";
import { useLocations } from "../context/LocationsContext.jsx";

function HomePage() {
  const { locations, selectedId, setSelectedId } = useLocations();
  const selectedLocation = locations.find((location) => location.id === selectedId) ?? locations[0];
  

  return (
    <section>
      <h1>Weather</h1>
       {selectedLocation && (
        <>
          <div className="form-field">
            <label htmlFor="selected-location">Show weather for</label>
            <select
              id="selected-location"
              value={selectedLocation.id}
              onChange={(event) => setSelectedId(event.target.value)}
            >
              {locations.map((location) => (
                <option key={location.id} value={location.id}>
                  {location.city}, {location.country}
                </option>
              ))}
            </select>
          </div>

          <FeaturedWeather
            key={selectedLocation.id}
            location={selectedLocation}
          />
        </>
      )}


      <AddLocationForm />
      <LocationList />
    </section>
  );
}

export default HomePage
