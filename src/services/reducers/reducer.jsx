import { SWITCH } from "../actions/action";
const initialState = {
  toggle: false,
  data: [],
};

const reducer = (state = initialState, action) => {
  console.log(state.data);
  switch (action.type) {
    case SWITCH:
      return {
        ...state,
        toggle: !state.toggle,
        data: action.data,
      };
    default:
      return state;
  }
};

export default reducer;
