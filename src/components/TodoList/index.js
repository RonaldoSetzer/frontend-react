import React from 'react';

import { Card } from '../ui';
import { Head, Title, List } from './styles';

function TodoList({ list = [], totalCompleted }) {
  return (
    <Card>
      <Head>
        <Title>Todo</Title>
        <span>
          {totalCompleted}/{list.length}
        </span>
      </Head>
      <hr />
      <List>
        {list &&
          list.map(({ id, title, status }) => (
            <li key={id}>
              {title}:{status}
            </li>
          ))}
      </List>
    </Card>
  );
}

export default TodoList;
