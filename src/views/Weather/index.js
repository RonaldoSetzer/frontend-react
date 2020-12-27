import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import InputForm from '../../components/InputForm';
import ForecastCard from '../../components/ForecastCard';
import { Card, ViewContainer } from '../../components/ui';

import { requestForecast } from '../../store/modules/forecast/actions';

function Weather() {
  const dispatch = useDispatch();
  const { cities } = useSelector(state => state.forecast);

  function handleSubmit(value) {
    dispatch(requestForecast(value));
  }

  return (
    <ViewContainer>
      <InputForm placeholder="TYPE A CITE" handleSubmit={handleSubmit} />
      <Card>
        {cities.map(item => (
          <ForecastCard
            key={item.id}
            city={item.city}
            forecasts={item.forecasts}
          />
        ))}
      </Card>
    </ViewContainer>
  );
}

export default Weather;
