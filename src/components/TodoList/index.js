import React from 'react';

import TodoItem from '../TodoItem';
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
            <TodoItem key={id} id={id} title={title} status={status} />
          ))}
      </List>
    </Card>
  );
}

export default TodoList;
