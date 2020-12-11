import React from 'react';

import useRouterTitle from '../../hooks/useRouterTitle';
import { Background, Container, Title, Menu, MenuItem, Line } from './styles';

function Header() {
  const { title } = useRouterTitle();

  return (
    <Background>
      <Container>
        <Title>{title}</Title>
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
