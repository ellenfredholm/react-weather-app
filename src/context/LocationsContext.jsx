import { createContext, useContext, useEffect, useState } from "react";

const LocationsContext = createContext(null);
const STORAGE_KEY = "weather-app-locations";

function loadLocations() {
    try {
        const saved = localStorage.getItem(STORAGE_KEY);
        return saved ? JSON.parse(saved) : [];
    } catch {
        return [];
    }
}

export function LocationsProvider({ children }) {
    const [locations, setLocations] = useState(loadLocations);


    useEffect(() => {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(locations))
    }, [locations]);

    function addLocation(location) {
        const newLocation = { ...location, id: Date.now().toString()}
        setLocations((prev) => [ ...prev, newLocation]);
    }

    function removeLocation(id) {
        setLocations((prev) => prev.filter((location) => location.id !== id))
    }

    function editLocation(id, changes) {
        setLocations((prev) => prev.map((location) => location.id === id ? { ...location, ...changes } : location))
    }

    return (
        <LocationsContext.Provider value={{ locations, addLocation, removeLocation, editLocation}}>
            {children}
        </LocationsContext.Provider>
    )
}

export function useLocations() {
    const context = useContext(LocationsContext);
    if (!context) {
        throw new Error("useLocations must be used inside LocationsProvider")
    }

    return context;
    
}