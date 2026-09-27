import { useState } from "react";
import { useLocations } from "../context/LocationsContext";
import { searchCity } from "../services/weatherApi";

function AddLocationForm() {
    const { locations, addLocation } = useLocations();
    const [city, setCity] = useState("");
    const [errors, setErrors] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    function getFormErrors() {
        const newErrors = {};

        if (!city.trim()) {
            newErrors.city = "Please enter a city";
        }

        return newErrors;

    }

    async function handleSubmit(event) {
        event.preventDefault();

        const newErrors = getFormErrors();
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

            const alreadySaved = locations.some((location) => location.latitude === place.latitude && location.longitude === place.longitude);

            if(alreadySaved) {
                setErrors({ city: "You have already saved this location"});
                return;
            }

            addLocation(place);
            setCity("");
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

            {errors.form && <p className="form-error">{errors.form}</p>}
            <button type="submit" disabled={isLoading}>{isLoading ? "Adding..." : "Add location"}</button>
        </form>
    )

}

export default AddLocationForm