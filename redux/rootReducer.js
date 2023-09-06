const { combineReducers } = require("redux");
const { default: todoReducer } = require("./todos/todoReducer");
const { default: filterReducer } = require("./filter/reducer");

const rootReducer = combineReducers({
  todos: todoReducer,
  filters: filterReducer,
});

export default rootReducer;
