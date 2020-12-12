import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import InputForm from '../../components/InputForm';
import TodoInfo from '../../components/TodoInfo';
import TodoItem from '../../components/TodoItem';
import { Card } from '../../components/ui';

import { addTodo } from '../../store/modules/todos/actions';

function Todo() {
  const dispatch = useDispatch();
  const { todos, total, totalCompleted } = useSelector(state => state.todos);

  function handleSubmit(value) {
    dispatch(addTodo(value));
  }

  return (
    <>
      <InputForm placeholder="ADD TO DO" handleSubmit={handleSubmit} />
      <Card>
        <TodoInfo totalCompleted={totalCompleted} total={total} />
        <hr />
        {todos.map(({ id, title, status }) => (
          <TodoItem key={id} id={id} title={title} status={status} />
        ))}
      </Card>
    </>
  );
}

export default Todo;
