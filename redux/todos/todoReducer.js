const {
  ADDED,
  USERIMAGE,
  SET_SELECTED_TODO,
  UPDATE_TODO,
  DELETED,
} = require("./actionTypes");
const { initialStateTodo } = require("./initailTodo");

const getNextTodoId = (todos) => {
  const maxId = todos.reduce((maxId, todo) => Math.max(todo.id, maxId), -1);
  return maxId + 1;
};

const todoReducer = (state = initialStateTodo, action) => {
  switch (action.type) {
    case ADDED:
      return [
        ...state,
        {
          id: getNextTodoId(state),
          ...action.payload,
        },
      ];
    case SET_SELECTED_TODO:
      return {
        ...state,
        selectedTodo: action.payload,
      };
    case DELETED:
      return state.filter((todo) => todo.id !== action.payload);

    default:
      return state;
  }
};

export default todoReducer;
