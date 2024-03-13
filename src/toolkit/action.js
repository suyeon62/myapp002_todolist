import axios from "axios";
import { getTodoAction } from "./todoSlice";

function getTodos() {
  return async (dispatch) => {
    const data = await axios
      .get(`/todo/all`)
      .then((response) => {
        console.log("response:", response);
        return response.data;
      })
      .catch((error) => {
        console.log(error);
      });
    console.log("data:", data);
    dispatch(getTodoAction({ data }));
  };
}

function insertTodo(input) {
  return async () => {
    await axios
      .post("/todo", { todoname: input })
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  };
}

function updateTodo(id, completed) {
  //console.log(id, completed);
  return async () => {
    console.log("dd", id, completed);
    await axios.put(`/todo/${id}/${completed}`).then((response) => {
      console.log("put", response.data);
      return response.data;
    });
  };
}

function deleteTodo(id) {
  return async () => {
    await axios
      .delete(`todo/${id}`)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  };
}

export const todoAction = { getTodos, insertTodo, updateTodo, deleteTodo };
