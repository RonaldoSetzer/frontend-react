import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Header from './index';

export default {
  title: 'Components/Header',
  component: Header,
};

export const Default = () => (
  <BrowserRouter>
    <Header />
  </BrowserRouter>
);
