import React from 'react';

import TodoList from './index';

export default {
  title: 'Components/TodoList',
  component: TodoList,
};

export const Default = () => (
  <TodoList list={[1, 2, 3, 4, 5]} totalCompleted="3" />
);
