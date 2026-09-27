const weatherCodes = {
  0: { description: "Clear sky", icon: "☀️" },
  1: { description: "Mainly clear", icon: "🌤️" },
  2: { description: "Partly cloudy", icon: "⛅" },
  3: { description: "Overcast", icon: "☁️" },
  45: { description: "Fog", icon: "🌫️" },
  48: { description: "Freezing fog", icon: "🌫️" },
  51: { description: "Light drizzle", icon: "🌦️" },
  53: { description: "Drizzle", icon: "🌦️" },
  55: { description: "Heavy drizzle", icon: "🌧️" },
  56: { description: "Light freezing drizzle", icon: "🌧️" },
  57: { description: "Freezing drizzle", icon: "🌧️" },
  61: { description: "Light rain", icon: "🌦️" },
  63: { description: "Rain", icon: "🌧️" },
  65: { description: "Heavy rain", icon: "🌧️" },
  66: { description: "Light freezing rain", icon: "🌧️" },
  67: { description: "Freezing rain", icon: "🌧️" },
  71: { description: "Light snow", icon: "🌨️" },
  73: { description: "Snow", icon: "🌨️" },
  75: { description: "Heavy snow", icon: "❄️" },
  77: { description: "Snow grains", icon: "🌨️" },
  80: { description: "Light showers", icon: "🌦️" },
  81: { description: "Showers", icon: "🌧️" },
  82: { description: "Heavy showers", icon: "🌧️" },
  85: { description: "Light snow showers", icon: "🌨️" },
  86: { description: "Snow showers", icon: "❄️" },
  95: { description: "Thunderstorm", icon: "⛈️" },
  96: { description: "Thunderstorm with hail", icon: "⛈️" },
  99: { description: "Thunderstorm with heavy hail", icon: "⛈️" },
};

export function getWeatherInfo(code) {
  return weatherCodes[code] ?? { description: "Unknown", icon: "❓" };
}