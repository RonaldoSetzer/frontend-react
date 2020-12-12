export function addTodo(title) {
  return {
    type: '@todo/add',
    title,
  };
}
