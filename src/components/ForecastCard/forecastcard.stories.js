import React from 'react';

import ForecastCard from './index';

export default {
  title: 'Components/ForecastCard',
  component: ForecastCard,
};

export const Default = () => (
  <ForecastCard
    city="Berlin"
    forecasts={[
      { label: 'TODAY', temperature: '35C' },
      { label: 'TOMORROW', temperature: '35C' },
      { label: 'AFTER TOMORROW', temperature: '35C' },
    ]}
  />
);
