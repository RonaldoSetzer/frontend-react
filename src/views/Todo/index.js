import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import InputForm from '../../components/InputForm';
import TodoInfo from '../../components/TodoInfo';
import TodoItem from '../../components/TodoItem';
import { Card, ViewContainer } from '../../components/ui';

import {
  addTodo,
  removeTodo,
  toggleTodo,
} from '../../store/modules/todos/actions';

function Todo() {
  const dispatch = useDispatch();
  const { todos, total, totalCompleted } = useSelector(state => state.todos);

  function handleSubmit(value) {
    dispatch(addTodo(value));
  }

  function handleRemoveTodo(id) {
    dispatch(removeTodo(id));
  }

  function handleToggleTodo(id) {
    dispatch(toggleTodo(id));
  }

  return (
    <ViewContainer>
      <InputForm placeholder="ADD TO DO" handleSubmit={handleSubmit} />
      <Card>
        <TodoInfo totalCompleted={totalCompleted} total={total} />
        <hr />
        {todos.map(({ id, title, status }) => (
          <TodoItem
            key={id}
            title={title}
            status={status}
            handleToggle={() => handleToggleTodo(id)}
            handleRemove={() => handleRemoveTodo(id)}
          />
        ))}
      </Card>
    </ViewContainer>
  );
}

export default Todo;
