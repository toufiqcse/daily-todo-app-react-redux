const { createStore } = require("redux");
const { default: rootReducer } = require("./rootReducer");
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(rootReducer, composeWithDevTools());

export default store;
