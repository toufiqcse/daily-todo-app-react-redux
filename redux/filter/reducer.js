const { STATUSCHANGED, DATEFILTER } = require("./actionTypes");
const { default: initialStateFilter } = require("./initailStateFilter");

const filterReducer = (state = initialStateFilter, action) => {
  switch (action.type) {
    case STATUSCHANGED:
      return {
        ...state,
        status: action.payload,
      };

    default:
      return state;
  }
};

export default filterReducer;
