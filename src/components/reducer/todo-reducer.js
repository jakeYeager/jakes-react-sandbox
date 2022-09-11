import { TODO_ACTIONS } from "../globals/actions";

export default function todoReducer(state, action) {
  function buildTodo(name) {
    return {
      id: Date.now(),
      name: name,
      complete: false,
    };
  }

  switch (action.type) {
    case TODO_ACTIONS.ADD:
      return [...state, buildTodo(action.payload.name)];

    case TODO_ACTIONS.TOGGLE:
      return state.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, complete: !todo.complete };
        }
        return todo;
      });

    case TODO_ACTIONS.DELETE:
      return state.filter((todo) => todo.id !== action.payload.id);

    default:
      return state;
  }
}
