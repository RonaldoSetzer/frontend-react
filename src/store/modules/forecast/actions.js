export function requestForecast(city) {
  return {
    type: '@forecast/REQUEST',
    city,
  };
}

export function addForecast(city, forecasts) {
  return {
    type: '@forecast/ADD',
    city,
    forecasts,
  };
}
