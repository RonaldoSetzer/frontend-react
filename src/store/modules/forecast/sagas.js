import { call, all, takeLatest } from 'redux-saga/effects';

import { getForecast } from '../../../services/openWeatherAPI';

function* requestForecast({ city }) {
  try {
    const payload = yield call(getForecast, city);

    if (payload) {
      console.log(payload);
    }
  } catch (err) {
    console.log(err);
  }
}

export default all([takeLatest('@forecast/REQUEST', requestForecast)]);
