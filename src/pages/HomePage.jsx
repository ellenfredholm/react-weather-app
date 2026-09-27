import AddLocationForm from "../components/AddLocationForm.jsx";
import LocationList from "../components/LocationList.jsx";

function HomePage() {

  return (
    <section>
      <h1>My locations</h1>
      <AddLocationForm />
      <LocationList />
    </section>
  );
}

export default HomePage
