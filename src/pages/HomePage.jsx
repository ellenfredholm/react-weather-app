import { useLocations } from "../context/LocationsContext.jsx";
import AddLocationForm from "../components/AddLocationForm.jsx";

function HomePage() {
  const { locations } = useLocations();

  return (
    <section>
      <h1>My locations</h1>
      <AddLocationForm />
      <ul>
        {locations.map((location) => (
          <li key={location.id}>{location.name} - {location.city} - {location.country}</li>
        ))}
      </ul>
    </section>
  );
}

export default HomePage
