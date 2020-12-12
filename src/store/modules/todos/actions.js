export function addTodo(title) {
  return {
    type: '@todo/add',
    title,
  };
}

export function removeTodo(id) {
  return {
    type: '@todo/remove',
    id,
  };
}

export function toggleTodo(id) {
  return {
    type: '@todo/toggle',
    id,
  };
}
