export function addTodo(title) {
  return {
    type: '@todo/add',
    title,
  };
}

export function toggleTodo(id) {
  return {
    type: '@todo/toggle',
    id,
  };
}
