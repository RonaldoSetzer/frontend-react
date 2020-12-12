import React from 'react';
import { useDispatch } from 'react-redux';

import { Container, Button, Content } from './styles';
import { toggleTodo, removeTodo } from '../../store/modules/todos/actions';

function TodoItem({ id, title, status, color }) {
  const dispatch = useDispatch();

  function handleToggleStatus(e) {
    e.preventDefault();
    dispatch(toggleTodo(id));
  }

  function handleDelete(e) {
    e.preventDefault();
    dispatch(removeTodo(id));
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
