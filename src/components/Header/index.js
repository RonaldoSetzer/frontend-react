import React from 'react';
import { Link } from 'react-router-dom';

import useRouterTitle from '../../hooks/useRouterTitle';
import { Background, Container, Title, Menu, MenuItem, Line } from './styles';

function Header() {
  const { title } = useRouterTitle();

  return (
    <Background>
      <Container>
        <Title>{title}</Title>
        <Menu>
          <MenuItem>
            <Link to="/">home</Link>
          </MenuItem>
          <MenuItem>
            <Link to="/todo">todo</Link>
          </MenuItem>
          <MenuItem>
            <Link to="/Weather">weather</Link>
          </MenuItem>
          <MenuItem>
            <Link to="/about">about</Link>
          </MenuItem>
        </Menu>
      </Container>
      <Line />
    </Background>
  );
}

export default Header;
