import React from 'react';

import TodoInfo from './index';

export default {
  title: 'Components/TodoInfo',
  component: TodoInfo,
};

export const Default = () => <TodoInfo total="10" totalCompleted="3" />;
