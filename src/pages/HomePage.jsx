import { useLocations } from "../context/LocationsContext.jsx";

function HomePage() {
  const { locations, addLocation } = useLocations();

  return (
    <section>
      <h1>My locations</h1>
      <button
        onClick={() =>
          addLocation({
            name: "Test",
            city: "Stockholm",
            country: "Sweden",
            latitude: 59.33,
            longitude: 18.07,
          })
        }
      >
        Add test location
      </button>
      <p>{locations.length} saved</p>
    </section>
  );
}

export default HomePage
