import React from 'react';

import { Container, Button, Content } from './styles';

function TodoItem({ id, title, status, color }) {
  function handleToggleStatus(e) {
    e.preventDefault();
    console.log('toggle', id);
  }

  function handleDelete(e) {
    e.preventDefault();
    console.log('delete', id);
  }

  return (
    <Container status={status} color={color}>
      <Button onClick={handleToggleStatus}>{status}</Button>
      <Content>{title}</Content>
      <Button onClick={handleDelete}>del</Button>
    </Container>
  );
}

export default TodoItem;
