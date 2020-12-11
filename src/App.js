import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import styled from 'styled-components';

import GlobalStyles from './styles/global';
import Routes from './routes';
import Header from './components/Header';

const Content = styled.main`
  margin: 1rem auto 0 auto;
  max-width: 700px;
  width: 100%;
`;

function App() {
  return (
    <div>
      <GlobalStyles />
      <BrowserRouter>
        <Header />
        <Content>
          <Routes />
        </Content>
      </BrowserRouter>
    </div>
  );
}

export default App;
