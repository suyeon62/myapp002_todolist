import { useContext } from "react";
import { InputContext } from "../contexts/inputContext";

const Input3 = () => {
  const { insertTodo, input, inputRef, handleChangeText } =
    useContext(InputContext);
  return (
    <>
      <form onSubmit={insertTodo}>
        <input
          type="text"
          value={input}
          ref={inputRef}
          id="work"
          placeholder="오늘의 할일"
          onChange={handleChangeText}
        />
        <input type="submit" value="Create" />
      </form>
    </>
  );
};

export default Input3;
