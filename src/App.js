import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import styled from 'styled-components';

import GlobalStyles from './styles/global';
import Routes from './routes';
import Header from './components/Header';

import store from './store';

const Content = styled.main`
  margin: 1rem auto 0 auto;
  max-width: 700px;
  width: 100%;
`;

function App() {
  return (
    <Provider store={store}>
      <GlobalStyles />
      <BrowserRouter>
        <Header />
        <Content>
          <Routes />
        </Content>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
