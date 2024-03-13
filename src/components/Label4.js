import React from "react";
import { useDispatch } from "react-redux";
import { todoAction } from "../toolkit/action";

const Label4 = (props) => {
  const { todo } = props;

  const dispatch = useDispatch();

  const updateTodo = async (id, completed) => {
    await dispatch(todoAction.updateTodo(id, completed));
    await dispatch(todoAction.getTodos());
  };

  const deleteTodo = async (id) => {
    await dispatch(todoAction.deleteTodo(id));
    await dispatch(todoAction.getTodos());
  };

  return (
    <>
      <h3>
        <label
          onClick={() => updateTodo(todo.id, todo.completed)}
          className={todo.completed === 1 ? "completed" : null}
        >
          {todo.todoname}
        </label>
        &nbsp;&nbsp;
        <button onClick={() => deleteTodo(todo.id)}>삭제</button>
      </h3>
    </>
  );
};

export default Label4;
