import React from 'react';

import WeatherCard from './index';

export default {
  title: 'Components/WeatherCard',
  component: WeatherCard,
};

export const Default = () => <WeatherCard day="TODAY" temperature="30.0C" />;
