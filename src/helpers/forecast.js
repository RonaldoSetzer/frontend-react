export function extractTemperature({ temp }) {
  return temp || 'N/A';
}

export function mapForecast(list) {
  const labels = ['TODAY', 'TOMORROW', 'AFTER TOMORROW'];
  return list.map((item, index) => {
    return {
      label: labels[index],
      temperature: extractTemperature(item?.main),
    };
  });
}
