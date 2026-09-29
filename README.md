# React Weather App
A mobile-first weather app built with React. Save locations and choose between them to display current weather, 24-hour forecast and 7-day forecast.

## Starting the app
git clone https://github.com/ellenfredholm/react-weather-app
npm install
npm run dev
Open url shown in terminal


## Requirements

### Component structure
The app har more than 5 components with their single responsibility.

### Routing
React Router connects four views. Homepage with current weather for chosen location, SavedLocationsPage (manage locations) with form to add new location and delete locations, LocationPage with detailed view of for one location and NotFoundPage for unknown URL:s. 

### State management
LocationsContext (shared state) holds the saved locations and the chosen location
The form's input value, validation errors and loading state are only in AddLocationForm (local state).

### External API
The geocoding API turns a city name into coordinates when a location is added.
The forecast API fetches current, hourly and daily weather.
If a request fails, a message is shown.
A loading message is shown while data is fetched.

### Form & validation
A form to add location (AddLocationForm). It validates that the field is not empty, the city exists and that the location isn't already saved.

### Persistence
Saved locations and the chosen location are stored in localStorage.



