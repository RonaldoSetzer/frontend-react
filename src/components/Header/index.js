import React from 'react';

import { Background, Container, Title, Menu, MenuItem, Line } from './styles';

function Header() {
  return (
    <Background>
      <Container>
        <Title>Home</Title>
        <Menu>
          <MenuItem>home</MenuItem>
          <MenuItem>todo</MenuItem>
          <MenuItem>about</MenuItem>
        </Menu>
      </Container>
      <Line />
    </Background>
  );
}

export default Header;
