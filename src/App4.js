import React, { useEffect } from "react";
import "./App.css";
import { useDispatch } from "react-redux";
import Todo4 from "./components/Todo4";
import { todoAction } from "./toolkit/action";
import Input4 from "./components/Input4";

//전역상태관리 중에 하나인 React-Redux ToolkitI 로 리팩토링
const App4 = () => {
  const wrap = {
    width: "500px",
    border: "1px solid black",
    margin: "10px auto",
  };

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(todoAction.getTodos());
  }, []);

  return (
    <div className="App" style={wrap}>
      <h1>TODO LIST</h1>
      <Input4 />
      <Todo4 />
    </div>
  );
};

export default App4;
