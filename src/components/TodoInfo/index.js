import React from 'react';

import { Container, Title } from './styles';

function TodoList({ total, totalCompleted }) {
  return (
    <Container>
      <Title>Todo</Title>
      <span>
        {totalCompleted}/{total}
      </span>
    </Container>
  );
}

export default TodoList;
