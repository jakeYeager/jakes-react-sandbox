import React from "react";
import { TODO_ACTIONS } from "../globals/actions";

export default function Todo({ todo, dispatch }) {
  return (
    <div style={{ marginBottom: "1rem" }}>
      <p>
        {todo.name} is{" "}
        <span style={{ color: todo.complete ? "green" : "red" }}>
          {todo.complete ? "complete" : "pending"}
        </span>
        .
      </p>
      <button
        onClick={() =>
          dispatch({
            type: TODO_ACTIONS.TOGGLE,
            payload: { id: todo.id },
          })
        }
      >
        Toggle
      </button>
      <button
        onClick={() =>
          dispatch({
            type: TODO_ACTIONS.DELETE,
            payload: { id: todo.id },
          })
        }
      >
        Delete
      </button>
    </div>
  );
}
