import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { Background, Container, Title, Menu, MenuItem, Line } from './styles';

function Header() {
  const [title, setTitle] = useState();
  const { pathname } = useLocation();

  useEffect(() => {
    const [slug] = pathname.split('/').filter(item => item);
    setTitle(slug);
  }, [pathname]);

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
