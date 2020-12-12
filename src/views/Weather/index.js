import React from 'react';

import InputForm from '../../components/InputForm';
import WeatherCard from '../../components/WeatherCard';
import { ViewContainer } from '../../components/ui';

function Weather() {
  function handleSubmit(value) {
    console.log(value);
  }

  return (
    <ViewContainer>
      <InputForm placeholder="TYPE A CITE" handleSubmit={handleSubmit} />
      <WeatherCard day="TODAY" temperature="38.5C" />
      <WeatherCard day="TOMORROW" temperature="38.5C" />
      <WeatherCard day="AFTER TOMORROW" temperature="38.5C" />
    </ViewContainer>
  );
}

export default Weather;
