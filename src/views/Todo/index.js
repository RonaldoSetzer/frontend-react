import React from 'react';

import InputForm from '../../components/InputForm';
import TodoList from '../../components/TodoList';

function Todo() {
  const todos = ['todo 01', 'todo 02', 'todo 03', 'todo 04', 'todo 05'];
  const totalCompleted = 3;

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
