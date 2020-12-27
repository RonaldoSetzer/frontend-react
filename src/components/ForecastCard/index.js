import React from 'react';

import { Container, Content, Title, Temperature } from './styles';

function ForecastCard({ city, forecasts }) {
  return (
    <Container>
      <Title>{city}</Title>
      {forecasts &&
        forecasts.map(({ label, temperature }) => (
          <Content key={label}>
            <div />
            <Temperature>
              <strong>{label}</strong>
              <span>{temperature}</span>
            </Temperature>
          </Content>
        ))}
    </Container>
  );
}

export default ForecastCard;
