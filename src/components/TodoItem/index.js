import React from 'react';

import { Container, Button, Content } from './styles';

function TodoItem({ title, status, color, handleDelete, handleToggle }) {
  function onToggle(e) {
    e.preventDefault();
    if (handleToggle) {
      handleToggle();
    }
  }

  function onDelete(e) {
    e.preventDefault();
    if (handleDelete) {
      handleDelete();
    }
  }

  return (
    <Container status={status} color={color}>
      <Button onClick={onToggle}>{status}</Button>
      <Content>{title}</Content>
      <Button onClick={onDelete}>del</Button>
    </Container>
  );
}

export default TodoItem;
