export function requestForecast(city) {
  return {
    type: '@forecast/REQUEST',
    city,
  };
}
