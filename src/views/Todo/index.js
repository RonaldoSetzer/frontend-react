import React from 'react';
import { useSelector } from 'react-redux';

import InputForm from '../../components/InputForm';
import TodoList from '../../components/TodoList';

function Todo() {
  const { todos, totalCompleted } = useSelector(state => state.todos);

  function handleSubmit(value) {
    console.log(value);
  }

  return (
    <>
      <InputForm placeholder="ADD TO DO" handleSubmit={handleSubmit} />
      <TodoList list={todos} totalCompleted={totalCompleted} />
    </>
  );
}

export default Todo;
