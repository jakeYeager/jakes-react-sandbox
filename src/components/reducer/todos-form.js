import { useReducer, useState } from "react";
import { TODO_ACTIONS } from "../globals/actions";
import Todo from "./todo";
import todoReducer from "./todo-reducer";

function TodosForm() {
  const [todos, dispatch] = useReducer(todoReducer, []);
  const [name, setName] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    dispatch({
      type: TODO_ACTIONS.ADD,
      payload: {
        name: name,
      },
    });
    setName("");
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type={"text"}
          value={name}
          onChange={(e) => setName(e.target.value)} />
      </form>
      {todos.length === 0 && (
        <h4>No Todos!</h4>
      )}
      {todos.map((todo) => {
        return <Todo key={todo.id} dispatch={dispatch} todo={todo} />;
      })}
    </>
  );
}

export default TodosForm;
