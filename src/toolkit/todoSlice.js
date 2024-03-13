import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todoList: [],
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    getTodoAction: (state, action) => {
      console.log("action:", action);
      state.todoList = action.payload.data;
    },
  },
});

console.log("todoSlice:", todoSlice);
export const { getTodoAction } = todoSlice.actions;
export default todoSlice.reducer;
