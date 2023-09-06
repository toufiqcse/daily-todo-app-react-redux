import {
  ADDED,
  DELETED,
  SET_SELECTED_TODO,
  TODOIMAGE,
  UPDATE_TASK,
  UPDATE_TODO,
} from "./actionTypes";

export const addedTodo = (todoData) => {
  return {
    type: ADDED,
    payload: todoData,
  };
};

export const setSelectedTodo = (todo) => {
  return {
    type: SET_SELECTED_TODO,
    payload: todo,
  };
};

export const deleteTodo = (todoId) => {
  return {
    type: DELETED,
    payload: todoId,
  };
};
