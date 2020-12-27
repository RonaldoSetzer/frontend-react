import { call, all, put, takeLatest } from 'redux-saga/effects';

import { getForecast } from '../../../services/openWeatherAPI';
import { mapForecast } from '../../../helpers/forecast';

import { addForecast } from './actions';

function* requestForecast({ city }) {
  try {
    const payload = yield call(getForecast, city);

    if (payload) {
      const forecasts = mapForecast(payload.list);
      yield put(addForecast(city, forecasts));
    }
  } catch (err) {
    console.log(err);
  }
}

export default all([takeLatest('@forecast/REQUEST', requestForecast)]);
