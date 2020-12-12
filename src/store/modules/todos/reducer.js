import produce from 'immer';
import { v4 as uuidv4 } from 'uuid';

const initialState = {
  todos: [
    { id: 1, title: 'todo 01', status: 'do' },
    { id: 2, title: 'todo 02', status: 'do' },
    { id: 3, title: 'todo 03', status: 'do' },
    { id: 4, title: 'todo 04', status: 'done' },
    { id: 5, title: 'todo 05', status: 'done' },
  ],
  totalCompleted: 2,
  total: 5,
};

function todo(state = initialState, action) {
  switch (action.type) {
    case '@todo/add':
      return produce(state, draft => {
        draft.todos.push({
          id: uuidv4(),
          title: action.title,
          status: 'do',
        });
      });

    default:
      return state;
  }
}

export default todo;
