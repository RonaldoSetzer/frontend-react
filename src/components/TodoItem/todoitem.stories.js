import React from 'react';

import TodoItem from './index';

export default {
  title: 'Components/TodoItem',
  component: TodoItem,
};

export const Default = () => <TodoItem status="do" title="Todo 01" />;

export const Done = () => <TodoItem status="done" title="Todo completed" />;

export const Colorful = () => (
  <TodoItem color="#fabd2f" status="do" title="Todo completed" />
);
