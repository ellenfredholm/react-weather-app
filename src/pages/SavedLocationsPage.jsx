import AddLocationForm from "../components/AddLocationForm";
import LocationList from "../components/LocationList";

function SavedLocationsPage() {
  return (
    <section>
        <LocationList />
        <AddLocationForm />
    </section>
  );
}

export default SavedLocationsPage;
