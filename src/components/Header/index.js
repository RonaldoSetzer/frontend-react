import React from 'react';

import { Background, Container, Title, Menu, MenuItem } from './styles';

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
    </Background>
  );
}

export default Header;
