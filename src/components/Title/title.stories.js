import React from 'react';

import Title from './index';

export default {
  title: 'Common/Title',
  component: Title,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

export const Default = () => <Title title="Todo List" />;
