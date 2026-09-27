import { useState } from "react";
import { useLocations } from "../context/LocationsContext";
import { searchCity } from "../services/weatherApi";

function AddLocationForm() {
    const { locations, addLocation } = useLocations();
    const [city, setCity] = useState("");
    const [name, setName] = useState("");
    const [errors, setErrors] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    function getFormErrors() {
        const newErrors = {};
        const trimmedName = name.trim();

        if (!city.trim()) {
            newErrors.city = "Please enter a city";
        }

        if (!trimmedName) {
            newErrors.name = "Give the location a name";
        } else if (trimmedName.length > 30) {
            newErrors.name = "The name can be max 30 characters";
        } else if (locations.some((location) => location.name.toLowerCase() === trimmedName.toLowerCase())) {
            newErrors.name = "You already have a location with that name"
        }

        return newErrors;

    }

    async function handleSubmit(event) {
        event.preventDefault();

        const newErrors = getFormErrors();
        console.log("errors:", newErrors)
        setErrors(newErrors);

        if (Object.keys(newErrors).length > 0) {
            return;
        }

        setIsLoading(true);

        try {
            const place = await searchCity(city.trim());

            if (!place) {
                setErrors({ city: "Could not find city"});
                return;
            }

            addLocation({ ...place, name: name.trim() });
            setCity("");
            setName("");
        } catch (error) {
            setErrors({ form: error.message })
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <form onSubmit={handleSubmit} className="add-location-form">
            <h2>Add a location</h2>

            <div className="form-field">
                <label htmlFor="city">City</label>
                <input id="city" type="text" value={city} onChange={(event) => setCity(event.target.value)} aria-invalid={Boolean(errors.city)}></input>
                {errors.city && <p className="field-error">{errors.city}</p>}
            </div>


            <div className="form-field">
                <label htmlFor="name">Name</label>
                <input id="name" type="text" placeholder="Home" value={name} onChange={(event) => setName(event.target.value)} aria-invalid={Boolean(errors.name)}></input>
                {errors.name && <p className="field-error">{errors.name}</p>}
            </div>
            {errors.form && <p className="form-error">{errors.form}</p>}
            <button type="submit" disabled={isLoading}>{isLoading ? "Adding..." : "Add location"}</button>
        </form>
    )

}

export default AddLocationForm