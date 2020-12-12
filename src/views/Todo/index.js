import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import InputForm from '../../components/InputForm';
import TodoList from '../../components/TodoList';

import { addTodo } from '../../store/modules/todos/actions';

function Todo() {
  const dispatch = useDispatch();
  const { todos, totalCompleted } = useSelector(state => state.todos);

  function handleSubmit(value) {
    dispatch(addTodo(value));
  }

  return (
    <>
      <InputForm placeholder="ADD TO DO" handleSubmit={handleSubmit} />
      <TodoList list={todos} totalCompleted={totalCompleted} />
    </>
  );
}

export default Todo;
