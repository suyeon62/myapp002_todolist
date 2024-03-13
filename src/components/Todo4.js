import React from "react";
import Label4 from "./Label4";
import { useSelector } from "react-redux";

const Todo4 = () => {
  const todos = useSelector((state) => state.todos.todoList);

  return (
    <>
      {todos &&
        todos.map((todo) => {
          return (
            <div className="todo" key={todo.id}>
              <Label4 todo={todo} />
            </div>
          );
        })}
    </>
  );
};

export default Todo4;
