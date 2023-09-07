import filterReducer from "./filter/reducer";
import todoReducer from "./todos/todoReducer";

const { combineReducers } = require("redux");

const rootReducer = combineReducers({
  todos: todoReducer,
  filters: filterReducer,
});

export default rootReducer;
