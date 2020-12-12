import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyles from './styles/global';
import Routes from './routes';
import Header from './components/Header';

import store from './store';

function App() {
  return (
    <Provider store={store}>
      <GlobalStyles />
      <BrowserRouter>
        <Header />
        <Routes />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
