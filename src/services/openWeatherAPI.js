import axios from 'axios';
import queryString from 'querystring';

const {
  REACT_APP_OPEN_WEATHER_KEY,
  REACT_APP_OPEN_WEATHER_API_FORECAST,
} = process.env;

export function createUrl(baseUrl, params) {
  return baseUrl.concat('?', queryString.stringify(params));
}

export function getForecast(city) {
  const params = {
    q: city,
    APPID: REACT_APP_OPEN_WEATHER_KEY,
    cnt: 3,
    units: 'metric',
  };
  const url = createUrl(REACT_APP_OPEN_WEATHER_API_FORECAST, params);

  return axios
    .get(url)
    .then(({ data }) => {
      return data;
    })
    .catch(err => {
      return Promise.reject(err);
    });
}
