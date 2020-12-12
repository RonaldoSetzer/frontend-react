import React from 'react';
import { useSelector } from 'react-redux';

import InputForm from '../../components/InputForm';
import WeatherCard from '../../components/WeatherCard';
import { ViewContainer } from '../../components/ui';

function Weather() {
  const { today, tomorrow, afertomorrow } = useSelector(
    state => state.forecast,
  );

  function handleSubmit(value) {
    console.log(value);
  }

  return (
    <ViewContainer>
      <InputForm placeholder="TYPE A CITE" handleSubmit={handleSubmit} />
      <WeatherCard day={today.label} temperature={today.temperature} />
      <WeatherCard day={tomorrow.label} temperature={tomorrow.temperature} />
      <WeatherCard
        day={afertomorrow.label}
        temperature={afertomorrow.temperature}
      />
    </ViewContainer>
  );
}

export default Weather;
