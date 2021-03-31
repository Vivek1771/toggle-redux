import { SWITCH } from "../actions/action";
const initialState = {
  toggle: true,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SWITCH:
      return {
        ...state,
        toggle: !state.toggle,
      };
    default:
      return state;
  }
};

export default reducer;
