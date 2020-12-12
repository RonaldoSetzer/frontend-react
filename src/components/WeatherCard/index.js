import React from 'react';

import { Container } from './styles';

function WeatherCard({ day, temperature }) {
  return (
    <Container>
      <strong>{day}</strong>
      <span>{temperature}</span>
    </Container>
  );
}

export default WeatherCard;
